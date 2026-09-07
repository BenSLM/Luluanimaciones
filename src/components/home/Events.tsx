import { motion } from "motion/react"
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
          {EVENT_TYPES.map((event, i) => (
            <motion.article
              key={event.id}
              className="group relative flex flex-col gap-3 overflow-hidden rounded-card bg-crema p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover="hover"
              variants={{ hover: { y: -6 } }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-2 right-4 select-none font-display text-5xl font-extrabold text-tinta/10"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <motion.span
                variants={{ hover: { scale: 1.15, rotate: 6 } }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className={`flex h-12 w-12 items-center justify-center rounded-sm text-2xl ${event.accent}`}
              >
                <span aria-hidden="true">{event.icon}</span>
              </motion.span>

              <h3 className="text-lg font-bold">{event.name}</h3>
              <p className="text-sm leading-relaxed text-tinta-suave">
                {event.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}