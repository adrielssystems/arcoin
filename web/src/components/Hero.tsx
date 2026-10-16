export default function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white py-12 lg:py-16">
      {/* Video de Fondo Geofísico HD en proporción natural */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover lg:object-contain 2xl:object-cover scale-105 filter brightness-90 contrast-115"
        >
          <source src="/demo-sev.mp4" type="video/mp4" />
        </video>
        {/* Capa de protección de contraste cinematográfica (no oscurece de golpe) */}
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[0.5px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-transparent to-slate-950/85"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 w-full flex flex-col items-center text-center">
        {/* Top Micro Data Ribbon */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/80 font-label-sm text-label-sm shadow-md">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 ring-4 ring-amber-400/20 animate-pulse"></span>
            <span className="font-orbitron font-bold text-xs sm:text-sm text-white tracking-wide">
              SONDEO GEOELÉCTRICO DE PROFUNDIDAD
            </span>
          </div>
          <span className="hidden sm:inline text-slate-500">•</span>
          <span className="font-code-spec text-amber-300 text-xs sm:text-sm">Hasta 300 Mts. de profundidad</span>
        </div>

        {/* Tarjeta Central Glassmorphism Ultra Nítida */}
        <div className="w-full bg-slate-950/75 backdrop-blur-md rounded-2xl border border-slate-700/80 p-6 sm:p-10 shadow-2xl relative overflow-hidden group">
          {/* Tag de Ubicación */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-500/50 text-amber-300 font-label-sm text-label-sm mb-4">
            <span className="material-symbols-outlined text-[15px] text-amber-400" data-icon="radar">radar</span>
            <span className="tracking-wider font-semibold">MÁXIMA EFICIENCIA HIDROGEOLÓGICA EN NUEVA ESPARTA</span>
          </div>

          {/* Título Principal */}
          <h1 className="font-headline-xl text-headline-xl text-white tracking-tight mb-4 font-orbitron drop-shadow-md">
            Precisión Geofísica Subterránea: <span className="text-amber-400 block text-headline-lg font-headline-lg font-orbitron mt-1">Certeza Científica antes de Perforar</span>
          </h1>

          {/* Subtítulo Descriptivo */}
          <p className="font-body-lg text-body-lg text-slate-200 max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-sm">
            Elimine el riesgo de pozos secos en la Isla de Margarita. Mapeamos acuíferos, espesores litológicos y profundidad exacta mediante <strong className="text-white font-semibold">Sondeo Eléctrico Vertical (SEV) multielectródico</strong> con una tasa de éxito del 80-90% verificada en campo.
          </p>

          {/* Botones de Conversión */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch justify-center max-w-xl mx-auto mb-6">
            <a 
              className="flex-1 inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-title-sm text-title-sm shadow-lg shadow-emerald-950/50 hover:shadow-emerald-500/30 hover:-translate-y-1 hover:scale-102 active:scale-95 transition-all text-center" 
              href="https://wa.me/584166967096?text=Hola%20ARCOIN,%20deseo%20realizar%20una%20consulta%20sobre%20el%20estudio%20SEV" 
              rel="noopener noreferrer" 
              target="_blank"
            >
              <span className="material-symbols-outlined text-[20px]" data-icon="phone_in_talk">phone_in_talk</span>
              <span>Consulta por WhatsApp</span>
            </a>
            <a 
              className="flex-1 inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-title-sm text-title-sm shadow-lg shadow-blue-950/50 hover:shadow-blue-500/30 hover:-translate-y-1 hover:scale-102 active:scale-95 transition-all text-center" 
              href="#cotizar"
            >
              <span>Solicitar Cotización</span>
              <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-label-sm font-label-sm text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Equipos y personal activo en toda la Isla de Margarita</span>
          </div>
        </div>

        {/* 4 Métricas Clave Flotantes */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6">
          <div className="bg-slate-900/80 backdrop-blur-md p-3.5 rounded-xl border border-slate-700/80 shadow-md">
            <div className="font-orbitron font-bold text-headline-sm sm:text-headline-md text-white">80-90%</div>
            <div className="font-label-sm text-label-sm text-slate-300 uppercase mt-0.5">Tasa de Éxito</div>
          </div>
          <div className="bg-slate-900/80 backdrop-blur-md p-3.5 rounded-xl border border-slate-700/80 shadow-md">
            <div className="font-orbitron font-bold text-headline-sm sm:text-headline-md text-white">+45</div>
            <div className="font-label-sm text-label-sm text-slate-300 uppercase mt-0.5">Estudios en Nva. Esparta</div>
          </div>
          <div className="bg-slate-900/80 backdrop-blur-md p-3.5 rounded-xl border border-slate-700/80 shadow-md">
            <div className="font-orbitron font-bold text-headline-sm sm:text-headline-md text-amber-400">±5-10%</div>
            <div className="font-label-sm text-label-sm text-slate-300 uppercase mt-0.5">Margen Profundidad</div>
          </div>
          <div className="bg-slate-900/80 backdrop-blur-md p-3.5 rounded-xl border border-slate-700/80 shadow-md">
            <div className="font-orbitron font-bold text-headline-sm sm:text-headline-md text-emerald-400">100%</div>
            <div className="font-label-sm text-label-sm text-slate-300 uppercase mt-0.5">Método Científico</div>
          </div>
        </div>
      </div>
    </section>
  );
}
