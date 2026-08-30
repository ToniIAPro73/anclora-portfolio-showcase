[← Volver al índice](../README.md)

# Arquitectura de la demo interactiva

> Todos los datos mostrados en este documento son ficticios y se utilizan exclusivamente con fines de demostración profesional.

## Visión general

Este repositorio incluye una **demo interactiva desplegable** construida con **Vite + React + TypeScript**. Es una aplicación completamente independiente del case study descrito en [docs/architecture.md](architecture.md): no comparte código operativo, servicios ni configuración con el entorno de producción.

Para ejecutarla en local:

```bash
npm install
npm run dev
```

Otros comandos disponibles: `npm run build` (build de producción en `dist/`), `npm run preview`, `npm run typecheck`, `npm run lint`.

## Estructura

```text
index.html              → punto de entrada (fuentes vía Google Fonts <link>)
vite.config.ts          → base relativa, sin variables de entorno
src/
  main.tsx              → bootstrap de React
  App.tsx               → composición de secciones
  data/translations.ts  → árboles i18n completos es / en
  lib/demo-context.tsx  → estado de idioma y registro de eventos simulados
  lib/conversion.ts     → eventos de conversión simulados (consola + estado local)
  lib/validation.ts     → validación del formulario en cliente
  components/           → Header, Hero, Residences, Investment, Location, ContactForm, Footer
  styles/main.css       → sistema visual hand-rolled (sin framework CSS)
```

## Datos sintéticos

Todo el contenido visible — el desarrollo ficticio "Mirador Azul · Mallorca", las tres residencias (Villa Almadrava, Ático Levante, Casa Pinar), los precios y las cifras de inversión — es sintético y vive en `src/data/translations.ts`. Las cifras de inversión se etiquetan explícitamente como ficticias en la propia interfaz.

## Interacciones simuladas

- **Envío del formulario**: el formulario de contacto valida en cliente (nombre, email, teléfono, presupuesto, mensaje) con estados de error accesibles (`role="alert"`, `aria-invalid`, `aria-describedby`) y un estado de éxito. El envío se simula con estado local (`setTimeout`); **nunca se realiza ninguna petición de red**.
- **Eventos de conversión**: los clics en CTAs y el ciclo de vida del formulario (intento, error, éxito) generan eventos simulados que se muestran en un registro visible en la sección de contacto y se emiten en consola con el prefijo `[demo:conversion-event:simulated]`. No existe analítica real.
- **i18n**: el conmutador ES/EN cambia todo el contenido al instante y sincroniza `document.lang`.

## Lo que esta demo NO representa

- No contiene ni reproduce el código fuente operativo completo del proyecto real.
- No incluye backend, APIs, persistencia, honeypot, rate limiting ni deduplicación — esas capacidades se describen conceptualmente en [docs/conversion-and-lead-capture.md](conversion-and-lead-capture.md), pero aquí no están implementadas.
- No usa variables de entorno, credenciales, servicios externos ni endpoints de producción.
- No contiene datos de clientes ni contenido comercial real.
