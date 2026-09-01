const fs = require('fs');
let content = fs.readFileSync('data/competitions.ts', 'utf8');

const newComp = 
  {
    slug: "she-suite-summit",
    name: "The She-Suite Summit: Shaping Tomorrow’s Narrative",
    shortName: "She-Suite Summit",
    tagline: "Empowering Women in Tech and Leadership.",
    heroLine: "SHAPING TOMORROW’S NARRATIVE.",
    organizer: "IEEE Women in Engineering",
    organizerShort: "IEEE WIE",
    category: "Summit / Leadership / Tech",
    shortDescription: "A summit dedicated to empowering women in technology, fostering leadership skills, and shaping the future narrative of the industry.",
    longDescription: "The She-Suite Summit brings together aspiring women leaders, industry experts, and technologists to discuss challenges, share success stories, and build a strong network. It focuses on shaping the narrative for women in tech and leadership roles.",
    accent: { from: "#C5229E", to: "#6633CC", single: "#C5229E" },
    tags: ["Leadership", "Women in Tech", "Summit"],
    index: 6,
    facts: {
      participation: "To be announced",
      teamSize: "Individual/Group",
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
        description: "Submit your registration to attend.",
      }
    ],
    rules: [
      {
        title: "Eligibility",
        items: ["Details to be announced. Check back soon."],
      }
    ],
    judgingCriteria: [],
    preparation: [
      "Prepare questions for the speakers",
      "Bring networking materials like business cards or digital profiles",
    ],
    dosDonts: {
      dos: [
        "Network with peers and speakers",
        "Participate actively in discussions",
      ],
      donts: [
        "Interrupt speakers during sessions",
      ],
    },
    timeline: [
      { label: "Registration Opens", date: null },
      { label: "Summit Day", date: null },
    ],
    faqs: [
      {
        question: "Who can attend?",
        answer: "Attendance details will be announced.",
      }
    ],
    registrationUrl: null,
    rulebookUrl: null,
    contact: null,
  }
;

content = content.replace(/\];\s*export function getCompetitionBySlug/, ',' + newComp + '];\n\nexport function getCompetitionBySlug');

fs.writeFileSync('data/competitions.ts', content);
console.log('Added 6th competition');
