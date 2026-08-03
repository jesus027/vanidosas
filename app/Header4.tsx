"use client";

import { useEffect, useState } from "react";

// Header que arranca transparente sobre el hero y se vuelve sólido
// translúcido al hacer scroll, para no cortar el hero con una barra clara.
export default function Header4() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-marron-4/20 bg-blanco-2/85 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.png"
            alt="Vanidosas Studio"
            className={`h-16 w-auto transition duration-300 ${
              scrolled ? "" : "brightness-0 invert"
            }`}
          />
        </a>

        <div
          className={`hidden items-center gap-8 text-sm transition-colors duration-300 md:flex ${
            scrolled ? "text-foreground/70" : "text-blanco-2/90"
          }`}
        >
          <a href="#servicios" className="hover:text-dorado-2">Servicios</a>
          <a href="#galeria" className="hover:text-dorado-2">Galería</a>
          <a href="#equipo" className="hover:text-dorado-2">Equipo</a>
          <a href="#reservar" className="hover:text-dorado-2">Reservar</a>
        </div>

        <a
          href="#reservar"
          className={`rounded-full px-5 py-2 text-sm font-medium transition duration-300 ${
            scrolled
              ? "bg-marron-1 text-white hover:bg-marron-2"
              : "bg-dorado-1 text-marron-1 hover:bg-dorado-2"
          }`}
        >
          Reservar
        </a>
      </nav>
    </header>
  );
}
