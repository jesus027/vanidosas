"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  poster?: string;
  className?: string;
  "aria-label"?: string;
};

// <video> que fuerza el autoplay muteado. Soluciona los casos donde el
// navegador (móvil / ahorro de energía) no arranca el video solo:
// asegura muted por JS y reintenta al primer toque o clic del usuario.
export default function AutoVideo({ src, poster, className, ...rest }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    v.muted = true; // React no siempre aplica el atributo muted de forma fiable
    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };

    tryPlay();
    v.addEventListener("canplay", tryPlay, { once: true });
    v.addEventListener("loadeddata", tryPlay, { once: true });

    // Fallback: si el navegador bloqueó el autoplay, arranca al primer gesto.
    const onInteract = () => tryPlay();
    document.addEventListener("touchstart", onInteract, { once: true, passive: true });
    document.addEventListener("click", onInteract, { once: true });
    document.addEventListener("scroll", onInteract, { once: true, passive: true });

    return () => {
      v.removeEventListener("canplay", tryPlay);
      v.removeEventListener("loadeddata", tryPlay);
      document.removeEventListener("touchstart", onInteract);
      document.removeEventListener("click", onInteract);
      document.removeEventListener("scroll", onInteract);
    };
  }, [src]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      {...rest}
    />
  );
}
