const fs = require('fs');
let content = fs.readFileSync('app/competitions/page.tsx', 'utf8');
content = content.replace(/Five disciplines\. Five ways to compete\./g, 'Six disciplines. Six ways to compete.');
fs.writeFileSync('app/competitions/page.tsx', content);
console.log('Fixed comps page strings');
