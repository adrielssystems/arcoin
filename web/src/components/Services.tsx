export default function Services() {
  return (
    <section className="py-space-xl" id="servicios">
      <div className="max-w-7xl mx-auto px-space-md sm:px-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">DIVISIÓN TÉCNICA ESPECIALIZADA</span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-orbitron mt-1">Servicios Geofísicos de Campo</h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Diagnósticos geofísicos conformes a normativas internacionales ASTM D6431 y estándares del Colegio de Ingenieros de Venezuela.
          </p>
        </div>
        {/*  Bento Grid (8 Col + 4 Col Layout)  */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/*  Bento Card A: Detección de Agua Subterránea & Estudios de Impacto Ambiental (Full Width: 12 cols)  */}
          <div className="lg:col-span-12 bg-surface-container-lowest rounded-xl border border-outline-variant/40 p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-outline-variant/20">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-primary-container text-white flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[24px] sm:text-[28px]" data-icon="water_drop">water_drop</span>
                </div>
                <div className="min-w-0">
                  <span className="font-label-sm text-xs sm:text-sm text-primary font-code-spec font-semibold block mb-0.5 tracking-wider">
                    SERVICIOS PRINCIPALES // MOD-HYDRO
                  </span>
                  <h3 className="font-orbitron font-bold text-title-lg sm:text-headline-md text-primary leading-tight">
                    Detección de Agua Subterránea &amp; Estudios de Impacto Ambiental
                  </h3>
                </div>
              </div>
              <div className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-label-sm text-xs font-semibold self-start sm:self-center shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>COBERTURA TOTAL NUEVA ESPARTA</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
              {/*  Columna 1: Detección de Agua Subterránea (Núcleo Técnico)  */}
              <div className="lg:col-span-4 bg-gradient-to-b from-surface-bright/90 to-surface-container-high/40 p-4 sm:p-6 rounded-xl border border-outline-variant/30 flex flex-col justify-between shadow-2xs relative overflow-hidden">
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary font-label-sm text-xs font-semibold mb-3 tracking-wide">
                    <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                    EXPLORACIÓN GEOFÍSICA SEV
                  </div>
                  <h4 className="font-orbitron font-bold text-title-md sm:text-headline-sm text-primary mb-2 leading-tight">
                    Detección de Agua Subterránea
                  </h4>
                  <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-4 sm:mb-5">
                    Mapeo geoeléctrico de alta precisión para ubicar acuíferos con certeza científica antes de perforar.
                  </p>

                  <div className="space-y-2.5 sm:space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-lowest/95 border border-outline-variant/25 shadow-2xs hover:-translate-y-1 hover:shadow-md hover:border-primary/50 hover:bg-white transition-all duration-300 group/tech relative overflow-hidden">
                      <span className="material-symbols-outlined text-[20px] sm:text-[22px] text-primary group-hover/tech:text-amber-500 group-hover/tech:scale-115 transition-all duration-300 shrink-0 mt-0.5" data-icon="layers">layers</span>
                      <div>
                        <div className="font-semibold text-primary text-xs sm:text-sm mb-0.5 group-hover/tech:text-primary-container transition-colors">Acuíferos Libres y Cautivos</div>
                        <div className="text-xs text-secondary leading-snug">Diferenciación litológica de arenas permeables vs arcillas impermeables.</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-lowest/95 border border-outline-variant/25 shadow-2xs hover:-translate-y-1 hover:shadow-md hover:border-primary/50 hover:bg-white transition-all duration-300 group/tech relative overflow-hidden">
                      <span className="material-symbols-outlined text-[20px] sm:text-[22px] text-primary group-hover/tech:text-amber-500 group-hover/tech:scale-115 transition-all duration-300 shrink-0 mt-0.5" data-icon="speed">speed</span>
                      <div>
                        <div className="font-semibold text-primary text-xs sm:text-sm mb-0.5 group-hover/tech:text-primary-container transition-colors">Cálculo de Caudales</div>
                        <div className="text-xs text-secondary leading-snug">Estimación previa de gasto volumétrico sustentable en L/s.</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-lowest/95 border border-outline-variant/25 shadow-2xs hover:-translate-y-1 hover:shadow-md hover:border-primary/50 hover:bg-white transition-all duration-300 group/tech relative overflow-hidden">
                      <span className="material-symbols-outlined text-[20px] sm:text-[22px] text-primary group-hover/tech:text-amber-500 group-hover/tech:scale-115 transition-all duration-300 shrink-0 mt-0.5" data-icon="architecture">architecture</span>
                      <div>
                        <div className="font-semibold text-primary text-xs sm:text-sm mb-0.5 group-hover/tech:text-primary-container transition-colors">Diseño de Pozo</div>
                        <div className="text-xs text-secondary leading-snug">Cotas exactas de entubado, filtros ranurados y grava de cuarzo.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*  Columna 2: Asesoría Técnica Integral & Permisología  */}
              <div className="lg:col-span-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-outline-variant/20">
                    <span className="font-orbitron font-bold text-title-sm sm:text-title-md text-primary flex items-center gap-2.5">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                      </span>
                      <span>Asesoría Especializada</span>
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-on-surface-variant mb-4 leading-relaxed">
                    Acompañamiento profesional y permisología para garantizar el éxito operativo de su proyecto:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                    {/* Item 1 */}
                    <div className="p-4 rounded-xl bg-gradient-to-br from-white to-surface-bright/70 border border-outline-variant/30 hover:border-primary/60 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10 active:scale-[0.98] transition-all duration-300 group relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
                      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary via-amber-400 to-primary-container opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-lg bg-primary/10 text-primary text-xs font-bold font-mono flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:shadow-md group-hover:shadow-primary/30 transition-all duration-300 shrink-0">01</span>
                          <span className="font-semibold text-primary text-sm sm:text-base group-hover:text-primary-container transition-colors">Permisología MINEC</span>
                        </div>
                        <span className="material-symbols-outlined text-[20px] text-primary/30 group-hover:text-amber-500 group-hover:rotate-12 group-hover:scale-115 transition-all duration-300" data-icon="policy">policy</span>
                      </div>
                      <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                        Estudios de impacto ambiental para el permiso de perforación de pozo y uso del agua ante el MINEC.
                      </p>
                    </div>

                    {/* Item 2 */}
                    <div className="p-4 rounded-xl bg-gradient-to-br from-white to-surface-bright/70 border border-outline-variant/30 hover:border-primary/60 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10 active:scale-[0.98] transition-all duration-300 group relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
                      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary via-amber-400 to-primary-container opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-lg bg-primary/10 text-primary text-xs font-bold font-mono flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:shadow-md group-hover:shadow-primary/30 transition-all duration-300 shrink-0">02</span>
                          <span className="font-semibold text-primary text-sm sm:text-base group-hover:text-primary-container transition-colors">Perforación de Pozo</span>
                        </div>
                        <span className="material-symbols-outlined text-[20px] text-primary/30 group-hover:text-amber-500 group-hover:rotate-12 group-hover:scale-115 transition-all duration-300" data-icon="precision_manufacturing">precision_manufacturing</span>
                      </div>
                      <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                        Asesoría técnica en ejecución, cota de corte y supervisión en obra durante la perforación del pozo.
                      </p>
                    </div>

                    {/* Item 3 */}
                    <div className="p-4 rounded-xl bg-gradient-to-br from-white to-surface-bright/70 border border-outline-variant/30 hover:border-primary/60 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10 active:scale-[0.98] transition-all duration-300 group relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
                      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary via-amber-400 to-primary-container opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-lg bg-primary/10 text-primary text-xs font-bold font-mono flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:shadow-md group-hover:shadow-primary/30 transition-all duration-300 shrink-0">03</span>
                          <span className="font-semibold text-primary text-sm sm:text-base group-hover:text-primary-container transition-colors">Análisis del Agua</span>
                        </div>
                        <span className="material-symbols-outlined text-[20px] text-primary/30 group-hover:text-amber-500 group-hover:rotate-12 group-hover:scale-115 transition-all duration-300" data-icon="science">science</span>
                      </div>
                      <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                        Caracterización físico-química de laboratorio para identificar si el recurso es dulce, salobre o salado.
                      </p>
                    </div>

                    {/* Item 4 */}
                    <div className="p-4 rounded-xl bg-gradient-to-br from-white to-surface-bright/70 border border-outline-variant/30 hover:border-primary/60 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10 active:scale-[0.98] transition-all duration-300 group relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
                      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary via-amber-400 to-primary-container opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-lg bg-primary/10 text-primary text-xs font-bold font-mono flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:shadow-md group-hover:shadow-primary/30 transition-all duration-300 shrink-0">04</span>
                          <span className="font-semibold text-primary text-sm sm:text-base group-hover:text-primary-container transition-colors">Selección de Equipo</span>
                        </div>
                        <span className="material-symbols-outlined text-[20px] text-primary/30 group-hover:text-amber-500 group-hover:rotate-12 group-hover:scale-115 transition-all duration-300" data-icon="tune">tune</span>
                      </div>
                      <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                        Selección del equipo adecuado para el tratamiento y filtración según las propiedades del agua encontrada.
                      </p>
                    </div>

                    {/* Item 5 */}
                    <div className="p-4 rounded-xl bg-gradient-to-br from-white to-surface-bright/70 border border-outline-variant/30 hover:border-primary/60 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10 active:scale-[0.98] transition-all duration-300 group relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
                      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary via-amber-400 to-primary-container opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-lg bg-primary/10 text-primary text-xs font-bold font-mono flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:shadow-md group-hover:shadow-primary/30 transition-all duration-300 shrink-0">05</span>
                          <span className="font-semibold text-primary text-sm sm:text-base group-hover:text-primary-container transition-colors">Instalación de Planta</span>
                        </div>
                        <span className="material-symbols-outlined text-[20px] text-primary/30 group-hover:text-amber-500 group-hover:rotate-12 group-hover:scale-115 transition-all duration-300" data-icon="water_voc">water_voc</span>
                      </div>
                      <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                        Instalación, montaje y calibración técnica de la planta, ya sea potabilizadora o desalinizadora.
                      </p>
                    </div>

                    {/* Item 6 */}
                    <div className="p-4 rounded-xl bg-gradient-to-br from-white to-surface-bright/70 border border-outline-variant/30 hover:border-primary/60 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10 active:scale-[0.98] transition-all duration-300 group relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
                      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary via-amber-400 to-primary-container opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-lg bg-primary/10 text-primary text-xs font-bold font-mono flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:shadow-md group-hover:shadow-primary/30 transition-all duration-300 shrink-0">06</span>
                          <span className="font-semibold text-primary text-sm sm:text-base group-hover:text-primary-container transition-colors">Mantenimiento de Planta</span>
                        </div>
                        <span className="material-symbols-outlined text-[20px] text-primary/30 group-hover:text-amber-500 group-hover:rotate-12 group-hover:scale-115 transition-all duration-300" data-icon="build_circle">build_circle</span>
                      </div>
                      <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                        Planes de mantenimiento preventivo y correctivo especializado para asegurar la máxima vida útil del sistema.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  Bento Card C: Medio Ambiente & Pasivos (4 cols)  */}
          <div className="lg:col-span-4 bg-surface-container-lowest rounded-xl border border-outline-variant/40 p-space-md sm:p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined" data-icon="eco">eco</span>
                </div>
                <span className="font-label-sm text-label-sm text-secondary font-code-spec">MOD-ENVIRO</span>
              </div>
              <h3 className="font-title-md text-title-md text-primary font-orbitron mb-2">Medio Ambiente &amp; Pasivos</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 leading-relaxed">
                Detección y modelado de plumas de contaminación por hidrocarburos, monitoreo de intrusión salina en acuíferos costeros neoespartanos y seguimiento de lixiviados en rellenos sanitarios según normativas ambientales.
              </p>
            </div>
            <div className="pt-3 border-t border-outline-variant/20 font-label-sm text-label-sm text-primary flex items-center justify-between font-semibold">
              <span>Resolución 000056 / MINEC</span>
              <span className="material-symbols-outlined text-[16px]" data-icon="arrow_forward">arrow_forward</span>
            </div>
          </div>
          {/*  Bento Card D: Acreditación Colegiada y Garantía (8 cols)  */}
          <div className="lg:col-span-8 bg-gradient-to-r from-surface-container-lowest to-surface-container-low rounded-xl border border-outline-variant/40 p-space-md sm:p-space-lg shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 font-label-sm text-label-sm font-semibold">
                <span className="material-symbols-outlined text-[14px]" data-icon="verified">verified</span>
                RESPALDO INSTITUCIONAL OFICIAL
              </div>
              <h4 className="font-title-md text-title-md text-primary font-orbitron">Certificación Oficial</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-lg leading-relaxed">
                Los estudios de impacto ambiental y análisis de agua son elaborados por técnicos especializados, aprobados y aptos para tramitación de permisos de perforación ante el Ministerio de Ecosocialismo (MINEC).
              </p>
            </div>
            <div className="shrink-0 flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-outline-variant/30 text-center w-full sm:w-auto">
              <span className="font-orbitron font-bold text-headline-sm text-primary">100%</span>
              <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Legalidad Vigente</span>
              <span className="text-[10px] text-on-surface-variant mt-1">Visado Geotécnico</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
