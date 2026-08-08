import { useRef } from "react";
import { ArrowUpRight, Github, Lock } from "lucide-react";
import { projects, type Project, type ProjectStatus } from "@/lib/portfolio-data";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const statusStyles: Record<ProjectStatus, string> = {
  live: "border-live/40 text-live",
  "in-development": "border-progress/40 text-progress",
  "coming-soon": "border-hairline text-muted-foreground",
};

/** Designed visual frame: an abstract app-shell wireframe, replaceable by a real screenshot. */
function ProjectVisual({ project, featured }: { project: Project; featured?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.matchMedia("(pointer: fine)").matches
    )
      return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      className={cn(
        "group/vis relative overflow-hidden border border-hairline bg-surface transition-colors duration-500 hover:border-primary/40",
        featured ? "aspect-[16/10]" : "aspect-[16/11]",
      )}
    >
      <div
        className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/vis:scale-[1.04]"
        style={{
          background:
            "radial-gradient(110% 90% at var(--mx, 25%) var(--my, 15%), color-mix(in oklab, var(--primary) 20%, transparent), transparent 62%), linear-gradient(150deg, oklch(0.21 0.008 265), oklch(0.155 0.005 265))",
        }}
      />
      <div className="rule-grid absolute inset-0 opacity-60" />

      {project.image ? (
        <img
          src={project.image}
          alt={`Screenshot of ${project.name}`}
          loading="lazy"
          className="relative h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/vis:scale-[1.04]"
        />
      ) : (
        /* Wireframe placeholder — swap `image` in portfolio-data.ts for a real screenshot */
        <div className="relative flex h-full flex-col p-5 sm:p-7">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary/60" />
            <span className="h-2 w-2 rounded-full bg-foreground/15" />
            <span className="h-2 w-2 rounded-full bg-foreground/15" />
            <span className="ml-3 h-5 flex-1 rounded-sm border border-hairline bg-background/40" />
          </div>
          <div className="mt-5 grid flex-1 grid-cols-[28%_minmax(0,1fr)] gap-4">
            <div className="space-y-2.5 border-r border-hairline pr-4">
              {[90, 65, 78, 50, 70].map((w, i) => (
                <div
                  key={i}
                  className="h-2 rounded-sm bg-foreground/[0.09] transition-all duration-700"
                  style={{ width: `${w}%`, transitionDelay: `${i * 60}ms` }}
                />
              ))}
            </div>
            <div className="space-y-3">
              <div className="h-3 w-2/5 rounded-sm bg-primary/40" />
              <div className="grid grid-cols-3 gap-3">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="h-12 rounded-sm border border-hairline bg-foreground/[0.04] transition-transform duration-700 group-hover/vis:-translate-y-1"
                    style={{ transitionDelay: `${i * 70}ms` }}
                  />
                ))}
              </div>
              <div className="h-20 rounded-sm border border-hairline bg-foreground/[0.03]" />
              <div className="h-2 w-3/5 rounded-sm bg-foreground/[0.08]" />
            </div>
          </div>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            Interface preview · screenshot to be added
          </p>
        </div>
      )}

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/70 to-transparent"
      />
    </div>
  );
}

function ProjectRow({ project, i }: { project: Project; i: number }) {
  const featured = project.status === "live";
  const flipped = i % 2 === 1;

  return (
    <Reveal
      as="article"
      delay={60}
      className={cn(
        "grid gap-8 border-t border-hairline pt-12 lg:gap-14",
        featured ? "lg:grid-cols-1" : "lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center",
      )}
    >
      <div className={cn(featured && "mb-2", flipped && !featured && "lg:order-2")}>
        <ProjectVisual project={project} featured={featured} />
      </div>

      <div className={cn("min-w-0", featured && "grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]")}>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[11px] text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              className={cn(
                "border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em]",
                statusStyles[project.status],
              )}
            >
              {project.statusLabel}
            </span>
            {featured && (
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                Featured
              </span>
            )}
          </div>

          <h3
            className={cn(
              "mt-4 font-display leading-[1.05]",
              featured ? "text-4xl sm:text-6xl" : "text-2xl sm:text-3xl",
            )}
          >
            <span className={featured ? "text-ember" : undefined}>{project.name}</span>
          </h3>

          <p
            className={cn(
              "mt-4 max-w-2xl leading-relaxed text-muted-foreground",
              featured ? "text-base sm:text-lg" : "text-sm sm:text-base",
            )}
          >
            {project.description}
          </p>
        </div>

        <div className={cn("min-w-0", !featured && "mt-6")}>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 border-t border-hairline pt-4">
            {project.tech.map((t) => (
              <li key={t} className="font-mono text-[11px] text-muted-foreground">
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex min-h-11 items-center gap-2 rounded-sm bg-primary px-5 text-sm font-semibold text-primary-foreground hover:brightness-110"
              >
                Visit site
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ) : (
              <span
                aria-disabled="true"
                className="inline-flex min-h-11 cursor-not-allowed items-center gap-2 rounded-sm border border-dashed border-hairline px-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
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
                className="inline-flex min-h-11 items-center gap-2 border-b border-hairline px-1 text-sm hover:border-primary hover:text-primary"
              >
                <Github className="h-4 w-4" /> Source
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Projects() {
  const ordered = [...projects].sort((a, b) => (a.status === "live" ? -1 : b.status === "live" ? 1 : 0));

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
      description="Status labels are honest. Only deployed work is marked live; everything else clearly reads in development or coming soon."
    >
      <div className="space-y-16 sm:space-y-20">
        {ordered.map((p, i) => (
          <ProjectRow key={p.name} project={p} i={i} />
        ))}
      </div>
    </Section>
  );
}
