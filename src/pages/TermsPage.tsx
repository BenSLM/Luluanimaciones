import { LegalPage } from "../components/LegalPage"

export default function TermsPage() {
  return (
    <LegalPage
      title="Términos y condiciones"
      intro="Estos términos describen las condiciones generales del uso de este sitio y de la coordinación de nuestros servicios."
      sections={[
        {
          heading: "Sobre este sitio",
          body: [
            "Este sitio web tiene como objetivo presentar los servicios de animación y entretenimiento de Lulu Animaciones y facilitar el contacto para solicitar una cotización.",
            "La información publicada es referencial y puede actualizarse sin previo aviso.",
          ],
        },
        {
          heading: "Cotizaciones y reservas",
          body: [
            "Las cotizaciones se coordinan de forma personalizada según el tipo de evento, la fecha y las actividades solicitadas.",
            "Una consulta a través del sitio o de WhatsApp no constituye una reserva confirmada hasta que ambas partes acuerden los detalles.",
          ],
        },
        {
          heading: "Contenido e imágenes",
          body: [
            "Las fotografías y contenidos de este sitio pertenecen a Lulu Animaciones y no pueden reproducirse sin autorización.",
          ],
        },
        {
          heading: "Responsabilidad",
          body: [
            "Nos esforzamos por mantener la información actualizada y correcta, pero no garantizamos que esté libre de errores en todo momento.",
          ],
        },
        {
          heading: "Contacto",
          body: [
            "Si tienes dudas sobre estos términos, puedes escribirnos por WhatsApp y con gusto te ayudamos.",
          ],
        },
      ]}
    />
  )
}
