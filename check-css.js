const fs = require('fs');
const css = fs.readFileSync('app/styles/premium-refinements.css', 'utf-8');

// Track brace depth at each line
let depth = 0;
let line = 1;
let inComment = false;
let inString = false;
let stringChar = null;

// Record depth at each line
const depthAtLine = {};
depthAtLine[1] = 0;

for (let i = 0; i < css.length; i++) {
  const c = css[i];
  const next = css[i + 1];

  if (c === '\n') { line++; depthAtLine[line] = depth; }

  if (inComment) {
    if (c === '*' && next === '/') { inComment = false; i++; }
    continue;
  }

  if (inString) {
    if (c === '\\') { i++; continue; }
    if (c === stringChar) inString = false;
    continue;
  }

  if (c === '/' && next === '/') {
    while (i < css.length && css[i] !== '\n') i++;
    continue;
  }

  if (c === '/' && next === '*') { inComment = true; i++; continue; }

  if (c === "'" || c === '"' || c === '`') { inString = true; stringChar = c; continue; }

  if (c === '{') depth++;
  if (c === '}') depth--;
}

console.log('Final brace depth:', depth);
console.log('Depth at line 195:', depthAtLine[195]);
console.log('Depth at line 196:', depthAtLine[196]);
console.log('Depth at line 197:', depthAtLine[197]);
console.log('Depth at line 198:', depthAtLine[198]);
console.log('Depth at line 199:', depthAtLine[199]);
console.log('Depth at line 200:', depthAtLine[200]);

// Also check for content: ' characters that might break CSS string parsing
const contentLines = css.split('\n');
for (let i = 0; i < contentLines.length; i++) {
  if (contentLines[i].includes("content:") || contentLines[i].includes('content:')) {
    console.log('Line ' + (i+1) + ' has content: ' + JSON.stringify(contentLines[i]));
  }
}