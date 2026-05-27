# Landing SERCOTEC - Proyecto (Next.js + Tailwind)

Este repositorio contiene la landing page que recrea y adapta la referencia de SERCOTEC. El contenido y los componentes están pensados para un entorno de aprendizaje: claro, accesible y fácil de modificar.

Tono: esta documentación está escrita para estudiantes de Ingeniería en Informática — directa, sin jerga innecesaria y con pasos prácticos.

---

## Requisitos
- Node.js (16+ recomendado)
- npm (o yarn / pnpm)

## Scripts útiles
- `npm run dev` → arranca el servidor de desarrollo (http://localhost:3000).
- `npm run build` → construye para producción.
- `npm run start` → ejecuta la app construida.
- `npm run lint` → corre ESLint para detectar problemas de estilo/errores.

Ejemplo rápido:
```bash
npm install
npm run dev
```

## Estructura principal (rápida)
- `app/` – páginas y componentes (App Router de Next.js).
- `app/components/` – componentes reutilizables (Header, ServiceCard, ContactForm, TestimonialCarousel...).
- `public/` – imágenes y assets estáticos.
- `docs/` – documentación del proyecto (aquí está `development-guidelines.md`).

## Qué encontrarás en la documentación
- `docs/development-guidelines.md`: guía de buenas prácticas en lenguaje sencillo (nombres, estructura, accesibilidad, cómo trabajar en equipo).

## Buenas prácticas para commits (rápido y útil)
- Trabaja en ramas: `feature/nombre-corto`.
- Un commit = una idea o cambio coherente.
- Mensajes en español y en imperativo, por ejemplo: `Funcionalidad: carrusel de testimonios (UI)`.
- Si tienes muchos cambios, usa `git add -p` para añadir porciones (hunks) y crear varios commits pequeños.

Comandos útiles:
```bash
git add -p           # añadir por hunk
git add path/to/file # añadir archivo completo
git commit -m "Mensaje claro en español"
```

Si necesitas mover cambios entre ramas sin commitear:
```bash
git stash push -m "WIP: descripción"
git checkout feature/x
git stash pop
```

## Cómo probar en móvil
- Abre la app en `http://localhost:3000` y usa las herramientas de desarrollador del navegador (inspector) para simular un móvil.
- Revisa que los botones sean fáciles de tocar y que no haya scroll horizontal.

## Lint y chequeos antes de subir
- Corre `npm run lint` y arregla los problemas antes de hacer PR.

## Documentación y siguiente pasos (si quieres que lo haga yo)
- Puedo generar un `tailwind.config.js` con la paleta oficial, una colección de Postman para administrar contenido (testimonios, servicios) y/o integrar un CMS cuando lo decidas.

---
