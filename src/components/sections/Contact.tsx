import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { profile } from "@/data/portfolio";

const links = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: Linkedin, label: "LinkedIn", value: "/in/pallav-burnwal", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: "@developercoders", href: profile.github },
];

export const Contact = () => {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Vortex background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
        <div
          className="w-[140vw] max-w-[1600px] aspect-square rounded-full spin-slower opacity-40"
          style={{
            background: "var(--gradient-vortex)",
            maskImage: "radial-gradient(circle, black 0%, black 25%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle, black 0%, black 25%, transparent 70%)",
            filter: "blur(8px)",
          }}
        />
        <div
          className="absolute w-[80vw] max-w-[900px] aspect-square rounded-full spin-reverse opacity-50"
          style={{
            background: "conic-gradient(from 90deg, hsl(199 89% 64% / 0.5), transparent 30%, hsl(236 100% 74% / 0.4) 60%, transparent 90%)",
            maskImage: "radial-gradient(circle, transparent 30%, black 50%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(circle, transparent 30%, black 50%, transparent 80%)",
            filter: "blur(4px)",
          }}
        />
      </div>

      <div className="container relative z-10 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.4em] text-ice/70 uppercase mb-3">Warp Channel Open</p>
          <h2 className="font-cosmic text-4xl md:text-5xl text-foreground text-glow-ice">Make Contact</h2>
          <p className="mt-5 text-muted-foreground">
            For collaborations, hackathons, or just to talk about the cosmos of code.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noreferrer" : undefined}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group glass rounded-xl px-6 py-5 flex items-center gap-4 text-left hover:border-ice/60 hover:scale-[1.02] transition-all duration-300"
            >
              <span
                className="w-11 h-11 rounded-full flex items-center justify-center bg-void/60 border border-ice/20 group-hover:border-ice/60 transition-colors"
                style={{ boxShadow: "0 0 18px hsl(199 89% 64% / 0.25)" }}
              >
                <l.icon className="w-5 h-5 text-ice" />
              </span>
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{l.label}</div>
                <div className="font-sora text-sm text-foreground truncate">{l.value}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <p className="mt-20 text-xs tracking-[0.3em] uppercase text-muted-foreground">
          Built from stardust · © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </section>
  );
};
