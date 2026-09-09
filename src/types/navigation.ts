export interface PortfolioSection {
  id: "home" | "about" | "experience" | "skills" | "work" | "contact";
  number: string;
  label: string;
  navigationLabel?: string;
}
