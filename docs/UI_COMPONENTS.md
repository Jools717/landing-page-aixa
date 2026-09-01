# UI COMPONENTS

# Catálogo Oficial de Componentes UI

**Proyecto:** AIXA Landing Page  
**Versión:** 2.0  
**Librería de Iconos:** Lucide Icons  
**Tipografía:** Fredoka (Local)

Este documento describe la estructura, clases, estados y comportamiento de todos los componentes implementados en la landing page de AIXA.

---

# 1. Navbar (`#main-nav`)

Barra de navegación fija superior con soporte de scroll dinámico y menú adaptativo.

### Elementos:
- **Logo AIXA:** `media/images/aixa_logo_web.svg` con altura responsive (`h-14 md:h-16`).
- **Navegación Desktop:** Enlaces a secciones (`#que-es-aixa`, `#beneficios`, `#soluciones`, `#diferencial`, `#integraciones`) con transición de color `text-body hover:text-white`.
- **CTA Moving Border:** Botón con animación de borde cónico rotativo.
- **Botón Menú Móvil:** Icono Lucide `menu` / `x`.
- **Menú Desplegable Móvil (`#mobile-menu`):** Panel glassmorphic con fondo `bg-surface/95` y enlaces apilados.

### Estados:
- **Default:** Fondo transparente.
- **Scrolled (`.is-scrolled`):** Fondo con glassmorphism oscuro y borde inferior sutil (`border-white/10`).

---

# 2. Hero Section (`#hero`)

Sección de impacto inicial de pantalla completa que combina propuesta de valor corporativa con demostrador interactivo de chat.

### Elementos:
- **Badge:** Píldora glassmorphic con pulso verde/azul (`IA Empresarial Avanzada`).
- **Título H1:** Texto en peso Medium (`font-medium`) con degradado `bg-clip-text` (`Automatiza conversaciones con el conocimiento de tu empresa`).
- **Subtítulo:** Texto legible `text-body text-lg lg:text-xl`.
- **Acciones Duales:**
  - Botón primario de WhatsApp (`.btn-primary-aixa`).
  - Botón secundario de anclaje (`.btn-secondary-aixa`).
- **WhatsApp Live Chat Widget:**
  - Encabezado simulador de WhatsApp Dark (`#202c33`), avatar AIXA y estado de cuenta verificada.
  - Contenedor de mensajes (`#demo-body`) con simulación de mecanografiado (`.typing-cursor`) e inyección dinámica.
  - Contenedor de chips interactivos (`#demo-chips`) con preguntas predeterminadas.

---

# 3. ¿Qué es AIXA? — Ecosistema Interactivo (`#que-es-aixa`)

Visualizador interactivo de integración de fuentes de datos sobre lienzo claro continuo.

### Elementos:
- **Core AIXA Central (`#eco-aixa-node`):** Nodo circular central con resplandor pulsante y tipografía AIXA.
- **Líneas Conectoras SVG (`.eco-line`):** Trazados curvos de alta visibilidad en azul cobalto (`#0D50E8`) que se iluminan al interactuar con las tarjetas.
- **Nodos de Datos (`.eco-card`):** 8 tarjetas perimetrales conectadas:
  - *Izquierda:* Documentos, Bases de datos, Inventario, Correos.
  - *Derecha:* CRM, ERP, APIs, Otras fuentes.
- **Resumen de Beneficios Inferior (`.eco-benefit`):** Grid de 3 tarjetas oscuras con iconos Lucide (`message-square`, `zap`, `users`) destacando capacidades clave.

---

# 4. Beneficios (`#beneficios`)

Grid de 4 tarjetas visuales de alto impacto sobre lienzo claro.

### Elementos por Tarjeta:
- **Contenedor:** Fondo oscuro `#0B0F19`, radio `rounded-3xl`, borde `border-slate-800/80` y efecto `.card-glow-hover`.
- **Media Banner:** Imagen optimizada WebP en relación `4/3` con hover zoom suave (`group-hover:scale-105`):
  - *Atención permanente:* `media/images/atencion-24-7.webp`
  - *Optimización del tiempo:* `media/images/automatizacion.webp`
  - *Integración:* `media/images/integracion.webp`
  - *Escalabilidad:* `media/images/escalabilidad.webp`
- **Línea de Acento Dinámica:** Barra indicadora que se expande y tiñe de cobalto al hacer hover (`group-hover:w-14 group-hover:bg-primary`).
- **Título & Descripción:** Tipografía blanca con cambio de color en hover a `text-primary-light`.

---

# 5. Soluciones Inteligentes — 3D Showcase (`#soluciones`)

Showcase unboxed con baraja interactiva de cartas 3D y selector de casos de uso.

### Componentes:
1. **Tabs Selector (`#sol-tabs-container`):** Pestañas de filtrado para 5 casos de uso:
   - 01. Atención al Cliente
   - 02. Ventas y Cotizaciones
   - 03. Soporte TI y RRHH
   - 04. Operaciones y Logística
   - 05. Finanzas y Cobranza
2. **Baraja de Cartas 3D (`.soluciones-card-perspective`):**
   - Dos cartas en ciclo continuo (`#sol-card-1` y `#sol-card-2`).
   - Estados `.is-front` (rotación `-1.5deg`, interactiva) e `.is-back` (rotación `+3deg`, fondo).
   - Animaciones clave de pase de baraja (`anim-front-to-back-right`, `anim-front-to-back-left`, `anim-back-to-front`).
