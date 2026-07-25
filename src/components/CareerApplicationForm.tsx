"use client";

import { useState } from "react";
import { Upload, Check, Loader2 } from "lucide-react";

interface CareerApplicationFormProps {
  jobTitle: string;
}

export default function CareerApplicationForm({ jobTitle }: CareerApplicationFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !email.includes("@")) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    // Simulate submission API call
    setTimeout(() => {
      setStatus("success");
      setFullName("");
      setEmail("");
      setMessage("");
      setFileName(null);
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <div className="h-16 w-16 bg-brand-secondary/10 border border-brand-secondary/35 text-brand-secondary rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="h-8 w-8" />
        </div>
        <h4 className="font-sans text-xl font-bold text-white mb-2">Application Submitted</h4>
        <p className="text-brand-muted text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">
          Thank you for applying to the <span className="text-white font-semibold">{jobTitle}</span> opening. Our directors will review your experience and follow up soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
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

      {/* File Upload Drag & Drop representation */}
      <div>
        <span className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">
          Upload CV / Resume
        </span>
        <label className="border border-dashed border-brand-border rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:border-brand-primary/45 transition-colors duration-300">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
            disabled={status === "loading"}
          />
          <Upload className="h-6 w-6 text-brand-muted mb-3 group-hover:text-brand-secondary" />
          <span className="text-xs font-medium text-white mb-1">
            {fileName ? fileName : "Upload resume file"}
          </span>
          <span className="text-[10px] text-brand-muted uppercase">PDF, DOC, DOCX up to 10MB</span>
        </label>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="cover-letter" className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">
          Brief Intro / Cover Note
        </label>
        <textarea
          id="cover-letter"
          rows={4}
          placeholder="Brief summary of relevant engineering systems you've worked on..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-xl bg-white/5 border border-brand-border px-4 py-3 text-sm text-white placeholder-brand-muted focus:outline-none focus:ring-1 focus:ring-brand-primary focus:border-brand-primary/50 transition-all duration-300 resize-none"
          disabled={status === "loading"}
        />
      </div>

      {/* Actions */}
      <button
        type="submit"
        className="w-full relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-brand-primary to-brand-highlight py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(91,91,255,0.3)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:scale-100"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin text-white" />
            <span>Submitting Application...</span>
          </>
        ) : (
          <span>Submit Application</span>
        )}
      </button>

      {status === "error" && (
        <p className="text-xs text-red-400 text-center">Please fill out all required fields correctly.</p>
      )}
    </form>
  );
}
