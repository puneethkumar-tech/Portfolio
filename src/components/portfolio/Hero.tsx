import { ArrowDown, Download, Github, Linkedin, Mail, MapPin, User } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { MagneticLink } from "./MagneticLink";

const words = profile.name.split(" ");

export function Hero() {
  return (
    <section id="top" className="relative px-4 pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div>
          <p
            className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-3 py-1.5 font-mono text-xs text-muted-foreground"
            style={{ animationDelay: "60ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
            </span>
            {profile.status}
          </p>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] sm:text-6xl lg:text-[4.25rem]">
            {words.map((w, i) => (
              <span
                key={w}
                className="animate-fade-up mr-3 inline-block text-gradient"
                style={{ animationDelay: `${120 + i * 90}ms` }}
              >
                {w}
              </span>
            ))}
          </h1>

          <p
            className="animate-fade-up mt-5 font-mono text-sm text-primary sm:text-base"
            style={{ animationDelay: "420ms" }}
          >
            {profile.title}
          </p>

          <p
            className="animate-fade-up mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ animationDelay: "500ms" }}
          >
            {profile.tagline} I&apos;m a second-year CSE student at Panimalar Engineering College
            learning by shipping real full-stack projects, with a long-term focus on becoming a
            Full Stack AI Developer.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "580ms" }}
          >
            <MagneticLink
              href="#projects"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110"
            >
              View Projects
              <ArrowDown className="h-4 w-4" />
            </MagneticLink>
            <MagneticLink
              href={profile.resumeUrl}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-hairline bg-surface-strong px-5 py-3 text-sm font-semibold text-foreground hover:border-primary/50"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </MagneticLink>
          </div>

          <div
            className="animate-fade-up mt-8 flex flex-wrap items-center gap-4 text-muted-foreground"
            style={{ animationDelay: "660ms" }}
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="grid h-11 w-11 place-items-center rounded-xl border border-hairline bg-surface transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="grid h-11 w-11 place-items-center rounded-xl border border-hairline bg-surface transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send an email"
              className="grid h-11 w-11 place-items-center rounded-xl border border-hairline bg-surface transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Mail className="h-5 w-5" />
            </a>
            <span className="inline-flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4" />
              {profile.location}
            </span>
          </div>
        </div>

        {/* Photo placeholder — swap profile.photoUrl in src/lib/portfolio-data.ts */}
        <div
          className="animate-fade-up mx-auto w-full max-w-xs lg:w-64"
          style={{ animationDelay: "500ms" }}
        >
          <div className="glass relative aspect-square overflow-hidden rounded-3xl">
            <div
              className="absolute inset-0 opacity-70"
              style={{ backgroundImage: "var(--gradient-hero)" }}
            />
            {profile.photoUrl ? (
              <img
                src={profile.photoUrl}
                alt={`Portrait of ${profile.name}`}
                className="relative h-full w-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="relative grid h-full w-full place-items-center gap-2 text-center">
                <div>
                  <User className="mx-auto h-10 w-10 text-muted-foreground" aria-hidden="true" />
                  <p className="mt-3 font-mono text-xs text-muted-foreground">Photo coming soon</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
