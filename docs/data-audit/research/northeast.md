> **First-pass research notes (22 Oct 2026).** Kept for provenance and source links. Where these notes disagree with [`../../DATA_AUDIT.md`](../../DATA_AUDIT.md), the audit wins: it reflects a second, adversarial verification pass (see [`../second-pass-verification.md`](../second-pass-verification.md)).
>
> **Superseded:** the NAGALAND section below is wrong — Nagaland reserves 80% of state posts for indigenous Nagaland STs, with the 37% Backward Tribes quota nested inside it.

# Northeast fact-check: state-services vertical reservation (as of 2026-10-22)

Scope: ARUNACHAL_PRADESH, MEGHALAYA, MIZORAM, NAGALAND, MANIPUR, TRIPURA (`STATE_SERVICES` blocks in `src/data/reservationData.json`).

**Method and limits.** I used WebSearch only. WebFetch failed with DNS errors on every domain I tried (pib.gov.in, twd.tripura.gov.in, theweek.in, arunachaltimes.in and others), and direct curl was blocked by the proxy. So I could not open primary PDFs. I checked claims against search-result extracts of the cited pages. The session's web-search budget ran out before I could confirm Manipur's EWS status. Anything marked *(background)* comes from my prior knowledge and was not re-checked this session.

**Where the "80% ST" figure comes from.** The app's flat "80% ST" for Arunachal, Meghalaya, Mizoram and Nagaland matches a line in Wikipedia's *Reservation in India* article: "In Northeast India, e.g. in Arunachal Pradesh, Meghalaya, Nagaland and Mizoram, reservation for ST in State Govt. jobs is 80% with only 20% unreserved". That line holds only for Arunachal, and only until August 2026. It is wrong for Meghalaya (85%, split by tribe) and Nagaland (37%, backward tribes only). For Mizoram I found no support for it.

**Where the Tripura and Manipur OBC numbers come from.** Tripura's "SC 17 / ST 31 / OBC 2" matches the DoPT table for *Central Government* Group C/D posts filled locally (Tripura row 17/31/2). The current version is DoPT OM No. 36011/1/2022-Estt(Res-I) dated 11.08.2026. Tripura University, a central university, also uses it. It is **not** Tripura's state-services rule. The DoPT rows for the other states are central rows too and should not be used for state services: Manipur 3/34/13, Meghalaya 1/44/5, Mizoram 0/45/5, Nagaland 0/45/0.

**Which of these states have EWS in state jobs.** Only **Mizoram** has evidence of it: the Ministry of Social Justice and Empowerment named Mizoram in a Lok Sabha written reply on 10 Aug 2021 (PIB) as one of 12 States/UTs that had implemented the 10% EWS quota. I found no evidence that Arunachal, Meghalaya, Nagaland, Manipur or Tripura implement EWS in state-government jobs. For Tripura, 2020 High Court reporting says no state law exists for OBC or EWS, and TPSC adverts list only UR/SC/ST. For Manipur, the 2021 MPSC advert had no EWS row.

---

### ARUNACHAL_PRADESH — WRONG (out of date since 13 Aug 2026)  (confidence: med)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 0 | 0 | Correct. Arunachal has no notified Scheduled Castes. |
| ST | 80 | 80 under the 80:20 ratio (1990 to Aug 2026). Since 13 Aug 2026, APST status is an eligibility condition for direct recruitment to Group A/B/C posts, so in practice 100% | The quota is for **APST** (Arunachal Pradesh Scheduled Tribes) only. STs from other states don't count. The 80:20 ratio reportedly dates from O&M Dept OM No. 13/90 of 24 Sep 1990; this is AFTF's account in Arunachal Times and I could not see the OM. Reports conflict on whether the 13 Aug cabinet decision formally scrapped 80:20: Northeast Today says it did, India Today NE says the ratio is unchanged. Either way, the decision requires PRC + APST status + proficiency in a notified indigenous tribal language for Group A/B/C direct recruitment, with immediate effect, and directs APPSC/APSSB to amend their recruitment rules. |
| OBC | 0 | 0 | Correct. No OBC quota. |
| EWS | 0 | 0 (no evidence it was implemented) | Not in the MoSJE 2021 list. APPSCCE-2024 notification shows only UR/APST/PwBD categories. Confidence: med-low. |
| OTHERS | 20 | 20 formally under 80:20, but now APST-only in practice for Group A–C | Group D was not mentioned in the reports. |
| TOTAL reserved | 80 | 80 formally, ~100% APST in practice | |

