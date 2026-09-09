"use client";

import { motion, useReducedMotion } from "motion/react";

import { motionTokens } from "@/lib/motion";
import type { AboutDetail as AboutDetailType } from "@/types/about";

interface AboutDetailProps {
  detail: AboutDetailType;
  index: number;
}

export function AboutDetail({ detail, index }: AboutDetailProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: motionTokens.distance.small }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.35 }}
      transition={{
        duration: shouldReduceMotion ? 0 : motionTokens.duration.normal,
        ease: motionTokens.easing.enter,
        delay: shouldReduceMotion ? 0 : index * motionTokens.stagger,
      }}
      className="grid gap-control-y border-b border-border py-card sm:grid-cols-3 sm:gap-layout lg:grid-cols-1 lg:gap-control-y"
    >
      <dt className="font-mono text-label uppercase tracking-label text-muted-foreground">
        {detail.label}
      </dt>
      <dd className="text-body text-foreground sm:col-span-2">{detail.value}</dd>
    </motion.div>
  );
}
