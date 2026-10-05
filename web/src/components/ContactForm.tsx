export default function ContactForm() {
  return (
    <section className="py-space-xl bg-surface-container-low border-t border-outline-variant/30" id="cotizar">
      <div className="max-w-7xl mx-auto px-space-md sm:px-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
              <span className="material-symbols-outlined text-[15px]" data-icon="send">send</span>
              PRESUPUESTO TÉCNICO SIN COMPROMISO
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary font-orbitron">
              Solicite su Estudio SEV en Margarita
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Consulte con nuestros ingenieros geofísicos antes de contratar maquinaria de perforación. Coordinamos logística y traslado de instrumental técnico a cualquier municipio de la isla en menos de 48 horas.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded bg-primary-container text-white flex items-center justify-center font-bold text-title-sm">✓</span>
                <span className="font-body-md text-body-md text-on-surface">Presupuesto formal desglosado con honorarios CIV oficiales.</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded bg-primary-container text-white flex items-center justify-center font-bold text-title-sm">✓</span>
                <span className="font-body-md text-body-md text-on-surface">Informe interpretativo 1D/2D con cota precisa de perforación.</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded bg-primary-container text-white flex items-center justify-center font-bold text-title-sm">✓</span>
                <span className="font-body-md text-body-md text-on-surface">Asistencia telefónica continua con el perforador durante la obra.</span>
              </div>
            </div>
            <div className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/30 flex items-center justify-between mt-6">
              <div>
                <span className="text-label-sm font-label-sm text-secondary block">Canal Directo de Urgencias Geofísicas:</span>
                <span className="font-orbitron font-bold text-title-md text-primary">+58 (416) 696-7096</span>
              </div>
              <a className="px-3 py-2 rounded bg-emerald-600 text-white font-title-sm text-title-sm flex items-center gap-1.5 hover:bg-emerald-700 transition-colors" href="https://wa.me/584166967096" rel="noopener noreferrer" target="_blank">
                <span className="material-symbols-outlined text-[16px]" data-icon="chat">chat</span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
          {/*  Form Column  */}
          <div className="lg:col-span-6">
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl border border-outline-variant/40 shadow-xl crosshair-corner">
              <div className="flex justify-between items-center mb-6 pb-2 border-b border-outline-variant/20">
                <span className="font-orbitron font-bold text-title-md text-primary">Simulador de Cotización SEV</span>
                <span className="font-label-sm text-[10px] text-secondary font-code-spec">RESPUESTA &lt; 2 HORAS</span>
              </div>
              <form className="space-y-4" onSubmit={(e) => { 
                e.preventDefault(); 
                const form = e.target as HTMLFormElement; 
                const elements = form.elements as any;
                const nombre = elements['req-nombre'].value; 
                const empresa = elements['req-empresa'].value;
                const municipio = elements['req-estado'].value; 
                const tipo = elements['req-tipo'].value;
                const mensaje = elements['req-mensaje'].value;
                
                let texto = `*Hola ARCOIN, deseo solicitar una cotización SEV:*%0A%0A`;
                texto += `👤 *Nombre:* ${nombre}%0A`;
                if (empresa) texto += `🏢 *Empresa/Proyecto:* ${empresa}%0A`;
                texto += `📍 *Ubicación:* Municipio ${municipio}, Nva. Esparta%0A`;
                texto += `🎯 *Tipo de Estudio:* ${tipo}%0A`;
                if (mensaje) texto += `📝 *Detalles:* ${mensaje}%0A`;
                
                window.open('https://wa.me/584166967096?text=' + texto, '_blank'); 
              }}>
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1" htmlFor="req-nombre">Nombre Completo y Cargo:</label>
                  <input className="w-full px-3 py-2 text-body-md bg-surface-bright border border-outline-variant/60 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" id="req-nombre" placeholder="Ej: Ing. Carlos Mendoza / Productor Agropecuario" required={true} type="text"/>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1" htmlFor="req-empresa">Empresa, Finca o Proyecto:</label>
                    <input className="w-full px-3 py-2 text-body-md bg-surface-bright border border-outline-variant/60 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" id="req-empresa" placeholder="Ej: Agropecuaria El Palmar" type="text"/>
                  </div>
                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1" htmlFor="req-estado">Estado / Municipio:</label>
                    
                    <select className="w-full px-3 py-2 text-body-md bg-surface-bright border border-outline-variant/60 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" id="req-estado">
                      <option value="Antolín del Campo">Antolín del Campo</option>
                      <option value="Arismendi">Arismendi</option>
                      <option value="Díaz">Díaz</option>
                      <option value="García">García</option>
                      <option value="Gómez">Gómez</option>
                      <option value="Maneiro">Maneiro</option>
                      <option value="Marcano">Marcano</option>
                      <option value="Mariño">Mariño</option>
                      <option value="Península de Macanao">Península de Macanao</option>
                      <option value="Tubores">Tubores</option>
                      <option value="Villalba (Isla de Coche)">Villalba (Isla de Coche)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1" htmlFor="req-tipo">Tipo de Requerimiento Geofísico:</label>
                  <select className="w-full px-3 py-2 text-body-md bg-surface-bright border border-outline-variant/60 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" id="req-tipo">
                    <option value="Agua Subterránea (Detección de Acuífero para Pozo)">Agua Subterránea (Detección de Acuífero para Pozo)</option>
                    <option value="Geotecnia de Fundación (Basamento Rocoso / Fallas)">Geotecnia de Fundación (Basamento Rocoso / Fallas)</option>
                    <option value="Diagnóstico Ambiental (Plumas / Intrusión Salina)">Diagnóstico Ambiental (Plumas / Intrusión Salina)</option>
                    <option value="Malla de Puesta a Tierra Subestación Eléctrica">Malla de Puesta a Tierra Subestación Eléctrica</option>
                  </select>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1" htmlFor="req-mensaje">Detalles Adicionales (Área estimada, antecedentes de perforación):</label>
                  <textarea className="w-full px-3 py-2 text-body-md bg-surface-bright border border-outline-variant/60 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" id="req-mensaje" placeholder="Ej: Se requieren 2 puntos SEV para un terreno de 50 hectáreas..." rows={2}></textarea>
                </div>
                <button className="w-full py-3.5 px-4 rounded bg-primary-container hover:bg-primary text-white font-title-sm text-title-sm transition-all shadow-md flex items-center justify-center gap-2 group" type="submit">
                  <span className="w-2 h-2 rounded-full bg-amber-400 group-hover:scale-125 transition-transform"></span>
                  <span>Generar Cotización Inmediata por WhatsApp</span>
                  <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
                </button>
              </form>
              <div className="mt-4 text-center font-label-sm text-[10px] text-secondary">
                Protección de datos bajo confidencialidad profesional geocientífica.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
