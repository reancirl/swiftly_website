import { Container } from "@/components/layout/Container";
import { GoldDivider } from "@/components/brand/GoldDivider";
import { Reveal } from "@/components/brand/Reveal";
import { aiAssist } from "@/lib/content";

export function AiEngineering() {
  return (
    <section
      aria-labelledby="ai-heading"
      className="py-20 md:py-28 bg-emerald-soft border-t border-gold-base/20"
    >
      <Container size="xl">
        <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="label-eyebrow gold-gradient-text">AI-assisted engineering</p>
            <h2
              id="ai-heading"
              className="mt-4 font-serif text-3xl md:text-5xl tracking-display text-emerald-deep leading-[1.1]"
            >
              AI-native.{" "}
              <span className="italic gold-gradient-text">Human-led.</span>
            </h2>
            <GoldDivider width="medium" className="mt-8" />
            <p className="mt-8 text-ink-muted leading-relaxed max-w-md">
              We use AI throughout our workflow to remove repetitive work,
              accelerate implementation, and reduce development friction. What we
              do not do is hand over accountability.
            </p>
            <p className="mt-5 text-ink-muted leading-relaxed max-w-md">
              Experienced engineers remain responsible for architecture,
              implementation decisions, testing, review, and delivery. That
              pairing — sound judgment plus efficient tooling — is the point.
            </p>
          </div>

          <div className="lg:col-span-7">
            <p className="label-eyebrow text-emerald-mid">Where AI helps us</p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {aiAssist.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.label}
                    className="group flex items-center gap-3 rounded-sm border border-gold-base/30 bg-cream px-4 py-3.5 transition-colors hover:border-gold-base/60"
                  >
                    <span className="flex items-center justify-center h-9 w-9 rounded-sm border border-gold-base/40 text-emerald-deep transition-transform group-hover:-rotate-6">
                      <Icon size={16} strokeWidth={1.5} />
                    </span>
                    <span className="text-sm text-ink leading-snug">
                      {item.label}
                    </span>
                  </li>
                );
              })}
            </ul>
            <p className="mt-6 text-sm text-ink-muted leading-relaxed">
              The result: expert engineering at the speed of a much larger team,
              without the overhead — or the hand-waving.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
