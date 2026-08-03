"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Hand, Footprints, Eye, Plus } from "lucide-react";
import { serviceGroups } from "./data";

// Ícono + video de fondo por grupo (mismo orden que serviceGroups).
const meta = [
  { icon: Hand, video: "/video/video-2.mp4" }, // Manicure
  { icon: Footprints, video: "/video/video.3.mp4" }, // Pedicure
  { icon: Eye, video: "/video/video-4.mp4" }, // Cejas y rostro
];

export default function ServicesShowcase() {
  // Índice de la card activa (acordeón). -1 = todas desactivadas por defecto.
  const [active, setActive] = useState(-1);

  return (
    <section id="servicios" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-marron-2">
          Carta
        </p>
        <h2 className="font-serif text-4xl font-semibold text-marron-1">
          Servicios
        </h2>
        <p className="mt-3 text-sm text-foreground/60">
          Tocá una categoría para ver los precios.
        </p>
      </div>

      <div className="grid items-start gap-6 md:grid-cols-3">
        {serviceGroups.map((g, i) => {
          const { icon: Icon, video } = meta[i] ?? meta[0];
          const isActive = active === i;
          return (
            <motion.div
              layout
              key={g.title}
              onClick={() => setActive(isActive ? -1 : i)}
              transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}
              className={`relative cursor-pointer overflow-hidden rounded-2xl border transition-colors ${
                isActive
                  ? "border-dorado-1 shadow-xl"
                  : "border-marron-4/25 hover:border-dorado-1/50"
              }`}
            >
              {/* Video de fondo */}
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={video}
                autoPlay
                muted
                loop
                playsInline
              />
              {/* Velo: más oscuro cuando está activa para leer los precios */}
              <div
                className={`absolute inset-0 transition-colors duration-300 ${
                  isActive ? "bg-marron-1/85" : "bg-marron-1/55"
                }`}
              />

              <div className="relative p-7 text-blanco">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon className="size-6 text-dorado-2" strokeWidth={1.5} />
                    <h3 className="font-serif text-2xl">{g.title}</h3>
                  </div>
                  <motion.span
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Plus className="size-5 text-dorado-2" />
                  </motion.span>
                </div>

                <AnimatePresence initial={false} mode="wait">
                  {isActive ? (
                    <motion.ul
                      key="list"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 space-y-3 overflow-hidden"
                    >
                      {g.items.map((s) => (
                        <li
                          key={s.name}
                          className="flex items-baseline gap-2 text-sm"
                        >
                          <span className="text-blanco-2/90">{s.name}</span>
                          <span className="mx-1 flex-1 border-b border-dotted border-blanco-2/25" />
                          <span className="whitespace-nowrap font-medium text-dorado-2">
                            {s.price}
                          </span>
                        </li>
                      ))}
                    </motion.ul>
                  ) : (
                    <motion.p
                      key="hint"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="mt-6 text-sm uppercase tracking-wider text-blanco-2/75"
                    >
                      {g.items.length} servicios · Ver →
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
