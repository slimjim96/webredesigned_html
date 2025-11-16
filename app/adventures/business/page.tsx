"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface BusinessExperience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  available: boolean;
}

const experiences: BusinessExperience[] = [
  {
    id: "executive",
    title: "Executive Summary",
    subtitle: "Quick Overview",
    description: "High-level metrics, ROI, and key achievements at a glance.",
    icon: "📊",
    color: "from-blue-500 to-indigo-600",
    available: true,
  },
  {
    id: "casestudy",
    title: "Case Study Journey",
    subtitle: "Deep Dive",
    description: "Problem → Solution → Results. See the complete project story.",
    icon: "📖",
    color: "from-purple-500 to-violet-600",
    available: true,
  },
  {
    id: "roi",
    title: "ROI Dashboard",
    subtitle: "Business Value",
    description: "Performance metrics, conversions, and measurable impact.",
    icon: "📈",
    color: "from-green-500 to-emerald-600",
    available: false,
  },
  {
    id: "timeline",
    title: "Process Timeline",
    subtitle: "How I Work",
    description: "Visual journey through my development process and methodology.",
    icon: "⏱️",
    color: "from-orange-500 to-amber-600",
    available: false,
  },
  {
    id: "testimonials",
    title: "Client Stories",
    subtitle: "Social Proof",
    description: "Hear directly from satisfied clients about their experience.",
    icon: "💬",
    color: "from-pink-500 to-rose-600",
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

export default function BusinessAdventuresPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Link
            href="/adventures"
            className="inline-block text-sm text-gray-300 hover:text-white mb-4"
          >
            ← Back to Path Selection
          </Link>
          <div className="text-6xl mb-4">💼</div>
          <h1 className="text-5xl font-bold mb-4">Business Adventures</h1>
          <p className="text-xl text-blue-200 mb-2">
            Choose how you'd like to explore
          </p>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto">
            Each view is designed for decision-makers and stakeholders who want to understand
            the business value and impact.
          </p>
        </motion.div>

        {/* Experience Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {experiences.map((exp) => (
            <motion.div key={exp.id} variants={item}>
              {exp.available ? (
                <Link href={`/adventures/business/${exp.id}`}>
                  <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer h-full">
                    {/* Icon */}
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {exp.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-sm text-blue-300 mb-3">{exp.subtitle}</p>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-4">
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
                  <div className="absolute top-4 right-4 bg-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/30">
                    Coming Soon
                  </div>

                  {/* Icon */}
                  <div className="text-5xl mb-4">{exp.icon}</div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-sm text-blue-300/50 mb-3">{exp.subtitle}</p>

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
          className="text-center mt-16 text-gray-300 text-sm"
        >
          <p>
            Want a traditional view?{" "}
            <Link href="/classic" className="text-blue-400 hover:text-blue-300 underline">
              Try Classic Portfolio
            </Link>
          </p>
          <p className="mt-2">
            More technical?{" "}
            <Link href="/adventures/developer" className="text-purple-400 hover:text-purple-300 underline">
              Switch to Developer Path
            </Link>
          </p>
        </motion.div>
      </div>
    </main>
  );
}
