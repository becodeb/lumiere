import { Reveal } from "../components/ui/Reveal";
import { Eyebrow } from "../components/ui/SectionHeading";

const QUOTES = [
  {
    quote:
      "La mejor mesa que he pisado en años. Cada plato cuenta algo distinto.",
    author: "The Gourmet Review",
  },
  {
    quote:
      "Un lugar que entiende que el lujo verdadero está en el silencio, no en el ruido.",
    author: "Condé Nast Traveler",
  },
  {
    quote: "Kenji Arata cocina con una precisión casi arquitectónica.",
    author: "Revista Vinos & Sabores",
  },
];

export function Testimonials() {
  return (
    <section className="bg-paper-dim py-28 lg:py-40">
      <div className="container-editorial">
        <Eyebrow className="justify-center">Reconocimientos</Eyebrow>

        <div className="mt-16 flex flex-col divide-y divide-ink/10">
          {QUOTES.map((item, i) => (
            <Reveal
              key={item.author}
              delay={i * 0.1}
              className="flex flex-col gap-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:py-16"
            >
              <p className="max-w-3xl font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-light italic leading-[1.3] text-balance">
                "{item.quote}"
              </p>
              <span className="shrink-0 text-[12px] uppercase tracking-[0.25em] text-stone-dark lg:text-right">
                {item.author}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
