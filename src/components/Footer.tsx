"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1200);
  };

  return (
    <footer className="relative border-t border-brand-border bg-brand-dark/50 pt-20 pb-12 overflow-hidden">
      {/* Decorative Blur BG */}
      <div className="absolute bottom-0 right-0 -z-10 h-80 w-80 rounded-full bg-brand-highlight/5 blur-[120px]" />
      <div className="absolute bottom-0 left-10 -z-10 h-80 w-80 rounded-full bg-brand-primary/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="h-8 w-8 rounded-lg bg-[#030712] border border-white/10 flex items-center justify-center p-1.5 transition-all duration-300 group-hover:border-brand-primary/40">
                <svg className="h-full w-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="footerChroma1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#c084fc" />
                      <stop offset="60%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                    <linearGradient id="footerChroma2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#00f5d4" />
                    </linearGradient>
                  </defs>
                  <path d="M12 10 L34 10 L88 90 L66 90 Z" fill="url(#footerChroma1)" />
                  <path d="M88 10 L66 10 L12 90 L34 90 Z" fill="url(#footerChroma2)" style={{ mixBlendMode: "screen" }} />
                </svg>
              </div>
              <span className="font-sans font-bold text-sm tracking-[0.35em] text-white uppercase group-hover:text-brand-secondary transition-colors duration-300">
                Xpernex
              </span>
            </Link>
            <p className="text-brand-muted text-sm leading-relaxed mb-6 max-w-md">
              Xpernex designs and engineers high-performance AI systems, enterprise cloud architectures, and digital experiences that define tomorrow's business standards.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/5 text-brand-muted hover:text-brand-secondary hover:border-brand-secondary/30 transition-all duration-300">
                <TwitterIcon className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/5 text-brand-muted hover:text-brand-secondary hover:border-brand-secondary/30 transition-all duration-300">
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/5 text-brand-muted hover:text-brand-secondary hover:border-brand-secondary/30 transition-all duration-300">
                <GithubIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services/artificial-intelligence" className="text-sm text-brand-muted hover:text-white transition-colors duration-200">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link href="/services/enterprise-software" className="text-sm text-brand-muted hover:text-white transition-colors duration-200">
                  Enterprise Systems
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="text-sm text-brand-muted hover:text-white transition-colors duration-200">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link href="/services/devops" className="text-sm text-brand-muted hover:text-white transition-colors duration-200">
                  Cloud Infrastructure
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-sm text-brand-muted hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-brand-muted hover:text-white transition-colors duration-200">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-brand-muted hover:text-white transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-brand-muted hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white mb-6">Newsletter</h3>
            <p className="text-sm text-brand-muted mb-4">
              Get the latest insights on AI infrastructure and software engineering straight to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="relative mt-2">
              <input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                className={`w-full rounded-xl bg-white/5 border px-4 py-3 text-sm text-white placeholder-brand-muted focus:outline-none focus:ring-1 transition-all duration-300 ${status === "error"
                    ? "border-red-500/50 focus:ring-red-500 focus:border-red-500"
                    : "border-brand-border focus:ring-brand-primary"
                  }`}
                disabled={status === "loading" || status === "success"}
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-3 rounded-lg bg-brand-primary text-white hover:bg-brand-primary/80 transition-colors flex items-center justify-center disabled:bg-white/10 disabled:text-brand-muted"
                disabled={status === "loading" || status === "success"}
                aria-label="Subscribe"
              >
                {status === "success" ? (
                  <Check className="h-4 w-4 text-brand-secondary" />
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
              </button>
            </form>
            {status === "success" && (
              <p className="text-xs text-brand-secondary mt-2">Successfully subscribed! Thank you.</p>
            )}
            {status === "error" && (
              <p className="text-xs text-red-400 mt-2">Please enter a valid email address.</p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted">
            &copy; {new Date().getFullYear()} Xpernex Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-brand-muted hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-brand-muted hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-xs text-brand-muted hover:text-white transition-colors">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
