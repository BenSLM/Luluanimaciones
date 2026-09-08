import { useCallback, useRef, useState, type RefObject } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "motion/react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { SectionHeading } from "../SectionHeading"
import { WhatsAppButton } from "../WhatsAppButton"
import { SERVICES, type Service } from "../../data/services"
import { WHATSAPP_MESSAGES } from "../../data/site"
import { fadeUp, staggerContainer, VIEWPORT } from "../../lib/animations"

const GAP = 20

interface ServiceCardProps {
  service: Service
  index: number
  scrollX: MotionValue<number>
  containerRef: RefObject<HTMLDivElement | null>
  registerRef: (index: number, node: HTMLDivElement | null) => void
}

function ServiceCard({
  service,
  index,
  scrollX,
  containerRef,
  registerRef,
}: ServiceCardProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const setRef = useCallback(
    (node: HTMLDivElement | null) => {
      ref.current = node
      registerRef(index, node)
    },
    [index, registerRef],
  )

  const ratio = useTransform(scrollX, (x) => {
    const el = ref.current
    const c = containerRef.current
    if (!el || !c) return 0
    if (window.matchMedia("(min-width: 768px)").matches) return 0
    const distance = Math.abs(c.clientWidth / 2 - (el.offsetLeft + el.offsetWidth / 2 - x))
    return Math.min(distance / (el.offsetWidth + GAP), 1)
  })

  const scale = useTransform(ratio, (r) => 1 - 0.1 * r)
  const opacity = useTransform(ratio, (r) => 1 - 0.3 * r)
  const blur = useTransform(ratio, (r) => 2 * r)
  const filter = useTransform(blur, (v) => `blur(${v}px)`)

  const Icon = service.icon

  return (
    <motion.div
      variants={fadeUp}
      ref={setRef}
      className="w-[calc(100%-2.5rem)] shrink-0 snap-center md:w-auto"
    >
      <motion.div style={{ scale, opacity, filter }} className="h-full">
        <motion.article
          whileHover={{
            scale: 1.02,
            rotate: index % 2 === 0 ? 1.5 : -1.5,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
          whileTap={{ scale: 0.97 }}
          className={`group flex h-full flex-col overflow-hidden rounded-card border border-borde bg-white transition duration-300 ${service.accent.shadow} ${service.accent.hoverShadow}`}
        >
          <div className="aspect-[4/3] overflow-hidden bg-rosa-suave">
            <img
              src={service.image}
              srcSet={service.srcSet}
              sizes="(min-width: 768px) 33vw, 100vw"
              alt={service.imageAlt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <h3 className="flex items-center gap-2.5 text-xl font-bold">
              <Icon
                className={`h-6 w-6 shrink-0 ${service.accent.icon}`}
                strokeWidth={2.2}
                aria-hidden="true"
              />
              {service.name}
            </h3>
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
        </motion.article>
      </motion.div>
    </motion.div>
  )
}

export function Services() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const registerRef = useCallback((index: number, node: HTMLDivElement | null) => {
    cardRefs.current[index] = node
  }, [])
  const { scrollX } = useScroll({ container: containerRef })

  const [active, setActive] = useState(0)

  const scrollToIndex = useCallback((index: number) => {
    const c = containerRef.current
    const target = cardRefs.current[index]
    if (!c || !target) return
    c.scrollTo({
      left: target.offsetLeft - (c.clientWidth - target.offsetWidth) / 2,
      behavior: "smooth",
    })
  }, [])

  useMotionValueEvent(scrollX, "change", (x) => {
    const c = containerRef.current
    if (!c) return
    let nearest = 0
    let best = Infinity
    cardRefs.current.forEach((el, i) => {
      if (!el) return
      const distance = Math.abs(
        c.clientWidth / 2 - (el.offsetLeft + el.offsetWidth / 2 - x),
      )
      if (distance < best) {
        best = distance
        nearest = i
      }
    })
    setActive((prev) => (prev === nearest ? prev : nearest))
  })

  return (
    <section id="servicios" className="scroll-mt-24 py-16 md:py-24">
      <div className="contenedor">
        <SectionHeading
          eyebrow="Lo que hacemos"
          title="Experiencias que arman el ambiente"
          description="Más que servicios sueltos, armamos una experiencia completa según tu evento y las edades de tus invitados."
        />

        <div className="relative">
          <motion.div
            ref={containerRef}
            variants={staggerContainer(0.1, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="relative mt-10 -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 scrollbar-hide [scroll-padding-inline:1.25rem] md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 md:snap-none md:[scroll-padding-inline:0] lg:grid-cols-3"
          >
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                scrollX={scrollX}
                containerRef={containerRef}
                registerRef={registerRef}
              />
            ))}
          </motion.div>

          <button
            type="button"
            onClick={() => scrollToIndex(active - 1)}
            disabled={active === 0}
            aria-label="Ver servicio anterior"
            className="absolute left-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-borde bg-crema/90 text-tinta shadow-carta backdrop-blur-sm transition-colors enabled:hover:bg-white disabled:cursor-not-allowed disabled:opacity-40 md:hidden"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => scrollToIndex(active + 1)}
            disabled={active === SERVICES.length - 1}
            aria-label="Ver siguiente servicio"
            className="absolute right-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-borde bg-crema/90 text-tinta shadow-carta backdrop-blur-sm transition-colors enabled:hover:bg-white disabled:cursor-not-allowed disabled:opacity-40 md:hidden"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="relative flex items-center justify-center gap-2 md:hidden">
          {SERVICES.map((_, i) => (
            <button
              key={SERVICES[i].id}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Ir al servicio ${i + 1}`}
              aria-current={active === i ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                active === i
                  ? "w-6 bg-rosa"
                  : "w-2.5 bg-tinta/25 hover:bg-tinta/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}