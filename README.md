# Modernización Sitio SERCOTEC — Proyecto de Landing

Este repositorio es una propuesta de modernización para el sitio de Centros de Negocios Sercotec. El objetivo es ofrecer una landing clara, accesible y fácil de mantener, orientada a comunicar servicios, testimonios y contacto para pymes.


Principios del proyecto:
- Enfoque en contenido: priorizar la legibilidad y la navegación rápida.
- Accesibilidad y responsive: diseñado para funcionar bien en móviles y escritorio.
- Componentes reutilizables: facilitar futuras extensiones y un eventual CMS.

Qué incluye:
- Secciones: Hero, Servicios, Testimonios, Nosotros, Preguntas frecuentes y Contacto.
- Componentes interactivos: carrusel de testimonios, tarjetas de servicios y formulario de contacto con validación.
- Datos locales (JSON) y endpoints internos para facilitar la transición a un CMS.


***

## Estructura del proyecto (detallada)
- `app/page.tsx` — punto de entrada de la landing; compone las secciones.
- `app/layout.tsx` + `app/globals.css` — layout global y tipografía.
- `app/components/` — componentes reutilizables:
	- `Header.tsx` — header sticky y navegación.
	- `ServiceCard.tsx` — tarjeta de servicio (propiedades: `title`, `excerpt`, `image`), dispara `CustomEvent('select-service')` al clicar el CTA.
	- `ContactForm.tsx` — componente cliente con validación (prop: `servicios: string[]`) y escucha `select-service` para preseleccionar servicio.
	- `TestimonialCarousel.tsx` — carrusel accesible (prop: `items`).
	- `SectionTitle.tsx` — título estándar para secciones.
- `data/` — JSON con `about.json`, `services.json`, `faqs.json`.
- `app/api/*/route.ts` — endpoints internos que sirven los JSON (útiles para migrar a CMS).

## Instrucciones de instalación

1. Instala dependencias:
```bash
npm install
```
2. Ejecuta en modo desarrollo:
```bash
npm run dev
```

## Guía de uso de los componentes

- `ServiceCard`
```tsx
<ServiceCard title="Asesoría financiera" excerpt="Diagnóstico y plan" image="/path.jpg" />
```
Comportamiento: muestra botón `Contáctanos` que dispara `CustomEvent('select-service', { detail: title })`.

- `ContactForm` (cliente)
```tsx
<ContactForm servicios={["Asesoría financiera", "Talleres"]} />
```
Comportamiento: formulario con `name`, `email`, `servicio` (select) y `message`. Escucha el evento `select-service` para rellenar `servicio` automáticamente.

- `TestimonialCarousel`
```tsx
<TestimonialCarousel items={[{quote: 'Gran apoyo', author: 'Ana'}]} />
```
Comportamiento: muestra un testimonio a la vez, autoplay y navegación por teclado.

- `SectionTitle`
```tsx
<SectionTitle title="Servicios" eyebrow="Lo que ofrecemos" variant="dark" />
```
Usar para homogeneizar títulos de sección y la paleta de colores.

## Ejemplos rápidos
- Importar datos y renderizar sección de servicios en `app/page.tsx`:
```tsx
import services from '../data/services.json';
<ServicesSection services={services} />
```


## Colaboración y flujo sugerido:

- Trabaja en ramas: `feature/nombre`.
- Commits claros y pequeños; PR para revisión.
- Mantén las piezas de contenido en `data/`.


Contacto del proyecto:
- Autor: José Flores — Estudiante de Ingeniería en Informática. Pruebas y mejoras bienvenidas.