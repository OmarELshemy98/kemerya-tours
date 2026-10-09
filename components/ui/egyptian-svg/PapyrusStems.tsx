import type { EgyptianSvgProps } from "./types";
import { resolveSize } from "./types";

/**
* Elegant papyrus-inspired botanical composition.
* Uses a small number of deliberate stems and fan-shaped heads.
*/
export function PapyrusStems({
  className = "",
  decorative = true,
  title,
  size,
  ...props
}: EgyptianSvgProps) {
  return (
    <svg
      className={`egyptian-svg papyrus-stems ${className}`}
      viewBox="0 0 120 200"
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
      {/* Left stem */}
      <path d="M30 180 C30 140, 32 120, 30 100 C28 80, 34 60, 30 40" />
      {/* Left papyrus head */}
      <path d="M20 40 C28 32, 32 32, 40 40 C48 48, 44 56, 36 60 C28 64, 22 58, 20 48 Z" />
      <path d="M20 40 C16 36, 14 34, 12 32" strokeWidth="1" />
      {/* Right stem */}
      <path d="M90 180 C90 140, 88 120, 90 100 C92 80, 86 60, 90 40" />
      {/* Right papyrus head */}
      <path d="M80 40 C88 32, 92 32, 100 40 C108 48, 104 56, 96 60 C88 64, 82 58, 80 48 Z" />
      <path d="M100 40 C104 36, 106 34, 108 32" strokeWidth="1" />
      {/* Secondary papyrus head on left stem */}
      <path d="M30 100 C22 92, 20 86, 26 80 C32 74, 38 78, 40 86" />
      {/* Secondary papyrus head on right stem */}
      <path d="M90 100 C98 92, 100 86, 94 80 C88 74, 82 78, 80 86" />
      {/* Base detail */}
      <path d="M30 175 L25 180 M90 175 L95 180" strokeWidth="1" />
    </svg>
  );
}
