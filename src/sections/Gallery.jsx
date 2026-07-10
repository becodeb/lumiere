import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { cn } from "../lib/utils";

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1400&auto=format&fit=crop",
    alt: "Sala principal de Lumière con mesas vestidas",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
    alt: "Detalle de plato de autor emplatado",
  },
  {
    src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=1200&auto=format&fit=crop",
    alt: "Copa de vino sobre mantel de lino",
  },
  {
    src: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1200&auto=format&fit=crop",
    alt: "Chef trabajando en la cocina abierta",
    span: "sm:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1200&auto=format&fit=crop",
    alt: "Detalle de postre de temporada",
  },
  {
    src: "https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=1200&auto=format&fit=crop",
    alt: "Entrada de mariscos frescos",
  },
  {
    src: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?q=80&w=1400&auto=format&fit=crop",
    alt: "Barra de bar y bodega de Lumière",
    span: "sm:col-span-2",
  },
];

export function Gallery() {
  const [selected, setSelected] = useState(null);

  const go = (dir) => {
    setSelected((prev) => {
      const next = (prev + dir + IMAGES.length) % IMAGES.length;
      return next;
    });
  };

  return (
    <section id="galeria" className="bg-paper py-28 lg:py-40">
      <div className="container-editorial">
        <SectionHeading
          eyebrow="Galería"
          title="Un vistazo al detalle."
          description="Fragmentos de sala, cocina y bodega. Cada imagen, un instante del servicio."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:auto-rows-[220px]">
          {IMAGES.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 4) * 0.06}
              className={cn(
                "group relative aspect-square cursor-pointer overflow-hidden sm:aspect-auto",
                img.span
              )}
            >
              <button
                onClick={() => setSelected(i)}
                aria-label={`Ver imagen ampliada: ${img.alt}`}
                data-cursor-hover
                className="h-full w-full"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 backdrop-blur-sm p-6"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              aria-label="Cerrar galería"
              className="absolute right-6 top-6 text-paper/80 hover:text-paper"
            >
              <X size={28} strokeWidth={1.25} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              aria-label="Imagen anterior"
              className="absolute left-4 text-paper/80 hover:text-paper sm:left-8"
            >
              <ChevronLeft size={32} strokeWidth={1.25} />
            </button>

            <motion.img
              key={IMAGES[selected].src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              src={IMAGES[selected].src}
              alt={IMAGES[selected].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[85vw] object-contain"
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              aria-label="Siguiente imagen"
              className="absolute right-4 text-paper/80 hover:text-paper sm:right-8"
            >
              <ChevronRight size={32} strokeWidth={1.25} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
