import SectionHeading from "@/components/ui/SectionHeading";

const highlights = [
  {
    value: "3+",
    label: "Training Programs",
  },
  {
    value: "3+",
    label: "Completed Projects",
  },
  {
    value: "Y4",
    label: "Informatics Engineering",
  },
  {
    value: "2+",
    label: "Years of Learning",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-b border-border py-24 md:py-32"
    >
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* Section heading */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="mb-6 font-mono text-[10rem] font-medium leading-none tracking-[-0.08em] text-section-number/70 md:text-[12rem]"
            >
              02
            </div>

            <div className="-mt-8 md:-mt-10">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
                About
              </p>

              <h2
                id="about-title"
                className="mt-3 font-display text-4xl font-medium tracking-[-0.03em] text-foreground sm:text-5xl"
              >
                Who I am
              </h2>
            </div>
          </div>

          {/* Content */}
          <div>
            {/* Main text card */}
            <div className="relative rounded-md border border-border bg-surface px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
              {/* Orange corner accent */}
              <span
                aria-hidden="true"
                className="absolute -left-px -top-px h-12 w-12 border-l border-t border-primary"
              />

              <div className="max-w-3xl font-body text-base leading-7 text-foreground-muted sm:text-lg sm:leading-8">
                <p>
                  I&apos;m an{" "}
                  <strong className="font-medium text-foreground">
                    Informatics Engineering student
                  </strong>{" "}
                  in my fourth year at Latakia University, with a focused
                  interest in frontend development — particularly building
                  responsive, maintainable web applications with{" "}
                  <strong className="font-medium text-foreground">
                    React and TypeScript.
                  </strong>
                </p>

                <p className="mt-6">
                  I&apos;ve completed multiple training programs with industry
                  practitioners, worked through real projects from design to
                  deployment, and continue expanding my skills in modern
                  frontend technologies including Next.js, Tailwind CSS, and
                  state management patterns.
                </p>

                <p className="mt-6">
                  My goal is to build interfaces that are technically solid,
                  accessible, and genuinely pleasant to use — combining an
                  engineer&apos;s attention to structure with care for the
                  end-user experience.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-4 grid grid-cols-2 gap-4 xl:grid-cols-4">
              {highlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className="rounded-md border border-border bg-surface px-5 py-6 sm:px-6 sm:py-7"
                >
                  <p className="font-display text-3xl font-medium tracking-[-0.03em] text-primary sm:text-4xl">
                    {highlight.value}
                  </p>

                  <p className="mt-3 font-mono text-[10px] uppercase leading-5 tracking-[0.08em] text-foreground-muted sm:text-xs">
                    {highlight.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}