import { useRef, type ReactElement } from "react";
import { ArrowRight, FileText, Folder, Lock, Play } from "lucide-react";
import type { Project, ProjectVisualKind } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

/**
 * Reusable project visual.
 *
 * Renders a real screenshot when `project.image` is set, otherwise a designed
 * abstract product-preview mockup tailored to the project's `kind`.
 * Hover drives a subtle zoom + a cursor-following light.
 */

const chromeUrl: Record<ProjectVisualKind, string> = {
  platform: "localhost:3000 / learn",
  inventory: "localhost:3000 / dashboard",
  files: "localhost:3000 / drive",
  workflow: "localhost:3000 / builder",
};

function Chrome({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-hairline px-4 py-3 sm:px-5">
      <span className="h-2 w-2 rounded-full bg-primary/70" />
      <span className="h-2 w-2 rounded-full bg-foreground/15" />
      <span className="h-2 w-2 rounded-full bg-foreground/15" />
      <span className="ml-3 flex h-5 min-w-0 flex-1 items-center truncate rounded-sm border border-hairline bg-background/50 px-2.5 font-mono text-[10px] tracking-wide text-muted-foreground/80">
        {url}
      </span>
    </div>
  );
}

function SkeletonPlatform() {
  return (
    <div className="flex h-full min-h-0 flex-1">
      <div className="hidden w-1/4 shrink-0 space-y-3 border-r border-hairline p-5 sm:block">
        <div className="h-2.5 w-2/3 rounded-sm bg-primary/45" />
        {[80, 55, 70, 40, 62].map((w, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-[2px] border border-hairline bg-foreground/[0.07]" />
            <span className="h-1.5 rounded-sm bg-foreground/[0.08]" style={{ width: `${w}%` }} />
          </div>
        ))}
      </div>
      <div className="min-w-0 flex-1 space-y-4 p-5">
        <div className="flex items-center justify-between">
          <div className="h-3 w-2/5 rounded-sm bg-foreground/15" />
          <div className="h-5 w-16 rounded-sm bg-primary/70" />
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="overflow-hidden rounded-[3px] border border-hairline bg-foreground/[0.03] transition-transform duration-700 group-hover/vis:-translate-y-1"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="h-14 bg-gradient-to-br from-primary/25 to-transparent" />
              <div className="space-y-2 p-3">
                <div className="h-2 w-3/4 rounded-sm bg-foreground/[0.14]" />
                <div className="h-1.5 w-1/2 rounded-sm bg-foreground/[0.08]" />
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-[3px] border border-hairline p-3">
          <div className="flex items-center gap-3">
            <span className="h-6 w-6 shrink-0 rounded-sm border border-primary/40 bg-primary/15" />
            <div className="min-w-0 flex-1 space-y-1.5">
              <div className="h-1.5 w-1/2 rounded-sm bg-foreground/[0.12]" />
              <div className="h-1.5 w-2/3 rounded-sm bg-foreground/[0.07]" />
            </div>
            <div className="h-1.5 w-16 rounded-sm bg-foreground/[0.07]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SkeletonInventory() {
  const stats = [64, 42, 88];
  return (
    <div className="flex h-full min-h-0 flex-1 flex-col gap-4 p-5">
      <div className="grid grid-cols-3 gap-3">
        {stats.map((n, i) => (
          <div key={i} className="rounded-[3px] border border-hairline bg-foreground/[0.03] p-3">
            <div className="h-1.5 w-1/3 rounded-sm bg-foreground/[0.07]" />
            <div className="mt-2 h-3 w-8 rounded-sm bg-primary/60" />
          </div>
        ))}
      </div>
      <div className="rounded-[3px] border border-hairline">
        <div className="flex gap-3 border-b border-hairline bg-foreground/[0.04] px-4 py-2">
          {[30, 22, 18, 14].map((w, i) => (
            <div
              key={i}
              className="h-1.5 rounded-sm bg-foreground/[0.12]"
              style={{ width: `${w}%` }}
            />
          ))}
        </div>
        {[90, 76, 84, 58].map((w, i) => (
          <div
            key={i}
            className="flex items-center gap-3 border-b border-hairline px-4 py-2.5 last:border-0"
          >
            <span className="h-2 w-2 rounded-[2px] bg-primary/50" />
            <div className="h-1.5 rounded-sm bg-foreground/[0.09]" style={{ width: `${w}%` }} />
            <div className="ml-auto h-1.5 w-12 rounded-sm bg-foreground/[0.06]" />
          </div>
        ))}
      </div>
      <div className="mt-auto flex items-end gap-1.5 rounded-[3px] border border-hairline p-4">
        {[35, 55, 40, 70, 48, 82, 60, 90, 66, 45, 75, 52].map((h, i) => (
          <div
            key={i}
            className="w-full rounded-[2px] bg-gradient-to-t from-primary/30 to-primary/60"
            style={{ height: `${h * 0.32}px`, transitionDelay: `${i * 40}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

function SkeletonFiles() {
  const rows = [
    { w: 60, locked: true },
    { w: 74, locked: false },
    { w: 52, locked: true },
    { w: 66, locked: false },
    { w: 58, locked: true },
  ];
  return (
    <div className="flex h-full min-h-0 flex-1">
      <div className="min-w-0 flex-1 space-y-2.5 overflow-hidden p-5">
        {rows.map((r, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-[3px] border border-hairline bg-foreground/[0.03] px-3.5 py-2.5"
          >
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-sm border border-hairline bg-foreground/[0.05]">
              {r.locked ? (
                <Lock className="h-3 w-3 text-primary/80" />
              ) : (
                <FileText className="h-3 w-3 text-foreground/40" />
              )}
            </span>
            <div className="h-1.5 rounded-sm bg-foreground/[0.12]" style={{ width: `${r.w}%` }} />
            <span className="ml-auto shrink-0 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground/70">
              {r.locked ? "private" : "public"}
            </span>
          </div>
        ))}
      </div>
      <div className="hidden w-1/3 shrink-0 flex-col items-center justify-center gap-3 border-l border-hairline bg-foreground/[0.02] p-5 sm:flex">
        <span className="grid h-14 w-14 place-items-center rounded-sm border border-primary/35 bg-primary/10">
          <Folder className="h-6 w-6 text-primary" />
        </span>
        <div className="h-1.5 w-3/4 rounded-sm bg-foreground/[0.1]" />
        <div className="h-1.5 w-1/2 rounded-sm bg-foreground/[0.06]" />
        <div className="mt-2 h-5 w-20 rounded-sm border border-primary/40 bg-primary/15" />
      </div>
    </div>
  );
}

function SkeletonWorkflow() {
  const nodes = [
    { label: "Trigger", main: false },
    { label: "Action", main: true },
    { label: "Action", main: false },
    { label: "End", main: false },
  ];
  return (
    <div className="flex h-full min-h-0 flex-1 flex-col items-center justify-center gap-1 p-6">
      <div className="flex w-full max-w-sm items-center gap-2">
        <div className="h-1 flex-1 rounded-full bg-primary/20" />
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-primary/50 bg-primary/15">
          <Play className="h-3.5 w-3.5 text-primary" />
        </span>
        <div className="h-1 flex-1 rounded-full bg-primary/20" />
        <div className="h-1 flex-1 rounded-full bg-primary/20" />
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-sm border border-hairline bg-foreground/[0.05]">
          <ArrowRight className="h-3.5 w-3.5 text-foreground/40" />
        </span>
      </div>
      <div className="mt-2 grid w-full max-w-sm grid-cols-4 gap-2">
        {nodes.map((n, i) => (
          <div
            key={i}
            className={cn(
              "space-y-2 rounded-[3px] border p-3",
              n.main
                ? "border-primary/50 bg-primary/[0.08]"
                : "border-hairline bg-foreground/[0.03]",
            )}
          >
            <div
              className={cn("h-1.5 rounded-sm", n.main ? "bg-primary/70" : "bg-foreground/[0.12]")}
            />
            <div
              className={cn(
                "h-1.5 w-2/3 rounded-sm",
                n.main ? "bg-primary/40" : "bg-foreground/[0.07]",
              )}
            />
          </div>
        ))}
      </div>
      <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground/60">
        visual workflow builder
      </p>
    </div>
  );
}

const skeletons: Record<ProjectVisualKind, () => ReactElement> = {
  platform: SkeletonPlatform,
  inventory: SkeletonInventory,
  files: SkeletonFiles,
  workflow: SkeletonWorkflow,
};

export function ProjectVisual({ project, featured }: { project: Project; featured?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const Skeleton = skeletons[project.kind];

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
        "group/vis relative overflow-hidden border border-hairline bg-surface transition-colors duration-500 hover:border-primary/45",
        featured ? "aspect-[16/10]" : "aspect-[16/11]",
      )}
    >
      <div
        className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/vis:scale-[1.02]"
        style={{
          background:
            "radial-gradient(110% 90% at var(--mx, 25%) var(--my, 15%), color-mix(in oklab, var(--primary) 16%, transparent), transparent 62%), linear-gradient(150deg, oklch(0.21 0.008 265), oklch(0.155 0.005 265))",
        }}
      />
      <div className="rule-grid absolute inset-0 opacity-50" />

      {project.image ? (
        <img
          src={project.image}
          alt={`Screenshot of ${project.name}`}
          loading="lazy"
          className="relative h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/vis:scale-[1.04]"
        />
      ) : (
        <div className="relative flex h-full flex-col">
          <Chrome url={chromeUrl[project.kind]} />
          <div className="flex min-h-0 flex-1 flex-col">
            <Skeleton />
          </div>
        </div>
      )}

      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/85 via-background/40 to-transparent",
          featured ? "h-32 sm:h-36" : "h-20",
        )}
      />
    </div>
  );
}
