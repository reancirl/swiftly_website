"use client";

import { useActionState, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import Script from "next/script";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Code2,
  PenTool,
  Clapperboard,
  Search,
  Workflow,
  Sparkles,
  BarChart3,
  Megaphone,
  Briefcase,
  Blocks,
  GraduationCap,
  Laptop,
  Building2,
  Repeat,
  Presentation,
  type LucideIcon,
} from "lucide-react";
import { submitWaitlist, type WaitlistState } from "./actions";
import {
  AUDIENCE_OPTIONS,
  TOPIC_OPTIONS,
  EXPERIENCE_OPTIONS,
  FORMAT_OPTIONS,
} from "./options";
import { cn } from "@/lib/utils";

const initial: WaitlistState = { status: "idle" };
const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const STEPS = [
  { id: 1, label: "About you" },
  { id: 2, label: "Interests" },
  { id: 3, label: "Your details" },
] as const;

const topicIcons: Record<string, LucideIcon> = {
  software: Code2,
  design: PenTool,
  video: Clapperboard,
  seo: Search,
  automation: Workflow,
  "ai-foundations": Sparkles,
  data: BarChart3,
  marketing: Megaphone,
  business: Briefcase,
  nocode: Blocks,
};

const audienceIcons: Record<string, LucideIcon> = {
  student: GraduationCap,
  freelancer: Laptop,
  business: Briefcase,
  professional: Building2,
  switcher: Repeat,
  educator: Presentation,
  other: Sparkles,
};

const stepIn =
  "motion-safe:animate-[step-in_0.45s_cubic-bezier(0.22,1,0.36,1)]";

// Field styles tuned for the dark glass panel.
const fieldBase =
  "w-full rounded-md border border-cream/15 bg-cream/[0.04] px-4 py-3 text-sm text-cream placeholder:text-cream/35 outline-none transition-all duration-200 focus:border-gold-base/60 focus:bg-cream/[0.07] focus:ring-2 focus:ring-gold-base/25";
const selectField = cn(
  fieldBase,
  "h-11 appearance-none pr-10 bg-no-repeat bg-[right_0.75rem_center] [background-image:url(\"data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2024%2024%22%20fill=%22%23f4e5a1%22%3E%3Cpath%20d=%22M7%2010l5%205%205-5z%22/%3E%3C/svg%3E\")]",
);

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="label-eyebrow block text-gold-light/85">{children}</span>
  );
}

function FieldError({ children }: { children?: string }) {
  if (!children) return null;
  return (
    <p
      role="alert"
      className="mt-2 text-xs uppercase tracking-[0.15em] text-red-300"
    >
      {children}
    </p>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto max-w-xl overflow-hidden rounded-2xl border border-cream/12 bg-emerald-deep/40 p-6 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-8">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px gold-gradient"
      />
      {children}
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      aria-disabled={pending}
      className="group inline-flex h-12 items-center justify-center gap-2 rounded-md gold-gradient px-7 text-sm font-medium text-emerald-deep shadow-[0_0_28px_-8px_rgba(212,175,55,0.7)] transition-all hover:shadow-[0_0_34px_-6px_rgba(212,175,55,0.95)] active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none"
    >
      {pending ? "Joining…" : "Join the waitlist"}
      <ArrowRight
        size={16}
        className="transition-transform group-hover:translate-x-0.5"
      />
    </button>
  );
}

