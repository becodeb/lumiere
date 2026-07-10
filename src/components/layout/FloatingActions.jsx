import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, MessageCircle } from "lucide-react";

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {show && (
          <motion.a
            href="#reservas"
            data-cursor-hover
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 bg-ink text-paper px-5 py-3.5 text-[12px] uppercase tracking-[0.15em] shadow-[0_10px_30px_rgba(20,19,15,0.25)] hover:bg-olive transition-colors"
          >
            <CalendarDays size={15} strokeWidth={1.5} />
            Reservar
          </motion.a>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/000000000"
        target="_blank"
        rel="noreferrer"
        data-cursor-hover
        aria-label="Contactar por WhatsApp"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className="flex h-13 w-13 items-center justify-center rounded-full bg-olive text-paper shadow-[0_10px_30px_rgba(20,19,15,0.25)]"
      >
        <MessageCircle size={22} strokeWidth={1.5} />
      </motion.a>
    </div>
  );
}
