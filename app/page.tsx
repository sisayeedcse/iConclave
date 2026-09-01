import { HomeHero } from "@/components/hero/HomeHero";
import { StatStrip } from "@/components/hero/StatStrip";
import { EditorialIntro } from "@/components/home/EditorialIntro";
import { CompetitionExplorer } from "@/components/competitions/CompetitionExplorer";
import { WhyParticipate } from "@/components/home/WhyParticipate";
import { HowItWorks } from "@/components/home/HowItWorks";
import { SchedulePreview } from "@/components/home/SchedulePreview";
import { FAQPreview } from "@/components/home/FAQPreview";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Organizers } from "@/components/home/Organizers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "iConclave 2026 - Premier University",
  description:
    "iConclave 2026 is a multidisciplinary technology and innovation competition featuring PromptWar, PITCH3, Project Nexus, GoalBot Challenge, Research Exhibition, and The She-Suite Summit at Premier University.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StatStrip />
      <EditorialIntro />
      <CompetitionExplorer />
      <WhyParticipate />
      <HowItWorks />
      <SchedulePreview />
      <FAQPreview />
      <Organizers />
      <FinalCTA />
    </>
  );
}
