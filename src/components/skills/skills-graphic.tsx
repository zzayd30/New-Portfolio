"use client";

import { motion, useReducedMotion } from "motion/react";

import { motionTokens } from "@/lib/motion";

export function SkillsGraphic() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 0.46, scale: 1 }}
      viewport={{ once: false, amount: 0.35 }}
      transition={{
        duration: shouldReduceMotion ? 0 : motionTokens.duration.reveal,
        ease: motionTokens.easing.editorial,
      }}
      className="skills-graphic"
    >
      <svg viewBox="0 0 720 560" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="currentColor" strokeWidth="1">
          <path d="M88 454H632M88 374H632M88 294H632M88 214H632M88 134H632" />
          <path d="M128 92V494M232 92V494M336 92V494M440 92V494M544 92V494" />
          <path d="M128 390L232 330L336 350L440 202L544 250" />
          <circle cx="336" cy="350" r="46" />
        </g>
        <g fill="currentColor">
          <circle cx="128" cy="390" r="5" />
          <circle cx="232" cy="330" r="5" />
          <circle cx="336" cy="350" r="8" />
          <circle cx="440" cy="202" r="5" />
          <circle cx="544" cy="250" r="5" />
        </g>
      </svg>
      <span className="skills-graphic-label">STACK / 04</span>
    </motion.div>
  );
}
