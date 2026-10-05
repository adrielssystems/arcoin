# Memoria Persistente de Proyecto: ARCOIN Geofísica

**Fecha de última actualización:** 04 de Octubre de 2026
**Desarrollado por:** Adriel's Systems (IA Asistente Antigravity)

## Estado Actual del Proyecto
La "Landing Page" de ARCOIN Geofísica (Sondeos Eléctricos Verticales) ha sido diseñada, desarrollada y desplegada con éxito. La arquitectura fue simplificada a un flujo **Frontend-only** muy rápido, permitiendo a la empresa recibir cotizaciones estructuradas directamente a WhatsApp sin necesidad de un backend complejo en esta fase inicial.

## Hitos Alcanzados (Frontend & UX)
- **Migración a React 18 + Vite:** Se transformó la plantilla base HTML hacia una Single Page Application (SPA) modularizada en `App.tsx`.
- **Estilos y Componentes:** Implementación de Tailwind v4 y un sistema de diseño propio (Dark/Light mode contrastes, tipografías Orbitron/Inter).
- **Localización Hiper-Segmentada:** Todo el copy de la web fue reescrito para apuntar estrictamente al estado Nueva Esparta (Isla de Margarita, Coche y Cubagua), incluyendo un listado exacto de los municipios en el formulario.
- **Integración Multimedia Tecnológica:**
  - HUD Animado: Implementación de un video de escaneo en bucle (`demo-sev.mp4`) en la sección principal del "Resistivímetro V4".
  - Educación Interactiva: Se reemplazó la imagen estática de comparación por una animación concientizadora (`SINSERV.mp4`).
  - Fondo Científico: Configuración de la imagen generada por IA (`bg-instrumentacion.jpg`) con tema oscuro flotante (`bg-slate-900`) para la sección de hardware de campo.
- **Rediseño de FAQ (Acordeón):** Se migró el bloque de dudas a un sistema de acordeones HTML (`<details>`) con una tarjeta VIP exclusiva para los datos de contacto del Ing. S. Daniel Gómez B.
- **Simulador de Cotización Vía WhatsApp:** El formulario captura los campos (Nombre, Empresa, Municipio, Tipo y Detalles) y los inyecta en una plantilla enriquecida con emojis, redireccionando el "lead" directamente al chat corporativo.
- **Ajustes de Footer:** Se añadió el logo de Arcoin y la firma oficial de desarrollo (Adriel's Systems).

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
