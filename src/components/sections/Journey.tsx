import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";
import { timeline, achievements } from "@/data/portfolio";

export const Journey = () => {
  return (
    <section id="journey" className="relative py-32 overflow-hidden">
      <div className="container relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] text-ice/70 uppercase mb-3">Constellation Map</p>
          <h2 className="font-cosmic text-4xl md:text-5xl text-foreground text-glow-ice">Experience & Education</h2>
        </motion.div>

        <ol className="relative">
          {/* central line */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, hsl(199 89% 64% / 0.6), hsl(236 100% 74% / 0.6), transparent)",
            }}
            aria-hidden
          />
          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            const Icon = item.kind === "edu" ? GraduationCap : Briefcase;
            return (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative mb-10 md:mb-14 md:grid md:grid-cols-2 md:gap-10 ${isLeft ? "" : "md:[&>*:first-child]:col-start-2"}`}
              >
                {/* star node */}
                <span
                  aria-hidden
                  className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-ice"
                  style={{ boxShadow: "0 0 14px hsl(199 89% 64%), 0 0 30px hsl(199 89% 64% / 0.6)" }}
                />
                <div className={`pl-12 md:pl-0 ${isLeft ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                  <div className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-ice/80 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                  <h3 className="mt-2 font-cosmic text-xl text-foreground">{item.role}</h3>
                  <p className="text-sm text-muted-foreground">{item.org} · {item.location}</p>
                  <ul className={`mt-3 space-y-1.5 text-sm text-foreground/85 ${isLeft ? "md:[&>li]:flex-row-reverse" : ""}`}>
                    {item.bullets.map((b, k) => (
                      <li key={k} className="flex gap-2">
                        <span className="text-ice/70">◇</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            );
          })}
        </ol>

        {/* Achievements panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-12 glass rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-5">
            <Trophy className="w-5 h-5 text-amber" />
            <h3 className="font-cosmic text-xl text-foreground text-glow-amber">Achievements</h3>
          </div>
          <ul className="grid md:grid-cols-2 gap-3">
            {achievements.map((a) => (
              <li key={a} className="flex gap-3 text-sm text-foreground/85">
                <span className="text-amber mt-1">★</span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
