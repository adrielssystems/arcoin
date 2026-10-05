const fs = require('fs');

let code = fs.readFileSync('src/App.tsx', 'utf-8');

// 1. Add diagram to methodology step 1
const diagramHtml = '<div className="mt-4"><img src="/diagrama-sev.png" alt="Diagrama Schlumberger" className="w-full h-auto rounded-lg border border-outline-variant/30 mix-blend-multiply" /></div>';
code = code.replace(
  '<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">\n            Se alinean electrodos metálicos de corriente (A-B) y electrodos de potencial (M-N) en el terreno con espaciamiento simétrico y calibrado milimétricamente.\n          </p>',
  '<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">\n            Se alinean electrodos metálicos de corriente (A-B) y electrodos de potencial (M-N) en el terreno con espaciamiento simétrico y calibrado milimétricamente.\n          </p>\n' + diagramHtml
);

// 2. Add comparison image to the Educational Comparison
const compImageHtml = '<div className="w-full mb-6"><img src="/comparacion-sev.png" alt="Sin SEV vs Con SEV" className="w-full max-w-md mx-auto rounded-xl shadow-md border border-outline-variant/30" /></div>';
code = code.replace(
  '{/*  Educational Comparison: Perforar a Ciegas vs Con Estudio SEV  */}',
  '{/*  Educational Comparison: Perforar a Ciegas vs Con Estudio SEV  */}\n' + compImageHtml
);

// 3. Add signature and contact details formally to the FAQ / Contact block
const signatureHtml = `
<h4 className="font-title-md text-primary mb-2">Atención Directa</h4>
<div className="mt-2 mb-4">
  <img src="/firma-daniel.png" alt="Firma Ing. Daniel" className="h-12 w-auto object-contain mix-blend-multiply" />
</div>
<p className="font-body-sm text-on-surface-variant">Coordinación directa para logística a nivel nacional a cargo del:<br/><br/><strong className="text-primary font-orbitron">Ing. S. Daniel Gómez B.</strong><br/><br/>📞 0416-6967096 / 0412-3967096<br/>✉️ arcoinca10@gmail.com</p>
`;

code = code.replace(
  /<h4 className="font-title-md text-primary mb-2">Atención Directa<\/h4>[\s\S]*?(?=<\/div>\s*<\/div>\s*<\/section>)/,
  signatureHtml
);

fs.writeFileSync('src/App.tsx', code);
console.log('App updated with images successfully!');
