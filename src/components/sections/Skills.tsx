
import Reveal from "@/components/ui/Reveal";
import { skillCategories } from "@/data/skills";
import SkillBadge from "../ui/SkillBadge";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="border-b border-border py-24 md:py-32"
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
                03
              </div>

              <div className="-mt-8 md:-mt-10">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="h-px w-8 bg-primary"
                  />

                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
                    Skills
                  </p>
                </div>

                <h2
                  id="skills-title"
                  className="mt-3 font-display text-4xl font-medium tracking-[-0.03em] text-foreground sm:text-5xl"
                >
                  Technologies I work with.
                </h2>
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" distance={16} duration={800} delay={150}>
            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground-muted">
                Technical toolkit
              </p>

              <p className="max-w-2xl font-body text-base font-normal leading-7 text-foreground-muted sm:text-lg sm:leading-8">
                My primary focus is{" "}
                <span className="font-medium text-foreground">
                  React and TypeScript
                </span>
                , supported by modern styling tools, API integration, and
                practical development workflows.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Skills Categories */}
        <div className="mt-20 max-w-6xl">
          {skillCategories.map((category, index) => {
            const isFeatured = category.variant === "featured";

            return (
              <Reveal
                key={category.title}
                direction="up"
                distance={18}
                duration={750}
                delay={index * 80}
              >
                <article
                  className={`
                    grid gap-5 border-t border-border py-8
                    md:grid-cols-[240px_1fr] md:gap-12 md:py-10
                    ${isFeatured ? "md:py-12" : ""}
                  `}
                >
                  {/* Category Information */}
                  <div className="flex items-start gap-4">
                    <span
                      aria-hidden="true"
                      className={`pt-0.5 font-mono text-[10px] ${
                        isFeatured
                          ? "text-primary"
                          : "text-foreground-muted/60"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3
                        className={`font-body text-md font-medium ${
                          isFeatured ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {category.title}
                      </h3>

                      {category.description && (
                        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-foreground-muted">
                          {category.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Skill List */}
                  <ul className="flex flex-wrap items-start gap-3">
                    {category.skills.map((skill) => (
                      <li key={skill}>
                        <SkillBadge
                          label={skill}
                          variant={category.variant}
                        />
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}

          <div aria-hidden="true" className="h-px bg-border" />
        </div>

        {/* Closing Note */}
        <Reveal direction="up" distance={10} duration={700} delay={150}>
          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.12em] text-foreground-muted/70">
            Built through projects · Training · Continuous learning
          </p>
        </Reveal>
      </div>
    </section>
  );
}
