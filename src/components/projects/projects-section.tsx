import { Container } from "@/components/layout/container";
import { projectsContent } from "@/data/projects";

import { ProjectStack } from "./project-stack";

export function ProjectsSection() {
  const featuredProjects = projectsContent.projects.filter((project) => project.featured);

  return (
    <section
      id="work"
      data-portfolio-section
      aria-labelledby="projects-heading"
      className="chapter-section border-t border-border py-section"
    >
      <Container>
        <div className="grid gap-layout lg:grid-cols-editorial">
          <p className="font-mono text-label uppercase tracking-label text-muted-foreground">
            {projectsContent.sectionNumber} / {projectsContent.eyebrow}
          </p>
          <h2
            id="projects-heading"
            className="text-heading-xl font-medium tracking-heading text-balance lg:col-span-8 lg:col-start-5"
          >
            {projectsContent.heading}
          </h2>
        </div>
        <div className="mt-section-gap grid lg:grid-cols-editorial">
          <div className="hidden lg:block" aria-hidden="true" />
          <div className="lg:col-span-8 lg:col-start-5">
            <ProjectStack projects={featuredProjects} />
          </div>
        </div>
      </Container>
    </section>
  );
}
