# Content Gaps Log
# Facts stated on slides without an in-deck source citation, and unresolved extraction issues.
# Updated after PPTX extraction (2026-11-22).

| Slide # | Section | Claim / Statistic | Action Taken |
|---------|---------|-------------------|--------------|
| 4 | M1 | "7th largest country," "2nd most populated," "English and Hindi are official languages, 22 scheduled languages" | No in-deck citation on this slide — kept verbatim on site |
| 4 | M1 | "Hinduism is the dominant religion, though there is also a large Muslim population" | No in-deck citation — kept verbatim on site |
| 4 | M1 | "Spirituality, community, food, and hospitality are all central values" | No in-deck citation — kept verbatim on site |
| 5 | M1 | Key Events in Indian History (Mughal Empire, British Rule, border disputes) | No in-deck citation — kept verbatim on site |
| 6 | M1 | Hofstede slide (chart image) — text not extracted by python-pptx because slide uses chart/image objects | Speaker notes extracted: "India's culture profile mainly defined by high PDI and low uncertainty avoidance and indulgence." Chart data sourced from PROMPT.md (PDI 77, IDV 48, MAS 56, UAI 40, LTO 51, IVR 26) which matches slide 37 and references |
| 11 | M2 | English vocabulary table (do the needful, prepone, revert, lakh/crore, namaste) | No separate citation on slide — labeled "Vocabulary and habits: presenter's experience with India-based teams." Kept verbatim. |
| 16 | M3 | "Respect Hierarchy. Make Technical Feedback Easy." — appears to be a visual/table, only title extracted | Sparse text extraction; content likely SmartArt or image-based. Reconstruct from context (slide 15 GLOBE table + slide 17 scenario). |
| 25 | M5 | "India's emerging-market FDI rank in 2026: 8th (5th in 2025)" | Cited (Kearney, 2026, fig. 5) on the slide — keep. Note this is the emerging-market rank; overall rank is 22nd of 25 (slide 42). |
| 25 | M5 | "27.2% of surveyed firms reporting a bribe request" | Cited (World Bank, 2022) on the slide — keep. |
| 32–33 | M6 | Motivation theory slides (Herzberg, Maslow, McClelland) — sparse text extraction indicates chart/visual content not captured | Content referenced via (Pennsylvania State University, n.d.-a) and research citations. Text extracted: slide 32 title "What Motivates Indian Engineering Professionals?"; slide 33 "What Does India-Specific Research Actually Show?" Full chart content not capturable from PPTX via python-pptx (likely SmartArt/image). Site will rebuild these as accessible HTML tables from the evidence descriptions in references.json. |
| 36 | M7 | Section opener references "NPCI via PIB" for UPI volume data | The on-slide citation says "Sources: Hofstede Insights (2026); Rogers (2003); Mark, personal communication, Nov. 14, 2026" — NPCI data cited fully on slide 39. Keep slide 39's citation. |

## Citation discrepancies (DOCX organizer vs. deck reference list — deck is authoritative per PROMPT.md)

| Source | Deck (authoritative, slides 57–62) | DOCX organizer | Note |
|--------|-------------------------------------|-----------------|------|
| Heeks (2001) | "Heeks, R., Krishna, S., Nicholson, B., & Sahay, S. (2001). **Synching or sinking: Global software outsourcing relationships.** IEEE Software, 18(2), **54–60**." | "Heeks, R., Nicholson, B., & Schecter, A. (2001). **Software outsourcing from developing nations.** IEEE Software, 18(2), **84–86**." | Different authors, title, and page numbers — likely two different papers. Deck version used. |
| Juhász (2014) | "Juhász, **I.** (2014). **The workforce in Indian organizations: An analysis based upon the dimensions of Hofstede's model.**" | "Juhász, **T.** (2014). **Testing the Hofstede model in Hungarian-Indian context.**" | Different first initial and title. Deck version used. |
| Gupta (2020) | "Gupta, **V.** (2020). **Relationships between leadership, motivation and employee-level innovation: Evidence from India.** Personnel Review, **49(7)**." | "Gupta, **B. B.** (2020). **The indirect impact of organizational culture on employee creativity and innovative performance.** International Journal of Innovation Management, **24(6)**." | Different first initial, title, and journal. Deck version used. |
| Nimmi & Jakubik (2023) | "**Achieving workplace wellbeing among Indian IT engineers.** Journal of Career Development, **50(5), 1097–1115**." | "**Implications of wellbeing interventions on work engagement and job performance of Indian IT engineers.** Knowledge Management Research & Practice, **21(3), 553–563**." | Same authors; different title and journal. Deck version used. |
| Desmarchelier & Fang (2016) | "**Before the bell curve: Technology diffusion across income groups.** Research Policy, **45(6)**." | "**National culture and innovation diffusion: Exploratory insights from agent-based modeling.** Technological Forecasting and Social Change, **105**." | Same authors; different title and journal. Deck version used. |

## Resolved items
- PPTX missing (prior extraction) → **RESOLVED**: PPTX extracted 2026-11-22; 62 slides, 9 tables
- GLOBE table (slide 15) → **RESOLVED**: exact 4-row table extracted verbatim
- Capstone verbatim question text (slides 52–54) → **RESOLVED**: all three full questions extracted
- Team self-reflections (slides 19–23) → **RESOLVED**: all five extracted verbatim
- Section 7 tables (slides 39–42) → **RESOLVED**: Rogers attributes, Accelerators/Inhibitors, Champions/Mistakes, FDI risks all extracted
