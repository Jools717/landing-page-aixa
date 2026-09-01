# DESIGN_SYSTEM.md

# Prioridad de instrucciones

Este documento define el sistema de diseño oficial de la Landing Page de AIXA.

La dirección artística y componentes aquí documentados reflejan el estado real, la identidad visual y las decisiones estilísticas implementadas en el proyecto.

Todas las decisiones de diseño y futuros desarrollos deberán respetar estas reglas para garantizar consistencia visual, escalabilidad y una experiencia premium de alto impacto.

---

# AIXA Design System

**Versión:** 2.0  
**Enfoque:** B2B Corporativo Premium & Inteligencia Artificial Empresarial

---

# 1. Filosofía de Diseño

El diseño transmite una empresa de Inteligencia Artificial sólida, sofisticada y orientada al sector empresarial.

- **Tecnología elegante, no futurista ni cliché:** Evitar robots, cerebros digitales o circuitos de ciencia ficción.
- **Jerarquía y contraste equilibrado:** Alternancia inteligente entre lienzos oscuros inmersivos y lienzos claros de alta legibilidad.
- **Interactividad funcional:** Micro-interacciones vivas (linterna interactiva/flashlight, efectos de resplandor hover, animaciones de tarjetas 3D y órbitas) que refuerzan la percepción de inteligencia y dinamismo.
- **Simplicidad con acabado boutique:** Cada elemento visual tiene un propósito funcional o narrativo para la conversión.

---

# 2. Identidad Visual

La interfaz comunica:
- **Autoridad y Confianza Empresarial**
- **Innovación Tecnológica Aplicada**
- **Productividad y Automatización Real**
- **Precisión Corporativa y Escalabilidad**
- **Atención Boutique Personalizada**

Nunca debe sentirse:
- Infantil o lúdica
- Gamer, Cyberpunk o Sci-Fi ficticio
- Startup improvisada o plantilla genérica

---

# 3. Inspiración Visual

Inspirado en la excelencia visual y estándares de diseño de:
- **OpenAI & Anthropic:** Minimalismo, tipografía cuidada, resplandores controlados.
- **Linear & Vercel:** Acabados oscuros profundos, micro-bordes refinados, interactividad ágil.
- **Stripe:** Claridad en la presentación de características, diagramación y contrastes armónicos.

---

# 4. Tipografía

La landing utiliza una única familia tipográfica cargada localmente para garantizar independencia de red y máximo rendimiento.

### Fuente Principal: Fredoka
- **Familia:** `'Fredoka', sans-serif`
- **Archivos Locales:** `media/fonts/` (`Fredoka-Light.ttf`, `Fredoka-Regular.ttf`, `Fredoka-Medium.ttf`, `Fredoka-SemiBold.ttf`, `Fredoka-Bold.ttf`)
- **Pesos Disponibles:**
  - 300 (Light)
  - 400 (Regular)
  - 500 (Medium) — **Peso obligatorio para todos los títulos y encabezados (H1-H6)**
  - 600 (SemiBold) — Botones, badges destacados y tooltips
  - 700 (Bold) — Nombres de tarjetas, métricas y llamados numéricos

### Escala Tipográfica
- **Hero H1:** `text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]`
- **Section H2:** `text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.15]`
- **Card H3 / Subtítulos:** `text-xl md:text-2xl font-medium / font-bold`
- **Body:** `text-base md:text-lg text-body (oscuro) / text-slate-600 (claro)`
- **Small / Meta:** `text-xs md:text-sm text-muted (oscuro) / text-slate-500 (claro)`
- **Badges / Tags:** `text-xs uppercase font-semibold tracking-wider`

---

# 5. Paleta de Colores y Tokens

### 5.1. Colores de Marca (Electric Cobalt & Royal Blue)
- **Primary:** `#0D50E8` (Cobalto eléctrico vibrante para interactividad, acentos y botones)
- **Brand Identity Deep:** `#002069` (Azul corporativo profundo para autoridad de marca)
- **Primary Hover:** `#093CB8`
- **Primary Light:** `#3B82F6` / `#60A5FA` (Acentos de resplandor, texto degradado y bordes activos)
- **Primary Glow:** `rgba(13, 80, 232, 0.45)`

