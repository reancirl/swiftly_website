import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { GoldDivider } from "@/components/brand/GoldDivider";
import { Reveal } from "@/components/brand/Reveal";

export function Introduction() {
  return (
    <section
      aria-labelledby="intro-heading"
      className="py-20 md:py-28 border-t border-gold-base/20"
    >
      <Container size="xl">
        <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <p className="label-eyebrow gold-gradient-text">Who we are</p>
            <h2
              id="intro-heading"
              className="mt-4 font-serif text-3xl md:text-5xl tracking-display text-emerald-deep leading-[1.1]"
            >
              A Philippine software engineering studio.
            </h2>
            <GoldDivider width="medium" className="mt-8" />
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg text-ink leading-relaxed">
              Swiftly helps businesses build, improve, integrate, and scale
              software. We work with founders and teams around the world — from
              first idea to live, working systems.
            </p>
            <p className="mt-5 text-ink-muted leading-relaxed">
              We believe great software solves a real problem without
              unnecessary complexity. So we build only what matters, make
              thoughtful technical decisions, and lean on AI to move
              efficiently — while experienced engineers stay accountable for
              everything we ship. That is what we mean by{" "}
              <span className="text-emerald-deep font-medium">
                great software, built swiftly.
              </span>
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-emerald-deep font-medium hover:text-emerald-mid border-b border-gold-base/60 hover:border-gold-base pb-1 transition"
            >
              More about the studio
              <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
