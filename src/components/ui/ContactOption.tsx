
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

import type { ContactOption as ContactOptionType } from "@/types";

type ContactOptionProps = {
  option: ContactOptionType;
};

function ContactIcon({
  type,
}: {
  type: ContactOptionType["icon"];
}) {
  const className = "size-5";

  switch (type) {
    case "email":
      return <FiMail className={className} aria-hidden="true" />;
    case "linkedin":
      return <FiLinkedin className={className} aria-hidden="true" />;
    case "github":
      return <FiGithub className={className} aria-hidden="true" />;
    default:
      return null;
  }
}

export default function ContactOption({
  option,
}: ContactOptionProps) {
  const isEmail = option.icon === "email";

  return (
    <a
      href={option.href}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      aria-label={`${option.label}: ${option.value}`}
      className="group flex min-h-[88px] items-center justify-between gap-4 py-5 transition-colors duration-200"
    >
      <div className="flex min-w-0 items-center gap-5">
        <span className="flex size-11 shrink-0 items-center justify-center border border-border text-primary transition-colors duration-200 group-hover:border-primary/50">
          <ContactIcon type={option.icon} />
        </span>

        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-foreground-muted">
            {option.label}
          </p>

          <p className="mt-1 truncate font-body text-sm font-medium text-foreground transition-colors duration-200 group-hover:text-primary sm:text-base">
            {option.value}
          </p>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-4">
        <span className="hidden font-mono text-[10px] uppercase tracking-[0.08em] text-foreground-muted sm:block">
          {option.description}
        </span>

        <FiArrowUpRight
          className="size-4 text-foreground-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
          aria-hidden="true"
        />
      </div>
    </a>
  );
}
