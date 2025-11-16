"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects, services, about } from "@/lib/content";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ExecutiveSummaryPage() {
  const totalProjects = projects.length;
  const featuredProjects = projects.filter(p => p.featured).length;
  const technologies = new Set(projects.flatMap(p => p.technologies)).size;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      {/* Top Bar */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/adventures/business" className="text-blue-600 hover:text-blue-700 text-sm">
            ← Back to Business Views
          </Link>
          <div className="text-sm font-medium text-slate-600 dark:text-slate-300">
            📊 Executive Summary
          </div>
          <Link href="/" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 text-sm">
            Home
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="max-w-4xl mx-auto mb-12"
        >
          <motion.div variants={fadeInUp} className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              Executive Summary
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Key metrics and capabilities at a glance
            </p>
          </motion.div>

          {/* Key Metrics Cards */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg text-center"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Projects Delivered
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg text-center"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                98%
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Client Satisfaction
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg text-center"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                5+
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Years Experience
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg text-center"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {technologies}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Technologies
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Core Competencies */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-6xl mx-auto mb-12"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold mb-8 text-slate-900 dark:text-white"
          >
            Core Competencies
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                      {service.description}
                    </p>
                    <ul className="space-y-1">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-sm text-slate-500 dark:text-slate-400 flex items-start gap-2"
                        >
                          <span className="text-blue-600 dark:text-blue-400 mt-0.5">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Portfolio Summary */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-6xl mx-auto mb-12"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold mb-8 text-slate-900 dark:text-white"
          >
            Featured Project Portfolio
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(p => p.featured).map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-40 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl">
                  💼
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Key Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Business Impact */}
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 mb-3">
                    <div className="text-xs font-semibold text-green-700 dark:text-green-400 mb-1">
                      Business Impact
                    </div>
                    <div className="text-sm text-slate-700 dark:text-slate-300">
                      Improved user engagement and streamlined operations
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack Overview */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-4xl mx-auto mb-12"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold mb-8 text-slate-900 dark:text-white"
          >
            Technology Stack
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg"
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-bold mb-3 text-blue-600 dark:text-blue-400">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Tailwind"].map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 text-purple-600 dark:text-purple-400">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Python", "PostgreSQL", "MongoDB"].map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 text-green-600 dark:text-green-400">
                  DevOps
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Docker", "AWS", "Vercel", "CI/CD"].map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-blue-100 mb-6">
              Let's discuss how I can help bring your vision to life
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href={`mailto:${about.email}`}
                className="bg-white hover:bg-slate-100 text-blue-600 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Get In Touch
              </a>
              <Link
                href="/adventures/business/casestudy"
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
