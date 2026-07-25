"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
    setScrolled(window.scrollY > 20);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8 pt-4 pointer-events-none">
      <motion.div
        animate={{
          height: scrolled ? 70 : 74,
          y: scrolled ? -4 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[1360px] pointer-events-auto relative rounded-2xl border flex items-center justify-between transition-colors duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(10, 15, 25, 0.72)" : "rgba(10, 15, 25, 0.62)",
          borderColor: scrolled ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.05)",
          backdropFilter: scrolled ? "blur(32px)" : "blur(28px)",
          WebkitBackdropFilter: scrolled ? "blur(32px)" : "blur(28px)",
          boxShadow: scrolled
            ? "0 16px 40px rgba(0,0,0,0.35), 0 0 60px rgba(91,91,255,0.1), inset 0 1px 0 0 rgba(255,255,255,0.05)"
            : "0 12px 35px rgba(0,0,0,0.30), 0 0 60px rgba(91,91,255,0.08), inset 0 1px 0 0 rgba(255,255,255,0.05)",
        }}
      >
        {/* Subtle Noise Texture Overlay */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-[0.015] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
          }}
        />

        {/* Content Container */}
        <div className="w-full h-full flex items-center justify-between px-6 z-10">
          
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50 rounded-xl">
            <motion.div
              className="relative border border-white/15 bg-white/5 shadow-[0_0_15px_rgba(91,91,255,0.12)] flex items-center justify-center p-1.5 overflow-hidden group-hover:border-brand-primary/40"
              style={{
                width: 42,
                height: 42,
                borderRadius: 14
              }}
              animate={{
                scale: scrolled ? 0.95 : 1
              }}
              whileHover={{
                scale: 1.05,
                rotate: 3
              }}
              transition={{ type: "spring", stiffness: 450, damping: 14 }}
            >
              {/* Animated Light Sweep Sweep */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                initial={{ x: "-100%" }}
                whileHover={{ x: "150%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              
              <svg className="h-full w-full z-10 p-0.5" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  {/* Neon Color Gradients */}
                  <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#bf5af2" />
                    <stop offset="50%" stopColor="#5e5ce6" />
                    <stop offset="100%" stopColor="#0a84ff" />
                  </linearGradient>
                  <linearGradient id="blueGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0a84ff" />
                    <stop offset="50%" stopColor="#00d2ff" />
                    <stop offset="100%" stopColor="#00f5d4" />
                  </linearGradient>
                  <linearGradient id="cyanGrad" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00f5d4" />
                    <stop offset="50%" stopColor="#0a84ff" />
                    <stop offset="100%" stopColor="#5e5ce6" />
                  </linearGradient>
                  <linearGradient id="bevelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#00f5d4" stopOpacity="0.8" />
                  </linearGradient>
                  
                  {/* Glow Filters */}
                  <filter id="sciFiGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="flareGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Soft background glow ball */}
                <circle cx="50" cy="45" r="22" fill="#0a84ff" opacity="0.15" filter="url(#sciFiGlow)" />

                {/* Left Chevron - Top Half (Purple Gradient) */}
                <path 
                  d="M 28,15 L 40,15 L 46,40 L 53,45 L 42.5,45 Z" 
                  fill="url(#purpleGrad)" 
                  stroke="rgba(255, 255, 255, 0.15)"
                  strokeWidth="0.8"
                />
                
                {/* Left Chevron - Bottom Half (Blue Gradient) */}
                <path 
                  d="M 28,75 L 40,75 L 46,50 L 53,45 L 42.5,45 Z" 
                  fill="url(#blueGrad)" 
                  stroke="rgba(255, 255, 255, 0.15)"
                  strokeWidth="0.8"
                />

                {/* Top-Right Cyber Leg (Cyan Gradient) */}
                <path 
                  d="M 72,15 L 60,15 L 48.5,38 L 60.5,38 Z" 
                  fill="url(#cyanGrad)" 
                  stroke="rgba(255, 255, 255, 0.15)"
                  strokeWidth="0.8"
                />

                {/* Bottom-Right Cyber Leg (Cyan Gradient) */}
                <path 
                  d="M 72,75 L 60,75 L 48.5,52 L 60.5,52 Z" 
                  fill="url(#cyanGrad)" 
                  stroke="rgba(255, 255, 255, 0.15)"
                  strokeWidth="0.8"
                />

                {/* Light Refraction Bevel Overlays (3D Glass borders) */}
                <path d="M 28,15 L 53,45 L 28,75" stroke="url(#bevelGrad)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
                <path d="M 72,15 L 60.5,38" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
                <path d="M 72,75 L 60.5,52" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.5" />

                {/* Center Sci-Fi HUD Power Node & Glow Sparkle */}
                <path d="M 43,45 L 56,45" stroke="#00f5d4" strokeWidth="2.5" strokeLinecap="round" filter="url(#flareGlow)" opacity="0.9" />
                <circle cx="51" cy="45" r="2.5" fill="#ffffff" filter="url(#flareGlow)" />
              </svg>
            </motion.div>
          </Link>

          {/* Desktop Nav menu links with Framer Motion animated highlights */}
          <nav 
            className="hidden md:flex items-center gap-[36px]"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {NAV_LINKS.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  className={`relative font-sans text-[15px] font-medium tracking-wide transition-colors duration-300 py-2 focus-visible:outline-none focus-visible:text-white ${
                    isActive ? "text-white" : "text-brand-muted hover:text-white"
                  }`}
                  style={{
                    transform: hoveredIndex === idx ? "translateY(-1px)" : "translateY(0)",
                    transition: "transform 0.2s ease"
                  }}
                >
                  <span className="relative z-10">{link.label}</span>

                  {/* Sliding Hover Underline */}
                  <AnimatePresence>
                    {hoveredIndex === idx && (
                      <motion.span
                        layoutId="hoverUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white/20 rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Active Link gradient underline */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-[#5B5BFF] via-[#8B5CF6] to-[#00F5D4] shadow-[0_0_10px_rgba(91,91,255,0.6)]"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Start Project Button */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <Link href="/contact" className="focus-visible:outline-none rounded-full">
              <motion.div
                className="relative h-[46px] min-w-[210px] px-8 inline-flex items-center justify-center gap-3 overflow-hidden rounded-full text-[15px] font-semibold tracking-[0.01em] text-white whitespace-nowrap group"
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

                <span className="relative z-10">Start Project</span>

                <ArrowUpRight
                  className="relative z-10 h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden p-2 rounded-xl text-brand-muted hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Drawer Slide Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur Mask */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md md:hidden"
            />

            <motion.div
              initial={{ opacity: 0, x: 280 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 280 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-xs md:hidden bg-brand-dark/95 border-l border-white/5 flex flex-col justify-between p-6 shadow-2xl backdrop-blur-2xl"
              style={{
                boxShadow: "-10px 0 40px rgba(0, 0, 0, 0.5)"
              }}
            >
              {/* Close Button Header */}
              <div className="flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl text-brand-muted hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-none"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex flex-col gap-5 my-auto">
                {NAV_LINKS.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block font-sans text-xl font-bold tracking-wide transition-colors ${
                          isActive ? "text-brand-secondary" : "text-white/80 hover:text-white"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Drawer CTA */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mb-6 w-full"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 rounded-full py-3.5 text-center text-[15px] font-semibold text-white shadow-lg relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #5B5BFF 0%, #8B5CF6 100%)",
                  }}
                >
                  <span>Start Project</span>
                  <ArrowUpRight className="h-4.5 w-4.5" />
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
