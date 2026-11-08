
import type { TrainingExperience } from "@/types";

type ExperienceCardProps = {
  experience: TrainingExperience;
};

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  return (
<article className="group grid gap-6 border-b border-border py-8 transition-colors duration-300 hover:border-primary/40 md:grid-cols-[80px_220px_1fr] md:gap-8 md:py-10">      {/* Number */}
      <div className="font-mono text-sm tabular-nums text-foreground-muted">
        <span className="transition-colors duration-200 group-hover:text-primary">
  {experience.number}
</span> 
      </div>

      {/* Organization */}
      <div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
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
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h4 className="font-body text-lg font-medium text-foreground">
            {experience.title}
          </h4>

          {experience.certificate && (
            <span className="inline-flex items-center gap-2 border border-border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.06em] text-foreground-muted transition-colors duration-200 group-hover:border-primary/50 group-hover:text-primary">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-primary"
              />
              {experience.certificate}
            </span>
          )}
        </div>

        <p className="mt-4 max-w-3xl font-body text-sm font-normal leading-7 text-foreground-muted sm:text-base">
          {experience.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {experience.technologies.map((technology) => (
            <li
              key={technology}
              className="border border-border bg-surface px-3 py-2 font-mono text-[10px] uppercase tracking-[0.05em] text-foreground-muted transition-colors duration-200 hover:border-primary/50 hover:text-foreground"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
