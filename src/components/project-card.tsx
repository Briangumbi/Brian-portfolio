import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { GithubIcon } from "@/components/icons/brand-icons";
import type { Project } from "@/data/site";

const gradients = [
  "from-emerald-100 via-zinc-50 to-white",
  "from-sky-100 via-zinc-50 to-white",
  "from-violet-100 via-zinc-50 to-white",
  "from-amber-100 via-zinc-50 to-white",
];

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg active:translate-y-0 active:scale-[0.99]">
      {project.image ? (
        <div className="relative h-36 w-full overflow-hidden border-b border-border bg-surface">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      ) : (
        <div
          className={`flex h-36 items-center justify-center bg-gradient-to-br ${gradients[index % gradients.length]}`}
          aria-hidden
        >
          <span className="font-serif text-4xl italic text-zinc-900/15">
            {project.title
              .split(" ")
              .map((w) => w[0])
              .slice(0, 2)
              .join("")}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight">
            {project.title}
          </h3>
          <div className="flex shrink-0 items-center gap-1">
            {project.repo && (
              <IconLink href={project.repo} label={`${project.title} source code`}>
                <GithubIcon size={16} />
              </IconLink>
            )}
            {project.href && (
              <IconLink href={project.href} label={`${project.title} live demo`}>
                <ArrowUpRight size={16} />
              </IconLink>
            )}
          </div>
        </div>

        <p className="flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors duration-200 hover:bg-surface hover:text-accent"
    >
      {children}
    </a>
  );
}
