import { useMemo, useState } from "react"
import { Lightbox } from "../components/Lightbox"
import { WhatsAppButton } from "../components/WhatsAppButton"
import {
  GALLERY,
  CATEGORY_LABELS,
  type GalleryCategory,
} from "../data/gallery"
import { WHATSAPP_MESSAGES } from "../data/site"

type Filter = "todas" | GalleryCategory

const FILTERS: { value: Filter; label: string }[] = [
  { value: "todas", label: "Todas" },
  { value: "pintacaritas", label: CATEGORY_LABELS.pintacaritas },
  { value: "animacion", label: CATEGORY_LABELS.animacion },
  { value: "juegos", label: CATEGORY_LABELS.juegos },
  { value: "eventos", label: CATEGORY_LABELS.eventos },
]

export default function GalleryPage() {
  const [filter, setFilter] = useState<Filter>("todas")
  const [active, setActive] = useState<number | null>(null)

  const items = useMemo(
    () =>
      filter === "todas"
        ? GALLERY
        : GALLERY.filter((item) => item.category === filter),
    [filter],
  )

  return (
    <>
      <section className="border-b border-borde bg-rosa-suave/40 py-14 md:py-20">
        <div className="contenedor flex flex-col items-start gap-4">
          <span className="inline-flex items-center rounded-full bg-crema px-3.5 py-1 text-xs font-bold uppercase tracking-wide text-tinta">
            Portafolio
          </span>
          <h1 className="text-balance text-4xl font-extrabold md:text-5xl">
            Nuestros trabajos
          </h1>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-tinta-suave">
            Un recorrido por las celebraciones que hemos animado. Explora por
            categoría y descubre la experiencia que llevamos a cada evento.
          </p>
          <WhatsAppButton message={WHATSAPP_MESSAGES.galeria} size="lg">
            Quiero algo así para mi evento
          </WhatsAppButton>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="contenedor">
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filtrar trabajos por categoría"
          >
            {FILTERS.map((f) => {
              const isActive = filter === f.value
              return (
                <button
                  key={f.value}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setFilter(f.value)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-rosa text-tinta"
                      : "border border-borde bg-white text-tinta-suave hover:border-rosa hover:text-tinta"
                  }`}
                >
                  {f.label}
                </button>
              )
            })}
          </div>

          {items.length === 0 ? (
            <div className="mt-12 flex flex-col items-center gap-4 rounded-marca border border-dashed border-borde bg-white py-16 text-center">
              <p className="font-display text-xl font-bold">
                Aún no hay trabajos en esta categoría
              </p>
              <p className="max-w-sm text-sm text-tinta-suave">
                Pronto sumaremos más fotos. Mientras tanto, escríbenos y
                conversemos sobre tu evento.
              </p>
              <WhatsAppButton message={WHATSAPP_MESSAGES.general} size="md">
                Cotizar por WhatsApp
              </WhatsAppButton>
            </div>
          ) : (
            <div className="mt-8 columns-2 gap-3 md:columns-3 md:gap-4 lg:columns-4">
              {items.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Ver foto: ${item.caption}`}
                  className="group mb-3 block w-full overflow-hidden rounded-marca bg-rosa-suave md:mb-4"
                >
                  <span className="relative block">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-tinta/70 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                      <span className="text-sm font-semibold text-crema">
                        {item.caption}
                      </span>
                    </span>
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {active !== null && items[active] && (
        <Lightbox
          items={items}
          index={active}
          onClose={() => setActive(null)}
          onNavigate={setActive}
        />
      )}
    </>
  )
}
