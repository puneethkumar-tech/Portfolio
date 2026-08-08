import { ArrowUp } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-hairline px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Designed & built with React · TanStack Start
        </p>
        <a
          href="#top"
          className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary"
        >
          Back to top
          <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
        </a>
      </div>
    </footer>
  );
}
