"use client";

import { motion, useReducedMotion } from "motion/react";

import { Container } from "@/components/layout/container";
import { aboutContent } from "@/data/about";
import { motionTokens } from "@/lib/motion";

import { AboutDetails } from "./about-details";
import { AboutGraphic } from "./about-graphic";
import { AboutIntro } from "./about-intro";

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      data-portfolio-section
      aria-labelledby="about-heading"
      className="about-section chapter-section border-t border-border py-section"
    >
      <Container size="display">
        <div className="grid gap-layout lg:grid-cols-editorial lg:items-center xl:gap-section-gap">
          <div className="about-profile lg:col-span-8">
            <AboutGraphic />
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
                {aboutContent.sectionNumber} / {aboutContent.eyebrow}
              </motion.p>
              <AboutIntro content={aboutContent} />
            </div>
          </div>
          <AboutDetails content={aboutContent} />
        </div>
      </Container>
    </section>
  );
}
