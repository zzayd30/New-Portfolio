import type { SkillsContent } from "@/types/skill";

export const skillsContent: SkillsContent = {
  sectionNumber: "04",
  eyebrow: "Skills",
  heading: "A focused toolkit for building well-considered software.",
  categories: [
    {
      title: "Languages",
      description: "The languages I reach for when shaping product logic and data.",
      skills: [
        { name: "JavaScript", icon: "javascript" },
        { name: "TypeScript", icon: "typescript" },
        { name: "SQL", icon: "postgresql" },
      ],
    },
    {
      title: "Frontend",
      description: "Interfaces that remain clear, responsive, and maintainable as products evolve.",
      skills: [
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "nextjs" },
        { name: "Angular", icon: "angular" },
      ],
    },
    {
      title: "Backend",
      description: "Application services and interfaces designed for dependable delivery.",
      skills: [
        { name: "Node.js", icon: "nodejs" },
        { name: "Express", icon: "express" },
        { name: "REST APIs", icon: "api" },
      ],
    },
    {
      title: "Databases",
      description: "Flexible and relational data layers for production applications.",
      skills: [
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "Supabase", icon: "supabase" },
      ],
    },
    {
      title: "AI & APIs",
      description: "Practical AI capabilities and integrations that serve the product, not the hype.",
      skills: [
        { name: "Generative AI APIs", icon: "sparkles" },
        { name: "Prompt Engineering", icon: "prompt" },
        { name: "Third-party Integrations", icon: "api" },
      ],
    },
    {
      title: "Tools & DevOps",
      description: "The tools that support a smooth path from local work to production.",
      skills: [
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "Postman", icon: "postman" },
        { name: "Stripe", icon: "stripe" },
        { name: "PayPal", icon: "paypal" },
        { name: "PM2", icon: "pm2" },
        { name: "Nginx", icon: "nginx" },
      ],
    },
  ],
};
