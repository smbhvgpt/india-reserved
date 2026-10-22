> **First-pass research notes (22 Oct 2026).** Kept for provenance and source links. Where these notes disagree with [`../../DATA_AUDIT.md`](../../DATA_AUDIT.md), the audit wins: it reflects a second, adversarial verification pass (see [`../second-pass-verification.md`](../second-pass-verification.md)).

# Verification: South & West jurisdictions (STATE_SERVICES vertical reservation)

Checked against `src/data/reservationData.json` (read-only). As-of date: 2026-10-22.

**Method and limits (please read):**
- WebFetch could not be used. The agent proxy refused every news, government and Wikipedia host (DNS failure or CONNECT 403). All verification relies on WebSearch result summaries and snippets, which give headlines, dates and quoted extracts, plus my background knowledge, marked as such.
- The shared WebSearch budget (200 per turn) ran out before two Maharashtra follow-ups: SC sub-classification and the status of the 2025 Hyderabad Gazette GR. Those items are marked UNVERIFIED.
- Confidence labels reflect these limits. Where a search snippet and my background knowledge agree, I mark it high.

---

### ANDHRA_PRADESH — MINOR ISSUES  (confidence: high)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 15 | 15 | Since 17 Apr 2025 it is sub-classified: **Group I 1%** (12 castes, Relli group), **Group II 6.5%** (18 castes, Madiga group), **Group III 7.5%** (29 castes, Mala group). The app has no SC sub-categories. |
| ST | 6 | 6 | Correct. |
| OBC (BC) | 29 | 29 | Correct. |
| ↳ BC-A | 7 | 7 | OK |
| ↳ BC-B | 10 | 10 | OK |
| ↳ BC-C | 1 | 1 | OK (SC converts to Christianity) |
| ↳ BC-D | 7 | 7 | OK |
| ↳ BC-E | 4 | 4 | OK. The 2007 Muslim BC-E Act was struck down by the AP High Court in 2010. It still runs under an SC interim order from Mar 2010, and the appeals are pending (background knowledge, med). |
| EWS | 10 | 10 | Implemented by **G.O.Ms.No.66 GAD, 14-07-2021** and **G.O.Ms.No.73, 04-08-2021** (amends Rule 22 of the AP State & Subordinate Service Rules). It is expressly subject to pending HC/SC litigation. Kapus fall under the general EWS. The TDP-era 2019 law carving out a 5% Kapu sub-quota was never implemented and is sub judice. |
| TOTAL | 60 | 60 | Correct. |
- Legal status (as of Oct 2026): In force. The SC sub-classification began as Ordinance No. 2 of 2025 (17 Apr 2025). It was replaced by the **AP Scheduled Castes (Sub-Classification) Act, 2025 (Act 22 of 2025)**, gazetted 24 Oct 2025 and deemed in force from 17 Apr 2025. Rules came by G.O.Ms.No.7 (Social Welfare) of 18 Apr 2025, and direct-recruitment rules were amended by G.O.Ms.No.46 (GAD) of 19 Apr 2025. I found no court stay. EWS remains subject to the outcome of pending petitions.
- Notes text issues: The "approximately 60%" figure and the BC-A to BC-E description are accurate. The notes should add the 2025 three-group SC sub-classification. The source link (apbcmahasamakhya.com) is not an official site.
- Population check (Census 2011 SC/ST): The SC figure of 17.1 matches residual-AP Census 2011 (**17.08%**). **ST 7.0 is wrong for today's AP.** 7.0% is the figure for undivided AP. Residual AP, after the 2014 bifurcation and the Polavaram mandal transfer, is **5.53%** (27.39 lakh). That figure comes from secondary sources and matches my own arithmetic: undivided 7.00% minus Telangana 9.08%. Confidence: med-high. OBC 48% has no official basis. As far as I know, no AP caste-survey results have been officially published (low confidence).
- Sources:
  - https://prsindia.org/files/bills_acts/acts_states/andhra-pradesh/2025/Act22of2025AP.pdf — AP SC (Sub-Classification) Act 22 of 2025, with the 1% / 6.5% / 7.5% split and the 17-04-2025 effective date.
  - https://dsnlu.ac.in/storage/2026/02/3.-SC-SUB-Classification-GO.MS_.No_.46-Dt-19-4-2025-Direct-Recruitment.pdf — G.O.Ms.No.46 GAD, 19-04-2025 (direct recruitment).
  - https://aphc.gov.in/docs/6609092021.pdf — G.O.Ms.No.66, 14-07-2021 (EWS 10% in initial appointments).
  - https://aphc.gov.in/docs/7309092021.pdf — G.O.Ms.No.73, 04-08-2021 (Rule 22 amendment).
  - https://scroll.in/latest/1081463/andhra-pradesh-issues-ordinance-to-notify-sub-categorisation-of-scheduled-castes — ordinance news.
  - https://www.thenewsminute.com/andhra-pradesh/ap-implement-10-quota-ews-including-kapus-education-and-govt-jobs-152390 — EWS and Kapu status.
  - https://vajiramandravi.com/current-affairs/tribes-of-andhra-pradesh/ — ST 27.39 lakh / 5.53% (secondary source).

