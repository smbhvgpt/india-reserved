const fs = require('fs');
const path = require('path');

// Load existing GeoJSON
const indiaGeoJSON = JSON.parse(fs.readFileSync(path.join(__dirname, '../public/india.json'), 'utf8'));

// Find max ID_1 to continue numbering
const maxId = Math.max(...indiaGeoJSON.features.map(f => f.properties.ID_1));
let nextId = maxId + 1;

// Helper function to create a feature
function createFeature(name, type, engType, coordinates, isDisputed = false) {
    return {
        type: "Feature",
        properties: {
            ID_0: 105,
            ISO: "IND",
            NAME_0: "India",
            ID_1: nextId++,
            NAME_1: name,
            NL_NAME_1: null,
            VARNAME_1: null,
            TYPE_1: type,
            ENGTYPE_1: engType,
            DISPUTED: isDisputed
        },
        geometry: {
            type: "Polygon",
            coordinates: [coordinates]
        }
    };
}

// Check if state already exists
function stateExists(name) {
    return indiaGeoJSON.features.some(f => f.properties.NAME_1 === name);
}

// Add Telangana (carved from Andhra Pradesh in 2014)
// Approximate coordinates for Telangana
if (!stateExists("Telangana")) {
    const telanganaCoords = [
        [77.20, 19.90], [78.00, 19.50], [79.00, 19.25], [80.00, 18.90],
        [80.30, 18.40], [80.50, 17.50], [80.30, 16.80], [80.00, 16.50],
        [79.50, 16.30], [78.80, 16.15], [78.20, 16.40], [77.50, 16.80],
        [77.00, 17.20], [76.80, 17.80], [77.00, 18.50], [77.00, 19.20],
        [77.20, 19.90]
    ];
    indiaGeoJSON.features.push(createFeature("Telangana", "State", "State", telanganaCoords));
    console.log("Added Telangana");
}

// Add Ladakh (separated from J&K in 2019)
// Approximate coordinates for Ladakh (the eastern/southern part of J&K)
if (!stateExists("Ladakh")) {
    const ladakhCoords = [
        [75.40, 35.50], [76.50, 36.00], [77.80, 35.50], [78.50, 34.50],
        [79.00, 33.50], [79.50, 32.80], [78.80, 32.30], [78.00, 32.50],
        [77.00, 33.00], [76.20, 33.80], [75.60, 34.50], [75.40, 35.50]
    ];
    indiaGeoJSON.features.push(createFeature("Ladakh", "Union Territor", "Union Territory", ladakhCoords));
    console.log("Added Ladakh");
}

// Add Pakistan Occupied Kashmir (PoK) - Disputed territory
// Approximate coordinates for PoK region
const pokCoords = [
    [73.20, 36.90], [74.50, 36.80], [75.30, 36.00], [75.40, 35.50],
    [75.60, 34.50], [74.80, 34.00], [74.00, 33.70], [73.50, 34.00],
    [73.00, 34.50], [72.80, 35.50], [73.00, 36.20], [73.20, 36.90]
];
indiaGeoJSON.features.push(createFeature("Pakistan Occupied Kashmir", "Disputed", "Disputed Territory", pokCoords, true));
console.log("Added Pakistan Occupied Kashmir (Disputed)");

// Add Aksai Chin - Disputed territory (occupied by China)
// Approximate coordinates for Aksai Chin region  
const aksaiChinCoords = [
    [77.80, 35.50], [78.50, 35.80], [79.50, 35.50], [80.20, 35.00],
    [80.00, 34.20], [79.50, 33.60], [79.00, 33.50], [78.50, 34.50],
    [77.80, 35.50]
];
indiaGeoJSON.features.push(createFeature("Aksai Chin", "Disputed", "Disputed Territory", aksaiChinCoords, true));
console.log("Added Aksai Chin (Disputed)");

// Mark existing states with DISPUTED: false
indiaGeoJSON.features.forEach(f => {
    if (f.properties.DISPUTED === undefined) {
        f.properties.DISPUTED = false;
    }
});

// Save enhanced GeoJSON
fs.writeFileSync(
    path.join(__dirname, '../public/india-enhanced.json'),
    JSON.stringify(indiaGeoJSON)
);

console.log('\\nEnhanced GeoJSON saved to public/india-enhanced.json');
console.log(`Total features: ${indiaGeoJSON.features.length}`);

// List all states/territories
console.log('\\nAll states/territories:');
indiaGeoJSON.features
    .sort((a, b) => a.properties.NAME_1.localeCompare(b.properties.NAME_1))
    .forEach(f => {
        const disputed = f.properties.DISPUTED ? ' (DISPUTED)' : '';
        console.log(`  - ${f.properties.NAME_1}${disputed}`);
    });
