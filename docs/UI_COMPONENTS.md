# UI COMPONENTS

# Prioridad de instrucciones

Este documento define el catálogo oficial de componentes reutilizables del proyecto.

Las referencias visuales podrán modificar su apariencia.

Su estructura, comportamiento y reutilización deberán mantenerse consistentes.

No crear variantes innecesarias.

---

# Reglas generales

Todo componente debe ser:

Reutilizable.

Responsivo.

Accesible.

Consistente.

Fácil de mantener.

No duplicar componentes.

Si uno existente puede adaptarse, reutilizarlo.

---

# Navbar

## Objetivo

Permitir navegación.

Guiar al usuario.

Mantener visible el CTA principal.

## Elementos

Logo

Links

CTA

Menú móvil

## Estados

Default

Sticky

Mobile

Desktop

---

# Hero

## Elementos

Eyebrow (opcional)

Título

Descripción

Botones

Elemento visual

## Reglas

Solo un H1.

Máximo dos CTAs.

El CTA principal debe destacar claramente.

---

# Badge

## Uso

Etiquetas.

Categorías.

Destacados.

## Estados

Default

Hover

---

# Primary Button

## Uso

Acción principal.

## Estados

Default

Hover

Focus

Disabled

Loading

## Reglas

Solo un botón primario dominante por sección.

---

# Secondary Button

## Uso

Acciones secundarias.

No competir visualmente con el principal.

---

# Ghost Button

## Uso

Acciones de baja prioridad.

---

# Card

## Uso

Agrupar contenido.

## Puede contener

Icono

Título

Descripción

CTA

Imagen

## Estados

Default

Hover

Selected (si aplica)

---

# Feature Card

Especialización de Card.

Orientada a mostrar funcionalidades.

Debe mantener la misma estructura base.

---

# Integration Card

Debe contener:

Logo

Nombre

Descripción opcional

---

# Industry Card

Debe contener:

Icono

Nombre

Descripción corta

---

# Timeline

## Elementos

Paso

Título

Descripción

Conector

## Reglas

Orden cronológico.

No utilizar más de seis pasos.

---

# Statistics Card

## Elementos

Número

Título

Descripción

Indicador visual

---

# Testimonial

## Elementos

Foto

Nombre

Cargo

Empresa

Comentario

---

# CTA Block

## Objetivo

Invitar a la conversión.

## Elementos

Título

Descripción

Botón principal

Botón secundario (opcional)

---

# Footer

## Elementos

Logo

Descripción

Links

Contacto

Redes sociales

Copyright

---

# Icon

Utilizar una única librería.

Mantener tamaño consistente.

No mezclar estilos Filled y Outline.

---

# Imagen

Las imágenes deben:

Optimizarse.

Tener alt descriptivo.

No ser únicamente decorativas.

---

# Reglas de reutilización

Antes de crear un componente nuevo, verificar:

¿Existe uno similar?

¿Puede adaptarse?

¿Mantiene consistencia?

¿Reduce duplicación?

Si la respuesta es sí, reutilizar.

---

# Estados interactivos

Todo componente interactivo debe contemplar:

Default

Hover

Focus

Active

Disabled

Loading (si aplica)

---

# Responsive

Todo componente debe diseñarse Mobile First.

No crear versiones duplicadas.

Adaptar mediante Tailwind.

---

# Accesibilidad

Todo componente debe cumplir:

Contraste suficiente.

Focus visible.

Navegación por teclado.

aria-label cuando sea necesario.

Texto legible.

---

# Reglas para la IA

Antes de crear cualquier componente:

1. Revisar si ya existe uno reutilizable.

2. Mantener el mismo sistema de espaciado.

3. Respetar el Design System.

4. Adaptar la apariencia según las referencias visuales proporcionadas por el usuario.

5. No modificar la estructura del componente sin una razón funcional.

El objetivo es construir un sistema de componentes consistente, no una colección de elementos independientes.