
import {
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

import Link from "next/link";
import { contactOptions } from "@/data/contact";

const socialIcons = {
  email: FiMail,
  linkedin: FiLinkedin,
  github: FiGithub,
};

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="container">
        <div className="grid gap-8 py-8 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6">
          {/* Identity */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              aria-label="Faten Alsafadi - Back to homepage"
              className="flex size-10 shrink-0 items-center justify-center border border-border-accent bg-surface-featured font-display text-sm font-medium text-primary transition-colors duration-200 hover:border-primary"
            >
              FA
            </Link>

            <div>
              <p className="font-display text-base font-medium text-foreground">
                Faten Alsafadi
              </p>

              <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-foreground-muted">
                Frontend Developer
              </p>
            </div>
          </div>

          {/* Social links */}
          <nav aria-label="Social links">
            <ul className="flex flex-wrap items-center gap-5">
              {contactOptions.map((link) => {
                const Icon = socialIcons[link.icon];
                const isEmail = link.icon === "email";

                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={isEmail ? undefined : "_blank"}
                      rel={isEmail ? undefined : "noopener noreferrer"}
                      aria-label={link.label}
                      className="inline-flex items-center gap-2 font-mono text-xs text-foreground-muted transition-colors duration-200 hover:text-primary"
                    >
                      <Icon className="size-3.5" aria-hidden="true" />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Copyright & Technology */}
          <div className="flex flex-col gap-2 md:items-end">
            <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-foreground-muted">
              © {new Date().getFullYear()} Faten Alsafadi
            </p>

            <p className="font-body text-xs font-normal text-foreground-muted">
              Designed & built with Next.js, React and TypeScript.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
