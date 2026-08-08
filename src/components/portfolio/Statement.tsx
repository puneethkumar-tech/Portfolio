import { useEffect, useRef, useState } from "react";

const statement = "Student now. Building like it's production.";
const words = statement.split(" ");

export function Statement() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-label="Statement"
      className="relative overflow-hidden border-y border-hairline px-5 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
          00 / Statement
        </p>

        <h2 className="mt-8 max-w-4xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
          {words.map((w, i) => (
            <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-1 pr-[0.22em]">
              <span
                className={`inline-block transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
                  shown ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                } ${i >= 2 ? "text-ember" : ""}`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                {w}
              </span>
            </span>
          ))}
        </h2>

        <div className="mt-12 grid gap-8 border-t border-hairline pt-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div
            className={`h-px w-full origin-left bg-gradient-to-r from-primary via-accent to-transparent transition-transform duration-[1400ms] ease-out md:col-span-2 md:-mt-8 ${
              shown ? "scale-x-100" : "scale-x-0"
            }`}
            aria-hidden="true"
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
