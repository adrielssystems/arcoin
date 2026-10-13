# Memoria Persistente de Proyecto: ARCOIN Geofísica

**Fecha de última actualización:** 13 de Octubre de 2026
**Desarrollado por:** Adriel's Systems (IA Asistente Antigravity)
**Dominio Oficial:** `https://arcoinca.com` (con alias `www.arcoinca.com`)

## Estado Actual del Proyecto
La "Landing Page" de ARCOIN Geofísica ha alcanzado un estado 100% "Production-Ready". La arquitectura fue simplificada a un flujo **Frontend-only** altamente optimizado y modularizado, enriquecido con una Interfaz de Usuario (UX) premium y animaciones de alta conversión que permite a la empresa recibir leads directamente a WhatsApp.
Cuenta con su dominio corporativo propio registrado y configurado: **`arcoinca.com`**.

## Hitos Alcanzados (Frontend & UX)
- **Arquitectura y Modularización:** Se transformó la plantilla base HTML hacia una SPA con React 18 + Vite. Se refactorizó un archivo monolítico `App.tsx` de más de 900 líneas en más de 10 componentes limpios e independientes dentro de `src/components/`.
- **Estilos y UX Premium:** 
  - Implementación de Tailwind v4 con tipografías corporativas (Orbitron/Inter).
  - **Microanimaciones Avanzadas:** Se integró un sistema de interacciones dinámicas de primer nivel: animaciones continuas automáticas (efectos de luz/shimmer), levitaciones 3D al pasar el cursor y respuestas táctiles (`active:scale`) en todos los botones de conversión (CTAs).
