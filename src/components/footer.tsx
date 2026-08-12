import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <a href="#" className="transition-colors duration-200 hover:text-accent">
          Back to top
        </a>
      </div>
    </footer>
  );
}
