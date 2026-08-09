import { certifications, education, participation } from "@/lib/portfolio-data";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { CertificateLink } from "./CertificateLink";

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

      <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <Reveal delay={80}>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">
            Certifications
          </h3>
          <ul className="mt-5 border-t border-hairline">
            {certifications.map((c) => (
              <li
                key={c.provider || c.course}
                className="border-b border-hairline py-6 transition-colors duration-300 hover:bg-surface-strong/50"
              >
                <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-8">
                  <div className="min-w-0">
                    {c.provider && (
                      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">
                        {c.provider}
                      </p>
                    )}
                    <h4 className="mt-1.5 font-display text-xl leading-snug sm:text-2xl">
                      {c.comingSoon ? "Course details coming soon" : c.course}
                    </h4>
                    {c.detail && (
                      <p className="mt-2 font-mono text-xs text-muted-foreground">{c.detail}</p>
                    )}
                    {c.date && (
                      <p className="mt-1 font-mono text-[11px] text-muted-foreground/70">
                        {c.date}
                      </p>
                    )}
                  </div>
                  {c.url && <CertificateLink href={c.url} label="View Certificate" />}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={160}>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">
            Participation
          </h3>
          <div className="mt-5 border-t border-hairline">
            <p className="border-b border-hairline py-4 text-sm leading-relaxed text-muted-foreground">
              {participation.summary}
            </p>
            {participation.items.length > 0 ? (
              <ul>
                {participation.items.map((a) => (
                  <li
                    key={a.title}
                    className="border-b border-hairline py-4 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="font-display text-base text-foreground">{a.title}</span>
                    {a.note && <p className="mt-1">{a.note}</p>}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70">
                Event names & outcomes to be added
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
