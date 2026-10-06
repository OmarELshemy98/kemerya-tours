import type { SVGProps } from "react";

/**
 single obelisk with a line-draw reveal animation.
 * Inspired by ancient Egyptian obelisks — a needle of limestone
 * rising toward the sky.
 */
export function Obelisk({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 120 320"
      role="presentation"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="obeliskGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e1d0b1" />
          <stop offset="100%" stopColor="#c88f2f" />
        </linearGradient>
      </defs>

      {/* Pyramidion (pyramidion — the pyramidion cap) */}
      <polygon
        points="60,12 40,42 80,42"
        fill="url(#obeliskGrad)"
        className="obelisk__cap"
      />

      {/* Body — drawn line by line */}
      <path
        d="M40 42 L80 42 L80 278 L40 278 Z"
        fill="none"
        stroke="url(#obeliskGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="obelisk__body"
      />

      {/* Base platform */}
      <rect
        x="28"
        y="278"
        width="64"
        height="22"
        rx="4"
        fill="rgba(200,143,47,0.12)"
        className="obelisk__base"
      />

      {/* Hieroglyphic inscription band — two horizontal lines */}
      <line
        x1="40"
        y1="100"
        x2="80"
        y2="100"
        stroke="rgba(200,143,47,0.35)"
        strokeWidth="0.8"
        className="obelisk__band"
      />
      <line
        x1="40"
        y1="120"
        x2="80"
        y2="120"
        stroke="rgba(200,143,47,0.25)"
        strokeWidth="0.6"
        className="obelisk__band"
      />
    </svg>
  );
}

export const obeliskStyles = `
.obelisk__cap {
  opacity: 0;
  animation: drawLine 1.2s ease-out 0.2s forwards;
}
.obelisk__body {
  opacity: 0;
  stroke-dasharray: 600;
  stroke-dashoffset: 600;
  animation: drawLine 1.2s ease-out 0.4s forwards;
}
.obelisk__base {
  opacity: 0;
  animation: drawLine 0.8s ease-out 0.8s forwards;
}
.obelisk__band {
  opacity: 0;
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
  animation: drawLine 0.6s ease-out 1s forwards;
}

@keyframes drawLine {
  to {
    opacity: 1;
    stroke-dashoffset: 0;
  }
}
`;
