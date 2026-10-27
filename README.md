# Aryan Dangwal — Recreated 3D Developer Portfolio

A recreated, award-winning developer portfolio for **Aryan Dangwal** featuring interactive 3D WebGL scenes, kinetic perspective physics cards, real-time Python CLI simulation, and fully responsive dark cosmic aesthetics.

---

## 🌟 Key Features & Creative Engineering

1. **Interactive 3D WebGL Cyber Core (Three.js)**:
   - High-detail faceted Icosahedron core with dual materials (emissive purple wireframe lattice + physical polygonal interior).
   - Dual orbital rings spinning on contrasting 3D axes with orbiting data beacons.
   - Real-time mouse and touch pointer dragging with momentum and spring damping.
   - **IntersectionObserver** performance guard automatically halts rendering loops when scrolled away from the hero, ensuring 0% idle GPU usage.
   - Respects `prefers-reduced-motion` and includes a graceful CSS fallback if WebGL is unavailable.

2. **3D Depth Starfield & Parallax Particle Background**:
   - Multi-depth WebGL particle field rendering hundreds of drifting celestial nodes.
   - Subtle mouse-tracking parallax that gives an organic sense of cosmic depth.

3. **3D Perspective Kinetic Tilt Cards**:
   - Recreates and upgrades Aryan's signature floating card interaction with real-time radial cursor lighting (`--mx`, `--my`), glassmorphism backdrop blur, and smooth spring physics.

4. **Live Interactive Python Password Generator Terminal**:
   - Visitors can customize length (8-64 characters), toggle numbers and symbols, and run the password generator right in their browser.
   - Directly demonstrates Aryan's Python standard library algorithms with celebratory confetti and 1-click clipboard copying.

5. **Complete Content & Identity Preservation**:
   - Authentic portrait of Aryan preserved from `me.jpg`.
   - Verified personal info: B.Tech Computer Science & Engineering (Core), Dehradun, India.
   - Complete project catalog: Password Generator, Snake Game, Database Management App, Application Control Core, and Personal Portfolio.
   - Academic & Professional roadmap (Phases 1, 2, and 3).
   - Working contact actions (one-click copy for `aryandangwal06@gmail.com`, validated form, and pre-filled mailto transmission).

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18+ (tested on Node v24)
- npm 9+

### Commands

```bash
# 1. Navigate to the project directory
cd C:\Users\HP\.gemini\antigravity\scratch\aryan-portfolio-3d

# 2. Install dependencies (if not already installed)
npm install

# 3. Start the Vite development server
npm run dev
# The website will be available at http://localhost:3000

# 4. Generate the optimized production build
npm run build
# Outputs cleanly to the /dist folder with manual vendor chunking

# 5. Preview the production build locally
npm run preview
# Serves the production build on http://localhost:4173
```

---

## 📁 Project Architecture

```
aryan-portfolio-3d/
├── public/
│   └── me.jpg                      # Preserved authentic portrait of Aryan
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Glass floating navbar with active section detection
│   │   ├── BackgroundStars.jsx     # WebGL 3D drifting particle starfield
│   │   ├── HeroThreeScene.jsx      # Three.js 3D Cyber Core with drag physics
│   │   ├── Hero.jsx                # Memorable first impression & credentials
│   │   ├── About.jsx               # Narrative story, academic pillars & stats
│   │   ├── Expertise.jsx           # 3D kinetic tilt cards for core services
│   │   ├── Skills.jsx              # Categorized tech matrix & proficiencies
│   │   ├── Projects.jsx            # Project cards + Interactive Python CLI terminal
│   │   ├── Roadmap.jsx             # CSE & Data Science progression timeline
│   │   ├── Contact.jsx             # Validated contact form & 1-click email copy
│   │   └── Footer.jsx              # Copyright, social links & smooth scroll-to-top
│   ├── data/
│   │   └── portfolioData.js        # Single source of truth for all verified content
│   ├── styles/
│   │   └── index.css               # Tailwind directives, custom glassmorphism styles
│   ├── App.jsx                     # Root application container
│   └── main.jsx                    # React entrypoint
├── index.html                      # Semantic HTML5 entry with metadata
├── package.json                    # Project metadata & dependencies
├── tailwind.config.js              # Custom void & cyber design theme tokens
└── vite.config.js                  # Rollup manual chunks & production build config
```

---

## 🌐 Deployment Instructions

The production build in `dist/` is completely static and self-contained with relative asset linking (`base: './'`).

### Option A: GitHub Pages (Independent Deployment)
1. You can create a new repository (e.g. `aryan-portfolio-redesign`).
2. Run `npm run build`.
3. Push the repository and configure GitHub Pages to serve from `/dist` or use the `gh-pages` branch.

### Option B: Vercel / Netlify
1. Connect the new repository to Vercel or Netlify.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Deploys with 0 configuration needed.

---

## 🔒 Original Repository Integrity
The original repository (`https://github.com/aryan-dev008/my-website`) was inspected strictly in READ-ONLY mode. No files, commits, branches, or settings were altered in any way.