### TELANGANA — MINOR ISSUES  (confidence: high)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 15 | 15 | Sub-classified from **14 Apr 2025**: **Group I 1%** (15 castes), **Group II 9%** (18 castes, incl. Madiga), **Group III 5%** (26 castes, incl. Mala). This is under the Telangana Scheduled Castes (Rationalisation of Reservations) Act, 2025, with Governor's assent on 8 Apr 2025. The app has no SC sub-categories. |
| ST | 10 | 10 | Raised from 6% to 10% by **G.O.Ms.No.33, Tribal Welfare Dept, 30-09-2022**, with immediate effect. Challenged in the Telangana HC, which issued notice in 2024. I found no final ruling (pending, med confidence). |
| OBC (BC) | 29 | 29 | The app has no sub-categories. Telangana has the same groups as AP: **BC-A 7, BC-B 10, BC-C 1, BC-D 7, BC-E 4** (background knowledge, high). |
| EWS | 10 | 10 | Announced in Feb 2021. Consolidated guidelines in **G.O.Ms.No.244, 24-08-2021**, with amendments to the TS State & Subordinate Service Rules, 1996. |
| (Pending) BC 42% | — | not in force | The BC reservation Bills for education/employment and local bodies (raising BC to 42%) were passed in Mar 2025 and reserved for the President on 30 Mar 2025. A Feb 2026 Lok Sabha reply said they were "under examination". **No assent found** as of my searches. Separately, the GO for 42% BC in local bodies (Sept 2025) was stayed by the HC, and the SC dismissed the state's plea on 16 Oct 2025 (secondary snippet, med). |
| TOTAL | 64 | 64 | The data is right, but the **notes say "around 62%"**, which is wrong. |
- Legal status (as of Oct 2026): SC 15 (sub-classified), ST 10, BC 29 and EWS 10 are in force. The ST 10% GO is under HC challenge with no stay found. The 42% BC Bills are pending Presidential assent.
- Notes text issues: The total should be **64%, not ~62%**. The notes should also mention the 2022 ST increase, the 2025 SC sub-classification, and the pending 42% BC Bills.
- Population check (Census 2011 SC/ST): SC 15.5 matches **15.45%**. ST 9.3 is slightly high; post-2014 Telangana is **9.08%** (9.34% is a pre-mandal-transfer figure). The **2024 Telangana caste survey (SEEEPC)** gives BC **56.33%** (incl. BC Muslims 10.08%), SC **17.43%**, ST **10.45%** and OC 15.79% (incl. OC Muslims 2.48%). The app's OBC 48% understates the survey figure.
- Sources:
  - https://scroll.in/latest/1081341/telangana-becomes-first-state-to-implement-scheduled-castes-sub-categorisation — SC 1/9/5 split, effective 14-04-2025.
  - https://thesouthfirst.com/news/historic-day-for-madigas-sub-categorisation-of-scheduled-castes-comes-into-effect-in-telangana — same, with the gazette date.
  - https://www.thenewsminute.com/article/telangana-govt-enhances-st-reservation-6-10-immediate-effect-168474 — GO 33, ST 10%.
  - https://deccanchronicle.com/legalnews/enhancing-quota-to-sts-hc-issues-notices-to-govt-892493 — HC challenge to GO 33.
  - https://tgche.ac.in/pdfs/imp/GOMsNo244.pdf — G.O.Ms.No.244 (EWS).
  - https://news.careers360.com/telangana-assembly-passes-bills-increase-bc-reservation-42-per-cent-education-employment-elections — 42% BC Bills.
  - https://ntvtelugu.com/telangana-news/telangana-bc-reservations-hike-42-percent-bills-pending-president-approval-934080.html — Bills pending with the President (Feb 2026).
  - https://thesouthfirst.com/telangana/telangana-releases-caste-survey-reveals-bcs-make-up-56-of-states-population/ — 2024 caste survey figures.
  - https://www.theindiaforum.in/caste/telangana-caste-survey-overview — survey overview.

