import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/contact-info";
import { Reveal, RevealGroup } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Contact() {
  return (
    <section className="px-6 pt-28 pb-24 sm:pt-32 sm:pb-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="I'm currently open to new opportunities and interesting projects."
        />

        <RevealGroup className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <ContactInfo />
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </RevealGroup>
      </div>
    </section>
  );
}
