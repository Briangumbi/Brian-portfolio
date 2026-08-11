"use client";

import { motion } from "framer-motion";
import { Check, Copy, Mail } from "lucide-react";
import { useState } from "react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/data/site";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — the email link below still works.
    }
  }

  return (
    <section id="contact" className="border-t border-border/60 px-6 py-24 sm:py-32">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <Reveal className="flex flex-col items-center">
          <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
            Contact
          </span>
          <h2 className="mt-4 text-balance text-3xl tracking-tight sm:text-4xl">
            <span className="font-serif italic">
              Let&apos;s build something together
            </span>
          </h2>
          <p className="mt-4 max-w-md text-balance text-muted">
            I&apos;m currently open to new opportunities and interesting
            projects. Reach out and I&apos;ll get back to you soon.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-ink-foreground transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            <Mail size={16} />
            {site.email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors duration-200 hover:border-accent/60 hover:text-accent"
            aria-label="Copy email address"
          >
            <motion.span
              key={copied ? "check" : "copy"}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </motion.span>
          </button>
        </Reveal>

        <Reveal delay={0.2} className="mt-8 flex items-center gap-5">
          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors duration-200 hover:border-accent/60 hover:text-accent"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors duration-200 hover:border-accent/60 hover:text-accent"
          >
            <LinkedinIcon size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
