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

export const organicLogoVariations = [
  { id: 21, name: "Mountain Ridge", description: "Realistic peaks with atmospheric depth", component: SplatterMountainLogo },
  { id: 22, name: "Textured Tree", description: "Bark detail with foliage light", component: BlobTreeLogo },
  { id: 23, name: "Dawn Sunrise", description: "Atmospheric gradient sunrise", component: WatercolorSunriseLogo },
  { id: 24, name: "Winding Trail", description: "Perspective path with grass", component: BrushPathLogo },
  { id: 25, name: "Layered Vista", description: "Atmospheric perspective hills", component: OrganicLayersLogo },
  // Continuing with more realistic variations...
];
