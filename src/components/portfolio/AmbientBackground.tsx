import { useEffect, useRef } from "react";

/**
 * Atmospheric backdrop: ember light field, fine rule grid, grain,
 * and a cursor-following ambient glow (desktop, motion-safe only).
 */
export function AmbientBackground() {
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glow.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (reduce || !fine) return;

    let frame = 0;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 3;
    let cx = tx;
    let cy = ty;

    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      el.style.transform = `translate3d(${cx - 300}px, ${cy - 300}px, 0)`;
      frame = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    el.style.opacity = "1";
    window.addEventListener("pointermove", onMove, { passive: true });
    frame = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="grain pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-field)" }} />
      <div className="rule-grid absolute inset-0" />
      <div className="animate-drift absolute -left-40 top-[12%] h-[36rem] w-[36rem] rounded-full bg-primary/[0.07] blur-[140px]" />
      <div className="animate-drift absolute -right-40 top-[48%] h-[30rem] w-[30rem] rounded-full bg-accent/[0.06] blur-[150px] [animation-delay:-11s]" />
      <div
        ref={glow}
        className="absolute h-[600px] w-[600px] rounded-full opacity-0 transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--primary) 9%, transparent), transparent 62%)",
        }}
      />
    </div>
  );
}