### KARNATAKA — WRONG  (confidence: high)
| Category | App says | Verified (operative Oct 2026) | Note |
|---|---|---|---|
| SC | 17 | **15** | The 2022 Act raised SC from 15% to 17%. The HC barred fresh recruitment under it from 27 Nov 2025, and on 24 Apr 2026 the Cabinet recalibrated SC to 15%. On **12 Oct 2026 the Karnataka HC struck down the hike**. The state plans an SLP. The internal SC split within 15% (Apr 2026) is **5.25% Left/Madiga group, 5.25% Right/Holeya group, 4.5% Bhovi/Lambani/Korama/Korcha and 59 nomadic communities**. It replaced the Aug 2025 split of 6/6/5 within 17%. |
| ST | 7 | **3** | Struck down the same way; the 3% to 7% hike is invalid. |
| OBC | 32 | 32 | Correct. Since Apr 2023 the SC-recorded assurance keeps the old structure (2B intact). The Mar 2023 order scrapping 2B and creating 2C (Vokkaliga 6%) and 2D (Lingayat 7%) is not implemented and is pending in the SC. |
| ↳ Cat 1 | 4 | 4 | Percentage OK. I could not verify the "Nayinda, Besta" description (low confidence). |
| ↳ Cat 2A | 15 | 15 | Percentage OK. **The description is wrong: Vokkaliga is not in 2A.** 2A covers Kuruba, Idiga and other artisan/service castes. |
| ↳ Cat 2B | 4 | 4 | OK (Muslims). |
| ↳ Cat 3A | 4 | 4 | **Swapped.** 3A is **Vokkaliga** and allied communities, not Lingayat. |
| ↳ Cat 3B | 5 | 5 | **Swapped/wrong.** 3B is **Veerashaiva-Lingayat**, plus Maratha, Bunt, Christians and Jains. "Brahmin converts" is unsupported. Christians in 3B are confirmed by a 2025 report; the other members are med confidence. |
| EWS | 10 | **0** | **Not implemented in Karnataka state services.** The DPAR roster order of 3 Sep 2025 set **SC 17, ST 7, OBC 32, General Merit 44**, with no EWS. A 2024 PIL in the HC seeking EWS is pending. |
| TOTAL | 66 | **50** | 56 under the 2022 Act from Dec 2022 to Oct 2026, now struck down. The app's 66 was never correct. OTHERS/General should be **50**. |
- Legal status (as of Oct 2026):
  - **Mahendra Kumar Mitra v. Union of India, WP 200448/2025, Karnataka HC (CJ Vibhu Bakhru & Justice K.S. Hemalekha), 12 Oct 2026.** The court struck down Sections 3 and 4 of the Karnataka SC/ST (Reservation…) Act, 2022 for breaching the 50% ceiling and for failing to consult the NCSC/NCST.
  - Earlier interim order: 27 Nov 2025, no fresh recruitment under the 2022 Act.
  - The government said recruitment will follow the pre-28-12-2022 50% matrix. The Cabinet resolved to file an SLP; I found **no SC stay** as of the latest reports (13–16 Oct 2026).
  - The 2B to 2C/2D change has been in abeyance since 2023 (SC assurance).
