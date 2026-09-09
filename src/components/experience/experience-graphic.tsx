"use client";

import { motion, useReducedMotion } from "motion/react";

import { motionTokens } from "@/lib/motion";

export function ExperienceGraphic() {
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
      className="experience-graphic"
    >
      <svg viewBox="0 0 720 560" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="currentColor" strokeWidth="1">
          <path d="M110 100H610M110 280H610M110 460H610" />
          <path d="M180 54V506M360 54V506M540 54V506" />
          <path d="M180 100L360 280L540 100M180 460L360 280L540 460" />
          <rect x="324" y="244" width="72" height="72" />
        </g>
        <g fill="currentColor">
          <circle cx="180" cy="100" r="5" />
          <circle cx="360" cy="280" r="7" />
          <circle cx="540" cy="460" r="5" />
        </g>
      </svg>
      <span className="experience-graphic-label">CAREER / 03</span>
    </motion.div>
  );
}
