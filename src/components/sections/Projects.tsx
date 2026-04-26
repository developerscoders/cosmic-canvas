import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { projects } from "@/data/portfolio";

export const Projects = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] text-ice/70 uppercase mb-3">Neural Cosmic Tree</p>
          <h2 className="font-cosmic text-4xl md:text-5xl text-foreground text-glow-ice">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-[120px_1fr] gap-8 max-w-5xl mx-auto">
          {/* Tree spine */}
          <div className="hidden md:block relative">
            <svg viewBox="0 0 120 800" preserveAspectRatio="none" className="w-full h-full">
              <defs>
                <linearGradient id="trunk" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="hsl(199 89% 64% / 0)" />
                  <stop offset="0.15" stopColor="hsl(199 89% 64% / 0.7)" />
                  <stop offset="0.85" stopColor="hsl(236 100% 74% / 0.7)" />
                  <stop offset="1" stopColor="hsl(236 100% 74% / 0)" />
                </linearGradient>
              </defs>
              <path d="M60 0 C 60 200, 60 600, 60 800" stroke="url(#trunk)" strokeWidth="1.5" fill="none" />
              {projects.map((_, i) => {
                const y = 60 + i * (680 / Math.max(1, projects.length - 1));
                return (
                  <g key={i}>
                    <path
                      d={`M60 ${y} Q 90 ${y}, 120 ${y}`}
                      stroke="hsl(199 89% 64% / 0.4)"
                      strokeWidth="1"
                      fill="none"
                    />
                    <circle cx="60" cy={y} r="4" fill="hsl(41 100% 55%)">
                      <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
                    </circle>
                  </g>
                );
              })}
            </svg>
          </div>

          <ul className="space-y-4">
            {projects.map((p, i) => {
              const isOpen = open === i;
              return (
                <motion.li
                  key={p.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full text-left glass rounded-xl px-6 py-5 hover:border-ice/50 transition-all duration-300 group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="w-2 h-2 rounded-full bg-amber" style={{ boxShadow: "0 0 10px hsl(41 100% 55%)" }} />
                          <h3 className="font-cosmic text-lg md:text-xl text-foreground">{p.title}</h3>
                          <span className="text-xs text-muted-foreground tracking-widest">{p.year}</span>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {p.tech.map((t) => (
                            <span
                              key={t}
                              className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-ice/20 text-ice/80"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-5 h-5 text-ice/70 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
                      />
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-4 pt-4 border-t border-ice/15 space-y-2">
                            {p.bullets.map((b, k) => (
                              <li key={k} className="flex gap-3 text-sm text-foreground/85">
                                <span className="text-ice mt-1">◇</span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
