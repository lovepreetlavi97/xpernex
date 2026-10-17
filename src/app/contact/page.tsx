"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Check, Loader2, Sparkles, Send } from "lucide-react";
import confetti from "canvas-confetti";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.68C7.02 10.88 7.89 12.04 8.02 12.21C8.14 12.38 9.75 14.86 12.21 15.93C14.26 16.81 14.68 16.64 15.12 16.6C15.56 16.56 16.54 16.02 16.74 15.45C16.95 14.88 16.95 14.39 16.89 14.28C16.83 14.18 16.67 14.12 16.42 14C16.18 13.88 14.98 13.29 14.76 13.21C14.53 13.13 14.37 13.09 14.21 13.33C14.04 13.58 13.57 14.12 13.43 14.28C13.28 14.45 13.14 14.47 12.9 14.35C12.65 14.23 11.87 13.97 10.94 13.14C10.22 12.5 9.73 11.71 9.59 11.46C9.45 11.22 9.57 11.08 9.7 10.96C9.81 10.85 9.94 10.67 10.07 10.53C10.2 10.38 10.24 10.28 10.32 10.12C10.4 9.95 10.36 9.81 10.3 9.68C10.24 9.56 9.75 8.35 9.54 7.86C9.35 7.37 9.15 7.44 9 7.43C8.85 7.43 8.69 7.33 8.53 7.33Z" />
  </svg>
);

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !email.includes("@") || !message) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    // Format professional WhatsApp query message
    const lines = [
      "👋 *New Project Inquiry from Xpernex Website*",
      "",
      `👤 *Client Name:* ${fullName.trim()}`,
      `📧 *Email:* ${email.trim()}`,
      company.trim() ? `🏢 *Company:* ${company.trim()}` : "",
      "",
      "💬 *Project Scope & Details:*",
      message.trim(),
      "",
      "---",
      "Sent via Xpernex Contact Portal"
    ].filter(Boolean);

    const waText = lines.join("\n");
    const waUrl = `https://wa.me/919876467697?text=${encodeURIComponent(waText)}`;
    setLastWhatsAppUrl(waUrl);

    // Open WhatsApp directly in new window
    window.open(waUrl, "_blank", "noopener,noreferrer");

    setStatus("success");
    setFullName("");
    setEmail("");
    setCompany("");
    setMessage("");

    // Trigger Confetti for premium WOW effect
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#5B5BFF", "#00F5D4", "#8B5CF6"]
    });
  };

  return (
    <div className="relative min-h-screen py-16 overflow-hidden">
      {/* Background visual details */}
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />
      <div className="absolute top-[10%] left-[-15%] -z-10 h-[500px] w-[500px] rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] -z-10 h-[500px] w-[500px] rounded-full bg-brand-highlight/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16 mt-8">
          <span className="text-brand-secondary font-mono text-sm font-semibold tracking-widest uppercase mb-3 block">
            Get in Touch
          </span>
          <h1 className="font-sans text-5xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-8">
            Let's Engineer <br />
            <span className="bg-gradient-to-r from-brand-primary via-brand-highlight to-brand-secondary bg-clip-text text-transparent">
              Something Exceptional
            </span>
          </h1>
          <p className="text-brand-muted text-lg sm:text-xl leading-relaxed">
            Have an enterprise project or system migration to discuss? Consult with our systems directors to draft your development topology.
          </p>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 items-start">
          
          {/* Left Column: Business Details & Map */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Info Cards */}
            <div className="space-y-6">
              
              {/* Mail */}
              <div className="flex gap-4 items-start">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-brand-primary flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-brand-muted uppercase tracking-wider mb-1">
                    Business Inquiries
                  </span>
                  <a href="mailto:hello@xpernex.com" className="text-white text-base font-bold hover:text-brand-secondary transition-colors duration-200">
                    hello@xpernex.com
                  </a>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex gap-4 items-start">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-brand-primary flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-brand-muted uppercase tracking-wider mb-1">
                    Direct Contact / WhatsApp
                  </span>
                  <div className="flex flex-wrap items-center gap-3">
                    <a href="tel:+919876467697" className="text-white text-base font-bold hover:text-brand-secondary transition-colors duration-200">
                      +91 98764 67697
                    </a>
                    <a
                      href="https://wa.me/919876467697"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-500/15 border border-emerald-500/35 text-emerald-400 hover:bg-emerald-500/25 transition-all duration-200 hover:scale-[1.02]"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-brand-primary flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-brand-muted uppercase tracking-wider mb-1">
                    Headquarters
                  </span>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    100 Pine Street, Floor 24 <br />
                    San Francisco, CA 94111, USA
                  </p>
                </div>
              </div>

            </div>

            {/* Custom styled map placeholder */}
            <div className="glass-panel rounded-2xl h-64 border-brand-border relative overflow-hidden flex flex-col justify-end p-6 bg-brand-dark">
              {/* Map grid lines overlay for tech aesthetics */}
              <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="h-32 w-32 rounded-full border border-brand-primary/10 animate-ping opacity-40" />
                <div className="absolute h-4 w-4 rounded-full bg-brand-secondary ring-4 ring-brand-secondary/30 shadow-[0_0_20px_rgba(0,245,212,0.6)]" />
              </div>
              <div className="relative z-10">
                <span className="text-xs font-bold text-white block mb-0.5">Xpernex Research Labs</span>
                <span className="text-[10px] font-semibold text-brand-muted uppercase tracking-wider">San Francisco Office Location</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 border-brand-primary/20 shadow-[0_0_40px_rgba(91,91,255,0.06)]">
              <h2 className="font-sans text-2xl font-bold text-white mb-6">
                Consult with our Directors
              </h2>

              {status === "success" ? (
                <div className="text-center py-16">
                  <div className="h-16 w-16 bg-emerald-500/10 border border-emerald-500/35 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="font-sans text-2xl font-bold text-white mb-2">Inquiry Forwarded to WhatsApp!</h3>
                  <p className="text-brand-muted text-sm leading-relaxed max-w-md mx-auto mb-8">
                    Your project details have been formatted and dispatched directly to our WhatsApp line (<strong className="text-white">+91 98764 67697</strong>). We will respond to your requirements right away.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    {lastWhatsAppUrl && (
                      <a
                        href={lastWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 px-6 py-3 text-sm font-semibold text-emerald-300 hover:bg-emerald-500/30 transition-all duration-200"
                      >
                        <WhatsAppIcon className="h-4 w-4" />
                        <span>Open WhatsApp Again</span>
                      </a>
                    )}
                    <button
                      onClick={() => setStatus("idle")}
                      className="inline-flex items-center justify-center rounded-xl bg-white/5 border border-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="full-name" className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">
                        Full Name
                      </label>
                      <input
                        id="full-name"
                        type="text"
                        placeholder="John Doe"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (status === "error") setStatus("idle");
                        }}
                        className={`w-full rounded-xl bg-white/5 border px-4 py-3 text-sm text-white placeholder-brand-muted focus:outline-none focus:ring-1 transition-all duration-300 ${
                          status === "error" && !fullName
                            ? "border-red-500/50 focus:ring-red-500"
                            : "border-brand-border focus:ring-brand-primary"
                        }`}
                        disabled={status === "loading"}
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">
                        Business Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (status === "error") setStatus("idle");
                        }}
                        className={`w-full rounded-xl bg-white/5 border px-4 py-3 text-sm text-white placeholder-brand-muted focus:outline-none focus:ring-1 transition-all duration-300 ${
                          status === "error" && (!email || !email.includes("@"))
                            ? "border-red-500/50 focus:ring-red-500"
                            : "border-brand-border focus:ring-brand-primary"
                        }`}
                        disabled={status === "loading"}
                        required
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">
                      Company Name
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder="Acme Systems Inc."
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full rounded-xl bg-white/5 border border-brand-border px-4 py-3 text-sm text-white placeholder-brand-muted focus:outline-none focus:ring-1 focus:ring-brand-primary focus:border-brand-primary/50 transition-all duration-300"
                      disabled={status === "loading"}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">
                      Project Scope / Details
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Outline your systems integration, data volumes, or generative AI requirements..."
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (status === "error") setStatus("idle");
                      }}
                      className={`w-full rounded-xl bg-white/5 border px-4 py-3 text-sm text-white placeholder-brand-muted focus:outline-none focus:ring-1 transition-all duration-300 resize-none ${
                        status === "error" && !message
                          ? "border-red-500/50 focus:ring-red-500"
                          : "border-brand-border focus:ring-brand-primary"
                      }`}
                      disabled={status === "loading"}
                      required
                    />
                  </div>

                  {/* Action CTA */}
                  <button
                    type="submit"
                    className="w-full relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 via-brand-primary to-brand-highlight py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,245,212,0.35)] hover:scale-[1.01] active:scale-[0.98] disabled:opacity-50 disabled:scale-100"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin text-white" />
                        <span>Connecting to WhatsApp...</span>
                      </>
                    ) : (
                      <>
                        <WhatsAppIcon className="h-4 w-4" />
                        <span>Send Project Brief via WhatsApp</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-brand-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Inquiries forward directly to +91 98764 67697 for immediate response</span>
                  </div>

                  {status === "error" && (
                    <p className="text-xs text-red-400 text-center">Please verify that all required inputs are filled out.</p>
                  )}
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
