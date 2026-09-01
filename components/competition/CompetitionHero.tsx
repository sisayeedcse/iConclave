"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, ChevronLeft } from "lucide-react";
import { AbstractGraphic } from "@/components/ui/AbstractGraphic";
import { Tag } from "@/components/ui/Tag";
import type { Competition } from "@/data/competitions";

export function CompetitionHero({ competition }: { competition: Competition }) {
  return (
    <section className="relative min-h-[85vh] flex items-end overflow-hidden bg-white border-b border-[#E7E8EC]">
      {/* Background graphic */}
      <AbstractGraphic
        variant="hero"
        accentFrom={competition.accent.from}
        accentTo={competition.accent.to}
        className="absolute right-0 top-0 w-full md:w-[60%] h-full opacity-60"
      />

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />

      <div className="container-wide relative z-10 pt-36 pb-16">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <Link
            href="/competitions"
            className="inline-flex items-center gap-1.5 text-sm text-[#8A8F98] hover:text-[#111111] transition-colors"
          >
            <ChevronLeft size={14} />
            All Competitions
          </Link>
        </motion.div>

        {/* Number + organizer */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <span className="text-label text-[#8A8F98]">
            {String(competition.index).padStart(2, "0")}
          </span>
          <span className="text-[#E7E8EC]">—</span>
          <span className="text-sm text-[#5F6368]">{competition.organizerShort}</span>
        </motion.div>

        {/* Name */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
            className="text-hero font-display font-bold tracking-tight text-[#111111] leading-[0.9]"
          >
            {competition.name.toUpperCase()}
          </motion.h1>
        </div>

        {/* Tagline */}
        <div className="overflow-hidden mb-6">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-editorial font-display font-bold tracking-tight leading-tight"
            style={{
              background: `linear-gradient(135deg, ${competition.accent.from} 0%, ${competition.accent.to} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {competition.heroLine}
          </motion.p>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.42 }}
          className="text-[#5F6368] text-xl max-w-xl leading-relaxed mb-10"
        >
          {competition.shortDescription}
        </motion.p>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.52 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {competition.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.58 }}
          className="flex flex-wrap gap-3"
        >
          {competition.registrationUrl ? (
            <a
              href={competition.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold bg-[#111111] text-white rounded-[10px] hover:opacity-90 transition-opacity"
            >
              Register Now
              <ArrowUpRight size={16} />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold bg-[#F7F8FA] text-[#8A8F98] rounded-[10px] border border-[#E7E8EC] cursor-not-allowed">
              Registration Opening Soon
            </span>
          )}
          {competition.rulebookUrl && (
            <a
              href={competition.rulebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold bg-transparent text-[#111111] border border-[#E7E8EC] rounded-[10px] hover:border-[#111111] transition-colors"
            >
              View Rulebook
              <ExternalLink size={15} />
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
