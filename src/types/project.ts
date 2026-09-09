export interface Project {
  title: string;
  type: string;
  shortDescription: string;
  context: string;
  contribution: string;
  technologies: string[];
  liveUrl?: string;
  repositoryUrl?: string;
  image?: string;
  featured: boolean;
}

export interface ProjectsContent {
  sectionNumber: string;
  eyebrow: string;
  heading: string;
  projects: Project[];
}
