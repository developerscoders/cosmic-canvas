# Pallav Burnwal — "The Living Universe" Portfolio

A dark, cinematic single-page portfolio that feels like drifting through a conscious cosmos. Built with React + Tailwind + Framer Motion, populated entirely from your resume.

## Design system

- **Background:** `#010409` deep void
- **Primary glow:** `#4fc3f7` ice blue
- **Secondary:** `#7c83ff` cosmic violet
- **Accent:** `#f0a500` star amber
- **Text:** `#e8eaf6`
- **Fonts:** Cinzel (hero name / section titles), Sora (body)
- All colors wired into `index.css` and `tailwind.config.ts` as semantic tokens
- Subtle starfield + grain overlay across the whole page (CSS only, GPU-accelerated)
- Smooth native scroll, lazy-revealed sections via Framer Motion `whileInView`

## Sections (in order)

### 1. Hero — Cosmic Ocean
- Full-screen `#010409` canvas with a CSS/SVG particle field of < 200 glowing blue dots that drift and spiral (transform/opacity only, `requestAnimationFrame`-driven, paused off-screen)
- Soft radial nebula bloom rising from the bottom
- **Name:** "PALLAV BURNWAL" in Cinzel, large, with a faint blue text-glow
- **Title:** "Software Engineer · Full-Stack Developer · AI Builder"
- **Typed tagline:** rotating cosmic phrases (e.g. "Architecting systems from stardust", "Hackathon champion · 200+ teams defeated")
- **CTA:** "Explore the Universe" — scrolls to About

### 2. About — Toroidal Universe
- Slowly rotating donut/torus rendered with a layered SVG + CSS 3D transform (no WebGL); galaxy texture inside the ring
- Glass-morphism card overlay containing your professional summary from the resume (QA Automation + Full-Stack, 2+ years, hackathon win, 70% testing reduction, etc.)
- Quick-stat chips: `2+ yrs experience` · `1st @ HackWithUP` · `5★ HackerRank` · `GPA 3.7/4.0`

### 3. Skills — The Eye of the Cosmos
- Central iris: glowing amber/blue ringed eye built with stacked SVG circles + radial gradients, slow rotation
- Skills orbit as star-nodes on 4 concentric rings, grouped by category from your resume:
  - **Languages:** Java, Python, C++, JavaScript, TypeScript, SQL
  - **Web:** React.js, Next.js, Node.js, FastAPI, Spring Boot, REST
  - **AI / APIs:** Deepgram AI, OpenAI, Twilio, Real-time Voice
  - **Cloud / DevOps / Tools:** Azure, AWS, Vercel, Docker, Git, Selenium, Postman, MongoDB, MySQL
- Hover a star → tooltip shows category + proficiency bar; star pulses brighter

### 4. Projects — Neural Cosmic Tree
- Vertical luminous SVG tree with branching filaments; each branch terminates in a project node
- Cards (click/hover to expand) for each project from the resume:
  1. **AI Voice Caller Application** — Python · FastAPI · Deepgram · Twilio · MongoDB
  2. **LinkedIn Automation Tool** — Python · Selenium · MongoDB
  3. **AI-Powered Startup — HackWithUttarPradesh Winner** (1st / 200+ teams)
  4. **Full-Stack Student Tracker** — Spring Boot · React · MySQL
  5. **Secure Banking Application** — Java · Spring Boot · MySQL
- Each expanded card shows description bullets + tech tags + year

### 5. Experience & Education — Constellation Map
- Timeline rendered as constellation: each role is a star, connected by thin glowing lines
- Entries from resume:
  - **Hrfy.AI** — QA Automation Engineer & Security Tester (Jan 2026 – Present)
  - **Hrfy.AI** — Software Developer Intern (Sep 2025 – Dec 2025)
  - **CodeAlpha** — Software Development Intern (Sep 2024 – Sep 2025)
  - **Chandigarh University** — BCA, GPA 3.7/4.0 (Aug 2023 – Jul 2026)
- Achievements panel: 5★ HackerRank, HackWithUP winner, Cybersecurity Foundations, Deloitte Tech Simulation, Azure Fundamentals, 500+ DSA problems

### 6. Contact — Warp Vortex
- Animated CSS conic-gradient spiral pulling toward center
- Constellation-point links:
  - Email — paburnwal123@gmail.com
  - Phone — +91-7340981451
  - LinkedIn
  - GitHub
- Footer: "Built from stardust · © Pallav Burnwal"

## Performance guarantees

- All animations use CSS transform/opacity (GPU compositing)
- Particle counts capped (< 200), animations pause when section off-screen via IntersectionObserver
- Framer Motion only — no Three.js, no heavy canvas libs
- Sections lazy-revealed; images/SVGs inline & optimized
- Mobile-first responsive: complex orbits/tree gracefully simplify on small screens
- Targeting Lighthouse > 85

## Out of scope (this iteration)

- Vercel deployment is done by you via Lovable's Publish button (not something I configure in code)
- No CMS / no backend — all content baked from the resume
- No light mode

Once approved, I'll build all sections, wire the design tokens, and ensure smooth scroll + responsive layout.