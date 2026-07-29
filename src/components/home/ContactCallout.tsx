"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ContactCallout() {
  return (
    <section className="relative py-16 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Mesh Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[600px] w-[600px] rounded-full bg-brand-primary/10 blur-[130px] opacity-70 pointer-events-none" />

      <div className="mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel rounded-3xl p-8 sm:p-12 md:p-16 text-center border-brand-primary/20 shadow-[0_0_50px_rgba(91,91,255,0.1)] relative overflow-hidden"
        >
          {/* Inner grid overlay */}
          <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />

          {/* Floating Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/30 bg-brand-secondary/5 px-4 py-1.5 text-xs font-semibold tracking-wider text-brand-secondary uppercase mb-8">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Scale Beyond Limits</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 max-w-2xl mx-auto leading-tight">
            Ready to Build the Future of Your Business?
          </h2>

          <p className="text-brand-muted text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-14">
            Partner with Xpernex to construct high-performance AI engines, cloud infrastructures, and digital applications engineered for global scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 justify-center">
            <Link href="/contact" className="focus-visible:outline-none rounded-full w-full sm:w-auto">
              <motion.div
                className="relative h-[56px] w-full sm:w-auto sm:min-w-[240px] px-6 sm:px-10 inline-flex items-center justify-center gap-3.5 overflow-hidden rounded-full text-base font-bold text-white uppercase tracking-[0.06em] whitespace-nowrap group cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #5B5BFF 0%, #8B5CF6 100%)",
                }}
                whileHover={{
                  y: -2,
                  scale: 1.02,
                  boxShadow: "0 15px 35px rgba(91,91,255,0.45), 0 0 50px rgba(91,91,255,0.25)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                {/* Background sliding animation gradient overlay */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-[#5B5BFF] via-[#8B5CF6] to-[#00F5D4]"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                />

                {/* Shimmer sweep pass every 6 seconds */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  initial={{ x: "-100%" }}
                  animate={{
                    x: ["-100%", "200%"]
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    repeatDelay: 5,
                    ease: "easeInOut"
                  }}
                />

                <span className="relative z-10">Get in Touch</span>
                <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.div>
            </Link>

            <Link href="/portfolio" className="focus-visible:outline-none rounded-full w-full sm:w-auto">
              <motion.div
                className="relative h-[56px] w-full sm:w-auto sm:min-w-[240px] px-6 sm:px-10 inline-flex items-center justify-center gap-3 overflow-hidden rounded-full text-base font-semibold text-white uppercase tracking-[0.06em] whitespace-nowrap border border-white/10 bg-white/5 backdrop-blur-md transition-colors duration-300 group cursor-pointer"
                whileHover={{
                  y: -2,
                  scale: 1.02,
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  borderColor: "rgba(0, 245, 212, 0.35)",
                  boxShadow: "0 12px 30px rgba(0, 245, 212, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <span>See Our Work</span>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
