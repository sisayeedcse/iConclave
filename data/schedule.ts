// iCONCLAVE 2026 — Schedule Data

export type TimeSlot = {
  time: string;
  title: string;
  description?: string;
  competition?: string;
  type: "general" | "competition" | "ceremony" | "break";
};

export type ScheduleDay = {
  day: string;
  date: string | null;
  label: string;
  slots: TimeSlot[];
};

export const schedule: ScheduleDay[] = [
  {
    day: "Day 1",
    date: null,
    label: "Competition Day",
    slots: [
      {
        time: "TBA",
        title: "Registration & Check-in",
        description: "Participants check in and receive their competition materials.",
        type: "general",
      },
      {
        time: "TBA",
        title: "Opening Ceremony",
        description: "Welcome address and official commencement of iConclave 2026.",
        type: "ceremony",
      },
      {
        time: "TBA",
        title: "PromptWar",
        description: "Prompt engineering competition begins.",
        competition: "promptwar",
        type: "competition",
      },
      {
        time: "TBA",
        title: "3 Minutes Thesis",
        description: "Research communication competition.",
        competition: "three-minutes-thesis",
        type: "competition",
      },
      {
        time: "TBA",
        title: "Project Showcasing",
        description: "Project exhibition and judging.",
        competition: "project-showcasing",
        type: "competition",
      },
      {
        time: "TBA",
        title: "Robo Soccer",
        description: "Robotics tournament matches.",
        competition: "robo-soccer",
        type: "competition",
      },
      {
        time: "TBA",
        title: "Poster Presentation",
        description: "Poster exhibition and judging.",
        competition: "poster-presentation",
        type: "competition",
      },
      {
        time: "TBA",
        title: "Break",
        description: "Lunch and networking.",
        type: "break",
      },
      {
        time: "TBA",
        title: "Finals & Semifinals",
        description: "Final rounds for qualifying competitions.",
        type: "competition",
      },
      {
        time: "TBA",
        title: "Closing Ceremony & Prize-giving",
        description: "Results announcement and award distribution.",
        type: "ceremony",
      },
    ],
  },
];

export const scheduleNote =
  "The detailed schedule including exact timings, competition sequences, and venue allocations will be published closer to the event date.";
