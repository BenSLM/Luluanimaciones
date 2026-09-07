import { motion } from "motion/react"
import { WhatsAppButton } from "../WhatsAppButton"
import { WHATSAPP_MESSAGES } from "../../data/site"
import { fadeUp, staggerContainer, VIEWPORT } from "../../lib/animations"

export function FinalCta() {
  return (
    <section className="py-16 md:py-24">
      <div className="contenedor">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-burbuja bg-rosa px-6 py-14 text-center shadow-burbuja md:px-12 md:py-20"
        >
          <motion.div
            aria-hidden="true"
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-crema/30 blur-xl"
          />
          <motion.div
            aria-hidden="true"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-azul/40 blur-xl"
          />
          <motion.div
            variants={staggerContainer(0.1, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="relative mx-auto flex max-w-2xl flex-col items-center gap-5"
          >
            <motion.h2
              variants={fadeUp}
              className="text-balance text-3xl font-extrabold text-tinta md:text-4xl lg:text-5xl"
            >
              ¿Listos para celebrar?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-pretty text-lg leading-relaxed text-tinta/80"
            >
              Escríbenos por WhatsApp, cuéntanos qué estás organizando y te
              preparamos una cotización a tu medida.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-2">
              <WhatsAppButton message={WHATSAPP_MESSAGES.final} size="lg">
                Hablar con Lulu por WhatsApp
              </WhatsAppButton>
            </motion.div>
            <motion.p variants={fadeUp} className="text-sm text-tinta/60">
              Respondemos tus dudas y revisamos la disponibilidad para tu fecha.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}