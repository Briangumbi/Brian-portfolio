import type { ComponentType } from "react";
import {
  DockerIcon,
  ExpressIcon,
  FramerIcon,
  GitHubActionsIcon,
  GitIcon,
  GoIcon,
  GraphQlIcon,
  JavaScriptIcon,
  NextJsIcon,
  NodeJsIcon,
  PostgreSqlIcon,
  PythonIcon,
  ReactIcon,
  TailwindCssIcon,
  TypeScriptIcon,
  VercelIcon,
} from "@/components/icons/tech-icons";
import { Reveal, RevealGroup } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { skills } from "@/data/site";

type IconComponent = ComponentType<{ size?: number; className?: string }>;

const skillIcons: Record<string, IconComponent> = {
  TypeScript: TypeScriptIcon,
  JavaScript: JavaScriptIcon,
  Python: PythonIcon,
  Go: GoIcon,
  React: ReactIcon,
  "Next.js": NextJsIcon,
  "Tailwind CSS": TailwindCssIcon,
  "Framer Motion": FramerIcon,
  "Node.js": NodeJsIcon,
  Express: ExpressIcon,
  PostgreSQL: PostgreSqlIcon,
  GraphQL: GraphQlIcon,
  Git: GitIcon,
  Docker: DockerIcon,
  "GitHub Actions": GitHubActionsIcon,
  Vercel: VercelIcon,
};

export function Skills() {
  return (
    <section className="px-6 pt-28 pb-24 sm:pt-32 sm:pb-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Toolbox" title="Skills & Technologies" />

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2">
          {skills.map((group) => (
            <Reveal
              key={group.category}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="text-sm font-medium uppercase tracking-widest text-muted">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => {
                  const Icon = skillIcons[skill];
                  return (
                    <li
                      key={skill}
                      className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground transition-colors duration-200 hover:border-accent/60 hover:text-accent"
                    >
                      {Icon && <Icon size={16} />}
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
