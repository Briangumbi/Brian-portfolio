import { Reveal } from "@/components/motion/reveal";
import { about } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 sm:py-32">
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
      </div>
    </section>
  );
}
