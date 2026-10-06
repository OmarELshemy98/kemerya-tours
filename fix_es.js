const fs = require('fs');
const p = 'D:/kemerya-tours/lib/i18n.ts';
const lines = fs.readFileSync(p, 'utf8').split('\n');

// Helper to find a line by substring
function findLine(arr, substr, start=0) {
  for (let i = start; i < arr.length; i++) {
    if (arr[i].includes(substr)) return i;
  }
  return -1;
}

// === ES fixes (bottom to top) ===
// ES cta primary (line 472)
let i = findLine(lines, 'primary: "CONTÁCTANOS"');
if (i >= 0) lines[i] = lines[i].replace('CONTÁCTANOS', 'CONTACT');

// ES story (lines 453-454): eyebrow -> "", merge title
i = findLine(lines, 'Más que ver Egipto');
if (i >= 0 && lines[i+1] && lines[i+1].includes('Entenderlo.')) {
  lines[i] = '      eyebrow: "",';
  lines[i+1] = '      title: "Más que ver Egipto. Comprenderla.",';
}

// ES trust: add eyebrow + statement before items
// Find ES trust by looking for the trust block after 'es:'
let esStart = findLine(lines, 'es: {');
i = findLine(lines, 'trust: {', esStart);
if (i >= 0) {
  // Check if next line is items: [
  if (lines[i+1] && lines[i+1].trim() === 'items: [') {
    lines.splice(i+1, 0,
      '      eyebrow: "Viaje privado, respaldado por experiencia real",',
      '      statement: "Viajes privados diseñados con claridad, cuidado y conocimiento local.",'
    );
  }
}

// ES nav (lines 400-404): destinations/experiences/about -> journeys/story, fix contact
i = findLine(lines, 'destinations: "Destinos"');
if (i >= 0) {
  lines[i] = '      journeys: "Viajes",';
  lines.splice(i+1, 1); // remove experiences line
}
i = findLine(lines, 'about: "Nosotros"');
if (i >= 0) lines[i] = '      story: "Nuestra historia",';
i = findLine(lines, 'contact: "CONTÁCTANOS"');
if (i >= 0) lines[i] = lines[i].replace('CONTÁCTANOS', 'CONTACT');

// ES hero title (line ~409): 2-element -> 4-element
i = findLine(lines, '"EGIPTO');
if (i >= 0 && lines[i].includes('title:')) {
  if (lines[i+1] && lines[i+1].includes('DISEÑADO')) {
    lines.splice(i, 2,
      '      title: [',
      '        "EGIPTO TE LLAMA.",',
      '        "LAS PIRÁMIDES TE ESPERAN.",',
      '        "TU MESA ESTÁ PUESTA.",',
      '        "TU EGIPTO TE ESPERA.",',
      '      ],'
    );
  }
}

fs.writeFileSync(p, lines.join('\n'));
console.log('ES fixes applied');
