"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects, services, about } from "@/lib/content";
import { BrushStrokeLogo } from "@/components/logos";
import {
  FloatingTwigs,
  OrganicPixels,
  RoughEdges,
  PineTreeDecor,
  PineNeedles,
  PaintDrips,
  GradientBlobs,
} from "@/components/organic";
import {
  WatercolorSunriseLogo,
  OrganicLayersLogo,
  RoughCloudLogo,
} from "@/components/logos/OrganicVariations";

// Konami code sequence: ↑ ↑ ↓ ↓ ← → ← → B A
const KONAMI_CODE = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a"
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function HomePage() {
  const [konamiIndex, setKonamiIndex] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();

      if (key === KONAMI_CODE[konamiIndex]) {
        const newIndex = konamiIndex + 1;

        if (newIndex === KONAMI_CODE.length) {
          setShowEasterEgg(true);
          setKonamiIndex(0);
        } else {
          setKonamiIndex(newIndex);
        }
      } else {
        setKonamiIndex(0);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [konamiIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-sky-50 to-green-50 dark:from-slate-900 dark:via-blue-950 dark:to-emerald-950 relative overflow-hidden">
      {/* Organic Background Effects */}
      <GradientBlobs />
      <FloatingTwigs />
      <OrganicPixels />
      <PineNeedles />
      <RoughEdges />
      <PaintDrips />

      {/* Pine Tree Decorations */}
      <PineTreeDecor position="top-right" />
      <PineTreeDecor position="bottom-left" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-amber-50/95 dark:bg-slate-900/90 backdrop-blur-md border-b border-amber-200/50 dark:border-slate-700 relative">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <OrganicLayersLogo className="w-12 h-12" />
              <span className="text-2xl font-bold font-grotesk bg-gradient-to-r from-amber-800 via-green-700 to-blue-700 dark:from-blue-400 dark:via-green-400 dark:to-amber-500 bg-clip-text text-transparent">
                Web Redesigned
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-8 text-sm font-medium"
            >
              <a href="#work" className="text-amber-900 dark:text-slate-300 hover:text-green-700 dark:hover:text-green-400 transition-colors">
                Gallery
              </a>
              <a href="#services" className="text-amber-900 dark:text-slate-300 hover:text-green-700 dark:hover:text-green-400 transition-colors">
                Techniques
              </a>
              <a href="#about" className="text-amber-900 dark:text-slate-300 hover:text-green-700 dark:hover:text-green-400 transition-colors">
                The Artist
              </a>
              <a href="#contact" className="text-amber-900 dark:text-slate-300 hover:text-green-700 dark:hover:text-green-400 transition-colors">
                Let's Create
              </a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        {/* Decorative organic logo elements */}
        <motion.div
          className="absolute top-20 right-10"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 0.15, scale: 1, rotate: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <RoughCloudLogo className="w-32 h-32" />
        </motion.div>
        <motion.div
          className="absolute top-40 left-10"
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 0.12, scale: 1, rotate: 0 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <WatercolorSunriseLogo className="w-28 h-28" />
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.12, scale: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        >
          <OrganicLayersLogo className="w-28 h-28" />
        </motion.div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.1 } },
            }}
            className="text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="text-7xl mb-6"
            >
              🖌️
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold font-grotesk mb-6 text-amber-950 dark:text-blue-50"
            >
              Let's Paint
              <br />
              <span className="bg-gradient-to-r from-amber-800 via-green-700 to-blue-800 dark:from-blue-400 dark:via-green-400 dark:to-amber-500 bg-clip-text text-transparent">
                Happy Little Websites
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-amber-900 dark:text-slate-300 mb-8 max-w-3xl mx-auto"
            >
              There are no mistakes, only happy accidents. Every project is a fresh canvas
              where we blend creativity with code to create something beautiful.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex gap-4 justify-center flex-wrap"
            >
              <a
                href="#contact"
                className="bg-gradient-to-r from-amber-700 via-green-600 to-blue-700 hover:from-amber-800 hover:via-green-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-xl shadow-amber-900/30 relative overflow-hidden group"
              >
                <span className="relative z-10">🎨 Start Your Masterpiece</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a
                href="#work"
                className="bg-amber-100/80 dark:bg-slate-800 hover:bg-amber-200/90 dark:hover:bg-slate-700 text-amber-950 dark:text-slate-200 px-8 py-4 rounded-xl font-medium transition-colors border-2 border-amber-400/60 dark:border-blue-700 backdrop-blur-sm"
              >
                🖼️ View the Gallery
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - The Palette */}
      <section className="py-16 bg-gradient-to-r from-amber-100/70 via-green-100/60 to-sky-100/70 dark:from-slate-800 dark:via-blue-950 dark:to-emerald-950 relative">
        <div className="container mx-auto px-6 relative z-10">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-2xl font-semibold text-amber-950 dark:text-slate-300 mb-2"
          >
            Colors on the Palette
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-amber-800 dark:text-slate-400 mb-8"
          >
            Every great painting starts with the right mix
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: "🎨", number: "50+", label: "Canvases Completed", subtext: "Projects Delivered" },
              { icon: "⭐", number: "98%", label: "Happy Artists", subtext: "Client Satisfaction" },
              { icon: "🌲", number: "5+", label: "Years Painting", subtext: "Experience" },
              { icon: "☀️", number: "24/7", label: "Studio Open", subtext: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-bold bg-gradient-to-r from-amber-800 via-green-700 to-blue-700 dark:from-blue-400 dark:to-green-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-amber-950 dark:text-slate-300">
                  {stat.label}
                </div>
                <div className="text-xs text-amber-800 dark:text-slate-400">
                  {stat.subtext}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work - The Gallery */}
      <section id="work" className="py-20 px-6 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ rotate: 0 }}
              whileInView={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <WatercolorSunriseLogo className="w-24 h-24 mx-auto" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold font-grotesk mb-4 text-amber-950 dark:text-blue-50">
              The Gallery
            </h2>
            <p className="text-lg text-amber-900 dark:text-slate-300">
              Each project is a unique landscape, painted with care and precision
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-amber-50/60 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-amber-200/50 dark:border-blue-900 backdrop-blur-sm"
              >
                <div className="h-64 bg-gradient-to-br from-amber-200 via-green-200 to-sky-200 dark:from-blue-900 dark:via-slate-800 dark:to-emerald-900 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-20"
                    initial={{ scale: 1, rotate: 0 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.5 }}
                  >
                    <OrganicLayersLogo className="w-48 h-48" />
                  </motion.div>
                  {/* Organic gradient blobs */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-radial from-amber-400/20 to-transparent rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-radial from-green-400/20 to-transparent rounded-full blur-2xl"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-gradient-radial from-blue-300/15 to-transparent rounded-full blur-3xl"></div>
                </div>
                <div className="p-6 bg-gradient-to-b from-amber-50/50 to-transparent">
                  <h3 className="text-2xl font-bold mb-3 text-amber-950 dark:text-blue-50">
                    {project.title}
                  </h3>
                  <p className="text-amber-900 dark:text-slate-300 mb-4">
                    {project.longDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="bg-gradient-to-r from-amber-100 to-green-100 dark:bg-blue-900/30 text-amber-900 dark:text-blue-300 px-3 py-1 rounded-full text-sm border border-amber-300/50 dark:border-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 text-sm">
                    {project.url && (
                      <a
                        href={project.url}
                        className="text-green-700 dark:text-blue-400 hover:text-amber-800 dark:hover:text-green-400 hover:underline font-medium flex items-center gap-1 transition-colors"
                      >
                        View Canvas →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Painting Techniques */}
      <section id="services" className="py-20 px-6 bg-gradient-to-br from-green-100/50 via-amber-100/60 to-sky-100/50 dark:from-emerald-950 dark:via-slate-900 dark:to-blue-950 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ y: 0 }}
              whileInView={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <RoughCloudLogo className="w-24 h-24 mx-auto" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold font-grotesk mb-4 text-amber-950 dark:text-blue-50">
              Painting Techniques
            </h2>
            <p className="text-lg text-amber-900 dark:text-slate-300">
              Every brush stroke has a purpose, every layer adds depth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-amber-50 via-white to-green-50/30 dark:bg-slate-800 p-6 rounded-2xl hover:shadow-2xl transition-all duration-500 border-2 border-amber-200/40 dark:border-blue-900 backdrop-blur-sm group"
              >
                <motion.div
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-amber-950 dark:text-blue-50">
                  {service.title}
                </h3>
                <p className="text-amber-900 dark:text-slate-300 text-sm mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-amber-800 dark:text-slate-400 flex items-start gap-2"
                    >
                      <span className="text-green-700 dark:text-green-400 mt-0.5 font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About - The Artist */}
      <section id="about" className="py-20 px-6 relative">
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              className="text-6xl mb-6 inline-block"
              whileHover={{ rotate: [0, -10, 10, -10, 10, 0] }}
              transition={{ duration: 0.6 }}
            >
              👨‍🎨
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold font-grotesk mb-6 text-amber-950 dark:text-blue-50">
              The Artist's Corner
            </h2>
            <p className="text-xl text-amber-900 dark:text-slate-300 mb-8 leading-relaxed">
              {about.bio}
            </p>
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-200/30 via-green-200/30 to-blue-200/30 blur-xl rounded-2xl"></div>
              <p className="text-lg text-amber-950 dark:text-slate-300 italic relative bg-amber-50/50 dark:bg-slate-800/50 p-6 rounded-xl border-2 border-amber-300/50 dark:border-blue-800 backdrop-blur-sm">
                "We don't make mistakes, just happy accidents. In web development, every challenge
                is an opportunity to create something even better than we imagined."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA - Let's Paint Together */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-amber-600 via-green-600 to-blue-600 dark:from-blue-900 dark:via-slate-800 dark:to-emerald-900 relative overflow-hidden">
        {/* Decorative organic logos */}
        <motion.div
          className="absolute top-10 right-10 opacity-15"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <WatercolorSunriseLogo className="w-32 h-32" />
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-10 opacity-15"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <RoughCloudLogo className="w-28 h-28" />
        </motion.div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-radial from-amber-400/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-radial from-green-400/20 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block mb-6"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <OrganicLayersLogo className="w-24 h-24 mx-auto" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold font-grotesk mb-6 text-white drop-shadow-lg">
              Let's Paint Together
            </h2>
            <p className="text-xl text-amber-50 mb-8 drop-shadow">
              Every masterpiece starts with a single brush stroke. Ready to create yours?
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href={`mailto:${about.email}`}
                className="bg-white hover:bg-amber-50 text-amber-900 px-8 py-4 rounded-xl font-medium transition-all shadow-2xl hover:shadow-amber-900/50 hover:scale-105"
              >
                📧 Send a Message
              </a>
              <a
                href="#work"
                className="bg-amber-900/80 hover:bg-amber-900 text-white px-8 py-4 rounded-xl font-medium transition-all backdrop-blur-sm border-2 border-amber-100/20 hover:border-amber-100/40"
              >
                🖼️ See More Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-950 via-slate-900 to-green-950 dark:bg-slate-950 text-slate-300 py-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-950/20 pointer-events-none"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="text-2xl font-bold font-grotesk bg-gradient-to-r from-amber-400 via-green-400 to-blue-400 bg-clip-text text-transparent mb-2 flex items-center gap-3">
                <OrganicLayersLogo className="w-10 h-10" />
                Web Redesigned
              </div>
              <p className="text-sm text-amber-200/70">
                © 2024 Painting happy little websites, one pixel at a time
              </p>
            </div>
            <div className="flex gap-6">
              {about.github && (
                <a
                  href={about.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  GitHub
                </a>
              )}
              {about.linkedin && (
                <a
                  href={about.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  LinkedIn
                </a>
              )}
              {about.twitter && (
                <a
                  href={about.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Twitter
                </a>
              )}
            </div>
          </div>

          {/* Hidden hint for creative souls */}
          <div className="mt-8 pt-8 border-t border-amber-900/50 text-center">
            <p className="text-xs text-amber-700/60 font-mono flex items-center justify-center gap-2">
              <span>🖌️</span>
              // There are secret techniques hidden in this canvas...
            </p>
          </div>
        </div>
      </footer>

      {/* Easter Egg Modal - Secret Technique */}
      {showEasterEgg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowEasterEgg(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gradient-to-br from-blue-900 via-slate-800 to-green-900 rounded-2xl p-8 max-w-md border-2 border-blue-500 shadow-2xl shadow-blue-500/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold font-grotesk text-blue-100 mb-2">
                Secret Technique Unlocked!
              </h3>
              <p className="text-slate-300">
                You've discovered the artist's hidden palette
              </p>
            </div>

            <div className="space-y-3">
              <Link
                href="/adventures"
                className="block bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-6 py-3 rounded-lg font-medium transition-all text-center"
              >
                🖌️ Explore Different Styles
              </Link>
              <button
                onClick={() => setShowEasterEgg(false)}
                className="block w-full bg-slate-700 hover:bg-slate-600 text-blue-100 px-6 py-3 rounded-lg font-medium transition-colors text-center"
              >
                Return to Canvas
              </button>
            </div>

            <p className="text-xs text-slate-400 text-center mt-4">
              "There are no mistakes, only happy accidents" - Bob Ross
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
