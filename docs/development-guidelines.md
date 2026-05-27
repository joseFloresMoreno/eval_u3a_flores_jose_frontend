# Guía de buenas prácticas — Next.js + Tailwind (versión para estudiantes)

Esta guía está pensada para ayudarte como estudiante: explicaciones claras y consejos prácticos para trabajar en el proyecto.

---

## ¿Qué buscamos con esta guía?
- Mantener el proyecto ordenado y fácil de entender.
- Hacer que el sitio sea accesible (para personas y para buscadores).
- Evitar problemas comunes al trabajar en equipo.

## 1. Ideas sencillas para trabajar mejor
- Haz piezas pequeñas: crea componentes que hagan una sola cosa (por ejemplo: `Header`, `ServiceCard`).
- Si un componente necesita interacción (botones, animaciones), que esa parte sea la mínima necesaria.
- Escribe nombres claros: usa nombres que te digan qué hace algo.

## 2. Nombres y archivos (fácil)
- Archivos en el disco: usa guiones para separar palabras: `service-card.tsx`.
- Componentes React: usa mayúsculas al principio y sin guiones: `ServiceCard.tsx`.
- Variables y props en JavaScript/TypeScript: `camelCase` (ej.: `serviceTitle`).

## 3. Cómo organizar las carpetas (sencillo)
- `app/` → aquí van las páginas principales y los componentes.
- `app/components/` → todos los componentes reutilizables.
- `public/` → imágenes y logos.
- `styles/` → estilos globales (si usas CSS además de Tailwind).

Ejemplo corto:
```
app/
  page.tsx
  components/
    Header.tsx
    ServiceCard.tsx
public/
  logo.png
styles/
  globals.css
```

## 4. ¿Cuándo un componente debe ser "client"?
- Si el componente usa estado (por ejemplo `useState`) o efectos (`useEffect`) debe ser un "client component".
- Si sólo muestra datos sin interactuar, déjalo como "server component" (esto ayuda al rendimiento).

## 5. Tipos y seguridad (sin asustarte)
- Si usas TypeScript, define los tipos básicos para las props (esto evita errores). No hace falta que sean complicados.

Ejemplo simple:
```ts
type Service = { id: string; title: string; description: string }
```

## 6. Colores y Tailwind (práctico)
- Guarda los colores en `tailwind.config.js` (por ejemplo `primary` y `accent`) para usarlos siempre igual.
- Usa clases de Tailwind en `className` y evita repetir mucho código.

Consejo: define `primary: '#3ea4c9'` y `accent: '#ef4040'` en la configuración.

## 7. Imágenes
- Usa `next/image` cuando puedas — Next.js optimiza las imágenes por ti.
- Siempre pon un `alt` descriptivo en las imágenes.

## 8. Accesibilidad (lo mínimo que debes hacer)
- Usa etiquetas semánticas: `header`, `main`, `section`, `footer`.
- Añade `alt` a todas las imágenes.
- Asegúrate de que el texto tenga buen contraste respecto al fondo.
- Los botones y enlaces deben poder usarse con teclado (tab). Si usas componentes personalizados, añade `aria-*` cuando haga falta.

## 9. Experiencia de usuario (UX)
- En móvil, los botones deben ser cómodos de tocar (al menos ~44px).
- Muestra mensajes claros en formularios (qué está mal y qué falta).
- Evita que los elementos salten mientras carga la página (usa tamaños fijos para imágenes o placeholders).

## 10. Rendimiento (lo esencial)
- Carga menos JavaScript en el cliente si puedes: usa server components donde no necesites interacción.
- Marca como prioridad las imágenes importantes (hero) para que carguen primero.

## 11. Control de calidad (sencillo)
- Usa `eslint` y `prettier` si puedes — te ayudan a mantener todo uniforme.
- Antes de subir cambios, prueba que la página se vea bien en móvil y en escritorio.

## 12. Trabajo en equipo
- Haz ramas para cada tarea: `feature/nombre-corto`.
- Escribe commits claros: `Add testimonial carousel`.
- En el PR explica qué cambiaste y cómo probarlo.

## 13. CMS y contenido (idea práctica)
- Si vas a usar un CMS, elige uno que te permita crear "items" como Testimonios o Servicios.
- Mantén los modelos simples: cada testimonio debe tener `quote`, `author`, `role`.

## 14. Lista rápida antes de subir (checklist)
- ¿Pasa el linter? (si lo usas)
- ¿Se ve bien en móvil?
- ¿Los inputs y botones funcionan?
- ¿Las imágenes tienen `alt`?

---
