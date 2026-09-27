import Image from "next/image";

export default function Home() {
  return (
     <main className="container py-24">
      <p className="font-mono text-primary">
        01 / PORTFOLIO
      </p>

      <h1 className="mt-4 font-display text-5xl text-foreground">
        Faten Alsafadi
      </h1>

      <p className="mt-4 max-w-xl text-foreground-muted">
        Frontend Developer focused on React, TypeScript and modern web
        experiences.
      </p>

      <button className="mt-8 rounded-full bg-primary px-6 py-3 text-background">
        View Projects
      </button>
    </main>
  );
}
