import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

// GitHub Pages hosts the project under "/luluanimaciones/"; Vercel serves it
// at the root. Vercel sets VERCEL=1 during its build, so the base adapts
// automatically per host.
const base = process.env.VITE_BASE || (process.env.VERCEL ? "/" : "/luluanimaciones/")

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    allowedHosts: true,
    watch: {
      usePolling: true,
      interval: 150,
    },
  },
})
