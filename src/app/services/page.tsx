import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { GoldDivider } from "@/components/brand/GoldDivider";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTABand } from "@/components/sections/CTABand";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { ProjectScrollReveal } from "@/components/sections/ProjectScrollReveal";
import { services, caseStudies, faqs } from "@/lib/content";
import { SITE } from "@/lib/utils";

const title = "Services — tech, SEO and content";
const description =
  "Production-grade web engineering, technical SEO, and long-form content. Three disciplines from one Iligan-based team, built for compounding growth.";

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

const serviceSchema = services.map((s) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: s.title,
  name: s.title,
  description: s.short,
  provider: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
  },
  areaServed: { "@type": "Country", name: "Philippines" },
  url: `${SITE.url}/services#${s.id}`,
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

const featuredProjectByService: Record<string, string> = {
  tech: "archant-shopify-maintenance",
  seo: "dekayed-shopify-storefront",
  content: "dogfix-astro-content-platform",
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} id="services-breadcrumb" />
      <JsonLd data={serviceSchema} id="services-schema" />
      <JsonLd data={faqSchema} id="services-faq" />

      {/* Hero */}
      <section className="pt-20 md:pt-28 pb-12 md:pb-20">
        <Container size="xl">
          <p className="label-eyebrow gold-gradient-text">Services</p>
          <h1 className="mt-6 max-w-4xl font-serif text-4xl md:text-6xl lg:text-7xl tracking-display text-emerald-deep leading-[1.05]">
            Three disciplines, one team.
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-ink-muted">
            Most websites worth admiring were built by people who could do tech,
            SEO, and content at once. So we built a studio that can.
          </p>
          <GoldDivider width="medium" className="mt-12" />
        </Container>
      </section>

      {/* Service deep-dives */}
      <div className="space-y-24 md:space-y-32 pb-24 md:pb-32">
        {services.map((service, idx) => {
          const Icon = service.icon;
          const reversed = idx % 2 === 1;
          const featuredProject = caseStudies.find(
            (study) => study.slug === featuredProjectByService[service.id],
          );
          return (
            <section
              key={service.id}
              id={service.id}
              aria-labelledby={`${service.id}-heading`}
              className="scroll-mt-24"
            >
              <Container size="xl">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start ${
                    reversed ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center h-12 w-12 rounded-sm border border-gold-base/40 text-emerald-deep">
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      <p className="label-eyebrow text-emerald-mid">
                        Service {String(idx + 1).padStart(2, "0")}
                      </p>
                    </div>
                    <h2
                      id={`${service.id}-heading`}
                      className="mt-6 font-serif text-3xl md:text-5xl tracking-display text-emerald-deep leading-[1.1]"
                    >
                      {service.title}
                    </h2>
                    <p className="mt-6 text-lg text-ink-muted leading-relaxed max-w-xl">
                      {service.description}
                    </p>

                    <h3 className="mt-12 label-eyebrow text-emerald-deep">
                      Deliverables
                    </h3>
                    <ul className="mt-5 space-y-3">
                      {service.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-3 text-ink leading-relaxed"
                        >
                          <CheckCircle2
                            size={18}
                            className="mt-1 shrink-0 text-emerald-mid"
                            strokeWidth={1.5}
                          />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="mt-10 label-eyebrow text-emerald-deep">
                      Stack & tools
                    </h3>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {service.stack.map((s) => (
                        <li
                          key={s}
                          className="text-xs uppercase tracking-[0.15em] px-3 py-1.5 border border-gold-base/40 rounded-sm text-emerald-deep"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-12">
                      <Link
                        href={`/contact?service=${service.id}`}
                        className="inline-flex items-center gap-2 text-emerald-deep font-medium hover:text-emerald-mid border-b border-gold-base/60 hover:border-gold-base pb-1 transition"
                      >
                        Talk to us about {service.title.toLowerCase()}
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5 lg:sticky lg:top-28">
                    {featuredProject && (
                      <div>
                        <div className="mb-5 flex items-center gap-3">
                          <span
                            aria-hidden="true"
                            className="h-px w-10 gold-gradient"
                          />
                          <p className="label-eyebrow text-emerald-mid">
                            Featured {service.title} project
                          </p>
                        </div>
                        <ProjectScrollReveal>
                          <CaseStudyCard study={featuredProject} />
                        </ProjectScrollReveal>
                        <p className="mt-5 border-l-2 border-gold-base pl-4 font-serif italic leading-relaxed text-ink-muted">
                          {service.short}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </Container>
            </section>
          );
        })}
      </div>

      {/* FAQ */}
      <section
        aria-labelledby="faq-heading"
        className="py-20 md:py-28 border-t border-gold-base/20"
      >
        <Container size="md">
          <div className="text-center max-w-2xl mx-auto">
            <p className="label-eyebrow gold-gradient-text">Common questions</p>
            <h2
              id="faq-heading"
              className="mt-4 font-serif text-3xl md:text-5xl tracking-display text-emerald-deep leading-[1.1]"
            >
              The short answers.
            </h2>
          </div>
          <Accordion className="mt-14">
            {faqs.map((f) => (
              <AccordionItem key={f.q} question={f.q}>
                <p>{f.a}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
