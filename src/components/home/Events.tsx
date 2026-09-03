import { SectionHeading } from "../SectionHeading"
import { WhatsAppButton } from "../WhatsAppButton"
import { EVENT_TYPES } from "../../data/events"
import { WHATSAPP_MESSAGES } from "../../data/site"

export function Events() {
  return (
    <section id="eventos" className="scroll-mt-24 bg-azul-suave/40 py-16 md:py-24">
      <div className="contenedor">
        <SectionHeading
          eyebrow="Para cada ocasión"
          title="Animamos todo tipo de celebraciones"
          description="Nos adaptamos a lo que estás organizando, con la energía justa para cada momento."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {EVENT_TYPES.map((event) => (
            <article
              key={event.id}
              className="flex flex-col gap-2 rounded-marca bg-crema p-6 transition-transform hover:-translate-y-1"
            >
              <h3 className="text-lg font-bold">{event.name}</h3>
              <p className="text-sm leading-relaxed text-tinta-suave">
                {event.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 rounded-marca bg-tinta p-7 text-crema sm:flex-row sm:items-center sm:justify-between md:p-9">
          <div>
            <h3 className="text-xl font-bold text-crema md:text-2xl">
              ¿Tienes otra celebración en mente?
            </h3>
            <p className="mt-1 text-sm text-crema/75">
              Cuéntanos los detalles y armamos la animación ideal para tu
              evento.
            </p>
          </div>
          <WhatsAppButton
            message={WHATSAPP_MESSAGES.general}
            size="lg"
            className="w-full shrink-0 sm:w-auto"
          >
            Quiero cotizar mi evento
          </WhatsAppButton>
        </div>
      </div>
    </section>
  )
}
