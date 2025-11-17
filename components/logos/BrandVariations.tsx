// Collection of 20 logo variations for Web Redesigned brand exploration

interface LogoProps {
  className?: string;
}

// 1. Mountain Peak with Code Brackets
export function MountainCodeLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="mountain1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      <path d="M 20 70 L 35 40 L 50 55 L 65 25 L 80 70 Z" fill="url(#mountain1)" opacity="0.9" />
      <path d="M 30 70 L 50 35 L 70 70 Z" fill="#22d3ee" opacity="0.7" />
      <text x="10" y="50" fontSize="20" fill="#2563eb" fontWeight="bold">&lt;</text>
      <text x="80" y="50" fontSize="20" fill="#2563eb" fontWeight="bold">&gt;</text>
    </svg>
  );
}

// 2. Happy Tree Circle
export function HappyTreeLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="40" fill="#0ea5e9" opacity="0.2" />
      <circle cx="50" cy="50" r="35" fill="#10b981" opacity="0.3" />
      <rect x="47" y="50" width="6" height="25" rx="2" fill="#92400e" />
      <circle cx="50" cy="35" r="15" fill="#10b981" />
      <circle cx="42" cy="42" r="10" fill="#22c55e" opacity="0.8" />
      <circle cx="58" cy="42" r="10" fill="#22c55e" opacity="0.8" />
      <circle cx="48" cy="28" r="3" fill="#fbbf24" />
      <circle cx="53" cy="30" r="2" fill="#fbbf24" />
    </svg>
  );
}

// 3. Cottage on a Hill
export function CottageLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <ellipse cx="50" cy="75" rx="45" ry="20" fill="#10b981" opacity="0.3" />
      <path d="M 30 60 L 50 40 L 70 60 Z" fill="#dc2626" />
      <rect x="38" y="60" width="24" height="20" fill="#f59e0b" />
      <rect x="42" y="65" width="6" height="8" fill="#7c3aed" />
      <rect x="52" y="65" width="6" height="6" fill="#0ea5e9" />
      <path d="M 20 80 Q 50 70, 80 80" stroke="#10b981" strokeWidth="3" fill="none" />
      <circle cx="75" cy="35" r="8" fill="#fbbf24" opacity="0.6" />
    </svg>
  );
}

// 4. Winding Path Trail
export function WindingPathLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="path1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <path
        d="M 10 80 Q 30 70, 40 60 T 70 40 T 90 20"
        stroke="url(#path1)"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      <circle cx="10" cy="80" r="5" fill="#0ea5e9" />
      <circle cx="90" cy="20" r="5" fill="#10b981" />
      <circle cx="40" cy="60" r="3" fill="#22d3ee" opacity="0.6" />
      <circle cx="70" cy="40" r="3" fill="#34d399" opacity="0.6" />
    </svg>
  );
}

// 5. Abstract Mountain Range
export function AbstractMountainLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M 10 70 L 30 30 L 45 50 L 60 20 L 75 45 L 90 70 Z" fill="#0ea5e9" opacity="0.3" />
      <path d="M 15 70 L 35 35 L 50 55 L 65 25 L 85 70 Z" fill="#06b6d4" opacity="0.5" />
      <path d="M 25 70 L 50 25 L 75 70 Z" fill="#10b981" opacity="0.6" />
      <circle cx="50" cy="25" r="6" fill="#fbbf24" opacity="0.7" />
    </svg>
  );
}

// 6. Tree Ring Growth
export function TreeRingLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="38" fill="none" stroke="#10b981" strokeWidth="2" opacity="0.3" />
      <circle cx="50" cy="50" r="30" fill="none" stroke="#22c55e" strokeWidth="2" opacity="0.4" />
      <circle cx="50" cy="50" r="22" fill="none" stroke="#34d399" strokeWidth="2" opacity="0.5" />
      <circle cx="50" cy="50" r="14" fill="none" stroke="#10b981" strokeWidth="3" opacity="0.7" />
      <circle cx="50" cy="50" r="6" fill="#10b981" />
      <path d="M 48 50 L 48 20" stroke="#92400e" strokeWidth="4" strokeLinecap="round" />
      <circle cx="43" cy="25" r="5" fill="#22c55e" />
      <circle cx="53" cy="25" r="5" fill="#22c55e" />
    </svg>
  );
}

