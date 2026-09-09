import type { HeroContent } from "@/types/hero";

export const heroContent: HeroContent = {
  sectionNumber: "01",
  role: "Software Engineer",
  rotatingRoles: ["Full-stack engineer", "AI systems builder", "Product-minded developer"],
  name: {
    first: "Muhammad",
    last: "Zaid",
  },
  description:
    "I build dependable full-stack products and practical AI-powered systems from first idea to production.",
  details: [
    { label: "Based in", value: "Lahore, Pakistan" },
    { label: "Focus", value: "Full-stack Development" },
    { label: "Current role", value: "Associate Software Engineer" },
    { label: "Delivery", value: "Concept to production" },
  ],
  primaryAction: {
    label: "View selected work",
    href: "#work",
  },
};
