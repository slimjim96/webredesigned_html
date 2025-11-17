"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PaletteBrushLogo, BrushStrokeLogo } from "@/components/logos";

export default function LogosShowcase() {
  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:via-blue-950 dark:to-emerald-950 py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors"
          >
            <span>←</span> Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold font-grotesk mb-6 text-slate-900 dark:text-blue-50">
            Logo Options
          </h1>
          <p className="text-xl text-slate-700 dark:text-slate-300 mb-4">
            Two professional logo designs for Web Redesigned
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Both logos are custom-designed SVGs that scale perfectly and work beautifully in light and dark modes
          </p>
        </motion.div>

        {/* Logo Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Option 1: Palette & Brush */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold font-grotesk mb-2 text-slate-900 dark:text-blue-50">
                Option 1: Palette & Brush
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Classic artistic tools with vibrant colors
              </p>
            </div>

            {/* Logo Display - Various Sizes */}
            <div className="space-y-8">
              {/* Large */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-8 flex items-center justify-center border border-slate-200 dark:border-slate-600">
                <div className="flex items-center gap-4">
                  <PaletteBrushLogo className="w-16 h-16" />
                  <span className="text-3xl font-bold font-grotesk bg-gradient-to-r from-blue-600 via-sky-500 to-green-600 dark:from-blue-400 dark:via-green-400 dark:to-blue-500 bg-clip-text text-transparent">
                    Web Redesigned
                  </span>
                </div>
              </div>

              {/* Medium */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 flex items-center justify-center border border-slate-200 dark:border-slate-600">
                <div className="flex items-center gap-3">
                  <PaletteBrushLogo className="w-10 h-10" />
                  <span className="text-xl font-bold font-grotesk bg-gradient-to-r from-blue-600 via-sky-500 to-green-600 dark:from-blue-400 dark:via-green-400 dark:to-blue-500 bg-clip-text text-transparent">
                    Web Redesigned
                  </span>
                </div>
              </div>

              {/* Small */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-4 flex items-center justify-center border border-slate-200 dark:border-slate-600">
                <div className="flex items-center gap-2">
                  <PaletteBrushLogo className="w-6 h-6" />
                  <span className="text-sm font-bold font-grotesk bg-gradient-to-r from-blue-600 via-sky-500 to-green-600 dark:from-blue-400 dark:via-green-400 dark:to-blue-500 bg-clip-text text-transparent">
                    Web Redesigned
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <h3 className="font-semibold text-sm text-slate-900 dark:text-blue-100 mb-2">
                Design Features:
              </h3>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <li>• Paint palette with colorful paint dots</li>
                <li>• Brush with gradient handle and bristles</li>
                <li>• Decorative paint stroke accent</li>
                <li>• Playful and artistic personality</li>
              </ul>
            </div>
          </motion.div>

          {/* Option 2: Brush Stroke */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border-2 border-blue-300 dark:border-blue-700"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold font-grotesk mb-2 text-slate-900 dark:text-blue-50">
                Option 2: Brush Stroke ⭐
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Dynamic gradient stroke with modern flair
              </p>
              <span className="inline-block mt-2 text-xs font-semibold px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">
                Currently Active
              </span>
            </div>

            {/* Logo Display - Various Sizes */}
            <div className="space-y-8">
              {/* Large */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-8 flex items-center justify-center border border-slate-200 dark:border-slate-600">
                <div className="flex items-center gap-4">
                  <BrushStrokeLogo className="w-16 h-16" />
                  <span className="text-3xl font-bold font-grotesk bg-gradient-to-r from-blue-600 via-sky-500 to-green-600 dark:from-blue-400 dark:via-green-400 dark:to-blue-500 bg-clip-text text-transparent">
                    Web Redesigned
                  </span>
                </div>
              </div>

              {/* Medium */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 flex items-center justify-center border border-slate-200 dark:border-slate-600">
                <div className="flex items-center gap-3">
                  <BrushStrokeLogo className="w-10 h-10" />
                  <span className="text-xl font-bold font-grotesk bg-gradient-to-r from-blue-600 via-sky-500 to-green-600 dark:from-blue-400 dark:via-green-400 dark:to-blue-500 bg-clip-text text-transparent">
                    Web Redesigned
                  </span>
                </div>
              </div>

              {/* Small */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-4 flex items-center justify-center border border-slate-200 dark:border-slate-600">
                <div className="flex items-center gap-2">
                  <BrushStrokeLogo className="w-6 h-6" />
                  <span className="text-sm font-bold font-grotesk bg-gradient-to-r from-blue-600 via-sky-500 to-green-600 dark:from-blue-400 dark:via-green-400 dark:to-blue-500 bg-clip-text text-transparent">
                    Web Redesigned
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <h3 className="font-semibold text-sm text-slate-900 dark:text-green-100 mb-2">
                Design Features:
              </h3>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <li>• Flowing "W" shape brush stroke</li>
                <li>• Blue-to-green gradient progression</li>
                <li>• Paint drip detail for texture</li>
                <li>• Modern, dynamic, and scalable</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Font Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border border-blue-200 dark:border-blue-900"
        >
          <h2 className="text-3xl font-bold font-grotesk mb-6 text-slate-900 dark:text-blue-50">
            Custom Typography
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold font-grotesk mb-3 text-slate-900 dark:text-blue-100">
                Space Grotesk
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Used for brand name, headings, and important text. Modern, geometric, and professional with a creative edge.
              </p>
              <div className="space-y-2">
                <div className="font-grotesk text-4xl text-slate-900 dark:text-blue-50">Web Redesigned</div>
                <div className="font-grotesk text-2xl text-slate-800 dark:text-blue-100">Beautiful Headings</div>
                <div className="font-grotesk text-lg text-slate-700 dark:text-blue-200">Subheadings & Accents</div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold font-grotesk mb-3 text-slate-900 dark:text-blue-100">
                Plus Jakarta Sans
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Used for body text, navigation, and content. Clean, friendly, and highly readable at all sizes.
              </p>
              <div className="space-y-2">
                <div className="font-jakarta text-lg text-slate-700 dark:text-slate-300">
                  This is body text in Plus Jakarta Sans. It's designed for optimal readability and works beautifully for paragraphs, descriptions, and all content needs.
                </div>
                <div className="font-jakarta text-sm text-slate-600 dark:text-slate-400">
                  Even at smaller sizes, the font maintains excellent clarity and professional appearance.
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dark/Light Mode Toggle Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-600 dark:text-slate-400">
            💡 Tip: Toggle your system's dark mode to see how the logos adapt to different themes!
          </p>
        </motion.div>
      </div>
    </div>
  );
}
