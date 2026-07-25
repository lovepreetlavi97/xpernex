"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import ThreeSphere from "@/components/ThreeSphere";
import ParticleBackground from "@/components/ParticleBackground";

export default function Hero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-28 lg:pb-32 px-4 sm:px-6 lg:px-8 border-b border-brand-border/40">
      {/* Background Neural Particles */}
      <ParticleBackground />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />

      {/* Soft Gradient Light Glows */}
      <div className="absolute top-[20%] left-[10%] -z-10 h-[350px] w-[350px] rounded-full bg-brand-primary/10 blur-[130px] opacity-70 pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] -z-10 h-[350px] w-[350px] rounded-full bg-brand-highlight/10 blur-[130px] opacity-70 pointer-events-none" />

      <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">
        {/* Left Side: Headline & Copys */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">

          {/* Brand Tag Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/5 px-4 py-1.5 text-xs font-semibold tracking-wider text-brand-secondary uppercase mb-8"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Experts for the Next Generation</span>
          </motion.div>

          {/* Animated Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-sans text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-8"
          >
            Engineering Tomorrow.{" "}
            <span className="bg-gradient-to-r from-brand-primary via-brand-highlight to-brand-secondary bg-clip-text text-transparent">
              Today.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-brand-muted text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl mb-14"
          >
            We build AI-powered software, enterprise systems, cloud solutions, and intelligent digital experiences for ambitious businesses worldwide.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5 sm:gap-8 w-full sm:w-auto"
          >
            <Link href="/contact" className="focus-visible:outline-none rounded-full w-full sm:w-auto">
              <motion.div
                className="relative h-[56px] min-w-[240px] px-10 inline-flex items-center justify-center gap-3.5 overflow-hidden rounded-full text-base font-bold text-white uppercase tracking-[0.06em] whitespace-nowrap group cursor-pointer"
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

                <span className="relative z-10">Start Your Project</span>
                <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.div>
            </Link>

            <Link href="/services" className="focus-visible:outline-none rounded-full w-full sm:w-auto">
              <motion.div
                className="relative h-[56px] min-w-[240px] px-10 inline-flex items-center justify-center gap-3 overflow-hidden rounded-full text-base font-semibold text-white uppercase tracking-[0.06em] whitespace-nowrap border border-white/10 bg-white/5 backdrop-blur-md transition-colors duration-300 group cursor-pointer"
                whileHover={{
                  y: -2,
                  scale: 1.02,
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  borderColor: "rgba(0, 245, 212, 0.35)",
                  boxShadow: "0 12px 30px rgba(0, 245, 212, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <span>Explore Services</span>
              </motion.div>
            </Link>
          </motion.div>
        </div>

        {/* Right Side: 3D Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 w-full h-[400px] sm:h-[500px] flex items-center justify-center relative z-10"
        >
          {/* Subtle Outer Glowing Ring behind Canvas */}
          <div className="absolute h-[320px] w-[320px] sm:h-[400px] sm:w-[400px] rounded-full border border-brand-primary/10 animate-pulse-slow opacity-60" />
          <div className="absolute h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] rounded-full border border-brand-secondary/5 animate-pulse opacity-40" />

          <ThreeSphere />
        </motion.div>
      </div>
    </section>
  );
}