3. **Botones de Navegación (`#sol-prev-btn`, `#sol-next-btn`):**
   - Botones circulares `.soluciones-nav-btn` ubicados directamente debajo de la tarjeta.
4. **Paneles de Contexto Empresarial:**
   - *El reto que resuelve:* Tarjeta oscura con icono `target`.
   - *Sistemas que integra:* Tags de herramientas (WhatsApp API, Hubspot, SAP, etc.).
   - *Impacto de negocio:* Tarjeta en verde esmeralda (`bg-emerald-950/40 border-emerald-500/30`) con métricas porcentuales.

---

# 6. Nuestro Diferencial — Pipeline Boutique (`#diferencial`)

Comparativa interactiva de servicio boutique frente a plantillas genéricas sobre lienzo oscuro.

### Elementos:
- **Insignia Central "VS":** Medallón circular divisor entre ambas columnas.
- **Columna Izquierda (Soluciones Genéricas):** Tarjeta oscura `#0B1120` con lista de limitaciones e iconos de cancelación.
- **Columna Derecha (AIXA Boutique):** Tarjeta con borde cobalto y pipeline de 5 fases interactivas con línea de progreso animada (`.dif-step`, `.dif-line`, `.dif-dot`, `.dif-icon`):
  1. *Diagnóstico* (Icono `search`)
  2. *Aprende de tu empresa* (Icono `brain`)
  3. *Implementación personalizada* (Icono `puzzle`)
  4. *Capacitación* (Icono `users`)
  5. *Optimización continua* (Icono `bar-chart-2`)
- **Badge Inferior:** Mensaje de valor personalizado con icono de estrella.

---

# 7. CTA Block (`#cta`)

Módulo de conversión de alto contraste ubicado dentro del lienzo claro inferior.

### Elementos:
- **Contenedor:** Tarjeta oscura curvada (`rounded-3xl bg-[#0B1120] border-white/10`) con sombras profundas y halos de luz radiales internos.
- **Badge:** `Impulsa tu Empresa` con punto animado.
- **Título H2:** Texto destacado con acento degradado.
- **Botón de Conversión:** Botón primario grande con icono `message-circle` para apertura directa a WhatsApp.

---

# 8. Integraciones — Escenario Orbital (`#integraciones`)

Escenario orbital concéntrico con núcleo central AIXA Neón y tarjetas flotantes de herramientas tecnológicas.

### Elementos:
- **Anillos Orbitales:** `.integ-orbit-ring` y `.integ-orbit-ring-inner` con bordes punteados y resplandor tenue.
- **Núcleo Central AIXA (`#integ-center-core`):** Módulo redondeado blanco con el isotipo `media/images/aixa-neon.webp` animado mediante resplandor neón pulsante (`.integ-neon-glow`).
- **Tarjetas Flotantes Squircle (`.integ-card`):**
  - Contenedores redondeados (`rounded-[28px] md:rounded-[32px]`) con fondos oscuros `#0B0F19`.
  - Iconos y logos de herramientas (WhatsApp, SAP, HubSpot, Salesforce, Zendesk, PostgreSQL, Google Drive, Shopify, Slack, Jira, etc.).
  - **Tooltip Dinámico (`.integ-card-tooltip`):** Etiqueta flotante oscura que revela el nombre de la plataforma al hacer hover.
  - **Hover Effect:** Elevación a escala 1.15, borde cobalto `#0D50E8` y resplandor expandido.

---

# 9. Footer Moderno (`.aixa-footer-modern`)

Pie de página corporativo minimalista y ordenado sobre fondo `#050816`.

### Elementos:
- **Logotipo AIXA:** Enlace directo al inicio.
- **Botones Sociales (`.aixa-footer-social-btn`):**
  - Botones cuadrados redondeados (`w-11 h-11 rounded-2xl`) con iconos vectoriales SVG para **LinkedIn** e **Instagram**.
  - Efecto hover con fondo azul translúcido, borde `#60A5FA` y elevación.
- **Enlaces de Navegación:** Acceso rápido horizontal a todas las secciones y correo oficial `info@aixa.com`.
- **Copyright:** Indicador de derechos reservados año 2026.

---

# 10. Catálogo de Botones y Badges

| Componente | Clase Principal | Propósito / Características |
| :--- | :--- | :--- |
| **Botón Primario** | `.btn-primary-aixa` | Acción principal de conversión. Gradiente cobalto, shimmer sweep y glow hover. |
| **Botón Secundario** | `.btn-secondary-aixa` | Acción secundaria. Glassmorphism, borde translúcido y elevación suave. |
| **Botón Moving Border** | `.btn-nav-moving-border` | CTA de la barra de navegación. Borde animado rotativo continuo con conic-gradient. |
| **Botón Circular Nav** | `.soluciones-nav-btn` | Navegación de casos de uso (Anterior / Siguiente) con iconos flecha. |
| **Pestaña Selector** | `.soluciones-tab-btn` | Botón de tab para filtrado de soluciones con estado `.active`. |
| **Badge Estándar** | `.inline-flex ... rounded-full` | Píldora con indicador animado pulse (`w-2 h-2 rounded-full bg-primary`). |