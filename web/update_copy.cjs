const fs = require('fs');

let code = fs.readFileSync('src/App.tsx', 'utf-8');

// 1. Phone number replacements
code = code.replace(/584120000000/g, '584166967096');
code = code.replace(/\+58 \(412\) 000-0000/g, '+58 (416) 696-7096');

// 2. Metrics replacements
code = code.replace(/hasta 95% de asertividad verificada/g, 'una tasa de éxito del 80-90% verificada');
code = code.replace(/<div className="font-orbitron font-bold text-headline-sm text-primary">95%\+<\/div>\s*<div className="font-label-sm text-label-sm text-secondary uppercase">Precisión Comprobada<\/div>/g, '<div className="font-orbitron font-bold text-headline-sm text-primary">80-90%</div>\n<div className="font-label-sm text-label-sm text-secondary uppercase">Tasa de Éxito</div>');
code = code.replace(/<div className="font-orbitron font-bold text-headline-sm text-amber-600">0%<\/div>\s*<div className="font-label-sm text-label-sm text-secondary uppercase">Riesgo Pozo Ciego<\/div>/g, '<div className="font-orbitron font-bold text-headline-sm text-amber-600">±5-10%</div>\n<div className="font-label-sm text-label-sm text-secondary uppercase">Margen Profundidad</div>');

// 3. Add Packages (Estudio Básico & Estudio Medio) right before <section id="tecnologia">
const packagesHTML = `
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
`;

code = code.replace(/\{\/\*\s*Technology & Hardware Stack Section\s*\*\/\}/, packagesHTML + '\n{/* Technology & Hardware Stack Section */}');

// 4. Add FAQ / Honestidad Policy right before <section id="cotizar">
const faqHTML = `
{/* FAQ & Tiempos Section */}
<section className="py-space-xl bg-surface-container-low border-t border-outline-variant/30" id="faq">
<div className="max-w-7xl mx-auto px-space-md sm:px-space-xl">
  <div className="text-center max-w-3xl mx-auto mb-10">
    <h2 className="font-headline-lg text-headline-lg text-primary font-orbitron">LA HONESTIDAD ES FUNDAMENTAL</h2>
    <p className="font-body-md text-body-md text-on-surface-variant mt-2">Respuestas claras a las dudas más comunes de nuestros clientes.</p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
    <div className="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant/40 hover:border-primary transition-colors">
      <h4 className="font-title-md text-primary mb-2">¿Garantiza encontrar agua?</h4>
      <p className="font-body-sm text-on-surface-variant"><strong>El SEV no garantiza al 100% encontrar agua.</strong> Sin embargo, reduce drásticamente el riesgo de pozos secos (de ~50% a un margen de ~10-20%). Un pozo puede fallar incluso con un buen SEV si la formación no tiene suficiente permeabilidad o si ocurren problemas mecánicos durante la perforación.</p>
    </div>
    <div className="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant/40 hover:border-primary transition-colors">
      <h4 className="font-title-md text-primary mb-2">¿Qué tan preciso es el sondeo?</h4>
      <p className="font-body-sm text-on-surface-variant">La precisión en determinar la profundidad de las capas es de ±5-10%. Si el estudio indica agua a 85 metros, es altamente probable encontrar el acuífero entre 77 y 93 metros. <strong>Tasa de éxito comprobada: 80-90%.</strong></p>
    </div>
    <div className="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant/40 hover:border-primary transition-colors">
      <h4 className="font-title-md text-primary mb-2">¿Cuánto tiempo tarda el estudio?</h4>
      <p className="font-body-sm text-on-surface-variant">Típicamente <strong>2 a 5 días</strong> desde el inicio hasta la entrega del informe final. (1 día de campo + 2-3 días de procesamiento e interpretación). <br/><br/><em>Ofrecemos aceleración para urgencias con entregas en 3 días hábiles.</em></p>
    </div>
    <div className="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant/40 hover:border-primary transition-colors">
      <h4 className="font-title-md text-primary mb-2">Atención Directa</h4>
      <p className="font-body-sm text-on-surface-variant">Coordinación directa para logística a nivel nacional a cargo del:<br/><br/><strong className="text-primary font-orbitron">Ing. S. Daniel Gómez B.</strong><br/><br/>📞 0416-6967096 / 0412-3967096<br/>✉️ arcoinca10@gmail.com</p>
    </div>
  </div>
</div>
</section>
`;

code = code.replace(/\{\/\*\s*Interactive Lead Gen & Quote Simulator Section\s*\*\/\}/, faqHTML + '\n{/* Interactive Lead Gen & Quote Simulator Section */}');

fs.writeFileSync('src/App.tsx', code);
console.log('App updated successfully!');
