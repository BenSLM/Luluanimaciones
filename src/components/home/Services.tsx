import { SectionHeading } from "../SectionHeading"
import { WhatsAppButton } from "../WhatsAppButton"
import { SERVICES } from "../../data/services"
import { WHATSAPP_MESSAGES } from "../../data/site"

export function Services() {
  return (
    <section id="servicios" className="scroll-mt-24 py-16 md:py-24">
      <div className="contenedor">
        <SectionHeading
          eyebrow="Lo que hacemos"
          title="Experiencias que arman el ambiente"
          description="Más que servicios sueltos, armamos una experiencia completa según tu evento y las edades de tus invitados."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col overflow-hidden rounded-marca border border-borde bg-white transition-shadow hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden bg-rosa-suave">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="text-xl font-bold">{service.name}</h3>
                <p className="flex-1 text-sm leading-relaxed text-tinta-suave">
                  {service.description}
                </p>
                <WhatsAppButton
                  message={WHATSAPP_MESSAGES.servicio(service.name)}
                  variant="outline"
                  size="md"
                  className="mt-1 w-full"
                >
                  Consultar este servicio
                </WhatsAppButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
