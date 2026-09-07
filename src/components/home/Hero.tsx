import { Link } from "react-router-dom"
import { WhatsAppButton } from "../WhatsAppButton"
import { WHATSAPP_MESSAGES } from "../../data/site"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-crema pt-8 pb-16 md:pt-14 md:pb-24">
      {/* soft brand wash, kept subtle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-rosa-suave/50 blur-2xl md:h-96 md:w-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-40 h-64 w-64 rounded-full bg-azul-suave/50 blur-2xl"
      />

      <div className="contenedor relative grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-tinta-suave shadow-sm">
            <span className="h-2 w-2 rounded-full bg-rosa" />
            Animación y entretenimiento para eventos
          </span>

          <h1 className="text-balance text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Hacemos que tu celebración sea{" "}
            <span className="text-rosa">inolvidable</span>
          </h1>

          <p className="max-w-lg text-pretty text-lg leading-relaxed text-tinta-suave">
            En Lulu Animaciones ponemos la energía, los juegos y la magia para
            que tu evento sea entretenido de principio a fin. Pintacaritas,
            animación en vivo y actividades para todas las edades.
          </p>

          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
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
          </div>
        </div>

        {/* Photo-forward composition */}
        <div className="relative">
          <div className="grid grid-cols-5 grid-rows-6 gap-3 md:gap-4">
            <div className="col-span-3 row-span-6 overflow-hidden rounded-marca bg-rosa-suave shadow-sm">
              <img
                src="/placeholder.svg?height=900&width=650&query=animadora sonriendo con nino en fiesta colorida"
                alt="Animadora de Lulu compartiendo con un niño durante una fiesta"
                className="h-full w-full object-cover"
                fetchPriority="high"
              />
            </div>
            <div className="col-span-2 row-span-3 overflow-hidden rounded-marca bg-azul-suave shadow-sm">
              <img
                src="/placeholder.svg?height=440&width=440&query=pintacaritas colorido en nina feliz"
                alt="Niña feliz con pintacaritas de colores"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="col-span-2 row-span-3 overflow-hidden rounded-marca bg-rosa/40 shadow-sm">
              <img
                src="/placeholder.svg?height=440&width=440&query=ninos jugando con burbujas en celebracion"
                alt="Niños jugando con burbujas durante una celebración"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
