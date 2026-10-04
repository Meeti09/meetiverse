export interface Project {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  videoSrc?: string;
  videoPoster?: string;
  featured: boolean;
  context?: string;
  achievement?: string;
}

export const projects: Project[] = [
  {
    id: "jeevan-grid",
    number: "01",
    name: "JeevanGrid",
    tagline: "Safer People. Stronger Communities.",
    description:
      "Citizen-first disaster resilience and emergency management platform for India with verified multi-hazard early warnings, emergency reporting and coordinated community response in a single interface.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://jeevangrid-one.vercel.app/",
    image: "/images/JeevanGrid.png",
    featured: true,
  },
  {
    id: "portfolio-ai",
    number: "02",
    name: "Portfolio AI",
    tagline: "Risk-aware allocation engine for everyday investors.",
    description:
      "Risk-aware portfolio allocation engine that supports investment decisions with data-driven allocation insights, with portfolio analysis wrapped in a clean, dark-themed interface that simplifies investing for everyday investors.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://portfolio-ai-ten-steel.vercel.app/",
    image: "/images/portfolio.png",
    featured: true,
  },
  {
    id: "mumbai-builds",
    number: "03",
    name: "Mumbai Builds",
    tagline: "Build What Matters.",
    description:
      "Organizer of the Mumbai-wide student innovation platform and 36-hour hybrid hackathon. Built and deployed the landing site connecting promising builders with industry, technology, mentors and real-world problems.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP"],
    liveUrl: "https://www.mumbaibuilds.tech/",
    image: "/images/mumbaibuilds.png",
    featured: true,
  },
  {
    id: "human-yield",
    number: "04",
    name: "HumanYield",
    tagline: "Consumer Income Share Agreements on-chain.",
    description:
      "Consumer Income Share Agreement platform where backers fund a person's course, certification or creative project and receive a share of their reported income. Smart contracts deployed on Monad Testnet automate agreements and settlement.",
    technologies: [
      "Next.js",
      "React",
      "Smart Contracts",
      "Monad Testnet",
      "Vercel",
    ],
    liveUrl: "https://humanipo.vercel.app/recipient",
    image: "/images/humanyield.png",
    featured: true,
    context: "Monad Blitz Mumbai V4",
    achievement: "Special Prize for Content at Monad Blitz Mumbai V4",
  },
  {
    id: "kumbh-guardian",
    number: "05",
    name: "Kumbh Guardian",
    tagline: "Offline-first AI for missing-person assistance.",
    description:
      "An AI platform built for missing person assistance during Nashik Kumbh Mela 2027, designed to work offline using AI assisted face and description matching with a local mesh network concept.",
    technologies: ["Generative AI", "Face Recognition", "Offline-first"],
    videoSrc: "/videos/claude-impact-lab.mp4",
    featured: false,
    context: "Claude Impact Lab Mumbai",
  },
  {
    id: "goalpay",
    number: "06",
    name: "GoalPay",
    tagline: "Decentralized savings goal tracker.",
    description:
      "Decentralized savings goal tracker built on Stellar Testnet with a teammate, turning an idea into a working prototype with Stellar wallets, blockchain transactions and dApps.",
    technologies: ["Stellar", "Stellar Testnet", "Web3"],
    videoSrc: "/videos/stellar-project.mp4",
    videoPoster: "/videos/stellar-poster.png",
    featured: false,
    context: "Build On Stellar Mumbai",
  },
];
