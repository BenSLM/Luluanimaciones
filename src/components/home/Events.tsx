import { motion } from "motion/react"
import { SectionHeading } from "../SectionHeading"
import { EVENT_TYPES } from "../../data/events"

const containerVariants = {
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 260, damping: 20 },
  },
}

export function Events() {
  return (
    <section id="eventos" className="scroll-mt-24 bg-azul-suave/40 py-16 md:py-24">
      <div className="contenedor">
        <SectionHeading
          eyebrow="Para cada ocasión"
          title="Animamos todo tipo de celebraciones"
          description="Nos adaptamos a lo que estás organizando, con la energía justa para cada momento."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16"
        >
          {EVENT_TYPES.map((event) => {
            const Icon = event.icon
            return (
              <motion.div
                key={event.id}
                variants={itemVariants}
                className="flex flex-col items-center text-center"
              >
                <div className="relative">
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -inset-3 rounded-full blur-xl ${event.glow}`}
                  />
                  <span
                    className={`relative flex h-16 w-16 items-center justify-center rounded-full shadow-md ${event.tone}`}
                  >
                    <Icon className="h-7 w-7 text-tinta" strokeWidth={2} aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold">{event.name}</h3>
                <p className="mt-1 max-w-56 text-sm leading-relaxed text-tinta-suave">
                  {event.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}