import EducationCard from "@/components/ui/EducationCard";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="border-b border-border py-24 md:py-32"
    >
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-20">
          {/* Section heading */}
          <div>
            <div
              aria-hidden="true"
              className="mb-6 font-mono text-[10rem] font-medium leading-none tracking-[-0.08em] text-section-number/70 md:text-[12rem]"
            >
              {education.number}
            </div>

            <div className="-mt-8 md:-mt-10">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-primary"
                />

                <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
                  Education
                </p>
              </div>

              <h2
                id="education-title"
                className="mt-3 font-display text-4xl font-medium tracking-[-0.03em] text-foreground sm:text-5xl"
              >
                Academic background
              </h2>
            </div>
          </div>

          {/* Education card */}
          <EducationCard education={education} />
        </div>
      </div>
    </section>
  );
}