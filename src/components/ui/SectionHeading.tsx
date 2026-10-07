type SectionHeadingProps = {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  number,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="grid gap-6 md:grid-cols-[120px_1fr] md:gap-10">
      <div className="font-mono text-sm text-foreground-muted">
        <span className="text-primary">{number}</span>
        <span className="ml-2">/</span>
      </div>

      <div>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
          {eyebrow}
        </p>

        <h2 className="mt-3 font-display text-4xl font-medium tracking-[-0.03em] text-foreground sm:text-5xl">
          {title}
        </h2>

        {description && (
          <p className="mt-5 max-w-2xl font-body text-base leading-7 text-foreground-muted sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}