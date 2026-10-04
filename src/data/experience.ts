export interface Experience {
  id: string;
  number: string;
  type: "work" | "leadership";
  organization: string;
  role: string;
  dates?: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    id: "concept-simplified",
    number: "01",
    type: "work",
    organization: "Concept Simplified",
    role: "Product Growth Intern",
    dates: "Jun 2025 – Sep 2025",
    description: [
      "Guided prospective engineering students through college and admission options, researched engineering colleges, and helped students and parents make more informed decisions.",
      "Explained colleges, branches, admission processes and eligibility criteria in simple terms.",
      "Engaged and followed up with prospective students to understand their goals and answer queries.",
      "Gained hands-on exposure to product growth, user communication and the student decision-making funnel in an education-focused startup.",
    ],
  },
  {
    id: "gdg-on-campus",
    number: "02",
    type: "leadership",
    organization: "GDG On Campus APSIT",
    role: "Operations Head",
    description: [
      "Lead planning and execution of technical events and workshops, coordinating speakers, teams and logistics.",
      "Manage end-to-end event operations — scheduling, venue and resource arrangements, registrations and on-ground volunteer coordination.",
      "Build relationships across student and technology communities and support participation in technical programs.",
      "Work with the core team to align event themes with current developer and AI trends.",
    ],
  },
  {
    id: "csa",
    number: "03",
    type: "leadership",
    organization: "Computer Students Association",
    role: "Joint Event Head",
    description: [
      "Organize and coordinate student-led technical events, encouraging collaboration and peer engagement.",
      "Support planning, team coordination and day-of execution for workshops and competitions.",
      "Collaborate with fellow organizers and volunteers on outreach and participation.",
    ],
  },
];
