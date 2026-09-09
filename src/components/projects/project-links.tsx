import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/types/project";

interface ProjectLinksProps {
  project: Project;
}

export function ProjectLinks({ project }: ProjectLinksProps) {
  const links = [
    project.liveUrl ? { label: "Live site", href: project.liveUrl } : undefined,
    project.repositoryUrl ? { label: "Repository", href: project.repositoryUrl } : undefined,
  ].filter((link): link is { label: string; href: string } => Boolean(link));

  if (links.length === 0) {
    return null;
  }

  return (
    <ul className="mt-layout flex flex-wrap gap-x-layout gap-y-control-y">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-control-x font-label text-label uppercase tracking-label text-foreground transition-opacity duration-motion-fast ease-editorial hover:opacity-60"
          >
            {link.label}
            <ArrowUpRight
              aria-hidden="true"
              className="size-icon transition-transform duration-motion-fast ease-editorial group-hover:-translate-y-icon-nudge group-hover:translate-x-icon-nudge"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