### 5.2. Superficies Oscuras (Dark Canvas)
- **Background Base:** `#050816` (`--color-bg-dark`)
- **Surface Elevation:** `#0B1120` (`--color-bg-surface`)
- **Card Background:** `#0B0F19` (`--color-bg-card`) — Fondo base de tarjetas interactivas

### 5.3. Superficies Claras (Unified Light Canvas)
- **Canvas Light Base:** `#FAFAFC` / `#FCFCFD` (`--color-bg-light`)
- **Light Gradients Ambientales:** Halos radiales suaves en `#FFFFFF`, `rgba(248,250,252,0.6)` y tonos `blue-100/35`.

### 5.4. Tipografía y Textos
- **Encabezados en Oscuro:** `#FFFFFF` (`--color-text-heading`)
- **Cuerpo en Oscuro:** `#CBD5E1` (`--color-text-body`)
- **Muted en Oscuro:** `#94A3B8` / `#64748B` (`--color-text-muted`)
- **Encabezados en Claro:** `#0F172A` / `#334155`
- **Cuerpo en Claro:** `#475569` / `#64748B`

### 5.5. Bordes, Glassmorphism y Divisores
- **Borde Glass Estándar:** `rgba(255, 255, 255, 0.08)`
- **Borde Dark Cards:** `rgba(30, 41, 59, 0.85)` / `border-slate-800/90`
- **Divisores:** `rgba(255, 255, 255, 0.10)` / `rgba(226, 232, 240, 0.8)` en claro
- **Glass Backdrop Filter:** `backdrop-filter: blur(12px)` con fondo `rgba(255, 255, 255, 0.05)`

### 5.6. Estados Semánticos
- **Success:** `#22C55E` / `#10B981` (En línea, métricas de impacto)
- **Warning:** `#F59E0B`
- **Error:** `#EF4444`

---

# 6. Alternancia de Secciones (Lienzos Continuos)

Para evitar la fatiga visual de un sitio completamente oscuro y garantizar máxima legibilidad corporativa, la página alterna bloques visuales continuos:

1. **Hero:** Fondo Oscuro inmersivo (`#020617` a `#050816`) con resplandor central azul.
2. **Lienzo Claro 1 (`.aixa-grid-bg-light`):** Bloque unificado continuo en `#FAFAFC` que engloba:
   - *¿Qué es AIXA?* (Ecosistema de integración con líneas de conexión de alto contraste)
   - *Beneficios* (Grid de 4 tarjetas oscuras con imágenes y resplandor)
   - *Soluciones Inteligentes* (Showcase interactivo de 5 casos de uso con baraja 3D de cartas)
3. **Nuestro Diferencial:** Fondo Oscuro (`section-dark` / `#050816`) con comparativa interactiva Boutique VS Solución Genérica.
4. **Lienzo Claro 2 (`.aixa-light-canvas-bottom`):** Bloque unificado continuo con esquinas redondeadas inferiores (`rounded-b-[40px]` a `rounded-b-[64px]`) que engloba:
   - *CTA Block* (Tarjeta oscura glassmorphic de conversión con gradientes glow)
   - *Integraciones* (Escenario orbital con logo neon AIXA central y tarjetas flotantes)
5. **Footer:** Fondo Oscuro minimalista (`#050816`) con enlaces y redes sociales.

---

# 7. Efecto Global de Linterna (Flashlight Effect)

La landing implementa un efecto de linterna interactivo de alto rendimiento que sigue el cursor (`pointermove` optimizado con `requestAnimationFrame`):
- **En fondos oscuros:** Resplandor radial azul sutil (`rgba(13, 80, 232, 0.22)` a transparent) con `z-index: 0`.
- **En fondos claros:** Resplandor radial azul suave (`rgba(37, 99, 235, 0.28)` a transparent) que aporta tridimensionalidad sin perjudicar la legibilidad.
- **Variables CSS dinámicas:** `--mouse-x`, `--mouse-y`, `--flashlight-opacity`.

---

