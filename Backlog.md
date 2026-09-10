# Backlog — Lulu Animaciones

Tareas derivadas de `qa lulu.txt`. Cada hallazgo del QA se convierte en una tarea accionable. Para las animaciones se usará **Motion.dev** (dependencia ya instalada).

> Nota: no se añaden mejoras que no estén en el QA. Las tareas [Ideas de diseño] requieren propuesta y decisión previa antes de implementar.

## 7. [Diseño] Events — Identidad + movimiento

Cards de "Animamos todo tipo de celebraciones". Especificación aprobada: identidad por card + movimiento sutil. Sin confeti, motas ni decoración excesiva.

- [x] **Events — datos: agregar icono y color de acento por evento**
  Añadir a `EventType` (y a cada entrada) un campo `icon` (emoji/carácter) y un `accent` (clase de color de acento) para las 6 celebraciones.
  `src/data/events.ts`
- [x] **Events — card con icono en squircle de color, acento y número ordinal**
  Cada card: squircle de color del `accent` con el `icon`, título, descripción, y número ordinal decorativo `01`–`06` en una esquina (tipo watermark, discreto y legible).
  `src/components/home/Events.tsx:16-28`
- [x] **Events — hover sutil: elevación de la card + movimiento del icono**
  En hover: la card se eleva (translateY + sombra marcada) y el squircle del icono hace un pequeño rebote (spring scale). Transición suave, no agresiva.
  `src/components/home/Events.tsx:16-28`
- [x] **Events — entrada escalonada al hacer scroll con Motion.dev**
  Usar `motion.div` + `whileInView` con `variants` y stagger por índice (fade + rise ~24px) en el grid de cards.
  `src/components/home/Events.tsx`

---

## 8. [Diseño] Hero — Primera impresión + profundidad

Especificación aprobada: entrada cinética, subrayado animado, más profundidad en el collage. Sin stickers ni decoración excesiva por ahora.

- [x] **Hero — entrada escalonada de badge, título, descripción y CTAs**
  Animar la columna de texto en `use` de carga con Motion.dev: badge → título → descripción → CTAs, con stagger (spring + leve blur→nítido). Mantener semántica y accesibilidad (`prefers-reduced-motion`).
  `src/components/home/Hero.tsx`
- [x] **Hero — animar el subrayado de "inolvidable"**
  Reemplazar el simple color por un subrayado SVG orgánico que se dibuja solo (animar `pathLength`) bajo la palabra "inolvidable", manteniendo el color rosa.
  `src/components/home/Hero.tsx`
- [x] **Hero — eliminar los blobs genéricos de fondo**
  Quitar los dos divs circulares con `blur-2xl` del fondo. No reemplazarlos por otro decorado por ahora.
  `src/components/home/Hero.tsx:9-16`
- [x] **Hero — dar mayor profundidad al collage de imágenes**
  Distribuir sombras direccionales más marcadas entre las fotos del mosaico (profundidad en capas), sin cambiar la composición del grid.
  `src/components/home/Hero.tsx:53-79`
- [x] **Hero — efecto polaroid solo en la imagen secundaria**
  Aplicar estilo polaroid (borde/canvas blanco + leve rotación) únicamente a UNA imagen secundaria. Al hover: se endereza y se eleva sutilmente.
  `src/components/home/Hero.tsx:64-70`
- [x] **Hero — hover sutil en las imágenes**
  Agregar hover con leve `scale` (+1.02) y sombra que crece en las fotos del collage.
  `src/components/home/Hero.tsx:56-78`

---

## 9. [Diseño] Global — Sistema de border-radius

Especificación aprobada: escala reutilizable de radios aplicados según función y jerarquía. NO implementar estilo "ticket".

- [x] **Global — crear escala de radios reutilizable en tokens**
  Definir en `@theme` de `src/index.css`: `--radius-sm` (elementos pequeños/interactivos, p. ej. 0.75rem), `--radius-card` (cards, p. ej. 1.25rem), `--radius-marca` (elementos principales, 1.5rem) y `--radius-burbuja` (elementos protagonistas, asimétrico 2rem / 0.75rem). Mapear como utilidades (`rounded-sm`, `rounded-card`, `rounded-marca`, `rounded-burbuja`).
  `src/index.css:22`
