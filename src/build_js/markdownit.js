
const slugify = str =>
  `slug-${
    str.trim()                     // Remove surrounding whitespace
       .toLowerCase()              // Lowercase
       .replace(/[^a-z0-9]+/g,'-') // Replace non-alphanum with dash
       .replace(/^-+/, '')         // Trim front dashes
       .replace(/-+$/, '')         // Trim end dashes
  }`;





const fs = require('fs'),
      mIt = require('markdown-it'),
      mA  = require('markdown-it-anchor'),
      mFA = require('markdown-it-fontawesome'),
      mIn = require('markdown-it-include'),
      mAt = require('markdown-it-attrs'),
      mU  = require('markdown-it-underline'),
      mTC = require('markdown-it-table-of-contents'),

      md  = mIt({ html: true /*, highlight: (code, lang) => code */ })
             .use(mTC, { slugify, includeLevel: [1,2,3,4,5,6] })
             .use(mA,  { slugify })
             .use(mIn, './src/md/')
             .use(mU)
             .use(mAt)
             .use(mFA);

const out = md.render( `${fs.readFileSync('./build/index.md')}` );

console.log('building markdown to html...');

fs.writeFileSync('./build/out/book_html/index.html', out, 'utf-8');

console.log('... done.');
