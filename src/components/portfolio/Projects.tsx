import { useRef } from "react";
import { ArrowUpRight, Github, ImageIcon } from "lucide-react";
import { projects, type Project, type ProjectStatus } from "@/lib/portfolio-data";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const statusStyles: Record<ProjectStatus, string> = {
  live: "border-live/40 bg-live/10 text-live",
  "in-development": "border-progress/40 bg-progress/10 text-progress",
  "coming-soon": "border-hairline bg-surface-strong text-muted-foreground",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
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
    <Reveal delay={index * 90} as="article" className="h-full">
      <div
        ref={ref}
        onPointerMove={onMove}
        className="glass card-hover group flex h-full flex-col overflow-hidden rounded-3xl"
      >
        <div className="relative aspect-[16/9] overflow-hidden border-b border-hairline">
          <div
            className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
            style={{
              background:
                "radial-gradient(120% 100% at var(--mx, 30%) var(--my, 20%), color-mix(in oklab, var(--primary) 22%, transparent), transparent 60%), linear-gradient(135deg, oklch(0.22 0.02 265), oklch(0.18 0.015 275))",
            }}
          />
          {project.image ? (
            <img
              src={project.image}
              alt={`Screenshot of ${project.name}`}
              loading="lazy"
              className="relative h-full w-full object-cover"
            />
          ) : (
            <div className="relative grid h-full w-full place-items-center text-center">
              <div>
                <ImageIcon className="mx-auto h-7 w-7 text-muted-foreground" aria-hidden="true" />
                <p className="mt-2 font-mono text-xs text-muted-foreground">
                  Screenshot coming soon
                </p>
              </div>
            </div>
          )}
          <span
            className={cn(
              "absolute right-3 top-3 rounded-full border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide",
              statusStyles[project.status],
            )}
          >
            {project.statusLabel}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-lg font-semibold leading-snug sm:text-xl">
            {project.name}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-lg border border-hairline bg-surface px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
              >
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-10 items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:brightness-110"
              >
                Visit site <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : (
              <span className="font-mono text-xs text-muted-foreground">
                {project.status === "live" ? "Live link coming soon" : "Link available at launch"}
              </span>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-hairline bg-surface-strong px-4 py-2 text-sm font-medium hover:border-primary/50"
              >
                <Github className="h-4 w-4" /> Code
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built and things in progress"
      description="Status labels are honest: only deployed work is marked live, everything else is clearly in development or planned."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
