
import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiFirebase,
  SiGit,
  SiGithub,
  SiVite,
  SiFigma,
  SiPostman,
  SiNpm,
  SiBootstrap,
  SiAngular,
} from "react-icons/si";
import { FaWandMagicSparkles } from "react-icons/fa6";

type SkillBadgeProps = {
  label: string;
  variant?: "default" | "featured";
};

const skillIcons: Partial<Record<string, IconType>> = {
  HTML5: SiHtml5,
  CSS3: SiCss,
  "JavaScript ES6+": SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Redux Toolkit": SiRedux,
  "Tailwind CSS": SiTailwindcss,
  Firebase: SiFirebase,
  Git: SiGit,
  GitHub: SiGithub,
  Vite: SiVite,
  Figma: SiFigma,
  Postman: SiPostman,
  npm: SiNpm,
  Bootstrap: SiBootstrap,
  Angular: SiAngular,
  "AI-Assisted Development": FaWandMagicSparkles,
};

export default function SkillBadge({
  label,
  variant = "default",
}: SkillBadgeProps) {
  const Icon = skillIcons[label];

  return (
    <span
      className={`
        inline-flex min-h-8 items-center gap-2
        rounded-sm border px-3 py-1.5
        font-mono text-[11px] font-normal tracking-wide
        transition-colors duration-200
        ${
          variant === "featured"
            ? "border-border-accent/60 bg-primary-soft/20 text-foreground hover:border-primary hover:bg-primary-soft/40"
            : "border-border bg-surface/50 text-foreground-muted hover:border-border-accent hover:bg-surface-featured hover:text-foreground"
        }
      `}
    >
      {Icon && (
        <Icon
          aria-hidden="true"
          className="size-3.5 shrink-0 opacity-70"
        />
      )}

      {label}
    </span>
  );
}
