import { Link } from "react-router-dom"
import { motion } from "motion/react"
import { WhatsAppButton } from "../WhatsAppButton"
import { WHATSAPP_MESSAGES } from "../../data/site"
import { fadeUp, scaleIn, staggerContainer } from "../../lib/animations"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-crema pt-8 pb-16 md:pt-14 md:pb-24">
      <div className="contenedor relative grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <motion.div
          variants={staggerContainer(0.09, 0.05)}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-tinta-suave shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-rosa" />
            Animación y entretenimiento para eventos
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-balance text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl"
          >
            Hacemos que tu celebración sea{" "}
            <span className="relative inline-block text-rosa">
              inolvidable
              <svg
                aria-hidden="true"
                viewBox="0 0 220 16"
                preserveAspectRatio="none"
                className="absolute -bottom-1.5 left-0 w-full"
                style={{ height: "0.32em" }}
              >
                <motion.path
                  d="M4 13 C 45 4, 85 17, 120 11 C 155 5, 190 12, 215 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-lg text-pretty text-lg leading-relaxed text-tinta-suave"
          >
            En Lulu Animaciones ponemos la energía, los juegos y la magia para
            que tu evento sea entretenido de principio a fin. Pintacaritas,
            animación en vivo y actividades para todas las edades.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex w-full flex-col gap-3 sm:flex-row sm:items-center"
          >
            <WhatsAppButton
              message={WHATSAPP_MESSAGES.hero}
              size="lg"
              className="w-full sm:w-auto"
            >
              Cotizar por WhatsApp
            </WhatsAppButton>
            <Link
              to="/trabajos"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-tinta/15 bg-crema px-7 py-3.5 text-base font-semibold text-tinta transition-colors hover:border-rosa hover:text-rosa sm:w-auto"
            >
              Ver nuestros trabajos
            </Link>
          </motion.div>
        </motion.div>

        {/* Photo-forward composition */}
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <div className="grid grid-cols-5 grid-rows-6 gap-3 md:gap-4">
            <motion.div
              variants={scaleIn}
              className="group col-span-3 row-span-6 overflow-hidden rounded-burbuja bg-rosa-suave shadow-[0_30px_60px_-15px_rgba(43,36,56,0.4)]"
            >
              <img
                src="/placeholder.svg?height=900&width=650&query=animadora sonriendo con nino en fiesta colorida"
                alt="Animadora de Lulu compartiendo con un niño durante una fiesta"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                fetchPriority="high"
              />
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="col-span-2 row-span-3 rotate-2 rounded-sm bg-white p-2 shadow-[0_18px_40px_-14px_rgba(43,36,56,0.35)] transition-transform duration-300 hover:rotate-0 hover:-translate-y-1"
            >
              <div className="h-full w-full overflow-hidden rounded-xs">
                <img
                  src="/placeholder.svg?height=440&width=440&query=pintacaritas colorido en nina feliz"
                  alt="Niña feliz con pintacaritas de colores"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="group col-span-2 row-span-3 overflow-hidden rounded-card bg-rosa/40 shadow-[0_18px_40px_-14px_rgba(43,36,56,0.35)]"
            >
              <img
                src="/placeholder.svg?height=440&width=440&query=ninos jugando con burbujas en celebracion"
                alt="Niños jugando con burbujas durante una celebración"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}