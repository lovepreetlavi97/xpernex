import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { careersData } from "@/data/data";
import { getSEOMetadata } from "@/utils/seo";
import { ArrowLeft, Briefcase, MapPin, Clock, DollarSign } from "lucide-react";
import CareerApplicationForm from "@/components/CareerApplicationForm";

interface JobPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return careersData.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = careersData.find((j) => j.slug === slug);

  if (!job) {
    return getSEOMetadata({
      title: "Job Opening Not Found",
      description: "The requested career opening was not found.",
      path: "/careers"
    });
  }

  return getSEOMetadata({
    title: `${job.title} | Careers`,
    description: job.description,
    path: `/careers/${job.slug}`
  });
}

export default async function JobDetailPage({ params }: JobPageProps) {
  const { slug } = await params;
  const job = careersData.find((j) => j.slug === slug);

  if (!job) {
    notFound();
  }

  return (
    <div className="relative min-h-screen py-16 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />
      <div className="absolute top-[10%] left-[-15%] -z-10 h-[450px] w-[450px] rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] -z-10 h-[450px] w-[450px] rounded-full bg-brand-secondary/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-12 mt-4">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Openings</span>
          </Link>
        </div>

        {/* Job Header */}
        <div className="pb-12 border-b border-brand-border mb-16">
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-brand-secondary font-mono mb-4 uppercase tracking-widest">
            <span className="flex items-center gap-1">
              <Briefcase className="h-4 w-4" />
              {job.department}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1 text-brand-muted">
              <MapPin className="h-4 w-4" />
              {job.location}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1 text-brand-muted">
              <Clock className="h-4 w-4" />
              {job.type}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1 text-brand-muted">
              <DollarSign className="h-4 w-4" />
              {job.salaryRange}
            </span>
          </div>

          <h1 className="font-sans text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            {job.title}
          </h1>

          <p className="text-brand-muted text-base sm:text-lg leading-relaxed max-w-3xl">
            {job.description}
          </p>
        </div>

        {/* Job Description details & Application form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20">
          
          {/* Left Column: Requirements & Responsibilities */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <h2 className="font-sans text-2xl font-bold text-white mb-6">Requirements</h2>
              <ul className="space-y-4">
                {job.requirements.map((req, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-secondary mt-2 flex-shrink-0" />
                    <span className="text-brand-muted text-sm sm:text-base leading-relaxed">
                      {req}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-sans text-2xl font-bold text-white mb-6">Responsibilities</h2>
              <ul className="space-y-4">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-primary mt-2 flex-shrink-0" />
                    <span className="text-brand-muted text-sm sm:text-base leading-relaxed">
                      {resp}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Application Form */}
          <div className="lg:col-span-5 w-full">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border-brand-primary/20 sticky top-28">
              <h3 className="font-sans text-xl font-bold text-white mb-6">
                Apply for this Role
              </h3>
              
              {/* Client application component */}
              <CareerApplicationForm jobTitle={job.title} />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
