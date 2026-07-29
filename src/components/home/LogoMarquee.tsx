"use client";

import React from "react";

const LOGOS = [
  // 1. Injectly
  (
    <div key="injectly" className="flex items-center gap-2 text-white/45 hover:text-white/80 transition-colors duration-300 shrink-0">
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4.5 16.5l11-11M16.5 4.5l3 3M7.5 19.5l-3-3M10 9l5 5M12 7l5 5" />
      </svg>
      <span className="font-sans text-xl font-bold tracking-tight">Injectly</span>
    </div>
  ),
  // 2. WERA
  (
    <div key="wera" className="flex items-center gap-2 text-white/45 hover:text-white/80 transition-colors duration-300 shrink-0">
      <div className="h-6 w-6 rounded-full border border-current flex items-center justify-center text-[10px] font-bold">W</div>
      <span className="font-sans text-sm font-bold tracking-[0.2em] uppercase">WERA</span>
    </div>
  ),
  // 3. ELFBAR
  (
    <div key="elfbar" className="flex items-center gap-2 text-white/45 hover:text-white/80 transition-colors duration-300 shrink-0">
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3a9 9 0 00-9 9c0 4.5 9 9 9 9s9-4.5 9-9a9 9 0 00-9-9z" />
        <path d="M12 3v18M3 12h18" strokeDasharray="2 2" />
      </svg>
      <span className="font-sans text-xs font-semibold tracking-[0.25em] uppercase">ELFBAR</span>
    </div>
  ),
  // 4. Route Runner
  (
    <div key="route-runner" className="flex items-center gap-2 text-white/45 hover:text-white/80 transition-colors duration-300 shrink-0">
      <span className="font-sans text-2xl font-black italic tracking-tighter bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">RR</span>
      <span className="font-sans text-sm font-bold tracking-tight">Route Runner</span>
    </div>
  ),
  // 5. PROSMAP GARAGE
  (
    <div key="prosmap" className="flex flex-col items-center justify-center text-white/45 hover:text-white/80 transition-colors duration-300 shrink-0 leading-none">
      <span className="font-mono text-[10px] font-black tracking-[0.2em] uppercase">PROSMAP</span>
      <span className="font-sans text-[7px] tracking-[0.3em] font-bold uppercase text-brand-secondary">GARAGE</span>
    </div>
  ),
  // 6. Lissina
  (
    <div key="lussina" className="flex items-center gap-1.5 text-white/45 hover:text-white/80 transition-colors duration-300 shrink-0">
      <span className="font-sans text-lg font-extrabold tracking-tighter">lussina</span>
    </div>
  ),
  // 7. Carim
  (
    <div key="carim" className="flex items-center gap-2 text-white/45 hover:text-white/80 transition-colors duration-300 shrink-0">
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a10 10 0 0110 10c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2z" strokeDasharray="3 1" />
      </svg>
      <span className="font-sans text-base font-semibold tracking-wide">Carim</span>
    </div>
  ),
  // 8. HOMYCHEF
  (
    <div key="homychef" className="flex items-center gap-2 text-white/45 hover:text-white/80 transition-colors duration-300 shrink-0">
      <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase">HOMYCHEF</span>
    </div>
  ),
  // 9. Foodeats
  (
    <div key="foodeats" className="flex items-center gap-1.5 text-white/45 hover:text-white/80 transition-colors duration-300 shrink-0">
      <span className="font-sans text-base font-extrabold tracking-tight">Foodeats</span>
    </div>
  ),
  // 10. Only Fitness
  (
    <div key="only-fitness" className="flex items-center gap-2 text-white/45 hover:text-white/80 transition-colors duration-300 shrink-0">
      <div className="border border-current rounded px-1 py-0.5 text-[8px] font-black tracking-wider uppercase leading-none">FIT</div>
      <span className="font-sans text-xs font-bold tracking-[0.15em] uppercase">Only Fitness</span>
    </div>
  ),
  // 11. VerShip
  (
    <div key="vership" className="flex items-center gap-2 text-white/45 hover:text-white/80 transition-colors duration-300 shrink-0">
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 17l4-4h12l4 4H2zM4 13V9l4-2h8l4 2v4M12 3v4" />
      </svg>
      <span className="font-sans text-xs font-black tracking-widest uppercase">VerShip</span>
    </div>
  )
];

export default function LogoMarquee() {
  return (
    <section className="relative py-10 bg-[#030712] overflow-hidden border-b border-brand-border/20">
      {/* Background Soft Blue Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-24 w-[80%] rounded-full bg-brand-primary/5 blur-[50px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="text-brand-muted font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase opacity-80">
          Introducing Our Stellar Portfolio of Launched Startups
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative flex w-full overflow-hidden select-none mask-image-marquee">
        {/* We output twice for seamless infinite scroll */}
        <div className="flex gap-16 shrink-0 min-w-full items-center justify-around animate-marquee">
          {LOGOS}
        </div>
        <div className="flex gap-16 shrink-0 min-w-full items-center justify-around animate-marquee" aria-hidden="true">
          {LOGOS}
        </div>
      </div>

      <style jsx global>{`
        .mask-image-marquee {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  );
}
