import { Link } from "react-router-dom"
import { WhatsAppButton } from "./WhatsAppButton"
import { WHATSAPP_MESSAGES } from "../data/site"

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-20 bg-tinta text-crema">
      <div className="contenedor grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/logo-lulu.jpg"
              alt=""
              className="h-11 w-11 rounded-xl object-cover"
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
        <div className="contenedor flex flex-col gap-3 py-6 text-xs text-crema/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Lulu Animaciones. Todos los derechos reservados.</p>
          <nav aria-label="Enlaces legales" className="flex gap-5">
            <Link to="/privacidad" className="hover:text-white">
              Política de privacidad
            </Link>
            <Link to="/terminos" className="hover:text-white">
              Términos y condiciones
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
