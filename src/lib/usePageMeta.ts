import { useEffect } from "react"
import { useLocation } from "react-router-dom"

interface PageMeta {
  title: string
  description: string
}

const PAGES: Record<string, PageMeta> = {
  "/": {
    title: "Lulu Animaciones | Animación y animadores para eventos en Santiago",
    description:
      "Animadores para cumpleaños, baby showers y eventos en Santiago. Pintacaritas, globoflexia, juegos y animación en vivo. Cotiza tu celebración por WhatsApp.",
  },
  "/trabajos": {
    title: "Nuestros trabajos | Lulu Animaciones",
    description:
      "Galería de fotos de eventos reales: pintacaritas, globoflexia, juegos y animación en vivo de Lulu Animaciones en Santiago.",
  },
}

const DEFAULT_META: PageMeta = {
  title: "Lulu Animaciones | Animación y animadores para eventos en Santiago",
  description:
    "Pintacaritas, globoflexia, juegos y animación en vivo para cumpleaños, baby showers y celebraciones en Santiago. Cotiza por WhatsApp.",
}

export function usePageMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = PAGES[pathname] ?? DEFAULT_META
    document.title = meta.title
    const desc = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (desc) desc.content = meta.description
  }, [pathname])
}