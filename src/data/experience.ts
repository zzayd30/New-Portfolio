import type { ExperienceContent } from "@/types/experience";

export const experienceContent: ExperienceContent = {
  sectionNumber: "03",
  eyebrow: "Experience",
  heading: "Building reliable products across the full delivery cycle.",
  items: [
    {
      company: "Xavinex",
      role: "Associate Software Engineer",
      startDate: "Feb 2026",
      endDate: "Present",
      stack: ["Next.js", "MERN", "AI", "PostgreSQL"],
      summary:
        "Developing AI-powered web products from early requirements through production deployment, with direct client collaboration throughout the process.",
      achievements: [
        "Delivered 5+ AI-powered web applications from development through production.",
        "Built AI workflows, REST APIs, authentication, and third-party integrations for production-ready client features.",
        "Implemented Stripe and PayPal payment flows alongside automation and data-processing workflows using Apify, Airtable, and Make.com.",
        "Managed VPS deployments and translated client requirements into maintainable technical solutions.",
      ],
    },
    {
      company: "Creamerz Soft",
      role: "Frontend Developer",
      startDate: "Jun 2025",
      endDate: "Jan 2026",
      stack: ["Angular", "Laravel", "REST APIs"],
      summary:
        "Created responsive, production-ready application interfaces in close collaboration with clients and backend engineers.",
      achievements: [
        "Delivered 5+ production web applications using Angular.",
        "Developed dynamic UI components and REST API integrations that improved usability and client-side performance.",
        "Translated business requirements into maintainable, user-focused frontend features.",
      ],
    },
    {
      company: "Faizan-e-Chisht Foundation",
      role: "Web Development Intern",
      startDate: "Jan 2025",
      stack: ["Next.js", "MERN", "Git"],
      summary:
        "Built responsive portfolio sites while strengthening practical foundations in reusable components, source control, and deployment workflows.",
      achievements: [
        "Developed responsive portfolio websites with Next.js and the MERN stack.",
        "Applied reusable component patterns and Git-based collaboration in real delivery workflows.",
      ],
    },
  ],
};
