import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { WhatsAppButton } from "./WhatsAppButton"
import { WHATSAPP_MESSAGES } from "../data/site"

const NAV = [
  { to: "/", label: "Inicio", end: true },
  { to: "/#servicios", label: "Servicios" },
  { to: "/#eventos", label: "Eventos" },
  { to: "/trabajos", label: "Trabajos" },
  { to: "/#sobre", label: "Sobre Lulu" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-borde bg-crema/90 backdrop-blur-md">
      <div className="contenedor flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          to="/"
          className="flex items-center gap-2.5"
          aria-label="Lulu Animaciones, ir al inicio"
        >
          <img
            src="/logo-lulu.jpg"
            alt=""
            className="h-10 w-10 rounded-xl object-cover md:h-11 md:w-11"
          />
          <span className="font-display text-lg font-extrabold leading-none tracking-tight md:text-xl">
            Lulu<span className="text-rosa"> Animaciones</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive && item.to === "/trabajos"
                    ? "bg-rosa-suave text-tinta"
                    : "text-tinta-suave hover:bg-rosa-suave/60 hover:text-tinta"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton message={WHATSAPP_MESSAGES.general} size="md">
            Cotizar por WhatsApp
          </WhatsAppButton>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-borde bg-white text-tinta lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative flex h-4 w-5 flex-col justify-between">
            <span
              className={`h-0.5 w-full rounded bg-current transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-full rounded bg-current transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-full rounded bg-current transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div
          id="menu-movil"
          className="border-t border-borde bg-crema lg:hidden"
        >
          <nav className="contenedor flex flex-col gap-1 py-4" aria-label="Menú móvil">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className="rounded-xl px-4 py-3 text-base font-semibold text-tinta hover:bg-rosa-suave/60"
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-2">
              <WhatsAppButton
                message={WHATSAPP_MESSAGES.general}
                size="lg"
                className="w-full"
              >
                Cotizar por WhatsApp
              </WhatsAppButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
