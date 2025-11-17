export default function PaletteBrushLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Paint Palette */}
      <defs>
        <linearGradient id="paletteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="50%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id="brushGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>

      {/* Palette Shape */}
      <path
        d="M30 25 C30 15, 40 10, 50 10 C60 10, 70 15, 70 25 C70 30, 68 35, 65 38 L65 50 C65 55, 60 58, 55 58 L45 58 C40 58, 35 55, 35 50 L35 38 C32 35, 30 30, 30 25 Z"
        fill="url(#paletteGradient)"
        opacity="0.9"
      />

      {/* Paint Dots on Palette */}
      <circle cx="42" cy="30" r="4" fill="#ef4444" opacity="0.8" />
      <circle cx="58" cy="30" r="4" fill="#eab308" opacity="0.8" />
      <circle cx="50" cy="42" r="4" fill="#8b5cf6" opacity="0.8" />

      {/* Thumb Hole */}
      <ellipse cx="50" cy="52" rx="6" ry="4" fill="white" opacity="0.3" />

      {/* Paint Brush */}
      <g transform="translate(55, 55) rotate(45)">
        {/* Brush Handle */}
        <rect x="0" y="0" width="4" height="30" rx="2" fill="url(#brushGradient)" />

        {/* Brush Ferrule (metal part) */}
        <rect x="-1" y="28" width="6" height="6" fill="#94a3b8" />

        {/* Brush Bristles */}
        <path
          d="M -1 34 L 0 42 L 2 44 L 4 42 L 5 34 Z"
          fill="#475569"
          opacity="0.8"
        />

        {/* Paint on Brush */}
        <ellipse cx="2" cy="40" rx="2.5" ry="3" fill="#3b82f6" opacity="0.7" />
      </g>

      {/* Paint Stroke Effect */}
      <path
        d="M 70 65 Q 75 70, 80 68 Q 85 66, 88 70"
        stroke="url(#brushGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}
