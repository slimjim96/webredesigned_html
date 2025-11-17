// 20 REALISTIC organic logos with gradients, randomization, and brown 3D depth
// These look like ACTUAL nature - painted with realistic light, shadow, and texture

interface LogoProps {
  className?: string;
}

// 1. Realistic Mountain Ridge with Atmospheric Depth
export function SplatterMountainLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        {/* Brown depth gradient */}
        <linearGradient id="brownDepth1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#78350f" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#92400e" stopOpacity="0.3" />
        </linearGradient>
        {/* Realistic mountain gradient with brown base */}
        <linearGradient id="mountainReal1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
          <stop offset="40%" stopColor="#22c55e" stopOpacity="0.7" />
          <stop offset="70%" stopColor="#78350f" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#92400e" stopOpacity="0.6" />
        </linearGradient>
        {/* Shadow side gradient */}
        <linearGradient id="mountainShadow1" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0.5" />
        </linearGradient>
        {/* Sunlit gradient */}
        <radialGradient id="sunGlow1" cx="50%" cy="20%">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#92400e" stopOpacity="0.1" />
        </radialGradient>
      </defs>

      {/* Far distance - atmospheric perspective */}
      <path d="M 5 75 L 20 65 L 35 70 L 50 68 L 65 72 L 80 67 L 95 75"
        fill="url(#brownDepth1)" opacity="0.3" />

      {/* Mid distance peaks - brown fade */}
      <path d="M 10 72 L 25 58 L 32 62 L 45 54 L 58 60 L 70 56 L 85 68 L 90 72"
        fill="url(#brownDepth1)" opacity="0.5" />

      {/* Main mountain - realistic with ridges */}
      <path d="M 15 75 L 22 68 L 28 62 L 32 58 L 35 48 L 38 52 L 42 45 L 45 41 L 48 38 L 52 35 L 55 38 L 58 42 L 62 48 L 64 52 L 68 55 L 72 60 L 75 62 L 82 70 L 88 75"
        fill="url(#mountainReal1)" />

      {/* Shadow side - realistic shading */}
      <path d="M 52 35 L 55 38 L 58 42 L 62 48 L 64 52 L 68 55 L 72 60 L 75 62 L 82 70 L 88 75 L 85 75 L 78 68 L 70 60 L 65 55 L 60 50 L 55 42 L 52 35"
        fill="url(#mountainShadow1)" />

      {/* Sunlit peaks */}
      <circle cx="50" cy="30" r="25" fill="url(#sunGlow1)" />

      {/* Rock texture details - randomized */}
      <circle cx="35" cy="55" r="2" fill="#78350f" opacity="0.4" />
      <circle cx="42" cy="50" r="1.5" fill="#92400e" opacity="0.3" />
      <circle cx="60" cy="58" r="2" fill="#78350f" opacity="0.35" />
      <circle cx="70" cy="65" r="1.5" fill="#92400e" opacity="0.4" />

      {/* Snow highlights */}
      <path d="M 48 38 L 52 35 L 55 38 L 53 37 L 50 36 Z"
        fill="#f8fafc" opacity="0.7" />
    </svg>
  );
}

// 2. Realistic Tree with Bark Texture
export function BlobTreeLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        {/* Realistic foliage gradient */}
        <radialGradient id="foliage1" cx="40%" cy="30%">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#22c55e" stopOpacity="0.8" />
          <stop offset="70%" stopColor="#10b981" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0.3" />
        </radialGradient>
        {/* Bark texture gradient */}
        <linearGradient id="bark1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#78350f" />
          <stop offset="30%" stopColor="#92400e" />
          <stop offset="50%" stopColor="#78350f" />
          <stop offset="70%" stopColor="#451a03" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
        {/* Shadow under tree */}
        <radialGradient id="treeShadow1" cx="50%" cy="90%">
          <stop offset="0%" stopColor="#1e293b" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0.1" />
        </radialGradient>
      </defs>

      {/* Ground shadow - brown depth */}
      <ellipse cx="50" cy="88" rx="28" ry="8" fill="url(#treeShadow1)" />

      {/* Depth layers behind tree */}
      <circle cx="52" cy="37" r="19" fill="#78350f" opacity="0.15" />
      <circle cx="51" cy="36" r="18" fill="#92400e" opacity="0.2" />

      {/* Main canopy - realistic foliage */}
      <circle cx="50" cy="35" r="18" fill="url(#foliage1)" />

      {/* Light patches - randomized sunlight through leaves */}
      <circle cx="42" cy="30" r="4" fill="#fef3c7" opacity="0.5" />
      <circle cx="55" cy="33" r="3" fill="#fef3c7" opacity="0.4" />
      <circle cx="48" cy="40" r="3.5" fill="#fbbf24" opacity="0.3" />

      {/* Canopy detail clusters */}
      <circle cx="45" cy="28" r="6" fill="#10b981" opacity="0.6" />
      <circle cx="55" cy="38" r="7" fill="#22c55e" opacity="0.5" />
      <circle cx="52" cy="30" r="5" fill="#34d399" opacity="0.6" />

      {/* Trunk with bark texture - brown depth shadow */}
      <rect x="46" y="50" width="8" height="38" rx="2" fill="#78350f" opacity="0.3" />
      <rect x="47" y="48" width="6" height="40" rx="2" fill="url(#bark1)" />

      {/* Bark texture lines - randomized */}
      <path d="M 48 55 Q 50 57 52 55" stroke="#451a03" strokeWidth="0.5" opacity="0.6" />
      <path d="M 48 65 Q 50 63 52 65" stroke="#451a03" strokeWidth="0.5" opacity="0.5" />
      <path d="M 47 75 Q 50 77 53 75" stroke="#451a03" strokeWidth="0.5" opacity="0.6" />
      <path d="M 48 82 Q 50 80 52 82" stroke="#451a03" strokeWidth="0.5" opacity="0.5" />
    </svg>
  );
}

