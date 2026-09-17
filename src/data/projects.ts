import type { ProjectsContent } from "@/types/project";

export const projectsContent: ProjectsContent = {
  sectionNumber: "05",
  eyebrow: "Selected Work",
  heading: "Professional products built across AI, commerce, and operational workflows.",
  projects: [
    {
      title: "Planet Opus",
      type: "AI commerce platform",
      shortDescription:
        "An AI-powered sticker commerce platform that turns text prompts or reference images into purchasable physical products.",
      context:
        "The platform connects generative design, community discovery, cart and checkout flows, order tracking, and operational administration.",
      contribution:
        "Contributed across generation, authentication, catalog, cart, server-side pricing, Stripe payments, image storage, moderation, and analytics workflows.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Cloudinary", "Generative AI"],
      liveUrl: "https://planetopus.com/",
      featured: true,
    },
    {
      title: "VLN",
      type: "AI-assisted household finance platform",
      shortDescription:
        "A bilingual finance platform that turns uploaded invoices into structured expenses and helps households manage recurring costs, budgets, debts, and income.",
      context:
        "The product combines invoice processing, recurring transaction automation, household roles and permissions, financial dashboards, and secure document storage.",
      contribution:
        "Built invoice upload and review flows, AI-assisted field extraction, recurring expense processing, dashboard summaries, authentication, household access controls, and financial data isolation.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "OpenAI", "Node.js", "Recharts", "S3 storage"],
      liveUrl: "http://xaviatlas.com/",
      featured: true,
    },
    {
      title: "Studio 424",
      type: "Workspace booking platform",
      shortDescription:
        "A full-stack booking platform for discovering coworking spaces, managing memberships, and completing secure payments.",
      context:
        "The system combines public space discovery, authenticated customer portals, booking availability, memberships, payments, and administrative operations.",
      contribution:
        "Implemented discovery and filtering, booking rules, overlap prevention, Stripe checkout and webhooks, cancellation and refund workflows, and responsive admin tools.",
      technologies: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "TypeORM", "Stripe"],
      liveUrl: "https://studio424chicago.com/",
      featured: true,
    },
    {
      title: "NECTY",
      type: "B2B SaaS platform",
      shortDescription:
        "An AI-assisted opportunity monitoring platform that helps businesses discover prospects, manage outreach, and monitor performance.",
      context:
        "A multi-workspace product with onboarding, subscriptions, workspace invitations, opportunity management, notifications, and business insights.",
      contribution:
        "Built dashboard, onboarding, workspace, notification, billing, and insight workflows while coordinating frontend contracts with internal data-processing services.",
      technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Stripe", "AI workflows"],
      liveUrl: "http://app.necty.ai/",
      featured: true,
    },
  ],
};
