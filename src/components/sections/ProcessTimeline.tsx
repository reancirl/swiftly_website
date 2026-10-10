import { Container } from "@/components/layout/Container";
import { GoldDivider } from "@/components/brand/GoldDivider";
import { Reveal } from "@/components/brand/Reveal";
import type { Step } from "@/lib/content";

type ProcessTimelineProps = {
  steps: Step[];
  eyebrow?: string;
  heading: string;
  intro?: string;
  tone?: "cream" | "soft";
};

/** A stepped process timeline rendered from a Step[] — reused across pages. */
export function ProcessTimeline({
  steps,
  eyebrow = "How it works",
  heading,
  intro,
  tone = "cream",
}: ProcessTimelineProps) {
  return (
    <section
      aria-labelledby="process-heading"
      className={`py-20 md:py-28 border-t border-gold-base/20 ${
        tone === "soft" ? "bg-emerald-soft" : ""
      }`}
    >
      <Container size="xl">
        <Reveal className="max-w-2xl">
          <p className="label-eyebrow gold-gradient-text">{eyebrow}</p>
          <h2
            id="process-heading"
            className="mt-4 font-serif text-3xl md:text-5xl tracking-display text-emerald-deep leading-[1.1]"
          >
            {heading}
          </h2>
          {intro && (
            <p className="mt-6 text-ink-muted leading-relaxed">{intro}</p>
          )}
        </Reveal>

        <GoldDivider width="full" className="mt-12 opacity-40" />

        <Reveal
          stagger={0.08}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.n} className="relative h-full">
                <div className="flex items-center justify-between">
                  <span className="flex items-center justify-center h-11 w-11 rounded-sm border border-gold-base/40 text-emerald-deep bg-cream">
                    <Icon size={18} strokeWidth={1.5} />
                  </span>
                  <span className="font-serif text-2xl gold-gradient-text leading-none">
                    {step.n}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-xl text-emerald-deep tracking-tightish">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm text-ink-muted leading-relaxed">
                  {step.body}
                </p>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
