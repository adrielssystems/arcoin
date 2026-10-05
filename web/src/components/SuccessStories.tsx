export default function SuccessStories() {
  return (
    <section className="py-space-xl" id="casos">
      <div className="max-w-7xl mx-auto px-space-md sm:px-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">COMPROBACIÓN EN CAMPO</span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-orbitron mt-1">Casos de Éxito en Nueva Esparta</h2>
          </div>
          <div className="flex items-center gap-2 font-label-sm text-label-sm text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
            <span className="material-symbols-outlined text-[16px]" data-icon="check_circle">check_circle</span>
            <span>Pozos en producción continua al 100%</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/*  Case 1: Agricultura  */}
          <article className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="p-5">
              <div className="flex items-center justify-between text-label-sm font-label-sm text-secondary mb-2">
                <span className="font-code-spec text-primary font-semibold">AGRICULTURA // ANTOLÍN DEL CAMPO</span>
                <span>Sector El Salado, Isla de Margarita</span>
              </div>
              <h3 className="font-title-md text-title-md text-primary font-orbitron mb-2">
                Acuífero Formación Mesa a 68m para Riego
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 leading-relaxed">
                Mapeo de paleocauce arenoso de alta permeabilidad en finca arrocera de 450 hectáreas. Se evitó perforar en arcilla compacta situada a escasos 150m de distancia.
              </p>
              <div className="grid grid-cols-2 gap-2 bg-surface-bright p-2.5 rounded-lg border border-outline-variant/20 font-label-sm">
                <div>
                  <span className="text-secondary text-[10px] block">Caudal Obtenido:</span>
                  <span className="font-orbitron font-bold text-primary text-title-sm">22 L/s</span>
                </div>
                <div>
                  <span className="text-secondary text-[10px] block">Ahorro Estimado:</span>
                  <span className="font-orbitron font-bold text-emerald-600 text-title-sm">$18,500 USD</span>
                </div>
              </div>
            </div>
            <div className="px-5 py-2.5 bg-surface-container-high border-t border-outline-variant/20 font-label-sm text-[11px] text-on-surface-variant flex justify-between items-center">
              <span>Prof. Perforada: 82 metros</span>
              <span className="text-emerald-700 font-semibold font-mono">AGUA DULCE CRISTALINA</span>
            </div>
          </article>
          {/*  Case 2: Hotelería  */}
          <article className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="p-5">
              <div className="flex items-center justify-between text-label-sm font-label-sm text-secondary mb-2">
                <span className="font-code-spec text-primary font-semibold">HOTELERÍA // MANEIRO</span>
                <span>Pampatar, Isla de Margarita</span>
              </div>
              <h3 className="font-title-md text-title-md text-primary font-orbitron mb-2">
                Mapeo de Basamento &amp; Arcillas Expansivas
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 leading-relaxed">
                Estudio geotécnico con SEV multielectródico para nave logística de 12,000 m². Detección de estrato rocoso discontinuo y lentes de arcilla que exigían micropilotaje.
              </p>
              <div className="grid grid-cols-2 gap-2 bg-surface-bright p-2.5 rounded-lg border border-outline-variant/20 font-label-sm">
                <div>
                  <span className="text-secondary text-[10px] block">Área Mapeada:</span>
                  <span className="font-orbitron font-bold text-primary text-title-sm">1.2 Ha</span>
                </div>
                <div>
                  <span className="text-secondary text-[10px] block">Ensayos SEV:</span>
                  <span className="font-orbitron font-bold text-primary text-title-sm">18 Puntos</span>
                </div>
              </div>
            </div>
            <div className="px-5 py-2.5 bg-surface-container-high border-t border-outline-variant/20 font-label-sm text-[11px] text-on-surface-variant flex justify-between items-center">
              <span>Visado CIV Nueva Esparta</span>
              <span className="text-primary font-semibold font-mono">OBRA EN EJECUCIÓN</span>
            </div>
          </article>
          {/*  Case 3: Desarrollo  */}
          <article className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="p-5">
              <div className="flex items-center justify-between text-label-sm font-label-sm text-secondary mb-2">
                <span className="font-code-spec text-primary font-semibold">DESARROLLO // MACANAO</span>
                <span>Península de Macanao</span>
              </div>
              <h3 className="font-title-md text-title-md text-primary font-orbitron mb-2">
                Descarte de Estrato Salino &amp; Pozo a 85m
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 leading-relaxed">
                Los intentos previos de perforación habían extraído agua salobre no apta para ganado. El SEV diferenció con precisión el estrato salino superior del acuífero dulce inferior.
              </p>
              <div className="grid grid-cols-2 gap-2 bg-surface-bright p-2.5 rounded-lg border border-outline-variant/20 font-label-sm">
                <div>
                  <span className="text-secondary text-[10px] block">Caudal Firme:</span>
                  <span className="font-orbitron font-bold text-primary text-title-sm">16 L/s</span>
                </div>
                <div>
                  <span className="text-secondary text-[10px] block">Conductividad:</span>
                  <span className="font-orbitron font-bold text-emerald-600 text-title-sm">380 μS/cm</span>
                </div>
              </div>
            </div>
            <div className="px-5 py-2.5 bg-surface-container-high border-t border-outline-variant/20 font-label-sm text-[11px] text-on-surface-variant flex justify-between items-center">
              <span>Filtro aislado contra intrusión</span>
              <span className="text-emerald-700 font-semibold font-mono">100% OPERACIONAL</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