- **Optimización Mobile-First:** Se solucionaron bloqueadores visuales en smartphones, corrigiendo la relación de aspecto del video de la maquinaria, limpiando el header superior para destacar el logo corporativo y rediseñando el menú hamburguesa.
- **Localización Hiper-Segmentada:** Copywriting apuntado estrictamente a Nueva Esparta (Isla de Margarita, Coche y Cubagua), con selectores municipales en el formulario.
- **Integración Multimedia Tecnológica:** Interfaz HUD animada (`demo-sev.mp4`), comparativa interactiva contra pozos secos (`SINSERV.mp4`) y fondos temáticos industriales oscuros.
- **Simulador de Cotización Vía WhatsApp:** Redirección automática de variables (Nombre, Empresa, Municipio, Tipo) a una plantilla corporativa en WhatsApp.
- **SEO & Metadatos Corporativos (Optimización para WhatsApp & Redes Sociales):**
  - Generación de imagen Open Graph oficial (`web/public/og-image.jpg`) en proporción 1200x630 y peso optimizado (151 KB, cumpliendo estrictamente el límite de 300 KB de WhatsApp).
  - Integración del logotipo real corporativo de ARCOIN en tarjeta destacada de alta fidelidad, con razón social **ARCOIN C.A.** sin redundancias, RIF oficial `J-238524731` e infografía técnica de comparación (*Sin SEV vs Con SEV*).
  - Inclusión de etiquetas Open Graph, Twitter Cards (`summary_large_image`) y marcado de datos estructurados Schema.org (`ProfessionalService`) con coordenadas geográficas y datos de contacto en [index.html](file:///c:/Users/rhect/Documents/Proyectos/Arcoin/web/index.html).
- **Identidad Corporativa y Métricas Actualizadas:** Actualización de razón social a **ARCOIN.C.A.** con **RIF J-238524731**, eliminación de cintillo superior inicial, ajuste técnico de profundidad a *"Hasta 300 Mts. de profundidad"* y actualización de métrica a **+45 estudios en Nva. Esparta**.
- **Reestructuración de Bento de Servicios:** Eliminación de la tarjeta secundaria de Geotecnia & Obras Civiles, expansión de **SERVICIOS PRINCIPALES // MOD-HYDRO** a ancho completo (12 columnas) y aumento del cuerpo de texto para lectura cómoda y fluida en dispositivos móviles y de escritorio.
- **Optimización de Casos y FAQ:** Remoción de la tarjeta de agricultura en Casos de Éxito (quedando un grid de 2 columnas balanceado) y eliminación de la tarjeta de Atención Directa en FAQ, centrando el acordeón de preguntas frecuentes para máxima legibilidad.
- **Formulario de Cotización con Envío por Correo & Protecciones Anti-Spam:**
  - Actualización de terminología técnica geofísica: corrección estricta a modelado **2D/3D** (eliminando cualquier referencia a 1D).
  - Rediseño de caja directa: ahora muestra **Canal Directo** a la izquierda y el botón oficial de WhatsApp a la derecha.
  - Modificación del botón de envío a **"Enviar"** con estados de carga (spinner `Enviando...`), deshabilitación preventiva y banners de retroalimentación inmediata (éxito/error).
  - Enrutamiento directo al correo corporativo **`arcoinca10@gmail.com`** mediante FormSubmit Ajax con formato de tabla estructurada.
  - Implementación de protecciones integrales de seguridad:
    1. *Honeypot invisible* anti-bots (`_honey_trap`).
    2. *Detección de envío ultra-rápido* (tiempo mínimo de interacción de 2.5 seg para descartar bots).
    3. *Rate Limiting / Debounce* local de 30 segundos para evitar spam o clics múltiples repetidos.
    4. *Validación estricta de campos* incluyendo Teléfono/WhatsApp y Correo Electrónico para garantizar retorno de contacto.
- **Marco Legal, Privacidad y Seguridad (Legislación Venezolana):**
  - Creación del componente interactivo [LegalModal.tsx](file:///c:/Users/rhect/Documents/Proyectos/Arcoin/web/src/components/LegalModal.tsx) con pestañas dinámicas, navegación accesible y cierre por teclado (ESC) o backdrop.
  - **Términos del Servicio:** Adaptado al Código Civil, Código de Comercio, Ley del Ejercicio de la Ingeniería (CIV) y la **Ley de Aguas (G.O. N° 38.595)**, definiendo la naturaleza científica indirecta del SEV y delimitando responsabilidades frente a perforadoras.
  - **Política de Privacidad:** Fundamentada en el **Artículo 28 de la Constitución de la República Bolivariana de Venezuela (Habeas Data)**, la **Ley sobre Mensajes de Datos y Firmas Electrónicas (G.O. N° 37.148)** y derechos ARCO mediante `arcoinca10@gmail.com`.
  - **Seguridad de la Información Geocientífica:** Basada en la **Ley Especial Contra Delitos Informáticos (G.O. N° 37.313)** y el secreto profesional del CIV, resguardando la confidencialidad de coordenadas y ubicación de acuíferos subterráneos.
  - **Optimización Integral de Contraste y Accesibilidad:** Ajuste de contraste alto en los textos y tarjetas del modal legal (fondos limpios con tipografía oscura de lectura nítida) y rediseño completo de la tipografía del [Footer.tsx](file:///c:/Users/rhect/Documents/Proyectos/Arcoin/web/src/components/Footer.tsx) sobre fondo pizarra oscuro (`bg-slate-900`) con textos claros (`text-white`, `text-slate-200`, `text-slate-300`, `text-amber-400` y `text-sky-400`) para legibilidad perfecta en cualquier dispositivo.
  - **Adaptabilidad Móvil Mobile-First del Modal Legal:** Corrección de estructura CSS Flexbox (`shrink-0` en cabecera, pestañas y pie; `flex-1 min-h-0` en área de texto; altura dinámica `h-[92dvh]`), evitando que la barra de direcciones de Android/iOS o los botones inferiores tapen el contenido o bloqueen las pestañas.
  - Enlaces de activación integrados en el [Footer.tsx](file:///c:/Users/rhect/Documents/Proyectos/Arcoin/web/src/components/Footer.tsx) y sincronizados con el hash de la URL (`#terminos`, `#privacidad`, `#seguridad`, `#legal`).
- **Build de Producción Generado:** Compilación exitosa sin errores (`npm run build`), directorio `dist/` empaquetado y listo para carga a servidor remoto.

## Hitos de Despliegue (DevOps)
- **Configuración Docker (Easypanel):**
  - Creación de un `Dockerfile` multi-etapa en la raíz del proyecto.
  - Implementación de un servidor `nginx:alpine` con `nginx.conf` dedicado para manejar las rutas SPA, la compresión Gzip, la caché agresiva de imágenes y videos, y `server_name` enrutando `arcoinca.com` y `www.arcoinca.com`.
  - **Blindaje de Seguridad y Bloqueo de Bots Scanners:** Se actualizaron reglas estrictas en `nginx.conf` para bloquear intentos de extracción de archivos ocultos (`/.env`, `/.git`, `/.aws`), sondas de configuración (`/env`, `/api/config`, `/config.json`, `/config.js`), archivos Markdown de IA (`/README.md`, `/AGENTS.md`, `/CLAUDE.md`) y sondas de WordPress (`/wp-includes`, `/xmlrpc.php`), respondiendo de inmediato con `404 Not Found` en lugar de caer en el fallback SPA con código 200.
  - **Filtro de User-Agents Maliciosos:** Bloqueo 403 a bots rastreadores abusivos (`CoinCreator`, `FossickBot`, `ShinkiHPBot`, `CMS-Checker`, `aiohttp`, `HeadlessChrome`).
  - **Generación y Manejo de Favicons:** Creación de `favicon.ico` y `favicon.png` para erradicar errores 404 en el log de Nginx generados por navegadores y dispositivos iOS.
  - Inclusión de cabeceras de seguridad HTTP (`X-Frame-Options`, `X-Content-Type-Options`, `X-XSS-Protection`, `Referrer-Policy`).
  - Corrección de errores de contexto en GitHub (Push Protection por API Keys en local) y errores estrictos de TypeScript (`TS6133: 'React' is never read`).
- **Control de Versiones:** Repositorio en GitHub configurado (`adrielssystems/arcoin.git`).

## Próximos Pasos (Ideas a Futuro)
Si en el futuro la empresa ARCOIN requiere automatizar más los procesos, estas son las vías sugeridas:
1. **Fase Backend (Hono.js):** Construir la API que interceptó el formulario originalmente propuesta, para guardar el historial de clientes en una base de datos antes de enviar al usuario a WhatsApp.
2. **Sitemap & Google Search Console:** Generar `sitemap.xml` y `robots.txt` para vincular con Google Search Console bajo `https://arcoinca.com`.

---
*Nota para el agente IA: Lee este archivo al inicio de futuras sesiones para recuperar todo el contexto arquitectónico y de decisiones de este proyecto.*
