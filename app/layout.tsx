import type { Metadata } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://vanidosas.vercel.app";

const description =
  "Estudio de manicura, pedicura y estética de cejas en Almagro, CABA. Semipermanente, kapping, polygel, soft gel, depilación y laminado de cejas. Reservá tu turno por WhatsApp — Vanidosas, el lujo de ser tú.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vanidosas Studio · Manicure & Pedicure en Almagro, CABA",
    template: "%s · Vanidosas Studio",
  },
  description,
  applicationName: "Vanidosas Studio",
  authors: [{ name: "Vanidosas Studio" }],
  creator: "Vanidosas Studio",
  category: "beauty",
  keywords: [
    "Vanidosas Studio",
    "manicura Almagro",
    "pedicura CABA",
    "uñas Buenos Aires",
    "semipermanente",
    "kapping polygel",
    "esculpidas en polygel",
    "soft gel",
    "nivelación de uñas",
    "depilación láser",
    "depilación con cera",
    "perfilado de cejas",
    "laminado de cejas",
    "nail art",
    "turnos manicura Almagro",
    "reservar uñas CABA",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "Vanidosas Studio",
    title: "Vanidosas Studio · Manicure & Pedicure en Almagro, CABA",
    description,
    images: [
      {
        url: "/images/logo.png",
        alt: "Vanidosas Studio — Manicure & Pedicure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanidosas Studio · Manicure & Pedicure en Almagro, CABA",
    description,
    images: ["/images/logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/logo.ico" },
    ],
    shortcut: "/images/logo.ico",
    apple: "/images/logo.png",
  },
  // Metadatos de ubicación (geolocalización del local)
  other: {
    "geo.region": "AR-C",
    "geo.placename": "Almagro, Ciudad Autónoma de Buenos Aires",
    "geo.position": "-34.601900;-58.417300",
    ICBM: "-34.601900, -58.417300",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
