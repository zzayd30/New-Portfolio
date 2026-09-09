"use client";

import { motion, useReducedMotion } from "motion/react";

import { motionTokens } from "@/lib/motion";
import type { AboutContent } from "@/types/about";

interface AboutIntroProps {
  content: AboutContent;
}

export function AboutIntro({ content }: AboutIntroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: motionTokens.distance.normal }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.45 }}
      transition={{
        duration: shouldReduceMotion ? 0 : motionTokens.duration.slow,
        ease: motionTokens.easing.editorial,
      }}
      className="mt-layout"
    >
      <p className="font-mono text-label uppercase tracking-label text-muted-foreground">
        {content.introLabel}
      </p>
      <h2 id="about-heading" className="mt-layout max-w-prose text-heading font-medium tracking-heading text-balance">
        {content.introduction}
      </h2>
    </motion.div>
  );
}
