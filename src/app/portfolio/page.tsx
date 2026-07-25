"use client";

import { useState } from "react";
import Link from "next/link";
import { projectsData } from "@/data/data";
import { Search, Layers, ArrowRight } from "lucide-react";

const CATEGORIES = ["All", "Artificial Intelligence", "Machine Learning", "Enterprise Software", "Web Development", "SaaS Development", "Automation"];

export default function PortfolioPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch = 
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.client.toLowerCase().includes(search.toLowerCase()) ||
      project.industry.toLowerCase().includes(search.toLowerCase());
    
    const matchesCategory = 
      activeCategory === "All" || 
      project.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="relative min-h-screen py-16 overflow-hidden">
      {/* Background Grids */}
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-brand-primary/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-brand-secondary/5 blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16 mt-8">
          <span className="text-brand-secondary font-mono text-sm font-semibold tracking-widest uppercase mb-3 block">
            Our Work
          </span>
          <h1 className="font-sans text-5xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-8">
            Case Studies & <br />
            <span className="bg-gradient-to-r from-brand-primary via-brand-highlight to-brand-secondary bg-clip-text text-transparent">
              Systems Integration
            </span>
          </h1>
          <p className="text-brand-muted text-lg sm:text-xl leading-relaxed">
            Discover how we design and deploy scalable architectures, fine-tune models on corporate records, and automate complex workflows for leading enterprises.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="glass-panel rounded-2xl p-6 mb-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Categories */}
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

          {/* Search Box */}
          <div className="relative w-full lg:max-w-xs">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-muted" />
            <input
              type="text"
              placeholder="Search case studies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-brand-dark/50 border border-brand-border rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-brand-muted focus:outline-none focus:ring-1 focus:ring-brand-primary focus:border-brand-primary/50 transition-all duration-300"
            />
          </div>
        </div>

        {/* Portfolio Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredProjects.map((project) => (
              <div
                key={project.slug}
                className="glass-panel rounded-2xl overflow-hidden group flex flex-col justify-between hover:border-brand-primary/20 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden bg-brand-dark">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-lg bg-brand-dark/85 backdrop-blur-md border border-white/10 px-3 py-1 text-xs font-semibold text-brand-secondary">
                    <Layers className="h-3 w-3" />
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-brand-muted text-xs font-mono block mb-2">{project.client}</span>
                    <h3 className="font-sans text-xl font-bold text-white mb-4 group-hover:text-brand-secondary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-brand-muted text-sm leading-relaxed mb-6 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 pt-6 border-t border-brand-border mt-auto">
                    {project.metrics.map((met) => (
                      <div key={met.label}>
                        <span className="block text-brand-secondary font-mono text-base font-bold sm:text-lg">
                          {met.value}
                        </span>
                        <span className="block text-[10px] text-brand-muted uppercase font-semibold mt-1 leading-tight">
                          {met.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Read More */}
                  <div className="pt-8">
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-primary hover:text-white transition-colors duration-200"
                    >
                      <span>Read Full Brief</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 glass-panel rounded-3xl border-white/5 mb-20">
            <p className="text-brand-muted text-base">No case studies match your search criteria.</p>
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
