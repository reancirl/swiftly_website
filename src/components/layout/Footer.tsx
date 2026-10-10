import Link from "next/link";
import { Mail } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { GoldDivider } from "@/components/brand/GoldDivider";
import { Container } from "./Container";
import { SITE } from "@/lib/utils";

function FacebookIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.25-1.5 1.5-1.5H17V4.4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10.5H7.6v3h2.7V21h3.2z" />
    </svg>
  );
}

function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="4.5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.5 8.5h3v11h-3v-11zM6 4a1.7 1.7 0 1 0 0 3.4A1.7 1.7 0 0 0 6 4zm4 4.5h2.9v1.5h.04c.4-.75 1.4-1.55 2.86-1.55 3 0 3.6 1.97 3.6 4.55V19.5h-3v-5.4c0-1.3-.02-2.97-1.8-2.97-1.8 0-2.07 1.4-2.07 2.85V19.5H10v-11z" />
    </svg>
  );
}

const linkColumns = [
  {
    heading: "Services",
    links: [
      { href: "/custom-development", label: "Custom Development" },
      { href: "/subscription", label: "Development Subscription" },
      { href: "/forward-deployed-engineering", label: "Forward Deployed Engineering" },
      { href: "/services", label: "Compare all three" },
    ],
  },
  {
    heading: "Studio",
    links: [
      { href: "/work", label: "Case studies" },
      { href: "/blog", label: "Journal" },
      { href: "/about", label: "About" },
    ],
  },
  {
    heading: "Get in touch",
    links: [
      { href: "/contact?engagement=custom", label: "Discuss a project" },
      { href: "/contact?engagement=fde", label: "FDE inquiry" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-emerald-deep text-cream mt-24" aria-label="Footer">
      <Container size="xl" className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Logo variant="dark" size={64} />
            <p className="mt-5 text-cream/80 max-w-xs leading-relaxed text-sm">
              {SITE.tagline}
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-6 inline-flex items-center gap-2 text-cream/90 hover:text-gold-light text-sm group"
            >
              <Mail size={16} className="text-gold-base" />
              <span className="group-hover:underline underline-offset-4 decoration-gold-base/60">
                {SITE.email}
              </span>
            </a>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Swiftly on Facebook"
                className="inline-flex items-center justify-center h-9 w-9 rounded-sm border border-gold-base/30 text-cream/85 hover:text-gold-light hover:border-gold-base/60 transition"
              >
                <FacebookIcon size={15} />
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Swiftly on Instagram"
                className="inline-flex items-center justify-center h-9 w-9 rounded-sm border border-gold-base/30 text-cream/85 hover:text-gold-light hover:border-gold-base/60 transition"
              >
                <InstagramIcon size={15} />
              </a>
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Swiftly on LinkedIn"
                className="inline-flex items-center justify-center h-9 w-9 rounded-sm border border-gold-base/30 text-cream/85 hover:text-gold-light hover:border-gold-base/60 transition"
              >
                <LinkedinIcon size={15} />
              </a>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {linkColumns.map((col) => (
              <div key={col.heading}>
                <h2 className="label-eyebrow text-gold-light">{col.heading}</h2>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-cream/85 hover:text-gold-light text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <GoldDivider width="full" className="mt-14 opacity-50" />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <p className="md:col-span-4 text-xs text-cream/60">
            © {year} {SITE.name}. All rights reserved. {SITE.location}.
          </p>
          <p className="md:col-span-8 font-serif italic text-sm text-cream/70 leading-relaxed">
            “{SITE.verse.text}”
            <span className="block mt-1 not-italic label-eyebrow text-gold-light">
              — {SITE.verse.reference}
            </span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
