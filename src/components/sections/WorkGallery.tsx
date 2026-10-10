"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { UsersRound } from "lucide-react";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import type { CaseStudy } from "@/lib/content";
import { cn } from "@/lib/utils";

type ServiceFilter = "all" | NonNullable<CaseStudy["service"]>;

const filters: { id: ServiceFilter; label: string; line: string }[] = [
  { id: "all", label: "All", line: "The full body of work." },
  { id: "seo", label: "SEO", line: "Search foundations that compound." },
  {
    id: "development",
    label: "Development",
    line: "Fast, resilient digital products.",
  },
  {
    id: "content",
    label: "Content",
    line: "Useful stories built to earn trust.",
  },
];

function AllWorkShowcase({ studies }: { studies: CaseStudy[] }) {
  return (
    <section aria-labelledby="all-work-heading" className="py-6 md:py-10">
      <div className="mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-gold-light/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">
          <UsersRound size={15} aria-hidden="true" />
          Client Work
        </div>
        <h2
          id="all-work-heading"
          className="mt-7 font-serif text-4xl font-semibold leading-[1.05] tracking-display text-emerald-deep md:text-6xl"
        >
          We Build With{" "}
          <span className="gold-gradient-text">Our Clients</span>
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-ink-muted md:text-xl md:leading-relaxed">
          From the first discovery call through launch and ongoing support, we
          work closely with every client to build the right system for their
          goals.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:mt-16 xl:grid-cols-4">
        {studies.map((study) => {
          const containedCover = study.coverFit === "contain";
          const lightCover = study.coverBackground === "light";

          return (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="group relative block aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-emerald-soft shadow-[0_18px_45px_-28px_rgba(0,52,35,0.55)] outline-none transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-25px_rgba(0,52,35,0.65)] focus-visible:ring-2 focus-visible:ring-gold-base focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
            >
              <Image
                src={study.cover}
                alt={`${study.client} — ${study.title}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                className={cn(
                  "transition-transform duration-700 group-hover:scale-[1.04]",
                  containedCover
                    ? cn(
                        "object-contain p-10",
                        lightCover ? "bg-white" : "bg-[#050914]",
                      )
                    : "object-cover",
                )}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-emerald-deep/35 via-transparent to-black/5"
              />
              <div className="absolute left-4 top-4 max-w-[calc(100%_-_2rem)] rounded-xl bg-white/95 px-4 py-2 shadow-sm backdrop-blur-sm">
                <p className="truncate text-sm font-semibold text-emerald-deep">
                  {study.client}
                </p>
              </div>
              <span className="sr-only">Read {study.title}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export function WorkGallery({ studies }: { studies: CaseStudy[] }) {
  const [active, setActive] = useState<ServiceFilter>("all");
  const current = filters.find((filter) => filter.id === active) ?? filters[0];
  const visible =
    active === "all"
      ? studies
      : studies.filter((study) => study.service === active);

  return (
    <div>
      <div className="mb-10 md:mb-14 border-y border-gold-base/30 py-5 md:py-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="label-eyebrow text-emerald-mid">
              Explore by Service
            </p>
            <p className="mt-2 font-serif italic text-lg text-ink-muted">
              {current.line}
            </p>
          </div>

          <nav
            aria-label="Filter work by service"
            className="flex max-w-full gap-1 overflow-x-auto rounded-sm border border-emerald-deep/15 bg-emerald-soft/60 p-1"
          >
            {filters.map((filter) => {
              const selected = active === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActive(filter.id)}
                  className={cn(
                    "relative shrink-0 rounded-sm px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-base focus-visible:ring-offset-2 focus-visible:ring-offset-cream md:px-5",
                    selected
                      ? "bg-emerald-deep text-cream shadow-sm"
                      : "text-emerald-deep hover:bg-cream hover:text-emerald-mid",
                  )}
                >
                  {filter.label}
                  {selected && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-4 -bottom-px h-px gold-gradient"
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      <div aria-live="polite">
        {visible.length > 0 ? (
          active === "all" ? (
            <AllWorkShowcase studies={visible} />
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {visible.map((study) => (
                <CaseStudyCard key={study.slug} study={study} />
              ))}
            </div>
          )
        ) : (
          <div className="relative overflow-hidden rounded-sm border border-gold-base/30 bg-emerald-soft/40 px-6 py-14 text-center md:px-10 md:py-20">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 gold-gradient"
            />
            <p className="label-eyebrow gold-gradient-text">
              {current.label} Work
            </p>
            <h2 className="mt-4 font-serif text-2xl tracking-tightish text-emerald-deep md:text-3xl">
              Ready for the right project.
            </h2>
            <p className="mx-auto mt-4 max-w-md leading-relaxed text-ink-muted">
              Add approved {current.label.toLowerCase()} case studies here when
              they are ready to publish.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
