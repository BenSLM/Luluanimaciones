import { useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "motion/react"
import type { GalleryItem } from "../data/gallery"
import { WhatsAppButton } from "./WhatsAppButton"
import { WHATSAPP_MESSAGES } from "../data/site"

interface LightboxProps {
  items: GalleryItem[]
  index: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const item = items[index]

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + items.length) % items.length)
  }, [index, items.length, onNavigate])

  const goNext = useCallback(() => {
    onNavigate((index + 1) % items.length)
  }, [index, items.length, onNavigate])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") goPrev()
      if (e.key === "ArrowRight") goNext()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [onClose, goPrev, goNext])

  if (!item) return null

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-tinta/85 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.button
        type="button"
        onClick={onClose}
        aria-label="Cerrar"
        whileTap={{ scale: 0.9 }}
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-tinta transition-colors hover:bg-white"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
        </svg>
      </motion.button>

      <motion.button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          goPrev()
        }}
        aria-label="Anterior"
        whileTap={{ scale: 0.9 }}
        className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-tinta transition-colors hover:bg-white md:left-6"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>

      <motion.button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          goNext()
        }}
        aria-label="Siguiente"
        whileTap={{ scale: 0.9 }}
        className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-tinta transition-colors hover:bg-white md:right-6"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>

      <motion.figure
        initial={{ opacity: 0, scale: 0.92, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-marca bg-crema"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-h-[70vh] w-full bg-rosa-suave">
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={item.id}
              src={item.src}
              alt={item.alt}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="mx-auto max-h-[70vh] w-full object-contain"
            />
          </AnimatePresence>
        </div>
        <figcaption className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-lg font-bold">{item.caption}</p>
            <p className="text-sm text-tinta-suave">
              {index + 1} de {items.length}
            </p>
          </div>
          <WhatsAppButton message={WHATSAPP_MESSAGES.galeria} size="md">
            Quiero algo así
          </WhatsAppButton>
        </figcaption>
      </motion.figure>
    </motion.div>
  )
}