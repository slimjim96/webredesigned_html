"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CodeReveal from "@/components/workshop/CodeReveal";
import { projects, services, about } from "@/lib/content";
import Link from "next/link";

interface Section {
  id: string;
  title: string;
  code: string;
  component: React.ReactNode;
}

export default function WorkshopPage() {
  const [currentSection, setCurrentSection] = useState(0);
  const [showOutput, setShowOutput] = useState(false);
  const [completedSections, setCompletedSections] = useState<number[]>([]);

  const sections: Section[] = [
    {
      id: "header",
      title: "Building the Header",
      code: `const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 text-center">
      <h1 className="text-4xl font-bold">${about.name}</h1>
      <p className="text-xl mt-2">${about.title}</p>
    </header>
  );
};`,
      component: (
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 text-center rounded-lg"
        >
          <h1 className="text-4xl font-bold">{about.name}</h1>
          <p className="text-xl mt-2">{about.title}</p>
        </motion.header>
      ),
    },
    {
      id: "about",
      title: "Creating the About Section",
      code: `const About = () => {
  return (
    <section className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-3">About</h2>
      <p>${about.bio}</p>
    </section>
  );
};`,
      component: (
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow"
        >
          <h2 className="text-2xl font-bold mb-3">About</h2>
          <p className="text-slate-600 dark:text-slate-300">{about.bio}</p>
        </motion.section>
      ),
    },
    {
      id: "projects",
      title: "Rendering Projects",
      code: `const Projects = () => {
  const projects = [
    { title: "${projects[0].title}", desc: "${projects[0].description}" },
    { title: "${projects[1].title}", desc: "${projects[1].description}" }
  ];

  return (
    <section className="p-6">
      <h2>Featured Projects</h2>
      {projects.map(p => (
        <div key={p.title} className="project-card">
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
        </div>
      ))}
    </section>
  );
};`,
      component: (
        <motion.section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow"
        >
          <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
          <div className="space-y-3">
            {projects.slice(0, 2).map((project) => (
              <div key={project.id} className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold">{project.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
              </div>
            ))}
          </div>
        </motion.section>
      ),
    },
    {
      id: "services",
      title: "Adding Services",
      code: `const Services = () => {
  const services = [
    { icon: "${services[0].icon}", title: "${services[0].title}" },
    { icon: "${services[1].icon}", title: "${services[1].title}" }
  ];

  return (
    <section className="grid grid-cols-2 gap-4">
      {services.map(s => (
        <div className="service-card" key={s.title}>
          <span className="text-4xl">{s.icon}</span>
          <h3>{s.title}</h3>
        </div>
      ))}
    </section>
  );
};`,
      component: (
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="grid grid-cols-2 gap-4"
        >
          {services.slice(0, 2).map((service) => (
            <div
              key={service.id}
              className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow text-center"
            >
              <span className="text-4xl block mb-2">{service.icon}</span>
              <h3 className="font-bold">{service.title}</h3>
            </div>
          ))}
        </motion.section>
      ),
    },
  ];

  const handleCodeComplete = () => {
    setTimeout(() => {
      setShowOutput(true);
      setTimeout(() => {
        setCompletedSections((prev) => [...prev, currentSection]);
      }, 1000);
    }, 500);
  };

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection((prev) => prev + 1);
      setShowOutput(false);
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection((prev) => prev - 1);
      setShowOutput(true); // Show output immediately for previous sections
    }
  };

  const progress = ((currentSection + 1) / sections.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Top Navigation */}
      <div className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm">
            ← Back to Experiences
          </Link>
          <div className="text-sm text-slate-400">
            The Workshop: Watch the Code Build
          </div>
          <div className="text-sm text-slate-400">
            {currentSection + 1} / {sections.length}
          </div>
        </div>
        {/* Progress Bar */}
        <motion.div
          className="h-1 bg-blue-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left: Code Editor */}
          <div>
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">
                {sections[currentSection].title}
              </h2>
              <p className="text-slate-400 text-sm">
                Watch as we write the code to build this section
              </p>
            </div>

            <CodeReveal
              key={currentSection}
              code={sections[currentSection].code}
              onComplete={handleCodeComplete}
              speed={15}
            />

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={handlePrevious}
                disabled={currentSection === 0}
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 disabled:bg-slate-800 disabled:text-slate-600 rounded-lg transition-colors"
              >
                ← Previous
              </button>
              <button
                onClick={handleNext}
                disabled={!showOutput || currentSection === sections.length - 1}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-600 rounded-lg transition-colors flex-1"
              >
                {currentSection === sections.length - 1 ? "Completed!" : "Next Section →"}
              </button>
            </div>

            {/* Quick Navigation */}
            <div className="mt-6 p-4 bg-slate-800 rounded-lg">
              <p className="text-sm text-slate-400 mb-2">Jump to section:</p>
              <div className="flex flex-wrap gap-2">
                {sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      setCurrentSection(index);
                      setShowOutput(completedSections.includes(index));
                    }}
                    className={`px-3 py-1 rounded text-sm transition-colors ${
                      index === currentSection
                        ? "bg-blue-600 text-white"
                        : completedSections.includes(index)
                        ? "bg-green-600/30 text-green-400 hover:bg-green-600/50"
                        : "bg-slate-700 text-slate-400 hover:bg-slate-600"
                    }`}
                  >
                    {index + 1}. {section.id}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Live Preview */}
          <div>
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Live Preview</h2>
              <p className="text-slate-400 text-sm">
                The rendered output appears here
              </p>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 min-h-[500px]">
              <AnimatePresence mode="wait">
                {showOutput ? (
                  <motion.div
                    key={currentSection}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    {sections[currentSection].component}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center justify-center h-full text-slate-600"
                  >
                    <div className="text-center">
                      <div className="text-6xl mb-4">⚙️</div>
                      <p>Compiling...</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {currentSection === sections.length - 1 && showOutput && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-6 bg-green-900/20 border border-green-500/30 rounded-lg text-center"
              >
                <p className="text-green-400 font-bold mb-2">🎉 Workshop Complete!</p>
                <p className="text-sm text-slate-300 mb-4">
                  You've seen how each component is built. Ready to explore more?
                </p>
                <div className="flex gap-3 justify-center">
                  <Link
                    href="/classic"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                  >
                    View Classic Portfolio
                  </Link>
                  <Link
                    href="/terminal"
                    className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                  >
                    Try Terminal Mode
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
