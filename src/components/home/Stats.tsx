"use client";

import { motion } from "framer-motion";
import { statsData } from "@/data/data";

export default function Stats() {
  return (
    <section className="relative pt-12 pb-12 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-brand-border/40 bg-brand-dark/10">
      <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Social Proof Review Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Clutch Review */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel rounded-2xl p-6 flex items-center gap-5 hover:border-brand-primary/20 transition-all duration-300"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-white/5 border border-white/10 shrink-0">
              <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
                <path d="M16 6.5A8 8 0 1 0 16 17.5" />
              </svg>
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[10px] font-bold text-brand-muted uppercase tracking-wider mb-1">Clutch Review</span>
              <span className="text-lg font-extrabold text-white">Rated 5/5</span>
            </div>
          </motion.div>

          {/* Fiverr Review */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel rounded-2xl p-6 flex items-center gap-5 hover:border-brand-primary/20 transition-all duration-300"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-white/5 border border-white/10 shrink-0">
              <span className="text-sm font-black text-white tracking-tighter select-none leading-none">fiverr<span className="text-brand-secondary font-black">.</span></span>
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[10px] font-bold text-brand-muted uppercase tracking-wider mb-1">Fiverr Review</span>
              <span className="text-lg font-extrabold text-white mb-0.5">Rated 4.9/5</span>
              <span className="text-[9px] font-medium text-brand-muted">Projects Completed : 9000+</span>
            </div>
          </motion.div>

          {/* Google Review */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-panel rounded-2xl p-6 flex items-center gap-5 hover:border-brand-primary/20 transition-all duration-300"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-white/5 border border-white/10 shrink-0">
              <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 1.56-1.56 2.95-3.24 3.51v2.9h5.18c3.07-2.83 4.82-7 4.82-12.04 0-.38-.04-.76-.1-1.1z" />
                <path d="M12.18 21c2.43 0 4.47-.8 5.96-2.18l-5.18-2.9c-.83.56-1.92.88-3.18.88-2.42 0-4.48-1.63-5.21-3.83H1.27v3.01C3.12 19.82 7.37 21 12.18 21z" />
                <path d="M6.97 12.97a5.54 5.54 0 010-3.54V6.42H1.27a10.02 10.02 0 000 9.56l5.7-3.01z" />
                <path d="M12.18 6c1.32 0 2.5.45 3.44 1.35l2.58-2.58C16.64 3.32 14.6 2.5 12.18 2.5 7.37 2.5 3.12 3.68 1.27 7.42l5.7 3.01c.73-2.2 2.79-3.83 5.21-3.83z" />
              </svg>
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[10px] font-bold text-brand-muted uppercase tracking-wider mb-1">Google Review</span>
              <span className="text-lg font-extrabold text-white">Rated 4.0/5</span>
            </div>
          </motion.div>
        </div>

        {/* Updated Company Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8 sm:gap-12 text-center pt-8 border-t border-brand-border/10">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-4"
            >
              <span className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-3 bg-gradient-to-b from-white to-neutral-300 bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="text-brand-muted text-xs sm:text-sm font-semibold tracking-wide max-w-[240px] leading-snug">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
