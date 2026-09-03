import { LegalPage } from "../components/LegalPage"

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Política de privacidad"
      intro="En Lulu Animaciones cuidamos la información que compartes con nosotros. Aquí te explicamos cómo la usamos."
      sections={[
        {
          heading: "Información que recopilamos",
          body: [
            "Cuando nos contactas por WhatsApp o por otros medios, podemos recibir datos como tu nombre, número de contacto y los detalles del evento que quieres celebrar.",
            "Solo recopilamos la información que nos entregas voluntariamente para poder responder tu consulta y preparar una cotización.",
          ],
        },
        {
          heading: "Uso de la información",
          body: [
            "Utilizamos tus datos únicamente para responder tus consultas, coordinar la animación de tu evento y entregarte información relacionada con nuestros servicios.",
            "No vendemos ni compartimos tu información con terceros con fines comerciales.",
          ],
        },
        {
          heading: "WhatsApp y comunicación",
          body: [
            "Al escribirnos por WhatsApp, tu conversación queda sujeta también a las políticas de privacidad de esa plataforma.",
          ],
        },
        {
          heading: "Tus derechos",
          body: [
            "Puedes solicitarnos en cualquier momento que actualicemos o eliminemos la información que nos has entregado. Para hacerlo, escríbenos por WhatsApp.",
          ],
        },
        {
          heading: "Cambios en esta política",
          body: [
            "Podemos actualizar esta política ocasionalmente. Cualquier cambio quedará reflejado en esta misma página.",
          ],
        },
      ]}
    />
  )
}
