import type { LucideIcon } from "lucide-react"
import { Paintbrush, Mic, Dices } from "lucide-react"

export interface ServiceAccent {
  bar: string
  chip: string
  border: string
}

export interface Service {
  id: string
  name: string
  description: string
  image: string
  imageAlt: string
  icon: LucideIcon
  accent: ServiceAccent
}

function ph(w: number, h: number, label: string): string {
  return `/placeholder.svg?height=${h}&width=${w}&query=${encodeURIComponent(label)}`
}

export const SERVICES: Service[] = [
  {
    id: "pintacaritas",
    name: "Pintacaritas",
    description:
      "Diseños coloridos y personalizados que transforman a los invitados en sus personajes favoritos. Un clásico que encanta a chicos y grandes.",
    image: ph(800, 600, "pintacaritas colorido en fiesta infantil"),
    imageAlt: "Diseño de pintacaritas colorido en una fiesta",
    icon: Paintbrush,
    accent: {
      bar: "bg-rosa",
      chip: "bg-rosa text-tinta",
      border: "hover:border-rosa/70",
    },
  },
  {
    id: "animacion",
    name: "Animación interactiva",
    description:
      "Animadores que ponen la energía justa: dinámicas, bailes y juegos que mantienen a todos participando de principio a fin.",
    image: ph(800, 600, "animadora interactuando con niños en celebración"),
    imageAlt: "Animadora interactuando con los invitados",
    icon: Mic,
    accent: {
      bar: "bg-azul",
      chip: "bg-azul text-tinta",
      border: "hover:border-azul/70",
    },
  },
  {
    id: "juegos",
    name: "Juegos y actividades",
    description:
      "Actividades pensadas para cada edad y tipo de evento, con concursos, burbujas y sorpresas que arman ambiente.",
    image: ph(800, 600, "juegos y actividades para niños en fiesta"),
    imageAlt: "Juegos y actividades preparados para el evento",
    icon: Dices,
    accent: {
      bar: "bg-amarillo",
      chip: "bg-amarillo text-tinta",
      border: "hover:border-amarillo/80",
    },
  },
]