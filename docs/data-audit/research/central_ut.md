> **First-pass research notes (22 Oct 2026).** Kept for provenance and source links. Where these notes disagree with [`../../DATA_AUDIT.md`](../../DATA_AUDIT.md), the audit wins: it reflects a second, adversarial verification pass (see [`../second-pass-verification.md`](../second-pass-verification.md)).

# Verification: Central Government and Union Territories (vertical reservation, direct recruitment)

Checked on 2026-10-22 against `src/data/reservationData.json` (read-only).

**Method and limits.** WebFetch and curl were blocked by the session proxy for every host tried (ncst.gov.in, doptcirculars, jkgad, pib, livelaw, thehindu and others). So no primary PDF was opened directly. Every check below rests on search-engine extracts of the cited pages (official PDFs, gazettes, news) plus Census 2011 arithmetic. The shared WebSearch budget ran out before the A&N OBC question was settled; that item is marked low-to-medium confidence. Census 2011 totals for J&K, DNH, Daman & Diu, Delhi, Chandigarh, Puducherry, Lakshadweep and A&N come from my own knowledge of the published PCA figures (high confidence). The Ladakh district figures were confirmed through citypopulation.de.

**Framework that applies to most UTs.** Union Territories without their own legislature-made policy recruit at two levels:
- **All-India posts.** Group A/B posts recruited on an all-India basis (UPSC, SSC, DANICS/DANIPS) use the central rates: SC 15, ST 7.5, OBC 27, EWS 10.
- **Local posts.** Group C (formerly C/D) posts that "normally attract candidates from a locality or region" use the DoPT state/UT-wise table. That table comes from OM 36017/1/2004-Estt(Res) dt 05.07.2005 (plus OM 04.07.2007). It is reproduced in the DoPT consolidated OM No. 36011/1/2022-Estt(Res-I) dt **11.08.2026**, and is based on the 2001 Census, with SC+ST+OBC capped at 50%.

