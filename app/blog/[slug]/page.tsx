import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer2/hooks";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = allPosts.find((p) => p.slug === slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    other: {
      "script:ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        author: {
          "@type": "Person",
          name: post.author,
        },
        datePublished: post.date,
      }),
    },
  };
}

function PostBody({ post }: { post: (typeof allPosts)[0] }) {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className="prose prose-slate prose-headings:font-display prose-headings:text-[#0B2341] prose-a:text-emerald-600 prose-strong:text-[#0B2341] max-w-none">
      <MDXContent />
    </article>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const post = allPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const related = allPosts
    .filter(
      (p) => p.slug !== post.slug && p.category === post.category
    )
    .slice(0, 3);

  return (
    <>
      <Navbar />

      <main className="bg-white min-h-screen pt-[68px]">
        {/* Hero */}
        <div className="bg-[#0B2341] py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft
                className="h-4 w-4"
                aria-hidden="true"
              />
              Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 text-xs font-semibold text-emerald-400">
                {post.category}
              </span>

              {post.readingTime && (
                <span className="flex items-center gap-1.5 text-xs text-white/40">
                  <Clock
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  />
                  {post.readingTime} min read
                </span>
              )}
            </div>

            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              {post.title}
            </h1>

            <p className="text-base text-white/55 leading-relaxed mb-6">
              {post.description}
            </p>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-400 font-display">
                RS
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  {post.author}
                </p>

                <time
                  className="text-xs text-white/40"
                  dateTime={post.date}
                >
                  {formatDate(post.date)}
                </time>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
          <PostBody post={post} />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-2 pt-8 border-t border-slate-200">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 rounded-2xl bg-[#0B2341] p-8 text-center">
            <h3 className="font-display text-xl font-bold text-white mb-2">
              Need Help With Your QA Strategy?
            </h3>

            <p className="text-sm text-white/55 mb-6">
              Book a free 30-minute assessment and let&rsquo;s discuss
              how to improve your quality engineering.
            </p>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold font-display text-white hover:bg-emerald-600 transition-colors"
            >
              Book Free QA Assessment
            </Link>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-16">
              <h3 className="font-display text-xl font-bold text-[#0B2341] mb-6">
                Related Posts
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={p.url}
                    className="group rounded-xl border border-slate-200 bg-slate-50 p-5 hover:border-emerald-200 transition-colors"
                  >
                    <p className="text-[10px] font-semibold text-emerald-600 uppercase tracking-wider mb-2">
                      {p.category}
                    </p>

                    <h4 className="font-display text-sm font-bold text-[#0B2341] leading-snug group-hover:text-emerald-700 transition-colors">
                      {p.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}