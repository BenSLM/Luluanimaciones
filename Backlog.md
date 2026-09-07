# Backlog — Lulu Animaciones

Tareas derivadas de `qa lulu.txt`. Cada hallazgo del QA se convierte en una tarea accionable. Para las animaciones se usará **Motion.dev** (dependencia ya instalada).

> Nota: no se añaden mejoras que no estén en el QA. Las tareas [Ideas de diseño] requieren propuesta y decisión previa antes de implementar.

## 7. [Ideas de diseño] Sección "Animamos todo tipo de celebraciones"

- [ ] **Events — proponer y aplicar mejora de diseño**
  Las cards de `EVENT_TYPES` se ven planas/aburridas. Proponer ideas y aplicar la elegida (requiere decisión previa).
  `src/components/home/Events.tsx:16-28` · `src/data/events.ts`

---

## 8. [Ideas de diseño] Hero

- [ ] **Hero — proponer y aplicar mejora de diseño**
  Proponer mejoras visuales para el hero y aplicar la elegida (requiere decisión previa).
  `src/components/home/Hero.tsx`

---

## 9. [Ideas de diseño] Exceso de soft border radius

- [ ] **Global — revisar y variar el border radius**
  Todo usa `rounded-marca` (1.5rem). Proponer cómo variar/mezclar los radios y aplicar la elegida (requiere decisión previa).
  `src/index.css:22` (token `--radius-marca`) y componentes

---

## 10. Footer "hecho con ❤️" + eliminar páginas legales

- [ ] **Footer — reemplazar el bloque legal por "made with love ❤️"**
  Quitar "© {year} Lulu Animaciones. Todos los derechos reservados." y los enlaces de "Política de privacidad / Términos y condiciones"; poner el clásico "hecho con ❤️".
  `src/components/Footer.tsx:71-83`

- [ ] **Eliminar `PrivacyPage.tsx`**
  Borrar `src/pages/PrivacyPage.tsx`.

- [ ] **Eliminar `TermsPage.tsx`**
  Borrar `src/pages/TermsPage.tsx`.

- [ ] **App — quitar rutas de privacidad y términos**
  Eliminar las rutas `/privacidad` y `/terminos` y sus imports.
  `src/App.tsx:8-9,27-28`

- [ ] **Eliminar `LegalPage.tsx` (quedará sin uso)**
  Una vez fuera las páginas, eliminar el componente compartido si queda huérfano.
  `src/components/LegalPage.tsx`

---

## 11. Animaciones y vida a la página (Motion.dev)

- [ ] **Agregar animaciones con Motion.dev (dependencia ya instalada)**
  Además del scroll reveal (fade/slide al bajar), proponer más formas de dar vida a la página (entradas escalonadas, hovers, etc.) y aplicar las elegidas (requiere decisión previa).
  Componentes home: Hero, Services, Events, GalleryPreview
