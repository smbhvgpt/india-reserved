> **First-pass research notes (22 Oct 2026).** Kept for provenance and source links. Where these notes disagree with [`../../DATA_AUDIT.md`](../../DATA_AUDIT.md), the audit wins: it reflects a second, adversarial verification pass (see [`../second-pass-verification.md`](../second-pass-verification.md)).

# Fact-check: North & Central India, STATE_SERVICES vertical reservation (as of 2026-10-22)

Jurisdictions: UTTAR_PRADESH, UTTARAKHAND, HIMACHAL_PRADESH, PUNJAB, HARYANA, RAJASTHAN, MADHYA_PRADESH, CHHATTISGARH

**Method and limits.** I used WebSearch only. WebFetch failed with DNS errors (ENOTFOUND) on every domain I tried, including livelaw.in, sci.gov.in, wikipedia.org and freepressjournal.in, and the egress proxy blocked direct curl. So I could not open primary PDFs. Findings rest on search-result excerpts from news, legal and official pages, plus well-established prior knowledge, and I have said which is which. The session's WebSearch budget (shared by all agents) ran out partway through, so **UP and Uttarakhand were not re-verified by search this session**. Their verdicts rest on well-established statute values and are marked as such.

Census 2011 state SC/ST shares used below (Census of India 2011, Primary Census Abstract): UP SC 20.70 / ST 0.57; Uttarakhand 18.76 / 2.89; HP 25.19 / 5.71; Punjab 31.94 / 0; Haryana 20.17 / 0; Rajasthan 17.83 / 13.48; MP 15.62 / 21.09; Chhattisgarh 12.82 / 30.62. These are from memory (high confidence); they were not re-fetched this session.

Across all eight states, `populationPercent` for OBC has no official basis. No caste census of OBCs has been published since 1931, and Census-2027 caste data has not been released. Every OBC population figure in the app is an estimate and should be labelled that way. The OTHERS population is a residual of that estimate.

---

### CHHATTISGARH — WRONG  (confidence: high on the numbers, medium on the EWS non-implementation)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 13 | **12** | The operative 58% scheme (2011 amendment Act, applied from 2012) gives SC 12%. The 13% figure comes from the Dec-2022 76% bill, which never received assent. |
| ST | 32 | 32 | Correct. |
| OBC | 14 | 14 | Correct. |
| EWS | 10 | **0 (not implemented)** | The 2019 ordinance with EWS 10% lapsed. The Dec-2022 bill's 4% EWS has no assent. A Centre reply in Lok Sabha says EWS reservation "has not been implemented" in CG state services, and a 2025 HC writ seeks implementation. |
| OTHERS | 31 | **42** | |
| TOTAL reserved | 69 | **58** | 32 + 12 + 14. |
- **Legal status (as of Oct 2026).** The Bilaspur HC struck down the 2012 58% scheme on 19 Sep 2022 for breaching the 50% ceiling. The Assembly passed two amendment bills on 2 Dec 2022 (ST 32, SC 13, OBC 27, EWS 4, total 76%). Governor Anusuiya Uikey withheld assent, and I found no report of assent since. On 1 May 2023 the Supreme Court (Gavai, Vikram Nath, Karol JJ) stayed the HC judgment and gave interim protection to the 58% policy. Recruitments continue subject to the final outcome. I found no final SC verdict, so the scheme is **in force under the SC interim order and still sub judice**. The SC's 19 Feb 2026 order in the MP batch refers to this CG interim order as still operative. The 10% ex-Agniveer quota (2026, Class-III police/forest/jail posts) is horizontal and not relevant to the model.
- **Notes text issues.** "58% total" is correct for the operative scheme, but the data adds up to 69%, so notes and data contradict each other. The notes should mention that the HC struck the scheme down in 2022, that the SC stay of May 2023 keeps it alive, that the 76% bill is pending assent, and that there is no EWS.
- **Population check (Census 2011 SC/ST).** SC 12.8 and ST 30.6 match (12.82 / 30.62). OBC 45 is unsupported. The state's 2019–20 Quantifiable Data Commission produced an estimate, but I could not verify its figure.
- **Sources.**
  - https://www.livelaw.in/amp/top-stories/supreme-court-chattisgarh-government-stay-high-court-hc-order-striking-down-fifty-eight-per-cent-reservation-policy-227698 — SC interim order of 1 May 2023 protecting 58% (SC 12 / ST 32 / OBC 14).
  - https://thewire.in/law/chhattisgarh-58-percent-reservation-supreme-court — same order.
  - https://www.thehitavada.com/Encyc/2022/9/20/Reservation-above-50-is-unconstitutional-HC.html — HC judgment of 19 Sep 2022.
  - https://www.business-standard.com/india-news/caste-census-chhattisgarh-guv-sitting-on-bill-that-raises-quota-bar-to-76-123042300249_1.html — 76% bill (ST 32 / SC 13 / OBC 27 / EWS 4) awaiting Governor's assent.
  - https://www.devdiscourse.com/article/law-order/3960116-centre-says-no-change-planned-to-ews-reservation-policy — Centre's Lok Sabha reply that EWS is not implemented in CG state services (I could not pin down the exact date).
  - https://thesootr.com/state/chhattisgarh/chhattisgarh-high-court-sought-response-from-the-government-on-ews-reservation-9304698 — 2025 HC petition seeking EWS implementation.
  - https://www.livelaw.in/news-updates/hc-cant-direct-state-to-enforce-ordinance-for-ews-reservation-in-psc-examination-chhattisgarh-hc-read-judgment-152656 — HC refused to enforce the lapsed EWS ordinance in a PSC exam.
  - https://www.barandbench.com/news/mockery-of-the-process-chhattisgarh-hc-berates-govt-move-to-take-reservation-to-82-obc-quota-increase-put-on-hold — Oct 2019 stay of the 82% ordinance.

