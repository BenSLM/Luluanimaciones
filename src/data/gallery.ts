// Gallery items backed by real photos of Lulu Animaciones.
//
// Photos live in `public/images/galeria/` as WebP at two sizes (640 and 1080
// px on the longest side), generated from the source JPGs in `fotos/` via:
//
//   pnpm images
//
// `src` points to the desktop-size version; `srcSet` lets the browser pick
// the right resolution. To add a new photo: drop it in `fotos/`, run
// `pnpm images`, then append an item below using its generated slug.
// HEIC files are never processed.

export type GalleryCategory =
  | "pintacaritas"
  | "animacion"
  | "juegos"
  | "globoflexia"
  | "eventos"

export interface GalleryItem {
  id: string
  slug: string
  src: string
  srcSet?: string
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
  globoflexia: "Globoflexia",
  eventos: "Eventos y celebraciones",
}

function img(slug: string): string {
  return `/images/galeria/${slug}-1080.webp`
}

function srcSet(slug: string): string {
  return `/images/galeria/${slug}-640.webp 640w, /images/galeria/${slug}-1080.webp 1080w`
}

export const GALLERY: GalleryItem[] = [
  {
    id: "g1",
    slug: "foto-con-nina-pintacarita",
    src: img("foto-con-nina-pintacarita"),
    srcSet: srcSet("foto-con-nina-pintacarita"),
    alt: "Niña con un diseño de pintacaritas de colores",
    category: "pintacaritas",
    caption: "Pintacaritas artístico",
    span: "tall",
  },
  {
    id: "g2",
    slug: "foto-grupal-payaso",
    src: img("foto-grupal-payaso"),
    srcSet: srcSet("foto-grupal-payaso"),
    alt: "Animadora disfrazada de payaso jugando con un grupo de niños",
    category: "animacion",
    caption: "Animación en vivo",
    span: "wide",
  },
  {
    id: "g3",
    slug: "foto-grupal",
    src: img("foto-grupal"),
    srcSet: srcSet("foto-grupal"),
    alt: "Grupo de niños celebrando juntos durante un evento",
    category: "eventos",
    caption: "Celebraciones grupales",
    span: "wide",
  },
  {
    id: "g4",
    slug: "pintacarita",
    src: img("pintacarita"),
    srcSet: srcSet("pintacarita"),
    alt: "Niña con un diseño de pintacaritas en la cara",
    category: "pintacaritas",
    caption: "Diseños personalizados",
    span: "tall",
  },
  {
    id: "g6",
    slug: "foto-con-otra-nina-pintacarita",
    src: img("foto-con-otra-nina-pintacarita"),
    srcSet: srcSet("foto-con-otra-nina-pintacarita"),
    alt: "Otra niña sonriendo con un diseño de pintacaritas",
    category: "pintacaritas",
    caption: "Sonrisas garantizadas",
    span: "tall",
  },
  {
    id: "g8",
    slug: "pintacarita-1",
    src: img("pintacarita-1"),
    srcSet: srcSet("pintacarita-1"),
    alt: "Primer plano de un diseño de pintacaritas terminado",
    category: "pintacaritas",
    caption: "Detalles a mano alzada",
  },
  {
    id: "g9",
    slug: "foto-grupal-1",
    src: img("foto-grupal-1"),
    srcSet: srcSet("foto-grupal-1"),
    alt: "Celebración con un grupo grande de niños y animadora",
    category: "eventos",
    caption: "Eventos y celebraciones",
    span: "wide",
  },
  {
    id: "g10",
    slug: "pintacarita-2",
    src: img("pintacarita-2"),
    srcSet: srcSet("pintacarita-2"),
    alt: "Niña luciendo un diseño de pintacaritas",
    category: "pintacaritas",
    caption: "Pintacaritas artístico",
  },
  {
    id: "g11",
    slug: "pintacarita-3",
    src: img("pintacarita-3"),
    srcSet: srcSet("pintacarita-3"),
    alt: "Diseño de pintacaritas aplicado con precisión",
    category: "pintacaritas",
    caption: "Diseños personalizados",
  },
  {
    id: "g13",
    slug: "pintacarita-5",
    src: img("pintacarita-5"),
    srcSet: srcSet("pintacarita-5"),
    alt: "Primer plano de pintacaritas terminado a mano alzada",
    category: "pintacaritas",
    caption: "Detalles a mano alzada",
  },
  {
    id: "g14",
    slug: "pintacarita-6",
    src: img("pintacarita-6"),
    srcSet: srcSet("pintacarita-6"),
    alt: "Niña mostrando su nuevo diseño de pintacaritas",
    category: "pintacaritas",
    caption: "Diseños personalizados",
    span: "tall",
  },
  {
    id: "g15",
    slug: "pintacarita-8",
    src: img("pintacarita-8"),
    srcSet: srcSet("pintacarita-8"),
    alt: "Diseño de pintacaritas detallado en una niña",
    category: "pintacaritas",
    caption: "Pintacaritas artístico",
  },
  {
    id: "g16",
    slug: "pintacarita-9",
    src: img("pintacarita-9"),
    srcSet: srcSet("pintacarita-9"),
    alt: "Niña feliz mostrando su pintacaritas",
    category: "pintacaritas",
    caption: "Sonrisas garantizadas",
    span: "tall",
  },
  {
    id: "g17",
    slug: "globoflexia-1",
    src: img("globoflexia-1"),
    srcSet: srcSet("globoflexia-1"),
    alt: "Figuras de globoflexia en colores hechas para la celebración",
    category: "globoflexia",
    caption: "Globoflexia artística",
    span: "tall",
  },
  {
    id: "g18",
    slug: "globoflexia-2",
    src: img("globoflexia-2"),
    srcSet: srcSet("globoflexia-2"),
    alt: "Globo modelado por los juegos y actividades de Lulu",
    category: "globoflexia",
    caption: "Figuras para cada invitado",
    span: "wide",
  },
  {
    id: "g19",
    slug: "globoflexia-3",
    src: img("globoflexia-3"),
    srcSet: srcSet("globoflexia-3"),
    alt: "Bloque de globoflexia con colores de la paleta del evento",
    category: "globoflexia",
    caption: "Detalle y color",
  },
]

// A curated subset used on the home page preview (10 photos).
export const GALLERY_PREVIEW = GALLERY.slice(0, 10)