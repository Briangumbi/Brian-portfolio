import { Reveal } from "@/components/motion/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="flex flex-col items-center gap-4 text-center">
      <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
        {eyebrow}
      </span>
      <h2 className="text-balance text-3xl tracking-tight sm:text-4xl">
        <span className="font-serif italic">{title}</span>
      </h2>
      {description && (
        <p className="max-w-md text-balance text-muted">{description}</p>
      )}
    </Reveal>
  );
}