// 7. Sunrise Over Mountains
export function SunriseLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="35" r="15" fill="#fbbf24" opacity="0.8" />
      <circle cx="50" cy="35" r="12" fill="#f59e0b" />
      <path d="M 50 20 L 50 10" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
      <path d="M 65 25 L 72 18" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
      <path d="M 35 25 L 28 18" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
      <path d="M 10 65 L 35 45 L 50 55 L 65 40 L 90 65 Z" fill="#10b981" opacity="0.7" />
      <path d="M 20 65 L 50 35 L 80 65 Z" fill="#0ea5e9" opacity="0.5" />
    </svg>
  );
}

// 8. Paint Brush Tree
export function BrushTreeLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="46" y="60" width="8" height="30" rx="2" fill="#0ea5e9" />
      <rect x="44" y="55" width="12" height="8" fill="#64748b" />
      <path d="M 35 55 L 50 25 L 65 55 Z" fill="#10b981" opacity="0.8" />
      <path d="M 40 45 L 50 30 L 60 45 Z" fill="#22c55e" opacity="0.6" />
      <ellipse cx="50" cy="70" rx="3" ry="5" fill="#3b82f6" opacity="0.6" />
      <circle cx="45" cy="35" r="2" fill="#fbbf24" />
      <circle cx="55" cy="38" r="2" fill="#fbbf24" />
    </svg>
  );
}

// 9. Geometric Pine Tree
export function GeometricPineLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <polygon points="50,15 65,40 60,40 75,60 70,60 85,80 15,80 30,60 25,60 40,40 35,40" fill="#10b981" />
      <polygon points="50,20 60,40 55,40 65,55 60,55 70,70 30,70 40,55 35,55 45,40 40,40" fill="#22c55e" opacity="0.7" />
      <rect x="45" y="80" width="10" height="12" fill="#92400e" />
      <circle cx="50" cy="10" r="4" fill="#fbbf24" />
    </svg>
  );
}

// 10. Mountain + Cloud Simple
export function MountainCloudLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M 15 75 L 40 30 L 50 45 L 60 25 L 85 75 Z" fill="#10b981" opacity="0.8" />
      <ellipse cx="35" cy="30" rx="12" ry="8" fill="#e0f2fe" />
      <ellipse cx="45" cy="28" rx="10" ry="7" fill="#bae6fd" />
      <ellipse cx="40" cy="32" rx="8" ry="6" fill="#dbeafe" />
      <ellipse cx="65" cy="35" rx="10" ry="7" fill="#e0f2fe" />
      <ellipse cx="73" cy="33" rx="8" ry="6" fill="#bae6fd" />
    </svg>
  );
}

// 11. Forest Canopy View
export function ForestCanopyLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="30" cy="40" r="18" fill="#10b981" opacity="0.7" />
      <circle cx="50" cy="35" r="20" fill="#22c55e" opacity="0.7" />
      <circle cx="70" cy="40" r="18" fill="#34d399" opacity="0.7" />
      <circle cx="40" cy="55" r="15" fill="#10b981" opacity="0.6" />
      <circle cx="60" cy="55" r="15" fill="#22c55e" opacity="0.6" />
      <rect x="28" y="70" width="4" height="15" fill="#92400e" />
      <rect x="48" y="70" width="4" height="15" fill="#92400e" />
      <rect x="68" y="70" width="4" height="15" fill="#92400e" />
    </svg>
  );
}

// 12. River Through Valley
export function RiverValleyLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M 10 70 L 30 40 L 25 70 Z" fill="#10b981" opacity="0.6" />
      <path d="M 75 70 L 70 40 L 90 70 Z" fill="#10b981" opacity="0.6" />
      <path d="M 30 50 Q 40 55, 50 50 T 70 50" stroke="#0ea5e9" strokeWidth="12" fill="none" opacity="0.7" />
      <path d="M 30 50 Q 40 53, 50 50 T 70 50" stroke="#3b82f6" strokeWidth="6" fill="none" opacity="0.5" />
      <circle cx="50" cy="35" r="3" fill="#fbbf24" />
    </svg>
  );
}

