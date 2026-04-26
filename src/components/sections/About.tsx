import { motion } from "framer-motion";
import { profile, stats } from "@/data/portfolio";

export const About = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Toroidal universe — layered SVG rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
        <div className="relative w-[120vw] max-w-[1400px] aspect-square opacity-50">
          <svg viewBox="0 0 800 800" className="absolute inset-0 spin-slower">
            <defs>
              <radialGradient id="torus1" cx="50%" cy="50%" r="50%">
                <stop offset="60%" stopColor="hsl(199 89% 64% / 0)" />
                <stop offset="80%" stopColor="hsl(199 89% 64% / 0.45)" />
                <stop offset="92%" stopColor="hsl(236 100% 74% / 0.35)" />
                <stop offset="100%" stopColor="hsl(199 89% 64% / 0)" />
              </radialGradient>
              <radialGradient id="torus2" cx="50%" cy="50%" r="50%">
                <stop offset="55%" stopColor="hsl(41 100% 47% / 0)" />
                <stop offset="78%" stopColor="hsl(41 100% 47% / 0.25)" />
                <stop offset="100%" stopColor="hsl(41 100% 47% / 0)" />
              </radialGradient>
            </defs>
            <ellipse cx="400" cy="400" rx="380" ry="120" fill="url(#torus1)" />
            <ellipse cx="400" cy="400" rx="320" ry="95" fill="url(#torus2)" opacity="0.7" />
          </svg>
          <svg viewBox="0 0 800 800" className="absolute inset-0 spin-reverse">
            <ellipse cx="400" cy="400" rx="260" ry="78" fill="none" stroke="hsl(199 89% 64% / 0.25)" strokeWidth="1" />
            <ellipse cx="400" cy="400" rx="340" ry="105" fill="none" stroke="hsl(236 100% 74% / 0.18)" strokeWidth="1" />
          </svg>
        </div>
      </div>

      <div className="container relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.4em] text-ice/70 uppercase mb-3">Origin Story</p>
          <h2 className="font-cosmic text-4xl md:text-5xl text-foreground text-glow-ice">About</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="glass rounded-2xl p-8 md:p-12"
        >
          <p className="font-sora text-base md:text-lg leading-relaxed text-foreground/85">
            {profile.summary}
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-ice/15 bg-void/60 px-4 py-5 text-center hover:border-ice/40 transition-colors"
              >
                <div className="font-cosmic text-2xl md:text-3xl text-ice text-glow-ice">{s.value}</div>
                <div className="mt-1 text-[11px] tracking-[0.2em] uppercase text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
