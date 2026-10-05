
export default function App() {
  return (
    <div className="bg-surface-bright text-on-surface technical-grid min-h-screen selection:bg-primary-container selection:text-white antialiased overflow-x-hidden">
      
{/*  Top Announcement Bar / Geolocation Live Beacon  */}
<aside className="w-full bg-surface-container-lowest border-b border-outline-variant/30 px-space-md py-1 text-center flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-1">
<div className="flex items-center gap-2">
<span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
<span className="font-semibold text-primary">OPERACIONES ACTIVAS:</span>
<span className="text-on-surface">Nueva Esparta (Isla de Margarita, Coche y Cubagua)</span>
</div>
<div className="flex items-center gap-4">
<span className="hidden sm:inline text-secondary">Acreditación CIV N° 194.208 / SOVG</span>
<span className="font-code-spec text-primary font-medium tracking-tight">FREQ: 0.5–256 Hz | SCHLUMBERGER STD</span>
</div>
</div>
</aside>
{/*  Navigation Bar Component (TopNavBar)  */}
<header className="docked full-width top-0 sticky z-50 bg-surface-bright/80 dark:bg-inverse-surface/80 backdrop-blur-md border-b border-outline-variant/30 dark:border-outline-variant/20 shadow-sm">
<div className="flex justify-between items-center w-full px-space-xl max-w-7xl mx-auto h-16">
{/*  Brand Logo Anchor  */}
<a className="flex items-center gap-3 group" href="#">
<img src="/logo.jpg" alt="Arcoin Logo" className="h-10 w-auto mix-blend-multiply group-hover:scale-105 transition-transform" />
<div className="flex flex-col">
<span className="text-headline-sm font-headline-sm font-bold tracking-tight text-primary dark:text-primary-fixed">ARCOIN Geofísica</span>
<span className="font-label-sm text-[9px] tracking-widest uppercase text-secondary -mt-1 font-semibold">Ingeniería &amp; Sondeo SEV</span>
</div>
</a>
{/*  Desktop Navigation Links  */}
<nav className="hidden md:flex items-center gap-6">
<a className="text-primary dark:text-inverse-primary font-title-sm text-title-sm border-b-2 border-primary dark:border-inverse-primary pb-1" href="#servicios">Servicios SEV</a>
<a className="text-on-surface-variant dark:text-surface-variant font-body-md text-body-md hover:text-primary dark:hover:text-inverse-primary transition-colors" href="#metodologia">Metodología</a>
<a className="text-on-surface-variant dark:text-surface-variant font-body-md text-body-md hover:text-primary dark:hover:text-inverse-primary transition-colors" href="#tecnologia">Equipamiento</a>
<a className="text-on-surface-variant dark:text-surface-variant font-body-md text-body-md hover:text-primary dark:hover:text-inverse-primary transition-colors" href="#casos">Casos de Éxito</a>
</nav>
{/*  Trailing Action CTA Cluster  */}
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-emerald-500/30 bg-emerald-50 text-emerald-800 font-label-md text-label-md hover:bg-emerald-100 hover:border-emerald-500 transition-colors" href="https://wa.me/584166967096?text=Hola%20ARCOIN,%20deseo%20cotizar%20un%20estudio%20geof%C3%ADsico%20SEV" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[16px] text-emerald-600" data-icon="chat">chat</span>
<span>WhatsApp Directo</span>
</a>
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-container hover:bg-primary text-white font-title-sm text-title-sm shadow hover:shadow-md transition-all active:scale-[0.99]" href="#cotizar">
<span className="w-2 h-2 rounded-full bg-amber-400"></span>
<span>Cotizar Estudio</span>
</a>
</div>
</div>
</header>
{/*  Hero Section with Bento Structure & Geoelectrical Inversion Telemetry  */}
<section className="relative pt-space-lg pb-space-xl overflow-hidden">
<div className="max-w-7xl mx-auto px-space-md sm:px-space-xl">
{/*  Top Micro Data Ribbon  */}
<div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-3 border-b border-outline-variant/30 font-label-sm text-label-sm text-secondary">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-semibold border border-outline-variant/40">GEO-SYS ID: SEV-VN-2026-X</span>
<span className="text-on-surface-variant">SONDEO GEOELÉCTRICO DE PROFUNDIDAD CERTIFICADO</span>
</div>
<div className="flex items-center gap-3">
<span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Mapeo Resistivo Multicapa</span>
<span className="hidden md:inline text-outline-variant">|</span>
<span className="font-code-spec text-on-surface">AB/2: 250m | MN/2: 20m</span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
{/*  Left Column: Hero Value Proposition & Fast Conversion (7 Cols)  */}
<div className="lg:col-span-7 flex flex-col justify-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 font-label-sm text-label-sm mb-4 w-fit">
<span className="material-symbols-outlined text-[14px] text-amber-600" data-icon="radar">radar</span>
<span>MÁXIMA EFICIENCIA HIDROGEOLÓGICA EN NUEVA ESPARTA</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-primary tracking-tight mb-4 font-orbitron">
            Precisión Geofísica Subterránea: <span className="text-tertiary-container block text-headline-lg font-headline-lg font-orbitron mt-1">Certeza Científica antes de Perforar</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-6 leading-relaxed">
            Elimine el riesgo de pozos secos en la Isla de Margarita. Mapeamos acuíferos, espesores litológicos y profundidad exacta mediante <strong className="text-on-surface font-semibold">Sondeo Eléctrico Vertical (SEV) multielectródico</strong> con una tasa de éxito del 80-90% verificada en campo.
          </p>
{/*  Fast-Track Lead Gen Action Box  */}
<div className="bg-surface-container-lowest p-space-md rounded-xl border border-outline-variant/40 shadow-sm mb-8 crosshair-corner">
<div className="flex flex-col sm:flex-row gap-3 items-stretch">
<a className="flex-1 inline-flex justify-center items-center gap-2 px-5 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-title-sm text-title-sm shadow-sm transition-all text-center" href="https://wa.me/584166967096?text=Solicito%20consulta%20con%20Ingeniero%20Geof%C3%ADsico%20sobre%20SEV" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined" data-icon="phone_in_talk">phone_in_talk</span>
<span>Consultar por WhatsApp con Ingeniero Geofísico</span>
</a>
<a className="inline-flex justify-center items-center gap-2 px-5 py-3.5 rounded-lg bg-primary-container hover:bg-primary text-white font-title-sm text-title-sm transition-all text-center" href="#cotizar">
<span>Solicitar Cotización Inmediata</span>
<span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
<div className="mt-3 flex items-center justify-between text-label-sm font-label-sm text-secondary pt-2 border-t border-outline-variant/20">
<span className="flex items-center gap-1.5 text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span>Equipos activos en toda la Isla de Margarita</span>
</span>
<span className="hidden sm:inline font-mono">Disponibilidad Inmediata</span>
</div>
</div>
{/*  Fast Metric Badges 4x Grid  */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
<div className="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/30">
<div className="font-orbitron font-bold text-headline-sm text-primary">80-90%</div>
<div className="font-label-sm text-label-sm text-secondary uppercase">Tasa de Éxito</div>
</div>
<div className="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/30">
<div className="font-orbitron font-bold text-headline-sm text-primary">+650</div>
<div className="font-label-sm text-label-sm text-secondary uppercase">Estudios en Nva. Esparta</div>
</div>
<div className="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/30">
<div className="font-orbitron font-bold text-headline-sm text-amber-600">±5-10%</div>
<div className="font-label-sm text-label-sm text-secondary uppercase">Margen Profundidad</div>
</div>
<div className="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/30">
<div className="font-orbitron font-bold text-headline-sm text-primary">CIV</div>
<div className="font-label-sm text-label-sm text-secondary uppercase">Colegiatura Oficial</div>
</div>
</div>
</div>
{/*  Right Column: Interactive Telemetry 3D Bento Display (5 Cols)  */}
<div className="lg:col-span-5">
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 shadow-xl overflow-hidden">
{/*  Hardware / Telemetry Header  */}
<div className="px-4 py-2.5 bg-surface-container-high flex items-center justify-between border-b border-outline-variant/30 font-label-sm text-label-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary" data-icon="terminal">terminal</span>
<span className="font-code-spec font-bold text-primary">ARCOIN-SEV // RESISTIVÍMETRO V4</span>
</div>
<span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-code-spec text-[10px] font-semibold">SEÑAL SIN RUIDO: 99.4%</span>
</div>
{/*  Image Asset with Visual Technical Cutaway  */}
<div className="relative bg-slate-950 aspect-[16/10] overflow-hidden group flex items-center justify-center">
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-screen">
                <source src="/demo-sev.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/80 pointer-events-none"></div>
              
              {/*  Real-time Geoelectrical Telemetry Floating HUD  */}
<div className="absolute bottom-3 left-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md p-3 rounded-lg border border-white/60 shadow-lg text-on-surface">
<div className="flex items-center justify-between mb-2 pb-1.5 border-b border-outline-variant/20">
<span className="font-label-sm text-label-sm font-bold text-primary flex items-center gap-1.5">
<span className="material-symbols-outlined text-[14px] text-amber-500" data-icon="water_drop">water_drop</span>
                    ACUÍFERO DETECTADO EN FORMACIÓN
                  </span>
<span className="font-label-sm text-label-sm bg-primary/10 text-primary px-1.5 py-0.5 rounded font-mono">SEV-PUNTO #04</span>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center font-label-sm">
<div className="bg-surface-bright p-1.5 rounded border border-outline-variant/20">
<div className="text-secondary text-[10px]">Prof. Total</div>
<div className="font-orbitron font-bold text-primary text-body-md">120 m</div>
</div>
<div className="bg-surface-bright p-1.5 rounded border border-outline-variant/20">
<div className="text-secondary text-[10px]">Nivel Freático</div>
<div className="font-orbitron font-bold text-emerald-600 text-body-md">42.5 m</div>
</div>
<div className="bg-surface-bright p-1.5 rounded border border-outline-variant/20">
<div className="text-secondary text-[10px]">Caudal Est.</div>
<div className="font-orbitron font-bold text-primary text-body-md">14 L/s</div>
</div>
<div className="bg-surface-bright p-1.5 rounded border border-outline-variant/20">
<div className="text-secondary text-[10px]">Confiabilidad</div>
<div className="font-orbitron font-bold text-amber-600 text-body-md">94.8%</div>
</div>
</div>
</div>
</div>
{/*  Schlumberger Inversion Data Breakdown  */}
<div className="p-4 bg-surface-bright border-t border-outline-variant/20 font-body-sm text-body-sm">
<div className="flex flex-col mb-3 gap-1 border-b border-outline-variant/20 pb-2">
<span className="font-label-md text-label-md text-primary font-semibold leading-tight">Perfil Estratigráfico Invertido:</span>
<span className="text-[10px] text-secondary font-code-spec">Algoritmo: Marquardt-Levenberg</span>
</div>
<div className="space-y-2 font-code-spec text-label-sm text-on-surface-variant">
<div className="flex justify-between items-start bg-white px-2.5 py-2 rounded border border-outline-variant/20 gap-2">
<div className="flex flex-col min-w-0">
  <span className="font-bold text-primary leading-tight">0.0 - 4.5m</span>
  <span className="text-[10px] text-secondary truncate sm:whitespace-normal">Suelo vegetal / Arcilla plástica</span>
</div>
<span className="text-secondary bg-surface-bright px-1.5 py-0.5 rounded text-[10px] whitespace-nowrap border border-outline-variant/30">ρ: 18.2 Ω·m</span>
</div>
<div className="flex justify-between items-start bg-white px-2.5 py-2 rounded border border-outline-variant/20 gap-2">
<div className="flex flex-col min-w-0">
  <span className="font-bold text-primary leading-tight">4.5 - 28.0m</span>
  <span className="text-[10px] text-secondary truncate sm:whitespace-normal">Limo arenoso consolidado</span>
</div>
<span className="text-secondary bg-surface-bright px-1.5 py-0.5 rounded text-[10px] whitespace-nowrap border border-outline-variant/30">ρ: 64.0 Ω·m</span>
</div>
<div className="flex justify-between items-start bg-emerald-50 px-2.5 py-2 rounded border border-emerald-300 gap-2 shadow-sm">
<div className="flex flex-col min-w-0">
  <span className="font-bold text-emerald-800 leading-tight">28.0 - 75.0m</span>
  <span className="text-[10px] text-emerald-700/80 font-semibold truncate sm:whitespace-normal">Arena gruesa saturada [Acuífero]</span>
</div>
<span className="text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded text-[10px] whitespace-nowrap border border-emerald-200 font-bold">ρ: 142.5 Ω·m</span>
</div>
<div className="flex justify-between items-start bg-white px-2.5 py-2 rounded border border-outline-variant/20 gap-2">
<div className="flex flex-col min-w-0">
  <span className="font-bold text-primary leading-tight">&gt; 75.0m</span>
  <span className="text-[10px] text-secondary truncate sm:whitespace-normal">Basamento rocoso impermeable</span>
</div>
<span className="text-secondary bg-surface-bright px-1.5 py-0.5 rounded text-[10px] whitespace-nowrap border border-outline-variant/30">ρ: 890.0 Ω·m</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Educational Methodology Section: ¿Cómo Funciona el SEV?  */}
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
{/*  Services Hierarchy — 2026 Bento Grid  */}
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

{/* Paquetes de Estudio */}
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
      <a href="#cotizar" className="block text-center w-full px-4 py-2 rounded-lg bg-surface-container-high text-primary font-title-sm hover:bg-primary hover:text-white transition-colors">Solicitar Cotización</a>
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
      <a href="#cotizar" className="block text-center w-full px-4 py-2 rounded-lg bg-primary text-white font-title-sm hover:bg-primary-container transition-colors">Solicitar Cotización</a>
    </div>
  </div>
</div>
</section>

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

{/* Venezuelan Success Stories Section */}
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
{/*  Case 1: Guárico  */}
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
{/*  Case 2: Carabobo  */}
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
{/*  Case 3: Zulia  */}
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

{/* FAQ & Tiempos Section */}
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

{/* Interactive Lead Gen & Quote Simulator Section */}
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
{/*  Footer Component (Footer)  */}
<footer className="full-width bottom bg-surface-container-lowest dark:bg-inverse-surface border-t border-outline-variant/30 dark:border-outline-variant/20">
<div className="w-full px-space-xl py-space-xl max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-space-md">
{/*  Brand & Corporate Legal Footprint  */}
<div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
<div className="flex items-center gap-2">
  <img src="/logo.jpg" alt="ARCOIN Logo" className="h-8 w-8 object-cover rounded shadow-sm border border-outline-variant/30" />
  <span className="text-headline-sm font-headline-sm font-bold text-primary dark:text-primary-fixed">
    ARCOIN Geofísica
  </span>
</div>
<p className="font-body-sm text-body-sm text-secondary">
  RIF: J-40812930-1 | Sede operativa exclusiva: Isla de Margarita, Edo. Nueva Esparta.
</p>
<p className="font-body-sm text-body-sm text-secondary">
  © 2026 ARCOIN Ingeniería Geofísica &amp; Hidrogeología C.A. Todos los derechos reservados.
</p>
<p className="font-label-sm text-[11px] text-secondary/80 mt-1">
  Plataforma diseñada y desarrollada por <a href="https://adrielssystems.com" target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:underline transition-colors">Adriel's Systems</a>
</p>
</div>
{/*  Footer Navigation Links List  */}
<div className="flex flex-wrap justify-center items-center gap-4 text-center">
<a className="text-primary dark:text-inverse-primary font-label-sm text-label-sm hover:underline" href="#servicios">Sondeo Eléctrico Vertical (SEV)</a>
<span className="text-outline-variant">•</span>
<a className="text-on-surface-variant dark:text-surface-variant font-body-sm text-body-sm hover:text-primary dark:hover:text-inverse-primary transition-colors" href="#servicios">Hidrogeología de Acuíferos</a>
<span className="text-outline-variant">•</span>
<a className="text-on-surface-variant dark:text-surface-variant font-body-sm text-body-sm hover:text-primary dark:hover:text-inverse-primary transition-colors" href="#tecnologia">Certificaciones Geotécnicas</a>
<span className="text-outline-variant">•</span>
<a className="text-on-surface-variant dark:text-surface-variant font-body-sm text-body-sm hover:text-primary dark:hover:text-inverse-primary transition-colors" href="#metodologia">Normativa INAMEH</a>
<span className="text-outline-variant">•</span>
<a className="text-on-surface-variant dark:text-surface-variant font-body-sm text-body-sm hover:text-primary dark:hover:text-inverse-primary transition-colors" href="#">Aviso Legal &amp; Privacidad</a>
</div>
</div>
</footer>

    </div>
  );
}
