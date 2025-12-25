import { useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { FigureCard } from "../components/FigureCard";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { MPNeuronDemo } from "../demos/MPNeuronDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function PrimaryLesson7_1({ lang }: LessonProps) {
  const isZh = lang === "zh";
  const ui = {
    reset: isZh ? "重置" : "Reset",
    checkpointTag: isZh ? "小测" : "Checkpoint",
    correctLabel: isZh ? "答对啦" : "Correct",
    incorrectLabel: isZh ? "再想想" : "Try again",
    guidedTitle: isZh ? "一起做" : "Try it",
  };

  const t = content[lang];
  const toc = [
    { id: "learning-objectives", label: t.learningObjectivesTitle },
    { id: "intro", label: t.introTitle },
    { id: "pitts", label: t.pittsTitle },
    { id: "collaboration", label: t.collaborationTitle },
    { id: "mp", label: t.mpTitle },
    { id: "food", label: t.foodTitle },
    { id: "history", label: t.historyTitle },
    { id: "summary", label: t.summaryTitle },
  ];

  return (
    <div className="flex gap-6">
      <LessonToc lang={lang} items={toc} />

      <div className="flex-1 space-y-6">
        <SectionBlock id="learning-objectives" title={t.learningObjectivesTitle}>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
            {t.learningObjectives.map((obj) => (
              <li key={obj}>{obj}</li>
            ))}
          </ul>
        </SectionBlock>

        <SectionBlock id="intro" title={t.introTitle} eyebrow={t.introEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.introText}</p>
        </SectionBlock>

        <SectionBlock id="pitts" title={t.pittsTitle} eyebrow={t.pittsEyebrow}>
          <InfoCard title={t.pittsConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.pittsConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.pittsParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.pittsFigure.label}
            caption={t.pittsFigure.caption}
            placeholder={t.pittsFigure.placeholder}
          />
          <PittsTimelineDemo
            lang={lang}
            title={t.pittsDemo.title}
            goal={t.pittsDemo.goal}
            resetLabel={ui.reset}
            events={t.pittsDemo.events}
            labels={t.pittsDemo.labels}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.pittsSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.pittsCheckpoint.prompt}
            options={t.pittsCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="collaboration" title={t.collaborationTitle} eyebrow={t.collaborationEyebrow}>
          <InfoCard title={t.collaborationConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.collaborationConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.collaborationParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.collaborationFigure.label}
            caption={t.collaborationFigure.caption}
            placeholder={t.collaborationFigure.placeholder}
          />
          <CollaborationBridgeDemo
            lang={lang}
            title={t.collaborationDemo.title}
            goal={t.collaborationDemo.goal}
            resetLabel={ui.reset}
            viewpoints={t.collaborationDemo.viewpoints}
            labels={t.collaborationDemo.labels}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.collaborationSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.collaborationCheckpoint.prompt}
            options={t.collaborationCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="mp" title={t.mpTitle} eyebrow={t.mpEyebrow}>
          <InfoCard title={t.mpConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.mpConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.mpParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <div className="grid gap-3 md:grid-cols-2">
            {t.mpFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <MPNeuronDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.mpSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.mpCheckpoint.prompt}
            options={t.mpCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="food" title={t.foodTitle} eyebrow={t.foodEyebrow}>
          {t.foodParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <div className="grid gap-3 md:grid-cols-2">
            {t.foodFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <AnalogyExplorerDemo
            lang={lang}
            title={t.foodDemo.title}
            goal={t.foodDemo.goal}
            resetLabel={ui.reset}
            analogies={t.foodDemo.analogies}
            labels={t.foodDemo.labels}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.foodSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.foodCheckpoint.prompt}
            options={t.foodCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="history" title={t.historyTitle} eyebrow={t.historyEyebrow}>
          <InfoCard title={t.historyConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.historyConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.historyParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <PainSignalDemo
            lang={lang}
            title={t.historyDemo.title}
            goal={t.historyDemo.goal}
            resetLabel={ui.reset}
            steps={t.historyDemo.steps}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.historySteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.historyCheckpoint.prompt}
            options={t.historyCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="summary" title={t.summaryTitle} eyebrow={t.summaryEyebrow}>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
            {t.summaryPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SectionBlock>
      </div>
    </div>
  );
}

type TimelineEvent = {
  key: string;
  label: string;
  detail: string;
};

function PittsTimelineDemo({
  lang,
  title,
  goal,
  resetLabel,
  events,
  labels,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  events: TimelineEvent[];
  labels: { pick: string; detail: string };
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(events[0]?.key ?? "");
  const current = events.find((event) => event.key === active) ?? events[0];

  const reset = () => {
    setActive(events[0]?.key ?? "");
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
            {isZh ? "互动演示" : "Interactive Demo"}
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{title}</p>
          <p className="mt-1 text-xs text-slate-600">{goal}</p>
        </div>
        <button
          type="button"
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
          onClick={reset}
          aria-label={resetLabel}
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.pick}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {events.map((event) => {
            const selected = event.key === active;
            return (
              <button
                key={event.key}
                type="button"
                className={[
                  "rounded-full border px-3 py-1 text-xs font-semibold transition",
                  selected
                    ? "border-brand-500 bg-brand-50 text-brand-700"
                    : "border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900",
                ].join(" ")}
                onClick={() => setActive(event.key)}
              >
                {event.label}
              </button>
            );
          })}
        </div>
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.detail}</p>
          <p className="mt-2 text-sm font-semibold text-slate-900">{current.detail}</p>
        </div>
      )}
    </div>
  );
}

type Viewpoint = {
  key: string;
  label: string;
  strength: string;
  role: string;
};

function CollaborationBridgeDemo({
  lang,
  title,
  goal,
  resetLabel,
  viewpoints,
  labels,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  viewpoints: Viewpoint[];
  labels: { strength: string; role: string };
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(viewpoints[0]?.key ?? "");
  const current = viewpoints.find((item) => item.key === active) ?? viewpoints[0];

  const reset = () => {
    setActive(viewpoints[0]?.key ?? "");
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
            {isZh ? "互动演示" : "Interactive Demo"}
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{title}</p>
          <p className="mt-1 text-xs text-slate-600">{goal}</p>
        </div>
        <button
          type="button"
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
          onClick={reset}
          aria-label={resetLabel}
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {viewpoints.map((viewpoint) => {
          const selected = viewpoint.key === active;
          return (
            <button
              key={viewpoint.key}
              type="button"
              className={[
                "rounded-full border px-3 py-1 text-xs font-semibold transition",
                selected
                  ? "border-brand-500 bg-brand-50 text-brand-700"
                  : "border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900",
              ].join(" ")}
              onClick={() => setActive(viewpoint.key)}
            >
              {viewpoint.label}
            </button>
          );
        })}
      </div>

      {current && (
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.strength}</p>
            <p className="mt-2 text-sm font-semibold text-slate-900">{current.strength}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.role}</p>
            <p className="mt-2 text-sm font-semibold text-slate-900">{current.role}</p>
          </div>
        </div>
      )}
    </div>
  );
}

type Analogy = {
  key: string;
  label: string;
  insight: string;
  caution: string;
};

function AnalogyExplorerDemo({
  lang,
  title,
  goal,
  resetLabel,
  analogies,
  labels,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  analogies: Analogy[];
  labels: { insight: string; caution: string };
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(analogies[0]?.key ?? "");
  const current = analogies.find((item) => item.key === active) ?? analogies[0];

  const reset = () => {
    setActive(analogies[0]?.key ?? "");
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
            {isZh ? "互动演示" : "Interactive Demo"}
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{title}</p>
          <p className="mt-1 text-xs text-slate-600">{goal}</p>
        </div>
        <button
          type="button"
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
          onClick={reset}
          aria-label={resetLabel}
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 grid gap-2 md:grid-cols-2">
        {analogies.map((item) => {
          const selected = item.key === active;
          return (
            <button
              key={item.key}
              type="button"
              className={[
                "rounded-xl border px-3 py-2 text-left text-sm font-semibold transition",
                selected
                  ? "border-brand-500 bg-brand-50 text-brand-700"
                  : "border-slate-200 text-slate-700 hover:border-slate-300",
              ].join(" ")}
              onClick={() => setActive(item.key)}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.insight}</p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{current.insight}</p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.caution}</p>
          <p className="mt-1 text-sm text-slate-700">{current.caution}</p>
        </div>
      )}
    </div>
  );
}

function PainSignalDemo({
  lang,
  title,
  goal,
  resetLabel,
  steps,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  steps: string[];
}) {
  const isZh = lang === "zh";
  const [index, setIndex] = useState(0);

  const reset = () => {
    setIndex(0);
  };

  const next = () => {
    setIndex((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const back = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
            {isZh ? "互动演示" : "Interactive Demo"}
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{title}</p>
          <p className="mt-1 text-xs text-slate-600">{goal}</p>
        </div>
        <button
          type="button"
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
          onClick={reset}
          aria-label={resetLabel}
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {isZh ? "步骤" : "Step"} {index + 1}/{steps.length}
        </p>
        <p className="mt-2 text-sm font-semibold text-slate-900">{steps[index]}</p>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={back}
          disabled={index === 0}
          className={[
            "rounded-full border px-3 py-1 text-xs font-semibold transition",
            index === 0
              ? "cursor-not-allowed border-slate-200 text-slate-400"
              : "border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900",
          ].join(" ")}
        >
          {isZh ? "上一步" : "Back"}
        </button>
        <button
          type="button"
          onClick={next}
          disabled={index === steps.length - 1}
          className={[
            "rounded-full border px-3 py-1 text-xs font-semibold transition",
            index === steps.length - 1
              ? "cursor-not-allowed border-slate-200 text-slate-400"
              : "border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900",
          ].join(" ")}
        >
          {isZh ? "下一步" : "Next"}
        </button>
      </div>
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand the story of Pitts and McCulloch and their neural model.",
      "Know the M-P neuron model and the power of analogy-based innovation.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "Before deep learning, Pitts and McCulloch proposed modeling the nervous system. Their ideas paved the way for artificial neural networks.",
    pittsTitle: "1. A Genius from Poverty",
    pittsEyebrow: "Walter Pitts",
    pittsConceptTitle: "Concept Card",
    pittsConceptLines: [
      "Pitts was born in 1923 in a poor family in Detroit.",
      "He taught himself logic and math and impressed Bertrand Russell.",
      "His curiosity led him to Carnap and Rashevsky's circles in Chicago.",
    ],
    pittsParas: [
      "Pitts read Principia Mathematica at age 12 and wrote to Russell about errors he found.",
      "Russell invited him to study at Cambridge, but Pitts could not afford the trip.",
      "In 1938, Pitts met Rudolf Carnap and joined a logic study group, continuing his self-education.",
    ],
    pittsFigure: {
      label: "Figure 7-1",
      caption: "Walter Pitts.",
      placeholder: "Illustration placeholder",
    },
    pittsDemo: {
      title: "Pitts Timeline",
      goal: "Follow key moments in Pitts's early life and learning.",
      labels: {
        pick: "Pick a moment",
        detail: "Detail",
      },
      events: [
        {
          key: "1923",
          label: "1923",
          detail: "Born in Detroit; grew up in a poor family.",
        },
        {
          key: "1935",
          label: "Age 12",
          detail: "Read Principia Mathematica and wrote to Bertrand Russell.",
        },
        {
          key: "1938",
          label: "1938",
          detail: "Met Carnap in Chicago and joined a logic study group.",
        },
        {
          key: "rashevsky",
          label: "Seminars",
          detail: "Discussed theoretical biology with Nicolas Rashevsky.",
        },
      ],
    },
    pittsSteps: [
      "Choose a timeline point.",
      "Read the detail.",
      "Explain how curiosity changed Pitts's path.",
    ],
    pittsCheckpoint: {
      prompt: "What did Pitts do at age 12?",
      options: [
        {
          label: "He read Principia Mathematica and wrote to Russell.",
          correct: true,
          explanation: "He found errors and wrote a long letter to Russell.",
        },
        {
          label: "He entered Cambridge University.",
          correct: false,
          explanation: "He could not afford to go to Cambridge.",
        },
        {
          label: "He became a university professor.",
          correct: false,
          explanation: "He was still a young student.",
        },
      ],
    },
    collaborationTitle: "2. A Historic Collaboration",
    collaborationEyebrow: "McCulloch meets Pitts",
    collaborationConceptTitle: "Concept Card",
    collaborationConceptLines: [
      "McCulloch was a neurophysiologist; Pitts was a logician.",
      "They met in 1942 and worked together in Chicago.",
      "Their 1943 paper launched artificial neural networks.",
    ],
    collaborationParas: [
      "McCulloch earned his PhD in 1927 and worked in neurophysiology before moving to Chicago in 1941.",
      "He welcomed the young Pitts into his home and they began modeling the nervous system.",
      "Their paper A Logical Calculus of the Ideas Immanent in Nervous Activity used binary logic to describe thought.",
    ],
    collaborationFigure: {
      label: "Figure 7-2",
      caption: "Warren McCulloch.",
      placeholder: "Illustration placeholder",
    },
    collaborationDemo: {
      title: "Logic Meets Biology",
      goal: "See how their different strengths formed one breakthrough.",
      labels: {
        strength: "Strength",
        role: "Contribution",
      },
      viewpoints: [
        {
          key: "pitts",
          label: "Pitts",
          strength: "Deep logic and mathematics.",
          role: "Formulated binary logic for neurons.",
        },
        {
          key: "mcculloch",
          label: "McCulloch",
          strength: "Neurophysiology and brain science.",
          role: "Linked neuron behavior to circuits.",
        },
        {
          key: "together",
          label: "Together",
          strength: "Logic + biology working as one team.",
          role: "Published the 1943 paper that inspired neural networks.",
        },
      ],
    },
    collaborationSteps: [
      "Select a viewpoint.",
      "Compare strengths and contributions.",
      "Explain why collaboration mattered.",
    ],
    collaborationCheckpoint: {
      prompt: "What did their 1943 paper achieve?",
      options: [
        {
          label: "It used binary logic to model nervous activity.",
          correct: true,
          explanation: "This work launched artificial neural networks.",
        },
        {
          label: "It built a full computer from scratch.",
          correct: false,
          explanation: "The paper was a mathematical model, not a computer build.",
        },
        {
          label: "It proved neurons learn weights automatically.",
          correct: false,
          explanation: "Learning weights came later with the perceptron.",
        },
      ],
    },
    mpTitle: "3. Introduction to the M-P Neuron Model",
    mpEyebrow: "Binary firing",
    mpConceptTitle: "Concept Card",
    mpConceptLines: [
      "Neurons receive inputs through dendrites and fire through axons.",
      "Pitts and McCulloch modeled firing as 1 or 0.",
      "An M-P neuron sums weighted inputs and compares with a threshold.",
    ],
    mpParas: [
      "A single neuron can look simple, but billions of them create complex intelligence.",
      "The M-P neuron uses fixed weights and outputs only 0 or 1, so it cannot learn.",
      "Even so, the model proved that simple units can form powerful systems.",
    ],
    mpFigures: [
      {
        label: "Figure 7-3",
        caption: "The structure of neurons in the human brain.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 7-4",
        caption: "The M-P neuron model.",
        placeholder: "Illustration placeholder",
      },
    ],
    mpSteps: [
      "Adjust weights and threshold.",
      "Observe when the neuron fires.",
      "Explain why the M-P neuron is binary.",
    ],
    mpCheckpoint: {
      prompt: "Why is the M-P neuron called a binary model?",
      options: [
        {
          label: "It only outputs 0 or 1 based on a threshold.",
          correct: true,
          explanation: "It fires or does not fire, like on/off.",
        },
        {
          label: "It uses a keyboard with two keys.",
          correct: false,
          explanation: "The model is about neuron firing, not keyboards.",
        },
        {
          label: "It can learn any number of outputs.",
          correct: false,
          explanation: "The output is limited to 0 or 1.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Analogy thinking",
    foodParas: [
      "Pitts and McCulloch did not copy every biological detail. They borrowed the core idea of binary firing.",
      "Many inventions use analogy, like planes inspired by birds without flapping wings.",
    ],
    foodFigures: [
      {
        label: "Figure 7-5",
        caption: "Artificial neural networks and the human nervous system.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 7-6",
        caption: "Bird flight and airplane design.",
        placeholder: "Illustration placeholder",
      },
    ],
    foodDemo: {
      title: "Analogy Explorer",
      goal: "See how core ideas are borrowed without copying everything.",
      labels: {
        insight: "Core idea",
        caution: "Not copied",
      },
      analogies: [
        {
          key: "neuron",
          label: "Nervous system -> Neural network",
          insight: "Neurons fire in binary and sum inputs.",
          caution: "Biochemical details are not copied.",
        },
        {
          key: "bird",
          label: "Birds -> Airplanes",
          insight: "Lift and airflow inspire wing design.",
          caution: "Planes do not flap their wings.",
        },
      ],
    },
    foodSteps: [
      "Choose an analogy.",
      "Identify the core idea.",
      "Explain what is simplified.",
    ],
    foodCheckpoint: {
      prompt: "What is the main lesson about analogy-based innovation?",
      options: [
        {
          label: "Borrow core ideas without copying every detail.",
          correct: true,
          explanation: "The model keeps key features and simplifies the rest.",
        },
        {
          label: "Only exact copying leads to inventions.",
          correct: false,
          explanation: "The book stresses simplified inspiration.",
        },
        {
          label: "Analogy is useless in science.",
          correct: false,
          explanation: "Analogy has produced many inventions.",
        },
      ],
    },
    historyTitle: "History Corner",
    historyEyebrow: "Pain signals",
    historyConceptTitle: "Concept Card",
    historyConceptLines: [
      "Pain signals travel from sensory nerves to the brain.",
      "Neurotransmitters pass signals across neurons.",
      "Pain protects us from danger.",
    ],
    historyParas: [
      "Signals travel from skin to the central nervous system and finally to the brain.",
      "People who cannot feel pain may not notice serious injuries.",
    ],
    historyDemo: {
      title: "Pain Signal Relay",
      goal: "Step through how pain signals reach the brain.",
      steps: [
        "Injury activates sensory nerve endings.",
        "Signals travel along the axon to the spinal cord.",
        "Neurotransmitters carry the signal to the next neuron.",
        "The brain recognizes the signal as pain.",
      ],
    },
    historySteps: [
      "Click next to follow the relay.",
      "Notice the role of neurotransmitters.",
      "Explain why pain is protective.",
    ],
    historyCheckpoint: {
      prompt: "Why is pain important?",
      options: [
        {
          label: "It warns us of danger and protects the body.",
          correct: true,
          explanation: "Pain helps us react quickly to harm.",
        },
        {
          label: "It makes injuries heal faster.",
          correct: false,
          explanation: "Pain itself does not heal injuries.",
        },
        {
          label: "It prevents neurons from firing.",
          correct: false,
          explanation: "Pain is a signal, not a blocker.",
        },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryEyebrow: "Summary",
    summaryPoints: [
      "Pitts overcame poverty through self-learning and logic.",
      "McCulloch and Pitts combined biology and logic in 1943.",
      "The M-P neuron sums weighted inputs and fires in binary.",
      "Analogy-based innovation keeps core ideas and simplifies details.",
      "Pain signals protect us by reaching the brain quickly.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解皮茨与麦卡洛克的故事及其提出的神经模型。",
      "理解 M-P 神经元模型源于神经工作方式，认识类比创新方法。",
    ],
    introTitle: "故事开头",
    introEyebrow: "开场",
    introText:
      "在深度学习出现之前，皮茨与麦卡洛克就提出了用数学模型模拟神经系统的想法，为人工神经网络奠定了基础。",
    pittsTitle: "1. 贫寒中走出的天才",
    pittsEyebrow: "沃尔特·皮茨",
    pittsConceptTitle: "概念卡",
    pittsConceptLines: [
      "皮茨 1923 年出生于底特律的贫困家庭。",
      "他自学逻辑与数学，写信给伯特兰·罗素。",
      "在芝加哥结识卡尔纳普与拉谢夫斯基。",
    ],
    pittsParas: [
      "12 岁时他连续三天在图书馆阅读《数学原理》，并发现书中错误。",
      "罗素邀请他去剑桥学习，但他因贫困未能成行。",
      "1938 年他加入卡尔纳普的研究小组，继续自学。",
    ],
    pittsFigure: {
      label: "图 7-1",
      caption: "沃尔特·皮茨。",
      placeholder: "示意图",
    },
    pittsDemo: {
      title: "皮茨时间线",
      goal: "回顾皮茨成长中的关键时刻。",
      labels: {
        pick: "选择节点",
        detail: "细节",
      },
      events: [
        {
          key: "1923",
          label: "1923",
          detail: "出生在贫困家庭，却有强烈求知欲。",
        },
        {
          key: "1935",
          label: "12 岁",
          detail: "阅读《数学原理》并给罗素写信。",
        },
        {
          key: "1938",
          label: "1938",
          detail: "前往芝加哥听讲座并结识卡尔纳普。",
        },
        {
          key: "rashevsky",
          label: "研讨会",
          detail: "参与拉谢夫斯基的理论生物学讨论。",
        },
      ],
    },
    pittsSteps: [
      "选择一个时间点。",
      "阅读对应事件。",
      "说明好奇心如何改变他的道路。",
    ],
    pittsCheckpoint: {
      prompt: "皮茨 12 岁时做了什么？",
      options: [
        {
          label: "阅读《数学原理》并写信给罗素。",
          correct: true,
          explanation: "他发现错误并写信给作者。",
        },
        {
          label: "去剑桥大学上学。",
          correct: false,
          explanation: "他因贫困未能成行。",
        },
        {
          label: "成为大学教授。",
          correct: false,
          explanation: "当时他还是少年。",
        },
      ],
    },
    collaborationTitle: "2. 历史性合作",
    collaborationEyebrow: "麦卡洛克与皮茨",
    collaborationConceptTitle: "概念卡",
    collaborationConceptLines: [
      "麦卡洛克是神经生理学家，皮茨是逻辑学者。",
      "两人在 1942 年相遇并在芝加哥合作。",
      "1943 年论文开启人工神经网络研究。",
    ],
    collaborationParas: [
      "麦卡洛克 1927 年获博士学位，1941 年来到芝加哥。",
      "他邀请皮茨住进家中，两人共同研究神经系统模型。",
      "他们用二值逻辑描述思维过程，写下经典论文。",
    ],
    collaborationFigure: {
      label: "图 7-2",
      caption: "沃伦·麦卡洛克。",
      placeholder: "示意图",
    },
    collaborationDemo: {
      title: "逻辑与生物学的桥梁",
      goal: "观察两人的优势如何结合。",
      labels: {
        strength: "优势",
        role: "贡献",
      },
      viewpoints: [
        {
          key: "pitts",
          label: "皮茨",
          strength: "逻辑与数学功底深厚。",
          role: "用二值逻辑描述神经行为。",
        },
        {
          key: "mcculloch",
          label: "麦卡洛克",
          strength: "神经生理学背景。",
          role: "将神经结构与电路联系起来。",
        },
        {
          key: "together",
          label: "合作",
          strength: "逻辑 + 生物学优势互补。",
          role: "发表 1943 年论文，启发神经网络。",
        },
      ],
    },
    collaborationSteps: [
      "选择一个视角。",
      "比较优势与贡献。",
      "说明合作的重要性。",
    ],
    collaborationCheckpoint: {
      prompt: "他们 1943 年的论文做了什么？",
      options: [
        {
          label: "用二值逻辑描述神经活动。",
          correct: true,
          explanation: "这篇论文开启人工神经网络研究。",
        },
        {
          label: "制造出完整计算机。",
          correct: false,
          explanation: "论文是模型，而非实物。",
        },
        {
          label: "证明神经元能自动学习权重。",
          correct: false,
          explanation: "学习权重是感知机之后的工作。",
        },
      ],
    },
    mpTitle: "3. M-P 神经元模型",
    mpEyebrow: "二值发放",
    mpConceptTitle: "概念卡",
    mpConceptLines: [
      "神经元通过树突接收信号，通过轴突输出。",
      "发放或不发放类似 1/0。",
      "M-P 神经元将输入加权求和并与阈值比较。",
    ],
    mpParas: [
      "人脑有数百亿个神经元，连接形成复杂智能。",
      "M-P 神经元权重固定，只输出 0 或 1，不能学习。",
      "它证明简单单元也能形成强大系统。",
    ],
    mpFigures: [
      {
        label: "图 7-3",
        caption: "人脑神经元结构。",
        placeholder: "示意图",
      },
      {
        label: "图 7-4",
        caption: "M-P 神经元模型。",
        placeholder: "示意图",
      },
    ],
    mpSteps: [
      "调整权重与阈值。",
      "观察何时输出 1。",
      "说明二值发放的含义。",
    ],
    mpCheckpoint: {
      prompt: "为什么 M-P 神经元是二值模型？",
      options: [
        {
          label: "它只输出 0 或 1。",
          correct: true,
          explanation: "要么发放，要么不发放。",
        },
        {
          label: "它只接收两个输入。",
          correct: false,
          explanation: "输入数量可以变化。",
        },
        {
          label: "它可以连续输出。",
          correct: false,
          explanation: "输出只有 0 或 1。",
        },
      ],
    },
    foodTitle: "想一想",
    foodEyebrow: "类比创新",
    foodParas: [
      "皮茨与麦卡洛克提取神经元的核心特征进行简化。",
      "飞机借鉴鸟类飞行原理，但不会模仿扇翅。",
    ],
    foodFigures: [
      {
        label: "图 7-5",
        caption: "人工神经网络与神经系统。",
        placeholder: "示意图",
      },
      {
        label: "图 7-6",
        caption: "鸟类飞行与飞机设计。",
        placeholder: "示意图",
      },
    ],
    foodDemo: {
      title: "类比探索",
      goal: "观察借鉴核心思想而非照搬细节。",
      labels: {
        insight: "核心思想",
        caution: "未复制部分",
      },
      analogies: [
        {
          key: "neuron",
          label: "神经系统 -> 神经网络",
          insight: "二值发放与输入求和。",
          caution: "不复制复杂生化过程。",
        },
        {
          key: "bird",
          label: "鸟 -> 飞机",
          insight: "借鉴空气动力与升力。",
          caution: "不需要像鸟一样扇翅。",
        },
      ],
    },
    foodSteps: [
      "选择一个类比。",
      "指出核心思想。",
      "说明被简化的部分。",
    ],
    foodCheckpoint: {
      prompt: "类比创新的关键是什么？",
      options: [
        {
          label: "抓住核心思想，简化细节。",
          correct: true,
          explanation: "这是类比创新的精髓。",
        },
        {
          label: "完全复制细节。",
          correct: false,
          explanation: "照搬并不是最佳方法。",
        },
        {
          label: "不借鉴任何自然现象。",
          correct: false,
          explanation: "许多发明来自类比。",
        },
      ],
    },
    historyTitle: "历史角",
    historyEyebrow: "疼痛信号",
    historyConceptTitle: "概念卡",
    historyConceptLines: [
      "疼痛信号从外周传到中枢。",
      "神经递质帮助信号在神经元间传递。",
      "疼痛帮助我们避免伤害。",
    ],
    historyParas: [
      "信号经过轴突到达脊髓与大脑，最终被识别为疼痛。",
      "无法感到疼痛的人可能忽视严重伤害。",
    ],
    historyDemo: {
      title: "疼痛传递路径",
      goal: "一步步观察疼痛信号传递过程。",
      steps: [
        "刺激激活感觉神经末梢。",
        "信号沿轴突传到脊髓。",
        "神经递质跨突触传递信号。",
        "大脑识别为疼痛并作出反应。",
      ],
    },
    historySteps: [
      "点击下一步跟随信号。",
      "注意神经递质作用。",
      "解释疼痛的保护作用。",
    ],
    historyCheckpoint: {
      prompt: "疼痛的作用是什么？",
      options: [
        {
          label: "提醒危险，保护身体。",
          correct: true,
          explanation: "疼痛促使我们及时反应。",
        },
        {
          label: "让伤口更快愈合。",
          correct: false,
          explanation: "疼痛不是愈合机制。",
        },
        {
          label: "阻止神经元放电。",
          correct: false,
          explanation: "疼痛本身就是信号。",
        },
      ],
    },
    summaryTitle: "要点回顾",
    summaryEyebrow: "总结",
    summaryPoints: [
      "皮茨在贫困中自学成才。",
      "麦卡洛克与皮茨合作提出神经模型。",
      "M-P 神经元二值发放、权重固定。",
      "类比创新强调抓核心、简细节。",
      "疼痛信号帮助我们远离危险。",
    ],
  },
};
