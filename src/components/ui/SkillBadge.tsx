type SkillBadgeProps = {
  label: string;
  variant?: "default" | "featured";
};

export default function SkillBadge({
  label,
  variant = "default",
}: SkillBadgeProps) {
  const styles =
    variant === "featured"
      ? "border-primary bg-surface-featured"
      : "border-border bg-surface";

  return (
    <span
      className={`inline-flex cursor-default items-center rounded-sm px-3 py-2 font-mono text-xs text-foreground-muted transition-all duration-200 hover:rounded-full hover:border-primary hover:bg-primary hover:text-foreground ${styles}`}
    >
      {label}
    </span>
  );
}