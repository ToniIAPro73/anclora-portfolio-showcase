[← Volver al índice](../README.md)

# Testing y calidad

> Todos los datos mostrados en este documento son ficticios y se utilizan exclusivamente con fines de demostración profesional.

## Filosofía

En un producto cuya función es convertir interés en contactos comerciales, los fallos no son solo errores técnicos: son leads perdidos o leads falsos. La estrategia de calidad se concentra donde el riesgo está — los contratos de las APIs y el comportamiento del formulario — y se apoya en verificación estática continua y en una cadena de gates que ningún cambio puede saltarse.

## Niveles de tests

### Tests de rutas API

El núcleo de la suite (Vitest 4) ejercita los **contratos observables** de las API routes:

- **`/api/contact`**: aceptación (`201`), entrada inválida (`400`), límite de tasa (`429`), honeypot acusado sin persistir (`202`) y duplicado absorbido (`202`).
- **`/api/analytics/events`**: aceptación (`201`), entrada inválida (`400`), deduplicación (`202`) y las agregaciones de lectura (embudo y canales).

Los códigos de respuesta son el contrato del sistema; los tests los verifican como tal, no como detalle de implementación.

### Tests de hooks y utilidades

El hook del formulario de contacto se testea con Testing Library — validación de campos y reset tras el envío — junto con tests de las utilidades compartidas. Son tests rápidos, sin navegador ni infraestructura adicional.

## Gates de calidad

| Gate | Qué verifica | Dónde |
|---|---|---|
| `lint` | Estilo y errores estáticos | Local, pre-commit y CI |
| `type-check` | Tipado completo del proyecto (`tsc --noEmit`) | Local y CI |
| `test` | Suite Vitest (`vitest run`) | Local y CI |
| `build` | Build de producción (`next build`, salida standalone) | Local y CI |
| Lighthouse KPI | Umbrales de métricas web sobre el build | Script dedicado |
| Pre-commit | Lint y formato sobre los ficheros tocados (husky + lint-staged) | Local |
| CI | Cadena lint → type-check → test → build | Cada PR y push (GitHub Actions) |

La CI ejecuta la cadena completa en cada integración: ninguna rama entra con los checks en rojo. El gate de Lighthouse convierte el rendimiento — un requisito de producto en este segmento — en un invariante comprobado y no en una aspiración.

## Qué no se afirma aquí

Este documento no publica porcentajes de cobertura, benchmarks de rendimiento ni SLAs: esas cifras pertenecen al entorno operativo y cambian con cada iteración. Lo que el showcase demuestra es la **existencia de la maquinaria de calidad** — niveles de test, gates y CI —, no sus números de un momento dado.

## Documentos relacionados

- [engineering-decisions.md](engineering-decisions.md) — por qué esta estrategia
- [architecture.md](architecture.md) — las capas que estos tests cubren
- [conversion-and-lead-capture.md](conversion-and-lead-capture.md) — los contratos que la suite verifica