# 8. Sistema de Botones y Acciones

### 8.1. Botón Primario AIXA (`.btn-primary-aixa`)
- **Fondo:** Gradiente cobalto `linear-gradient(135deg, #0D50E8 0%, #1D4ED8 100%)`.
- **Borde:** `1px solid rgba(147, 197, 253, 0.35)`.
- **Efecto Shimmer:** Brillo diagonal animado (`::after` skewX) que cruza el botón al hacer hover.
- **Hover:** Elevación `translateY(-2px) scale(1.02)` y resplandor `box-shadow: 0 0 32px rgba(13, 80, 232, 0.65)`.

### 8.2. Botón Secundario Glass (`.btn-secondary-aixa`)
- **Fondo:** `rgba(255, 255, 255, 0.05)` con `backdrop-filter: blur(12px)`.
- **Borde:** `1px solid rgba(255, 255, 255, 0.15)`.
- **Hover:** `border-color: #60A5FA` y resplandor controlado.

### 8.3. Botón Navbar Moving Border (`.btn-nav-moving-border`)
- **Efecto:** Borde cónico rotativo continuo (`conic-gradient` animado con `@keyframes rotateMovingBorder`).
- **Núcleo Interno:** Glass oscuro con `backdrop-filter: blur(16px)` y tipografía blanca `font-medium`.

### 8.4. Botones Circulares de Navegación (`.soluciones-nav-btn`)
- **Dimensiones:** `w-13 h-13 rounded-full` (`3.25rem`).
- **Fondo:** `#0B1120` con borde sutil.
- **Hover:** Fondo `#0D50E8`, borde `#60A5FA` y resplandor cobalto.

---

# 9. Sistema de Tarjetas y Resplandores

### 9.1. Tarjetas Oscuras (`.card-glow-hover`)
- **Fondo Base:** `#0B0F19` (o `#0B1120`).
- **Radio:** `rounded-2xl` (1rem / 16px) a `rounded-3xl` (1.5rem / 24px).
- **Borde:** `1px solid rgba(30, 41, 59, 0.85)` / `border-slate-800/90`.
- **Hover:** Transición suave cubic-bezier, cambio de borde a `#0D50E8` y sombra difuminada `box-shadow: 0 0 28px rgba(13, 80, 232, 0.45)`.

### 9.2. Baraja de Soluciones 3D (`.sol-deck-card`)
- **Perspectiva:** `perspective(1200px)`.
- **Carta Frontal (`.is-front`):** Rotación `-1.5deg`, z-index 20, interactiva.
- **Carta Posterior (`.is-back`):** Rotación `+3deg`, escala 0.96, z-index 10.
- **Transición:** Animaciones directas de intercambio (`@keyframes frontCardToBackRight` / `backCardToFront`).

---

# 10. Iconografía y Medios

- **Biblioteca Oficial de Iconos:** **Lucide Icons** exclusively (`data-lucide="..."`).
- **Estilo de Iconos:** Outline consistente, stroke 1.75px a 2px.
- **Formatos de Imagen:** Formato moderno **WebP** (`media/images/*.webp`) y logotipos vectoriales **SVG** (`media/images/*.svg`).
- **Representación Visual de la IA:**
  - Resplandor Neón de AIXA (`aixa-neon.webp` con `@keyframes aixaNeonPulseLight`).
  - Diagrama de red de datos con nodos interactivos y trazados vectoriales SVG iluminados.
  - Simuladores de chat conversacional en tiempo real (WhatsApp Business UI).
  - Escenario orbital concéntrico de integraciones.

---

# 11. Animaciones y Micro-interacciones

- **Tiempos de Transición:**
  - Micro-interacciones (hover, botones, pestañas): `200ms - 350ms`.
  - Transición de tarjetas e intercambio 3D: `450ms - 550ms`.
  - Transiciones de órbita y resplandor: `900ms - 1200ms`.
- **Curva de Aceleración:** `cubic-bezier(0.16, 1, 0.3, 1)` para suavidad premium.
- **Propiedades Prioritarias:** `transform`, `opacity`, `border-color`, `box-shadow`, `filter`.