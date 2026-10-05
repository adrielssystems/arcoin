export default function Packages() {
  return (
    <section className="py-space-xl" id="paquetes">
      <div className="max-w-7xl mx-auto px-space-md sm:px-space-xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">PLANES DE INVERSIÓN GEOELÉCTRICA</span>
          <h2 className="font-headline-lg text-headline-lg text-primary font-orbitron mt-1">Cotizaciones según el alcance del proyecto</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/40 shadow-sm">
            <h3 className="font-headline-md text-headline-md text-primary font-orbitron mb-2">Estudio Básico <span className="text-body-sm font-inter text-secondary ml-2">(Más Popular)</span></h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">Ideal para viviendas, condominios y parcelas pequeñas.</p>
            <ul className="space-y-2 font-body-sm text-body-sm text-on-surface mb-6">
              <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> 1 a 2 sondeos SEV.</li>
              <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Profundidad de hasta 200 metros.</li>
              <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Sondeo cruzado (cubre aprox. 1 hectárea).</li>
              <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Reporte básico interpretado.</li>
            </ul>
            <a href="#cotizar" className="block text-center w-full px-4 py-2 rounded-lg bg-surface-container-high text-primary font-title-sm hover:bg-primary hover:text-white shadow hover:shadow-md hover:-translate-y-1 active:scale-95 transition-all relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 group-hover:via-white/20 to-transparent -translate-x-full animate-[shimmer_3s_infinite_0.5s]"></div>
              <span className="relative z-10">Solicitar Cotización</span>
            </a>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-xl border-2 border-primary shadow-md relative">
            <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl uppercase tracking-wider">Nivel Industrial</div>
            <h3 className="font-headline-md text-headline-md text-primary font-orbitron mb-2">Estudio Medio</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">Ideal para agricultura, hoteles e industria pesada.</p>
            <ul className="space-y-2 font-body-sm text-body-sm text-on-surface mb-6">
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">✓</span> 3 a 6 sondeos SEV.</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">✓</span> Profundidad extendida hasta 300 metros.</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">✓</span> Mapeo detallado + mapas geoeléctricos.</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 font-bold">✓</span> Recomendaciones exactas de perforación.</li>
            </ul>
            <a href="#cotizar" className="block text-center w-full px-4 py-2 rounded-lg bg-primary text-white font-title-sm hover:bg-primary-container shadow hover:shadow-lg hover:-translate-y-1 active:scale-95 transition-all relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_3s_infinite_1.5s]"></div>
              <span className="relative z-10">Solicitar Cotización</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
