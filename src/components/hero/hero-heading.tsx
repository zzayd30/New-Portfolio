"use client";

import { ArrowDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import { motionTokens } from "@/lib/motion";
import type { HeroContent } from "@/types/hero";

interface HeroHeadingProps {
  content: HeroContent;
}

export function HeroHeading({ content }: HeroHeadingProps) {
  const shouldReduceMotion = useReducedMotion();
  const viewport = { once: false, amount: 0.45 };
  const [roleIndex, setRoleIndex] = useState(0);
  const rotatingRoles = content.rotatingRoles.length > 0 ? content.rotatingRoles : [content.role];
  const activeRole = rotatingRoles[roleIndex % rotatingRoles.length];

  useEffect(() => {
    if (shouldReduceMotion || rotatingRoles.length < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      setRoleIndex((currentIndex) => (currentIndex + 1) % rotatingRoles.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [rotatingRoles.length, shouldReduceMotion]);

  const labelTransition = {
    duration: shouldReduceMotion ? 0 : motionTokens.duration.normal,
    ease: motionTokens.easing.editorial,
    delay: shouldReduceMotion ? 0 : motionTokens.stagger,
  };
  const lineTransition = {
    duration: shouldReduceMotion ? 0 : motionTokens.duration.reveal,
    ease: motionTokens.easing.editorial,
  };

  return (
    <div className="lg:col-span-8">
      <motion.p
        initial={{ opacity: 0, y: motionTokens.distance.small }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={labelTransition}
        className="font-mono text-label uppercase tracking-label text-muted-foreground"
      >
        {content.role} / {content.sectionNumber}
      </motion.p>
      <h1
        id="hero-heading"
        className="mt-layout font-display text-display font-medium tracking-display text-balance"
      >
        {[content.name.first, content.name.last].map((line, index) => (
          <span key={line} className="block overflow-hidden">
            <motion.span
              initial={{ opacity: 0, y: motionTokens.distance.hero }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{
                ...lineTransition,
                delay: shouldReduceMotion
                  ? 0
                  : motionTokens.duration.normal + index * motionTokens.stagger,
              }}
              className="block"
            >
              {line}
            </motion.span>
          </span>
        ))}
      </h1>
      <div
        aria-live="polite"
        aria-label="Specialties"
        className="hero-role-rotator mt-component-gap overflow-hidden"
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.p
            key={activeRole}
            initial={{ opacity: 0, y: motionTokens.distance.small }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -motionTokens.distance.small }}
            viewport={viewport}
            transition={{
              duration: shouldReduceMotion ? 0 : motionTokens.duration.normal,
              ease: motionTokens.easing.editorial,
            }}
            className="font-mono text-label uppercase tracking-label text-muted-foreground"
          >
            {activeRole}
          </motion.p>
        </AnimatePresence>
      </div>
      <motion.a
        initial={{ opacity: 0, y: motionTokens.distance.small }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{
          ...labelTransition,
          delay: shouldReduceMotion
            ? 0
            : motionTokens.duration.reveal + motionTokens.stagger * 2,
        }}
        href="#about"
        className="group mt-layout inline-flex items-center gap-control-x font-mono text-label uppercase tracking-label text-muted-foreground transition-colors duration-motion-fast ease-editorial hover:text-foreground"
      >
        Scroll to explore
        <ArrowDown
          aria-hidden="true"
          className="size-icon transition-transform duration-motion-fast ease-editorial group-hover:translate-y-icon-nudge"
        />
      </motion.a>
    </div>
  );
}
