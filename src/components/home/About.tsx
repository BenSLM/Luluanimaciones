import { WhatsAppButton } from "../WhatsAppButton"
import { WHATSAPP_MESSAGES } from "../../data/site"

export function About() {
  return (
    <section id="sobre" className="scroll-mt-24 bg-rosa-suave/40 py-16 md:py-24">
      <div className="contenedor grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative order-last lg:order-first">
          <div className="overflow-hidden rounded-marca bg-rosa shadow-sm">
            <img
              src="/placeholder.svg?height=680&width=760&query=equipo de animadores sonriendo en evento"
              alt="El equipo de Lulu Animaciones durante una celebración"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-3 hidden w-40 overflow-hidden rounded-marca border-4 border-crema bg-azul-suave shadow-md sm:block">
            <img
              src="/placeholder.svg?height=200&width=200&query=nino riendo con pintacaritas"
              alt="Niño riendo con pintacaritas"
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-5">
          <span className="inline-flex items-center rounded-full bg-crema px-3.5 py-1 text-xs font-bold uppercase tracking-wide text-tinta">
            Sobre Lulu
          </span>
          <h2 className="text-balance text-3xl font-extrabold md:text-4xl">
            Personas de verdad, celebraciones con energía
          </h2>
          <p className="text-pretty leading-relaxed text-tinta-suave">
            Lulu Animaciones nace del gusto por hacer que las celebraciones se
            sientan especiales. Nos encanta ver a los invitados participar,
            reírse y disfrutar cada momento.
          </p>
          <p className="text-pretty leading-relaxed text-tinta-suave">
            Trabajamos con cercanía y compromiso para que solo te preocupes de
            disfrutar tu evento. Nosotros ponemos la diversión.
          </p>
          <WhatsAppButton message={WHATSAPP_MESSAGES.general} size="lg">
            Hablar con Lulu
          </WhatsAppButton>
        </div>
      </div>
    </section>
  )
}
