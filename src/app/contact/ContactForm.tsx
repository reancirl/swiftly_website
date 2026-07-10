"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import Script from "next/script";
import { ArrowRight } from "lucide-react";
import { submitContact, type ContactState } from "./actions";
import { Input, Textarea, Select, Label } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { GoldDivider } from "@/components/brand/GoldDivider";

const initial: ContactState = { status: "idle" };
const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      variant="primary"
      size="lg"
      disabled={pending}
      aria-disabled={pending}
    >
      {pending ? "Sending…" : "Send inquiry"}
      <ArrowRight size={16} />
    </Button>
  );
}

function FieldError({ children }: { children?: string }) {
  if (!children) return null;
  return (
    <p
      role="alert"
      className="mt-2 text-xs uppercase tracking-[0.15em] text-red-700"
    >
      {children}
    </p>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initial);
  const errs = state.fieldErrors ?? {};
  const v = state.values ?? {};

  if (state.status === "ok") {
    return (
      <div className="border border-gold-base/40 rounded-sm p-10 bg-cream">
        <p className="label-eyebrow gold-gradient-text">Received</p>
        <p className="mt-5 font-serif italic text-2xl md:text-3xl text-emerald-deep tracking-tightish leading-snug">
          Thank you. We&rsquo;ll be in touch swiftly.
        </p>
        <GoldDivider width="short" className="mt-6" />
        <p className="mt-6 text-ink-muted leading-relaxed max-w-md">
          A Swiftly principal will read your note and reply inside two business
          days. If your project is urgent, email us directly and let us know.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="name">Your name</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            required
            defaultValue={v.name}
            aria-invalid={Boolean(errs.name)}
            aria-describedby={errs.name ? "err-name" : undefined}
          />
          <FieldError>{errs.name}</FieldError>
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            required
            defaultValue={v.email}
            aria-invalid={Boolean(errs.email)}
            aria-describedby={errs.email ? "err-email" : undefined}
          />
          <FieldError>{errs.email}</FieldError>
        </div>
      </div>

      <div>
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          name="company"
          autoComplete="organization"
          defaultValue={v.company}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="service">What do you need?</Label>
          <Select
            id="service"
            name="service"
            required
            defaultValue={v.service ?? ""}
            aria-invalid={Boolean(errs.service)}
          >
            <option value="" disabled>
              Select a service…
            </option>
            <option value="tech">Development</option>
            <option value="seo">SEO strategy</option>
            <option value="content">Content production</option>
            <option value="all">All three</option>
            <option value="unsure">Not sure yet</option>
          </Select>
          <FieldError>{errs.service}</FieldError>
        </div>
        <div>
          <Label htmlFor="budget">Budget</Label>
          <Select
            id="budget"
            name="budget"
            required
            defaultValue={v.budget ?? ""}
            aria-invalid={Boolean(errs.budget)}
          >
            <option value="" disabled>
              Select a range…
            </option>
            <option value="under-15k">Under $15k</option>
            <option value="15k-40k">$15k – $40k</option>
            <option value="40k-100k">$40k – $100k</option>
            <option value="100k-plus">$100k+</option>
            <option value="unsure">Not sure yet</option>
          </Select>
          <FieldError>{errs.budget}</FieldError>
        </div>
      </div>

      <div>
        <Label htmlFor="message">Project details</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell us about the work, the team, and the timeline. The more concrete, the better."
          defaultValue={v.message}
          aria-invalid={Boolean(errs.message)}
        />
        <FieldError>{errs.message}</FieldError>
      </div>

      {/* honeypot */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="website">Website (do not fill)</label>
        <input
          id="website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      
      
     <div>
  {turnstileSiteKey ? (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
        async
        defer
      />
      <div
        className="cf-turnstile"
        data-sitekey={turnstileSiteKey}
        data-theme="light"
      />
      <FieldError>{errs.turnstileToken}</FieldError>
    </>
  ) : (
    <p className="text-sm text-red-700 border border-red-700/30 rounded-sm px-4 py-3">
      Security check is not configured.
    </p>
  )}
</div>

{state.message && (
  <p
    role="alert"
    className="text-sm text-red-700 border border-red-700/30 rounded-sm px-4 py-3"
  >
    {state.message}
  </p>
)}

      <div className="pt-2">
        <SubmitButton />
      </div>
    </form>
  );
}
