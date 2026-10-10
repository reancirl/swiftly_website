import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { GoldDivider } from "@/components/brand/GoldDivider";
import { Reveal } from "@/components/brand/Reveal";
import { ModelMotif } from "@/components/brand/ModelMotif";
import { engagementModels } from "@/lib/content";

type EngagementModelsProps = {
  /** When false, drops the section intro (for reuse on the Services page). */
  withIntro?: boolean;
  heading?: string;
};

export function EngagementModels({
  withIntro = true,
  heading = "Three ways to work with us.",
}: EngagementModelsProps) {
  return (
    <section
      aria-labelledby="models-heading"
      className="py-20 md:py-28 border-t border-gold-base/20"
    >
      <Container size="xl">
        {withIntro && (
          <Reveal className="max-w-2xl">
            <p className="label-eyebrow gold-gradient-text">How to engage</p>
            <h2
              id="models-heading"
              className="mt-4 font-serif text-3xl md:text-5xl tracking-display text-emerald-deep leading-[1.1]"
            >
              {heading}
            </h2>
            <p className="mt-6 text-ink-muted leading-relaxed">
              Same senior team, same engineering philosophy — three ways to hire
              us, depending on what the work needs. Pick the one that fits; we
              will tell you honestly if another suits you better.
            </p>
          </Reveal>
        )}

        <Reveal
          stagger={0.09}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {engagementModels.map((model) => (
            <article
              key={model.id}
              className="group relative flex flex-col overflow-hidden rounded-sm border border-gold-base/30 bg-cream p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-base/70 hover:shadow-[0_28px_60px_-34px_rgba(0,98,65,0.45)]"
            >
              {/* gold sweep on hover */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 gold-gradient scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
              />

              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl gold-gradient-text leading-none">
                  {model.index}
                </span>
                <ModelMotif motif={model.motif} className="w-24 h-auto" />
              </div>

              <h3 className="mt-7 font-serif text-2xl text-emerald-deep tracking-tightish">
                {model.title}
              </h3>
              <p className="mt-2 font-serif italic text-lg text-emerald-mid">
                {model.line}
              </p>

              <p className="mt-4 text-sm text-ink-muted leading-relaxed">
                {model.description}
              </p>

              <p className="mt-6 label-eyebrow text-emerald-mid">For</p>
              <p className="mt-1 text-sm text-ink leading-relaxed">
                {model.forWho}
              </p>

              <div className="mt-6 flex items-baseline gap-2 border-t border-gold-base/20 pt-5">
                <span className="font-serif text-xl text-emerald-deep">
                  {model.price}
                </span>
                {model.priceNote && (
                  <span className="text-xs text-ink-muted">
                    · {model.priceNote}
                  </span>
                )}
              </div>

              <div className="mt-6 pt-1">
                <Link
                  href={model.cta.href}
                  className="inline-flex items-center gap-2 text-emerald-deep font-medium hover:text-emerald-mid border-b border-gold-base/60 hover:border-gold-base pb-1 transition"
                >
                  {model.cta.label}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </article>
          ))}
        </Reveal>

        <div className="mt-10">
          <GoldDivider width="full" className="opacity-40" />
        </div>
      </Container>
    </section>
  );
}
