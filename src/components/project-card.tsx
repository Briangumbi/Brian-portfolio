import {
  ArrowUpRight,
  CloudSun,
  Gauge,
  Kanban,
  LayoutTemplate,
  Terminal,
} from "lucide-react";
import Image from "next/image";
import type { ComponentType } from "react";
import {
  DockerIcon,
  ExpressIcon,
  FramerIcon,
  GitHubActionsIcon,
  GitIcon,
  GoIcon,
  GraphQlIcon,
  GsapIcon,
  JavaScriptIcon,
  NextJsIcon,
  NodeJsIcon,
  PostgreSqlIcon,
  PythonIcon,
  ReactIcon,
  SupabaseIcon,
  TailwindCssIcon,
  TypeScriptIcon,
  VercelIcon,
} from "@/components/icons/tech-icons";
import type { Project } from "@/data/site";

type IconComponent = ComponentType<{ size?: number; className?: string }>;

const tagIcons: Record<string, IconComponent> = {
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
  Supabase: SupabaseIcon,
  GSAP: GsapIcon,
};

const placeholderIcons: Record<NonNullable<Project["icon"]>, IconComponent> = {
  kanban: Kanban,
  terminal: Terminal,
  gauge: Gauge,
  "cloud-sun": CloudSun,
  "layout-template": LayoutTemplate,
};

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const PlaceholderIcon = project.icon ? placeholderIcons[project.icon] : null;
  const link = project.href ?? project.repo ?? "#";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {project.image ? (
        <div className="relative h-56 w-full overflow-hidden border-b border-border sm:h-64">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="flex h-56 items-center justify-center border-b border-border bg-background sm:h-64">
          {PlaceholderIcon && (
            <PlaceholderIcon size={40} className="text-muted/40" />
          )}
        </div>
      )}

      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
        <div>
          <span className="font-mono text-xs text-muted">
            №{String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-1 text-lg font-semibold tracking-tight sm:text-xl">
            {project.title}
          </h3>
        </div>

        <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="flex items-center justify-between gap-4 border-t border-border pt-4">
          <ul className="flex flex-wrap items-center gap-2">
            {project.tags.map((tag) => {
              const Icon = tagIcons[tag];
              return (
                <li
                  key={tag}
                  className="flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted"
                >
                  {Icon && <Icon size={12} />}
                  {tag}
                </li>
              );
            })}
          </ul>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 shrink-0 items-center gap-1 text-sm text-muted transition-colors duration-200 hover:text-accent"
          >
            view
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </article>
  );
}
