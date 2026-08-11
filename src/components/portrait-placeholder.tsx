import { site } from "@/data/site";

export function PortraitPlaceholder({ className }: { className?: string }) {
  const initials = site.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-100 via-zinc-50 to-emerald-50 ${className ?? ""}`}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(21,128,61,0.12), transparent 55%)",
        }}
      />
      <span
        aria-hidden
        className="font-serif text-[7rem] italic leading-none text-zinc-900/10 sm:text-[9rem]"
      >
        {initials}
      </span>
      <span className="sr-only">Photo of {site.name} coming soon</span>
    </div>
  );
}
