// Collection of 20 ORGANIC, ROUGH, NATURAL logo variations
// These embrace imperfection, texture, and painterly qualities

interface LogoProps {
  className?: string;
}

// 1. Paint Splatter Mountain
export function SplatterMountainLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="splat1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      {/* 3D Brown depth layers - dragging into distance */}
      <path d="M 20 80 L 27 73 L 33 67 L 40 53 L 43 57 L 47 50 L 53 43 L 57 40 L 63 47 L 69 53 L 73 60 L 80 67 L 87 75 L 93 80"
        fill="#78350f" opacity="0.15" />
      <path d="M 18 78 L 25 71 L 31 65 L 38 51 L 41 55 L 45 48 L 51 41 L 55 38 L 61 45 L 67 51 L 71 58 L 78 65 L 85 73 L 91 78"
        fill="#92400e" opacity="0.2" />
      {/* Rough mountain shape */}
      <path d="M 15 75 L 22 68 L 28 62 L 35 48 L 38 52 L 42 45 L 48 38 L 52 35 L 58 42 L 64 48 L 68 55 L 75 62 L 82 70 L 88 75 L 85 78 L 78 75 L 70 72 L 60 75 L 50 78 L 40 76 L 30 75 L 20 77 Z"
        fill="url(#splat1)" opacity="0.8" />
      {/* Paint splatters with brown shadows */}
      <circle cx="37" cy="52" r="8" fill="#78350f" opacity="0.2" />
      <circle cx="35" cy="50" r="8" fill="#22c55e" opacity="0.6" />
      <circle cx="40" cy="50" r="5" fill="#92400e" opacity="0.15" />
      <circle cx="38" cy="48" r="5" fill="#34d399" opacity="0.5" />
      <ellipse cx="67" cy="57" rx="10" ry="7" fill="#78350f" opacity="0.2" transform="rotate(-20 67 57)" />
      <ellipse cx="65" cy="55" rx="10" ry="7" fill="#0ea5e9" opacity="0.5" transform="rotate(-20 65 55)" />
      <circle cx="52" cy="32" r="4" fill="#92400e" opacity="0.2" />
      <circle cx="50" cy="30" r="4" fill="#fbbf24" opacity="0.7" />
      {/* Drips with depth */}
      <ellipse cx="36" cy="62" rx="2" ry="5" fill="#78350f" opacity="0.3" />
      <ellipse cx="35" cy="60" rx="2" ry="5" fill="#22c55e" opacity="0.4" />
      <ellipse cx="69" cy="67" rx="2" ry="4" fill="#92400e" opacity="0.3" />
      <ellipse cx="68" cy="65" rx="2" ry="4" fill="#0ea5e9" opacity="0.4" />
    </svg>
  );
}