- Notes text issues: "Around 56%" was right for 2022–2026, but it contradicts the data (66). It is now outdated (50%). The notes should say EWS is not implemented, and they should cover the 2026 HC verdict and the SC internal reservation.
- Population check (Census 2011 SC/ST): SC 17.1 matches **17.15%**; ST 7.0 matches **6.95%**. OBC 52% has no basis.
  - The **2015 Socio-Economic & Educational Survey** (Kantharaj, finalised by Jayaprakash Hegde, submitted Feb 2024, tabled in Cabinet Apr 2025) reportedly puts OBCs at about **69.6%** and recommended 51% OBC reservation. It was not adopted.
  - A **fresh survey** by the KSCBC ran from 22 Sep 2025 to about Oct–Nov 2025 with about 87–89% enumeration. I found no published report.
- Sources:
  - https://www.verdictum.in/karnataka-high-court/mahendra-kumar-mitra-v-secretary-to-government-of-india-ministry-of-social-justice-and-empowerment-wp-no-200448-of-2025-1623905 — 12 Oct 2026 judgment.
  - https://www.livelaw.in/high-court/karnataka-high-court/karnataka-high-court-strikes-down-law-raising-reservation-educational-institutes-government-jobs-554459 — same judgment.
  - https://www.deccanherald.com/india/karnataka/karnataka-government-to-move-supreme-court-over-high-court-ruling-on-quota-cap-4184535 — SLP decision.
  - https://news.careers360.com/karnataka-high-court-hc-restricts-fresh-recruitment-under-scheduled-caste-tribe-quota-law-obc-sc-st-reservation — Nov 2025 interim order.
  - https://www.theweek.in/wire-updates/national/2025/09/03/mes27-ka-reservation-roster.html — Sep 2025 roster (56%, GM 44%, no EWS).
  - https://www.thenewsminute.com/karnataka/karnataka-approves-internal-reservation-within-15-sc-quota — Apr 2026 5.25/5.25/4.5 split.
  - https://www.verdictum.in/court-updates/high-courts/karnataka-public-interest-litigation-ews-quota-govt-jobs-girish-bharadwaj-1521926 — EWS not implemented (PIL).
  - https://www.thenewsminute.com/karnataka/karnataka-scraps-4-muslim-quota-gives-it-two-other-communities-175028 — 2023 2B to 2C/2D change.
  - https://www.business-standard.com/india-news/caste-census-report-recommends-51-quota-for-backward-classes-in-karnataka-125041300079_1.html — 2015 survey and the 51% recommendation.

