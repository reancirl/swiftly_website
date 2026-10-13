"use server";

import "server-only";
import { headers } from "next/headers";
import { z } from "zod";
import {
  AUDIENCE_OPTIONS,
  TOPIC_OPTIONS,
  EXPERIENCE_OPTIONS,
  FORMAT_OPTIONS,
  labelFor,
} from "./options";

const WAITLIST_RECIPIENT =
  process.env.WAITLIST_RECIPIENT ?? "reancirl@gmail.com";
const RESEND_ENDPOINT = "https://api.resend.com/emails";
const TURNSTILE_ENDPOINT =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

// Must match the widget's data-action on the form.
const TURNSTILE_ACTION = "waitlist";
// Optional defense-in-depth: set TURNSTILE_HOSTNAMES (comma-separated) to
// enforce the frontend host. Left empty, we rely on the widget's own hostname
// allowlist configured in Cloudflare.
const ALLOWED_HOSTNAMES = (process.env.TURNSTILE_HOSTNAMES ?? "")
  .split(",")
  .map((h) => h.trim())
  .filter(Boolean);

const audienceValues = AUDIENCE_OPTIONS.map((o) => o.value) as [
  string,
  ...string[],
];
const topicValues = TOPIC_OPTIONS.map((o) => o.value) as [string, ...string[]];
const experienceValues = EXPERIENCE_OPTIONS.map((o) => o.value) as [
  string,
  ...string[],
];
const formatValues = FORMAT_OPTIONS.map((o) => o.value) as [
  string,
  ...string[],
];

const WaitlistSchema = z.object({
  name: z.string().min(2, "Please enter your name.").max(120),
  email: z.string().email("Please enter a valid email address."),
  audience: z.enum(audienceValues, {
    message: "Tell us which best describes you.",
  }),
  topics: z
    .array(z.enum(topicValues))
    .min(1, "Pick at least one thing you'd like to learn."),
  experience: z.enum(experienceValues).optional().or(z.literal("")),
  format: z.enum(formatValues).optional().or(z.literal("")),
  goal: z.string().max(2000).optional().or(z.literal("")),
  turnstileToken: z.string().min(1, "Please complete the security check."),
  // honeypot
  website: z.string().max(0).optional(),
});

type WaitlistData = z.infer<typeof WaitlistSchema>;

export type WaitlistState = {
  status: "idle" | "ok" | "error";
  message?: string;
  fieldErrors?: Partial<Record<string, string>>;
  values?: {
    name?: string;
    email?: string;
    audience?: string;
    topics?: string[];
    experience?: string;
    format?: string;
    goal?: string;
  };
};

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character] ?? character,
  );
}

async function verifyTurnstile(token: string, remoteip?: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    throw new Error("TURNSTILE_SECRET_KEY is not configured.");
  }

  const body = new URLSearchParams({ secret, response: token });
  if (remoteip) body.set("remoteip", remoteip);

  const response = await fetch(TURNSTILE_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    cache: "no-store",
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) {
    const errorBody = await response.text().catch(() => "");
    console.error(
      "[waitlist] Turnstile HTTP error",
      response.status,
      errorBody.slice(0, 300),
    );
    throw new Error("Turnstile verification request failed.");
  }

  const result = (await response.json()) as {
    success: boolean;
    action?: string;
    hostname?: string;
    "error-codes"?: string[];
  };

  if (!result.success) {
    console.error("[waitlist] Turnstile failed", result["error-codes"]);
    return false;
  }

  if (result.action && result.action !== TURNSTILE_ACTION) {
    console.error("[waitlist] Turnstile action mismatch", result.action);
    return false;
  }

  if (
    ALLOWED_HOSTNAMES.length > 0 &&
    result.hostname &&
    !ALLOWED_HOSTNAMES.includes(result.hostname)
  ) {
    console.error("[waitlist] Turnstile hostname not allowed", result.hostname);
    return false;
  }

  return true;
}

