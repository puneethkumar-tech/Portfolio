import { Cloud, Code2, Database, Layout, Server, Wrench, type LucideIcon } from "lucide-react";
import { exploring, skillGroups } from "@/lib/portfolio-data";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const icons: Record<string, LucideIcon> = {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Wrench,
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technologies I work with"
      description="Grouped by area rather than rated with numbers. Some I use daily, others I'm still getting comfortable with."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.icon] ?? Code2;
          return (
            <Reveal
              key={group.title}
              delay={i * 70}
              className="glass card-hover rounded-2xl p-5"
            >
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-hairline bg-surface px-2.5 py-1 font-mono text-xs text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={120} className="glass mt-6 rounded-2xl p-5 sm:p-6">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Currently exploring
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Actively learning, not claiming mastery:
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {exploring.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-dashed border-primary/40 bg-primary/5 px-2.5 py-1 font-mono text-xs text-primary"
            >
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
