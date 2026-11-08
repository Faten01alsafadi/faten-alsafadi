
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden border-b border-border"
    >
      {/* Background Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-background bg-[linear-gradient(to_right,rgba(240,236,228,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(240,236,228,0.045)_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      {/* Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[65%] top-1/2 -z-10 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px] animate-hero-glow"
      />

      {/* Main Container */}
      <div className="container relative flex min-h-[calc(100svh-5rem)] flex-col justify-center py-16 sm:py-20 md:py-24 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-4 lg:py-20">

        {/* Section Number */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-8 right-0 z-0 select-none font-display text-[5rem] font-extralight leading-none tracking-[-0.08em] text-primary/10 opacity-60 sm:text-[6rem] md:text-[7rem] lg:text-[8rem]"
        >
          01
        </div>

        {/* Left: Hero Content */}
        <div className="relative z-10 max-w-3xl">

          {/* Eyebrow */}
          <Reveal direction="up" distance={8} duration={700}>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[0.12em] text-foreground-muted sm:gap-x-4 sm:text-xs md:text-sm">
              <span className="text-primary">Frontend Developer</span>

              <span
                aria-hidden="true"
                className="h-px w-6 bg-foreground-muted/40 sm:w-10 md:w-16"
              />

              <span>React</span>

              <span aria-hidden="true" className="text-primary">
                ·
              </span>

              <span>TypeScript</span>

              <span aria-hidden="true" className="text-primary">
                ·
              </span>

              <span>Next.js</span>
            </div>
          </Reveal>

          {/* Name */}
          <Reveal direction="up" distance={12} duration={900} delay={100}>
            <h1
              id="hero-title"
              className="mt-7 font-display text-[clamp(3.25rem,11vw,6rem)] font-light leading-[0.88] tracking-[-0.045em] text-foreground sm:mt-8"
            >
              <span className="block">Faten</span>
              <span className="block text-primary">Alsafadi</span>
            </h1>
          </Reveal>

          {/* Supporting Content */}
          <Reveal direction="up" distance={10} duration={800} delay={200}>
            <div>
              <p className="mt-8 max-w-2xl font-body text-base font-medium leading-7 text-foreground-muted sm:mt-10 sm:text-lg sm:leading-8 md:text-xl">
                Frontend Developer focused on{" "}
                <span className="text-foreground">
                  React, TypeScript & modern web experiences.
                </span>
              </p>

              <p className="mt-4 max-w-2xl font-body text-sm font-normal leading-7 text-foreground-muted sm:mt-5 sm:text-base sm:leading-8">
                I build responsive and user-focused web applications using
                modern frontend technologies, with an interest in clean
                architecture and thoughtful user experiences. Currently a
                4th-year Informatics Engineering student with practical
                training experience and completed projects.
              </p>
            </div>
          </Reveal>

          {/* CTA Buttons */}
          <Reveal direction="up" distance={8} duration={750} delay={300}>
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 font-mono text-xs font-medium text-background transition-colors duration-200 hover:bg-primary-soft sm:px-6 sm:text-sm"
              >
                <span>View Projects</span>
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                >
                  ↘
                </span>
              </a>

              <a
                href="/resume/Faten-Alsafadi-CV.pdf"
                download
                className="inline-flex items-center gap-2 rounded-sm border border-border-accent px-5 py-3 font-mono text-xs font-medium text-primary transition-colors duration-200 hover:bg-primary-soft sm:px-6 sm:text-sm"
              >
                Download CV
              </a>
            </div>
          </Reveal>

          {/* Availability */}
          <Reveal
            direction="up"
            distance={8}
            duration={750}
            delay={400}
            className="relative z-10 mt-8 sm:mt-10"
          >
            <div className="flex flex-col items-start gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-foreground-muted sm:text-xs">
              <span className="text-primary/80">Work Status</span>

              <span className="inline-flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-primary"
                />
                <span>Open to Frontend Opportunities</span>
              </span>
            </div>
          </Reveal>
        </div>

        {/* Right: Editorial Visual */}
        <Reveal
          direction="none"
          duration={1100}
          delay={250}
          className="relative z-10 hidden lg:flex lg:items-center lg:justify-center"
        >
          <div
            aria-hidden="true"
            className="relative aspect-square w-full max-w-[480px]"
          >
            {/* Ambient Center */}
            <div className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[70px]" />

            {/* Crosshair Lines */}
            <div className="absolute left-1/2 top-[5%] h-[90%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

            <div className="absolute left-[5%] top-1/2 h-px w-[90%] -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            {/* Outer Orbit */}
            <div className="animate-hero-orbit absolute inset-[5%] rounded-full border border-primary/15 border-t-primary/60" />

            {/* Middle Ring */}
            <div className="absolute inset-[17%] rounded-full border border-foreground/10" />

            {/* Inner Ring */}
            <div className="absolute inset-[28%] rounded-full border border-primary/20" />

            {/* Large Letter */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="select-none font-display text-[clamp(18rem,28vw,25rem)] font-extralight italic leading-none tracking-[-0.1em] text-transparent [-webkit-text-stroke:1px_rgba(232,149,109,0.55)]">
                F
              </span>
            </div>

            {/* Orbit Accent */}
            <span className="absolute right-[16%] top-[22%] h-3 w-3 rounded-full border border-primary bg-background shadow-[0_0_16px_rgba(232,149,109,0.6)]" />

            <span className="absolute bottom-[20%] left-[13%] h-2 w-2 rounded-full bg-primary/70" />

            {/* Top Metadata */}
            <div className="absolute left-[4%] top-[9%] flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground-muted">
              <span className="h-px w-7 bg-primary" />
              <span>Personal Portfolio</span>
            </div>

            {/* Vertical Metadata */}
            <div className="absolute right-[1%] top-1/2 -translate-y-1/2 font-mono text-[9px] uppercase tracking-[0.2em] text-foreground-muted [writing-mode:vertical-rl]">
              Design · Develop · Create
            </div>


          </div>
        </Reveal>

        {/* Scroll Indicator */}
        <div
          aria-hidden="true"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground-muted">
            Scroll
          </span>

          <span className="relative h-14 w-px overflow-hidden bg-foreground-muted/25">
            <span className="animate-scroll-indicator absolute left-1/2 top-0 h-5 w-[5px] -translate-x-1/2 rounded-full bg-primary shadow-[0_0_5px_rgba(232,149,109,0.9),0_0_12px_rgba(232,149,109,0.55)]" />
          </span>
        </div>
      </div>
    </section>
  );
}
