"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects, services, about } from "@/lib/content";

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
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-stone-50 to-emerald-50 dark:from-stone-900 dark:via-slate-900 dark:to-emerald-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-amber-50/90 dark:bg-stone-900/90 backdrop-blur-md border-b border-amber-200 dark:border-stone-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800 bg-clip-text text-transparent flex items-center gap-2"
            >
              <span className="text-2xl">🏔️</span>
              Web Redesigned
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-8 text-sm font-medium"
            >
              <a href="#work" className="text-stone-700 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400 transition-colors">
                Journey
              </a>
              <a href="#services" className="text-stone-700 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400 transition-colors">
                Services
              </a>
              <a href="#about" className="text-stone-700 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400 transition-colors">
                About
              </a>
              <a href="#contact" className="text-stone-700 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400 transition-colors">
                Connect
              </a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 text-6xl opacity-20">🌲</div>
        <div className="absolute top-40 left-10 text-5xl opacity-15">🍂</div>
        <div className="absolute bottom-10 right-20 text-5xl opacity-15">🌿</div>

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
              🏡
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-6 text-stone-900 dark:text-amber-50"
            >
              Welcome to the
              <br />
              <span className="bg-gradient-to-r from-amber-700 via-orange-600 to-emerald-700 bg-clip-text text-transparent">
                Digital Homestead
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-stone-600 dark:text-stone-300 mb-8 max-w-3xl mx-auto"
            >
              Like a path through the forest, every great project begins with a journey.
              Let's build something meaningful together.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex gap-4 justify-center flex-wrap"
            >
              <a
                href="#contact"
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-medium transition-all shadow-lg shadow-amber-500/30"
              >
                🛤️ Start the Journey
              </a>
              <a
                href="#work"
                className="bg-emerald-100 dark:bg-emerald-900/30 hover:bg-emerald-200 dark:hover:bg-emerald-900/50 text-emerald-900 dark:text-emerald-100 px-8 py-4 rounded-lg font-medium transition-colors border border-emerald-300 dark:border-emerald-700"
              >
                🌲 Explore the Trail
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Milestones */}
      <section className="py-16 bg-gradient-to-r from-stone-100 via-amber-50 to-stone-100 dark:from-stone-800 dark:via-amber-950 dark:to-stone-800">
        <div className="container mx-auto px-6">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-2xl font-semibold text-stone-700 dark:text-stone-300 mb-8"
          >
            Milestones Along the Path
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: "🏔️", number: "50+", label: "Summits Reached", subtext: "Projects Delivered" },
              { icon: "🌟", number: "98%", label: "Happy Travelers", subtext: "Client Satisfaction" },
              { icon: "🌲", number: "5+", label: "Years on Trail", subtext: "Experience" },
              { icon: "🛤️", number: "24/7", label: "Always Open", subtext: "Support Available" },
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
                <div className="text-4xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-stone-700 dark:text-stone-300">
                  {stat.label}
                </div>
                <div className="text-xs text-stone-500 dark:text-stone-400">
                  {stat.subtext}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work - The Trail */}
      <section id="work" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-6xl mb-4">🌄</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900 dark:text-amber-50">
              The Journey So Far
            </h2>
            <p className="text-lg text-stone-600 dark:text-stone-300">
              Every project is a new trail - here are some favorite viewpoints
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
                className="group bg-white dark:bg-stone-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-stone-200 dark:border-stone-700"
              >
                <div className="h-64 bg-gradient-to-br from-amber-600 via-orange-500 to-emerald-600 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-8xl opacity-30 group-hover:scale-110 transition-transform duration-500">
                    🏕️
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-stone-900 dark:text-amber-50">
                    {project.title}
                  </h3>
                  <p className="text-stone-600 dark:text-stone-300 mb-4">
                    {project.longDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 px-3 py-1 rounded-full text-sm border border-amber-200 dark:border-amber-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 text-sm">
                    {project.url && (
                      <a
                        href={project.url}
                        className="text-amber-700 dark:text-amber-400 hover:underline font-medium flex items-center gap-1"
                      >
                        View Trail →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Trail Guides */}
      <section id="services" className="py-20 px-6 bg-gradient-to-b from-emerald-50 via-amber-50 to-stone-50 dark:from-emerald-950 dark:via-stone-900 dark:to-stone-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-6xl mb-4">🧭</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900 dark:text-amber-50">
              Ways I Can Guide You
            </h2>
            <p className="text-lg text-stone-600 dark:text-stone-300">
              From clearing the path to building the destination
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
                className="bg-white dark:bg-stone-800 p-6 rounded-xl hover:shadow-lg transition-shadow border border-stone-200 dark:border-stone-700"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-stone-900 dark:text-amber-50">
                  {service.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-300 text-sm mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-stone-500 dark:text-stone-400 flex items-start gap-2"
                    >
                      <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About - The Homestead */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-6xl mb-6">🏡</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-stone-900 dark:text-amber-50">
              About the Homestead
            </h2>
            <p className="text-xl text-stone-600 dark:text-stone-300 mb-8 leading-relaxed">
              {about.bio}
            </p>
            <p className="text-lg text-stone-600 dark:text-stone-300">
              Like a well-built cabin that stands through seasons, I believe in creating
              lasting solutions that grow with your needs. Every line of code is a stone
              in the foundation, every feature a beam in the structure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA - The Destination */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-amber-700 via-orange-600 to-emerald-700 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 text-8xl opacity-20">🏔️</div>
        <div className="absolute bottom-10 left-10 text-7xl opacity-20">🌲</div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl mb-6">🛤️</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Begin the Journey?
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Every great adventure starts with a single step. Let's take that step together.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href={`mailto:${about.email}`}
                className="bg-white hover:bg-amber-50 text-amber-800 px-8 py-4 rounded-lg font-medium transition-colors shadow-lg"
              >
                📮 Send a Message
              </a>
              <a
                href="#work"
                className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 rounded-lg font-medium transition-colors"
              >
                🌄 View the Trail
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2 flex items-center gap-2">
                <span>🏔️</span>
                Web Redesigned
              </div>
              <p className="text-sm text-stone-400">
                © 2024 Building digital paths, one stone at a time
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
                  className="hover:text-amber-400 transition-colors"
                >
                  LinkedIn
                </a>
              )}
              {about.twitter && (
                <a
                  href={about.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Twitter
                </a>
              )}
            </div>
          </div>

          {/* Hidden hint for adventurers */}
          <div className="mt-8 pt-8 border-t border-stone-800 text-center">
            <p className="text-xs text-stone-600 font-mono flex items-center justify-center gap-2">
              <span>🗺️</span>
              // Hidden trails await those who know the secret path...
            </p>
          </div>
        </div>
      </footer>

      {/* Easter Egg Modal - The Hidden Path */}
      {showEasterEgg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-stone-900/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowEasterEgg(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gradient-to-br from-amber-900 via-stone-900 to-emerald-900 rounded-2xl p-8 max-w-md border-2 border-amber-600 shadow-2xl shadow-amber-500/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🗺️</div>
              <h3 className="text-2xl font-bold text-amber-100 mb-2">
                Secret Path Discovered!
              </h3>
              <p className="text-stone-300">
                You found the hidden trail through the forest
              </p>
            </div>

            <div className="space-y-3">
              <Link
                href="/adventures"
                className="block bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white px-6 py-3 rounded-lg font-medium transition-all text-center"
              >
                🛤️ Choose Your Path
              </Link>
              <button
                onClick={() => setShowEasterEgg(false)}
                className="block w-full bg-stone-800 hover:bg-stone-700 text-amber-100 px-6 py-3 rounded-lg font-medium transition-colors text-center"
              >
                Return to Homestead
              </button>
            </div>

            <p className="text-xs text-stone-400 text-center mt-4">
              Two trails diverge in the woods... which will you take?
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