---

### MADHYA_PRADESH — MINOR ISSUES  (confidence: medium; the litigation is live and the SLP was filed 16 Oct 2026)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 16 | 16 | Correct. |
| ST | 20 | 20 | Correct. |
| OBC | 14 | **14 (currently)** | The 2019 Amendment Act raising OBC to 27% was **struck down by the MP HC on 9 Oct 2026** (Ashita Dubey v. State of MP, DB). The court upheld 14% and the 50% ceiling. The State filed an SLP in the SC on 16 Oct 2026, and I found no stay. Before that, the 87:13 formula (GAD circular, 29 Sep 2022) recruited 14% OBC and held 13% of posts. The HC ordered those held posts filled **from the unreserved category within 3 months**. ETV Bharat reports the govt may keep 27% for recruitments already under way. |
| EWS | 10 | 10 | Implemented since 2019. A MP HC ruling on how the EWS quota applies to vacancies confirms it is operative. |
| OTHERS | 40 | 40 | Consistent with 14% OBC. It would be 30 if 27% is ever restored. |
| TOTAL reserved | 60 | 60 (73 if the SC restores 27% OBC) | |
- **Legal status (as of Oct 2026).** OBC was raised to 27% by an ordinance of 8 Mar 2019 and an Act of July/Aug 2019. The HC stayed it for several categories from 2019, and the 87:13 interim formula followed from 2022. On 19 Feb 2026 the SC remanded the batch to the MP HC to decide within 3 months. The HC decided on **9 Oct 2026, striking down 27% and restoring 14%**. The SLP (State of MP v. Ashita Dubey) was filed 16–17 Oct 2026. **Under challenge, with no stay reported.** Reports conflict on whether appointments already made above 14% (before 29 Sep 2022) are protected. The app should flag this as fluid.
- **Notes text issues.** "63% total ... including EWS" is wrong on every reading. The total is 60% including EWS under current law. It would be 63% *excluding* EWS, or 73% including EWS, only if 27% OBC applied. The notes should describe the 27%-versus-14% dispute, the 9 Oct 2026 HC judgment and the pending SLP.
- **Population check (Census 2011 SC/ST).** SC 15.6 and ST 21.1 match (15.62 / 21.09). OBC 41 is unsupported. In the litigation the state has claimed OBCs are about half the population, roughly 48–51% (I could not verify the exact figure), so 41 is low against the state's own claims.
- **Sources.**
  - https://www.etvbharat.com/en/state/jabalpur-high-court-decision-madhya-pradesh-27-percent-obc-reservation-not-implemented-enn26100906008 — HC verdict of 9 Oct 2026.
  - https://www.thestatesman.com/india/mp-high-court-strikes-down-increase-in-obc-reservation-from-14-pc-to-27-pc-1503649287.html — same.
  - https://lawbeat.in/amp/news-updates/madhya-pradesh-hc-strikes-down-27-obc-reservation-restores-14-quota-1640154 — same, with detail on protected appointments.
  - https://dailypioneer.com/news/mp-hc-quashes-27-obc-quota-restores-14-cap — bench, the 13% held posts to be filled from UR within 3 months, and the 50% ceiling reasoning.
  - https://www.freepressjournal.in/bhopal/madhya-pradesh-government-moves-supreme-court-against-high-court-verdict-scrapping-27-obc-reservation-files-special-leave-petition — SLP of 16 Oct 2026.
  - https://indianmasterminds.com/news/mp-cm-mohan-yadav-obc-leaders-supreme-court-plea-243350/ — SLP title.
  - https://www.livelaw.in/top-stories/supreme-court-asks-madhya-pradesh-high-court-to-decide-challenge-to-27-obc-quota-in-3-months-524066 and https://api.sci.gov.in/supremecourt/2022/30748/30748_2022_6_101_68712_FinalOrder_19-Feb-2026.pdf — SC remand of 19 Feb 2026.
  - https://www.deccanherald.com/amp/story/india%2Fmadhya-pradesh%2F10-ews-quota-applicable-only-for-vacant-posts-in-general-category-madhya-pradesh-hc-3010789 — EWS operative in MP.

