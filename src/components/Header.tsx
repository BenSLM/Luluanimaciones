import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { Link, NavLink, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "motion/react"
import { WhatsAppButton } from "./WhatsAppButton"
import { WHATSAPP_MESSAGES } from "../data/site"

const NAV = [
  { to: "/", label: "Inicio", end: true },
  { to: "/#servicios", label: "Servicios" },
  { to: "/#eventos", label: "Eventos" },
  { to: "/trabajos", label: "Trabajos" },
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
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40 border-b border-borde bg-crema/90 shadow-header backdrop-blur-md"
    >
      <div className="contenedor flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          to="/"
          className="flex items-center gap-2.5"
          aria-label="Lulu Animaciones, ir al inicio"
        >
          <img
            src="/images/logo-lulu.jpg"
            alt=""
            className="h-10 w-10 rounded-sm object-cover md:h-11 md:w-11"
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
              className="text-sm font-semibold transition-colors"
            >
              {({ isActive }) => {
                const active = isActive && item.to === "/trabajos"
                return (
                  <span
                    className={`relative block rounded-full px-4 py-2 transition-colors ${
                      active
                        ? "text-tinta"
                        : "text-tinta-suave hover:bg-rosa-suave/60 hover:text-tinta"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="navActivo"
                        className="absolute inset-0 rounded-full bg-rosa-suave"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </span>
                )
              }}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton message={WHATSAPP_MESSAGES.general} size="md">
            Cotizar por WhatsApp
          </WhatsAppButton>
        </div>

        <motion.button
          type="button"
          whileTap={{ scale: 0.92 }}
          className="flex h-11 w-11 items-center justify-center rounded-sm border border-borde bg-white text-tinta lg:hidden"
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
        </motion.button>
      </div>

      {createPortal(
        <AnimatePresence>
          {open && (
            <>
            <motion.div
              aria-hidden="true"
              className="fixed inset-0 z-50 bg-tinta/40 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              id="menu-movil"
              className="fixed inset-y-0 left-0 z-[60] flex w-72 max-w-[85vw] flex-col overflow-y-auto border-r border-borde bg-crema shadow-2xl lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Menú móvil"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className="flex items-center justify-between border-b border-borde px-5 py-4">
                <span className="font-display text-lg font-extrabold tracking-tight">
                  Lulu<span className="text-rosa"> Animaciones</span>
                </span>
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.92 }}
                  className="flex h-10 w-10 items-center justify-center rounded-sm border border-borde bg-white text-tinta"
                  aria-label="Cerrar menú"
                  onClick={() => setOpen(false)}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
              <nav
                className="flex flex-col gap-1 px-4 py-5"
                aria-label="Menú móvil"
              >
                {NAV.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    className="rounded-sm px-4 py-3 text-base font-semibold text-tinta hover:bg-rosa-suave/60"
                  >
                    {item.label}
                  </NavLink>
                ))}
                <div className="mt-3">
                  <WhatsAppButton
                    message={WHATSAPP_MESSAGES.general}
                    size="lg"
                    className="w-full"
                  >
                    Cotizar por WhatsApp
                  </WhatsAppButton>
                </div>
              </nav>
            </motion.aside>
            </>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </motion.header>
  )
}