// 2. Messy Tree Blob
export function BlobTreeLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* 3D Brown shadow layers dragging back */}
      <path d="M 52 27 Q 37 30 30 37 Q 24 44 27 52 Q 22 57 27 64 Q 32 72 42 70 Q 47 74 57 72 Q 67 74 74 67 Q 80 60 77 52 Q 80 44 74 37 Q 67 30 52 27 Z"
        fill="#78350f" opacity="0.15" />
      <path d="M 51 26 Q 36 29 29 36 Q 23 43 26 51 Q 21 56 26 63 Q 31 71 41 69 Q 46 73 56 71 Q 66 73 73 66 Q 79 59 76 51 Q 79 43 73 36 Q 66 29 51 26 Z"
        fill="#92400e" opacity="0.2" />
      {/* Organic tree canopy - irregular blob */}
      <path d="M 50 25 Q 35 28 28 35 Q 22 42 25 50 Q 20 55 25 62 Q 30 70 40 68 Q 45 72 55 70 Q 65 72 72 65 Q 78 58 75 50 Q 78 42 72 35 Q 65 28 50 25 Z"
        fill="#10b981" opacity="0.7" />
      <path d="M 48 30 Q 38 32 33 40 Q 30 48 35 55 Q 40 62 50 60 Q 60 62 65 55 Q 70 48 67 40 Q 62 32 48 30 Z"
        fill="#22c55e" opacity="0.6" />
      {/* Rough trunk with brown depth */}
      <path d="M 49 62 L 48 72 L 47 82 L 46 90 L 50 92 L 54 92 L 58 90 L 57 82 L 56 72 L 55 62 Z"
        fill="#78350f" opacity="0.2" />
      <path d="M 47 60 L 46 70 L 45 80 L 44 88 L 48 90 L 52 90 L 56 88 L 55 80 L 54 70 L 53 60 Z"
        fill="#92400e" opacity="0.8" />
      {/* Paint splashes with shadows */}
      <circle cx="42" cy="42" r="3" fill="#78350f" opacity="0.2" />
      <circle cx="40" cy="40" r="3" fill="#fbbf24" opacity="0.6" />
      <circle cx="60" cy="47" r="2" fill="#92400e" opacity="0.2" />
      <circle cx="58" cy="45" r="2" fill="#fbbf24" opacity="0.5" />
      <ellipse cx="54" cy="37" rx="4" ry="3" fill="#78350f" opacity="0.15" />
      <ellipse cx="52" cy="35" rx="4" ry="3" fill="#34d399" opacity="0.4" />
    </svg>
  );
}

// 3. Watercolor Sunrise
export function WatercolorSunriseLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Watercolor sun - irregular */}
      <circle cx="50" cy="35" r="18" fill="#fbbf24" opacity="0.3" />
      <circle cx="48" cy="33" r="15" fill="#f59e0b" opacity="0.4" />
      <circle cx="51" cy="36" r="13" fill="#fbbf24" opacity="0.5" />
      <circle cx="50" cy="35" r="10" fill="#fbbf24" opacity="0.7" />
      {/* Messy rays */}
      <path d="M 50 18 Q 48 10 50 8" stroke="#fbbf24" strokeWidth="3" opacity="0.4" strokeLinecap="round" />
      <path d="M 68 25 Q 73 20 76 18" stroke="#f59e0b" strokeWidth="2" opacity="0.3" strokeLinecap="round" />
      <path d="M 32 25 Q 27 20 24 18" stroke="#fbbf24" strokeWidth="2" opacity="0.3" strokeLinecap="round" />
      {/* Rough mountains */}
      <path d="M 10 70 L 18 62 L 25 55 L 32 48 L 38 55 L 45 60 L 50 58 L 55 62 L 62 52 L 70 60 L 78 65 L 85 70 L 90 70"
        fill="#10b981" opacity="0.6" />
      <path d="M 20 70 L 30 58 L 40 65 L 50 55 L 60 62 L 70 58 L 80 70"
        fill="#0ea5e9" opacity="0.4" />
    </svg>
  );
}

// 4. Brush Stroke Path
export function BrushPathLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="brushPath" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="50%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      {/* Thick, irregular brush stroke */}
      <path d="M 15 75 Q 25 70 35 65 Q 40 60 48 58 Q 55 56 62 52 Q 70 48 78 42 Q 82 38 85 32"
        stroke="url(#brushPath)" strokeWidth="15" opacity="0.7" strokeLinecap="round" fill="none" />
      <path d="M 18 73 Q 28 68 38 63 Q 43 58 51 56 Q 58 54 65 50 Q 73 46 81 40"
        stroke="#10b981" strokeWidth="8" opacity="0.4" strokeLinecap="round" fill="none" />
      {/* Paint drips */}
      <ellipse cx="35" cy="70" rx="3" ry="6" fill="#0ea5e9" opacity="0.5" />
      <ellipse cx="62" cy="55" rx="2" ry="5" fill="#22c55e" opacity="0.4" />
      <ellipse cx="78" cy="45" rx="2" ry="4" fill="#10b981" opacity="0.3" />
      {/* Splatters along path */}
      <circle cx="45" cy="60" r="3" fill="#34d399" opacity="0.5" />
      <circle cx="70" cy="48" r="2" fill="#0ea5e9" opacity="0.4" />
    </svg>
  );
}

