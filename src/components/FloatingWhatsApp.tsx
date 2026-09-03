import { whatsappLink, WHATSAPP_MESSAGES } from "../data/site"
import { WhatsAppIcon } from "./WhatsAppButton"

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(WHATSAPP_MESSAGES.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cotizar por WhatsApp"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg shadow-[#25D366]/30 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#1fb757] focus-visible:outline-3 focus-visible:outline-offset-2 md:px-5"
    >
      <WhatsAppIcon className="h-6 w-6 shrink-0" />
      <span className="hidden text-sm font-semibold sm:inline">
        Cotizar por WhatsApp
      </span>
    </a>
  )
}
