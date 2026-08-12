import { Check } from "lucide-react";
import type { Service } from "@/data/site";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-2 -top-6 font-serif text-7xl italic text-foreground/5 sm:text-8xl"
      >
        {service.number}
      </span>

      <div className="relative flex h-full flex-col gap-5">
        <div>
          <span className="font-mono text-xs text-muted">
            {service.number}
          </span>
          <h3 className="mt-1 text-xl font-semibold tracking-tight">
            {service.title}
          </h3>
          <p className="mt-2 leading-relaxed text-muted">
            {service.description}
          </p>
        </div>

        <div>
          <h4 className="text-xs font-medium uppercase tracking-wide text-muted">
            Includes
          </h4>
          <ul className="mt-3 flex flex-col gap-2">
            {service.includes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-foreground"
              >
                <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto border-t border-border pt-4">
          <h4 className="text-xs font-medium uppercase tracking-wide text-muted">
            Best for
          </h4>
          <p className="mt-1 text-sm text-foreground">{service.bestFor}</p>
        </div>
      </div>
    </article>
  );
}