---

### RAJASTHAN — WRONG  (confidence: high)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 16 | 16 | Correct. |
| ST | 12 | 12 | Correct, outside Scheduled Areas (see TSP below). |
| OBC | 21 | 21 | Correct. MBC castes may also compete in the 21% OBC pool (Department of Personnel order, July 2019). |
| **MBC (unmodelled)** | — (missing) | **5** | Most Backward Classes: Gujjar/Gurjar, Banjara/Baldia/Labana, Gadia-Lohar, Raika/Rebari, Gadaria. Raised from 1% to 5% by the Rajasthan Backward Classes (Reservation...) (Amendment) Act, Feb 2019. It is applied in RPSC/RSMSSB recruitment, and in 2023 the HC sought an explanation where it was skipped. **The app's model cannot show this.** Add an MBC category or sub-category. |
| EWS | 10 | 10 | Implemented 2019. |
| OTHERS | 41 | **36** | |
| TOTAL reserved | 59 | **64** | 16 + 12 + 21 + 5 + 10. |
- **Legal status (as of Oct 2026).** The 2019 MBC Act is in force. A PIL in the Rajasthan HC challenges it for breaching the 50% ceiling, and I found no final judgment. One report says the SC declined to interfere with the HC's refusal of interim relief in April 2019. The MBC 5% is not in the Ninth Schedule, which the Gujjar groups continue to demand. **In force but under challenge.** In TSP/Scheduled Areas a separate roster applies (ST-heavy, about ST 45 / SC 5 by my recollection, medium confidence). In Mar 2026 Gujjar leaders demanded OBC/MBC/EWS quotas there, which confirms those quotas do not apply in TSP areas.
- **Notes text issues.** "50% reservation ... within the constitutional limit plus EWS" is wrong. Caste-based vertical reservation is SC 16 + ST 12 + OBC 21 + MBC 5 = **54%**, already above 50% before EWS, and the total is 64%. "Sub-categorization exists within OBC" is only loosely right. MBC is a separate reserved category under the same Backward Classes Act, not a split of the 21%. The notes should mention MBC 5%, the 64% total and the TSP exception.
- **Population check (Census 2011 SC/ST).** SC 17.8 matches (17.83). ST 13.4 should be **13.5** (13.48 rounds up), a minor fix. OBC 36 is unsupported.
- **Sources.**
  - https://www.pressreader.com/india/hindustan-times-chandigarh/20190214/281977493884896 — HT, 14 Feb 2019: bill passed giving 5% MBC.
  - https://indialegallive.com/top-news-of-the-day/legal-eye-articles/5-percent-reservation-to-gujjars-bumpy-road-ahead/ — legal background and the April 2019 SC position.
  - https://livelaw.in/news-updates/rajasthan-hc-makes-history-146960 — HC hearing of the MBC quota challenge.
  - https://www.etvbharat.com/hindi/rajasthan/state/jaipur/rajasthan-high-court-sought-answers-from-education-secretary-for-not-giving-five-percent-reservation-to-mbc-in-special-teacher-recruitment-2022/rj20231103205454770770896 — Nov 2023: HC enforcing MBC 5% in a teacher recruitment, which shows it is operative.
  - https://www.aajtak.in/india/rajasthan/story/rajasthan-ashok-gehlot-5-percent-reservation-for-obc-in-judicial-service-1107425-2020-08-02 — MBC 5% extended to the Rajasthan Judicial Service in 2020.
  - https://hindinews.careers360.com/demand-for-implementation-of-obc-mbc-ews-reservation-in-rajasthan-tsp-areas-letter-to-cm — Mar 2026: no OBC/MBC/EWS reservation in TSP areas.
  - Recommended primary source, not opened: the Rajasthan Backward Classes (Reservation of Seats in Educational Institutions in the State and of Appointments and Posts in Services under the State) Act, 2008, as amended by the 2019 Amendment Act (Rajasthan Gazette, Feb 2019).

