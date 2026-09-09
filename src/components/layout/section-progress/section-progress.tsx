"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { motionTokens } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { PortfolioSection } from "@/types/navigation";

interface SectionProgressProps {
  activeSection: PortfolioSection;
  totalSections: number;
  activeIndex: number;
  isHome: boolean;
}

export function SectionProgress({
  activeSection,
  totalSections,
  activeIndex,
  isHome,
}: SectionProgressProps) {
  const shouldReduceMotion = useReducedMotion();
  const transition = {
    duration: shouldReduceMotion ? 0 : motionTokens.duration.fast,
    ease: motionTokens.easing.enter,
  };
  const progress = (activeIndex + 1) / totalSections;

  return (
    <>
      <aside
        aria-label={`Current section: ${activeSection.label}`}
        className="fixed bottom-mobile right-mobile z-progress flex items-center gap-control-x rounded-theme-pill border border-border bg-surface-elevated px-control-x py-control-y shadow-floating lg:hidden"
      >
        <AnimatePresence initial={false} mode="popLayout">
          <motion.span
            key={activeSection.number}
            initial={{ opacity: 0, y: motionTokens.distance.small }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -motionTokens.distance.small }}
            transition={transition}
            className="font-mono text-label tracking-label text-foreground"
          >
            {activeSection.number}
          </motion.span>
        </AnimatePresence>
        <span aria-hidden="true" className="text-muted-foreground">
          /
        </span>
        <span className="font-mono text-label tracking-label text-muted-foreground">
          {String(totalSections).padStart(2, "0")}
        </span>
      </aside>

      <motion.aside
        aria-label={`Current section: ${activeSection.label}, ${activeIndex + 1} of ${totalSections}`}
        initial={{ opacity: 0, x: motionTokens.distance.normal }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0 : motionTokens.duration.slow,
          ease: motionTokens.easing.editorial,
          delay: shouldReduceMotion ? 0 : motionTokens.duration.normal,
        }}
        className="fixed right-progress top-1/2 z-progress hidden -translate-y-1/2 lg:block"
      >
        <AnimatePresence initial={false} mode="popLayout">
          <motion.p
            key={activeSection.number}
            initial={{ opacity: 0, y: motionTokens.distance.normal }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -motionTokens.distance.normal }}
            transition={transition}
            className={cn(
              "font-display font-medium tracking-display",
              isHome ? "text-hero-progress" : "text-section-number",
            )}
          >
            {activeSection.number}
          </motion.p>
        </AnimatePresence>
        <AnimatePresence initial={false} mode="popLayout">
          <motion.p
            key={activeSection.label}
            initial={{ opacity: 0, y: motionTokens.distance.small }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -motionTokens.distance.small }}
            transition={transition}
            className="mt-component-gap font-mono text-label uppercase tracking-label text-muted-foreground"
          >
            {activeSection.label}
          </motion.p>
        </AnimatePresence>
        <div className="mt-component-gap h-progress-track w-px overflow-hidden bg-border">
          <motion.div
            animate={{ scaleY: progress }}
            transition={transition}
            className="h-full origin-top bg-foreground"
          />
        </div>
        <p className="mt-control-y font-mono text-label tracking-label text-muted-foreground">
          {activeIndex + 1} / {totalSections}
        </p>
      </motion.aside>
    </>
  );
}
