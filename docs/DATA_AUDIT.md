# Data Audit — `src/data/reservationData.json`

_Audit date: 22 Oct 2026. Scope: vertical reservation in **state-government jobs (direct recruitment)** — the `STATE_SERVICES` block — for all 36 States/UTs plus the Central Government reference._

## How this was checked

1. **First pass** — five parallel researchers, one per region, compared every number, note and legal-status field with web sources (gazettes, PSC/SSC advertisements, GOs, court reports in LiveLaw / Bar & Bench / The Hindu / Indian Express / AIR / regional dailies). Raw notes: [`data-audit/research/`](./data-audit/research/).
2. **Second pass (adversarial)** — nine independent skeptics tried to *refute* every first-pass correction and to fill the gaps (Sikkim, Mizoram, Manipur EWS, A&N OBC, UP/Uttarakhand). Every refuted claim went to a third, independent arbiter. 8 claims were disputed; the arbiter sided with the skeptic each time — most importantly it **overturned the first pass on Nagaland** (the app's 80% is right). Full record: [`data-audit/second-pass-verification.md`](./data-audit/second-pass-verification.md).
3. Spot checks by hand (e.g. Karnataka HC 12 Oct 2026, Maharashtra 72%).

**Limitations.** The research environment could search the web but could not open pages or PDFs directly, so evidence is from search-result extracts of the cited pages. Each finding carries a confidence level; anything marked *medium* or *low* should be confirmed against the primary document before publishing. Several situations changed in the last few weeks (Karnataka, Madhya Pradesh) — re-check those on the day you ship.

---

## 1. Scoreboard

| Verdict | Count | Jurisdictions |
|---|---|---|
| **Correct** | 5 | Central, Delhi, Punjab, Uttar Pradesh, Uttarakhand |
| **Minor issues** (headline right; notes, sub-categories, population or legal status wrong) | 13 | Andhra Pradesh, Arunachal Pradesh, Goa, Gujarat, Haryana, Jharkhand, Madhya Pradesh, Manipur*, Nagaland, Tamil Nadu, Telangana, Chandigarh, Ladakh |
| **Wrong** (headline numbers or structure wrong) | 18 | Assam, Bihar, Chhattisgarh, Himachal Pradesh, Karnataka, Kerala, Maharashtra, Meghalaya, Odisha, Rajasthan, Sikkim, Tripura, West Bengal, Andaman & Nicobar, DNH & DD, Jammu & Kashmir, Lakshadweep, Puducherry |
| **Unverifiable** | 1 | Mizoram |

\* Manipur's total is probably also wrong (EWS 10% not found for state jobs) — low confidence.

**The "total reservation" shown on the map is wrong for 18 of 36 States/UTs**, by between 2 and 45 percentage points.

### Total reservation: app vs verified (in force, 22 Oct 2026)

| Jurisdiction | App | Verified | Δ | Verdict | Conf. | Main problem |
|---|---:|---:|---:|---|---|---|
| Central Govt | 59.5 | 59.5 | — | Correct | high | — |
| Andhra Pradesh | 60 | 60 | — | Minor | high | SC sub-classification (2025) missing; ST population |
| Arunachal Pradesh | 80 | 80 (APST) | — | Minor | med | Aug 2026: APST/PRC/language now mandatory for Group A–C → effectively 100% APST |
| Assam | 59 | **49** | −10 | Wrong | high | EWS in jobs **in abeyance since Dec 2022** |
| Bihar | 57 | **60** | +3 | Wrong | high | Missing 3% quota for backward-class women |
| Chhattisgarh | 69 | **58** | −11 | Wrong | high | SC is 12 not 13; **no EWS** in state jobs |
| Goa | 51 | 51 | — | Minor | med | Notes misleading |
| Gujarat | 59 | 59 | — | Minor | high | Notes say 49.5% |
| Haryana | 57 | 57 | — | Minor | med | BC-A/BC-B split; Group A/B BC is 15% |
| Himachal Pradesh | 60 | **55** | −5 | Wrong | med | SC 22 / OBC 18 (Class III/IV), not 25/20 |
| Jharkhand | 60 | 60 | — | Minor | high | Categories sum to **98%**; bill timeline wrong |
| Karnataka | 66 | **50** | −16 | Wrong | high | **HC struck down SC/ST hike 12 Oct 2026**; no EWS |
| Kerala | 62 | **60** | −2 | Wrong | high | SC 8 not 10; every OBC sub-share wrong |
| Madhya Pradesh | 60 | 60 | — | Minor | med | HC struck 27% OBC 9 Oct 2026; notes say 63% |
| Maharashtra | 49 | **72** | +23 | Wrong | high | Missing VJ/NT/SBC (11%) and Maratha SEBC (10%) |
| Manipur | 60 | 50? | −10? | Minor* | low | EWS not found for state jobs |
| Meghalaya | 82 | **85** | +3 | Wrong | high | 40 Khasi-Jaintia / 40 Garo / 5 other ST+SC |
| Mizoram | 80 | ? | ? | Unverifiable | low | No source for 80% ST |
| Nagaland | 80 | 80 | — | Minor | med | ST = indigenous Nagaland STs; 37% BT nested |
| Odisha | 61 | **50** | −11 | Wrong | med | 16.25/22.5/11.25; **no EWS** in state posts |
| Punjab | 47 | 47 | — | Correct | high | — |
| Rajasthan | 59 | **64** | +5 | Wrong | high | Missing MBC 5% |
| Sikkim | 66 | **~88** | +22 | Wrong | med | Nine-category state scheme; app used central figures |
| Tamil Nadu | 69 | 69 | — | Minor | high | Arunthathiyar 3%; `legalStatus` not set |
| Telangana | 64 | 64 | — | Minor | high | Notes say 62%; SC sub-classification |
| Tripura | 60 | **48** | −12 | Wrong | med-high | **No OBC, no EWS** in state jobs |
| Uttar Pradesh | 60 | 60 | — | Correct | high | — |
| Uttarakhand | 47 | 47 | — | Correct | med-high | — |
| West Bengal | 55 | **45** | −10 | Wrong | high | **OBC cut to 7% (May 2026)**, A/B abolished |
| Andaman & Nicobar | 47 | **~56** | +9 | Wrong | med | ST 8; OBC ~38 locally |
| Chandigarh | 52 | **55** | +3 | Minor | med | SC 18 (local table), not 15 |
| DNH & Daman-Diu | 78 | **60 / 49** | — | Wrong | med | Two separate rate rows; "ST 52" is a population share |
| Delhi | 59.5 | 59.5 | — | Correct | med-high | — |
| Jammu & Kashmir | 46 | **60** | +14 | Wrong | high | Missing RBA 10% and ALC/IB 4% |
| Ladakh | 95 | 95 | — | Minor | high | ALC 4% stored in the OBC slot |
| Lakshadweep | 100 | **55** | −45 | Wrong | med | ST 45 (+EWS 10 probable); 100% is unconstitutional |
| Puducherry | 60 | 60 | — | Wrong | high | ST 0.5 and all five BC sub-shares wrong |

### The 50% ceiling — what the app says vs reality

The app counts **32** jurisdictions "with >50% reservation" (it includes EWS, which the Supreme Court held is outside the ceiling in *Janhit Abhiyan*, 2022, and it counts the Central Government). On verified figures, **excluding EWS**, the jurisdictions above 50% are **10**: Arunachal Pradesh, Meghalaya, Nagaland, Sikkim, Tamil Nadu (9th Schedule), Maharashtra (52 + SEBC 10), Rajasthan (54), Telangana (54), Chhattisgarh (58, under a Supreme Court interim order) and Ladakh (85, by 2025 Regulation). Mizoram is unknown.

---

## 2. Cross-cutting patterns (fix the process, not just the numbers)

1. **Central figures used as state figures.** The DoPT publishes a state-wise table for *central-government* Group C posts recruited locally (OM 36017/1/2004-Estt(Res), 2005; re-issued in the DoPT master circular of 11 Aug 2026). Several app values come from that table, not from the state's own rules: **Tripura** (OBC 2), **Sikkim** (OBC 24), probably **Himachal** (SC 25 / OBC 20). Conversely, for UTs without their own legislature the local table *is* the right source, and the app missed it (**Chandigarh** SC 18, **Lakshadweep** ST 45, **A&N** ST 8, **DNH / Daman & Diu** rows).
2. **EWS assumed everywhere.** The app shows EWS 10% in states that do **not** apply it to state jobs: Karnataka, Chhattisgarh, Odisha, Tripura, Sikkim, Assam (suspended Dec 2022) and probably Manipur. Meanwhile it shows EWS 0 where it probably applies (Lakshadweep; possibly Mizoram).
3. **Real vertical categories have nowhere to go.** The model only has SC/ST/OBC/EWS, so these are silently dropped into "Unreserved": Maharashtra VJ-A/NT-B/NT-C/NT-D/SBC and SEBC-Maratha; Rajasthan MBC; Bihar BC-women; J&K RBA and ALC/IB; Ladakh ALC (miscoded as OBC); Sikkim's nine categories; Meghalaya's tribe-wise quotas (incl. a quota *shared* by SCs and other STs); Nagaland's Backward Tribes (nested inside ST); Puducherry BT.
4. **Recent legal changes missed or mis-stated.** Karnataka (HC, 12 Oct 2026), Madhya Pradesh (HC, 9 Oct 2026), West Bengal (May 2026), Arunachal (Aug 2026), J&K rationalisation (pending), Meghalaya and Nagaland reviews (pending), Telangana 42% BC bills (pending assent), Chhattisgarh (SC interim order), Bihar (SC appeal), Jharkhand (bill returned 2023, not 2024), Maharashtra SEBC (HC rehearing from Oct 2026). Only 3 entries have a `legalStatus` at all; Tamil Nadu doesn't use the `9TH_SCHEDULE` value that exists for it.
5. **Rates vary by post class or region, but the model holds one number.** Himachal (Class I/II vs III/IV), Haryana (BC 15% in Group A/B vs 27% in C/D), Nagaland (100% for non-technical Grade III/IV), Rajasthan (TSP areas), Puducherry (Mahe region), DNH vs Daman & Diu, and every UT (all-India posts vs local posts).
6. **Notes contradict the numbers** in at least 8 entries: Chhattisgarh (58 vs 69), Karnataka (56 vs 66), Madhya Pradesh (63 vs 60), Maharashtra (52 vs 49), Gujarat (49.5 vs 59), Telangana (62 vs 64), Rajasthan ("within 50%" vs 54% before EWS), Goa ("lower OBC" vs 27%).
7. **Provenance is placeholder.** 39 of 42 source links are bare homepages (e.g. `https://assam.gov.in`); 35 of 37 entries cite nothing more specific; one link is to an unofficial site. 33 entries share the placeholder date `2024-01-01`.
8. **Population figures are mixed and partly unsourced.** SC/ST shares mostly match Census 2011 (exceptions below). **Every OBC population figure is an unsourced estimate** — no census has counted OBCs since 1931; only Bihar (2023) and Telangana (2024) have published state caste surveys. The footer cites "SECC", whose caste data was never released.

---

## 3. Data-model changes needed (prerequisite for correct data)

| Need | Example | Suggested shape |
|---|---|---|
| Extra vertical categories | Maharashtra VJNT/SBC/SEBC, Rajasthan MBC, J&K RBA/ALC, Ladakh ALC, Sikkim WSS | Open-ended category list: `{ code, displayName, group: "SC"\|"ST"\|"BACKWARD"\|"EWS"\|"OTHER_VERTICAL", percent }` — keep SC/ST/OBC/EWS as standard groups for comparisons |
| Nested & shared quotas | Nagaland BT 37 inside ST 80; Meghalaya 5% shared by SC + other STs | `subCategories` (exists) + `sharedWith` / note on a category |
| Derived unreserved | Jharkhand sums to 98 | Compute `OTHERS = 100 − Σ` instead of storing it |
| Variant regimes | HP Class I/II vs III/IV; DNH vs Daman & Diu; UT all-India vs local | `variants[]` on a block with a `label` and an `isDefault` flag |
| Legal timeline | Karnataka, MP, Bihar 65%, Jharkhand 77%, Chhattisgarh 76%, Telangana 42%, J&K rationalisation | `status` per block (`IN_FORCE`, `IN_FORCE_INTERIM`, `STRUCK_DOWN`, `PENDING_ASSENT`, `PROPOSED`) + `events[]` `{date, court/body, summary, source}` |
| Provenance | All | Per block: `asOf`, `verifiedOn`, `confidence`, `sources[]` (specific document); per population figure: `source` (`CENSUS_2011`, `STATE_SURVEY_2023`, `ESTIMATE`) |
| EWS cap logic | All | Computed `baseReservation` (excl. EWS) used for the 50% check |

---

## 4. Population-figure corrections (Census 2011 unless stated)

| Jurisdiction | Field | App | Correct | Note |
|---|---|---:|---:|---|
| Andhra Pradesh | ST | 7.0 | ~5.5 | 7.0 is undivided AP |
| Arunachal Pradesh | SC | 0.6 | 0 | No SC list notified |
| Bihar | BC (OBC sub) | 15.0 | 27.12 | 2023 caste survey (EBC 36.01 is already from it) — use one source consistently |
| Jharkhand | SC | 11.8 | 12.1 | |
| Manipur | SC | 3.9 | 3.8 (or 3.4) | Depends on base used |
| Rajasthan | ST | 13.4 | 13.5 | |
| Sikkim | SC | 5.0 | 4.6 | |
| Telangana | ST | 9.3 | 9.1 | Post-2014 boundary |
| Uttar Pradesh | SC | 21.0 | 20.7 | |
| Jammu & Kashmir | SC / ST | 7.4 / 11.9 | 7.5 / 10.4 | App uses pre-2019 state incl. Ladakh |
| Ladakh | SC / ST | 0.5 / 66.8 | 0.2 / 79.6 | |
| DNH & Daman-Diu | SC / ST | 2.5 / 51.9 | 2.1 / 33.0 | App mixed DNH-only and D&D-only figures |
| Nagaland, Tripura, Mizoram, Arunachal, Meghalaya | OBC | 2–10 | — | No state OBC list/quota; show "n/a" |
| **All** | OBC | various | — | Label as estimate or remove; Telangana survey: BC 56.33, SC 17.43, ST 10.45 |

---

## 5. Jurisdiction-by-jurisdiction

Format: **App** = what `reservationData.json` says today. **Verified** = in force on 22 Oct 2026.

### Central Government — CORRECT (high)
- App = Verified: SC 15 · ST 7.5 · OBC 27 · EWS 10 = **59.5%** (all-India direct recruitment by open competition; otherwise-than-open-competition rates are SC 16.66 / ST 7.5 / OBC 25.84).
- Notes: add that *Janhit Abhiyan v. Union of India* (7 Nov 2022) upheld EWS beyond 50%.
- Sources: [DoPT master circular, Aug 2026](https://www.staffnews.in/2026/08/reservation-in-posts-and-services-in-the-central-government-dopt-master-circular.html) · [DoPT consolidated instructions](https://www.gconnect.in/orders-in-brief/reservation/reservation-scs-sts-obcs-pwds-ews-posts-services-central-government-consolidated-instructions.html)

### Andhra Pradesh — MINOR ISSUES (high)
- App = Verified: SC 15 · ST 6 · BC 29 (A 7, B 10, C 1, D 7, E 4) · EWS 10 = **60%**.
- Add SC sub-classification from 17 Apr 2025: Group I 1 · Group II 6.5 · Group III 7.5 (Ordinance 2 of 2025 → AP SC (Sub-Classification) Act 2025; direct recruitment via G.O.Ms.No.46 GAD, 19 Apr 2025). EWS via G.O.Ms.No.66 (14 Jul 2021), subject to pending litigation; BC-E (Muslim) runs under an SC interim order.
- Population: ST 7.0 → ~5.5. Source link `apbcmahasamakhya.com` is not official.
- Sources: [AP SC Sub-Classification Act 2025 (PRS)](https://prsindia.org/files/bills_acts/acts_states/andhra-pradesh/2025/Act22of2025AP.pdf) · [G.O.Ms.No.46](https://dsnlu.ac.in/storage/2026/02/3.-SC-SUB-Classification-GO.MS_.No_.46-Dt-19-4-2025-Direct-Recruitment.pdf) · [G.O.Ms.No.66 (EWS)](https://aphc.gov.in/docs/6609092021.pdf)

### Arunachal Pradesh — MINOR ISSUES / outdated (medium)
- App: ST 80 · Unreserved 20. Verified: **80% for APST** (Arunachal Pradesh STs only — not STs generally) under the 1990 80:20 ratio. On **13 Aug 2026** the cabinet made APST status + Permanent Residence Certificate + indigenous-language proficiency mandatory for direct recruitment to Group A/B/C posts — effectively 100% APST for those posts. Reports conflict on whether the 80:20 ratio was formally scrapped. No SC, OBC or EWS quota.
- Population: SC 0.6 → 0. `lastUpdated` stale.
- Sources: [Arunachal Times — committee on 80:20](https://arunachaltimes.in/article/govt-constitutes-committee-to-examine-feasibility-of-abolition-of-8020-reservation-ratio) · [India Today NE — 13 Aug 2026 decision](https://www.indiatodayne.in/arunachal-pradesh/story/no-prc-no-govt-job-arunachal-makes-st-certificate-tribal-language-proficiency-mandatory-1437492-2026-08-13) · [Sentinel — cabinet rules](https://www.sentinelassam.com/north-east-india-news/arunachal-news/arunachal-cabinet-approves-uniform-recruitment-rules-for-government-jobs)

### Assam — WRONG (high)
- App: SC 7 · ST 15 (Plains 10, Hills 5) · OBC 27 · EWS 10 = 59.
- Verified: SC 7 · ST 15 (P 10, H 5) · OBC/MOBC 27 (incl. 3% Tea Tribes & Adivasi, extended to Class I/II in Feb 2026) · **EWS 0** = **49%**. A Personnel Dept notification of Dec 2022 put EWS in direct recruitment "in abeyance until further order"; EWS continues only for education.
- Pending: proposal for ST status for six communities under a new ST (Valley) tier (with the Centre).
- Notes "EWS reservation has been implemented" is wrong for jobs.
- Sources: [Deccan Herald — EWS put in abeyance](https://www.deccanherald.com/india/assam-govt-scraps-ews-quota-in-jobs-1174523.html) · [Sentinel — CM links EWS to new posts](https://sentinelassam.com/topheadlines/assam-cm-himanta-biswa-sarma-links-ews-quota-with-creation-of-posts) · [AASC official reservation note](https://aasc.assam.gov.in/sites/default/files/swf_utility_folder/departments/aasc_webcomindia_org_oid_4/portlet/level_2/reservation_of_post_and_maintenance_of_roster_0.pdf)

### Bihar — WRONG (high)
- App: SC 16 · ST 1 · OBC 30 (EBC 18, BC 12) · EWS 10 = 57.
- Verified: SC 16 · ST 1 · EBC 18 · BC 12 · **BC women 3** · EWS 10 = **60%** (base exactly 50%, not 47%).
- Legal: 2023 Acts (65%; 75% with EWS) struck down by Patna HC on 20 Jun 2024; Supreme Court refused a stay on 29 Jul 2024; appeal pending. `UNDER_CHALLENGE` describes the 65% law, not the regime in force.
- Population: BC 15.0 → 27.12 (2023 survey; the app's EBC 36.0 already comes from it, SC/ST from Census) — pick one source.
- Sources: [Bihar Reservation Act 1991](https://www.legitquest.com/act/bihar-reservation-of-vacancies-in-posts-and-services-for-scheduled-castes-scheduled-tribes-and-other-backward-classes-act-1991/A322) · [LiveLaw — SC refuses stay](https://www.livelaw.in/amp/top-stories/supreme-court-refuses-to-stay-hc-judgment-striking-down-bihars-65-quota-law-at-present-stage-agrees-to-hear-states-appeal-264854) · [AIR — caste survey](https://newsonair.gov.in/bihar-govt-releases-findings-of-its-caste-based-survey-obcs-and-ebcs-comprise-more-than-63-of-states-population)

### Chhattisgarh — WRONG (high on numbers; medium on EWS)
- App: SC 13 · ST 32 · OBC 14 · EWS 10 = 69.
- Verified: SC **12** · ST 32 · OBC 14 · **EWS 0** = **58%**. The app's SC 13 comes from the Dec 2022 76% bill (ST 32 / SC 13 / OBC 27 / EWS 4), which never received assent. The 2019 EWS ordinance lapsed; the Centre told Lok Sabha EWS is not implemented in CG state services.
- Legal: HC struck down the 58% scheme on 19 Sep 2022; **Supreme Court interim order of 1 May 2023** keeps it operating; final hearing pending → status `IN_FORCE_INTERIM`.
- Sources: [LiveLaw — SC interim order](https://www.livelaw.in/amp/top-stories/supreme-court-chattisgarh-government-stay-high-court-hc-order-striking-down-fifty-eight-per-cent-reservation-policy-227698) · [Business Standard — 76% bill awaiting assent](https://www.business-standard.com/india-news/caste-census-chhattisgarh-guv-sitting-on-bill-that-raises-quota-bar-to-76-123042300249_1.html) · [LiveLaw — EWS ordinance not enforceable](https://www.livelaw.in/news-updates/hc-cant-direct-state-to-enforce-ordinance-for-ews-reservation-in-psc-examination-chhattisgarh-hc-read-judgment-152656)

### Goa — MINOR ISSUES (medium)
- App = Verified: SC 2 · ST 12 · OBC 27 · EWS 10 = **51%**.
- Notes "lower OBC reservation compared to other states" is misleading (27% = central rate; was true only when it was 19.5%, 2003–c.2012).
- Sources: [Herald Goa — OBC 27%](https://www.heraldgoa.in/goa/na/obc-quota-hiked-to-27/60564) · [Herald Goa — EWS](https://www.heraldgoa.in/goa/cabinet-approves-10-reservation-for-ewss/222466) · [GSSC Advt 4/2026](https://gssc.goa.gov.in/wp-content/uploads/2026/09/advertisement-no.-4-of-year-2026-brief-advertisement_compressed.pdf)

### Gujarat — MINOR ISSUES (high)
- App = Verified: SC 7 · ST 15 · SEBC 27 · EWS 10 = **59%**.
- Notes: "49.5%" is the central figure — Gujarat's pre-EWS total is 49%. EWS came from the 103rd Amendment (Gujarat was first, 14 Jan 2019); the Supreme Court upheld it later (2022).
- Sources: [The Wire — EWS in Gujarat](https://m.thewire.in/article/politics/10-reservation-for-economically-backward-sections-implemented-in-gujarat) · [State reservation notice](https://nau.in/assets/uploads/40354-reservation-of-seats.pdf)

### Haryana — MINOR ISSUES (medium)
- App = Verified for Group C/D: SC 20 (DSC 10 + OSC 10) · BC 27 · EWS 10 = **57%**.
- Add BC sub-categories BC-A 16 / BC-B 11. For **Group A/B** BC is 15% (BC-A 10 / BC-B 5); a June 2024 announcement to raise it to 27% has no notification. DSC/OSC sub-classification notified 13 Nov 2024 (after *Davinder Singh*, 1 Aug 2024). Jat (BC-C) note is stale history.
- Sources: [Haryana BC Act 2016 (PRS)](https://prsindia.org/files/bills_acts/acts_states/haryana/2016/Act15of2016Haryana.pdf) · [Tribune — Group A/B hike "under consideration"](https://www.tribuneindia.com/news/haryana/hike-in-quota-for-haryana-groups-a-b-posts-under-consideration/amp/) · [Business Standard — SC sub-classification](https://www.business-standard.com/politics/saini-led-haryana-govt-implements-sub-classification-of-scheduled-castes-124101801217_1.html)

### Himachal Pradesh — WRONG (medium)
- App: SC 25 · ST 5 · OBC 20 · EWS 10 = 60 (SC 25 matches the population share / DoPT central row, not a state rule).
- Verified: Class III/IV (bulk of recruitment): SC **22** · ST 5 · OBC **18** · EWS 10 = **55%**. Class I/II: SC 15 · ST 7.5 · OBC 12 · EWS 10 = 44.5%. OBC and EWS confirmed; SC 22 / ST 5 need an official HP Personnel roster to confirm.
- Sources: [HP Dept of Personnel — reservation orders](https://himachal.nic.in/personnel/Content/MenuFormContent?qs=DTWr7vJt8mOS6YWzw6KvpA1luCrgbZ6l) · [HPPSC HPAS 2025 advertisement](http://www.hppsc.hp.gov.in/hppsc/WriteReadData/LINKS/HPAS%202025%20ADVT%20Maind525471b-62f2-4a75-b707-6f18926200e0.pdf)

### Jharkhand — MINOR ISSUES (high)
- App: SC 10 · ST 26 · OBC 14 · EWS 10 · **Others 38 (sums to 98%)**.
- Verified: SC 10 · ST 26 · OBC 14 (BC-I/EBC 8 + BC-II/BC 6) · EWS 10 = **60%**, Others **40**.
- Legal: the 77% bill passed on **11 Nov 2022** and was **returned by the Governor in Apr 2023** on the Attorney General's advice — not "2024", and not "pending presidential assent". Effectively stalled; `PENDING_APPROVAL` overstates it.
- Population: SC 11.8 → 12.1.
- Sources: [Scroll — Governor returns bill](https://scroll.in/latest/1047679/jharkhand-governor-returns-bill-proposing-to-increase-reservation-in-state-government-jobs) · [JCECEB — BC-I 8 / BC-II 6](https://jceceb.jharkhand.gov.in/download/1057.pdf) · [ThePrint — 77% bill](https://theprint.in/india/jkhand-raises-reservation-to-77-with-caveat-on-implementing-after-changes-in-constitution/1211571/)

### Karnataka — WRONG (high)
- App: SC 17 · ST 7 · OBC 32 · EWS 10 = 66 (never in force — Karnataka has not implemented EWS in state posts).
- Verified: SC **15** · ST **3** · OBC 32 (Cat-1 4, 2A 15, 2B 4, 3A 4, 3B 5) · EWS **0** = **50%**.
- Legal: **Karnataka HC (CJ Vibhu Bakhru & Justice K.S. Hemalekha) struck down the 2022 SC/ST hike on 12 Oct 2026** (*Mahendra Kumar Mitra*, WP 200448/2025) for breaching 50% and not consulting the NCSC/NCST. The state intends to file an SLP; no Supreme Court stay found — **re-check before publishing**. The 2023 move of 2B (Muslims) into 2C/2D remains in abeyance. A PIL seeking EWS is pending.
- Sub-category descriptions are wrong: 2A = Kuruba, Idiga and others (not Vokkaliga); **3A = Vokkaliga** and allied; **3B = Veerashaiva-Lingayat** and others.
- Sources: [Bar & Bench — HC judgment](https://www.barandbench.com/news/litigation/karnataka-high-court-strikes-down-law-enhancing-scst-reservation-as-total-quota-exceeds-50-cap) · [LiveLaw](https://www.livelaw.in/high-court/karnataka-high-court/karnataka-high-court-strikes-down-law-raising-reservation-educational-institutes-government-jobs-554459) · [Deccan Herald — SLP decision](https://www.deccanherald.com/india/karnataka/karnataka-government-to-move-supreme-court-over-high-court-ruling-on-quota-cap-4184535) · [Verdictum — EWS PIL](https://www.verdictum.in/court-updates/high-courts/karnataka-public-interest-litigation-ews-quota-govt-jobs-girish-bharadwaj-1521926)

### Kerala — WRONG (high)
- App: SC 10 · ST 2 · OBC 40 · EWS 10 = 62; OBC split Ezhava 9, Muslim 8, LC/AI 3, OBH 3, DV/VK/KN 5, "Other SEBC 12".
- Verified: SC **8** · ST 2 · SEBC 40 · EWS 10 = **60%**. SEBC split for posts other than last grade: Ezhava/Thiyya/Billava **14** · Muslim **12** · Latin Catholic & Anglo-Indian **4** · Other Backward Hindus 3 · Viswakarma **3** · Dheevara 1 · Hindu Nadar 1 · SIUC Nadar 1 · SC converts to Christianity 1. (Last-grade posts use a different split.) The app's split is the **education-admission** split (which totals 30%) padded with an invented "Other SEBC 12%". EWS since 23 Oct 2020.
- Sources: [Kerala PSC — reservation rules](https://www.keralapsc.gov.in/rules-reservation) · [BCDD — employment reservation](https://bcdd.kerala.gov.in/en/reservation/employment-reservation/) · [Onmanorama — EWS](https://onmanorama.com/news/kerala/2022/11/08/economically-weaker-sections-reservation-kerala-implementation.html)

### Madhya Pradesh — MINOR ISSUES (medium; very fluid)
- App = Verified: SC 16 · ST 20 · OBC 14 · EWS 10 = **60%**. Notes "63%" is wrong under every reading.
- Legal: **MP HC struck down the 2019 Act raising OBC to 27% on 9 Oct 2026**; the 13% "held" posts (87:13 formula, 2022) to be filled from the unreserved list within 3 months. State filed an SLP ~16–17 Oct 2026; no stay found. If 27% were restored the total would be 73%. Confirm EWS continues (the struck Act reportedly also contained it).
- Sources: [LiveLaw — HC judgment](https://www.livelaw.in/high-court/madhya-pradesh-high-court/madhya-pradesh-high-court-strikes-down-2019-amendment-increasing-obc-quota-to-27-553963) · [ThePrint](https://theprint.in/india/hc-nixes-27-pc-obc-quota-in-madhya-pradesh-says-law-unconstitutional-passed-in-undue-haste/3067101/) · [Free Press Journal — SLP](https://www.freepressjournal.in/bhopal/madhya-pradesh-government-moves-supreme-court-against-high-court-verdict-scrapping-27-obc-reservation-files-special-leave-petition)

### Maharashtra — WRONG (high)
- App: SC 13 · ST 7 · OBC 19 · EWS 10 = 49.
- Verified: SC 13 · ST 7 · OBC 19 · **VJ-A 3 · NT-B 2.5 · NT-C 3.5 · NT-D 2 · SBC 2** (base 52, Act VIII of 2004) · **SEBC-Maratha 10** · EWS 10 = **72%** (open 28).
- Legal: SEBC Act 2024 in force with no stay; Bombay HC rehearing from scratch (third time) since ~9 Oct 2026.
- Sources: [LiveLaw — fresh hearing](https://www.livelaw.in/high-court/bombay-high-court/bombay-high-court-maratha-reservation-matter-heard-afresh-third-new-bench-550709) · [PRS — SEBC Bill 2024 summary](https://prsindia.org/files/bills_acts/bills_states/maharashtra/2024/Bill_Summary_Maratha_Reservation_Bill_2024.pdf) · [State reservation table](https://www.mumu.edu.in/IQAC/Ext_profile/1.%20Reservation%20Status%20Maharashtra%20Govenment.pdf)

### Manipur — MINOR ISSUES; total probably wrong (low on EWS)
- App: SC 2 · ST 31 · OBC 17 · EWS 10 = 60.
- Verified: SC 2 · ST 31 · OBC 17 (Meitei / Meitei-Pangal / others) — confirmed (1976 Act, 2011 Rules). **No instrument implementing EWS in state jobs was found**; MPSC adverts have no EWS row → likely **50%**.
- Population: SC 3.9 → 3.8 (or 3.4 depending on base); OBC 28 unsupported (likely far higher).
- Sources: [LiveLaw — SC on 2/31/17](https://www.livelaw.in/amp/top-stories/supreme-court-upholds-manipur-universitys-decision-to-reduce-sc-quota-to-2-obc-quota-to-17-189361) · [MPSC 2021 category split](https://results.amarujala.com/jobs/mpsc-manipur-recruitment-2021-applications-invited-for-300-medical-officers-posts-job-details-here)

### Meghalaya — WRONG (high)
- App: SC 2 · ST 80 = 82.
- Verified (1972 State Reservation Policy): **Khasi-Jaintia 40 · Garo 40 · other STs and SCs together 5** = **85%**; unreserved 15; no separate SC quota; no OBC/EWS.
- Legal: expert committee report tabled **18 Feb 2026** (keep 1972 split, strict roster, add creamy layer); no government decision yet.
- Sources: [ThePrint (PTI) — report tabled](https://theprint.in/india/expert-panel-on-reservation-policy-in-meghalaya-for-introducing-creamy-layer-principle/2857890/) · [NE Now — no decision yet](https://nenow.in/north-east-news/meghalaya/meghalaya-govt-says-final-decision-on-state-reservation-policy-will-take-time.html) · [Scroll — background](https://scroll.in/article/1069931/in-meghalaya-divide-over-the-states-reservation-policy-deepens)

### Mizoram — UNVERIFIABLE (low)
- App: ST 80 = 80. No primary source supports 80% ST; a 1978 Lok Sabha answer denied a reported 80% local reservation. Local preference works mainly through mandatory Mizo-language proficiency. EWS 10% *may* be implemented (MoSJE Lok Sabha reply, 10 Aug 2021) — unconfirmed.
- Recommendation: mark as **unverified** in the UI until the Mizoram DP&AR reservation order is found.
- Sources: [PIB — EWS states list](https://www.pib.gov.in/PressReleasePage.aspx?PRID=1741814) · [Lok Sabha 1978 answer](https://eparlib.nic.in/bitstream/123456789/2607752/1/06_IV_05-04-1978_p99_p99_u5756.pdf)

### Nagaland — MINOR ISSUES (medium)
- App: ST 80 = 80. **Headline is right** (first-pass research said otherwise; the arbiter overturned it on Nagaland DPAR records).
- Verified: **80% for indigenous Nagaland STs** (1967/1969 orders; **100%** for non-technical Grade III/IV non-gazetted posts per a 1973 order); **Backward Tribes 37% nested inside** (25% for 7 Eastern Nagaland tribes + 12% for 4 other BTs). No SC/OBC/EWS. A Job Reservation Review Commission (Sep 2025) has not reported.
- Fix: label ST as "indigenous Nagaland STs", add BT sub-quota, OBC population → n/a.
- Sources: [Nagaland DPAR — Reservation in Services](https://dpar.nagaland.gov.in/wp-content/uploads/2016/04/Reservation-in-Services.pdf) · [Morung Express — quota notification](https://morungexpress.com/nagaland-govt-notifies-quota-implementation) · [Morung Express — CM's reply](https://morungexpress.com/reservation-in-nagaland-made-with-no-end-date)

### Odisha — WRONG (medium)
- App: SC 17 · ST 23 · OBC 11 · EWS 10 = 61.
- Verified: SC **16.25** · ST **22.5** · SEBC **11.25** (capped from the Act's 27% by GA resolution, interim pending litigation) · **EWS 0** = **50%**. OPSC/OSSSC 2025–26 vacancy tables have only UR/SEBC/SC/ST. 2025–26 changes were for education only.
- Sources: [GA resolution — SEBC 11.25%](https://stsc.odisha.gov.in/sites/default/files/2020-03/Resolution_SEBC_Reservation.pdf) · [The Week — Apr 2026 education-only change](https://www.theweek.in/wire-updates/national/2026/04/05/odisha-hikes-quotas-for-sts-scs-introduces-reservation-for-obcs-in-medical-technical-education.html)

### Punjab — CORRECT (high)
- App = Verified: SC 25 · BC 12 · EWS 10 = **47%**. Optional: half of SC direct-recruitment vacancies are offered first to Balmikis/Mazhabi Sikhs (upheld 1 Aug 2024, *Davinder Singh*). Punjab has the *highest* SC share of any state (31.9%), not "one of the highest".
- Sources: [Punjab SC & BC (Reservation in Services) Act 2006](https://www.indiacode.nic.in/bitstream/123456789/8396/1/reservationinservicesact2006.pdf) · [PPSC 2025 notification](https://drishtiias.com/pdf/1738060612_PPSC%20Official%20Notification.pdf)

### Rajasthan — WRONG (high)
- App: SC 16 · ST 12 · OBC 21 · EWS 10 = 59.
- Verified: SC 16 · ST 12 · OBC 21 · **MBC 5** (Gujjar and four others, 2019 Act) · EWS 10 = **64%**. Base is 54% before EWS, so "within the constitutional limit" is wrong. MBC Act in force, PIL pending. TSP/Scheduled Areas use a separate roster.
- Population: ST 13.4 → 13.5.
- Sources: [GKToday — 2019 Amendment](https://www.gktoday.in/rajasthan-classes-amendment-bill-2019/) · [RajRAS — MBC 5% in judicial service](https://rajras.in/5-percent-mbc-reservation-in-rajasthan-judicial-service/)

### Sikkim — WRONG (medium; exact percentages unconfirmed)
- App: SC 7 · ST 25 · OBC 24 · EWS 10 = 66 (OBC 24 is the DoPT *central* row for Sikkim).
- Verified (from 2024–26 SPSC advertisements): nine vertical categories — Bhutia-Lepcha ~18 · Primitive Tribe ~6 · ST (Limboo-Tamang) ~14 · SC ~6 · OBC (Central List) ~18 · OBC (State List) ~20 · MBC ~4 · Weaker Section of Society ~2 · Unreserved ~12 → **~88% reserved**; **no EWS column**. A 2018 restructuring may make SC 4 + WSS 2.
- Population: SC 5.0 → 4.6. Find the Sikkim DoP reservation notification before publishing exact figures.
- Sources: [SPSC Accounts Clerk 2026 advertisement](https://www.freejobalert.com/articles/sikkim-psc-accounts-clerk-junior-storekeeper-recruitment-2026-apply-online-for-50-posts-3054075) · [SPSC JE 2024 advertisement](https://madeeasy.in/uploads/RecentJobs/spsc-recruitment-100-junior-engineer-posts.pdf) · [NE Now — SC restructuring](https://nenow.in/north-east-news/sikkim-sc-body-flays-government-policy-revised-reservation.html)

### Tamil Nadu — MINOR ISSUES (high)
- App = Verified: SC 18 · ST 1 · BC 30 (26.5 + BC-Muslim 3.5) · MBC/DNC 20 · EWS 0 = **69%**.
- Add Arunthathiyar 3% preferential quota within SC (2009 Act; upheld 2024). Vanniyar 10.5% internal MBC quota struck down (SC, 31 Mar 2022). Set `legalStatus: 9TH_SCHEDULE` (the type exists but isn't used).
- Sources: [TN BC/MBC policy note](https://cms.tn.gov.in/cms_migrated/document/docfiles/bcmbc_e_pn_2021_22.pdf) · [SC — Vanniyar judgment](https://api.sci.gov.in/supremecourt/2021/28000/28000_2021_5_1501_34552_Judgement_31-Mar-2022.pdf)

### Telangana — MINOR ISSUES (high)
- App = Verified: SC 15 · ST 10 · BC 29 · EWS 10 = **64%** (notes say ~62%).
- Add SC sub-classification from 14 Apr 2025 (Group I 1 · II 9 · III 5) and BC-A 7 / B 10 / C 1 / D 7 / E 4. ST 10% (GO 33, 30 Sep 2022) is under HC challenge. The 42% BC bills were reserved for the President on 30 Mar 2025 — no assent. 2024 state caste survey: BC 56.33 · SC 17.43 · ST 10.45.
- Sources: [Scroll — SC sub-categorisation](https://scroll.in/latest/1081341/telangana-becomes-first-state-to-implement-scheduled-castes-sub-categorisation) · [TNM — GO 33](https://www.thenewsminute.com/article/telangana-govt-enhances-st-reservation-6-10-immediate-effect-168474) · [South First — caste survey](https://thesouthfirst.com/telangana/telangana-releases-caste-survey-reveals-bcs-make-up-56-of-states-population/)

### Tripura — WRONG (medium-high)
- App: SC 17 · ST 31 · OBC 2 · EWS 10 = 60 (OBC 2 is the DoPT *central* row).
- Verified: SC 17 · ST 31 = **48%** (1991 Act); **no OBC and no EWS quota** in state jobs (the state's OBC Welfare Dept says there is "no scope" under the 50% cap). 33% horizontal for women.
- Sources: [Tripura SC & ST Reservation Act 1991](https://www.indiacode.nic.in/bitstream/123456789/18150/1/1653977993414_act.pdf) · [Tribal Welfare Dept](https://twd.tripura.gov.in/reservation-policy) · [TPSC advertisement (UR/SC/ST only)](https://tpsc.tripura.gov.in/sites/default/files/advt_no_06_2021.pdf)

### Uttar Pradesh — CORRECT (high)
- App = Verified: SC 21 · ST 2 · OBC 27 · EWS 10 = **60%**. Population: SC 21.0 → 20.7.
- Source: [UP Act 4 of 1994](https://www.indiacode.nic.in/bitstream/123456789/17525/1/english4of1994.pdf)

### Uttarakhand — CORRECT (medium-high)
- App = Verified: SC 19 · ST 4 · OBC 14 · EWS 10 = **47%**.
- Source: [Lok Sabha list of EWS-implementing states](https://swarajyamag.com/amp/story/insta%2F12-states-union-territories-have-implemented-10-per-cent-ews-reservation-govt-tells-lok-sabha)

### West Bengal — WRONG (high)
- App: SC 22 · ST 6 · OBC 17 (A 10, B 7) · EWS 10 = 55.
- Verified: SC 22 · ST 6 · **OBC 7** (one list of 66 classes; A/B abolished) · EWS 10 = **45%**.
- Legal: Calcutta HC struck down 2010–12 additions and the A/B split (22 May 2024) → 2025 re-notification (140 classes) → withdrawn by the new government with **Notification 945-BCW/MR-23/2026 (18 May 2026)**; HC declared 2025–26 certificates void (12 Aug 2026); Supreme Court issued notice (Oct 2026), recruitment subject to outcome.
- Sources: [AIR — 66 classes, 7%](https://www.newsonair.gov.in/west-bengal-government-notifies-list-of-66-obc-classes-following-calcutta-high-court-order/) · [Notification text (wbxpress)](https://wbxpress.com/state-list-obc-avail-7-percent-reservation-west-bengal/) · [LiveLaw — SC notice](https://www.livelaw.in/top-stories/supreme-court-issues-notice-on-plea-challenging-calcutta-hc-judgment-invalidating-bengal-obc-certificates-issued-in-2025-2026-552636)

### Andaman & Nicobar Islands — WRONG (medium)
- App: SC 0 · ST 10 · OBC 27 · EWS 10 = 47.
- Verified: ST **8** (local Island STs only); OBC is 27 in the DoPT table but **~38% in local practice** (2026 Group C advertisement: OBC 34.9%, UR 45.9%; the underlying order not located); EWS 10 → **~56%**.
- Sources: [DoPT 2005 OM (local table)](https://ncst.gov.in/uploads-dev/dopt_circulars/Notification3601712004EsttRes.pdf) · [Andaman Sheekha — 38% OBC](https://andamansheekha.com/112731/) · [2026 Group C advertisement](https://www.freejobalert.com/articles/andaman-and-nicobar-combined-matric-level-exam-2026-apply-online-for-1535-group-c-posts-3052810)

### Chandigarh — MINOR ISSUES (medium)
- App: SC 15 · OBC 27 · EWS 10 = 52. Verified (DoPT local table): SC **18** · OBC 27 · EWS 10 = **55%**. Deputationists from Punjab/Haryana follow parent-state rules.
- Source: [DoPT 2005 OM](https://documents.doptcirculars.nic.in/D2/D02adm/Notification_36017_1_2004_Estt(Res).pdf)

### Dadra & Nagar Haveli and Daman & Diu — WRONG (medium)
- App: SC 2 · ST 52 · OBC 14 · EWS 10 = 78 (52 is DNH's *population* share; no source for the quota).
- Verified: no post-merger unified rate found. DoPT local table still has two rows: **DNH** SC 2 · ST 43 · OBC 5 (+EWS 10) ≈ **60%**; **Daman & Diu** SC 3 · ST 9 · OBC 27 (+EWS 10) ≈ **49%**. Model as two variants.
- Population (merged UT): SC 2.1 · ST 33.0.
- Sources: [DoPT 2005 OM](https://documents.doptcirculars.nic.in/D2/D02adm/Notification_36017_1_2004_Estt(Res).pdf) · [DoPT master circular 2026](https://www.staffnews.in/2026/08/reservation-in-posts-and-services-in-the-central-government-dopt-master-circular.html)

### Delhi — CORRECT (medium-high)
- App = Verified: SC 15 · ST 7.5 · OBC 27 · EWS 10 = **59.5%**. OBC benefit requires an OBC (Delhi) certificate.
- Source: [DSSSB advertisement](https://dsssb.delhi.gov.in/sites/default/files/DSSSB/circulars-orders/advertisement_05-20_pdf_1.pdf)

### Jammu & Kashmir — WRONG (high)
- App: SC 8 · ST 20 · OBC 8 · EWS 10 = 46.
- Verified (S.O. 176, 15 Mar 2024): SC 8 · ST 20 (ST-1 10 + ST-2 10) · OBC 8 · **RBA 10 · ALC/IB 4** · EWS 10 = **60%** (open merit 40). ST-2 = Pahari, Paddari, **Koli, Gadda Brahman**.
- Legal: HC challenge pending, no stay. Cabinet approved a rationalisation on **3 Dec 2025** (EWS 10→3, RBA 10→7 → total 50); sent to the LG on 4 Dec; with the "competent authority" as of 29 Sep 2026.
- Population: app uses the pre-2019 state incl. Ladakh — UT figures are SC 7.5, ST 10.4.
- Sources: [S.O. 176 of 2024](https://rgp.jk.gov.in/pdf/SRO/SO-2024/S.%20O.%20%20176%20%20%20%20%202024%20%20%20%20PDF.pdf) · [Outlook — cabinet cuts EWS/RBA](https://www.outlookindia.com/national/jk-cabinet-slashes-ews-rba-quotas) · [Kashmir Vision — status Sep 2026](https://kashmirvision.in/2026/09/29/jk-reservation-panel-report-awaits-competent-authority-approval/)

### Ladakh — MINOR ISSUES (high)
- App = Verified totals: SC 1 · ST 80 · ALC 4 · EWS 10 = **95%** (85% cap excl. EWS, Regulation of 2–3 Jun 2025; Rules June 2025). **ALC (Actual Line of Control residents) is stored in the OBC slot** — Ladakh has no OBC quota; needs its own category.
- Notes: "Ladakhi Buddhists recognized as ST" is inaccurate (ST status covers communities in both Leh and Muslim-majority Kargil). Population: ST 66.8 → 79.6, SC 0.5 → 0.2.
- Sources: [Tribune — Rules notified](https://www.tribuneindia.com/news/j-k/ladakh-admn-notifies-reservation-rules-80-per-cent-quota-for-sts) · [SCC Online — Regulation 2025](https://www.scconline.com/blog/post/2025/06/03/govt-ladakh-reservation-policy-reforms-legal-news/) · [Ladakh press release](https://information.ladakh.gov.in/uploads/admin/press-releases/link_782347b9762e1cfeeb0ec89caa6433f9.pdf)

### Lakshadweep — WRONG (medium)
- App: ST 100 = 100 (100% reservation is unconstitutional — *Indra Sawhney*; *Chebrolu Leela Prasad Rao*, 2020).
- Verified: **ST 45** for Group C/D (1973 order; DoPT local table) + EWS 10 (probable) ≈ **55%**. A separate local-first rule (non-locals appointed only if no qualified local) means most appointees are ST in practice — that's a residence preference, not reservation.
- Sources: [Lok Sabha answer, 1979](https://eparlib.nic.in/bitstream/123456789/2626719/1/06_VII_02-05-1979_p147_p147_u9384.pdf) · [DoPT 2005 OM](https://ncst.gov.in/uploads-dev/dopt_circulars/Notification3601712004EsttRes.pdf)

### Puducherry — WRONG (high)
- App: SC 16 · ST 0 · OBC 34 (MBC 15, BCM 3.5, BC 12, EBC 3.5) · EWS 10 = 60.
- Verified: SC 16 · ST **0.5** (Irular, from 8 Mar 2019) · BC 33.5 = **MBC 18 · OBC 11 · BCM 2 · EBC 2 · BT 0.5** · EWS 10 = **60%**. EBC is a community list, not an income test. Mahe region may differ.
- Sources: [Puducherry BC Commission — split](https://bcmwel.py.gov.in/state-level-commission-backward-classes) · [Gazette — ST 0.5%](https://styandptg.py.gov.in/2019/MARCH/EXTRAORDINARYPART-I/036-PART-I%20dated%207-3-2019.pdf) · [EWS G.O. 22/2019](https://dpar.py.gov.in/CCD/GOs/GO.22_2019.pdf)

---

## 6. Before publishing corrected data — re-check list
- Karnataka: has the Supreme Court stayed the 12 Oct 2026 HC judgment?
- Madhya Pradesh: Supreme Court action on the SLP; whether EWS survived the judgment.
- Sikkim: obtain the Department of Personnel reservation notification (exact percentages).
- Mizoram: obtain the DP&AR reservation order.
- A&N: locate the order behind the 38% OBC figure.
- Himachal: official roster confirming SC 22 / ST 5 for Class III/IV.
- Manipur, Mizoram, Lakshadweep: EWS status in state/UT jobs.
