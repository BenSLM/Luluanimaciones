import { useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"
import { SectionHeading } from "../SectionHeading"
import { Lightbox } from "../Lightbox"
import { GALLERY_PREVIEW } from "../../data/gallery"
import { scaleIn, staggerContainer, VIEWPORT } from "../../lib/animations"

export function GalleryPreview() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="trabajos" className="scroll-mt-24 py-16 md:py-24">
      <div className="contenedor">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Nuestro trabajo"
            title="Momentos reales de Lulu Animaciones"
            description="Una selección de lo que vivimos en las celebraciones. Así se ve la energía que llevamos a cada evento."
          />
          <Link
            to="/trabajos"
            className="hidden shrink-0 items-center gap-2 rounded-full border-2 border-tinta/15 bg-crema px-6 py-3 text-sm font-semibold text-tinta transition-colors hover:border-rosa hover:text-rosa sm:inline-flex"
          >
            Ver todos nuestros trabajos
          </Link>
        </div>

        {/* Editorial asymmetric composition */}
        <motion.div
          variants={staggerContainer(0.08, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-4 md:gap-4"
        >
          {GALLERY_PREVIEW.map((item, i) => {
            const spanClass =
              item.span === "wide"
                ? "md:col-span-2"
                : item.span === "tall"
                  ? "row-span-2"
                  : ""
            return (
              <motion.button
                key={item.id}
                type="button"
                variants={scaleIn}
                onClick={() => setActive(i)}
                aria-label={`Ver foto: ${item.caption}`}
                className={`group relative overflow-hidden rounded-card bg-rosa-suave shadow-foto transition-shadow duration-300 hover:shadow-elevada ${spanClass}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-tinta/70 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="text-sm font-semibold text-crema">
                    {item.caption}
                  </span>
                </span>
              </motion.button>
            )
          })}
        </motion.div>

        <div className="mt-8 sm:hidden">
          <Link
            to="/trabajos"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-tinta/15 bg-crema px-6 py-3.5 text-base font-semibold text-tinta transition-colors hover:border-rosa hover:text-rosa"
          >
            Ver todos nuestros trabajos
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <Lightbox
            key="galeria"
            items={GALLERY_PREVIEW}
            index={active}
            onClose={() => setActive(null)}
            onNavigate={setActive}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
