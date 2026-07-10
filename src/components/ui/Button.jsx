import { cn } from "../../lib/utils";

export function Button({
  children,
  variant = "primary",
  className,
  as: Comp = "button",
  ...props
}) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-[13px] tracking-[0.18em] uppercase font-medium transition-all duration-500 ease-out overflow-hidden";

  const variants = {
    primary: "bg-ink text-paper hover:bg-olive",
    secondary:
      "border border-ink/30 text-ink hover:border-ink bg-transparent",
    ghost: "text-paper/90 hover:text-paper",
    light: "bg-paper text-ink hover:bg-white",
  };

  return (
    <Comp className={cn(base, variants[variant], className)} {...props}>
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {(variant === "primary" || variant === "light") && (
        <span className="absolute inset-0 -translate-x-full bg-gold/90 transition-transform duration-500 ease-out group-hover:translate-x-0" />
      )}
    </Comp>
  );
}
