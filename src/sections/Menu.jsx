import { useState } from "react";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { cn } from "../lib/utils";

const CATEGORIES = ["Entrantes", "Principales", "Postres"];

const DISHES = {
  Entrantes: [
    {
      name: "Vieira, coliflor asada y yuzu",
      desc: "Vieira gallega, crema de coliflor tostada, aire de yuzu",
      price: "24",
      image:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Tartar de atún y aguacate",
      desc: "Atún rojo, aguacate ahumado, sésamo negro, soja curada",
      price: "22",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    },
  ],
  Principales: [
    {
      name: "Solomillo, reducción de vino tinto",
      desc: "Solomillo ibérico madurado, puré de patata trufada, jugo reducido",
      price: "38",
      image:
        "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Rodaballo salvaje a la brasa",
      desc: "Rodaballo, beurre blanc de cítricos, hinojo confitado",
      price: "34",
      image:
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1200&auto=format&fit=crop",
    },
  ],
  Postres: [
    {
      name: "Chocolate 70%, aceite de oliva y sal",
      desc: "Ganache de chocolate, helado de aceite de oliva virgen, flor de sal",
      price: "14",
      image:
        "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Cítricos de temporada",
      desc: "Sorbete de cítricos, merengue crujiente, aire de albahaca",
      price: "13",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
    },
  ],
};

export function Menu() {
  const [active, setActive] = useState("Entrantes");

  return (
    <section id="carta" className="bg-paper py-28 lg:py-40">
      <div className="container-editorial">
        <SectionHeading
          eyebrow="La carta"
          title="Un catálogo, no una lista."
          description="La carta cambia con las estaciones. Estos son algunos de los platos que definen el momento actual."
        />

        <Reveal delay={0.15} className="mt-14 flex gap-8 border-b border-ink/10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "relative pb-4 text-[13px] uppercase tracking-[0.2em] transition-colors",
                active === cat ? "text-ink" : "text-stone-dark hover:text-ink"
              )}
            >
              {cat}
              {active === cat && (
                <span className="absolute -bottom-px left-0 h-px w-full bg-gold" />
              )}
            </button>
          ))}
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-2 lg:grid-cols-2">
          {DISHES[active].map((dish, i) => (
            <Reveal
              key={dish.name}
              delay={i * 0.08}
              className="group flex items-center gap-6 border-b border-ink/10 py-7"
            >
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1.5">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-lg font-light transition-colors group-hover:text-stone-dark">
                    {dish.name}
                  </h3>
                  <span className="shrink-0 font-serif text-lg font-light text-gold">
                    {dish.price}€
                  </span>
                </div>
                <p className="text-[13px] leading-relaxed text-stone-dark">
                  {dish.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
