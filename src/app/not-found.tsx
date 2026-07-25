"use client";

import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-[75vh] flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Background visual details */}
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-80 w-80 rounded-full bg-brand-primary/10 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-md text-center z-10">
        
        {/* Animated Compass Icon */}
        <div className="inline-flex items-center justify-center p-4 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary mb-8 animate-bounce">
          <Compass className="h-10 w-10" />
        </div>

        <h1 className="font-sans text-6xl font-extrabold text-white mb-4">404</h1>
        <h2 className="font-sans text-2xl font-bold text-white mb-4">System Out of Bounds</h2>
        <p className="text-brand-muted text-sm sm:text-base leading-relaxed mb-8">
          The technical coordinates you requested are outside our active server routing boundaries.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-primary to-brand-highlight px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(91,91,255,0.3)] hover:scale-105"
        >
          <span>Re-route to Base</span>
          <ArrowRight className="h-4 w-4" />
        </Link>

      </div>
    </div>
  );
}
