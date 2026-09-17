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
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: shouldReduceMotion ? 0 : motionTokens.duration.slow,
        ease: motionTokens.easing.editorial,
        delay: shouldReduceMotion ? 0 : index * motionTokens.stagger,
      }}
      className="experience-item border-b border-border py-layout xl:mr-layout 2xl:mr-0 first:pt-0 last:border-b-0 last:pb-0"
    >
      <span aria-hidden="true" className="experience-item-marker" />
      <div>
        <div className="experience-item-meta">
          <p className="experience-item-company">{item.company}</p>
          <p className="font-mono text-label uppercase tracking-label text-muted-foreground">
            {item.endDate
              ? `${item.startDate} — ${item.endDate}`
              : item.startDate}
          </p>
        </div>
        <h3 className="experience-item-role mt-component-gap text-heading font-medium tracking-heading">
          {item.role}
        </h3>
        <p className="experience-item-summary mt-component-gap text-body text-muted-foreground">
          {item.summary}
        </p>
        <div className="experience-item-outcomes mt-layout">
          <p className="font-mono text-label uppercase tracking-label text-muted-foreground">
            Selected outcomes
          </p>
          <ul className="mt-component-gap space-y-component-gap">
            {item.achievements.map((achievement) => (
              <li
                key={achievement}
                className="flex gap-control-x text-body text-foreground"
              >
                <span aria-hidden="true" className="text-muted-foreground">
                  —
                </span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-layout border-t border-border pt-component-gap">
          <p className="font-mono text-label uppercase tracking-label text-muted-foreground">
            Technologies
          </p>
          <ul className="experience-item-stack mt-control-y">
            {item.stack.map((technology) => (
              <li
                key={technology}
                className="font-mono text-label tracking-label text-foreground"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.li>
  );
}
