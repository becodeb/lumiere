import { motion } from "framer-motion";

const variants = {
  up: { y: 40, opacity: 0, filter: "blur(6px)" },
  down: { y: -40, opacity: 0, filter: "blur(6px)" },
  left: { x: 40, opacity: 0, filter: "blur(6px)" },
  right: { x: -40, opacity: 0, filter: "blur(6px)" },
  none: { opacity: 0, filter: "blur(6px)" },
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 1,
  className,
  as: Component = motion.div,
  once = true,
  amount = 0.3,
}) {
  return (
    <Component
      className={className}
      initial={variants[direction]}
      whileInView={{ y: 0, x: 0, opacity: 1, filter: "blur(0px)" }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  );
}
