import type { Metadata } from "next";
import { getSEOMetadata } from "@/utils/seo";

export const metadata: Metadata = getSEOMetadata({
  title: "Terms of Service",
  description: "Read the Terms of Service of Xpernex detailing software licensing rules and project delivery terms.",
  path: "/terms"
});

export default function TermsPage() {
  return (
    <div className="relative min-h-screen py-16 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 mt-8">
          <span className="text-brand-secondary font-mono text-xs font-semibold tracking-widest uppercase mb-2 block">
            Legal Statement
          </span>
          <h1 className="font-sans text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-brand-muted text-xs font-mono">Last modified: July 25, 2026</p>
        </div>

        <div className="glass-panel rounded-3xl p-8 sm:p-12 space-y-8 text-brand-muted text-sm sm:text-base leading-relaxed border-white/5">
          <div>
            <h2 className="text-white font-sans text-xl font-bold mb-4">1. Scope of Engagement</h2>
            <p>
              Xpernex provides custom software development, cloud infrastructure provisioning, and AI pipeline orchestration. All projects are governed by detailed, peer-signed Statements of Work (SOW) defining sprint milestones, codebase handoff, and payment schedules.
            </p>
          </div>

          <div>
            <h2 className="text-white font-sans text-xl font-bold mb-4">2. Intellectual Property</h2>
            <p>
              Unless specified otherwise in a custom client contract, all custom codebase assets, database schema configurations, and UI designs belong entirely to the client upon full project settlement. Xpernex retains ownership of reusable library components, developer blueprints, and open-source packages.
            </p>
          </div>

          <div>
            <h2 className="text-white font-sans text-xl font-bold mb-4">3. System SLA guarantees</h2>
            <p>
              While we engineer high-availability architectures and passes compliance audits (SOC2/HIPAA), the client understands that final cloud uptime is governed by the respective underlying cloud providers (AWS, GCP, Vercel) SLAs.
            </p>
          </div>

          <div>
            <h2 className="text-white font-sans text-xl font-bold mb-4">4. Governing Law</h2>
            <p>
              These terms are governed by the laws of the State of California, United States, without regard to conflict of law principles. Any legal proceedings must be initiated in courts located in San Francisco, California.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