// 5. Organic Mountain Layers
export function OrganicLayersLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Multiple irregular mountain layers */}
      <path d="M 5 80 Q 15 75 25 78 Q 35 82 45 77 Q 55 72 65 78 Q 75 83 85 79 Q 92 76 98 80 L 98 90 L 5 90 Z"
        fill="#10b981" opacity="0.3" />
      <path d="M 8 72 L 18 65 L 28 70 L 38 62 L 48 68 L 58 60 L 68 66 L 78 63 L 88 68 L 95 72 L 95 90 L 8 90 Z"
        fill="#22c55e" opacity="0.4" />
      <path d="M 15 65 L 25 55 L 32 58 L 40 50 L 48 54 L 55 48 L 63 52 L 70 50 L 78 55 L 85 62 L 90 65 L 90 90 L 15 90 Z"
        fill="#34d399" opacity="0.5" />
      <path d="M 25 58 L 35 45 L 42 48 L 50 40 L 58 45 L 65 42 L 72 48 L 78 52 L 82 58 L 82 90 L 25 90 Z"
        fill="#0ea5e9" opacity="0.4" />
      {/* Messy sun blob */}
      <circle cx="75" cy="25" r="12" fill="#fbbf24" opacity="0.5" />
      <circle cx="73" cy="23" r="9" fill="#f59e0b" opacity="0.6" />
    </svg>
  );
}

// 6. Splatter Forest
export function SplatterForestLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Tree 1 - rough blob */}
      <circle cx="25" cy="45" r="15" fill="#10b981" opacity="0.6" />
      <circle cx="22" cy="42" r="12" fill="#22c55e" opacity="0.5" />
      <path d="M 23 55 L 22 70 L 20 85 L 24 87 L 28 85 L 27 70 L 26 55" fill="#92400e" opacity="0.7" />

      {/* Tree 2 - bigger, messier */}
      <circle cx="50" cy="40" r="20" fill="#22c55e" opacity="0.7" />
      <circle cx="48" cy="37" r="16" fill="#34d399" opacity="0.6" />
      <ellipse cx="55" cy="43" rx="14" ry="12" fill="#10b981" opacity="0.5" />
      <path d="M 48 55 L 47 72 L 45 88 L 50 90 L 55 88 L 54 72 L 53 55" fill="#92400e" opacity="0.8" />

      {/* Tree 3 - small splatter */}
      <circle cx="75" cy="48" r="13" fill="#34d399" opacity="0.6" />
      <circle cx="73" cy="46" r="10" fill="#10b981" opacity="0.5" />
      <path d="M 73 56 L 72 68 L 70 82 L 74 84 L 78 82 L 77 68 L 76 56" fill="#92400e" opacity="0.7" />

      {/* Paint splatters on ground */}
      <ellipse cx="35" cy="75" rx="5" ry="3" fill="#22c55e" opacity="0.3" />
      <ellipse cx="60" cy="78" rx="6" ry="3" fill="#10b981" opacity="0.3" />
    </svg>
  );
}

// 7. Rough Cloud Mountain
export function RoughCloudLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Fluffy irregular cloud */}
      <circle cx="30" cy="35" r="12" fill="#e0f2fe" opacity="0.8" />
      <circle cx="42" cy="32" r="15" fill="#bae6fd" opacity="0.8" />
      <circle cx="55" cy="33" r="13" fill="#e0f2fe" opacity="0.8" />
      <circle cx="68" cy="36" r="11" fill="#dbeafe" opacity="0.8" />
      <circle cx="38" cy="40" r="10" fill="#bae6fd" opacity="0.7" />
      <circle cx="52" cy="42" r="12" fill="#e0f2fe" opacity="0.7" />
      <circle cx="62" cy="40" r="9" fill="#dbeafe" opacity="0.7" />
      {/* Messy mountains */}
      <path d="M 12 75 L 20 65 L 28 58 L 35 48 L 42 55 L 50 48 L 58 52 L 65 45 L 72 52 L 80 60 L 88 70 L 92 75"
        fill="#10b981" opacity="0.7" />
      <path d="M 25 75 L 35 60 L 45 65 L 50 55 L 55 62 L 65 58 L 75 68 L 82 75"
        fill="#22c55e" opacity="0.5" />
    </svg>
  );
}

