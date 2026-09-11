# Lulu Animaciones

Landing de Lulu Animaciones — animación y entretenimiento para eventos (React + Vite + Tailwind + Motion).

## Desarrollo

```bash
pnpm install
pnpm dev
```

## Optimización de fotos

Las fotos reales van en `fotos/` (ignoradas por git). Para convertirlas a WebP optimizados en `public/images/galeria/`:

```bash
pnpm images
```

Los `.heic` nunca se procesan. Para sumar una foto a la galería: copiarla a `fotos/`, correr `pnpm images` y agregar el ítem en `src/data/gallery.ts` con el slug generado.

## Build

```bash
pnpm build
```

La `base` de Vite se adapta al host: en **Vercel** (despliegue en la raíz) es `/` y en GitHub Pages es `/luluanimaciones/`. Vercel setea la env `VERCEL=1` durante su build, así que no hay que configurar nada; para forzar una base usá `VITE_BASE`.

## Deploy

- **Vercel (host principal)**: `https://luluanimaciones.vercel.app/`. Cada push a `main` redeploya automáticamente. `vercel.json` hace fallback SPA (`/*` → `/index.html`) para que `/trabajos` funcione al refrescar.
- **GitHub Pages (respaldo)**: cada push a `main` publica el sitio vía [GitHub Actions](.github/workflows/deploy.yml). Configuración inicial: Settings → Pages → **Source: GitHub Actions**. Con `base` `/luluanimaciones/` (build sin `VERCEL`).