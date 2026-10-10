import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { GoldDivider } from "@/components/brand/GoldDivider";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTABand } from "@/components/sections/CTABand";
import { caseStudies } from "@/lib/content";
import { cn, SITE } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  const title = `${study.client} — ${study.title}`;
  const description = study.brief;
  return {
    title,
    description,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: {
      url: `${SITE.url}/work/${study.slug}`,
      title,
      description,
      type: "article",
      publishedTime: study.publishedAt,
      images: [{ url: study.cover, width: 1600, height: 1000, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [study.cover],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  const idx = caseStudies.findIndex((s) => s.slug === slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];
  const containedCover = study.coverFit === "contain";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: `${SITE.url}/work`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: study.client,
        item: `${SITE.url}/work/${study.slug}`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.brief,
    datePublished: study.publishedAt,
    image: `${SITE.url}${study.cover}`,
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/logo/swiftly-favicon.svg`,
      },
    },
    mainEntityOfPage: `${SITE.url}/work/${study.slug}`,
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} id="case-breadcrumb" />
      <JsonLd data={articleSchema} id="case-article" />

      <article>
        {/* Header */}
        <section className="pt-16 md:pt-24 pb-10 md:pb-16">
          <Container size="lg">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm text-emerald-mid hover:text-emerald-deep"
            >
              <ArrowLeft size={14} />
              All work
            </Link>
            <p className="mt-8 label-eyebrow gold-gradient-text">
              {study.type}
            </p>
            <h1 className="mt-4 font-serif text-4xl md:text-6xl lg:text-[4.25rem] tracking-display text-emerald-deep leading-[1.05] max-w-4xl">
              {study.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-ink-muted leading-relaxed">
              {study.brief}
            </p>
          </Container>
        </section>

        {/* Cover */}
        <section className="pb-16 md:pb-24">
          <Container size="xl">
            <div
              className={cn(
                "relative aspect-[16/10] rounded-sm border border-gold-base/30 overflow-hidden",
                containedCover ? "bg-[#050914]" : "bg-emerald-soft",
              )}
            >
              <Image
                src={study.cover}
                alt={`${study.client} — ${study.title}`}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className={containedCover ? "object-contain p-16 md:p-24" : "object-cover"}
              />
            </div>
          </Container>
        </section>

        {/* Body */}
        <section className="pb-16 md:pb-24">
          <Container size="lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                <h2 className="font-serif text-2xl md:text-3xl text-emerald-deep tracking-tightish">
                  The challenge
                </h2>
                <GoldDivider width="short" className="mt-3" />
                <p className="mt-6 text-lg leading-relaxed text-ink prose-swiftly">
                  {study.challenge}
                </p>

                <h2 className="mt-16 font-serif text-2xl md:text-3xl text-emerald-deep tracking-tightish">
                  The approach
                </h2>
                <GoldDivider width="short" className="mt-3" />
                <ol className="mt-6 space-y-5 list-none">
                  {study.approach.map((step, i) => (
                    <li key={i} className="grid grid-cols-[auto_1fr] gap-5">
                      <span className="font-serif text-xl gold-gradient-text leading-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-ink leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ol>

                <h2 className="mt-16 font-serif text-2xl md:text-3xl text-emerald-deep tracking-tightish">
                  The outcome
                </h2>
                <GoldDivider width="short" className="mt-3" />
                <p className="mt-6 text-lg leading-relaxed text-ink">
                  {study.outcomeBody}
                </p>

                <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {study.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="border border-gold-base/30 rounded-sm p-6 bg-cream"
                    >
                      <dt className="label-eyebrow text-emerald-mid">
                        {stat.label}
                      </dt>
                      <dd className="mt-3 font-serif text-2xl text-emerald-deep tracking-tightish">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                {study.testimonial && (
                  <figure className="mt-16 border-l-2 border-gold-base pl-6 md:pl-8 max-w-2xl">
                    <blockquote className="font-serif italic text-xl md:text-2xl text-ink leading-snug">
                      “{study.testimonial.quote}”
                    </blockquote>
                    <figcaption className="mt-5">
                      <span className="font-medium text-emerald-deep">
                        {study.testimonial.author}
                      </span>
                      <span className="text-ink-muted">
                        {" "}
                        — {study.testimonial.role}
                      </span>
                    </figcaption>
                  </figure>
                )}
              </div>

              <aside className="lg:col-span-4 lg:sticky lg:top-28 self-start">
                <div className="border border-gold-base/30 rounded-sm p-6 bg-cream">
                  <h3 className="label-eyebrow text-emerald-mid">Client</h3>
                  <p className="mt-2 font-serif text-lg text-emerald-deep">
                    {study.client}
                  </p>

                  <h3 className="mt-6 label-eyebrow text-emerald-mid">
                    Engagement
                  </h3>
                  <p className="mt-2 text-sm text-ink-muted">{study.type}</p>

                  <h3 className="mt-6 label-eyebrow text-emerald-mid">Stack</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {study.stack.map((s) => (
                      <li
                        key={s}
                        className="text-xs uppercase tracking-[0.15em] px-3 py-1.5 border border-gold-base/40 rounded-sm text-emerald-deep"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>

                  {study.website && (
                    <Button
                      href={study.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="md"
                      className="mt-8 w-full"
                    >
                      Visit website
                      <ExternalLink size={14} />
                    </Button>
                  )}
                </div>
              </aside>
            </div>
          </Container>
        </section>

        {/* Next case study */}
        {next && next.slug !== study.slug && (
          <section className="border-t border-gold-base/30 py-16 md:py-20">
            <Container size="lg">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <p className="label-eyebrow gold-gradient-text">
                    Next case study
                  </p>
                  <h2 className="mt-3 font-serif text-2xl md:text-4xl text-emerald-deep tracking-display max-w-xl leading-[1.15]">
                    {next.title}
                  </h2>
                </div>
                <Link
                  href={`/work/${next.slug}`}
                  className="inline-flex items-center gap-2 text-emerald-deep font-medium hover:text-emerald-mid border-b border-gold-base/60 hover:border-gold-base pb-1 transition self-start md:self-end"
                >
                  Read {next.client}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </Container>
          </section>
        )}
      </article>

      <CTABand />
    </>
  );
}
