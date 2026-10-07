export type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  features: string[];
  github: string;
  liveDemo?: string;
  role: string;
  featured?: boolean;
};

export type TrainingExperience = {
  number: string;
  organization: string;
  duration?: string;
  title: string;
  specialization: string;
  certificate?: string;
  description: string;
  technologies: string[];
};
export type Education = {
  number: string;
  institution: string;
  institutionType: string;
  degree: string;
  field: string;
  status: string;
  year: string;
  faculty: string;
  focus: string;
};
export type ContactOption = {
  label: string;
  value: string;
  description: string;
  href: string;
  icon: "email" | "linkedin" | "github";
};