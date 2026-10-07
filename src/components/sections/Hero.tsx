export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative isolate min-h-[calc(100vh-5rem)] overflow-hidden border-b border-border"
    >
      {/* =====================================================
          Background Grid
          Creates the subtle technical grid visible behind
          the whole hero sectio .
          ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-background bg-[linear-gradient(to_right,rgba(240,236,228,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(240,236,228,0.045)_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      {/* =====================================================
          Center Orange Glow
          A soft orange radial light placed around the center.
          ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"
      />

      {/* =====================================================
          Main Container
          ===================================================== */}

      <div className="container relative flex min-h-[calc(100vh-5rem)] flex-col justify-center py-12 md:py-16 lg:py-20">
        {/* ===================================================
            Section Number
            Large, subtle "01" positioned toward the
            bottom-right side of the hero.
            =================================================== */}

        <div
          aria-hidden="true"
          className="pointer-events-none opacity-50 absolute bottom-40   right-0 select-none font-extralight font-display text-[10rem] leading-none text-primary/10 sm:text-[10rem] md:text-[14rem] lg:text-[18rem]"
        >
          01
        </div>

        {/* ===================================================
            Main Hero Content
            =================================================== */}

        <div className="relative z-10 max-w-4xl">
          {/* =================================================
              Eyebrow / Technical Label

              Frontend Developer
              |
              React · TypeScript · Next.js
              ================================================= */}

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-[0.14em] text-foreground-muted sm:text-sm">
            <span className="text-primary">Frontend Developer</span>

            {/* Horizontal separator */}
            <span
              aria-hidden="true"
              className="h-px w-10 bg-foreground-muted/40 sm:w-16 md:w-20"
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

          {/* =================================================
              Name
              Each word is intentionally on its own line.
              ================================================= */}

          <h1
            id="hero-title"
            className="mt-8 font-display text-[clamp(2.5rem,9vw,6.0rem)] font-light leading-[0.84] tracking-[-0.045em] text-foreground"
          >
            <span className="block">Faten</span>

            <span className="block text-primary">Alsafadi</span>
          </h1>

          {/* =================================================
              Headline / Description
              ================================================= */}

          <p className="mt-10 max-w-2xl font-body text-lg font-medium leading-7 text-foreground-muted sm:text-xl md:text-xl md:leading-8">
            Frontend Developer focused on{" "}
            <span className="text-foreground">
              React, TypeScript & modern web experiences.
            </span>
          </p>
          <p className="mt-5 max-w-2xl font-body text-lg font-medium leading-7 text-foreground-muted sm:text-xl md:text-base md:leading-8">
            Building responsive, user-focused web applications using modern
            frontend technologies. Currently a 4th-year Informatics Engineering
            student with practical training experience and multiple completed
            projects.{" "}
          </p>

          {/* =================================================
              CTA Buttons
              ================================================= */}

          <div className="mt-10 flex flex-wrap items-center gap-4">
            {/* View Projects */}

            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-mono text-sm font-medium text-background transition-colors duration-200 hover:bg-primary-soft"
            >
              <span>View Projects</span>

              <span aria-hidden="true" className="text-base">
                ↘
              </span>
            </a>

            {/* CV */}

            <a
              href="/resume/Faten-Alsafadi-CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-sm border border-border-accent px-6 py-3 font-mono text-sm font-medium text-primary transition-colors duration-200 hover:bg-primary-soft"
            >
              <span>CV</span>
            </a>
          </div>
        </div>

        {/* ===================================================
            Availability
            Bottom Right
            Positioned over the 01 area.
            =================================================== */}

        <div className="absolute bottom-16 right-4 z-10 flex flex-col items-start gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-foreground-muted sm:right-8 sm:text-xs md:bottom-47 md:right-10">
          {/* Availability status */}

          <span>Currently Available</span>

          {/* Open to opportunities */}

          <span className="inline-flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-primary"
            />

            <span>Open to opportunities</span>
          </span>
        </div>

        {/* ===================================================
            Scroll Indicator
            Centered at the bottom of the hero.

            The orange element moves smoothly from
            top to bottom inside the vertical line.
            =================================================== */}

        <div
          aria-hidden="true"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground-muted">
            Scroll
          </span>

          <span className="relative h-14 w-[1px] overflow-hidden bg-foreground-muted/25">
            {/* Moving orange indicator */}

            <span className="animate-scroll-indicator absolute left-1/2 top-0 h-5 w-[5px] -translate-x-1/2 rounded-full bg-primary shadow-[0_0_5px_rgba(232,149,109,0.9),0_0_12px_rgba(232,149,109,0.55)]" />
          </span>
        </div>
      </div>
    </section>
  );
}
