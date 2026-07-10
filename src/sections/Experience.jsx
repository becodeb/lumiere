import { motion } from "framer-motion";
import { Leaf, Wine, Users, CalendarCheck, Sparkles, Wheat } from "lucide-react";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { cn } from "../lib/utils";

function BentoCard({ className, children, dark = false, image, delay = 0 }) {
  return (
    <Reveal
      delay={delay}
      className={cn(
        "group relative overflow-hidden rounded-[2px] border",
        dark ? "border-paper/10 bg-olive text-paper" : "border-ink/10 bg-paper-dim/60 text-ink",
        className
      )}
    >
      {image && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/10" />
        </div>
      )}
      <div className="relative z-10 flex h-full flex-col justify-between p-8 lg:p-9">
        {children}
      </div>
    </Reveal>
  );
}

const STATS = [
  { label: "Años de trayectoria", value: "14" },
  { label: "Productores locales", value: "32" },
  { label: "Estrella Michelin", value: "1" },
];

export function Experience() {
  return (
    <section id="experiencia" className="bg-ink py-28 lg:py-40">
      <div className="container-editorial mb-16 lg:mb-20">
        <SectionHeading
          light
          eyebrow="La experiencia"
          title="Cada detalle, una decisión deliberada."
          description="Desde el origen del producto hasta el silencio entre platos: nada en Lumière ocurre por accidente."
        />
      </div>

      <div className="container-editorial grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <BentoCard
          className="sm:col-span-2 lg:col-span-2 lg:row-span-2"
          image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1600&auto=format&fit=crop"
        >
          <Sparkles className="text-gold-soft" size={22} strokeWidth={1.25} />
          <div>
            <h3 className="font-serif text-3xl font-light">Ambiente</h3>
            <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-paper/75">
              Un espacio diseñado para desacelerar: luz cálida, materiales
              nobles y una acústica pensada para la conversación.
            </p>
          </div>
        </BentoCard>

        <BentoCard delay={0.05}>
          <Leaf className="text-gold-soft" size={22} strokeWidth={1.25} />
          <div>
            <h3 className="font-serif text-xl font-light">Ingredientes</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-stone-dark">
              Km 0. Temporada estricta. Trazabilidad completa de cada
              producto.
            </p>
          </div>
        </BentoCard>

        <BentoCard
          delay={0.1}
          dark
          image="https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1600&auto=format&fit=crop"
        >
          <Users className="text-gold-soft" size={22} strokeWidth={1.25} />
          <div>
            <h3 className="font-serif text-xl font-light">Chef</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-paper/75">
              Kenji Arata al frente de una brigada de doce cocineros.
            </p>
          </div>
        </BentoCard>

        <BentoCard delay={0.15} className="lg:col-span-2">
          <CalendarCheck className="text-gold-soft" size={22} strokeWidth={1.25} />
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="font-serif text-xl font-light">Reservas</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-stone-dark">
                Mesas limitadas. Recomendamos reservar con dos semanas de
                antelación.
              </p>
            </div>
            <a
              href="#reservas"
              data-cursor-hover
              className="shrink-0 text-[12px] uppercase tracking-[0.2em] underline-reveal"
            >
              Reservar →
            </a>
          </div>
        </BentoCard>

        <BentoCard
          delay={0.2}
          dark
          className="sm:col-span-2 lg:col-span-2"
          image="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=1600&auto=format&fit=crop"
        >
          <Wine className="text-gold-soft" size={22} strokeWidth={1.25} />
          <div>
            <h3 className="font-serif text-2xl font-light">Bodega</h3>
            <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-paper/75">
              Más de 300 referencias seleccionadas por nuestro sumiller,
              incluyendo pequeños productores europeos.
            </p>
          </div>
        </BentoCard>

        <BentoCard delay={0.25}>
          <Wheat className="text-gold-soft" size={22} strokeWidth={1.25} />
          <div>
            <h3 className="font-serif text-xl font-light">Postres</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-stone-dark">
              Repostería de autor, servida al momento, sin excesos de azúcar.
            </p>
          </div>
        </BentoCard>

        <BentoCard delay={0.3} className="lg:col-span-1">
          <div className="flex h-full flex-col justify-center gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex items-baseline justify-between border-b border-ink/10 pb-3 last:border-0"
              >
                <span className="font-serif text-3xl font-light">
                  {stat.value}
                </span>
                <span className="max-w-[8rem] text-right text-[11px] uppercase tracking-[0.15em] text-stone-dark">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </BentoCard>
      </div>
    </section>
  );
}
