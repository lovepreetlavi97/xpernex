import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projectsData } from "@/data/data";
import { getSEOMetadata } from "@/utils/seo";
import { ArrowLeft, ArrowRight, CheckCircle2, Cpu } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return getSEOMetadata({
      title: "Case Study Not Found",
      description: "The requested case study was not found in our database.",
      path: "/portfolio"
    });
  }

  return getSEOMetadata({
    title: `${project.title} | Case Study`,
    description: project.description,
    path: `/portfolio/${project.slug}`
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative min-h-screen py-16 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />
      <div className="absolute top-[10%] left-[-15%] -z-10 h-[500px] w-[500px] rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] -z-10 h-[500px] w-[500px] rounded-full bg-brand-secondary/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-12 mt-4">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Portfolio</span>
          </Link>
        </div>

        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-brand-border mb-16">
          <div className="lg:col-span-8">
            <span className="text-brand-secondary font-mono text-sm font-semibold tracking-widest uppercase mb-4 block">
              {project.category} &bull; {project.industry}
            </span>
            <h1 className="font-sans text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              {project.title}
            </h1>
            <p className="text-brand-muted text-lg leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key KPIs card */}
          <div className="lg:col-span-4 w-full">
            <div className="glass-panel rounded-2xl p-8 border-brand-secondary/20 shadow-[0_0_30px_rgba(0,245,212,0.05)]">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-secondary block mb-6">
                Key Performance Metrics
              </span>
              <div className="space-y-6">
                {project.metrics.map((met) => (
                  <div key={met.label} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <span className="block text-brand-secondary font-mono text-3xl font-bold">
                      {met.value}
                    </span>
                    <span className="block text-xs text-brand-muted uppercase font-semibold mt-1">
                      {met.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project Details Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20">
          
          {/* Left Column: Challenge & Solution */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h2 className="font-sans text-2xl sm:text-3xl font-bold text-white mb-6">
                The Challenge
              </h2>
              <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div>
              <h2 className="font-sans text-2xl sm:text-3xl font-bold text-white mb-6">
                Our Engineering Solution
              </h2>
              <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Business Outcomes */}
            <div>
              <h2 className="font-sans text-2xl sm:text-3xl font-bold text-white mb-6">
                Business Outcomes
              </h2>
              <div className="space-y-4">
                {project.results.map((res, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-brand-muted text-sm sm:text-base leading-relaxed">
                      {res}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Technologies & Specs */}
          <div className="lg:col-span-4 space-y-8">
            <div className="glass-panel rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-6 text-brand-primary">
                <Cpu className="h-5 w-5" />
                <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-white">
                  Integration Stack
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-lg bg-white/5 border border-white/5 px-3 py-1.5 text-xs font-semibold text-brand-muted hover:text-white transition-colors duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Next Case Study Link */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 text-center border-brand-primary/20 relative overflow-hidden mb-20">
          <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />
          <h2 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-tight mb-6">
            Explore More System Solutions
          </h2>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 px-6 py-3 text-sm font-bold text-white hover:text-brand-secondary hover:border-brand-secondary/30 transition-colors"
          >
            <span>Browse Case Studies</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
