"use client";

import { motion } from "framer-motion";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover",
    tagline: "Technical Feasibility & Scope",
    description: "We analyze your existing workflows, audit legacy configurations, and map security thresholds to outline a clear development roadmap."
  },
  {
    step: "02",
    title: "Plan",
    tagline: "Architecture Blueprinting",
    description: "Our system engineers draft database topologies, map out domain microservices, and configure secure API schemas before writing code."
  },
  {
    step: "03",
    title: "Design",
    tagline: "High-Fidelity Interface Systems",
    description: "We build responsive, custom Figma design systems with strict typography grids, tactile button layouts, and interactive visual prototypes."
  },
  {
    step: "04",
    title: "Develop",
    tagline: "Resilient Type-Safe Engineering",
    description: "We write clean, documented frontend code using Next.js 15 and optimize backend microservices using Go, Rust, or NestJS."
  },
  {
    step: "05",
    title: "Test",
    tagline: "Automated Verification & Audits",
    description: "We launch unit tests, run security vulnerability scans on container images, and load-test API gateways using automated simulation scripts."
  },
  {
    step: "06",
    title: "Deploy",
    tagline: "Edge CDN & Kubernetes GitOps",
    description: "We package builds in Docker containers and synchronize cluster resources declarations automatically using declarative GitOps models."
  },
  {
    step: "07",
    title: "Scale",
    tagline: "Continuity & Drift Tracking",
    description: "We implement continuous observability metrics dashboarding to track load latency spikes, database queues, and model drifts."
  }
];

export default function Process() {
  return (
    <section className="relative py-16 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-brand-border/40">
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />

      <div className="mx-auto max-w-5xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-brand-secondary font-mono text-sm font-semibold tracking-widest uppercase mb-3 block">
            Our Method
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Engineering Lifecycle
          </h2>
          <p className="text-brand-muted mt-4 text-sm sm:text-base">
            We follow a structured, enterprise-grade development pipeline to deliver robust, high-performance systems.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-brand-border" />

          {/* Steps */}
          <div className="space-y-16">
            {PROCESS_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.step} className="relative flex flex-col md:flex-row items-center">
                  {/* Left Side */}
                  <div className={`flex-1 flex justify-start md:justify-end ${isEven ? "md:pr-12" : "md:pl-12 md:order-last"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="glass-panel rounded-2xl p-8 hover:border-brand-primary/20 transition-all duration-300 w-full max-w-md ml-8 md:ml-0"
                    >
                      <span className="text-brand-secondary font-mono text-xs font-bold tracking-widest uppercase mb-2 block">
                        {step.tagline}
                      </span>
                      <h3 className="font-sans text-2xl font-bold text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="text-brand-muted text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Bullet center */}
                  <div className="absolute left-4 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-[7px] w-[14px] h-[14px] rounded-full border border-brand-primary bg-brand-dark flex items-center justify-center z-10">
                    <div className="h-1.5 w-1.5 rounded-full bg-brand-secondary" />
                  </div>

                  {/* Spacer or alternate label side */}
                  <div className="flex-1 hidden md:flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.15 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="font-sans text-9xl font-black text-white pointer-events-none select-none"
                    >
                      {step.step}
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
