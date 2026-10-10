import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { GoldDivider } from "@/components/brand/GoldDivider";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContactForm } from "./ContactForm";
import { SITE } from "@/lib/utils";

const title = "Contact — start with Swiftly";
const description =
  "Start a development subscription inquiry or discuss a custom project. A Swiftly principal reads every message and replies with a written response. Iligan-based, working with teams worldwide.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    url: `${SITE.url}/contact`,
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
      name: "Contact",
      item: `${SITE.url}/contact`,
    },
  ],
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE.url}/contact`,
  about: {
    "@type": "Organization",
    name: SITE.name,
    email: SITE.email,
    url: SITE.url,
  },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ engagement?: string }>;
}) {
  const { engagement } = await searchParams;
  const defaultEngagement =
    engagement === "subscription" ||
    engagement === "custom" ||
    engagement === "fde"
      ? engagement
      : undefined;

  return (
    <>
      <JsonLd data={breadcrumbSchema} id="contact-breadcrumb" />
      <JsonLd data={contactSchema} id="contact-schema" />

      <section className="pt-20 md:pt-28 pb-12 md:pb-16">
        <Container size="xl">
          <p className="label-eyebrow gold-gradient-text">Contact</p>
          <h1 className="mt-6 max-w-3xl font-serif text-4xl md:text-6xl lg:text-7xl tracking-display text-emerald-deep leading-[1.05]">
            Tell us about the work.
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-ink-muted leading-relaxed">
            A custom build, the development subscription, or forward deployed
            engineering — tell us what you need. A Swiftly principal reads your
            message and replies with a written response, not a calendar link.
          </p>
          <GoldDivider width="medium" className="mt-10" />
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
            <div className="lg:col-span-7">
              <ContactForm defaultEngagement={defaultEngagement} />
            </div>

            <aside className="lg:col-span-5 space-y-10">
              <div>
                <h2 className="label-eyebrow text-emerald-deep">Direct</h2>
                <ul className="mt-5 space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail
                      size={18}
                      className="mt-1 shrink-0 text-gold-dark"
                      strokeWidth={1.5}
                    />
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-emerald-deep hover:text-emerald-mid border-b border-gold-base/60 pb-0.5"
                    >
                      {SITE.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin
                      size={18}
                      className="mt-1 shrink-0 text-gold-dark"
                      strokeWidth={1.5}
                    />
                    <span className="text-ink">
                      Studio in {SITE.location}.
                      <br />
                      Working hours overlap with US, EU, and APAC.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock
                      size={18}
                      className="mt-1 shrink-0 text-gold-dark"
                      strokeWidth={1.5}
                    />
                    <span className="text-ink">
                      We reply within two business days.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="border border-gold-base/30 rounded-sm overflow-hidden">
                <div className="aspect-[4/3] bg-emerald-deep relative">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-25"
                  >
                    {Array.from({ length: 36 }).map((_, i) => (
                      <span
                        key={i}
                        className="border border-gold-base/30"
                      ></span>
                    ))}
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    <p className="label-eyebrow text-gold-light">Studio</p>
                    <p className="mt-3 font-serif text-2xl md:text-3xl text-cream tracking-tightish">
                      {SITE.location}
                    </p>
                    <p className="mt-2 text-cream/80 text-sm">
                      14.599512° N, 120.984222° E
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="label-eyebrow text-emerald-deep">
                  Already working with us?
                </h2>
                <p className="mt-4 text-ink-muted leading-relaxed text-sm">
                  Reply to any thread you have with your principal. New
                  Slack/Linear access takes ~1 business day.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
