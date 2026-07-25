"use client";

import { motion } from "framer-motion";
import { statsData } from "@/data/data";

export default function Stats() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-brand-border/40">
      <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-2xl p-4 sm:p-6 text-center hover:border-brand-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(91,91,255,0.08)] flex flex-col justify-center last:col-span-2 sm:last:col-span-1"
            >
              <span className="font-sans text-3xl sm:text-4xl xl:text-5xl font-extrabold bg-gradient-to-r from-white via-white to-brand-primary bg-clip-text text-transparent mb-2">
                {stat.value}
              </span>
              <span className="text-brand-muted text-[10px] sm:text-xs xl:text-sm font-semibold tracking-wider uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
