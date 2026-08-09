import { useEffect, useRef, useState } from "react";
import { AnimatedText } from "./AnimatedText";

export function Statement() {
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineShown, setLineShown] = useState(false);

  useEffect(() => {
    const el = lineRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setLineShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setLineShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      aria-label="Statement"
      className="relative overflow-hidden border-y border-hairline px-5 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
          00 / Statement
        </p>

        <h2
          aria-label="Student now. Building like it's production."
          className="mt-8 max-w-4xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
        >
          <AnimatedText text="Student now. Building like it's production." highlightFrom={2} />
        </h2>

        <div className="relative mt-12 grid gap-8 border-t border-hairline pt-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div
            ref={lineRef}
            aria-hidden="true"
            className="absolute -mt-8 left-0 right-0 h-px w-full origin-left bg-gradient-to-r from-primary via-accent to-transparent transition-transform duration-[1400ms] ease-out"
            style={lineShown ? { transform: "scaleX(1)" } : { transform: "scaleX(0)" }}
          />
          <p className="font-display text-xl leading-snug text-foreground sm:text-2xl">
            Every project ships with authentication, real data, and a deployment story.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            I treat coursework as the floor, not the ceiling. What I build outside class is where
            the real learning happens — full-stack apps with proper architecture, honest status
            labels, and no invented credentials. What is live is marked live; what is in progress
            says so.
          </p>
        </div>
      </div>
    </section>
  );
}
