export type SkillCategory = {
  title: string;
  description?: string;
  skills: string[];
  variant?: "default" | "featured";
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Core Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
      "TypeScript",
      "Responsive Design",
      "Flexbox",
      "CSS Grid",
      "Bootstrap",
    ],
  },
  {
    title: "React & Modern Frontend",
    description: "Primary focus",
    variant: "featured",
    skills: [
      "React",
      "Next.js",
      "React Router",
      "Redux Toolkit",
      "Context API",
      "Custom Hooks",
      "Form Handling",
      "API Integration",
      "REST APIs",
      "Auth & Protected Routes",
      "Loading / Error States",
      "Lazy Loading",
    ],
  },
  {
    title: "Styling & UI",
    skills: [
      "Tailwind CSS",
      "CSS Modules",
      "Responsive UI",
      "Figma → React",
      "Dark Mode",
      "UI Components",
    ],
  },
  {
    title: "Data & Integration",
    skills: [
      "Firebase",
      "REST APIs",
      "Fetch API",
      "LocalStorage",
      "SessionStorage",
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      "Git",
      "GitHub",
      "Vite",
      "VS Code",
      "Postman",
      "Figma",
      "npm",
      "Chrome DevTools",
    ],
  },
  {
    title: "Development Practices",
    skills: [
      "Debugging",
      "Problem Solving",
      "Component Architecture",
      "Feature-based Structure",
      "API Documentation",
      "Working with Codebases",
    ],
  },
  {
    title: "Also Familiar With",
    skills: ["Angular"],
  },
];