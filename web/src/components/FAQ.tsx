export default function FAQ() {
  return (
    <section className="py-space-xl bg-surface-container-low border-t border-outline-variant/30" id="faq">
      <div className="max-w-7xl mx-auto px-space-md sm:px-space-xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-headline-lg text-headline-lg text-primary font-orbitron">LA HONESTIDAD ES FUNDAMENTAL</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">Respuestas claras a las dudas más comunes de nuestros clientes.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Accordion FAQ */}
          <div className="lg:col-span-2 space-y-4">
            <details className="group bg-surface-container-lowest rounded-xl border border-outline-variant/40 [&_summary::-webkit-details-marker]:hidden shadow-sm open:border-primary transition-all">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-title-md text-primary font-bold outline-none">
                <span>¿Garantiza encontrar agua?</span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-secondary">expand_more</span>
              </summary>
              <div className="px-6 pb-6 font-body-sm text-on-surface-variant leading-relaxed border-t border-outline-variant/20 pt-4 mt-2">
                <strong>El SEV no garantiza al 100% encontrar agua.</strong> Sin embargo, reduce drásticamente el riesgo de pozos secos (de ~50% a un margen de ~10-20%). Un pozo puede fallar incluso con un buen SEV si la formación no tiene suficiente permeabilidad o si ocurren problemas mecánicos durante la perforación.
              </div>
            </details>

            <details className="group bg-surface-container-lowest rounded-xl border border-outline-variant/40 [&_summary::-webkit-details-marker]:hidden shadow-sm open:border-primary transition-all">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-title-md text-primary font-bold outline-none">
                <span>¿Qué tan preciso es el sondeo?</span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-secondary">expand_more</span>
              </summary>
              <div className="px-6 pb-6 font-body-sm text-on-surface-variant leading-relaxed border-t border-outline-variant/20 pt-4 mt-2">
                La precisión en determinar la profundidad de las capas es de ±5-10%. Si el estudio indica agua a 85 metros, es altamente probable encontrar el acuífero entre 77 y 93 metros. <br/><br/><strong>Tasa de éxito comprobada en nuestras operaciones: 80-90%.</strong>
              </div>
            </details>

            <details className="group bg-surface-container-lowest rounded-xl border border-outline-variant/40 [&_summary::-webkit-details-marker]:hidden shadow-sm open:border-primary transition-all">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-title-md text-primary font-bold outline-none">
                <span>¿Cuánto tiempo tarda el estudio?</span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-secondary">expand_more</span>
              </summary>
              <div className="px-6 pb-6 font-body-sm text-on-surface-variant leading-relaxed border-t border-outline-variant/20 pt-4 mt-2">
                Típicamente <strong>2 a 5 días</strong> desde el inicio hasta la entrega del informe final. (1 día de campo + 2-3 días de procesamiento e interpretación computarizada). <br/><br/><em>* Ofrecemos aceleración de análisis para urgencias, con entregas en 3 días hábiles.</em>
              </div>
            </details>

            <details className="group bg-surface-container-lowest rounded-xl border border-outline-variant/40 [&_summary::-webkit-details-marker]:hidden shadow-sm open:border-primary transition-all" open>
              <summary className="flex items-center justify-between p-6 cursor-pointer font-title-md text-primary font-bold outline-none">
                <span>¿Se puede realizar el estudio en cualquier terreno?</span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-secondary">expand_more</span>
              </summary>
              <div className="px-6 pb-6 font-body-sm text-on-surface-variant leading-relaxed border-t border-outline-variant/20 pt-4 mt-2">
                <p className="mb-3">El SEV es muy versátil, pero presenta retos técnicos en escenarios específicos que solucionamos así:</p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2"><span className="text-amber-500 font-bold mt-0.5">•</span> <span><strong>Terrenos rocosos o asfaltados:</strong> Dificulta el clavado. <br/><em className="text-primary font-semibold">Solución:</em> Uso de electrodos de contacto con gel conductor.</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-500 font-bold mt-0.5">•</span> <span><strong>Áreas urbanas densas:</strong> Ruido por líneas eléctricas. <br/><em className="text-primary font-semibold">Solución:</em> Mediciones nocturnas o filtrado avanzado.</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-500 font-bold mt-0.5">•</span> <span><strong>Tuberías metálicas:</strong> Distorsionan el campo. <br/><em className="text-primary font-semibold">Solución:</em> Alejar o replantear la malla de medición (azimut).</span></li>
                </ul>
                <p className="font-semibold text-emerald-700 bg-emerald-50 px-3 py-2 rounded border border-emerald-200">En el 95% de los casos, estas limitaciones son superables con técnicas especializadas.</p>
              </div>
            </details>
          </div>

          {/* Contact Card */}
          <div className="lg:col-span-1">
            <div className="bg-primary p-8 rounded-2xl shadow-xl text-white h-full flex flex-col relative overflow-hidden">
              {/* Abstract Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-black opacity-10 rounded-full -ml-16 -mb-16 pointer-events-none"></div>

              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10 relative z-10">
                <span className="material-symbols-outlined text-white text-[24px]">support_agent</span>
              </div>
              
              <h4 className="font-headline-sm text-white font-orbitron mb-2 relative z-10">Atención Directa</h4>
              <p className="font-body-sm text-white/80 mb-8 leading-relaxed relative z-10">
                Coordinación técnica para logística a nivel nacional. Hable directamente con el especialista a cargo.
              </p>
              
              <div className="space-y-5 mt-auto relative z-10 bg-black/10 p-5 rounded-xl border border-white/10">
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/60 uppercase tracking-widest font-semibold mb-0.5">Ingeniero Geofísico</span>
                  <strong className="text-white font-title-md tracking-wide">Ing. S. Daniel Gómez B.</strong>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/60 uppercase tracking-widest font-semibold mb-0.5">Líneas Móviles</span>
                  <span className="text-white font-code-spec text-sm">0416-6967096<br/>0412-3967096</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/60 uppercase tracking-widest font-semibold mb-0.5">Correo Corporativo</span>
                  <a href="mailto:arcoinca10@gmail.com" className="text-white font-body-sm hover:text-amber-300 transition-colors">arcoinca10@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
