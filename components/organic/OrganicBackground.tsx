"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Animated Twigs - floating branches with JAGGED edges and high contrast
export function FloatingTwigs() {
  const twigs = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 2,
    duration: 15 + Math.random() * 10,
    x: Math.random() * 100,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {twigs.map((twig) => (
        <motion.div
          key={twig.id}
          initial={{
            y: -100,
            x: `${twig.x}%`,
            rotate: twig.rotation,
            opacity: 0
          }}
          animate={{
            y: "100vh",
            x: `${twig.x + (Math.random() * 20 - 10)}%`,
            rotate: twig.rotation + 360,
            opacity: [0, 0.4, 0.4, 0]
          }}
          transition={{
            duration: twig.duration,
            delay: twig.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute"
        >
          <svg width="80" height="30" viewBox="0 0 80 30" fill="none">
            <defs>
              <linearGradient id={`twigGrad${twig.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1a0a00" stopOpacity="0.9" />
                <stop offset="30%" stopColor="#451a03" stopOpacity="0.7" />
                <stop offset="70%" stopColor="#78350f" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#fef3c7" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            {/* JAGGED twig path with sharp angles */}
            <path
              d="M 0 15 L 8 13 L 12 16 L 18 14 L 22 17 L 28 15 L 35 18 L 42 14 L 48 16 L 55 13 L 62 15 L 70 17 L 80 15"
              stroke={`url(#twigGrad${twig.id})`}
              strokeWidth="4"
              fill="none"
              strokeLinecap="square"
            />
            {/* Dark/light contrast - dark bark texture */}
            <path
              d="M 10 14 L 12 11 L 14 14"
              stroke="#1a0a00"
              strokeWidth="2"
              opacity="0.8"
            />
            <path
              d="M 30 15 L 32 12 L 34 15"
              stroke="#1a0a00"
              strokeWidth="2"
              opacity="0.8"
            />
            {/* Light highlights - sharp angles */}
            <path
              d="M 20 15 L 22 18 L 24 16"
              stroke="#fef3c7"
              strokeWidth="1.5"
              opacity="0.7"
            />
            <path
              d="M 50 14 L 52 17 L 54 15"
              stroke="#fef3c7"
              strokeWidth="1.5"
              opacity="0.7"
            />
            {/* Jagged branch offshoots */}
            <path d="M 15 15 L 13 8 L 11 6" stroke="#1a0a00" strokeWidth="2.5" opacity="0.9" />
            <path d="M 16 15 L 14 9 L 13 7" stroke="#78350f" strokeWidth="1.5" opacity="0.6" />
            <path d="M 45 15 L 47 9 L 49 7" stroke="#1a0a00" strokeWidth="2.5" opacity="0.9" />
            <path d="M 46 15 L 48 10 L 50 8" stroke="#78350f" strokeWidth="1.5" opacity="0.6" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

// Organic Pixels - scattered particle effects with gradients
export function OrganicPixels() {
  const [pixels, setPixels] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    duration: number;
  }>>([]);

  useEffect(() => {
    const newPixels = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 4,
      color: ["#78350f", "#92400e", "#22c55e", "#0ea5e9"][Math.floor(Math.random() * 4)],
      duration: 3 + Math.random() * 4,
    }));
    setPixels(newPixels);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {pixels.map((pixel) => (
        <motion.div
          key={pixel.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
            x: [0, (Math.random() - 0.5) * 50],
            y: [0, (Math.random() - 0.5) * 50],
          }}
          transition={{
            duration: pixel.duration,
            repeat: Infinity,
            repeatDelay: Math.random() * 3,
          }}
          style={{
            position: "absolute",
            left: `${pixel.x}%`,
            top: `${pixel.y}%`,
            width: pixel.size,
            height: pixel.size,
            backgroundColor: pixel.color,
            borderRadius: "50%",
            filter: "blur(1px)",
          }}
        />
      ))}
    </div>
  );
}

// Rough Edge Overlay - SVG JAGGED borders with dark/light contrast
export function RoughEdges() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <svg width="100%" height="100%" className="absolute inset-0" preserveAspectRatio="none">
        <defs>
          <linearGradient id="roughEdgeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a0a00" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#451a03" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#fef3c7" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="roughEdgeGradBottom" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#1a0a00" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#451a03" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#fef3c7" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Top JAGGED edge - sharp angles */}
        <path
          d="M 0 0 L 30 8 L 45 2 L 70 12 L 95 4 L 115 10 L 140 5 L 165 14 L 190 3 L 220 11 L 245 6 L 275 13 L 300 4 L 330 9 L 360 2 L 390 15 L 420 5 L 450 11 L 480 3 L 510 12 L 540 7 L 570 14 L 600 4 L 630 10 L 665 5 L 695 13 L 725 6 L 755 11 L 785 3 L 815 14 L 845 7 L 875 12 L 905 4 L 935 10 L 965 6 L 995 13 L 1025 5 L 1055 11 L 1085 3 L 1115 14 L 1145 6 L 1175 10 L 1205 4 L 1235 12 L 1265 7 L 1295 13 L 1325 5 L 1355 11 L 1385 4 L 1415 14 L 1445 6 L 1475 10 L 1505 3 L 1535 12 L 1565 7 L 1595 13 L 1625 5 L 1655 10 L 1685 4 L 1715 11 L 1745 6 L 1775 14 L 1805 5 L 1835 10 L 1865 3 L 1895 12 L 1925 7 L 1955 13 L 1985 5 L 2015 10 L 2045 4 L 2075 11 L 2105 6 L 2135 13 L 2165 5 L 2195 10 L 2225 4 L 2255 12 L 2285 7 L 2315 13 L 2345 5 L 2375 10 L 2405 4 L 2435 11 L 2465 6 L 2495 13 L 2525 5 L 2555 10 L 2585 4 L 2615 12 L 2645 7 L 2675 13 L 2705 5 L 2735 10 L 2765 4 L 2795 11 L 2825 6 L 2855 13 L 2885 5 L 2915 10 L 2945 4 L 2975 12 L 3005 7 L 3035 13 L 3065 5 L 3095 10 L 3125 4 L 3155 11 L 3185 6 L 3215 13 L 3245 5 L 3275 10 L 3305 4 L 3335 12 L 3365 7 L 3395 13 L 3425 5 L 3455 10 L 3485 4 L 3515 11 L 3545 6 L 3575 13 L 3605 5 L 3635 10 L 3665 4 L 3695 12 L 3725 7 L 3755 13 L 3785 5 L 3815 10 L 3845 4 L 3875 11 L 3905 6 L 3935 13 L 3965 5 L 3995 10 L 4000 0 L 4000 80 L 0 80 Z"
          fill="url(#roughEdgeGrad)"
          opacity="0.4"
        />

        {/* Bottom JAGGED edge */}
        <path
          d="M 0 100% L 30 -8 L 45 -2 L 70 -12 L 95 -4 L 115 -10 L 140 -5 L 165 -14 L 190 -3 L 220 -11 L 245 -6 L 275 -13 L 300 -4 L 330 -9 L 360 -2 L 390 -15 L 420 -5 L 450 -11 L 480 -3 L 510 -12 L 540 -7 L 570 -14 L 600 -4 L 630 -10 L 665 -5 L 695 -13 L 725 -6 L 755 -11 L 785 -3 L 815 -14 L 845 -7 L 875 -12 L 905 -4 L 935 -10 L 965 -6 L 995 -13 L 1025 -5 L 1055 -11 L 1085 -3 L 1115 -14 L 1145 -6 L 1175 -10 L 1205 -4 L 1235 -12 L 1265 -7 L 1295 -13 L 1325 -5 L 1355 -11 L 1385 -4 L 1415 -14 L 1445 -6 L 1475 -10 L 1505 -3 L 1535 -12 L 1565 -7 L 1595 -13 L 1625 -5 L 1655 -10 L 1685 -4 L 1715 -11 L 1745 -6 L 1775 -14 L 1805 -5 L 1835 -10 L 1865 -3 L 1895 -12 L 1925 -7 L 1955 -13 L 1985 -5 L 2015 -10 L 2045 -4 L 2075 -11 L 2105 -6 L 2135 -13 L 2165 -5 L 2195 -10 L 2225 -4 L 2255 -12 L 2285 -7 L 2315 -13 L 2345 -5 L 2375 -10 L 2405 -4 L 2435 -11 L 2465 -6 L 2495 -13 L 2525 -5 L 2555 -10 L 2585 -4 L 2615 -12 L 2645 -7 L 2675 -13 L 2705 -5 L 2735 -10 L 2765 -4 L 2795 -11 L 2825 -6 L 2855 -13 L 2885 -5 L 2915 -10 L 2945 -4 L 2975 -12 L 3005 -7 L 3035 -13 L 3065 -5 L 3095 -10 L 3125 -4 L 3155 -11 L 3185 -6 L 3215 -13 L 3245 -5 L 3275 -10 L 3305 -4 L 3335 -12 L 3365 -7 L 3395 -13 L 3425 -5 L 3455 -10 L 3485 -4 L 3515 -11 L 3545 -6 L 3575 -13 L 3605 -5 L 3635 -10 L 3665 -4 L 3695 -12 L 3725 -7 L 3755 -13 L 3785 -5 L 3815 -10 L 3845 -4 L 3875 -11 L 3905 -6 L 3935 -13 L 3965 -5 L 3995 -10 L 4000 0 L 4000 -80 L 0 -80 Z"
          fill="url(#roughEdgeGradBottom)"
          opacity="0.4"
        />
      </svg>
    </div>
  );
}

// Tree with Limbs - ACTUAL branches with jagged edges and high contrast
export function PineTreeDecor({ position = "top-right" }: { position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" }) {
  const positionClasses = {
    "top-right": "top-20 right-10",
    "top-left": "top-20 left-10",
    "bottom-right": "bottom-20 right-10",
    "bottom-left": "bottom-20 left-10",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.25, scale: 1 }}
      transition={{ duration: 1 }}
      className={`absolute ${positionClasses[position]} pointer-events-none`}
    >
      <svg width="180" height="240" viewBox="0 0 180 240" fill="none">
        <defs>
          {/* Dark trunk gradient */}
          <linearGradient id={`trunkDark${position}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1a0a00" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#451a03" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#78350f" stopOpacity="0.85" />
          </linearGradient>

          {/* Light highlight gradient */}
          <linearGradient id={`trunkLight${position}`} x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#92400e" stopOpacity="0.2" />
          </linearGradient>

          {/* Foliage dark */}
          <radialGradient id={`foliageDark${position}`}>
            <stop offset="0%" stopColor="#1a3a1a" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#22543d" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#1a0a00" stopOpacity="0.5" />
          </radialGradient>

          {/* Foliage light */}
          <radialGradient id={`foliageLight${position}`}>
            <stop offset="0%" stopColor="#a3e635" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.3" />
          </radialGradient>
        </defs>

        {/* Main trunk - JAGGED edges */}
        <path
          d="M 85 160 L 87 165 L 85 170 L 88 178 L 86 185 L 89 193 L 87 200 L 90 208 L 88 216 L 91 225 L 89 235 L 95 237 L 93 228 L 96 220 L 94 212 L 97 204 L 95 196 L 98 188 L 96 180 L 99 172 L 97 164 L 100 160 Z"
          fill={`url(#trunkDark${position})`}
        />

        {/* Trunk highlight - light side */}
        <path
          d="M 97 164 L 99 172 L 96 180 L 98 188 L 95 196 L 97 204 L 94 212 L 96 220 L 93 228 L 95 237"
          stroke={`url(#trunkLight${position})`}
          strokeWidth="2"
          fill="none"
        />

        {/* LEFT BRANCH 1 - with sub-branches */}
        <path
          d="M 87 190 L 82 188 L 75 185 L 68 182 L 60 180 L 55 179"
          stroke="#1a0a00"
          strokeWidth="4"
          strokeLinecap="square"
        />
        <path
          d="M 88 190 L 83 189 L 76 186 L 69 183 L 61 181"
          stroke="#78350f"
          strokeWidth="2"
          strokeLinecap="square"
        />
        {/* Sub-branch 1 */}
        <path d="M 68 182 L 65 177 L 62 173" stroke="#1a0a00" strokeWidth="2.5" />
        <path d="M 69 182 L 66 178 L 64 175" stroke="#fef3c7" strokeWidth="1" opacity="0.5" />
        {/* Sub-branch 2 */}
        <path d="M 60 180 L 57 184 L 54 187" stroke="#1a0a00" strokeWidth="2" />

        {/* RIGHT BRANCH 1 */}
        <path
          d="M 96 185 L 102 183 L 109 180 L 116 178 L 123 176 L 128 175"
          stroke="#1a0a00"
          strokeWidth="4"
          strokeLinecap="square"
        />
        <path
          d="M 97 185 L 103 184 L 110 181 L 117 179 L 124 177"
          stroke="#fef3c7"
          strokeWidth="2"
          strokeLinecap="square"
          opacity="0.6"
        />
        {/* Sub-branch */}
        <path d="M 116 178 L 119 173 L 122 169" stroke="#1a0a00" strokeWidth="2.5" />

        {/* LEFT BRANCH 2 - higher up */}
        <path
          d="M 88 170 L 80 168 L 72 166 L 64 165"
          stroke="#1a0a00"
          strokeWidth="3.5"
          strokeLinecap="square"
        />
        <path
          d="M 89 170 L 81 169 L 73 167"
          stroke="#78350f"
          strokeWidth="1.5"
        />
        {/* Sub-branch */}
        <path d="M 72 166 L 69 162 L 66 159" stroke="#1a0a00" strokeWidth="2" />
        <path d="M 73 166 L 70 163 L 68 161" stroke="#fef3c7" strokeWidth="1" opacity="0.4" />

        {/* RIGHT BRANCH 2 - higher up */}
        <path
          d="M 98 175 L 106 173 L 114 171 L 122 170"
          stroke="#1a0a00"
          strokeWidth="3.5"
          strokeLinecap="square"
        />
        <path
          d="M 99 175 L 107 174 L 115 172"
          stroke="#fef3c7"
          strokeWidth="1.5"
          opacity="0.6"
        />

        {/* FOLIAGE - jagged clusters on branches */}
        {/* Dark foliage cluster 1 */}
        <path
          d="M 50 178 L 48 175 L 52 173 L 49 170 L 53 168 L 50 165 L 54 163 L 56 166 L 58 163 L 61 166 L 63 164 L 65 167 L 67 165 L 69 168 L 70 171 L 68 174 L 66 177 L 64 180 L 61 182 L 58 180 L 55 182 L 52 180 Z"
          fill={`url(#foliageDark${position})`}
        />
        {/* Light foliage cluster 1 */}
        <path
          d="M 54 170 L 56 168 L 58 170 L 60 168 L 62 170 L 64 168 L 66 171 L 64 173 L 62 176 L 60 174 L 58 176 L 56 173 Z"
          fill={`url(#foliageLight${position})`}
        />

        {/* Dark foliage cluster 2 - right side */}
        <path
          d="M 120 174 L 122 171 L 125 173 L 127 170 L 130 172 L 132 169 L 135 171 L 134 174 L 132 177 L 130 180 L 127 178 L 125 181 L 122 179 L 120 177 Z"
          fill={`url(#foliageDark${position})`}
        />
        {/* Light foliage cluster 2 */}
        <path
          d="M 125 173 L 127 171 L 129 173 L 131 171 L 133 174 L 131 176 L 129 178 L 127 176 Z"
          fill={`url(#foliageLight${position})`}
        />

        {/* Top foliage cluster - dark */}
        <path
          d="M 58 164 L 56 161 L 60 159 L 58 156 L 62 154 L 90 154 L 94 156 L 92 159 L 96 161 L 94 164 L 98 166 L 95 169 L 92 167 L 89 170 L 86 168 L 83 171 L 80 169 L 77 172 L 74 170 L 71 173 L 68 171 L 65 174 L 62 172 L 60 169 Z"
          fill={`url(#foliageDark${position})`}
        />
        {/* Top foliage light highlights */}
        <path
          d="M 65 160 L 70 158 L 75 161 L 80 159 L 85 162 L 90 160 L 94 163 L 90 166 L 85 164 L 80 167 L 75 165 L 70 168 Z"
          fill={`url(#foliageLight${position})`}
        />

        {/* BARK TEXTURE - jagged dark marks */}
        <path d="M 88 195 L 90 198 L 88 201" stroke="#1a0a00" strokeWidth="1.5" opacity="0.8" />
        <path d="M 93 205 L 95 208 L 93 211" stroke="#1a0a00" strokeWidth="1.5" opacity="0.8" />
        <path d="M 90 218 L 92 221 L 90 224" stroke="#1a0a00" strokeWidth="1.5" opacity="0.8" />
      </svg>
    </motion.div>
  );
}

// Pine Needles - scattered small details
export function PineNeedles() {
  const needles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 360,
    delay: i * 0.3,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {needles.map((needle) => (
        <motion.div
          key={needle.id}
          initial={{ opacity: 0, rotate: needle.rotation }}
          animate={{
            opacity: [0, 0.2, 0],
            rotate: needle.rotation + 180,
          }}
          transition={{
            duration: 8,
            delay: needle.delay,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          style={{
            position: "absolute",
            left: `${needle.x}%`,
            top: `${needle.y}%`,
          }}
        >
          <svg width="20" height="3" viewBox="0 0 20 3">
            <line
              x1="0"
              y1="1.5"
              x2="20"
              y2="1.5"
              stroke="#22c55e"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.5"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

// Paint Drips - flowing down effect
export function PaintDrips() {
  return (
    <div className="fixed top-0 left-0 right-0 h-32 pointer-events-none z-5 overflow-hidden">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <linearGradient id="dripGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#78350f" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="dripGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#92400e" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Paint drip 1 */}
        <motion.path
          d="M 20 0 Q 18 10, 20 20 Q 22 30, 20 40 L 22 40 Q 24 30, 22 20 Q 24 10, 22 0 Z"
          fill="url(#dripGrad1)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        />

        {/* Paint drip 2 */}
        <motion.path
          d="M 60 0 Q 58 15, 60 30 Q 62 45, 60 60 L 62 60 Q 64 45, 62 30 Q 64 15, 62 0 Z"
          fill="url(#dripGrad2)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, delay: 1, repeat: Infinity, repeatDelay: 3 }}
        />

        {/* Paint drip 3 */}
        <motion.path
          d="M 90 0 Q 88 8, 90 16 Q 92 24, 90 32 L 92 32 Q 94 24, 92 16 Q 94 8, 92 0 Z"
          fill="url(#dripGrad1)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
        />
      </svg>
    </div>
  );
}

// Large Jagged Tree - dramatic limbs with high contrast
export function JaggedTree({ position = "left" }: { position?: "left" | "right" }) {
  return (
    <div className={`fixed ${position === "left" ? "left-0" : "right-0"} bottom-0 pointer-events-none overflow-hidden z-5`}>
      <svg width="400" height="600" viewBox="0 0 400 600" fill="none">
        <defs>
          {/* Very dark trunk */}
          <linearGradient id={`bigTrunkDark${position}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0a0400" stopOpacity="1" />
            <stop offset="50%" stopColor="#1a0a00" stopOpacity="0.98" />
            <stop offset="100%" stopColor="#451a03" stopOpacity="0.9" />
          </linearGradient>

          {/* Light side */}
          <linearGradient id={`bigTrunkLight${position}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#78350f" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#fef3c7" stopOpacity="0.5" />
          </linearGradient>

          {/* Dark foliage */}
          <radialGradient id={`bigFoliageDark${position}`}>
            <stop offset="0%" stopColor="#0f2f0f" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#1a3a1a" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0a0a00" stopOpacity="0.6" />
          </radialGradient>

          {/* Light foliage */}
          <radialGradient id={`bigFoliageLight${position}`}>
            <stop offset="0%" stopColor="#d9f99d" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#84cc16" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#365314" stopOpacity="0.3" />
          </radialGradient>
        </defs>

        {/* MASSIVE TRUNK with jagged bark */}
        <path
          d="M 160 450 L 165 465 L 162 480 L 168 495 L 164 510 L 170 525 L 166 540 L 172 555 L 168 570 L 174 585 L 170 600 L 230 600 L 226 585 L 232 570 L 228 555 L 234 540 L 230 525 L 236 510 L 232 495 L 238 480 L 234 465 L 240 450 Z"
          fill={`url(#bigTrunkDark${position})`}
        />

        {/* Light side highlight */}
        <path
          d="M 234 465 L 238 480 L 232 495 L 236 510 L 230 525 L 234 540 L 228 555 L 232 570 L 226 585 L 230 600"
          stroke={`url(#bigTrunkLight${position})`}
          strokeWidth="8"
          fill="none"
        />

        {/* MAJOR LEFT BRANCH - thick with sub-branches */}
        <path
          d="M 165 520 L 150 515 L 135 508 L 118 500 L 100 491 L 82 482 L 64 473 L 46 465 L 28 458 L 10 452"
          stroke="#0a0400"
          strokeWidth="14"
          strokeLinecap="square"
        />
        <path
          d="M 166 520 L 151 516 L 136 509 L 119 501 L 101 492 L 83 483"
          stroke="#78350f"
          strokeWidth="6"
        />
        <path
          d="M 167 520 L 152 517 L 137 510 L 120 502"
          stroke="#fef3c7"
          strokeWidth="2"
          opacity="0.6"
        />

        {/* Sub-branch 1 from left branch */}
        <path
          d="M 100 491 L 95 478 L 88 465 L 82 452"
          stroke="#0a0400"
          strokeWidth="8"
        />
        <path
          d="M 101 491 L 96 479 L 90 467"
          stroke="#fef3c7"
          strokeWidth="2"
          opacity="0.5"
        />

        {/* Sub-branch 2 from left branch */}
        <path
          d="M 64 473 L 58 486 L 52 498 L 46 510"
          stroke="#0a0400"
          strokeWidth="6"
        />

        {/* MAJOR RIGHT BRANCH */}
        <path
          d="M 235 510 L 252 505 L 270 498 L 288 490 L 306 482 L 324 474 L 342 467 L 360 461 L 378 456 L 395 452"
          stroke="#0a0400"
          strokeWidth="14"
          strokeLinecap="square"
        />
        <path
          d="M 236 510 L 253 506 L 271 499 L 289 491 L 307 483"
          stroke="#fef3c7"
          strokeWidth="6"
          opacity="0.7"
        />

        {/* Sub-branch from right branch */}
        <path
          d="M 306 482 L 312 468 L 318 454 L 324 440"
          stroke="#0a0400"
          strokeWidth="8"
        />
        <path
          d="M 307 482 L 313 469 L 319 456"
          stroke="#fef3c7"
          strokeWidth="2"
          opacity="0.6"
        />

        {/* UPPER LEFT BRANCH */}
        <path
          d="M 170 485 L 155 478 L 138 470 L 120 463 L 102 457 L 84 452 L 66 448"
          stroke="#0a0400"
          strokeWidth="11"
        />
        <path
          d="M 171 485 L 156 479 L 139 471 L 121 464"
          stroke="#78350f"
          strokeWidth="5"
        />

        {/* Sub-branches from upper left */}
        <path d="M 120 463 L 115 450 L 110 437" stroke="#0a0400" strokeWidth="6" />
        <path d="M 102 457 L 97 468 L 92 478" stroke="#0a0400" strokeWidth="5" />

        {/* UPPER RIGHT BRANCH */}
        <path
          d="M 232 490 L 248 483 L 265 476 L 282 470 L 299 465 L 316 461"
          stroke="#0a0400"
          strokeWidth="11"
        />
        <path
          d="M 233 490 L 249 484 L 266 477 L 283 471"
          stroke="#fef3c7"
          strokeWidth="5"
          opacity="0.7"
        />

        {/* FOLIAGE CLUSTERS - massive jagged shapes */}
        {/* Dark cluster left 1 */}
        <path
          d="M 5 448 L 8 440 L 15 435 L 20 428 L 28 425 L 35 420 L 42 418 L 50 415 L 58 418 L 65 422 L 72 428 L 78 435 L 82 443 L 85 452 L 82 460 L 78 468 L 72 475 L 65 480 L 58 483 L 50 480 L 42 477 L 35 472 L 28 465 L 20 458 L 15 452 L 8 448 Z"
          fill={`url(#bigFoliageDark${position})`}
        />
        {/* Light highlights left 1 */}
        <path
          d="M 25 435 L 35 430 L 45 428 L 55 430 L 65 435 L 72 442 L 75 450 L 72 458 L 65 465 L 55 470 L 45 472 L 35 468 L 28 458 Z"
          fill={`url(#bigFoliageLight${position})`}
        />

        {/* Dark cluster right 1 */}
        <path
          d="M 315 435 L 322 428 L 330 425 L 338 423 L 346 425 L 354 428 L 362 433 L 368 440 L 372 448 L 374 456 L 372 464 L 368 472 L 362 478 L 354 482 L 346 484 L 338 482 L 330 478 L 322 472 L 316 464 L 313 456 L 313 448 Z"
          fill={`url(#bigFoliageDark${position})`}
        />
        {/* Light highlights right 1 */}
        <path
          d="M 330 435 L 340 432 L 350 435 L 358 442 L 362 450 L 360 458 L 352 465 L 342 468 L 333 465 L 327 456 Z"
          fill={`url(#bigFoliageLight${position})`}
        />

        {/* Upper left foliage cluster */}
        <path
          d="M 60 440 L 68 433 L 78 430 L 88 432 L 98 437 L 106 445 L 110 454 L 108 463 L 102 471 L 94 476 L 84 478 L 74 475 L 66 468 L 61 458 Z"
          fill={`url(#bigFoliageDark${position})`}
        />
        <path
          d="M 75 440 L 85 438 L 93 442 L 98 450 L 96 458 L 88 464 L 80 466 L 73 460 Z"
          fill={`url(#bigFoliageLight${position})`}
        />

        {/* Upper right foliage cluster */}
        <path
          d="M 280 463 L 288 456 L 298 453 L 308 455 L 316 460 L 322 468 L 324 476 L 320 484 L 312 490 L 302 493 L 292 491 L 284 485 L 279 476 Z"
          fill={`url(#bigFoliageDark${position})`}
        />
        <path
          d="M 292 463 L 302 461 L 310 465 L 314 473 L 310 481 L 302 485 L 294 483 L 289 475 Z"
          fill={`url(#bigFoliageLight${position})`}
        />

        {/* BARK TEXTURE - deep dark cracks */}
        <path d="M 172 530 L 176 538 L 174 546 L 178 554" stroke="#0a0400" strokeWidth="3" opacity="0.9" />
        <path d="M 220 545 L 224 553 L 222 561 L 226 569" stroke="#0a0400" strokeWidth="3" opacity="0.9" />
        <path d="M 195 520 L 199 528 L 197 536" stroke="#0a0400" strokeWidth="2.5" opacity="0.85" />
        <path d="M 185 565 L 189 573 L 187 581" stroke="#0a0400" strokeWidth="2.5" opacity="0.85" />
      </svg>
    </div>
  );
}

// Gradient Blob Background - organic shapes
export function GradientBlobs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Large blob 1 */}
      <motion.div
        initial={{ x: "-20%", y: "-20%" }}
        animate={{
          x: ["20%", "-10%", "10%", "-20%"],
          y: ["-10%", "20%", "-15%", "-20%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-blue-200/30 via-green-200/20 to-transparent rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(14,165,233,0.15) 0%, rgba(34,197,94,0.1) 50%, rgba(120,53,15,0.05) 100%)"
        }}
      />

      {/* Large blob 2 */}
      <motion.div
        initial={{ x: "80%", y: "80%" }}
        animate={{
          x: ["70%", "85%", "75%", "80%"],
          y: ["70%", "60%", "80%", "80%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(120,53,15,0.1) 50%, rgba(14,165,233,0.05) 100%)"
        }}
      />

      {/* Medium blob */}
      <motion.div
        initial={{ x: "50%", y: "50%" }}
        animate={{
          x: ["45%", "55%", "50%"],
          y: ["45%", "50%", "55%", "50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(146,64,14,0.1) 0%, rgba(34,197,94,0.08) 50%, transparent 100%)"
        }}
      />
    </div>
  );
}
