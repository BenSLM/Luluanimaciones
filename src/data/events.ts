export interface EventType {
  id: string
  name: string
  description: string
}

export const EVENT_TYPES: EventType[] = [
  {
    id: "cumpleanos-infantiles",
    name: "Cumpleaños infantiles",
    description: "Fiestas llenas de juegos, risas y energía para los más pequeños.",
  },
  {
    id: "cumpleanos",
    name: "Cumpleaños y celebraciones",
    description: "Animación para cumpleaños de todas las edades y ocasiones especiales.",
  },
  {
    id: "baby-showers",
    name: "Baby showers",
    description: "Momentos entretenidos para acompañar la llegada de un nuevo integrante.",
  },
  {
    id: "revelaciones-de-sexo",
    name: "Revelaciones de sexo",
    description: "Una experiencia especial para vivir la sorpresa en familia.",
  },
  {
    id: "celebraciones-familiares",
    name: "Celebraciones familiares",
    description: "Reuniones y aniversarios donde todos participan y la pasan bien.",
  },
  {
    id: "eventos-privados",
    name: "Eventos privados",
    description: "Animación a medida para celebraciones y encuentros privados.",
  },
]
