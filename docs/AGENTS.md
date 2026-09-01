# AGENTS.md

# Prioridad de instrucciones

Este documento define las reglas técnicas y de desarrollo para el proyecto de la Landing Page de AIXA.

### Orden de Prioridad:
1. **Solicitud actual del usuario.**
2. **Referencias visuales y directrices proporcionadas por el usuario.**
3. **Este documento (AGENTS.md).**
4. **Resto de la documentación técnica (`DESIGN_SYSTEM.md`, `UI_COMPONENTS.md`, `PROJECT_CONTEXT.md`).**

Las decisiones de implementación deben priorizar la coherencia visual, la experiencia de usuario premium, el alto rendimiento y la mantenibilidad del código.

---

# Stack Tecnológico

El proyecto está construido sin dependencias complejas ni frameworks pesados para garantizar máxima velocidad de carga e interactividad fluida:

- **HTML5:** Estructura semántica, accesible y limpia.
- **Tailwind CSS (CDN):** Utilidades de diseño con configuración de temas y colores corporativos.
- **CSS3 Vanilla (`styles.css`):** Variables raíz, animaciones complejas, keyframes, diseño de tarjetas 3D, linterna interactiva y efectos de resplandor.
- **JavaScript Vanilla (`main.js`):** Lógica modular de componentes interactivos, animaciones por scroll/evento, simulación de chat dinámico, carruseles y órbitas.
- **Iconografía:** **Lucide Icons** exclusivamente vía CDN (`https://unpkg.com/lucide@latest`).
- **Tipografía:** **Fredoka** (`media/fonts/`), cargada localmente mediante `@font-face`.

---

# Estructura del Proyecto

El proyecto está organizado de forma modular y desacoplada:

```text
langin-page-aixa/
├── index.html              # Estructura principal y maquetación de secciones
├── styles.css              # Variables CSS, diseño de componentes, efectos glow, animaciones y responsive
├── main.js                 # Lógica e interactividad de todos los módulos de la landing
├── favicon.ico             # Favicon del sitio web
├── README.md               # Resumen del proyecto
├── docs/                   # Documentación oficial del proyecto
│   ├── AGENTS.md           # Reglas técnicas de desarrollo y agentes
│   ├── DESIGN_SYSTEM.md    # Sistema de diseño, tokens, tipografía y colores
│   ├── UI_COMPONENTS.md    # Catálogo detallado de componentes UI
│   └── PROJECT_CONTEXT.md  # Contexto de negocio y propuesta de valor
└── media/                  # Recursos gráficos locales
    ├── fonts/              # Archivos de tipografía local (Fredoka TTF)
    └── images/             # Logotipos SVG y recursos optimizados WebP
```

---

# Reglas de HTML

- **Semántica:** Utilizar etiquetas semánticas (`header`, `nav`, `main`, `section`, `article`, `footer`).
- **Encabezados:** Único `<h1>` en el Hero. Todas las secciones principales usan `<h2>`. Títulos de tarjetas y bloques usan `<h3>`.
- **Estructura Organizada:** Delimitar claramente las secciones con bloques de comentarios estandarizados:
  ```html
  <!-- ========================================= -->
  <!-- NOMBRE DE SECCIÓN -->
  <!-- ========================================= -->
  ```
- **Atributos de Imagen:** Todas las etiquetas `<img>` deben incluir `alt` descriptivo y atributos de optimización como `loading="lazy"` y `decoding="async"` (salvo en el Hero para evitar retrasos en el LCP).
- **Atributos Accesibles:** Los botones sin texto visible deben contar con `aria-label` descriptivo.

---

# Reglas de CSS (`styles.css`)

- **Variables Centralizadas:** Todas las variables globales (colores, coordenadas de linterna, fuentes) residen en `:root`.
- **Estilos Estáticos vs Clases:** Priorizar clases de Tailwind CSS para espaciados, tamaños y flexbox/grid.
- **CSS Personalizado Específico:** Escribir en `styles.css` únicamente:
  - Definición de `@font-face`.
  - Animaciones, `@keyframes` y transiciones 3D (`perspective`, `transform-style`).
  - Efectos visuales de resplandor (`box-shadow`, `drop-shadow`, pseudo-elementos `::before` y `::after`).
  - Lógica de la linterna interactiva (`--mouse-x`, `--mouse-y`, `--flashlight-opacity`).
  - Estilos de tarjetas complejas (`sol-deck-card`, `integ-card`, `btn-nav-moving-border`).
- **Consistencia en Hover:** Toda tarjeta o botón interactivo debe contar con transiciones suaves (`cubic-bezier(0.16, 1, 0.3, 1)` o `ease-out`).
- **Consolidación de Media Queries:** Todas las reglas responsive `@media` (`640px`, `768px`, `1024px`, etc.) deben ubicarse de forma consolidada y ordenada al final de `styles.css` en bloques dedicados por breakpoint, en lugar de dispersarse entre secciones o componentes individuales.

---

# Reglas de JavaScript (`main.js`)

- **Inicialización Centralizada:** Todas las funciones de módulos se registran en el evento `DOMContentLoaded`:
  ```javascript
  document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
      initGlobalFlashlight();
      initNavbar();
      initConversationDemo();
      initQueEsAixa();
      initSolucionesShowcase();
      initDiferencial();
      initIntegraciones();
  });
  ```
- **Modularidad e Inmutabilidad:** Funciones pequeñas, descriptivas y de responsabilidad única. Usar `const` y `let`, evitando variables globales contaminantes.
- **Rendimiento de Animaciones:** Para seguimiento de puntero o scroll, utilizar `requestAnimationFrame` o `IntersectionObserver`.
- **Re-renderizado de Iconos:** Al inyectar HTML dinámicamente con JavaScript que contenga iconos Lucide, invocar siempre `lucide.createIcons()` para procesar los nuevos elementos.

---

# Diseño Responsive (Mobile First)

- **Breakpoints Estándar:**
  - `sm:` (640px)
  - `md:` (768px)
  - `lg:` (1024px)
  - `xl:` (1280px)
- **No duplicar DOM:** El mismo componente HTML debe adaptarse mediante clases responsive de Tailwind y CSS sin duplicar código para móvil y escritorio.
- **Contenedores Máximos:** `max-w-7xl mx-auto px-6 lg:px-12`.
- **Pading Lateral:** Mínimo `px-6` en móviles y `px-12` en pantallas grandes para evitar que el contenido toque los bordes.

---

# Rendimiento y Optimización

- **Carga de Recursos:** Priorizar formatos modernos WebP para imágenes y SVG para logotipos vectoriales.
- **Tipografía Local:** Las fuentes cargadas desde `media/fonts/` incluyen `font-display: swap` para eliminar bloqueos de renderizado.
- **Control de Reflows:** Utilizar `will-change: transform, opacity` únicamente en elementos animados intensivos (como tarjetas de soluciones y escenario orbital).

---

# Metodología de Modificación y Trabajo

1. **Revisar Contexto:** Verificar siempre `DESIGN_SYSTEM.md` y `UI_COMPONENTS.md` antes de crear nuevos componentes o alterar estilos.
2. **Reutilizar Componentes:** No crear variantes innecesarias de botones, badges o tarjetas si una clase existente puede resolver la necesidad.
3. **Validar Consistencia:** Asegurarse de que el peso tipográfico de los títulos se mantenga en `Medium` (`font-medium`), que los bordes respeten el sistema de glow cobalto y que la alternancia de lienzos permanezca armónica.
4. **Verificación Visual:** Validar cambios en vista móvil, tablet y escritorio.
