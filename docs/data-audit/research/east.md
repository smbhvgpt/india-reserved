> **First-pass research notes (22 Oct 2026).** Kept for provenance and source links. Where these notes disagree with [`../../DATA_AUDIT.md`](../../DATA_AUDIT.md), the audit wins: it reflects a second, adversarial verification pass (see [`../second-pass-verification.md`](../second-pass-verification.md)).
>
> **Gap filled later:** SIKKIM was researched in the second pass (nine-category scheme, ~88% reserved, no EWS).

# Verification: East / North-East jurisdictions (STATE_SERVICES vertical reservation)

Checked on 2026-10-22. Scope: BIHAR, JHARKHAND, ODISHA, WEST_BENGAL, ASSAM, SIKKIM.

**Method and limits.** All evidence comes from WebSearch result summaries. WebFetch failed with DNS/egress errors on every host I tried (indiankanoon, barandbench, scobserver, wikipedia), so I could not open the primary PDFs or pages myself. Where a figure rests only on a search summary or an aggregator, I say so. The shared WebSearch budget ran out before I reached Sikkim, so Sikkim is UNVERIFIED apart from the Census numbers.

Census 2011 reference numbers (state-level SC% / ST%), used in the population checks below:
Bihar 15.91 / 1.28 · Jharkhand 12.08 / 26.21 · Odisha 17.13 / 22.85 · West Bengal 23.51 / 5.80 · Assam 7.15 / 12.45 · Sikkim 4.63 / 33.80.

---

### BIHAR — WRONG  (confidence: high on the numbers, medium on the Supreme Court status)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 16 | 16 | Bihar Reservation of Vacancies in Posts & Services Act, 1991, s.4 (pre-2023 structure, back in force since the Patna HC ruling) |
| ST | 1 | 1 | same |
| OBC (total) | 30 | **33** | The app leaves out the 3% quota for women of backward classes |
| ↳ EBC (Annexure-I) | 18 | 18 | |
| ↳ BC (Annexure-II) | 12 | 12 | |
| ↳ **BC women (BCW/BCL)** | — (missing) | **3** | A vertical quota that can be modelled as a third OBC subcategory. Medium confidence that only BC (Annexure-II) women are eligible. The 2023 amendment abolished it, but the amendment was struck down, so the quota is back. The BPSC AEDO 2025 advertisement (935 posts) has BC-women 28 (3.0%), EBC 168 (18.0%), BC 112 (12.0%) and EWS 93 (9.9%), which matches 18/12/3/10 |
| EWS | 10 | 10 | Bihar EWS Act, February 2019 (cabinet approved a 10% bill in Jan/Feb 2019); still in force |
| OTHERS / UR | 43 | **40** | |
| TOTAL reserved | 57 | **60** (50 + 10 EWS) | The app's 57 and "47% baseline" are both wrong. The baseline is exactly 50% |
- **Legal status (as of Oct 2026):** The 2023 amendment Acts (65%, or 75% with EWS; EBC 25, BC 18, SC 20, ST 2, BC-women quota removed) were notified on 21 Nov 2023. A Patna HC Division Bench (CJ K. Vinod Chandran) struck them down on **20 Jun 2024** in *Gaurav Kumar v. State of Bihar*. The Supreme Court **refused to stay** that judgment on **29 Jul 2024** (CJI Chandrachud bench); it granted leave, and the RJD's petition was tagged with the appeals. Reports from Jul 2024 (MoS reply in Parliament) and Jun 2025 (Jairam Ramesh) describe the appeal as pending. I found no Supreme Court judgment through Oct 2026 and no new 2025–26 law or Ninth Schedule inclusion. **In force: 60% (50 + 10 EWS).** The 65% law is struck down with an appeal pending. `legalStatus: UNDER_CHALLENGE` is defensible only for the 65% law; the regime actually in force is not under challenge.
- **Notes text issues:** "57%" should be 60%. "Baseline 47%" should be 50%. "OBC 30% [EBC 18% + BC 12%]" leaves out the 3% BC women. The 2023 numbers are right (65%, or 75% with EWS), and so is "struck down June 2024 / appeal pending". legalNotes "status quo (57% Total)" should be 60%.
- **Population check:** SC 15.9 and ST 1.3 match Census 2011 (15.91 / 1.28). The OBC figures mix two sources. EBC 36.0 comes from the 2023 Bihar caste survey (36.01%), but **BC 15.0 is wrong: the survey gives 27.12% (27.13% in some reports)**. So the OBC total should be about 63.1, not 51. The survey also gives SC 19.65, ST 1.68 and General 15.52. Use one source throughout: either all survey figures (SC 19.65 / ST 1.68 / EBC 36.01 / BC 27.12 / General 15.52) or Census for SC/ST with a footnote. As it stands, OTHERS 31.8 is an unsupported residual.
- **Sources:**
  - https://www.legitquest.com/act/bihar-reservation-of-vacancies-in-posts-and-services-for-scheduled-castes-scheduled-tribes-and-other-backward-classes-act-1991/A322 — text of the 1991 Act (s.4 quota schedule)
  - https://www.businesstoday.in/amp/latest/story/bihar-assembly-passes-bill-to-increase-reservation-for-st-sc-obcs-to-65-405233-2023-11-09 — old 18/12/16/1/3 structure and the 2023 changes (3% BC-women quota scrapped)
  - https://indiankanoon.org/doc/19048737/ — Patna HC judgment, *Gaurav Kumar v. State of Bihar*, 20 Jun 2024
  - https://www.livelaw.in/amp/high-court/patna-high-court/no-exceptional-circumstance-in-bihar-to-breach-50-reservation-limit-quota-merely-based-on-population-proportion-impermissible-260979 — LiveLaw report on the HC ruling
  - https://www.barandbench.com/news/litigation/supreme-court-refuses-stay-patna-high-court-decision-quash-bihar-reservation-law — Supreme Court refused stay, 29 Jul 2024
  - https://www.etvbharat.com/en/!bharat/double-engine-govt-in-bihar-jairam-ramesh-on-65-percent-reservation-enn25062001500 — Jun 2025, case still pending / not implemented
  - https://newsonair.gov.in/bihar-govt-releases-findings-of-its-caste-based-survey-obcs-and-ebcs-comprise-more-than-63-of-states-population — 2023 caste survey figures (AIR)
  - https://www.india.com/news/agencies/bihar-cabinet-gives-nod-to-10-quota-for-economically-weak-3555981/ — EWS 2019
  - BPSC AEDO 2025 breakup via https://www.pw.live/teaching/exams/bpsc-aedo-vacancy-2025 (aggregator; confirm against the BPSC PDF)

