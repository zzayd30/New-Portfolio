"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

import { motionTokens } from "@/lib/motion";
import type { ExperienceItem as ExperienceItemType } from "@/types/experience";

import { ExperienceItem } from "./experience-item";

interface ExperienceTimelineProps {
  items: ExperienceItemType[];
}

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 65%", "end 65%"],
  });
  const scaleY = useSpring(scrollYProgress, motionTokens.spring.gentle);

  return (
    <div ref={timelineRef} className="experience-timeline">
      <div aria-hidden="true" className="experience-timeline-track" />
      <motion.div
        aria-hidden="true"
        style={{ scaleY: shouldReduceMotion ? 1 : scaleY }}
        className="experience-timeline-progress"
      />
      <ol className="relative">
        {items.map((item, index) => (
          <ExperienceItem key={`${item.company}-${item.role}`} item={item} index={index} />
        ))}
      </ol>
    </div>
  );
}
