export interface Service {
  id: string
  name: string
  description: string
  image: string
  imageAlt: string
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
  },
  {
    id: "animacion",
    name: "Animación interactiva",
    description:
      "Animadores que ponen la energía justa: dinámicas, bailes y juegos que mantienen a todos participando de principio a fin.",
    image: ph(800, 600, "animadora interactuando con niños en celebración"),
    imageAlt: "Animadora interactuando con los invitados",
  },
  {
    id: "juegos",
    name: "Juegos y actividades",
    description:
      "Actividades pensadas para cada edad y tipo de evento, con concursos, burbujas y sorpresas que arman ambiente.",
    image: ph(800, 600, "juegos y actividades para niños en fiesta"),
    imageAlt: "Juegos y actividades preparados para el evento",
  },
]
