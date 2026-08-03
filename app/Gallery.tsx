"use client";

import { motion } from "motion/react";
import { Sparkles, Gem, Brush, HeartHandshake } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { galleryImages } from "./data";

/* ---------- Pilares con slogan ---------- */

const pillars = [
  {
    word: "Power",
    sub: "Uñas que hablan por vos",
    icon: Sparkles,
    img: "/images/stock-8.jpg",
  },
  {
    word: "Elegance",
    sub: "Diseños atemporales",
    icon: Gem,
    img: "/images/stock-16.jpg",
  },
  {
    word: "Detail",
    sub: "Cada trazo, hecho a mano",
    icon: Brush,
    img: "/images/stock-15.jpg",
  },
  {
    word: "Care",
    sub: "Tus manos, cuidadas",
    icon: HeartHandshake,
    img: "/images/stock-11.jpg",
  },
];

export function SloganPillars() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-marron-2">
          Nuestra esencia
        </p>
        <h2 className="font-serif text-4xl font-semibold text-marron-1">
          Lo que nos define
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.article
              key={p.word}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative aspect-3/4 overflow-hidden rounded-2xl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.img}
                alt={p.word}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-marron-1/90 via-marron-1/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <Icon className="mb-3 size-6 text-dorado-2" strokeWidth={1.5} />
                <h3 className="font-serif text-3xl font-semibold text-blanco">
                  {p.word}
                </h3>
                <p className="mt-1 text-sm text-blanco-2/85">{p.sub}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

/* ---------- Carrusel de trabajos ---------- */

export function WorksCarousel() {
  return (
    <section id="galeria" className="bg-blanco-3 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-marron-2">
            Galería
          </p>
          <h2 className="font-serif text-4xl font-semibold text-marron-1">
            Nuestros trabajos
          </h2>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-4">
            {galleryImages.map((src, i) => (
              <CarouselItem
                key={src}
                className="basis-4/5 pl-4 sm:basis-1/2 lg:basis-1/3"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`Trabajo Vanidosas ${i + 1}`}
                  className="aspect-4/5 w-full rounded-2xl object-cover shadow-sm"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden border-marron-3 text-marron-1 sm:flex" />
          <CarouselNext className="hidden border-marron-3 text-marron-1 sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}

/* ---------- Banda de video con slogan ---------- */

export function VideoBand({
  src,
  word,
  sub,
}: {
  src: string;
  word: string;
  sub: string;
}) {
  return (
    <section className="relative flex h-[70vh] items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={src}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-marron-1/45" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative px-6 text-center"
      >
        <h2 className="font-serif text-6xl font-semibold uppercase tracking-wide text-blanco sm:text-8xl">
          {word}
        </h2>
        <p className="mt-4 text-lg text-blanco-2/90">{sub}</p>
      </motion.div>
    </section>
  );
}
