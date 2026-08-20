import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { GithubIcon } from "@/components/icons/brand-icons";
import type { Project } from "@/data/site";

export function FeaturedProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:grid sm:grid-cols-2">
      {project.image && (
        <div className="relative h-56 w-full overflow-hidden border-b border-border sm:h-full sm:border-b-0 sm:border-r">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="font-mono text-xs text-muted">
              №{String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">
              {project.title}
            </h3>
          </div>
          {project.year && (
            <span className="shrink-0 font-mono text-xs text-muted">
              {project.year}
            </span>
          )}
        </div>

        <p className="text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center gap-5 pt-2">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 items-center gap-1.5 text-sm text-muted transition-colors duration-200 hover:text-accent"
            >
              <GithubIcon size={16} />
              Code
            </a>
          )}
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 items-center gap-1.5 text-sm text-muted transition-colors duration-200 hover:text-accent"
            >
              <ArrowUpRight size={16} />
              Live demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
