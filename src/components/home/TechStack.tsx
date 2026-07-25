"use client";

import { motion } from "framer-motion";
import { Layers, Database, ShieldAlert, Cpu } from "lucide-react";

const STACK_CATEGORIES = [
  {
    title: "AI & Computational",
    icon: Cpu,
    color: "from-brand-secondary to-teal-400",
    items: ["OpenAI API", "TensorFlow", "LangChain", "Pinecone", "Python", "LlamaIndex"]
  },
  {
    title: "Frontend & Core",
    icon: Layers,
    color: "from-brand-primary to-indigo-400",
    items: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS 4", "Radix UI", "Three.js"]
  },
  {
    title: "Backend & Systems",
    icon: Database,
    color: "from-brand-highlight to-violet-400",
    items: ["Go", "Node.js", "NestJS", "PostgreSQL", "Redis", "GraphQL", "gRPC"]
  },
  {
    title: "Cloud & DevSecOps",
    icon: ShieldAlert, // fallback container representation
    color: "from-orange-500 to-amber-400",
    items: ["Docker", "Kubernetes", "AWS", "Google Cloud", "GitOps", "Terraform"]
  }
];

export default function TechStack() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 border-b border-brand-border/40 bg-brand-dark/30">
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-secondary font-mono text-sm font-semibold tracking-widest uppercase mb-3 block">
            Technology Stack
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Enterprise Infrastructure
          </h2>
          <p className="text-brand-muted mt-4">
            We architect systems using production-proven, modern open-source stacks built for low latency and high scalability.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STACK_CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="glass-panel rounded-2xl p-6 hover:border-brand-primary/20 transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-brand-primary group-hover:text-brand-secondary transition-all duration-300">
                  <cat.icon className="h-5 w-5" />
                </div>
                <h3 className="font-sans text-base font-bold text-white tracking-wide">
                  {cat.title}
                </h3>
              </div>

              {/* Items tags */}
              <div className="flex flex-wrap gap-2.5">
                {cat.items.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-lg bg-white/5 border border-white/5 hover:border-brand-primary/20 hover:bg-white/10 px-3 py-1.5 text-xs font-semibold text-brand-muted hover:text-white transition-all duration-200 cursor-default"
                  >
                    <span className={`h-1.5 w-1.5 rounded-full mr-2 bg-gradient-to-r ${cat.color}`} />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