// 3. Realistic Sunrise with Atmospheric Gradients
export function WatercolorSunriseLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        {/* Realistic sun gradient */}
        <radialGradient id="realisticSun" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="30%" stopColor="#fbbf24" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ea580c" stopOpacity="0.2" />
        </radialGradient>
        {/* Sky gradient with brown horizon */}
        <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0.4" />
        </linearGradient>
        {/* Mountain silhouette gradient */}
        <linearGradient id="mountainSil" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#78350f" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#92400e" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* Sky atmosphere */}
      <rect x="0" y="0" width="100" height="75" fill="url(#skyGrad)" />

      {/* Sun with atmospheric glow */}
      <circle cx="50" cy="35" r="22" fill="url(#realisticSun)" opacity="0.8" />
      <circle cx="50" cy="35" r="15" fill="#fbbf24" opacity="0.9" />
      <circle cx="50" cy="35" r="10" fill="#fef3c7" />

      {/* Sun rays - randomized lengths */}
      <path d="M 50 12 L 50 5" stroke="#fbbf24" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
      <path d="M 70 20 L 77 13" stroke="#f59e0b" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
      <path d="M 78 35 L 85 35" stroke="#fbbf24" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
      <path d="M 30 20 L 23 13" stroke="#f59e0b" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
      <path d="M 22 35 L 15 35" stroke="#fbbf24" strokeWidth="2" opacity="0.5" strokeLinecap="round" />

      {/* Far mountains - atmospheric perspective */}
      <path d="M 5 68 L 20 58 L 35 62 L 50 60 L 65 64 L 80 60 L 95 68"
        fill="#78350f" opacity="0.3" />

      {/* Mid mountains */}
      <path d="M 10 70 L 25 56 L 40 60 L 50 55 L 60 58 L 75 54 L 90 70"
        fill="#92400e" opacity="0.5" />

      {/* Front mountains - realistic silhouette */}
      <path d="M 10 75 L 18 65 L 25 60 L 32 52 L 38 58 L 45 62 L 50 60 L 55 64 L 62 56 L 70 62 L 78 68 L 85 72 L 90 75"
        fill="url(#mountainSil)" />
    </svg>
  );
}

// 4. Realistic Path with Perspective Depth
export function BrushPathLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        {/* Path gradient with brown earth */}
        <linearGradient id="pathGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#92400e" stopOpacity="0.8" />
          <stop offset="30%" stopColor="#78350f" stopOpacity="0.6" />
          <stop offset="60%" stopColor="#0ea5e9" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0.7" />
        </linearGradient>
        {/* Ground gradient */}
        <linearGradient id="ground" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Ground texture */}
      <rect x="0" y="50" width="100" height="50" fill="url(#ground)" />

      {/* Path edges - brown depth */}
      <path d="M 12 78 Q 22 72 32 68 Q 42 64 50 62 Q 60 60 68 56 Q 76 52 82 46 Q 86 42 88 36"
        stroke="#78350f" strokeWidth="18" opacity="0.3" strokeLinecap="round" fill="none" />
      <path d="M 14 76 Q 24 70 34 66 Q 44 62 52 60 Q 62 58 70 54 Q 78 50 84 44"
        stroke="#92400e" strokeWidth="16" opacity="0.4" strokeLinecap="round" fill="none" />

      {/* Main path - realistic gradient */}
      <path d="M 15 75 Q 25 69 35 65 Q 45 61 53 59 Q 63 57 71 53 Q 79 49 85 43"
        stroke="url(#pathGrad)" strokeWidth="14" opacity="0.8" strokeLinecap="round" fill="none" />

      {/* Path highlights - worn center */}
      <path d="M 18 74 Q 28 68 38 64 Q 48 60 56 58 Q 66 56 74 52"
        stroke="#f59e0b" strokeWidth="4" opacity="0.3" strokeLinecap="round" fill="none" />

      {/* Grass tufts along path - randomized */}
      <circle cx="28" cy="72" r="2" fill="#22c55e" opacity="0.6" />
      <circle cx="45" cy="64" r="1.5" fill="#10b981" opacity="0.5" />
      <circle cx="62" cy="58" r="2" fill="#34d399" opacity="0.6" />
      <circle cx="75" cy="52" r="1.5" fill="#22c55e" opacity="0.5" />

      {/* Pebbles on path */}
      <circle cx="35" cy="68" r="1" fill="#78350f" opacity="0.7" />
      <circle cx="52" cy="61" r="0.8" fill="#92400e" opacity="0.6" />
      <circle cx="68" cy="55" r="1" fill="#78350f" opacity="0.7" />
    </svg>
  );
}

