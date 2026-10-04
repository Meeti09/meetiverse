export interface MomentImage {
  src: string;
  alt: string;
}

export interface Moment {
  id: string;
  event: string;
  category: string;
  description: string;
  date?: string;
  images: MomentImage[];
  featured?: boolean;
}

export const moments: Moment[] = [
  {
    id: "monad",
    event: "Monad Blitz Mumbai V4",
    category: "Hackathons",
    description:
      "Participated and received a Special Prize for Content. Built and collaborated with Web3 builders while gaining hands-on experience with the Monad ecosystem.",
    images: [
      { src: "/images/moments/monad-2.jpg", alt: "Monad Blitz Mumbai V4" },
      { src: "/images/moments/monad-1.jpg", alt: "Monad Blitz Mumbai V4 — session" },
      { src: "/images/moments/monad-3.jpg", alt: "Monad Blitz Mumbai V4 — team" },
    ],
    featured: true,
  },
  {
    id: "devdays",
    event: "GitHub Dev Days Mumbai",
    category: "Developer Meetups",
    description:
      "Attended GitHub Dev Days Mumbai at the Paytm office, gaining practical insights into AI agents, GitHub Copilot, MCP, agent memory, scalable engineering and responsible AI through expert sessions and hands-on workshops.",
    images: [
      { src: "/images/moments/devdays-2.jpg", alt: "GitHub Dev Days Mumbai" },
      { src: "/images/moments/devdays-1.jpg", alt: "GitHub Dev Days Mumbai — session" },
      { src: "/images/moments/devdays-3.jpg", alt: "GitHub Dev Days Mumbai — community" },
      { src: "/images/moments/devdays-4.jpg", alt: "GitHub Dev Days Mumbai — event" },
    ],
    featured: true,
  },
  {
    id: "claude-impact-lab",
    event: "Claude Impact Lab — Mumbai",
    category: "AI Events",
    description:
      "Selected among 200+ participants from 2,000+ registrations for Mumbai's first Claude Impact Lab by Anthropic. Built Kumbh Guardian, an offline-first AI platform for missing-person assistance during Nashik Kumbh Mela 2027.",
    images: [
      { src: "/images/moments/claude-impact-lab-1.jpg", alt: "Claude Impact Lab Mumbai" },
      { src: "/images/moments/claude-impact-lab-2.jpg", alt: "Claude Impact Lab Mumbai — working" },
    ],
    featured: true,
  },
  {
    id: "localhost-event",
    event: "Microsoft Build //localhost Mumbai",
    category: "Developer Meetups",
    description:
      "Attended Microsoft Build //localhost Mumbai, exploring AI agents, Azure AI, GitHub Copilot, RAG, embeddings, vector databases, semantic search and responsible AI through expert sessions and practical demonstrations.",
    images: [
      { src: "/images/moments/localhost-event-1.jpg", alt: "Microsoft Build localhost Mumbai" },
      { src: "/images/moments/localhost-event-2.jpg", alt: "Microsoft Build localhost Mumbai — session" },
      { src: "/images/moments/localhost-event-3.jpg", alt: "Microsoft Build localhost Mumbai — event" },
    ],
  },
  {
    id: "nvidia",
    event: "NVIDIA Nemotron Workshop",
    category: "AI Events",
    description:
      "Explored LLM architectures, multi-agent workflows, reinforcement learning and efficient AI inference through the NVIDIA Nemotron ecosystem, with insights into tools like TensorRT-LLM, vLLM and SGLang.",
    images: [
      { src: "/images/moments/nvidia-2.jpg", alt: "NVIDIA Nemotron Workshop" },
      { src: "/images/moments/nvidia-1.jpg", alt: "NVIDIA Nemotron Workshop — swag" },
      { src: "/images/moments/nvidia-3.jpg", alt: "NVIDIA Nemotron Workshop — with builders" },
      { src: "/images/moments/nvidia-4.jpg", alt: "NVIDIA Nemotron Workshop — group" },
    ],
  },
  {
    id: "postman",
    event: "Agents & APIs Mumbai Developer Meetup",
    category: "Developer Meetups",
    description:
      "Explored AI agents, RAG, context graphs, embeddings, vector databases, memory and guardrails at a developer meetup focused on agent architectures.",
    images: [
      { src: "/images/moments/postman-1.jpg", alt: "Agents & APIs Mumbai Meetup" },
      { src: "/images/moments/postman-2.jpg", alt: "Agents & APIs Mumbai Meetup — session" },
      { src: "/images/moments/postman-3.jpg", alt: "Agents & APIs Mumbai Meetup — networking" },
    ],
  },
  {
    id: "codex",
    event: "OpenAI Codex Event",
    category: "AI Events",
    description:
      "Attended the OpenAI Codex community event, exploring the latest in AI coding tools and developer workflows.",
    images: [
      { src: "/images/moments/codex-1.jpg", alt: "OpenAI Codex Event" },
      { src: "/images/moments/codex-2.jpg", alt: "OpenAI Codex Event — session" },
      { src: "/images/moments/codex-3.jpg", alt: "OpenAI Codex Event — community" },
      { src: "/images/moments/codex-4.jpg", alt: "OpenAI Codex Event — group" },
    ],
  },
  {
    id: "techfest",
    event: "Techfest 2025 — IIT Bombay",
    category: "Community",
    description:
      "Attended Techfest at IIT Bombay and participated in a cloud computing workshop covering cloud architecture, virtualization, scalability and deployment models, alongside startup showcases and emerging tech.",
    images: [
      { src: "/images/moments/techfest-cover.jpg", alt: "Techfest IIT Bombay" },
      { src: "/images/moments/techfest-3.jpg", alt: "Techfest IIT Bombay — campus" },
      { src: "/images/moments/techfest-1.jpg", alt: "Techfest IIT Bombay — workshop" },
      { src: "/images/moments/techfest-2.jpg", alt: "Techfest IIT Bombay — Google AI house" },
    ],
  },
  {
    id: "hacknova",
    event: "HackNova",
    category: "Hackathons",
    description:
      "First-ever hackathon — HackNova, an overnight offline challenge organized by GDG on Campus APSIT, CSA and Coder's Club. Learned problem solving, teamwork, debugging and building under pressure.",
    images: [
      { src: "/images/moments/hacknova-cover.png", alt: "HackNova hackathon" },
      { src: "/images/moments/hacknova-3.jpg", alt: "HackNova hackathon — team" },
      { src: "/images/moments/hacknova-1.jpg", alt: "HackNova hackathon — group" },
      { src: "/images/moments/hacknova-2.jpg", alt: "HackNova hackathon — team call" },
    ],
  },
  {
    id: "hackdeck",
    event: "SafeCity — HackDeck 2.0 (IEEE Hackathon)",
    category: "Hackathons",
    description:
      "Built SafeCity, an AI-powered crime analytics platform with crime forecasting, interactive heatmaps, patrol route optimization, real-time incident reporting and AI-generated insights, during a 24-hour hackathon.",
    images: [
      { src: "/images/moments/hackdeck-3.jpg", alt: "HackDeck hackathon" },
      { src: "/images/moments/hackdeck-1.jpg", alt: "HackDeck hackathon — stage" },
      { src: "/images/moments/hackdeck-2.jpg", alt: "HackDeck hackathon — project" },
      { src: "/images/moments/hackdeck-4.jpg", alt: "HackDeck hackathon — venue" },
    ],
  },
  {
    id: "codeforge",
    event: "CodeForge Hackathon",
    category: "Hackathons",
    description:
      "Competed at CodeForge, building and iterating on ideas with fellow developers under tight deadlines.",
    images: [
      { src: "/images/moments/codeforge-2.jpg", alt: "CodeForge hackathon" },
      { src: "/images/moments/codeforge-1.jpg", alt: "CodeForge hackathon — project" },
    ],
  },
  {
    id: "gdg-intro",
    event: "GDG On Campus APSIT — GenAI Session",
    category: "GDG & Community",
    description:
      "As Operations Head at GDG On Campus APSIT, helped organize and attended an insightful Generative AI session, strengthening GenAI fundamentals and exploring real-world applications with the tech community.",
    images: [
      { src: "/images/moments/gdg-intro-1.jpg", alt: "GDG GenAI Session" },
      { src: "/images/moments/gdg-intro-2.jpg", alt: "GDG GenAI Session — group" },
    ],
  },
];
