# India Reservation Map 🇮🇳

An interactive web application (dashboard) to visualize and analyze reservation (quota) policies across different states in India.

> **Data status:** an audit in October 2026 found errors in the data for 18 of 36 States/UTs. See [`docs/DATA_AUDIT.md`](docs/DATA_AUDIT.md) for the corrections and sources, and [`docs/IMPROVEMENT_PLAN.md`](docs/IMPROVEMENT_PLAN.md) for the roadmap. Corrections are in progress.

## 🚀 Features
- **Interactive Map**: Click on any state to view its specific reservation details.
- **Detailed Breakdowns**: View percentages for SC, ST, OBC, EWS, and other specific categories.
- **50% Rule Context**: Shows whether each State/UT is within or above the 50% general rule for SC, ST and OBC-type quotas (Indra Sawhney, 1992 — which allows exceptions in extraordinary situations). EWS is shown separately because the Supreme Court held it falls outside that limit (Janhit Abhiyan, 2022). Pending legal challenges are noted.
- **Responsive Design**: Works on Desktop and Mobile.
- **Search Functionality**: Quickly find specific states or union territories.

## 🛠️ Tech Stack
- **Framework**: React (v19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Map Visualization**: React Simple Maps (TopoJSON)

## 🏃‍♂️ How to Run Locally

1.  **Clone the repository**
    ```bash
    git clone https://github.com/smbhvgpt/india-reserved.git
    ```
2.  **Install dependencies**
    ```bash
    cd india-reserved
    npm install
    ```
3.  **Start the development server**
    ```bash
    npm run dev
    ```

### Scripts
| Command | What it does |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |
| `npm run build:map` | Regenerate `src/data/india-states.topo.json` from the source map in `scripts/map-source/` (needs network once, for a pinned mapshaper) |

## 🗺️ Map
State boundaries come from [simplemaps](https://simplemaps.com) (`scripts/map-source/simplemaps_in.json`) and follow India's official boundary depiction (Jammu & Kashmir includes PoK; Ladakh includes Gilgit-Baltistan and Aksai Chin) — keep this property if the map source is ever replaced. `npm run build:map` simplifies them to a ~48 KB TopoJSON file (19 KB gzipped) and tags each shape with its jurisdiction id. It fails if a State/UT in the data has no shape on the map, or if simplification would drop any island or enclave (e.g. Puducherry's Mahe and Yanam, Lakshadweep's islands).

## 🌐 Deployment
This project is a **Static Web App**.

-   **Build Command**: `npm run build`
-   **Output Directory**: `dist/`

The build uses relative asset paths, so `dist/` works both at a domain root and under a sub-path. The live site is served by GitHub Pages from the `gh-pages` branch: build, then publish the contents of `dist/` to that branch.
