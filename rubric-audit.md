# Rubric Audit — India CQ Training Site
## ENGR 802: Engineering Across Cultures · Final Project
## Mapped to deck section structure (slides 1–62)

This audit maps each rubric criterion (inferred from the deck section headers and PROMPT.md requirements) to the specific on-page element that satisfies it. Any gaps are flagged.

---

## CQ Framework Integration

| Criterion | Site element | Location | Status |
|---|---|---|---|
| CQ Drive addressed explicitly | "Why This Matters (CQ Drive)" opening scenario on each module | All module pages | ✅ |
| CQ Knowledge addressed explicitly | "What You Need to Know (CQ Knowledge)" section with citations | All module pages | ✅ |
| CQ Strategy addressed explicitly | "Plan Ahead (CQ Strategy)" section with checklists/frameworks | All module pages | ✅ |
| CQ Action addressed explicitly | "Do This, Not That (CQ Action)" do-avoid table | All module pages | ✅ |
| Pre/post CQ self-assessment | 8-item slider form with capability-averaged scores | cq-precheck.html, cq-postcheck.html | ✅ |
| CQ score change visualized | .cq-delta-grid with before/after for all 4 capabilities | cq-postcheck.html | ✅ |
| CQ badges visible per module | .cq-badge chips in every .page-header | All module pages | ✅ |

---

## Module 1 — Country & Cultural Dimensions (Slides 3–7, Auer)

