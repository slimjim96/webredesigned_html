"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { projects, services, about } from "@/lib/content";

interface HistoryEntry {
  command: string;
  output: string | React.ReactNode;
}

const COMMANDS = {
  help: "Display available commands",
  ls: "List available sections",
  clear: "Clear the terminal",
  about: "Display information about Web Redesigned",
  projects: "List all projects",
  services: "List all services",
  contact: "Show contact information",
  "project <name>": "View details of a specific project",
  skills: "Display technical skills",
  experience: "Toggle to other experiences",
};

export default function Terminal() {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Display welcome message
    setHistory([
      {
        command: "",
        output: (
          <div className="text-green-400 mb-4">
            <pre className="font-mono text-sm">
{`
╦ ╦┌─┐┌┐   ╦═╗┌─┐┌┬┐┌─┐┌─┐┬┌─┐┌┐┌┌─┐┌┬┐
║║║├┤ ├┴┐  ╠╦╝├┤  ││├┤ └─┐││ ┬│││├┤  ││
╚╩╝└─┘└─┘  ╩╚═└─┘─┴┘└─┘└─┘┴└─┘┘└┘└─┘─┴┘
`}
            </pre>
            <p className="mt-2">Welcome to the Web Redesigned Terminal Interface!</p>
            <p className="text-gray-400 mt-1">Type 'help' to see available commands.</p>
          </div>
        ),
      },
    ]);
  }, []);

  useEffect(() => {
    // Auto-scroll to bottom
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    // Focus input on mount and click
    inputRef.current?.focus();
  }, []);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output: string | React.ReactNode = "";

    if (!trimmedCmd) {
      return;
    }

    // Parse command
    if (trimmedCmd === "help") {
      output = (
        <div className="text-gray-300">
          <p className="text-green-400 mb-2">Available Commands:</p>
          {Object.entries(COMMANDS).map(([cmd, desc]) => (
            <div key={cmd} className="ml-4 mb-1">
              <span className="text-blue-400">{cmd}</span>
              <span className="text-gray-500"> - </span>
              <span>{desc}</span>
            </div>
          ))}
        </div>
      );
    } else if (trimmedCmd === "ls") {
      output = (
        <div className="text-gray-300">
          <div className="text-blue-400">projects/</div>
          <div className="text-blue-400">services/</div>
          <div className="text-green-400">about.txt</div>
          <div className="text-green-400">contact.txt</div>
          <div className="text-green-400">skills.txt</div>
        </div>
      );
    } else if (trimmedCmd === "clear") {
      setHistory([]);
      return;
    } else if (trimmedCmd === "about") {
      output = (
        <div className="text-gray-300">
          <p className="text-green-400 text-lg mb-2">{about.name}</p>
          <p className="text-purple-400 mb-2">{about.title}</p>
          <p className="mb-4">{about.bio}</p>
          <div className="text-sm text-gray-400">
            <p>Email: <span className="text-blue-400">{about.email}</span></p>
            {about.github && <p>GitHub: <span className="text-blue-400">{about.github}</span></p>}
            {about.linkedin && <p>LinkedIn: <span className="text-blue-400">{about.linkedin}</span></p>}
          </div>
        </div>
      );
    } else if (trimmedCmd === "projects") {
      output = (
        <div className="text-gray-300">
          <p className="text-green-400 mb-2">Available Projects:</p>
          {projects.map((project) => (
            <div key={project.id} className="ml-4 mb-3">
              <p className="text-blue-400">{project.title}</p>
              <p className="text-gray-400 text-sm ml-2">{project.description}</p>
              <p className="text-purple-400 text-sm ml-2">
                Tech: {project.technologies.join(", ")}
              </p>
              <p className="text-gray-500 text-xs ml-2 mt-1">
                View details: <span className="text-green-400">project {project.id}</span>
              </p>
            </div>
          ))}
        </div>
      );
    } else if (trimmedCmd.startsWith("project ")) {
      const projectId = trimmedCmd.replace("project ", "");
      const project = projects.find((p) => p.id === projectId);

      if (project) {
        output = (
          <div className="text-gray-300">
            <p className="text-green-400 text-xl mb-2">{project.title}</p>
            <p className="mb-3">{project.longDescription}</p>
            <div className="mb-3">
              <p className="text-purple-400 mb-1">Technologies:</p>
              <div className="ml-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-purple-900/30 text-purple-300 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {project.url && (
              <p className="text-sm">
                URL: <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{project.url}</a>
              </p>
            )}
            {project.github && (
              <p className="text-sm">
                GitHub: <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{project.github}</a>
              </p>
            )}
          </div>
        );
      } else {
        output = <span className="text-red-400">Project not found. Type 'projects' to see all available projects.</span>;
      }
    } else if (trimmedCmd === "services") {
      output = (
        <div className="text-gray-300">
          <p className="text-green-400 mb-2">Services Offered:</p>
          {services.map((service) => (
            <div key={service.id} className="ml-4 mb-3">
              <p className="text-blue-400">{service.icon} {service.title}</p>
              <p className="text-gray-400 text-sm ml-2">{service.description}</p>
              <div className="ml-2 mt-1">
                {service.features.map((feature) => (
                  <p key={feature} className="text-gray-500 text-sm">• {feature}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    } else if (trimmedCmd === "contact") {
      output = (
        <div className="text-gray-300">
          <p className="text-green-400 mb-2">Contact Information:</p>
          <p>Email: <span className="text-blue-400">{about.email}</span></p>
          {about.github && <p>GitHub: <a href={about.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{about.github}</a></p>}
          {about.linkedin && <p>LinkedIn: <a href={about.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{about.linkedin}</a></p>}
          {about.twitter && <p>Twitter: <a href={about.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{about.twitter}</a></p>}
        </div>
      );
    } else if (trimmedCmd === "skills") {
      output = (
        <div className="text-gray-300">
          <p className="text-green-400 mb-2">Technical Skills:</p>
          <div className="ml-4 space-y-2">
            <div>
              <p className="text-purple-400">Frontend:</p>
              <p className="ml-2 text-sm">React, Next.js, TypeScript, Tailwind CSS, Framer Motion</p>
            </div>
            <div>
              <p className="text-purple-400">Backend:</p>
              <p className="ml-2 text-sm">Node.js, Python, PostgreSQL, MongoDB, Redis</p>
            </div>
            <div>
              <p className="text-purple-400">Tools & Platforms:</p>
              <p className="ml-2 text-sm">Git, Docker, AWS, Vercel, CI/CD</p>
            </div>
            <div>
              <p className="text-purple-400">Other:</p>
              <p className="ml-2 text-sm">RESTful APIs, GraphQL, WebSocket, Testing (Jest, Cypress)</p>
            </div>
          </div>
        </div>
      );
    } else if (trimmedCmd === "experience") {
      output = (
        <div className="text-gray-300">
          <p className="text-green-400 mb-2">Other Experiences Available:</p>
          <p className="ml-4 mb-1">
            <a href="/classic" className="text-blue-400 hover:underline">Classic View</a>
            <span className="text-gray-500"> - Traditional portfolio layout</span>
          </p>
          <p className="ml-4 mb-1">
            <a href="/workshop" className="text-blue-400 hover:underline">The Workshop</a>
            <span className="text-gray-500"> - Code-driven build experience</span>
          </p>
          <p className="ml-4 mb-1">
            <a href="/" className="text-blue-400 hover:underline">Home</a>
            <span className="text-gray-500"> - Return to experience selector</span>
          </p>
        </div>
      );
    } else {
      output = (
        <span className="text-red-400">
          Command not found: {trimmedCmd}. Type 'help' for available commands.
        </span>
      );
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  return (
    <div
      className="h-screen bg-black text-green-400 font-mono p-4 overflow-y-auto"
      ref={terminalRef}
      onClick={() => inputRef.current?.focus()}
    >
      {/* History */}
      <div className="space-y-2">
        {history.map((entry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {entry.command && (
              <div className="flex items-center gap-2">
                <span className="text-blue-400">visitor@webredesigned:~$</span>
                <span className="text-white">{entry.command}</span>
              </div>
            )}
            <div className="mb-4">{entry.output}</div>
          </motion.div>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <span className="text-blue-400">visitor@webredesigned:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none text-white"
          autoFocus
          spellCheck={false}
        />
        <span className="animate-pulse">▊</span>
      </form>

      {/* Hint */}
      <div className="fixed bottom-4 right-4 text-gray-600 text-xs">
        Tip: Use ↑↓ arrows to navigate command history
      </div>
    </div>
  );
}
