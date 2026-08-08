import { education, profile, roadmap } from "@/lib/portfolio-data";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const currently = [
  { k: "Currently", v: "2nd Year · 3rd Semester" },
  { k: "Goal", v: "Full Stack AI Developer" },
  { k: "Based in", v: "Kandukuru, Andhra Pradesh, India" },
];

export function About() {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      title={
        <>
          I learn by building things that <span className="text-ember">actually run</span>.
        </>
      }
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-16">
        <Reveal className="space-y-6">
          <p className="font-display text-xl leading-snug text-foreground sm:text-2xl">
            I&apos;m Puneeth — a second-year Computer Science and Engineering student at{" "}
            {education.institution}, learning by building real full-stack applications.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            My interest sits where full-stack development meets AI: web applications that do
            something useful, not demos that only work on a slide. Most of what I know came from
            shipping — personal projects, two internships, and a lot of debugging at 1am.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Long term, I want to be a{" "}
            <span className="text-foreground">Full Stack AI Developer</span> — building intelligent
            products end to end, from database schema to interface detail.
          </p>

          <ol className="mt-10 space-y-0 border-t border-hairline">
            {roadmap.map((r, i) => (
              <li
                key={r.period}
                className="group grid gap-2 border-b border-hairline py-5 sm:grid-cols-[6rem_minmax(0,1fr)] sm:gap-6"
              >
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  {r.period}
                </span>
                <div className="min-w-0">
                  <p className="font-display text-base font-medium text-foreground">
                    {r.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{r.detail}</p>
                </div>
                <span className="sr-only">{i + 1}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={120} className="lg:pt-2">
          <div className="panel grain sticky top-28 p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              Currently
            </p>
            <dl className="mt-6 space-y-5">
              {currently.map((c) => (
                <div key={c.k} className="border-b border-hairline pb-5 last:border-0 last:pb-0">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
                    {c.k}
                  </dt>
                  <dd className="mt-1.5 font-display text-base text-foreground">{c.v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 border-t border-hairline pt-5 text-sm leading-relaxed text-muted-foreground">
              {profile.degreeNote ?? education.degree}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
