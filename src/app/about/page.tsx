import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { GoldDivider } from "@/components/brand/GoldDivider";
import { VerseBlock } from "@/components/brand/VerseBlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTABand } from "@/components/sections/CTABand";
import { SITE } from "@/lib/utils";

const title = "About — the studio behind Swiftlyph";
const description =
  "Swiftly is a senior-led software engineering studio in Iligan, Philippines. We build, improve, and scale software through custom projects, a monthly development subscription, and forward deployed engineering — AI-assisted, human-led, and focused on what matters.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    url: `${SITE.url}/about`,
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
      name: "About",
      item: `${SITE.url}/about`,
    },
  ],
};

const team = [
  {
    name: "Rean Cirl Balaba",
    role: "Principal · Engineering",
    bio: "Leads technical builds and architecture. Years across product engineering, performance work, and growth-side platforms.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} id="about-breadcrumb" />

      {/* Hero */}
      <section className="pt-20 md:pt-28 pb-12">
        <Container size="lg">
          <p className="label-eyebrow gold-gradient-text">About</p>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl tracking-display text-emerald-deep leading-[1]">
            We are <span className="italic gold-gradient-text">swiftly.</span>
          </h1>
          <GoldDivider width="medium" className="mt-12" />
        </Container>
      </section>

      {/* Story */}
      <section className="py-12 md:py-20">
        <Container size="sm">
          <div className="prose-swiftly">
            <p>
              Swiftly began as a quiet idea: that a small, senior team — really
              small — could do excellent engineering work, the kind that
              compounds, if it had the patience to do it well and the discipline
              to ship it on time.
            </p>
            <p>
              We are a software engineering studio based in Iligan, Philippines,
              working with founders and product teams around the world. We help
              businesses build, improve, integrate, and scale software — and we
              offer three ways to do it: a custom build, a monthly development
              subscription, or embedded forward deployed engineering.
            </p>
            <h2>What we believe</h2>
            <p>
              Great software solves a real problem without unnecessary
              complexity. So we build only what matters, make thoughtful
              technical decisions, and treat marketing sites and products alike
              as real software: clean architecture, honest testing, performance
              that holds up. We hold that standard no matter how you engage us.
            </p>
            <h2>Swiftly, not recklessly</h2>
            <p>
              Speed matters, but it should never come at the expense of quality
              or sound engineering judgment. &ldquo;Swiftly&rdquo; means
              disciplined, thoughtful progress — momentum with intent. We lean
              on AI across requirements, implementation, and testing to move
              efficiently, while experienced engineers stay accountable for
              architecture, review, and everything we ship.
            </p>
            <h2>How we work</h2>
            <p>
              The studio is small and senior by design, with a trusted bench we
              bring in as the work requires. Requests, priorities, and progress
              flow through a workflow platform we are building ourselves, rather
              than a generic board bolted on. Whether you hire us for a scoped
              project, subscribe for continuous development, or embed an engineer
              with your team, the same people are on the work from start to
              finish — no junior handoff, no translation layer.
            </p>
          </div>
        </Container>
      </section>

      {/* Verse — full bleed emerald */}
      <section
        aria-label="Isaiah 60:22"
        className="bg-emerald-deep text-cream py-24 md:py-32"
      >
        <Container size="md">
          <p className="label-eyebrow text-gold-light">Our foundation</p>
          <p className="mt-8 font-serif italic text-3xl md:text-5xl lg:text-6xl text-cream leading-[1.15] tracking-tightish max-w-4xl">
            “{SITE.verse.text}”
          </p>
          <p className="mt-10 label-eyebrow text-gold-light">
            — {SITE.verse.reference}
          </p>
          <p className="mt-12 max-w-2xl text-cream/85 leading-relaxed">
            We took the studio&rsquo;s name from this verse. We hold it as a working
            philosophy — that disciplined, patient work compounds, and that
            there is a season for ambitious things to happen swiftly. It is the
            posture, not the pitch.
          </p>
        </Container>
      </section>

      {/* Team */}
      <section
        aria-labelledby="team-heading"
        className="py-20 md:py-28 border-t border-gold-base/20"
      >
        <Container size="xl">
          <div className="max-w-2xl">
            <p className="label-eyebrow gold-gradient-text">The team</p>
            <h2
              id="team-heading"
              className="mt-4 font-serif text-3xl md:text-5xl tracking-display text-emerald-deep leading-[1.1]"
            >
              Senior people, on every project.
            </h2>
            <p className="mt-6 text-ink-muted leading-relaxed">
              The studio is small on purpose — a senior core with a trusted
              bench of engineers we bring in as the work requires. Every
              engagement is led by a Swiftly principal from first request to
              delivery.
            </p>
          </div>

          <ul className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((person) => (
              <li
                key={person.name}
                className="border border-gold-base/30 rounded-sm p-7 bg-cream"
              >
                <div className="aspect-[4/5] mb-6 bg-emerald-soft border border-gold-base/30 rounded-sm flex items-center justify-center">
                  <span className="font-serif text-5xl gold-gradient-text">
                    {person.name
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                </div>
                <p className="label-eyebrow text-emerald-mid">{person.role}</p>
                <h3 className="mt-3 font-serif text-xl text-emerald-deep tracking-tightish">
                  {person.name}
                </h3>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                  {person.bio}
                </p>
              </li>
            ))}

            <li className="border border-gold-base/30 rounded-sm p-7 bg-cream md:col-span-2 flex flex-col justify-center">
              <p className="label-eyebrow text-emerald-mid">The bench</p>
              <h3 className="mt-3 font-serif text-xl text-emerald-deep tracking-tightish">
                Senior collaborators, as the work requires
              </h3>
              <p className="mt-3 text-sm text-ink-muted leading-relaxed max-w-xl">
                Depending on the request, a frontend developer, a backend
                developer, or a reviewing engineer joins the active workstream —
                supported by AI-assisted tooling throughout. We bring in people
                we have worked with and trust, rather than scale headcount for
                its own sake.
              </p>
            </li>
          </ul>

          <div className="mt-20">
            <VerseBlock size="sm" align="center" className="mx-auto" />
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
