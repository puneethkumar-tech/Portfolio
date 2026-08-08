import { useEffect, useState } from "react";

/** Subtle grid + gradient backdrop with a cursor-following ambient glow (desktop only). */
export function AmbientBackground() {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (reduce || !fine) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setPos({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-hero)" }} />
      <div className="grid-backdrop absolute inset-0" />
      <div className="animate-float-slow absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-primary/10 blur-[110px]" />
      <div className="animate-float-slow absolute -right-24 top-10 h-80 w-80 rounded-full bg-accent/10 blur-[120px] [animation-delay:-6s]" />
      {pos && (
        <div
          className="absolute h-[420px] w-[420px] rounded-full opacity-60 transition-transform duration-300 ease-out"
          style={{
            transform: `translate3d(${pos.x - 210}px, ${pos.y - 210}px, 0)`,
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--primary) 12%, transparent), transparent 65%)",
          }}
        />
      )}
    </div>
  );
}
