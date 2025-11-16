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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Link
            href="/"
            className="inline-block text-sm text-gray-400 hover:text-gray-300 mb-4"
          >
            ← Back to Home
          </Link>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Choose Your Path
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            Two ways to explore, each with unique experiences
          </p>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Are you here for business or pleasure? Pick the path that matches your vibe.
          </p>
        </motion.div>

        {/* Two Main Paths */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Business Path */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/adventures/business">
              <div className="group relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 h-full cursor-pointer hover:scale-105 transition-transform duration-300 shadow-2xl shadow-blue-500/30">
                {/* Icon */}
                <div className="text-8xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  💼
                </div>

                {/* Title */}
                <h2 className="text-4xl font-bold mb-4">Business Path</h2>
                <p className="text-blue-100 mb-6 text-lg">
                  For clients, stakeholders, and decision-makers
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-300">✓</span>
                    <span className="text-sm">ROI-focused insights</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-300">✓</span>
                    <span className="text-sm">Case study deep-dives</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-300">✓</span>
                    <span className="text-sm">Process & methodology</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-300">✓</span>
                    <span className="text-sm">Client testimonials</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium group-hover:bg-blue-50 transition-colors">
                  Explore Business Views
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300"></div>
              </div>
            </Link>
          </motion.div>

          {/* Developer Path */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/adventures/developer">
              <div className="group relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 h-full cursor-pointer hover:scale-105 transition-transform duration-300 shadow-2xl shadow-purple-500/30">
                {/* Icon */}
                <div className="text-8xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🚀
                </div>

                {/* Title */}
                <h2 className="text-4xl font-bold mb-4">Developer Path</h2>
                <p className="text-purple-100 mb-6 text-lg">
                  For developers, designers, and tech enthusiasts
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-300">✓</span>
                    <span className="text-sm">Interactive code demos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-300">✓</span>
                    <span className="text-sm">Terminal interface</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-300">✓</span>
                    <span className="text-sm">Tech stack deep-dives</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-300">✓</span>
                    <span className="text-sm">Easter eggs & surprises</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-medium group-hover:bg-purple-50 transition-colors">
                  Explore Developer Views
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-purple-400 opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300"></div>
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
          <p className="text-gray-400 mb-4">Not sure which path to take?</p>
          <Link
            href="/classic"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            Try the Classic View
            <span>→</span>
          </Link>
        </motion.div>

        {/* Footer hint */}
        <div className="mt-20 text-center">
          <p className="text-xs text-gray-600">
            💡 Tip: Each path offers multiple unique experiences
          </p>
        </div>
      </div>
    </div>
  );
}
