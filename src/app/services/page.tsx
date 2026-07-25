import type { Metadata } from "next";
import Link from "next/link";
import { getSEOMetadata } from "@/utils/seo";
import { servicesData } from "@/data/data";
import DynamicIcon from "@/components/DynamicIcon";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = getSEOMetadata({
  title: "Our Services | Enterprise Software & AI",
  description: "Explore our 13 specialized services including VAS, Artificial Intelligence, Cloud Solutions, DevOps, Web and Mobile apps engineering.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen py-16 overflow-hidden">
      {/* Background visual styles */}
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />
      <div className="absolute top-[15%] left-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-brand-primary/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-brand-highlight/5 blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-24 mt-8">
          <span className="text-brand-secondary font-mono text-sm font-semibold tracking-widest uppercase mb-3 block">
            Core Capabilities
          </span>
          <h1 className="font-sans text-5xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-8">
            Resilient Software. <br />
            <span className="bg-gradient-to-r from-brand-primary via-brand-highlight to-brand-secondary bg-clip-text text-transparent">
              Intelligent Engines.
            </span>
          </h1>
          <p className="text-brand-muted text-lg sm:text-xl leading-relaxed">
            We architect and build low-latency computational systems, clean responsive interfaces, and custom machine learning pipelines for enterprise operations.
          </p>
        </div>

        {/* Services Grid (12 Items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {servicesData.map((service) => (
            <div
              key={service.slug}
              className="glass-panel rounded-2xl p-8 hover:border-brand-primary/30 group relative flex flex-col justify-between overflow-hidden transition-all duration-300"
            >
              {/* Inner glowing ball */}
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

              <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand-secondary">
                  Ready to deploy
                </span>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-primary hover:text-white transition-colors duration-200"
                >
                  <span>Explore System</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic bottom teaser callout */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 text-center border-brand-primary/20 relative overflow-hidden">
          <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
            Need a Bespoke Integration?
          </h2>
          <p className="text-brand-muted text-sm max-w-xl mx-auto mb-8">
            Our systems architects can draft tailored pipelines to link generative models directly with your proprietary enterprise records.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-primary to-brand-highlight px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(91,91,255,0.3)] hover:scale-[1.02]"
          >
            <span>Consult an Architect</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
