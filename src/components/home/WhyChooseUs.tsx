"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Cpu, Activity, Clock, Globe } from "lucide-react";

const ADVANTAGES = [
  {
    icon: Cpu,
    title: "AI-First Approach",
    description: "We don't just stitch standard wrappers. We build custom retrieval systems, specialized models, and cognitive agent workflows."
  },
  {
    icon: Shield,
    title: "Enterprise Architecture",
    description: "Our backends are written in Go, Rust, or NestJS using modular DDD, handling thousands of processes securely."
  },
  {
    icon: Zap,
    title: "High-Velocity Delivery",
    description: "Our automated CI/CD and GitOps blueprints allow us to deploy production-ready applications in weeks, not months."
  },
  {
    icon: Activity,
    title: "Zero-Trust Security",
    description: "Data security is absolute. We integrate JWT tokens, role policies, and data encryption to exceed standard audits."
  },
  {
    icon: Clock,
    title: "Infinite Scalability",
    description: "Every service runs in containerized pods on auto-scaled cloud platforms (AWS, GCP), adjusting dynamically to traffic."
  },
  {
    icon: Globe,
    title: "24/7 Global Support",
    description: "We implement Prometheus, Grafana, and Datadog monitoring to resolve infrastructure drift before users notice."
  }
];

export default function WhyChooseUs() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="relative pt-16 pb-12 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-brand-border/40 bg-brand-dark/20">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-secondary font-mono text-sm font-semibold tracking-widest uppercase mb-3 block">
            Why Choose Xpernex
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built for Scale. Engineered for Trust.
          </h2>
        </div>

        {/* Grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVANTAGES.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onMouseMove={handleMouseMove}
              className="glow-card glass-panel rounded-2xl p-8 hover:border-brand-primary/30 group relative flex flex-col items-start overflow-hidden"
            >
              {/* Card Glow Corner Background */}
              <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-brand-highlight/5 group-hover:bg-brand-highlight/10 blur-xl transition-all duration-500" />
              
              <div className="h-10 w-10 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:text-brand-secondary group-hover:border-brand-secondary/30 transition-all duration-300 mb-6">
                <item.icon className="h-5 w-5" />
              </div>
              
              <h3 className="font-sans text-lg font-bold text-white mb-3">
                {item.title}
              </h3>
              
              <p className="text-brand-muted text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