### KERALA — WRONG  (confidence: high)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 10 | **8** | KS&SSR Part II, Rules 14–17 rotation. |
| ST | 2 | 2 | OK |
| OBC (SEBC) | 40 | 40 | The total is OK, but **every sub-category is wrong**. The app's split (EZ 9, MU 8, BH 3, LA 3, DV 2, VK 2, KN 1) is the **professional-course admission (education) SEBC split, which totals 30%**, and a made-up "Other SEBC 12%" pads it to 40. |
| ↳ Ezhava/Thiyya/Billava | 9 | **14** | Posts other than last grade. Last grade: 11. |
| ↳ Muslim | 8 | **12** | Last grade: 10. |
| ↳ Latin Catholic & Anglo-Indian | 3 | **4** | Last grade: 4. |
| ↳ Other Backward Hindus | 3 | **3** | Last grade: 6. |
| ↳ Viswakarma | (2, within DV_VK_KN) | **3** | Last grade: 2. |
| ↳ Dheevara | (2, within DV_VK_KN) | **1** | Last grade: 2. |
| ↳ Kusavan | (1, within DV_VK_KN) | — | Not a separate employment slot (falls under OBH). |
| ↳ Hindu Nadar | — | **1** | Missing. Last grade: 1. |
| ↳ SIUC Nadar | — | **1** | Missing. Last grade: 2. |
| ↳ SC converts to Christianity | — | **1** | Missing. Last grade: 2. |
| ↳ "Other SEBC 12% / 88 communities" | 12 | — | **Does not exist**; remove it. |
| EWS | 10 | 10 | Implemented for PSC from **23 Oct 2020** (Cabinet decision 21 Oct 2020) by amending KS&SSR. It is limited to communities outside SC/ST/SEBC and uses a lower income test of about ₹4 lakh. |
| TOTAL | 62 | **60** | 50 + EWS 10. OTHERS should be **40**, not 38. |
- Legal status (as of Oct 2026): In force. EWS is covered by the SC's upholding of the 103rd Amendment (Janhit Abhiyan, 7 Nov 2022). I found no pending stay.
- Notes text issues: The notes are vague but not false. They should state SC 8 / ST 2 / OBC 40 (50%) plus EWS 10 = 60%, applied through the Rule 14–17 rotation. They should also say the communal split differs for last-grade posts.
- Population check (Census 2011 SC/ST): SC 9.1 matches **9.10%**; ST 1.5 matches **1.45%**. OBC 52% has no official source; Kerala has done no state caste survey.
- Sources:
  - https://www.keralapsc.gov.in/rules-reservation — official PSC reservation rules (14/12/4/… out of 40).
  - https://bcdd.kerala.gov.in/en/reservation/employment-reservation/ — official employment split, other-than-last-grade vs. last-grade.
  - https://bcdd.kerala.gov.in/en/reservation/educational-reservation/ — the education split the app mistakenly used.
  - https://onmanorama.com/news/kerala/2022/11/08/economically-weaker-sections-reservation-kerala-implementation.html — EWS from 23-10-2020.
  - https://onmanorama.com/news/kerala/2020/10/22/kerala-cabinet-nod-for-10--quota-in-jobs-for-economically-weaker.html — Cabinet decision.

### TAMIL_NADU — MINOR ISSUES  (confidence: high)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 18 | 18 | Missing sub-category: **Arunthathiyar 3% preferential reservation within SC 18** (TN Arunthathiyars Special Reservation Act, 2009). Sub-classification of this kind was validated by the SC's 7-judge *State of Punjab v. Davinder Singh* ruling (Aug 2024). |
| ST | 1 | 1 | OK |
| OBC (BC+MBC) | 50 | 50 | OK |
| ↳ BC | 30 | 30 | OK |
| ↳↳ BC (general) | 26.5 | 26.5 | OK |
| ↳↳ BC Muslims | 3.5 | 3.5 | OK (since 15-09-2007). |
| ↳ MBC/DNC | 20 | 20 | OK. The Vanniyakula Kshatriya 10.5% internal quota (Act 8 of 2021) was **struck down** by the Madras HC on 1 Nov 2021, upheld by the SC on **31 Mar 2022** (*Pattali Makkal Katchi v. A. Mayilerumperumal*). MBC 20 is undivided. |
| EWS | 0 | 0 | Correct: not implemented for state services. |
| TOTAL | 69 | 69 | Correct. |
- Legal status (as of Oct 2026):
  - TN Act 45 of 1994 is in the Ninth Schedule (76th Amendment, 1994). Challenges have been pending in the SC for years (writ petitions since 1994/2012; listed again 2021), with no decision.
  - A 2026 development affects eligibility, not percentages. On 25 Jun 2026 the Madras HC struck down the 9 Mar 2024 GO that let converts to Islam claim BC (Muslim) status. The SC reserved orders on 7 Aug 2026. One secondary site says the SC dismissed TN's appeal on 15 Oct 2026; this is **unverified**.
  - The new government (CM C. Joseph Vijay) says it will run a caste enumeration and a "Social Justice Audit" after the Census (Phase 2 due by Mar 2027). No change to the percentages yet.
