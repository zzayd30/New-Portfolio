import type { Project } from "@/types/project";

import { ProjectCard } from "./project-card";

interface ProjectStackProps {
  projects: Project[];
}

export function ProjectStack({ projects }: ProjectStackProps) {
  return (
    <div>
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </div>
  );
}
