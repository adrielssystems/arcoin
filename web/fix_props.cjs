const fs = require('fs');

let code = fs.readFileSync('src/App.tsx', 'utf-8');

// Fix onsubmit to onSubmit
code = code.replace(
  /onsubmit=\"event\.preventDefault\(\); window\.open\('https:\/\/wa\.me\/584166967096\?text=' \+ encodeURIComponent\('Hola ARCOIN, deseo cotizar un estudio SEV para ' \+ document\.getElementById\('req-tipo'\)\.value \+ ' en el estado ' \+ document\.getElementById\('req-estado'\)\.value \+ '\. Mi nombre es ' \+ document\.getElementById\('req-nombre'\)\.value\)\);\"/g,
  `onSubmit={(e) => { e.preventDefault(); const form = e.target; const tipo = form['req-tipo'].value; const estado = form['req-estado'].value; const nombre = form['req-nombre'].value; window.open('https://wa.me/584166967096?text=' + encodeURIComponent('Hola ARCOIN, deseo cotizar un estudio SEV para ' + tipo + ' en el estado ' + estado + '. Mi nombre es ' + nombre)); }}`
);

// Fix for= to htmlFor=
code = code.replace(/for=\"req-/g, 'htmlFor=\"req-');

fs.writeFileSync('src/App.tsx', code);
console.log('Fixed React props!');
