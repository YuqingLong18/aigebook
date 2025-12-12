# AGENTS.md — Frontend-Only Interactive Guided Learning Sites (AI Literacy Book)

## Mission
Build **frontend-only**, **interactive**, **guided-learning** mini-sites that mirror the user’s uploaded book section **very closely** in structure, terminology, and sequencing—while adding **interactive demos** that reinforce the exact concepts in that section.

Primary goals:
1. **Fidelity:** Match the book section’s headings, narrative flow, definitions, and examples.
2. **Pedagogy:** Add interactivity that *clarifies*, not distracts—guided steps, checks for understanding, immediate feedback.
3. **Polish:** Neat, modern, concise UI with excellent readability and performance.
4. **Static:** No backend; everything runs fully in the browser.

Non-goals:
- No server-side rendering requirement (unless explicitly requested later).
- No user accounts, databases, analytics, or authentication.
- No external paid APIs as dependencies for core learning features.

---

## Default Tech Stack (Preferred)
Use these defaults unless the repository already dictates otherwise:
- **Vite + React + TypeScript**
- **Tailwind CSS** for styling
- **MDX** (optional but recommended) to keep content aligned with book text
- **Client-only routing** (React Router) if multiple pages/sections are needed
- **No network dependence** for essential demos (offline-capable)

If the repo is non-React (e.g., vanilla + Web Components), follow existing conventions and keep the deliverable frontend-only.

---

## Content Fidelity Protocol (Critical)
When a book section is provided (uploaded/available in repo), do the following before building UI:

1. **Create a “Section Map”**
   - Extract the section outline: headings/subheadings, key definitions, key examples, activities, misconceptions.
   - Produce a short mapping table (in a dev note or README) linking:
     - `Book subsection → Page/Component → Demo (if any) → Quiz/checkpoint (if any)`

2. **Preserve Wording Where It Matters**
   - Keep technical definitions and key phrases consistent with the book.
   - Do not “improve” terminology if it would diverge from the book’s phrasing.
   - If a simplification is needed for UI microcopy, keep it short and aligned.

3. **Add Interactivity Without Reordering the Logic**
   - Demos should appear **right after** the concept they illustrate.
   - Avoid introducing advanced concepts earlier than the book.

4. **Respect the Book’s Tone**
   - If the section is formal/academic: keep UI copy formal and precise.
   - If it is narrative/story-based: keep UI copy accessible and light, but accurate.

---

## UX / UI Requirements
Visual style:
- White or near-white background, subtle borders, ample whitespace
- Clear typography hierarchy (H1/H2/H3) and consistent spacing
- Minimal color palette; color used only for meaning (state, emphasis, charts)

Layout:
- Max readable width (approx. 880–1000px for text)
- Sticky mini progress indicator for guided lessons (optional)
- Mobile-friendly and responsive

Interaction principles:
- Each interactive element must have:
  - A **goal** (“what you will learn”)
  - A **control** (slider/input/button)
  - A **clear outcome** (visualization/metric/text explanation)
  - A **reset** control

Accessibility:
- Keyboard navigable, sensible focus states
- ARIA labels where needed
- Don’t rely on color alone to communicate meaning

Performance:
- Fast load; minimal dependencies
- Avoid heavy model downloads; prefer toy examples / small datasets
- No blocking animations; keep transitions subtle

---

## Guided Learning Pattern (Standard)
Use a consistent scaffold per subsection:

1. **Concept Card**
   - 3–8 lines summarizing the idea (aligned with book text)

2. **Interactive Demo**
   - One concept per demo; avoid multi-purpose widgets

3. **Guided Steps**
   - “Step 1 / Step 2 / Step 3” with short prompts
   - Optional hints (collapsible)

4. **Checkpoint**
   - 1–3 questions (MCQ or short input)
   - Immediate feedback with concise explanation
   - If wrong: show the relevant snippet/concept reference (not a lecture)

5. **Key Takeaways**
   - 2–5 bullet points mirroring the section summary

---

## Recommended Demo Types for AI Literacy (Choose What Fits the Section)
Select demos that directly match the section topic. Examples:
- **Perceptron / decision boundary**: point classifier with adjustable weights/bias
- **Activation functions**: visualize step/sigmoid/ReLU outputs
- **Gradient descent intuition**: loss curve + parameter slider + “take a step”
- **Overfitting vs generalization**: polynomial fit with train/val toggle
- **Confusion matrix**: thresholds changing precision/recall
- **Embeddings**: 2D toy embedding + cosine similarity explorer
- **Attention intuition**: toy token-to-token weight visualization
- **Bias & fairness**: metric explorer with synthetic groups (careful, non-judgmental framing)
- **Prompting**: sandbox for “instruction vs context” differences (no external calls)

