import { Container } from "@/components/layout/container";
import { skillsContent } from "@/data/skills";

import { SkillCategory } from "./skill-category";

export function SkillsSection() {
  return (
    <section
      id="skills"
      data-portfolio-section
      aria-labelledby="skills-heading"
      className="chapter-section border-t border-border py-section"
    >
      <Container>
        <div className="grid gap-layout lg:grid-cols-editorial">
          <p className="font-mono text-label uppercase tracking-label text-muted-foreground">
            {skillsContent.sectionNumber} / {skillsContent.eyebrow}
          </p>
          <h2
            id="skills-heading"
            className="text-heading-xl font-medium tracking-heading text-balance lg:col-span-8 lg:col-start-5"
          >
            {skillsContent.heading}
          </h2>
        </div>
        <div className="mt-section-gap grid lg:grid-cols-editorial">
          <div className="hidden lg:block" aria-hidden="true" />
          <div className="space-y-section-gap lg:col-span-8 lg:col-start-5">
            {skillsContent.categories.map((category, index) => (
              <SkillCategory key={category.title} category={category} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
