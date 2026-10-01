import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";

const colorClasses = {
  ice: "border-ice/25 text-ice hover:border-ice/70 hover:bg-ice/10",
  violet: "border-violet/25 text-violet hover:border-violet/70 hover:bg-violet/10",
  amber: "border-amber/25 text-amber hover:border-amber/70 hover:bg-amber/10",
  foreground: "border-foreground/20 text-foreground hover:border-foreground/60 hover:bg-foreground/10",
} as const;

export const Skills = () => (
  <section id="skills" className="relative overflow-hidden py-32">
    <div className="container relative z-10 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-ice/70">The Eye of the Cosmos</p>
        <h2 className="font-cosmic text-4xl text-foreground text-glow-ice md:text-5xl">Tech Stack</h2>
      </motion.div>

      <div className="relative">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ice/5 blur-3xl" aria-hidden />
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: categoryIndex * 0.05 }}
              className="border-t border-ice/15 pt-5"
            >
              <h3 className="mb-4 font-cosmic text-lg text-foreground">{category.name}</h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: Math.min(skillIndex * 0.025, 0.2) }}
                    whileHover={{ y: -3, scale: 1.04 }}
                    className={`rounded-full border bg-background/55 px-3.5 py-2 font-sora text-xs transition-colors duration-300 ${colorClasses[category.color]}`}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);