// 5. Realistic Layered Landscape with Depth
export function OrganicLayersLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        {/* Sky to horizon gradient */}
        <linearGradient id="skyHorizon" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0.3" />
        </linearGradient>
        {/* Far hills gradient */}
        <linearGradient id="farHills" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#78350f" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#92400e" stopOpacity="0.5" />
        </linearGradient>
        {/* Mid hills gradient */}
        <linearGradient id="midHills" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0.7" />
        </linearGradient>
        {/* Near hills gradient */}
        <linearGradient id="nearHills" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#92400e" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect x="0" y="0" width="100" height="70" fill="url(#skyHorizon)" />

      {/* Sun */}
      <circle cx="75" cy="25" r="12" fill="#fbbf24" opacity="0.7" />
      <circle cx="75" cy="25" r="9" fill="#fef3c7" opacity="0.8" />

      {/* Farthest layer - atmospheric */}
      <path d="M 0 75 Q 20 72 40 75 Q 60 78 80 74 Q 90 72 100 75 L 100 100 L 0 100 Z"
        fill="url(#farHills)" />

      {/* Far layer */}
      <path d="M 0 70 L 15 65 L 30 68 L 45 63 L 60 67 L 75 64 L 90 68 L 100 70 L 100 100 L 0 100 Z"
        fill="#78350f" opacity="0.4" />

      {/* Mid layer - realistic hills */}
      <path d="M 0 68 L 20 58 L 35 62 L 50 55 L 65 60 L 80 57 L 95 65 L 100 68 L 100 100 L 0 100 Z"
        fill="url(#midHills)" />

      {/* Near layer - detailed foreground */}
      <path d="M 0 65 L 25 52 L 40 56 L 55 50 L 70 54 L 85 52 L 100 60 L 100 100 L 0 100 Z"
        fill="url(#nearHills)" />

      {/* Grass texture on near hill - randomized */}
      <path d="M 30 58 L 30 55" stroke="#22c55e" strokeWidth="0.5" opacity="0.6" />
      <path d="M 35 59 L 35 56" stroke="#10b981" strokeWidth="0.5" opacity="0.5" />
      <path d="M 48 54 L 48 51" stroke="#34d399" strokeWidth="0.5" opacity="0.6" />
      <path d="M 62 56 L 62 53" stroke="#22c55e" strokeWidth="0.5" opacity="0.5" />
    </svg>
  );
}

// 6. Realistic Forest Scene
export function SplatterForestLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="tree1grad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0.6" />
        </radialGradient>
        <radialGradient id="tree2grad" cx="40%" cy="25%">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#92400e" stopOpacity="0.5" />
        </radialGradient>
        <radialGradient id="tree3grad" cx="35%" cy="30%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0.55" />
        </radialGradient>
        <linearGradient id="forestGround" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#92400e" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {/* Ground */}
      <rect x="0" y="70" width="100" height="30" fill="url(#forestGround)" />

      {/* Tree 1 - Left, smaller */}
      <ellipse cx="25" cy="88" rx="12" ry="4" fill="#78350f" opacity="0.3" />
      <rect x="23" y="58" width="4" height="30" fill="#92400e" opacity="0.8" />
      <circle cx="25" cy="48" r="14" fill="url(#tree1grad)" />
      <circle cx="22" cy="45" r="9" fill="#10b981" opacity="0.6" />

      {/* Tree 2 - Center, largest */}
      <ellipse cx="50" cy="88" rx="16" ry="5" fill="#78350f" opacity="0.4" />
      <rect x="47" y="52" width="6" height="36" fill="#78350f" opacity="0.9" />
      <circle cx="50" cy="42" r="18" fill="url(#tree2grad)" />
      <circle cx="48" cy="38" r="12" fill="#22c55e" opacity="0.7" />
      <circle cx="55" cy="44" r="10" fill="#34d399" opacity="0.6" />

      {/* Tree 3 - Right */}
      <ellipse cx="75" cy="88" rx="13" ry="4" fill="#78350f" opacity="0.35" />
      <rect x="73" y="60" width="4" height="28" fill="#92400e" opacity="0.85" />
      <circle cx="75" cy="50" r="13" fill="url(#tree3grad)" />
      <circle cx="73" cy="47" r="8" fill="#22c55e" opacity="0.65" />

      {/* Light spots */}
      <circle cx="23" cy="43" r="2" fill="#fef3c7" opacity="0.5" />
      <circle cx="47" cy="36" r="2.5" fill="#fef3c7" opacity="0.6" />
      <circle cx="73" cy="46" r="2" fill="#fef3c7" opacity="0.5" />
    </svg>
  );
}

