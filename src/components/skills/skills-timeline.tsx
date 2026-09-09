"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

import { motionTokens } from "@/lib/motion";
import type { SkillCategory as SkillCategoryType } from "@/types/skill";

import { SkillCategory } from "./skill-category";

interface SkillsTimelineProps {
  categories: SkillCategoryType[];
}

export function SkillsTimeline({ categories }: SkillsTimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 65%", "end 65%"],
  });
  const scaleY = useSpring(scrollYProgress, motionTokens.spring.gentle);

  return (
    <div ref={timelineRef} className="skills-timeline">
      <div aria-hidden="true" className="skills-timeline-track" />
      <motion.div
        aria-hidden="true"
        style={{ scaleY: shouldReduceMotion ? 1 : scaleY }}
        className="skills-timeline-progress"
      />
      <div className="skills-categories">
        {categories.map((category, index) => (
          <SkillCategory key={category.title} category={category} index={index} />
        ))}
      </div>
    </div>
  );
}
