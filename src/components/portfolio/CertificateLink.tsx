import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** Outlined CTA that opens a certificate PDF in a new tab. */
export function CertificateLink({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex min-h-10 items-center gap-2 rounded-sm border border-hairline px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground transition-colors duration-300 hover:border-primary/60 hover:text-primary",
        className,
      )}
    >
      {label}
      <ArrowUpRight
        aria-hidden="true"
        className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  );
}
