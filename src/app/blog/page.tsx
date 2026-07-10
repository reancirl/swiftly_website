import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { GoldDivider } from "@/components/brand/GoldDivider";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTABand } from "@/components/sections/CTABand";
import { getAllPosts, formatPostDate } from "@/lib/blog";
import { SITE } from "@/lib/utils";

const title = "Journal — notes from Swiftly";
const description =
  "Notes on engineering, SEO, and content from the Swiftly studio. Plain language, opinionated takes, written by the people doing the work.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: {
    url: `${SITE.url}/blog`,
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
      name: "Journal",
      item: `${SITE.url}/blog`,
    },
  ],
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE.name} Journal`,
    url: `${SITE.url}/blog`,
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      datePublished: p.date,
      author: { "@type": "Person", name: p.author },
      url: `${SITE.url}/blog/${p.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} id="blog-breadcrumb" />
      <JsonLd data={blogSchema} id="blog-schema" />

      <section className="pt-20 md:pt-28 pb-12 md:pb-16">
        <Container size="xl">
          <p className="label-eyebrow gold-gradient-text">Journal</p>
          <h1 className="mt-6 max-w-4xl font-serif text-4xl md:text-6xl lg:text-7xl tracking-display text-emerald-deep leading-[1.05]">
            Notes from the studio.
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-ink-muted">
            Short essays on engineering, SEO, and content — written by the
            people doing the work, not a marketing team.
          </p>
          <GoldDivider width="medium" className="mt-10" />
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container size="xl">
          <ul className="divide-y divide-gold-base/30 border-t border-b border-gold-base/30">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block py-8 md:py-10 group focus:outline-none"
                >
                  <article className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-baseline">
                    <div className="md:col-span-3">
                      <p className="label-eyebrow text-emerald-mid">
                        {formatPostDate(post.date)}
                      </p>
                      <p className="mt-2 text-xs text-ink-muted">
                        {post.readingMinutes} min read
                      </p>
                    </div>
                    <div className="md:col-span-9">
                      <h2 className="font-serif text-2xl md:text-3xl tracking-tightish text-emerald-deep leading-[1.2] group-hover:gold-gradient-text transition">
                        {post.title}
                      </h2>
                      <p className="mt-4 text-ink-muted leading-relaxed max-w-2xl">
                        {post.description}
                      </p>
                      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
                        <ul className="flex flex-wrap gap-2">
                          {post.tags.map((t) => (
                            <li
                              key={t}
                              className="text-xs uppercase tracking-[0.15em] px-2.5 py-1 border border-gold-base/40 rounded-sm text-emerald-deep"
                            >
                              {t}
                            </li>
                          ))}
                        </ul>
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-deep group-hover:text-emerald-mid">
                          Read
                          <ArrowRight
                            size={14}
                            className="transition-transform group-hover:translate-x-0.5"
                          />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTABand />
    </> 
  );
}