---

### HIMACHAL_PRADESH — WRONG  (confidence: medium; the corroborating source is unofficial, the official circular could not be opened, and the figures match my prior knowledge)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 25 | **22** (Class III/IV) / **15** (Class I/II) | State rates differ by class of post. 25 appears to be the population share, and it matches the central DoPT localized Group C/D table for HP, not state services. |
| ST | 5 | 5 (III/IV) / 7.5 (I/II) | Correct for Class III/IV. |
| OBC | 20 | **18** (III/IV) / **12** (I/II) | 20 looks like the central DoPT figure, not the state's. |
| EWS | 10 | 10 | Confirmed. The HP Department of Personnel lists the EWS 10% order for Class I–IV direct recruitment (from Jan 2019) and a circular dated 30 Jun 2026. |
| OTHERS | 40 | **45** (III/IV) / 55.5 (I/II) | |
| TOTAL reserved | 60 | **55** (Group C/D) / 44.5 (Group A/B) | Suggest modelling Class III/IV (the bulk of recruitment) and noting the I/II split. |
- **Legal status (as of Oct 2026).** In force. I found no live challenge to the percentages. EWS has been in force since Jan 2019, with a fresh circular on 30 Jun 2026.
- **Notes text issues.** "Within the 50% limit" is correct for SC + ST + OBC (45% / 34.5%). "EWS quota has been implemented" is correct. The notes should say the rates differ by class of post.
- **Population check (Census 2011 SC/ST).** SC 25.2 and ST 5.7 match (25.19 / 5.71). OBC 22 is unsupported. The app appears to have copied population-like figures into `reservationPercent` for SC and OBC.
- **Sources.**
  - https://himachal.nic.in/personnel/Content/MenuFormContent?qs=DTWr7vJt8mOS6YWzw6KvpA1luCrgbZ6l — HP Department of Personnel reservation page (official), with the EWS 10% orders and the 30 Jun 2026 circular. Best link to cite.
  - https://snowstudy.in/all-category-wise-reservations-details-in-himachal-pradesh-sc-st-obc-ews-general-by-percentage/ — unofficial: SC 22/15, ST 5/7.5, OBC 18/12. Agrees with my prior knowledge, but should be confirmed against the official page.
  - https://dtf.in/wp-content/files/DoPT_O.M._dated_11.08.2026-Reservation_for_SCs_STs_OBCs_PwDs_EWS_and_Ex-Servicemen_in_Posts_and_Services_in_Central_Government.pdf — DoPT central table. The HP row (about 25 / ~4 / 20) is for **central** localized recruitment and is the likely source of the app's error.

