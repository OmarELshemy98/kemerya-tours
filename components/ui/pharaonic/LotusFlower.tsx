import type { SVGProps } from "react";

/**
 * Animated lotus flower — a sacred Egyptian symbol of rebirth and creation.
 * Petals unfurl one by one, then the bloom slowly breathes.
 */
export function LotusFlower({ className, ...props }: SVGProps<SVGSVGElement>) {
  const petalPaths = [
    "M100 140 C88 130, 78 118, 80 104 C82 90, 92 80, 100 82 C108 80, 118 90, 120 104 C122 118, 112 130, 100 140 Z",
    "M100 140 C112 130, 122 118, 120 104 C118 90, 108 80, 100 82 C92 80, 82 90, 80 104 C78 118, 88 130, 100 140 Z",
    "M100 138 C86 138, 70 128, 68 110 C70 94, 84 82, 96 80 C104 78, 112 88, 114 104 C116 120, 108 130, 100 138 Z",
    "M100 138 C114 138, 130 128, 132 110 C130 94, 116 82, 104 80 C96 78, 88 88, 86 104 C84 120, 92 130, 100 138 Z",
    "M100 136 C90 136, 78 126, 76 108 C78 94, 90 84, 100 84 C110 84, 122 94, 124 108 C122 126, 110 136, 100 136 Z",
  ];

  return (
    <svg
      viewBox="0 0 200 200"
      role="presentation"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="lotusGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e1d0b1" />
          <stop offset="100%" stopColor="#c88f2f" />
        </linearGradient>
      </defs>

      {/* Outer petals (unfold first) */}
      {petalPaths.slice(0, 3).map((d, i) => (
        <path
          key={`outer-${i}`}
          d={d}
          fill="none"
          stroke="url(#lotusGrad)"
          strokeWidth="1.2"
          strokeLinecap="round"
          className="lotus__petal lotus__petal--outer"
          style={{ animationDelay: `${0.2 + i * 0.3}s` }}
        />
      ))}

      {/* Inner petals */}
      {petalPaths.slice(3).map((d, i) => (
        <path
          key={`inner-${i}`}
          d={d}
          fill="none"
          stroke="url(#lotusGrad)"
          strokeWidth="1"
          strokeLinecap="round"
          className="lotus__petal lotus__petal--inner"
          style={{ animationDelay: `${0.8 + i * 0.3}s` }}
        />
      ))}

      {/* Centre — the golden heart */}
      <circle
        cx="100"
        cy="138"
        r="10"
        fill="#c88f2f"
        opacity="0"
        className="lotus__centre"
      />

      {/* Leaf stem */}
      <path
        d="M100 148 C96 160, 94 175, 100 185 C106 175, 104 160, 100 148 Z"
        fill="rgba(5,72,85,0.3)"
        className="lotus__stem"
      />
    </svg>
  );
}

export const lotusStyles = `
.lotus__petal {
  opacity: 0;
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: drawLine 1s ease-out forwards;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
}
.lotus__petal--outer {
  animation-delay: calc(0.2s * var(--i, 0));
}
.lotus__centre {
  animation: centreGlow 8s ease-in-out 2.5s forwards;
}
.lotus__stem {
  opacity: 0;
  animation: drawLine 0.6s ease-out 1.8s forwards;
}

@keyframes drawLine {
  to { opacity: 1; stroke-dashoffset: 0; }
}
@keyframes centreGlow {
  0% { opacity: 0; transform: scale(0.5); }
  70% { opacity: 0.9; transform: scale(1.1); }
  100% { opacity: 0.9; transform: scale(1); }
}
`;
