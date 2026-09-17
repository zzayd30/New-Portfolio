"use client";

import { motion, useReducedMotion } from "motion/react";

import { motionTokens } from "@/lib/motion";
import type { Project } from "@/types/project";

import { ProjectLinks } from "./project-links";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: motionTokens.distance.normal }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: shouldReduceMotion ? 0 : motionTokens.duration.slow,
        ease: motionTokens.easing.editorial,
        delay: shouldReduceMotion ? 0 : index * motionTokens.stagger,
      }}
      className="border-b border-border py-section first:pt-0 xl:mr-layout 2xl:mr-0"
    >
      <div>
        <p className="mb-control-y font-mono text-label uppercase tracking-label text-muted-foreground">
          {String(index + 1).padStart(2, "0")} / {project.type}
        </p>
        <h3 className="text-heading-lg font-medium tracking-heading">
          {project.title}
        </h3>
        <p className="mt-component-gap max-w-reading text-body text-muted-foreground">
          {project.shortDescription}
        </p>
        <dl className="mt-layout grid gap-layout border-t border-border pt-component-gap sm:grid-cols-2">
          <div>
            <dt className="font-mono text-label uppercase tracking-label text-muted-foreground">
              Context
            </dt>
            <dd className="mt-control-y text-small text-foreground">
              {project.context}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-label uppercase tracking-label text-muted-foreground">
              Contribution
            </dt>
            <dd className="mt-control-y text-small text-foreground">
              {project.contribution}
            </dd>
          </div>
        </dl>
        <div className="mt-layout">
          <p className="font-mono text-label uppercase tracking-label text-muted-foreground">
            Stack
          </p>
          <ul className="mt-control-y flex flex-wrap gap-x-component-gap gap-y-control-y">
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="font-mono text-label tracking-label text-foreground"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
        <ProjectLinks project={project} />
      </div>
    </motion.article>
  );
}
