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

- [ ] **Agregar animaciones con Motion.dev (dependencia ya instalada)**
  Además del scroll reveal (fade/slide al bajar), proponer más formas de dar vida a la página (entradas escalonadas, hovers, etc.) y aplicar las elegidas (requiere decisión previa).
  Componentes home: Hero, Services, Events, GalleryPreview
