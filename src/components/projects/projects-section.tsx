"use client";

import { motion, useReducedMotion } from "motion/react";

import { Container } from "@/components/layout/container";
import { projectsContent } from "@/data/projects";
import { motionTokens } from "@/lib/motion";

import { ProjectsGraphic } from "./projects-graphic";
import { ProjectStack } from "./project-stack";

export function ProjectsSection() {
  const featuredProjects = projectsContent.projects.filter((project) => project.featured);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="work"
      data-portfolio-section
      aria-labelledby="projects-heading"
      className="chapter-section border-t border-border py-section"
    >
      <Container size="display">
        <div className="grid gap-layout lg:grid-cols-editorial lg:items-start xl:gap-section-gap">
          <div className="about-profile projects-profile lg:col-span-4 lg:self-start">
            <ProjectsGraphic />
            <div className="about-profile-content relative z-10">
              <motion.p
                initial={{ opacity: 0, y: motionTokens.distance.small }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : motionTokens.duration.normal,
                  ease: motionTokens.easing.editorial,
                }}
                className="font-mono text-label uppercase tracking-label text-muted-foreground"
              >
                {projectsContent.sectionNumber} / {projectsContent.eyebrow}
              </motion.p>
              <div className="mt-layout">
                <p className="font-mono text-label uppercase tracking-label text-muted-foreground">
                  Selected work
                </p>
                <h2
                  id="projects-heading"
                  className="mt-layout text-heading font-medium tracking-heading text-balance"
                >
                  {projectsContent.heading}
                </h2>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <ProjectStack projects={featuredProjects} />
          </div>
        </div>
      </Container>
    </section>
  );
}
