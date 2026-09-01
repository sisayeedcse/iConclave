const fs = require('fs');
let content = fs.readFileSync('data/site.ts', 'utf8');
content = content.replace(/FIVE DISCIPLINES/g, 'SIX DISCIPLINES');
content = content.replace(/FIVE WAYS TO COMPETE/g, 'SIX WAYS TO COMPETE');
fs.writeFileSync('data/site.ts', content);
console.log('Fixed site strings');
