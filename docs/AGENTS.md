# AGENTS.md

# Prioridad de instrucciones

Este documento define las reglas de desarrollo del proyecto.

Orden de prioridad:

1. Solicitud actual del usuario.
2. Referencias visuales proporcionadas por el usuario.
3. Este documento.
4. Resto de la documentación.

Las referencias visuales podrán modificar la apariencia del proyecto, pero nunca deberán comprometer la calidad del código, el rendimiento, la accesibilidad o la reutilización de componentes.

---

# Iconografía

La única librería de iconos permitida en el proyecto será Lucide Icons.

---

# Reglas generales del proyecto

Estas instrucciones tienen prioridad sobre cualquier sugerencia generada por la IA.

El objetivo es mantener un código limpio, consistente, reutilizable, escalable y fácil de mantener durante todo el desarrollo de la Landing Page de AIXA.

Si existe alguna duda entre varias implementaciones posibles, siempre se deberá elegir la alternativa más simple, legible y eficiente.

---

# Stack tecnológico

Utilizar únicamente:

- HTML5
- Tailwind CSS
- JavaScript Vanilla

No utilizar:

- React
- Vue
- Angular
- Alpine.js
- jQuery
- Bootstrap
- Frameworks CSS adicionales

---

# Estructura del proyecto

La landing estará compuesta por un único archivo HTML.

No crear múltiples páginas.

No dividir el proyecto en componentes físicos.

Toda la estructura deberá mantenerse organizada mediante comentarios claramente identificados.

Ejemplo:

<!-- ========================================= -->
<!-- HERO -->
<!-- ========================================= -->

---

# HTML

Priorizar HTML limpio y semántico.

Utilizar únicamente etiquetas semánticas cuando realmente aporten significado:

header

main

section

nav

footer

article

Evitar divs innecesarios.

No crear niveles de anidación excesivos.

Mantener la estructura lo más plana posible.

---

# Tailwind CSS

Todo el diseño deberá realizarse utilizando Tailwind CSS.

No crear hojas CSS externas.

Todo el CSS personalizado deberá escribirse exclusivamente dentro de:

<style>

...

</style>

No utilizar atributos style="" inline.

No sobrescribir clases de Tailwind salvo cuando sea estrictamente necesario.

Priorizar siempre las utilidades nativas de Tailwind.

---

# CSS personalizado

Crear CSS únicamente para:

Variables

Animaciones

Keyframes

Gradientes personalizados

Glow

Glassmorphism

Componentes imposibles de construir únicamente con Tailwind

No utilizar CSS para reemplazar utilidades de Tailwind.

---

# JavaScript

Todo el JavaScript deberá permanecer dentro del mismo archivo HTML.

Ubicar siempre el script antes del cierre del body.

No utilizar librerías externas.

No utilizar dependencias innecesarias.

Utilizar funciones pequeñas.

Evitar variables globales.

Priorizar:

const

let

Funciones reutilizables

Código modular mediante funciones.

---

# Responsive

Aplicar enfoque Mobile First.

Utilizar exclusivamente los breakpoints oficiales de Tailwind.

No duplicar componentes para desktop y mobile.

El mismo componente deberá adaptarse mediante clases responsive.

---

# Componentes

Todo elemento repetitivo deberá construirse como un componente reutilizable mediante HTML consistente.

Ejemplos:

Botones

Cards

Badges

Etiquetas

Secciones

Timeline

Feature Cards

CTA

No copiar código repetido innecesariamente.

---

# Sistema visual

Mantener consistencia en:

Espaciados

Bordes

Sombras

Gradientes

Iconografía

Tipografía

Radios

Glow

No crear estilos diferentes para elementos equivalentes.

---

# Diseño

La interfaz debe transmitir:

Tecnología

Confianza

Elegancia

Minimalismo

Profesionalismo

No debe sentirse experimental.

Debe parecer una empresa consolidada.

---

# Estilo gráfico

Inspirarse visualmente en empresas como:

OpenAI

Anthropic

Vercel

Linear

Stripe

Notion AI

No copiar diseños.

Únicamente tomar inspiración estética.

---

# Inteligencia Artificial

Representar la IA mediante recursos abstractos como:

Gradientes

Glow

Patrones geométricos

Redes neuronales

Conexiones

Mesh gradients

Líneas

Partículas

Glassmorphism ligero

Evitar:

Robots

Cerebros digitales

Androides

Circuitos exagerados

Iconografía cliché de IA

---

# Animaciones

Las animaciones deben ser elegantes y discretas.

Priorizar:

Fade

Opacity

Translate

Blur

Scale

Glow

Hover

Evitar:

Bounce

Rotate continuos

Animaciones invasivas

Elementos distractores

Duración recomendada:

300 ms a 700 ms

---

# Rendimiento

Priorizar rendimiento antes que efectos visuales.

Evitar:

DOM innecesario

Animaciones pesadas

Filtros costosos

JavaScript innecesario

Reducir al mínimo la cantidad de nodos HTML.

---

# Accesibilidad

Utilizar:

aria-label

alt

Contraste suficiente

Jerarquía correcta de encabezados

Estados visibles de focus

Botones accesibles

---

# SEO

Mantener buenas prácticas SEO.

Utilizar:

title

meta description

Open Graph

Jerarquía H1-H2-H3

Texto indexable

Imágenes optimizadas

Alt descriptivos

---

# Calidad del código

Todo código generado debe cumplir:

Legible

Ordenado

Comentado por secciones

Sin código muerto

Sin clases sin utilizar

Sin estilos duplicados

Sin JavaScript innecesario

---

# Convención de comentarios

Separar cada bloque mediante comentarios claros.

Ejemplo:

<!-- ========================================= -->
<!-- HERO -->
<!-- ========================================= -->

<!-- ========================================= -->
<!-- BENEFICIOS -->
<!-- ========================================= -->

<!-- ========================================= -->
<!-- CTA -->
<!-- ========================================= -->

---

# Metodología de desarrollo

Desarrollar siempre por etapas.

Nunca construir toda la landing en una sola respuesta.

Cada solicitud deberá enfocarse en una única sección o componente.

Antes de crear nuevos estilos, verificar si ya existe un componente reutilizable.

Si una propuesta afecta la consistencia del proyecto, priorizar la coherencia visual sobre la creatividad.

---

# Flujo de trabajo obligatorio

Antes de construir una nueva sección:

1. Analizar el contexto del proyecto.
2. Reutilizar componentes existentes.
3. Mantener consistencia visual.
4. Evitar duplicación de código.
5. Validar responsive.
6. Optimizar el HTML.
7. Optimizar el rendimiento.
8. Mantener coherencia con el resto de la landing.

Nunca generar una sección aislada sin considerar el diseño global de toda la página.

---

# Prioridad de decisiones

En caso de existir varias alternativas, siempre priorizar:

1. Simplicidad
2. Legibilidad
3. Reutilización
4. Rendimiento
5. Accesibilidad
6. Responsive
7. Estética
8. Animaciones

La calidad del código tiene prioridad sobre la cantidad de efectos visuales.

