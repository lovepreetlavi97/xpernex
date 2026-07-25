import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPostsData } from "@/data/data";
import { getSEOMetadata } from "@/utils/seo";
import { ArrowLeft, Calendar, Clock, Sparkles } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    return getSEOMetadata({
      title: "Article Not Found",
      description: "The requested technical journal entry was not found.",
      path: "/blog"
    });
  }

  return getSEOMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`
  });
}

export default async function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative min-h-screen py-16 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />
      <div className="absolute top-[10%] left-[-15%] -z-10 h-[500px] w-[500px] rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] -z-10 h-[500px] w-[500px] rounded-full bg-brand-highlight/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-12 mt-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Journal</span>
          </Link>
        </div>

        {/* Article Meta Header */}
        <div className="mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1 text-xs font-semibold text-brand-secondary mb-6">
            <Sparkles className="h-3 w-3" />
            {post.category}
          </span>
          
          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-8">
            {post.title}
          </h1>

          {/* Date, read time, and author metadata */}
          <div className="flex flex-wrap items-center justify-between gap-6 pb-6 border-b border-brand-border">
            <div className="flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-10 w-10 rounded-full border border-brand-primary/35"
              />
              <div>
                <span className="block text-sm font-bold text-white leading-none">{post.author.name}</span>
                <span className="text-xs text-brand-muted mt-1.5 block leading-none">{post.author.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-brand-muted font-mono">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-[250px] sm:h-[400px] rounded-3xl overflow-hidden bg-brand-dark border border-brand-border/40 mb-12">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
        </div>

        {/* Content Body */}
        <div className="prose prose-invert max-w-none mb-16">
          <p className="text-brand-muted text-base sm:text-lg leading-relaxed mb-6 font-semibold italic border-l-2 border-brand-primary pl-4 py-1">
            "{post.excerpt}"
          </p>
          <p className="text-brand-muted text-base sm:text-lg leading-relaxed mb-8">
            {post.content}
          </p>
          <p className="text-brand-muted text-base sm:text-lg leading-relaxed mb-8">
            In designing enterprise systems, caching and latency bounds are paramount. A common optimization in Next.js 15 applications involves utilizing route segmentation controls coupled with dynamic query caches. This mitigates relational database overheads and keeps FCP scores within sub-second guidelines.
          </p>
          <p className="text-brand-muted text-base sm:text-lg leading-relaxed">
            By shifting database calls to the React Server Components layer, we ensure that client-side bundle weight is minimal. Developers can easily bind interactive components dynamically where user session state or client events require it, keeping the core site architecture fast, robust, and accessible.
          </p>
        </div>

        {/* Tags footer */}
        <div className="pb-12 border-b border-brand-border mb-16 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-lg bg-white/5 border border-white/5 px-3 py-1 text-xs font-semibold text-brand-muted"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Call to action */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 text-center border-brand-primary/20 relative overflow-hidden mb-20">
          <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />
          <h2 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
            Have Questions About This Article?
          </h2>
          <p className="text-brand-muted text-xs sm:text-sm max-w-xl mx-auto mb-8">
            Get in touch with our lead authors or consult with an engineering director to review your system requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-primary to-brand-highlight px-6 py-3 text-sm font-bold text-white shadow-lg"
          >
            <span>Consult an Expert</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
