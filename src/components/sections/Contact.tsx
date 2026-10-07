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
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* Section heading */}
          <div>
            <div
              aria-hidden="true"
              className="mb-6 font-mono text-[10rem] font-medium leading-none tracking-[-0.08em] text-section-number/70 md:text-[12rem]"
            >
              06
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

          {/* Contact content */}
          <div>
            <div className="max-w-3xl">
              <h3 className="font-display text-3xl font-medium leading-tight tracking-[-0.03em] text-foreground sm:text-4xl md:text-5xl">
                Open to{" "}
                <span className="text-primary">Junior Frontend</span>{" "}
                and entry-level positions.
              </h3>

              <p className="mt-6 max-w-2xl font-body text-base leading-7 text-foreground-muted sm:text-lg sm:leading-8">
                I&apos;m currently looking for opportunities where I can
                contribute as a frontend developer, grow through real-world
                experience, and continue building modern web applications
                with React and TypeScript.
              </p>
            </div>

            <div className="mt-10 space-y-3">
              {contactOptions.map((option) => (
                <ContactOption
                  key={option.label}
                  option={option}
                />
              ))}
            </div>

            <a
              href="mailto:fatensafad@gmail.com"
              className="mt-8 inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-3.5 font-mono text-sm font-medium text-background transition-colors duration-200 hover:bg-primary-soft"
            >
              <span>Say hello</span>

              <span aria-hidden="true" className="text-base">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}