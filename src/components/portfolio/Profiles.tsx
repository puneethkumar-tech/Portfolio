import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Profiles() {
  return (
    <Section
      id="profiles"
      eyebrow="Profiles"
      title="Where I build in public"
      description="Live activity and repositories are best seen directly on the profiles below — no numbers are reproduced here."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal className="glass card-hover rounded-3xl p-6 sm:p-8">
          <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
            <Github className="h-5 w-5 text-primary" aria-hidden="true" />
            GitHub
          </h3>
          <p className="mt-2 font-mono text-sm text-muted-foreground">
            @{profile.githubUsername}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Project code and work in progress live here. A contribution activity embed can be
            plugged into this card later.
          </p>
          {/* Placeholder area for a future GitHub activity/contribution embed */}
          <div className="mt-5 grid h-24 place-items-center rounded-2xl border border-dashed border-hairline bg-surface text-xs text-muted-foreground">
            Contribution activity — to be connected
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-5 inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-hairline bg-surface-strong px-4 py-2 text-sm font-medium hover:border-primary/50"
          >
            View GitHub <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>

        <Reveal delay={90} className="glass card-hover rounded-3xl p-6 sm:p-8">
          <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
            <Linkedin className="h-5 w-5 text-primary" aria-hidden="true" />
            LinkedIn
          </h3>
          <p className="mt-2 font-mono text-sm text-muted-foreground">
            thatavarthi-puneeth-kumar
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Internships, learning updates, and professional background — the best place to reach me
            for opportunities alongside email.
          </p>
          <div className="mt-5 grid h-24 place-items-center rounded-2xl border border-dashed border-hairline bg-surface text-xs text-muted-foreground">
            Featured posts — to be added
          </div>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-5 inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-hairline bg-surface-strong px-4 py-2 text-sm font-medium hover:border-primary/50"
          >
            View LinkedIn <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