- [x] **Global — aplicar la escala según función y jerarquía**
  Reemplazar el uso indiscriminado de `rounded-marca` por el radio que corresponde: interactivos/chips → `rounded-sm` o `rounded-full`; cards informativas → `radius-card`; superficies principales (CTA final, secciones destacadas) → `rounded-marca`; protagonistas (imagen principal del hero, CTA grande) → `rounded-burbuja`.
  Revisar: `Hero.tsx`, `Services.tsx`, `Events.tsx`, `GalleryPreview.tsx`, `Footer.tsx`, `FinalCta.tsx` y componentes compartidos.
- [x] **Global — evitar un único rounded-marca en todo**
  Asegurar que ninguna sección quede con el mismo radio en todos sus contenedores; verificar variedad intencional tras aplicar la escala (asimétrico en protagonistas, suave en interactivos).
- [x] **Global — verificar consistencia visual tras aplicar la escala**
  Revisar que la combinación de radios se vea armónica en desktop y móvil. **No implementar** el estilo "ticket" (extremo recto).

---

## 10. Footer "hecho con ❤️" + eliminar páginas legales

- [x] **Footer — reemplazar el bloque legal por "made with love ❤️"**
  Quitar "© {year} Lulu Animaciones. Todos los derechos reservados." y los enlaces de "Política de privacidad / Términos y condiciones"; poner el clásico "hecho con ❤️".
  `src/components/Footer.tsx:71-83`

- [x] **Eliminar `PrivacyPage.tsx`**
  Borrar `src/pages/PrivacyPage.tsx`.

- [x] **Eliminar `TermsPage.tsx`**
  Borrar `src/pages/TermsPage.tsx`.

- [x] **App — quitar rutas de privacidad y términos**
  Eliminar las rutas `/privacidad` y `/terminos` y sus imports.
  `src/App.tsx:8-9,27-28`

- [x] **Eliminar `LegalPage.tsx` (quedará sin uso)**
  Una vez fuera las páginas, eliminar el componente compartido si queda huérfano.
  `src/components/LegalPage.tsx`

---

## 11. Animaciones y vida a la página (Motion.dev)

- [x] **Agregar animaciones con Motion.dev (dependencia ya instalada)**
  Además del scroll reveal (fade/slide al bajar), proponer más formas de dar vida a la página (entradas escalonadas, hovers, etc.) y aplicar las elegidas (requiere decisión previa).
  Componentes home: Hero, Services, Events, GalleryPreview

- [x] **Crear librería compartida de variantes para estandarizar**
  Módulo `src/lib/animations.ts` con `fadeUp`, `fadeIn`, `scaleIn`, `staggerContainer()` y `VIEWPORT` ({once, -80px}) para que todas las entradas usen el mismo rebase.
- [x] **`MotionConfig reducedMotion="user"` global**
  Envolver la app en `src/App.tsx` para respetar `prefers-reduced-motion` en toda la página (se elimina el wrapper local del Hero).
- [x] **SectionHeading — reveal estandarizado**
  Animar `eyebrow → título → descripción` con stagger `fadeUp` al entrar en viewport (vale para Services, Events y GalleryPreview).
- [x] **Scroll reveal estandarizado en todas las secciones**
  Mismo patrón `staggerContainer + fadeUp/scaleIn + VIEWPORT` en Services (stagger por card), GalleryPreview (tiles), Grid de filtros y fotos de GalleryPage, Footer (columnas) y FinalCta (panel).
- [x] **Hero — entrada del collage de fotos**
  Las tres imágenes del collage entran con `scaleIn` escalonado; la columna de texto usa `fadeUp` escalonado (mismo rebase que el resto).
- [x] **Hero — micro-interacciones al pasar el mouse**
  Hover sutil con sombra/rotación/lift en las fotos del collage (polaroid se endereza y despega).
- [x] **Events — hover en los círculos de iconos**
  Los iconos suben y escalan con un spring suave al hacer hover, manteniendo el glow de color.
