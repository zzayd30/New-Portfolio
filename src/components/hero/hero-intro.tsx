"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { motionTokens } from "@/lib/motion";
import type { HeroContent } from "@/types/hero";

interface HeroIntroProps {
  content: HeroContent;
}

export function HeroIntro({ content }: HeroIntroProps) {
  const shouldReduceMotion = useReducedMotion();
  const viewport = { once: false, amount: 0.3 };
  const transition = {
    duration: shouldReduceMotion ? 0 : motionTokens.duration.slow,
    ease: motionTokens.easing.enter,
    delay: shouldReduceMotion ? 0 : motionTokens.duration.reveal,
  };

  return (
    <motion.aside
      initial={{ opacity: 0, x: motionTokens.distance.normal }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={transition}
      aria-label="Professional context"
      viewport={viewport}
      className="hero-context lg:col-span-4 lg:col-start-9"
    >
      <div className="hero-context-index">
        <p className="font-mono text-label uppercase tracking-label text-muted-foreground">
          01 / 06
        </p>
        <p className="font-mono text-label uppercase tracking-label text-muted-foreground">
          Home
        </p>
      </div>
      <p className="mt-layout font-mono text-label uppercase tracking-label text-muted-foreground">
        Professional context
      </p>
      <p className="mt-layout max-w-prose text-body text-foreground">{content.description}</p>
      <dl className="mt-layout grid gap-x-layout gap-y-component-gap border-t border-border pt-component-gap sm:grid-cols-2 lg:grid-cols-1">
        {content.details.map((detail) => (
          <div key={detail.label}>
            <dt className="font-mono text-label uppercase tracking-label text-muted-foreground">
              {detail.label}
            </dt>
            <dd className="mt-control-y text-small text-foreground">{detail.value}</dd>
          </div>
        ))}
      </dl>
      <a
        href={content.primaryAction.href}
        className="group mt-layout inline-flex items-center gap-control-x font-label text-label uppercase tracking-label text-foreground transition-opacity duration-motion-fast ease-editorial hover:opacity-60 lg:mt-auto lg:pt-layout"
      >
        {content.primaryAction.label}
        <ArrowUpRight
          aria-hidden="true"
          className="size-icon transition-transform duration-motion-fast ease-editorial group-hover:-translate-y-icon-nudge group-hover:translate-x-icon-nudge"
        />
      </a>
    </motion.aside>
  );
}
