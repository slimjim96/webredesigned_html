# Web Redesigned - Interactive Portfolio

A professional portfolio with a twist: hidden "choose your own adventure" experiences for both business stakeholders and developers.

## 🎭 Concept

**What visitors see:** A clean, professional business portfolio
**What developers discover:** An easter egg unlocks dual adventure paths with unique interactive experiences

## 🏢 The Landing Experience

The default homepage (`/`) is a professional, business-focused portfolio designed for:
- Clients and stakeholders
- Recruiters and hiring managers
- Business decision-makers

**Features:**
- Clean, modern design
- Project showcases with business value
- Service offerings
- Contact information
- **Hidden Easter Egg:** Try the Konami code (↑ ↑ ↓ ↓ ← → ← → B A) to unlock adventure mode! 🎮

## 🚀 Adventure Mode

Once unlocked, visitors can choose between two paths:

### 💼 Business Path (`/adventures/business`)

Experiences designed for stakeholders and decision-makers:

#### ✅ Available Now:
1. **📊 Executive Summary** (`/adventures/business/executive`)
   - High-level metrics and KPIs
   - Core competencies overview
   - Technology stack summary
   - Quick business value assessment

2. **📖 Case Study Journey** (`/adventures/business/casestudy`)
   - Interactive Problem → Solution → Results format
   - Measurable business impact
   - Client success metrics
   - Deep-dive project narratives

#### 🚧 Coming Soon:
3. **📈 ROI Dashboard** - Business value and performance metrics
4. **⏱️ Process Timeline** - Visual development methodology
5. **💬 Client Stories** - Testimonials and social proof

### 🚀 Developer Path (`/adventures/developer`)

Interactive, technical experiences for developers and tech enthusiasts:

#### ✅ Available Now:
1. **⌨️ The Terminal** (`/terminal`)
   - CLI-style interface
   - Command-line navigation (`help`, `projects`, `ls`, etc.)
   - Command history with arrow keys
   - Authentic developer experience

2. **🛠️ The Workshop** (`/workshop`)
   - Watch code being typed in real-time
   - Live component rendering
   - Step-through code building
   - Educational and impressive

3. **🎯 Classic View** (`/classic`)
   - Traditional portfolio layout
   - Clean, professional design
   - Smooth scroll animations
   - Works for everyone

#### 🚧 Coming Soon:
4. **🎨 The Canvas** - Drag & drop component playground
5. **📖 The Journey** - Scrollytelling with parallax
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

Visit `http://localhost:3000` to see the business landing page.

### Finding the Easter Egg

1. Open the homepage
2. Type the Konami code: `↑ ↑ ↓ ↓ ← → ← → B A`
3. Click "Choose Your Adventure"
4. Select Business or Developer path

**Hint:** Look at the footer for a clue! 😉

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Runtime**: React 19

## 📁 Project Structure

```
webredesigned_html/
├── app/
│   ├── page.tsx                      # Business landing page (default)
│   ├── adventures/                   # Adventure mode
│   │   ├── page.tsx                  # Path selector (Business vs Developer)
│   │   ├── business/                 # Business experiences
│   │   │   ├── page.tsx              # Business experience selector
│   │   │   ├── executive/            # Executive Summary view
│   │   │   └── casestudy/            # Case Study journey
│   │   └── developer/                # Developer experiences
│   │       └── page.tsx              # Developer experience selector
│   ├── terminal/                     # CLI interface
│   ├── workshop/                     # Code reveal
│   ├── classic/                      # Traditional portfolio
│   ├── layout.tsx                    # Root layout
│   └── globals.css                   # Global styles
├── components/                       # React components
│   ├── terminal/                     # Terminal components
│   └── workshop/                     # Workshop components
├── lib/
│   └── content.ts                    # Shared content (projects, services, about)
└── public/                           # Static assets
```

## 📝 Content Management

Content is centralized in `/lib/content.ts`. Update this file to modify:

- **Projects**: Portfolio pieces with descriptions, tech stacks, and business impact
- **Services**: Offered services with features
- **About**: Personal/company information

All experiences (business and developer) pull from this shared data source.

## 🎯 Features

### Core Features
- **Dual-Path Architecture**: Business and Developer experiences
- **Easter Egg Discovery**: Konami code unlocks adventure mode
- **5 Complete Experiences**: Executive, Case Study, Terminal, Workshop, Classic
- **Responsive Design**: Works on all screen sizes
- **Dark Mode**: Automatic theme detection
- **Smooth Animations**: Powered by Framer Motion
- **Type-Safe**: Full TypeScript coverage
- **Optimized Build**: Static generation for fast loading

### Business Features
- Professional landing page
- ROI-focused content presentation
- Case study narratives
- Business value metrics

### Developer Features
- Interactive code demos
- CLI interface
- Live code building
- Technical deep-dives

## 🎮 User Journeys

### Business User Journey:
1. Lands on professional homepage
2. Browses projects and services
3. (Optional) Discovers easter egg
4. Explores business adventures for deeper insights

### Developer User Journey:
1. Lands on professional homepage
2. Notices hint in footer
3. Enters Konami code
4. Explores developer adventures (Terminal, Workshop, etc.)

### Recruiter Journey:
1. Lands on professional homepage
2. Quickly assesses skills and experience
3. (Optional) Views Classic portfolio view
4. Contacts via email

## 🔮 Roadmap

### Business Path:
- [ ] ROI Dashboard with metrics visualization
- [ ] Process Timeline showing methodology
- [ ] Client Stories with testimonials
- [ ] Industry-specific case studies

### Developer Path:
- [ ] The Canvas (drag & drop playground)
- [ ] The Journey (scrollytelling)
- [ ] The Studio (3D virtual office)
- [ ] The Layers (depth navigation)

### General:
- [ ] Page transitions between experiences
- [ ] Analytics to track path preferences
- [ ] Contact form with email integration
- [ ] CMS integration for dynamic content
- [ ] A/B testing for easter egg discovery

## 💡 Philosophy

This portfolio demonstrates that professional doesn't have to mean boring. The dual-path approach ensures:

1. **Business stakeholders** get the information they need quickly and professionally
2. **Developers and tech enthusiasts** discover interactive, creative experiences
3. **Everyone** has access to traditional portfolio views

It's a portfolio that respects the audience's time while rewarding curiosity.

## 📄 License

This project is open source and available under the MIT License.

## 🙋 Questions?

This portfolio was built to demonstrate that you can be both professional and creative. The architecture shows how to serve different audiences without compromising either experience.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

*Hint: Have you tried the Konami code yet?* 🎮