// 13. Friendly Mountain Face
export function MountainFaceLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M 20 80 L 50 20 L 80 80 Z" fill="#10b981" opacity="0.8" />
      <circle cx="40" cy="50" r="5" fill="#1e293b" />
      <circle cx="60" cy="50" r="5" fill="#1e293b" />
      <path d="M 35 65 Q 50 72, 65 65" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M 40 40 Q 35 38, 30 40" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M 60 40 Q 65 38, 70 40" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="50" cy="15" r="6" fill="#fbbf24" opacity="0.7" />
    </svg>
  );
}

// 14. Layered Landscape
export function LayeredLandscapeLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="0" y="70" width="100" height="30" fill="#10b981" opacity="0.3" />
      <ellipse cx="50" cy="70" rx="50" ry="15" fill="#22c55e" opacity="0.4" />
      <path d="M 10 70 L 90 70 Q 85 50, 70 50 Q 55 50, 50 40 Q 45 50, 30 50 Q 15 50, 10 70 Z" fill="#34d399" opacity="0.5" />
      <circle cx="80" cy="25" r="12" fill="#fbbf24" opacity="0.6" />
      <circle cx="80" cy="25" r="9" fill="#f59e0b" opacity="0.8" />
    </svg>
  );
}

// 15. Tree with Roots
export function TreeRootsLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="47" y="40" width="6" height="30" fill="#92400e" />
      <circle cx="50" cy="30" r="15" fill="#10b981" />
      <circle cx="42" cy="35" r="10" fill="#22c55e" opacity="0.8" />
      <circle cx="58" cy="35" r="10" fill="#22c55e" opacity="0.8" />
      <path d="M 50 70 Q 30 80, 20 90" stroke="#92400e" strokeWidth="3" fill="none" />
      <path d="M 50 70 Q 70 80, 80 90" stroke="#92400e" strokeWidth="3" fill="none" />
      <path d="M 50 70 L 50 90" stroke="#92400e" strokeWidth="3" fill="none" />
      <circle cx="48" cy="25" r="2" fill="#fbbf24" />
      <circle cx="53" cy="28" r="2" fill="#fbbf24" />
    </svg>
  );
}

// 16. Mountain Peak Badge
export function MountainBadgeLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="42" fill="none" stroke="#0ea5e9" strokeWidth="3" />
      <circle cx="50" cy="50" r="38" fill="#e0f2fe" opacity="0.3" />
      <path d="M 25 60 L 40 35 L 50 45 L 60 30 L 75 60 Z" fill="#10b981" />
      <path d="M 35 60 L 50 35 L 65 60 Z" fill="#0ea5e9" opacity="0.6" />
      <circle cx="50" cy="30" r="5" fill="#fbbf24" />
    </svg>
  );
}

// 17. Abstract Nature Swirl
export function NatureSwirlLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="swirl1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="50%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <path
        d="M 50 10 Q 70 30, 70 50 Q 70 70, 50 80 Q 30 70, 30 50 Q 30 30, 50 20 Z"
        fill="url(#swirl1)"
        opacity="0.7"
      />
      <path
        d="M 50 25 Q 60 35, 60 50 Q 60 65, 50 70 Q 40 65, 40 50 Q 40 35, 50 30"
        fill="#0ea5e9"
        opacity="0.5"
      />
      <circle cx="50" cy="50" r="8" fill="#fbbf24" opacity="0.8" />
    </svg>
  );
}

// 18. Pixel Mountain
export function PixelMountainLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="46" y="30" width="8" height="8" fill="#10b981" />
      <rect x="38" y="38" width="8" height="8" fill="#22c55e" />
      <rect x="54" y="38" width="8" height="8" fill="#22c55e" />
      <rect x="30" y="46" width="8" height="8" fill="#34d399" />
      <rect x="46" y="46" width="8" height="8" fill="#10b981" />
      <rect x="62" y="46" width="8" height="8" fill="#34d399" />
      <rect x="22" y="54" width="8" height="8" fill="#0ea5e9" />
      <rect x="38" y="54" width="8" height="8" fill="#22c55e" />
      <rect x="54" y="54" width="8" height="8" fill="#22c55e" />
      <rect x="70" y="54" width="8" height="8" fill="#0ea5e9" />
      <rect x="14" y="62" width="72" height="8" fill="#0ea5e9" opacity="0.5" />
      <rect x="10" y="70" width="80" height="8" fill="#10b981" opacity="0.3" />
    </svg>
  );
}

