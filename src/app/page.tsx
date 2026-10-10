import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { EngagementModels } from "@/components/sections/EngagementModels";
import { Philosophy } from "@/components/sections/Philosophy";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { AiEngineering } from "@/components/sections/AiEngineering";
import { PlatformSection } from "@/components/sections/PlatformSection";
import { WorkPreview } from "@/components/sections/WorkPreview";
import { PhilippineAdvantage } from "@/components/sections/PhilippineAdvantage";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    url: SITE.url,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
};

const homeBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
  ],
};

const servicesCatalog = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "SwiftlyPH engagement models",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Custom Software Development",
      url: `${SITE.url}/custom-development`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Development Subscription",
      url: `${SITE.url}/subscription`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Forward Deployed Engineering",
      url: `${SITE.url}/forward-deployed-engineering`,
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeBreadcrumb} id="home-breadcrumb" />
      <JsonLd data={servicesCatalog} id="home-services" />

      <Hero />
      <Introduction />
      <EngagementModels />
      <Philosophy />
      <WhatWeBuild />
      <AiEngineering />
      <PlatformSection />
      <WorkPreview />
      <PhilippineAdvantage />
      <CTABand />
    </>
  );
}
