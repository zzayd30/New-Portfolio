"use client";

import { motion, useReducedMotion } from "motion/react";

import { motionTokens } from "@/lib/motion";

export function ProjectsGraphic() {
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
      className="projects-graphic"
    >
      <svg viewBox="0 0 720 560" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="currentColor" strokeWidth="1">
          <rect x="118" y="106" width="430" height="300" />
          <rect x="154" y="142" width="430" height="300" />
          <path d="M154 202H584M154 262H584M154 322H584" />
          <path d="M214 142V442M334 142V442M454 142V442" />
          <path d="M214 202L334 322L454 262" />
        </g>
        <g fill="currentColor">
          <circle cx="214" cy="202" r="5" />
          <circle cx="334" cy="322" r="7" />
          <circle cx="454" cy="262" r="5" />
        </g>
      </svg>
      <span className="projects-graphic-label">WORK / 05</span>
    </motion.div>
  );
}
