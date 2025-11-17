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
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-100 to-green-100 dark:from-slate-900 dark:via-blue-950 dark:to-emerald-950 relative overflow-hidden">
      {/* Decorative Nature Elements - soft and peaceful */}
      <div className="absolute top-10 left-10 text-8xl opacity-10">🌲</div>
      <div className="absolute top-20 right-20 text-6xl opacity-10">☁️</div>
      <div className="absolute bottom-20 left-20 text-7xl opacity-10">🌊</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-10">🎨</div>

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
            className="inline-block text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-4 flex items-center justify-center gap-2"
          >
            <span>🏠</span> Return to the Studio
          </Link>
          <div className="text-7xl mb-6">🎨</div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-sky-500 to-green-600 dark:from-blue-400 dark:via-sky-400 dark:to-green-400 bg-clip-text text-transparent">
            Choose Your Canvas
          </h1>
          <p className="text-xl text-slate-700 dark:text-slate-300 mb-2">
            Two different painting styles, one beautiful portfolio
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Like choosing between landscapes and portraits, each style shows the work in its own light.
            Both are painted with care, just different techniques.
          </p>
        </motion.div>

        {/* Two Main Paths */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Business Path - The Landscape Canvas */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/adventures/business">
              <div className="group relative bg-gradient-to-br from-blue-50 to-sky-100 dark:from-blue-950 dark:to-sky-900 rounded-3xl p-8 h-full cursor-pointer hover:scale-105 transition-transform duration-300 shadow-xl border-2 border-blue-200 dark:border-blue-800">
                {/* Icon */}
                <div className="text-8xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🖼️
                </div>

                {/* Title */}
                <h2 className="text-4xl font-bold mb-4 text-slate-800 dark:text-blue-100">Landscape View</h2>
                <p className="text-blue-600 dark:text-blue-300 mb-2 text-sm uppercase tracking-wide font-semibold">Business Canvas</p>
                <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg">
                  For those seeking the big picture - strategy, value, and results
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-500">📊</span>
                    <span className="text-sm text-slate-700 dark:text-slate-300">Clear business outcomes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-500">📖</span>
                    <span className="text-sm text-slate-700 dark:text-slate-300">Project journeys & stories</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-500">🎯</span>
                    <span className="text-sm text-slate-700 dark:text-slate-300">ROI and impact metrics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-500">⭐</span>
                    <span className="text-sm text-slate-700 dark:text-slate-300">Strategic overview</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg">
                  Paint the Landscape
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>

                {/* Soft glow effect */}
                <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300"></div>
              </div>
            </Link>
          </motion.div>

          {/* Developer Path - The Detail Canvas */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/adventures/developer">
              <div className="group relative bg-gradient-to-br from-green-50 to-emerald-100 dark:from-emerald-950 dark:to-green-900 rounded-3xl p-8 h-full cursor-pointer hover:scale-105 transition-transform duration-300 shadow-xl border-2 border-green-200 dark:border-green-800">
                {/* Icon */}
                <div className="text-8xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🖌️
                </div>

                {/* Title */}
                <h2 className="text-4xl font-bold mb-4 text-slate-800 dark:text-green-100">Detail View</h2>
                <p className="text-green-600 dark:text-green-300 mb-2 text-sm uppercase tracking-wide font-semibold">Technical Canvas</p>
                <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg">
                  For those who love the brushwork - code, craft, and creativity
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">⌨️</span>
                    <span className="text-sm text-slate-700 dark:text-slate-300">Interactive code demos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">🛠️</span>
                    <span className="text-sm text-slate-700 dark:text-slate-300">Live building sessions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">🌲</span>
                    <span className="text-sm text-slate-700 dark:text-slate-300">Tech stack exploration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✨</span>
                    <span className="text-sm text-slate-700 dark:text-slate-300">Happy little features</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg">
                  Add the Details
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>

                {/* Soft glow effect */}
                <div className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300"></div>
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
          <p className="text-slate-600 dark:text-slate-400 mb-4 flex items-center justify-center gap-2">
            <span>🎨</span>
            Not sure which style to choose?
          </p>
          <Link
            href="/classic"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <span>🖼️</span>
            Try the Classic Gallery
            <span>→</span>
          </Link>
        </motion.div>

        {/* Footer hint */}
        <div className="mt-20 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-600 flex items-center justify-center gap-2 italic">
            <span>☁️</span>
            "There are no mistakes, only happy accidents"
            <span>🌲</span>
          </p>
        </div>
      </div>
    </div>
  );
}
