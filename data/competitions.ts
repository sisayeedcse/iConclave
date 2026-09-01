// iCONCLAVE 2026 — Competition Data
// All TBA fields will be filled by organizers when confirmed.

export type AccentColor = {
  from: string;
  to: string;
  single?: string;
};

export type RuleSection = {
  title: string;
  items: string[];
};

export type JudgingCriterion = {
  label: string;
  percentage: number | null;
  description: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type TimelineEvent = {
  label: string;
  date: string | null;
  description?: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type DosDonts = {
  dos: string[];
  donts: string[];
};

export type Competition = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  heroLine: string;
  organizer: string;
  organizerShort: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  accent: AccentColor;
  tags: string[];
  index: number;
  facts: {
    participation: string;
    teamSize: string;
    format: string;
    duration: string;
    date: string;
    venue: string;
    fee: string;
  };
  rounds: ProcessStep[];
  rules: RuleSection[];
  judgingCriteria: JudgingCriterion[];
  preparation: string[];
  dosDonts: DosDonts;
  timeline: TimelineEvent[];
  faqs: FAQ[];
  registrationUrl: string | null;
  rulebookUrl: string | null;
  contact: string | null;
};

export const competitions: Competition[] = [
  {
    slug: "promptwar",
    name: "PromptWar",
    shortName: "PromptWar",
    tagline: "Think. Prompt. Create.",
    heroLine: "YOUR PROMPT IS YOUR WEAPON.",
    organizer: "IEEE Computer Society Premier University Student Branch Chapter",
    organizerShort: "IEEE CS PUSBC",
    category: "Prompt Engineering / Artificial Intelligence",
    shortDescription:
      "A prompt engineering competition that challenges participants to harness AI through effective prompting, creative reasoning, and structured thinking.",
    longDescription:
      "PromptWar is where the quality of your thinking becomes the quality of your output. In an era where AI systems are only as powerful as the instructions they receive, PromptWar challenges participants to master the art and science of prompt engineering. Solve problems. Guide AI. Create results.",
    accent: { from: "#1455D9", to: "#6633CC" },
    tags: ["AI", "Prompt Engineering", "Problem Solving"],
    index: 1,
    facts: {
      participation: "To be announced",
      teamSize: "To be announced",
      format: "To be announced",
      duration: "To be announced",
      date: "TBA",
      venue: "TBA",
      fee: "TBA",
    },
    rounds: [
      {
        number: "01",
        title: "Register",
        description: "Complete your registration before the deadline.",
      },
      {
        number: "02",
        title: "Check-In",
        description: "Arrive early and check in on competition day.",
      },
      {
        number: "03",
        title: "Qualify",
        description: "Complete the qualification round challenges.",
      },
      {
        number: "04",
        title: "Final",
        description: "Top participants advance to the final round.",
      },
      {
        number: "05",
        title: "Win",
        description: "Results are announced and winners recognized.",
      },
    ],
    rules: [
      {
        title: "Eligibility",
        items: ["Details to be announced. Check back soon."],
      },
      {
        title: "Team Formation",
        items: ["Details to be announced. Check back soon."],
      },
      {
        title: "Competition Format",
        items: ["Details to be announced. Check back soon."],
      },
      {
        title: "Submission Guidelines",
        items: ["Details to be announced. Check back soon."],
      },
      {
        title: "Tools & Resources",
        items: ["Details to be announced. Check back soon."],
      },
      {
        title: "Prohibited Actions",
        items: ["Details to be announced. Check back soon."],
      },
      {
        title: "Disqualification",
        items: ["Details to be announced. Check back soon."],
      },
    ],
    judgingCriteria: [],
    preparation: [
      "Familiarize yourself with large language model fundamentals",
      "Practice structured and iterative prompting techniques",
      "Study prompt patterns: chain-of-thought, few-shot, zero-shot",
      "Experiment with different AI tools to understand output variance",
      "Practice evaluating and refining outputs critically",
      "Read about prompt injection and failure modes",
    ],
    dosDonts: {
      dos: [
        "Read the official rulebook when released",
        "Practice prompt engineering beforehand",
        "Bring required identification",
        "Arrive at least 30 minutes early",
      ],
      donts: [
        "Submit outputs without reviewing them carefully",
        "Violate competition tool usage rules",
        "Share prompts with other participants during the competition",
        "Ignore the judging criteria",
      ],
    },
    timeline: [
      { label: "Registration Opens", date: null },
      { label: "Registration Closes", date: null },
      { label: "Participant Shortlist", date: null },
      { label: "Competition Day", date: null },
      { label: "Winners Announced", date: null },
    ],
    faqs: [
      {
        question: "Do I need prior AI experience?",
        answer:
          "Details about prerequisites will be announced. General familiarity with AI tools is helpful.",
      },
      {
        question: "Can students from other universities participate?",
        answer: "Participation eligibility will be announced.",
      },
      {
        question: "What tools will be available during the competition?",
        answer: "Allowed tools and resources will be specified in the official rulebook.",
      },
      {
        question: "Can I participate in multiple iConclave competitions?",
        answer: "Details to be announced.",
      },
      {
        question: "Will certificates be provided?",
        answer: "Certificate details will be announced.",
      },
    ],
    registrationUrl: null,
    rulebookUrl: null,
    contact: null,
  },

  {
    slug: "three-minutes-thesis",
    name: "3 Minutes Thesis",
    shortName: "3MT",
    tagline: "Three minutes. One idea. Make it count.",
    heroLine: "YOUR RESEARCH, DISTILLED.",
    organizer: "Premier University Computer Club",
    organizerShort: "PUCC",
    category: "Research / Presentation / Communication",
    shortDescription:
      "A concise research communication competition where participants convey the core idea, impact, and significance of their thesis or research in exactly three minutes.",
    longDescription:
      "3 Minutes Thesis challenges researchers and students to strip away jargon and complexity and communicate what matters most: the idea, the impact, and the story. Three minutes is deceptively short. It demands clarity, precision, and presence. If you can explain your research to a general audience in three minutes, you truly understand it.",
    accent: { from: "#1455D9", to: "#1455D9", single: "#1455D9" },
    tags: ["Research", "Communication", "Presentation"],
    index: 2,
    facts: {
      participation: "To be announced",
      teamSize: "Individual",
      format: "To be announced",
      duration: "3 Minutes per participant",
      date: "TBA",
      venue: "TBA",
      fee: "TBA",
    },
    rounds: [
      {
        number: "01",
        title: "Register",
        description: "Submit your registration and research topic.",
      },
      {
        number: "02",
        title: "Abstract",
        description: "Submit a brief abstract of your research.",
      },
      {
        number: "03",
        title: "Present",
        description: "Deliver your three-minute presentation.",
      },
      {
        number: "04",
        title: "Q&A",
        description: "Answer brief questions from the judging panel.",
      },
      {
        number: "05",
        title: "Results",
        description: "Winners announced at the closing ceremony.",
      },
    ],
    rules: [
      {
        title: "Eligibility",
        items: ["Details to be announced. Check back soon."],
      },
      {
        title: "Presentation Rules",
        items: ["Details to be announced. Check back soon."],
      },
      {
        title: "Slide Requirements",
        items: ["Details to be announced. Check back soon."],
      },
      {
        title: "Timing",
        items: ["Details to be announced. Check back soon."],
      },
      {
        title: "Research Topics",
        items: ["Details to be announced. Check back soon."],
      },
      {
        title: "Prohibited Actions",
        items: ["Details to be announced. Check back soon."],
      },
    ],
    judgingCriteria: [],
    preparation: [
      "Distill your research to its single core idea",
      "Write a 3-minute script and time yourself repeatedly",
      "Avoid jargon — practice explaining to a non-specialist",
      "Use one clear slide that supports, not replaces, your words",
      "Practice eye contact, pacing, and projection",
      "Record yourself and review critically",
    ],
    dosDonts: {
      dos: [
        "Time your presentation to exactly 3 minutes",
        "Speak clearly and confidently",
        "Use a single, clear visual slide",
        "Focus on impact and significance, not methodology alone",
      ],
      donts: [
        "Read directly from notes",
        "Exceed the time limit",
        "Use slides as a script",
        "Use unexplained technical jargon",
      ],
    },
    timeline: [
      { label: "Registration Opens", date: null },
      { label: "Abstract Submission Deadline", date: null },
      { label: "Participant Confirmation", date: null },
      { label: "Competition Day", date: null },
      { label: "Winners Announced", date: null },
    ],
    faqs: [
      {
        question: "Does my research have to be completed?",
        answer:
          "Details about research requirements will be announced.",
      },
      {
        question: "Can I use a slide?",
        answer: "Slide requirements will be specified in the official rulebook.",
      },
      {
        question: "What topics are eligible?",
        answer: "Eligible research topics will be announced.",
      },
      {
        question: "Is this open to undergraduate students?",
        answer: "Eligibility details will be announced.",
      },
      {
        question: "Will certificates be provided?",
        answer: "Certificate details will be announced.",
      },
    ],
    registrationUrl: null,
    rulebookUrl: null,
    contact: null,
  },

  {
    slug: "project-showcasing",
    name: "Project Showcasing",
    shortName: "Project Showcase",
    tagline: "Build something worth showing.",
    heroLine: "SHOW WHAT YOU'VE BUILT.",
    organizer: "Premier University Robotics Club",
    organizerShort: "PURC",
    category: "Robotics / Innovation / Project Exhibition",
    shortDescription:
      "A project exhibition where participants showcase their prototypes, engineering ideas, and innovations to judges and fellow participants.",
    longDescription:
      "Project Showcasing is about demonstrating what you've actually built. Whether it's a hardware prototype, a software system, or an interdisciplinary innovation — if you built it, bring it. Projects are judged on technical merit, innovation, and how well participants can explain and defend their work.",
    accent: { from: "#6633CC", to: "#6633CC", single: "#6633CC" },
    tags: ["Robotics", "Innovation", "Prototype"],
    index: 3,
    facts: {
      participation: "To be announced",
      teamSize: "To be announced",
      format: "Exhibition + Presentation",
      duration: "To be announced",
      date: "TBA",
      venue: "TBA",
      fee: "TBA",
    },
    rounds: [
      {
        number: "01",
        title: "Register",
        description: "Register your project and team.",
      },
      {
        number: "02",
        title: "Setup",
        description: "Set up your project at your assigned booth.",
      },
      {
        number: "03",
        title: "Showcase",
        description: "Present and demonstrate your project to judges and visitors.",
      },
      {
        number: "04",
        title: "Q&A",
        description: "Defend your project to the judging panel.",
      },
      {
        number: "05",
        title: "Results",
        description: "Winners recognized at the closing ceremony.",
      },
    ],
    rules: [
      {
        title: "Eligibility",
        items: ["Details to be announced. Check back soon."],
      },
      {
        title: "Project Requirements",
        items: ["Details to be announced. Check back soon."],
      },
      {
        title: "Exhibition Setup",
        items: ["Details to be announced. Check back soon."],
      },
      {
        title: "Presentation Format",
        items: ["Details to be announced. Check back soon."],
      },
      {
        title: "Originality",
        items: ["Details to be announced. Check back soon."],
      },
      {
        title: "Prohibited Actions",
        items: ["Details to be announced. Check back soon."],
      },
    ],
    judgingCriteria: [],
    preparation: [
      "Ensure your prototype or demo is fully functional before the event",
      "Prepare a concise explanation of what your project does and why it matters",
      "Document your design choices and challenges overcome",
      "Prepare for technical questions from judges",
      "Create a clean, readable poster or visual summary of your project",
      "Test all hardware and software on the day before competition",
    ],
    dosDonts: {
      dos: [
        "Test your project thoroughly before the event",
        "Bring backup power or spare components",
        "Prepare a clear and concise pitch",
        "Document your project properly",
      ],
      donts: [
        "Submit a project that isn't functional",
        "Present someone else's work as your own",
        "Ignore the official submission guidelines",
        "Arrive late for setup",
      ],
    },
    timeline: [
      { label: "Registration Opens", date: null },
      { label: "Project Abstract Submission", date: null },
      { label: "Registration Closes", date: null },
      { label: "Competition Day", date: null },
      { label: "Winners Announced", date: null },
    ],
    faqs: [
      {
        question: "What kind of projects are eligible?",
        answer: "Project eligibility details will be announced.",
      },
      {
        question: "Can I bring hardware equipment?",
        answer: "Equipment guidelines will be specified in the official rulebook.",
      },
      {
        question: "Does the project have to be fully completed?",
        answer: "Requirements for project completion will be announced.",
      },
      {
        question: "Can I participate as an individual?",
        answer: "Individual vs. team participation will be clarified in the official rules.",
      },
      {
        question: "Will certificates be provided?",
        answer: "Certificate details will be announced.",
      },
    ],
    registrationUrl: null,
    rulebookUrl: null,
    contact: null,
  },

  {
    slug: "robo-soccer",
    name: "Robo Soccer",
    shortName: "Robo Soccer",
    tagline: "Build. Strategize. Dominate.",
    heroLine: "ROBOTS ON THE PITCH.",
    organizer:
      "IEEE Robotics and Automation Society Premier University Student Branch Chapter",
    organizerShort: "IEEE RAS PUSBC",
    category: "Robotics / Automation / Competition",
    shortDescription:
      "A robotics challenge where teams build and program robots to compete in a soccer-style tournament on a structured field.",
    longDescription:
      "Robo Soccer is where engineering meets strategy. Teams design, build, and program autonomous or semi-autonomous robots to compete in a soccer-style challenge. Every decision — from hardware to control logic — determines how far you go. It's part engineering sprint, part tactical game.",
    accent: { from: "#1455D9", to: "#06B6D4" },
    tags: ["Robotics", "Automation", "Strategy"],
    index: 4,
    facts: {
      participation: "Team",
      teamSize: "To be announced",
      format: "Tournament",
      duration: "To be announced",
      date: "TBA",
      venue: "TBA",
      fee: "TBA",
    },
    rounds: [
      {
        number: "01",
        title: "Register",
        description: "Register your team and robot specifications.",
      },
      {
        number: "02",
        title: "Tech Check",
        description: "Pass the technical inspection of your robot.",
      },
      {
        number: "03",
        title: "Group Stage",
        description: "Compete in the group stage matches.",
      },
      {
        number: "04",
        title: "Finals",
        description: "Top teams advance to the knockout rounds.",
      },
      {
        number: "05",
        title: "Win",
        description: "Champions crowned at the closing ceremony.",
      },
    ],
    rules: [
      {
        title: "Robot Specifications",
        items: ["Details to be announced. Check back soon."],
      },
      {
        title: "Team Composition",
        items: ["Details to be announced. Check back soon."],
      },
      {
        title: "Match Rules",
        items: ["Details to be announced. Check back soon."],
      },
      {
        title: "Field Rules",
        items: ["Details to be announced. Check back soon."],
      },
      {
        title: "Permitted Hardware",
        items: ["Details to be announced. Check back soon."],
      },
      {
        title: "Prohibited Actions",
        items: ["Details to be announced. Check back soon."],
      },
      {
        title: "Disqualification",
        items: ["Details to be announced. Check back soon."],
      },
    ],
    judgingCriteria: [],
    preparation: [
      "Design and test your robot well before competition day",
      "Run multiple test matches to evaluate strategy and stability",
      "Bring spare components: motors, batteries, wiring, fasteners",
      "Read the official robot specification limits carefully",
      "Practice repair and reassembly quickly under time pressure",
      "Plan your game strategy, not just your hardware",
    ],
    dosDonts: {
      dos: [
        "Test your robot on a surface similar to the competition field",
        "Bring spare parts and tools",
        "Read and understand the robot specification rules",
        "Arrive early for the technical inspection",
      ],
      donts: [
        "Bring a robot that exceeds specification limits",
        "Modify your robot after technical inspection without permission",
        "Interfere with opponents' robots outside of normal play",
        "Leave hardware and components unattended",
      ],
    },
    timeline: [
      { label: "Registration Opens", date: null },
      { label: "Registration Closes", date: null },
      { label: "Robot Specification Submission", date: null },
      { label: "Technical Inspection", date: null },
      { label: "Competition Day", date: null },
      { label: "Winners Announced", date: null },
    ],
    faqs: [
      {
        question: "What are the robot size and weight limits?",
        answer: "Robot specifications will be detailed in the official rulebook.",
      },
      {
        question: "Can we modify our robot between matches?",
        answer: "Modification rules will be specified in the official rulebook.",
      },
      {
        question: "What is the field size?",
        answer: "Field dimensions will be announced.",
      },
      {
        question: "Are autonomous robots required?",
        answer: "Control requirements (autonomous vs. remote) will be specified in the rules.",
      },
      {
        question: "Will certificates be provided?",
        answer: "Certificate details will be announced.",
      },
    ],
    registrationUrl: null,
    rulebookUrl: null,
    contact: null,
  },

  {
    slug: "poster-presentation",
    name: "Poster Presentation",
    shortName: "Poster Presentation",
    tagline: "Research you can stand in front of.",
    heroLine: "YOUR RESEARCH, VISUALIZED.",
    organizer:
      "IEEE Power and Energy Society Premier University Student Branch Chapter",
    organizerShort: "IEEE PES PUSBC",
    category: "Power / Energy / Research / Presentation",
    shortDescription:
      "A poster presentation competition where participants communicate technical or research ideas through a compelling visual poster, with a focus on power and energy topics.",
    longDescription:
      "Poster Presentation is about making research accessible. Participants create a visual poster that communicates their research clearly and compellingly — and then stand in front of it and defend it. The best poster presentations don't just display data; they tell a story.",
    accent: { from: "#6633CC", to: "#C5229E" },
    tags: ["Energy", "Research", "Presentation"],
    index: 5,
    facts: {
      participation: "To be announced",
      teamSize: "To be announced",
      format: "Poster Exhibition + Defence",
      duration: "To be announced",
      date: "TBA",
      venue: "TBA",
      fee: "TBA",
    },
    rounds: [
      {
        number: "01",
        title: "Register",
        description: "Register and submit your research abstract.",
      },
      {
        number: "02",
        title: "Abstract Review",
        description: "Your abstract is reviewed for eligibility.",
      },
      {
        number: "03",
        title: "Poster Submission",
        description: "Submit your finalized poster for printing or bring a print.",
      },
      {
        number: "04",
        title: "Exhibition",
        description: "Present your poster and defend your research to judges.",
      },
      {
        number: "05",
        title: "Results",
        description: "Winners announced at the closing ceremony.",
      },
    ],
    rules: [
      {
        title: "Eligibility",
        items: ["Details to be announced. Check back soon."],
      },
      {
        title: "Research Topics",
        items: ["Details to be announced. Check back soon."],
      },
      {
        title: "Poster Requirements",
        items: ["Details to be announced. Check back soon."],
      },
      {
        title: "Presentation Format",
        items: ["Details to be announced. Check back soon."],
      },
      {
        title: "Originality",
        items: ["Details to be announced. Check back soon."],
      },
      {
        title: "Prohibited Actions",
        items: ["Details to be announced. Check back soon."],
      },
    ],
    judgingCriteria: [],
    preparation: [
      "Structure your poster: title, abstract, methodology, results, conclusion",
      "Use clear, readable typography and logical visual flow",
      "Limit text — use visuals, charts, and diagrams where possible",
      "Prepare a 2–3 minute verbal summary to accompany your poster",
      "Anticipate questions judges might ask and prepare answers",
      "Review poster design best practices for academic contexts",
    ],
    dosDonts: {
      dos: [
        "Use a clear and logical poster layout",
        "Keep text concise — let visuals carry the content",
        "Prepare to explain your research verbally",
        "Review your poster for clarity before submission",
      ],
      donts: [
        "Overcrowd your poster with dense text",
        "Use illegible font sizes",
        "Plagiarize or present others' research as your own",
        "Ignore the poster format specifications",
      ],
    },
    timeline: [
      { label: "Registration Opens", date: null },
      { label: "Abstract Submission Deadline", date: null },
      { label: "Abstract Review Result", date: null },
      { label: "Poster Submission Deadline", date: null },
      { label: "Competition Day", date: null },
      { label: "Winners Announced", date: null },
    ],
    faqs: [
      {
        question: "What research topics are eligible?",
        answer: "Eligible topics will be announced. The focus is on power and energy.",
      },
      {
        question: "Does the poster have to be printed?",
        answer: "Poster format requirements will be specified in the official rulebook.",
      },
      {
        question: "What size should the poster be?",
        answer: "Poster size specifications will be announced.",
      },
      {
        question: "Can I present as an individual?",
        answer: "Individual vs. team participation will be clarified in the official rules.",
      },
      {
        question: "Will certificates be provided?",
        answer: "Certificate details will be announced.",
      },
    ],
    registrationUrl: null,
    rulebookUrl: null,
    contact: null,
  },
];

export function getCompetitionBySlug(slug: string): Competition | undefined {
  return competitions.find((c) => c.slug === slug);
}

export function getAllSlugs(): string[] {
  return competitions.map((c) => c.slug);
}
