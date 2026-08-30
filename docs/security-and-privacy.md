[← Volver al índice](../README.md)

# Seguridad y privacidad

> Todos los datos mostrados en este documento son ficticios y se utilizan exclusivamente con fines de demostración profesional.

## Datos ficticios y separación del producto operativo

Este repositorio es un case study sanitizado. No contiene datos de clientes, leads reales, propiedades reales, credenciales ni configuración de producción. Las capturas son maquetas recreadas y los ejemplos de `examples/synthetic/` se construyeron expresamente para demostración. La separación es estricta: **ningún material publicado procede del entorno operativo**, y la sanitización forma parte del proceso de publicación — solo se publica documentación, diagramas y datos sintéticos, tras una revisión de que nada permite reconstruir la superficie operativa del producto real.

## Minimización de datos

El formulario de contacto solicita únicamente lo que el seguimiento comercial necesita: nombre, email, teléfono, rango de presupuesto, tipo de interés y mensaje. La analítica registra eventos de conversión con atribución de canal (UTM y referrer) y tipo de dispositivo — sin perfiles de usuario, sin cookies de tracking y sin trackers de terceros. Cada dato capturado responde a una pregunta concreta del embudo; no hay campos "por si acaso".

## Validación en el servidor, nunca solo en el cliente

La validación de cliente (hook dedicado del formulario) existe para la experiencia de usuario; la frontera de seguridad está en el servidor. Toda petición a `/api/contact` y `/api/analytics/events` se valida con esquemas Zod (`safeParse`) antes de cualquier otra lógica, con **transforms de sanitización** sobre la entrada. Las respuestas de error (`400`) no exponen detalle interno del sistema.

## Controles anti-abuso en la captación

La captación aplica defensa en profundidad con controles independientes:

- **Honeypot**: un campo oculto que los bots rellenan y los humanos no ven. Un envío con honeypot relleno se acusa con `202` — indistinguible de un éxito para el bot — pero **no persiste nada**.
- **Deduplicación**: una ventana temporal (email + teléfono + interés, 15 segundos) absorbe dobles envíos, respondiendo `202 {deduped:true}` sin escribir de nuevo.
- **Rate limiting**: límite de ventana fija por IP — 8 peticiones/minuto en contacto, 60 peticiones/minuto en eventos — con respuesta `429` y cabecera `Retry-After`.

El detalle operativo de cada control está en [conversion-and-lead-capture.md](conversion-and-lead-capture.md).

## Alcance conocido de los controles

El rate limiting es **en memoria y por instancia**: adecuado para el despliegue de este producto, no distribuido. La persistencia es un almacén JSON con cola de escritura, no una base de datos con control de acceso. Estos límites son decisiones documentadas (ver [engineering-decisions.md](engineering-decisions.md)), no omisiones.

## Qué no se publica y por qué

No se publican rutas internas, configuración de despliegue, nombres de variables de entorno, endpoints productivos ni el código operativo. La razón no es solo proteger propiedad intelectual: publicar la superficie de ataque exacta de un sistema en producción es una mala práctica de seguridad independientemente de lo bien construido que esté. Este showcase documenta decisiones y capacidades, no planos de construcción. Tampoco se publican leads reales ni la lógica propietaria concreta de captación y analítica, descrita aquí a nivel conceptual.

## Resumen de garantías

| Garantía | Cómo se cumple |
|---|---|
| Ningún dato real en el repositorio | Case study sanitizado; capturas y ejemplos sintéticos |
| La entrada siempre se valida en servidor | Esquemas Zod con `safeParse` y sanitización en ambas APIs |
| El spam no contamina los leads | Honeypot acusado con `202` sin persistir |
| Los dobles envíos no duplican leads | Dedupe por ventana temporal con `202 {deduped:true}` |
| El abuso por volumen se frena | Rate limit por IP con `429` + `Retry-After` |
| No hay tracking de terceros | Analítica propia de eventos con atribución first-touch |

## Documentos relacionados

- [conversion-and-lead-capture.md](conversion-and-lead-capture.md) — los controles en el pipeline
- [architecture.md](architecture.md) — dónde se aplican las fronteras de validación
- [engineering-decisions.md](engineering-decisions.md) — decisiones que refuerzan estos principios
