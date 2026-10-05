# Memoria Persistente de Proyecto: ARCOIN Geofísica

**Fecha de última actualización:** 05 de Octubre de 2026
**Desarrollado por:** Adriel's Systems (IA Asistente Antigravity)

## Estado Actual del Proyecto
La "Landing Page" de ARCOIN Geofísica ha alcanzado un estado 100% "Production-Ready". La arquitectura fue simplificada a un flujo **Frontend-only** altamente optimizado y modularizado, enriquecido con una Interfaz de Usuario (UX) premium y animaciones de alta conversión que permite a la empresa recibir leads directamente a WhatsApp.

## Hitos Alcanzados (Frontend & UX)
- **Arquitectura y Modularización:** Se transformó la plantilla base HTML hacia una SPA con React 18 + Vite. Se refactorizó un archivo monolítico `App.tsx` de más de 900 líneas en más de 10 componentes limpios e independientes dentro de `src/components/`.
- **Estilos y UX Premium:** 
  - Implementación de Tailwind v4 con tipografías corporativas (Orbitron/Inter).
  - **Microanimaciones Avanzadas:** Se integró un sistema de interacciones dinámicas de primer nivel: animaciones continuas automáticas (efectos de luz/shimmer), levitaciones 3D al pasar el cursor y respuestas táctiles (`active:scale`) en todos los botones de conversión (CTAs).
- **Optimización Mobile-First:** Se solucionaron bloqueadores visuales en smartphones, corrigiendo la relación de aspecto del video de la maquinaria, limpiando el header superior para destacar el logo corporativo y rediseñando el menú hamburguesa.
- **Localización Hiper-Segmentada:** Copywriting apuntado estrictamente a Nueva Esparta (Isla de Margarita, Coche y Cubagua), con selectores municipales en el formulario.
- **Integración Multimedia Tecnológica:** Interfaz HUD animada (`demo-sev.mp4`), comparativa interactiva contra pozos secos (`SINSERV.mp4`) y fondos temáticos industriales oscuros.
- **Simulador de Cotización Vía WhatsApp:** Redirección automática de variables (Nombre, Empresa, Municipio, Tipo) a una plantilla corporativa en WhatsApp.
- **Build de Producción Generado:** Compilación exitosa sin errores (`npm run build`), directorio `dist/` empaquetado y listo para carga a servidor remoto.

## Hitos de Despliegue (DevOps)
- **Configuración Docker (Easypanel):**
  - Creación de un `Dockerfile` multi-etapa en la raíz del proyecto.
  - Implementación de un servidor `nginx:alpine` con `nginx.conf` dedicado para manejar las rutas SPA, la compresión Gzip y la caché agresiva de imágenes y videos.
  - Corrección de errores de contexto en GitHub (Push Protection por API Keys en local) y errores estrictos de TypeScript (`TS6133: 'React' is never read`).
- **Control de Versiones:** Repositorio en GitHub configurado (`adrielssystems/arcoin.git`).

## Próximos Pasos (Ideas a Futuro)
Si en el futuro la empresa ARCOIN requiere automatizar más los procesos, estas son las vías sugeridas:
1. **Fase Backend (Hono.js):** Construir la API que interceptó el formulario originalmente propuesta, para guardar el historial de clientes en una base de datos antes de enviar al usuario a WhatsApp.
2. **Integración con QuickBooks:** Enviar la información directamente a la contabilidad/CRM para generar un borrador de factura (Estimate) automático.
3. **Optimización SEO Avanzada:** Ajustar metadatos e indexación cuando el subdominio (`arcoin.adrielssystems.com`) empiece a recibir tráfico orgánico.

---
*Nota para el agente IA: Lee este archivo al inicio de futuras sesiones para recuperar todo el contexto arquitectónico y de decisiones de este proyecto.*
