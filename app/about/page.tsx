import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { competitions } from "@/data/competitions";
import { CompetitionIcon } from "@/components/ui/CompetitionIcon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about iConclave — a multidisciplinary student technology and innovation competition at Premier University.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-24 border-b border-[#E7E8EC] bg-white">
        <div className="container-wide">
          <span className="text-label text-[#8A8F98] block mb-6">About</span>
          <h1 className="text-display font-display font-bold tracking-tight text-[#111111] mb-8 max-w-3xl">
            IDEAS. INTELLIGENCE. INNOVATION.
          </h1>
          <p className="text-[#5F6368] text-xl max-w-2xl leading-relaxed">
            iConclave is where students stop watching and start doing.
          </p>
        </div>
      </section>

      {/* What is iConclave */}
      <section className="section-padding border-b border-[#E7E8EC]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <span className="text-label text-[#8A8F98] block mb-3">What it is</span>
              <h2 className="text-section font-display font-bold text-[#111111] tracking-tight">
                ONE PLATFORM.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="text-[#5F6368] text-lg leading-relaxed">
                iConclave is a multidisciplinary student technology and innovation competition
                organized at Premier University, Chattogram, Bangladesh. It is a single,
                unified platform that brings together six distinct events — each celebrating
                a different way students can think, build, research, and innovate.
              </p>
              <p className="text-[#5F6368] text-lg leading-relaxed">
                Whether you are an AI enthusiast, a researcher, a robotics engineer, a builder,
                or a communicator — there is an arena for you at iConclave.
              </p>
              <p className="text-[#5F6368] text-lg leading-relaxed">
                iConclave exists because great ideas need a stage. Not just a classroom. Not just
                a lab. A real competitive environment where students are challenged, evaluated,
                and recognized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why it exists */}
      <section className="section-padding bg-[#F7F8FA] border-b border-[#E7E8EC]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-label text-[#8A8F98] block mb-3">Why it exists</span>
              <h2 className="text-section font-display font-bold text-[#111111] tracking-tight">
                THE MISSION.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    heading: "Beyond the classroom",
                    body: "University education teaches fundamentals. iConclave tests them under real competitive pressure.",
                  },
                  {
                    heading: "Interdisciplinary by design",
                    body: "Six events across AI, robotics, research, and communication — because innovation doesn't respect department boundaries.",
                  },
                  {
                    heading: "Recognition that matters",
                    body: "Students who compete, build, and present deserve recognition beyond grade sheets.",
                  },
                  {
                    heading: "Community building",
                    body: "iConclave gathers the most driven students in one place. The connections made here matter beyond the event.",
                  },
                ].map((item) => (
                  <div
                    key={item.heading}
                    className="bg-white border border-[#E7E8EC] rounded-2xl p-6"
                  >
                    <h3 className="font-display font-bold text-lg text-[#111111] mb-2">
                      {item.heading}
                    </h3>
                    <p className="text-[#5F6368] text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitions */}
      <section className="section-padding border-b border-[#E7E8EC]">
        <div className="container-wide">
          <div className="mb-10">
            <span className="text-label text-[#8A8F98] block mb-3">Competitions</span>
            <h2 className="text-section font-display font-bold text-[#111111] tracking-tight">
              SIX ARENAS.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitions.map((comp) => (
              <Link
                key={comp.slug}
                href={`/competitions/${comp.slug}`}
                className="group flex flex-col gap-4 p-6 bg-[#F7F8FA] hover:bg-white border border-[#E7E8EC] hover:border-[#111111] rounded-2xl transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="text-label text-[#8A8F98]">
                    {String(comp.index).padStart(2, "0")}
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-[#E7E8EC] group-hover:text-[#111111] group-hover:translate-x-1 transition-all"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-[#111111] mb-1">{comp.name}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#1455D9] mt-2">
                    <CompetitionIcon slug={comp.slug} size={14} />
                    <span className="font-medium">Arena</span>
                  </div>
                </div>
                <p className="text-[#5F6368] text-sm leading-relaxed line-clamp-3">
                  {comp.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Organizers */}
      <section className="section-padding bg-[#F7F8FA]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-label text-[#8A8F98] block mb-3">Organized by</span>
              <h2 className="text-section font-display font-bold text-[#111111] tracking-tight">
                STUDENT ORGANIZATIONS.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-4">
                {[
                  {
                    name: "IEEE Computer Society Premier University Student Branch Chapter",
                    role: "Organizing PromptWar",
                  },
                  {
                    name: "Premier University Computer Club",
                    role: "Organizing PITCH3",
                  },
                  {
                    name: "Premier University Computer and Robotics Club",
                    role: "Organizing Project Nexus",
                  },
                  {
                    name: "IEEE Robotics and Automation Society Premier University Student Branch Chapter",
                    role: "Organizing GoalBot Challenge",
                  },
                  {
                    name: "IEEE Power and Energy Society Premier University Student Branch Chapter",
                    role: "Organizing Research Exhibition",
                  },
                                  {
                    name: "IEEE Women in Engineering",
                    role: "Organizing The She-Suite Summit",
                  },
                ].map((org) => (
                  <div
                    key={org.name}
                    className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 p-5 bg-white border border-[#E7E8EC] rounded-xl"
                  >
                    <div className="flex-1">
                      <p className="font-semibold text-[#111111] text-base">{org.name}</p>
                    </div>
                    <span className="text-xs text-[#8A8F98] shrink-0">{org.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}