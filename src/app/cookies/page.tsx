import type { Metadata } from "next";
import { getSEOMetadata } from "@/utils/seo";

export const metadata: Metadata = getSEOMetadata({
  title: "Cookies Policy",
  description: "Read the Cookie Policy of Xpernex to understand how we utilize cookies to optimize website performance and user experience.",
  path: "/cookies"
});

export default function CookiesPage() {
  return (
    <div className="relative min-h-screen py-16 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 mt-8">
          <span className="text-brand-secondary font-mono text-xs font-semibold tracking-widest uppercase mb-2 block">
            Legal Statement
          </span>
          <h1 className="font-sans text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Cookies Policy
          </h1>
          <p className="text-brand-muted text-xs font-mono">Last modified: July 25, 2026</p>
        </div>

        <div className="glass-panel rounded-3xl p-8 sm:p-12 space-y-8 text-brand-muted text-sm sm:text-base leading-relaxed border-white/5">
          <div>
            <h2 className="text-white font-sans text-xl font-bold mb-4">1. What are Cookies?</h2>
            <p>
              Cookies are small text records placed on your browser by websites you visit. They are commonly used to remember user preferences, maintain session state, and evaluate core performance metrics (like FCP speed and page latency).
            </p>
          </div>

          <div>
            <h2 className="text-white font-sans text-xl font-bold mb-4">2. Cookies We Deploy</h2>
            <p>
              We only run necessary cookies required to render page routing state and verify form submissions, and lightweight, anonymous analytics cookies (e.g. tracking page load averages). We do not deploy cross-site tracker nodes or marketing retargeting tags.
            </p>
          </div>

          <div>
            <h2 className="text-white font-sans text-xl font-bold mb-4">3. Disabling Cookies</h2>
            <p>
              You can adjust your browser settings to decline cookies. Note that disabling necessary cookies may prevent the navigation indicator or contact form from working correctly during your session.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