- **Legal status (Oct 2026): in force, recently changed, and reportedly being challenged.**
  - 2 Jun 2026: AAPSU memorandum demanding the change.
  - 6–7 Jul 2026: six-member High-Level Committee set up, chaired by Industries Minister Nyato Dukam, to study abolishing 80:20 and making PRC/APST mandatory. Two-month deadline. Its final meeting was on 10 Aug 2026.
  - 13 Aug 2026: cabinet approved the uniform eligibility criteria described in the table.
  - A bandh followed in Lekang (Namsai district), where non-APST residents fear exclusion.
  - One low-reliability outlet (streamlinefeed.co.ke) reports a PIL in the Gauhati High Court by "Lekang Indigenous Right Forum" and four others, before CJ Ashutosh Kumar and Justice Arun Dev Choudhury, with the state's affidavit due 5 Nov 2026. I found no mainstream confirmation. Treat it as **unverified**.
- **Notes text issues:**
  - "80% reservation in state government jobs **and educational institutions**": I did not verify the education part.
  - The notes don't say the quota is APST-only, don't mention the 1990 basis, and miss the July–Aug 2026 overhaul. `lastUpdated` 2024-01-01 is stale.
  - "Most of the population falls under ST" is fine (68.8%).
- **Population check (Census 2011):** ST 68.79% (951,821 of 1,383,727), so the app's 68.8 is ✔. **SC: the app says 0.6, but it should be 0.** Arunachal has no SC list under the Constitution (SC) Order 1950, so Census 2011 records 0 SC *(background; Census says SCs are notified in only 31 States/UTs)*. The OBC 3.0 figure is unsupported, since there is no state OBC quota or list. Recompute OTHERS (27.6 → ~28.2 if SC is set to 0).
- **Sources:**
  - https://arunachaltimes.in/index.php/2026/07/08/govt-constitutes-committee-to-examine-feasibility-of-abolition-of-8020-reservation-ratio/ — committee's formation, mandate and two-month deadline; describes 80:20 as 80% APST, 20% open.
  - https://www.indiatodayne.in/arunachal-pradesh/story/arunachal-sets-up-panel-to-review-8020-reservation-policy-after-aapsu-demand-1420436-2026-07-07 — the same panel.
  - https://arunachalobserver.org/2026/08/14/prc-tribal-language-proficiency-must-for-govt-jobs-arunachal-cabinet/ — the 13 Aug 2026 cabinet decision.
  - https://www.indiatodayne.in/arunachal-pradesh/story/no-prc-no-govt-job-arunachal-makes-st-certificate-tribal-language-proficiency-mandatory-1437492-2026-08-13 — APST + PRC + language mandatory for Group A/B/C; says 80:20 unchanged.
  - https://northeasttoday.in/northeast/arunachal-pradesh/arunachal-cabinet-scraps-8020-makes-prc-apst-tribal-language-mandatory-for-govt-jobs/ — the conflicting "scraps 80:20" account.
  - https://www.sentinelassam.com/north-east-india-news/arunachal-news/arunachal-cabinet-approves-uniform-recruitment-rules-for-government-jobs — corroborates the cabinet decision.
  - https://arunachaltimes.in/article/aftf-demands-scrapping-of-8020-recruitment-ratio — origin of 80:20 (OM 13/90, 24 Sep 1990).
  - https://www.freepressjournal.in/india/indefinite-bandh-hits-arunachals-lekang-over-new-government-recruitment-rules — the Lekang bandh.
  - https://appsc.gov.in/upload/RECINS001/APPSCCE2024_Notification_1compressed_1_20241010_230934.pdf — an official APPSC notification showing the APST/UR/PwBD category structure.

---