async function sendSignup(data: WaitlistData) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  const audience = labelFor(AUDIENCE_OPTIONS, data.audience);
  const topics = data.topics.map((t) => labelFor(TOPIC_OPTIONS, t));
  const experience = data.experience
    ? labelFor(EXPERIENCE_OPTIONS, data.experience)
    : "Not provided";
  const format = data.format
    ? labelFor(FORMAT_OPTIONS, data.format)
    : "Not provided";
  const goal = data.goal || "Not provided";
  const from =
    process.env.CONTACT_FROM_EMAIL ??
    "Swiftlyph Academy <onboarding@resend.dev>";

  const text = [
    "New Swiftly Academy waitlist signup",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Audience: ${audience}`,
    `Wants to learn: ${topics.join(", ")}`,
    `Experience: ${experience}`,
    `Preferred format: ${format}`,
    "",
    "Goal:",
    goal,
  ].join("\n");

  const row = (label: string, value: string) =>
    `<tr><td style="padding: 8px 12px; border-bottom: 1px solid #e6dfcf; font-weight: 700;">${label}</td><td style="padding: 8px 12px; border-bottom: 1px solid #e6dfcf;">${value}</td></tr>`;

  const html = `
    <div style="font-family: Arial, sans-serif; color: #17211b; line-height: 1.6; max-width: 680px; margin: 0 auto;">
      <h1 style="color: #076b4c; font-size: 24px; margin-bottom: 24px;">New Swiftly Academy waitlist signup</h1>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
        <tbody>
          ${row("Name", escapeHtml(data.name))}
          ${row("Email", `<a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a>`)}
          ${row("Audience", escapeHtml(audience))}
          ${row("Wants to learn", escapeHtml(topics.join(", ")))}
          ${row("Experience", escapeHtml(experience))}
          ${row("Preferred format", escapeHtml(format))}
        </tbody>
      </table>
      <h2 style="color: #076b4c; font-size: 18px;">Goal</h2>
      <p style="white-space: pre-wrap;">${escapeHtml(goal)}</p>
    </div>
  `;

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [WAITLIST_RECIPIENT],
      reply_to: data.email,
      subject: `Academy waitlist: ${audience} — ${topics.join(", ")}`,
      text,
      html,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    const providerMessage = (await response.text()).slice(0, 500);
    console.error("[waitlist] Resend rejected the signup", {
      status: response.status,
      providerMessage,
    });
    throw new Error("The email provider rejected the signup.");
  }
}

export async function submitWaitlist(
  _prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const topics = formData.getAll("topics").map(String);
  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    audience: String(formData.get("audience") ?? ""),
    topics,
    experience: String(formData.get("experience") ?? ""),
    format: String(formData.get("format") ?? ""),
    goal: String(formData.get("goal") ?? ""),
    turnstileToken: String(formData.get("cf-turnstile-response") ?? ""),
    website: String(formData.get("website") ?? ""),
  };

  const parsed = WaitlistSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: WaitlistState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0]);
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {
      status: "error",
      message: "Please review the highlighted fields.",
      fieldErrors,
      values: raw,
    };
  }

  // Honeypot triggered: pretend success.
  if (parsed.data.website) {
    return { status: "ok" };
  }

  try {
    const hdrs = await headers();
    const remoteip =
      hdrs.get("x-forwarded-for")?.split(",")[0]?.trim() || undefined;
    const captchaOk = await verifyTurnstile(
      parsed.data.turnstileToken,
      remoteip,
    );

    if (!captchaOk) {
      return {
        status: "error",
        message: "Please complete the security check and try again.",
        values: raw,
      };
    }

    await sendSignup(parsed.data);
  } catch (error) {
    console.error(
      "[waitlist] failed to deliver signup",
      error instanceof Error ? error.message : "Unknown error",
    );
    return {
      status: "error",
      message:
        "We couldn't add you to the waitlist right now. Please try again in a moment.",
      values: raw,
    };
  }

  return { status: "ok" };
}
