import { Link } from "react-router-dom"
import { WhatsAppButton } from "./WhatsAppButton"
import { WHATSAPP_MESSAGES } from "../data/site"

export function Footer() {
  return (
    <footer className="mt-20 bg-tinta text-crema">
      <div className="contenedor grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/images/logo-lulu.jpg"
              alt=""
              className="h-11 w-11 rounded-sm object-cover"
            />
            <span className="font-display text-xl font-extrabold">
              Lulu Animaciones
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-crema/70">
            Animación y entretenimiento para que tus celebraciones sean más
            divertidas, memorables y especiales.
          </p>
        </div>

        <nav aria-label="Navegación del pie de página">
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
        </nav>

        <div>
          <h2 className="font-display text-base font-bold text-rosa">
            ¿Hablamos de tu evento?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-crema/75">
            Cuéntanos qué estás celebrando y te ayudamos a armar la animación
            ideal.
          </p>
          <div className="mt-4">
            <WhatsAppButton message={WHATSAPP_MESSAGES.final} size="md">
              Hablar con Lulu
            </WhatsAppButton>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="contenedor py-6 text-center text-xs text-crema/60">
          Hecho con <span aria-hidden="true">❤️</span>
          <span className="sr-only">amor</span> por Lulu Animaciones
        </p>
      </div>
    </footer>
  )
}
