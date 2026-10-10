import { Container } from "@/components/layout/Container";
import { GoldDivider } from "@/components/brand/GoldDivider";
import { Reveal } from "@/components/brand/Reveal";
import { howItWorks } from "@/lib/content";

export function HowItWorks() {
  return (
    <section
      aria-labelledby="how-heading"
      className="py-20 md:py-28 border-t border-gold-base/20"
    >
      <Container size="xl">
        <Reveal className="max-w-2xl">
          <p className="label-eyebrow gold-gradient-text">How it works</p>
          <h2
            id="how-heading"
            className="mt-4 font-serif text-3xl md:text-5xl tracking-display text-emerald-deep leading-[1.1]"
          >
            Subscribe, submit, and we build.
          </h2>
          <p className="mt-6 text-ink-muted leading-relaxed">
            Add as many requests as you need. We work through them one active
            workstream at a time — so development stays focused and keeps moving
            forward.
          </p>
        </Reveal>

        <GoldDivider width="full" className="mt-12 opacity-50" />

        <Reveal
          stagger={0.08}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {howItWorks.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.n}
                className="border border-gold-base/30 rounded-sm p-7 bg-cream h-full"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center h-11 w-11 rounded-sm border border-gold-base/40 text-emerald-deep">
                    <Icon size={19} strokeWidth={1.5} />
                  </div>
                  <span className="font-serif text-2xl gold-gradient-text leading-none">
                    {step.n}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-xl text-emerald-deep tracking-tightish">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">
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