- [x] **Lightbox — apertura/cierre y transición de imagen animadas**
  Overlay fundido + panel con spring (scale/rise). Cambio de foto con `AnimatePresence mode="wait"` (zoom-cruce) y botones con `whileTap`. Envuelto en `AnimatePresence` en GalleryPreview y GalleryPage.
- [x] **GalleryPage — filtros animados**
  Botones de filtro con stagger, `whileTap` y el grid usa `AnimatePresence popLayout + layout` para que las fotos entren/salgan con stagger y refluyan al cambiar de categoría.
- [x] **Header — entrada y pildora de navegación activa**
  El header baja desde arriba al cargar; en la nav, la píldora de la sección activa se desliza con `layoutId`. Botones hamburguesa/cerrar con `whileTap`.
- [x] **FinalCta — blobs flotando + reveal**
  Los blobs de fondo flotan en loop (y ±14–18px, duraciones distintas) y el contenido entra escalonado.
- [x] **Footer y NotFound — reveal sutil**
  Columnas del footer escalonadas con `fadeUp`; página 404 entrada escalonada.
- [x] **FloatingWhatsApp — entrada con spring + flotación suave**
  Aparece con spring retardado y flota levemente (loop) sin romper el hover CSS del botón.

---

## 12. [Diseño] Services — Cards con identidad de color + micro-interacciones

Especificación aprobada: la sección "Experiencias que arman el ambiente" se ve plana (peor en mobile). Solución: acento de color por card (paleta de la marca), micro-interacciones hover/tap y carrusel scroll-snap en móvil. Sin decoración excesiva.

- [x] **Services — datos: agregar acento de color e icono por servicio**
  Añadir a `Service` un campo `icon` (lucide-react, ya instalada) y `accent` con clases estáticas (`chip`, `shadow`, `hoverShadow`) usando la paleta: rosa, azul, amarillo.
  `src/data/services.ts`
- [x] **Services — card limpia: sin franja superior, chip en el límite foto/texto**
  Se descartó la barra superior + chip en la esquina (2 acentos compitiendo). Queda un único acento de color: el chip circular con el icono montado a caballo entre la foto y el bloque blanco (`bottom-0 translate-y-1/2`), mitad foto / mitad texto. El color de marca se apoya en una **sombra suave de color por card** (rosa/azul/amarillo) en lugar de borde.
  `src/components/home/Services.tsx`
- [x] **Services — hover/press micro-interaction: tilt + scale**
  En desktop la card hace `scale(1.02)` + rotación `±1.5°` (alternada por índice, spring sutil) y su sombra de color se intensifica. En mobile/touch, `whileTap` con `scale(0.97)` para que se sienta clickeable.
  `src/components/home/Services.tsx`
- [x] **Services — carrusel horizontal scroll-snap en mobile, centrado y simétrico**
  En `<md` las cards usan `snap-center` + `scroll-padding-inline` igual al padding lateral del contenedor (`1.25rem`) para que la primera y la última card queden centradas con espacio simétrico a ambos lados. Cards `w-[calc(100%-2.5rem)]`. En `md+` se mantiene el grid de 2/3 columnas.
  `src/components/home/Services.tsx`
- [x] **Services — carrusel coverflow (scale carousel) con Motion**
  La card activa/centrada va a tamaño completo (`scale 1`, `opacity 1`) y las de los costados se reducen (`scale 0.9`), atenúan (`opacity 0.7`) y desenfocan (blur hasta 2px) según su distancia al centro. Se calcula por card con `useScroll` + `useTransform` (rechazado en `md+`, donde aplica el grid normal). La transición es fluida al hacer swipe/snap.
  `src/components/home/Services.tsx`
- [x] **Services — dots indicadores + flechas prev/next en el carrusel**
  Debajo del carrusel (móvil): 3 dots con el activo piluleado (rosa, `aria-current` + labels) para que se entienda que hay más elementos. A los lados, flechas `ChevronLeft/Right` que navegan una card y se deshabilitan en los extremos (opacity). El índice activo se rastrea con `useMotionValueEvent` sobre `scrollX` (card más cercana al centro).
  `src/components/home/Services.tsx`
