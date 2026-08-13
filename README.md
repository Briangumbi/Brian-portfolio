# Brian's Portfolio

A personal portfolio site built with Next.js — multi-page, light/dark theme support, and an animated hero visual.

**Live repo:** [github.com/Briangumbi/Brian-portfolio](https://github.com/Briangumbi/Brian-portfolio)

## Pages

- **Home** — animated hero with a rotating visual carousel and tech stack
- **About** — bio and work experience
- **Projects** — selected project grid
- **Skills** — technologies grouped by category, with brand icons
- **Services** — freelance offerings
- **Contact** — contact form (Formspree) plus direct contact info

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for animation, respecting `prefers-reduced-motion`
- [next-themes](https://github.com/pacocoursey/next-themes) for light/dark mode with system detection
- [@formspree/react](https://formspree.io/) for the contact form
- [Lucide](https://lucide.dev/) icons + hand-picked brand SVGs

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project structure

```
src/
  app/            # routes (one folder per page)
  components/     # UI components
  data/site.ts    # all site content — copy, links, projects, skills, services
  lib/            # shared utilities
```

Most content edits (bio, projects, skills, services, social links) only require changing [`src/data/site.ts`](src/data/site.ts).

## Configuration

The contact form posts to a Formspree endpoint configured via `formId` in `src/data/site.ts`.
