"use client";

import { motion, useReducedMotion } from "motion/react";

import { motionTokens } from "@/lib/motion";
import type { ExperienceItem as ExperienceItemType } from "@/types/experience";

interface ExperienceItemProps {
  item: ExperienceItemType;
  index: number;
}

export function ExperienceItem({ item, index }: ExperienceItemProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.li
      initial={{ opacity: 0, y: motionTokens.distance.normal }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: shouldReduceMotion ? 0 : motionTokens.duration.slow,
        ease: motionTokens.easing.editorial,
        delay: shouldReduceMotion ? 0 : index * motionTokens.stagger,
      }}
      className="border-b border-border py-layout first:pt-0 last:border-b-0 last:pb-0"
    >
      <div className="grid gap-component-gap lg:grid-cols-editorial">
        <p className="font-mono text-label uppercase tracking-label text-muted-foreground lg:col-span-3">
          {item.endDate ? `${item.startDate} — ${item.endDate}` : item.startDate}
        </p>
        <div className="lg:col-span-9">
          <p className="font-mono text-label uppercase tracking-label text-muted-foreground">
            {item.company}
          </p>
          <h3 className="mt-control-y text-heading font-medium tracking-heading">{item.role}</h3>
          <p className="mt-component-gap max-w-prose text-body text-muted-foreground">
            {item.summary}
          </p>
          <ul className="mt-layout space-y-component-gap">
            {item.achievements.map((achievement) => (
              <li key={achievement} className="flex gap-control-x text-body text-foreground">
                <span aria-hidden="true" className="text-muted-foreground">
                  —
                </span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
          <div className="mt-layout border-t border-border pt-component-gap">
            <p className="font-mono text-label uppercase tracking-label text-muted-foreground">
              Technologies
            </p>
            <ul className="mt-control-y flex flex-wrap gap-x-component-gap gap-y-control-y">
              {item.stack.map((technology) => (
                <li key={technology} className="font-mono text-label tracking-label text-foreground">
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.li>
  );
}
