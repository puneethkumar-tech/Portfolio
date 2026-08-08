import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Anchor with a subtle magnetic pull on hover (skipped for reduced motion / touch). */
export function MagneticLink({
  href,
  children,
  className,
  target,
  rel,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const move = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.matchMedia("(pointer: fine)").matches
    )
      return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * 0.18;
    const y = (e.clientY - (r.top + r.height / 2)) * 0.3;
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate3d(0,0,0)";
  };

  return (
    <a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      onPointerMove={move}
      onPointerLeave={reset}
      className={cn("transition-transform duration-300 ease-out will-change-transform", className)}
    >
      {children}
    </a>
  );
}