---

### HARYANA — MINOR ISSUES  (confidence: high for SC/DSC/OSC and Group C/D BC; low for current Group A/B BC)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 20 | 20 | Correct. |
| ↳ DSC | 10 | 10 | Notification No. 22/63/2024-5HR-III dated **13 Nov 2024**, after the cabinet decision of 18 Oct 2024. Applies to direct recruitment, with each half falling back to the other if no candidates are available. |
| ↳ OSC | 10 | 10 | Correct. |
| ST | 0 | 0 | No notified STs. |
| OBC (BC) | 27 (no subcats) | 27 for Group C/D | **Missing sub-categories: BC-A 16%, BC-B 11%** (Group C/D). For **Group A/B** the long-standing rate is 15% (BC-A 10 + BC-B 5); some sources give 11/6 under the 2016 Act. CM Saini announced a rise to 27% in June 2024, but a later Tribune report calls it "under consideration", and I found **no notification**. |
| EWS | 10 | 10 | Implemented Feb 2019. HPSC/HSSC advertisements carry SC (DSC/OSC), BCA, BCB and EWS columns. |
| OTHERS | 43 | 43 (Group C/D) | Would be 55 for Group A/B if BC there is 15%. |
| TOTAL reserved | 57 | 57 (Group C/D) | |
- **Legal status (as of Oct 2026).** DSC/OSC is in force since 13 Nov 2024 and backed by the SC's 7-judge ruling of 1 Aug 2024 (State of Punjab v. Davinder Singh). I found no stay. BC-A/BC-B is in force. The 2016 Act's BC-C (Jats and five other castes) was stayed by the P&H HC in 2016, and Jats are not currently in the state BC list. The Group A/B BC hike is announced but unconfirmed. Separately, an HR Department instruction of 3 Aug 2026 pauses **promotion** quota for SCs in Group A/B pending a HC decision. That is promotion, not direct recruitment.
- **Notes text issues.** The Jat-quota remark is accurate history but stale. The notes should mention the DSC/OSC sub-classification, the BC-A/BC-B split, and that the Group A/B BC rate is lower (15%), with the 27% hike announced but not confirmed.
- **Population check (Census 2011 SC/ST).** SC 20.2 matches (20.17), and ST 0 is correct. OBC 28 is unsupported.
- **Sources.**
  - https://gjust.ac.in/portal/upload/Announcement-Notice_17July2025_14-23-11-62.pdf — cites the DSC/OSC notification of 13.11.2024.
  - https://luvas.edu.in/downloads/nimages/Announcements/Corrigendum_to_advt-_No-1-2023_(Non-Teaching).pdf — SC posts split into DSC/OSC.
  - https://www.business-standard.com/politics/saini-led-haryana-govt-implements-sub-classification-of-scheduled-castes-124101801217_1.html — cabinet decision of 18 Oct 2024.
  - https://scroll.in/latest/1074664/haryana-to-implement-sub-classification-of-scheduled-castes-for-quotas — same.
  - https://theprint.in/politics/how-haryana-quota-for-backward-class-sub-category-in-municipal-polls-could-help-bjp-in-2024/1567881/ — BC-A 16 / BC-B 11 for Group C/D; 10 / 5 for Group A/B.
  - https://www.tribuneindia.com/news/haryana/backward-classes-quota-increased-to-27-in-haryana-633548 — June 2024 announcement (Group A/B 15 → 27).
  - https://www.tribuneindia.com/news/haryana/hike-in-quota-for-haryana-groups-a-b-posts-under-consideration/amp/ — hike "under consideration".
  - https://www.pressreader.com/india/hindustan-times-chandigarh/20190214/281646781403104 — EWS implemented Feb 2019.
  - https://hssc.gov.in/file/45b28967-4c0a-11f0-a79d-0a499e779f6d/advertisements — current recruitment categories.

