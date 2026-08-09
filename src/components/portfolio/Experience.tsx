import { useEffect, useRef, useState } from "react";
import { experience } from "@/lib/portfolio-data";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { CertificateLink } from "./CertificateLink";

export function Experience() {
  const ref = useRef<HTMLOListElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const p = (vh * 0.75 - r.top) / Math.max(r.height, 1);
        setProgress(Math.min(1, Math.max(0, p)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Section
      id="experience"
      index="04"
      eyebrow="Experience"
      title="Internships, in order"
      description="Short, hands-on roles worked alongside coursework."
    >
      <ol ref={ref} className="relative pl-8 sm:pl-12">
        <span aria-hidden="true" className="absolute left-0 top-1 h-full w-px bg-hairline" />
        <span
          aria-hidden="true"
          className="absolute left-0 top-1 w-px origin-top bg-gradient-to-b from-primary to-accent transition-transform duration-200 ease-out"
          style={{ height: "100%", transform: `scaleY(${progress})` }}
        />
        {experience.map((item, i) => (
          <Reveal key={item.org} as="li" delay={i * 100} className="relative pb-14 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute -left-8 top-2 grid h-3 w-3 place-items-center rounded-full border border-primary/60 bg-background sm:-left-12"
            >
              <span className="h-1 w-1 rounded-full bg-primary" />
            </span>

            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl leading-tight sm:text-3xl">{item.role}</h3>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {item.duration}
              </span>
            </div>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              {item.org}
            </p>
            <ul className="mt-5 max-w-2xl space-y-2.5 border-l border-hairline pl-5 text-sm leading-relaxed text-muted-foreground">
              {item.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            {item.certificateUrl && (
              <CertificateLink
                href={item.certificateUrl}
                label="View Internship Certificate"
                className="mt-6"
              />
            )}
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
