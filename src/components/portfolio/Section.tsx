import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-28 px-4 py-16 sm:py-24", className)}>
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
          {description && (
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