// 8. Paint Drip Tree
export function DripTreeLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Drippy canopy */}
      <circle cx="50" cy="35" r="18" fill="#10b981" opacity="0.7" />
      <circle cx="48" cy="33" r="15" fill="#22c55e" opacity="0.6" />
      <circle cx="40" cy="40" r="12" fill="#34d399" opacity="0.5" />
      <circle cx="60" cy="40" r="12" fill="#22c55e" opacity="0.5" />
      {/* Paint drips from canopy */}
      <ellipse cx="40" cy="48" rx="2" ry="8" fill="#10b981" opacity="0.6" />
      <ellipse cx="50" cy="50" rx="3" ry="10" fill="#22c55e" opacity="0.5" />
      <ellipse cx="60" cy="48" rx="2" ry="7" fill="#34d399" opacity="0.4" />
      {/* Rough trunk */}
      <path d="M 46 50 L 45 65 L 44 80 L 48 85 L 52 85 L 56 80 L 55 65 L 54 50" fill="#92400e" opacity="0.8" />
      {/* Ground drips */}
      <ellipse cx="48" cy="88" rx="4" ry="2" fill="#10b981" opacity="0.3" />
    </svg>
  );
}

// 9. Textured Peak
export function TexturedPeakLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="peak1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      {/* Main rough peak */}
      <path d="M 15 80 L 22 70 L 28 62 L 34 54 L 40 48 L 46 40 L 50 32 L 54 40 L 60 48 L 66 54 L 72 62 L 78 70 L 85 80"
        fill="url(#peak1)" opacity="0.8" />
      {/* Texture splotches */}
      <circle cx="35" cy="60" r="4" fill="#22c55e" opacity="0.4" />
      <circle cx="50" cy="50" r="5" fill="#34d399" opacity="0.3" />
      <circle cx="65" cy="60" r="4" fill="#0ea5e9" opacity="0.4" />
      <ellipse cx="42" cy="68" rx="6" ry="4" fill="#10b981" opacity="0.3" />
      <ellipse cx="58" cy="68" rx="5" ry="4" fill="#22c55e" opacity="0.3" />
      {/* Snow cap - messy */}
      <circle cx="50" cy="32" r="6" fill="#f8fafc" opacity="0.7" />
      <circle cx="48" cy="30" r="4" fill="#e2e8f0" opacity="0.6" />
    </svg>
  );
}

// 10. Abstract Nature Splash
export function NatureSplashLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Multiple organic splashes */}
      <circle cx="35" cy="40" r="20" fill="#0ea5e9" opacity="0.4" />
      <circle cx="50" cy="45" r="22" fill="#22c55e" opacity="0.5" />
      <circle cx="65" cy="50" r="18" fill="#10b981" opacity="0.4" />
      <ellipse cx="42" cy="55" rx="15" ry="20" fill="#34d399" opacity="0.3" transform="rotate(-30 42 55)" />
      <ellipse cx="58" cy="48" rx="18" ry="12" fill="#0ea5e9" opacity="0.3" transform="rotate(25 58 48)" />
      {/* Small accent splatters */}
      <circle cx="28" cy="50" r="5" fill="#fbbf24" opacity="0.6" />
      <circle cx="72" cy="55" r="4" fill="#f59e0b" opacity="0.5" />
      <circle cx="50" cy="30" r="6" fill="#22c55e" opacity="0.4" />
    </svg>
  );
}

