import type { SVGProps } from "react";

/**
 * Shared props for every Egyptian SVG component.
 *
 * - `className` — sizing & positioning (consumers control via CSS)
 * - `decorative` — when true (default), the SVG is hidden from assistive tech
 * - `title` — accessible label for meaningful graphics
 * - `size` — convenience prop: "sm"(16px) | "md"(24px) | "lg"(32px) | number | CSS length
 */
export type EgyptianSvgProps = SVGProps<SVGSVGElement> & {
  /** When true (default), the SVG is purely decorative → aria-hidden, no title. */
  decorative?: boolean;
  /** Accessible label — only rendered when `decorative` is false. */
  title?: string;
  /** Convenience square size */
  size?: "sm" | "md" | "lg" | number | string;
};

const SIZE_PRESETS: Record<string, string> = {
  sm: "16px",
  md: "24px",
  lg: "32px",
};

/** Convert the `size` prop to a valid value for width/height attributes. */
export function resolveSize(size?: EgyptianSvgProps["size"]): string | number | undefined {
  if (size === undefined) return undefined;
  if (typeof size === "number") return size;
  if (typeof size === "string" && Object.prototype.hasOwnProperty.call(SIZE_PRESETS, size)) {
    return SIZE_PRESETS[size];
  }
  return size;
}

export type { SVGProps };
