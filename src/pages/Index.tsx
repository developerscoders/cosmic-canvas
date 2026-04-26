import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Journey } from "@/components/sections/Journey";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Persistent ambient starfield behind everything */}
      <div
        aria-hidden
        className="fixed inset-0 starfield starfield-anim opacity-30 pointer-events-none -z-10"
      />
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 20% 10%, hsl(236 100% 74% / 0.12), transparent 50%), radial-gradient(ellipse at 80% 80%, hsl(199 89% 64% / 0.10), transparent 55%)",
        }}
      />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Contact />
    </main>
  );
};

export default Index;
