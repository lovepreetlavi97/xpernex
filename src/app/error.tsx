"use client";

import { useEffect } from "react";
import { ArrowRight, AlertTriangle } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log exception to logging services
    console.error("System Runtime Exception:", error);
  }, [error]);

  return (
    <div className="relative min-h-[75vh] flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Background patterns */}
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-80 w-80 rounded-full bg-red-500/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-md text-center z-10">
        
        {/* Warning Icon */}
        <div className="inline-flex items-center justify-center p-4 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 mb-8 animate-pulse">
          <AlertTriangle className="h-10 w-10" />
        </div>

        <h1 className="font-sans text-5xl font-extrabold text-white mb-4">500</h1>
        <h2 className="font-sans text-2xl font-bold text-white mb-4">Pipeline Disrupted</h2>
        <p className="text-brand-muted text-sm sm:text-base leading-relaxed mb-8">
          A runtime conflict has occurred in our data ingestion pipelines.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-primary to-brand-highlight px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(91,91,255,0.3)]"
          >
            <span>Restart Pipeline</span>
          </button>
          
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            <span>Return Home</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
