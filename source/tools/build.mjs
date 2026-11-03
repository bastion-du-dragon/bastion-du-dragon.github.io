// Usage: node tools/build.mjs [site|artifact] [--min]
// Reassemble <variant>/template.html + style.css + game.js into dist/<variant>.html
import fs from 'node:fs';
const v = process.argv[2] || 'site', min = process.argv.includes('--min');
const d = new URL(`../${v}/`, import.meta.url).pathname;
let js = fs.readFileSync(d + 'game.js', 'utf8');
let css = fs.readFileSync(d + 'style.css', 'utf8');
if (min) {
  // esbuild (déjà installé dans l'environnement) : npm i esbuild si absent
  const { transformSync } = await import(process.env.ESBUILD || 'esbuild');
  js = transformSync(js, { minify: true, target: 'es2020' }).code;
  css = css.replace(/\s*\n\s*/g, '');
}
const t = fs.readFileSync(d + 'template.html', 'utf8')
  .replace('/*@@CSS@@*/', () => css).replace('/*@@JS@@*/', () => js);
fs.mkdirSync(new URL('../dist/', import.meta.url).pathname, { recursive: true });
const out = new URL(`../dist/${v}.html`, import.meta.url).pathname;
fs.writeFileSync(out, t);
console.log('OK', out, t.length, 'octets');