// 7. Realistic Cloud Formation
export function RoughCloudLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="cloudGrad1" cx="40%" cy="40%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="60%" stopColor="#e0f2fe" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.6" />
        </radialGradient>
        <linearGradient id="skyBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="hillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#92400e" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect x="0" y="0" width="100" height="75" fill="url(#skyBg)" />

      {/* Cloud formation */}
      <circle cx="30" cy="32" r="11" fill="url(#cloudGrad1)" />
      <circle cx="43" cy="28" r="14" fill="url(#cloudGrad1)" />
      <circle cx="57" cy="30" r="12" fill="url(#cloudGrad1)" />
      <circle cx="70" cy="34" r="10" fill="url(#cloudGrad1)" />
      <circle cx="38" cy="38" r="9" fill="#e0f2fe" opacity="0.8" />
      <circle cx="52" cy="40" r="11" fill="#f8fafc" opacity="0.9" />
      <circle cx="62" cy="38" r="8" fill="#dbeafe" opacity="0.85" />

      {/* Hills below */}
      <path d="M 10 75 L 25 62 L 40 68 L 55 60 L 70 65 L 85 58 L 95 70 L 100 75"
        fill="url(#hillGrad)" />
      <path d="M 5 72 L 20 58 L 35 63 L 50 55 L 65 60 L 80 54 L 95 65"
        fill="#78350f" opacity="0.5" />
    </svg>
  );
}

// 8. Realistic Dripping Paint Tree
export function DripTreeLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="dripCanopy" cx="45%" cy="30%">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#22c55e" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0.4" />
        </radialGradient>
        <linearGradient id="dripGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="50" cy="88" rx="20" ry="5" fill="#78350f" opacity="0.3" />

      {/* Canopy */}
      <circle cx="50" cy="38" r="17" fill="url(#dripCanopy)" />
      <circle cx="45" cy="35" r="11" fill="#22c55e" opacity="0.7" />
      <circle cx="55" cy="42" r="10" fill="#10b981" opacity="0.65" />

      {/* Paint drips from canopy */}
      <ellipse cx="42" cy="50" rx="2.5" ry="9" fill="url(#dripGrad)" />
      <ellipse cx="50" cy="52" rx="3" ry="11" fill="url(#dripGrad)" />
      <ellipse cx="58" cy="50" rx="2.5" ry="8" fill="url(#dripGrad)" />

      {/* Drip pools */}
      <ellipse cx="42" cy="61" rx="3" ry="1.5" fill="#10b981" opacity="0.5" />
      <ellipse cx="50" cy="65" rx="4" ry="2" fill="#22c55e" opacity="0.5" />
      <ellipse cx="58" cy="60" rx="3" ry="1.5" fill="#34d399" opacity="0.5" />

      {/* Trunk */}
      <rect x="47" y="52" width="6" height="36" fill="#92400e" opacity="0.9" />
      <rect x="48" y="50" width="4" height="38" fill="#78350f" />
    </svg>
  );
}

