# India Reserved — Audit & Improvement Plan

_Audit date: 22 Oct 2026. Companion document: [`DATA_AUDIT.md`](./DATA_AUDIT.md) (state-by-state data verification with sources)._

## 1. What the project is today

A static React 19 + TypeScript + Vite + Tailwind v4 single-page app. One screen:

- **Map** (`src/components/IndiaMap.tsx`, `react-simple-maps`) — 36 States/UTs coloured by *total* vertical reservation (SC + ST + OBC + EWS) in state-government jobs.
- **Sidebar** — overview card, Central Government reference card, "Quick Facts"; clicking a state swaps in `StateDetail` (summary tiles, stacked bar, vs-Central comparison, table with expandable sub-categories, notes, legal-status banner, source links).
- **Search** (`SearchDropdown.tsx`) grouped by region.
- **Data** — one hand-written JSON file, `src/data/reservationData.json` (37 jurisdictions incl. "CENTRAL", one `STATE_SERVICES` block each), typed by `src/types/index.ts`. Validation helpers exist in `src/utils/validation.ts` but are never executed.

The idea and the information architecture are good, and the TypeScript data model is a sensible base. The problems are (a) the data itself, (b) a few framing choices that make the app say legally wrong things, and (c) shipping/UX bugs.

---

## 2. Verified problems — code, build and UX

Everything below was reproduced (build run, app driven in headless Chromium, screenshots taken).

### 2.1 Install / build / deploy

| # | Problem | Evidence | Fix |
|---|---|---|---|
| B1 | **`npm install` / `npm ci` fails on a fresh clone** | `ERESOLVE`: `react-simple-maps@3.0.0` peer-requires React ≤ 18; project uses React 19 | Upgrade to `react-simple-maps@^5` (peer range includes 19.x, ships its own types, uses d3 v3) and delete `src/types/react-simple-maps.d.ts`. |
| B2 | High-severity advisory | `npm audit`: `d3-color` ReDoS via react-simple-maps 3 → d3 v2 | Resolved by B1. |
| B3 | **Deployed site is 22 MB** | `dist/` contains `public/india-enhanced.json` (20 MB), `india.json` (480 KB) — neither is used | Delete them (see B5). |
| B4 | **1.5 MB JS bundle** (575 KB gzip) | `src/data/simplemaps_in.json` (3 MB, 30k points) is imported into the bundle | Simplify to TopoJSON with mapshaper: tested — 554 KB gzip → ~10–20 KB gzip with no visible loss at this zoom. Load it with `fetch` or a dynamic import. |
| B5 | Dead / broken files | `public/india-states.json`, `india-states-new.geojson`, `india-composite.geojson` each contain the text `404: Not Found`; `india-enhanced.json` contains **hand-drawn approximate polygons for "PoK" and "Aksai Chin"** (from `scripts/enhanceGeoJSON.cjs`) and is publicly downloadable from the live site; `App.css`, `assets/react.svg`, `public/vite.svg` are Vite template leftovers | Delete all of them plus `scripts/enhanceGeoJSON.cjs`. The map actually used (simplemaps) already depicts India's official boundary (Ladakh incl. Gilgit-Baltistan & Aksai Chin; J&K incl. PoK) — keep that property in any replacement, and add an attribution/boundary note. |
| B6 | Unused dependencies | `recharts`, `prop-types` are never imported | Remove. |
| B7 | README out of date | Mentions an `.htaccess` "included in this repo" (it isn't, and there's no client-side routing) | Rewrite run/deploy section. |
| B8 | No `<title>`/meta | `index.html` title is `indiareservation`, Vite favicon, no description / Open Graph tags | Proper title, description, OG image, favicon. |

### 2.2 Things the app states that are wrong (logic, not data)