- Notes text issues: Accurate. They could add the Arunthathiyar 3% and the 2022 Vanniyar ruling. The BC "146 communities" and MBC "106+ other castes" counts are unverified (low confidence).
- Population check (Census 2011 SC/ST): SC 20.0 matches **20.01%**; ST 1.1 matches **1.10%**. OBC 68% has no official caste data.
- Sources:
  - https://cms.tn.gov.in/cms_migrated/document/docfiles/bcmbc_e_pn_2021_22.pdf — TN BC/MBC Dept policy note (26.5/3.5/20/18/1, BCM since 2007).
  - https://api.sci.gov.in/supremecourt/2021/28000/28000_2021_5_1501_34552_Judgement_31-Mar-2022.pdf — SC Vanniyar judgment, 31-03-2022.
  - https://www.scobserver.in/reports/vanniyar-reservation-judgment-summary/ — summary of the same.
  - https://des.tn.gov.in/sites/default/files/2025-07/28.%20ADI%20DRAVIDAR%20AND%20TRIBAL%20WELFARE.pdf — SC 20.01% (Census 2011).
  - https://thewire.in/law/unconstitutional-un-islamic-madras-high-court-says-islam-converts-cant-claim-bc-muslim-status — 2026 HC ruling on converts.
  - https://www.dtnext.in/news/tamilnadu/amid-quota-row-tvk-reiterates-caste-survey-plan — 2026 government stance.

### GOA — MINOR ISSUES  (confidence: med)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 2 | 2 | OK |
| ST | 12 | 12 | OK |
| OBC | 27 | 27 | OK. OBC was cut from 27% to 19.5% in 2003, then raised back to 27% by the Parrikar cabinet (around 2012; a notification dated 22-01-2014 appears in the litigation history). It is still applied in 2026, and the CM says Bhandari demands wait for the 2027 census. |
| EWS | 10 | 10 | Cabinet approved it for vacancies notified after 01-02-2019. GSSC 2026 adverts carry EWS posts. |
| TOTAL | 51 | 51 | Correct. A GSSC Adv. 4/2026 post split (UR 13, ST 4, SC 1, OBC 7, EWS 2 out of 27) is consistent with it. |
- Legal status (as of Oct 2026): In force for jobs. The basis of the 27% OBC quota (a CDPE study) has been questioned politically, but I found no court stay. A separate case on the 41% reservation in GMC PG medical seats (education) went to the SC; it does not affect services.
- Notes text issues: **"Goa has lower OBC reservation compared to other states" is misleading.** Goa's 27% equals the central figure and is above Maharashtra's 19% OBC. It was only true before the hike, at 19.5%. "EWS implemented" is correct.
- Population check (Census 2011 SC/ST): SC 1.7 matches **1.74%**; ST 10.2 matches **10.23%**. OBC 25% has no official source.
- Sources:
  - https://www.heraldgoa.in/goa/na/obc-quota-hiked-to-27/60564 — OBC raised from 19.5% to 27% (SC 2 + ST 12 + OBC 27 = 41).
  - https://www.heraldgoa.in/goa/cabinet-approves-10-reservation-for-ewss/222466 — EWS 10% for vacancies after 01-02-2019.
  - https://gssc.goa.gov.in/wp-content/uploads/2026/09/advertisement-no.-4-of-year-2026-brief-advertisement_compressed.pdf — current category-wise vacancy split.
  - https://www.thegoan.net/goa-news/reservation-row-erupts-in-house-cm-promises-obc-medical-quota/134325.html — 27% still applied; Bhandari demand deferred.
  - A Goa Personnel Department GO or gazette notification was not reachable; recommend locating one for a primary source.

