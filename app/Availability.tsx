"use client";

import { Check, Lock } from "lucide-react";
import { team, times, buildWhatsappLink } from "./data";

// DEMO sin backend: disponibilidad simulada. En una fase 2 esto vendría
// de la base de datos. Clave "turnoIndex-tecnicaIndex".
const ocupados = new Set(["0-1", "1-0", "1-2", "2-1", "3-0"]);

export default function Availability() {
  return (
    <section id="disponibilidad" className="bg-blanco-3 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-marron-2">
            Agenda
          </p>
          <h2 className="font-serif text-4xl font-semibold text-marron-1">
            Disponibilidad
          </h2>
          <p className="mt-3 text-sm text-foreground/60">
            Turnos de 2h30 · Lunes a Sábado · tocá un turno libre para reservarlo
          </p>
        </div>

        {/* Leyenda */}
        <div className="mb-6 flex items-center justify-center gap-6 text-xs text-foreground/70">
          <span className="flex items-center gap-2">
            <span className="inline-block size-3 rounded-sm bg-dorado-3" /> Disponible
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block size-3 rounded-sm bg-marron-5/50" /> Ocupado
          </span>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-marron-4/25 bg-white p-2">
          <table className="w-full min-w-[520px] border-collapse">
            <thead>
              <tr>
                <th className="p-3 text-left text-xs font-medium uppercase tracking-wider text-marron-2">
                  Turno
                </th>
                {team.map((p) => (
                  <th
                    key={p.name}
                    className="p-3 text-center font-serif text-lg text-marron-1"
                  >
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {times.map((turno, ti) => (
                <tr key={turno} className="border-t border-marron-4/15">
                  <td className="whitespace-nowrap p-3 text-sm font-medium text-marron-1">
                    {turno}
                  </td>
                  {team.map((p, pi) => {
                    const taken = ocupados.has(`${ti}-${pi}`);
                    if (taken) {
                      return (
                        <td key={p.name} className="p-2">
                          <div className="flex items-center justify-center gap-1.5 rounded-lg bg-marron-5/40 py-3 text-xs font-medium text-foreground/40">
                            <Lock className="size-3.5" /> Ocupado
                          </div>
                        </td>
                      );
                    }
                    const href = buildWhatsappLink({
                      professional: p.name,
                      time: turno,
                    });
                    return (
                      <td key={p.name} className="p-2">
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 rounded-lg bg-dorado-4/50 py-3 text-xs font-semibold text-marron-1 transition hover:bg-dorado-1 hover:text-white"
                        >
                          <Check className="size-3.5" /> Reservar
                        </a>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-center text-xs text-foreground/40">
          * Disponibilidad de muestra. La agenda en vivo se activará en la próxima fase.
        </p>
      </div>
    </section>
  );
}