Rules:
- If the demo would require a real model/API, implement a **toy simulation** that teaches the same concept.
- Prefer deterministic behavior (seeded randomness) for reproducibility.

---

## Project Structure (Suggested)
If creating from scratch:

- `src/pages/` — section pages (mirrors book outline)
- `src/components/` — reusable UI components
- `src/demos/` — interactive demos (one folder per demo)
- `src/content/` — MDX/markdown content aligned to book
- `src/lib/` — utilities (math, charts, seed RNG)
- `src/styles/` — global styles

Naming conventions:
- Components: `PascalCase.tsx`
- Demo entry component: `Demo<Name>.tsx`
- One demo per concept; keep each demo small and explainable.

---

## Charts / Visualization Guidance
- Keep charts simple and legible.
- Prefer lightweight libs. If needed:
  - Use SVG/Canvas directly for toy visuals.
  - Avoid heavy charting dependencies unless already present.
- Always label axes and provide a short legend or inline explanation.

---

## Quality Bar / Acceptance Criteria
A deliverable is “done” only if:
1. The page sequence matches the book subsection sequence.
2. Each demo clearly supports a specific subsection concept.
3. The site works fully as a static frontend (no backend).
4. UI is consistent, readable, and responsive.
5. Checkpoints provide immediate, correct feedback.
6. Code is clean, typed (if TS), and components are not overly coupled.
7. No console errors; basic edge cases handled (empty inputs, reset state).

---

## Implementation Workflow (Codex Operating Procedure)
For each book section provided:

1. **Parse & Map**
   - Produce a short internal “Section Map” as described above.

2. **Scaffold Pages**
   - Create pages and navigation reflecting the outline.

3. **Implement Demos**
   - Build the minimal demo that teaches the concept.
   - Add guided steps and a reset.

4. **Add Checkpoints**
   - Add a small quiz/check with feedback aligned to the book’s explanation.

5. **Polish**
   - Improve spacing, typography, and microcopy (without deviating from book).

6. **Self-Review**
   - Verify fidelity to book text and sequence.
   - Run lint/typecheck/build; ensure no runtime errors.

## File/Route Naming (Lessons)
- Keep lesson filenames and source text numeric and level-tagged to avoid collisions:
  - `high-<chapter>-<lesson>.tsx` for high school (e.g., `high-2-8.tsx`).
  - `primary-<unit>-<lesson>.tsx` for primary (e.g., `primary-1-4.tsx`).
  - `middle-<unit>-<lesson>.tsx` for middle school when added.
- Routes follow the same numeric pattern: `/high/ch/<chapter>/lesson/<lesson>` (mirror for primary/middle when needed).
- Source text files: `source_text/<level>-<chapter>-<lesson>.txt`.
- Navigation labels can say “Unit” or “Chapter,” but filenames stay numeric for clarity and grepability.

## Lesson Navigation (TOC)
- Each lesson page should include a left-side fixed or sticky table of contents with anchor links to main sections/subsections.
- TOC should be collapsible to maximize content area (e.g., “Hide/Show” control), default open on desktop.
- When collapsed, the TOC footprint should shrink horizontally (not just hide text) so lesson cards expand to use the extra width.
- Section cards should include stable `id`s to enable intra-page navigation (e.g., `#dnn`, `#pretrain`, `#summary`).
- TOC labels should mirror the lesson headings/subheadings in both languages; clicking jumps to the corresponding section.

---

## “Do Not Do” List
- Do not introduce new sections that aren’t in the book without explicit instruction.
- Do not paraphrase core definitions into different terminology.
- Do not add distracting gamification, loud colors, or excessive motion.
- Do not require network calls for essential learning features.
- Do not include copyrighted figures from the book unless explicitly permitted.

---

## Deliverables Per Section
Minimum:
- One page mirroring the section
- 1–3 interactive demos (only where pedagogically justified)
- 1–3 checkpoints per major subsection
- Clean navigation + progress indicator (optional)

Nice-to-have:
- “Teacher mode” toggle to reveal answers/explanations (still frontend-only)
- Exportable “notes” summary (client-only)

---

## When Requirements Are Ambiguous
Default to:
- Fidelity over creativity
- Simpler demos over feature-rich ones
- Clear pedagogy over visual flair

If multiple interpretations exist, implement the most conservative option that preserves the book’s structure and concepts.

---

## Local Dev Commands (Template)
(Adjust to repository reality.)

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

---

## Notes for Future Polishing
- Keep a single source of truth for content (MDX or structured JSON).
- Consider a reusable `GuidedLesson` component to standardize the pattern:
  - `Concept → Demo → Steps → Checkpoint → Takeaways`
