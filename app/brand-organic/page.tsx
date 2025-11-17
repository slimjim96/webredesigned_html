"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { organicLogoVariations } from "@/components/logos/OrganicVariations";

export default function OrganicBrandShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-green-50 to-sky-50 dark:bg-gradient-to-b dark:from-slate-900 dark:via-emerald-950 dark:to-blue-950 py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 mb-6 transition-colors text-sm"
          >
            <span>←</span> Back to Home
          </Link>

          <div className="text-7xl mb-6">🌿</div>

          <h1 className="text-4xl md:text-6xl font-bold font-grotesk mb-4 text-slate-900 dark:text-blue-50">
            20 Organic Logo Explorations
          </h1>

          <p className="text-2xl text-green-700 dark:text-green-300 mb-3 max-w-3xl mx-auto font-grotesk">
            Rough Edges • Natural Texture • Happy Accidents
          </p>

          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto mb-4">
            These logos embrace the messy, organic, painterly aesthetic of Bob Ross.
            No perfect lines, just flowing paint, rough textures, and natural beauty.
          </p>

          <p className="text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto italic">
            "We don't make mistakes, just happy accidents." - Every splatter, drip, and rough edge is intentional chaos.
          </p>
        </motion.div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12">
          {organicLogoVariations.map((logo, index) => {
            const LogoComponent = logo.component;

            return (
              <motion.div
                key={logo.id}
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: index * 0.03 }}
                className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-600 hover:-translate-y-2 hover:rotate-1"
                style={{
                  background: index % 3 === 0
                    ? 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)'
                    : index % 3 === 1
                    ? 'linear-gradient(135deg, #ffffff 0%, #ecfeff 100%)'
                    : 'linear-gradient(135deg, #ffffff 0%, #fef3c7 100%)'
                }}
              >
                {/* Logo Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full">
                    #{logo.id}
                  </span>
                  <span className="text-xl opacity-50">🎨</span>
                </div>

                {/* Logo Display */}
                <div className="flex items-center justify-center mb-4 h-24">
                  <LogoComponent className="w-20 h-20 group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Logo Info */}
                <div className="text-center">
                  <h3 className="text-sm font-bold font-grotesk text-slate-900 dark:text-blue-50 mb-1">
                    {logo.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {logo.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Aesthetic Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border-2 border-green-200 dark:border-green-700 mb-12"
        >
          <h2 className="text-2xl font-bold font-grotesk mb-6 text-slate-900 dark:text-blue-50 text-center">
            Organic Design Elements
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">💧</div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-blue-100 mb-2">Paint Drips</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                #21, #24, #28, #31, #39
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">🌊</div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-blue-100 mb-2">Flowing Shapes</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                #22, #25, #27, #30, #36
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-blue-100 mb-2">Textured Layers</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                #23, #26, #29, #34, #35
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">☁️</div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-blue-100 mb-2">Soft Blends</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                #27, #33, #37, #38, #40
              </p>
            </div>
          </div>
        </motion.div>

        {/* Featured Organic Logos with Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-green-50 to-sky-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 shadow-lg border-2 border-green-200 dark:border-green-900 mb-12"
        >
          <h2 className="text-2xl font-bold font-grotesk mb-6 text-slate-900 dark:text-blue-50 text-center">
            Top Picks: Organic Vibes with Brand Name
          </h2>
          <p className="text-center text-sm text-slate-600 dark:text-slate-400 mb-8">
            The wildest, most natural logos paired with "Web Redesigned"
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[22, 23, 28, 33, 36, 40].map((id) => {
              const logo = organicLogoVariations.find(l => l.id === id);
              if (!logo) return null;
              const LogoComponent = logo.component;

              return (
                <div
                  key={id}
                  className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-md flex flex-col items-center hover:scale-105 transition-transform"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <LogoComponent className="w-12 h-12" />
                    <span className="text-xl font-bold font-grotesk bg-gradient-to-r from-green-600 via-sky-500 to-blue-600 dark:from-green-400 dark:via-sky-400 dark:to-blue-400 bg-clip-text text-transparent">
                      Web Redesigned
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {logo.name}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Philosophy Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-gradient-to-r from-green-100 via-amber-100 to-sky-100 dark:from-emerald-950 dark:via-slate-900 dark:to-blue-950 rounded-2xl p-8 border-2 border-green-300 dark:border-green-700"
        >
          <h2 className="text-2xl font-bold font-grotesk mb-4 text-slate-900 dark:text-blue-50 text-center">
            The Organic Philosophy
          </h2>

          <div className="prose dark:prose-invert max-w-none text-center">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              These logos reject perfection in favor of authenticity. Like Bob Ross painting happy little trees,
              each design celebrates the beauty of imperfection - rough edges, overlapping colors, paint drips,
              and organic shapes that feel <em>alive</em>.
            </p>

            <p className="text-base text-slate-600 dark:text-slate-400 mb-4">
              They're meant to feel like they were painted, not designed. Splattered with joy,
              brushed with intention, and textured with the randomness of nature itself.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <span className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full text-sm font-medium text-green-700 dark:text-green-300 border border-green-300 dark:border-green-700">
                🎨 Hand-painted feel
              </span>
              <span className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-700">
                💧 Natural imperfections
              </span>
              <span className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full text-sm font-medium text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
                🌿 Organic textures
              </span>
              <span className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
                ✨ Happy accidents
              </span>
            </div>
          </div>
        </motion.div>

        {/* Navigation to other variations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            Want to see the cleaner, more geometric variations?
          </p>
          <Link
            href="/brand"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
          >
            View Original 20 Logos →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
