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

El sitio se construye con `base: "/Luluanimaciones/"` (subpath de GitHub Pages) y usa `import.meta.env.BASE_URL` para las rutas de assets y el `basename` de react-router.

## Deploy (GitHub Pages)

Cada push a `main` publica el sitio automáticamente vía [GitHub Actions](.github/workflows/deploy.yml). Configuración inicial (una sola vez):

1. Settings → Pages → **Source: GitHub Actions**.
2. Push a `main`. El workflow hace `pnpm build`, copia `dist/index.html` → `dist/404.html` (para que las rutas internas como `/trabajos` funcionen al refrescar) y despliega con `actions/deploy-pages`.

Sitio: https://benslm.github.io/Luluanimaciones/