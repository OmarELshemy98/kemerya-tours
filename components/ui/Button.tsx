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
  const classes = [
    "relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full border border-transparent px-[1.8rem] py-[0.95rem] text-[0.72rem] font-bold uppercase tracking-[0.14em] transition-[transform,box-shadow,background,border-color] duration-[250ms] hover:-translate-y-0.5",
    "button",
    `button--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

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