### MEGHALAYA — WRONG  (confidence: high)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 2 | No separate SC quota | SCs share a single combined **5%** quota with "other STs" (see the row below). The app's 2% SC has no basis. |
| ST | 80 | 80 tribe-specific + part of the shared 5% | This is not a general ST quota. **Khasi-Jaintia 40%** and **Garo 40%**, under the 1972 State Reservation Policy. |
| Not modelled: Khasi-Jaintia | — | 40 | Tribe-specific. Should be modelled as an ST subCategory. |
| Not modelled: Garo | — | 40 | Tribe-specific. Should be modelled as an ST subCategory. |
| Not modelled: other STs + SCs (combined) | — | 5 | One quota covering both SCs and STs other than Khasi/Jaintia/Garo (e.g. Hajong, Koch, Rabha, Boro). The model can't represent a quota shared between SC and ST. |
| OBC | 0 | 0 | Correct. |
| EWS | 0 | 0 (no evidence it was implemented) | Confidence: med. |
| OTHERS | 18 | **15** | |
| TOTAL reserved | 82 | **85** | |

- **Legal status (Oct 2026): in force (1972 policy); under review, no decision yet.**
  - Expert Committee on the State Reservation Policy set up by notification of **12 Sep 2023**. Its report was **tabled in the Assembly on 18 Feb 2026**.
  - The report recommends keeping the 1972 percentages, enforcing the roster system strictly, and adding a creamy-layer filter.
  - The cabinet has the report and says it may accept or reject it. An all-party meeting was held in May 2026; VPP skipped it.
  - VPP wants a population-based re-split; Garo bodies oppose any change. I found no final government decision.
  - The roster system was applied prospectively from about May 2022 after court proceedings *(background, unverified date)*.
- **Notes text issues:**
  - "State provides 80% reservation" is wrong: it's 85%, split by tribe (40/40/5).
  - The notes should name the 1972 policy and its tribe-wise split, and mention the 2023–26 expert-committee review and the roster dispute.
  - "Over 86% ST" is correct.
- **Population check (Census 2011):** ST 86.15% (2,555,861 of 2,966,889), app 86.1 ✔. SC 0.58% (17,355), app 0.6 ✔. The OBC 3.0 figure is unsupported. Optionally add the tribe split (Khasi ≈ 48%, Garo ≈ 32% of the state population, from 2011 language/tribe tables) *(background)*.
- **Sources:**
  - https://theprint.in/india/expert-panel-on-reservation-policy-in-meghalaya-for-introducing-creamy-layer-principle/2857890/ — PTI, 18 Feb 2026: report tabled; keep 1972 policy, strict roster, creamy layer; restates 40/40/5/15.
  - https://english.punjabkesari.com/india/meghalaya-all-parties-except-one-regional-outfit-meet-on-reservation-policy-report/ — the May 2026 all-party meeting.
  - https://www.easternmirrornagaland.com/meghalaya-sets-up-expert-panel-to-review-reservation-formula — the panel.
  - https://meghalaya.gov.in/meghalaya/sites/default/files/press_release/Press_Release_135.pdf — official press release on the review.
  - https://scroll.in/article/1069931/in-meghalaya-divide-over-the-states-reservation-policy-deepens — background on the dispute.
  - https://nenow.in/north-east-news/meghalaya/meghalaya-govt-says-final-decision-on-state-reservation-policy-will-take-time.html — no decision yet.

---

