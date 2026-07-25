import type { Metadata } from "next";
import Link from "next/link";
import { getSEOMetadata } from "@/utils/seo";
import { careersData } from "@/data/data";
import { ArrowRight, Globe, Laptop, Heart, TrendingUp, Sparkles } from "lucide-react";

export const metadata: Metadata = getSEOMetadata({
  title: "Careers | Join the Future of AI & Systems",
  description: "Join Xpernex and construct high-performance AI software, enterprise clouds, and modern frontend platforms.",
  path: "/careers"
});

const BENEFITS = [
  {
    icon: Laptop,
    title: "Remote First",
    description: "Work from wherever you are most productive. We support hybrid workspaces and remote schedules globally."
  },
  {
    icon: Heart,
    title: "Premium Health",
    description: "Complete medical, dental, and vision coverage plans tailored to your family's needs with zero premium thresholds."
  },
  {
    icon: TrendingUp,
    title: "Equity & Growth",
    description: "Every member of our core team receives direct equity packages to participate in the company's valuation growth."
  },
  {
    icon: Globe,
    title: "Learning Budget",
    description: "Annual training credits for engineering conferences, specialized model courses, and professional certifications."
  }
];

export default function CareersPage() {
  return (
    <div className="relative min-h-screen py-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />
      <div className="absolute top-[15%] right-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-brand-primary/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-brand-highlight/5 blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-24 mt-8">
          <span className="text-brand-secondary font-mono text-sm font-semibold tracking-widest uppercase mb-3 block">
            Work With Us
          </span>
          <h1 className="font-sans text-5xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-8">
            Build Systems That <br />
            <span className="bg-gradient-to-r from-brand-primary via-brand-highlight to-brand-secondary bg-clip-text text-transparent">
              Define the Next Era
            </span>
          </h1>
          <p className="text-brand-muted text-lg sm:text-xl leading-relaxed">
            Join a specialized, fast-moving group of system engineers and AI researchers building robust architectures for global enterprises.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="py-16 border-b border-brand-border mb-20">
          <div className="text-left mb-16">
            <span className="text-brand-secondary font-mono text-xs font-semibold tracking-widest uppercase mb-2 block">
              Perks & Values
            </span>
            <h2 className="font-sans text-3xl font-bold text-white tracking-tight">
              Life at Xpernex
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((benefit) => (
              <div key={benefit.title} className="glass-panel rounded-2xl p-6 border-white/5 hover:border-brand-primary/20 transition-all duration-300">
                <div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary mb-6">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <h3 className="font-sans text-lg font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-brand-muted text-xs sm:text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Listings Area */}
        <div className="py-8">
          <div className="mb-12">
            <span className="text-brand-secondary font-mono text-xs font-semibold tracking-widest uppercase mb-2 block">
              Open Positions
            </span>
            <h2 className="font-sans text-3xl font-bold text-white tracking-tight">
              Explore Open Opportunities
            </h2>
          </div>

          {/* Jobs List */}
          <div className="space-y-4 mb-20">
            {careersData.map((job) => (
              <div
                key={job.slug}
                className="glass-panel rounded-2xl p-6 sm:p-8 hover:border-brand-primary/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all duration-300 group"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-brand-secondary">
                      {job.department}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-border" />
                    <span className="text-xs text-brand-muted font-medium">{job.location}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-border" />
                    <span className="text-xs text-brand-muted font-medium">{job.type}</span>
                  </div>
                  <h3 className="font-sans text-xl font-bold text-white group-hover:text-brand-secondary transition-colors duration-300">
                    {job.title}
                  </h3>
                  <p className="text-brand-muted text-xs sm:text-sm leading-relaxed max-w-2xl mt-3">
                    {job.description}
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <Link
                    href={`/careers/${job.slug}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/5 px-5 py-3 text-xs font-bold uppercase tracking-wider text-brand-primary hover:text-white hover:border-brand-primary/20 transition-all duration-300"
                  >
                    <span>View Role</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
