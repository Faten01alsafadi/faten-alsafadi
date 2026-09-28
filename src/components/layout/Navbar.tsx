"use client";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";

import { navigationLinks } from "@/data/navigation";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMenu();
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
    <header>
      <div className="container">
        <nav
          className="flex min-h-20 items-center justify-between"
          aria-label="Main navigation"
        >
          <div className="flex justify-center items-center gap-2">
            <div className="font-mono font-normal  border-border-accent border bg-surface-featured text-primary  rounded-xs  w-9 h-9 flex justify-center items-center">
              <Link href="/">FA</Link>
            </div>
            <Link href="/" className="text-foreground-muted">
              Faten Alsafadi
            </Link>
          </div>

          {/* Desktop Navigation */}

          <ul className="  gap-7 hidden items-center  md:flex">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className=" text-sm text-foreground-muted transition-colors duration-200 hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href="/resume/Faten-Alsafadi-CV.pdf"
            download
            className="hidden  md:flex justify-center items-center gap-2 rounded-xs border border-border-accent px-5 py-2.5 font-mono text-sm text-primary transition-colors duration-200 hover:bg-primary-soft "
          >
            <Download size={16} strokeWidth={1.8} aria-hidden="true" /> <span className="font-mono">CV</span>
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
            <span className="sr-only">
              {isMenuOpen ? "Close menu" : "Open menu"}
            </span>

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
          className={`overflow-hidden transition-[max-height,opacity] duration-300 md:hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-border py-6">
            <ul className="flex flex-col gap-5">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block font-mono text-sm text-foreground-muted transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="/resume/Faten-Alsafadi-CV.pdf"
              download
              onClick={closeMenu}
              className="mt-6 inline-flex justify-center items-center gap-2  rounded-xs border border-border-accent px-5 py-2.5 font-mono text-sm text-primary transition-colors duration-200 hover:bg-primary-soft "
            >
              <Download size={16} strokeWidth={1.8} aria-hidden="true" /> <span className="font-mono">CV</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
