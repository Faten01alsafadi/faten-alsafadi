
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative isolate overflow-hidden border-b border-border py-24 md:py-32"
    >
      <div className="container relative">
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-20">
          <Reveal direction="up" distance={18} duration={800}>
            <div>
              {/* Section Number */}
              <div
                aria-hidden="true"
                className="mb-6 font-display text-[9rem] font-extralight leading-none tracking-[-0.08em] text-section-number/70 sm:text-[11rem] md:text-[12rem]"
              >
                04
              </div>

              <div className="-mt-8 md:-mt-10">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
                  Projects
                </p>

                <h2
                  id="projects-title"
                  className="mt-3 font-display text-4xl font-medium tracking-[-0.03em] text-foreground sm:text-5xl"
                >
                  Featured work
                </h2>
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" distance={16} duration={800} delay={150}>
            <p className="max-w-2xl font-body text-base font-normal leading-7 text-foreground-muted sm:text-lg sm:leading-8">
              Real projects built during training and independently —
              demonstrating practical frontend skills, API integration, and the
              ability to build complete applications.
            </p>
          </Reveal>
        </div>

        {/* Projects */}
        <div className="mt-16 space-y-6">
          {projects.map((project, index) => (
            <Reveal
              key={project.number}
              direction="up"
              distance={20}
              duration={850}
              delay={index * 120}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
