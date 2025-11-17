"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Animated Twigs - floating branches with brown gradients
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
            opacity: [0, 0.3, 0.3, 0]
          }}
          transition={{
            duration: twig.duration,
            delay: twig.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute"
        >
          <svg width="60" height="8" viewBox="0 0 60 8" fill="none">
            <defs>
              <linearGradient id={`twigGrad${twig.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#78350f" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#92400e" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#451a03" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            {/* Organic twig path with rough edges */}
            <path
              d="M 0 4 Q 10 2, 20 4 T 40 3 T 60 4"
              stroke={`url(#twigGrad${twig.id})`}
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            {/* Small branch offshoots */}
            <path d="M 15 4 L 12 1" stroke="#78350f" strokeWidth="1.5" opacity="0.6" />
            <path d="M 35 3 L 38 1" stroke="#78350f" strokeWidth="1.5" opacity="0.6" />
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

// Rough Edge Overlay - SVG organic borders
export function RoughEdges() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <linearGradient id="roughEdgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#78350f" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#92400e" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#451a03" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Top rough edge */}
        <path
          d="M 0 0 Q 50 5, 100 0 Q 150 3, 200 0 Q 300 4, 400 0 Q 500 2, 600 0 Q 700 5, 800 0 Q 900 3, 1000 0 Q 1100 4, 1200 0 Q 1300 2, 1400 0 Q 1500 3, 1600 0 Q 1700 5, 1800 0 Q 1900 2, 2000 0 L 2000 50 L 0 50 Z"
          fill="url(#roughEdgeGrad)"
          opacity="0.3"
        />

        {/* Bottom rough edge */}
        <path
          d="M 0 100% Q 50 -5, 100 0 Q 150 -3, 200 0 Q 300 -4, 400 0 Q 500 -2, 600 0 Q 700 -5, 800 0 Q 900 -3, 1000 0 Q 1100 -4, 1200 0 Q 1300 -2, 1400 0 Q 1500 -3, 1600 0 Q 1700 -5, 1800 0 Q 1900 -2, 2000 0 L 2000 -50 L 0 -50 Z"
          fill="url(#roughEdgeGrad)"
          opacity="0.3"
          transform="translate(0, -50)"
        />
      </svg>
    </div>
  );
}

// Pine Tree Effects - decorative corner elements
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
      animate={{ opacity: 0.15, scale: 1 }}
      transition={{ duration: 1 }}
      className={`absolute ${positionClasses[position]} pointer-events-none`}
    >
      <svg width="120" height="180" viewBox="0 0 120 180" fill="none">
        <defs>
          {/* Pine foliage gradient */}
          <radialGradient id={`pineGrad${position}`} cx="50%" cy="50%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#78350f" stopOpacity="0.3" />
          </radialGradient>

          {/* Trunk gradient */}
          <linearGradient id={`trunkGrad${position}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#92400e" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#78350f" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Pine tree trunk */}
        <rect x="54" y="120" width="12" height="60" fill={`url(#trunkGrad${position})`} rx="2" />

        {/* Bottom layer - largest */}
        <path
          d="M 60 120 L 35 140 Q 30 138, 32 135 L 55 115 Q 58 112, 60 115 L 88 135 Q 90 138, 85 140 Z"
          fill={`url(#pineGrad${position})`}
          opacity="0.8"
        />

        {/* Middle layer */}
        <path
          d="M 60 100 L 40 118 Q 38 116, 40 114 L 58 95 Q 60 93, 62 95 L 80 114 Q 82 116, 80 118 Z"
          fill={`url(#pineGrad${position})`}
          opacity="0.7"
        />

        {/* Top layer - smallest */}
        <path
          d="M 60 80 L 45 95 Q 44 93, 46 92 L 58 78 Q 60 76, 62 78 L 74 92 Q 76 93, 75 95 Z"
          fill={`url(#pineGrad${position})`}
          opacity="0.6"
        />

        {/* Tree top point */}
        <path
          d="M 60 60 L 52 78 L 60 75 L 68 78 Z"
          fill={`url(#pineGrad${position})`}
          opacity="0.5"
        />

        {/* Snow highlights */}
        <ellipse cx="60" cy="75" rx="8" ry="3" fill="#f8fafc" opacity="0.4" />
        <ellipse cx="60" cy="95" rx="10" ry="3" fill="#f8fafc" opacity="0.3" />
        <ellipse cx="60" cy="115" rx="12" ry="3" fill="#f8fafc" opacity="0.3" />
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
