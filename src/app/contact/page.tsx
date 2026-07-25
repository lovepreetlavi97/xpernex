"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Check, Loader2, Sparkles, Send } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !email.includes("@") || !message) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
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
    }, 1500);
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

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-brand-primary flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-brand-muted uppercase tracking-wider mb-1">
                    Operations Center
                  </span>
                  <a href="tel:+18005550199" className="text-white text-base font-bold hover:text-brand-secondary transition-colors duration-200">
                    +1 (800) 555-0199
                  </a>
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
                  <div className="h-16 w-16 bg-brand-secondary/10 border border-brand-secondary/35 text-brand-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="font-sans text-2xl font-bold text-white mb-2">Message Dispatched</h3>
                  <p className="text-brand-muted text-sm leading-relaxed max-w-sm mx-auto mb-8">
                    Your request was successfully uploaded. An engineering director will connect with you via email within one business day.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="inline-flex items-center justify-center rounded-xl bg-white/5 border border-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                  >
                    Send Another Message
                  </button>
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
                    className="w-full relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-brand-primary to-brand-highlight py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(91,91,255,0.3)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:scale-100"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin text-white" />
                        <span>Dispatching Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  {status === "error" && (
                    <p className="text-xs text-red-400 text-center">Please verify that all required inputs are correct.</p>
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
