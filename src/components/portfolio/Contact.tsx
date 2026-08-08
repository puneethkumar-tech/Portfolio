import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { MagneticLink } from "./MagneticLink";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  {
    label: "LinkedIn",
    value: "thatavarthi-puneeth-kumar",
    href: profile.linkedin,
    icon: Linkedin,
  },
  { label: "GitHub", value: `@${profile.githubUsername}`, href: profile.github, icon: Github },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-28 overflow-hidden border-t border-hairline px-5 py-28 sm:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 110%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
            07 / Contact
          </p>
          <h2 className="mt-8 max-w-4xl font-display text-4xl font-semibold leading-[1.0] tracking-[-0.04em] sm:text-6xl lg:text-[5.25rem]">
            Have an opportunity or want to build something?{" "}
            <span className="text-ember">Let&apos;s connect.</span>
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <MagneticLink
            href={`mailto:${profile.email}`}
            className="group inline-flex min-h-14 items-center gap-4 rounded-sm bg-primary px-8 text-base font-semibold text-primary-foreground hover:brightness-110"
          >
            {profile.email}
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </MagneticLink>
        </Reveal>

        <Reveal delay={200} className="mt-16 border-t border-hairline">
          <ul className="grid sm:grid-cols-3">
            {channels.map(({ label, value, href, icon: Icon }) => (
              <li key={label} className="border-b border-hairline sm:border-b-0 sm:border-r sm:last:border-r-0">
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  className="group flex h-full flex-col gap-2 py-6 pr-6 transition-colors sm:px-6 sm:first:pl-0"
                >
                  <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
                    <Icon className="h-3.5 w-3.5" />
                    {label}
                  </span>
                  <span className="break-words font-display text-base text-foreground transition-colors group-hover:text-primary">
                    {value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={260}>
          <p className="mt-12 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Open to internships, collaborative projects, and any conversation about full-stack or
            AI-powered products. Based in {profile.location} — happy to work remotely.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
