import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData } from "@/data/data";
import { getSEOMetadata } from "@/utils/seo";
import DynamicIcon from "@/components/DynamicIcon";
import { ArrowRight, CheckCircle2, ArrowLeft } from "lucide-react";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

// Generate static routes at build time for optimal performance
export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

// Dynamic SEO Generation
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return getSEOMetadata({
      title: "Service Not Found",
      description: "The requested software service configuration was not found.",
      path: "/services"
    });
  }

  return getSEOMetadata({
    title: `${service.title} Engineering Services`,
    description: service.description,
    path: `/services/${service.slug}`
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="relative min-h-screen py-16 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />
      <div className="absolute top-[10%] left-[-10%] -z-10 h-[400px] w-[400px] rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] -z-10 h-[400px] w-[400px] rounded-full bg-brand-secondary/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-12 mt-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Services</span>
          </Link>
        </div>

        {/* Hero Section of Service */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-20 border-b border-brand-border mb-20">
          <div className="lg:col-span-8">
            {/* Dynamic Icon */}
            <div className="inline-flex items-center justify-center p-3.5 rounded-xl bg-brand-primary/10 border border-brand-primary/20 text-brand-primary mb-6">
              <DynamicIcon name={service.iconName} className="h-7 w-7" />
            </div>

            <h1 className="font-sans text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              {service.title}
            </h1>
            
            <p className="text-brand-muted text-base sm:text-lg leading-relaxed max-w-3xl">
              {service.fullDescription}
            </p>
          </div>

          {/* Key Metrics card */}
          <div className="lg:col-span-4 w-full">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border-brand-secondary/20">
              <h3 className="font-sans text-sm font-semibold tracking-wider text-brand-secondary uppercase mb-6">
                Target KPIs
              </h3>
              <div className="space-y-6">
                {service.metrics.map((met) => (
                  <div key={met.label} className="flex items-baseline justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <span className="text-brand-muted text-sm font-semibold">{met.label}</span>
                    <span className="text-white font-mono text-2xl font-bold">{met.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features & Processes Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20">
          
          {/* Key Features */}
          <div className="lg:col-span-6">
            <h2 className="font-sans text-2xl sm:text-3xl font-bold text-white mb-8">
              Technical Capabilities
            </h2>
            <div className="space-y-4">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-brand-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-brand-muted text-sm sm:text-base leading-relaxed">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Development Steps */}
          <div className="lg:col-span-6">
            <h2 className="font-sans text-2xl sm:text-3xl font-bold text-white mb-8">
              Integration Process
            </h2>
            <div className="relative border-l border-brand-border ml-4 pl-8 space-y-8">
              {service.process.map((proc) => (
                <div key={proc.step} className="relative">
                  {/* Step bullet */}
                  <div className="absolute -left-[45px] top-0.5 h-6 w-6 rounded-full border border-brand-primary bg-brand-dark flex items-center justify-center font-mono text-[10px] font-bold text-brand-secondary">
                    {proc.step}
                  </div>
                  
                  <h3 className="font-sans text-base font-bold text-white mb-2">
                    {proc.title}
                  </h3>
                  <p className="text-brand-muted text-xs sm:text-sm leading-relaxed">
                    {proc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Direct Engagement Form Teaser */}
        <div className="glass-panel rounded-3xl p-8 sm:p-16 text-center border-brand-primary/20 relative overflow-hidden">
          <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />
          <span className="text-brand-secondary font-mono text-xs font-semibold tracking-widest uppercase mb-4 block">
            Start Collaboration
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
            Ready to deploy {service.title}?
          </h2>
          <p className="text-brand-muted text-sm leading-relaxed max-w-xl mx-auto mb-10">
            Let's setup a call with our technical director to review your system requirements and draft a structured integration roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-primary to-brand-highlight px-6 py-3.5 text-sm font-bold text-white shadow-lg"
            >
              <span>Initiate Integration</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-xl bg-white/5 border border-white/10 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              See Related Work
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
