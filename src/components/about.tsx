import { Reveal, RevealGroup } from "@/components/motion/reveal";
import { about, experience } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section className="px-4 pt-28 pb-24 sm:px-6 sm:pt-32 sm:pb-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="About" title={about.heading} />

        <Reveal delay={0.1} className="mt-10 space-y-5">
          {about.paragraphs.map((p) => (
            <p
              key={p}
              className="text-balance text-center leading-relaxed text-muted"
            >
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.2} className="mt-16 text-center">
          <h3 className="text-xs font-medium uppercase tracking-wide text-muted">
            {experience.heading}
          </h3>
          <p className="mt-2 text-sm text-muted">{experience.intro}</p>
        </Reveal>

        <RevealGroup className="mt-8 flex flex-col gap-4">
          {experience.milestones.map((milestone, index) => (
            <Reveal key={milestone.title}>
              <div className="flex gap-4 rounded-2xl border border-border bg-surface p-6">
                <span className="font-serif text-2xl italic text-muted/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h4 className="text-lg font-semibold tracking-tight">
                      {milestone.title}
                    </h4>
                    <span className="font-mono text-xs text-muted">
                      {milestone.period}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
