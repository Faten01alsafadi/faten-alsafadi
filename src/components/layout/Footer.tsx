import { contactOptions } from "@/data/contact";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="container">
        <div className="flex flex-col gap-8 border-t border-border py-8 md:flex-row md:items-center md:justify-between md:gap-6">
          {/* Identity */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              aria-label="Faten Alsafadi - Back to homepage"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xs border border-border-accent bg-surface-featured font-display text-sm font-medium text-primary transition-colors duration-200 hover:bg-primary"
            >
              FA
            </Link>

            <p className="font-body text-sm text-foreground-muted">
              Faten Alsafadi · 2026
            </p>
          </div>

          {/* Social links */}
          <nav aria-label="Social links">
            <ul className="flex items-center gap-5">
              {contactOptions.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={
                      link.icon === "email" ? undefined : "_blank"
                    }
                    rel={
                      link.icon === "email"
                        ? undefined
                        : "noreferrer"
                    }
                    className="font-mono text-xs text-foreground-muted transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Technology */}
          <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-foreground-muted">
            Built with React + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}