### MIZORAM — UNVERIFIED (app is probably wrong)  (confidence: low)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 0 | Not found | Mizoram's recruitment rules say reservation for SC/ST "and other categories" follows "orders issued by the Central Government or Government of Mizoram from time to time". I could not find a DP&AR order giving percentages. |
| ST | 80 | **Unverified** | No primary source found for "80% ST". The only official item is a **1978 Lok Sabha answer in which the Minister denied a reported 80% reservation for locals in Mizoram Government services** (Mizoram was then a UT). The only support for 80% is Wikipedia. MPSC adverts I saw extracts of show only PwBD set-asides, not UR/ST splits. De facto local preference instead works through **compulsory Mizo-language proficiency for Group A/B/C posts** and a 94% ST population. |
| OBC | 0 | 0 (probable) | No state OBC list. The govt deferred OBC status for Gorkhas, saying it would only grant it if it didn't disturb "existing state-level job quotas". |
| EWS | 0 | **Likely 10 (implemented)** | MoSJE Lok Sabha reply of 10 Aug 2021 (PIB) lists Mizoram among 12 States/UTs that implemented the 10% EWS quota. I couldn't read the state notification. Confidence: med. |
| Not modelled | — | — | Mizo / non-Mizo ST sub-classification exists for **higher technical course admissions** (2021 rules: 93% Zo/Mizo; Supreme Court notice in *Mizoram Chakma Students Union v. UoI*). Not shown for jobs. |
| OTHERS | 20 | Unknown | |
| TOTAL | 80 | Unknown | |

- **Legal status (Oct 2026):** No state-job reservation instrument found, so I can't give a status. The education sub-classification is pending before the Supreme Court (notice issued around 2023–24).
- **Notes text issues:** The "80% reservation for STs in government jobs" claim has no source. Rewrite as unverified, mention EWS, and mention that Mizo-language proficiency is the actual local-preference mechanism.
- **Population check (Census 2011):** ST 94.43% (1,036,115 of 1,097,206), app 94.4 ✔. SC 0.11% (1,218), app 0.1 ✔. The OBC 2.0 figure is unsupported, since there is no notified state OBC list.
- **Sources:**
  - https://eparlib.nic.in/bitstream/123456789/2607752/1/06_IV_05-04-1978_p99_p99_u5756.pdf — 1978 Lok Sabha answer denying 80% local reservation; ST 67.9% of Mizoram govt employees.
  - https://www.pib.gov.in/PressReleasePage.aspx?PRID=1741814 — MoSJE reply listing Mizoram as implementing EWS.
  - https://swarajyamag.com/insta/12-states-union-territories-have-implemented-10-per-cent-ews-reservation-govt-tells-lok-sabha — the same list.
  - https://cdnbbsr.s3waas.gov.in/s3ec05a22d33b4a00c165507a61f3bed4b/uploads/2023/11/2023111695.pdf — Mizoram Gazette recruitment rules deferring to DP&AR reservation orders.
  - https://www.livelaw.in/top-stories/supreme-court-hearing-plea-challenging-reservation-rules-discrimination-against-non-mizo-tribes-technical-courses-232989 — the education sub-classification case.
  - https://eastmojo.com/premium/2026/06/19/minority-within-a-minority-what-chawngte-revealed-about-mizorams-chakmas/ — MPSC Mizo-language requirement.
  - Next step: find the DP&AR (Mizoram) reservation OM. Look on dpar.mizoram.gov.in and in MPSC advert PDFs at mpsc.mizoram.gov.in.

---

### NAGALAND — WRONG  (confidence: high on structure, med on the 12% sub-split)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 0 | 0 | Correct. No SC list. |
| ST | 80 | **No general ST quota** | There is no "80% ST" rule. The only vertical quota is the **Backward Tribes (BT) quota of 37%**. |
| Not modelled: BT, 7 Eastern Nagaland tribes | — | 25 | Chang, Khiamniungan, Konyak, Phom, Sangtam, Tikhir, Yimkhiung (the ENPO tribes). |
| Not modelled: BT, other backward tribes | — | 12 | Reported split (Vision IAS summary of The Hindu explainer, 5–6 Oct 2025): Chakhesang + Pochury 6, Zeliang 4, Sumi (of the Kiphire/Tuensang area) 2. Confidence: low-med. |
| OBC | 0 | 0 | Correct. |
| EWS | 0 | 0 (no evidence it was implemented) | Confidence: med. |
| OTHERS | 20 | **63** | Open merit. In practice almost entirely the "advanced" Naga tribes (Angami, Ao, Lotha, Rengma, Sumi). |
| TOTAL reserved | 80 | **37** | Applies to direct recruitment to (non-technical) state posts. Reports describe it as covering "non-technical, non-gazetted" posts; check whether NPSC gazetted posts are covered. |

