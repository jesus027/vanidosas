// Información central de Vanidosas Studio — usada por las 3 propuestas de diseño.

export const studio = {
  name: "Vanidosas Studio",
  slogan: "Vanidosas, el lujo de ser tú.",
  phoneDisplay: "+54 11 7900 7381",
  whatsapp: "5491179007381",
  email: "vanidosasstudio9@gmail.com",
  address: "Mario Bravo 290, Almagro — CABA",
  hours: "Lunes a Sábado · 10:00 a 20:00 h",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Mario+Bravo+290+Almagro+CABA",
  mapsEmbed:
    "https://www.google.com/maps?q=Mario%20Bravo%20290%2C%20C1175%20CABA%2C%20Argentina&output=embed",
  instagram: "#",
};

export type Professional = {
  name: string;
  role: string;
  specialties: string[];
  photo: string;
};

export const team: Professional[] = [
  {
    name: "Aire",
    role: "Full combo",
    specialties: ["Todos los servicios"],
    photo: "/images/team-1.jpeg",
  },
  {
    name: "Alí",
    role: "Manos, pies & láser",
    specialties: ["Manicure", "Pedicure", "Depilación Láser"],
    photo: "/images/team-3.jpeg",
  },
  {
    name: "Yesi",
    role: "Manos, pies & cera",
    specialties: ["Manicure", "Pedicure", "Depilación con cera"],
    photo: "/images/team-2.jpeg",
  },
];

export type Service = { name: string; price: string };
export type ServiceGroup = { title: string; items: Service[] };

export const serviceGroups: ServiceGroup[] = [
  {
    title: "Manicure",
    items: [
      { name: "Manicure Rosa", price: "$15.000" },
      { name: "Semipermanente", price: "$25.000" },
      { name: "Nivelación", price: "$28.000" },
      { name: "Kapping Polygel", price: "$32.000" },
      { name: "Esculpida en Polygel", price: "$38.000 – $40.000" },
      { name: "Soft Gel", price: "$32.000 – $35.000" },
      { name: "Retiro Semi", price: "$6.000" },
      { name: "Retiro Kapping", price: "$8.000" },
      { name: "Retiro Esculpidas", price: "$10.000" },
      { name: "Retiro Soft Gel", price: "$10.000" },
      { name: "Reconstrucción por uña", price: "$2.000 c/u" },
    ],
  },
  {
    title: "Pedicure",
    items: [
      { name: "Pedicure Preventiva", price: "$25.000" },
      { name: "Pedicure Sin Esmalte", price: "$20.000" },
    ],
  },
  {
    title: "Cejas y rostro",
    items: [
      { name: "Perfilado de Cejas con cera", price: "$15.000" },
      { name: "Perfilado de Rostro con cera", price: "$10.000" },
      { name: "Laminado de Cejas", price: "$25.000" },
    ],
  },
];

// Lista plana de servicios para los <select> del formulario de reserva.
export const allServices: string[] = serviceGroups.flatMap((g) =>
  g.items.map((s) => s.name),
);

// Turnos de 2h30, de 10:00 a 20:00 (Lunes a Sábado).
export const times: string[] = [
  "10:00 – 12:30",
  "12:30 – 15:00",
  "15:00 – 17:30",
  "17:30 – 20:00",
];

// Construye el enlace de WhatsApp con el mensaje de reserva prellenado.
export function buildWhatsappLink(opts: {
  name?: string;
  service?: string;
  professional?: string;
  date?: string;
  time?: string;
}): string {
  const { name, service, professional, date, time } = opts;
  const lines = [
    "¡Hola Vanidosas Studio! Quiero reservar un turno ✨",
    name ? `• Nombre: ${name}` : "",
    service ? `• Servicio: ${service}` : "",
    professional ? `• Profesional: ${professional}` : "",
    date ? `• Fecha: ${date}` : "",
    time ? `• Horario: ${time}` : "",
  ].filter(Boolean);
  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${studio.whatsapp}?text=${text}`;
}

// Galería curada: mejores fotos, priorizando la paleta marrón · dorado · blanco.
export const galleryImages = [
  "/images/stock-8.jpg",
  "/images/stock-10.jpg",
  "/images/stock-12.jpg",
  "/images/stock-9.jpg",
  "/images/stock-15.jpg",
  "/images/stock-16.jpg",
  "/images/stock-1.jpeg",
  "/images/stock-17.jpg",
];

// Imágenes destacadas por sección.
export const heroImages = {
  editorial: "/images/stock-8.jpg", // tortoise/marrón vertical, elegante
  boutique: "/images/stock-12.jpg", // tortoise horizontal, fondo gris
  process: "/images/stock-11.jpg", // manicura en proceso
  duo: "/images/stock-14.jpg", // dos personas, mármol
};
