import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";

const LINKS = [
  { label: "Historia", href: "#historia" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Carta", href: "#carta" },
  { label: "Chef", href: "#chef" },
  { label: "Galería", href: "#galeria" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-paper/80 backdrop-blur-md border-b border-ink/10 py-4"
            : "bg-transparent py-7"
        )}
      >
        <nav className="container-editorial flex items-center justify-between">
          <a
            href="#top"
            data-cursor-hover
            className={cn(
              "font-serif text-xl tracking-[0.15em] transition-colors duration-500",
              scrolled ? "text-ink" : "text-paper"
            )}
          >
            LUMIÈRE
          </a>

          <div
            className={cn(
              "hidden lg:flex items-center gap-10 text-[12px] uppercase tracking-[0.2em] transition-colors duration-500",
              scrolled ? "text-ink/80" : "text-paper/90"
            )}
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-cursor-hover
                className="underline-reveal py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button
              as="a"
              href="#reservas"
              variant={scrolled ? "primary" : "secondary"}
              className={cn(!scrolled && "border-paper/40 text-paper hover:border-paper")}
            >
              Reservar
            </Button>
          </div>

          <button
            aria-label="Abrir menú"
            onClick={() => setOpen(true)}
            className={cn(
              "lg:hidden transition-colors",
              scrolled ? "text-ink" : "text-paper"
            )}
          >
            <Menu size={26} strokeWidth={1.25} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[70] bg-ink text-paper flex flex-col"
          >
            <div className="container-editorial flex items-center justify-between py-7">
              <span className="font-serif text-xl tracking-[0.15em]">
                LUMIÈRE
              </span>
              <button aria-label="Cerrar menú" onClick={() => setOpen(false)}>
                <X size={26} strokeWidth={1.25} />
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-center gap-6 container-editorial">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                  className="font-serif text-4xl font-light"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#reservas"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-6 font-serif text-4xl font-light text-gold-soft"
              >
                Reservar mesa
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
