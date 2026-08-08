import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

/**
 * Static GitHub presence module. No fabricated stats — the activity strip is a
 * designed placeholder that can later be wired to real GitHub data.
 */
const focusAreas = ["Full-stack apps", "AI integration", "Learning in public"];

export function Profiles() {
  return (
    <Section
      id="presence"
      index="06"
      eyebrow="Presence"
      title="Where I build in public"
      description="Repositories, experiments, and the day-to-day of learning by shipping."
    >
      <Reveal className="panel grain relative overflow-hidden">
        <div className="grid gap-0 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="border-b border-hairline p-7 sm:p-10 lg:border-b-0 lg:border-r">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-sm border border-hairline bg-surface-strong">
                <Github className="h-5 w-5 text-primary" />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  GitHub
                </p>
                <p className="truncate font-display text-xl">@{profile.githubUsername}</p>
              </div>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {focusAreas.map((f) => (
                <li key={f} className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                  {f}
                </li>
              ))}
            </ul>

            {/* Activity strip — visual placeholder, connect to live data later */}
            <div
              aria-hidden="true"
              className="mt-8 grid grid-flow-col grid-rows-5 gap-1 overflow-hidden mask-fade-r"
            >
              {Array.from({ length: 105 }).map((_, i) => {
                const level = (i * 7 + (i % 5) * 13) % 9;
                const op = level > 6 ? 0.55 : level > 4 ? 0.3 : level > 2 ? 0.15 : 0.06;
                return (
                  <span
                    key={i}
                    className="h-3 w-3 rounded-[2px] bg-primary"
                    style={{ opacity: op }}
                  />
                );
              })}
            </div>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Illustrative activity grid · live GitHub data not connected
            </p>
          </div>

          <div className="flex flex-col justify-between gap-8 p-7 sm:p-10">
            <p className="font-display text-2xl leading-snug">
              Everything I build ends up here first — rough commits included.
            </p>
            <div className="space-y-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center justify-between gap-4 border-b border-hairline py-4 transition-colors hover:border-primary"
              >
                <span className="inline-flex items-center gap-3 font-display text-lg">
                  <Github className="h-4 w-4 text-primary" /> View GitHub profile
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center justify-between gap-4 border-b border-hairline py-4 transition-colors hover:border-primary"
              >
                <span className="inline-flex items-center gap-3 font-display text-lg">
                  <Linkedin className="h-4 w-4 text-primary" /> Connect on LinkedIn
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
