import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Word-by-word masked text reveal for large statements.
 * Uses an IntersectionObserver, respects prefers-reduced-motion.
 */
export function AnimatedText({
  text,
  className,
  delay = 0,
  step = 90,
  highlightFrom,
}: {
  text: string;
  className?: string;
  /** Start delay in ms (used with a parent's scroll-trigger). */
  delay?: number;
  /** Per-word stagger in ms. */
  step?: number;
  /** Words at/after this index render in the ember accent. */
  highlightFrom?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
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

  const words = text.split(" ");

  return (
    <span ref={ref} className={className}>
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className="inline-block overflow-hidden pb-1 pr-[0.22em] align-bottom"
        >
          <span
            className={cn(
              "inline-block transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
              shown ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
              highlightFrom !== undefined && i >= highlightFrom && "text-ember",
            )}
            style={{ transitionDelay: `${delay + i * step}ms` }}
          >
            {w}
          </span>
        </span>
      ))}
    </span>
  );
}
