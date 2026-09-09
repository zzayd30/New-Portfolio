"use client";

import { motion, useReducedMotion } from "motion/react";

import { motionTokens } from "@/lib/motion";
import type { SkillCategory as SkillCategoryType } from "@/types/skill";

import { SkillItem } from "./skill-item";

interface SkillCategoryProps {
  category: SkillCategoryType;
  index: number;
}

export function SkillCategory({ category, index }: SkillCategoryProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={{ opacity: 0, y: motionTokens.distance.normal }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: shouldReduceMotion ? 0 : motionTokens.duration.slow,
        ease: motionTokens.easing.editorial,
        delay: shouldReduceMotion ? 0 : index * motionTokens.stagger,
      }}
      aria-labelledby={`skill-category-${index}`}
      className="grid gap-component-gap sm:grid-cols-3 sm:gap-layout"
    >
      <div>
        <h3 id={`skill-category-${index}`} className="text-heading font-medium tracking-heading">
          {category.title}
        </h3>
        <p className="mt-control-y text-small text-muted-foreground">{category.description}</p>
      </div>
      <ul className="border-y border-border sm:col-span-2">
        {category.skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </ul>
    </motion.section>
  );
}
