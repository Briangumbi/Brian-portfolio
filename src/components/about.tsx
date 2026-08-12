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

        <Reveal delay={0.2} className="mt-16">
          <h3 className="text-center text-xs font-medium uppercase tracking-wide text-muted">
            {experience.heading}
          </h3>

          <RevealGroup className="mt-6 flex flex-col gap-4">
            {experience.roles.map((role) => (
              <Reveal key={`${role.title}-${role.company}`}>
                <article className="rounded-2xl border border-border bg-surface p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h4 className="text-lg font-semibold tracking-tight">
                      {role.title}{" "}
                      <span className="font-normal text-muted">
                        · {role.company}
                      </span>
                    </h4>
                    <span className="font-mono text-xs text-muted">
                      {role.period}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {role.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </RevealGroup>
        </Reveal>
      </div>
    </section>
  );
}