- [x] **Services — diferenciador por card: icono junto al título (se eliminan los chips)**
  Se quitaron los chips circulares (2 acentos competían con la sombra). Ahora la identidad por card la da el icono lucide (`Paintbrush`/`Mic`/`Dices`) pegado al nombre en su color de acento (rosa/azul/amarillo). La sombra de color por card se mantiene como acento de fondo.
  `src/data/services.ts` + `src/components/home/Services.tsx`

---

## 13. [Diseño] Services — Ideas propuestas (requieren decisión)

Propuestas adicionales para dar más identidad/vida a la sección (no implementadas; decidir antes):
- [ ] **Numeral ordinal `01`–`03` como watermark** en una esquina de cada card (tipo marca, discreto).
- [ ] **Wash de color de fondo suave por card** (degradé muy sutil del acento detrás del contenido) para diferenciar más los bloques.
- [ ] **Flechas de navegación + dots** para el carrusel móvil (además del scroll-snap).
- [ ] **Chip con texto corto** en lugar del icono (p. ej. "BBQ", "Pintacaritas") si se quiere reforzar el tagging.
- [ ] **Fondo de sección con degradé suave de la paleta** (rosa-suave → azul-suave) para separar la sección del resto de la página.

---

## 14. [Imágenes] Migración de fotos reales con buenas prácticas

Reemplazar los placeholders por las fotos reales de `fotos/` (fuente, ignorada en git), optimizadas a WebP multirresolución en `public/images/galeria/` (640 y 1080 px, calidad 82). Los `.heic` se ignoran. Queda **juegos** sin fotos reales aún (muestra el estado vacío si se filtra).

- [x] **Imágenes — script de optimización `pnpm images`**
  `scripts/optimize-images.mjs` con sharp: lee `fotos/*.jpg`, deduplica por hash (se detectaron `Pintacarita(7)==(2)` y `Foto grupal(2)==(1)`), transpone EXIF y emite `{slug}-640.webp` y `{slug}-1080.webp` (14 fotos únicas, ~35–150 KB c/u vs 2–5 MB originales).
- [x] **Imágenes — migrar galería con categorías y srcset**
  `src/data/gallery.ts` usa las 14 fotos reales (11 pintacaritas, 1 animación, 2 eventos), cada una con `alt` descriptivo, `caption`, `span` de layout y `srcset` 640w/1080w. `GalleryPreview` y `GalleryPage` consumen `srcset` + `sizes` con `loading="lazy"`/`decoding="async"`. Puede agregarse una foto nueva simplemente ejecutando `pnpm images` y agregando el ítem con el slug generado.
- [x] **Imágenes — reutilizar fotos reales en Hero y Services**
  El collage del Hero (3 fotos) y las cards de Services (Pintacaritas / Animación / Juegos) usan WebP reales con `srcset`, eliminando los placeholders. Header/Footer ya tenían el logo real.
- [x] **Imágenes — ignorar fuente y `.heic` en git**
  `.gitignore` excluye `fotos/` (solo los WebP optimizados van al repo) y los archivos `.heic`/`.HEIC`.

---

## 15. [Galería] Nueva categoría Globoflexia

- [x] **Globoflexia — filtro en /trabajos**
  Se agrega `globoflexia` al union de `GalleryCategory` y al chip de filtros de GalleryPage ("Globoflexia" entre "Juegos y actividades" y "Eventos").
- [x] **Globoflexia — fotos reales**
  Se subieron 3 fotos a `fotos/` (`.jfif` globoflexia). El script ahora acepta `.jfif` y las convierte a WebP (640/1080). Se agregaron 3 ítems (`g17`–`g19`) en `GALLERY` con `category: "globoflexia"`, `alt` y `caption` descriptivos. El filtro ya muestra contenido.

---

## 16. [Lightbox] Flechas visibles + swipe táctil

- [x] **Lightbox — flechas tapadas por la imagen**
  La card del modal quedaba animada con `transform` activo, lo que creaba un contexto de stacking posterior que la pintaba encima de las flechas izquierda/derecha. Se agregó `z-30` + `shadow-lg` a flechas y botón cerrar: ahora quedan por delante y se ven nítidas.