- **Legal status (Oct 2026): in force; formal review under way.**
  - The quota started in 1977 as a 10-year measure at 25%, and has since risen to 37%.
  - The Five Tribes' Committee on Review of Reservation Policy (CoRRP: Angami, Ao, Lotha, Rengma, Sumi) wants it scrapped or reviewed, with protests on 29 May and 9 Jul 2025.
  - On 3 Jun 2025 the govt said it would set up a commission. The cabinet decided on 6 Aug 2025. A **Job Reservation (Review) Commission** was reportedly constituted on **22 Sep 2025**, headed by a retired IAS officer, with a six-month mandate. CoRRP objected to its name and to whether it is neutral.
  - The Hindu (Oct 2025) quotes Deputy CM Patton linking the review to the 2027 Census. I found no outcome as of Oct 2026, so status is UNDER REVIEW.
- **Notes text issues:**
  - "Provides 80% reservation for tribal communities" is wrong.
  - Should read something like: "37% for backward tribes (25% for 7 Eastern Nagaland tribes, 12% for other BTs); 63% unreserved; reviewed by a commission constituted Sep 2025."
  - "Over 86% ST" is correct.
- **Population check (Census 2011):** ST 86.48% (1,710,973 of 1,978,502), app 86.5 ✔. SC 0 ✔ (no SC list). The OBC 2.0 figure is unsupported (no OBC list), so set it to 0 or null.
- **Sources:**
  - https://www.theweek.in/wire-updates/national/2025/06/03/ces18-nl-reservation-meeting.html — PTI: govt to set up a commission; 37% = 25 + 12.
  - https://www.theweek.in/wire-updates/national/2025/08/04/ces24-nl-reservation-policy.html — cabinet decision expected 6 Aug 2025.
  - https://www.theweek.in/wire-updates/national/2025/08/07/ces7-nl-reservation-policy.html — CoRRP response.
  - https://visionias.in/current-affairs/upsc-daily-news-summary/article/2025-10-06/the-hindu/polity-and-governance/what-is-nagalands-job-quota-issue-explained — summary of The Hindu explainer "What is Nagaland's job quota issue?" (5 Oct 2025): history and 12% sub-split. Cite the original Hindu article if you can find its URL.
  - https://nenow.in/north-east-news/nagaland/nagaland-five-tribes-committee-announces-protests-over-job-reservation-policy.html — protests.
  - Best primary source would be the Nagaland P&AR Department OM on BT reservation, if it can be found.

---

### MANIPUR — MINOR ISSUES  (confidence: high for SC/ST/OBC, low-med for EWS)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 2 | 2 | Manipur Reservation of Vacancies in Posts & Services (for SC & ST) Act, 1976 (Act 1 of 1977), and Rules 2011 (notified 17 May 2011). |
| ST | 31 | 31 | Same instruments. |
| OBC | 17 | 17 | Confirmed by the MPSC Medical Officer advert (2021, 300 posts): UR 150 / ST 93 / SC 6 / OBC 51 = exactly 50 / 31 / 2 / 17. |
| OBC subCategories (not modelled) | — | OBC(M) Meitei ≈12.67, OBC(MP) Meitei Pangal ≈4, OBC(TNB/other) ≈0.33 | Worked out from the 2021 advert: 38 / 12 / 1 of 300. I didn't find an official percentage order. Confidence: low-med. |
| EWS | 10 | **Unverified, probably 0** | Not in the MoSJE 2021 list. The 2021 MPSC advert had no EWS row. The only Manipur EWS 10% I found is in **NEET state-quota seat matrices (education)**. Search budget ran out before I could finish this check. |
| OTHERS | 40 | **50** (if there is no EWS) | |
| TOTAL reserved | 60 | **50** (if there is no EWS) | |

- **Legal status (Oct 2026): SC/ST/OBC quotas in force.**
  - The Supreme Court upheld Manipur University's alignment of its quotas with the state's 2/31/17 (LiveLaw).
  - Meitei ST demand: the High Court order of 27 Mar 2023 (para 17(iii)) was **deleted on 21 Feb 2024**. No change to the ST list since.
  - New since 2024: a 5% (horizontal) quota for outstanding sportspersons in Home Department jobs, approved by cabinet in Aug 2026 (CM Yumnam Khemchand Singh). The Rules 2011 provisions on promotion were abrogated in 2022.
