import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { projects } from "@/data/portfolio";

/**
 * Cosmic Tree of Projects
 * — Central luminous trunk with roots below and a glowing canopy above.
 * — Each project is a glowing fruit/orb on a branch radiating from the trunk.
 * — Click an orb to expand its details in a glass panel below the tree.
 */
export const Projects = () => {
  const [active, setActive] = useState<number | null>(null);

  // Distribute projects symmetrically across the canopy.
  // x is horizontal offset from trunk center (in SVG units, viewBox 1000x700).
  // y is vertical position (smaller = higher in canopy).
  const positions = [
    { x: -300, y: 180, side: "left" as const },
    { x: 300, y: 180, side: "right" as const },
    { x: 0, y: 90, side: "right" as const },
    { x: -200, y: 280, side: "left" as const },
    { x: 220, y: 290, side: "right" as const },
    { x: -360, y: 360, side: "left" as const },
    { x: 360, y: 360, side: "right" as const },
  ];

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.4em] text-ice/70 uppercase mb-3">Cosmic Tree of Creation</p>
          <h2 className="font-cosmic text-4xl md:text-5xl text-foreground text-glow-ice">Projects</h2>
          <p className="mt-4 text-muted-foreground text-sm">Each fruit on the tree is a world I've built. Tap one to enter.</p>
        </motion.div>

        {/* Tree canvas */}
        <div className="relative mx-auto max-w-5xl">
          <div className="relative w-full" style={{ aspectRatio: "1000 / 700" }}>
            {/* Backdrop planet halo */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
              style={{
                width: "65%",
                aspectRatio: "1",
                background:
                  "radial-gradient(circle at 50% 50%, hsl(199 89% 64% / 0.18) 0%, hsl(236 100% 74% / 0.08) 40%, transparent 70%)",
                boxShadow: "inset 0 0 80px hsl(199 89% 64% / 0.15)",
              }}
            />

            <svg viewBox="0 0 1000 700" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="trunkGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="hsl(41 100% 55% / 0.6)" />
                  <stop offset="0.4" stopColor="hsl(199 89% 64% / 0.55)" />
                  <stop offset="1" stopColor="hsl(236 100% 74% / 0.35)" />
                </linearGradient>
                <radialGradient id="canopyGlow" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0" stopColor="hsl(41 100% 60% / 0.55)" />
                  <stop offset="0.5" stopColor="hsl(199 89% 64% / 0.18)" />
                  <stop offset="1" stopColor="transparent" />
                </radialGradient>
                <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Canopy halo */}
              <ellipse cx="500" cy="220" rx="380" ry="200" fill="url(#canopyGlow)" />

              {/* Roots (below ground line) */}
              <g stroke="hsl(199 89% 64% / 0.45)" strokeWidth="1.5" fill="none" filter="url(#softGlow)">
                <path d="M500 560 C 480 600, 420 620, 340 660" />
                <path d="M500 560 C 470 605, 380 630, 260 680" />
                <path d="M500 560 C 520 600, 580 620, 660 660" />
                <path d="M500 560 C 530 605, 620 630, 740 680" />
                <path d="M500 560 C 500 610, 500 650, 500 690" />
                <path d="M500 560 C 460 615, 360 645, 200 685" opacity="0.6" />
                <path d="M500 560 C 540 615, 640 645, 800 685" opacity="0.6" />
              </g>

              {/* Ground line */}
              <line x1="60" y1="560" x2="940" y2="560" stroke="hsl(199 89% 64% / 0.25)" strokeWidth="1" />

              {/* Main trunk */}
              <path
                d="M488 560 C 492 480, 496 380, 500 260 C 504 200, 506 160, 510 120"
                stroke="url(#trunkGrad)"
                strokeWidth="14"
                fill="none"
                strokeLinecap="round"
                filter="url(#softGlow)"
              />
              <path
                d="M512 560 C 508 480, 504 380, 500 260"
                stroke="hsl(199 89% 64% / 0.35)"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
              />

              {/* Branches to each project orb */}
              {projects.map((_, i) => {
                const pos = positions[i] ?? positions[i % positions.length];
                const tx = 500 + pos.x;
                const ty = pos.y;
                // Branch start point on the trunk (varies by index for organic look)
                const trunkY = 280 + (i % 3) * 50;
                // Control points for organic curve
                const cx1 = 500 + pos.x * 0.2;
                const cy1 = trunkY - 30;
                const cx2 = 500 + pos.x * 0.7;
                const cy2 = ty + 40;
                return (
                  <g key={i}>
                    <path
                      d={`M500 ${trunkY} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${tx} ${ty}`}
                      stroke="hsl(199 89% 64% / 0.55)"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      filter="url(#softGlow)"
                    />
                    {/* Twigs */}
                    <path
                      d={`M${tx} ${ty} l ${pos.side === "left" ? -30 : 30} -10`}
                      stroke="hsl(199 89% 64% / 0.35)"
                      strokeWidth="1"
                      fill="none"
                    />
                    <path
                      d={`M${tx} ${ty} l ${pos.side === "left" ? -20 : 20} 14`}
                      stroke="hsl(199 89% 64% / 0.35)"
                      strokeWidth="1"
                      fill="none"
                    />
                  </g>
                );
              })}

              {/* Soft canopy leaves (decorative blobs) */}
              <g fill="hsl(199 89% 64% / 0.06)">
                <circle cx="380" cy="180" r="90" />
                <circle cx="620" cy="180" r="100" />
                <circle cx="500" cy="120" r="80" />
                <circle cx="300" cy="260" r="70" />
                <circle cx="700" cy="260" r="70" />
              </g>
            </svg>

            {/* Project orbs (interactive HTML layer over SVG) */}
            {projects.map((p, i) => {
              const pos = positions[i] ?? positions[i % positions.length];
              const leftPct = ((500 + pos.x) / 1000) * 100;
              const topPct = (pos.y / 700) * 100;
              const isActive = active === i;
              return (
                <motion.button
                  key={p.title}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08, type: "spring" }}
                  onClick={() => setActive(isActive ? null : i)}
                  className="absolute group"
                  style={{
                    left: `${leftPct}%`,
                    top: `${topPct}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  aria-label={`Open ${p.title}`}
                  aria-expanded={isActive}
                >
                  {/* Orb */}
                  <span
                    className="relative block rounded-full transition-all duration-300 group-hover:scale-125"
                    style={{
                      width: 22,
                      height: 22,
                      background:
                        "radial-gradient(circle at 35% 30%, hsl(41 100% 70%) 0%, hsl(41 100% 55%) 40%, hsl(199 89% 50%) 100%)",
                      boxShadow:
                        "0 0 14px hsl(41 100% 55% / 0.9), 0 0 30px hsl(41 100% 55% / 0.5), 0 0 60px hsl(199 89% 64% / 0.4)",
                      animation: "pulse-glow 3s ease-in-out infinite",
                    }}
                  />
                  {/* Title label, side-aware */}
                  <span
                    className={`absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-[11px] md:text-xs font-sora tracking-wide transition-all duration-300 ${
                      pos.side === "left" ? "right-full mr-3 text-right" : "left-full ml-3 text-left"
                    } ${isActive ? "text-foreground" : "text-foreground/75 group-hover:text-foreground"}`}
                    style={{ textShadow: "0 0 10px hsl(199 89% 64% / 0.6)" }}
                  >
                    {p.title.split(" — ")[0]}
                    <span className="block text-[9px] tracking-[0.25em] text-ice/60 uppercase">{p.year}</span>
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Expanded detail panel */}
          <AnimatePresence mode="wait">
            {active !== null && (
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="glass rounded-2xl p-6 md:p-8 mt-6 relative"
              >
                <button
                  onClick={() => setActive(null)}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-start gap-3 flex-wrap pr-8">
                  <span
                    className="w-3 h-3 rounded-full mt-2"
                    style={{
                      background: "hsl(41 100% 55%)",
                      boxShadow: "0 0 12px hsl(41 100% 55%)",
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-cosmic text-xl md:text-2xl text-foreground">{projects[active].title}</h3>
                    <span className="text-xs text-muted-foreground tracking-widest">{projects[active].year}</span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {projects[active].tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-ice/20 text-ice/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="mt-5 space-y-2">
                  {projects[active].bullets.map((b, k) => (
                    <li key={k} className="flex gap-3 text-sm text-foreground/85">
                      <span className="text-ice mt-1">◇</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                {(projects[active].github || projects[active].live) && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {projects[active].github && (
                      <a href={projects[active].github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-ice hover:text-foreground">
                        <Github className="h-4 w-4" /> GitHub
                      </a>
                    )}
                    {projects[active].live && (
                      <a href={projects[active].live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-ice hover:text-foreground">
                        <ExternalLink className="h-4 w-4" /> Live project
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
