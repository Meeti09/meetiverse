export const profile = {
  name: "Meeti Doshi",
  firstName: "Meeti",
  lastName: "Doshi",
  location: "Mumbai, India",
  email: "meetidoshi09@gmail.com",
  university: "A. P. Shah Institute of Technology",
  degree: "B.E. Computer Engineering",
  years: "2024 – 2028",
  cgpa: "8.40",
  heroHeadline: [
    { text: "Curious about " },
    { text: "technology,", accent: true },
    { text: " " },
    { text: "people,", accent: true },
    { text: " and " },
    { text: "what's next.", accent: true },
  ],
  heroIntro:
    "I’m the kind of person who walks into a room full of strangers and somehow leaves with ten new conversations, three new ideas, and a list of things I suddenly need to explore. I love being on stage, building things, bringing people together, and turning random “what if?” thoughts into something real. I get excited by technology, but even more by the people, stories, and possibilities behind it. I’m endlessly curious, slightly obsessed with learning, and always up for trying something new.",
  aboutText: [
    "I’m naturally curious, love meeting new people, and somehow always end up turning random conversations into new ideas. I enjoy being on stage, organizing things, building projects, and exploring whatever catches my attention.",
    "I like technology, but I’m just as interested in the people, ideas, and possibilities behind it. I learn best by doing, asking questions, trying things out, and seeing where curiosity takes me.",
  ],
  contactHeading: "Have an idea worth building?",
  contactSubheading: "Let’s talk.",
  contactIntro:
    "Want to collaborate, talk technology, communities, startups — or just have a question? I’d love to hear from you.",
};

export type SocialIcon = "github" | "linkedin" | "x" | "email" | "resume";

export interface SocialLink {
  name: string;
  url: string;
  label: string;
  icon: SocialIcon;
}

export const socials: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Meeti09",
    label: "GitHub",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/meetidoshi2007/",
    label: "LinkedIn",
    icon: "linkedin",
  },
  {
    name: "X",
    url: "https://x.com/MeetiDoshi87205",
    label: "X",
    icon: "x",
  },
  {
    name: "Email",
    url: "mailto:meetidoshi09@gmail.com",
    label: "Email",
    icon: "email",
  },
  {
    name: "Resume",
    url: "/resume/Meeti_Doshi_Resume.pdf",
    label: "Resume",
    icon: "resume",
  },
];

export const email = profile.email;

export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["Python", "C", "TypeScript"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "GSAP"],
  },
  {
    title: "AI",
    skills: [
      "Generative AI",
      "LLM Workflows",
      "Prompt Engineering",
      "AI Automation",
      "Custom GPTs",
      "Face Recognition",
    ],
  },
  {
    title: "Foundations & Tools",
    skills: ["Data Structures", "Git", "GitHub"],
  },
];

export interface EcosystemItem {
  name: string;
  host: string;
  note: string;
  link?: string;
}

export const ecosystem: EcosystemItem[] = [
  {
    name: "Claude Impact Lab Mumbai",
    host: "Anthropic",
    note: "Selected participant exploring practical AI applications and product development with Claude.",
    link: "https://lnkd.in/p/dFJU37tz",
  },
  {
    name: "OpenAI Codex Workshop",
    host: "OpenAI",
    note: "Explored AI coding agents, code generation, debugging and AI assisted developer workflows.",
    link: "https://lnkd.in/p/dA9kyXBe",
  },
  {
    name: "NVIDIA Nemotron Workshop",
    host: "NVIDIA",
    note: "Explored LLMs, Generative AI and enterprise AI applications through the Nemotron ecosystem.",
    link: "https://lnkd.in/p/dn4nfk43",
  },
  {
    name: "DevDays Mumbai",
    host: "GitHub",
    note: "Agent driven engineering and AI assisted development with Copilot, MCP and agent memory.",
    link: "https://lnkd.in/p/dEhKtay2",
  },
  {
    name: "Agents & APIs Mumbai Developer Meetup",
    host: "Postman",
    note: "Developer meetup on APIs, agents and modern application development.",
    link: "https://lnkd.in/p/d9Gx49T3",
  },
  {
    name: "Cloudways Builders Event",
    host: "Cloudways",
    note: "Builder event across cloud tooling and deployment workflows.",
  },
  {
    name: "Build On Stellar Mumbai",
    host: "Stellar",
    note: "Built GoalPay, a savings goal tracker on Stellar Testnet, with a teammate.",
    link: "https://lnkd.in/p/dZGMkf25",
  },
];

export interface Certification {
  name: string;
  issuer: string;
  detail?: string;
}

export const certifications: Certification[] = [
  {
    name: "Oracle Cloud Infrastructure 2025 Generative AI Professional",
    issuer: "Oracle",
  },
  {
    name: "Generative AI Mastermind",
    issuer: "Outskill",
    detail: "16 hours across LLM workflows, Custom GPTs, AI automation and prompt engineering.",
  },
];
