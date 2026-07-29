"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/data/data";
import DynamicIcon from "@/components/DynamicIcon";

export default function ServicesPreview() {
  // Preview first 6 services on home page
  const previewServices = servicesData.slice(0, 6);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="relative pt-10 pb-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-brand-border/40 bg-brand-dark/30">
      {/* Background Lights */}
      <div className="absolute top-[30%] right-[-10%] -z-10 h-[400px] w-[400px] rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] -z-10 h-[400px] w-[400px] rounded-full bg-brand-secondary/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-brand-secondary font-mono text-sm font-semibold tracking-widest uppercase mb-3 block">
              Core Expertise
            </span>
            <h2 className="font-sans text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Engineering Intelligent Experiences
            </h2>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 font-semibold text-brand-primary hover:text-brand-secondary transition-colors duration-300"
          >
            <span>View All {servicesData.length} Services</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewServices.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseMove={handleMouseMove}
              className="glow-card glass-panel rounded-2xl p-8 hover:border-brand-primary/30 group relative flex flex-col justify-between overflow-hidden"
            >
              {/* Card Glow Corner Background */}
              <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-brand-primary/5 group-hover:bg-brand-primary/10 blur-xl transition-all duration-500" />
              
              <div>
                {/* Icon Container */}
                <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary group-hover:text-brand-secondary group-hover:border-brand-secondary/30 transition-all duration-300 mb-6">
                  <DynamicIcon name={service.iconName} className="h-6 w-6" />
                </div>

                <h3 className="font-sans text-xl font-bold text-white mb-4 group-hover:text-brand-secondary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-primary hover:text-white transition-colors duration-200 mt-auto"
              >
                <span>Discover System</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
