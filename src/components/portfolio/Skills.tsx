import { exploring, skillGroups } from "@/lib/portfolio-data";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <Section
      id="skills"
      index="03"
      eyebrow="Stack"
      title="The tools I reach for"
      description="Grouped by area, never rated with invented percentages. Some I use daily, others I'm still getting comfortable with."
    >
      <div className="border-t border-hairline">
        {skillGroups.map((group, gi) => (
          <Reveal
            key={group.title}
            delay={gi * 60}
            className="group grid gap-4 border-b border-hairline py-7 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-8"
          >
            <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
              {group.title}
            </h3>
            <ul className="flex flex-wrap items-baseline gap-x-6 gap-y-3">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="font-display text-lg text-muted-foreground transition-colors duration-300 hover:text-foreground sm:text-xl"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal delay={100} className="mt-14">
        <div className="panel grain relative overflow-hidden p-7 sm:p-9">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">
            Currently exploring
          </p>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            Actively learning — listed here rather than claimed as a skill.
          </p>
          <ul className="mt-7 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {exploring.map((item, i) => (
              <li
                key={item}
                className="flex items-baseline gap-3 border-b border-hairline pb-3 font-display text-base text-foreground"
              >
                <span className="font-mono text-[10px] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
