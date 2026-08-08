import { Brain, Cloud, Code2, Compass, Cpu, GraduationCap, Sparkles } from "lucide-react";
import { education, exploring, profile, roadmap } from "@/lib/portfolio-data";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const highlights = [
  { icon: Code2, label: "Full-stack development", detail: "React, Next.js, Node.js, databases" },
  { icon: Brain, label: "AI integration", detail: "Adding AI to practical web apps" },
  { icon: Cloud, label: "Cloud & deployment", detail: "Vercel, Render, Railway, Docker basics" },
  { icon: Cpu, label: "Scalable systems", detail: "Learning system design fundamentals" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Student now, building like it's production"
      description="A short, honest snapshot of where I am and where I'm heading."
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="glass rounded-3xl p-6 sm:p-8">
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I&apos;m Puneeth, a second-year Computer Science and Engineering student at{" "}
              {education.institution}. I&apos;m passionate about full-stack development, AI
              integration, cloud technologies, and scalable software systems.
            </p>
            <p>
              I enjoy turning ideas into practical applications and I learn mostly by building —
              through personal projects, internships, and online courses. Each project teaches me
              something I couldn&apos;t get from a tutorial alone.
            </p>
            <p>
              My long-term goal is to become a{" "}
              <span className="text-foreground">Full Stack AI Developer</span>, building
              intelligent applications that solve meaningful real-world problems.
            </p>
          </div>

          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, label, detail }) => (
              <div key={label} className="rounded-2xl border border-hairline bg-surface p-4">
                <dt className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Icon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {label}
                </dt>
                <dd className="mt-1 text-sm text-muted-foreground">{detail}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="space-y-6">
          <Reveal delay={80} className="glass rounded-3xl p-6 sm:p-8">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <GraduationCap className="h-5 w-5 text-primary" aria-hidden="true" />
              Quick facts
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <span className="text-foreground">Studying:</span> {education.degree}
              </li>
              <li>
                <span className="text-foreground">Year:</span> {education.note}
              </li>
              <li>
                <span className="text-foreground">Based in:</span> {profile.location}
              </li>
              <li>
                <span className="text-foreground">Focus:</span> {profile.positioning}
              </li>
            </ul>
          </Reveal>

          <Reveal delay={160} className="glass rounded-3xl p-6 sm:p-8">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <Compass className="h-5 w-5 text-primary" aria-hidden="true" />
              Growth roadmap
            </h3>
            <ol className="mt-4 space-y-4">
              {roadmap.map((r) => (
                <li key={r.period} className="relative pl-6">
                  <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-primary" />
                  <p className="font-mono text-xs text-primary">{r.period}</p>
                  <p className="mt-1 text-sm font-medium text-foreground">{r.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{r.detail}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>

      <Reveal delay={120} className="glass mt-6 rounded-3xl p-6 sm:p-8">
        <h3 className="flex items-center gap-2 text-lg font-semibold">
          <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" />
          Currently exploring
        </h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {exploring.map((item) => (
            <li
              key={item}
              className="rounded-full border border-dashed border-hairline bg-surface px-3 py-1.5 text-sm text-muted-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
