import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  base: "/luluanimaciones/",
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
