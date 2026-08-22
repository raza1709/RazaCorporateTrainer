import { Metadata } from "next";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { formatDate } from "@/lib/utils";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — QA & Testing Insights",
  description: "Practical articles on Playwright, test automation, QA leadership, performance engineering, and AI-assisted testing by Raza Shah.",
};

const categories = ["All", "Playwright", "Automation Testing", "API Testing", "Performance Testing", "QA Leadership", "AI Testing", "Career Growth"];

export default function BlogPage() {
  const posts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <Navbar />
      <main className="bg-slate-50 min-h-screen pt-[68px]">
        {/* Header */}
        <div className="bg-[#0B2341] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-5">
              Blog
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              QA & Testing Insights
            </h1>
            <p className="text-base text-white/55 max-w-xl mx-auto">
              Practical articles on modern QA practices, automation frameworks, leadership, and AI-powered testing.
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white border-b border-slate-200 sticky top-[68px] z-30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex gap-1 overflow-x-auto scrollbar-hide py-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="flex-shrink-0 rounded-full px-4 py-1.5 text-xs font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors first:bg-[#0B2341] first:text-white"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Posts grid */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          {posts.length === 0 ? (
            <div className="text-center py-20 text-slate-400">
              <p className="font-display text-lg font-semibold mb-2">No posts yet</p>
              <p className="text-sm">Check back soon for articles on QA engineering.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                        {post.category}
                      </span>
                      {post.readingTime && (
                        <span className="flex items-center gap-1 text-xs text-slate-400">
                          <Clock className="h-3 w-3" aria-hidden="true" />
                          {post.readingTime} min read
                        </span>
                      )}
                    </div>
                    <h2 className="font-display text-base font-bold text-[#0B2341] mb-2 leading-snug group-hover:text-emerald-700 transition-colors">
                      <Link href={post.url}>{post.title}</Link>
                    </h2>
                    <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-4">{post.description}</p>
                    <div className="flex items-center justify-between">
                      <time className="text-xs text-slate-400" dateTime={post.date}>
                        {formatDate(post.date)}
                      </time>
                      <Link
                        href={post.url}
                        className="inline-flex items-center gap-1 text-xs font-semibold font-display text-emerald-600 hover:text-emerald-700 group/link"
                        aria-label={`Read ${post.title}`}
                      >
                        Read
                        <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
