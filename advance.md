# Memoria Persistente de Proyecto: ARCOIN Geofísica

**Fecha de última actualización:** 16 de Octubre de 2026
**Desarrollado por:** Adriel's Systems (IA Asistente Antigravity)
**Dominio Oficial:** `https://arcoinca.com` (con alias `www.arcoinca.com`)

## Estado Actual del Proyecto
La "Landing Page" de ARCOIN Geofísica ha alcanzado un estado 100% "Production-Ready". La arquitectura fue simplificada a un flujo **Frontend-only** altamente optimizado y modularizado, enriquecido con una Interfaz de Usuario (UX) premium y animaciones de alta conversión que permite a la empresa recibir leads directamente a WhatsApp y por correo electrónico mediante FormSubmit.
Cuenta con su dominio corporativo propio registrado y configurado: **`arcoinca.com`**.

---

## Registro de Actividades y Novedades del 16 de Octubre de 2026

### 1. Actualización de Identidad Fiscal y Legal
- **RIF Corporativo:** Se actualizó formalmente el identificador fiscal a **J-298524731** en toda la plataforma ([Header.tsx](file:///c:/Users/rhect/Documents/Proyectos/Arcoin/web/src/components/Header.tsx), [Footer.tsx](file:///c:/Users/rhect/Documents/Proyectos/Arcoin/web/src/components/Footer.tsx), [LegalModal.tsx](file:///c:/Users/rhect/Documents/Proyectos/Arcoin/web/src/components/LegalModal.tsx) y metadatos SEO en [index.html](file:///c:/Users/rhect/Documents/Proyectos/Arcoin/web/index.html)), agregando indicadores de estado activo (pulso esmeralda).
- **Directiva del CEO de ARCOIN (Eliminación de referencias a CIV):** Se eliminó de manera exhaustiva y definitiva cualquier mención, texto, credencial o sello referente a *"Avalado por CIV"*, *"Colegio de Ingenieros"* o números de colegiatura en todos los archivos de código fuente, textos legales y componentes.

### 2. Formulario de Cotización ([ContactForm.tsx](file:///c:/Users/rhect/Documents/Proyectos/Arcoin/web/src/components/ContactForm.tsx))
- **Traducción y Estandarización de Datos:** Se tradujeron todas las claves de los campos del formulario de inglés a español formal (`Nombre Completo`, `Teléfono / WhatsApp`, `Correo Electrónico`, `Empresa o Proyecto`, `Municipio (Nueva Esparta)`, `Tipo de Requerimiento`, `Detalles del Proyecto`) para que los correos recibidos por el equipo técnico en `arcoinca10@gmail.com` sean claros y estructurados en formato de tabla.
- **Protección Antispam & Contingencia:** Honeypot invisible, validación de tiempo mínimo y botón alternativo de reenvío directo a WhatsApp en caso de retrasos en la red.

### 3. Instrumental de Alta Gama ADMT-300 ZN ([Technology.tsx](file:///c:/Users/rhect/Documents/Proyectos/Arcoin/web/src/components/Technology.tsx))
- **Video Demostrativo con Doblaje en Español:** Sustitución del audio original en inglés por locución profesional y explicativa en español neutro (`1016.mp4` / `1016_es_full.mp4`).
- **Reproductor Técnico Nativo:** Marco de alta gama con relación de aspecto 16:9 (`object-contain`), póster previo personalizado (`admt-300-poster.jpg`) y controles táctiles nativos.
- **Ocultamiento de Bloque Antiguo:** Se ocultó mediante CSS (`className="hidden"`) la sección anterior de "INSTRUMENTACIÓN CIENTÍFICA: Tecnología de Inversión y Hardware de Campo", preservando el código sin eliminarlo.

### 4. Nueva Sección "Producto // Entregables del Estudio" ([Technology.tsx](file:///c:/Users/rhect/Documents/Proyectos/Arcoin/web/src/components/Technology.tsx#L161))
- **Desglose de 4 Pilares del Entregable:**
  1. *Mapas 2D / 3D:* Curvas maestras y pseudosecciones electromagnéticas generadas por el resistivímetro ADMT-300 ZN señalando la franja saturada de agua.
  2. *Cota de Perforación:* Profundidad exacta sugerida en metros para la maquinaria perforadora.
  3. *Punto GPS (T-1):* Coordenadas satelitales georreferenciadas in situ.
  4. *Respaldo Profesional:* Dictamen científico y memorando interpretativo firmado por ingeniero especialista.
- **Showcase de Hojas Reales del Informe:** Visor interactivo con 3 extractos de informes geofísicos reales de campo (Carátula, perfil estratigráfico 2D/3D y dictamen técnico) con modal de ampliación (zoom).
- **Descarga de Informe Modelo:** Botón de descarga directa al documento técnico oficial [ejemplo-informe-arcoin.pdf](file:///c:/Users/rhect/Documents/Proyectos/Arcoin/web/public/ejemplo-informe-arcoin.pdf).

### 5. Galería Interactiva de Campo ([Technology.tsx](file:///c:/Users/rhect/Documents/Proyectos/Arcoin/web/src/components/Technology.tsx#L350))
- **Depuración Visual:** Se eliminaron todos los textos explicativos y descripciones de las imágenes por no ser congruentes con las capturas de campo.
- **Galería Limpia & Lightbox Fullscreen:** Carrusel con 5 miniaturas táctiles interactivas (`/galery/campo_1.jpg` a `5.jpg`), navegación anterior/siguiente y modal a pantalla completa con soporte táctil.

### 6. Estética Dark Industrial Geocientífica
- Transformación visual de las secciones *Instrumental ADMT-300 ZN*, *Producto (Entregable)* y *Galería de Campo* desde fondos blancos convencionales hacia una paleta oscura premium (`bg-slate-950`), micro-malla electromagnética en gradiente radial y tarjetas en `slate-900/90` con bordes de precisión.
- Ocultamiento ordenado de las tarjetas auxiliares en [Services.tsx](file:///c:/Users/rhect/Documents/Proyectos/Arcoin/web/src/components/Services.tsx), otorgando protagonismo al módulo hidrogeológico principal.

### 7. Metodología Concéntrica & Video Comparativo ([Methodology.tsx](file:///c:/Users/rhect/Documents/Proyectos/Arcoin/web/src/components/Methodology.tsx))
- **Estructura Concéntrica:** Reorganización espacial colocando el video comparativo (*Sin SEV vs Con SEV*, `SINSERV.mp4`) en el centro exacto (columna de 6 espacios en escritorio), rodeado en las 4 esquinas por los pasos metodológicos (Paso 01 y 03 a la izquierda; Paso 02 y 04 a la derecha).
- **Ajuste de Video 16:9:** Aplicación de `aspect-video` y `object-contain` sobre fondo oscuro para evitar recortes de los títulos explicativos ("Sin SEV / Pozo Seco" vs "Con SEV / Acuífero Localizado") en cualquier tamaño de pantalla.

### 8. Auditoría y Optimización Responsive Mobile-First
- **Navegación Móvil ([Header.tsx](file:///c:/Users/rhect/Documents/Proyectos/Arcoin/web/src/components/Header.tsx)):** Escalado adaptativo del logo y badge del RIF para pantallas estrechas (<380px), menú hamburguesa fluido con `backdrop-blur-xl` y enlaces táctiles amplios.
- **Modal Legal ([LegalModal.tsx](file:///c:/Users/rhect/Documents/Proyectos/Arcoin/web/src/components/LegalModal.tsx)):** Altura dinámica con `h-[92dvh]`, scroll interior independiente y fijación de pestañas para evitar solapamientos con barras de navegación móviles.
- **Formularios & Botones:** Elementos táctiles adaptados a toques cómodos con retroalimentación visual en dispositivos táctiles.

### 9. Sección Hero Optimizada ([Hero.tsx](file:///c:/Users/rhect/Documents/Proyectos/Arcoin/web/src/components/Hero.tsx))
- **Video de Fondo Nítido:** Integración del video animado geofísico (`/demo-sev.mp4`) de fondo en bucle continuo con proporciones naturales, nitidez optimizada (`brightness-90 contrast-115`) y degradados cinematográficos para preservar la legibilidad.
- **Tarjeta Central Translúcida (Glassmorphism):** Eliminación del cuadro lateral derecho para evitar distorsión y sobrecarga, unificando la propuesta de valor y las llamadas a la acción en una tarjeta central de cristal oscuro (`bg-slate-950/75 backdrop-blur-md`).
- **Métricas Clave:** 4 tarjetas flotantes destacadas (*80-90% Tasa de Éxito*, *+45 Estudios en Nva. Esparta*, *±5-10% Margen de Profundidad*, *100% Método Científico*).

---

## Hitos Anteriores Alcanzados (Frontend & DevOps)
- **Arquitectura y Modularización:** SPA con React 18 + Vite, Tailwind v4, tipografías Orbitron / Inter.
- **SEO & Metadatos Corporativos:** Imagen Open Graph oficial (`og-image.jpg`, 151 KB, <300 KB para WhatsApp), Twitter Cards (`summary_large_image`), marcado Schema.org (`ProfessionalService`) y canonical en [index.html](file:///c:/Users/rhect/Documents/Proyectos/Arcoin/web/index.html).
- **Marco Legal y Regulatorio:** Términos de servicio según Ley de Aguas (G.O. N° 38.595), Privacidad según Art. 28 CRBV y Ley de Mensajes de Datos (G.O. N° 37.148), y Seguridad según Ley Especial Contra Delitos Informáticos (G.O. N° 37.313).
- **Despliegue & DevOps:** Dockerfile multi-etapa, servidor Nginx en Alpine para Easypanel, compresión Gzip, caché de assets, bloqueo de bots maliciosos y escáneres en `nginx.conf`, favicons (`favicon.ico`, `favicon.png`, `favicon.svg`).

---

### 10. Optimización SEO, Resolución de Bloqueo 403 e Indexación (23 de Octubre de 2026)
- **Verificación de Propiedad de Dominio:** Alta y verificación automática de `arcoinca.com` en **Google Search Console** mediante enlace de registros DNS con Cloudflare.
- **Diagnóstico y Corrección Crítica del Error 403 Forbidden a Googlebot:**
  - *Problema detectado:* Google Search Console reportó *"Obtención de página: Error: Se ha bloqueado debido a que el acceso no está permitido (403)"*.
  - *Causa raíz:* En [nginx.conf](file:///c:/Users/rhect/Documents/Proyectos/Arcoin/nginx.conf) la regla de bloqueo de scanners incluía la firma `HeadlessChrome`. Googlebot para Smartphones utiliza internamente motores headless basados en Chromium para renderizar el DOM y ejecutar scripts, recibiendo un 403 de rechazo inmediato.
  - *Solución:* Se depuró la regla eliminando `HeadlessChrome` e introduciendo una lista blanca prioritaria para crawlers legítimos (`Googlebot`, `bingbot`, `facebookexternalhit`, `WhatsApp`, etc.).
  - *Despliegue y Validación:* Se realizó commit (`19553a0`), push a GitHub y redeploy en Easypanel. Pruebas directas con `curl` simulando el renderizador de Googlebot confirmaron respuesta **HTTP 200 OK**.
- **Sitemap XML & Metadatos de Medios:** Actualizado [sitemap.xml](file:///c:/Users/rhect/Documents/Proyectos/Arcoin/web/public/sitemap.xml) con namespace oficial de Google Images (`xmlns:image`) enlazando `og-image.jpg` con fecha `2026-10-23`.
- **Datos Estructurados Schema.org Multi-Entidad en [index.html](file:///c:/Users/rhect/Documents/Proyectos/Arcoin/web/index.html):**
  - `ProfessionalService`: Catálogo explícito de servicios (`Sondeo Eléctrico Vertical`, `Tomografía Eléctrica 2D/3D`, `Cota de Perforación y Punto GPS`) y cobertura geo-local por municipios de Nueva Esparta (*Maneiro, Mariño, Arismendi, Península de Macanao, etc.*).
  - `FAQPage`: Esquema JSON-LD conectado a las preguntas frecuentes de [FAQ.tsx](file:///c:/Users/rhect/Documents/Proyectos/Arcoin/web/src/components/FAQ.tsx) para habilitar Rich Snippets (acordeones desplegables) en los resultados de Google.
  - *Palabras Clave Transaccionales:* Ajuste del título y descripciones hacia términos de alta intención de búsqueda local (*"pozos de agua Margarita"*, *"detección de agua subterránea"*, *"estudios de suelo para pozos"*).
- **Google Business Profile (Google Maps):**
  - Registro de la ficha empresarial oficial: categoría geología/geotecnia, descripción técnica optimizada para SEO local en Nueva Esparta, vinculación directa a WhatsApp y sitio web oficial.
- **Previsualización de Enlace en WhatsApp (Open Graph):**
  - Validación del crawler `facebookexternalhit/1.1` contra `https://arcoinca.com/`. Imagen oficial `og-image.jpg` optimizada en 151 KB (límite <300 KB exigido por WhatsApp) con ratio 1200x630.

---

## Próximos Pasos (Ideas a Futuro)
1. **Monitoreo de Cobertura en Search Console:** Verificar la transición de *"La URL se puede indexar"* a *"La URL está en Google"* tras la propagación de los servidores.
2. **Aprobación de Google Business Profile:** Comprobar la activación de la ficha en Google Maps para adueñarse del panel derecho en búsquedas de marca.
3. **Fase Backend (Hono.js / Base de datos):** En caso de requerir base de datos relacional para registrar prospectos antes del despacho de notificaciones.
4. **Analítica Web:** Integración de herramienta de analítica privada sin cookies (ej. Plausible o Cloudflare Web Analytics).

---
*Nota para el agente IA: Lee este archivo al inicio de futuras sesiones para recuperar todo el contexto arquitectónico y de decisiones de este proyecto.*
