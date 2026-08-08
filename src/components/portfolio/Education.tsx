import { Award, BadgeCheck, GraduationCap, Trophy } from "lucide-react";
import { achievements, certifications, education } from "@/lib/portfolio-data";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Studies, certifications & participation"
      description="Details are kept factual; exact course names and event outcomes will be added as they're confirmed."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <Reveal className="glass card-hover rounded-3xl p-6 lg:col-span-1">
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            <GraduationCap className="h-4 w-4 text-primary" aria-hidden="true" />
            Degree
          </h3>
          <p className="mt-4 font-display text-lg font-semibold">{education.degree}</p>
          <p className="mt-1 text-sm text-muted-foreground">{education.institution}</p>
          <p className="mt-4 font-mono text-xs text-primary">{education.period}</p>
          <p className="mt-1 text-sm text-muted-foreground">{education.note}</p>
        </Reveal>

        <Reveal delay={90} className="glass card-hover rounded-3xl p-6">
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            <BadgeCheck className="h-4 w-4 text-primary" aria-hidden="true" />
            Certifications
          </h3>
          <ul className="mt-4 space-y-3">
            {certifications.map((c) => (
              <li key={c.provider} className="rounded-2xl border border-hairline bg-surface p-4">
                <p className="text-sm font-medium text-foreground">{c.provider}</p>
                <p className="mt-1 text-sm text-muted-foreground">{c.note}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={180} className="glass card-hover rounded-3xl p-6">
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            <Trophy className="h-4 w-4 text-primary" aria-hidden="true" />
            Participation
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {achievements.map((a) => (
              <li key={a} className="flex gap-2">
                <Award className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                {a}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
