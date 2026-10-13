import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/brand/Logo";
import { FishIcon } from "@/components/brand/FishIcon";
import { JsonLd } from "@/components/seo/JsonLd";
import { WaitlistForm } from "./WaitlistForm";
import { SITE } from "@/lib/utils";

const title = "Join the waitlist — Swiftly Academy";
const description =
  "We're building a hands-on program that teaches you to work with AI — across software development, design, video, SEO, automation, and more. Tell us who you are and what you want to learn, and we'll shape the first cohorts around it.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/waitlist" },
  openGraph: {
    url: `${SITE.url}/waitlist`,
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
      name: "Waitlist",
      item: `${SITE.url}/waitlist`,
    },
  ],
};

const assurances = [
  "Free to join",
  "No spam, ever",
  "Shape the first cohort",
];

export default function WaitlistPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} id="waitlist-breadcrumb" />

      <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-emerald-deep text-cream">
        {/* Depth: emerald glow at top, dark vignette toward the edges */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_110%_80%_at_50%_-10%,rgba(0,117,74,0.65),transparent_55%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,34,22,0.8))]"
        />

        {/* Futuristic grid, faded out at the edges */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(248,246,240,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(248,246,240,0.14)_1px,transparent_1px)] [background-size:46px_46px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
        />

        {/* Gold aura behind the card */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-28 h-[440px] w-[720px] -translate-x-1/2 rounded-full bg-gold-base/10 blur-[140px]"
        />

        {/* Brand fish, very faint */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -right-24 opacity-[0.05]"
        >
          <FishIcon size={460} color="current" className="text-cream" />
        </div>

        {/* Minimal brand bar (global nav is hidden on this route) */}
        <header className="relative z-10">
          <Container size="xl" className="flex items-center justify-between py-6">
            <Link
              href="/"
              aria-label="Swiftlyph — home"
              className="inline-flex items-center opacity-90 transition-opacity hover:opacity-100"
            >
              <Logo variant="dark" size={28} priority />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-cream/55 transition-colors hover:text-cream"
            >
              <ArrowLeft size={14} />
              Back to site
            </Link>
          </Container>
        </header>

        {/* Centered content */}
        <div className="relative z-10 flex flex-1 items-center">
          <Container size="sm" className="w-full py-10">
            <div className="mx-auto max-w-xl text-center">
              <p className="label-eyebrow inline-flex items-center gap-2 text-gold-light">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-light opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold-light" />
                </span>
                Join the Waitlist
              </p>
              <h1 className="mt-5 font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-display text-cream">
                Learn to build{" "}
                <span className="italic gold-gradient-text">with AI.</span>
              </h1>
              <p className="mt-5 text-cream/70 leading-relaxed">
                Master AI-assisted skills that actually ship, guided by
                practitioners. First cohorts are small and{" "}
                <span className="text-gold-light">slots are limited</span>.
              </p>
            </div>

            <div className="mt-10">
              <WaitlistForm />
            </div>

            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-cream/50">
              {assurances.map((item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-gold-base" />
                  {item}
                </li>
              ))}
            </ul>
          </Container>
        </div>

        {/* Slim legal line */}
        <footer className="relative z-10">
          <Container
            size="xl"
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 py-6 text-center text-xs text-cream/40"
          >
            <span>
              © {new Date().getFullYear()} {SITE.name}
            </span>
            <span aria-hidden="true">·</span>
            <span>Built in {SITE.location}</span>
            <span aria-hidden="true">·</span>
            <Link
              href="/contact"
              className="transition-colors hover:text-cream/70"
            >
              Contact
            </Link>
          </Container>
        </footer>
      </section>
    </>
  );
}
