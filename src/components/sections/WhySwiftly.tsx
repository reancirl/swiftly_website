import { Container } from "@/components/layout/Container";
import { GoldDivider } from "@/components/brand/GoldDivider";
import { Reveal } from "@/components/brand/Reveal";
import { whyPoints } from "@/lib/content";

export function WhySwiftly() {
  return (
    <section
      aria-labelledby="why-heading"
      className="py-20 md:py-28 bg-cream border-t border-gold-base/20"
    >
      <Container size="xl">
        <Reveal className="max-w-2xl">
          <p className="label-eyebrow gold-gradient-text">Why Swiftly</p>
          <h2
            id="why-heading"
            className="mt-4 font-serif text-3xl md:text-5xl tracking-display text-emerald-deep leading-[1.1]"
          >
            A better way to ship software.
          </h2>
          <p className="mt-6 text-ink-muted leading-relaxed">
            Expert engineering, predictable pricing, and a focused workstream —
            delivered through a platform we build ourselves.
          </p>
        </Reveal>

        <GoldDivider width="full" className="mt-12 opacity-50" />

        <Reveal
          as="ul"
          stagger={0.06}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10"
        >
          {whyPoints.map((point) => {
            const Icon = point.icon;
            return (
              <li key={point.title}>
                <div className="flex items-center justify-center h-11 w-11 rounded-sm border border-gold-base/40 text-emerald-deep">
                  <Icon size={19} strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-serif text-xl text-emerald-deep tracking-tightish">
                  {point.title}
                </h3>
                <p className="mt-3 text-ink-muted leading-relaxed">
                  {point.body}
                </p>
              </li>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
