import { Reveal, RevealGroup } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { skills } from "@/data/site";

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
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground transition-colors duration-200 hover:border-accent/60 hover:text-accent"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
