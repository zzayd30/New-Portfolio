export interface ExperienceItem {
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  stack: string[];
  summary: string;
  achievements: string[];
}

export interface ExperienceContent {
  sectionNumber: string;
  eyebrow: string;
  heading: string;
  items: ExperienceItem[];
}
