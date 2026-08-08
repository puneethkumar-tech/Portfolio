import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

/** Editorial section shell: sticky index rail on the left, content on the right. */
export function Section({
  id,
  index,
  eyebrow,
  title,
  description,
  children,
  className,
  wide,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-28 border-t border-hairline px-5 py-20 sm:py-28", className)}
    >
      <div className={cn("mx-auto", wide ? "max-w-7xl" : "max-w-6xl")}>
        <div className="grid gap-10 lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
                {index} / {eyebrow}
              </p>
              <span
                aria-hidden="true"
                className="mt-4 hidden h-px w-12 bg-gradient-to-r from-primary to-transparent lg:block"
              />
            </Reveal>
          </div>

          <div className="min-w-0">
            <Reveal>
              <h2 className="max-w-3xl font-display text-3xl leading-[1.05] sm:text-5xl">
                {title}
              </h2>
              {description && (
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {description}
                </p>
              )}
            </Reveal>
            <div className="mt-12">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
