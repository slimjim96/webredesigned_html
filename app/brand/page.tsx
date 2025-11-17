"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { allLogoVariations } from "@/components/logos/BrandVariations";

export default function BrandShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-green-50 to-blue-50 dark:bg-gradient-to-b dark:from-slate-900 dark:via-blue-950 dark:to-emerald-950 py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6 transition-colors text-sm"
          >
            <span>←</span> Back to Home
          </Link>

          <div className="text-7xl mb-6">🏔️</div>

          <h1 className="text-4xl md:text-6xl font-bold font-grotesk mb-4 text-slate-900 dark:text-blue-50">
            20 Logo Explorations
          </h1>

          <p className="text-xl text-slate-700 dark:text-slate-300 mb-3 max-w-3xl mx-auto">
            Nature-Inspired • Mountain • Friendly • Playful
          </p>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Each variation celebrates the outdoors, growth, and welcoming creativity.
            From happy trees to winding paths, these logos bring the Bob Ross spirit to life.
          </p>
        </motion.div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12">
          {allLogoVariations.map((logo, index) => {
            const LogoComponent = logo.component;

            return (
              <motion.div
                key={logo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.03 }}
                className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:-translate-y-1"
              >
                {/* Logo Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">
                    #{logo.id}
                  </span>
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

        {/* Theme Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <h2 className="text-2xl font-bold font-grotesk mb-6 text-slate-900 dark:text-blue-50 text-center">
            Design Themes & Concepts
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🏔️</div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-blue-100 mb-2">Mountains</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                #1, #5, #7, #10, #12, #13, #16, #18, #20
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">🌲</div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-blue-100 mb-2">Trees & Nature</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                #2, #6, #8, #9, #11, #15
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">🛤️</div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-blue-100 mb-2">Paths & Journey</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                #3, #4, #14, #19
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-blue-100 mb-2">Abstract & Modern</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                #17, #18
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
            <h3 className="font-bold text-sm text-slate-900 dark:text-blue-100 mb-3 text-center">
              Color Palette Guide
            </h3>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-sky-400"></div>
                <span className="text-xs text-slate-600 dark:text-slate-400">Sky & Water</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-400"></div>
                <span className="text-xs text-slate-600 dark:text-slate-400">Forest & Growth</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300"></div>
                <span className="text-xs text-slate-600 dark:text-slate-400">Sun & Warmth</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-amber-700 to-amber-900"></div>
                <span className="text-xs text-slate-600 dark:text-slate-400">Earth & Wood</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* With Text Preview Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-gradient-to-br from-blue-50 to-green-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 shadow-lg border border-blue-200 dark:border-blue-900"
        >
          <h2 className="text-2xl font-bold font-grotesk mb-6 text-slate-900 dark:text-blue-50 text-center">
            Selected Favorites with Brand Name
          </h2>
          <p className="text-center text-sm text-slate-600 dark:text-slate-400 mb-8">
            See how these logos look paired with "Web Redesigned"
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[2, 7, 13, 16, 19, 20].map((id) => {
              const logo = allLogoVariations.find(l => l.id === id);
              if (!logo) return null;
              const LogoComponent = logo.component;

              return (
                <div
                  key={id}
                  className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-md flex flex-col items-center"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <LogoComponent className="w-12 h-12" />
                    <span className="text-xl font-bold font-grotesk bg-gradient-to-r from-blue-600 via-sky-500 to-green-600 dark:from-blue-400 dark:via-green-400 dark:to-blue-500 bg-clip-text text-transparent">
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            🎨 Which design speaks to you? Each tells a different story of growth, creativity, and welcoming spaces.
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            These are all SVG vectors that scale beautifully and work in any size or context.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
