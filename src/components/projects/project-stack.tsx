"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

import { motionTokens } from "@/lib/motion";
import type { Project } from "@/types/project";

import { ProjectCard } from "./project-card";

interface ProjectStackProps {
  projects: Project[];
}

export function ProjectStack({ projects }: ProjectStackProps) {
  const stackRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start 65%", "end 65%"],
  });
  const scaleY = useSpring(scrollYProgress, motionTokens.spring.gentle);

  return (
    <div ref={stackRef} className="projects-timeline">
      <div aria-hidden="true" className="projects-timeline-track" />
      <motion.div
        aria-hidden="true"
        style={{ scaleY: shouldReduceMotion ? 1 : scaleY }}
        className="projects-timeline-progress"
      />
      <div>
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
