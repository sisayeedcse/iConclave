const fs = require('fs');
let content = fs.readFileSync('app/about/page.tsx', 'utf8');

content = content.replace(/five distinct competitions/g, 'six distinct events');
content = content.replace(/Five competitions/g, 'Six events');
content = content.replace(/FIVE ARENAS/g, 'SIX ARENAS');

fs.writeFileSync('app/about/page.tsx', content);
console.log('Fixed about page strings');