| Criterion | Site element | Location | Status |
|---|---|---|---|
| Country facts (geography, population, languages, religion) | Country Snapshot card with bullet list | module-1.html, Knowledge section | ✅ |
| Hofstede 6-dimension scores (India) | Interactive Hofstede Explorer: 6 .hofstede-bar-row items (PDI 77, IDV 48, MAS 56, UAI 40, LTO 51, IVR 26) | module-1.html | ✅ |
| Hofstede U.S. comparison chart | Chart.js grouped bar chart with India + U.S. | module-1.html (renders via charts.js on canvas#hofstede-chart in Knowledge section of M1) | ✅ |
| Engineering implication per dimension | Expandable .hofstede-panel per row with engineering context + citations | module-1.html | ✅ |
| Hinduism–PDI correlation | Quoted in speaker note within Knowledge section | module-1.html | ✅ |
| Regional diversity caveat | Overgeneralization warning box | module-1.html | ✅ |
| Juhász (2014) validation of Hofstede in Indian IT | Cited in PDI and IDV panel text | module-1.html | ✅ |
| Mark personal communication (November 14, 2026) | Cited in PDI panel: "local department heads and senior staff play an important role" | module-1.html | ✅ |
| High-PDI pre-meeting checklist | 5-item checklist in Plan Ahead section | module-1.html | ✅ |
| Do/Avoid table (3 rows) | .do-avoid-table with PDI-informed behavioral guidance | module-1.html | ✅ |
| Branching scenario (1 decision) | .scenario-card with 3 choices (A/B/C), feedback panels | module-1.html | ✅ |
| Knowledge checks (4 items) | 4 .kc-item with radio options + feedback | module-1.html | ✅ |
| Reflection textarea (autosaved) | .reflect-section[data-key="reflect-m1"] | module-1.html | ✅ |

---

## Module 2 — Business & Engineering Culture (Slides 8–13, Zanon)

| Criterion | Site element | Location | Status |
|---|---|---|---|
| Verbatim presenter quote (slide 12) | Quoted in Why This Matters opening scenario | module-2.html | ✅ |
| Meeting culture (decision-making before the meeting) | "What You Need to Know" paragraph | module-2.html | ✅ |
| IST / timezone note | "10½ hours ahead of U.S. Eastern" in Knowledge section | module-2.html | ✅ |
| Indian English vocabulary table (verbatim slide 11) | .data-table: 6 phrases (do the needful, prepone, revert, out of station, lakh/crore, namaste) | module-2.html | ✅ |
| Five first-meeting habits (verbatim slide 11) | Numbered list in Knowledge section | module-2.html | ✅ |
| Heeks et al. (2001) outsourcing communication patterns | Cited in Knowledge section and scenario feedback | module-2.html | ✅ |
| Krishna et al. (2004) boundary objects | Defined and cited in Knowledge + Plan Ahead sections | module-2.html | ✅ |
| Meyer (2014) three-step framework | Listed in Plan Ahead section | module-2.html | ✅ |
| Mark personal communication (November 14, 2026) | Cited in Mark's parallel case narrative | module-2.html | ✅ |
| Boundary-object checklist | 4-item checklist in Plan Ahead section | module-2.html | ✅ |
| Do/Avoid table (3 rows) | .do-avoid-table: joint boundary objects, private feedback, relationship-first | module-2.html | ✅ |
| Branching scenario (2 decisions) | .scenario-card with 2 steps, choices, feedback | module-2.html | ✅ |
| Knowledge checks (3 items) | 3 .kc-item | module-2.html | ✅ |
| Reflection textarea (autosaved) | .reflect-section[data-key="reflect-m2"] | module-2.html | ✅ |

---

## Module 3 — Leadership Culture (Slides 14–17, Hu)

| Criterion | Site element | Location | Status |
|---|---|---|---|
| GLOBE framework explained (CLT vs. observed CEO behavior) | Introductory paragraph in Knowledge section | module-3.html | ✅ |
| GLOBE table verbatim (slide 15): 4 dimensions, CLT + observed scores, gap | .data-table.globe-table with 4 rows (Charismatic 5.85/5.67, Team-oriented 5.73/5.48, Participative 4.99/4.74, Self-protective 3.77/4.11) | module-3.html | ✅ |
| GLOBE gap analysis verbatim (slide 15) | Quoted paragraph below table | module-3.html | ✅ |
| Engineering implications per GLOBE dimension | 4 bullet analysis items below table | module-3.html | ✅ |
| Leadership ethics vignette (slide 17) | VERIFY → DISCUSS → CO-DESIGN → HOLD SIGN-OFF in verbatim sequence | module-3.html | ✅ |
| NSPE Canon I.1 and Rules II.1.b cited | In ethics vignette section | module-3.html | ✅ |
| IEI (2004) cited | In Knowledge section | module-3.html | ✅ |
| In-group/out-group dynamics | GLOBE Plan Ahead checklist, item 1 | module-3.html | ✅ |
| Do/Avoid table (2 rows) | Humane orientation first; rotating leadership caveat | module-3.html | ✅ |
| Branching scenario (leadership vignette, 2 decisions) | Based on slide 17 vignette | module-3.html | ✅ |
| Knowledge checks (3 items) | 3 .kc-item | module-3.html | ✅ |
| Reflection textarea | .reflect-section[data-key="reflect-m3"] | module-3.html | ✅ |

---

## Module 4 — Self-Reflection (Slides 18–23, All members)

| Criterion | Site element | Location | Status |
|---|---|---|---|
| Caroline's verbatim reflection (slide 19) | Collapsible .reflection-card | module-4.html | ✅ |
| Wenkai's verbatim reflection (slide 20) | Collapsible .reflection-card | module-4.html | ✅ |
| Rickey's verbatim reflection (slide 21) | Collapsible .reflection-card with defaults table | module-4.html | ✅ |
| Chris's verbatim reflection (slide 22, table format) | Collapsible .reflection-card with .data-table | module-4.html | ✅ |
| Aureo's verbatim reflection (slide 23) | Collapsible .reflection-card | module-4.html | ✅ |
| Learner defaults gap table (editable) | .data-table with dynamic rows, id="defaults-table" | module-4.html | ✅ |
| Defaults table persisted in localStorage | Via interactions.js saveDefaultsRows() | module-4.html | ✅ |
| Reflection textarea | .reflect-section[data-key="reflect-m4-defaults"] | module-4.html | ✅ |

---

## Module 5 — Ethical Awareness (Slides 24–28, Toevs)

| Criterion | Site element | Location | Status |
|---|---|---|---|
| NSPE Code of Ethics — Canon I.1 and Rule II.1.b | .data-table row 1: Framework / Key Principle / Cross-Cultural Application | module-5.html | ✅ |
| IEI Code of Ethics | .data-table row 2 | module-5.html | ✅ |
| OECD MNE Guidelines Chapter IV & VIII | .data-table row 3 | module-5.html | ✅ |
| ICAR farmer training data (15,000+) | Cited in additional context paragraph | module-5.html | ✅ |
| World Bank Enterprise Survey (2022a) | Cited: 23% firms report electricity as major constraint | module-5.html | ✅ |
| ISRO Chandrayaan-3 (2023) | Cited to counter low-capability assumption | module-5.html | ✅ |
| Agricultural equipment case study (slide 27) | Verbatim context paragraph + 3-stage checklist | module-5.html | ✅ |
| Kearney FDI data (22nd of 25) | info-box | module-5.html | ✅ |
| Do/Avoid table (3 rows) | Local sign-off, spec verification, training requirement | module-5.html | ✅ |
| Branching scenario (2 decisions) | Agricultural equipment deployment scenario | module-5.html | ✅ |
| Knowledge checks (3 items) | NSPE, OECD, ISRO questions | module-5.html | ✅ |
| Reflection textarea | .reflect-section[data-key="reflect-m5"] | module-5.html | ✅ |

---

## Module 6 — Motivation Techniques (Slides 29–34, Hu)

| Criterion | Site element | Location | Status |
|---|---|---|---|
| Herzberg two-factor theory | .data-table: hygiene vs. motivators with India IT examples | module-6.html | ✅ |
| Joseph et al. (2025) verbatim finding (slide 31) | Quoted paragraph in Knowledge section | module-6.html | ✅ |
| Nimmi & Jakubik (2023) workplace wellbeing | Key findings in Knowledge section | module-6.html | ✅ |
| Gupta (2020) LMX and innovation | Key findings in Knowledge section | module-6.html | ✅ |
| PDI + Herzberg interaction | Paragraph in Knowledge section | module-6.html | ✅ |
| Pennsylvania State University (n.d.-a) cited | In citations | module-6.html | ✅ |
| Do/Avoid table (3 rows) | Authority recognition, meaningful work, weekly 1:1 | module-6.html | ✅ |
| Motivation plan builder form | id="motivation-plan-form" with 5 fields + preview | module-6.html | ✅ |
| Branching scenario (2 decisions) | Individual disengagement scenario | module-6.html | ✅ |
| Knowledge checks (3 items) | Joseph, Nimmi, Hofstede+Herzberg | module-6.html | ✅ |
| Reflection textarea | .reflect-section[data-key="reflect-m6"] | module-6.html | ✅ |

---

## Module 7 — Innovation & Diffusion (Slides 35–50, Patel)

| Criterion | Site element | Location | Status |
|---|---|---|---|
| Rogers 5 adopter categories + 16% tipping point | Rendered SVG bell curve (charts.js → rogers-curve div) | module-7.html | ✅ |
| Rogers 5 innovation attributes table | .data-table with Definition + India implication | module-7.html | ✅ |
| UPI case study: 0.92B → 131.1B transactions | Chart.js bar chart + 5-attribute analysis paragraph | module-7.html | ✅ |
| NPCI (2024) and Ministry of Finance (2024) cited | In UPI chart caption + analysis | module-7.html | ✅ |
| Nilekani & Shah (2015) JAM stack | Cited in UPI tipping point context | module-7.html | ✅ |
| Radjou et al. (2012) Jugaad | Referenced in Compatibility row of Rogers attributes table | module-7.html | ✅ |
| Desmarchelier & Fang (2016) bell curve citation | In Rogers bell curve caption | module-7.html | ✅ |
| Accelerators vs. Inhibitors drag-and-sort activity | .sort-activity with 12 cards (6 each), check/reset buttons | module-7.html | ✅ |
| Meyer's 3-step champion framework | 3 .card--blue items (private pre-brief, reframe, local champion) | module-7.html | ✅ |
| Dearing & Kreuter (2010) Mistakes #1, #4, #7 | 3-row .do-avoid-table | module-7.html | ✅ |
| Branching scenario (3 decisions) | IoT deployment scenario (proposal, opening call, pilot ask) | module-7.html | ✅ |
| Knowledge checks (3 items) | Rogers tipping point, Dearing & Kreuter, UPI observability | module-7.html | ✅ |
| Reflection textarea | .reflect-section[data-key="reflect-m7"] | module-7.html | ✅ |

---

## Capstone (Slides 52–54)

| Criterion | Site element | Location | Status |
|---|---|---|---|
| Verbatim Q1 (slide 52) | Question text quoted; response textarea[data-key="capstone-q1"] | capstone.html | ✅ |
| Verbatim Q2 (slide 53) | Question text quoted; response textarea[data-key="capstone-q2"] | capstone.html | ✅ |
| Verbatim Q3 (slide 54) | Question text quoted; response textarea[data-key="capstone-q3"] | capstone.html | ✅ |
| Model answers (draft, awaiting review) | Expandable .open divs (id="model-1/2/3") with [DRAFT] label | capstone.html | ✅ |
| All 4 CQ capabilities required in responses | Word-count hint explicitly says "Touch on Drive, Knowledge, Strategy, Action" | capstone.html | ✅ |
| Responses persisted in localStorage | Via interactions.js initCapstoneResponses() | capstone.html | ✅ |

---

## Site Infrastructure

| Criterion | Site element | Location | Status |
|---|---|---|---|
| Progress saved in localStorage | STORAGE_KEY = 'india-cq-v1'; completed[], reflections, quiz answers | app.js | ✅ |
| Reset progress button | id="reset-progress" on every page, confirm dialog, full wipe | app.js, all pages | ✅ |
| Download completion record | id="download-completion" → buildCompletionHTML() → Blob download | cq-postcheck.html + completion.js | ✅ |
| Completion record includes: name, scores, plan, reflections | buildCompletionHTML() assembles all stored fields | completion.js | ✅ |
| Print/PDF-ready completion record | @media print styles hide nav/buttons | main.css + completion record HTML | ✅ |
| WCAG 2.1 AA: skip link | .skip-link on every page, appears on focus | app.js / all pages | ✅ |
| WCAG 2.1 AA: keyboard nav | :focus-visible outline, role/tabindex on interactive elements | main.css + app.js | ✅ |
| WCAG 2.1 AA: semantic headings | h1 per page, h2 per section, h3 per subsection | all pages | ✅ |
| WCAG 2.1 AA: alt text on charts | aria-label on Chart.js canvas; role="img" + aria-label on SVG | module-1.html, module-7.html | ✅ |
| Color-blind-safe palette | Blue #0072B2 / Orange #D55E00 paired with text labels; never color-only | main.css | ✅ |
| DO/AVOID always labeled, never color-only | th.do-col / th.avoid-col text labels; .do-col-text / .avoid-col-text classes | main.css | ✅ |
| Dark mode | prefers-color-scheme + data-theme toggle | main.css + app.js | ✅ |
| Fonts: Outfit (headings) + Inter (body) | @import in main.css | main.css | ✅ |
| Lucide icons | unpkg.com/lucide@0.447.0 — called with lucide.createIcons() | all pages | ✅ |
| Chart.js 4.4.4 | cdn.jsdelivr.net/npm/chart.js@4.4.4 | module-1.html, module-7.html | ✅ |
| No backend, no login | Pure static HTML/JS/CSS | all files | ✅ |
| Runs from index.html | index.html at project root | index.html | ✅ |
| GitHub Pages compatible | All relative hrefs (href="module-1.html" not "/module-1.html") | all pages | ✅ |
| Module auto-complete (IntersectionObserver) | Marks page complete when module-nav scrolls into view | app.js | ✅ |
| Progress nav pills (all 14 pages) | Built dynamically in buildProgressNav() | app.js | ✅ |
| Overgeneralization warning on each module | .warning-box in every module Knowledge section | modules 1–7 | ✅ |

---

## References & Citations

| Criterion | Site element | Location | Status |
|---|---|---|---|
| All 30 references listed | .ref-list in alphabetical order | references.html | ✅ |
| Deck-exact citation strings (verbatim) | Each string reproduced from slides 57–62 | references.html | ✅ |
| Personal communications note | info-box explaining APA 7th: not in reference list | references.html | ✅ |
| AI use disclosure | info-box with Anthropic APA citation | references.html, about.html | ✅ |
| In-text citations in modules | Appear in Knowledge, Plan Ahead, Do/Avoid, Scenario feedback | all modules | ✅ |

---

## Content Gaps (From content-gaps.md — still open)

| Gap | Location | Status |
|---|---|---|
| Slides 32–33 (M6): SmartArt/image motivation visual | Rebuilt as accessible HTML table using Joseph et al. (2025) + Nimmi & Jakubik (2023) | ⚠️ Reconstructed from references, not verbatim |
| Slide 16 (M3): Leadership visual (SmartArt) | Rebuilt as GLOBE pre-interaction checklist using House et al. (2014) | ⚠️ Reconstructed |
| Slides 4–5 (M1): Country facts with no in-deck citation | Retained; logged in content-gaps.md as unsourced | ⚠️ No citation (logged) |
| FDI rank: 22nd of 25 (M5/M7) vs. 8th emerging market (M5) | Both used; different indexes noted inline | ✅ Resolved |
| Citation discrepancies (5 sources) | Deck versions used as authoritative per PROMPT.md | ✅ Resolved |

---

*Generated during Step 3 of PROMPT.md build process. Update this file if any page content changes after initial build.*