// 11. Flowing River
export function FlowingRiverLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Banks - rough edges */}
      <path d="M 10 50 Q 15 45 20 48 Q 25 52 30 50 Q 35 47 40 50 Q 45 54 50 52 Q 55 50 60 52 Q 65 55 70 53 Q 75 50 80 52 Q 85 55 90 53 L 90 90 L 10 90 Z"
        fill="#10b981" opacity="0.5" />
      {/* Flowing water - multiple layers */}
      <path d="M 25 55 Q 35 58 45 55 Q 55 52 65 55 Q 75 58 85 56"
        stroke="#0ea5e9" strokeWidth="12" opacity="0.4" strokeLinecap="round" fill="none" />
      <path d="M 25 60 Q 35 63 45 60 Q 55 57 65 60 Q 75 63 85 61"
        stroke="#3b82f6" strokeWidth="8" opacity="0.5" strokeLinecap="round" fill="none" />
      <path d="M 28 65 Q 38 68 48 65 Q 58 62 68 65 Q 78 68 85 66"
        stroke="#0ea5e9" strokeWidth="6" opacity="0.3" strokeLinecap="round" fill="none" />
      {/* Foam/splash spots */}
      <circle cx="40" cy="58" r="3" fill="#e0f2fe" opacity="0.7" />
      <circle cx="60" cy="60" r="2" fill="#bae6fd" opacity="0.6" />
    </svg>
  );
}

// 12. Messy Pine
export function MessyPineLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Bottom layer - rough */}
      <path d="M 50 20 L 58 35 L 63 38 L 68 45 L 75 52 L 78 58 L 82 65 L 85 70 L 15 70 L 18 65 L 22 58 L 25 52 L 32 45 L 37 38 L 42 35 Z"
        fill="#10b981" opacity="0.7" />
      {/* Middle layer */}
      <path d="M 50 22 L 56 32 L 60 36 L 64 42 L 68 48 L 72 55 L 28 55 L 32 48 L 36 42 L 40 36 L 44 32 Z"
        fill="#22c55e" opacity="0.6" />
      {/* Top layer */}
      <path d="M 50 24 L 54 30 L 58 35 L 62 42 L 38 42 L 42 35 L 46 30 Z"
        fill="#34d399" opacity="0.5" />
      {/* Rough trunk */}
      <path d="M 46 70 L 45 82 L 48 88 L 52 88 L 55 82 L 54 70" fill="#92400e" opacity="0.8" />
      {/* Paint splotches */}
      <circle cx="40" cy="50" r="3" fill="#fbbf24" opacity="0.5" />
      <circle cx="60" cy="48" r="2" fill="#f59e0b" opacity="0.4" />
    </svg>
  );
}

// 13. Happy Blob Mountain
export function BlobMountainLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Main blob mountain */}
      <path d="M 15 75 Q 18 70 22 65 Q 28 58 35 50 Q 40 45 48 40 Q 52 38 56 40 Q 62 45 68 50 Q 75 58 80 65 Q 85 70 88 75 Q 85 78 80 77 Q 70 75 60 77 Q 50 79 40 77 Q 30 75 20 77 Q 17 78 15 75 Z"
        fill="#10b981" opacity="0.8" />
      {/* Lighter overlay blob */}
      <path d="M 25 75 Q 30 68 38 60 Q 45 54 50 50 Q 55 54 62 60 Q 70 68 75 75 Q 72 77 65 76 Q 55 75 50 76 Q 45 75 35 76 Q 28 77 25 75 Z"
        fill="#22c55e" opacity="0.5" />
      {/* Face elements */}
      <circle cx="42" cy="58" r="4" fill="#1e293b" opacity="0.8" />
      <circle cx="58" cy="58" r="4" fill="#1e293b" opacity="0.8" />
      <path d="M 40 66 Q 45 70 50 71 Q 55 70 60 66"
        stroke="#1e293b" strokeWidth="3" opacity="0.7" strokeLinecap="round" fill="none" />
      {/* Messy sun */}
      <circle cx="75" cy="28" r="8" fill="#fbbf24" opacity="0.6" />
      <circle cx="73" cy="26" r="6" fill="#f59e0b" opacity="0.7" />
    </svg>
  );
}

