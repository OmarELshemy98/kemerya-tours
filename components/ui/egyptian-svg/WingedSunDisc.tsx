import type { EgyptianSvgProps } from "./types";
import { resolveSize } from "./types";

/**
 * Restrained, historically inspired winged sun-disc motif.
 * Balanced wings and a central disc. Use selectively,
 * never as a repeated logo substitute.
 */
export function WingedSunDisc({
  className = "",
  decorative = true,
  title,
  size,
  ...props
}: EgyptianSvgProps) {
  return (
    <svg
      className={`egyptian-svg winged-sun-disc ${className}`}
      viewBox="0 0 160 90"
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
      {/* Left wing */}
      <path d="M20 45 C30 20, 70 10, 90 30 C70 25, 45 30, 30 45" />
      <path d="M30 45 C40 25, 70 18, 85 35 C70 30, 45 34, 32 45" />
      {/* Central sun disc */}
      <circle cx="80" cy="45" r="22" />
      {/* Inner uraeus disc */}
      <circle cx="80" cy="45" r="8" fill="currentColor" />
      {/* Right wing */}
      <path d="M130 45 C130 20, 90 10, 70 30 C90 25, 115 30, 130 45" />
      <path d="M130 45 C120 25, 90 18, 75 35 C90 30, 115 34, 130 45" />
      {/* Wing tips */}
      <path d="M90 30 C100 20, 115 22, 125 35" strokeWidth="1" />
      <path d="M70 30 C60 20, 45 22, 35 35" strokeWidth="1" />
    </svg>
  );
}
