var markdownpdf = require('markdown-pdf');

const inputs = [
  'sections/00-HEADER.md',
  'sections/01-PROFILE.md',
  'sections/02-EDUCATION.md',
  'sections/03-EXPERIENCE.md',
  'sections/04-ACTIVITIES.md',
];
const output = 'RESUME.pdf';

const options = {
  cssPath: 'styles/pdf.css',
};

markdownpdf().concat.from(inputs, options).to(output, () => {
  console.log('Created', output)
});
