const fs = require('fs');
let content = fs.readFileSync('data/competitions.ts', 'utf8');

content = content.replace(/name: \"3 Minutes Thesis\"/g, 'name: \"PITCH3\"');
content = content.replace(/shortName: \"3MT\"/g, 'shortName: \"PITCH3\"');
content = content.replace(/slug: \"three-minutes-thesis\"/g, 'slug: \"pitch3\"');

content = content.replace(/name: \"Project Showcasing\"/g, 'name: \"Project Nexus\"');
content = content.replace(/shortName: \"Project Showcase\"/g, 'shortName: \"Project Nexus\"');
content = content.replace(/organizerShort: \"PURC\"/g, 'organizerShort: \"PUCRC\"');
content = content.replace(/organizer: \"Premier University Robotics Club\"/g, 'organizer: \"Premier University Computer and Robotics Club (PUCRC)\"');

content = content.replace(/organizerShort: \"IEEE CS PUSBC\"/g, 'organizerShort: \"IEEE CS\"');

content = content.replace(/name: \"Robo Soccer\"/g, 'name: \"GoalBot Challenge\"');
content = content.replace(/shortName: \"Robo Soccer\"/g, 'shortName: \"GoalBot Challenge\"');
content = content.replace(/organizerShort: \"IEEE RAS PUSBC\"/g, 'organizerShort: \"IEEE RAS\"');
content = content.replace(/slug: \"robo-soccer\"/g, 'slug: \"goalbot-challenge\"');

content = content.replace(/name: \"Poster Presentation\"/g, 'name: \"Research Exhibition by Poster Presentation\"');
content = content.replace(/shortName: \"Poster Presentation\"/g, 'shortName: \"Research Exhibition\"');
content = content.replace(/organizerShort: \"IEEE PES PUSBC\"/g, 'organizerShort: \"IEEE PES\"');
content = content.replace(/slug: \"poster-presentation\"/g, 'slug: \"research-exhibition\"');

fs.writeFileSync('data/competitions.ts', content);
console.log('Replacements done');
