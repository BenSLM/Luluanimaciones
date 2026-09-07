import { motion } from "motion/react"
import { SectionHeading } from "../SectionHeading"
import { EVENT_TYPES } from "../../data/events"
import { fadeUp, staggerContainer, VIEWPORT } from "../../lib/animations"

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
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16"
        >
          {EVENT_TYPES.map((event) => {
            const Icon = event.icon
            return (
              <motion.div
                key={event.id}
                variants={fadeUp}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    y: -4,
                    transition: { type: "spring", stiffness: 320, damping: 20 },
                  }}
                  className="relative"
                >
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -inset-3 rounded-full blur-xl ${event.glow}`}
                  />
                  <span
                    className={`relative flex h-16 w-16 items-center justify-center rounded-full shadow-md ${event.tone}`}
                  >
                    <Icon
                      className="h-7 w-7 text-tinta"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>
                </motion.div>
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