- **Notes text issues:** The notes are vague. They should cite the 1976 Act and 2011 Rules, say that OBC (17%) is split into Meitei / Meitei-Pangal / others, and say that EWS is not confirmed for state jobs. They could also mention the 2023 ST-status litigation and the ethnic conflict.
- **Population check (Census 2011):**
  - ST: 1,167,422 of 2,855,794 = **40.88%** when Mao-Maram, Paomata and Purul subdivisions are included, or 35.1% excluding them (the Census highlight figure). App 40.9 is OK; add a footnote.
  - SC: 97,328 = 3.41% of the full total, or 3.78% of the 2,570,390 base. **App 3.9 matches neither; use 3.8 or 3.4.** These figures are *(background)*.
  - OBC 28.0 is unsupported and probably too low. Meiteis are about 53% of the population and reportedly over 90% of them hold OBC status, and Meitei Pangals are about 8%.
- **Sources:**
  - https://vlex.in/vid/lisham-henthoibac-and-ors-678712153 — Manipur High Court case reciting the Rules 2011 notification of 17 May 2011 (SC 2, ST 31, OBC 17).
  - https://www.indiacode.nic.in/handle/123456789/13469 — the Act and its 2007 amendment.
  - https://www.livelaw.in/amp/top-stories/supreme-court-upholds-manipur-universitys-decision-to-reduce-sc-quota-to-2-obc-quota-to-17-189361 — Supreme Court on 2/31/17.
  - https://results.amarujala.com/jobs/mpsc-manipur-recruitment-2021-applications-invited-for-300-medical-officers-posts-job-details-here — 2021 MPSC category split.
  - https://morungexpress.com/atsum-writes-to-cm-on-reservation — 2022 student-union memo citing 31/17/2/50.
  - https://scroll.in/latest/1057934/manipur-hc-allows-tribal-bodies-to-appeal-against-order-on-scheduled-tribe-status-for-meiteis — the Meitei ST order and appeals.
  - https://theshillongtimes.com/2026/08/29/manipur-reserves-5-pc-quota-in-home-department-jobs-for-outstanding-sportspersons/ — the 2026 sportsperson quota.

---

