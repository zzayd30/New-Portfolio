"use client";

import { motion, useReducedMotion } from "motion/react";

import { Container } from "@/components/layout/container";
import { skillsContent } from "@/data/skills";
import { motionTokens } from "@/lib/motion";

import { SkillsGraphic } from "./skills-graphic";
import { SkillsTimeline } from "./skills-timeline";

export function SkillsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      data-portfolio-section
      aria-labelledby="skills-heading"
      className="chapter-section border-t border-border py-section"
    >
      <Container size="display">
        <div className="grid gap-layout lg:grid-cols-editorial lg:items-start xl:gap-section-gap">
          <div className="about-profile skills-profile lg:col-span-4 lg:self-start">
            <SkillsGraphic />
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
                {skillsContent.sectionNumber} / {skillsContent.eyebrow}
              </motion.p>
              <div className="mt-layout">
                <p className="font-mono text-label uppercase tracking-label text-muted-foreground">
                  Technical toolkit
                </p>
                <h2
                  id="skills-heading"
                  className="mt-layout text-heading font-medium tracking-heading text-balance"
                >
                  {skillsContent.heading}
                </h2>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <SkillsTimeline categories={skillsContent.categories} />
          </div>
        </div>
      </Container>
    </section>
  );
}