// 9. Realistic Mountain Peak
export function TexturedPeakLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="peakMain" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="20%" stopColor="#0ea5e9" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#22c55e" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="peakShadow" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#92400e" stopOpacity="0.7" />
        </linearGradient>
      </defs>

      {/* Distant peak */}
      <path d="M 15 78 L 30 65 L 45 72 L 60 68 L 75 73 L 90 78"
        fill="#78350f" opacity="0.3" />

      {/* Main peak */}
      <path d="M 15 80 L 25 68 L 35 58 L 45 48 L 50 35 L 55 48 L 65 58 L 75 68 L 85 80"
        fill="url(#peakMain)" />

      {/* Shadow side */}
      <path d="M 50 35 L 55 48 L 65 58 L 75 68 L 85 80 L 80 80 L 70 68 L 60 58 L 55 48 L 50 35"
        fill="url(#peakShadow)" />

      {/* Snow cap */}
      <path d="M 47 38 L 50 35 L 53 38 L 52 36 L 50 34 L 48 36 Z"
        fill="#f8fafc" />

      {/* Rock texture */}
      <circle cx="38" cy="62" r="1.5" fill="#78350f" opacity="0.6" />
      <circle cx="48" cy="52" r="2" fill="#92400e" opacity="0.5" />
      <circle cx="62" cy="64" r="1.5" fill="#78350f" opacity="0.55" />
    </svg>
  );
}

// 10. Realistic Nature Blend
export function NatureSplashLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="splash1" cx="40%" cy="40%">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0.3" />
        </radialGradient>
        <radialGradient id="splash2" cx="50%" cy="45%">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#92400e" stopOpacity="0.4" />
        </radialGradient>
        <radialGradient id="splash3" cx="60%" cy="50%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0.35" />
        </radialGradient>
      </defs>

      {/* Overlapping organic forms */}
      <circle cx="35" cy="42" r="19" fill="url(#splash1)" />
      <circle cx="50" cy="48" r="21" fill="url(#splash2)" />
      <circle cx="65" cy="52" r="17" fill="url(#splash3)" />

      {/* Mid layer overlaps */}
      <ellipse cx="42" cy="58" rx="14" ry="19" fill="#34d399" opacity="0.5" transform="rotate(-25 42 58)" />
      <ellipse cx="58" cy="50" rx="17" ry="11" fill="#0ea5e9" opacity="0.4" transform="rotate(20 58 50)" />

      {/* Accent splashes */}
      <circle cx="30" cy="52" r="5" fill="#fbbf24" opacity="0.7" />
      <circle cx="72" cy="57" r="4" fill="#f59e0b" opacity="0.6" />
      <circle cx="50" cy="32" r="5.5" fill="#22c55e" opacity="0.55" />
    </svg>
  );
}

// 11. Realistic River Flow
export function FlowingRiverLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="riverFlow" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="riverBank" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {/* River banks */}
      <path d="M 5 48 Q 20 45 35 48 Q 50 51 65 49 Q 80 47 95 50 L 95 95 L 5 95 Z"
        fill="url(#riverBank)" />

      {/* River water - flowing layers */}
      <path d="M 20 58 Q 35 62 50 59 Q 65 56 80 59"
        stroke="url(#riverFlow)" strokeWidth="13" opacity="0.6" strokeLinecap="round" fill="none" />
      <path d="M 22 63 Q 37 67 52 64 Q 67 61 82 64"
        stroke="#3b82f6" strokeWidth="9" opacity="0.7" strokeLinecap="round" fill="none" />
      <path d="M 25 68 Q 40 72 55 69 Q 70 66 85 69"
        stroke="url(#riverFlow)" strokeWidth="7" opacity="0.5" strokeLinecap="round" fill="none" />

      {/* Foam highlights */}
      <circle cx="42" cy="62" r="2.5" fill="#e0f2fe" opacity="0.8" />
      <circle cx="58" cy="65" r="2" fill="#bae6fd" opacity="0.7" />
      <circle cx="70" cy="63" r="2.5" fill="#e0f2fe" opacity="0.75" />
    </svg>
  );
}

// 12. Realistic Pine Tree
export function MessyPineLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="pineLayer1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="pineLayer2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#92400e" stopOpacity="0.55" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="50" cy="88" rx="18" ry="5" fill="#78350f" opacity="0.35" />

      {/* Bottom layer */}
      <path d="M 50 22 L 60 40 L 65 44 L 72 52 L 78 60 L 82 68 L 18 68 L 22 60 L 28 52 L 35 44 L 40 40 Z"
        fill="url(#pineLayer1)" />

      {/* Middle layer */}
      <path d="M 50 24 L 58 37 L 62 40 L 68 48 L 72 55 L 28 55 L 32 48 L 38 40 L 42 37 Z"
        fill="url(#pineLayer2)" />

      {/* Top layer */}
      <path d="M 50 26 L 56 34 L 60 38 L 64 44 L 36 44 L 40 38 L 44 34 Z"
        fill="#34d399" opacity="0.7" />

      {/* Trunk */}
      <rect x="46" y="68" width="8" height="20" fill="#92400e" />

      {/* Star topper */}
      <circle cx="50" cy="22" r="3" fill="#fbbf24" opacity="0.8" />
    </svg>
  );
}

