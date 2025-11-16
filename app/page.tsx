"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Experience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  available: boolean;
}

const experiences: Experience[] = [
  {
    id: "terminal",
    title: "The Terminal",
    subtitle: "CLI Interface",
    description: "Navigate like a developer. Type commands to explore the portfolio.",
    icon: "⌨️",
    color: "from-green-500 to-emerald-600",
    available: true,
  },
  {
    id: "classic",
    title: "Classic View",
    subtitle: "Traditional Portfolio",
    description: "Clean, professional layout for quick browsing.",
    icon: "🎯",
    color: "from-blue-500 to-indigo-600",
    available: true,
  },
  {
    id: "workshop",
    title: "The Workshop",
    subtitle: "Code-Driven",
    description: "Watch the site build itself with live code.",
    icon: "🛠️",
    color: "from-purple-500 to-violet-600",
    available: true,
  },
  {
    id: "canvas",
    title: "The Canvas",
    subtitle: "Interactive Playground",
    description: "Drag and drop components. Build your own layout.",
    icon: "🎨",
    color: "from-pink-500 to-rose-600",
    available: false,
  },
  {
    id: "journey",
    title: "The Journey",
    subtitle: "Scrollytelling",
    description: "Immersive storytelling with smooth animations.",
    icon: "📖",
    color: "from-orange-500 to-amber-600",
    available: false,
  },
  {
    id: "studio",
    title: "The Studio",
    subtitle: "3D Virtual Office",
    description: "Explore a 3D workspace. Click to discover.",
    icon: "🏢",
    color: "from-cyan-500 to-teal-600",
    available: false,
  },
  {
    id: "layers",
    title: "The Layers",
    subtitle: "Depth Navigation",
    description: "Navigate through stacked cards in 3D space.",
    icon: "📐",
    color: "from-yellow-500 to-orange-500",
    available: false,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Web Redesigned
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            Choose Your Experience
          </p>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            This portfolio offers multiple ways to explore. Each experience showcases the same work through a different lens.
            Pick the one that resonates with you.
          </p>
        </motion.div>

        {/* Experience Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {experiences.map((exp) => (
            <motion.div key={exp.id} variants={item}>
              {exp.available ? (
                <Link href={`/${exp.id}`}>
                  <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer h-full">
                    {/* Icon */}
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {exp.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-sm text-purple-300 mb-3">{exp.subtitle}</p>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4">
                      {exp.description}
                    </p>

                    {/* Gradient bar */}
                    <div
                      className={`h-1 w-full rounded-full bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>

                    {/* Hover effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                    ></div>
                  </div>
                </Link>
              ) : (
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5 opacity-50 cursor-not-allowed h-full">
                  {/* Coming Soon Badge */}
                  <div className="absolute top-4 right-4 bg-purple-500/20 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-500/30">
                    Coming Soon
                  </div>

                  {/* Icon */}
                  <div className="text-5xl mb-4">{exp.icon}</div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-sm text-purple-300/50 mb-3">{exp.subtitle}</p>

                  {/* Description */}
                  <p className="text-gray-500 text-sm mb-4">
                    {exp.description}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-16 text-gray-400 text-sm"
        >
          <p>Not sure which to choose? Start with <Link href="/classic" className="text-purple-400 hover:text-purple-300 underline">Classic View</Link> for a traditional experience.</p>
        </motion.div>
      </div>
    </main>
  );
}
