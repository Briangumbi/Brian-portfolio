import type { Metadata } from "next";
import { Skills } from "@/components/skills";

export const metadata: Metadata = {
  title: "Skills",
};

export default function SkillsPage() {
  return <Skills />;
}
