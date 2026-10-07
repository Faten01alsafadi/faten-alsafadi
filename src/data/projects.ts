import type { Project } from "@/types";

export const projects: Project[] = [
  {
    number: "01",
    category: "E-commerce Web Application",
    title: "StyleLoom",
    description:
      "A modern fashion e-commerce web application built as an independent project to demonstrate the ability to architect and build a larger React application. Features full product browsing, filtering, cart management, Firebase backend, and an administrative dashboard.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Redux Toolkit",
      "React Router",
      "Vite",
    ],
    features: [
      "Product browsing & categories",
      "Search & filtering",
      "Shopping cart",
      "Responsive UI",
      "Dark mode",
      "Firebase integration",
      "Admin dashboard",
      "Product CRUD",
    ],
    github: "https://github.com/wadahdahi/style-loom-website",
    liveDemo: "",
    role: "Solo Project",
    featured: true,
  },

  {
    number: "02",
    category: "Dashboard / API Integration",
    title: "Product Management Dashboard",
    description:
      "A responsive product management dashboard connected to a REST API. Built with React and TypeScript, demonstrating strong practical frontend and API integration skills including custom pagination implemented from scratch.",
    technologies: ["React", "TypeScript", "Vite", "React Router"],
    features: [
      "Product listing",
      "Search & pagination",
      "Product CRUD",
      "Image upload & preview",
      "Broken image fallback",
      "API integration",
      "Reusable components",
      "TypeScript throughout",
    ],
    github: "",
    liveDemo: "",
    role: "Solo Project",
  },

  {
    number: "03",
    category: "Real Estate Web Interface",
    title: "Flora",
    description:
      "A responsive real estate booking and landing page implemented from a Figma design. Demonstrates visual precision, responsive implementation, and the ability to translate a design into a functional, well-structured React interface.",
    technologies: ["React", "TypeScript", "Vite", "CSS"],
    features: [
      "Figma → React implementation",
      "Reusable components & props",
      "Responsive layouts",
      "Deal filtering",
      "Clean component structure",
      "TypeScript",
    ],
    github: "",
    liveDemo: "",
    role: "Solo Project",
  },
];