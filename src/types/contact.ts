export interface ContactLink {
  label: string;
  href: string;
}

export interface ContactContent {
  sectionNumber: string;
  eyebrow: string;
  heading: string;
  invitation: string;
  email: string;
  location: string;
  links: ContactLink[];
}

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
  website: string;
}
