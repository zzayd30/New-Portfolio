import type { PortfolioSection } from "@/types/navigation";

export const portfolioSections: PortfolioSection[] = [
  { id: "home", number: "01", label: "Home" },
  { id: "about", number: "02", label: "About", navigationLabel: "About" },
  {
    id: "experience",
    number: "03",
    label: "Experience",
    navigationLabel: "Experience",
  },
  { id: "skills", number: "04", label: "Skills", navigationLabel: "Skills" },
  { id: "work", number: "05", label: "Selected Work", navigationLabel: "Work" },
  { id: "contact", number: "06", label: "Contact", navigationLabel: "Contact" },
];

export const primaryNavigation = portfolioSections.filter(
  (section): section is PortfolioSection & { navigationLabel: string } =>
    Boolean(section.navigationLabel),
);
