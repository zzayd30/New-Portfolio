import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/types/project";
import { cn } from "@/lib/utils";

interface ProjectLinksProps {
  project: Project;
}

export function ProjectLinks({ project }: ProjectLinksProps) {
  const links = [
    project.liveUrl
      ? { label: "View live project", href: project.liveUrl, primary: true }
      : undefined,
    project.repositoryUrl ? { label: "Repository", href: project.repositoryUrl } : undefined,
  ].filter(
    (link): link is { label: string; href: string; primary?: boolean } => Boolean(link),
  );

  if (links.length === 0) {
    return null;
  }

  return (
    <ul className="flex shrink-0 items-center gap-control-x">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
            title={link.label}
            className={cn(
              "group inline-flex size-control-height items-center justify-center rounded-theme-sm border transition-colors duration-motion-fast ease-editorial",
              link.primary
                ? "border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground"
                : "border-border text-foreground hover:border-foreground",
            )}
          >
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
