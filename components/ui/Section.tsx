import type { ComponentPropsWithoutRef } from "react";

type SectionProps = ComponentPropsWithoutRef<"section">;

export function Section({ className = "", ...props }: SectionProps) {
  return (
    <section
      className={`section-surface relative py-28 ${className}`.trim()}
      {...props}
    />
  );
}