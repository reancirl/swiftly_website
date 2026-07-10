"use server";

import "server-only";
import { z } from "zod";

const CONTACT_RECIPIENT = "reancirl@gmail.com";
const RESEND_ENDPOINT = "https://api.resend.com/emails";
const TURNSTILE_ENDPOINT =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

const serviceLabels = {
  tech: "Development",
  seo: "SEO strategy",
  content: "Content production",
  all: "All three",
  unsure: "Not sure yet",
} as const;

const budgetLabels = {
  "under-15k": "Under $15k",
  "15k-40k": "$15k – $40k",
  "40k-100k": "$40k – $100k",
  "100k-plus": "$100k+",
  unsure: "Not sure yet",
} as const;

const ContactSchema = z.object({
  name: z.string().min(2, "Please enter your name.").max(120),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().max(160).optional().or(z.literal("")),
  service: z.enum(["tech", "seo", "content", "all", "unsure"], {
    message: "Pick the service that fits best.",
  }),
  budget: z.enum(
    [
      "under-15k",
      "15k-40k",
      "40k-100k",
      "100k-plus",
      "unsure",
    ],
    { message: "Pick a budget range." },
  ),
  message: z
    .string()
    .min(20, "Please give us a bit more context — at least 20 characters.")
    .max(4000),
  turnstileToken: z.string().min(1, "Please complete the security check."),
  // honeypot
  website: z.string().max(0).optional(),
});

export type ContactState = {
  status: "idle" | "ok" | "error";
  message?: string;
  fieldErrors?: Partial<Record<keyof z.infer<typeof ContactSchema>, string>>;
  values?: Partial<Record<keyof z.infer<typeof ContactSchema>, string>>;
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

async function verifyTurnstile(token: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    throw new Error("TURNSTILE_SECRET_KEY is not configured.");
  }

  const response = await fetch(TURNSTILE_ENDPOINT, {
    method: "POST",
    body: new URLSearchParams({
      secret,
      response: token,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Turnstile verification request failed.");
  }

  const result = (await response.json()) as {
    success: boolean;
    "error-codes"?: string[];
  };

  if (!result.success) {
    console.error("[contact] Turnstile failed", result["error-codes"]);
    return false;
  }

  return true;
}
async function sendInquiry(data: z.infer<typeof ContactSchema>) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  const service = serviceLabels[data.service];
  const budget = budgetLabels[data.budget];
  const company = data.company || "Not provided";
  const subjectCompany = data.company ? ` — ${data.company}` : "";
  const from =
    process.env.CONTACT_FROM_EMAIL ??
    "Swiftlyph Contact <onboarding@resend.dev>";

  const text = [
    "New Swiftlyph project inquiry",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Company: ${company}`,
    `Service: ${service}`,
    `Budget: ${budget}`,
    "",
    "Project details:",
    data.message,
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; color: #17211b; line-height: 1.6; max-width: 680px; margin: 0 auto;">
      <h1 style="color: #076b4c; font-size: 24px; margin-bottom: 24px;">New Swiftlyph project inquiry</h1>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
        <tbody>
          <tr><td style="padding: 8px 12px; border-bottom: 1px solid #e6dfcf; font-weight: 700;">Name</td><td style="padding: 8px 12px; border-bottom: 1px solid #e6dfcf;">${escapeHtml(data.name)}</td></tr>
          <tr><td style="padding: 8px 12px; border-bottom: 1px solid #e6dfcf; font-weight: 700;">Email</td><td style="padding: 8px 12px; border-bottom: 1px solid #e6dfcf;"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
          <tr><td style="padding: 8px 12px; border-bottom: 1px solid #e6dfcf; font-weight: 700;">Company</td><td style="padding: 8px 12px; border-bottom: 1px solid #e6dfcf;">${escapeHtml(company)}</td></tr>
          <tr><td style="padding: 8px 12px; border-bottom: 1px solid #e6dfcf; font-weight: 700;">Service</td><td style="padding: 8px 12px; border-bottom: 1px solid #e6dfcf;">${escapeHtml(service)}</td></tr>
          <tr><td style="padding: 8px 12px; border-bottom: 1px solid #e6dfcf; font-weight: 700;">Budget</td><td style="padding: 8px 12px; border-bottom: 1px solid #e6dfcf;">${escapeHtml(budget)}</td></tr>
        </tbody>
      </table>
      <h2 style="color: #076b4c; font-size: 18px;">Project details</h2>
      <p style="white-space: pre-wrap;">${escapeHtml(data.message)}</p>
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
      to: [CONTACT_RECIPIENT],
      reply_to: data.email,
      subject: `New inquiry: ${service}${subjectCompany}`,
      text,
      html,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    const providerMessage = (await response.text()).slice(0, 500);
    console.error("[contact] Resend rejected the inquiry", {
      status: response.status,
      providerMessage,
    });
    throw new Error("The email provider rejected the inquiry.");
  }
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    company: String(formData.get("company") ?? ""),
    service: String(formData.get("service") ?? ""),
    budget: String(formData.get("budget") ?? ""),
    message: String(formData.get("message") ?? ""),
    turnstileToken: String(formData.get("cf-turnstile-response") ?? ""),
    website: String(formData.get("website") ?? ""),
  };

  const parsed = ContactSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: ContactState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof z.infer<typeof ContactSchema>;
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
  const captchaOk = await verifyTurnstile(parsed.data.turnstileToken);

  if (!captchaOk) {
    return {
      status: "error",
      message: "Please complete the security check and try again.",
      values: raw,
    };
  }

  await sendInquiry(parsed.data);
} catch (error) {
    console.error(
      "[contact] failed to deliver inquiry",
      error instanceof Error ? error.message : "Unknown error",
    );
    return {
      status: "error",
      message:
        "We couldn't send your inquiry right now. Please try again or email us directly.",
      values: raw,
    };
  }

  return { status: "ok" };
}
