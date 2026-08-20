export const site = {
  name: "Brian Gumbi",
  role: "Software Developer",
  headline: { serif: "Build Better", sans: "Ship Faster" },
  heroKicker: "Removing repetitive work from small businesses",
  tagline:
    "I design and build fast, accessible web apps for ambitious teams — from API to interface.",
  status: "Available for freelance work",
  email: "briangumbi3@gmail.com",
  formId: "maewjoaq",
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
    "I build web applications, backend systems, and AI-powered automation that businesses actually rely on — from custom UIs and APIs to workflows that eliminate the manual work eating into your team's time.",
    "Whether you need a product built from the ground up, solid infrastructure behind the interface, or your repetitive processes running themselves, I design it to work properly the first time.",
  ],
  stats: [
    { label: "Years experience", value: "3+" },
    { label: "Projects shipped", value: "20+" },
    { label: "Technologies", value: "15+" },
  ],
};

export type Milestone = {
  title: string;
  period: string;
  description: string;
};

export const experience = {
  heading: "Experience",
  intro:
    "Hands-on experience across the full stack — from web applications to intelligent automation.",
  milestones: [
    {
      title: "Full-Stack Web Development",
      period: "2023 — 2024",
      description:
        "Delivered production web applications end to end: React, Next.js, and TypeScript interfaces styled with Tailwind CSS, backed by Node.js and Express APIs with PostgreSQL and GraphQL handling data. Shipped through Git workflows and deployed on Vercel — comfortable owning a product from schema to screen.",
    },
    {
      title: "Python & Custom Systems",
      period: "2024 — 2025",
      description:
        "Expanded into Python and Go to handle the logic and data processing off-the-shelf tools can't — custom scripts, integrations, and backend systems engineered for real business complexity, not just prototypes.",
    },
    {
      title: "AI-Powered Automation",
      period: "2025 — Present",
      description:
        "Now focused on AI-powered automation: designing n8n workflows that connect Google Sheets, Gmail, Slack, and other business tools, turning hours of manual work into systems that run themselves. This is where I create the most leverage for small businesses today.",
    },
  ] satisfies Milestone[],
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
  wide?: boolean;
  image?: string;
  icon?: "kanban" | "terminal" | "gauge" | "cloud-sun" | "layout-template";
  year?: string;
};

export const projects: Project[] = [
  {
    title: "Booking Scheduler App",
    description:
      "A full-stack scheduling app — think Calendly, built from scratch. Hosts set weekly availability, slot length, and buffer time; guests book open slots instantly on a public page, with double-booking prevention enforced at the database level via a Postgres EXCLUDE constraint, not just app logic. Full auth flow with email confirmation, plus a host dashboard to manage bookings.",
    tags: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
    href: "https://booking-scheduler-app.vercel.app",
    repo: "https://github.com/Briangumbi/booking-scheduler-app",
    wide: true,
    image: "/projects/booking-scheduler.png",
    year: "2026",
  },
  {
    title: "Chit",
    description:
      "A passbook-style personal finance tracker with first-class support for mobile money wallets (M-Pesa, Tigo Pesa, Airtel Money) alongside banks, cards, and cash. Paste a mobile money confirmation SMS and the amount, direction, fee, and counterparty prefill automatically. Multi-currency net worth, budget alerts, and row-level security scoping every table to its owning user at the database level.",
    tags: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
    href: "https://personal-finance-tracker-sigma-peach.vercel.app",
    repo: "https://github.com/Briangumbi/personal-finance-tracker",
    image: "/projects/chit-dashboard.png",
    year: "2026",
  },
  {
    title: "Secondhand & Sons",
    description:
      "An Awwwards-style storefront for a vintage thrift store: a pinned, scroll-scrubbed price-tag hero, full shop-to-checkout flow with instant search and filtering, and a second pinned scroll-scrub on product image galleries. Cart, mock auth, and order history persist to localStorage — openly disclosed in the UI as a design/engineering skeleton, not a live payment system.",
    tags: ["Next.js", "GSAP", "Tailwind CSS", "TypeScript"],
    href: "https://thrift-store-website.vercel.app",
    repo: "https://github.com/Briangumbi/thrift-store-website",
    image: "/projects/thrift-store-hero.png",
    year: "2026",
  },
  {
    title: "Task Flow",
    description:
      "A minimal project management tool with drag-and-drop boards, keyboard shortcuts, and offline support via a local-first sync engine.",
    tags: ["React", "IndexedDB", "Tailwind CSS"],
    href: "#",
    repo: "#",
    wide: true,
    icon: "kanban",
  },
  {
    title: "DevNotes CLI",
    description:
      "A command-line tool for capturing and searching engineering notes without leaving the terminal, with fuzzy search and tagging.",
    tags: ["Node.js", "Ink", "SQLite"],
    repo: "#",
    icon: "terminal",
  },
  {
    title: "API Rate Limiter",
    description:
      "A drop-in rate-limiting middleware supporting sliding-window and token-bucket strategies, backed by Redis.",
    tags: ["Go", "Redis", "Docker"],
    repo: "#",
    icon: "gauge",
  },
  {
    title: "Weather Now",
    description:
      "A weather app focused on speed and clarity — hyperlocal forecasts with a clean, distraction-free interface.",
    tags: ["React Native", "Expo"],
    href: "#",
    icon: "cloud-sun",
  },
  {
    title: "Portfolio Site",
    description:
      "This site — built with Next.js and Framer Motion, focused on elegant, accessible animation across every device.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    repo: "#",
    wide: true,
    icon: "layout-template",
  },
];

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Go"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "GraphQL"],
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "GitHub Actions", "Vercel"],
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
