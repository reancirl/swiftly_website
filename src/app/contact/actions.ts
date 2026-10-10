"use server";

import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(2, "Please enter your name.").max(120),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().max(160).optional().or(z.literal("")),
  engagement: z.enum(["custom", "subscription", "fde", "unsure"], {
    message: "Tell us which engagement fits best.",
  }),
  budget: z.enum(
    [
      "subscription",
      "under-15k",
      "15k-40k",
      "40k-100k",
      "100k-plus",
      "unsure",
    ],
    { message: "Pick a budget or engagement." },
  ),
  message: z
    .string()
    .min(20, "Please give us a bit more context — at least 20 characters.")
    .max(4000),
  // honeypot
  website: z.string().max(0).optional(),
});

export type ContactState = {
  status: "idle" | "ok" | "error";
  message?: string;
  fieldErrors?: Partial<Record<keyof z.infer<typeof ContactSchema>, string>>;
  values?: Partial<Record<keyof z.infer<typeof ContactSchema>, string>>;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    company: String(formData.get("company") ?? ""),
    engagement: String(formData.get("engagement") ?? ""),
    budget: String(formData.get("budget") ?? ""),
    message: String(formData.get("message") ?? ""),
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

  // In a real deployment this is where we'd call an email/CRM provider.
  // For now we log on the server so the action is verifiably executed.
  console.info("[contact] new inquiry", {
    name: parsed.data.name,
    email: parsed.data.email,
    engagement: parsed.data.engagement,
    budget: parsed.data.budget,
  });

  return { status: "ok" };
}
