import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { profile } from "@/data/portfolio";
import { StarField } from "@/components/cosmos/StarField";
import { TypedTagline } from "@/components/cosmos/TypedTagline";

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
          className="mt-6 font-sora text-sm md:text-base tracking-[0.3em] text-foreground/80 uppercase"
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-12"
        >
          <a
            href="#about"
            className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full glass text-foreground font-sora text-sm tracking-[0.25em] uppercase hover:border-ice/60 transition-all duration-500 hover:scale-105"
          >
            <span>Explore the Universe</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* horizon glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};
