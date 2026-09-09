export interface AboutDetail {
  label: string;
  value: string;
}

export interface AboutContent {
  sectionNumber: string;
  eyebrow: string;
  introLabel: string;
  introduction: string;
  details: AboutDetail[];
  resume: {
    label: string;
    href: string;
    filename: string;
  };
}
