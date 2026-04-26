import { motion } from "framer-motion";
import { useState } from "react";
import { skillCategories } from "@/data/portfolio";

const colorMap = {
  ice: "hsl(199 89% 64%)",
  violet: "hsl(236 100% 74%)",
  amber: "hsl(41 100% 55%)",
  foreground: "hsl(231 51% 94%)",
} as const;

export const Skills = () => {
  const [hover, setHover] = useState<{ name: string; level: number; color: string } | null>(null);

  // Place each category on its own ring radius
  const radii = [120, 185, 250, 315];

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] text-ice/70 uppercase mb-3">The Eye of the Cosmos</p>
          <h2 className="font-cosmic text-4xl md:text-5xl text-foreground text-glow-ice">Tech Stack</h2>
          <p className="mt-4 text-muted-foreground text-sm">Hover a star to see its signal.</p>
        </motion.div>

        <div className="relative mx-auto" style={{ width: "min(720px, 92vw)", aspectRatio: "1 / 1" }}>
          {/* Iris */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-40 h-40 md:w-56 md:h-56 rounded-full pulse-glow"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, hsl(41 100% 60%) 0%, hsl(41 100% 47% / 0.6) 18%, hsl(199 89% 64% / 0.5) 35%, hsl(236 100% 74% / 0.3) 55%, transparent 75%)",
                boxShadow: "0 0 80px hsl(199 89% 64% / 0.5), 0 0 160px hsl(236 100% 74% / 0.25)",
              }}
            />
          </div>

          {/* Eye outline */}
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
            <defs>
              <linearGradient id="eyeStroke" x1="0" x2="1">
                <stop offset="0" stopColor="hsl(199 89% 64% / 0)" />
                <stop offset="0.5" stopColor="hsl(199 89% 64% / 0.7)" />
                <stop offset="1" stopColor="hsl(199 89% 64% / 0)" />
              </linearGradient>
            </defs>
            <path
              d="M 8 50 Q 50 12 92 50 Q 50 88 8 50 Z"
              fill="none"
              stroke="url(#eyeStroke)"
              strokeWidth="0.4"
            />
            <path
              d="M 14 50 Q 50 22 86 50 Q 50 78 14 50 Z"
              fill="none"
              stroke="hsl(236 100% 74% / 0.25)"
              strokeWidth="0.25"
            />
          </svg>

          {/* Orbit rings */}
          {skillCategories.map((cat, ringIdx) => {
            const r = radii[ringIdx];
            const total = cat.skills.length;
            return (
              <div key={cat.name} className="absolute inset-0 flex items-center justify-center">
                <div
                  className="absolute rounded-full border"
                  style={{
                    width: r * 2,
                    height: r * 2,
                    borderColor: `${colorMap[cat.color]}26`,
                  }}
                />
                <div
                  className={`absolute ${ringIdx % 2 === 0 ? "spin-slow" : "spin-reverse"}`}
                  style={{ width: r * 2, height: r * 2 }}
                >
                  {cat.skills.map((s, i) => {
                    const angle = (i / total) * Math.PI * 2;
                    const x = Math.cos(angle) * r;
                    const y = Math.sin(angle) * r;
                    return (
                      <button
                        key={s.name}
                        onMouseEnter={() => setHover({ name: s.name, level: s.level, color: colorMap[cat.color] })}
                        onMouseLeave={() => setHover(null)}
                        onFocus={() => setHover({ name: s.name, level: s.level, color: colorMap[cat.color] })}
                        onBlur={() => setHover(null)}
                        className="absolute group"
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                          transform: "translate(-50%, -50%)",
                        }}
                        aria-label={`${s.name} — ${s.level}%`}
                      >
                        <span
                          className="block w-2.5 h-2.5 rounded-full transition-all duration-300 group-hover:scale-[2.2] group-focus:scale-[2.2]"
                          style={{
                            background: colorMap[cat.color],
                            boxShadow: `0 0 10px ${colorMap[cat.color]}, 0 0 20px ${colorMap[cat.color]}80`,
                          }}
                        />
                        <span
                          className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-[10px] uppercase tracking-widest text-muted-foreground opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity"
                        >
                          {s.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* Hover panel */}
          <div className="absolute inset-x-0 -bottom-4 flex justify-center pointer-events-none">
            <div
              className={`glass rounded-full px-5 py-2.5 min-w-[240px] text-center transition-opacity duration-300 ${hover ? "opacity-100" : "opacity-0"}`}
            >
              <div className="text-sm font-sora text-foreground">{hover?.name ?? "—"}</div>
              <div className="mt-1.5 h-1 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full transition-all duration-500"
                  style={{
                    width: `${hover?.level ?? 0}%`,
                    background: hover?.color ?? "hsl(199 89% 64%)",
                    boxShadow: `0 0 8px ${hover?.color ?? "hsl(199 89% 64%)"}`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Category legend */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs uppercase tracking-[0.25em]">
          {skillCategories.map((c) => (
            <div key={c.name} className="flex items-center gap-2">
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ background: colorMap[c.color], boxShadow: `0 0 8px ${colorMap[c.color]}` }}
              />
              <span className="text-muted-foreground">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
