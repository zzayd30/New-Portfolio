"use client";

import { motion, useReducedMotion } from "motion/react";

import { Container } from "@/components/layout/container";
import { experienceContent } from "@/data/experience";
import { motionTokens } from "@/lib/motion";

import { ExperienceTimeline } from "./experience-timeline";
import { ExperienceGraphic } from "./experience-graphic";

export function ExperienceSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      data-portfolio-section
      aria-labelledby="experience-heading"
      className="chapter-section border-t border-border py-section"
    >
      <Container size="display">
        <div className="grid gap-layout lg:grid-cols-editorial lg:items-start xl:gap-section-gap">
          <div className="about-profile experience-profile lg:sticky lg:top-navbar lg:col-span-4 lg:self-start">
            <ExperienceGraphic />
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
                {experienceContent.sectionNumber} / {experienceContent.eyebrow}
              </motion.p>
              <div className="mt-layout">
                <p className="font-mono text-label uppercase tracking-label text-muted-foreground">
                  Career timeline
                </p>
                <h2
                  id="experience-heading"
                  className="mt-layout text-heading font-medium tracking-heading text-balance"
                >
                  {experienceContent.heading}
                </h2>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <ExperienceTimeline items={experienceContent.items} />
          </div>
        </div>
      </Container>
    </section>
  );
}
