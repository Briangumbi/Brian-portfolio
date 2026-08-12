export const site = {
  name: "Brian Gumbi",
  role: "Software Developer",
  headline: { serif: "Build Better", sans: "Ship Faster" },
  heroKicker: "Removing repetitive work from small businesses",
  tagline:
    "I design and build fast, accessible web apps for ambitious teams — from API to interface.",
  status: "Available for freelance work",
  email: "briangumbi3@gmail.com",
  // Replace with your real Formspree endpoint: https://formspree.io/f/<your-form-id>
  formEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
  social: {
    github: "https://github.com/Briangumbi",
    linkedin: "https://www.linkedin.com/in/briangumbi",
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

export type Service = {
  number: string;
  title: string;
  description: string;
  includes: string[];
  bestFor: string;
};

export const services = {
  eyebrow: "Services",
  heading: "What I Can Build For You",
  intro:
    "I take on a limited number of freelance projects alongside my other work, focused on building things that are fast, reliable, and easy to maintain. If you have something in mind, let's talk — simple, done right, usually beats complex.",
  bestForGeneral:
    "Startups, small businesses, and teams who need reliable, production-ready work done right the first time.",
  offerings: [
    {
      number: "01",
      title: "Web Application Development",
      description:
        "A complete web app built from the ground up — frontend, backend, and everything in between.",
      includes: [
        "Custom UI built with React / Next.js",
        "API design and backend development",
        "Database design and setup",
        "Authentication and user accounts",
        "Deployment to production hosting",
      ],
      bestFor: "Startups and businesses that need a real product, not just a template.",
    },
    {
      number: "02",
      title: "AI Automation",
      description:
        "AI-powered workflows that handle the repetitive parts of your business automatically.",
      includes: [
        "Custom AI-powered workflows",
        "Integration with tools you already use",
        "Chatbots and AI assistants",
        "Document and data processing automation",
        "Ongoing monitoring and refinement",
      ],
      bestFor:
        "Teams looking to save time by automating repetitive, manual work with AI.",
    },
    {
      number: "03",
      title: "APIs & Backend Systems",
      description:
        "Reliable backend systems and APIs that the rest of your product can depend on.",
      includes: [
        "REST or GraphQL API design",
        "Database schema and query optimization",
        "Integrations with third-party services",
        "Background jobs and scheduled tasks",
        "Documentation for your team",
      ],
      bestFor: "Products that need solid infrastructure behind the interface.",
    },
  ] satisfies Service[],
  closing: {
    heading: "Ready to start something?",
    body: "Tell me a bit about your project and we'll take it from there.",
    cta: "Start a project",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];
