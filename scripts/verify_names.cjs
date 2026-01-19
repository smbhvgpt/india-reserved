
const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, '../src/data/simplemaps_in.json');
const rawData = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(rawData);

const names = data.features.map(f => f.properties.name).sort();
console.log('Total regions:', names.length);
console.log(JSON.stringify(names, null, 2));
