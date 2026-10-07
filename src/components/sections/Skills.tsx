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
        {/* Section header */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-20">
          <div>
            <div
              aria-hidden="true"
              className="mb-6 font-mono text-[10rem] font-medium leading-none tracking-[-0.08em] text-section-number/70 md:text-[12rem]"
            >
              03
            </div>

            <div className="-mt-8 md:-mt-10">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
                Skills
              </p>

              <h2
                id="skills-title"
                className="mt-3 font-display text-4xl font-medium tracking-[-0.03em] text-foreground sm:text-5xl"
              >
                Technical toolkit
              </h2>
            </div>
          </div>

          <p className="max-w-2xl font-body text-base leading-7 text-foreground-muted sm:text-lg sm:leading-8">
            Primary focus on{" "}
            <strong className="font-medium text-foreground">
              React and TypeScript.
            </strong>{" "}
            Angular listed as additional framework familiarity. No skill bars —
            just the tools I&apos;ve actually used in projects and training.
          </p>
        </div>

        {/* Skills list */}
        <div className="mt-16 border-t border-border">
          {skillCategories.map((category) => {
            const isFeatured = category.variant === "featured";

            return (
              <article
                key={category.title}
                className="grid gap-6 border-b border-border py-8 md:grid-cols-[220px_1fr] md:gap-10 md:py-10"
              >
                {/* Category */}
                <div>
                  <h3
                    className={`font-mono text-xs uppercase tracking-[0.1em] ${
                      isFeatured ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {category.title}
                  </h3>

                  {category.description && (
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.08em] text-foreground-muted">
                      {category.description}
                    </p>
                  )}
                </div>

                {/* Skills */}
                <ul className="flex flex-wrap gap-2">
               <ul className="flex flex-wrap gap-2">
  {category.skills.map((skill) => (
    <li key={skill}>
      <SkillBadge
        label={skill}
        variant={category.variant}
      />
    </li>
  ))}
</ul>
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}