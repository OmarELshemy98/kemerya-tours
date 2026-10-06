import type { SVGProps } from "react";

/**
 * Animated Aten (sun-disk) — the ancient Egyptian solar symbol.
 * The disk slowly pulses and the rays breathe, suggesting the passage of time.
 */
export function SunDisk({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 200 200"
      role="presentation"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <defs>
        <radialGradient
          id="sunDiskGlow"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop offset="0%" stopColor="#c88f2f" />
          <stop offset="100%" stopColor="#054855" />
        </radialGradient>
      </defs>

      {/* Subtle outer aura rings */}
      <circle
        cx="100"
        cy="100"
        r="92"
        fill="none"
        stroke="rgba(200,143,47,0.08)"
        strokeWidth="1"
        className="sun-disk__aura"
      />
      <circle
        cx="100"
        cy="100"
        r="84"
        fill="none"
        stroke="rgba(200,143,47,0.05)"
        strokeWidth="1"
        className="sun-disk__aura"
      />

      {/* The disk itself */}
      <circle
        cx="100"
        cy="100"
        r="38"
        fill="url(#sunDiskGlow)"
        className="sun-disk__glow"
      />

      {/* Uraeus (royal cobra) stylised */}
      <path
        d="M100 52 C92 58, 82 62, 76 68 C80 66, 86 64, 92 64 C96 64, 100 65, 104 67 C108 65, 114 66, 118 64 C112 60, 104 57, 100 52 Z"
        fill="#054855"
        opacity="0.85"
      />

      {/* Sun rays — 16 stylised rays */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 22.5 * Math.PI) / 180;
        const innerR = 36;
        const outerR = 56;
        const x1 = 100 + innerR * Math.cos(angle);
        const y1 = 100 + innerR * Math.sin(angle);
        const x2 = 100 + outerR * Math.cos(angle);
        const y2 = 100 + outerR * Math.sin(angle);
        const isLong = i % 2 === 0;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#c88f2f"
            strokeWidth={isLong ? "3" : "1.5"}
            strokeLinecap="round"
            opacity="0.75"
            className="sun-disk__ray"
            style={{ animationDelay: `${i * 0.12}s` }}
          />
        );
      })}
    </svg>
  );
}

/**
 * Inline styles scoped to the SunDisk component.
 * Import this CSS string wherever you render <SunDisk>.
 */
export const sunDiskStyles = `
.sun-disk__glow {
  animation: sunPulse 10s ease-in-out infinite;
}
.sun-disk__ray {
  animation: rayBreathe 10s ease-in-out infinite;
}
.sun-disk__aura {
  animation: rayBreathe 12s ease-in-out infinite;
}

@keyframes sunPulse {
  0%, 100% { transform: scale(1); opacity: 0.92; }
  50% { transform: scale(1.05); opacity: 1; }
}
@keyframes rayBreathe {
  0%, 100% { opacity: 0.6; transform: rotate(0deg); }
  50% { opacity: 0.9; transform: rotate(0.5deg); }
}
`;
