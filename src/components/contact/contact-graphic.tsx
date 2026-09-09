"use client";

import { motion, useReducedMotion } from "motion/react";

import { motionTokens } from "@/lib/motion";

export function ContactGraphic() {
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
      className="contact-graphic"
    >
      <svg viewBox="0 0 720 560" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="currentColor" strokeWidth="1">
          <rect x="124" y="148" width="472" height="264" />
          <path d="M124 148L360 332L596 148M124 412L286 270M596 412L434 270" />
          <path d="M88 104H632M88 456H632" />
          <circle cx="360" cy="332" r="64" />
        </g>
        <g fill="currentColor">
          <circle cx="124" cy="148" r="5" />
          <circle cx="596" cy="148" r="5" />
          <circle cx="360" cy="332" r="7" />
        </g>
      </svg>
      <span className="contact-graphic-label">OPEN / 06</span>
    </motion.div>
  );
}
