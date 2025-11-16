"use client";

import { motion } from "framer-motion";
import { projects, services, about } from "@/lib/content";
import Link from "next/link";

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

export default function ClassicPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Web Redesigned
            </Link>
            <div className="flex gap-6 text-sm">
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
              <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
              <Link href="/" className="text-blue-600 hover:text-blue-700">
                ← Other Experiences
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            {about.name}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-2xl text-slate-600 dark:text-slate-300 mb-4"
          >
            {about.title}
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8"
          >
            {about.bio}
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex gap-4 justify-center"
          >
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-6 py-3 rounded-lg transition-colors"
            >
              View Work
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white dark:bg-slate-800 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold mb-8 text-center"
            >
              About Me
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-2 gap-8"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Technical Skills</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium mb-2">Frontend</p>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((skill) => (
                        <span key={skill} className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Backend</p>
                    <div className="flex flex-wrap gap-2">
                      {["Node.js", "Python", "PostgreSQL", "MongoDB"].map((skill) => (
                        <span key={skill} className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">What I Do</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  I specialize in building modern web applications that prioritize user experience, performance, and accessibility.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  Whether it's a complex SaaS platform, an e-commerce site, or a creative portfolio, I bring the same attention to detail and commitment to quality.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold mb-12 text-center"
            >
              Featured Projects
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {projects.filter((p) => p.featured).map((project) => (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl">
                    💼
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-slate-500 text-sm">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="flex gap-3">
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                        >
                          View Live →
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-600 dark:text-slate-400 hover:text-slate-700 text-sm font-medium"
                        >
                          GitHub →
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white dark:bg-slate-800 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold mb-12 text-center"
            >
              Services
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-1">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-slate-500 dark:text-slate-400"
                      >
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold mb-6"
            >
              Let's Work Together
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-600 dark:text-slate-300 mb-8"
            >
              Have a project in mind? I'd love to hear about it.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="space-y-4"
            >
              <p className="text-xl">
                <a
                  href={`mailto:${about.email}`}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  {about.email}
                </a>
              </p>
              <div className="flex justify-center gap-6">
                {about.github && (
                  <a
                    href={about.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {about.linkedin && (
                  <a
                    href={about.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors"
                  >
                    LinkedIn
                  </a>
                )}
                {about.twitter && (
                  <a
                    href={about.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors"
                  >
                    Twitter
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2024 Web Redesigned. All rights reserved.</p>
          <p className="text-sm text-slate-400">
            Try a different experience:{" "}
            <Link href="/terminal" className="text-blue-400 hover:underline">
              The Terminal
            </Link>
            {" | "}
            <Link href="/workshop" className="text-blue-400 hover:underline">
              The Workshop
            </Link>
            {" | "}
            <Link href="/" className="text-blue-400 hover:underline">
              View All
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
