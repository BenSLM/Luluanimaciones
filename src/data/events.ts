import { Cake, PartyPopper, Baby, Balloon, Users, Building2, type LucideIcon } from "lucide-react"

export interface EventType {
  id: string
  name: string
  description: string
  icon: LucideIcon
  tone: string
  glow: string
}

export const EVENT_TYPES: EventType[] = [
  {
    id: "cumpleanos-infantiles",
    name: "Cumpleaños infantiles",
    description: "Fiestas llenas de juegos, risas y energía para los más pequeños.",
    icon: Cake,
    tone: "bg-rosa",
    glow: "bg-rosa/70",
  },
  {
    id: "cumpleanos",
    name: "Cumpleaños y celebraciones",
    description: "Animación para cumpleaños de todas las edades y ocasiones especiales.",
    icon: PartyPopper,
    tone: "bg-amarillo",
    glow: "bg-amarillo/70",
  },
  {
    id: "baby-showers",
    name: "Baby showers",
    description: "Momentos entretenidos para acompañar la llegada de un nuevo integrante.",
    icon: Baby,
    tone: "bg-azul",
    glow: "bg-azul/70",
  },
  {
    id: "revelaciones-de-sexo",
    name: "Revelaciones de sexo",
    description: "Una experiencia especial para vivir la sorpresa en familia.",
    icon: Balloon,
    tone: "bg-rosa",
    glow: "bg-rosa/70",
  },
  {
    id: "celebraciones-familiares",
    name: "Celebraciones familiares",
    description: "Reuniones y aniversarios donde todos participan y la pasan bien.",
    icon: Users,
    tone: "bg-amarillo",
    glow: "bg-amarillo/70",
  },
  {
    id: "eventos-privados",
    name: "Eventos privados",
    description: "Animación a medida para celebraciones y encuentros privados.",
    icon: Building2,
    tone: "bg-azul",
    glow: "bg-azul/70",
  },
]