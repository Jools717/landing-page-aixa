# DESIGN_SYSTEM.md

# Prioridad de instrucciones

Este documento define el sistema de diseño del proyecto.

La dirección artística podrá modificarse mediante referencias visuales proporcionadas por el usuario.

Las reglas aquí definidas buscan mantener consistencia estructural y reutilización de componentes.

---

# AIXA Design System

Versión: 1.0

Este documento define el sistema visual completo de la Landing Page de AIXA.

Todas las decisiones de diseño deberán respetar estas reglas para garantizar consistencia visual, escalabilidad y una experiencia premium.

Las reglas de este documento tienen prioridad sobre cualquier sugerencia generada por la IA.

---

# 1. Filosofía

El diseño debe transmitir una empresa de Inteligencia Artificial seria, moderna y orientada al sector empresarial.

La tecnología debe sentirse elegante, no futurista.

La simplicidad tiene prioridad sobre la decoración.

Cada elemento debe tener un propósito.

Eliminar cualquier elemento puramente ornamental que no aporte valor.

---

# 2. Identidad visual

La interfaz debe comunicar:

• Tecnología

• Confianza

• Innovación

• Productividad

• Precisión

• Escalabilidad

• Profesionalismo

Nunca debe sentirse:

• Infantil

• Gamer

• Cyberpunk

• Ciencia ficción

• Startup improvisada

---

# 3. Inspiración

Inspirarse únicamente en la calidad visual de empresas como:

• OpenAI

• Anthropic

• Linear

• Vercel

• Stripe

• Notion AI

No copiar interfaces.

No replicar componentes.

Solo tomar inspiración en composición, espaciado y jerarquía visual.

---

# 4. Unidades

Priorizar siempre las utilidades oficiales de Tailwind CSS.

Cuando sea necesario escribir CSS personalizado:

• rem para espaciados

• rem para radios

• rem para tamaños

• px únicamente para:

- bordes
- líneas
- blur
- sombras
- detalles visuales

Evitar valores arbitrarios.

Incorrecto:

w-[347px]

Correcto:

w-full

max-w-xl

p-8

gap-6

---

# 5. Layout

Container máximo:

1280px

Container recomendado:

mx-auto

max-w-7xl

Padding lateral:

Mobile

1.5rem

Tablet

2rem

Desktop

2rem

Large Desktop

3rem

Nunca pegar contenido a los bordes.

---

# 6. Sistema de espaciado

Utilizar siempre una escala basada en Tailwind.

## Escala

XS

1rem

SM

1.5rem

MD

2rem

LG

3rem

XL

4rem

2XL

5rem

3XL

6rem

4XL

7rem

5XL

8rem

---

## Separación entre elementos

Título → descripción

1rem

Descripción → botones

2rem

Cards

2rem

Grid

2rem

---

## Separación entre bloques

4rem

---

## Separación entre secciones

Mobile

5rem

Tablet

6rem

Desktop

7rem

Hero

8rem

Utilizar preferiblemente:

py-20

py-24

py-28

py-32

---

# 7. Tipografía

Fuente principal:

Inter

Alternativa:

Manrope

No utilizar más de una familia tipográfica.

---

## Escala

Hero

Clamp recomendado

H1

Clamp recomendado

H2

Clamp recomendado

H3

Clamp recomendado

Body

18px

Small

16px

Caption

14px

Siempre utilizar clamp() para títulos principales.

Todos los títulos (H1, H2, H3, etc.) deben utilizar un peso de fuente Medium (font-medium en Tailwind).

---

# 8. Colores

## Background

Primary

#050816

Secondary

#0B1120

Surface

#111827

Glass

rgba(255,255,255,.05)

Border

rgba(255,255,255,.08)

Divider

rgba(255,255,255,.10)

## Alternancia de Secciones

Para evitar que la página se sienta muy oscura, las secciones deben estar intercaladas alternando entre el fondo actual (oscuro) y un fondo más claro. 
El orden debe ser:
1. Hero: Fondo oscuro
2. Siguiente sección: Fondo claro
3. Siguiente: Fondo oscuro
4. Siguiente: Fondo claro
Y así sucesivamente.

---

## Primario

#2563EB

Hover

#1D4ED8

Light

#60A5FA

---

## Texto

Heading

#FFFFFF

Body

#CBD5E1

Muted

#94A3B8

Disabled

#64748B

---

## Estados

Success

#22C55E

Warning

#F59E0B

Error

#EF4444

---

# 9. Bordes

Cards

1.25rem

Botones

0.875rem

Inputs

0.875rem

Badges

9999px

---

# 10. Sombras

Utilizar únicamente sombras suaves.

No utilizar sombras negras pesadas.

El glow deberá utilizar el color primario con baja opacidad.

---

# 11. Glassmorphism

Muy ligero.

Blur

12px

Opacidad máxima

5%

Nunca superior al 10%.

---

# 12. Gradientes

Máximo tres colores.

Priorizar:

Background oscuro

↓

Azul profundo

↓

Azul brillante

No utilizar gradientes multicolor.

---

# 13. Iconografía

Biblioteca:

Lucide Icons

Siempre outline.

Nunca mezclar estilos.

---

# 14. Botones

Botón Primario

Fondo sólido.

Hover con glow ligero.

Botón Secundario

Glass.

Borde.

Hover con iluminación.

Botón Ghost

Solo texto.

Hover con fondo translúcido.

---

# 15. Cards

Todas las cards deberán compartir:

Padding

Border

Glass

Hover

Radio

Nunca crear variantes innecesarias.

---

# 16. Animaciones

Duración:

300ms

500ms

700ms

Priorizar:

Opacity

Translate

Scale

Blur

Glow

Evitar:

Bounce

Rotate

Zoom exagerado

Animaciones infinitas

Excepto fondos decorativos.

---

# 17. Representación de IA

La Inteligencia Artificial deberá representarse mediante:

Mesh Gradients

Glow

Patrones geométricos

Líneas

Partículas

Conexiones

Cristales

Elementos abstractos

Nunca utilizar:

Robots

Androides

Cerebros

Microchips gigantes

Circuitos cliché

---

# 18. Responsive

Diseñar Mobile First.

No duplicar componentes.

Adaptar mediante clases responsive de Tailwind.

---

# 19. Accesibilidad

Mantener:

Contraste AA

Jerarquía H1-H6

Focus visible

Alt en imágenes

aria-label cuando aplique

---

# 20. Componentes base

Todos los componentes deberán reutilizar los mismos principios.

Componentes disponibles:

Container

Section

Badge

Primary Button

Secondary Button

Ghost Button

Card

Glass Card

Feature Card

Timeline

CTA

Footer

Navbar

No crear nuevos componentes si uno existente puede reutilizarse.

---

# 21. Regla de consistencia

Antes de implementar cualquier componente, validar:

¿Respeta la identidad visual?

¿Mantiene el sistema de espaciado?

¿Utiliza la paleta oficial?

¿Reutiliza componentes existentes?

¿Se siente premium?

Si alguna respuesta es negativa, replantear la implementación antes de escribir código.