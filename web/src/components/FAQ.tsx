export default function FAQ() {
  return (
    <section className="py-space-xl bg-surface-container-low border-t border-outline-variant/30" id="faq">
      <div className="max-w-7xl mx-auto px-space-md sm:px-space-xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-headline-lg text-headline-lg text-primary font-orbitron">LA HONESTIDAD ES FUNDAMENTAL</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">Respuestas claras a las dudas más comunes de nuestros clientes.</p>
        </div>
        {/* Accordion FAQ Centered */}
        <div className="max-w-4xl mx-auto space-y-4">
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
      </div>
    </section>
  );
}
