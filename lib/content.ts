// Shared content types and data

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  url?: string;
  github?: string;
  featured: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface About {
  name: string;
  title: string;
  bio: string;
  email: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}

// Placeholder content
export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    longDescription: "A modern e-commerce platform built with Next.js, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    image: "/projects/ecommerce.jpg",
    url: "https://example.com",
    github: "https://github.com/example/ecommerce",
    featured: true,
  },
  {
    id: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    description: "Real-time analytics dashboard for SaaS applications",
    longDescription: "An interactive analytics dashboard providing real-time metrics, user behavior tracking, and customizable reports for SaaS businesses.",
    technologies: ["React", "D3.js", "Node.js", "MongoDB", "WebSocket"],
    image: "/projects/dashboard.jpg",
    url: "https://example.com",
    featured: true,
  },
  {
    id: "mobile-app",
    title: "Fitness Tracking App",
    description: "Cross-platform mobile app for fitness enthusiasts",
    longDescription: "A comprehensive fitness tracking application with workout plans, progress tracking, and social features to keep users motivated.",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    image: "/projects/fitness.jpg",
    featured: false,
  },
  {
    id: "ai-chatbot",
    title: "AI Customer Support Bot",
    description: "Intelligent chatbot for automated customer service",
    longDescription: "An AI-powered chatbot that handles customer inquiries, provides instant responses, and seamlessly escalates to human agents when needed.",
    technologies: ["Python", "OpenAI", "FastAPI", "React", "PostgreSQL"],
    image: "/projects/chatbot.jpg",
    featured: true,
  },
];

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Custom web applications built with modern technologies",
    icon: "🚀",
    features: [
      "Responsive design",
      "Performance optimization",
      "SEO-friendly architecture",
      "Progressive Web Apps (PWA)",
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "User-centered design that delights and converts",
    icon: "🎨",
    features: [
      "User research & testing",
      "Wireframing & prototyping",
      "Design systems",
      "Accessibility (WCAG 2.1)",
    ],
  },
  {
    id: "consulting",
    title: "Technical Consulting",
    description: "Expert guidance for your technical challenges",
    icon: "💡",
    features: [
      "Architecture review",
      "Code audits",
      "Performance optimization",
      "Technology selection",
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    description: "Ongoing support to keep your applications running smoothly",
    icon: "🔧",
    features: [
      "Bug fixes & updates",
      "Security patches",
      "Performance monitoring",
      "24/7 emergency support",
    ],
  },
];

export const about: About = {
  name: "Web Redesigned",
  title: "Full-Stack Developer & Designer",
  bio: "I build exceptional digital experiences that combine beautiful design with robust engineering. With over 5 years of experience, I specialize in creating web applications that are fast, accessible, and delightful to use.",
  email: "hello@webredesigned.com",
  github: "https://github.com/webredesigned",
  linkedin: "https://linkedin.com/in/webredesigned",
  twitter: "https://twitter.com/webredesigned",
};
