import { Link } from "react-router-dom"

export default function NotFoundPage() {
  return (
    <section className="py-24 md:py-32">
      <div className="contenedor flex max-w-lg flex-col items-center gap-5 text-center">
        <span className="font-display text-6xl font-extrabold text-rosa">
          404
        </span>
        <h1 className="text-balance text-3xl font-extrabold">
          No encontramos esta página
        </h1>
        <p className="text-tinta-suave">
          Puede que el enlace esté roto o que la página se haya movido. Volvamos
          a un lugar conocido.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full bg-rosa px-7 py-3.5 text-base font-semibold text-tinta transition-transform hover:-translate-y-0.5"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}
