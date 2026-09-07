export interface EventType {
  id: string
  name: string
  description: string
  icon: string
  accent: string
}

export const EVENT_TYPES: EventType[] = [
  {
    id: "cumpleanos-infantiles",
    name: "Cumpleaños infantiles",
    description: "Fiestas llenas de juegos, risas y energía para los más pequeños.",
    icon: "🎂",
    accent: "bg-azul-suave",
  },
  {
    id: "cumpleanos",
    name: "Cumpleaños y celebraciones",
    description: "Animación para cumpleaños de todas las edades y ocasiones especiales.",
    icon: "🎉",
    accent: "bg-rosa-suave",
  },
  {
    id: "baby-showers",
    name: "Baby showers",
    description: "Momentos entretenidos para acompañar la llegada de un nuevo integrante.",
    icon: "🍼",
    accent: "bg-azul/40",
  },
  {
    id: "revelaciones-de-sexo",
    name: "Revelaciones de sexo",
    description: "Una experiencia especial para vivir la sorpresa en familia.",
    icon: "🎈",
    accent: "bg-rosa/40",
  },
  {
    id: "celebraciones-familiares",
    name: "Celebraciones familiares",
    description: "Reuniones y aniversarios donde todos participan y la pasan bien.",
    icon: "🎊",
    accent: "bg-azul-suave",
  },
  {
    id: "eventos-privados",
    name: "Eventos privados",
    description: "Animación a medida para celebraciones y encuentros privados.",
    icon: "✨",
    accent: "bg-rosa-suave",
  },
]