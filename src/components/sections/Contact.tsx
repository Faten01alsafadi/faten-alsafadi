
import Reveal from "@/components/ui/Reveal";
import ContactOption from "@/components/ui/ContactOption";
import { contactOptions } from "@/data/contact";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-b border-border py-24 md:py-32"
    >
      <div className="container">
        {/* Section Heading */}
        <Reveal direction="up" distance={18} duration={800}>
          <div className="mb-16">
            {/* Section Number */}
            <div
              aria-hidden="true"
              className="mb-6 font-display text-[9rem] font-extralight leading-none tracking-[-0.08em] text-section-number/70 sm:text-[11rem] md:text-[12rem]"
            >
              07
            </div>

            <div className="-mt-8 md:-mt-10">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-primary"
                />

                <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
                  Contact
                </p>
              </div>

              <h2
                id="contact-title"
                className="mt-3 font-display text-4xl font-medium tracking-[-0.03em] text-foreground sm:text-5xl"
              >
                Get in touch
              </h2>
            </div>
          </div>
        </Reveal>

        {/* Contact Content */}
        <div className="grid gap-12 border-t border-border pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:pt-12">
          {/* Introduction */}
          <Reveal direction="up" distance={18} duration={800}>
            <div className="max-w-2xl">
              <h3 className="font-display text-3xl font-medium leading-tight tracking-[-0.03em] text-foreground sm:text-4xl md:text-5xl">
                Open to{" "}
                <span className="text-primary">Junior Frontend</span>{" "}
                and entry-level positions.
              </h3>

              <p className="mt-6 max-w-xl font-body text-base font-normal leading-7 text-foreground-muted sm:text-lg sm:leading-8">
                I&apos;m currently looking for opportunities where I can
                contribute as a frontend developer, grow through real-world
                experience, and continue building modern web applications
                with React and TypeScript.
              </p>
            </div>
          </Reveal>

          {/* Contact Links */}
          <Reveal direction="up" distance={18} duration={800} delay={150}>
            <div className="lg:pt-2">
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground-muted">
                Find me on
              </p>

              <div className="divide-y divide-border border-y border-border">
                {contactOptions.map((option, index) => (
                  <Reveal
                    key={option.label}
                    direction="up"
                    distance={10}
                    duration={650}
                    delay={index * 80}
                  >
                    <ContactOption option={option} />
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
