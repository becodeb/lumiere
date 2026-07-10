import { Reveal } from "../components/ui/Reveal";
import { Eyebrow } from "../components/ui/SectionHeading";

export function Chef() {
  return (
    <section id="chef" className="bg-olive py-28 text-paper lg:py-40">
      <div className="container-editorial grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="order-2 flex flex-col justify-center gap-8 lg:order-1 lg:col-span-6">
          <Eyebrow light>El chef</Eyebrow>

          <Reveal delay={0.1}>
            <h2 className="font-serif text-[clamp(2.25rem,4.5vw,4rem)] font-light leading-[1.1] text-balance">
              Kenji Arata
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col gap-5 text-[15px] leading-[1.9] text-paper/75">
              <p>
                Formado en Lyon y Copenhague, Kenji regresó a Madrid en 2011
                con una convicción: la técnica solo importa si sirve a la
                memoria del comensal.
              </p>
              <p>
                Su cocina parte de la disciplina francesa y se despoja de
                todo lo superfluo. Una estrella Michelin y catorce años
                después, sigue cocinando cada servicio.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <p
              className="mt-2 font-serif text-4xl italic text-gold-soft"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Kenji Arata
            </p>
          </Reveal>
        </div>

        <Reveal
          direction="right"
          className="order-1 lg:order-2 lg:col-span-6"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1600&auto=format&fit=crop"
              alt="Retrato del chef ejecutivo Kenji Arata en cocina"
              className="h-full w-full object-cover grayscale-[15%]"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-paper/10" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