export function WaitlistForm() {
  const [state, formAction] = useActionState(submitWaitlist, initial);
  const [step, setStep] = useState(1);
  const [stepError, setStepError] = useState<string>();
  const [handledState, setHandledState] = useState(state);
  const formRef = useRef<HTMLFormElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const errs = state.fieldErrors ?? {};
  const v = state.values ?? {};
  const selectedTopics = v.topics ?? [];

  // Live validity, so "Continue" lights up the moment a step is satisfied.
  const [audienceChosen, setAudienceChosen] = useState(Boolean(v.audience));
  const [topicCount, setTopicCount] = useState(selectedTopics.length);

  // If the server rejects the submission, jump back to the step that owns the
  // first error. Done during render (guarded) so the correct step shows on the
  // same commit without a flash.
  if (state !== handledState) {
    setHandledState(state);
    if (state.status === "error") {
      setStep(
        state.fieldErrors?.audience ? 1 : state.fieldErrors?.topics ? 2 : 3,
      );
    }
  }

  if (state.status === "ok") {
    return (
      <Shell>
        <div className="py-6 text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold-base/50 bg-gold-base/10 text-gold-light shadow-[0_0_28px_-6px_rgba(212,175,55,0.7)] motion-safe:animate-[pop-in_0.5s_cubic-bezier(0.22,1,0.36,1)]">
            <Check size={22} strokeWidth={2.5} />
          </span>
          <p className="mt-6 font-serif italic text-2xl md:text-3xl text-cream tracking-tightish leading-snug">
            You&rsquo;re on the list.
          </p>
          <p className="mt-4 mx-auto max-w-sm text-sm text-cream/70 leading-relaxed">
            We&rsquo;re shaping the first cohorts around answers like yours. When
            a track that fits you opens, you&rsquo;ll be the first to hear — with
            early-access pricing, not a sales pitch.
          </p>
        </div>
      </Shell>
    );
  }

  const canContinue =
    step === 1 ? audienceChosen : step === 2 ? topicCount > 0 : true;

  const goTo = (next: number) => {
    setStepError(undefined);
    setStep(next);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  const handleNext = () => {
    if (step === 1 && !audienceChosen) {
      setStepError("Pick the one that fits you best.");
      return;
    }
    if (step === 2 && topicCount === 0) {
      setStepError("Choose at least one thing you'd like to learn.");
      return;
    }
    goTo(Math.min(step + 1, STEPS.length));
  };

  return (
    <Shell>
      <form ref={formRef} action={formAction} className="space-y-7" noValidate>
        {/* Progress */}
        <div ref={topRef} className="scroll-mt-28">
          <div className="flex items-center justify-between font-mono text-[0.7rem] tracking-[0.22em]">
            <span className="text-gold-light/80">
              STEP {String(step).padStart(2, "0")} / {STEPS.length}
            </span>
            <span className="text-cream/40">
              {STEPS[step - 1].label.toUpperCase()}
            </span>
          </div>
          <div className="mt-3 flex gap-1.5">
            {STEPS.map((s) => (
              <span
                key={s.id}
                className={cn(
                  "h-1 flex-1 rounded-full transition-all duration-500",
                  s.id <= step
                    ? "bg-gold-base shadow-[0_0_10px_rgba(212,175,55,0.6)]"
                    : "bg-cream/10",
                )}
              />
            ))}
          </div>
        </div>

        {/* Step 1 — About you */}
        <div className={cn(step === 1 ? `block ${stepIn}` : "hidden")}>
          <fieldset onChange={() => setAudienceChosen(true)}>
            <legend className="font-serif text-xl text-cream tracking-tightish">
              Which best describes you?
            </legend>
            <p className="mt-1 text-sm text-cream/55">
              We&rsquo;re still mapping who this is for — pick the closest.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {AUDIENCE_OPTIONS.map((o) => {
                const Icon = audienceIcons[o.value] ?? Sparkles;
                return (
                  <label
                    key={o.value}
                    className="group relative inline-flex cursor-pointer items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.03] px-4 py-2.5 text-sm text-cream/85 transition-all duration-200 hover:-translate-y-0.5 hover:border-cream/35 hover:bg-cream/[0.07] active:scale-95 has-[:checked]:border-gold-base/70 has-[:checked]:bg-gold-base/[0.12] has-[:checked]:text-cream has-[:checked]:shadow-[0_0_22px_-6px_rgba(212,175,55,0.7)] has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-gold-base/40"
                  >
                    <input
                      type="radio"
                      name="audience"
                      value={o.value}
                      defaultChecked={v.audience === o.value}
                      className="peer sr-only"
                    />
                    <Icon
                      size={15}
                      strokeWidth={1.75}
                      className="shrink-0 text-cream/50 transition-colors peer-checked:text-gold-light"
                    />
                    {o.label}
                  </label>
                );
              })}
            </div>
            <FieldError>{errs.audience}</FieldError>
          </fieldset>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="experience">
                <Eyebrow>Experience (optional)</Eyebrow>
              </label>
              <select
                id="experience"
                name="experience"
                defaultValue={v.experience ?? ""}
                className={cn(selectField, "mt-2")}
              >
                <option value="">No answer</option>
                {EXPERIENCE_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="format">
                <Eyebrow>Format (optional)</Eyebrow>
              </label>
              <select
                id="format"
                name="format"
                defaultValue={v.format ?? ""}
                className={cn(selectField, "mt-2")}
              >
                <option value="">No preference</option>
                {FORMAT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Step 2 — Interests */}
        <div className={cn(step === 2 ? `block ${stepIn}` : "hidden")}>
          <fieldset
            onChange={() =>
              setTopicCount(
                formRef.current
                  ? new FormData(formRef.current).getAll("topics").length
                  : 0,
              )
            }
          >
            <div className="flex items-center justify-between gap-3">
              <legend className="font-serif text-xl text-cream tracking-tightish">
                What do you want to learn?
              </legend>
              {topicCount > 0 && (
                <span className="shrink-0 rounded-full bg-gold-base/15 px-2.5 py-1 font-mono text-[0.7rem] text-gold-light motion-safe:animate-[pop-in_0.35s_ease]">
                  {topicCount} picked
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-cream/55">
              Pick as many as you like — mix and match.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {TOPIC_OPTIONS.map((o) => {
                const Icon = topicIcons[o.value] ?? Sparkles;
                return (
                  <label
                    key={o.value}
                    title={o.desc}
                    className="group relative flex cursor-pointer items-center gap-2.5 rounded-xl border border-cream/12 bg-cream/[0.03] px-3.5 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-cream/30 hover:bg-cream/[0.06] active:scale-95 has-[:checked]:border-gold-base/70 has-[:checked]:bg-gold-base/[0.1] has-[:checked]:shadow-[0_0_22px_-6px_rgba(212,175,55,0.6)] has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-gold-base/40"
                  >
                    <input
                      type="checkbox"
                      name="topics"
                      value={o.value}
                      defaultChecked={selectedTopics.includes(o.value)}
                      className="peer sr-only"
                    />
                    <Icon
                      size={16}
                      strokeWidth={1.75}
                      className="shrink-0 text-cream/50 transition-all peer-checked:text-gold-light peer-checked:scale-110"
                    />
                    <span className="text-sm text-cream/85 peer-checked:text-cream">
                      {o.label}
                    </span>
                  </label>
                );
              })}
            </div>
            <FieldError>{errs.topics}</FieldError>
          </fieldset>
        </div>

        {/* Step 3 — Details */}
        <div className={cn(step === 3 ? `block ${stepIn}` : "hidden")}>
          <p className="font-serif text-xl text-cream tracking-tightish">
            Where should we send your invite?
          </p>
          <p className="mt-1 text-sm text-cream/55">
            We&rsquo;ll only email when there&rsquo;s something real to share.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name">
                <Eyebrow>Your name</Eyebrow>
              </label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                defaultValue={v.name}
                aria-invalid={Boolean(errs.name)}
                className={cn(fieldBase, "mt-2 h-11")}
              />
              <FieldError>{errs.name}</FieldError>
            </div>
            <div>
              <label htmlFor="email">
                <Eyebrow>Email</Eyebrow>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                defaultValue={v.email}
                aria-invalid={Boolean(errs.email)}
                className={cn(fieldBase, "mt-2 h-11")}
              />
              <FieldError>{errs.email}</FieldError>
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="goal">
              <Eyebrow>What do you want to be able to do? (optional)</Eyebrow>
            </label>
            <textarea
              id="goal"
              name="goal"
              rows={3}
              placeholder="e.g. ship my own app, automate my agency's busywork, land an AI-focused role…"
              defaultValue={v.goal}
              className={cn(fieldBase, "mt-2 resize-y")}
            />
          </div>

          <div className="mt-5">
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
                  data-theme="dark"
                />
                <FieldError>{errs.turnstileToken}</FieldError>
              </>
            ) : (
              <p className="rounded-md border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                Security check is not configured.
              </p>
            )}
          </div>

          {state.message && (
            <p
              role="alert"
              className="mt-5 rounded-md border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"
            >
              {state.message}
            </p>
          )}
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

        {stepError && (
          <p
            role="alert"
            className="text-xs uppercase tracking-[0.15em] text-red-300 motion-safe:animate-[pop-in_0.3s_ease]"
          >
            {stepError}
          </p>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4 border-t border-cream/10 pt-5">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => goTo(step - 1)}
              className="group inline-flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-cream"
            >
              <ArrowLeft
                size={16}
                className="transition-transform group-hover:-translate-x-0.5"
              />
              Back
            </button>
          ) : (
            <span />
          )}

          {step < STEPS.length ? (
            <button
              type="button"
              onClick={handleNext}
              aria-disabled={!canContinue}
              className={cn(
                "group inline-flex h-12 items-center justify-center gap-2 rounded-md border px-7 text-sm font-medium transition-all",
                canContinue
                  ? "border-gold-base/40 bg-cream/[0.04] text-cream hover:border-gold-base/70 hover:bg-cream/[0.08] active:scale-[0.98]"
                  : "border-cream/10 bg-cream/[0.02] text-cream/40",
              )}
            >
              Continue
              <ArrowRight
                size={16}
                className={cn(
                  "transition-transform",
                  canContinue && "group-hover:translate-x-0.5",
                )}
              />
            </button>
          ) : (
            <SubmitButton />
          )}
        </div>
      </form>
    </Shell>
  );
}
