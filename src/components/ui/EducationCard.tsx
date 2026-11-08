
import type { Education } from "@/types";

type EducationCardProps = {
  education: Education;
};

export default function EducationCard({
  education,
}: EducationCardProps) {
  return (
    <article className="relative rounded-sm border border-border bg-surface p-6 transition-colors duration-300 sm:p-8 md:p-10">
      {/* Header */}
      <div className="flex flex-col-reverse items-start justify-between gap-6 sm:flex-row sm:items-start">
        {/* Institution */}
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground-muted">
            {education.institutionType}
          </p>

          <h3 className="mt-3 font-display text-3xl font-medium tracking-[-0.03em] text-foreground sm:text-4xl md:text-5xl">
            {education.institution}
          </h3>

          <div className="mt-5">
            <p className="font-body text-lg font-medium text-foreground">
              {education.field}
            </p>

            <p className="mt-1 font-mono text-xs uppercase tracking-[0.08em] text-foreground-muted">
              {education.degree}
            </p>
          </div>
        </div>

        {/* Academic status */}
        <span className="inline-flex shrink-0 items-center gap-2 border border-primary/50 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.06em] text-primary">
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-primary"
          />
          {education.status}
        </span>
      </div>

      {/* Details */}
      <div className="mt-12 grid gap-6 border-t border-border pt-6 sm:grid-cols-3 sm:gap-8">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-foreground-muted">
            Year
          </p>

          <p className="mt-2 font-display text-xl font-medium text-primary">
            {education.year}
          </p>
        </div>

        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-foreground-muted">
            Faculty
          </p>

          <p className="mt-2 font-body text-sm font-normal leading-6 text-foreground">
            {education.faculty}
          </p>
        </div>

        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-foreground-muted">
            Focus
          </p>

          <p className="mt-2 font-body text-sm font-normal leading-6 text-foreground">
            {education.focus}
          </p>
        </div>
      </div>
    </article>
  );
}
