import { Reveal, RevealGroup } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/site";

export function Projects() {
  return (
    <section id="projects" className="border-t border-border/60 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Work"
          title="Selected Projects"
          description="A few things I've designed, built, and shipped recently."
        />

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} className="h-full">
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
