import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/lib/content";
import { cn } from "@/lib/utils";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const containedCover = study.coverFit === "contain";
  const lightCover = study.coverBackground === "light";

  return (
    <Link
      href={`/work/${study.slug}`}
      className="group block focus:outline-none"
    >
      <article className="border border-gold-base/30 rounded-sm overflow-hidden transition-all duration-300 group-hover:border-gold-base/70 group-focus-visible:ring-2 group-focus-visible:ring-gold-base group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-cream">
        <div
          className={cn(
            "relative aspect-[16/10] overflow-hidden",
            containedCover
              ? lightCover
                ? "bg-white"
                : "bg-[#050914]"
              : "bg-emerald-soft",
          )}
        >
          <Image
            src={study.cover}
            alt={`${study.client} — ${study.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={cn(
              "transition-transform duration-700 group-hover:scale-[1.03]",
              containedCover ? "object-contain p-12 md:p-16" : "object-cover",
            )}
          />
        </div>
        <div className="p-7 md:p-8 bg-cream">
          <div className="flex items-center justify-between gap-4">
            <p className="label-eyebrow text-emerald-mid">{study.client}</p>
            <span className="text-xs uppercase tracking-[0.15em] text-ink-muted">
              {study.type}
            </span>
          </div>
          <h3 className="mt-4 font-serif text-2xl md:text-[1.7rem] text-emerald-deep tracking-tightish leading-[1.2]">
            {study.title}
          </h3>
          <div className="mt-6 flex items-center justify-between gap-4">
            <p className="font-serif text-lg gold-gradient-text">
              {study.outcome}
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-deep group-hover:text-emerald-mid">
              Read
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
