import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/brand/Reveal";
import { CaseStudyCard } from "./CaseStudyCard";
import { caseStudies } from "@/lib/content";

export function WorkPreview() {
  if (caseStudies.length === 0) return null;

  return (
    <section
      aria-labelledby="work-heading"
      className="py-20 md:py-28 border-t border-gold-base/20"
    >
      <Container size="xl">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="label-eyebrow gold-gradient-text">Our work</p>
            <h2
              id="work-heading"
              className="mt-4 font-serif text-3xl md:text-5xl tracking-display text-emerald-deep leading-[1.1]"
            >
              Real engagements, honestly scoped.
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-emerald-deep hover:text-emerald-mid"
          >
            All case studies
            <ArrowRight size={14} />
          </Link>
        </div>

        <Reveal stagger={0.08} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
