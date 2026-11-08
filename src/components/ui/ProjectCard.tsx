
import type { Project } from "@/types";
import { FiGithub, FiExternalLink } from "react-icons/fi";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const isFeatured = project.featured;

  return (
    <article
      className={`group relative overflow-hidden rounded-sm border p-5 transition-colors duration-300 sm:p-7 md:p-9 ${
        isFeatured
          ? "border-border-accent bg-surface-featured hover:border-primary/70"
          : "border-border bg-surface hover:border-border-accent"
      }`}
    >
      {/* Featured Accent */}
      {isFeatured && (
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 h-12 w-12 border-l border-t border-primary/70"
        />
      )}

      {/* Project Header */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`font-mono text-xs tracking-[0.12em] ${
              isFeatured ? "text-primary" : "text-foreground-muted"
            }`}
          >
            {project.number}
          </span>

          <span aria-hidden="true" className="text-primary/50">
            /
          </span>

          <span className="font-mono text-xs uppercase tracking-[0.1em] text-foreground-muted">
            {project.category}
          </span>

          {isFeatured && (
            <span className="border border-primary/50 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-primary">
              Featured
            </span>
          )}
        </div>

        {/* Project Links */}
        {(project.github || project.liveDemo) && (
          <div className="flex shrink-0 items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground-muted transition-colors duration-200 hover:border-primary hover:bg-primary-soft hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <FiGithub aria-hidden="true" className="size-4" />
              </a>
            )}

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-2 rounded-sm border border-border px-3 text-xs font-mono text-foreground-muted transition-colors duration-200 hover:border-primary hover:bg-primary-soft hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <span>Live Demo</span>
                <FiExternalLink
                  aria-hidden="true"
                  className="size-3.5"
                />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Project Title & Description */}
      <div className="mt-8 max-w-4xl">
        <h3 className="font-display text-3xl font-medium tracking-[-0.03em] text-foreground sm:text-4xl">
          {project.title}
        </h3>

        <p className="mt-5 max-w-3xl font-body text-base font-normal leading-7 text-foreground-muted sm:text-lg sm:leading-8">
          {project.description}
        </p>
      </div>

      {/* Project Details */}
      <div className="mt-10 grid gap-9 border-t border-border pt-7 md:grid-cols-[1.25fr_0.75fr] md:gap-12 md:pt-8">
        {/* Features */}
        <div>
          <h4 className="font-mono text-xs uppercase tracking-[0.12em] text-foreground">
            Key Features
          </h4>

          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="relative pl-4 font-body text-sm font-normal leading-6 text-foreground-muted"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-[0.65rem] h-1 w-1 bg-primary"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div>
          <h4 className="font-mono text-xs uppercase tracking-[0.12em] text-foreground">
            Tech Stack
          </h4>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-sm border border-border bg-background/60 px-3 py-2 font-mono text-xs text-foreground-muted transition-colors duration-200 hover:border-border-accent hover:text-primary"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Role */}
      <div className="mt-8 border-t border-border pt-6">
        <p className="font-mono text-xs uppercase tracking-[0.1em] text-foreground-muted">
          Role: <span className="text-foreground">{project.role}</span>
        </p>
      </div>

      {/* Subtle Hover Accent */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full"
      />
    </article>
  );
}
