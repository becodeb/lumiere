import { Reveal } from "../components/ui/Reveal";
import { Eyebrow } from "../components/ui/SectionHeading";

export function Story() {
  return (
    <section id="historia" className="relative bg-paper py-28 lg:py-40">
      <div className="container-editorial grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <Reveal direction="left">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1600&auto=format&fit=crop"
                alt="Interior del comedor de Lumière con luz natural"
                className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out hover:scale-105"
              />
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col justify-center gap-10 lg:col-span-6 lg:col-start-7">
          <Eyebrow>Nuestra historia</Eyebrow>

          <Reveal delay={0.1}>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.15] tracking-[-0.01em] text-balance">
              Desde 2011, una misma obsesión:{" "}
              <span className="italic text-stone-dark">
                el producto en su punto exacto.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <p className="text-[15px] leading-[1.9] text-stone-dark">
                Lumière nació de una idea simple: la alta cocina no necesita
                ruido. Cada plato es el resultado de una búsqueda constante de
                equilibrio entre técnica, temporada y memoria.
              </p>
              <p className="text-[15px] leading-[1.9] text-stone-dark">
                Trabajamos con productores locales, tiempos de cocción largos
                y una carta que cambia con las estaciones. Nada se sirve
                antes de estar listo.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <blockquote className="border-l border-gold pl-8">
              <p className="font-serif text-2xl font-light italic leading-relaxed text-ink">
                "No cocinamos para impresionar. Cocinamos para que se
                recuerde."
              </p>
              <cite className="mt-4 block text-[12px] not-italic uppercase tracking-[0.25em] text-stone-dark">
                — Kenji Arata, Chef Ejecutivo
              </cite>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
