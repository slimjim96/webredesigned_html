"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects, services, about } from "@/lib/content";
import { BrushStrokeLogo } from "@/components/logos";

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
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:via-blue-950 dark:to-emerald-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-sky-50/95 dark:bg-slate-900/90 backdrop-blur-md border-b border-sky-200 dark:border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <BrushStrokeLogo className="w-10 h-10" />
              <span className="text-2xl font-bold font-grotesk bg-gradient-to-r from-blue-600 via-sky-500 to-green-600 dark:from-blue-400 dark:via-green-400 dark:to-blue-500 bg-clip-text text-transparent">
                Web Redesigned
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-8 text-sm font-medium"
            >
              <a href="#work" className="text-slate-800 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Gallery
              </a>
              <a href="#services" className="text-slate-800 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Techniques
              </a>
              <a href="#about" className="text-slate-800 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                The Artist
              </a>
              <a href="#contact" className="text-slate-800 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Let's Create
              </a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        {/* Decorative elements - happy little trees and clouds */}
        <div className="absolute top-20 right-10 text-6xl opacity-20">🌲</div>
        <div className="absolute top-40 left-10 text-5xl opacity-15">☁️</div>
        <div className="absolute bottom-10 right-20 text-5xl opacity-15">🌊</div>

        <div className="container mx-auto max-w-5xl">
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
              className="text-5xl md:text-7xl font-bold font-grotesk mb-6 text-slate-800 dark:text-blue-50"
            >
              Let's Paint
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-green-600 to-blue-700 dark:from-blue-400 dark:via-green-400 dark:to-blue-500 bg-clip-text text-transparent">
                Happy Little Websites
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 max-w-3xl mx-auto"
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
                className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-4 rounded-lg font-medium transition-all shadow-lg shadow-blue-500/30"
              >
                🎨 Start Your Masterpiece
              </a>
              <a
                href="#work"
                className="bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 px-8 py-4 rounded-lg font-medium transition-colors border-2 border-blue-300 dark:border-blue-700"
              >
                🖼️ View the Gallery
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - The Palette */}
      <section className="py-16 bg-slate-50 dark:bg-gradient-to-r dark:from-slate-800 dark:via-blue-950 dark:to-emerald-950">
        <div className="container mx-auto px-6">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-2"
          >
            Colors on the Palette
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-slate-500 dark:text-slate-400 mb-8"
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
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-400 dark:to-green-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {stat.subtext}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work - The Gallery */}
      <section id="work" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-6xl mb-4">🖼️</div>
            <h2 className="text-4xl md:text-5xl font-bold font-grotesk mb-4 text-slate-900 dark:text-blue-50">
              The Gallery
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300">
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
                className="group bg-sky-50/30 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-blue-900"
              >
                <div className="h-64 bg-gradient-to-br from-sky-300 via-blue-200 to-green-300 dark:from-blue-900 dark:via-slate-800 dark:to-emerald-900 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-8xl opacity-30 group-hover:scale-110 transition-transform duration-500">
                    🎨
                  </div>
                  {/* Paint brush strokes effect */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-300/20 rounded-full blur-3xl"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-blue-50">
                    {project.title}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    {project.longDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-200 dark:border-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 text-sm">
                    {project.url && (
                      <a
                        href={project.url}
                        className="text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center gap-1"
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
      <section id="services" className="py-20 px-6 bg-slate-50 dark:bg-gradient-to-b dark:from-emerald-950 dark:via-slate-900 dark:to-blue-950">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-6xl mb-4">🖌️</div>
            <h2 className="text-4xl md:text-5xl font-bold font-grotesk mb-4 text-slate-900 dark:text-blue-50">
              Painting Techniques
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300">
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
                className="bg-white dark:bg-slate-800 p-6 rounded-xl hover:shadow-lg transition-shadow border border-slate-200 dark:border-blue-900"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-blue-50">
                  {service.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-slate-500 dark:text-slate-400 flex items-start gap-2"
                    >
                      <span className="text-green-600 dark:text-green-400 mt-0.5">✓</span>
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
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-6xl mb-6">👨‍🎨</div>
            <h2 className="text-4xl md:text-5xl font-bold font-grotesk mb-6 text-slate-900 dark:text-blue-50">
              The Artist's Corner
            </h2>
            <p className="text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
              {about.bio}
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 italic">
              "We don't make mistakes, just happy accidents. In web development, every challenge
              is an opportunity to create something even better than we imagined."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA - Let's Paint Together */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-500 via-sky-400 to-green-500 dark:from-blue-900 dark:via-slate-800 dark:to-emerald-900 relative overflow-hidden">
        {/* Decorative paint splatters */}
        <div className="absolute top-10 right-10 text-8xl opacity-20">🎨</div>
        <div className="absolute bottom-10 left-10 text-7xl opacity-20">🖌️</div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-green-300/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl mb-6">🎨</div>
            <h2 className="text-4xl md:text-5xl font-bold font-grotesk mb-6 text-white">
              Let's Paint Together
            </h2>
            <p className="text-xl text-blue-100 dark:text-blue-200 mb-8">
              Every masterpiece starts with a single brush stroke. Ready to create yours?
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href={`mailto:${about.email}`}
                className="bg-white hover:bg-blue-50 text-blue-700 px-8 py-4 rounded-lg font-medium transition-colors shadow-lg"
              >
                📧 Send a Message
              </a>
              <a
                href="#work"
                className="bg-blue-700 dark:bg-blue-800 hover:bg-blue-800 dark:hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-medium transition-colors"
              >
                🖼️ See More Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 dark:bg-slate-950 text-slate-300 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="text-2xl font-bold font-grotesk bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-2 flex items-center gap-3">
                <BrushStrokeLogo className="w-8 h-8" />
                Web Redesigned
              </div>
              <p className="text-sm text-slate-400">
                © 2024 Painting happy little websites, one pixel at a time
              </p>
            </div>
            <div className="flex gap-6">
              {about.github && (
                <a
                  href={about.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  GitHub
                </a>
              )}
              {about.linkedin && (
                <a
                  href={about.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
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
          <div className="mt-8 pt-8 border-t border-slate-700 text-center">
            <p className="text-xs text-slate-600 font-mono flex items-center justify-center gap-2">
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
