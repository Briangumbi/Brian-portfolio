import type { Metadata } from "next";
import { Contact } from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return <Contact />;
}
