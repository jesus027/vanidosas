"use client";

import { useState } from "react";
import { allServices, team, times, buildWhatsappLink } from "./data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Variant = "light" | "cream" | "dark";

type VariantStyle = {
  input: string;
  trigger: string;
  label: string;
  button: string;
  dateScheme: string;
  summaryBox: string;
  summaryLabel: string;
  summaryValue: string;
};

const styles: Record<Variant, VariantStyle> = {
  light: {
    input:
      "h-11 w-full rounded-lg border border-marron-4/40 bg-white px-4 text-sm text-foreground outline-none transition focus:border-dorado-1 focus:ring-2 focus:ring-dorado-3/50",
    trigger:
      "!h-11 w-full rounded-lg border-marron-4/40 bg-white px-4 text-sm text-foreground data-[placeholder]:text-foreground/45 focus-visible:border-dorado-1 focus-visible:ring-2 focus-visible:ring-dorado-3/50",
    label: "mb-1.5 block text-xs font-medium uppercase tracking-wider text-marron-2",
    button:
      "mt-2 w-full rounded-lg bg-marron-1 px-6 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-marron-2",
    dateScheme: "",
    summaryBox: "rounded-lg border border-marron-4/30 bg-blanco-3/60 p-4",
    summaryLabel: "text-marron-2",
    summaryValue: "text-marron-1",
  },
  cream: {
    input:
      "h-11 w-full rounded-none border-0 border-b border-marron-3/50 bg-transparent px-1 text-sm text-foreground outline-none transition focus:border-dorado-1",
    trigger:
      "!h-11 w-full rounded-none border-0 border-b border-marron-3/50 bg-transparent px-1 text-sm text-foreground data-[placeholder]:text-foreground/45 focus-visible:border-dorado-1 focus-visible:ring-0",
    label: "mb-1 block text-xs font-medium uppercase tracking-[0.15em] text-marron-1",
    button:
      "mt-4 w-full rounded-full bg-dorado-1 px-6 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-marron-1 transition hover:bg-dorado-2",
    dateScheme: "",
    summaryBox: "rounded-lg border border-marron-3/30 bg-blanco-2 p-4",
    summaryLabel: "text-marron-2",
    summaryValue: "text-marron-1",
  },
  dark: {
    input:
      "h-11 w-full rounded-lg border border-white/20 bg-white/10 px-4 text-sm text-blanco-2 outline-none backdrop-blur transition placeholder:text-blanco-2/45 focus:border-dorado-2 focus:ring-2 focus:ring-dorado-2/30",
    trigger:
      "!h-11 w-full rounded-lg border-white/20 bg-white/10 px-4 text-sm text-blanco-2 backdrop-blur data-[placeholder]:text-blanco-2/50 focus-visible:border-dorado-2 focus-visible:ring-2 focus-visible:ring-dorado-2/30",
    label: "mb-1.5 block text-xs font-medium uppercase tracking-wider text-dorado-3",
    button:
      "mt-2 w-full rounded-lg bg-linear-to-r from-dorado-1 to-dorado-2 px-6 py-3.5 text-center text-sm font-semibold text-marron-1 shadow-lg shadow-dorado-1/20 transition hover:brightness-110",
    dateScheme: "[color-scheme:dark]",
    summaryBox: "rounded-lg border border-white/10 bg-white/5 p-4",
    summaryLabel: "text-dorado-3",
    summaryValue: "text-blanco",
  },
};

// yyyy-mm-dd -> dd/mm/yyyy para mostrar
function formatDate(d: string): string {
  if (!d) return "";
  const [y, m, day] = d.split("-");
  return `${day}/${m}/${y}`;
}

export default function BookingForm({ variant = "light" }: { variant?: Variant }) {
  const s = styles[variant];
  const [form, setForm] = useState({
    name: "",
    service: "",
    professional: "",
    date: "",
    time: "",
  });

  const setField = (k: keyof typeof form, v: string | null) =>
    setForm((f) => ({ ...f, [k]: v ?? "" }));

  const href = buildWhatsappLink(form);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col gap-4"
      aria-label="Formulario de reserva"
    >
      <div>
        <label className={s.label} htmlFor="bf-name">Nombre</label>
        <input
          id="bf-name"
          className={s.input}
          placeholder="Tu nombre"
          value={form.name}
          onChange={(e) => setField("name", e.target.value)}
        />
      </div>

      <div>
        <label className={s.label}>Servicio</label>
        <Select value={form.service} onValueChange={(v) => setField("service", v)}>
          <SelectTrigger className={s.trigger}>
            <SelectValue placeholder="Elegí un servicio" />
          </SelectTrigger>
          <SelectContent align="start" alignItemWithTrigger={false} className="max-h-72">
            {allServices.map((name) => (
              <SelectItem key={name} value={name}>{name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className={s.label}>Profesional</label>
        <Select value={form.professional} onValueChange={(v) => setField("professional", v)}>
          <SelectTrigger className={s.trigger}>
            <SelectValue placeholder="Sin preferencia" />
          </SelectTrigger>
          <SelectContent align="start" alignItemWithTrigger={false}>
            {team.map((p) => (
              <SelectItem key={p.name} value={p.name}>
                {p.name} · {p.role}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={s.label} htmlFor="bf-date">Fecha</label>
          <input
            id="bf-date"
            type="date"
            className={`${s.input} ${s.dateScheme}`}
            value={form.date}
            onChange={(e) => setField("date", e.target.value)}
          />
        </div>
        <div>
          <label className={s.label}>Turno</label>
          <Select value={form.time} onValueChange={(v) => setField("time", v)}>
            <SelectTrigger className={s.trigger}>
              <SelectValue placeholder="Elegí turno" />
            </SelectTrigger>
            <SelectContent align="start" alignItemWithTrigger={false} className="max-h-72">
              {times.map((t) => (
                <SelectItem key={t} value={t}>{t}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Resumen en vivo de la reserva */}
      <div className={s.summaryBox}>
        <p className={`mb-2 text-xs font-medium uppercase tracking-wider ${s.summaryLabel}`}>
          Tu reserva
        </p>
        <dl className="space-y-1.5 text-sm">
          {[
            { k: "Servicio", v: form.service || "A elegir" },
            { k: "Profesional", v: form.professional || "Sin preferencia" },
            { k: "Fecha", v: formatDate(form.date) || "A elegir" },
            { k: "Turno", v: form.time || "A elegir" },
          ].map((row) => (
            <div key={row.k} className="flex items-baseline justify-between gap-3">
              <dt className={`text-xs ${s.summaryLabel}`}>{row.k}</dt>
              <dd className={`text-right font-medium ${s.summaryValue}`}>{row.v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a href={href} target="_blank" rel="noopener noreferrer" className={s.button}>
        Reservar por WhatsApp
      </a>
    </form>
  );
}
