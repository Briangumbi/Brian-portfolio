export const site = {
  name: "Brian Gumbi",
  role: "Software Developer",
  headline: { serif: "Build Better", sans: "Ship Faster" },
  heroKicker: "Removing repetitive work from small businesses",
  tagline:
    "I design and build fast, accessible web apps for ambitious teams — from API to interface.",
  status: "Available for freelance work",
  email: "briangumbi3@gmail.com",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  },
  availableBadge: {
    title: "Available for work",
    description: "Open to full-time roles and freelance projects.",
  },
  techStack: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Docker",
  ],
};

export const about = {
  heading: "About Me",
  paragraphs: [
    "I'm a software developer who enjoys turning ambiguous problems into simple, reliable products. My focus is full-stack web development — from designing APIs to building interfaces people actually enjoy using.",
    "I care about performance, accessibility, and code that's easy for the next person (often future me) to understand. When I'm not coding, I'm usually reading about system design or tinkering with side projects.",
  ],
  stats: [
    { label: "Years experience", value: "3+" },
    { label: "Projects shipped", value: "20+" },
    { label: "Technologies", value: "15+" },
  ],
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Realtime Analytics Dashboard",
    description:
      "A dashboard for visualizing streaming event data with sub-second updates, built for a small SaaS team to monitor product usage.",
    tags: ["Next.js", "TypeScript", "WebSockets", "PostgreSQL"],
    href: "#",
    repo: "#",
    featured: true,
  },
  {
    title: "Task Flow",
    description:
      "A minimal project management tool with drag-and-drop boards, keyboard shortcuts, and offline support via a local-first sync engine.",
    tags: ["React", "IndexedDB", "Tailwind CSS"],
    href: "#",
    repo: "#",
    featured: true,
  },
  {
    title: "DevNotes CLI",
    description:
      "A command-line tool for capturing and searching engineering notes without leaving the terminal, with fuzzy search and tagging.",
    tags: ["Node.js", "Ink", "SQLite"],
    repo: "#",
  },
  {
    title: "API Rate Limiter",
    description:
      "A drop-in rate-limiting middleware supporting sliding-window and token-bucket strategies, backed by Redis.",
    tags: ["Go", "Redis", "Docker"],
    repo: "#",
  },
  {
    title: "Weather Now",
    description:
      "A weather app focused on speed and clarity — hyperlocal forecasts with a clean, distraction-free interface.",
    tags: ["React Native", "Expo"],
    href: "#",
  },
  {
    title: "Portfolio Site",
    description:
      "This site — built with Next.js and Framer Motion, focused on elegant, accessible animation across every device.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    repo: "#",
  },
];

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Go", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "PostgreSQL", "REST APIs", "GraphQL"],
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "AWS", "CI/CD"],
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
