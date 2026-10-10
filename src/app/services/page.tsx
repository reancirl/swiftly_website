import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { GoldDivider } from "@/components/brand/GoldDivider";
import { JsonLd } from "@/components/seo/JsonLd";
import { EngagementModels } from "@/components/sections/EngagementModels";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { FaqSection } from "@/components/sections/FaqSection";
import { CTABand } from "@/components/sections/CTABand";
import { engagementModels, faqs } from "@/lib/content";
import { SITE } from "@/lib/utils";

const title = "Services — three ways to engage SwiftlyPH";
const description =
  "Software engineering from the Philippines, in three engagement models: Custom Software Development, a $1,498/month Development Subscription, and Forward Deployed Engineering. One senior team, one philosophy.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: {
    url: `${SITE.url}/services`,
    title: `${title} — ${SITE.name}`,
    description,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${SITE.url}/services`,
    },
  ],
};

const serviceSchema = engagementModels.map((m) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: m.title,
  name: m.title,
  description: m.description,
  provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
  areaServed: "Worldwide",
  url: `${SITE.url}${m.cta.href}`,
}));

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// Compact comparison matrix — rows are dimensions, columns map to the models.
const comparison: { dimension: string; values: Record<string, string> }[] = [
  {
    dimension: "Best for",
    values: {
      custom: "A defined product or project",
      subscription: "Continuous, evolving work",
      fde: "Owning a problem inside your team",
    },
  },
  {
    dimension: "Pricing",
    values: {
      custom: "Custom quotation",
      subscription: "$1,498 / month",
      fde: "Custom engagement",
    },
  },
  {
    dimension: "Commitment",
    values: {
      custom: "Scoped, milestone-based",
      subscription: "Month-to-month workstream",
      fde: "Agreed per engagement",
    },
  },
  {
    dimension: "How you work",
    values: {
      custom: "Project delivery",
      subscription: "Request queue on our platform",
      fde: "Embedded with your team",
    },
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} id="services-breadcrumb" />
      <JsonLd data={serviceSchema} id="services-schema" />
      <JsonLd data={faqSchema} id="services-faq" />

      {/* Hero */}
      <section className="pt-20 md:pt-28 pb-12 md:pb-16">
        <Container size="xl">
          <p className="label-eyebrow gold-gradient-text">Services</p>
          <h1 className="mt-6 max-w-4xl font-serif text-4xl md:text-6xl lg:text-7xl tracking-display text-emerald-deep leading-[1.05]">
            One team. One philosophy. Three ways to work.
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-ink-muted">
            However you engage us, the work is senior-led, AI-assisted, and
            focused on what matters. Choose the model that fits — we will be
            honest if another suits you better.
          </p>
          <GoldDivider width="medium" className="mt-12" />
        </Container>
      </section>

      {/* Three models */}
      <EngagementModels withIntro={false} />

      {/* Which engagement fits? — comparison */}
      <section
        aria-labelledby="compare-heading"
        className="py-20 md:py-28 bg-emerald-soft border-t border-gold-base/20"
      >
        <Container size="xl">
          <div className="max-w-2xl">
            <p className="label-eyebrow gold-gradient-text">Compare</p>
            <h2
              id="compare-heading"
              className="mt-4 font-serif text-3xl md:text-5xl tracking-display text-emerald-deep leading-[1.1]"
            >
              Which engagement fits your business?
            </h2>
          </div>

          {/* Desktop table */}
          <div className="mt-12 hidden md:block overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr>
                  <th className="w-40 p-4" />
                  {engagementModels.map((m) => (
                    <th
                      key={m.id}
                      className="p-4 align-bottom border-b border-gold-base/30"
                    >
                      <span className="label-eyebrow text-emerald-mid">
                        {m.index}
                      </span>
                      <span className="mt-2 block font-serif text-xl text-emerald-deep tracking-tightish">
                        {m.title}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.dimension} className="align-top">
                    <th className="p-4 label-eyebrow text-emerald-deep border-b border-gold-base/20">
                      {row.dimension}
                    </th>
                    {engagementModels.map((m) => (
                      <td
                        key={m.id}
                        className="p-4 text-ink leading-relaxed border-b border-gold-base/20"
                      >
                        {row.values[m.id]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked */}
          <div className="mt-10 md:hidden space-y-6">
            {engagementModels.map((m) => (
              <div
                key={m.id}
                className="rounded-sm border border-gold-base/30 bg-cream p-6"
              >
                <p className="font-serif text-xl text-emerald-deep tracking-tightish">
                  {m.title}
                </p>
                <dl className="mt-4 space-y-3">
                  {comparison.map((row) => (
                    <div key={row.dimension} className="flex justify-between gap-6">
                      <dt className="label-eyebrow text-emerald-mid">
                        {row.dimension}
                      </dt>
                      <dd className="text-sm text-ink text-right">
                        {row.values[m.id]}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <WhatWeBuild />
      <FaqSection faqs={faqs} />
      <CTABand />
    </>
  );
}
