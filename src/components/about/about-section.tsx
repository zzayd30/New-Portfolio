import { Container } from "@/components/layout/container";
import { aboutContent } from "@/data/about";

import { AboutDetails } from "./about-details";
import { AboutIntro } from "./about-intro";

export function AboutSection() {
  return (
    <section
      id="about"
      data-portfolio-section
      aria-labelledby="about-heading"
      className="chapter-section border-t border-border py-section"
    >
      <Container>
        <div className="grid gap-layout lg:grid-cols-editorial">
          <p className="font-mono text-label uppercase tracking-label text-muted-foreground">
            {aboutContent.sectionNumber} / {aboutContent.eyebrow}
          </p>
          <AboutIntro content={aboutContent} />
        </div>
        <div className="mt-section-gap grid gap-layout lg:grid-cols-editorial">
          <div className="hidden lg:block" aria-hidden="true" />
          <AboutDetails content={aboutContent} />
        </div>
      </Container>
    </section>
  );
}