---

### PUNJAB — CORRECT (one optional enhancement)  (confidence: high)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 25 | 25 | Punjab SC & BC (Reservation in Services) Act 2006, s.4(2), direct recruitment in Groups A–D. |
| ↳ (optional) Balmiki & Mazhabi Sikh | — | 12.5 (first preference) | S.4(5): 50% of SC direct-recruitment vacancies go to Balmikis and Mazhabi Sikhs as first preference. Upheld by the SC's 7-judge bench on 1 Aug 2024 (Davinder Singh). This is a preference rather than a strict ring-fence, so it would be modelled as a sub-category with a note. |
| ST | 0 | 0 | No notified STs. |
| OBC (BC) | 12 | 12 | S.4(2), a uniform 12% for Groups A–D. |
| EWS | 10 | 10 | Implemented through the Department of Social Justice, Empowerment & Minorities (Reservation Cell) letter No. 1/3/2019-RC1/700 dated 30 Oct 2020, applied in PPSC and Punjab Police advertisements. Note: Punjab has **not** adopted EWS in state educational institutions (P&H HC, 2025), but that is outside this model. |
| OTHERS | 53 | 53 | |
| TOTAL reserved | 47 | 47 | |
- **Legal status (as of Oct 2026).** In force. The s.4(5) sub-classification was revived and validated by the SC on 1 Aug 2024. Demands to raise BC to 27% (SAD–BSP 2021 promise, BC Commission) have not been acted on.
- **Notes text issues.** Accurate. Punjab actually has the *highest* SC share of any state (31.9%), so "one of the highest" understates it. The notes could add the Balmiki/Mazhabi first preference and the SC 14% promotion quota in Group A/B (s.4(3)).
- **Population check (Census 2011 SC/ST).** SC 31.9 matches (31.94), and ST 0 is correct. OBC 25 is unsupported; political claims run to about 35%.
- **Sources.**
  - https://www.indiacode.nic.in/bitstream/123456789/8396/1/reservationinservicesact2006.pdf — Act text: s.4(2) SC 25 / BC 12, s.4(5) first preference.
  - https://prsindia.org/files/bills_acts/acts_states/punjab/2006/2006PB22.pdf — same Act.
  - https://recordoflaw.in/state-of-punjab-ors-v-davinder-singh-ors-2/ — SC judgment of 1 Aug 2024, State of Punjab v. Davinder Singh.
  - https://cdn-images.prepp.in/public/image/7a51b4be2333f25b3c2e1cfc98be61d1.pdf — Punjab Police SI advertisement citing the EWS letter of 30.10.2020.
  - https://www.dakpad.com/2025/02/Reservation%20for%20Economically%20Weaker%20Sections%20EWSs.html — EWS Reservation Cell letter of 07.02.2025.
  - https://drishtiias.com/pdf/1738060612_PPSC%20Official%20Notification.pdf — PPSC PCS 2025 notification.

---

