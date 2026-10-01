import { motion } from "framer-motion";
import { ChevronDown, Download, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { StarField } from "@/components/cosmos/StarField";
import { TypedTagline } from "@/components/cosmos/TypedTagline";
import fullStackResume from "@/assets/Pallav_Full_Stack.pdf.asset.json";
import aiMlResume from "@/assets/Pallav_AI_Ml_Engineer.pdf.asset.json";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden grain nebula-bg flex items-center justify-center"
    >
      <div className="absolute inset-0 starfield starfield-anim opacity-60" aria-hidden />
      <StarField count={160} />

      {/* nebula bloom from bottom */}
      <div
        aria-hidden
        className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-[140vw] h-[80vh] rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(199 89% 64% / 0.35), hsl(236 100% 74% / 0.18) 40%, transparent 70%)",
        }}
      />

      <div className="container relative z-10 text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs md:text-sm tracking-[0.4em] text-ice/80 uppercase mb-6"
        >
          Welcome, traveller
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.04em" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-cosmic text-5xl sm:text-7xl md:text-8xl font-black text-foreground text-glow-ice"
        >
          {profile.name.toUpperCase()}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 font-sora text-sm md:text-base tracking-[0.18em] text-foreground/80 uppercase"
        >
          {profile.title}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8"
        >
          <TypedTagline phrases={profile.taglines} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.15 }}
          className="mx-auto mt-4 max-w-2xl font-sora text-sm leading-relaxed text-muted-foreground md:text-base"
        >
          {profile.heroTagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-ice/40 bg-ice/10 px-6 py-3 font-sora text-xs uppercase tracking-[0.16em] text-foreground transition-all duration-300 hover:scale-105 hover:border-ice/80"
          >
            View Projects
          </a>
          <a href="#contact" className="inline-flex min-h-12 items-center gap-2 rounded-full glass px-6 py-3 font-sora text-xs uppercase tracking-[0.16em] text-foreground transition-all duration-300 hover:scale-105 hover:border-ice/60">
            <Mail className="h-4 w-4" /> Contact
          </a>
          <details className="group relative">
            <summary className="inline-flex min-h-12 cursor-pointer list-none items-center gap-2 rounded-full glass px-6 py-3 font-sora text-xs uppercase tracking-[0.16em] text-foreground transition-all duration-300 hover:border-ice/60 [&::-webkit-details-marker]:hidden">
              <Download className="h-4 w-4" /> Download Resume <ChevronDown className="h-3.5 w-3.5 transition-transform group-open:rotate-180" />
            </summary>
            <div className="absolute left-1/2 top-full z-20 mt-2 w-56 -translate-x-1/2 overflow-hidden rounded-lg border border-ice/20 bg-background/95 p-1.5 text-left shadow-xl backdrop-blur-xl">
              <a href={fullStackResume.url} download="Pallav_Burnwal_Full_Stack_Resume.pdf" className="block rounded-md px-3 py-2.5 text-sm text-foreground/85 transition-colors hover:bg-ice/10 hover:text-foreground">Full-Stack Resume</a>
              <a href={aiMlResume.url} download="Pallav_Burnwal_AI_ML_Resume.pdf" className="block rounded-md px-3 py-2.5 text-sm text-foreground/85 transition-colors hover:bg-ice/10 hover:text-foreground">AI-ML Resume</a>
            </div>
          </details>
        </motion.div>
      </div>

      {/* horizon glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};
