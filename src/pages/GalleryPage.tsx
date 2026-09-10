import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Lightbox } from "../components/Lightbox"
import { WhatsAppButton } from "../components/WhatsAppButton"
import {
  GALLERY,
  CATEGORY_LABELS,
  type GalleryCategory,
} from "../data/gallery"
import { WHATSAPP_MESSAGES } from "../data/site"
import { fadeUp, staggerContainer } from "../lib/animations"

type Filter = "todas" | GalleryCategory

const FILTERS: { value: Filter; label: string }[] = [
  { value: "todas", label: "Todas" },
  { value: "pintacaritas", label: CATEGORY_LABELS.pintacaritas },
  { value: "animacion", label: CATEGORY_LABELS.animacion },
  { value: "juegos", label: CATEGORY_LABELS.juegos },
  { value: "globoflexia", label: CATEGORY_LABELS.globoflexia },
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
      <motion.section
        variants={staggerContainer(0.1, 0.05)}
        initial="hidden"
        animate="visible"
        className="border-b border-borde bg-rosa-suave/40 py-14 md:py-20"
      >
        <div className="contenedor flex flex-col items-start gap-4">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center rounded-full bg-crema px-3.5 py-1 text-xs font-bold uppercase tracking-wide text-tinta"
          >
            Portafolio
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="text-balance text-4xl font-extrabold md:text-5xl"
          >
            Nuestros trabajos
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="max-w-xl text-pretty text-lg leading-relaxed text-tinta-suave"
          >
            Un recorrido por las celebraciones que hemos animado. Explora por
            categoría y descubre la experiencia que llevamos a cada evento.
          </motion.p>
          <motion.div variants={fadeUp}>
            <WhatsAppButton message={WHATSAPP_MESSAGES.galeria} size="lg">
              Quiero algo así para mi evento
            </WhatsAppButton>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-10 md:py-14">
        <div className="contenedor">
          <motion.div
            variants={staggerContainer(0.06, 0)}
            initial="hidden"
            whileInView="visible"
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filtrar trabajos por categoría"
          >
            {FILTERS.map((f) => {
              const isActive = filter === f.value
              return (
                <motion.button
                  key={f.value}
                  type="button"
                  variants={fadeUp}
                  whileTap={{ scale: 0.92 }}
                  aria-pressed={isActive}
                  onClick={() => setFilter(f.value)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-rosa text-tinta"
                      : "border border-borde bg-white text-tinta-suave hover:border-rosa hover:text-tinta"
                  }`}
                >
                  {f.label}
                </motion.button>
              )
            })}
          </motion.div>

          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-12 flex flex-col items-center gap-4 rounded-card border border-dashed border-borde bg-white py-16 text-center shadow-carta"
            >
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
            </motion.div>
          ) : (
            <div className="mt-8 columns-2 gap-3 md:columns-3 md:gap-4 lg:columns-4">
              <AnimatePresence initial={false} mode="popLayout">
                {items.map((item, i) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    layout
                    initial={{ opacity: 0, scale: 0.94, y: 18 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 26,
                      delay: i * 0.03,
                    }}
                    onClick={() => setActive(i)}
                    aria-label={`Ver foto: ${item.caption}`}
                    className="group relative mb-3 block w-full overflow-hidden rounded-card bg-rosa-suave shadow-foto transition-shadow duration-300 hover:shadow-elevada md:mb-4"
                  >
                    <img
                      src={item.src}
                      srcSet={item.srcSet}
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-tinta/70 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                      <span className="text-sm font-semibold text-crema">
                        {item.caption}
                      </span>
                    </span>
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {active !== null && items[active] && (
          <Lightbox
            key="galeria"
            items={items}
            index={active}
            onClose={() => setActive(null)}
            onNavigate={setActive}
          />
        )}
      </AnimatePresence>
    </>
  )
}