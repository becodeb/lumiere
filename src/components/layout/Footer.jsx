import { MapPin } from "lucide-react";
import { Reveal } from "../ui/Reveal";

function InstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-paper/70">
      <div className="container-editorial py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <span className="font-serif text-3xl tracking-[0.15em] text-paper">
              LUMIÈRE
            </span>
            <p className="mt-6 max-w-xs text-[14px] leading-relaxed">
              Cocina de autor en el corazón de la ciudad. Una experiencia
              gastronómica pensada para permanecer en la memoria.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <h3 className="text-[11px] uppercase tracking-[0.3em] text-gold-soft">
              Horario
            </h3>
            <ul className="mt-5 space-y-2 text-[14px]">
              <li className="flex justify-between gap-8">
                <span>Martes — Sábado</span>
                <span>13:00 — 23:30</span>
              </li>
              <li className="flex justify-between gap-8">
                <span>Domingo</span>
                <span>13:00 — 17:00</span>
              </li>
              <li className="flex justify-between gap-8">
                <span>Lunes</span>
                <span>Cerrado</span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-3">
            <h3 className="text-[11px] uppercase tracking-[0.3em] text-gold-soft">
              Dirección
            </h3>
            <div className="mt-5 flex items-start gap-3 text-[14px]">
              <MapPin size={16} className="mt-0.5 shrink-0" strokeWidth={1.5} />
              <span>
                Calle Serrano 48, 28001
                <br />
                Madrid, España
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.3} className="lg:col-span-2">
            <h3 className="text-[11px] uppercase tracking-[0.3em] text-gold-soft">
              Síganos
            </h3>
            <div className="mt-5 flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                data-cursor-hover
                className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 hover:border-gold-soft hover:text-gold-soft transition-colors"
              >
                <InstagramIcon width={17} height={17} />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-paper/10 pt-8 text-[12px] tracking-wide sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Lumière. Todos los derechos reservados.</span>
          <span>Diseño &amp; desarrollo — Studio Atelier</span>
        </div>
      </div>
    </footer>
  );
}
