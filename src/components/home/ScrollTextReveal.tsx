"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ScrollTextRevealProps {
  title: string;
  tagline: string;
  paragraph: string;
  ctaText: string;
  ctaHref: string;
}

function Word({ children, progress, range }: { children: string; progress: any; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-3 inline-block">
      {children}
    </motion.span>
  );
}

export default function ScrollTextReveal({
  title,
  tagline,
  paragraph,
  ctaText,
  ctaHref
}: ScrollTextRevealProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"]
  });

  const words = paragraph.split(" ");

  return (
    <section ref={containerRef} className="relative py-28 px-4 sm:px-6 lg:px-8 border-b border-brand-border/40 overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-brand-primary/5 blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-5xl text-center">
        <span className="text-brand-secondary font-mono text-sm font-semibold tracking-widest uppercase mb-4 block">
          {title}
        </span>
        <h2 className="font-sans text-2xl sm:text-3xl font-bold text-brand-muted tracking-tight mb-12">
          {tagline}
        </h2>

        {/* Scroll Reveal Text */}
        <div className="relative mb-16 text-left max-w-4xl mx-auto">
          <p className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-relaxed flex flex-wrap justify-start">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = Math.min(1, start + 1.2 / words.length);
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>
        </div>

        {/* CTA Link */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <Link
            href={ctaHref}
            className="group relative inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-6 py-3.5 text-sm font-bold text-white hover:text-brand-secondary hover:border-brand-secondary/30 transition-all duration-300 active:scale-[0.98]"
          >
            <span>{ctaText}</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
