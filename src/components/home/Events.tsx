import { SectionHeading } from "../SectionHeading"
import { EVENT_TYPES } from "../../data/events"

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
      </div>
    </section>
  )
}
