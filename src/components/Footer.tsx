import { Link } from "react-router-dom"
import { motion } from "motion/react"
import { WhatsAppButton } from "./WhatsAppButton"
import { WHATSAPP_MESSAGES, SOCIAL_LINKS } from "../data/site"
import { asset } from "../lib/asset"
import { fadeIn, fadeUp, staggerContainer, VIEWPORT } from "../lib/animations"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="mt-20 bg-tinta text-crema">
      <motion.div
        variants={staggerContainer(0.1, 0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="contenedor grid gap-10 py-14 md:grid-cols-3"
      >
        <motion.div variants={fadeUp}>
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src={asset("images/logo-lulu.jpg")}
              alt=""
              className="h-11 w-11 rounded-sm object-cover"
            />
            <span className="font-display text-xl font-extrabold">
              Lulu Animaciones
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-crema/70">
            Animación para cumpleaños, baby showers y celebraciones familiares en
            Santiago.
          </p>
          <ul className="mt-5 flex items-center gap-3" aria-label="Redes sociales">
            <li>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Lulu Animaciones"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-crema/80 transition-colors hover:border-rosa hover:bg-rosa hover:text-tinta"
              >
                <InstagramIcon className="h-[18px] w-[18px]" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Lulu Animaciones"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-crema/80 transition-colors hover:border-rosa hover:bg-rosa hover:text-tinta"
              >
                <FacebookIcon className="h-[18px] w-[18px]" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.nav
          variants={fadeUp}
          aria-label="Navegación del pie de página"
        >
          <h2 className="font-display text-base font-bold text-rosa">
            Explorar
          </h2>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-crema/75">
            <li>
              <Link to="/" className="hover:text-white">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/#servicios" className="hover:text-white">
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/#eventos" className="hover:text-white">
                Eventos
              </Link>
            </li>
            <li>
              <Link to="/trabajos" className="hover:text-white">
                Nuestros trabajos
              </Link>
            </li>
          </ul>
        </motion.nav>

        <motion.div variants={fadeUp}>
          <h2 className="font-display text-base font-bold text-rosa">
            ¿Hablamos de tu evento?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-crema/75">
            Cuéntanos qué estás celebrando y te ayudamos a armar la animación
            ideal.
          </p>
          <div className="mt-4">
            <WhatsAppButton message={WHATSAPP_MESSAGES.final} size="md">
              Contáctanos por WhatsApp
            </WhatsAppButton>
          </div>
        </motion.div>
      </motion.div>

      <div className="border-t border-white/10">
        <motion.p
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="contenedor py-6 text-center text-xs text-crema/60"
        >
          © 2026 Lulu Animaciones
        </motion.p>
      </div>
    </footer>
  )
}