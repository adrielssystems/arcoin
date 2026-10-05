export default function Hero() {
  return (
    <section className="relative pt-space-lg pb-space-xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-space-md sm:px-space-xl">
        {/*  Top Micro Data Ribbon  */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-3 border-b border-outline-variant/30 font-label-sm text-label-sm text-secondary">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-semibold border border-outline-variant/40">GEO-SYS ID: SEV-VN-2026-X</span>
            <span className="text-on-surface-variant">SONDEO GEOELÉCTRICO DE PROFUNDIDAD CERTIFICADO</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Mapeo Resistivo Multicapa</span>
            <span className="hidden md:inline text-outline-variant">|</span>
            <span className="font-code-spec text-on-surface">AB/2: 250m | MN/2: 20m</span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/*  Left Column: Hero Value Proposition & Fast Conversion (7 Cols)  */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 font-label-sm text-label-sm mb-4 w-fit">
              <span className="material-symbols-outlined text-[14px] text-amber-600" data-icon="radar">radar</span>
              <span>MÁXIMA EFICIENCIA HIDROGEOLÓGICA EN NUEVA ESPARTA</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight mb-4 font-orbitron">
              Precisión Geofísica Subterránea: <span className="text-tertiary-container block text-headline-lg font-headline-lg font-orbitron mt-1">Certeza Científica antes de Perforar</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-6 leading-relaxed">
              Elimine el riesgo de pozos secos en la Isla de Margarita. Mapeamos acuíferos, espesores litológicos y profundidad exacta mediante <strong className="text-on-surface font-semibold">Sondeo Eléctrico Vertical (SEV) multielectródico</strong> con una tasa de éxito del 80-90% verificada en campo.
            </p>
            {/*  Fast-Track Lead Gen Action Box  */}
            <div className="bg-surface-container-lowest p-space-md rounded-xl border border-outline-variant/40 shadow-sm mb-8 crosshair-corner">
              <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                <a className="flex-1 inline-flex justify-center items-center gap-2 px-5 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-title-sm text-title-sm shadow-lg hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-1.5 hover:scale-105 active:scale-90 transition-all duration-300 ease-out text-center relative overflow-hidden group" href="https://wa.me/584166967096?text=Solicito%20consulta%20con%20Ingeniero%20Geof%C3%ADsico%20sobre%20SEV" rel="noopener noreferrer" target="_blank">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_3s_infinite_1s]"></div>
                  <span className="relative z-10 material-symbols-outlined" data-icon="phone_in_talk">phone_in_talk</span>
                  <span className="relative z-10">Consultar por WhatsApp con Ingeniero Geofísico</span>
                </a>
                <a className="inline-flex justify-center items-center gap-2 px-5 py-3.5 rounded-lg bg-primary-container hover:bg-primary text-white font-title-sm text-title-sm shadow-lg hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1.5 hover:scale-105 active:scale-90 transition-all duration-300 ease-out text-center group relative overflow-hidden" href="#cotizar">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_3s_infinite]"></div>
                  <span className="relative z-10">Solicitar Cotización Inmediata</span>
                  <span className="relative z-10 material-symbols-outlined text-[18px] group-hover:translate-x-1.5 transition-transform duration-300" data-icon="arrow_forward">arrow_forward</span>
                </a>
              </div>
              <div className="mt-3 flex items-center justify-between text-label-sm font-label-sm text-secondary pt-2 border-t border-outline-variant/20">
                <span className="flex items-center gap-1.5 text-on-surface-variant">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Equipos activos en toda la Isla de Margarita</span>
                </span>
                <span className="hidden sm:inline font-mono">Disponibilidad Inmediata</span>
              </div>
            </div>
            {/*  Fast Metric Badges 4x Grid  */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/30">
                <div className="font-orbitron font-bold text-headline-sm text-primary">80-90%</div>
                <div className="font-label-sm text-label-sm text-secondary uppercase">Tasa de Éxito</div>
              </div>
              <div className="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/30">
                <div className="font-orbitron font-bold text-headline-sm text-primary">+650</div>
                <div className="font-label-sm text-label-sm text-secondary uppercase">Estudios en Nva. Esparta</div>
              </div>
              <div className="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/30">
                <div className="font-orbitron font-bold text-headline-sm text-amber-600">±5-10%</div>
                <div className="font-label-sm text-label-sm text-secondary uppercase">Margen Profundidad</div>
              </div>
              <div className="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/30">
                <div className="font-orbitron font-bold text-headline-sm text-primary">CIV</div>
                <div className="font-label-sm text-label-sm text-secondary uppercase">Colegiatura Oficial</div>
              </div>
            </div>
          </div>
          {/*  Right Column: Interactive Telemetry 3D Bento Display (5 Cols)  */}
          <div className="lg:col-span-5">
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 shadow-xl overflow-hidden">
              {/*  Hardware / Telemetry Header  */}
              <div className="px-4 py-2.5 bg-surface-container-high flex items-center justify-between border-b border-outline-variant/30 font-label-sm text-label-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-primary" data-icon="terminal">terminal</span>
                  <span className="font-code-spec font-bold text-primary">ARCOIN-SEV // RESISTIVÍMETRO V4</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-code-spec text-[10px] font-semibold">SEÑAL SIN RUIDO: 99.4%</span>
              </div>
              {/*  Image Asset with Visual Technical Cutaway  */}
              <div className="relative bg-slate-950 aspect-[4/5] sm:aspect-[16/10] overflow-hidden group flex items-center justify-center">
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-screen">
                  <source src="/demo-sev.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/80 pointer-events-none"></div>
                
                {/*  Real-time Geoelectrical Telemetry Floating HUD  */}
                <div className="absolute bottom-3 left-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md p-3 rounded-lg border border-white/60 shadow-lg text-on-surface">
                  <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-outline-variant/20">
                    <span className="font-label-sm text-label-sm font-bold text-primary flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px] text-amber-500" data-icon="water_drop">water_drop</span>
                      ACUÍFERO DETECTADO EN FORMACIÓN
                    </span>
                    <span className="font-label-sm text-label-sm bg-primary/10 text-primary px-1.5 py-0.5 rounded font-mono">SEV-PUNTO #04</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center font-label-sm">
                    <div className="bg-surface-bright p-1.5 rounded border border-outline-variant/20">
                      <div className="text-secondary text-[10px]">Prof. Total</div>
                      <div className="font-orbitron font-bold text-primary text-body-md">120 m</div>
                    </div>
                    <div className="bg-surface-bright p-1.5 rounded border border-outline-variant/20">
                      <div className="text-secondary text-[10px]">Nivel Freático</div>
                      <div className="font-orbitron font-bold text-emerald-600 text-body-md">42.5 m</div>
                    </div>
                    <div className="bg-surface-bright p-1.5 rounded border border-outline-variant/20">
                      <div className="text-secondary text-[10px]">Caudal Est.</div>
                      <div className="font-orbitron font-bold text-primary text-body-md">14 L/s</div>
                    </div>
                    <div className="bg-surface-bright p-1.5 rounded border border-outline-variant/20">
                      <div className="text-secondary text-[10px]">Confiabilidad</div>
                      <div className="font-orbitron font-bold text-amber-600 text-body-md">94.8%</div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  Schlumberger Inversion Data Breakdown  */}
              <div className="p-4 bg-surface-bright border-t border-outline-variant/20 font-body-sm text-body-sm">
                <div className="flex flex-col mb-3 gap-1 border-b border-outline-variant/20 pb-2">
                  <span className="font-label-md text-label-md text-primary font-semibold leading-tight">Perfil Estratigráfico Invertido:</span>
                  <span className="text-[10px] text-secondary font-code-spec">Algoritmo: Marquardt-Levenberg</span>
                </div>
                <div className="space-y-2 font-code-spec text-label-sm text-on-surface-variant">
                  <div className="flex justify-between items-start bg-white px-2.5 py-2 rounded border border-outline-variant/20 gap-2">
                    <div className="flex flex-col min-w-0">
                      <span className="font-bold text-primary leading-tight">0.0 - 4.5m</span>
                      <span className="text-[10px] text-secondary truncate sm:whitespace-normal">Suelo vegetal / Arcilla plástica</span>
                    </div>
                    <span className="text-secondary bg-surface-bright px-1.5 py-0.5 rounded text-[10px] whitespace-nowrap border border-outline-variant/30">ρ: 18.2 Ω·m</span>
                  </div>
                  <div className="flex justify-between items-start bg-white px-2.5 py-2 rounded border border-outline-variant/20 gap-2">
                    <div className="flex flex-col min-w-0">
                      <span className="font-bold text-primary leading-tight">4.5 - 28.0m</span>
                      <span className="text-[10px] text-secondary truncate sm:whitespace-normal">Limo arenoso consolidado</span>
                    </div>
                    <span className="text-secondary bg-surface-bright px-1.5 py-0.5 rounded text-[10px] whitespace-nowrap border border-outline-variant/30">ρ: 64.0 Ω·m</span>
                  </div>
                  <div className="flex justify-between items-start bg-emerald-50 px-2.5 py-2 rounded border border-emerald-300 gap-2 shadow-sm">
                    <div className="flex flex-col min-w-0">
                      <span className="font-bold text-emerald-800 leading-tight">28.0 - 75.0m</span>
                      <span className="text-[10px] text-emerald-700/80 font-semibold truncate sm:whitespace-normal">Arena gruesa saturada [Acuífero]</span>
                    </div>
                    <span className="text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded text-[10px] whitespace-nowrap border border-emerald-200 font-bold">ρ: 142.5 Ω·m</span>
                  </div>
                  <div className="flex justify-between items-start bg-white px-2.5 py-2 rounded border border-outline-variant/20 gap-2">
                    <div className="flex flex-col min-w-0">
                      <span className="font-bold text-primary leading-tight">&gt; 75.0m</span>
                      <span className="text-[10px] text-secondary truncate sm:whitespace-normal">Basamento rocoso impermeable</span>
                    </div>
                    <span className="text-secondary bg-surface-bright px-1.5 py-0.5 rounded text-[10px] whitespace-nowrap border border-outline-variant/30">ρ: 890.0 Ω·m</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
