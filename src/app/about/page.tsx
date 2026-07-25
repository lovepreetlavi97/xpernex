import type { Metadata } from "next";
import { getSEOMetadata } from "@/utils/seo";
import { teamMembers } from "@/data/data";
import { Sparkles, Shield, Heart, Eye, Target, Compass } from "lucide-react";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const metadata: Metadata = getSEOMetadata({
  title: "About Us | Our Story & Vision",
  description: "Learn about the mission, values, and engineering team behind Xpernex - Experts for the Next Generation.",
  path: "/about"
});

const VALUES = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We constantly research frontier AI libraries and system optimizations to bring state-of-the-art tech to production pipelines."
  },
  {
    icon: Shield,
    title: "Airtight Quality",
    description: "We don't compromise. Every line of code is structured, typed, peer-reviewed, and rigorously automated before release."
  },
  {
    icon: Heart,
    title: "Absolute Trust",
    description: "We operate with total transparency. Our clients see every sprint backlog, deployment metric, and security audit log."
  },
  {
    icon: Compass,
    title: "Future Orientation",
    description: "We engineer systems that don't just solve today's requirements, but adapt natively to tomorrow's horizontal growth."
  }
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen py-16 overflow-hidden">
      {/* Background grids and lights */}
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] -z-10 h-[450px] w-[450px] rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] -z-10 h-[450px] w-[450px] rounded-full bg-brand-highlight/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-24 mt-8">
          <span className="text-brand-secondary font-mono text-sm font-semibold tracking-widest uppercase mb-3 block">
            Who We Are
          </span>
          <h1 className="font-sans text-5xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-8">
            Engineering the Future. <br />
            <span className="bg-gradient-to-r from-brand-primary via-brand-highlight to-brand-secondary bg-clip-text text-transparent">
              Human Centered.
            </span>
          </h1>
          <p className="text-brand-muted text-lg sm:text-xl leading-relaxed">
            Xpernex was founded by computational researchers and enterprise software architects to build the high-performance digital infrastructure required for next-generation platforms.
          </p>
        </div>

        {/* Brand Story Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pb-24 border-b border-brand-border">
          <div>
            <h2 className="font-sans text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-brand-muted text-sm sm:text-base leading-relaxed mb-6">
              Our mission is to empower ambitious global organizations with intelligent software architectures. We bridge the gap between theoretical AI models and production-ready distributed code bases. We design and build secure frameworks that optimize workloads, automate cognitive reasoning, and scale without friction.
            </p>
            <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
              We believe that software should be beautiful, fast, and extremely secure. By integrating cutting-edge machine learning libraries directly with containerized cloud microservices, we build systems that handle millions of daily processes seamlessly.
            </p>
          </div>

          <div className="glass-panel rounded-3xl p-8 sm:p-12 border-brand-primary/20 flex flex-col justify-center">
            <div className="flex gap-4 items-start mb-6">
              <div className="p-3 rounded-xl bg-brand-primary/10 border border-brand-primary/20 text-brand-primary">
                <Eye className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-sans text-xl font-bold text-white mb-2">Our Vision</h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  To become the premier global engineering partner for enterprise AI software, setting the standard for system speed, safety, and visual polish in next-generation application design.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start pt-6 border-t border-brand-border">
              <div className="p-3 rounded-xl bg-brand-secondary/10 border border-brand-secondary/20 text-brand-secondary">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-sans text-xl font-bold text-white mb-2">Core Belief</h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  We believe software is a craft. From clean types and data partition rules to CSS layout details and micro-animations, every single component matters.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Values */}
        <div className="py-24 border-b border-brand-border">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-secondary font-mono text-xs font-semibold tracking-widest uppercase mb-3 block">
              Our Compass
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Values That Drive Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val) => (
              <div key={val.title} className="glass-panel rounded-2xl p-6 border-white/5 hover:border-brand-primary/20 transition-all duration-300">
                <div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary mb-6">
                  <val.icon className="h-5 w-5" />
                </div>
                <h3 className="font-sans text-lg font-bold text-white mb-3">{val.title}</h3>
                <p className="text-brand-muted text-xs sm:text-sm leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="py-24">
          <div className="max-w-3xl mb-16">
            <span className="text-brand-secondary font-mono text-xs font-semibold tracking-widest uppercase mb-3 block">
              Leadership & Research
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Meet the Engineers
            </h2>
            <p className="text-brand-muted text-sm sm:text-base">
              A select team of system architects, research scientists, and creative designers dedicated to engineering exceptional software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="glass-panel rounded-2xl overflow-hidden group hover:border-brand-primary/20 transition-all duration-300"
              >
                <div className="relative h-64 bg-brand-dark overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="font-sans text-lg font-bold text-white">{member.name}</h3>
                  <span className="text-brand-secondary text-xs font-semibold uppercase tracking-wider block mt-1 mb-4">
                    {member.role}
                  </span>
                  <p className="text-brand-muted text-xs sm:text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-brand-muted hover:text-brand-secondary transition-colors"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