### MAHARASHTRA — WRONG  (confidence: high for percentages, med for latest court dates)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 13 | 13 | OK |
| ST | 7 | 7 | OK |
| OBC | 19 | 19 | OK, but this is only part of the backward-class pool. |
| VJ-A / DT (Vimukta Jati) | — | **3** | **Not modelled** |
| NT-B | — | **2.5** | **Not modelled** |
| NT-C (Dhangar) | — | **3.5** | **Not modelled** |
| NT-D (Vanjari) | — | **2** | **Not modelled** |
| SBC | — | **2** | **Not modelled** |
| SEBC (Maratha) | — | **10** | **Not modelled.** Maharashtra State Reservation for SEBC Act, 2024: passed 20-02-2024, notified 26-02-2024. |
| EWS | 10 | 10 | OK |
| TOTAL | 49 | **72** | 52 (Act VIII of 2004 categories) + SEBC 10 + EWS 10. OTHERS should be **28**, not 51. |
- Model gap: The app can't represent VJNT, SBC or SEBC as separate vertical categories. Option 1: put VJ-A, NT-B, NT-C, NT-D, SBC and OBC under OBC as subCategories (OBC pool total **32%**). Option 2: model SEBC 10% as its own category, or as an OBC subcategory with a clear label, since it is legally a separate SEBC class outside the OBC list.
- Legal status (as of Oct 2026):
  - The 52% base rests on the Maharashtra State Public Services (Reservation for SC, ST, DT(VJ), NT, SBC & OBC) Act, 2001 (Act VIII of 2004) and is in force.
  - The **SEBC Act 2024 (10%) is in force but under challenge** in the Bombay HC, with **no stay**. Admissions and appointments are subject to the final verdict. The SC directed a special bench in May 2025. The case is being heard afresh for the **third time** before Justices M.S. Karnik, N.J. Jamadar and Sandeep Marne, starting about **9 Oct 2026** (med confidence on the exact date).
  - The 2018 SEBC Act (16%, later cut by the HC to 12/13%) was struck down by the SC on 5 May 2021.
  - The Sept 2025 "Hyderabad Gazette" GR on Kunbi certificates for Marathas (OBC route) changes eligibility, not percentages. Its litigation status is **UNVERIFIED** (search budget exhausted).
- Notes text issues: "52%" is correct for the pre-2019 base but contradicts the data (49). It omits EWS and SEBC; the current figure is **72%**, or 62% excluding EWS. The notes should name the VJNT/SBC sub-quotas and the pending SEBC litigation.
- Population check (Census 2011 SC/ST): SC 11.8 matches **11.81%**; ST 9.4 matches **9.35%**. OBC 32% has no official source. The Shukre Commission (2024) estimated Marathas at about 28%.
- Sources:
  - https://www.barandbench.com/news/new-bench-old-battle-maratha-reservation-case-to-be-reheard-for-third-time-by-bombay-high-court — third rehearing.
  - https://www.livelaw.in/high-court/bombay-high-court/bombay-high-court-maratha-reservation-matter-heard-afresh-third-new-bench-550709 — new bench, fresh hearing.
  - https://www.pressreader.com/india/the-hindu-mumbai-9WWd/20240306/281706914639266 — The Hindu explainer on the 2024 SEBC Act.
  - https://www.clearias.com/maratha-quota-law/ — secondary list of the 52% components (13/7/19/3/2.5/3.5/2/2), plus EWS, giving 72.
  - https://www.mumu.edu.in/IQAC/Ext_profile/1.%20Reservation%20Status%20Maharashtra%20Govenment.pdf — state percentage table.
  - The primary GAD GR (gad.maharashtra.gov.in) and Act VIII of 2004 were not reachable; recommend linking them.