// 14. Ink Splatter Landscape
export function InkSplatterLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Large background splatter */}
      <circle cx="50" cy="55" r="35" fill="#10b981" opacity="0.2" />
      <circle cx="45" cy="50" r="28" fill="#22c55e" opacity="0.3" />
      {/* Mountain ink splatters */}
      <ellipse cx="30" cy="65" rx="18" ry="25" fill="#34d399" opacity="0.6" />
      <ellipse cx="50" cy="60" rx="22" ry="30" fill="#10b981" opacity="0.7" />
      <ellipse cx="70" cy="65" rx="18" ry="25" fill="#22c55e" opacity="0.6" />
      {/* Small accent splats */}
      <circle cx="35" cy="70" r="5" fill="#0ea5e9" opacity="0.5" />
      <circle cx="65" cy="70" r="4" fill="#0ea5e9" opacity="0.4" />
      <circle cx="50" cy="40" r="6" fill="#fbbf24" opacity="0.6" />
      <circle cx="52" cy="38" r="3" fill="#f59e0b" opacity="0.5" />
      {/* Drips */}
      <ellipse cx="30" cy="82" rx="2" ry="5" fill="#10b981" opacity="0.4" />
      <ellipse cx="70" cy="82" rx="2" ry="4" fill="#22c55e" opacity="0.3" />
    </svg>
  );
}

// 15. Organic Growth Rings
export function OrganicRingsLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Irregular growth rings */}
      <ellipse cx="50" cy="50" rx="40" ry="38" fill="none" stroke="#10b981" strokeWidth="2.5" opacity="0.3" />
      <ellipse cx="52" cy="48" rx="32" ry="30" fill="none" stroke="#22c55e" strokeWidth="2" opacity="0.4" transform="rotate(5 50 50)" />
      <ellipse cx="48" cy="52" rx="24" ry="22" fill="none" stroke="#34d399" strokeWidth="2" opacity="0.5" transform="rotate(-8 50 50)" />
      <ellipse cx="51" cy="49" rx="16" ry="15" fill="none" stroke="#10b981" strokeWidth="3" opacity="0.6" transform="rotate(3 50 50)" />
      <ellipse cx="49" cy="51" rx="8" ry="7" fill="#22c55e" opacity="0.7" transform="rotate(-5 50 50)" />
      {/* Center blob */}
      <circle cx="50" cy="50" r="4" fill="#10b981" opacity="0.8" />
      {/* Rough bark texture spots */}
      <circle cx="35" cy="45" r="2" fill="#92400e" opacity="0.4" />
      <circle cx="65" cy="55" r="2" fill="#92400e" opacity="0.3" />
      <circle cx="50" cy="30" r="1.5" fill="#92400e" opacity="0.3" />
    </svg>
  );
}

// 16. Loose Brush Landscape
export function LooseBrushLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Sky wash */}
      <rect x="0" y="0" width="100" height="50" fill="#0ea5e9" opacity="0.2" />
      {/* Loose mountain strokes */}
      <path d="M 15 70 Q 25 60 35 55 Q 42 50 50 48 Q 58 50 65 55 Q 75 60 85 70"
        stroke="#10b981" strokeWidth="20" opacity="0.6" strokeLinecap="round" fill="none" />
      <path d="M 20 72 Q 30 64 40 60 Q 48 56 50 55 Q 52 56 60 60 Q 70 64 80 72"
        stroke="#22c55e" strokeWidth="14" opacity="0.5" strokeLinecap="round" fill="none" />
      {/* Ground wash */}
      <rect x="0" y="75" width="100" height="25" fill="#34d399" opacity="0.3" />
      {/* Sun blob */}
      <circle cx="75" cy="25" r="10" fill="#fbbf24" opacity="0.7" />
      <circle cx="73" cy="23" r="7" fill="#f59e0b" opacity="0.6" />
    </svg>
  );
}

