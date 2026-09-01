const fs = require('fs');
let content = fs.readFileSync('app/about/page.tsx', 'utf8');

content = content.replace(/Organizing 3 Minutes Thesis/g, 'Organizing PITCH3');
content = content.replace(/Premier University Robotics Club/g, 'Premier University Computer and Robotics Club');
content = content.replace(/Organizing Project Showcasing/g, 'Organizing Project Nexus');
content = content.replace(/Organizing Robo Soccer/g, 'Organizing GoalBot Challenge');
content = content.replace(/Organizing Poster Presentation/g, 'Organizing Research Exhibition');

const wieString = "                  {\n                    name: \"IEEE Women in Engineering\",\n                    role: \"Organizing The She-Suite Summit\",\n                  },\n";
content = content.replace(/\]\.map\(\(org\) => \(/g, wieString + '                ].map((org) => (');

fs.writeFileSync('app/about/page.tsx', content);
console.log('Fixed about page organizers');
