import { useEffect, useState } from "react";

export const TypedTagline = ({ phrases }: { phrases: string[] }) => {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[i % phrases.length];
    const speed = deleting ? 30 : 55;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1800);
      } else {
        const next = current.slice(0, Math.max(0, text.length - 1));
        setText(next);
        if (next === "") {
          setDeleting(false);
          setI((v) => v + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i, phrases]);

  return (
    <p className="font-sora text-base md:text-lg text-muted-foreground min-h-[1.75rem]">
      <span>{text}</span>
      <span className="inline-block w-[2px] h-5 ml-1 bg-ice align-middle animate-pulse" />
    </p>
  );
};
