"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

import { Container } from "@/components/layout/container";
import { aboutContent } from "@/data/about";
import { motionTokens } from "@/lib/motion";

import { AboutDetails } from "./about-details";
import { AboutGraphic } from "./about-graphic";
import { AboutIntro } from "./about-intro";

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();
  const aboutRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start 65%", "end 65%"],
  });
  const scaleY = useSpring(scrollYProgress, motionTokens.spring.gentle);

  return (
    <section
      id="about"
      data-portfolio-section
      aria-labelledby="about-heading"
      className="about-section chapter-section border-t border-border py-section"
    >
      <Container size="display">
        <div className="grid gap-layout lg:grid-cols-editorial lg:items-start xl:gap-section-gap">
          <div className="about-profile lg:col-span-4 lg:self-start">
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
          <div ref={aboutRef} className="about-timeline lg:col-span-8 lg:col-start-5">
            <div aria-hidden="true" className="about-timeline-track" />
            <motion.div
              aria-hidden="true"
              style={{ scaleY: shouldReduceMotion ? 1 : scaleY }}
              className="about-timeline-progress"
            />
            <motion.div
              initial={{ opacity: 0, y: motionTokens.distance.normal }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{
                duration: shouldReduceMotion ? 0 : motionTokens.duration.slow,
                ease: motionTokens.easing.editorial,
              }}
            >
              <AboutDetails content={aboutContent} />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
