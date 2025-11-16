"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CodeRevealProps {
  code: string;
  language?: string;
  onComplete?: () => void;
  speed?: number;
}

export default function CodeReveal({ code, language = "tsx", onComplete, speed = 20 }: CodeRevealProps) {
  const [displayedCode, setDisplayedCode] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < code.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode((prev) => prev + code[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentIndex, code, speed, isComplete, onComplete]);

  // Simple syntax highlighting
  const highlightCode = (text: string) => {
    const keywords = ["const", "let", "var", "function", "return", "import", "export", "default", "interface", "type", "from"];
    const strings = text.match(/(["'`])(?:(?=(\\?))\2.)*?\1/g) || [];

    let highlighted = text;

    // Highlight strings
    strings.forEach((str) => {
      highlighted = highlighted.replace(str, `<span class="text-green-400">${str}</span>`);
    });

    // Highlight keywords
    keywords.forEach((keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, "g");
      highlighted = highlighted.replace(regex, `<span class="text-purple-400">${keyword}</span>`);
    });

    // Highlight JSX tags
    highlighted = highlighted.replace(/(&lt;[/]?[a-zA-Z][a-zA-Z0-9]*)/g, '<span class="text-blue-400">$1</span>');
    highlighted = highlighted.replace(/([a-zA-Z]+)=/g, '<span class="text-yellow-400">$1</span>=');

    return highlighted;
  };

  return (
    <div className="relative bg-slate-900 rounded-lg p-4 font-mono text-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-slate-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-slate-400 text-xs ml-2">workshop.{language}</span>
      </div>

      {/* Code */}
      <pre className="text-slate-300">
        <code
          dangerouslySetInnerHTML={{
            __html: highlightCode(displayedCode.replace(/</g, "&lt;").replace(/>/g, "&gt;")),
          }}
        />
        {!isComplete && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-4 bg-blue-400 ml-1"
          />
        )}
      </pre>
    </div>
  );
}
