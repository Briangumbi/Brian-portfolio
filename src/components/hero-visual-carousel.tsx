"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { services } from "@/data/site";

const SLIDE_DURATION = 4500;
const EASE = [0.22, 1, 0.36, 1] as const;

export function HeroVisualCarousel() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const labels = services.offerings.map((offering) => offering.title);
  const total = labels.length;

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setActive((current) => (current + 1) % total);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, [reduceMotion, total]);

  return (
    <div className="relative flex aspect-square w-full flex-col overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface to-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-border) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          opacity: 0.4,
        }}
      />

      <div className="relative z-10 flex items-center justify-between px-6 pt-5">
        <span className="text-xs font-semibold text-foreground">
          {labels[active]}
        </span>
        <span className="font-mono text-xs text-muted">
          {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      <div className="relative z-10 flex-1">
        <SlideLayer active={active === 0} reduceMotion={!!reduceMotion}>
          <DashboardSlide active={active === 0} />
        </SlideLayer>
        <SlideLayer active={active === 1} reduceMotion={!!reduceMotion}>
          <NetworkSlide active={active === 1} reduceMotion={!!reduceMotion} />
        </SlideLayer>
        <SlideLayer active={active === 2} reduceMotion={!!reduceMotion}>
          <ApiSlide active={active === 2} reduceMotion={!!reduceMotion} />
        </SlideLayer>
      </div>

      <div className="relative z-10 flex items-center justify-center gap-1 pb-4">
        {labels.map((label, index) => (
          <button
            key={label}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Show ${label}`}
            aria-current={active === index}
            className="flex h-11 w-11 items-center justify-center"
          >
            <span
              className={`block h-1.5 rounded-full transition-all duration-300 ${
                active === index ? "w-6 bg-accent" : "w-1.5 bg-border"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function SlideLayer({
  active,
  reduceMotion,
  children,
}: {
  active: boolean;
  reduceMotion: boolean;
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={false}
      animate={{
        opacity: active ? 1 : 0,
        y: active ? 0 : reduceMotion ? 0 : -8,
      }}
      transition={{ duration: 0.5, ease: EASE }}
      className="absolute inset-0"
      style={{ pointerEvents: active ? "auto" : "none" }}
      aria-hidden={!active}
    >
      {children}
    </motion.div>
  );
}

function DashboardSlide({ active }: { active: boolean }) {
  const item = {
    hidden: { opacity: 0, y: 6 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="flex h-full items-center justify-center px-6">
      <motion.div
        initial="hidden"
        animate={active ? "show" : "hidden"}
        variants={{
          show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
        }}
        className="w-full max-w-[260px] overflow-hidden rounded-xl border border-border bg-background shadow-lg"
      >
        <div className="flex items-center gap-1.5 border-b border-border bg-surface px-3 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-border" />
          <span className="h-1.5 w-1.5 rounded-full bg-border" />
          <span className="h-1.5 w-1.5 rounded-full bg-border" />
        </div>
        <div className="flex flex-col gap-3 p-4">
          <motion.div variants={item} className="flex gap-2">
            <span className="h-2 w-8 rounded-full bg-border" />
            <span className="h-2 w-8 rounded-full bg-border" />
            <span className="h-2 w-8 rounded-full bg-accent" />
          </motion.div>
          <motion.div
            variants={item}
            className="flex items-center gap-2.5 rounded-lg border border-border bg-surface p-3"
          >
            <span className="h-8 w-8 shrink-0 rounded-md bg-border" />
            <span className="flex flex-1 flex-col gap-1.5">
              <span className="h-1.5 w-3/4 rounded-full bg-muted/50" />
              <span className="h-1.5 w-1/2 rounded-full bg-border" />
            </span>
          </motion.div>
          <motion.span variants={item} className="h-6 w-20 rounded-full bg-accent" />
        </div>
      </motion.div>
    </div>
  );
}

const DIAMOND_NODES = [
  { x: 50, y: 12 },
  { x: 88, y: 50 },
  { x: 50, y: 88 },
  { x: 12, y: 50 },
];

function NetworkSlide({
  active,
  reduceMotion,
}: {
  active: boolean;
  reduceMotion: boolean;
}) {
  const particlePath = [...DIAMOND_NODES, DIAMOND_NODES[0]];
  const animateLoop = active && !reduceMotion;

  return (
    <div className="flex h-full items-center justify-center px-10">
      <div className="relative aspect-square w-full max-w-[220px]">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          {DIAMOND_NODES.map((node, index) => {
            const next = DIAMOND_NODES[(index + 1) % DIAMOND_NODES.length];
            return (
              <line
                key={`${node.x}-${node.y}`}
                x1={node.x}
                y1={node.y}
                x2={next.x}
                y2={next.y}
                stroke="var(--color-border)"
                strokeWidth={1}
              />
            );
          })}
        </svg>

        {DIAMOND_NODES.map((node, index) => (
          <div
            key={`${node.x}-${node.y}`}
            className="absolute h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <span className="absolute inset-0 rounded-full border border-border bg-surface" />
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-accent"
              animate={
                animateLoop
                  ? { opacity: [0.4, 0, 0.4], scale: [1, 1.8, 1] }
                  : { opacity: 0.2, scale: 1 }
              }
              transition={{
                duration: 2.4,
                repeat: animateLoop ? Infinity : 0,
                delay: index * 0.5,
                ease: "easeInOut",
              }}
            />
          </div>
        ))}

        {!reduceMotion && (
          <motion.span
            className="absolute h-2 w-2 rounded-full bg-accent"
            style={{ marginLeft: "-4px", marginTop: "-4px" }}
            animate={
              animateLoop
                ? {
                    left: particlePath.map((p) => `${p.x}%`),
                    top: particlePath.map((p) => `${p.y}%`),
                  }
                : { left: `${DIAMOND_NODES[0].x}%`, top: `${DIAMOND_NODES[0].y}%` }
            }
            transition={{
              duration: 6,
              repeat: animateLoop ? Infinity : 0,
              ease: "linear",
            }}
          />
        )}
      </div>
    </div>
  );
}

function ApiSlide({
  active,
  reduceMotion,
}: {
  active: boolean;
  reduceMotion: boolean;
}) {
  const animateLoop = active && !reduceMotion;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 px-8">
      <div className="relative h-11 w-full max-w-[240px]">
        <div className="absolute left-0 top-0 flex h-11 w-16 items-center justify-center rounded-lg border border-border bg-background text-[10px] font-semibold text-foreground">
          Client
        </div>
        <div className="absolute right-0 top-0 flex h-11 w-16 items-center justify-center rounded-lg border border-border bg-background text-[10px] font-semibold text-foreground">
          Server
        </div>
        <div className="absolute left-16 right-16 top-1/2 h-px -translate-y-1/2 bg-border" />
        {!reduceMotion && (
          <motion.span
            className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-sm bg-accent"
            animate={
              animateLoop
                ? { left: ["20%", "80%", "80%", "20%", "20%"] }
                : { left: "20%" }
            }
            transition={
              animateLoop
                ? {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.4, 0.6, 1, 1],
                  }
                : { duration: 0 }
            }
          />
        )}
      </div>

      <div className="w-full max-w-[240px] rounded-lg border border-border bg-background p-3 font-mono text-[11px] leading-relaxed">
        <TypedLine
          text="GET /api/data"
          className="text-muted"
          active={active}
          reduceMotion={reduceMotion}
        />
        <TypedLine
          text="→ 200 OK { ok: true }"
          className="text-accent"
          delay={0.6}
          active={active}
          reduceMotion={reduceMotion}
        />
      </div>
    </div>
  );
}

function TypedLine({
  text,
  className,
  delay = 0,
  active,
  reduceMotion,
}: {
  text: string;
  className?: string;
  delay?: number;
  active: boolean;
  reduceMotion: boolean;
}) {
  if (reduceMotion) {
    return <div className={`whitespace-nowrap ${className ?? ""}`}>{text}</div>;
  }

  return (
    <motion.div
      className={`overflow-hidden whitespace-nowrap ${className ?? ""}`}
      initial={{ width: 0 }}
      animate={{ width: active ? "auto" : 0 }}
      transition={{ duration: text.length * 0.045, delay, ease: "linear" }}
    >
      {text}
    </motion.div>
  );
}
