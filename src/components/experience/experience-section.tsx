import { Container } from "@/components/layout/container";
import { experienceContent } from "@/data/experience";

import { ExperienceTimeline } from "./experience-timeline";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      data-portfolio-section
      aria-labelledby="experience-heading"
      className="chapter-section border-t border-border py-section"
    >
      <Container>
        <div className="grid gap-layout lg:grid-cols-editorial">
          <p className="font-mono text-label uppercase tracking-label text-muted-foreground">
            {experienceContent.sectionNumber} / {experienceContent.eyebrow}
          </p>
          <h2
            id="experience-heading"
            className="lg:col-span-8 lg:col-start-5 text-heading-xl font-medium tracking-heading text-balance"
          >
            {experienceContent.heading}
          </h2>
        </div>
        <div className="mt-section-gap grid lg:grid-cols-editorial">
          <div className="hidden lg:block" aria-hidden="true" />
          <div className="lg:col-span-8 lg:col-start-5">
            <ExperienceTimeline items={experienceContent.items} />
          </div>
        </div>
      </Container>
    </section>
  );
}
