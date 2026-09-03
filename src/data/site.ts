// Central place for business info. Replace the placeholder phone when the real
// WhatsApp number is available. Everything user-facing lives in Spanish.

export const WHATSAPP_NUMBER = "56900000000" // TODO: reemplazar por el número real de Lulu

export function whatsappLink(message: string): string {
  const text = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}

export const WHATSAPP_MESSAGES = {
  general: "¡Hola Lulu! Me gustaría cotizar animación para mi evento.",
  hero: "¡Hola Lulu! Quiero cotizar la animación de mi celebración. ¿Me ayudan?",
  servicio: (nombre: string) =>
    `¡Hola Lulu! Me interesa el servicio de ${nombre}. ¿Me cuentan más?`,
  evento: (nombre: string) =>
    `¡Hola Lulu! Estoy organizando ${nombre} y quiero cotizar la animación.`,
  galeria: "¡Hola Lulu! Vi sus trabajos y quiero algo así para mi evento.",
  final: "¡Hola Lulu! Quiero conversar sobre mi evento y pedir una cotización.",
}
