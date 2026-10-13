import type { Metadata } from "next";
import { Check, X, ArrowRight, Workflow, Infinity as InfinityIcon } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { GoldDivider } from "@/components/brand/GoldDivider";
import { FishIcon } from "@/components/brand/FishIcon";
import { JsonLd } from "@/components/seo/JsonLd";
import { PricingCard } from "@/components/sections/PricingCard";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PlatformSection } from "@/components/sections/PlatformSection";
import { PhilippineAdvantage } from "@/components/sections/PhilippineAdvantage";
import { FaqSection } from "@/components/sections/FaqSection";
import {
  faqs,
  requestExamples,
  outsideScope,
  subscriptionPlan,
} from "@/lib/content";
import { SITE } from "@/lib/utils";

const title = "Development Subscription — $1,498/month";
const description =
  "Expert-led software development on subscription. $1,498/month for one active development workstream and an unlimited backlog of requests. A managed engineering service — not a dedicated full-time hire.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/subscription" },
  openGraph: {
    url: `${SITE.url}/subscription`,
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
      name: "Subscription",
      item: `${SITE.url}/subscription`,
    },
  ],
};

const offerSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Software development subscription",
  name: subscriptionPlan.name,
  description,
  provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
  areaServed: "Worldwide",
  offers: {
    "@type": "Offer",
    price: "1498",
    priceCurrency: "USD",
    url: `${SITE.url}/subscription`,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "1498",
      priceCurrency: "USD",
      unitText: "MONTH",
      billingIncrement: 1,
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function SubscriptionPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} id="sub-breadcrumb" />
      <JsonLd data={offerSchema} id="sub-offer" />
      <JsonLd data={faqSchema} id="sub-faq" />

      {/* Hero + pricing card */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 -left-16 opacity-[0.05]"
        >
          <FishIcon size={360} color="current" className="text-emerald-deep" />
        </div>
        <Container size="xl" className="relative pt-20 md:pt-28 pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
            <div className="lg:col-span-6">
              <p className="label-eyebrow gold-gradient-text">
                Development Subscription · One of three ways to work with us
              </p>
              <h1 className="mt-6 font-serif text-4xl md:text-6xl lg:text-[4.25rem] tracking-display text-emerald-deep leading-[1.05]">
                Continuous development.{" "}
                <span className="italic gold-gradient-text">
                  Predictable pricing.
                </span>
              </h1>
              <p className="mt-8 max-w-xl text-lg md:text-xl text-ink-muted leading-relaxed">
                An expert-led engineering team you can subscribe to. Keep an
                unlimited backlog of features, fixes, and improvements — we work
                through them one active workstream at a time.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-sm border border-emerald-deep/15 px-4 py-2 text-sm text-emerald-deep">
                  <Workflow size={16} strokeWidth={1.5} className="text-gold-dark" />
                  One active workstream
                </span>
                <span className="inline-flex items-center gap-2 rounded-sm border border-emerald-deep/15 px-4 py-2 text-sm text-emerald-deep">
                  <InfinityIcon size={16} strokeWidth={1.5} className="text-gold-dark" />
                  Unlimited queued requests
                </span>
              </div>
              <GoldDivider width="medium" className="mt-12" />
            </div>

            <div className="lg:col-span-6 lg:pl-4">
              <PricingCard />
            </div>
          </div>
        </Container>
      </section>

      {/* What one workstream means */}
      <section
        aria-labelledby="workstream-heading"
        className="py-20 md:py-28 bg-emerald-soft border-t border-gold-base/20"
      >
        <Container size="lg">
          <div className="max-w-3xl">
            <p className="label-eyebrow gold-gradient-text">The important part</p>
            <h2
              id="workstream-heading"
              className="mt-4 font-serif text-3xl md:text-5xl tracking-display text-emerald-deep leading-[1.1]"
            >
              What “one active workstream” means.
            </h2>
            <div className="prose-swiftly mt-8">
              <p>
                Your subscription gives you one active development workstream
                managed by our engineering team. We focus on one prioritized,
                actionable request at a time — while you maintain an unlimited
                list of features, bugs, enhancements, and improvements behind it.
              </p>
              <p>
                When an active request is completed, approved, or ready to
                advance, we move to the next prioritized request in your queue.
                Larger requests are broken into smaller technical tasks and
                milestones so progress stays visible and steady.
              </p>
              <p>
                A workstream may involve different people depending on the work —
                a frontend developer on a UI feature, a backend developer on an
                API, an expert engineer reviewing architecture, with AI assisting
                on implementation, testing, and requirements. It still represents
                one active workstream, not several simultaneous projects.
              </p>
            </div>

            <div className="mt-10 rounded-sm border border-gold-base/40 bg-cream p-6 md:p-7">
              <p className="font-serif text-lg text-emerald-deep">
                It is a managed engineering service — not a dedicated hire.
              </p>
              <p className="mt-2 text-ink-muted leading-relaxed text-[0.95rem]">
                The subscription is not a full-time developer, a fixed number of
                hours, or an exclusive engineering team. It is designed for
                continuous development, delivered efficiently by our studio.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <HowItWorks />
      <PlatformSection />

      {/* Example requests + out of scope */}
      <section
        aria-labelledby="scope-heading"
        className="py-20 md:py-28 border-t border-gold-base/20"
      >
        <Container size="xl">
          <div className="max-w-2xl">
            <p className="label-eyebrow gold-gradient-text">Scope</p>
            <h2
              id="scope-heading"
              className="mt-4 font-serif text-3xl md:text-5xl tracking-display text-emerald-deep leading-[1.1]"
            >
              What belongs in the subscription.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="border border-gold-base/30 rounded-sm p-8 bg-cream">
              <h3 className="font-serif text-xl text-emerald-deep tracking-tightish">
                Great subscription requests
              </h3>
              <GoldDivider width="short" className="mt-3" />
              <ul className="mt-6 space-y-3">
                {requestExamples.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink leading-relaxed">
                    <Check
                      size={17}
                      strokeWidth={2}
                      className="mt-1 shrink-0 text-emerald-mid"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-gold-base/30 rounded-sm p-8 bg-cream">
              <h3 className="font-serif text-xl text-emerald-deep tracking-tightish">
                Outside the normal subscription
              </h3>
              <GoldDivider width="short" className="mt-3" />
              <ul className="mt-6 space-y-3">
                {outsideScope.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink-muted leading-relaxed">
                    <X
                      size={17}
                      strokeWidth={2}
                      className="mt-1 shrink-0 text-gold-dark"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-ink-muted leading-relaxed">
                Larger or specially scoped work is a great fit for a{" "}
                <a
                  href="/contact?engagement=custom"
                  className="text-emerald-deep font-medium border-b border-gold-base/60 hover:border-gold-base pb-0.5"
                >
                  custom project engagement
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>

      <PhilippineAdvantage />
      <FaqSection faqs={faqs} heading="Subscription questions." />

      {/* Conversion band specific to subscription */}
      <section
        aria-labelledby="sub-cta-heading"
        className="relative bg-emerald-deep text-cream overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -right-12 opacity-[0.06]"
        >
          <FishIcon size={360} color="current" className="text-cream" />
        </div>
        <Container size="xl" className="relative py-24 md:py-28">
          <div className="max-w-3xl">
            <p className="label-eyebrow text-gold-light">Ready when you are</p>
            <h2
              id="sub-cta-heading"
              className="mt-5 font-serif text-4xl md:text-6xl tracking-display leading-[1.05] text-cream"
            >
              Start your development subscription.
            </h2>
            <p className="mt-6 text-cream/85 max-w-xl leading-relaxed">
              Tell us what you want to build. We will confirm the fit, get you
              onto our platform, and start working through your backlog — one
              focused workstream at a time.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                href="/contact?engagement=subscription"
                variant="gold"
                size="lg"
              >
                Start a subscription inquiry
                <ArrowRight size={16} />
              </Button>
              <Button
                href="/contact?engagement=custom"
                variant="link"
                size="lg"
                className="text-cream hover:text-gold-light"
              >
                Need something custom?
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
