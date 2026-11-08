
"use client";

import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

import { navigationLinks } from "@/data/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const sections = navigationLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => section !== null);

    if (!sections.length) return;

    const updateActiveSection = () => {
      const activationPoint = window.innerHeight * 0.3;

      const currentSection = sections.find((section) => {
        const rect = section.getBoundingClientRect();

        return rect.top <= activationPoint && rect.bottom > activationPoint;
      });

      if (currentSection?.id) {
        setActiveSection(`#${currentSection.id}`);
      }
    };

    const observer = new IntersectionObserver(
      () => {
        updateActiveSection();
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    updateActiveSection();

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container">
        <nav
          className="flex min-h-20 items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <div className="flex items-center justify-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xs border border-border-accent bg-surface-featured font-mono font-normal text-primary">
              <Link href="/" aria-label="Faten Alsafadi home">
                FA
              </Link>
            </div>

            <Link href="/" className="text-foreground-muted">
              Faten Alsafadi
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-7 md:flex">
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative py-2 text-sm transition-colors duration-200 ${
                      isActive
                        ? "font-medium text-primary"
                        : "text-foreground-muted hover:text-foreground"
                    }`}
                  >
                    {link.label}

                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 -bottom-1 h-px bg-primary transition-transform duration-300 origin-center ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CV Download */}
          <a
            href="/resume/Faten-Alsafadi-CV.pdf"
            download
            className="hidden items-center justify-center gap-2 rounded-xs border border-border-accent px-5 py-2.5 font-mono text-sm text-primary transition-colors duration-200 hover:bg-primary-soft md:flex"
          >
            <FiDownload size={16} aria-hidden="true" />
            <span>Download CV</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground transition-colors duration-200 hover:border-border-accent hover:text-primary md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span aria-hidden="true" className="flex flex-col gap-1.5">
              <span
                className={`block h-px w-5 bg-current transition-transform duration-200 ${
                  isMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />

              <span
                className={`block h-px w-5 bg-current transition-opacity duration-200 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />

              <span
                className={`block h-px w-5 bg-current transition-transform duration-200 ${
                  isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          aria-hidden={!isMenuOpen}
          inert={!isMenuOpen}
          className={`overflow-hidden transition-[max-height,opacity] duration-300 md:hidden ${
            isMenuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-border py-6">
            <ul className="flex flex-col gap-5">
              {navigationLinks.map((link) => {
                const isActive = activeSection === link.href;

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      aria-current={isActive ? "location" : undefined}
                      className={`block font-mono text-sm transition-colors duration-200 ${
                        isActive
                          ? "font-medium text-primary"
                          : "text-foreground-muted hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile CV Download */}
            <a
              href="/resume/Faten-Alsafadi-CV.pdf"
              download
              onClick={closeMenu}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xs border border-border-accent px-5 py-2.5 font-mono text-sm text-primary transition-colors duration-200 hover:bg-primary-soft"
            >
              <FiDownload size={16} aria-hidden="true" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
