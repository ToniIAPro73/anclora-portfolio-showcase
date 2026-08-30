[← Volver al índice](../README.md)

# Captación y conversión — visión conceptual

> Todos los datos mostrados en este documento son ficticios y se utilizan exclusivamente con fines de demostración profesional.

Este documento describe el pipeline de captación y conversión a nivel conceptual: qué hace cada etapa y por qué existe. **No** describe la lógica propietaria concreta (cópias, textos comerciales, parámetros finos de umbrales ni reglas internas de cualificación de leads), que no forma parte de este repositorio.

## Principio rector

La captación es una frontera protegida: **todo lo que entra se valida, y nada dudoso se persiste**. Un envío sospechoso recibe una respuesta indistinguible del éxito (`202`) sin escribir nada; un envío legítimo recibe una confirmación clara (`201`). El visitante nunca ve los controles anti-abuso — el sistema los absorbe.

## Superficie de entrada

| Entrada | Vía | Contenido |
|---|---|---|
| Formulario de contacto | `POST /api/contact` | Nombre, email, teléfono, rango de presupuesto, interés (enum), mensaje y campo honeypot oculto |
| Eventos de conversión | `POST /api/analytics/events` | Tipo de evento (enum), atribución UTM, referrer y dispositivo |
| Clics en CTAs | Hero primario y secundario, contacto en navegación | Registrados como eventos de conversión |
| Ciclo de vida del formulario | Intento, éxito y error de envío | Registrados como eventos de conversión |

## Etapas del pipeline

```text
1. Visitante (con atribución de canal)
2. Contenido premium (la narrativa genera interés)
3. Señal de intención (clics en CTAs)
4. Formulario de contacto
5. Validación (cliente y servidor)
6. Controles anti-abuso (honeypot, rate limit, dedupe)
7. Lead aceptado (persistencia)
8. Evento de conversión
9. Atribución y analítica de embudo
```

### 1. Visitante

El visitante llega, a menudo, desde una campaña. En el **primer contacto**, el hook de tracking captura los parámetros UTM y el referrer, y los cachea durante la sesión; el tipo de dispositivo se deriva del user agent. Esa atribución acompañará a todos los eventos posteriores.

### 2. Contenido premium

La narrativa de la página — hero, blueprint, storytelling, inversión, residencias, ubicación — existe para construir interés. Desde el punto de vista del pipeline, esta etapa genera el contexto en el que aparece la intención; no produce datos.

### 3. Señal de intención

Los clics en los CTAs — hero primario y secundario, y contacto en la navegación — se registran como eventos de conversión. Son la primera medida del embudo: interés expresado antes de cualquier formulario.

### 4. Formulario de contacto

El visitante interesado completa el formulario: nombre, email, teléfono, rango de presupuesto, tipo de interés y mensaje. Un hook dedicado valida en cliente con feedback inmediato, y el envío tiene un timeout de 10 segundos para que el visitante nunca quede esperando una respuesta que no llega.

### 5. Validación

En servidor, `/api/contact` valida el payload con Zod (`safeParse`), aplicando transforms de sanitización. Un payload que no supera el esquema termina en `400` sin tocar la persistencia: la validación es la frontera, no un paso más.

### 6. Controles anti-abuso

Tres controles independientes, en defensa en profundidad:

- **Honeypot**: el campo oculto relleno delata al bot. Se responde `202` — para el bot, un éxito — y no se persiste nada.
- **Rate limiting**: ventana fija de 8 peticiones por minuto e IP. Al superarse, `429` con cabecera `Retry-After`.
- **Deduplicación**: la misma combinación (email + teléfono + interés) dentro de una ventana de 15 segundos se responde `202 {deduped:true}` sin escribir de nuevo — el doble clic o el reenvío no duplican el lead.

### 7. Lead aceptado

Solo un envío validado que supera los controles se persiste: `201`. La escritura pasa por la abstracción de almacén JSON con cola de escritura, que serializa las mutaciones (ver [architecture.md](architecture.md)).

### 8. Evento de conversión

El resultado del envío — intento, éxito o error — se registra como evento en `/api/analytics/events`, enviado con `navigator.sendBeacon` (fallback a `fetch`) para no perderse si la página se cierra o se navega. En servidor, los eventos se validan con Zod, se limitan por tasa (60 req/min) y se deduplican en una ventana de 2 segundos antes de persistir.

### 9. Atribución y analítica de embudo

Cada evento lleva la atribución capturada en la etapa 1. La operación de lectura de la API de analítica agrega el **embudo** (tasa de éxito de los envíos de formulario) y el **ranking de canales** por fuente UTM: las dos preguntas que el equipo comercial necesita responder — ¿convierte la página? ¿qué canal trae el interés?

## Códigos de respuesta

| Código | Significado |
|---|---|
| `201` | Lead o evento aceptado y persistido |
| `202` (honeypot) | Envío bot detectado; acusado como éxito, **sin persistir** |
| `202` (`deduped:true`) | Envío duplicado dentro de la ventana; absorbido sin escribir |
| `400` | Payload que no supera la validación Zod |
| `429` | Límite de tasa por IP superado; incluye `Retry-After` |
| `500` | Error interno, sin detalle expuesto al cliente |

## Qué no incluye este documento

A propósito, esta descripción omite la lógica propietaria: los textos comerciales y de conversión, la parametrización fina de los controles y cualquier regla interna de cualificación o enrutado de leads. Esas piezas son núcleo del producto operativo y no se incluyen en este repositorio de demostración. Tampoco describe la configuración de despliegue ni los destinos de persistencia del entorno real.

## Documentos relacionados

- [architecture.md](architecture.md) — las capas que implementan este pipeline
- [security-and-privacy.md](security-and-privacy.md) — garantías de los controles anti-abuso
- [testing-and-quality.md](testing-and-quality.md) — cómo se testean estos contratos
