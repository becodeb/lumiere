import { useState } from "react";
import { Check } from "lucide-react";
import { Reveal } from "../components/ui/Reveal";
import { Eyebrow } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";

const FIELD_CLASS =
  "w-full border-b border-paper/25 bg-transparent pb-3 pt-2 font-serif text-xl font-light text-paper placeholder:text-paper/40 focus:border-gold-soft focus:outline-none transition-colors [color-scheme:dark]";

const LABEL_CLASS =
  "text-[11px] uppercase tracking-[0.25em] text-paper/50";

export function Reservation() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="reservas" className="relative overflow-hidden bg-ink py-28 lg:py-40">
      <div className="absolute inset-0 opacity-[0.06]">
        <img
          src="https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=2000&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="container-editorial relative grid grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="flex flex-col justify-center gap-8 lg:col-span-5">
          <Eyebrow light>Reservas</Eyebrow>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-[clamp(2.25rem,4.5vw,3.75rem)] font-light leading-[1.1] text-paper text-balance">
              Reserve su mesa.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-[15px] leading-relaxed text-paper/65">
              Confirmamos disponibilidad por WhatsApp o correo en menos de 24
              horas. Para grupos de más de 8 personas, escríbanos
              directamente.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} direction="right" className="lg:col-span-6 lg:col-start-7">
          {submitted ? (
            <div className="flex h-full min-h-[380px] flex-col items-center justify-center gap-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold-soft">
                <Check className="text-gold-soft" size={26} strokeWidth={1.5} />
              </div>
              <p className="font-serif text-2xl font-light text-paper">
                Solicitud recibida.
              </p>
              <p className="max-w-xs text-[14px] text-paper/60">
                Nos pondremos en contacto para confirmar su reserva a la
                brevedad.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className={LABEL_CLASS}>
                    Nombre completo
                  </label>
                  <input id="name" required type="text" placeholder="Su nombre" className={FIELD_CLASS} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className={LABEL_CLASS}>
                    Teléfono
                  </label>
                  <input id="phone" required type="tel" placeholder="+34 600 000 000" className={FIELD_CLASS} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="date" className={LABEL_CLASS}>
                    Fecha
                  </label>
                  <input id="date" required type="date" className={FIELD_CLASS} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="time" className={LABEL_CLASS}>
                    Hora
                  </label>
                  <input id="time" required type="time" className={FIELD_CLASS} />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label htmlFor="guests" className={LABEL_CLASS}>
                    Personas
                  </label>
                  <select id="guests" required defaultValue="" className={FIELD_CLASS}>
                    <option value="" disabled>
                      Seleccione
                    </option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n} className="bg-ink">
                        {n} {n === 1 ? "persona" : "personas"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <Button type="submit" variant="light" className="self-start">
                Confirmar Reserva
              </Button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
