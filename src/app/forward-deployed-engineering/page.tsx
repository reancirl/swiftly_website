import type { Metadata } from "next";
import { Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { GoldDivider } from "@/components/brand/GoldDivider";
import { FishIcon } from "@/components/brand/FishIcon";
import { ModelMotif } from "@/components/brand/ModelMotif";
import { JsonLd } from "@/components/seo/JsonLd";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { AiEngineering } from "@/components/sections/AiEngineering";
import { FaqSection } from "@/components/sections/FaqSection";
import {
  fdeFor,
  fdeResponsibilities,
  fdeDifferentiators,
  fdeProcess,
  fdeUseCases,
  fdeFaqs,
} from "@/lib/content";
import { SITE } from "@/lib/utils";

const title = "Forward Deployed Engineering — embedded engineering services";
const description =
  "Engineers who work with your business, not just your backlog. SwiftlyPH embeds a senior engineer or pod with your team to understand problems, build solutions, and bring software into real use. Custom engagement.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/forward-deployed-engineering" },
  openGraph: {
    url: `${SITE.url}/forward-deployed-engineering`,
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
      name: "Forward Deployed Engineering",
      item: `${SITE.url}/forward-deployed-engineering`,
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Forward deployed engineering",
  name: "Forward Deployed Engineering",
  description,
  provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
  areaServed: "Worldwide",
  url: `${SITE.url}/forward-deployed-engineering`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: fdeFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FdePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} id="fde-breadcrumb" />
      <JsonLd data={serviceSchema} id="fde-service" />
      <JsonLd data={faqSchema} id="fde-faq" />

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
                Forward Deployed Engineering
              </p>
              <h1 className="mt-6 font-serif text-4xl md:text-6xl lg:text-[4.25rem] tracking-display text-emerald-deep leading-[1.05]">
                Engineers who work with your business,{" "}
                <span className="italic gold-gradient-text">not just your backlog.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg md:text-xl text-ink-muted leading-relaxed">
                We embed a senior engineer — or an appropriately sized pod —
                inside your operating environment. They understand the problem,
                decide what should be built, implement it, and help bring it into
                real use.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-sm border border-gold-base/50 bg-cream px-4 py-2 font-serif text-lg text-emerald-deep">
                  Custom engagement
                </span>
                <span className="inline-flex items-center rounded-sm border border-emerald-deep/15 px-4 py-2 text-sm text-emerald-deep">
                  Embedded · Outcome-owned
                </span>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href="/contact?engagement=fde" variant="primary" size="lg">
                  Discuss an FDE engagement
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
                <ModelMotif motif="fde" className="w-full h-auto" />
                <p className="mt-6 text-center font-serif italic text-lg text-emerald-deep">
                  Embedded in your workflow. Focused on your outcomes.
                </p>
              </div>
            </div>
          </div>
          <GoldDivider width="medium" className="mt-14" />
        </Container>
      </section>

      {/* Who it's for + what an FDE does */}
      <section className="py-20 md:py-28 border-t border-gold-base/20">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="rounded-sm border border-gold-base/30 bg-cream p-8 md:p-10">
              <p className="label-eyebrow text-emerald-mid">Who it&rsquo;s for</p>
              <h2 className="mt-4 font-serif text-2xl md:text-3xl text-emerald-deep tracking-tightish">
                When this is the right fit
              </h2>
              <GoldDivider width="short" className="mt-4" />
              <ul className="mt-6 space-y-3">
                {fdeFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink leading-relaxed">
                    <Check size={17} strokeWidth={2} className="mt-1 shrink-0 text-emerald-mid" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-sm border border-gold-base/30 bg-cream p-8 md:p-10">
              <p className="label-eyebrow text-emerald-mid">What they do</p>
              <h2 className="mt-4 font-serif text-2xl md:text-3xl text-emerald-deep tracking-tightish">
                A forward deployed engineer will
              </h2>
              <GoldDivider width="short" className="mt-4" />
              <ul className="mt-6 space-y-3">
                {fdeResponsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink leading-relaxed">
                    <Check size={17} strokeWidth={2} className="mt-1 shrink-0 text-emerald-mid" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* How FDE differs */}
      <section className="py-20 md:py-28 bg-emerald-soft border-t border-gold-base/20">
        <Container size="xl">
          <div className="max-w-2xl">
            <p className="label-eyebrow gold-gradient-text">The difference</p>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl tracking-display text-emerald-deep leading-[1.1]">
              Ownership, not hours.
            </h2>
            <p className="mt-6 text-ink-muted leading-relaxed">
              FDE is not staff augmentation with a fashionable name. The value is
              engineering ownership, business understanding, integration, and
              execution.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {fdeDifferentiators.map((d) => (
              <div key={d.title} className="rounded-sm border border-gold-base/30 bg-cream p-7">
                <h3 className="font-serif text-xl text-emerald-deep tracking-tightish">
                  {d.title}
                </h3>
                <GoldDivider width="short" className="mt-3" />
                <p className="mt-5 text-sm text-ink-muted leading-relaxed">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ProcessTimeline
        steps={fdeProcess}
        eyebrow="How an engagement works"
        heading="Discover, embed, engineer, deploy, evolve."
        intro="The working arrangement, communication rhythm, and commercial terms are agreed with each client. We do not assume on-site or full-time by default — we define what the engagement actually needs."
      />

      {/* Use cases */}
      <section className="py-20 md:py-28 border-t border-gold-base/20">
        <Container size="xl">
          <div className="max-w-2xl">
            <p className="label-eyebrow gold-gradient-text">Where it fits</p>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl tracking-display text-emerald-deep leading-[1.1]">
              Common use cases.
            </h2>
          </div>
          <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {fdeUseCases.map((u) => {
              const Icon = u.icon;
              return (
                <li
                  key={u.title}
                  className="group flex items-center gap-4 rounded-sm border border-gold-base/30 bg-cream px-5 py-5 transition-colors hover:border-gold-base/60"
                >
                  <span className="flex items-center justify-center h-10 w-10 rounded-sm border border-gold-base/40 text-emerald-deep transition-transform group-hover:-rotate-6">
                    <Icon size={18} strokeWidth={1.5} />
                  </span>
                  <span className="text-ink leading-snug">{u.title}</span>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <AiEngineering />

      <FaqSection faqs={fdeFaqs} heading="FDE questions." eyebrow="Frequently asked" />

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
            <p className="label-eyebrow text-gold-light">Embedded engineering</p>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl tracking-display leading-[1.05] text-cream">
              Let&rsquo;s own the problem together.
            </h2>
            <p className="mt-6 text-cream/85 max-w-xl leading-relaxed">
              Tell us about your team, your systems, and the outcome you are
              after. We will propose an engagement model that fits — and be
              honest if FDE is not the right one.
            </p>
            <div className="mt-10">
              <Button href="/contact?engagement=fde" variant="gold" size="lg">
                Discuss an FDE engagement
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
