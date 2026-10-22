// Builds src/data/india-states.topo.json from the simplemaps source GeoJSON.
//
//   npm run build:map
//
// Each feature gets the jurisdiction `id` used in reservationData.json, so the
// app needs no name matching at runtime. The build fails if any State/UT in the
// data has no shape on the map, any shape has no matching State/UT, or
// simplification drops a polygon part (an island or enclave such as Mahe).
// Simplification runs through a pinned mapshaper (downloaded once by npm).
import { execFileSync } from 'node:child_process';
import { copyFileSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE = join(root, 'scripts/map-source/simplemaps_in.json');
const DATA = join(root, 'src/data/reservationData.json');
const OUT = join(root, 'src/data/india-states.topo.json');
const MAPSHAPER = 'mapshaper@0.6.102';

// Simplify every polygon part on its own so small islands and enclaves survive
// (keep-shapes only protects one ring per feature), keeping more detail on
// parts under 2,000 km², then merge the parts back into one shape per id.
const MAPSHAPER_COMMANDS = [
    '-rename-layers', 'states',
    '-explode',
    '-simplify', 'variable', 'percentage=this.area < 2e9 ? 0.5 : 0.1', 'keep-shapes',
    '-dissolve', 'id', 'copy-fields=name',
];

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
    if (!nameById[id]) {
        errors.push(`Alias for map shape "${sourceName}" points to unknown id ${id}`);
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

// Run mapshaper through npm's own CLI script when started by `npm run`, so no
// shell is involved (npx is npx.cmd on Windows); fall back to npx otherwise.
function runMapshaper(args, cwd) {
    const npmCli = process.env.npm_execpath;
    if (npmCli && /npm-cli\.[cm]?js$/.test(npmCli)) {
        execFileSync(process.execPath,
            [npmCli, 'exec', '--yes', `--package=${MAPSHAPER}`, '--', 'mapshaper', ...args],
            { stdio: 'inherit', cwd });
    } else {
        execFileSync('npx', ['--yes', MAPSHAPER, ...args], { stdio: 'inherit', cwd });
    }
}

// Number of polygon parts per jurisdiction id
function sourcePartCounts(features) {
    return Object.fromEntries(features.map(f => [f.properties.id,
        f.geometry.type === 'MultiPolygon' ? f.geometry.coordinates.length : 1]));
}
function topologyPartCounts(topology) {
    return Object.fromEntries(topology.objects.states.geometries.map(g => [g.properties.id,
        g.type === 'MultiPolygon' ? g.arcs.length : g.type === 'Polygon' ? 1 : 0]));
}

const tmp = mkdtempSync(join(tmpdir(), 'build-map-'));
try {
    writeFileSync(join(tmp, 'india.geojson'), JSON.stringify(source));
    runMapshaper(['india.geojson', ...MAPSHAPER_COMMANDS,
        '-o', 'india.topo.json', 'format=topojson', 'quantization=100000'], tmp);

    const output = JSON.parse(readFileSync(join(tmp, 'india.topo.json'), 'utf8'));
    const before = sourcePartCounts(source.features);
    const after = topologyPartCounts(output);
    const lost = Object.keys(before).filter(id => (after[id] ?? 0) < before[id])
        .map(id => `${id}: ${before[id]} polygon parts in source, ${after[id] ?? 0} after simplification`);
    if (lost.length) {
        console.error(`Simplification dropped parts of the map:\n${lost.join('\n')}`);
        process.exit(1);
    }
    copyFileSync(join(tmp, 'india.topo.json'), OUT);
} finally {
    rmSync(tmp, { recursive: true, force: true });
}
console.log(`Wrote ${OUT} (${seen.size} shapes, all polygon parts kept)`);
