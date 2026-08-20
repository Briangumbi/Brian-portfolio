"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BitcoinIcon } from "@/components/icons/brand-icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/utils";

function NavLink({
  href,
  label,
  active,
  onClick,
  variant = "desktop",
}: {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
  variant?: "desktop" | "mobile";
}) {
  if (variant === "mobile") {
    return (
      <Link
        href={href}
        onClick={onClick}
        aria-current={active ? "page" : undefined}
        className={cn(
          "rounded-lg px-3 py-3 text-base transition-colors",
          active
            ? "bg-surface text-foreground"
            : "text-muted hover:bg-surface hover:text-foreground",
        )}
      >
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group relative text-sm transition-colors",
        active ? "text-foreground" : "text-muted hover:text-foreground",
      )}
    >
      {label}
      <span
        className={cn(
          "absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-300",
          active ? "w-full" : "w-0 group-hover:w-full",
        )}
      />
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          aria-label={`${site.name} — home`}
          className="flex h-11 w-11 items-center justify-center text-foreground transition-transform duration-200 hover:scale-105 hover:text-[#F7931A]"
          onClick={(event) => {
            setOpen(false);
            if (pathname === "/") {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <BitcoinIcon size={30} />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              active={pathname === item.href}
            />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-ink-foreground transition-transform duration-200 hover:scale-105 active:scale-95 md:inline-flex"
          >
            Let&apos;s talk
          </Link>

          <ThemeToggle />

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full text-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border/80 md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {nav.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  active={pathname === item.href}
                  onClick={() => setOpen(false)}
                  variant="mobile"
                />
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-ink px-4 py-3 text-center text-sm font-medium text-ink-foreground"
              >
                Let&apos;s talk
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
