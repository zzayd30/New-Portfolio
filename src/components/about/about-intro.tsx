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
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: shouldReduceMotion ? 0 : motionTokens.duration.slow,
        ease: motionTokens.easing.editorial,
      }}
      className="lg:col-span-8 lg:col-start-5"
    >
      <h2 id="about-heading" className="text-heading-xl font-medium tracking-heading text-balance">
        {content.introduction}
      </h2>
    </motion.div>
  );
}
