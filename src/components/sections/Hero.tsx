import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { GoldDivider } from "@/components/brand/GoldDivider";
import { VerseBlock } from "@/components/brand/VerseBlock";
import { FishIcon } from "@/components/brand/FishIcon";
import { HeroAnimation } from "@/components/brand/HeroAnimation";
import { HeroVisual } from "@/components/brand/HeroVisual";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-emerald-deep text-cream">
      {/* Decorative fish silhouette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-16 opacity-[0.06]"
      >
        <FishIcon size={380} color="current" className="text-cream" />
      </div>

      <HeroAnimation />

      <Container size="xl" as="div" className="relative pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <p data-hero-anim className="label-eyebrow text-gold-light">
              Software engineering studio · Philippines
            </p>
            <h1
              data-hero-anim
              className="mt-6 font-serif text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.75rem] leading-[1.02] tracking-display text-cream"
            >
              Engineering that moves
              <br />
              your business{" "}
              <span className="italic gold-gradient-text">forward.</span>
            </h1>
            <p
              data-hero-anim
              className="mt-8 max-w-xl text-lg md:text-xl leading-relaxed text-cream/80"
            >
              Thoughtful software, built swiftly — AI-assisted workflows, senior
              engineering judgment, and a focus on what actually matters.
            </p>

            <div
              data-hero-anim
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button href="/services" variant="gold" size="lg">
                Explore what we do
                <ArrowRight size={16} />
              </Button>
              <Button
                href="/contact"
                variant="link"
                size="lg"
                className="text-cream hover:text-gold-light"
              >
                Let&rsquo;s build something
                <ArrowRight size={16} />
              </Button>
            </div>

            <p data-hero-anim className="mt-8 text-sm text-cream/70">
              Three ways to work with us ·{" "}
              <span className="text-gold-light">Custom builds</span>,{" "}
              <span className="text-gold-light">a monthly subscription</span>,
              and{" "}
              <span className="text-gold-light">forward deployed engineering</span>
              .
            </p>
          </div>

          <div data-hero-anim className="lg:col-span-5">
            <HeroVisual
              variant="dark"
              className="mx-auto w-full max-w-md lg:max-w-none"
            />
          </div>
        </div>

        <div className="mt-14 md:mt-16">
          <GoldDivider width="medium" />
          <VerseBlock variant="emerald" size="sm" className="mt-6" />
        </div>
      </Container>
    </section>
  );
}
