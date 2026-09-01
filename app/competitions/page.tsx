import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { competitions } from "@/data/competitions";
import { Tag } from "@/components/ui/Tag";
import { CompetitionIcon } from "@/components/ui/CompetitionIcon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Competitions",
  description:
    "Explore all five iConclave 2026 competitions: PromptWar, 3 Minutes Thesis, Project Showcasing, Robo Soccer, and Poster Presentation.",
};

export default function CompetitionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 border-b border-[#E7E8EC] bg-white">
        <div className="container-wide">
          <span className="text-label text-[#8A8F98] block mb-6">iConclave 2026</span>
          <h1 className="text-display font-display font-bold tracking-tight text-[#111111] mb-6">
            ALL COMPETITIONS.
          </h1>
          <p className="text-[#5F6368] text-xl max-w-xl leading-relaxed">
            Five disciplines. Five ways to compete. Choose your arena.
          </p>
        </div>
      </section>

      {/* Competition List */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-6">
            {competitions.map((comp, i) => (
              <Link
                key={comp.slug}
                href={`/competitions/${comp.slug}`}
                className="group flex flex-col md:flex-row md:items-center gap-6 p-6 md:p-8 bg-[#F7F8FA] hover:bg-white border border-[#E7E8EC] hover:border-[#111111] rounded-2xl transition-all duration-300"
              >
                <div className="shrink-0">
                  <span className="text-label text-[#8A8F98]">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-[#111111] tracking-tight">
                      {comp.name}
                    </h2>
                    <span className="text-sm text-[#8A8F98]">{comp.category}</span>
                  </div>
                  <p className="text-[#5F6368] mb-4 leading-relaxed line-clamp-2">
                    {comp.shortDescription}
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="flex items-center justify-center bg-white border border-[#E7E8EC] p-1.5 rounded-md text-[#111111] group-hover:text-[#1455D9] group-hover:border-[#1455D9]/30 transition-colors">
                      <CompetitionIcon slug={comp.slug} size={16} />
                    </div>
                    {comp.tags.map((tag) => (
                      <Tag key={tag} label={tag} />
                    ))}
                  </div>
                </div>
                <div className="shrink-0 self-center">
                  <div className="w-10 h-10 rounded-full border border-[#E7E8EC] group-hover:border-[#111111] group-hover:bg-[#111111] flex items-center justify-center transition-all duration-200">
                    <ArrowRight
                      size={16}
                      className="text-[#8A8F98] group-hover:text-white group-hover:translate-x-0.5 transition-all"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
