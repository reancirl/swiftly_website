import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { GoldDivider } from "@/components/brand/GoldDivider";
import { WorkGallery } from "@/components/sections/WorkGallery";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import { caseStudies } from "@/lib/content";
import { SITE } from "@/lib/utils";

const title = "Work";
const description =
  "Selected Swiftlyph client work — marketplaces, ERPs, lending platforms, internal tools, and online stores. Full product builds and ongoing improvements for teams across Australia, the Philippines, the US, and beyond.";

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
          <p className="label-eyebrow gold-gradient-text">Selected work</p>
          <h1 className="mt-6 max-w-4xl font-serif text-4xl md:text-6xl lg:text-7xl tracking-display text-emerald-deep leading-[1.1]">
            Software that runs <span className="italic">real businesses.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg md:text-xl leading-relaxed text-ink-muted">
            Marketplaces, ERPs, lending platforms, internal tools, and online
            stores — for teams across Australia, the Philippines, the US, and
            beyond. Some are ground-up builds; some are ongoing improvements to
            systems already in market. Either way, we&rsquo;re clear about exactly
            what we did.
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
