import { Container } from "@/components/layout/Container";
import { GoldDivider } from "@/components/brand/GoldDivider";
import { Reveal } from "@/components/brand/Reveal";
import { capabilities } from "@/lib/content";

export function WhatWeBuild() {
  return (
    <section
      aria-labelledby="build-heading"
      className="py-20 md:py-28 border-t border-gold-base/20"
    >
      <Container size="xl">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <p className="label-eyebrow gold-gradient-text">What we build</p>
            <h2
              id="build-heading"
              className="mt-4 font-serif text-3xl md:text-5xl tracking-display text-emerald-deep leading-[1.1]"
            >
              Software, end to end.
            </h2>
          </div>
          <p className="md:max-w-sm text-ink-muted leading-relaxed">
            One subscription covers the full range of product engineering —
            frontend, backend, and everything your roadmap needs in between.
          </p>
        </Reveal>

        <GoldDivider width="full" className="mt-12 opacity-50" />

        <Reveal
          stagger={0.05}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="border border-gold-base/30 rounded-sm p-6 bg-cream h-full transition-colors hover:border-gold-base/60"
              >
                <div className="flex items-center justify-center h-10 w-10 rounded-sm border border-gold-base/40 text-emerald-deep">
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-serif text-lg text-emerald-deep tracking-tightish leading-tight">
                  {cap.title}
                </h3>
                <p className="mt-2.5 text-sm text-ink-muted leading-relaxed">
                  {cap.body}
                </p>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
