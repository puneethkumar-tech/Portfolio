import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { MagneticLink } from "./MagneticLink";

/** Portrait module — a designed frame that later accepts a real photo. */
function PortraitModule() {
  return (
    <div className="relative">
      <span
        aria-hidden="true"
        className="absolute -left-3 -top-3 h-16 w-16 border-l border-t border-primary/40"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-3 -right-3 h-16 w-16 border-b border-r border-primary/40"
      />
      <div className="relative aspect-[4/5] overflow-hidden border border-hairline bg-surface">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(120% 80% at 30% 0%, color-mix(in oklab, var(--primary) 16%, transparent), transparent 60%), linear-gradient(160deg, oklch(0.2 0.008 265), oklch(0.155 0.005 265))",
          }}
        />
        <div className="rule-grid absolute inset-0 opacity-70" />
        {profile.photoUrl ? (
          <img
            src={profile.photoUrl}
            alt={`Portrait of ${profile.name}`}
            className="relative h-full w-full object-cover"
          />
        ) : (
          <div className="relative flex h-full flex-col justify-between p-6">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              <span>Portrait</span>
              <span className="text-primary">TP—01</span>
            </div>

            <div className="text-center">
              <div
                aria-hidden="true"
                className="text-gradient mx-auto font-display text-[5.5rem] font-bold leading-none tracking-[-0.05em] sm:text-[6.5rem]"
              >
                P
              </div>
              <div
                aria-hidden="true"
                className="mx-auto mt-3 h-px w-16 bg-gradient-to-r from-transparent via-primary/60 to-transparent"
              />
              <p className="mt-4 font-display text-lg font-semibold leading-tight tracking-tight text-foreground">
                {profile.name}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                CSE · Full Stack Developer
              </p>
            </div>

            <div className="flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              <span>{profile.locationShort}</span>
              <span className="text-primary">2029</span>
            </div>
          </div>
        )}
        <span
          aria-hidden="true"
          className="animate-sweep absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-primary/10 to-transparent"
        />
      </div>
    </div>
  );
}

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const lines = ["THATAVARTHI", "PUNEETH", "KUMAR"];

  return (
    <section id="top" className="relative px-5 pb-24 pt-36 sm:pb-32 sm:pt-44">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
          <div className="min-w-0">
            <div
              className="animate-fade-up flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground"
              style={{ animationDelay: "80ms" }}
            >
              <span className="inline-flex items-center gap-2 text-live">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live" />
                </span>
                {profile.status}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3 w-3" /> {profile.locationShort}
              </span>
            </div>

            <h1 className="mt-8 font-display text-[13vw] font-bold leading-[0.86] tracking-[-0.045em] sm:text-[9vw] lg:text-[6.4rem]">
              {lines.map((line, i) => (
                <span key={line} className="block overflow-hidden">
                  <span
                    className={
                      i === 1
                        ? "text-ember inline-block animate-rise"
                        : "text-gradient inline-block animate-rise"
                    }
                    style={{ animationDelay: `${180 + i * 130}ms` }}
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h1>

            <div
              className="animate-fade-up mt-9 flex flex-col gap-5 border-t border-hairline pt-6 sm:flex-row sm:items-start sm:justify-between"
              style={{ animationDelay: "620ms" }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
                {profile.title}
              </p>
              <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
                {profile.tagline}
              </p>
            </div>

            <p
              className="animate-fade-up mt-6 max-w-xl font-display text-xl leading-snug text-foreground sm:text-2xl"
              style={{ animationDelay: "700ms" }}
            >
              Second year. Four projects deep. Learning by shipping, not by watching.
            </p>

            <div
              className="animate-fade-up mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "780ms" }}
            >
              <MagneticLink
                href="#projects"
                className="group inline-flex min-h-12 items-center gap-3 rounded-sm bg-primary px-6 text-sm font-semibold text-primary-foreground transition-[filter] hover:brightness-110"
              >
                View Projects
                <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </MagneticLink>
              <MagneticLink
                href={profile.resumeUrl}
                className="group inline-flex min-h-12 items-center gap-3 rounded-sm border border-hairline px-6 text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </MagneticLink>
            </div>

            <div
              className="animate-fade-up mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
              style={{ animationDelay: "860ms" }}
            >
              {[
                { icon: Github, label: "GitHub", href: profile.github },
                { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
                { icon: Mail, label: "Email", href: `mailto:${profile.email}` },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <PortraitModule />
          </div>
        </div>
      </div>
    </section>
  );
}
