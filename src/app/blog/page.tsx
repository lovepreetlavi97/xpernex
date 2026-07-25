"use client";

import { useState } from "react";
import Link from "next/link";
import { blogPostsData } from "@/data/data";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";

const CATEGORIES = ["All", "Web Development", "Artificial Intelligence", "Enterprise Software", "UI/UX Design", "DevOps", "SaaS Development"];

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = blogPostsData.filter((post) => {
    const matchesSearch = 
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
    
    const matchesCategory = 
      activeCategory === "All" || 
      post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="relative min-h-screen py-16 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />
      <div className="absolute top-[15%] left-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-brand-primary/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-brand-highlight/5 blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16 mt-8">
          <span className="text-brand-secondary font-mono text-sm font-semibold tracking-widest uppercase mb-3 block">
            Insights & Engineering Logs
          </span>
          <h1 className="font-sans text-5xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-8">
            The Xpernex <br />
            <span className="bg-gradient-to-r from-brand-primary via-brand-highlight to-brand-secondary bg-clip-text text-transparent">
              Technical Journal
            </span>
          </h1>
          <p className="text-brand-muted text-lg sm:text-xl leading-relaxed">
            Read technical reports, optimization logs, and system designs written by our principal developers and research directors.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="glass-panel rounded-2xl p-6 mb-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap gap-2 w-full lg:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-brand-primary border-brand-primary text-white shadow-[0_0_15px_rgba(91,91,255,0.3)]"
                    : "bg-white/5 border-white/5 text-brand-muted hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:max-w-xs">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-muted" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-brand-dark/50 border border-brand-border rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-brand-muted focus:outline-none focus:ring-1 focus:ring-brand-primary focus:border-brand-primary/50 transition-all duration-300"
            />
          </div>
        </div>

        {/* Articles Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="glass-panel rounded-2xl overflow-hidden group flex flex-col justify-between hover:border-brand-primary/20 transition-all duration-300"
              >
                {/* Visual Image */}
                <div className="relative h-56 overflow-hidden bg-brand-dark">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
                  <span className="absolute top-4 left-4 inline-flex items-center rounded-lg bg-brand-dark/85 backdrop-blur-md border border-white/10 px-3 py-1 text-xs font-semibold text-brand-secondary">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Meta info */}
                    <div className="flex items-center gap-4 text-xs text-brand-muted font-mono mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-sans text-xl font-bold text-white mb-4 group-hover:text-brand-secondary transition-colors duration-300 leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-brand-muted text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Author and cta */}
                  <div className="pt-6 border-t border-brand-border mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="h-8 w-8 rounded-full border border-brand-primary/30"
                      />
                      <div>
                        <span className="block text-xs font-bold text-white leading-none">{post.author.name}</span>
                        <span className="text-[10px] text-brand-muted mt-0.5 block leading-none">{post.author.role}</span>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center justify-center p-2 rounded-xl bg-white/5 border border-white/5 text-brand-primary hover:text-brand-secondary hover:border-brand-secondary/30 transition-all duration-300"
                      aria-label="Read article"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 glass-panel rounded-3xl border-white/5 mb-20">
            <p className="text-brand-muted text-base">No journal entries match your search query.</p>
            <button
              onClick={() => { setSearch(""); setActiveCategory("All"); }}
              className="text-brand-primary font-semibold hover:text-brand-secondary mt-4 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
