import { WhatsAppButton } from "../WhatsAppButton"
import { WHATSAPP_MESSAGES } from "../../data/site"

export function FinalCta() {
  return (
    <section className="py-16 md:py-24">
      <div className="contenedor">
        <div className="relative overflow-hidden rounded-marca bg-rosa px-6 py-14 text-center md:px-12 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-crema/30 blur-xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-azul/40 blur-xl"
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
            <h2 className="text-balance text-3xl font-extrabold text-tinta md:text-4xl lg:text-5xl">
              ¿Listos para celebrar?
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-tinta/80">
              Escríbenos por WhatsApp, cuéntanos qué estás organizando y te
              preparamos una cotización a tu medida.
            </p>
            <WhatsAppButton
              message={WHATSAPP_MESSAGES.final}
              size="lg"
              className="mt-2"
            >
              Hablar con Lulu por WhatsApp
            </WhatsAppButton>
            <p className="text-sm text-tinta/60">
              Respondemos tus dudas y revisamos la disponibilidad para tu fecha.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
