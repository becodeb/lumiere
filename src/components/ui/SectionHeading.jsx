import { cn } from "../../lib/utils";
import { Reveal } from "./Reveal";

export function Eyebrow({ children, className, light = false }) {
  return (
    <Reveal direction="none" duration={0.8}>
      <span
        className={cn(
          "flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] font-medium",
          light ? "text-gold-soft" : "text-gold",
          className
        )}
      >
        <span className={cn("h-px w-8", light ? "bg-gold-soft" : "bg-gold")} />
        {children}
      </span>
    </Reveal>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "left",
  className,
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <Reveal delay={0.1}>
        <h2
          className={cn(
            "font-serif text-balance text-[clamp(2.25rem,4.5vw,4.25rem)] font-light leading-[1.05] tracking-[-0.01em]",
            light ? "text-paper" : "text-ink"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p
            className={cn(
              "max-w-xl text-[15px] leading-relaxed",
              light ? "text-paper/70" : "text-stone-dark"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
