import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navItems, profile } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const sections = navItems
      .map((n) => document.querySelector(n.href))
      .filter((el): el is Element => Boolean(el));
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-hairline bg-background/70 backdrop-blur-xl"
            : "border-b border-transparent",
        )}
      >
        <nav
          aria-label="Main"
          className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4"
        >
          <a href="#top" className="group flex min-w-0 items-center gap-3">
            <span className="relative grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-sm border border-hairline font-mono text-[11px] text-primary">
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              TP
            </span>
            <span className="truncate font-display text-sm font-semibold tracking-tight">
              {profile.shortName}
              <span className="text-muted-foreground">.dev</span>
            </span>
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "relative py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground",
                    active === item.href && "text-foreground",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-px w-full origin-left bg-primary transition-transform duration-300",
                      active === item.href ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>

          <a
            href={`mailto:${profile.email}`}
            className="hidden items-center gap-1.5 border-b border-primary/40 pb-0.5 font-mono text-[11px] uppercase tracking-[0.18em] text-primary transition-colors hover:border-primary md:inline-flex"
          >
            Get in touch <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-sm border border-hairline bg-surface md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile overlay navigation */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl transition-all duration-500 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-full flex-col justify-between px-6 pb-10 pt-28">
          <ul className="flex flex-col">
            {navItems.map((item, i) => (
              <li key={item.href} className="border-b border-hairline">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${80 + i * 45}ms` : "0ms" }}
                  className={cn(
                    "flex items-baseline gap-4 py-5 font-display text-3xl transition-all duration-500",
                    open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                  )}
                >
                  <span className="font-mono text-[11px] text-primary">
                    0{i + 1}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="space-y-2 font-mono text-xs text-muted-foreground">
            <a href={`mailto:${profile.email}`} className="block text-primary">
              {profile.email}
            </a>
            <p>{profile.location}</p>
          </div>
        </div>
      </div>
    </>
  );
}
