const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

// 1. Geography replacements
code = code.replace(/Venezuela \(Nacional: Centro, Llanos, Zulia, Oriente\)/g, 'Nueva Esparta (Isla de Margarita, Coche y Cubagua)');
code = code.replace(/EN SUELO VENEZOLANO/g, 'EN NUEVA ESPARTA');
code = code.replace(/pozos secos en Venezuela/g, 'pozos secos en la Isla de Margarita');
code = code.replace(/Equipos en campo activos en Guárico, Aragua y Carabobo/g, 'Equipos activos en toda la Isla de Margarita');
code = code.replace(/\+650<\/div>\s*<div className=\"font-label-sm text-label-sm text-secondary uppercase\">Estudios en Venezuela/g, '+650</div>\n<div className=\"font-label-sm text-label-sm text-secondary uppercase\">Estudios en Nva. Esparta');
code = code.replace(/acuíferos costeros venezolanos/g, 'acuíferos costeros neoespartanos');
code = code.replace(/a cualquier estado del país/g, 'a cualquier municipio de la isla');
code = code.replace(/Casos de Éxito en Venezuela/g, 'Casos de Éxito en Nueva Esparta');
code = code.replace(/Estudio SEV en Venezuela/g, 'Estudio SEV en Margarita');

// Cases of success locations:
// Case 1
code = code.replace(/AGROINDUSTRIA \/\/ GUÁRICO/g, 'AGRICULTURA // ANTOLÍN DEL CAMPO');
code = code.replace(/Calabozo, Edo\. Guárico/g, 'Sector El Salado, Isla de Margarita');
// Case 2
code = code.replace(/SECTOR INDUSTRIAL \/\/ CARABOBO/g, 'HOTELERÍA // MANEIRO');
code = code.replace(/Zona Ind\. Valencia/g, 'Pampatar, Isla de Margarita');
code = code.replace(/Visado CIV Carabobo N° 4410/g, 'Visado CIV Nueva Esparta');
// Case 3
code = code.replace(/GANADERÍA \/\/ ZULIA/g, 'DESARROLLO // MACANAO');
code = code.replace(/Machiques de Perijá/g, 'Península de Macanao');

// Form Dropdown
const newDropdown = `
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
`;
code = code.replace(/<select className=\"w-full.*?id=\"req-estado\">[\s\S]*?<\/select>/, newDropdown);

// 2. Add ADMT-300 ZN Serie O36K Section
const hardwareSection = `
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
`;

code = code.replace(/\{\/\*\s*Venezuelan Success Stories Section\s*\*\/\}/, hardwareSection + '\n{/* Venezuelan Success Stories Section */}');

fs.writeFileSync('src/App.tsx', code);
console.log('Updated to Margarita only and added ADMT-300ZN section.');
