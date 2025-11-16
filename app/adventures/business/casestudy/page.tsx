"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/content";

interface CaseStudy {
  project: typeof projects[0];
  problem: string;
  solution: string;
  results: string[];
  metrics: { label: string; value: string }[];
}

const caseStudies: CaseStudy[] = [
  {
    project: projects[0],
    problem: "The client needed a scalable e-commerce platform that could handle high traffic during flash sales while providing a seamless checkout experience. Their existing solution was slow, had frequent cart abandonment, and lacked modern payment integrations.",
    solution: "Built a modern Next.js-based e-commerce platform with server-side rendering for fast page loads, implemented Stripe for secure payments, and integrated real-time inventory management. Utilized PostgreSQL for reliable data storage and Tailwind CSS for a responsive, mobile-first design.",
    results: [
      "Reduced page load time from 4.2s to 0.8s",
      "Decreased cart abandonment by 35%",
      "Increased mobile conversions by 52%",
      "Successfully handled 10x traffic during Black Friday sales",
    ],
    metrics: [
      { label: "Performance Improvement", value: "81%" },
      { label: "Conversion Rate Increase", value: "+52%" },
      { label: "Customer Satisfaction", value: "4.8/5" },
    ],
  },
  {
    project: projects[1],
    problem: "A SaaS company needed better insights into user behavior and product usage. Their existing analytics were fragmented across multiple tools, making it difficult to make data-driven decisions and identify churn risks.",
    solution: "Designed and developed a unified analytics dashboard using React and D3.js for data visualization. Integrated with multiple data sources via Node.js backend, implemented WebSocket for real-time updates, and created customizable reports stored in MongoDB.",
    results: [
      "Unified 5+ data sources into single dashboard",
      "Enabled real-time monitoring of 20+ key metrics",
      "Reduced time-to-insight from days to minutes",
      "Identified and prevented 15% potential churn",
    ],
    metrics: [
      { label: "Time Savings", value: "85%" },
      { label: "Churn Reduction", value: "15%" },
      { label: "User Adoption", value: "94%" },
    ],
  },
];

export default function CaseStudyPage() {
  const [activeStudy, setActiveStudy] = useState(0);
  const [activeSection, setActiveSection] = useState<"problem" | "solution" | "results">("problem");

  const currentStudy = caseStudies[activeStudy];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Top Bar */}
      <div className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/adventures/business" className="text-blue-600 hover:text-blue-700 text-sm">
            ← Back to Business Views
          </Link>
          <div className="text-sm font-medium text-slate-600 dark:text-slate-300">
            📖 Case Study Journey
          </div>
          <Link href="/" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 text-sm">
            Home
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Case Study Journey
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Deep dive into problem-solving and results
          </p>
        </motion.div>

        {/* Project Selector */}
        <div className="flex gap-4 justify-center mb-12 flex-wrap">
          {caseStudies.map((study, index) => (
            <button
              key={study.project.id}
              onClick={() => {
                setActiveStudy(index);
                setActiveSection("problem");
              }}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeStudy === index
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {study.project.title}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          {/* Section Navigator */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <button
              onClick={() => setActiveSection("problem")}
              className={`p-6 rounded-xl transition-all ${
                activeSection === "problem"
                  ? "bg-gradient-to-br from-red-500 to-orange-600 text-white shadow-xl"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:shadow-lg"
              }`}
            >
              <div className="text-4xl mb-2">🎯</div>
              <div className="font-bold text-lg">The Problem</div>
              <div className="text-sm opacity-75">What needed solving</div>
            </button>

            <button
              onClick={() => setActiveSection("solution")}
              className={`p-6 rounded-xl transition-all ${
                activeSection === "solution"
                  ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-xl"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:shadow-lg"
              }`}
            >
              <div className="text-4xl mb-2">💡</div>
              <div className="font-bold text-lg">The Solution</div>
              <div className="text-sm opacity-75">How we solved it</div>
            </button>

            <button
              onClick={() => setActiveSection("results")}
              className={`p-6 rounded-xl transition-all ${
                activeSection === "results"
                  ? "bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-xl"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:shadow-lg"
              }`}
            >
              <div className="text-4xl mb-2">📈</div>
              <div className="font-bold text-lg">The Results</div>
              <div className="text-sm opacity-75">Impact & metrics</div>
            </button>
          </div>

          {/* Content Area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeStudy}-${activeSection}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 mb-8 min-h-[300px]"
            >
              {/* Project Title */}
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
                {currentStudy.project.title}
              </h2>

              {/* Section Content */}
              {activeSection === "problem" && (
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-red-600 dark:text-red-400">
                    The Challenge
                  </h3>
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    {currentStudy.problem}
                  </p>
                </div>
              )}

              {activeSection === "solution" && (
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                    Our Approach
                  </h3>
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                    {currentStudy.solution}
                  </p>

                  <div className="bg-white dark:bg-slate-700 rounded-xl p-6">
                    <h4 className="font-semibold mb-3 text-slate-900 dark:text-white">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentStudy.project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "results" && (
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">
                    Measurable Impact
                  </h3>

                  {/* Key Results */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-slate-900 dark:text-white">
                      Key Outcomes:
                    </h4>
                    <div className="space-y-2">
                      {currentStudy.results.map((result, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                          <span className="text-slate-700 dark:text-slate-300">{result}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {currentStudy.metrics.map((metric, index) => (
                      <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white dark:bg-slate-700 rounded-xl p-4 text-center"
                      >
                        <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                          {metric.value}
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          {metric.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Hint */}
          <div className="text-center text-sm text-slate-500 dark:text-slate-400">
            <p>Click the sections above to explore different aspects of this project</p>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Want similar results for your project?</h3>
            <p className="text-blue-100 mb-6">
              Let's discuss how I can help achieve your business goals
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="mailto:hello@webredesigned.com"
                className="bg-white hover:bg-slate-100 text-blue-600 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Start a Conversation
              </a>
              <Link
                href="/adventures/business/executive"
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                View Executive Summary
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