// 13. Realistic Happy Mountain
export function BlobMountainLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="happyMount" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.9" />
          <stop offset="70%" stopColor="#10b981" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0.6" />
        </radialGradient>
      </defs>

      {/* Shadow layer */}
      <ellipse cx="50" cy="78" rx="35" ry="8" fill="#78350f" opacity="0.25" />

      {/* Main mountain blob */}
      <path d="M 18 76 Q 22 70 28 64 Q 35 56 42 50 Q 48 45 50 42 Q 52 45 58 50 Q 65 56 72 64 Q 78 70 82 76 Q 78 78 70 77 Q 60 75 50 77 Q 40 75 30 77 Q 22 78 18 76 Z"
        fill="url(#happyMount)" />

      {/* Lighter overlay */}
      <path d="M 28 76 Q 32 68 40 62 Q 47 56 50 53 Q 53 56 60 62 Q 68 68 72 76"
        fill="#34d399" opacity="0.5" />

      {/* Happy face */}
      <circle cx="42" cy="60" r="3.5" fill="#1e293b" opacity="0.9" />
      <circle cx="58" cy="60" r="3.5" fill="#1e293b" opacity="0.9" />
      <path d="M 42 68 Q 47 72 50 73 Q 53 72 58 68"
        stroke="#1e293b" strokeWidth="2.5" opacity="0.8" strokeLinecap="round" fill="none" />

      {/* Sun */}
      <circle cx="75" cy="30" r="7" fill="#fbbf24" opacity="0.75" />
      <circle cx="75" cy="30" r="5" fill="#fef3c7" opacity="0.85" />
    </svg>
  );
}

// 14. Realistic Ink Landscape
export function InkSplatterLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="inkBg" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0.2" />
        </radialGradient>
        <linearGradient id="inkMount1" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#92400e" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="inkMount2" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0.95" />
        </linearGradient>
      </defs>

      {/* Background wash */}
      <circle cx="50" cy="58" r="34" fill="url(#inkBg)" />

      {/* Mountain ink splatters */}
      <ellipse cx="30" cy="68" rx="17" ry="24" fill="url(#inkMount1)" />
      <ellipse cx="50" cy="63" rx="21" ry="29" fill="url(#inkMount2)" />
      <ellipse cx="70" cy="68" rx="17" ry="24" fill="url(#inkMount1)" />

      {/* Accent splashes */}
      <circle cx="35" cy="73" r="4.5" fill="#0ea5e9" opacity="0.6" />
      <circle cx="65" cy="73" r="4" fill="#0ea5e9" opacity="0.55" />
      <circle cx="50" cy="43" r="5.5" fill="#fbbf24" opacity="0.7" />

      {/* Drips */}
      <ellipse cx="30" cy="84" rx="2" ry="5" fill="#10b981" opacity="0.5" />
      <ellipse cx="70" cy="84" rx="2" ry="4" fill="#22c55e" opacity="0.45" />
    </svg>
  );
}

// 15. Realistic Growth Rings
export function OrganicRingsLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="ringCore" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0.8" />
        </radialGradient>
      </defs>

      {/* Outer rings - irregular */}
      <ellipse cx="50" cy="50" rx="39" ry="37" fill="none" stroke="#78350f" strokeWidth="2.5" opacity="0.35" />
      <ellipse cx="52" cy="48" rx="31" ry="29" fill="none" stroke="#92400e" strokeWidth="2" opacity="0.45" transform="rotate(5 50 50)" />
      <ellipse cx="48" cy="52" rx="23" ry="21" fill="none" stroke="#10b981" strokeWidth="2" opacity="0.55" transform="rotate(-8 50 50)" />
      <ellipse cx="51" cy="49" rx="15" ry="14" fill="none" stroke="#22c55e" strokeWidth="3" opacity="0.65" transform="rotate(3 50 50)" />

      {/* Center blob */}
      <ellipse cx="49" cy="51" rx="7" ry="6" fill="url(#ringCore)" transform="rotate(-5 50 50)" />

      {/* Bark texture spots */}
      <circle cx="36" cy="46" r="1.8" fill="#78350f" opacity="0.5" />
      <circle cx="64" cy="54" r="1.8" fill="#92400e" opacity="0.45" />
      <circle cx="50" cy="32" r="1.5" fill="#78350f" opacity="0.4" />
      <circle cx="50" cy="68" r="1.5" fill="#92400e" opacity="0.45" />
    </svg>
  );
}

