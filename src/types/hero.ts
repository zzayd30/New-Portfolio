export interface HeroDetail {
  label: string;
  value: string;
}

export interface HeroContent {
  sectionNumber: string;
  role: string;
  rotatingRoles: string[];
  name: {
    first: string;
    last: string;
  };
  description: string;
  details: HeroDetail[];
  primaryAction: {
    label: string;
    href: string;
  };
}
