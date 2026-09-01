"use client";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { AbstractGraphic } from "@/components/ui/AbstractGraphic";

export function HomeHero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" },
  } as any);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Abstract background */}
      <AbstractGraphic
        variant="hero"
        className="absolute right-0 top-0 w-full md:w-[55%] h-full opacity-70"
      />

      {/* Subtle top-left accent */}
      <div
        className="absolute top-0 left-0 w-72 h-72 rounded-full opacity-[0.04] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #1455D9 0%, transparent 70%)",
        }}
      />

      <div className="container-wide relative z-10 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-4xl">
          {/* Year badge */}
          <motion.div {...fadeUp(0.1)} className="mb-8">
            <span className="text-label text-[#8A8F98] tracking-widest">
              iCONCLAVE &nbsp;&mdash;&nbsp; 2026
            </span>
          </motion.div>

          {/* Hero heading */}
          <div className="overflow-hidden">
            <motion.h1
              className="text-hero text-[#111111] font-display font-bold tracking-tight leading-[0.9] mb-2"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.18, ease: "easeOut" }}
            >
              WHERE IDEAS
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              className="text-hero font-display font-bold tracking-tight leading-[0.9] mb-10"
              style={{
                background: "linear-gradient(135deg, #1455D9 0%, #6633CC 55%, #C5229E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.28, ease: "easeOut" }}
            >
              MEET INTELLIGENCE.
            </motion.h1>
          </div>

          {/* Subheading */}
          <motion.p
            {...fadeUp(0.42)}
            className="text-[#5F6368] text-xl md:text-2xl leading-relaxed mb-10 max-w-xl"
          >
            Five competitions.
            <br />
            One stage for innovation.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.52)}
            className="flex flex-wrap gap-3 md:gap-4"
          >
            <Link
              href="/competitions"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold bg-[#111111] text-white rounded-[10px] hover:bg-[#1455D9] transition-all duration-200 group"
            >
              Explore Competitions
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/competitions"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold bg-transparent text-[#111111] border border-[#E7E8EC] rounded-[10px] hover:border-[#111111] transition-all duration-200"
            >
              Register Now
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-label text-[#8A8F98]">Scroll</span>
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#8A8F98] to-transparent"
        />
      </motion.div>
    </section>
  );
}