// 17. Splatter Compass
export function SplatterCompassLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Outer ring - rough */}
      <circle cx="50" cy="50" r="38" fill="none" stroke="#0ea5e9" strokeWidth="3" opacity="0.4" />
      <circle cx="50" cy="50" r="35" fill="none" stroke="#22c55e" strokeWidth="2" opacity="0.3" />
      {/* Background wash */}
      <circle cx="50" cy="50" r="32" fill="#e0f2fe" opacity="0.2" />
      {/* Directional splatters */}
      <ellipse cx="50" cy="18" rx="8" ry="12" fill="#10b981" opacity="0.7" />
      <ellipse cx="82" cy="50" rx="12" ry="8" fill="#22c55e" opacity="0.6" />
      <ellipse cx="50" cy="82" rx="8" ry="12" fill="#34d399" opacity="0.6" />
      <ellipse cx="18" cy="50" rx="12" ry="8" fill="#0ea5e9" opacity="0.6" />
      {/* Center blob */}
      <circle cx="50" cy="50" r="8" fill="#1e293b" opacity="0.6" />
      <circle cx="50" cy="50" r="5" fill="#fbbf24" opacity="0.8" />
      {/* Accent dots */}
      <circle cx="50" cy="30" r="3" fill="#10b981" opacity="0.5" />
      <circle cx="70" cy="50" r="3" fill="#22c55e" opacity="0.5" />
    </svg>
  );
}

// 18. Fuzzy Tree Silhouette
export function FuzzyTreeLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Fuzzy canopy layers */}
      <circle cx="50" cy="40" r="22" fill="#10b981" opacity="0.4" />
      <circle cx="48" cy="38" r="20" fill="#22c55e" opacity="0.5" />
      <circle cx="52" cy="42" r="18" fill="#34d399" opacity="0.4" />
      <circle cx="40" cy="45" r="14" fill="#10b981" opacity="0.3" />
      <circle cx="60" cy="45" r="14" fill="#22c55e" opacity="0.3" />
      <circle cx="50" cy="35" r="16" fill="#10b981" opacity="0.5" />
      {/* Soft trunk */}
      <ellipse cx="50" cy="70" rx="6" ry="25" fill="#92400e" opacity="0.6" />
      <ellipse cx="50" cy="70" rx="4" ry="22" fill="#78350f" opacity="0.5" />
      {/* Light spots (sun through leaves) */}
      <circle cx="45" cy="38" r="2" fill="#fbbf24" opacity="0.6" />
      <circle cx="55" cy="42" r="2" fill="#fef3c7" opacity="0.5" />
      <circle cx="50" cy="45" r="1.5" fill="#fbbf24" opacity="0.4" />
    </svg>
  );
}

// 19. Paint Pour Mountain
export function PaintPourLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="pour1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="50%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      {/* Main mountain - paint pour effect */}
      <path d="M 20 80 Q 25 75 30 68 Q 35 60 42 52 Q 46 48 50 45 Q 54 48 58 52 Q 65 60 70 68 Q 75 75 80 80 L 50 80 Z"
        fill="url(#pour1)" opacity="0.8" />
      {/* Dripping layers */}
      <ellipse cx="35" cy="80" rx="3" ry="8" fill="#0ea5e9" opacity="0.6" />
      <ellipse cx="50" cy="82" rx="4" ry="10" fill="#22c55e" opacity="0.5" />
      <ellipse cx="65" cy="80" rx="3" ry="7" fill="#10b981" opacity="0.6" />
      {/* Color pools at base */}
      <ellipse cx="30" cy="87" rx="6" ry="3" fill="#0ea5e9" opacity="0.4" />
      <ellipse cx="50" cy="89" rx="8" ry="3" fill="#22c55e" opacity="0.4" />
      <ellipse cx="70" cy="87" rx="6" ry="3" fill="#10b981" opacity="0.4" />
    </svg>
  );
}

