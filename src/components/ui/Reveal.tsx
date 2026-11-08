
"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode, CSSProperties } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "none";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: RevealDirection;
  distance?: number;
  once?: boolean;
};

const directionTransforms: Record<RevealDirection, (distance: number) => string> = {
  up: (distance) => `translate3d(0, ${distance}px, 0)`,
  down: (distance) => `translate3d(0, -${distance}px, 0)`,
  left: (distance) => `translate3d(${distance}px, 0, 0)`,
  right: (distance) => `translate3d(-${distance}px, 0, 0)`,
  none: () => "translate3d(0, 0, 0)",
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 750,
  direction = "up",
  distance = 12,
  once = true,
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (mediaQuery.matches || !("IntersectionObserver" in window)) {
      element.style.opacity = "1";
      element.style.transform = "none";
      element.style.transition = "none";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -48px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once]);

  const style: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible
      ? "translate3d(0, 0, 0)"
      : directionTransforms[direction](distance),
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    willChange: isVisible ? "auto" : "opacity, transform",
  };

  return (
    <div
      ref={elementRef}
      className={`motion-reduce:!opacity-100 motion-reduce:!transform-none motion-reduce:!transition-none ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
