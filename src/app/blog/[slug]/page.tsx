import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/layout/Container";
import { GoldDivider } from "@/components/brand/GoldDivider";
import { VerseBlock } from "@/components/brand/VerseBlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTABand } from "@/components/sections/CTABand";
import { mdxComponents } from "@/components/blog/MdxComponents";
import {
  getAllSlugs,
  getPostBySlug,
  formatPostDate,
  extractHeadings,
} from "@/lib/blog";
import { SITE } from "@/lib/utils";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      url: `${SITE.url}/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: post.ogImage
        ? [{ url: post.ogImage, width: 1600, height: 1000, alt: post.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.ogImage ? [post.ogImage] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const headings = extractHeadings(post.content);

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
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE.url}/blog/${post.slug}`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/logo/swiftly-favicon.svg`,
      },
    },
    image: post.ogImage ? `${SITE.url}${post.ogImage}` : undefined,
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} id="post-breadcrumb" />
      <JsonLd data={articleSchema} id="post-article" />

      <article>
        <section className="pt-16 md:pt-24 pb-10 md:pb-16">
          <Container size="lg">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-emerald-mid hover:text-emerald-deep"
            >
              <ArrowLeft size={14} />
              All notes
            </Link>
            <p className="mt-8 label-eyebrow gold-gradient-text">
              {formatPostDate(post.date)} · {post.readingMinutes} min read
            </p>
            <h1 className="mt-5 max-w-4xl font-serif text-4xl md:text-6xl lg:text-7xl tracking-display text-emerald-deep leading-[1.05]">
              {post.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-ink-muted leading-relaxed">
              {post.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <span className="text-emerald-deep font-medium">
                {post.author}
              </span>
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
            </div>
            <GoldDivider width="medium" className="mt-12" />
          </Container>
        </section>

        <section className="pb-20 md:pb-28">
          <Container size="lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-8">
                <div className="prose-swiftly">
                  <MDXRemote
                    source={post.content}
                    components={mdxComponents}
                  />
                </div>

                <div className="mt-16">
                  <VerseBlock size="sm" />
                </div>
              </div>

              {headings.length > 0 && (
                <aside className="lg:col-span-4 lg:sticky lg:top-28 self-start">
                  <p className="label-eyebrow text-emerald-mid">In this note</p>
                  <ol className="mt-5 space-y-3 border-l border-gold-base/40 pl-5">
                    {headings.map((h) => (
                      <li
                        key={h.id}
                        className={
                          h.level === 3
                            ? "pl-4 text-sm text-ink-muted"
                            : "text-sm text-emerald-deep"
                        }
                      >
                        <a
                          href={`#${h.id}`}
                          className="hover:text-emerald-mid transition-colors"
                        >
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </aside>
              )}
            </div>
          </Container>
        </section>
      </article>

      <CTABand />
    </>
  );
}
