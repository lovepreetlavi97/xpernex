"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Layers } from "lucide-react";
import { projectsData } from "@/data/data";

export default function PortfolioPreview() {
  // Take first 3 case studies for preview
  const previewProjects = projectsData.slice(0, 3);

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 border-b border-brand-border/40 bg-brand-dark/20">
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-20">
          <div>
            <span className="text-brand-secondary font-mono text-sm font-semibold tracking-widest uppercase mb-3 block">
              Case Studies
            </span>
            <h2 className="font-sans text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Systems in Action
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 font-semibold text-brand-primary hover:text-brand-secondary transition-colors duration-300"
          >
            <span>Explore Portfolio</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {previewProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel rounded-2xl overflow-hidden group flex flex-col justify-between"
            >
              {/* Image & Overlay */}
              <div className="relative h-64 overflow-hidden bg-brand-dark">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
                
                {/* Category tag */}
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-lg bg-brand-dark/80 backdrop-blur-md border border-white/10 px-3 py-1 text-xs font-semibold text-brand-secondary">
                  <Layers className="h-3 w-3" />
                  {project.category}
                </span>
              </div>

              {/* Text Area */}
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

                {/* Key Metrics Display */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-brand-border">
                  {project.metrics.slice(0, 3).map((met) => (
                    <div key={met.label} className="text-left">
                      <span className="block text-brand-secondary font-mono text-base font-bold sm:text-lg">
                        {met.value}
                      </span>
                      <span className="block text-[10px] sm:text-xs text-brand-muted uppercase font-semibold leading-tight mt-1">
                        {met.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div className="pt-8">
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-primary hover:text-white transition-colors duration-200"
                  >
                    <span>Read Full Brief</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
