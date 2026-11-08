
import Reveal from "@/components/ui/Reveal";
import ExperienceCard from "@/components/ui/ExperienceCard";
import { trainingExperience } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="relative overflow-hidden border-b border-border py-24 md:py-32"
    >
      <div className="container">
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-20">
          <Reveal direction="up" distance={18} duration={800}>
            <div>
              {/* Section Number */}
              <div
                aria-hidden="true"
                className="mb-6 font-display text-[9rem] font-extralight leading-none tracking-[-0.08em] text-section-number/70 sm:text-[11rem] md:text-[12rem]"
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
          </Reveal>

          <Reveal direction="up" distance={16} duration={800} delay={150}>
            <p className="max-w-2xl font-body text-base font-normal leading-7 text-foreground-muted sm:text-lg sm:leading-8">
              Professional training programs focused on frontend development,
              combining technical instruction with hands-on projects and
              practical experience using modern web technologies.
            </p>
          </Reveal>
        </div>

        {/* Training Experience */}
        <div className="mt-16 border-t border-border">
          {trainingExperience.map((experience, index) => (
            <Reveal
              key={experience.number}
              direction="up"
              distance={18}
              duration={800}
              delay={index * 100}
            >
              <ExperienceCard experience={experience} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
