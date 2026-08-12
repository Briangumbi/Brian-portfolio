import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons";
import { site } from "@/data/site";

function lastPathSegment(url: string) {
  return url.replace(/\/+$/, "").split("/").pop();
}

const contactMethods = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    Icon: Mail,
  },
  {
    label: "GitHub",
    value: `@${lastPathSegment(site.social.github)}`,
    href: site.social.github,
    Icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: `in/${lastPathSegment(site.social.linkedin)}`,
    href: site.social.linkedin,
    Icon: LinkedinIcon,
  },
];

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-2xl tracking-tight">
          <span className="font-serif italic">Get in touch.</span>
        </h3>
        <p className="mt-2 max-w-sm text-muted">
          The fastest way to reach me is email — I typically reply within a
          day.
        </p>
      </div>

      <ul className="flex flex-col gap-1">
        {contactMethods.map(({ label, value, href, Icon }) => {
          const external = href.startsWith("http");
          return (
            <li key={label}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group -mx-3 flex items-center gap-4 rounded-xl px-3 py-3 transition-colors duration-200 hover:bg-surface"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-colors duration-200 group-hover:border-accent/60 group-hover:text-accent">
                  <Icon size={16} />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs uppercase tracking-wide text-muted">
                    {label}
                  </span>
                  <span className="text-sm text-foreground">{value}</span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
