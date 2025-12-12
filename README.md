## Deep Learning Basics — Interactive Lesson (Section 2.8)

Frontend-only React + TypeScript + Tailwind site that mirrors the book section and adds small demos and checkpoints. No backend or external APIs are required.

### Run locally
```bash
npm install
npm run dev
```
Optional: `npm run build` to produce static assets.

- The page includes an English/中文 toggle in the header; all content and UI text switch together.

### Section Map (book → page → demo/checkpoint)
| Book subsection | Page/component | Demo | Checkpoint |
| --- | --- | --- | --- |
| Learning Objectives | `App` top card | — | — |
| 1) Basic Concepts (DNN) | `1. Deep Neural Networks` → InfoCard | `DepthExpressivenessDemo` | Depth vs width question |
| 2) Difficulties in Training | `2) Difficulties...` section | `LossLandscapeDemo` | Loss-surface question |
| Extended Reading: Universal Approximation Theorem | `Extended Reading` section | `StepApproxDemo` | Approximation question |
| 3) Hinton's Pre-training Method | `3) Hinton's...` section + RBM InfoCard | `PretrainingFlowDemo` | Pre-training rationale question |
| 4) Flourishing Development | `4) The Flourishing Development...` | — | AlexNet depth question |
| Hierarchical Feature Learning (high-level features, example, shared bottom/top, brain comparison) | `2. Hierarchical Feature Learning` | `FeatureHierarchyDemo` | Task-related abstraction question |
| Success Factors (data, compute, open source) | `Success Factors` section | `SuccessFactorsDemo` | — |
| Section Summary | `Section Summary` | — | — |

Each demo follows the guided-learning pattern: goal, control, clear outcome, and reset button. Checkpoints give instant feedback tied to the book's explanations.