| # | Problem | Why it matters | Fix |
|---|---|---|---|
| L1 | **"Exceeds 50% cap" counts EWS.** Every state with EWS shows the ⚠️ warning; legend calls 50–60% "At 50% cap" | The Supreme Court held the 10% EWS quota is *outside* the Indra Sawhney 50% ceiling (*Janhit Abhiyan v. Union of India*, Nov 2022). UP (50 + 10 EWS) is not "breaching" anything. | Compute and show two numbers: **base reservation (SC+ST+OBC+other backward categories)** checked against 50%, and EWS separately. |
| L2 | **Quick Facts "States with >50% reservation: 32"** | Counts the Central Government block, includes EWS, and calls UTs "states" | With L1 fixed and Central excluded the app's *own current numbers* give 14; after data fixes it will change again. Derive all counters from data. |
| L3 | Map colour scale is value-laden and barely discriminates | Red-for-high / green-for-low implies a judgement on a politically sensitive topic; because of EWS almost every state lands in the same orange bucket; scale uses rainbow hues that clash with the SC/ST/OBC/EWS category colours | Single-hue sequential, colour-blind-safe palette; default metric = base reservation excl. EWS; let the user switch metric (see F2). Remove the "Category colors" legend from the map (it doesn't describe the map). |
| L4 | Three sources of truth for Central figures | `CENTRAL` block in JSON, `CENTRAL_RESERVATION` constant, and hard-coded `getCentralCategories()` (with its own population numbers) | Read Central from the JSON only. |
| L5 | `OTHERS` is stored, not derived; validator tolerance is ±2 | Jharkhand's categories sum to **98%** (stacked bar renders 2% short) and the validator still reports `isValid: true, warnings: []` | Derive Unreserved = 100 − reserved; zero tolerance; sub-categories must sum to parent; run validation in CI. |

### 2.3 UI bugs (all reproduced)

| # | Bug | Cause | Fix |
|---|---|---|---|
| U1 | **Hover tooltip appears ~110 px below the cursor** (on a different state) | `.tooltip` is `position:absolute` inside a relative container but positioned with viewport `clientX/Y` | `position: fixed`, or subtract the container's `getBoundingClientRect()`. |
| U2 | **Search icon overlaps the placeholder text** | Computed `padding-left` is 16px, not `pl-12`'s 48px: un-layered CSS in `index.css` beats Tailwind v4 utilities (which live in `@layer utilities`) | Wrap custom classes in `@layer components { … }`. Same issue latent for `.btn-*`, `.glass-card` overrides. |
| U3 | **Sub-category descriptions never display** (e.g. Bihar EBC "Includes 108+…", AP BC-B "Yadava, Golla…") | Description row renders only when `isExpanded`, but leaf rows can't expand | Show description inline / as a tooltip / allow expand when `description` exists. |
| U4 | **Mobile: the map is unusable** | Both absolutely-positioned legends cover the (small) map at 390 px width; sidebar `max-h-[calc(100vh-200px)]` clips "Quick Facts" under the footer | Legends below the map / collapsible on small screens; detail panel as a bottom sheet; remove nested scroll containers (`StateDetail` also has `max-h-[90vh]`). |
| U5 | **Small UTs are nearly unclickable** | Measured hit areas: Chandigarh **5×6 px**, Delhi 13×14 px, Puducherry ~16×22 px; zoom exists but has no controls/hint | Zoom buttons + callout markers/insets for Delhi, Chandigarh, Puducherry, Lakshadweep, DNH&DD; plus a list/table view (F3). |
| U6 | Map not keyboard/screen-reader accessible | Tab order skips the map entirely; paths have no role/label | `tabIndex=0`, `role="button"`, `aria-label="Bihar, 57% reserved"`, Enter/Space; visible focus style. |
| U7 | Selected state shows a white rectangle | Browser default focus outline on the SVG `<path>` | Custom `:focus-visible` style on paths. |
| U8 | Search lacks keyboard support | No ↑/↓/Enter/Esc, no `role="combobox"`/`listbox`; "UP", "MP", "J&K", "Orissa" find nothing | Proper combobox + alias list. |
| U9 | Comparison chart legend swatch always blue | Hard-coded `bg-blue-500` | Neutral swatch or per-category. |
| U10 | Minor | Close button has no `aria-label`; emoji used as icons; `Inter` font referenced but never loaded; 2-space vs 4-space indentation mixed; `SubCategoryBreakdown` passes `"OBC" as CategoryCode` for every nested level | Tidy-up. |

---

## 3. Data problems — summary

See **[`DATA_AUDIT.md`](./DATA_AUDIT.md)** for every jurisdiction with app-vs-verified tables and sources.

<!-- DATA_SUMMARY -->

---

## 4. The plan

Ordered so each phase is shippable on its own. Rough effort is for one developer.

### Phase 0 — Make it install, build and ship small (½–1 day)
1. Upgrade `react-simple-maps` → v5; drop the local `.d.ts`; remove `recharts`, `prop-types`; `npm audit` clean. (B1, B2, B6)
2. Delete dead files in `public/`, `scripts/enhanceGeoJSON.cjs`, `App.css`, template assets. (B3, B5)
3. Convert the map to simplified TopoJSON, load it lazily. Target: < 250 KB JS, < 1 MB total `dist/`. (B4)
4. Fix `index.html` metadata and README. (B7, B8)

### Phase 1 — Make the data trustworthy (2–4 days; the most important phase)
1. **Extend the data model** so real-world quotas fit:
   - Allow additional vertical categories beyond SC/ST/OBC/EWS (Maharashtra VJ/NT/SBC/SEBC-Maratha, Rajasthan MBC, J&K RBA & ALC/IB, Ladakh ALC, NE tribe-specific quotas). Simplest: an `OTHER_BACKWARD` group with labelled sub-categories, or make `CategoryCode` open-ended with a `group` field.
   - Derive `OTHERS`/Unreserved instead of storing it.
   - Add `baseReservation` (excl. EWS) as a computed value and use it for the 50% check. (L1)
   - Per-block provenance: `asOf`, `verifiedOn`, `confidence`, and `sources[]` pointing at the specific Act/GO/gazette/judgment — not state homepages.
   - Legal timeline: `history[]` / `proposed` entries for enacted-but-not-in-force regimes (Bihar 65%, Jharkhand 77%, Chhattisgarh 76%, MP OBC 27%, Telangana 42% BC, etc.), so the UI can show "in force: X% — enacted/proposed: Y% (status)".
   - Population: tag the source per figure (Census 2011 for SC/ST; state caste survey where one exists; otherwise show "no official data" instead of an unsourced estimate).
2. **Apply the corrections** in `DATA_AUDIT.md`, highest-impact first (wrong totals → missing categories → legal status → notes text → sources).
3. **Validation as a test**: zero-tolerance sums, sub-categories = parent, every block has ≥1 specific source and an `asOf` date; run in CI. Add a JSON Schema for the data file.
4. Single source of truth for Central figures. (L4)
5. Add a visible "Last verified" date per state and a site-wide data changelog.

### Phase 2 — Fix the UI bugs (1–2 days)
U1–U10 above, plus the Quick-Facts/legend logic (L2, L3). Add a Playwright smoke test that hovers, clicks, searches and checks mobile layout so these don't regress.

### Phase 3 — Make it genuinely more useful (pick by priority)
- **F1 Shareable URLs** — `?state=BIHAR` (and back-button support) so people can link a state.
- **F2 Map metric switcher** — Base (excl. EWS) · Total · SC · ST · OBC · EWS · "reservation vs population share" gap; neutral sequential palette.
- **F3 All-states table** — sortable/filterable, with CSV/JSON download of the dataset (add a data licence, e.g. CC BY 4.0).
- **F4 Compare** — two states side-by-side, or state vs Central.
- **F5 Timeline per state** — quota changes and court cases over time (Indra Sawhney 1992 → 103rd Amendment 2019 → Janhit Abhiyan 2022 → state-specific events).
- **F6 "Report an error" link** per state → pre-filled GitHub issue; contributor guide for data updates.
- **F7 Explainer page** — vertical vs horizontal reservation, the 50% rule and its exceptions, 9th Schedule, Article 16(4)/15(4), sub-classification (*State of Punjab v. Davinder Singh*, 2024).
- **F8 Scope extensions already anticipated by the types** — horizontal reservation (women, PwD, ex-servicemen) and education (`STATE_HIGHER_EDU`), which often differ from job quotas.
- **F9 Hindi (and regional) language support; light theme; print view.**

### Phase 4 — Engineering hygiene (ongoing)
- Vitest for `dataHelpers`/validation; Playwright smoke test; GitHub Actions running lint → typecheck → test → build on every PR.
- Prettier + consistent indentation.
- Deploy pipeline (GitHub Pages / Cloudflare Pages / Netlify) from `main`.
- Confirm simplemaps licence/attribution terms and credit the map source in the footer.

---

## 5. Suggested first PRs
1. **"Fix install, shrink bundle, delete dead files"** — Phase 0. Low risk, big win.
2. **"Correct the 50% cap logic and Quick Facts"** — L1, L2, L3. Small code change that stops the app making a legally wrong claim on every page.
3. **"Data corrections, batch 1"** — the WRONG-verdict states from the audit, each with specific sources.
4. **"UI bug fixes"** — U1–U8.
