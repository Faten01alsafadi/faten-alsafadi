import { Check } from "lucide-react";
import type { Education } from "@/types";

type EducationCardProps = {
  education: Education;
};

export default function EducationCard({
  education,
}: EducationCardProps) {
  return (
    <article className="relative rounded-md border border-border bg-surface-featured p-6 sm:p-8 md:p-10">
      {/* Academic status */}
      <div className="absolute right-6 top-6 inline-flex items-center gap-2 rounded-sm border border-primary bg-primary px-3 py-2 font-mono text-[10px] uppercase tracking-[0.06em] text-background sm:right-8 sm:top-8">
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-background"
        />

        <span>{education.status}</span>
      </div>

      {/* Institution */}
      <div className="pr-40 sm:pr-52">
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

      {/* Details */}
      <div className="mt-12 grid gap-6 border-t border-border pt-6 sm:grid-cols-3">
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

          <p className="mt-2 font-body text-sm font-medium text-foreground">
            {education.faculty}
          </p>
        </div>

        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-foreground-muted">
            Focus
          </p>

          <p className="mt-2 font-body text-sm font-medium text-foreground">
            {education.focus}
          </p>
        </div>
      </div>
    </article>
  );
}