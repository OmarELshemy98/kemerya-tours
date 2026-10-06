import type { SVGProps } from "react";

/**
 * Hieroglyphic-inspired decorative border.
 * The pattern slowly draws itself — a subtle nod to ancient Egyptian
 * carved stone inscriptions, reinterpreted as modern digital ornament.
 */
export function HieroglyphicBorder({
  variant = "horizontal",
  className,
  ...props
}: SVGProps<SVGSVGElement> & {
  variant?: "horizontal" | "vertical";
}) {
  // Motifs inspired by hieroglyphic forms — stylised, not literal
  const motifs = [
    // Ankh (life symbol) simplified
    "M6 12 L6 4 C6 2.9, 6.9 2, 8 2 C9.1 2, 10 2.9, 10 4 L10 12",
    // Sedge / papyrus (stylized)
    "M2 16 Q 2 12, 5 12 Q 8 12, 8 16 Q 8 20, 5 20 Q 2 20, 2 16 Z",
    // Spiral (like lotus/nautilus)
    "M14 8 A6 6 0 1 1 14 8.01 Z M14 2 A4 4 0 1 0 14 14 A4 4 0 0 0 14 2 Z",
    // Reed (simplified)
    "M18 18 C17 16, 18 14, 19 12 C20 10, 18 8, 16 8 C14 8, 14 10, 16 12",
    // Eye of Horus (stylized arc)
    "M22 12 C20 8, 16 6, 12 8 C8 10, 6 14, 8 18 C10 22, 14 24, 18 22",
    // Feather (plume)
    "M3 4 C7 0, 13 0, 17 4 C21 8, 20 14, 16 16 C12 18, 8 18, 4 16 C0 14, -1 8, 3 4 Z",
  ];

  return (
    <svg
      viewBox="0 0 480 24"
      role="presentation"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {motifs.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke="rgba(200,143,47,0.32)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="hieroglyph__motif"
          style={{ animationDelay: `${0.1 + i * 0.15}s` }}
        />
      ))}
    </svg>
  );
}

export const hieroglyphStyles = `
.hieroglyph__motif {
  opacity: 0;
  stroke-dasharray: 60;
  stroke-dashoffset: 60;
  animation: drawLine 0.8s ease-out forwards;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  transform-origin: center;
}
.hieroglyph__motif:hover {
  opacity: 0.7;
  stroke: rgba(200,143,47,0.6);
}

@keyframes drawLine {
  to { opacity: 1; stroke-dashoffset: 0; }
}
`;
