import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { MagneticLink } from "./MagneticLink";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "thatavarthi-puneeth-kumar",
    href: profile.linkedin,
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: profile.githubUsername,
    href: profile.github,
    external: true,
  },
];

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Have an opportunity or want to build something?">
      <Reveal className="glass relative overflow-hidden rounded-3xl p-6 sm:p-10">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        />
        <div className="relative">
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Let&apos;s connect. I&apos;m open to internships, student collaborations, and
            interesting project ideas — the fastest way to reach me is email.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {channels.map(({ icon: Icon, label, value, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                className="card-hover group rounded-2xl border border-hairline bg-surface p-4"
              >
                <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Icon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {label}
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
                <span className="mt-2 block truncate font-mono text-xs text-muted-foreground">
                  {value}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <MagneticLink
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110"
            >
              <Mail className="h-4 w-4" />
              Send an email
            </MagneticLink>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {profile.location}
            </span>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
