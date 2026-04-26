import { useEffect, useRef } from "react";

/**
 * Lightweight particle field. < 200 particles, transform/opacity only,
 * pauses when off-screen via IntersectionObserver. Pure DOM, no canvas loops.
 */
export const StarField = ({ count = 140 }: { count?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  const visibleRef = useRef(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const particles: HTMLDivElement[] = [];
    const data: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];
    const w = el.clientWidth;
    const h = el.clientHeight;

    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      const size = Math.random() * 2.4 + 0.6;
      const hue = Math.random() < 0.7 ? "199 89% 64%" : Math.random() < 0.5 ? "236 100% 74%" : "41 100% 65%";
      p.style.cssText = `position:absolute;width:${size}px;height:${size}px;border-radius:50%;background:hsl(${hue});box-shadow:0 0 ${size * 4}px hsl(${hue} / 0.7);will-change:transform,opacity;`;
      el.appendChild(p);
      particles.push(p);
      data.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15 - 0.05,
        r: Math.random() * Math.PI * 2,
        a: 0.3 + Math.random() * 0.7,
      });
    }

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => (visibleRef.current = e.isIntersecting)),
      { threshold: 0 }
    );
    io.observe(el);

    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(50, now - last);
      last = now;
      if (visibleRef.current) {
        const W = el.clientWidth;
        const H = el.clientHeight;
        for (let i = 0; i < particles.length; i++) {
          const d = data[i];
          d.r += 0.0008 * dt;
          d.x += d.vx * dt + Math.cos(d.r) * 0.04;
          d.y += d.vy * dt + Math.sin(d.r) * 0.04;
          if (d.x < -10) d.x = W + 10;
          if (d.x > W + 10) d.x = -10;
          if (d.y < -10) d.y = H + 10;
          if (d.y > H + 10) d.y = -10;
          const op = d.a * (0.6 + 0.4 * Math.sin(d.r * 2));
          particles[i].style.transform = `translate3d(${d.x}px, ${d.y}px, 0)`;
          particles[i].style.opacity = String(op);
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      io.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      particles.forEach((p) => p.remove());
    };
  }, [count]);

  return <div ref={ref} aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none" />;
};
