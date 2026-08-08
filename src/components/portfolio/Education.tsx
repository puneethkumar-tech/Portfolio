import { achievements, certifications, education } from "@/lib/portfolio-data";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <Section
      id="education"
      index="05"
      eyebrow="Education"
      title="Studies, certifications & participation"
      description="Kept factual — course titles and outcomes are added only once confirmed."
    >
      <Reveal className="panel grain relative overflow-hidden p-7 sm:p-10">
        <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <div className="min-w-0">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">
              {education.period}
            </p>
            <h3 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
              {education.institution}
            </h3>
            <p className="mt-2 text-base text-muted-foreground">{education.degree}</p>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {education.note}
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <Reveal delay={80}>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">
            Certifications
          </h3>
          <ul className="mt-5 border-t border-hairline">
            {certifications.map((c) => (
              <li
                key={c.provider}
                className="flex items-baseline justify-between gap-4 border-b border-hairline py-4"
              >
                <span className="font-display text-lg">{c.provider}</span>
                <span className="text-right font-mono text-[11px] text-muted-foreground">
                  {c.note}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={160}>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">
            Participation
          </h3>
          <ul className="mt-5 border-t border-hairline">
            {achievements.map((a) => (
              <li
                key={a}
                className="border-b border-hairline py-4 text-sm leading-relaxed text-muted-foreground"
              >
                {a}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
