# Web Redesigned - Interactive Portfolio

A unique "choose your own adventure" style portfolio showcasing web development through multiple immersive experiences.

## 🎨 Live Experiences

This portfolio offers **7 different ways** to explore the same content, each with its own personality:

### ✅ Implemented (Phase 1)

1. **🎯 Classic View** (`/classic`) - Traditional portfolio layout
   - Clean, professional design
   - Smooth scroll animations
   - Responsive grid layouts
   - Dark mode support

2. **⌨️ The Terminal** (`/terminal`) - CLI-style interface
   - Command-line navigation
   - Type commands to explore (try `help`)
   - Command history with arrow keys
   - Authentic developer experience

3. **🛠️ The Workshop** (`/workshop`) - Code-driven reveal
   - Watch code being typed in real-time
   - See the rendered output appear live
   - Step through each component
   - Educational and impressive

### 🚧 Coming Soon (Phase 2)

4. **🎨 The Canvas** - Interactive drag & drop playground
5. **📖 The Journey** - Scrollytelling with parallax effects
6. **🏢 The Studio** - 3D virtual office exploration
7. **📐 The Layers** - Depth-based card navigation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see the experience selector.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Runtime**: React 19

## 📁 Project Structure

```
webredesigned_html/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Landing page (experience selector)
│   ├── classic/           # Traditional portfolio experience
│   ├── terminal/          # CLI interface experience
│   ├── workshop/          # Code reveal experience
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── terminal/          # Terminal-specific components
│   └── workshop/          # Workshop-specific components
├── lib/                   # Shared utilities
│   └── content.ts         # Content data (projects, services, about)
└── public/                # Static assets
```

## 📝 Content Management

Content is centralized in `/lib/content.ts`. Update this file to modify:

- **Projects**: Portfolio pieces with descriptions and tech stacks
- **Services**: Offered services with features
- **About**: Personal/company information

All experiences pull from this shared data source.

## 🎯 Features

- **3 Complete Experiences**: Each offers a unique way to explore the portfolio
- **Responsive Design**: Works on all screen sizes
- **Dark Mode**: Automatic theme detection
- **Smooth Animations**: Powered by Framer Motion
- **Type-Safe**: Full TypeScript coverage
- **Optimized**: Static generation for fast loading
- **Accessible**: Semantic HTML and keyboard navigation

## 🔮 Roadmap

- [ ] Implement Canvas experience (drag & drop)
- [ ] Implement Journey experience (scrollytelling)
- [ ] Implement Studio experience (3D virtual office)
- [ ] Implement Layers experience (depth navigation)
- [ ] Add page transitions between experiences
- [ ] Add analytics to track which experiences users prefer
- [ ] Add contact form with email integration
- [ ] Connect to CMS for dynamic content

## 📄 License

This project is open source and available under the MIT License.

## 🙋 Questions?

This portfolio was built to demonstrate creative web development approaches. Feel free to explore the code and adapt it for your own use!

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
