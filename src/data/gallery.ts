// Gallery items. These use clearly-identifiable placeholders so the real
// photos of Lulu Animaciones can be dropped in later without redesigning.
// To add a real photo: replace `src` with the image path and keep `alt`
// descriptive in Spanish. New items can be appended freely.

export type GalleryCategory =
  | "pintacaritas"
  | "animacion"
  | "juegos"
  | "eventos"

export interface GalleryItem {
  id: string
  src: string
  alt: string
  category: GalleryCategory
  caption: string
  // Layout weight: "wide" spans 2 columns, "tall" spans 2 rows on desktop.
  span?: "wide" | "tall"
}

export const CATEGORY_LABELS: Record<GalleryCategory, string> = {
  pintacaritas: "Pintacaritas",
  animacion: "Animación",
  juegos: "Juegos y actividades",
  eventos: "Eventos y celebraciones",
}

function ph(w: number, h: number, label: string): string {
  return `/placeholder.svg?height=${h}&width=${w}&query=${encodeURIComponent(label)}`
}

export const GALLERY: GalleryItem[] = [
  {
    id: "g1",
    src: ph(900, 1100, "pintacaritas diseño mariposa en niña"),
    alt: "Niña con diseño de mariposa hecho por pintacaritas",
    category: "pintacaritas",
    caption: "Pintacaritas artístico",
    span: "tall",
  },
  {
    id: "g2",
    src: ph(1200, 700, "animadora jugando con grupo de niños en fiesta"),
    alt: "Animadora liderando un juego con un grupo de niños",
    category: "animacion",
    caption: "Animación en vivo",
    span: "wide",
  },
  {
    id: "g3",
    src: ph(700, 700, "niño feliz en celebración con globos"),
    alt: "Niño celebrando entre globos de colores",
    category: "eventos",
    caption: "Cumpleaños infantil",
  },
  {
    id: "g4",
    src: ph(700, 700, "actividad de burbujas de jabón en fiesta"),
    alt: "Niños jugando con burbujas de jabón durante una actividad",
    category: "juegos",
    caption: "Juegos y burbujas",
  },
  {
    id: "g6",
    src: ph(700, 900, "diseño de pintacaritas de tigre en niño"),
    alt: "Niño con diseño de tigre pintado en la cara",
    category: "pintacaritas",
    caption: "Diseños personalizados",
    span: "tall",
  },
  {
    id: "g8",
    src: ph(700, 700, "mesa de juegos y actividades para niños"),
    alt: "Mesa con juegos y actividades preparada para los niños",
    category: "juegos",
    caption: "Rincón de actividades",
  },
  {
    id: "g9",
    src: ph(1000, 700, "baby shower decorado con animación"),
    alt: "Ambiente de baby shower con decoración y animación",
    category: "eventos",
    caption: "Baby shower",
    span: "wide",
  },
  {
    id: "g10",
    src: ph(700, 900, "niña sonriendo con estrellas pintadas"),
    alt: "Niña sonriendo con estrellas pintadas en el rostro",
    category: "pintacaritas",
    caption: "Sonrisas garantizadas",
    span: "tall",
  },
  {
    id: "g11",
    src: ph(700, 700, "grupo de niños jugando ronda con animadora"),
    alt: "Grupo de niños jugando en ronda con la animadora",
    category: "animacion",
    caption: "Dinámicas grupales",
  },
  {
    id: "g12",
    src: ph(700, 700, "concurso de juegos con premios para niños"),
    alt: "Niños participando en un concurso de juegos con premios",
    category: "juegos",
    caption: "Concursos con premios",
  },
]

// A curated subset used on the home page preview.
export const GALLERY_PREVIEW = GALLERY.slice(0, 6)
