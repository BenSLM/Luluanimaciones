import { Link } from "react-router-dom"
import { motion } from "motion/react"
import { fadeUp, staggerContainer } from "../lib/animations"

export default function NotFoundPage() {
  return (
    <section className="py-24 md:py-32">
      <motion.div
        variants={staggerContainer(0.1, 0.05)}
        initial="hidden"
        animate="visible"
        className="contenedor flex max-w-lg flex-col items-center gap-5 text-center"
      >
        <motion.span
          variants={fadeUp}
          className="font-display text-6xl font-extrabold text-rosa"
        >
          404
        </motion.span>
        <motion.h1
          variants={fadeUp}
          className="text-balance text-3xl font-extrabold"
        >
          No encontramos esta página
        </motion.h1>
        <motion.p variants={fadeUp} className="text-tinta-suave">
          Puede que el enlace esté roto o que la página se haya movido. Volvamos
          a un lugar conocido.
        </motion.p>
        <motion.div variants={fadeUp}>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-rosa px-7 py-3.5 text-base font-semibold text-tinta transition-transform hover:-translate-y-0.5"
          >
            Volver al inicio
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}