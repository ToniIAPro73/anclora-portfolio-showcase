[← Volver al índice](../README.md)

# Anclora Portfolio — Visión general del producto

> Todos los datos mostrados en este documento son ficticios y se utilizan exclusivamente con fines de demostración profesional.

## El problema

En el segmento del Real Estate de lujo, la decisión de compra empieza mucho antes de la primera visita física: empieza en la web. El comprador de una propiedad premium evalúa el desarrollo por su presentación digital, y una experiencia mediocre — genérica, lenta, rota en móvil — descuenta valor percibido a un producto que cuesta millones.

El segundo problema aparece cuando el interés existe: convertirlo en un contacto útil. Un formulario sin validación produce leads incompletos; sin protección frente a bots y duplicados, el canal se llena de ruido; y sin tracking ni atribución, el equipo comercial no sabe qué canales generan interés real ni dónde se pierde al visitante en el recorrido.

## Audiencia

- **Visitante comprador**: persona con capacidad adquisitiva alta, a menudo internacional, que explora el desarrollo desde cualquier dispositivo y en su idioma (español o inglés). Espera una experiencia a la altura del producto.
- **Equipo comercial del desarrollo**: necesita leads limpios, validados y con contexto de atribución para priorizar el seguimiento.

## Contexto

El producto presenta un **desarrollo residencial de lujo ficticio en Mallorca**: residencias, precios, cifras de inversión y contenidos comerciales inventados, construidos para sostener un caso de estudio realista sin exponer ningún proyecto real. La ficción es deliberada: lo que se demuestra es la capacidad de diseño e ingeniería, no un activo comercial.

## Propuesta de valor

Anclora Portfolio trata la web del desarrollo como lo que es en este segmento: **el primer activo de venta**. El principio rector es:

> **Narrativa premium que convierte.** Cada sección existe para mover al visitante un paso más hacia el contacto, y cada contacto llega validado, protegido y medido.

En la práctica:

1. una experiencia visual cuidada y responsive que sostiene el posicionamiento premium;
2. una interfaz completamente bilingüe (es/en), sin fricción para el comprador internacional;
3. un formulario de contacto validado en cliente y servidor;
4. controles anti-abuso que mantienen limpio el canal de captación;
5. tracking de conversión con atribución, para que el interés sea medible.

## La experiencia premium

La página se organiza como una narrativa de una sola pantalla desplazable, con navegación superior y un sidebar flotante siempre disponible:

- **Hero inmersivo** — la primera impresión, con imagen prioritaria y CTAs principales.
- **Blueprint** — la visión arquitectónica del desarrollo.
- **Storytelling** — la historia y el carácter del lugar.
- **Inversión** — el argumento de valor para el comprador-inversor.
- **Features** — las prestaciones de las residencias.
- **Galería** — el recorrido visual.
- **Residencias** — las tipologías disponibles.
- **Ubicación** — el contexto en Mallorca.
- **FAQs** — respuesta a las objeciones frecuentes.
- **Contacto** — el formulario de captación.
- **Footer** — cierre con enlaces y contexto.

Todas las secciones por debajo del hero se cargan de forma diferida (`next/dynamic`) y se montan tras la primera interacción del visitante, para que la primera impresión sea inmediata (ver [architecture.md](architecture.md)).

## Customer journey

```text
1. Atracción: el visitante llega desde una campaña o búsqueda (con UTM)
2. Exploración: recorre hero, blueprint, storytelling y galería
3. Evaluación: residencias, inversión, ubicación y FAQs
4. Interés: clics en CTAs del hero, la navegación o el sidebar
5. Contacto: completa y envía el formulario
6. Conversión: el lead queda validado, protegido y persistido
7. Medición: el evento se registra con su atribución de canal
```

## Límites de este showcase

Este repositorio es un **case study reducido**, no el producto operativo:

- todas las propiedades, precios y cifras de inversión son **ficticios**;
- no contiene el **código fuente operativo completo** — la documentación describe decisiones y capacidades verificadas;
- no contiene datos de clientes, leads reales, credenciales ni configuración de producción;
- la lógica propietaria sensible de captación y analítica se describe a nivel conceptual (ver [conversion-and-lead-capture.md](conversion-and-lead-capture.md)).

## Documentos relacionados

- [architecture.md](architecture.md) — cómo está construida la experiencia
- [conversion-and-lead-capture.md](conversion-and-lead-capture.md) — el pipeline de captación en detalle
- [engineering-decisions.md](engineering-decisions.md) — por qué se decidió así
