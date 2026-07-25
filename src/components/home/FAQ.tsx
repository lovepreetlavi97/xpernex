"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqsData } from "@/data/data";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 border-b border-brand-border/40 bg-brand-dark/20">
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />

      <div className="mx-auto max-w-4xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-secondary font-mono text-sm font-semibold tracking-widest uppercase mb-3 block">
            Questions & Answers
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqsData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="glass-panel rounded-2xl border border-white/5 hover:border-brand-primary/20 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans text-lg font-bold text-white tracking-wide pr-6">
                    {item.question}
                  </span>
                  <span className="flex-shrink-0 p-1.5 rounded-lg bg-white/5 border border-white/5 text-brand-muted hover:text-white transition-colors duration-300">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-brand-muted text-sm sm:text-base leading-relaxed border-t border-white/5">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
