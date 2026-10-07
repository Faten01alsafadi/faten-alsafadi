
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const isFeatured = project.featured;

  return (
    <article
      className={`group relative overflow-hidden rounded-md border p-6 transition-colors duration-300 sm:p-8 md:p-10 ${
        isFeatured
          ? "border-primary bg-surface-featured hover:bg-primary/15"
          : "border-border bg-surface hover:bg-surface-featured"
      }`}
    >
      {/* Featured corner accent */}
      {isFeatured && (
        <span
          aria-hidden="true"
          className="absolute -left-px -top-px h-14 w-14 border-l border-t border-primary"
        />
      )}

      {/* Project header */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`font-mono text-xs tracking-[0.12em] ${
              isFeatured ? "text-primary" : "text-foreground-muted"
            }`}
          >
            {project.number}
          </span>

          <span className="font-mono text-xs uppercase tracking-[0.1em] text-foreground-muted">
            {project.category}
          </span>

          {isFeatured && (
            <span className="rounded-full border border-primary px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-primary">
              Featured
            </span>
          )}
        </div>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-border text-foreground-muted transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-foreground"
          >
           
          </a>
        )}
      </div>

      {/* Project title & description */}
      <div className="mt-8 max-w-4xl">
        <h3 className="font-display text-3xl font-medium tracking-[-0.03em] text-foreground sm:text-4xl">
          {project.title}
        </h3>

        <p className="mt-5 max-w-3xl font-body text-base leading-7 text-foreground-muted sm:text-lg sm:leading-8">
          {project.description}
        </p>
      </div>

      {/* Project details */}
      <div className="mt-10 grid gap-10 border-t border-border pt-8 md:grid-cols-[1.25fr_0.75fr] md:gap-12">
        {/* Features */}
        <div>
          <h4 className="font-mono text-xs uppercase tracking-[0.12em] text-foreground">
            Key Features
          </h4>

          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="relative pl-4 font-body text-sm leading-6 text-foreground-muted"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-[0.65rem] h-1 w-1 rounded-full bg-primary"
                />

                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div>
          <h4 className="font-mono text-xs uppercase tracking-[0.12em] text-foreground">
            Tech Stack
          </h4>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-sm border border-border bg-background px-3 py-2 font-mono text-xs text-foreground-muted"
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
          Role:{" "}
          <span className="text-foreground">{project.role}</span>
        </p>
      </div>
    </article>
  );
}