// 16. Realistic Brush Landscape
export function LooseBrushLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="brushSky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="brushMount" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#92400e" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="brushGround" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0.7" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect x="0" y="0" width="100" height="50" fill="url(#brushSky)" />

      {/* Mountain strokes */}
      <path d="M 12 72 Q 22 62 35 58 Q 48 54 50 52 Q 52 54 65 58 Q 78 62 88 72"
        stroke="url(#brushMount)" strokeWidth="19" opacity="0.75" strokeLinecap="round" fill="none" />
      <path d="M 18 74 Q 28 66 40 62 Q 48 59 50 58 Q 52 59 60 62 Q 72 66 82 74"
        stroke="#10b981" strokeWidth="13" opacity="0.65" strokeLinecap="round" fill="none" />

      {/* Ground */}
      <rect x="0" y="78" width="100" height="22" fill="url(#brushGround)" />

      {/* Sun */}
      <circle cx="75" cy="26" r="9" fill="#fbbf24" opacity="0.8" />
      <circle cx="75" cy="26" r="6" fill="#fef3c7" opacity="0.9" />
    </svg>
  );
}

// 17. Realistic Compass
export function SplatterCompassLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="compassBg" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0.1" />
        </radialGradient>
        <linearGradient id="northPoint" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Outer rings */}
      <circle cx="50" cy="50" r="37" fill="none" stroke="#78350f" strokeWidth="3" opacity="0.5" />
      <circle cx="50" cy="50" r="34" fill="none" stroke="#0ea5e9" strokeWidth="2" opacity="0.4" />

      {/* Background */}
      <circle cx="50" cy="50" r="31" fill="url(#compassBg)" />

      {/* Directional points */}
      <ellipse cx="50" cy="20" rx="7" ry="11" fill="url(#northPoint)" />
      <ellipse cx="80" cy="50" rx="11" ry="7" fill="#10b981" opacity="0.7" />
      <ellipse cx="50" cy="80" rx="7" ry="11" fill="#34d399" opacity="0.65" />
      <ellipse cx="20" cy="50" rx="11" ry="7" fill="#0ea5e9" opacity="0.7" />

      {/* Center */}
      <circle cx="50" cy="50" r="7" fill="#78350f" opacity="0.7" />
      <circle cx="50" cy="50" r="4.5" fill="#fbbf24" opacity="0.9" />

      {/* Accent marks */}
      <circle cx="50" cy="32" r="2.5" fill="#22c55e" opacity="0.6" />
      <circle cx="68" cy="50" r="2.5" fill="#10b981" opacity="0.6" />
    </svg>
  );
}

// 18. Realistic Fuzzy Tree
export function FuzzyTreeLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="fuzzyCanopy" cx="45%" cy="35%">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#22c55e" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0.3" />
        </radialGradient>
        <linearGradient id="fuzzyTrunk" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#92400e" />
          <stop offset="50%" stopColor="#78350f" />
          <stop offset="100%" stopColor="#92400e" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="50" cy="88" rx="22" ry="6" fill="#78350f" opacity="0.3" />

      {/* Fuzzy canopy layers */}
      <circle cx="50" cy="42" r="21" fill="url(#fuzzyCanopy)" />
      <circle cx="48" cy="40" r="19" fill="#22c55e" opacity="0.55" />
      <circle cx="52" cy="44" r="17" fill="#34d399" opacity="0.5" />
      <circle cx="41" cy="47" r="13" fill="#10b981" opacity="0.4" />
      <circle cx="59" cy="47" r="13" fill="#22c55e" opacity="0.4" />
      <circle cx="50" cy="37" r="15" fill="#10b981" opacity="0.6" />

      {/* Trunk */}
      <ellipse cx="50" cy="72" rx="5.5" ry="24" fill="url(#fuzzyTrunk)" opacity="0.7" />
      <ellipse cx="50" cy="72" rx="3.5" ry="21" fill="#78350f" opacity="0.6" />

      {/* Light spots */}
      <circle cx="45" cy="40" r="2" fill="#fef3c7" opacity="0.7" />
      <circle cx="55" cy="44" r="2" fill="#fef3c7" opacity="0.6" />
      <circle cx="50" cy="48" r="1.5" fill="#fbbf24" opacity="0.5" />
    </svg>
  );
}

// 19. Realistic Paint Pour
export function PaintPourLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="pour" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#22c55e" stopOpacity="0.85" />
          <stop offset="70%" stopColor="#10b981" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0.75" />
        </linearGradient>
      </defs>

      {/* Main pour mountain */}
      <path d="M 22 82 Q 27 76 32 70 Q 38 62 44 54 Q 48 50 50 47 Q 52 50 56 54 Q 62 62 68 70 Q 73 76 78 82"
        fill="url(#pour)" />

      {/* Dripping layers */}
      <ellipse cx="36" cy="82" rx="3" ry="8" fill="#0ea5e9" opacity="0.7" />
      <ellipse cx="50" cy="84" rx="4" ry="10" fill="#22c55e" opacity="0.6" />
      <ellipse cx="64" cy="82" rx="3" ry="7" fill="#10b981" opacity="0.7" />

      {/* Pools at base */}
      <ellipse cx="32" cy="88" rx="6" ry="3" fill="#0ea5e9" opacity="0.5" />
      <ellipse cx="50" cy="90" rx="8" ry="3" fill="#22c55e" opacity="0.5" />
      <ellipse cx="68" cy="88" rx="6" ry="3" fill="#10b981" opacity="0.5" />

      {/* Gradient pools with brown */}
      <ellipse cx="42" cy="89" rx="5" ry="2" fill="#78350f" opacity="0.4" />
      <ellipse cx="58" cy="89" rx="5" ry="2" fill="#92400e" opacity="0.35" />
    </svg>
  );
}

