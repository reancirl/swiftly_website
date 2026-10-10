import type { Metadata } from "next";
import { Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { GoldDivider } from "@/components/brand/GoldDivider";
import { FishIcon } from "@/components/brand/FishIcon";
import { ModelMotif } from "@/components/brand/ModelMotif";
import { JsonLd } from "@/components/seo/JsonLd";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { WorkPreview } from "@/components/sections/WorkPreview";
import { FaqSection } from "@/components/sections/FaqSection";
import { customFor, customProcess, customFaqs } from "@/lib/content";
import { SITE } from "@/lib/utils";

const title = "Custom Software Development — traditional agency engagements";
const description =
  "From idea to working software. SwiftlyPH designs and engineers custom software, MVPs, SaaS platforms, and business systems around your business — defined scope, milestones, and a custom quotation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/custom-development" },
  openGraph: {
    url: `${SITE.url}/custom-development`,
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
      name: "Custom Software Development",
      item: `${SITE.url}/custom-development`,
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Custom software development",
  name: "Custom Software Development",
  description,
  provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
  areaServed: "Worldwide",
  url: `${SITE.url}/custom-development`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: customFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function CustomDevelopmentPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} id="custom-breadcrumb" />
      <JsonLd data={serviceSchema} id="custom-service" />
      <JsonLd data={faqSchema} id="custom-faq" />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 -right-16 opacity-[0.05]"
        >
          <FishIcon size={360} color="current" className="text-emerald-deep" />
        </div>
        <Container size="xl" className="relative pt-20 md:pt-28 pb-14 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="label-eyebrow gold-gradient-text">
                Custom Software Development
              </p>
              <h1 className="mt-6 font-serif text-4xl md:text-6xl lg:text-[4.25rem] tracking-display text-emerald-deep leading-[1.05]">
                From idea to{" "}
                <span className="italic gold-gradient-text">working software.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg md:text-xl text-ink-muted leading-relaxed">
                We design and engineer custom software around your business,
                focusing on the capabilities that deliver real value — without
                unnecessary complexity. The goal is not to ship as many features
                as possible. It is to build the right solution.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-sm border border-gold-base/50 bg-cream px-4 py-2 font-serif text-lg text-emerald-deep">
                  Custom quotation
                </span>
                <span className="inline-flex items-center rounded-sm border border-emerald-deep/15 px-4 py-2 text-sm text-emerald-deep">
                  Defined scope · Milestones
                </span>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href="/contact?engagement=custom" variant="primary" size="lg">
                  Discuss a custom project
                  <ArrowRight size={16} />
                </Button>
                <Button href="/services" variant="link" size="lg">
                  Compare engagement models
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-sm border border-gold-base/30 bg-emerald-soft p-10">
                <ModelMotif motif="custom" className="w-full h-auto" />
                <p className="mt-6 text-center font-serif italic text-lg text-emerald-deep">
                  A concept, engineered into something real.
                </p>
              </div>
            </div>
          </div>
          <GoldDivider width="medium" className="mt-14" />
        </Container>
      </section>

      {/* Who it's for */}
      <section className="py-20 md:py-28 border-t border-gold-base/20">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <p className="label-eyebrow gold-gradient-text">Who it&rsquo;s for</p>
              <h2 className="mt-4 font-serif text-3xl md:text-5xl tracking-display text-emerald-deep leading-[1.1]">
                When a project is the right call.
              </h2>
              <GoldDivider width="medium" className="mt-8" />
              <p className="mt-8 text-ink-muted leading-relaxed max-w-md">
                Custom development suits larger or specific builds with a clear
                outcome. For continuous, evolving work, the{" "}
                <a
                  href="/subscription"
                  className="text-emerald-deep font-medium border-b border-gold-base/60 hover:border-gold-base pb-0.5"
                >
                  Development Subscription
                </a>{" "}
                may fit better — we will tell you honestly.
              </p>
            </div>
            <ul className="lg:col-span-7 grid grid-cols-1 gap-3">
              {customFor.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-sm border border-gold-base/30 bg-cream px-5 py-4 text-ink leading-relaxed"
                >
                  <Check size={18} strokeWidth={2} className="mt-0.5 shrink-0 text-emerald-mid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <ProcessTimeline
        steps={customProcess}
        eyebrow="How the engagement works"
        heading="Understand, define, build, deliver."
        intro="We start with the business problem and end with software in production — agreeing scope, milestones, and terms before we build."
        tone="soft"
      />

      <WhatWeBuild />
      <WorkPreview />
      <FaqSection faqs={customFaqs} heading="Custom development questions." eyebrow="Frequently asked" />

      {/* CTA */}
      <section className="relative bg-emerald-deep text-cream overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -right-12 opacity-[0.06]"
        >
          <FishIcon size={360} color="current" className="text-cream" />
        </div>
        <Container size="xl" className="relative py-24 md:py-28">
          <div className="max-w-3xl">
            <p className="label-eyebrow text-gold-light">Custom development</p>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl tracking-display leading-[1.05] text-cream">
              Let&rsquo;s build the right solution.
            </h2>
            <p className="mt-6 text-cream/85 max-w-xl leading-relaxed">
              Tell us the problem and the outcome you need. We will shape the
              scope, propose an approach, and give you a written quotation.
            </p>
            <div className="mt-10">
              <Button href="/contact?engagement=custom" variant="gold" size="lg">
                Discuss a custom project
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