// 20. Organic Leaf Cluster
export function LeafClusterLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Leaf shapes - organic and overlapping */}
      <ellipse cx="40" cy="45" rx="16" ry="22" fill="#10b981" opacity="0.6" transform="rotate(-25 40 45)" />
      <ellipse cx="50" cy="42" rx="18" ry="24" fill="#22c55e" opacity="0.6" transform="rotate(5 50 42)" />
      <ellipse cx="60" cy="48" rx="16" ry="22" fill="#34d399" opacity="0.6" transform="rotate(30 60 48)" />
      <ellipse cx="48" cy="55" rx="15" ry="20" fill="#10b981" opacity="0.5" transform="rotate(-10 48 55)" />
      <ellipse cx="52" cy="52" rx="14" ry="19" fill="#22c55e" opacity="0.5" transform="rotate(15 52 52)" />
      {/* Stems - rough lines */}
      <path d="M 50 60 Q 48 70 45 80" stroke="#92400e" strokeWidth="3" opacity="0.5" strokeLinecap="round" />
      <path d="M 50 60 Q 50 72 50 85" stroke="#78350f" strokeWidth="3" opacity="0.6" strokeLinecap="round" />
      <path d="M 50 60 Q 52 70 55 80" stroke="#92400e" strokeWidth="3" opacity="0.5" strokeLinecap="round" />
      {/* Vein details - subtle */}
      <path d="M 42 40 L 38 45" stroke="#10b981" strokeWidth="1" opacity="0.3" />
      <path d="M 50 37 L 50 47" stroke="#22c55e" strokeWidth="1" opacity="0.3" />
      <path d="M 58 44 L 62 48" stroke="#34d399" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}

export const organicLogoVariations = [
  { id: 21, name: "Splatter Mountain", description: "Paint drips and rough peaks", component: SplatterMountainLogo },
  { id: 22, name: "Messy Tree Blob", description: "Organic irregular canopy", component: BlobTreeLogo },
  { id: 23, name: "Watercolor Sunrise", description: "Soft blended sun and peaks", component: WatercolorSunriseLogo },
  { id: 24, name: "Brush Path", description: "Thick paint stroke trail", component: BrushPathLogo },
  { id: 25, name: "Organic Layers", description: "Natural mountain waves", component: OrganicLayersLogo },
  { id: 26, name: "Splatter Forest", description: "Three messy trees", component: SplatterForestLogo },
  { id: 27, name: "Rough Cloud", description: "Fluffy irregular clouds", component: RoughCloudLogo },
  { id: 28, name: "Drip Tree", description: "Paint dripping canopy", component: DripTreeLogo },
  { id: 29, name: "Textured Peak", description: "Rough mountain texture", component: TexturedPeakLogo },
  { id: 30, name: "Nature Splash", description: "Overlapping organic forms", component: NatureSplashLogo },
  { id: 31, name: "Flowing River", description: "Loose water strokes", component: FlowingRiverLogo },
  { id: 32, name: "Messy Pine", description: "Rough evergreen layers", component: MessyPineLogo },
  { id: 33, name: "Blob Mountain", description: "Happy friendly peak", component: BlobMountainLogo },
  { id: 34, name: "Ink Splatter", description: "Abstract landscape splash", component: InkSplatterLogo },
  { id: 35, name: "Organic Rings", description: "Irregular growth circles", component: OrganicRingsLogo },
  { id: 36, name: "Loose Brush", description: "Fast expressive strokes", component: LooseBrushLogo },
  { id: 37, name: "Splatter Compass", description: "Rough directional marks", component: SplatterCompassLogo },
  { id: 38, name: "Fuzzy Tree", description: "Soft edged silhouette", component: FuzzyTreeLogo },
  { id: 39, name: "Paint Pour", description: "Dripping color mountain", component: PaintPourLogo },
  { id: 40, name: "Leaf Cluster", description: "Organic overlapping leaves", component: LeafClusterLogo },
];
