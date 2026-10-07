import ExperienceCard from "@/components/ui/ExperienceCard";
import { trainingExperience } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="border-b border-border py-24 md:py-32"
    >
      <div className="container">
        {/* Section header */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-20">
          <div>
            <div
              aria-hidden="true"
              className="mb-6 font-mono text-[10rem] font-medium leading-none tracking-[-0.08em] text-section-number/70 md:text-[12rem]"
            >
              05
            </div>

            <div className="-mt-8 md:-mt-10">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-primary"
                />

                <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
                  Experience
                </p>
              </div>

              <h2
                id="experience-title"
                className="mt-3 font-display text-4xl font-medium tracking-[-0.03em] text-foreground sm:text-5xl"
              >
                Training & development
              </h2>
            </div>
          </div>

          <p className="max-w-2xl font-body text-base leading-7 text-foreground-muted sm:text-lg sm:leading-8">
            Practical training programs completed with industry practitioners,
            combining structured learning with hands-on projects and real
            frontend development workflows. Each program resulted in
            recognized training documentation and practical work.
          </p>
        </div>

        {/* Training experience */}
        <div className="mt-16 border-t border-border">
          {trainingExperience.map((experience) => (
            <ExperienceCard
              key={experience.number}
              experience={experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
}