---

### JHARKHAND — MINOR ISSUES (numbers) / WRONG (legal text)  (confidence: high on the numbers, medium on bill status after 2023)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 10 | 10 | Jharkhand Reservation of Vacancies in Posts & Services Act, 2001 |
| ST | 26 | 26 | |
| OBC (total) | 14 | 14 | |
| ↳ BC-I / EBC (Annexure-I) | — | **8** | Not modelled in the app. Split set by Personnel Dept memo no. 5162 dated 25.09.2008 (cited in a JCECEB document) |
| ↳ BC-II / BC (Annexure-II) | — | **6** | same |
| EWS | 10 | 10 | Personnel Dept resolution, Feb 2019 |
| OTHERS / UR | 38 | **40** | **The app's categories add up to 98%**, so 38 must be 40 |
| TOTAL reserved | 60 | 60 | |
- **Legal status (as of Oct 2026):** **In force: 60%.** The *Jharkhand Reservation of Vacancies in Posts and Services (Amendment) Bill, 2022* (ST 28, SC 12, EBC 15, BC 12, EWS 10, total 77) **passed the Assembly on 11 Nov 2022** in a special session. It is written to take effect only after inclusion in the Ninth Schedule. Governor Ramesh Bais referred it to the Attorney General, and **Governor C.P. Radhakrishnan returned it to the Assembly in about April 2023** on the AG's advice that it breaches the 50% ceiling. I found no evidence that it was re-passed, reserved for the President or added to the Ninth Schedule (medium confidence; nothing found for 2024–26 beyond the INDIA bloc's 2024 manifesto promise).
- **Notes text issues:** "proposed a 77% reservation bill in **2024**" is wrong: the bill passed in **Nov 2022** and was returned in **Apr 2023**. legalNotes "returned by Governor (2024). Pending presidential assent" contradicts itself and is wrong: the bill was returned, not reserved for the President. `PENDING_APPROVAL` overstates where things stand; the bill is effectively stalled. "Current effective reservation is 60%" and "26% ST" are correct.
- **Population check:** **SC 11.8 is wrong; Census 2011 gives 12.08 (12.1).** ST 26.2 is correct (26.21). OBC 40.0 is an unsupported estimate (Jharkhand has no caste survey), so OTHERS 22.0 is unsupported too.
- **Sources:**
  - https://www.etvbharat.com/english/bharat/jharkhand-assembly-reservation-bill-passed/na20221111122033526526764 — bill passed 11 Nov 2022, with the split
  - https://theprint.in/india/jkhand-raises-reservation-to-77-with-caveat-on-implementing-after-changes-in-constitution/1211571/ — the Ninth Schedule condition
  - https://scroll.in/latest/1047679/jharkhand-governor-returns-bill-proposing-to-increase-reservation-in-state-government-jobs — Governor returned the bill (2023)
  - https://www.drishtiias.com/state-pcs-current-affairs/the-governor-returned-the-bill-seeking-to-increase-reservation — return reported 19 Apr 2023, with the AG's opinion
  - https://jceceb.jharkhand.gov.in/download/1057.pdf — 14% BC = 8% Annexure-I + 6% Annexure-II (Personnel memo 5162, 25.09.2008); EWS memo of 15.02.2019
  - https://jpsc.gov.in/data/Rules_2021.pdf — JPSC rules defining EBC (Annexure-I) and BC (Annexure-II) under the 2001 Act

