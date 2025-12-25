import { useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { FigureCard } from "../components/FigureCard";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { BackpropFlowDemo } from "../demos/BackpropFlowDemo";
import { PretrainingFlowDemo } from "../demos/PretrainingFlowDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function PrimaryLesson7_3({ lang }: LessonProps) {
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
    { id: "path", label: t.pathTitle },
    { id: "winter", label: t.winterTitle },
    { id: "honors", label: t.honorsTitle },
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

        <SectionBlock id="path" title={t.pathTitle} eyebrow={t.pathEyebrow}>
          <InfoCard title={t.pathConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.pathConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.pathParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <HintonPathDemo
            lang={lang}
            title={t.pathDemo.title}
            goal={t.pathDemo.goal}
            resetLabel={ui.reset}
            events={t.pathDemo.events}
            labels={t.pathDemo.labels}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.pathSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.pathCheckpoint.prompt}
            options={t.pathCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="winter" title={t.winterTitle} eyebrow={t.winterEyebrow}>
          <InfoCard title={t.winterConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.winterConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.winterParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <div className="grid gap-3 md:grid-cols-2">
            {t.winterFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <BackpropFlowDemo lang={lang} />
          <PretrainingFlowDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.winterSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.winterCheckpoint.prompt}
            options={t.winterCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="honors" title={t.honorsTitle} eyebrow={t.honorsEyebrow}>
          <InfoCard title={t.honorsConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.honorsConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          <ul className="space-y-1 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            {t.honorsList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="grid gap-3 md:grid-cols-2">
            {t.honorsFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <AwardsSpotlightDemo
            lang={lang}
            title={t.honorsDemo.title}
            goal={t.honorsDemo.goal}
            resetLabel={ui.reset}
            awards={t.honorsDemo.awards}
            labels={t.honorsDemo.labels}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.honorsSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.honorsCheckpoint.prompt}
            options={t.honorsCheckpoint.options}
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
          <PersistenceMeterDemo
            lang={lang}
            title={t.foodDemo.title}
            goal={t.foodDemo.goal}
            resetLabel={ui.reset}
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
          <ul className="space-y-1 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            {t.historyRecords.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <FigureCard
            label={t.historyFigure.label}
            caption={t.historyFigure.caption}
            placeholder={t.historyFigure.placeholder}
          />
          <NobelFactsDemo
            lang={lang}
            title={t.historyDemo.title}
            goal={t.historyDemo.goal}
            resetLabel={ui.reset}
            facts={t.historyDemo.facts}
            labels={t.historyDemo.labels}
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

function HintonPathDemo({
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

type Award = {
  key: string;
  label: string;
  detail: string;
};

function AwardsSpotlightDemo({
  lang,
  title,
  goal,
  resetLabel,
  awards,
  labels,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  awards: Award[];
  labels: { pick: string; detail: string };
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(awards[0]?.key ?? "");
  const current = awards.find((award) => award.key === active) ?? awards[0];

  const reset = () => {
    setActive(awards[0]?.key ?? "");
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
        {awards.map((award) => {
          const selected = award.key === active;
          return (
            <button
              key={award.key}
              type="button"
              className={[
                "rounded-full border px-3 py-1 text-xs font-semibold transition",
                selected
                  ? "border-brand-500 bg-brand-50 text-brand-700"
                  : "border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900",
              ].join(" ")}
              onClick={() => setActive(award.key)}
            >
              {award.label}
            </button>
          );
        })}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.detail}</p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{current.detail}</p>
        </div>
      )}
    </div>
  );
}

function PersistenceMeterDemo({
  lang,
  title,
  goal,
  resetLabel,
  labels,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  labels: { effort: string; message: string[] };
}) {
  const isZh = lang === "zh";
  const [effort, setEffort] = useState(60);
  const message =
    effort > 70 ? labels.message[2] : effort > 40 ? labels.message[1] : labels.message[0];

  const reset = () => {
    setEffort(60);
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

      <div className="mt-3 space-y-3">
        <label className="block text-sm font-semibold text-slate-700">
          {labels.effort}
          <input
            type="range"
            min={0}
            max={100}
            value={effort}
            onChange={(e) => setEffort(Number(e.target.value))}
            className="mt-1 w-full accent-brand-500"
          />
          <span className="text-xs text-slate-500">{effort}</span>
        </label>
        <div className="rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-700">{message}</div>
      </div>
    </div>
  );
}

type NobelFact = {
  key: string;
  label: string;
  detail: string;
};

function NobelFactsDemo({
  lang,
  title,
  goal,
  resetLabel,
  facts,
  labels,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  facts: NobelFact[];
  labels: { pick: string; detail: string };
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(facts[0]?.key ?? "");
  const current = facts.find((fact) => fact.key === active) ?? facts[0];

  const reset = () => {
    setActive(facts[0]?.key ?? "");
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
        {facts.map((fact) => {
          const selected = fact.key === active;
          return (
            <button
              key={fact.key}
              type="button"
              className={[
                "rounded-full border px-3 py-1 text-xs font-semibold transition",
                selected
                  ? "border-brand-500 bg-brand-50 text-brand-700"
                  : "border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900",
              ].join(" ")}
              onClick={() => setActive(fact.key)}
            >
              {fact.label}
            </button>
          );
        })}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.detail}</p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{current.detail}</p>
        </div>
      )}
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Learn Geoffrey Hinton's academic journey and perseverance.",
      "Understand how he advanced deep neural networks and deep learning.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "Geoffrey Hinton revived neural network research twice and helped launch the deep learning era. He received the 2024 Nobel Prize in Physics for this work.",
    pathTitle: "1. A Winding Path to Learning",
    pathEyebrow: "Personal journey",
    pathConceptTitle: "Concept Card",
    pathConceptLines: [
      "Born in 1947 in a scientific family.",
      "Switched majors multiple times before settling on psychology.",
      "Persisted in neural network research despite setbacks.",
    ],
    pathParas: [
      "Hinton studied physics, chemistry, physiology, and philosophy before finishing psychology.",
      "He worked as a carpenter but kept thinking about the brain.",
      "He completed a PhD at Edinburgh and later moved to Toronto to continue neural network research.",
    ],
    pathDemo: {
      title: "Hinton's Journey",
      goal: "Track Hinton's path from student to researcher.",
      labels: {
        pick: "Pick a stage",
        detail: "Detail",
      },
      events: [
        {
          key: "1965",
          label: "1965-1970",
          detail: "Switched majors before graduating in psychology.",
        },
        {
          key: "1973",
          label: "1973",
          detail: "Started a PhD in neural networks at Edinburgh.",
        },
        {
          key: "1987",
          label: "1987",
          detail: "Moved to Canada and joined CIFAR and Toronto.",
        },
        {
          key: "2012",
          label: "2012",
          detail: "Led AlexNet to ImageNet success.",
        },
      ],
    },
    pathSteps: [
      "Select a stage.",
      "Read the detail.",
      "Explain how persistence appears in his path.",
    ],
    pathCheckpoint: {
      prompt: "What did Hinton do even during hard times?",
      options: [
        {
          label: "He kept studying neural networks and never gave up.",
          correct: true,
          explanation: "He persisted despite warnings and setbacks.",
        },
        {
          label: "He left research forever.",
          correct: false,
          explanation: "He continued research throughout his career.",
        },
        {
          label: "He stopped learning and avoided challenges.",
          correct: false,
          explanation: "His story is about perseverance.",
        },
      ],
    },
    winterTitle: "2. Staying Strong in the AI Winter",
    winterEyebrow: "Breakthroughs",
    winterConceptTitle: "Concept Card",
    winterConceptLines: [
      "AI winter slowed neural network research.",
      "Backpropagation revived multilayer networks.",
      "Pre-training and AlexNet opened the deep learning era.",
    ],
    winterParas: [
      "In 1986, Hinton helped popularize backpropagation for multilayer networks.",
      "In 2006, layer-wise pre-training made deep networks practical.",
      "In 2012, AlexNet won ImageNet and sparked deep learning growth.",
    ],
    winterFigures: [
      {
        label: "Figure 7-11",
        caption: "The backpropagation algorithm.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 7-12",
        caption: "Images have hierarchical structures that deep neural networks can learn.",
        placeholder: "Illustration placeholder",
      },
    ],
    winterSteps: [
      "Step through backprop and pre-training demos.",
      "Connect them to AI winter recovery.",
      "Explain why AlexNet was a turning point.",
    ],
    winterCheckpoint: {
      prompt: "What opened the door to deep learning in 2006?",
      options: [
        {
          label: "Layer-wise pre-training for deep networks.",
          correct: true,
          explanation: "Pre-training made deep networks trainable.",
        },
        {
          label: "Removing all hidden layers.",
          correct: false,
          explanation: "Deep learning relies on multiple layers.",
        },
        {
          label: "Stopping neural network research.",
          correct: false,
          explanation: "Progress came from continuing research.",
        },
      ],
    },
    honorsTitle: "3. Honors and Impact",
    honorsEyebrow: "Recognition",
    honorsConceptTitle: "Concept Card",
    honorsConceptLines: [
      "Hinton received many scientific awards.",
      "He won the Turing Award in 2018.",
      "He won the Nobel Prize in Physics in 2024.",
    ],
    honorsList: [
      "David E. Rumelhart Prize",
      "IJCAI Award for Research Excellence",
      "Killam Prize",
      "IEEE Frank Rosenblatt Award",
      "NSERC Herzberg Gold Medal",
      "IEEE James Clerk Maxwell Medal",
      "NEC C&C Prize",
      "Honda Prize",
    ],
    honorsFigures: [
      {
        label: "Figure 7-13",
        caption: "Geoffrey Hinton and John Hopfield receiving the 2024 Nobel Prize in Physics.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 7-14",
        caption: "The Nobel Prize medal.",
        placeholder: "Illustration placeholder",
      },
    ],
    honorsDemo: {
      title: "Awards Spotlight",
      goal: "See why key awards mattered to AI history.",
      labels: {
        pick: "Pick an award",
        detail: "Detail",
      },
      awards: [
        {
          key: "turing",
          label: "Turing Award (2018)",
          detail: "Honored deep learning pioneers Hinton, LeCun, and Bengio.",
        },
        {
          key: "nobel",
          label: "Nobel Prize (2024)",
          detail: "Recognized neural network foundations in physics.",
        },
        {
          key: "rosenblatt",
          label: "IEEE Rosenblatt Award",
          detail: "Celebrated contributions to biologically inspired computing.",
        },
      ],
    },
    honorsSteps: [
      "Select an award.",
      "Read its significance.",
      "Explain why recognition matters for science.",
    ],
    honorsCheckpoint: {
      prompt: "What makes Hinton's 2024 Nobel Prize notable?",
      options: [
        {
          label: "He became the first person to win both the Turing Award and Nobel Prize in Physics.",
          correct: true,
          explanation: "This combination is unprecedented.",
        },
        {
          label: "He won it for painting and music.",
          correct: false,
          explanation: "It recognized neural network work in physics.",
        },
        {
          label: "He refused all scientific awards.",
          correct: false,
          explanation: "He received many awards.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Perseverance",
    foodParas: [
      "Hinton kept going through AI winters because he believed in neural networks.",
      "His story shows how faith in science and steady effort can lead to breakthroughs.",
    ],
    foodDemo: {
      title: "Persistence Meter",
      goal: "Reflect on how persistence builds long-term progress.",
      labels: {
        effort: "Persistence level",
        message: [
          "Small steps still matter.",
          "Steady effort builds momentum.",
          "Long-term belief unlocks breakthroughs.",
        ],
      },
    },
    foodSteps: [
      "Move the persistence slider.",
      "Read the message.",
      "Share a time you kept going.",
    ],
    foodCheckpoint: {
      prompt: "What did Hinton's persistence show?",
      options: [
        {
          label: "Belief and effort can overcome long setbacks.",
          correct: true,
          explanation: "He continued research during AI winters.",
        },
        {
          label: "Success comes instantly.",
          correct: false,
          explanation: "His achievements took decades.",
        },
        {
          label: "Avoiding challenges is best.",
          correct: false,
          explanation: "He faced challenges head-on.",
        },
      ],
    },
    historyTitle: "History Corner",
    historyEyebrow: "Nobel Prize",
    historyConceptTitle: "Concept Card",
    historyConceptLines: [
      "Nobel Prize was founded in 1895 by Alfred Nobel.",
      "Economics was added in 1968.",
      "The awards inspire global scientific progress.",
    ],
    historyRecords: [
      "Youngest winner: Malala Yousafzai (age 17).",
      "Oldest winner: John B. Goodenough (age 97).",
      "Most winners by country: United States.",
    ],
    historyFigure: {
      label: "Figure 7-14",
      caption: "The Nobel Prize medal.",
      placeholder: "Illustration placeholder",
    },
    historyDemo: {
      title: "Nobel Facts",
      goal: "Explore notable Nobel Prize records.",
      labels: {
        pick: "Pick a record",
        detail: "Detail",
      },
      facts: [
        {
          key: "curie",
          label: "Marie Curie",
          detail: "Won Physics (1903) and Chemistry (1911).",
        },
        {
          key: "bardeen",
          label: "John Bardeen",
          detail: "Won Physics twice (1956, 1972).",
        },
        {
          key: "unhcr",
          label: "UNHCR",
          detail: "Won Peace Prize twice (1954, 1981).",
        },
      ],
    },
    historySteps: [
      "Select a record.",
      "Read the detail.",
      "Explain why Nobel stories inspire people.",
    ],
    historyCheckpoint: {
      prompt: "Why were Nobel Prizes created?",
      options: [
        {
          label: "To reward outstanding contributions to humanity.",
          correct: true,
          explanation: "This was Alfred Nobel's goal.",
        },
        {
          label: "To rank sports teams.",
          correct: false,
          explanation: "They honor science, literature, and peace.",
        },
        {
          label: "To replace school exams.",
          correct: false,
          explanation: "They are international awards.",
        },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryEyebrow: "Summary",
    summaryPoints: [
      "Hinton's path shows curiosity and persistence.",
      "Backpropagation and pre-training revived deep networks.",
      "AlexNet's success launched the deep learning era.",
      "Hinton earned major awards including Turing and Nobel prizes.",
      "The Nobel Prize honors contributions that benefit humanity.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解杰弗里·辛顿的学术经历与坚持。",
      "理解他对深度神经网络与深度学习的贡献。",
    ],
    introTitle: "故事开头",
    introEyebrow: "开场",
    introText:
      "辛顿两次拯救神经网络研究，并推动深度学习浪潮。2024 年他获得诺贝尔物理学奖。",
    pathTitle: "1. 曲折的求学之路",
    pathEyebrow: "个人经历",
    pathConceptTitle: "概念卡",
    pathConceptLines: [
      "1947 年出生于科学世家。",
      "多次转专业后选择心理学。",
      "坚持神经网络研究不放弃。",
    ],
    pathParas: [
      "他先后尝试物理、化学、生理学与哲学，最终完成心理学学位。",
      "毕业后曾靠木工谋生，但仍关注大脑问题。",
      "完成博士后转到加拿大继续神经网络研究。",
    ],
    pathDemo: {
      title: "辛顿的路径",
      goal: "回顾他的学习与研究旅程。",
      labels: {
        pick: "选择阶段",
        detail: "细节",
      },
      events: [
        {
          key: "1965",
          label: "1965-1970",
          detail: "多次转专业后获得心理学学位。",
        },
        {
          key: "1973",
          label: "1973",
          detail: "在爱丁堡开始神经网络博士研究。",
        },
        {
          key: "1987",
          label: "1987",
          detail: "移居加拿大，加入 CIFAR 与多伦多大学。",
        },
        {
          key: "2012",
          label: "2012",
          detail: "AlexNet 获得 ImageNet 竞赛冠军。",
        },
      ],
    },
    pathSteps: [
      "选择一个阶段。",
      "阅读对应细节。",
      "说明坚持的重要性。",
    ],
    pathCheckpoint: {
      prompt: "辛顿在困难时期的做法是什么？",
      options: [
        {
          label: "坚持研究神经网络。",
          correct: true,
          explanation: "他从未放弃。",
        },
        {
          label: "彻底退出科研。",
          correct: false,
          explanation: "他一直在科研。",
        },
        {
          label: "避开所有挑战。",
          correct: false,
          explanation: "他面对挑战继续探索。",
        },
      ],
    },
    winterTitle: "2. AI 寒冬中的坚守",
    winterEyebrow: "关键突破",
    winterConceptTitle: "概念卡",
    winterConceptLines: [
      "AI 寒冬让研究陷入低谷。",
      "反向传播带来转机。",
      "预训练与 AlexNet 推开深度学习之门。",
    ],
    winterParas: [
      "1986 年反向传播算法推动多层网络训练。",
      "2006 年逐层预训练让深层网络可行。",
      "2012 年 AlexNet 让深度学习大放异彩。",
    ],
    winterFigures: [
      {
        label: "图 7-11",
        caption: "反向传播算法。",
        placeholder: "示意图",
      },
      {
        label: "图 7-12",
        caption: "深度网络学习层次化特征。",
        placeholder: "示意图",
      },
    ],
    winterSteps: [
      "体验反向传播与预训练。",
      "理解 AI 寒冬复苏过程。",
      "说明 AlexNet 的影响。",
    ],
    winterCheckpoint: {
      prompt: "2006 年打开深度学习大门的方法是？",
      options: [
        {
          label: "逐层预训练。",
          correct: true,
          explanation: "逐层训练让深网可用。",
        },
        {
          label: "删除隐藏层。",
          correct: false,
          explanation: "深度学习依靠多层。",
        },
        {
          label: "停止神经网络研究。",
          correct: false,
          explanation: "突破来自继续研究。",
        },
      ],
    },
    honorsTitle: "3. 荣誉与影响",
    honorsEyebrow: "成就认可",
    honorsConceptTitle: "概念卡",
    honorsConceptLines: [
      "辛顿获得多项顶尖奖项。",
      "2018 年获图灵奖。",
      "2024 年获诺贝尔物理学奖。",
    ],
    honorsList: [
      "Rumelhart 奖",
      "IJCAI 研究卓越奖",
      "Killam 奖",
      "IEEE Frank Rosenblatt 奖",
      "NSERC Herzberg 金奖章",
      "IEEE James Clerk Maxwell 奖",
      "NEC C&C 奖",
      "Honda 奖",
    ],
    honorsFigures: [
      {
        label: "图 7-13",
        caption: "辛顿与霍普菲尔德共同领奖。",
        placeholder: "示意图",
      },
      {
        label: "图 7-14",
        caption: "诺贝尔奖章。",
        placeholder: "示意图",
      },
    ],
    honorsDemo: {
      title: "荣誉聚焦",
      goal: "了解关键奖项的意义。",
      labels: {
        pick: "选择奖项",
        detail: "说明",
      },
      awards: [
        {
          key: "turing",
          label: "图灵奖 (2018)",
          detail: "表彰深度学习三位先驱。",
        },
        {
          key: "nobel",
          label: "诺贝尔奖 (2024)",
          detail: "认可神经网络的基础贡献。",
        },
        {
          key: "rosenblatt",
          label: "Rosenblatt 奖",
          detail: "表彰仿生计算贡献。",
        },
      ],
    },
    honorsSteps: [
      "选择一个奖项。",
      "阅读说明。",
      "思考荣誉的意义。",
    ],
    honorsCheckpoint: {
      prompt: "辛顿 2024 年获诺贝尔奖的意义是？",
      options: [
        {
          label: "成为首位同时获图灵奖与诺贝尔物理学奖的人。",
          correct: true,
          explanation: "这是史无前例的组合。",
        },
        {
          label: "因为绘画获奖。",
          correct: false,
          explanation: "他因神经网络研究获奖。",
        },
        {
          label: "他拒绝所有奖项。",
          correct: false,
          explanation: "他获得了许多奖项。",
        },
      ],
    },
    foodTitle: "想一想",
    foodEyebrow: "坚持与信念",
    foodParas: [
      "辛顿在低潮中依然坚持研究，他的故事说明信念与努力的重要性。",
    ],
    foodDemo: {
      title: "坚持刻度",
      goal: "思考坚持如何带来突破。",
      labels: {
        effort: "坚持程度",
        message: [
          "小步也有意义。",
          "持续努力带来积累。",
          "长期信念会迎来突破。",
        ],
      },
    },
    foodSteps: [
      "拖动刻度。",
      "阅读提示。",
      "分享坚持的体验。",
    ],
    foodCheckpoint: {
      prompt: "辛顿的坚持说明了什么？",
      options: [
        {
          label: "长期努力能跨越低谷。",
          correct: true,
          explanation: "他在寒冬也坚持研究。",
        },
        {
          label: "成功会一夜之间出现。",
          correct: false,
          explanation: "成功经历了长期积累。",
        },
        {
          label: "遇到困难就放弃。",
          correct: false,
          explanation: "他的故事强调坚持。",
        },
      ],
    },
    historyTitle: "历史角",
    historyEyebrow: "诺贝尔奖",
    historyConceptTitle: "概念卡",
    historyConceptLines: [
      "诺贝尔奖源于 1895 年遗嘱。",
      "1968 年增加经济学奖。",
      "奖项鼓励全球科学进步。",
    ],
    historyRecords: [
      "最年轻获奖者：马拉拉 (17 岁)。",
      "最高龄获奖者：John B. Goodenough (97 岁)。",
      "获奖人数最多的国家：美国。",
    ],
    historyFigure: {
      label: "图 7-14",
      caption: "诺贝尔奖章。",
      placeholder: "示意图",
    },
    historyDemo: {
      title: "诺贝尔记录",
      goal: "了解诺贝尔奖的经典记录。",
      labels: {
        pick: "选择记录",
        detail: "说明",
      },
      facts: [
        {
          key: "curie",
          label: "居里夫人",
          detail: "曾两次获诺贝尔奖。",
        },
        {
          key: "bardeen",
          label: "约翰·巴丁",
          detail: "两次获得物理学奖。",
        },
        {
          key: "unhcr",
          label: "联合国难民署",
          detail: "两次获得和平奖。",
        },
      ],
    },
    historySteps: [
      "选择一条记录。",
      "阅读说明。",
      "思考诺贝尔精神。",
    ],
    historyCheckpoint: {
      prompt: "诺贝尔奖设立的目的是什么？",
      options: [
        {
          label: "奖励对人类有贡献的工作。",
          correct: true,
          explanation: "这正是诺贝尔的初衷。",
        },
        {
          label: "用于体育比赛排名。",
          correct: false,
          explanation: "诺贝尔奖不是体育奖。",
        },
        {
          label: "代替学校考试。",
          correct: false,
          explanation: "诺贝尔奖是国际奖项。",
        },
      ],
    },
    summaryTitle: "要点回顾",
    summaryEyebrow: "总结",
    summaryPoints: [
      "辛顿的经历体现了坚持与好奇心。",
      "反向传播与预训练推动深度学习，AlexNet 成功引爆应用。",
      "辛顿获得图灵奖与诺贝尔奖。",
      "诺贝尔奖鼓励造福人类的贡献。",
    ],
  },
};
