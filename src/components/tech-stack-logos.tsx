import {
  GmailIcon,
  GoogleSheetsIcon,
  JavaScriptIcon,
  N8nIcon,
  PythonIcon,
  ReactIcon,
  SlackIcon,
} from "@/components/icons/tech-icons";

const stack = [
  { name: "n8n", Icon: N8nIcon },
  { name: "Python", Icon: PythonIcon },
  { name: "JavaScript", Icon: JavaScriptIcon },
  { name: "React", Icon: ReactIcon },
  { name: "Google Sheets", Icon: GoogleSheetsIcon },
  { name: "Gmail", Icon: GmailIcon },
  { name: "Slack", Icon: SlackIcon },
];

export function TechStackLogos() {
  return (
    <ul className="flex flex-wrap items-center gap-5 sm:gap-6" aria-label="Tools I work with">
      {stack.map(({ name, Icon }) => (
        <li key={name} title={name}>
          <Icon
            size={26}
            className="opacity-90 transition-transform duration-200 hover:scale-110 hover:opacity-100"
          />
          <span className="sr-only">{name}</span>
        </li>
      ))}
    </ul>
  );
}
