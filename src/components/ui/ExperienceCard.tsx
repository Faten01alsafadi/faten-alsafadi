import { Check } from "lucide-react";
import type { TrainingExperience } from "@/types";

type ExperienceCardProps = {
  experience: TrainingExperience;
};

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  return (
    <article className="grid gap-6 border-b border-border py-8 md:grid-cols-[80px_220px_1fr] md:gap-8 md:py-10">
      {/* Number */}
      <div className="font-mono text-sm text-foreground-muted">
        <span className="text-primary">{experience.number}</span>
      </div>

      {/* Organization */}
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-display text-2xl font-medium tracking-[-0.02em] text-foreground">
            {experience.organization}
          </h3>

          {experience.duration && (
            <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-foreground-muted">
              {experience.duration}
            </span>
          )}
        </div>

        <p className="mt-2 font-mono text-xs uppercase tracking-[0.08em] text-primary">
          {experience.specialization}
        </p>
      </div>

      {/* Details */}
      <div>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h4 className="font-body text-lg font-medium text-foreground">
            {experience.title}
          </h4>

          {experience.certificate && (
            <span className="inline-flex items-center gap-2 rounded-sm border border-primary px-3 py-2 font-mono text-[10px] uppercase tracking-[0.06em] text-primary">
              <Check
                size={13}
                strokeWidth={2}
                aria-hidden="true"
              />

              {experience.certificate}
            </span>
          )}
        </div>

        <p className="mt-4 max-w-3xl font-body text-sm leading-7 text-foreground-muted sm:text-base">
          {experience.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {experience.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-sm border border-border bg-surface px-3 py-2 font-mono text-[10px] uppercase tracking-[0.05em] text-foreground-muted transition-colors duration-200 hover:border-primary hover:text-foreground"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}