// 20. Realistic Leaf Cluster
export function LeafClusterLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="leaf1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="leaf2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#92400e" stopOpacity="0.45" />
        </linearGradient>
        <linearGradient id="leaf3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* Leaf shapes */}
      <ellipse cx="40" cy="47" rx="15" ry="21" fill="url(#leaf1)" transform="rotate(-25 40 47)" />
      <ellipse cx="50" cy="44" rx="17" ry="23" fill="url(#leaf2)" transform="rotate(5 50 44)" />
      <ellipse cx="60" cy="50" rx="15" ry="21" fill="url(#leaf3)" transform="rotate(30 60 50)" />
      <ellipse cx="48" cy="57" rx="14" ry="19" fill="url(#leaf1)" transform="rotate(-10 48 57)" />
      <ellipse cx="52" cy="54" rx="13" ry="18" fill="url(#leaf2)" transform="rotate(15 52 54)" />

      {/* Stems */}
      <path d="M 50 62 Q 48 72 46 82" stroke="#78350f" strokeWidth="3" opacity="0.6" strokeLinecap="round" />
      <path d="M 50 62 Q 50 74 50 86" stroke="#92400e" strokeWidth="3" opacity="0.7" strokeLinecap="round" />
      <path d="M 50 62 Q 52 72 54 82" stroke="#78350f" strokeWidth="3" opacity="0.6" strokeLinecap="round" />

      {/* Vein details */}
      <path d="M 42 42 L 38 47" stroke="#10b981" strokeWidth="1" opacity="0.4" />
      <path d="M 50 39 L 50 49" stroke="#22c55e" strokeWidth="1" opacity="0.4" />
      <path d="M 58 46 L 62 50" stroke="#34d399" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

export const organicLogoVariations = [
  { id: 21, name: "Mountain Ridge", description: "Realistic peaks with atmospheric depth", component: SplatterMountainLogo },
  { id: 22, name: "Textured Tree", description: "Bark detail with foliage light", component: BlobTreeLogo },
  { id: 23, name: "Dawn Sunrise", description: "Atmospheric gradient sunrise", component: WatercolorSunriseLogo },
  { id: 24, name: "Winding Trail", description: "Perspective path with grass", component: BrushPathLogo },
  { id: 25, name: "Layered Vista", description: "Atmospheric perspective hills", component: OrganicLayersLogo },
  { id: 26, name: "Forest Scene", description: "Three gradient trees with shadows", component: SplatterForestLogo },
  { id: 27, name: "Cloud Formation", description: "Fluffy clouds over hills", component: RoughCloudLogo },
  { id: 28, name: "Drip Tree", description: "Paint dripping from canopy", component: DripTreeLogo },
  { id: 29, name: "Peak Summit", description: "Snow-capped mountain gradient", component: TexturedPeakLogo },
  { id: 30, name: "Nature Blend", description: "Overlapping organic radial forms", component: NatureSplashLogo },
  { id: 31, name: "River Flow", description: "Flowing water with foam highlights", component: FlowingRiverLogo },
  { id: 32, name: "Pine Tree", description: "Layered evergreen with star", component: MessyPineLogo },
  { id: 33, name: "Happy Peak", description: "Friendly mountain with sun", component: BlobMountainLogo },
  { id: 34, name: "Ink Landscape", description: "Abstract mountain ink splash", component: InkSplatterLogo },
  { id: 35, name: "Tree Rings", description: "Growth rings with bark texture", component: OrganicRingsLogo },
  { id: 36, name: "Brush Strokes", description: "Expressive landscape painting", component: LooseBrushLogo },
  { id: 37, name: "Compass Points", description: "Directional nature markers", component: SplatterCompassLogo },
  { id: 38, name: "Fuzzy Canopy", description: "Soft layered tree silhouette", component: FuzzyTreeLogo },
  { id: 39, name: "Paint Pour", description: "Dripping gradient mountain", component: PaintPourLogo },
  { id: 40, name: "Leaf Bundle", description: "Overlapping gradient leaves", component: LeafClusterLogo },
];
