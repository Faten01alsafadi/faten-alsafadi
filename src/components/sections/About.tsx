
import Reveal from "@/components/ui/Reveal";

import {
  aboutHighlights,
  aboutParagraphs,
} from "@/data/about";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative border-b border-border py-20 sm:py-24 lg:py-28"
    >
      <div className="container">
        <div className="grid items-start gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 xl:gap-20">
          {/* Section Heading */}
          <Reveal direction="up" distance={18} duration={800}>
            <div className="relative">
              <div
                aria-hidden="true"
                className="pointer-events-none select-none font-display text-[clamp(7rem,15vw,12rem)] font-extralight leading-[0.8] tracking-[-0.08em] text-section-number/70"
              >
                02
              </div>

              <div className="relative -mt-6 sm:-mt-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary sm:text-xs">
                  About
                </p>

                <h2
                  id="about-title"
                  className="mt-3 font-display text-4xl font-medium leading-tight tracking-[-0.035em] text-foreground sm:text-5xl lg:text-[3.5rem]"
                >
                  Who I am
                </h2>

                <span
                  aria-hidden="true"
                  className="mt-6 block h-px w-12 bg-primary/70"
                />
              </div>
            </div>
          </Reveal>

          {/* Section Content */}
          <div className="min-w-0">
            {/* About Card */}
            <Reveal direction="up" distance={20} duration={850} delay={100}>
              <div className="group relative overflow-hidden rounded-md border border-border bg-surface px-5 py-7 transition-colors duration-300 hover:border-primary/30 sm:px-8 sm:py-9 lg:px-9 lg:py-10">
                {/* Corner Accents */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-0 h-12 w-12 border-l border-t border-primary/70 transition-all duration-300 group-hover:h-14 group-hover:w-14"
                />

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 right-0 h-8 w-8 border-b border-r border-primary/20 transition-colors duration-300 group-hover:border-primary/50"
                />

                {/* Text Content */}
                <div className="relative z-10 max-w-3xl space-y-5 font-body text-base font-normal leading-7 text-foreground-muted">
                  {aboutParagraphs.map((paragraph, index) => (
                    <p key={index}>
                      {paragraph.segments.map((segment, segmentIndex) => (
                        <span
                          key={segmentIndex}
                          className={
                            segment.emphasis
                              ? "font-medium text-foreground"
                              : undefined
                          }
                        >
                          {segment.text}
                        </span>
                      ))}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Highlights */}
            <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
              {aboutHighlights.map((highlight, index) => (
                <Reveal
                  key={highlight.label}
                  direction="up"
                  distance={16}
                  duration={700}
                  delay={150 + index * 100}
                >
                  <div className="group relative flex min-h-[120px] flex-col justify-between overflow-hidden rounded-md border border-border bg-surface px-4 py-5 transition-colors duration-300 hover:border-primary/40 sm:min-h-[140px] sm:px-5 sm:py-6">
                    {/* Small Accent */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-0 top-0 h-px w-0 bg-primary transition-all duration-300 ease-standard group-hover:w-full"
                    />

                    {/* Index */}
                    <span className="font-mono text-[10px] tracking-wider text-foreground-muted/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Value */}
                    <div>
                      <p className="font-display text-3xl font-medium tracking-[-0.04em] text-primary sm:text-4xl">
                        {highlight.value}
                      </p>

                      <p className="mt-2 font-mono text-[9px] uppercase leading-5 tracking-[0.07em] text-foreground-muted sm:text-[10px] sm:tracking-[0.09em]">
                        {highlight.label}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
