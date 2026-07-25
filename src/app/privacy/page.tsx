import type { Metadata } from "next";
import { getSEOMetadata } from "@/utils/seo";

export const metadata: Metadata = getSEOMetadata({
  title: "Privacy Policy",
  description: "Read the Privacy Policy of Xpernex detailing how we secure customer database information and system usage records.",
  path: "/privacy"
});

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen py-16 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none" />
      
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 mt-8">
          <span className="text-brand-secondary font-mono text-xs font-semibold tracking-widest uppercase mb-2 block">
            Legal Statement
          </span>
          <h1 className="font-sans text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-brand-muted text-xs font-mono">Last modified: July 25, 2026</p>
        </div>

        <div className="glass-panel rounded-3xl p-8 sm:p-12 space-y-8 text-brand-muted text-sm sm:text-base leading-relaxed border-white/5">
          <div>
            <h2 className="text-white font-sans text-xl font-bold mb-4">1. Data Ingestion</h2>
            <p>
              Xpernex respects your privacy. When you consult with our engineering directors or submit contact records, we collect your company name, email details, and project briefs solely to schedule scoping briefs. We do not sell or trade operational records to third-party advertisers.
            </p>
          </div>

          <div>
            <h2 className="text-white font-sans text-xl font-bold mb-4">2. Database Security</h2>
            <p>
              We implement zero-trust authorization patterns, transit encryption layers (SSL/TLS), and row-level database controls to prevent accidental exposure of technical documentation, code assets, or API credentials shared during client integrations.
            </p>
          </div>

          <div>
            <h2 className="text-white font-sans text-xl font-bold mb-4">3. Tracking & Analytics</h2>
            <p>
              We run lightweight anonymous cookies to track Lighthouse scores, page speed performance, and popular case study routes. No personalized transactional index or biometric identifiers are stored in our CDN caches.
            </p>
          </div>

          <div>
            <h2 className="text-white font-sans text-xl font-bold mb-4">4. Compliance Contact</h2>
            <p>
              For legal inquiries regarding data deletion rights or SOC2 audit reports, contact our compliance officer at{" "}
              <a href="mailto:hello@xpernex.com" className="text-brand-primary hover:text-brand-secondary transition-colors font-semibold">
                hello@xpernex.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
