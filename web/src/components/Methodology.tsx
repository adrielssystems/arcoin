export default function Methodology() {
  return (
    <section className="py-space-xl bg-surface-container-low border-y border-outline-variant/30" id="metodologia">
      <div className="max-w-7xl mx-auto px-space-md sm:px-space-xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm mb-3 font-semibold">
            <span className="material-symbols-outlined text-[15px]" data-icon="science">science</span>
            METODOLOGÍA GEOFÍSICA RIGUROSA
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary font-orbitron mb-3">¿Cómo Funciona el Sondeo Eléctrico Vertical?</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            El SEV mide la respuesta eléctrica del subsuelo al paso de una corriente inducida artificialmente, permitiendo diferenciar estratos de agua dulce, salina, arcillas y lechos rocosos sin abrir zanjas.
          </p>
        </div>
        {/*  Layout Envolvente: Tarjetas en las esquinas con Video Central  */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-16">
          {/*  Columna Izquierda (Tarjetas 01 y 03)  */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/*  Paso 01: Superior Izquierda  */}
            <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/40 shadow-sm relative group hover:border-primary hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-orbitron font-bold text-title-sm border border-primary/20">
                    01
                  </div>
                  <span className="font-code-spec text-[10px] text-secondary font-bold uppercase tracking-wider">
                    PASO INICIAL
                  </span>
                </div>
                <span className="font-label-sm text-[11px] text-secondary uppercase tracking-wider block font-semibold mb-1">
                  Disposición Tetrapolar
                </span>
                <h3 className="font-title-sm text-title-sm text-primary font-bold mb-2">
                  Arreglo Schlumberger
                </h3>
                <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                  Alineación simétrica y milimétrica de electrodos de corriente (A-B) y de potencial (M-N) en el terreno.
                </p>
                <div className="mt-3">
                  <img src="/diagrama-sev.png" alt="Diagrama Schlumberger" className="w-full h-auto rounded-lg border border-outline-variant/30 mix-blend-multiply" />
                </div>
              </div>
              <div className="mt-3 pt-2.5 border-t border-outline-variant/20 font-label-sm text-[10px] text-secondary font-code-spec">
                Parámetro: K Geométrico
              </div>
            </div>

            {/*  Paso 03: Inferior Izquierda  */}
            <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/40 shadow-sm relative group hover:border-primary hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-orbitron font-bold text-title-sm border border-primary/20">
                    03
                  </div>
                  <span className="font-code-spec text-[10px] text-secondary font-bold uppercase tracking-wider">
                    LECTURA ΔV
                  </span>
                </div>
                <span className="font-label-sm text-[11px] text-secondary uppercase tracking-wider block font-semibold mb-1">
                  Cálculo de Resistividad
                </span>
                <h3 className="font-title-sm text-title-sm text-primary font-bold mb-2">
                  Resistividad Aparente (ρa)
                </h3>
                <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                  Medición de la caída de potencial (ΔV) para diferenciar contrastes entre estratos acuíferos permeables y arcillas estériles.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-outline-variant/20 font-label-sm text-[10px] text-secondary font-code-spec">
                Ley de Ohm: ρa = K·(ΔV/I)
              </div>
            </div>
          </div>

          {/*  Columna Central (Video Comparativo Destacado)  */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className="relative w-full rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl bg-slate-950 group">
              {/* Header Técnico del Video */}
              <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-[11px] font-code-spec text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-bold text-white tracking-wider">COMPARATIVA TÉCNICA EN VIVO</span>
                </div>
                <span className="text-amber-400 font-semibold uppercase text-[10px] tracking-wider">Sin SEV vs Con SEV</span>
              </div>

              {/* Contenedor del Video (Relación de aspecto 16:9 real) */}
              <div className="relative aspect-video w-full flex items-center justify-center bg-black overflow-hidden">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-contain"
                >
                  <source src="/SINSERV.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Pie Informativo del Video */}
              <div className="px-4 py-2.5 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-300">
                <span className="text-rose-400 font-semibold">✗ Pozo Seco (A ciegas)</span>
                <span className="text-slate-500 font-code-spec">VS</span>
                <span className="text-emerald-400 font-semibold">✓ Acuífero Localizado (Con SEV)</span>
              </div>
            </div>
          </div>

          {/*  Columna Derecha (Tarjetas 02 y 04)  */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/*  Paso 02: Superior Derecha  */}
            <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/40 shadow-sm relative group hover:border-primary hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-orbitron font-bold text-title-sm border border-primary/20">
                    02
                  </div>
                  <span className="font-code-spec text-[10px] text-secondary font-bold uppercase tracking-wider">
                    PULSOS DC
                  </span>
                </div>
                <span className="font-label-sm text-[11px] text-secondary uppercase tracking-wider block font-semibold mb-1">
                  Inyección de Corriente
                </span>
                <h3 className="font-title-sm text-title-sm text-primary font-bold mb-2">
                  Micro-corrientes I [mA]
                </h3>
                <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                  Introducción computarizada de pulsos de corriente directa conmutada con penetración proporcional a la distancia A-B.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-outline-variant/20 font-label-sm text-[10px] text-secondary font-code-spec">
                Rango I: 50 a 1000 mA
              </div>
            </div>

            {/*  Paso 04: Inferior Derecha  */}
            <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/40 shadow-sm relative group hover:border-primary hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-orbitron font-bold text-title-sm border border-primary/20">
                    04
                  </div>
                  <span className="font-code-spec text-[10px] text-secondary font-bold uppercase tracking-wider">
                    MODELADO FINAL
                  </span>
                </div>
                <span className="font-label-sm text-[11px] text-secondary uppercase tracking-wider block font-semibold mb-1">
                  Inversión Matemática
                </span>
                <h3 className="font-title-sm text-title-sm text-primary font-bold mb-2">
                  Cota Exacta &amp; Ranurado
                </h3>
                <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                  Generación del perfil geoeléctrico determinando a qué profundidad exacta perforar y dónde instalar los filtros del pozo.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-outline-variant/20 font-label-sm text-[10px] text-secondary font-code-spec">
                RMS Error &lt; 2.5% (Ip2win)
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div className="bg-red-50/70 border border-red-200 rounded-xl p-6">
            <div className="flex items-center gap-2 text-red-700 font-title-sm text-title-sm mb-3">
              <span className="material-symbols-outlined" data-icon="cancel">cancel</span>
              <span>Perforación Empírica a Ciegas (Alto Riesgo)</span>
            </div>
            <ul className="space-y-2 font-body-sm text-body-sm text-red-950">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>Pérdida de capital:</strong> $12,000 – $25,000 USD arriesgados en maquinaria, brocas y tubería sin garantía de caudal.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>40% de tasa de fallo:</strong> Perforación en basamento rocoso estéril, arcillas secas o estratos altamente salobres.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>Colapso prematuro:</strong> Ranurado de filtros en cotas erróneas, taponamiento por arenas finas en pocos meses.</span>
              </li>
            </ul>
          </div>
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-6">
            <div className="flex items-center gap-2 text-emerald-800 font-title-sm text-title-sm mb-3">
              <span className="material-symbols-outlined" data-icon="check_circle">check_circle</span>
              <span>Estudio Previo SEV ARCOIN (Certeza Técnica)</span>
            </div>
            <ul className="space-y-2 font-body-sm text-body-sm text-emerald-950">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>Inversión protegida:</strong> El estudio SEV representa menos del 6% del costo total de obra del pozo profundo.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>95% de asertividad:</strong> Determinación precisa de cota freática, espesor del acuífero y tipo de agua.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>Diseño definitivo:</strong> Entrega de plano con cota de perforación, diámetro de tubería y diseño de empaque de grava.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
