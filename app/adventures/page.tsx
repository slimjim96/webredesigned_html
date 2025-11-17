"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function AdventuresPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 via-amber-950 to-emerald-950 text-white relative overflow-hidden">
      {/* Decorative Nature Elements */}
      <div className="absolute top-10 left-10 text-8xl opacity-10">🏔️</div>
      <div className="absolute top-20 right-20 text-6xl opacity-10">🌲</div>
      <div className="absolute bottom-20 left-20 text-7xl opacity-10">🌿</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-10">🏕️</div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Link
            href="/"
            className="inline-block text-sm text-amber-300 hover:text-amber-200 mb-4 flex items-center justify-center gap-2"
          >
            <span>🏡</span> Return to Homestead
          </Link>
          <div className="text-7xl mb-6">🗺️</div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-amber-300 via-orange-300 to-emerald-300 bg-clip-text text-transparent">
            Two Paths Diverge
          </h1>
          <p className="text-xl text-amber-100 mb-2">
            Choose the trail that calls to you
          </p>
          <p className="text-sm text-stone-300 max-w-2xl mx-auto">
            Like a fork in the forest trail, each path offers its own journey.
            One leads through business valleys, the other through technical peaks.
          </p>
        </motion.div>

        {/* Two Main Paths */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Business Path - The Valley Trail */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/adventures/business">
              <div className="group relative bg-gradient-to-br from-amber-800 to-orange-900 rounded-3xl p-8 h-full cursor-pointer hover:scale-105 transition-transform duration-300 shadow-2xl shadow-amber-900/50 border-2 border-amber-600/30">
                {/* Icon */}
                <div className="text-8xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🏛️
                </div>

                {/* Title */}
                <h2 className="text-4xl font-bold mb-4">The Valley Trail</h2>
                <p className="text-amber-100 mb-2 text-sm uppercase tracking-wide">Business Path</p>
                <p className="text-amber-100 mb-6 text-lg">
                  For leaders, stakeholders, and those seeking the big picture
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-300">🗺️</span>
                    <span className="text-sm">Strategic overview & ROI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-300">📖</span>
                    <span className="text-sm">Project journeys & case studies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-300">🎯</span>
                    <span className="text-sm">Business impact & metrics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-300">🌟</span>
                    <span className="text-sm">Clear outcomes & results</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="inline-flex items-center gap-2 bg-white text-amber-800 px-6 py-3 rounded-lg font-medium group-hover:bg-amber-50 transition-colors shadow-lg">
                  Walk the Valley Trail
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-amber-400 opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300"></div>
              </div>
            </Link>
          </motion.div>

          {/* Developer Path - The Mountain Trail */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/adventures/developer">
              <div className="group relative bg-gradient-to-br from-emerald-800 to-green-900 rounded-3xl p-8 h-full cursor-pointer hover:scale-105 transition-transform duration-300 shadow-2xl shadow-emerald-900/50 border-2 border-emerald-600/30">
                {/* Icon */}
                <div className="text-8xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🏔️
                </div>

                {/* Title */}
                <h2 className="text-4xl font-bold mb-4">The Mountain Trail</h2>
                <p className="text-emerald-100 mb-2 text-sm uppercase tracking-wide">Developer Path</p>
                <p className="text-emerald-100 mb-6 text-lg">
                  For builders, makers, and those who love the technical climb
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-300">⌨️</span>
                    <span className="text-sm">Interactive code experiences</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-300">🛠️</span>
                    <span className="text-sm">Live building & workshops</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-300">🌲</span>
                    <span className="text-sm">Tech stack deep-dives</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-300">🎒</span>
                    <span className="text-sm">Hidden gems & surprises</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="inline-flex items-center gap-2 bg-white text-emerald-800 px-6 py-3 rounded-lg font-medium group-hover:bg-emerald-50 transition-colors shadow-lg">
                  Climb the Mountain
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-emerald-400 opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300"></div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Not Sure? */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <p className="text-amber-200 mb-4 flex items-center justify-center gap-2">
            <span>🧭</span>
            Not sure which trail to take?
          </p>
          <Link
            href="/classic"
            className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 transition-colors"
          >
            <span>🏡</span>
            Try the Main Lodge (Classic View)
            <span>→</span>
          </Link>
        </motion.div>

        {/* Footer hint */}
        <div className="mt-20 text-center">
          <p className="text-xs text-stone-500 flex items-center justify-center gap-2">
            <span>🌲</span>
            Both trails lead to the same homestead, just different views along the way
            <span>🏔️</span>
          </p>
        </div>
      </div>
    </div>
  );
}
