# India CQ Training Site — Build Prompt
# ENGR 802: Engineering Across Cultures and Nations — Penn State

You are building a professional, self-paced interactive training website from our team's PowerPoint deck. A fellow engineer must be able to complete it on their own. Audience: U.S.-trained engineers (ENGR 802: Engineering Across Cultures, Penn State) preparing to work with Indian engineering teams. Goal: raise the learner's Cultural Intelligence (CQ) for India across all four capabilities (Drive, Knowledge, Strategy, Action) by having them apply the course content throughout, not just read it.

## Source material
Use ONLY these two files. Do not invent facts, statistics, or sources.
1. `Team India Final Project.pptx` (62 slides). Extract slide text, tables, chart data and speaker notes with python-pptx.
   - S1 Country & Cultural Dimensions Overview, Caroline Auer (slides 3–7)
   - S2 Business & Engineering Culture, Aureo Zanon (8–13)
   - S3 Leadership Culture, Wenkai Hu (14–17)
   - S4 Self-Reflection, all members: Caroline, Wenkai, Rickey, Chris, Aureo (18–23)
   - S5 Ethical Awareness in Agricultural Equipment Manufacturing, Christopher Toevs (24–30)
   - S6 Motivation Techniques, Wenkai Hu (31–34)
   - S7 Innovation & Diffusion of Innovations, Rickey Patel (35–44)
   - Appendix: 18 peer questions, five themes, TOP 3 selection (47–55)
   - Master APA reference list (56–62)
2. `References_Organizer_Final.docx`: citations, evidence notes and the slide-to-source mapping.

Citation rules: the deck has been recorded, so citations are frozen. Reproduce every citation and in-text form exactly as it appears in the deck's reference list (slides 57–62) and the organizer (APA 7). Do not correct or update any of them. When describing what a source supports, use the claims the deck attributes to it. Interviews (Mark, personal communication, November 14, 2026) and classmate questions are cited in text only. If a slide states a fact with no source, keep it and log it in `content-gaps.md`.

## Tech and deliverable
- Static site: HTML/CSS/vanilla JS (Vite optional). No backend, no login; it must run from `index.html` and deploy to GitHub Pages.
- Save progress, quiz answers and reflections in localStorage, and include a "Reset progress" button.
- A "Download my completion record" button that exports a printable/PDF page containing name, date, module scores, reflections, CQ before/after and the learner's 30-day action plan.
- Accessibility: WCAG 2.1 AA, keyboard navigable, semantic headings, alt text on every chart and icon.
- Color-blind-safe palette: blue `#0072B2` for what works or enablers, orange `#D55E00` for risks or barriers, grays for everything else. Always pair color with a label or icon.
- Rebuild the deck's charts as accessible SVG or Chart.js from its own data:
  - Hofstede scores: PDI 77, IDV 48, MAS 56, UAI 40, LTO 51, IVR 26
  - Rogers adopter shares: 2.5 / 13.5 / 34 / 34 / 16%
  - UPI annual volume FY18–FY24: 0.92, 5.35, 12.5, 22.3, 46, 83.7, 131.1 billion
  - Kearney 2026 FDI Confidence Index: India ranked 22 of 25
  - The GLOBE table on slide 15
- Professional look: one heading font, one body font, generous white space, a consistent outline icon set (e.g. Lucide). No stock photos, no emoji.

## Site structure
1. **Welcome:** purpose, ~60–90 min estimate, navigation, and learning objectives mapped to the four CQ capabilities.
2. **CQ pre-check:** a self-rating on each capability plus 1–2 India-specific items per capability. Show it again at the end for a before/after comparison.
3. **Modules 1–7**, one per deck section, each with a byline naming its author. Every module follows the same template:
   - **Why this matters to you (CQ Drive):** a second-person engineering scenario with concrete stakes, such as a stalled design review, a safety sign-off, a supplier decision or a technology rollout.
   - **What you need to know (CQ Knowledge):** accurate, nuanced content from the slides with inline APA citations and a Sources footnote. Include a "Watch out for overgeneralizing" note: India is regionally diverse, and national scores describe tendencies, not individuals.
   - **Plan ahead (CQ Strategy):** a framework the learner applies before acting, e.g. a high-PDI pre-meeting checklist, Meyer's change approach, Rogers' categories used to choose champions, or an ethics test drawing on NSPE, IEI and OECD.
   - **Do this, not that (CQ Action):** a blue "Do" / orange "Avoid" table with exact phrasing scripts and a one-line reason for each.
   - **Apply it:** a branching scenario with 2–3 decision points and cited feedback on every choice, plus 3–5 knowledge checks with explanations for every option.
   - **Reflect:** one open-text prompt connecting the module to the learner's own work.
