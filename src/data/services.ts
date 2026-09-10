import type { LucideIcon } from "lucide-react"
import { Paintbrush, Mic, Dices } from "lucide-react"
import { asset } from "../lib/asset"

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
  srcSet?: string
  icon: LucideIcon
  accent: ServiceAccent
}

export const SERVICES: Service[] = [
  {
    id: "pintacaritas",
    name: "Pintacaritas",
    description:
      "Diseños coloridos y personalizados que transforman a los invitados en sus personajes favoritos. Un clásico que encanta a chicos y grandes.",
    image: asset("images/galeria/foto-con-nina-pintacarita-1080.webp"),
    imageAlt: "Niña luciendo un diseño de pintacaritas de Lulu Animaciones",
    srcSet: `${asset("images/galeria/foto-con-nina-pintacarita-640.webp")} 640w, ${asset("images/galeria/foto-con-nina-pintacarita-1080.webp")} 1080w`,
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
      "Dinámicas, bailes y juegos que mantienen a todos participando de principio a fin.",
    image: asset("images/galeria/foto-grupal-payaso-1080.webp"),
    imageAlt: "Animadora de Lulu disfrazada de payaso jugando con los invitados",
    srcSet: `${asset("images/galeria/foto-grupal-payaso-640.webp")} 640w, ${asset("images/galeria/foto-grupal-payaso-1080.webp")} 1080w`,
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
      "Competencias, retos grupales y dinámicas armadas según la edad de los invitados, para que nadie se quede sin participar.",
    image: asset("images/galeria/foto-grupal-1080.webp"),
    imageAlt: "Grupo de niños participando de las actividades del evento",
    srcSet: `${asset("images/galeria/foto-grupal-640.webp")} 640w, ${asset("images/galeria/foto-grupal-1080.webp")} 1080w`,
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