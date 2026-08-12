import type { Metadata } from "next";
import { Services } from "@/components/services";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return <Services />;
}
