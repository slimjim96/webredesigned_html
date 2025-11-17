export default function BrushStrokeLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Main Brush Stroke Gradient */}
        <linearGradient id="brushMainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="40%" stopColor="#0ea5e9" />
          <stop offset="70%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>

        {/* Secondary Accent Gradient */}
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" opacity="0.6" />
          <stop offset="100%" stopColor="#10b981" opacity="0.6" />
        </linearGradient>

        {/* Dark mode version */}
        <linearGradient id="brushDarkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="50%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>

      {/* Main "W" Brush Stroke - Dynamic and flowing */}
      <path
        d="M 15 30 Q 20 25, 25 35 Q 28 45, 32 50 Q 35 55, 40 48 Q 45 40, 50 55 Q 55 70, 60 52 Q 65 35, 70 45 Q 75 55, 82 40"
        stroke="url(#brushMainGradient)"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />

      {/* Inner Highlight Stroke - adds depth */}
      <path
        d="M 18 32 Q 23 28, 27 37 Q 30 46, 34 51 Q 37 55, 41 50 Q 46 43, 50 56 Q 54 68, 59 54 Q 63 40, 68 47 Q 72 54, 78 42"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.3"
      />

      {/* Bottom Accent Stroke - gives painted texture */}
      <path
        d="M 15 32 Q 25 40, 35 52 Q 50 72, 70 47 Q 75 40, 82 42"
        stroke="url(#accentGradient)"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />

      {/* Paint Drip Detail - adds artistic flair */}
      <ellipse cx="50" cy="72" rx="4" ry="6" fill="url(#brushMainGradient)" opacity="0.7" />
      <ellipse cx="48" cy="78" rx="2" ry="3" fill="url(#brushMainGradient)" opacity="0.5" />

      {/* Texture Dots - happy little accidents */}
      <circle cx="22" cy="32" r="1.5" fill="#3b82f6" opacity="0.6" />
      <circle cx="45" cy="58" r="1.5" fill="#06b6d4" opacity="0.6" />
      <circle cx="72" cy="48" r="1.5" fill="#10b981" opacity="0.6" />
    </svg>
  );
}