For a "STATE_SERVICES" view of a UT, the local table (or the UT's own G.O.s) is the relevant one. Rows found: Delhi 15/7.5/27; Chandigarh 18/0/27; A&N 0/8/27; Lakshadweep 0/45/0; Dadra & Nagar Haveli 2/43/5; Daman & Diu 3/9/27; Pondicherry 16/0/27 (SC/ST/OBC). Puducherry, J&K and Ladakh have their own statutory or G.O.-based schemes, which override this table for their own posts.

---

### CENTRAL — CORRECT  (confidence: high)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 15 | 15 | Direct recruitment, all-India, open competition |
| ST | 7.5 | 7.5 | |
| OBC | 27 | 27 | Non-creamy layer, central OBC list |
| EWS | 10 | 10 | Implemented by DoPT OM 36039/1/2019-Estt(Res) dt 19.01.2019 and 31.01.2019, for vacancies notified on or after 01.02.2019 |
| OTHERS (open) | 40.5 | 40.5 | |
| TOTAL reserved | 59.5 | 59.5 | |
- **Not captured by the app:** for all-India direct recruitment *otherwise than by open competition*, the rates are SC 16.66, ST 7.5, OBC 25.84, EWS 10. Local Group C posts use the state-wise table described above.
- **Legal status (as of Oct 2026):** in force. EWS was upheld by the Supreme Court on 7 Nov 2022 in *Janhit Abhiyan v. Union of India* (3:2), with the majority holding that the 50% ceiling does not bar EWS. DoPT re-consolidated all reservation instructions in OM No. 36011/1/2022-Estt(Res-I) dt 11.08.2026, with no rate change found.
- **Notes text issues:** the notes say Indra Sawhney "upheld" the 50% ceiling "but EWS was added". That is incomplete: they should add that *Janhit Abhiyan* (2022) upheld EWS beyond 50%. "Centrally-aided educational institutions" mixes two things. Admissions are governed by the CEI (Reservation in Admission) Act 2006 (amended 2019 for EWS), and teaching posts by the CEI (Reservation in Teachers' Cadre) Act 2019. Otherwise the notes are accurate.
- **Population check (Census 2011 SC/ST):** SC 16.6 ✓ (16.63); ST 8.6 ✓ (8.61). OBC 41.0 matches the NSSO 61st round (2004-05) estimate, not a census figure (Mandal estimated 52%). It is acceptable if labelled as an estimate.
- **Sources:**
  - https://dtf.in/wp-content/files/DoPT_O.M._dated_11.08.2026-Reservation_for_SCs_STs_OBCs_PwDs_EWS_and_Ex-Servicemen_in_Posts_and_Services_in_Central_Government.pdf — DoPT consolidated OM 11.08.2026 (mirror): 15/7.5/27, local table. Mirror also at http://fnpo.org/files/5_6082345595819794805.pdf.
  - https://www.gconnect.in/orders-in-brief/reservation/reservation-scs-sts-obcs-pwds-ews-posts-services-central-government-consolidated-instructions.html — EWS 10%, effective 01.02.2019.
  - https://documents.doptcirculars.nic.in/D2/D02adm/Notification_36017_1_2004_Estt(Res).pdf — official DoPT 2005 OM (local Group C/D table).

### DELHI — CORRECT  (confidence: medium-high)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 15 | 15 | The DoPT local table gives Delhi the all-India rates |
| ST | 7.5 | 7.5 | Delhi has no notified STs; the quota goes to STs from any state |
| OBC | 27 | 27 | For GNCTD/DSSSB posts, the OBC benefit requires an OBC (Delhi-list) certificate; other OBCs are treated as UR |
| EWS | 10 | 10 | Applied in DSSSB recruitment since 2019 (from knowledge; no GNCTD order located) |
| OTHERS | 40.5 | 40.5 | |
| TOTAL reserved | 59.5 | 59.5 | |
- **Legal status (as of Oct 2026):** in force. No challenge found. The GNCTD (Amendment) Act 2023 changed control of services, not the quotas.
- **Notes text issues:** "Follows central norms with Delhi-specific OBC lists" is accurate. It could add that STs are reserved even though no Delhi STs are notified.
- **Population check (Census 2011 SC/ST):** SC 16.8 ✓ (16.75); ST 0 ✓ (none notified). OBC 25.0 is unsupported (no census basis).
- **Sources:**
  - https://nift.ac.in/sites/default/files/2026-08/DoPT-om.pdf — copy of the DoPT OM; the table shows Delhi at 15/7.5/27.
  - https://documents.doptcirculars.nic.in/D2/D02adm/Notification_36017_1_2004_Estt(Res).pdf — the 2005 OM, which says population-based local quotas apply "except in Delhi".
  - A specific DSSSB advertisement (dsssb.delhi.gov.in) would be the best citation for the OBC (Delhi) certificate rule and EWS. I could not retrieve one.

### CHANDIGARH — MINOR ISSUES  (confidence: medium)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 15 | **18** | DoPT local table row: Chandigarh 18/0/27 (population-based; SC is 18.9% of the population) |
| ST | 0 | 0 | No STs notified for Chandigarh |
| OBC | 27 | 27 | |
| EWS | 10 | 10 (likely) | Assumed under the DoPT EWS OM 2019; no UT-specific order found |
| OTHERS | 48 | **45** | |
| TOTAL reserved | 52 | 55 | |
- **Legal status (as of Oct 2026):** in force. No challenge found. Posts filled by deputation from Punjab and Haryana (the 60:40 arrangement) follow parent-state rules, not this table. From memory and not re-verified: MHA applied central civil services conditions to Chandigarh employees from 01.04.2022.
- **Notes text issues:** "Follows Central government reservation norms" is only partly right. Chandigarh follows the DoPT *locality* table (SC 18, no ST), not the all-India 15/7.5/27.
- **Population check (Census 2011 SC/ST):** SC 18.9 ✓ (18.86); ST 0 ✓. OBC 22.0 is unsupported.
- **Sources:**
  - https://documents.doptcirculars.nic.in/D2/D02adm/Notification_36017_1_2004_Estt(Res).pdf — DoPT 2005 OM, Chandigarh row 18/0/27.
  - https://www.staffnews.in/?p=128963 — DoPT compendium reproducing the same row.
  - A Chandigarh Administration recruitment notice would be the better citation. None was retrieved; confidence stays medium until one confirms 18%.

### ANDAMAN_NICOBAR — WRONG  (confidence: medium on ST; low-medium on OBC)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 0 | 0 | No SCs notified for A&N |
| ST | 10 | **8** | DoPT local table A&N row: 0/8/27. Only *local* STs (A&N ST Order 1959) are eligible; an MP cited 7.5%. The 2026 Combined Matric Level Group C advertisement has ST at 129/1535 = 8.4% |
| OBC | 27 | **27 on paper, ~38 in practice (unresolved)** | The DoPT table says 27. The local MP said GoI notified **38% OBC** for UT posts. A Jul-2023 GTT notice reserved 60/160 = 37.5% for OBC. The 2026 Group C advertisement has OBC at 535/1535 = 34.9%. Only *local* OBCs (A&N OBC list) are eligible |
| EWS | 10 | 10 | 2026 Group C advertisement: 167/1535 = 10.9% |
| OTHERS | 53 | ~45-55 | 45.9% in the 2026 Group C advertisement |
| TOTAL reserved | 47 | ~45-55 | |
- **Legal status (as of Oct 2026):** in force. A 2023 PIL in the Calcutta HC (Port Blair circuit bench) sought 100% reservation for locals; I found no outcome. Local groups (Local Born Association, AMSO) campaigned in 2023 for the 38% OBC to be applied.
- **Notes text issues:** "Local variations for tribal populations" misses the bigger local variation: the OBC rate and the local-only eligibility for ST and OBC. The ST figure of 10 has no source behind it.
- **Population check (Census 2011 SC/ST):** ST 7.5 ✓ (28,530/380,581 = 7.50%); SC 0 ✓. OBC 30.0 is unsupported.
- **Sources:**
  - https://documents.doptcirculars.nic.in/D2/D02adm/Notification_36017_1_2004_Estt(Res).pdf — DoPT local table, A&N 0/8/27.
  - https://andamansheekha.com/112731/ — MP's statement that GoI notified 38% OBC and 7.5% ST for UT posts.
  - https://nicobartimes.com/?p=5942 — LBA/AMSO demand for the 38% OBC in 2023 teacher hiring.
  - https://testbook.com/news/andaman-nicobar-group-c-recruitment-2026/ — 2026 Group C category counts (aggregator; use only for counts). The original advertisement (Advt 01/ML/2026) is at erecruitment.andamannicobar.gov.in.
  - https://news.careers360.com/andaman-pil-seeking-100-percent-government-job-reservation-for-locals-be-heard-on-monday — PIL seeking 100% local reservation.
  - **Recommendation:** find the A&N Administration order behind the 38% OBC figure before changing OBC.

### LAKSHADWEEP — WRONG  (confidence: high that 100% is wrong; medium on the replacement)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 0 | 0 | |
| ST | **100** | **45** | DoPT local table row "34 \| Lakshadweep \| 0 \| 45 \| 0", still carried in the 11.08.2026 OM. 100% reservation is unconstitutional (*Indra Sawhney*; *Chebrolu Leela Prasad Rao v. State of AP*, 2020, struck down 100% ST reservation for teachers in Scheduled Areas) |
| OBC | 0 | 0 | |
| EWS | 0 | **10 (probable)** | The DoPT 2019 EWS OM applies 10% to central and UT posts; no Lakshadweep-specific confirmation found |
| OTHERS | 0 | **~45** | In practice most open seats also go to islanders (STs), but they are not reserved |
| TOTAL reserved | 100 | ~55 | All-India posts (UPSC/SSC) use 15/7.5/27/10 |
- **Legal status (as of Oct 2026):** in force. No Lakshadweep-specific reservation litigation found.
- **Notes text issues:** "Almost 100% ST population" overstates it (94.8%). "Follows central norms" contradicts the app's 100% ST figure.
- **Population check (Census 2011 SC/ST):** ST 94.8 ✓ (61,120/64,473); SC 0 ✓. OBC 2.0 and OTHERS 3.2 are unsupported (the 5.2% non-ST population is not broken down in the census).
- **Sources:**
  - https://dtf.in/wp-content/files/DoPT_O.M._dated_11.08.2026-Reservation_for_SCs_STs_OBCs_PwDs_EWS_and_Ex-Servicemen_in_Posts_and_Services_in_Central_Government.pdf — 2026 OM table row, Lakshadweep 0/45/0.
  - https://geod.in/dopt-orders/reservation-provisions-no-36011-1-2022-esttres-i/ — 2022 version of the same table.
  - Lakshadweep Administration recruitment notices (lakshadweep.gov.in) would confirm the EWS treatment; not retrieved.

### DADRA_NAGAR_HAVELI_DAMAN_DIU — WRONG  (confidence: high that 52/14 is wrong; low-medium on the current merged figure)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 2 | **2 (DNH) / 3 (Daman & Diu)** | DoPT local table rows: DNH 2/43/5; Daman & Diu 3/9/27 |
| ST | **52** | **43 (DNH) / 9 (Daman & Diu)** | 52 is DNH's *population* share, not a quota. SC+ST+OBC in the app comes to 68%, which breaks the 50% cap in the DoPT table |
| OBC | **14** | **5 (DNH) / 27 (Daman & Diu)** | |
| EWS | 10 | 10 (probable) | DoPT 2019 OM |
| OTHERS | 22 | DNH ~40; Daman & Diu ~51 | |
| TOTAL reserved | 78 | DNH ~60; Daman & Diu ~49 | |
- **Not verified:** I found no post-merger (26.01.2020) order fixing a single UT-wide rate. Recruitment appears to use district- or region-wise rosters on the old rows. If the rate were recomputed on merged Census 2011 population (SC 2.1%, ST 33.0%), it would be roughly SC 2 / ST 33 / OBC 15. That is speculative and does not match 52/14 either.
- **Legal status (as of Oct 2026):** in force. In *Director, Transport Dept, UT of DNH v. Abhinav Dipakbhai Patel* (SC, 2019), the court noted GoI allowed preference/weightage for locals in Group B/C/D but held that exclusive local reservation would be unconstitutional.
- **Notes text issues:** "Significant ST population especially in DNH" is accurate but does not explain the 52% quota, which has no source. Say that rates differ by district.
- **Population check (Census 2011 SC/ST):** The app's ST 51.9 is **DNH alone** (178,564/343,709 = 52.0%), and its SC 2.5 is **Daman & Diu alone**. For the merged UT: SC 2.10% (12,310/586,956); ST 33.04% (193,927/586,956). Both should be corrected. OBC 15.0 is unsupported.
- **Sources:**
  - https://documents.doptcirculars.nic.in/D2/D02adm/Notification_36017_1_2004_Estt(Res).pdf — DNH 2/43/5 and Daman & Diu 3/9/27.
  - https://geod.in/dopt-orders/reservation-provisions-no-36011-1-2022-esttres-i/ — same rows in the 2022 OM.
  - https://www.supremecourtcases.com/director-transport-department-union-territory-administration-of-dadra-and-nagar-haveli-silvassa-and-others-v-abhinav-dipakbhai-patel/ — case on local preference vs reservation.

### PUDUCHERRY — WRONG (sub-categories and ST; top-line close)  (confidence: high)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 16 | 16 | |
| ST | **0** | **0.5** | Irular (incl. Villi, Vettaikaran) notified as ST by the Constitution (Puducherry) ST Order 2016 (22.12.2016). The 0.5% ST quota in Group C recruitment applies from 08.03.2019 (later made retrospective to 22.12.2016 by G.O. Ms. 03/2019-20 dt 22.02.2020) |
| OBC (total BC) | **34** | **33.5** | The five BC sub-quotas below add up to 33.5. SC+ST+BC = 50 |
| ↳ MBC | **15** | **18** | Most Backward Classes (includes Vanniyar) |
| ↳ OBC ("BC" in app) | **12** | **11** | |
| ↳ BCM | **3.5** | **2** | Backward Class Muslims |
| ↳ EBC | **3.5** | **2** | Extremely Backward Classes: a single listed community. The app's description "economically weakest" is wrong; EBC is a caste/community list, not an income test |
| ↳ BT (missing in app) | — | **0.5** | Backward Tribes; was 1% (2010 order) until the Irular moved to ST |
| EWS | 10 | 10 | G.O.Ms.No.22 dt 05.03.2019. The Council of Ministers rescinded it on 01.08.2019, MHA directed continuation by letter 18.02.2020, and the DPAR note dt 09.03.2020 confirmed it |
| OTHERS | 40 | 40 | |
| TOTAL reserved | 60 | 60 | |
- **Regional variation:** these rates are for the Puducherry, Karaikal and Yanam regions. Mahe uses a different BC split (admission sources: OBC 16, BCM 10, MBC 7, EBC nil). Whether Mahe-region posts use it for recruitment was not verified.
- **Recent notifications match the verified rates:**
  - Police Constable 2025 (148 posts): UR 63, MBC 26, OBC 16, SC 23, EWS 14, ST 1, EBC 2, BCM 2, BT 1.
  - Junior Engineer 2025 (73 posts): OBC 8, MBC 13, EBC 1, BCM 1, SC 12, ST 1, EWS 7.
- **Legal status (as of Oct 2026):** in force. The EWS political dispute was settled by the MHA direction in 2020. No pending challenge found.
- **Notes text issues:** "Own reservation structure similar to central norms" is misleading. It is a Tamil Nadu-style multi-tier BC scheme (MBC/OBC/EBC/BCM/BT). The central 15/7.5/27 applies only to central Group C posts located in Puducherry (DoPT row: Pondicherry 16/0/27). The MBC description "Vanniyar, Naidu" is partly unverified ("Naidu" not confirmed as MBC).
- **Population check (Census 2011 SC/ST):** SC 15.7 ✓ (15.73); ST 0 ✓ for Census 2011, since no STs were notified until Dec 2016. OBC 45.0 is unsupported.
- **Sources:**
  - https://bcmwel.py.gov.in/state-level-commission-backward-classes — official BC split: BT 0.5, EBC 2, MBC 18, BCM 2, OBC 11.
  - https://styandptg.py.gov.in/2019/MARCH/EXTRAORDINARYPART-I/036-PART-I%20dated%207-3-2019.pdf — gazette notice of the 0.5% ST reservation (Irular).
  - https://styandptg.py.gov.in/2017/January/EXTRAORDINARYPART-I/006-PART-I%20No.%20006%20dated%2010-1-2017.pdf — Puducherry ST Order 2016, republished.
  - https://dpar.py.gov.in/CCD/GOs/GO.22_2019.pdf — EWS G.O. 2019.
  - https://dpar.py.gov.in/CCD/Circulars/ID.Note_09.03.20.pdf — EWS continuation after the MHA letter.

### JAMMU_KASHMIR — WRONG  (confidence: high)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 8 | 8 | J&K Reservation Rules 2005 as amended |
| ST | 20 | 20 | |
| ↳ ST-1 | 10 | 10 | The earlier STs (Gujjar, Bakarwal, Gaddi, Sippi and others) |
| ↳ ST-2 | 10 | 10 | New STs: **Pahari Ethnic Tribe, Paddari Tribe, Koli, Gadda Brahman**. The app's description omits Koli and Gadda Brahman. They were added by the Constitution (J&K) ST Order (Amendment) Act 2024, passed by Parliament in Feb 2024 |
| OBC | 8 | 8 | Raised from 4 to 8 with 15 new castes added, by S.O. 176 dt **15.03.2024** |
| EWS | 10 | 10 | |
| **RBA (Residents of Backward Areas)** — not modelled | — | **10** | Vertical |
| **ALC/IB (residents along the Actual Line of Control / International Border)** — not modelled | — | **4** | Vertical |
| OTHERS (open merit) | **54** | **40** | |
| TOTAL reserved | 46 | **60** | Horizontal quotas (ex-servicemen 6%, PwD 4%, among others) are on top of this, which is why some reports say open merit is "30%" |
- **Legal status (as of Oct 2026):**
  - **In force.** S.O. 176 dt 15.03.2024 governs.
  - **Challenged:** writ petitions in the J&K&L High Court (filed 2024, listed before a Division Bench in Nov-Dec 2024) seek a commission and the 50% cap. The government has filed objections defending the rules. No stay and no ruling were found as of Oct 2026.
  - **Rationalisation pending:** the Omar Abdullah government's cabinet sub-committee (headed by Sakina Itoo) reported in mid-2025. Cabinet approved the report on **04.12.2025** and sent it to LG Manoj Sinha. Reports say it proposes cutting EWS by 7 and RBA by 3 points, to raise open merit. The LG referred it to MHA, and the J&K Cabinet cleared replies to MHA's queries in 2026. On **29.09.2026** the government told the Assembly it was "under consideration of the competent authority".
- **Notes text issues:**
  - The ST and OBC 8% statements are correct.
  - The notes omit RBA 10% and ALC/IB 4%, so the implied open merit (54%) is wrong; it is 40%.
  - "In 2024 ST reservation increased" is correct, but the ST-2 list is incomplete.
  - Add that OBC also doubled (4 to 8%) in March 2024, and that a rationalisation proposal is pending.
  - lastUpdated "2024-06-01" is stale.
- **Population check (Census 2011 SC/ST):**
  - The app's SC 7.4 and ST 11.9 are figures for the **former state including Ladakh**.
  - For the UT of J&K (excluding Leh and Kargil): SC 7.54% (924,485/12,267,013) and ST 10.39% (1,275,106/12,267,013).
  - The 2024 ST additions (Paharis and others) are not reflected in any census figure.
  - OBC 32.0 is unsupported.
- **Sources:**
  - S.O. 176 dt 15.03.2024 (J&K GAD / Social Welfare Dept gazette; on jkgad.nic.in) — primary source for the 8/20/8/10/10/4 split. I could not retrieve the deep link.
  - https://kashmirlife.net/jammu-kashmirs-post-2019-reservation-system-vol-15-issue-52-348677/ — explains the post-2019 system and the category split.
  - https://www.etvbharat.com/en/!bharat/j-and-k-reservation-rules-face-legal-challenge-plea-seeking-revocation-listed-before-high-court-today-enn24112900688 — HC challenge.
  - https://www.greaterkashmir.com/front-page-2/govt-defends-reservation-policy-in-high-court/ — government's objections in the HC.
  - https://kashmirage.net/2025/12/04/jk-reservation-policy-file-sent-to-lg-for-approval-says-cm/ — Cabinet approval 04.12.2025.
  - https://www.tribuneindia.com/news/j-k/jk-cabinet-clears-response-to-mha-queries-on-reservation-policy/ — reply to MHA queries (EWS -7, RBA -3).
  - https://kashmirvision.in/2026/09/29/jk-reservation-panel-report-awaits-competent-authority-approval/ — status as of 29.09.2026.

### LADAKH — MINOR ISSUES (numbers right; modelling, population and notes wrong)  (confidence: high)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 1 | 1 | Ladakh Reservation (Amendment) Rules 2025, amended Rule 4 |
| ST | 80 | 80 | |
| OBC slot, labelled "ALC/LoC Residents" | 4 | **ALC 4, OBC 0** | ALC means "Residents of Areas Adjoining the **Actual Line of Control**". It is **not OBC**, and Ladakh has no OBC quota. The app stores it in the OBC slot, so any OBC comparison will be wrong. It needs its own category |
| EWS | 10 | 10 | Outside the 85% cap |
| OTHERS | 5 | 5 | |
| TOTAL reserved | 95 | 95 | 85 (ST+SC+ALC) + 10 EWS |
- **Promotions:** SC 1%, ST 84% (amended Rule 9).
- **Horizontal quotas:** ex-servicemen 6%, PwBD 4%.
- **Legal status (as of Oct 2026):** in force.
  - The President promulgated the UT of Ladakh Reservation (Amendment) Regulation 2025 under Art. 240 on **02.06.2025**, in force from **03.06.2025**. Alongside it came the domicile/recruitment, official languages and LAHDC regulations. The cap rose from 50% to 85%, excluding EWS.
  - The UT Administration notified the Ladakh Reservation (Amendment) Rules 2025 under s.23 of the J&K Reservation Act 2004 in late June 2025 (one press release dates the rules **27.06.2025**).
  - No court challenge to the 85% cap was found.
  - In July 2026 the MHA High-Powered Committee (with LAB and KDA) recorded the recruitment and reservation issue as "largely resolved"; talks continue on statehood and the Sixth Schedule.
- **Notes text issues:**
  - The numbers are correct.
  - "ALC/LoC" should be "ALC (Actual Line of Control)".
  - "Ladakhi Buddhists recognized as ST" is inaccurate. ST status is by community (Bot/Boto, Balti, Purigpa, Brokpa/Dard, Changpa, Mon, Beda, Garra) and covers both Buddhists and the Shia-Muslim majority in Kargil, where 87% of the population is ST.
  - lastUpdated "2025-01-01" predates the June 2025 change.
- **Population check (Census 2011 SC/ST):** ST **79.55%** (218,193/274,289), not 66.8. SC **0.18%** (506/274,289), not 0.5. The ALC "population 10%" and OTHERS 22.7 are unsupported.
- **Sources:**
  - https://www.scconline.com/blog/post/2025/06/03/govt-ladakh-reservation-policy-reforms-legal-news/ — Regulation assented 02.06.2025, effective 03.06.2025, 85% cap excluding EWS.
  - https://www.business-standard.com/india-news/ladakh-reservation-act-amended-reservation-cap-set-at-85-ews-excluded-125060300408_1.html — the 85% cap, with EWS excluded.
  - https://www.tribuneindia.com/news/j-k/ladakh-admn-notifies-reservation-rules-80-per-cent-quota-for-sts — Rules: SC 1, ST 80, ALC 4, EWS 10.
  - https://voiceofladakh.in/2025/06/ladakh-administration-notifies-ladakh-reservation-amendment-rules-2025/ — Rule 4/9 amendments and horizontal quotas.
  - https://information.ladakh.gov.in/uploads/admin/press-releases/link_1d9a6fa9263ab199d0f38a551b09c9e5.pdf and https://information.ladakh.gov.in/uploads/admin/press-releases/link_782347b9762e1cfeeb0ec89caa6433f9.pdf — official Ladakh press releases (85% split; Regulation 02.06.2025, Rules 27.06.2025).
  - https://www.citypopulation.de/en/india/ladakh/admin/003__leh and https://www.citypopulation.de/en/india/ladakh/admin/004__kargil — Census 2011 SC/ST counts for Leh and Kargil.

---

## Model gaps to raise with the app
1. **J&K:** RBA 10% and ALC/IB 4% are vertical categories the schema has no slot for. Today they silently disappear into "OTHERS".
2. **Ladakh:** ALC 4% is stored in the OBC slot with a changed display name. It needs its own category, with OBC = 0.
3. **Puducherry:** the schema needs a BT sub-category, and its ST is not 0.
4. **UTs generally:** two regimes coexist (all-India posts at 15/7.5/27/10, local Group C posts on the DoPT state table). A&N, Lakshadweep, DNH&DD and Chandigarh should be on the local table.
5. **DNH&DD:** rates differ by district (DNH vs Daman & Diu), which one number cannot represent.
