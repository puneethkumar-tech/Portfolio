import { Briefcase } from "lucide-react";
import { experience } from "@/lib/portfolio-data";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Internships"
      description="Short, hands-on roles where I worked on real tasks alongside my coursework."
    >
      <ol className="relative space-y-6 pl-6 sm:pl-8">
        <span
          aria-hidden="true"
          className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary/70 via-hairline to-transparent"
        />
        {experience.map((item, i) => (
          <Reveal key={item.org} delay={i * 100} as="li" className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-6 top-6 grid h-4 w-4 place-items-center rounded-full border border-primary/50 bg-background sm:-left-8"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            <div className="glass card-hover rounded-2xl p-6">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                <div className="min-w-0">
                  <h3 className="truncate font-display text-lg font-semibold">{item.role}</h3>
                  <p className="mt-1 flex items-center gap-2 text-sm text-primary">
                    <Briefcase className="h-4 w-4 shrink-0" aria-hidden="true" />
                    {item.org}
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-hairline bg-surface px-3 py-1 font-mono text-xs text-muted-foreground">
                  {item.duration}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