### GUJARAT — MINOR ISSUES  (confidence: high)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 7 | 7 | OK |
| ST | 15 | 15 | OK |
| OBC (SEBC) | 27 | 27 | OK. Gujarat calls this category "SEBC"; it is non-creamy-layer. |
| EWS | 10 | 10 | OK. Gujarat was the **first state**, from **14-01-2019**. A residency condition (domiciled since 1978) was added on 23-01-2019. |
| TOTAL | 59 | 59 | The data is correct. |
- Legal status (as of Oct 2026): In force. EWS stands under the SC's Janhit Abhiyan ruling (2022). Gujarat's 2016 EWS ordinance was a different, earlier measure that was quashed. In 2023, 27% OBC reservation in local bodies followed the Justice Jhaveri commission (not services).
- Notes text issues:
  - **"49.5%" is wrong.** Gujarat's pre-EWS total is **49%** (7+15+27); 49.5% is the central figure (15+7.5+27).
  - "EWS added over and above the 50% limit as per the Supreme Court ruling" is misleading. EWS came from the 103rd Constitutional Amendment (Jan 2019); the SC only upheld it later, in Nov 2022.
  - The current total is **59%**.
- Population check (Census 2011 SC/ST): SC 6.7 matches **6.74%**; ST 14.8 matches **14.75%**. OBC 39% has no official source and no state caste survey.
- Sources:
  - https://english.madhyamam.com/national/2019/jan/14/gujarat-implements-10-pc-ews-quota — EWS from 14-01-2019.
  - https://m.thewire.in/article/politics/10-reservation-for-economically-backward-sections-implemented-in-gujarat — EWS is additional to SC/ST/SEBC.
  - https://www.thequint.com/amp/story/news/india/no-ews-quota-to-those-who-settled-in-gujarat-after-1978-govt — 1978 residency rule.
  - https://nau.in/assets/uploads/40354-reservation-of-seats.pdf — state notice listing SC 7 / ST 15 / SEBC 27 / EWS 10.
  - https://www.deccanherald.com/india/gujarat/gujarat-govt-announces-27-per-cent-reservation-for-obcs-in-local-self-governing-bodies-2665108 — 2023 local-body OBC change (context).
  - The GAD Gujarat resolution was not located; recommend linking a GPSC advertisement's reservation clause.

---
## Summary of required data changes
| ID | Change |
|---|---|
| KARNATAKA | SC 17→**15**, ST 7→**3**, EWS 10→**0**, OTHERS 34→**50**. Fix 2A/3A/3B descriptions (3A = Vokkaliga, 3B = Lingayat, etc.). Optionally add the SC internal split 5.25/5.25/4.5. Rewrite the notes for the 12-Oct-2026 HC verdict and the pending SLP. |
| KERALA | SC 10→**8**, OTHERS 38→**40**. Replace the SEBC subcats with 14/12/4/3/3/1/1/1/1 (Ezhava, Muslim, LC-AI, OBH, Viswakarma, Dheevara, Hindu Nadar, SIUC Nadar, SC-convert Christians). Remove "Other SEBC 12%" and "Kusavan". |
| MAHARASHTRA | Add VJ-A 3, NT-B 2.5, NT-C 3.5, NT-D 2, SBC 2 and SEBC 10. OTHERS 51→**28**. Total 72. Update the notes. |
| TELANGANA | Notes 62→**64%**. Add SC 1/9/5 and BC A–E subcats. Note the pending 42% Bills. ST pop 9.3→9.08. |
| ANDHRA_PRADESH | ST pop 7.0→**5.53**. Add SC 1/6.5/7.5 subcats (Act 22 of 2025). |
| GUJARAT | Notes 49.5%→49% pre-EWS / **59%** now; fix the EWS framing. |
| TAMIL_NADU | Add Arunthathiyar 3% within SC. Optionally note Vanniyar 10.5% struck down (2022). |
| GOA | Fix the "lower OBC" note. Find a primary GO link. |
