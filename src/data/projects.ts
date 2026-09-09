import type { ProjectsContent } from "@/types/project";

export const projectsContent: ProjectsContent = {
  sectionNumber: "05",
  eyebrow: "Selected Work",
  heading: "A selection of products built around useful, real-world interactions.",
  projects: [
    {
      title: "AI Financify",
      type: "Open-source finance platform",
      shortDescription:
        "A personal finance platform for managing income, expenses, budgets, and multi-account transactions.",
      context:
        "Designed as a practical, open-source home for everyday financial information and planning.",
      contribution:
        "Built the platform end to end, including AI-powered receipt scanning for faster transaction capture.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Generative AI"],
      featured: true,
    },
    {
      title: "ClothEase",
      type: "E-commerce platform",
      shortDescription:
        "A full-stack clothing e-commerce experience for browsing products, managing a cart, and checking out.",
      context:
        "A focused commerce product designed around the essential path from product discovery to purchase.",
      contribution:
        "Built the full-stack application, including product browsing, cart management, and checkout functionality.",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      featured: true,
    },
    {
      title: "ChatEase",
      type: "Real-time messaging platform",
      shortDescription:
        "A real-time communication product with instant messaging and file sharing.",
      context:
        "Explores the product and engineering requirements of responsive, persistent digital communication.",
      contribution:
        "Built the client and server experience with WebSocket-based messaging and file-sharing workflows.",
      technologies: ["React", "Node.js", "WebSockets"],
      featured: true,
    },
  ],
};