### TRIPURA — WRONG  (confidence: med-high)
| Category | App says | Verified | Note |
|---|---|---|---|
| SC | 17 | 17 | Tripura SC & ST Reservation Act, 1991 (as amended). SC was 16% in 2003 (Rajya Sabha / PIB) and is 17% now (Tripura OBC Welfare Dept; Pradyot Debbarma's 2025 letter). |
| ST | 31 | 31 | ST quota since 1978, now under the 1991 Act (Tribal Welfare Dept). |
| OBC | 2 | **0** | Tripura has **no OBC quota in state jobs**. The state OBC Welfare Dept says SC+ST = 48% leaves "no scope" for OBC under the 50% cap. 2020 High Court reporting says "no law enacted" for OBC or EWS. The "2" comes from the **DoPT table for Central Govt Group C/D local recruitment** (Tripura 17/31/2), which central bodies such as Tripura University also use. |
| EWS | 10 | **0** (no evidence it was implemented) | TPSC adverts (2021 JMO: UR 35 / SC 28 / ST 101; 2022 TCS/TPS) list only UR/SC/ST. Not in the MoSJE 2021 list. |
| OTHERS | 40 | **52** | |
| TOTAL reserved | 60 | **48** | Horizontal quotas, outside the vertical model: 33% for women (GA(P&T) notification, 2022) and 2% for ex-servicemen (Act's 4th Amendment, 2020). |

- **Legal status (Oct 2026): in force.** The SC/ST Act has been amended up to the 4th Amendment (2020). There are ongoing complaints of under-compliance: Pradyot Debbarma (Tipra Motha) protested a Junior Physical Instructor advert that gave STs about 6% and SCs about 12%, and the Tribal Students' Federation (TSF) has protested over SC/ST backlog vacancies. I found no court challenge to the percentages themselves.
- **Notes text issues:** Vague ("based on its tribal population"). Should say: SC 17 / ST 31 under the 1991 Act; no OBC or EWS quota in state jobs; 33% horizontal for women. The remark about autonomous district councils (TTAADC) is accurate but has nothing to do with reservation.
- **Population check (Census 2011):** SC 17.83% (654,918 of 3,673,917), app 17.8 ✔. ST 31.76% (1,166,813), app 31.8 ✔. The OBC 10.0 figure is unsupported.
- **Sources:**
  - https://www.thc.nic.in/Tripura%20State%20Lagislation%20Acts/The%20Tripura%20Scheduled%20Castes%20and%20Scheduled%20Tribes%20Reservation%20Act,%201991.pdf — the Act as amended to 2020. Also on India Code: https://www.indiacode.nic.in/bitstream/123456789/18150/1/1653977993414_act.pdf
  - https://twd.tripura.gov.in/reservation-policy — ST 31% since 1978.
  - https://obcw.tripura.gov.in/ — SC 17 + ST 31 = 48; no scope for an OBC quota.
  - https://archive.pib.gov.in/release02/lyr2003/raug2003/18082003/r1808200322.html — 2003: 16 + 31 = 47, no OBC.
  - https://thenewsmill.com/2020/12/tripura-hc-bars-mbbs-admission-sebc-ews-quotas/ and https://eastmojo.com/news/2020/12/19/why-tripura-high-court-cancelled-obc-quota-in-medical-college/ — no law for OBC or EWS.
  - https://tpsc.tripura.gov.in/sites/default/files/advt_no_06_2021.pdf and https://tpsc.tripura.gov.in/sites/default/files/advttcstps3322.pdf — UR/SC/ST-only adverts.
  - https://tripura.gov.in/sites/default/files/Notification_GAPNT_43.pdf — 33% for women.
  - https://nenow.in/north-east-news/tripura/tripura-pradyot-raises-concern-over-reservation-act-violation.html — compliance dispute.
  - https://www.gconnect.in/orders-in-brief/reservation/reservation-central-government.html — DoPT central table, the origin of the 17/31/2.

---

## Suggested data changes (summary)
| Jurisdiction | SC | ST | OBC | EWS | OTHERS | Other fixes |
|---|---|---|---|---|---|---|
| ARUNACHAL_PRADESH | 0 | 80 (APST; effectively 100 for Group A–C since 13 Aug 2026) | 0 | 0 | 20 (APST-only in practice) | SC population 0.6 → 0. Mark legal status "recently changed / reportedly challenged". Notes: the 80:20 ratio and the Aug 2026 PRC/APST/language rule. |
| MEGHALAYA | — (in shared 5%) | 85 = KJ 40 + Garo 40 + other ST/SC 5 (shared) | 0 | 0 | 15 | Model tribe subCategories. Status: under review (report tabled 18 Feb 2026). |
| MIZORAM | ? | ? (80 unsupported) | 0 | likely 10 | ? | Mark UNVERIFIED. Add the EWS note. |
| NAGALAND | 0 | 37 BT (25 ENPO-7 + 12 other BT) — not a general ST quota | 0 | 0 | 63 | OBC population → 0/null. Status: under review (commission Sep 2025). |
| MANIPUR | 2 | 31 | 17 (M / MP / other split) | 0? (unverified) | 50 | SC population 3.9 → 3.8 (or 3.4). Footnote for the ST 40.9 base. OBC population 28 is unsupported. |
| TRIPURA | 17 | 31 | 0 | 0 | 52 | Delete the OBC 2 / EWS 10 (central DoPT figures). Women's 33% is horizontal. |

Census 2011 reference: https://ncst.nic.in/page/scheduled-tribes-in-india-as-revealed-in-census-2011 and https://www.indiaspend.com/wp-content/uploads/2020/09/INDIA_CENSUS_ABSTRACT-2011-Data_on_SC-STs.pdf
