import { Link } from "react-router-dom"
import { motion } from "motion/react"
import { WhatsAppButton } from "../WhatsAppButton"
import { WHATSAPP_MESSAGES } from "../../data/site"
import { fadeUp, scaleIn, staggerContainer } from "../../lib/animations"
import { asset } from "../../lib/asset"

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
          <motion.h1
            variants={fadeUp}
            className="text-balance text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl"
          >
            Animación y entretenimiento{" "}
            <span className="relative inline-block text-rosa">
              para tu evento
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
            En Lulu Animaciones coordinamos pintacaritas, animación en vivo y juegos para
            cumpleaños, baby showers y celebraciones familiares. Nos encargamos de
            la entretención para que tú solo te preocupes de disfrutar.
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
                src={asset("images/galeria/foto-grupal-payaso-1080.webp")}
                srcSet={`${asset("images/galeria/foto-grupal-payaso-640.webp")} 640w, ${asset("images/galeria/foto-grupal-payaso-1080.webp")} 1080w`}
                sizes="(min-width: 1024px) 45vw, 90vw"
                alt="Animadora de Lulu disfrazada de payaso compartiendo con un grupo de niños durante una fiesta"
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
                  src={asset("images/galeria/foto-con-nina-pintacarita-1080.webp")}
                  alt="Niña feliz con pintacaritas de colores"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="group col-span-2 row-span-3 overflow-hidden rounded-card bg-rosa/40 shadow-[0_18px_40px_-14px_rgba(43,36,56,0.35)]"
            >
<img
                  src={asset("images/galeria/foto-grupal-1080.webp")}
                  alt="Grupo de niños en una celebración animada por Lulu"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}