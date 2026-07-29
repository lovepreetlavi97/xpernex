"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "CTO, Zenith Retail",
    text: "Xpernex redesigned our headless retail infrastructure. They migrated our legacy systems to a serverless Next.js storefront, cutting our average checkout speeds to 0.3s and boosting conversion rates by 32%. Their engineering standards are state-of-the-art.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
  },
  {
    name: "David Chen",
    role: "VP of Operations, Apex Cargo Group",
    text: "The reinforcement learning algorithms developed by Xpernex coordinate over 15,000 active delivery vehicles. They optimized route schedules dynamically and cut our annual fuel costs by $4.2M. Truly enterprise-level software engineers.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
  },
  {
    name: "Dr. Rachel Adams",
    role: "Chief Medical Officer, HealthFlow Solutions",
    text: "Migrating 42 clinics to a unified, HIPAA-compliant patient management system was a monumental security concern. Xpernex engineered a zero-trust Cognito system with 100% compliance audits, saving patient wait time by 70%. Perfectly executed.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="relative py-16 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-brand-border/40 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />

      {/* Background Soft Lights */}
      <div className="absolute top-[20%] left-[-10%] -z-10 h-[300px] w-[300px] rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] -z-10 h-[300px] w-[300px] rounded-full bg-brand-highlight/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-5xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-secondary font-mono text-sm font-semibold tracking-widest uppercase mb-3 block">
            Client Stories
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Trusted by Industry Leaders
          </h2>
        </div>

        {/* Carousel Card */}
        <div className="relative">
          
          {/* Main Card */}
          <div className="glass-panel rounded-3xl p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 relative overflow-hidden">
            <Quote className="absolute right-8 top-8 h-24 w-24 text-white/5 pointer-events-none" />

            {/* Profile pic */}
            <div className="flex-shrink-0">
              <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden border border-brand-primary/30 p-1 bg-brand-dark">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={TESTIMONIALS[active].avatar}
                  alt={TESTIMONIALS[active].name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Quote details */}
            <div className="flex-grow flex flex-col items-center md:items-start text-center md:text-left">
              
              {/* Rating stars */}
              <div className="flex gap-1.5 text-brand-secondary mb-6">
                {[...Array(TESTIMONIALS[active].stars)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-secondary" />
                ))}
              </div>

              {/* Quote text with custom slide effects */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="font-sans text-lg sm:text-xl font-medium leading-relaxed text-white/90 mb-8"
                >
                  "{TESTIMONIALS[active].text}"
                </motion.p>
              </AnimatePresence>

              {/* Author Info */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active + "author"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="font-sans text-base font-bold text-white">
                    {TESTIMONIALS[active].name}
                  </h4>
                  <span className="text-brand-muted text-xs font-semibold uppercase tracking-wider block mt-1">
                    {TESTIMONIALS[active].role}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center md:justify-end gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-white/5 border border-white/5 text-brand-muted hover:text-white hover:border-brand-primary/20 transition-all duration-300 active:scale-95"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-white/5 border border-white/5 text-brand-muted hover:text-white hover:border-brand-primary/20 transition-all duration-300 active:scale-95"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
