import { ArrowUpRight, Github, Lock } from "lucide-react";
import { projects, type Project, type ProjectStatus } from "@/lib/portfolio-data";
import { ProjectVisual } from "./ProjectVisual";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const statusStyles: Record<ProjectStatus, { chip: string; dot: string }> = {
  live: { chip: "border-live/40 text-live", dot: "bg-live" },
  "in-development": { chip: "border-progress/40 text-progress", dot: "bg-progress" },
  "coming-soon": { chip: "border-hairline text-muted-foreground", dot: "bg-foreground/40" },
};

function StatusChip({ status, label }: { status: ProjectStatus; label: string }) {
  const s = statusStyles[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em]",
        s.chip,
      )}
    >
      <span className={cn("h-1 w-1 rounded-full", s.dot)} />
      {label}
    </span>
  );
}

function ActionRow({ project }: { project: Project }) {
  return (
    <div className="mt-7 flex flex-wrap items-center gap-5">
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="group inline-flex min-h-11 items-center gap-2 rounded-sm bg-primary px-5 text-sm font-semibold text-primary-foreground transition-[filter] hover:brightness-110"
        >
          Visit site
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      ) : (
        <span
          aria-disabled="true"
          className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-dashed border-hairline px-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
        >
          <Lock className="h-3.5 w-3.5" />
          {project.status === "live" ? "Link coming soon" : "Link at launch"}
        </span>
      )}
      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="group inline-flex min-h-11 items-center gap-2 border-b border-hairline px-1 text-sm transition-colors hover:border-primary hover:text-primary"
        >
          <Github className="h-4 w-4" />
          Source
          <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
        </a>
      )}
    </div>
  );
}

function ProjectBody({ project }: { project: Project }) {
  return (
    <>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
        {project.description}
      </p>
      <div className="mt-6 border-t border-hairline pt-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70">
          Stack
        </p>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
          {project.tech.map((t) => (
            <li key={t} className="font-mono text-[11px] text-foreground/80">
              {t}
            </li>
          ))}
        </ul>
      </div>
      <ActionRow project={project} />
    </>
  );
}

function FeaturedRow({ project, i }: { project: Project; i: number }) {
  return (
    <Reveal as="article" delay={60} className="border-t border-hairline pt-12 lg:pt-16">
      <div className="mb-4 flex flex-wrap items-center gap-4 lg:mb-6">
        <span className="font-mono text-[11px] text-muted-foreground">
          {String(i + 1).padStart(2, "0")}
        </span>
        <StatusChip status={project.status} label={project.statusLabel} />
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
          Featured project
        </span>
      </div>

      <div className="relative">
        <ProjectVisual project={project} featured />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-5 sm:p-7"
          aria-hidden="true"
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
              Featured · {project.statusLabel}
            </p>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground/90">
              {project.tech[0]} · {project.tech[1]} · {project.tech[2]}
            </p>
          </div>
          <ArrowUpRight className="h-6 w-6 shrink-0 text-foreground/70 sm:h-8 sm:w-8" />
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-end lg:gap-14">
        <h3 className="max-w-3xl font-display text-3xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
          <span className="text-ember">{project.name}</span>
        </h3>
        <div className="min-w-0">
          <ProjectBody project={project} />
        </div>
      </div>
    </Reveal>
  );
}

function StandardRow({ project, i }: { project: Project; i: number }) {
  const flipped = i % 2 === 1;
  return (
    <Reveal
      as="article"
      delay={60}
      className={cn(
        "border-t border-hairline pt-12 lg:pt-16",
        "grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center lg:gap-14",
      )}
    >
      <div className={cn("min-w-0", flipped && "lg:order-2")}>
        <div className="relative">
          <ProjectVisual project={project} />
          <p
            aria-hidden="true"
            className="pointer-events-none absolute -top-3 left-4 bg-background px-2 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground"
          >
            Preview
          </p>
        </div>
      </div>

      <div className={cn("min-w-0", flipped && "lg:order-1")}>
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-[11px] text-muted-foreground">
            {String(i + 1).padStart(2, "0")}
          </span>
          <StatusChip status={project.status} label={project.statusLabel} />
        </div>
        <h3 className="mt-4 font-display text-2xl font-semibold leading-[1.1] tracking-[-0.02em] sm:text-4xl">
          {project.name}
        </h3>
        <ProjectBody project={project} />
      </div>
    </Reveal>
  );
}

export function Projects() {
  const ordered = [
    ...projects.filter((p) => p.status === "live"),
    ...projects.filter((p) => p.status !== "live"),
  ];

  return (
    <Section
      id="projects"
      index="02"
      eyebrow="Projects"
      wide
      title={
        <>
          Work in the open — <span className="text-muted-foreground">shipped and in progress</span>
        </>
      }
      description="Honest status labels, every project laid out like a case study. Deployed work is marked live; the rest clearly reads in development or coming soon."
    >
      <div className="space-y-20 sm:space-y-24">
        {ordered.map((p, i) =>
          p.status === "live" ? (
            <FeaturedRow key={p.name} project={p} i={i} />
          ) : (
            <StandardRow key={p.name} project={p} i={i} />
          ),
        )}
      </div>
    </Section>
  );
}
