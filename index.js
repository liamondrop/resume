const markdownpdf = require('markdown-pdf');
const fs = require('fs');

fs.createReadStream('./README.md')
  .pipe(markdownpdf())
  .pipe(fs.createWriteStream('./RESUME.pdf'))
