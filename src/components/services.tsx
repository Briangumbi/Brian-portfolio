import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal, RevealGroup } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/data/site";

export function Services() {
  return (
    <section className="px-6 pt-28 pb-24 sm:pt-32 sm:pb-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.heading}
          description={services.intro}
        />

        <Reveal
          delay={0.1}
          className="mx-auto mt-8 max-w-2xl rounded-2xl border border-border bg-surface px-5 py-4 text-center"
        >
          <span className="text-xs font-medium uppercase tracking-wide text-muted">
            Best for{" "}
          </span>
          <span className="text-sm text-foreground">
            {services.bestForGeneral}
          </span>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {services.offerings.map((service) => (
            <Reveal key={service.number} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </RevealGroup>

        <Reveal
          delay={0.1}
          className="mt-16 flex flex-col items-center gap-4 rounded-3xl bg-surface px-6 py-12 text-center sm:px-10"
        >
          <h2 className="text-2xl tracking-tight sm:text-3xl">
            <span className="font-serif italic">
              {services.closing.heading}
            </span>
          </h2>
          <p className="max-w-sm text-muted">{services.closing.body}</p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-ink-foreground transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            {services.closing.cta}
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
