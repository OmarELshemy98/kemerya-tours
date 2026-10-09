import type { EgyptianSvgProps } from "./types";
import { resolveSize } from "./types";

/**
 * A minimal flowing line inspired by the Nile — architectural and calm,
 * not a cartoon wave.
 */
export function NileLinework({
  className = "",
  decorative = true,
  title,
  size,
  ...props
}: EgyptianSvgProps) {
  return (
    <svg
      className={`egyptian-svg nile-linework ${className}`}
      viewBox="0 0 240 32"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden={decorative ? "true" : "false"}
      focusable="false"
      width={resolveSize(size)}
      height={resolveSize(size)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {!decorative && title && <title>{title}</title>}
      {/* Single flowing line */}
      <path d="M0 16 Q40 8, 80 16 T 160 16 T 240 16" />
      {/* Subtle secondary line for depth */}
      <path d="M0 24 Q50 14, 100 24 T 200 24"
        strokeWidth="0.5"
        opacity="0.5"
      />
    </svg>
  );
}
