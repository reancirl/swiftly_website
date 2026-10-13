import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RouteChrome } from "@/components/layout/RouteChrome";
import { JsonLd } from "@/components/seo/JsonLd";
import { BrandLoader } from "@/components/brand/BrandLoader";
import { SITE } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#006241",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "software development agency",
    "software development company Philippines",
    "custom software development",
    "development subscription",
    "software development as a service",
    "forward deployed engineering",
    "embedded software engineering",
    "AI-assisted software development",
    "expert-led software engineering",
    "Iligan software studio",
    "Swiftly",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — ${SITE.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/logo/swiftly-favicon.svg", type: "image/svg+xml" }],
    shortcut: "/logo/swiftly-favicon.svg",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/logo/swiftly-favicon.svg`,
  description: SITE.description,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Iligan",
    addressCountry: "PH",
  },
  sameAs: [SITE.social.facebook, SITE.social.instagram, SITE.social.linkedin],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Engineering engagement models",
    itemListElement: [
      {
        "@type": "Service",
        name: "Custom Software Development",
        url: `${SITE.url}/custom-development`,
      },
      {
        "@type": "Service",
        name: "Development Subscription",
        url: `${SITE.url}/subscription`,
      },
      {
        "@type": "Service",
        name: "Forward Deployed Engineering",
        url: `${SITE.url}/forward-deployed-engineering`,
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  inLanguage: "en-PH",
  publisher: { "@type": "Organization", name: SITE.name },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-cream text-ink antialiased min-h-screen flex flex-col">
        <JsonLd data={organizationSchema} id="org-schema" />
        <JsonLd data={websiteSchema} id="website-schema" />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-emerald-deep focus:text-cream focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <BrandLoader />
        <RouteChrome>
          <Navbar />
        </RouteChrome>
        <main id="main" className="flex-1">
          {children}
        </main>
        <RouteChrome>
          <Footer />
        </RouteChrome>
      </body>
    </html>
  );
}