// 19. Compass Direction
export function CompassLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="40" fill="none" stroke="#0ea5e9" strokeWidth="2" />
      <circle cx="50" cy="50" r="35" fill="#e0f2fe" opacity="0.2" />
      <path d="M 50 15 L 55 48 L 50 50 L 45 48 Z" fill="#10b981" />
      <path d="M 85 50 L 52 55 L 50 50 L 52 45 Z" fill="#22c55e" />
      <path d="M 50 85 L 45 52 L 50 50 L 55 52 Z" fill="#34d399" />
      <path d="M 15 50 L 48 45 L 50 50 L 48 55 Z" fill="#0ea5e9" />
      <circle cx="50" cy="50" r="6" fill="#1e293b" />
      <circle cx="50" cy="50" r="3" fill="#fbbf24" />
    </svg>
  );
}

// 20. Happy Cloud Mountain
export function CloudMountainLogo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <ellipse cx="35" cy="35" rx="15" ry="10" fill="#e0f2fe" />
      <ellipse cx="50" cy="32" rx="18" ry="12" fill="#bae6fd" />
      <ellipse cx="65" cy="35" rx="15" ry="10" fill="#dbeafe" />
      <circle cx="42" cy="38" r="3" fill="#1e293b" />
      <circle cx="58" cy="38" r="3" fill="#1e293b" />
      <path d="M 45 44 Q 50 47, 55 44" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M 20 75 L 40 50 L 50 60 L 60 45 L 80 75 Z" fill="#10b981" opacity="0.7" />
      <path d="M 30 75 L 50 50 L 70 75 Z" fill="#22c55e" opacity="0.5" />
    </svg>
  );
}

export const allLogoVariations = [
  { id: 1, name: "Mountain Code", description: "Mountains with code brackets", component: MountainCodeLogo },
  { id: 2, name: "Happy Tree Circle", description: "Friendly tree in a circle", component: HappyTreeLogo },
  { id: 3, name: "Cottage Hill", description: "Cozy cottage on a hillside", component: CottageLogo },
  { id: 4, name: "Winding Path", description: "Trail leading forward", component: WindingPathLogo },
  { id: 5, name: "Mountain Range", description: "Abstract layered peaks", component: AbstractMountainLogo },
  { id: 6, name: "Tree Rings", description: "Growth and heritage", component: TreeRingLogo },
  { id: 7, name: "Sunrise", description: "New day over mountains", component: SunriseLogo },
  { id: 8, name: "Brush Tree", description: "Paintbrush as tree trunk", component: BrushTreeLogo },
  { id: 9, name: "Geometric Pine", description: "Modern angular tree", component: GeometricPineLogo },
  { id: 10, name: "Mountain Cloud", description: "Simple peak and clouds", component: MountainCloudLogo },
  { id: 11, name: "Forest Canopy", description: "View from below trees", component: ForestCanopyLogo },
  { id: 12, name: "River Valley", description: "Water through mountains", component: RiverValleyLogo },
  { id: 13, name: "Mountain Face", description: "Friendly happy peak", component: MountainFaceLogo },
  { id: 14, name: "Layered Landscape", description: "Three-layer scene", component: LayeredLandscapeLogo },
  { id: 15, name: "Tree Roots", description: "Growth from foundation", component: TreeRootsLogo },
  { id: 16, name: "Peak Badge", description: "Circular mountain emblem", component: MountainBadgeLogo },
  { id: 17, name: "Nature Swirl", description: "Organic flowing form", component: NatureSwirlLogo },
  { id: 18, name: "Pixel Mountain", description: "8-bit retro style", component: PixelMountainLogo },
  { id: 19, name: "Compass", description: "Finding direction", component: CompassLogo },
  { id: 20, name: "Cloud Mountain", description: "Happy cloud with peaks", component: CloudMountainLogo },
];