---

### ODISHA — WRONG  (confidence: high on SC/ST/SEBC, medium on EWS)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 17 | **16.25** | ORV Act, 1975 (state-level posts). The app rounds this up |
| ST | 23 | **22.5** | same |
| OBC (SEBC) | 11 | **11.25** | Orissa Reservation of Posts & Services (SEBC) Act, 2008 says 27%. A Jun 2014 GA resolution caps direct-recruitment SEBC at 11.25% to keep the total at 50% while the litigation is pending |
| EWS | 10 | **0 (not implemented in state posts)** | Medium confidence. OPSC OCS 2025 (Advt. Jan 2026, 465 posts) is split only into UR 193 / SEBC 51 / SC 82 / ST 139. OSSSC CRE 2025–26 tables have only UR/ST/SC/SEBC columns. I found no Odisha EWS Act or GA notification for state posts. One KV circular paraphrases an Odisha order "extending" EWS to direct recruitment, which may refer to certificates for central posts; this is unresolved |
| OTHERS / UR | 39 | **50** | |
| TOTAL reserved | 61 | **50** | |
- **Legal status (as of Oct 2026):** In force: SC 16.25 / ST 22.5 / SEBC 11.25, total 50%. The full 27% SEBC under the 2008 Act stays capped after the Odisha Administrative Tribunal set it aside; the 2014 resolution calls 11.25% an interim figure pending the HC challenge. The **2025–26 changes are for education only**: May 2025 uniform admission quotas ST 22.5 / SC 16.25 / SEBC 11.25, and the 4 Apr 2026 cabinet decision extending them to medical and technical courses from 2026-27. They do not change service quotas. A Sep 2024 ex-Agniveer quota (10% in uniformed services) is horizontal/special and not modelled.
- **Notes text issues:** Generic but not false. It should state the actual 16.25 / 22.5 / 11.25 split, that there is **no EWS in state posts**, and that SEBC is capped at 11.25% (the Act says 27%). The JSON has no legalStatus or legalNotes; consider adding the SEBC cap.
- **Population check:** SC 17.1 and ST 22.8 match Census 2011 (17.13 / 22.85; ST arguably rounds to 22.9). OBC 40.0 is an unsupported estimate (Odisha's OBC commission survey was never officially published).
- **Sources:**
  - https://stsc.odisha.gov.in/sites/default/files/2020-03/Resolution_SEBC_Reservation.pdf — GA resolution: SEBC 11.25%, SC 16.25%, ST 22.5%, 50% cap
  - https://www.indiacode.nic.in/bitstream/123456789/10508/1/orissa_reservation_of_post_for_sebc_act_2008.pdf — SEBC Act 2008
  - https://prsindia.org/files/bills_acts/acts_states/odisha/1975/Act38of1975OD.pdf — ORV (SC/ST) Act 1975
  - https://odisha.gov.in/sites/default/files/2020-02/RESERVED_CATEGORIES.pdf — reserved categories list (official)
  - https://scroll.in/latest/1093295/odisha-enhances-reservation-for-scs-sts-in-medical-technical-courses — Apr 2026 education-only change
  - https://www.indgovtjobs.in/2026/01/opsc-civil-service-notification-2026.html — OCS 2025 category breakup with no EWS (aggregator; confirm against the opsc.gov.in PDF)
  - https://kalingatv.com/odisha/ews-quota-sparks-confusion-as-odisha-increases-reservation-in-medical-engineering/ — EWS position unclear even in education

---

### WEST_BENGAL — WRONG (outdated after May 2026)  (confidence: high)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 22 | 22 | WB SC & ST (Reservation of Vacancies in Services & Posts) Act, 1976 |
| ST | 6 | 6 | same |
| OBC (total) | 17 | **7** | Notification **945-BCW/MR-23/2026 dated 18 May 2026**: a State List of **66 classes** gets 7% in state services and posts |
| ↳ OBC-A | 10 | **— (abolished)** | Calcutta HC struck down the A/B classification on 22 May 2024. The 2025 re-notification (140 classes, A 10% / B 7%) was withdrawn by Notification 944-BCW/MR-23/2026, and the 29 Jun 2026 amendment bills delete the schedules |
| ↳ OBC-B | 7 | **— (abolished)** | same |
| EWS | 10 | 10 | PAR Dept OM 325-PAR(AR)/3P-1/2019, 9 Jul 2019 (cabinet decision 2 Jul 2019) |
| OTHERS / UR | 45 | **55** | |
| TOTAL reserved | 55 | **45** | |
- **Legal status (as of Oct 2026):** Sequence of events:
  1. **22 May 2024:** Calcutta HC (Tapabrata Chakraborty & Rajasekhar Mantha JJ) quashed the OBC status of 77 classes added in 2010–12 (about 5 lakh certificates) and the 2012 Act's A/B split. Only the 66 pre-2010 classes at 7% survived.
  2. **May–Jun 2025:** The TMC government notified a new list of 140 classes (A 10% / B 7%).
  3. **17 Jun 2025:** The HC stayed the new list.
  4. **28 Jul 2025:** The Supreme Court (CJI Gavai) stayed the HC's order as "prima facie erroneous".
  5. **May 2026:** After the change of government (BJP, CM Suvendu Adhikari), the state **withdrew its Supreme Court appeals**, which revived the HC stay. It then issued Notifications 944 (withdrawing the 2025 package) and 945 (66 classes, 7%) on **18 May 2026**.
  6. **29 Jun 2026:** The Assembly passed the WB Backward Classes (Reservation of Vacancies) (Amendment) Bill, 2026 and the WBCBC (Amendment) Bill, 2026, which remove the A/B schedules and leave sub-categorisation to the Commission. I could not confirm Governor's assent.
  7. **1 Oct 2026:** The Supreme Court (Bagchi & Mohana JJ) issued notice on candidates' pleas against the HC's invalidation of 2025-26 OBC certificates. It refused to stay the constable recruitment; appointments are subject to the outcome.

  **In force: SC 22 + ST 6 + OBC 7 + EWS 10 = 45%, under challenge in the Supreme Court.**
- **Notes text issues:** "OBC reservation includes OBC-A and OBC-B sub-categories" is **outdated**. There is no sub-categorisation now, and OBC is a single 7% for 66 classes. The JSON has no legalStatus or legalNotes; add the litigation above (UNDER_CHALLENGE).
- **Population check:** SC 23.5 and ST 5.8 match Census 2011 (23.51 / 5.80). OBC 30.0 is an unsupported estimate.
- **Sources:**
  - https://wbxpress.com/state-list-obc-avail-7-percent-reservation-west-bengal/ — text of Notification 945-BCW/MR-23/2026 (66 classes, 7%)
  - https://www.newsonair.gov.in/west-bengal-government-notifies-list-of-66-obc-classes-following-calcutta-high-court-order/ — AIR report, 20 May 2026
  - https://www.indiatvnews.com/west-bengal/news-west-bengal-reduces-obc-reservation-to-7-66-castes-regularised-in-big-revision-of-quota-list-2026-05-19-1041744 — 17% reduced to 7%
  - https://telanganatoday.com/wb-assembly-passes-bills-to-revamp-obc-reservation-framework — 29 Jun 2026 amendment bills
  - https://www.livelaw.in/top-stories/supreme-court-issues-notice-on-plea-challenging-calcutta-hc-judgment-invalidating-bengal-obc-certificates-issued-in-2025-2026-552636 — Supreme Court notice, Oct 2026
  - https://www.barandbench.com/news/litigation/supreme-court-seeks-west-bengals-reply-on-plea-challenging-invalidation-of-obc-certificates-issued-in-2025-26 — same, including the withdrawal of the state's appeals
  - https://www.newsonair.gov.in/supreme-court-stays-calcutta-high-court-order-halting-bengals-revised-obc-list — Supreme Court, 28 Jul 2025
  - https://www.newsonair.gov.in/calcutta-hc-stays-preparation-of-new-obc-list — HC stay, 17 Jun 2025
  - https://newsonair.gov.in/calcutta-high-court-cancels-all-obc-certificates-given-by-west-bengal-govt-after-2010 — HC ruling, May 2024
  - https://wbxpress.com/reservation-economically-weaker-section-ews/ — EWS OM, 9 Jul 2019
  - https://wbxpress.com/reservation-of-vacancies-in-services-and-posts/ — SC 22% / ST 6% under the 1976 Act
  - https://prb.wb.gov.in/uploads/recruitment/178653063150750.pdf — WBPRB notice applying the 66-class list to the 2024 constable recruitment

---

### ASSAM — WRONG  (confidence: high on EWS abeyance and SC/ST, medium on the OBC internal split)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 7 | 7 | Assam SC & ST (Reservation of Vacancies in Services and Posts) Act, 1978 |
| ST (total) | 15 | 15 | |
| ↳ ST (Plains) | 10 | 10 | |
| ↳ ST (Hills) | 5 | 5 | |
| OBC/MOBC (total) | 27 | 27 | Executive orders: originally 15%, later raised to 27% |
| ↳ Tea Tribes & Adivasi | — | **3** (within the 27) | Not modelled. Originally restricted to Grade III/IV; **extended to Class I/II by cabinet in Feb 2026** |
| ↳ Other OBC/MOBC | — | **24** | Not modelled |
| EWS | 10 | **0 (in abeyance for jobs)** | Personnel Dept OM effective **21 Dec 2022** put the 10% EWS quota in direct recruitment in abeyance; it continues only for education. CM Sarma said it would be revived only after 10% extra posts are created. No restoration found through 2026. The APSC CCE 2025 advertisement (Advt. 01/2026) has columns Open / OBC-MOBC / SC / ST(P) / ST(H) only |
| OTHERS / UR (Open) | 41 | **51** | |
| TOTAL reserved | 59 | **49** | |
- **Legal status (as of Oct 2026):** In force: SC 7, STP 10, STH 5, OBC/MOBC 27 (3% of it for tea tribes and Adivasis), so 49% with EWS suspended. **Pending:** In Nov 2025 the cabinet approved a GoM report recommending ST status for six communities (Ahom, Chutia, Koch-Rajbongshi, Matak, Moran, Tea Tribes) under a new **ST (Valley)** tier. As an interim step it proposed splitting the 27% OBC pool into 7 pro-rata groups. On 29 Jul 2026 the state told the Assembly the proposal awaits the Centre, and a Parliament bill is needed. I found no evidence that the OBC 7-way split was notified (search budget ran out before I could confirm). Ex-Agniveer quotas (12% in police, Oct 2026) are horizontal and not modelled.
- **Notes text issues:** "EWS reservation has been implemented" is **wrong for jobs**: it has been in abeyance since Dec 2022 and applies only to admissions. The text should also mention the ST(P)/ST(H) split, the 3% Tea Tribes/Adivasi sub-quota, and the pending ST-status and OBC sub-categorisation proposals.
- **Population check:** SC 7.2 and ST 12.4 match Census 2011 (7.15 / 12.45). OBC 30.0 is an unsupported estimate; Assam has no official OBC count, and the GoM itself recommended an enumeration.
- **Sources:**
  - https://aasc.assam.gov.in/sites/default/files/swf_utility_folder/departments/aasc_webcomindia_org_oid_4/portlet/level_2/reservation_of_post_and_maintenance_of_roster_0.pdf — official note: SC 7, STP 10, STH 5, OBC/MOBC 15 raised to 27
  - https://scroll.in/latest/1040481/assam-government-holds-10-ews-quota-in-state-government-jobs — EWS jobs quota put in abeyance (Dec 2022)
  - https://www.sentinelassam.com/topheadlines/assam-10-job-reservation-for-economically-weaker-sections-ews-in-direct-recruitment-put-on-hold-629533 — same, with OM details
  - https://www.sentinelassam.com/topheadlines/assam-cm-himanta-biswa-sarma-links-ews-quota-with-creation-of-posts — revival tied to extra posts
  - https://personnel.assam.gov.in/sites/default/files/swf_utility_folder/departments/personnel_webcomindia_org_oid_3/menu/document/abp._07.2019.16_dated_31.12.2019_ews_reservation_for_economically_weaker_sections_ewss_in_posts_and_services.pdf — original 2019 EWS OM, now suspended
  - https://sentinelassam.com/topheadlines/assam-tea-tribe-and-adivasi-quota-restricted-to-grade-iii-and-iv-671048 — 3% Tea Tribes/Adivasi, with 24% for other OBC/MOBC
  - https://www.sentinelassam.com/amp/story/breakingnews/assam-cabinet-approves-3-reservation-for-tea-tribes-adivasis-in-class-i-ii-jobs-himanta — Feb 2026 extension to Class I/II
  - https://assamtribune.com/assam/st-status-for-six-assam-communities-now-awaits-centres-nod-govt-tells-house-1614915 — Jul 2026 status of the six-community ST proposal
  - https://www.sentinelassam.com/amp/story/topheadlines/gom-recommends-a-new-st-category-to-fulfil-six-communities-demandobc-to-be-seven-categories-until-centres-acceptance — GoM proposals

---

### SIKKIM — UNVERIFIED  (confidence: low; only the Census figures were checked)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 7 | not verified | |
| ST (total) | 25 | not verified | Sikkim's ST quota is split into **Bhutia-Lepcha (BL)** and **Limboo-Tamang** (Limboo and Tamang were notified as ST in 2003). The app does not model this split |
| OBC (total) | 24 | not verified | Sikkim splits its backward classes into **MBC (Most Backward Classes)** and **OBC (state list)**. The app does not model this split either |
| EWS | 10 | not verified | I could not establish whether Sikkim applies EWS to state posts |
| OTHERS / UR | 34 | not verified | |
| TOTAL | 66 | not verified | |
- **Legal status (as of Oct 2026):** Not researched. The shared web-search budget ran out before I reached Sikkim, and WebFetch could not reach any host.
- **Notes text issues:** The text names Bhutia-Lepcha but no percentages, and leaves out Limboo-Tamang and MBC. I can't say whether the numbers are consistent with it.
- **Population check:** **SC 5.0 is wrong; Census 2011 gives 4.63 (4.6).** ST 33.8 is correct (33.80). OBC 28.0 is unsupported.
- **Sources:** None verified. Suggested next step: the latest Sikkim PSC (spsc.sikkim.gov.in) or DoP/Personnel Dept recruitment notice with its category table, and the Sikkim Government Gazette notification on reservation in state posts.
