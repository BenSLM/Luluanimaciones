import { motion } from "motion/react"
import { SectionHeading } from "../SectionHeading"
import { WhatsAppButton } from "../WhatsAppButton"
import { SERVICES } from "../../data/services"
import { WHATSAPP_MESSAGES } from "../../data/site"
import { fadeUp, staggerContainer, VIEWPORT } from "../../lib/animations"

export function Services() {
  return (
    <section id="servicios" className="scroll-mt-24 py-16 md:py-24">
      <div className="contenedor">
        <SectionHeading
          eyebrow="Lo que hacemos"
          title="Experiencias que arman el ambiente"
          description="Más que servicios sueltos, armamos una experiencia completa según tu evento y las edades de tus invitados."
        />

        <motion.div
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-10 -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 scrollbar-hide md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:pb-0 md:snap-none lg:grid-cols-3"
        >
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.id}
                variants={fadeUp}
                whileHover={{
                  scale: 1.02,
                  rotate: index % 2 === 0 ? 1.5 : -1.5,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                whileTap={{ scale: 0.97 }}
                className="w-[85%] max-w-[340px] shrink-0 snap-start md:w-auto md:max-w-none"
              >
                <div
                  className={`group flex h-full flex-col overflow-hidden rounded-card border border-borde bg-white shadow-carta transition duration-300 hover:shadow-elevada ${service.accent.border}`}
                >
                  <span
                    aria-hidden="true"
                    className={`h-1.5 w-full ${service.accent.bar}`}
                  />
                  <div className="relative aspect-[4/3] overflow-hidden bg-rosa-suave">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span
                      className={`absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full shadow-carta ${service.accent.chip}`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                    </span>
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
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}