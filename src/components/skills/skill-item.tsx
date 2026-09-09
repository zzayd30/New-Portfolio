import type { Skill } from "@/types/skill";

import { skillIcons } from "./skill-icons";

interface SkillItemProps {
  skill: Skill;
}

export function SkillItem({ skill }: SkillItemProps) {
  const Icon = skillIcons[skill.icon];

  return (
    <li className="group flex items-center gap-component-gap border-b border-border py-component-gap text-foreground transition-colors duration-motion-fast ease-editorial last:border-b-0 hover:text-muted-foreground">
      <Icon aria-hidden="true" className="size-icon shrink-0" />
      <span className="text-body">{skill.name}</span>
    </li>
  );
}
