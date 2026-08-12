"use client";

import { motion, type Variants } from "framer-motion";
import { Mail } from "lucide-react";
import { PortraitPlaceholder } from "@/components/portrait-placeholder";
import { TechStackLogos } from "@/components/tech-stack-logos";
import { about, site } from "@/data/site";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export function Hero() {
  return (
    <section id="top" className="px-4 pt-28 sm:px-6 sm:pt-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-10 rounded-3xl bg-surface p-6 sm:p-10 lg:grid-cols-2 lg:gap-8 lg:p-14"
        >
          <div className="flex flex-col justify-center gap-6">
            <motion.p
              variants={item}
              className="text-sm text-muted"
            >
              {site.heroKicker}
            </motion.p>

            <motion.h1
              variants={item}
              className="text-balance text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            >
              <span className="font-serif italic text-foreground">
                {site.headline.serif}
              </span>
              <br />
              <span className="font-sans font-semibold text-muted">
                {site.headline.sans}
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="max-w-md text-balance leading-relaxed text-muted"
            >
              {site.tagline}
            </motion.p>

            <motion.div variants={item}>
              <TechStackLogos />
            </motion.div>

            <motion.div variants={item} className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-ink-foreground transition-transform duration-200 hover:scale-105 active:scale-95"
                >
                  View projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:border-foreground/40"
                >
                  Get in touch
                </a>
              </div>
              <span className="flex items-center gap-2 text-sm text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {site.status}
              </span>
            </motion.div>

            <motion.dl
              variants={item}
              className="mt-4 grid grid-cols-3 gap-4 border-t border-border pt-6"
            >
              {about.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {stat.value}
                  </dd>
                  <dd className="mt-1 text-xs text-muted sm:text-sm">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div variants={item} className="relative">
            <PortraitPlaceholder className="aspect-[4/5] w-full" />

            <div className="absolute -bottom-6 left-4 right-4 flex items-center justify-between gap-4 rounded-2xl bg-ink px-5 py-4 text-ink-foreground shadow-xl sm:left-6 sm:right-auto sm:w-72">
              <div>
                <p className="text-xs text-white/60">
                  {site.availableBadge.title}
                </p>
                <p className="mt-1 text-sm leading-snug">
                  {site.availableBadge.description}
                </p>
              </div>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email me"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-ink transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                <Mail size={16} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 pb-4 sm:mt-16"
        >
          <span className="text-xs uppercase tracking-widest text-muted">
            Built with
          </span>
          {site.techStack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-sm text-muted/80 transition-colors duration-200 hover:text-foreground"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
