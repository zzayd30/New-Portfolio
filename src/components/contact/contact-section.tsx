import { Container } from "@/components/layout/container";
import { contactContent } from "@/data/contact";

import { ContactDetails } from "./contact-details";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section
      id="contact"
      data-portfolio-section
      aria-labelledby="contact-heading"
      className="chapter-section border-t border-border py-section"
    >
      <Container>
        <div className="grid gap-layout lg:grid-cols-editorial">
          <p className="font-mono text-label uppercase tracking-label text-muted-foreground">
            {contactContent.sectionNumber} / {contactContent.eyebrow}
          </p>
          <h2
            id="contact-heading"
            className="text-heading-xl font-medium tracking-heading text-balance lg:col-span-8 lg:col-start-5"
          >
            {contactContent.heading}
          </h2>
        </div>
        <div className="mt-section-gap grid gap-section-gap lg:grid-cols-editorial lg:gap-layout">
          <div className="lg:col-span-3">
            <ContactDetails content={contactContent} />
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
