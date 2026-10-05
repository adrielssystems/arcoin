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
        {/*  4-Step Interactive Visual Flow  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-12">
          {/*  Step 1  */}
          <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/40 shadow-sm relative group hover:border-primary transition-all">
            <div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center font-orbitron font-bold text-title-md mb-4 border border-outline-variant/30">
              01
            </div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block mb-1">Disposición Tetrapolar</span>
            <h3 className="font-title-sm text-title-sm text-primary mb-2">Arreglo Schlumberger</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Se alinean electrodos metálicos de corriente (A-B) y electrodos de potencial (M-N) en el terreno con espaciamiento simétrico y calibrado milimétricamente.
            </p>
            <div className="mt-4"><img src="/diagrama-sev.png" alt="Diagrama Schlumberger" className="w-full h-auto rounded-lg border border-outline-variant/30 mix-blend-multiply" /></div>
            <div className="mt-4 pt-3 border-t border-outline-variant/20 font-label-sm text-[11px] text-secondary font-code-spec">
              Parámetro: K Geométrico
            </div>
          </div>
          {/*  Step 2  */}
          <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/40 shadow-sm relative group hover:border-primary transition-all">
            <div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center font-orbitron font-bold text-title-md mb-4 border border-outline-variant/30">
              02
            </div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block mb-1">Inyección de Corriente</span>
            <h3 className="font-title-sm text-title-sm text-primary mb-2">Micro-corrientes I [mA]</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Un resistivímetro computarizado introduce pulsos de corriente directa conmutada, alcanzando profundidades proporcionales a la distancia de apertura A-B.
            </p>
            <div className="mt-4 pt-3 border-t border-outline-variant/20 font-label-sm text-[11px] text-secondary font-code-spec">
              I: 50 a 1000 mA
            </div>
          </div>
          {/*  Step 3  */}
          <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/40 shadow-sm relative group hover:border-primary transition-all">
            <div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center font-orbitron font-bold text-title-md mb-4 border border-outline-variant/30">
              03
            </div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block mb-1">Cálculo de Resistividad</span>
            <h3 className="font-title-sm text-title-sm text-primary mb-2">Resistividad Aparente (ρa)</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Se mide la caída de potencial (ΔV) entre M y N. La resistividad aparente revela el contraste directo entre estratos acuíferos permeables y arcillas estériles.
            </p>
            <div className="mt-4 pt-3 border-t border-outline-variant/20 font-label-sm text-[11px] text-secondary font-code-spec">
              Ley de Ohm: ρa = K·(ΔV/I)
            </div>
          </div>
          {/*  Step 4  */}
          <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/40 shadow-sm relative group hover:border-primary transition-all">
            <div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center font-orbitron font-bold text-title-md mb-4 border border-outline-variant/30">
              04
            </div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block mb-1">Inversión Matemática</span>
            <h3 className="font-title-sm text-title-sm text-primary mb-2">Cota Exacta &amp; Ranurado</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              El software Ip2win/Res2DInv genera el perfil de resistividad real, especificando a qué metro exacto iniciar la perforación y dónde ubicar los filtros.
            </p>
            <div className="mt-4 pt-3 border-t border-outline-variant/20 font-label-sm text-[11px] text-secondary font-code-spec">
              RMS Error &lt; 2.5%
            </div>
          </div>
        </div>
        {/*  Educational Comparison: Perforar a Ciegas vs Con Estudio SEV  */}
        <div className="w-full mb-6">
          <video autoPlay loop muted playsInline className="w-full max-w-md mx-auto rounded-xl shadow-md border border-outline-variant/30">
            <source src="/SINSERV.mp4" type="video/mp4" />
          </video>
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
