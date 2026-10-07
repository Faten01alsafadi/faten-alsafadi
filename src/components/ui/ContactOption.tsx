import { ArrowUpRight, Mail } from "lucide-react";
import type { ContactOption as ContactOptionType } from "@/types";

type ContactOptionProps = {
  option: ContactOptionType;
};

function ContactIcon({
  type,
}: {
  type: ContactOptionType["icon"];
}) {
  if (type === "email") {
    return <Mail size={20} strokeWidth={1.7} aria-hidden="true" />;
  }

  if (type === "linkedin") {
    return (
      <span
        aria-hidden="true"
        className="font-body text-lg font-semibold leading-none"
      >
        in
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className="font-mono text-xs font-medium"
    >
      GH
    </span>
  );
}

export default function ContactOption({
  option,
}: ContactOptionProps) {
  return (
    <a
      href={option.href}
      target={option.icon === "email" ? undefined : "_blank"}
      rel={option.icon === "email" ? undefined : "noreferrer"}
      className="group flex items-center justify-between gap-6 rounded-sm border border-border bg-surface px-5 py-5 transition-colors duration-200 hover:border-primary sm:px-6"
    >
      <div className="flex min-w-0 items-center gap-4">
        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-border-accent text-primary"
        >
          <ContactIcon type={option.icon} />
        </span>

        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-foreground-muted">
            {option.label}
          </p>

          <p className="mt-1 truncate font-body text-sm font-medium text-foreground sm:text-base">
            {option.value}
          </p>
        </div>
      </div>

      <div className="hidden shrink-0 items-center gap-3 sm:flex">
        <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-foreground-muted">
          {option.description}
        </span>

        <ArrowUpRight
          size={16}
          strokeWidth={1.7}
          aria-hidden="true"
          className="text-primary transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </div>

      <ArrowUpRight
        size={17}
        strokeWidth={1.7}
        aria-hidden="true"
        className="shrink-0 text-primary sm:hidden"
      />
    </a>
  );
}