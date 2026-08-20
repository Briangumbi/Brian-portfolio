import { FeaturedProjectRow } from "@/components/featured-project-row";
import { Reveal, RevealGroup } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/site";

export function Projects() {
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <section className="px-6 pt-28 pb-24 sm:pt-32 sm:pb-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Work"
          title="Selected Projects"
          description="A few things I've designed, built, and shipped recently."
        />

        <RevealGroup className="mt-12 flex flex-col gap-6">
          {featured.map((project, index) => (
            <Reveal key={project.title}>
              <FeaturedProjectRow project={project} index={index} />
            </Reveal>
          ))}
        </RevealGroup>

        <RevealGroup className="mt-6 grid gap-6 sm:grid-cols-2">
          {rest.map((project, index) => (
            <Reveal key={project.title} className="h-full">
              <ProjectCard project={project} index={featured.length + index} />
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
