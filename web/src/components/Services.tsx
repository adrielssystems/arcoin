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
          {/*  Bento Card A: Hidrogeología & Agua Subterránea (Large Bento: 8 cols)  */}
          <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl border border-outline-variant/40 p-space-md sm:p-space-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary-container text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px]" data-icon="water_drop">water_drop</span>
                </div>
                <div>
                  <span className="font-label-sm text-label-sm text-primary font-code-spec">SERVICIO PRINCIPAL // MOD-HYDRO</span>
                  <h3 className="font-headline-md text-headline-md text-primary font-orbitron">Hidrogeología &amp; Detección de Agua Subterránea</h3>
                </div>
              </div>
              <span className="hidden sm:inline-block px-2.5 py-1 rounded bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                SEV 1D &amp; ERT 2D
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
              Localización certera de acuíferos confinados y libres, delimitación de paleocauces aluviales y caracterización de la calidad del agua (detección de salinidad o alta mineralización). Nuestros informes incluyen recomendación de cota exacta de perforación, diámetro de casing y diseño optimizado de ranurado de filtros.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-outline-variant/20 font-body-sm text-body-sm">
              <div className="bg-surface-bright p-3 rounded-lg border border-outline-variant/30">
                <div className="font-semibold text-primary mb-1">Acuíferos Libres y Cautivos</div>
                <div className="text-secondary text-body-sm">Diferenciación de arenas permeables vs arcillas impermeables.</div>
              </div>
              <div className="bg-surface-bright p-3 rounded-lg border border-outline-variant/30">
                <div className="font-semibold text-primary mb-1">Cálculo de Caudales</div>
                <div className="text-secondary text-body-sm">Estimación previa de gasto volumétrico sustentable en L/s.</div>
              </div>
              <div className="bg-surface-bright p-3 rounded-lg border border-outline-variant/30">
                <div className="font-semibold text-primary mb-1">Diseño de Pozo</div>
                <div className="text-secondary text-body-sm">Cotas precisas de empaque de grava de cuarzo y filtros.</div>
              </div>
            </div>
          </div>
          {/*  Bento Card B: Geotecnia & Obras Civiles (4 cols)  */}
          <div className="lg:col-span-4 bg-surface-container-lowest rounded-xl border border-outline-variant/40 p-space-md sm:p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined" data-icon="foundation">foundation</span>
                </div>
                <span className="font-label-sm text-label-sm text-secondary font-code-spec">MOD-GEOTEC</span>
              </div>
              <h3 className="font-title-md text-title-md text-primary font-orbitron mb-2">Geotecnia &amp; Obras Civiles</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 leading-relaxed">
                Caracterización de suelo de fundación, profundidad del basamento rocoso (bedrock), detección de fallas geológicas activas, cavernas cársticas y zonas de subsidencia para urbanismos, puentes, fundaciones y naves industriales.
              </p>
            </div>
            <div className="pt-3 border-t border-outline-variant/20 font-label-sm text-label-sm text-primary flex items-center justify-between font-semibold">
              <span>Ensayos no destructivos</span>
              <span className="material-symbols-outlined text-[16px]" data-icon="arrow_forward">arrow_forward</span>
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
              <h4 className="font-title-md text-title-md text-primary font-orbitron">Certificación Oficial ante el CIV &amp; SOVG</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-lg">
                Todos los informes de resistividad aparente son suscritos por ingenieros geofísicos colegiados y solventes. Aptos para tramitación de permisos de perforación ante el Ministerio de Ecosocialismo (MINEC).
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
