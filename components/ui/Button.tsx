import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
    variant?: "primary" | "secondary" | "dark" | "light" | "gold";
  className?: string;
  external?: boolean;
  "aria-label"?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = `button button--${variant} ${className}`.trim();

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
