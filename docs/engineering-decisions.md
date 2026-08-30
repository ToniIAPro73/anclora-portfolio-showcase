[← Volver al índice](../README.md)

# Decisiones de ingeniería

Este documento recoge las decisiones técnicas principales de Anclora Portfolio y su motivación. El objetivo es explicar el *porqué*, no solo el *qué*.

## Arquitectura de componentes por secciones

La página se compone de secciones independientes (hero, blueprint, storytelling, inversión, features, galería, residencias, ubicación, FAQs, contacto) en lugar de bloques monolíticos.

- **Beneficio**: cada sección evoluciona, se testea y se carga de forma aislada; el orden narrativo de la página es composición, no código entrelazado.
- **Coste**: cierta disciplina extra para mantener consistencia visual entre secciones, resuelta con el sistema de diseño (Tailwind CSS 4 + shadcn/Radix UI).

## Capa de traducción unificada custom

En lugar de una librería de i18n con routing por locale, el proyecto usa un **único módulo de traducciones** con los árboles completos `es` y `en`, y un hook de estado de idioma con detección del idioma del navegador, persistencia en localStorage y sincronización de `document.lang`.

- **Beneficio**: una sola URL sirve ambos idiomas — adecuado para una experiencia de una página —, el cambio de idioma es instantáneo y no hay duplicación de rutas que mantener.
- **Coste**: la cobertura de claves entre idiomas depende de la disciplina del módulo único, no de una herramienta externa.

## Carga diferida de secciones

Todas las secciones por debajo del hero se importan con `next/dynamic` y **no se montan hasta la primera interacción** del visitante (scroll, toque o tecla).

- **Beneficio**: la primera impresión — el hero — carga con el mínimo JavaScript posible, lo que protege tanto el rendimiento percibido como las métricas de Web Vitals en un segmento donde la primera impresión es el producto.
- **Coste**: una capa adicional de orquestación de montaje que hay que mantener y testear.

## Validación Zod server-side con sanitización

El formulario se valida dos veces: un hook dedicado en cliente con comprobaciones inmediatas para feedback rápido, y Zod con `safeParse` en servidor como frontera real. El esquema cubre nombre, email, teléfono, rango de presupuesto, interés (enum) y mensaje, con **transforms de sanitización** aplicados a la entrada.

- **Beneficio**: el cliente nunca es la frontera de confianza; ningún dato mal formado o sin sanitizar llega a la persistencia.
- **Coste**: el esquema existe conceptualmente en dos sitios; se acepta porque el contrato de servidor es el autoritativo.

## Honeypot + dedupe + rate limiting como defensa en profundidad

La captación se protege con tres controles **independientes** en `/api/contact`:

- un **campo honeypot** oculto que, al venir relleno, se acusa con `202` sin persistir nada;
- una **deduplicación por ventana temporal** (email + teléfono + interés, 15 segundos) que responde `202 {deduped:true}`;
- un **rate limit por IP** de ventana fija (8 peticiones/minuto) que responde `429` con `Retry-After`.

- **Beneficio**: ningún control único es la última línea; un bot que supera el honeypot choca con el rate limit, y un doble clic legítimo se resuelve sin ruido ni errores visibles para el usuario.
- **Coste**: el rate limiting en memoria es adecuado para una instancia, no para un despliegue multi-instancia — una limitación conocida y aceptada.

## Persistencia JSON intercambiable

Las consultas y los eventos se persisten a través de una **abstracción de almacén basada en ficheros JSON** con cola de escritura que serializa las mutaciones.

- **Beneficio**: el producto no acarrea la operación de una base de datos para un volumen de captación acotado, y la interfaz del almacén permite sustituir la implementación (una base de datos real) sin tocar las rutas.
- **Coste**: no ofrece consultas complejas ni concurrencia multi-proceso; la cola de escritura existe precisamente para acotar ese riesgo dentro de su diseño.

## sendBeacon para los eventos de conversión

Los eventos de analítica se envían con `navigator.sendBeacon`, con fallback a `fetch`.

- **Beneficio**: el evento sobrevive a la navegación o al cierre de la página — exactamente cuando ocurren muchas conversiones — sin telemetría de terceros.
- **Coste**: `sendBeacon` no permite leer la respuesta; por eso el contrato de eventos es fire-and-forget y los fallos se tratan como no bloqueantes para el usuario.

## Atribución first-touch de UTM y referrer

Los parámetros UTM y el referrer se capturan **en el primer contacto** del visitante y se cachean por sesión; cada evento posterior lleva esa atribución.

- **Beneficio**: responde a la pregunta de negocio relevante — qué canal trajo al visitante — con un modelo simple, determinista y fácil de auditar.
- **Coste**: no modela recorridos multi-canal (last-touch, multi-touch); se acepta porque la pregunta de negocio es de origen, no de recorrido completo.

## Vitest sobre las rutas API

La suite (Vitest 4 + Testing Library) concentra su peso en los **contratos de las API routes**: el flujo de contacto se testea para `201`, `400`, `429`, `202` honeypot y `202` duplicado; la de analítica para `201`, `400`, `202` y las agregaciones. A ello se suman tests del hook del formulario (validación y reset) y de utilidades.

- **Beneficio**: los tests cubren el comportamiento observable del sistema — los códigos de respuesta son el contrato — y corren rápido en local y en CI.
- **Coste**: no hay tests E2E de navegador; los flujos críticos se cubren a nivel de API y hook, y el build actúa como verificación de integración.

## Lo que se evitó deliberadamente

- **Routing por locale (p. ej. next-intl)**: duplicaría rutas para una experiencia de una sola página; la capa unificada con cambio instantáneo encaja mejor con el producto.
- **Base de datos real en el showcase**: el almacén JSON con cola de escritura cubre el volumen y mantiene el sistema operable sin infraestructura; la abstracción deja el camino abierto.
- **Tracking de terceros**: una herramienta de analítica externa añadiría dependencia, cookies y superficie de privacidad para responder preguntas que el pipeline propio ya responde.
- **Gestor de estado global**: el estado de idioma y de formulario vive en hooks dedicados; un store global sería complejidad sin beneficio a esta escala.

## Documentos relacionados

- [architecture.md](architecture.md) — dónde vive cada decisión
- [conversion-and-lead-capture.md](conversion-and-lead-capture.md) — los controles anti-abuso en contexto
- [testing-and-quality.md](testing-and-quality.md) — cómo se verifican estas decisiones
