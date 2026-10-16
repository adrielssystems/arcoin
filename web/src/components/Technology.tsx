import { useState } from 'react';

const fieldImages = [
  { src: '/galery/campo_1.jpg', label: 'Registro 01' },
  { src: '/galery/campo_2.jpg', label: 'Registro 02' },
  { src: '/galery/campo_3.jpg', label: 'Registro 03' },
  { src: '/galery/campo_4.jpg', label: 'Registro 04' },
  { src: '/galery/campo_5.jpg', label: 'Registro 05' }
];

export default function Technology() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activePhoto = fieldImages[selectedPhotoIndex];

  const handlePrev = () => {
    setSelectedPhotoIndex((prev) => (prev === 0 ? fieldImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedPhotoIndex((prev) => (prev === fieldImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Technology & Hardware Stack Section (Oculto temporalmente) */}
      <section className="hidden py-space-xl relative border-y border-outline-variant/30 overflow-hidden bg-slate-900" id="tecnologia">
        <div className="absolute inset-0 pointer-events-none">
          <img src="/bg-instrumentacion.jpg" alt="Fondo Instrumental" className="w-full h-full object-cover opacity-50 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/60 to-slate-900"></div>
        </div>
        <div className="max-w-7xl mx-auto px-space-md sm:px-space-xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-blue-300 font-semibold drop-shadow-md">INSTRUMENTACIÓN CIENTÍFICA</span>
            <h2 className="font-headline-lg text-headline-lg text-white font-orbitron mt-1 mb-3 drop-shadow-lg">Tecnología de Inversión y Hardware de Campo</h2>
            <p className="font-body-md text-body-md text-slate-300 drop-shadow-md">
              Adquisición y procesamiento de datos mediante hardware de alta precisión y software de simulación electromagnética estándar mundial.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/*  Tech Card 1  */}
            <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/40 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="font-orbitron font-bold text-headline-sm text-primary">01 / HARDWARE</span>
                <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-800 font-label-sm text-label-sm font-semibold">ALTO VOLTAJE</span>
              </div>
              <h3 className="font-title-md text-title-md text-primary font-orbitron mb-2">Resistivímetros ADMT &amp; GEO-300ZN</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 leading-relaxed">
                Equipos multicanal de inyección de potencia estabilizada con capacidad de penetración geofísica de hasta 300 metros de profundidad. Cuentan con filtros analógicos activos contra el ruido electromagnético industrial de líneas de alta tensión.
              </p>
              <div className="space-y-1 font-label-sm text-label-sm text-secondary font-code-spec bg-surface-bright p-2.5 rounded border border-outline-variant/20">
                <div>• Rango Voltaje: 0.1 μV a 32 V</div>
                <div>• Precisión de medición: ± 0.5%</div>
                <div>• Supresión de 50/60 Hz: &gt; 90 dB</div>
              </div>
            </div>
            {/*  Tech Card 2  */}
            <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/40 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="font-orbitron font-bold text-headline-sm text-primary">02 / MODELADO 2D</span>
                <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-800 font-label-sm text-label-sm font-semibold">INVERSIÓN CURVAS</span>
              </div>
              <h3 className="font-title-md text-title-md text-primary font-orbitron mb-2">Software Geofísico Ip2win</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 leading-relaxed">
                Ajuste de curvas maestras teóricas contra datos de campo de resistividad aparente para estratificación geológica detallada. Determinación inequívoca del espesor verdadero (h) y resistividad intrínseca (ρ) de cada estrato permeable.
              </p>
              <div className="space-y-1 font-label-sm text-label-sm text-secondary font-code-spec bg-surface-bright p-2.5 rounded border border-outline-variant/20">
                <div>• Inversión no lineal regularizada</div>
                <div>• Reducción de varianza litológica</div>
                <div>• Integración litológica de calibración</div>
              </div>
            </div>
            {/*  Tech Card 3  */}
            <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/40 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="font-orbitron font-bold text-headline-sm text-primary">03 / TOMOGRAFÍA 2D/3D</span>
                <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-800 font-label-sm text-label-sm font-semibold">ERT CONTINUA</span>
              </div>
              <h3 className="font-title-md text-title-md text-primary font-orbitron mb-2">Res2DInv &amp; Res3DInv Suite</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 leading-relaxed">
                Generación de tomografías eléctricas de resistividad (ERT) para perfiles continuos del subsuelo. Identificación milimétrica de paleocauces ciegos, acuíferos fracturados y domos de agua salina antes de perforar.
              </p>
              <div className="space-y-1 font-label-sm text-label-sm text-secondary font-code-spec bg-surface-bright p-2.5 rounded border border-outline-variant/20">
                <div>• Malla finita de alta resolución</div>
                <div>• Modelado de topografía irregular</div>
                <div>• Pseudosecciones 2D correlacionadas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADMT-300 ZN Video, Producto & Interactive Field Gallery Section */}
      <section className="py-space-xl relative overflow-hidden bg-slate-950 border-t border-slate-800" id="admt-300">
        {/* Subtle Geoelectrical Grid Pattern & Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-space-md sm:px-space-xl relative z-10">
          {/* Main ADMT Card with Video */}
          <div className="bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-700/80 overflow-hidden shadow-2xl mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950/80 text-blue-300 font-label-sm text-label-sm mb-4 w-fit border border-blue-500/40">
                  <span className="material-symbols-outlined text-[16px] text-blue-400">memory</span>
                  INSTRUMENTAL DE ALTA GAMA
                </div>
                <h2 className="font-headline-lg text-headline-lg text-white font-orbitron mb-4">Tecnología ADMT-300 ZN Serie O36K</h2>
                <p className="font-body-lg text-slate-300 mb-6 leading-relaxed">Nuestros estudios en la Isla de Margarita se realizan con el resistivímetro inteligente <strong>ADMT-300 ZN Serie O36K</strong>. Permite mapeo electromagnético automático de alta precisión, garantizando la lectura exacta de acuíferos en las condiciones geológicas únicas de Nueva Esparta.</p>
                <ul className="space-y-3 font-body-sm text-slate-200 mb-8">
                  <li className="flex items-start gap-2.5"><span className="text-emerald-400 font-bold mt-0.5 text-base">✓</span> <span><strong className="text-white">Profundidad de escaneo:</strong> Hasta 300 metros de medición real.</span></li>
                  <li className="flex items-start gap-2.5"><span className="text-emerald-400 font-bold mt-0.5 text-base">✓</span> <span><strong className="text-white">Confiabilidad antiruido:</strong> Filtro activo contra interferencias urbanas y líneas eléctricas de alto voltaje (ideal para zonas pobladas como Porlamar o Pampatar).</span></li>
                  <li className="flex items-start gap-2.5"><span className="text-emerald-400 font-bold mt-0.5 text-base">✓</span> <span><strong className="text-white">Generación de Tomografía:</strong> Levantamiento de mapas 2D y 3D directamente en campo.</span></li>
                </ul>
              </div>
              <div className="bg-slate-950 relative min-h-[340px] lg:min-h-full flex flex-col justify-center p-4 sm:p-6 lg:p-8">
                {/* Visual Technical Frame */}
                <div className="relative w-full rounded-xl overflow-hidden border border-slate-700/80 shadow-2xl bg-black group">
                  {/* Top Technical Status Bar */}
                  <div className="px-3 py-1.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-[11px] font-code-spec text-slate-300">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="font-bold text-white tracking-wider">ADMT-300ZN // DEMOSTRACIÓN</span>
                    </div>
                    <span className="text-amber-400 font-semibold uppercase tracking-wider">Audio: Español</span>
                  </div>

                  {/* Video Player */}
                  <div className="relative aspect-video bg-black flex items-center justify-center">
                    <video 
                      controls 
                      playsInline 
                      preload="metadata"
                      poster="/admt-300-poster.jpg"
                      className="w-full h-full object-contain"
                    >
                      <source src="/1016.mp4" type="video/mp4" />
                      Tu navegador no soporta la reproducción de video.
                    </video>
                  </div>

                  {/* Bottom Feature Pill Footer */}
                  <div className="px-3 py-2 bg-slate-900/95 border-t border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
                      <span className="material-symbols-outlined text-[15px] text-emerald-400">volume_up</span>
                      <span>Doblaje y explicación técnica en español</span>
                    </div>
                    <span className="text-[10px] font-code-spec px-1.5 py-0.5 rounded bg-blue-900/40 text-blue-300 border border-blue-700/50">
                      MODELADO 2D / 3D
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECCIÓN PRODUCTO // ENTREGABLES DEL ESTUDIO */}
          <div className="bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-700/80 p-6 sm:p-8 lg:p-10 shadow-2xl mb-12" id="producto">
            {/* Header del Producto */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-6 border-b border-slate-800">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950/80 text-blue-300 font-label-sm text-label-sm mb-3 border border-blue-500/40">
                  <span className="material-symbols-outlined text-[16px] text-blue-400">description</span>
                  PRODUCTO FINAL // ENTREGABLE TÉCNICO OFICIAL
                </div>
                <h3 className="font-orbitron font-bold text-headline-sm sm:text-headline-md text-white tracking-tight">
                  ¿Qué Recibe el Cliente al Finalizar el Estudio?
                </h3>
                <p className="font-body-md text-body-md text-slate-300 mt-2 leading-relaxed">
                  No dejamos margen a la especulación. Al culminar la prospección, el cliente recibe un <strong className="text-white">Informe Geofísico Certificado</strong> listo para entregar a la empresa perforadora, con respaldo y firma de ingenieros especialistas en prospección hidrogeológica.
                </p>
              </div>

              {/* Botón de Descarga / Vista de Informe */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                <a
                  href="/ejemplo-informe-arcoin.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-title-sm text-title-sm hover:from-blue-500 hover:to-sky-400 shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 active:scale-95 transition-all"
                >
                  <span className="material-symbols-outlined text-[20px]">download</span>
                  <span>Ver Informe Ejemplo (PDF)</span>
                </a>
              </div>
            </div>

            {/* Grid de 4 Pilares del Entregable */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-blue-500/50 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-blue-950 text-blue-400 flex items-center justify-center mb-3 border border-blue-800/50 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">layers</span>
                </div>
                <h4 className="font-orbitron font-bold text-title-sm text-white mb-1.5">
                  1. Mapas 2D / 3D
                </h4>
                <p className="text-body-sm text-slate-400 leading-relaxed text-[12px]">
                  Curvas maestras y pseudosecciones electromagnéticas generadas por el ADMT-300 ZN señalando la franja saturada de agua.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-emerald-500/50 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center mb-3 border border-emerald-800/50 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">straighten</span>
                </div>
                <h4 className="font-orbitron font-bold text-title-sm text-white mb-1.5">
                  2. Cota de Perforación
                </h4>
                <p className="text-body-sm text-slate-400 leading-relaxed text-[12px]">
                  Profundidad exacta sugerida (en metros) para que la maquinaria perforadora alcance el nivel de producción óptimo sin sobrecostos.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-amber-500/50 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-amber-950 text-amber-400 flex items-center justify-center mb-3 border border-amber-800/50 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">my_location</span>
                </div>
                <h4 className="font-orbitron font-bold text-title-sm text-white mb-1.5">
                  3. Punto GPS (T-1)
                </h4>
                <p className="text-body-sm text-slate-400 leading-relaxed text-[12px]">
                  Coordenadas satelitales georreferenciadas in situ donde convergen las anomalías hidrogeológicas más favorables.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-purple-500/50 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-purple-950 text-purple-400 flex items-center justify-center mb-3 border border-purple-800/50 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">verified_user</span>
                </div>
                <h4 className="font-orbitron font-bold text-title-sm text-white mb-1.5">
                  4. Respaldo Profesional
                </h4>
                <p className="text-body-sm text-slate-400 leading-relaxed text-[12px]">
                  Dictamen científico y memorando interpretativo firmado por ingeniero especialista para total respaldo técnico de su obra.
                </p>
              </div>
            </div>

            {/* Visor Interactivo de Hojas Reales del Informe */}
            <div className="bg-slate-900 rounded-xl p-4 sm:p-6 border border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-code-spec text-white text-[12px] font-bold tracking-wider">
                    DOCUMENTACIÓN FÍSICA Y DIGITAL • EXTRACTO DE CASO REAL
                  </span>
                </div>
                <span className="text-slate-400 text-[11px] font-code-spec">
                  Estudio SEV Sector Guarame • Antolín del Campo
                </span>
              </div>

              {/* Showcase de 3 hojas representativas del informe */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Hoja 1: Carátula e Identificación */}
                <div className="rounded-lg overflow-hidden bg-white border border-slate-700/80 shadow-md flex flex-col group">
                  <div className="px-3 py-1.5 bg-slate-100 border-b border-slate-200 text-slate-800 font-code-spec text-[10px] font-bold flex justify-between items-center">
                    <span>HOJA 01 // PORTADA</span>
                    <span className="text-emerald-700">VALIDEZ LEGAL</span>
                  </div>
                  <div className="aspect-[3/4] overflow-hidden bg-white p-2">
                    <img 
                      src="/informe_p2.png" 
                      alt="Carátula e identificación del informe" 
                      className="w-full h-full object-contain group-hover:scale-102 transition-transform shadow-xs" 
                    />
                  </div>
                  <div className="p-3 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-700">
                    <strong>Datos de prospección:</strong> Identificación del predio, coordenadas geográficas y fecha de calibración.
                  </div>
                </div>

                {/* Hoja 2: Mapeo y Gráfico 2D/3D ADMT */}
                <div className="rounded-lg overflow-hidden bg-white border-2 border-primary/50 shadow-md flex flex-col group relative">
                  <div className="px-3 py-1.5 bg-blue-900 text-white font-code-spec text-[10px] font-bold flex justify-between items-center">
                    <span>HOJA 02 // GRÁFICA ADMT-300</span>
                    <span className="text-amber-300">NÚCLEO TÉCNICO</span>
                  </div>
                  <div className="aspect-[3/4] overflow-hidden bg-white p-2">
                    <img 
                      src="/informe_p4.png" 
                      alt="Mapeo y tablas de resistividad ADMT-300" 
                      className="w-full h-full object-contain group-hover:scale-102 transition-transform shadow-xs" 
                    />
                  </div>
                  <div className="p-3 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-700">
                    <strong>Tomografía geoeléctrica:</strong> Matriz de resistividad por cada 10 metros y modelado 2D del terreno.
                  </div>
                </div>

                {/* Hoja 3: Conclusión y Cota Recomendada */}
                <div className="rounded-lg overflow-hidden bg-white border border-slate-700/80 shadow-md flex flex-col group">
                  <div className="px-3 py-1.5 bg-slate-100 border-b border-slate-200 text-slate-800 font-code-spec text-[10px] font-bold flex justify-between items-center">
                    <span>HOJA 03 // DICTAMEN FINAL</span>
                    <span className="text-emerald-700">COTA PRECISA</span>
                  </div>
                  <div className="aspect-[3/4] overflow-hidden bg-white p-2">
                    <img 
                      src="/informe_p7.png" 
                      alt="Conclusión y firma de ingeniero especialista" 
                      className="w-full h-full object-contain group-hover:scale-102 transition-transform shadow-xs" 
                    />
                  </div>
                  <div className="p-3 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-700">
                    <strong>Recomendación precisa:</strong> Cota sugerida (ej. 35 - 40 mts) y firma del <strong>Ingeniero Geofísico Responsable</strong>.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Clean Interactive Field Gallery Component (Dark Industrial Theme) */}
          <div className="bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-700/80 p-6 sm:p-8 shadow-2xl">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
                <h3 className="font-orbitron font-bold text-title-md sm:text-headline-sm text-white tracking-tight">
                  Galería de Trabajo de Campo • ADMT-300 ZN
                </h3>
              </div>

              {/* Navigation Arrows & Counter */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-lg border border-slate-700 bg-slate-800/80 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-all active:scale-95 shadow-xs"
                  aria-label="Foto anterior"
                >
                  <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                </button>
                <span className="font-code-spec text-[12px] font-bold text-slate-300 px-2 min-w-[50px] text-center">
                  {selectedPhotoIndex + 1} / {fieldImages.length}
                </span>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-9 h-9 rounded-lg border border-slate-700 bg-slate-800/80 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-all active:scale-95 shadow-xs"
                  aria-label="Foto siguiente"
                >
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Clean Main Showcase */}
            <div 
              className="relative group rounded-xl overflow-hidden border border-outline-variant/40 bg-slate-950 shadow-lg cursor-pointer aspect-[16/10] sm:aspect-[21/10] w-full flex items-center justify-center"
              onClick={() => setIsModalOpen(true)}
            >
              <img 
                key={activePhoto.src}
                src={activePhoto.src} 
                alt={`Trabajo de campo ADMT-300 ZN - Foto ${selectedPhotoIndex + 1}`}
                className="w-full h-full object-contain sm:object-cover object-center group-hover:scale-102 transition-transform duration-500 animate-fadeIn" 
              />

              {/* Minimal Interactive Badges */}
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-md border border-white/20 text-[11px] font-code-spec tracking-wider">
                FOTO 0{selectedPhotoIndex + 1}
              </div>

              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-md border border-white/20 text-[11px] font-semibold flex items-center gap-1.5 group-hover:bg-primary transition-colors shadow">
                <span className="material-symbols-outlined text-[15px]">fullscreen</span>
                <span>Ampliar</span>
              </div>

              {/* Inline Arrow Buttons over Main Photo */}
              <button 
                type="button" 
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-primary text-white flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 shadow"
                aria-label="Anterior"
              >
                <span className="material-symbols-outlined text-[20px]">chevron_left</span>
              </button>
              <button 
                type="button" 
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-primary text-white flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 shadow"
                aria-label="Siguiente"
              >
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
              </button>
            </div>

            {/* Clean Interactive Thumbnails Strip */}
            <div className="grid grid-cols-5 gap-2 sm:gap-4 mt-4">
              {fieldImages.map((img, idx) => {
                const isSelected = idx === selectedPhotoIndex;
                return (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setSelectedPhotoIndex(idx)}
                    className={`relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all cursor-pointer group bg-black active:scale-95 ${
                      isSelected 
                        ? 'border-primary shadow-md ring-2 ring-primary/30 scale-102' 
                        : 'border-outline-variant/30 opacity-70 hover:opacity-100 hover:border-primary/50'
                    }`}
                  >
                    <img 
                      src={img.src} 
                      alt={`Miniatura ${idx + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute bottom-1 right-1 bg-black/70 backdrop-blur-xs text-white text-[9px] font-code-spec px-1 rounded">
                      0{idx + 1}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Fullscreen View (Clean, No Descriptions) */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Counter & Close Button */}
            <div className="w-full flex items-center justify-between text-white mb-2 px-2">
              <span className="font-code-spec text-[12px] text-slate-300">
                FOTO {selectedPhotoIndex + 1} DE {fieldImages.length}
              </span>
              <button 
                type="button" 
                onClick={() => setIsModalOpen(false)}
                className="text-white hover:text-rose-400 flex items-center gap-1 font-semibold text-label-md cursor-pointer"
              >
                <span>Cerrar</span>
                <span className="material-symbols-outlined text-[22px]">close</span>
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative rounded-xl overflow-hidden border border-white/20 bg-black shadow-2xl max-h-[82vh] w-full flex items-center justify-center">
              <img 
                src={activePhoto.src} 
                alt={`Registro de campo ADMT-300 ZN ${selectedPhotoIndex + 1}`}
                className="max-h-[80vh] w-auto max-w-full object-contain mx-auto" 
              />
              <button 
                type="button" 
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-primary text-white flex items-center justify-center transition-all shadow cursor-pointer"
                aria-label="Anterior"
              >
                <span className="material-symbols-outlined text-[24px]">chevron_left</span>
              </button>
              <button 
                type="button" 
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-primary text-white flex items-center justify-center transition-all shadow cursor-pointer"
                aria-label="Siguiente"
              >
                <span className="material-symbols-outlined text-[24px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


