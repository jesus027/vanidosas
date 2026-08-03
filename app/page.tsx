import BookingForm from "./BookingForm";
import Header4 from "./Header4";
import { SloganPillars, WorksCarousel, VideoBand } from "./Gallery";
import ServicesShowcase from "./ServicesShowcase";
import Availability from "./Availability";
import { studio, team, heroImages } from "./data";

// Diseño 4 — Combinado: base del Diseño 1 (editorial claro) con el hero
// full-bleed oscuro y el formulario oscuro del Diseño 2.
export default function Design4() {
  return (
    <main id="top" className="bg-blanco-2 text-foreground">
      {/* Nav transparente sobre el hero, sólido al hacer scroll */}
      <Header4 />

      {/* Hero full-bleed oscuro (Diseño 2) — arranca detrás del header */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/video/video-1.mp4"
          poster={heroImages.boutique}
          autoPlay
          muted
          loop
          playsInline
          aria-label="Uñas Vanidosas"
        />
        <div className="absolute inset-0 bg-linear-to-r from-marron-1/80 via-marron-1/45 to-transparent" aria-hidden />
        <div className="relative mx-auto w-full max-w-6xl px-6">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-dorado-3">
              Manicure & Pedicure · Almagro
            </p>
            <h1 className="font-serif text-6xl font-semibold leading-none text-blanco sm:text-7xl">
              El lujo de ser <span className="italic text-dorado-2">tú</span>.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-blanco-2/85">
              Un estudio donde cada detalle está pensado para vos. Reservá tu turno
              en segundos y dejá tus manos en las mejores manos.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#reservar" className="rounded-full bg-dorado-1 px-8 py-4 text-sm font-semibold text-marron-1 transition hover:bg-dorado-2">
                Reservar turno
              </a>
              <a href="#servicios" className="rounded-full border border-blanco-2/40 px-8 py-4 text-sm font-semibold text-blanco-2 transition hover:border-dorado-2 hover:text-dorado-2">
                Ver servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Strip (Diseño 1) */}
      <section className="border-y border-marron-4/20 bg-blanco-3">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-marron-1 sm:flex-row">
          <span>✦ {studio.hours}</span>
          <span>✦ {studio.address}</span>
          <span>✦ {studio.phoneDisplay}</span>
        </div>
      </section>

      {/* Pilares con slogan (Power · Elegance · Detail · Care) */}
      <SloganPillars />

      {/* Banda de video 1 */}
      <VideoBand
        src="/video/video-5.mp4"
        word="Elegance"
        sub="El arte de ser Vanidosa"
      />

      {/* Servicios — cards con video de fondo y estado active/inactive */}
      <ServicesShowcase />

      {/* Equipo (Diseño 1) */}
      <section id="equipo" className="bg-blanco-3 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-marron-2">Nuestro equipo</p>
            <h2 className="font-serif text-4xl font-semibold text-marron-1">Manos expertas</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {team.map((p) => (
              <div key={p.name} className="rounded-2xl bg-white p-8 text-center shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.photo}
                  alt={p.name}
                  className="mx-auto size-28 rounded-full object-cover ring-2 ring-dorado-3/70 ring-offset-2 ring-offset-white"
                />
                <h3 className="mt-5 font-serif text-2xl text-marron-1">{p.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-dorado-1">{p.role}</p>
                <ul className="mt-4 space-y-1 text-sm text-foreground/70">
                  {p.specialties.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería en carrusel (shadcn + embla) */}
      <WorksCarousel />

      {/* Banda de video 2 */}
      <VideoBand
        src="/video/video-4.mp4"
        word="Power"
        sub="Tu mejor versión, en cada detalle"
      />

      {/* Disponibilidad — grilla demo (sin backend). Oculta por ahora. */}
      {false && <Availability />}

      {/* Reservar — layout Diseño 1 con formulario oscuro (Diseño 2) */}
      <section id="reservar" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 rounded-3xl border border-marron-4/25 bg-white p-8 md:grid-cols-2 md:p-12">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-marron-2">Reservá</p>
            <h2 className="font-serif text-4xl font-semibold text-marron-1">Tu turno, a un mensaje</h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground/70">
              Completá tus datos y confirmá por WhatsApp. Te respondemos para dejar
              tu turno agendado.
            </p>
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-wider text-marron-2">Dirección</dt>
                <dd className="mt-0.5 text-marron-1">
                  <a href={studio.mapsUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-dorado-1/50 underline-offset-4">
                    {studio.address}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-marron-2">Horario</dt>
                <dd className="mt-0.5 text-marron-1">{studio.hours}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-marron-2">Contacto</dt>
                <dd className="mt-0.5 text-marron-1">{studio.phoneDisplay} · {studio.email}</dd>
              </div>
            </dl>

            {/* Mapa de Google */}
            <a
              href={studio.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block overflow-hidden rounded-2xl border border-marron-4/25 shadow-sm transition hover:shadow-md"
            >
              <iframe
                title="Ubicación de Vanidosas Studio en Google Maps"
                src={studio.mapsEmbed}
                className="pointer-events-none h-56 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>
          <div className="rounded-2xl bg-linear-to-br from-[#4a3728] to-[#2a2018] p-8 shadow-2xl ring-1 ring-dorado-1/20 md:p-10">
            <BookingForm variant="dark" />
          </div>
        </div>
      </section>

      {/* Footer (Diseño 1) */}
      <footer className="border-t border-marron-4/20 bg-blanco-3 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-foreground/60 sm:flex-row">
          <span className="font-serif text-lg text-marron-1">Vanidosas Studio</span>
          <span>“{studio.slogan}”</span>
          <a href={studio.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-dorado-1">
            {studio.address}
          </a>
        </div>
      </footer>
    </main>
  );
}
