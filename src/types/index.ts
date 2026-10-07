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