// Builds src/data/india-states.topo.json from the simplemaps source GeoJSON.
//
//   npm run build:map
//
// Each feature gets the jurisdiction `id` used in reservationData.json, so the
// app needs no name matching at runtime. The build fails if any State/UT in the
// data has no shape on the map, or any shape has no matching State/UT.
// Simplification runs through a pinned mapshaper via npx (needs network once).
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE = join(root, 'scripts/map-source/simplemaps_in.json');
const DATA = join(root, 'src/data/reservationData.json');
const OUT = join(root, 'src/data/india-states.topo.json');
const SIMPLIFY = '10%';

// simplemaps feature names that differ from the jurisdiction names in our data
const NAME_ALIASES = {
    'Andaman and Nicobar': 'ANDAMAN_NICOBAR',
    'Dādra and Nagar Haveli and Damān and Diu': 'DADRA_NAGAR_HAVELI_DAMAN_DIU',
    'Orissa': 'ODISHA',
    'Uttaranchal': 'UTTARAKHAND',
};

const source = JSON.parse(readFileSync(SOURCE, 'utf8'));
const data = JSON.parse(readFileSync(DATA, 'utf8'));
const jurisdictions = data.jurisdictions.filter(j => j.id !== 'CENTRAL');
const idByName = Object.fromEntries(jurisdictions.map(j => [j.name, j.id]));
const nameById = Object.fromEntries(jurisdictions.map(j => [j.id, j.name]));

const errors = [];
const seen = new Set();
for (const feature of source.features) {
    const sourceName = feature.properties.name;
    const id = NAME_ALIASES[sourceName] ?? idByName[sourceName];
    if (!id) {
        errors.push(`Map shape "${sourceName}" matches no jurisdiction in reservationData.json`);
        continue;
    }
    if (seen.has(id)) errors.push(`More than one map shape for ${id}`);
    seen.add(id);
    feature.properties = { id, name: nameById[id] };
}
for (const j of jurisdictions) {
    if (!seen.has(j.id)) errors.push(`${j.id} has no shape on the map`);
}
if (errors.length) {
    console.error(errors.join('\n'));
    process.exit(1);
}

const tmp = mkdtempSync(join(tmpdir(), 'build-map-'));
try {
    const input = join(tmp, 'india.geojson');
    writeFileSync(input, JSON.stringify(source));
    execFileSync('npx', [
        '--yes', 'mapshaper@0.6.102', input,
        '-rename-layers', 'states',
        '-simplify', SIMPLIFY, 'keep-shapes',
        '-o', OUT, 'format=topojson', 'quantization=100000',
    ], { stdio: 'inherit' });
} finally {
    rmSync(tmp, { recursive: true, force: true });
}
console.log(`Wrote ${OUT} (${seen.size} shapes)`);