### UTTAR_PRADESH — CORRECT  (confidence: high on statute values, not re-verified by search this session because the budget ran out)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 21 | 21 | UP Public Services (Reservation for SC, ST and OBC) Act, 1994, s.3(1). |
| ST | 2 | 2 | Same Act. |
| OBC | 27 | 27 | Same Act. The 2018 Social Justice Committee proposed splitting OBC into three tiers (about 7/11/9); this was **not implemented**. |
| EWS | 10 | 10 | GO of Feb 2019, then the UP Public Services (Reservation for EWS) Act, 2020. |
| OTHERS | 40 | 40 | |
| TOTAL reserved | 60 | 60 | |
- **Legal status (as of Oct 2026).** In force. The litigation over the 69,000 Assistant Teacher recruitment is about how reservation was *applied* (Allahabad HC 2024, appeal in the SC), not the percentages.
- **Notes text issues.** "50% reservation plus EWS" is accurate (21 + 2 + 27 = 50). The "large OBC population" claim is fine but unquantified.
- **Population check (Census 2011 SC/ST).** SC should be **20.7**, not 21.0 (20.70%), a minor fix. ST 0.6 matches (0.57). OBC 45 is unsupported, and estimates vary widely.
- **Sources (recommended, not opened this session).**
  - UP Act No. 4 of 1994 (UP Public Services (Reservation for SC, ST and OBC) Act, 1994), available via indiacode.nic.in or the UP Karmik (Personnel) Department.
  - The UP EWS Act 2020 / Karmik GO of Feb 2019.
  - Current UPPSC advertisements (uppsc.up.nic.in) list SC 21 / ST 2 / OBC 27 / EWS 10.

---

### UTTARAKHAND — CORRECT  (confidence: medium-high; statute values from prior knowledge, with EWS implementation confirmed by search)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 19 | 19 | Uttarakhand rates set after the state's formation (adapted UP Act 1994, as amended 2001–02). |
| ST | 4 | 4 | Correct. |
| OBC | 14 | 14 | Correct. |
| EWS | 10 | 10 | Uttarakhand is in the Centre's Lok Sabha list of states that implemented the 10% EWS quota. |
| OTHERS | 53 | 53 | |
| TOTAL reserved | 47 | 47 | |
- **Legal status (as of Oct 2026).** In force. Horizontal (not vertical) quotas also apply: 30% for domicile women (2022 Act) and 10% for state agitationists (Act assented in 2024, medium confidence). Neither is needed in this model, but the notes could mention them.
- **Notes text issues.** Accurate (37% caste-based, within 50%, plus EWS).
- **Population check (Census 2011 SC/ST).** SC 18.8 and ST 2.9 match (18.76 / 2.89). OBC 18 is unsupported.
- **Sources.**
  - https://www.dinamalar.com/amp/news/kalvimalar-news-en/12-states-uts-have-implemented-10-pc-reservation-to-economically-weaker-sections-govt/41077 — Centre's Lok Sabha reply listing Uttarakhand among EWS implementers.
  - Recommended but not opened: UKPSC/UKSSSC advertisements (psc.uk.gov.in), which show SC 19 / ST 4 / OBC 14 / EWS 10, and the Uttarakhand Karmik (Personnel) Department reservation orders.

---

## Cross-cutting recommendations
1. **Model gap.** The app needs a way to show extra vertical categories, at minimum Rajasthan **MBC 5%**. It should also show post-class splits (HP Class I/II vs III/IV; Haryana BC in Group A/B vs C/D), or at least state which class the figures cover. Without this, Rajasthan's total is under-reported by 5 points.
2. **Pending or contested statuses** should go in `legalStatus`/`legalNotes`:
   - MP: 27% OBC struck down on 9 Oct 2026; SLP filed 16 Oct 2026; no stay found.
   - CG: 58% under the SC interim order of 1 May 2023; 76% bill unassented; no EWS.
   - Rajasthan: MBC Act in force, PIL pending.
   - Haryana: Group A/B BC hike announced, not notified.
3. **`lastUpdated: 2024-01-01`** is stale for MP (Oct 2026), Haryana (Nov 2024), Punjab (Aug 2024 SC ruling) and HP (EWS circular June 2026).
