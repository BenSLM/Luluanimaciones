import type { LucideIcon } from "lucide-react"
import { Paintbrush, Mic, Dices } from "lucide-react"

export interface ServiceAccent {
  icon: string
  shadow: string
  hoverShadow: string
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
      icon: "text-rosa",
      shadow:
        "shadow-[0_2px_6px_-1px_rgb(0_0_0/0.08),0_18px_36px_-14px_rgb(255_176_217/0.6)]",
      hoverShadow:
        "hover:shadow-[0_4px_12px_-2px_rgb(0_0_0/0.12),0_26px_48px_-18px_rgb(255_176_217/0.75)]",
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
      icon: "text-azul",
      shadow:
        "shadow-[0_2px_6px_-1px_rgb(0_0_0/0.08),0_18px_36px_-14px_rgb(176_207_255/0.6)]",
      hoverShadow:
        "hover:shadow-[0_4px_12px_-2px_rgb(0_0_0/0.12),0_26px_48px_-18px_rgb(176_207_255/0.75)]",
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
      icon: "text-[#e0a51b]",
      shadow:
        "shadow-[0_2px_6px_-1px_rgb(0_0_0/0.08),0_18px_36px_-14px_rgb(255_217_142/0.6)]",
      hoverShadow:
        "hover:shadow-[0_4px_12px_-2px_rgb(0_0_0/0.12),0_26px_48px_-18px_rgb(255_217_142/0.75)]",
    },
  },
]