import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { GoldDivider } from "@/components/brand/GoldDivider";
import { WorkGallery } from "@/components/sections/WorkGallery";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import { caseStudies } from "@/lib/content";
import { SITE } from "@/lib/utils";

const title = "Work — Swiftlyph";
const description =
  "Selected Swiftlyph client work, including Shopify maintenance, ecommerce improvements, and custom app support for established brands.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work" },
  openGraph: {
    url: `${SITE.url}/work`,
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
      name: "Work",
      item: `${SITE.url}/work`,
    },
  ],
};

export default function WorkPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} id="work-breadcrumb" />

      <section className="pt-20 md:pt-28 pb-12 md:pb-16">
        <Container size="xl">
          <p className="label-eyebrow gold-gradient-text">Work</p>
          <h1 className="mt-6 max-w-4xl font-serif text-4xl md:text-6xl lg:text-7xl tracking-display text-emerald-deep leading-[1.05]">
            Selected work, honestly scoped.
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-ink-muted">
            Some projects are full builds. Some are ongoing maintenance,
            improvements, and custom app work for platforms already in market.
            We describe the scope clearly.
          </p>
          <GoldDivider width="medium" className="mt-10" />
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container size="xl">
          <WorkGallery studies={caseStudies} />
        </Container>
      </section>

      <CTABand />
    </>
  );
}
