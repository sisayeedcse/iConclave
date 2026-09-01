// iCONCLAVE 2026 — Global FAQ

export type FAQEntry = {
  question: string;
  answer: string;
  category?: string;
};

export const globalFAQs: FAQEntry[] = [
  {
    question: "What is iConclave?",
    answer:
      "iConclave is a multidisciplinary student technology and innovation competition organized at Premier University, Chattogram. It brings together five distinct competitions under one platform, celebrating different ways students can think, build, research, and compete.",
    category: "General",
  },
  {
    question: "Who can participate in iConclave 2026?",
    answer:
      "Participation eligibility details will be announced. Check individual competition pages for specific requirements.",
    category: "General",
  },
  {
    question: "Can I participate in multiple competitions?",
    answer:
      "Details about participating in multiple competitions simultaneously will be announced.",
    category: "General",
  },
  {
    question: "How do I register?",
    answer:
      "Registration details will be announced. Follow the registration links on each competition page when they open.",
    category: "Registration",
  },
  {
    question: "When does registration open?",
    answer: "Registration opening dates will be announced. Stay tuned.",
    category: "Registration",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "Registration fee details for each competition will be announced.",
    category: "Registration",
  },
  {
    question: "Where will competitions take place?",
    answer:
      "Venue details will be announced. All competitions are expected to be held at Premier University, Chattogram.",
    category: "Logistics",
  },
  {
    question: "When is iConclave 2026?",
    answer: "The event date will be announced. Check back soon.",
    category: "Logistics",
  },
  {
    question: "Are certificates provided to participants?",
    answer: "Certificate details will be announced.",
    category: "Logistics",
  },
  {
    question: "How can I contact the organizers?",
    answer:
      "Contact information for each competition's organizing body will be published when available. You can reach the respective IEEE chapters and clubs through their official channels.",
    category: "Contact",
  },
  {
    question: "Will there be prizes?",
    answer: "Prize details for each competition will be announced.",
    category: "Prizes",
  },
  {
    question: "Are rulebooks available?",
    answer:
      "Official rulebooks for each competition will be published when finalized. Check each competition's page for download links.",
    category: "Rules",
  },
];
