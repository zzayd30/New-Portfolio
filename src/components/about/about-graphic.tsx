"use client";

import { motion, useReducedMotion } from "motion/react";

import { motionTokens } from "@/lib/motion";

interface AboutGraphicProps {
  label?: string;
}

export function AboutGraphic({ label = "SYSTEMS / 02" }: AboutGraphicProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 0.42, scale: 1 }}
      viewport={{ once: false, amount: 0.35 }}
      transition={{
        duration: shouldReduceMotion ? 0 : motionTokens.duration.reveal,
        ease: motionTokens.easing.editorial,
      }}
      className="about-graphic"
    >
      <svg viewBox="0 0 720 560" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="currentColor" strokeWidth="1">
          <circle cx="360" cy="280" r="218" />
          <circle cx="360" cy="280" r="154" />
          <circle cx="360" cy="280" r="76" />
          <path d="M360 26V534M106 280H614" />
          <path d="M181 101L539 459M539 101L181 459" />
          <path d="M360 62V128M360 432V498M142 280H208M512 280H578" />
          <rect x="329" y="249" width="62" height="62" />
        </g>
        <g fill="currentColor">
          <circle cx="360" cy="62" r="4" />
          <circle cx="539" cy="101" r="4" />
          <circle cx="578" cy="280" r="4" />
          <circle cx="181" cy="459" r="4" />
        </g>
      </svg>
      <span className="about-graphic-label">{label}</span>
    </motion.div>
  );
}
