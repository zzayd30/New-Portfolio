export type SkillIconName =
  | "angular"
  | "api"
  | "express"
  | "git"
  | "github"
  | "javascript"
  | "mongodb"
  | "nextjs"
  | "nginx"
  | "nodejs"
  | "pm2"
  | "postgresql"
  | "postman"
  | "prompt"
  | "react"
  | "sparkles"
  | "stripe"
  | "supabase"
  | "typescript"
  | "paypal";

export interface Skill {
  name: string;
  icon: SkillIconName;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export interface SkillsContent {
  sectionNumber: string;
  eyebrow: string;
  heading: string;
  categories: SkillCategory[];
}