- [x] **Lightbox — swipe entre fotos con animación direccional**
  El área de imagen soporta arrastre horizontal (`drag="x"` de Motion con `touch-pan-y` para no bloquear el scroll vertical). Al soltar pasado el umbral (80 px o 600 px/s) cambia a la anterior/siguiente. El cambio entre imágenes se anima con deslizamiento según la dirección (entra desde la derecha si vas a la siguiente, desde la izquierda si volvés). Sigue la navegación por teclado

---

## 17. [Galería] Preview de la landing balanceado + sistema visual unificado

- [x] **Masonry sin huecos**
  Se agrega `grid-flow-dense` al grid del preview. Los ítems "tall"/"wide" ya no dejan celdas vacías: los siguientes rellenan agujeros.
  `src/components/home/GalleryPreview.tsx`
- [x] **Tratamiento visual unificado de las fotos**
  Todas las fotos comparten el mismo sistema: `ring-1 ring-tinta/10` (borde sutil consistente, `hover:ring-rosa/40`), `shadow-foto`/`shadow-elevada` uniformes, overlay de gradiente oscuro subtil en la parte inferior siempre presente y caption (nombre/evento) que aparece en hover. Se ven como piezas de un mismo sistema.
  `src/components/home/GalleryPreview.tsx`
- [x] **Affordance de interacción: cursor + lupa**
  `cursor-pointer` en todas las tarjetas e ícono `ZoomIn` (lupa) en la esquina superior derecha que aparece en hover/focus con scale, indicando que abren el lightbox.
- [x] **Preview con más fotos (10)**
  `GALLERY_PREVIEW` pasa de 6 a 10 fotos reales (`slice(0, 10)`), balanceadas en el masonry 2/4 columnas con `grid-flow-dense`.
- [x] **Mobile cuadrado en el preview**
  En mobile (`<md`) todas las fotos del preview se muestran cuadradas: los spans `tall`/`wide` pasan a ser solo de desktop (`md:row-span-2`/`md:col-span-2`) y la fila del grid usa `auto-rows-[calc((100vw-3.25rem)/2)]` (ancho de columna). En `md+` mantiene el mosaico mixto (`md:auto-rows-[220px]`, 4 columnas).
  `src/components/home/GalleryPreview.tsx`

---

## 18. [SEO] Optimización para buscadores

- [x] **Meta completo en `index.html`**
  Title y description orientados a búsquedas ("animadores… cumpleaños, baby showers, pintacaritas, globoflexia, Santiago"), keywords, canonical, robots, Open Graph (es_CL) y Twitter Cards con imagen real (foto grupal payaso).
- [x] **Datos estructurados (JSON-LD)**
  `EntertainmentBusiness` con logo, imágenes, `areaServed` (Santiago de Chile), `priceRange` y `makesOffer` (pintacaritas, globoflexia, animación, juegos).
- [x] **Title/description por ruta**
  Hook `usePageMeta` en `App.tsx`: `/trabajos` tiene su propio title/description (el resto usa el default).
- [x] **Sitemap + robots**
  `public/sitemap.xml` (home + /trabajos) y `public/robots.txt` con referencia al sitemap.
- [x] **Favicon robusto**
  PNG cuadrado 128 (favicon) y 180 (apple-touch-icon) generados con sharp desde el logo, reemplazando el JPEG (que no renderizaba). Root cause real: en dev Vite duplicaba `%BASE_URL%` (`/Luluanimaciones/Luluanimaciones/...` → 404); fix con ruta relativa `images/favicon-logo.png` verificada en dev y build. Número de WhatsApp real `56946793929` (todas las CTAs).

---

## 19. [Infra] Fix workflow GitHub Pages (pnpm setup)

- [x] `pnpm/action-setup@v4` no sabía qué versión de pnpm instalar → el job moría antes de buildear. Agregado `"packageManager": "pnpm@10.14.0"` en `package.json` (fuente única de versión) y `version: 10.14.0` explícito en `.github/workflows/deploy.yml`.
- Nota: el warning "Node 20 is being deprecated" es informativo del runner (aquí realmente corre Node 24) y no bloquea.
