export default function Technology() {
  return (
    <>
      {/* Technology & Hardware Stack Section */}
      <section className="py-space-xl relative border-y border-outline-variant/30 overflow-hidden bg-slate-900" id="tecnologia">
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
                <span className="font-orbitron font-bold text-headline-sm text-primary">02 / MODELADO 1D</span>
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

      {/* ADMT-300 ZN Video Section */}
      <section className="py-space-xl bg-surface-bright" id="admt-300">
        <div className="max-w-7xl mx-auto px-space-md sm:px-space-xl">
          <div className="bg-surface-container-lowest rounded-2xl border-2 border-outline-variant/30 overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-50 text-primary font-label-sm text-label-sm mb-4 w-fit border border-blue-200">
                  <span className="material-symbols-outlined text-[16px]">memory</span>
                  INSTRUMENTAL DE ALTA GAMA
                </div>
                <h2 className="font-headline-lg text-headline-lg text-primary font-orbitron mb-4">Tecnología ADMT-300 ZN Serie O36K</h2>
                <p className="font-body-lg text-on-surface-variant mb-6">Nuestros estudios en la Isla de Margarita se realizan con el resistivímetro inteligente <strong>ADMT-300 ZN Serie O36K</strong>. Permite mapeo electromagnético automático de alta precisión, garantizando la lectura exacta de acuíferos en las condiciones geológicas únicas de Nueva Esparta.</p>
                <ul className="space-y-3 font-body-sm text-on-surface mb-8">
                  <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold mt-0.5">✓</span> <span><strong>Profundidad de escaneo:</strong> Hasta 300 metros de medición real.</span></li>
                  <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold mt-0.5">✓</span> <span><strong>Confiabilidad antiruido:</strong> Filtro activo contra interferencias urbanas y líneas eléctricas de alto voltaje (ideal para zonas pobladas como Porlamar o Pampatar).</span></li>
                  <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold mt-0.5">✓</span> <span><strong>Generación de Tomografía:</strong> Levantamiento de mapas 2D y 3D directamente en campo.</span></li>
                </ul>
              </div>
              <div className="bg-slate-900 relative min-h-[300px] lg:min-h-full flex items-center justify-center p-6">
                {/* Placeholder for Video */}
                <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
                <div className="relative z-10 w-full max-w-sm aspect-video bg-black/60 rounded-xl border border-white/20 shadow-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-black/40 transition-colors group group-hover:border-primary/50">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg">
                    <span className="material-symbols-outlined text-white text-[32px] ml-1">play_arrow</span>
                  </div>
                  <span className="text-white font-title-sm tracking-wide">Ver Demostración de Campo</span>
                  <span className="text-white/60 text-[10px] uppercase tracking-widest mt-1">Video en preparación</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
