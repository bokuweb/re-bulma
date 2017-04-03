const csjs = require('csjs');
const fs = require('fs');
const camelCase = require('lodash.camelcase');
const variablesPath = process.argv[2];
const path = process.argv[3];
const dist = process.argv[4];
const generateStyleGuideCss = process.argv.length >= 4 ? process.argv[5] : null;
const CleanCSS = require('clean-css');
const parse = require('properties-parser').parse;

let combinedCss = '';

const files = fs.readdirSync(path);

files.forEach(file => {
  if (!/\.css/.test(file)) return;
  combinedCss += fs.readFileSync(`${path}${file}`, { encoding: 'utf8' });
});

const replacements = parse(fs.readFileSync(variablesPath, { encoding: 'utf8' }));
console.dir(replacements);

function applyStylingVariables() {
  let r = [];
  for(let i in replacements) {
    r.push('\\$\\{' + i + '\\}');
  }
  const s = r.join('|');
  return combinedCss.replace(new RegExp(s, "g"), function(matched) {
    const innerRe = /\$\{(.*)\}/g;
    const p = innerRe.exec(matched);
    if (p.length>1) {
      return replacements[p[1]];
    } else {
      return matched;
    }
  });
}
const csjsObj = csjs`${applyStylingVariables()}`;
const styles = {};

fs.writeFileSync(
  `${dist}css.js`,
  `module.exports = \'${new CleanCSS().minify(csjs.getCss(csjsObj)).styles}\'\;`
);

if (generateStyleGuideCss=='yes') {
  fs.writeFileSync(
    'styleguide/style.css',
    `${csjs.getCss(csjsObj)}`
  );
}

Object.keys(csjsObj).forEach(c => {
  styles[camelCase(c)] = csjsObj[c].toString();
});


fs.writeFileSync(
  `${dist}styles.js`,
  `module.exports = ${JSON.stringify(styles)}`
);