4. **Module-specific interactions:**
   - **M1:** Hofstede explorer. Each dimension shows what it means for an engineering team (Hofstede et al., 2010; Juhász, 2014).
   - **M2:** Outsourcing-relationship scenario (Heeks et al., 2001; Krishna et al., 2004; Meyer, 2014).
   - **M3:** GLOBE comparison of culturally endorsed vs. observed leadership, and the slide 17 ethics vignette.
   - **M4:** The team's five self-reflections as worked examples, then the learner builds their own "my defaults vs. India's expectations" table.
   - **M5:** "Would you authorize shipment?" as a full branching ethics case covering supplier selection, operator instructions and safe use.
   - **M6:** "Three actions an engineering leader can use Monday," turned into a build-your-own motivation plan for a named Indian team member (Gupta, 2020; Joseph et al., 2025; Nimmi & Jakubik, 2023).
   - **M7:** Interactive Rogers curve with the 16% tipping point; UPI growth chart; accelerators vs. inhibitors sorting activity; "Champions, Not Campaigns" mistake-spotting (Dearing & Kreuter, 2010; Meyer, 2014); FDI rank strip.
5. **Capstone, the TOP 3 peer questions** (slides 52–54): who has the final say when engineers disagree, who owns a failure at the interfaces, and which CQ capability comes first. Each is an integrated scenario that draws on several modules and asks for a written response. After the learner submits, show a 150–250-word model answer structured as Drive, Knowledge, Strategy and Action, citing only sources already in the deck. Draft these yourself, and also save them to `model-answers-for-review.md` for team review.
6. **Personal 30-day CQ action plan:** one concrete behavior per capability for the learner's first India-based project.
7. **CQ post-check and completion record.**
8. **References:** the full list from the deck, alphabetized, hanging indents, with a note on personal communications.
9. **About this training:** team members and the modules each contributed, course context, and the AI-use disclosure from the organizer.

## Rubric (build every row to the top rating)
- **CQ Drive (10):** every module opens with engineering-specific stakes and real scenarios, never abstract appeals.
- **CQ Knowledge (10):** accurate, nuanced, evidence-backed on every claim, with explicit cautions against stereotyping.
  - All required topics covered in depth: country overview, business/engineering culture, leadership, self-reflection, ethics, motivation, innovation.
- **CQ Strategy (10):** every module gives a preparation framework the learner uses before an interaction.
- **CQ Action (10):** every module gives specific behaviors and phrasing, with what to do differently and why.
- **Cultural Specificity & Evidence (10):** recommendations tie to India-specific evidence: Hofstede/Juhász, GLOBE, Indian motivation studies, NPCI/UPI, Kearney, World Bank, IEI, ICAR, the Mark interview. Generic advice is rare and labeled.
- **Assignment Requirements (25):** every component above present and professional; no placeholders, broken links or console errors.
- **Peer Contributions (25):** each member's section appears substantially, every module credits its author, and the About page summarizes each contribution.

## Process
1. Extract the deck and organizer content into `content/` (JSON/Markdown). Show me the outline (modules, objectives, interactions) before building.
2. Build the site.
3. Write `rubric-audit.md`: a table of each rubric row × each module naming the on-page element that satisfies it. Fix any gaps.
4. Run an accessibility check (axe or Lighthouse) and a link check, and report the results.
5. Give me the commands to run locally and to deploy to GitHub Pages, and point me to `model-answers-for-review.md` and `content-gaps.md`.
