import { useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { FigureCard } from "../components/FigureCard";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";

type LessonProps = {
  lang: "en" | "zh";
};

export function PrimaryLesson4_1({ lang }: LessonProps) {
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
    { id: "giants", label: t.giantsTitle },
    { id: "logic", label: t.logicTitle },
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

        <SectionBlock id="giants" title={t.giantsTitle} eyebrow={t.giantsEyebrow}>
          <InfoCard title={t.giantsConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.giantsConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.giantsParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.giantsFigure.label}
            caption={t.giantsFigure.caption}
            placeholder={t.giantsFigure.placeholder}
          />
          <MentorChainDemo
            lang={lang}
            title={t.giantsDemo.title}
            goal={t.giantsDemo.goal}
            resetLabel={ui.reset}
            figures={t.giantsDemo.figures}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.giantsSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.giantsCheckpoint.prompt}
            options={t.giantsCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="logic" title={t.logicTitle} eyebrow={t.logicEyebrow}>
          <InfoCard title={t.logicConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.logicConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.logicParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <ul className="space-y-1 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            {t.logicExample.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <FigureCard
            label={t.logicFigure.label}
            caption={t.logicFigure.caption}
            placeholder={t.logicFigure.placeholder}
          />
          <SyllogismDemo
            lang={lang}
            title={t.logicDemo.title}
            goal={t.logicDemo.goal}
            note={t.logicDemo.note}
            resetLabel={ui.reset}
            majorOptions={t.logicDemo.majorOptions}
            minorOptions={t.logicDemo.minorOptions}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.logicSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.logicCheckpoint.prompt}
            options={t.logicCheckpoint.options}
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
          <MistakeLensDemo
            lang={lang}
            title={t.foodDemo.title}
            goal={t.foodDemo.goal}
            resetLabel={ui.reset}
            choices={t.foodDemo.choices}
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
          <InfoCard title={t.historyCardTitle}>
            {t.historyParas.map((para) => (
              <p key={para} className="text-sm leading-relaxed text-slate-700">
                {para}
              </p>
            ))}
          </InfoCard>
          <FallacySpotterDemo
            lang={lang}
            title={t.historyDemo.title}
            goal={t.historyDemo.goal}
            resetLabel={ui.reset}
            scenarios={t.historyDemo.scenarios}
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

type MentorFigure = {
  key: string;
  name: string;
  link: string;
  focus: string;
  detail: string;
};

function MentorChainDemo({
  lang,
  title,
  goal,
  resetLabel,
  figures,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  figures: MentorFigure[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(figures[0]?.key ?? "");
  const current = figures.find((fig) => fig.key === active) ?? figures[0];

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
          onClick={() => setActive(figures[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {figures.map((fig) => (
          <button
            key={fig.key}
            type="button"
            onClick={() => setActive(fig.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              fig.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {fig.name}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "人物线索" : "Line of Mentors"}
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{current.link}</p>
          <p className="mt-2 text-sm">{current.focus}</p>
          <p className="mt-2 text-xs text-slate-600">{current.detail}</p>
        </div>
      )}
    </div>
  );
}

type MajorOption = {
  key: string;
  text: string;
  category: string;
  attribute: string;
};

type MinorOption = {
  key: string;
  text: string;
  category: string;
};

function SyllogismDemo({
  lang,
  title,
  goal,
  note,
  resetLabel,
  majorOptions,
  minorOptions,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  note: string;
  resetLabel: string;
  majorOptions: MajorOption[];
  minorOptions: MinorOption[];
}) {
  const isZh = lang === "zh";
  const [majorKey, setMajorKey] = useState(majorOptions[0]?.key ?? "");
  const [minorKey, setMinorKey] = useState(minorOptions[0]?.key ?? "");
  const major = majorOptions.find((opt) => opt.key === majorKey) ?? majorOptions[0];
  const minor = minorOptions.find((opt) => opt.key === minorKey) ?? minorOptions[0];
  const valid = major && minor && major.category === minor.category;

  const reset = () => {
    setMajorKey(majorOptions[0]?.key ?? "");
    setMinorKey(minorOptions[0]?.key ?? "");
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
          onClick={reset}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 grid gap-3 md:grid-cols-2">
        <div className="space-y-3">
          <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "选择大前提" : "Choose a major premise"}
            <select
              value={majorKey}
              onChange={(e) => setMajorKey(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
            >
              {majorOptions.map((opt) => (
                <option key={opt.key} value={opt.key}>
                  {opt.text}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "选择小前提" : "Choose a minor premise"}
            <select
              value={minorKey}
              onChange={(e) => setMinorKey(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
            >
              {minorOptions.map((opt) => (
                <option key={opt.key} value={opt.key}>
                  {opt.text}
                </option>
              ))}
            </select>
          </label>
        </div>
        {major && minor && (
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {isZh ? "结论" : "Conclusion"}
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900">
              {isZh ? `所以：鹅${major.attribute}` : `Therefore, a goose ${major.attribute}.`}
            </p>
            <p
              className={[
                "mt-2 inline-flex rounded-full px-3 py-1 text-xs font-bold",
                valid ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700",
              ].join(" ")}
            >
              {valid
                ? isZh
                  ? "形式有效"
                  : "Valid form"
                : isZh
                  ? "形式不成立"
                  : "Invalid form"}
            </p>
            <p className="mt-2 text-xs text-slate-600">{note}</p>
          </div>
        )}
      </div>
    </div>
  );
}

type MistakeChoice = {
  key: string;
  label: string;
  response: string;
};

function MistakeLensDemo({
  lang,
  title,
  goal,
  resetLabel,
  choices,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  choices: MistakeChoice[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(choices[0]?.key ?? "");
  const current = choices.find((choice) => choice.key === active) ?? choices[0];

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
          onClick={() => setActive(choices[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {choices.map((choice) => (
          <button
            key={choice.key}
            type="button"
            onClick={() => setActive(choice.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              choice.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {choice.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "思考结果" : "Reflection"}
          </p>
          <p className="mt-1 text-sm">{current.response}</p>
        </div>
      )}
    </div>
  );
}

type FallacyOption = {
  key: string;
  label: string;
  isFallacy: boolean;
  explanation: string;
};

type FallacyScenario = {
  key: string;
  prompt: string;
  options: FallacyOption[];
};

function FallacySpotterDemo({
  lang,
  title,
  goal,
  resetLabel,
  scenarios,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  scenarios: FallacyScenario[];
}) {
  const isZh = lang === "zh";
  const [scenarioKey, setScenarioKey] = useState(scenarios[0]?.key ?? "");
  const [selected, setSelected] = useState<string | null>(null);
  const current = scenarios.find((item) => item.key === scenarioKey) ?? scenarios[0];

  const reset = () => {
    setScenarioKey(scenarios[0]?.key ?? "");
    setSelected(null);
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
          onClick={reset}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {scenarios.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => {
              setScenarioKey(item.key);
              setSelected(null);
            }}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              item.key === scenarioKey
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {isZh ? "情境" : "Scenario"} {item.key}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-sm font-semibold text-slate-800">{current.prompt}</p>
          <div className="mt-3 space-y-2">
            {current.options.map((opt) => {
              const active = selected === opt.key;
              return (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => setSelected(opt.key)}
                  className={[
                    "w-full rounded-xl border px-3 py-2 text-left text-sm font-semibold transition",
                    active
                      ? "border-transparent bg-slate-900 text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between">
                    <span>{opt.label}</span>
                    {active && (
                      <span
                        className={[
                          "rounded-full px-2 py-0.5 text-xs font-bold",
                          opt.isFallacy ? "bg-rose-100 text-rose-700" : "bg-emerald-100 text-emerald-700",
                        ].join(" ")}
                      >
                        {opt.isFallacy ? (isZh ? "有漏洞" : "Fallacy") : isZh ? "合逻辑" : "Logical"}
                      </span>
                    )}
                  </div>
                  {active && <p className="mt-1 text-xs text-slate-100/90">{opt.explanation}</p>}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Learn about the life of Aristotle.",
      "Understand how his summary of human thinking influenced the origins of AI.",
      "Realize the importance of speaking and acting logically.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "Aristotle was a great philosopher from ancient Greece who shaped many fields. He gave the first scientific summary of the rules of human thinking, laying a foundation for machines to imitate how people think.",
    giantsTitle: "1. The Footsteps of Giants",
    giantsEyebrow: "Ancient Greece",
    giantsConceptTitle: "Concept Card",
    giantsConceptLines: [
      "Socrates, Plato, and Aristotle were the three most representative philosophers.",
      "They valued reason over intuition and encouraged deep thinking.",
      "Aristotle studied under Plato and later taught Alexander the Great.",
    ],
    giantsParas: [
      "Ancient Greece was full of brilliant minds. Socrates taught Plato, and Plato taught Aristotle. Their ideas became a foundation for many disciplines and schools of thought.",
      "Aristotle was born in 384 BCE in northern Greece. He studied at Plato's Academy for nearly 20 years and became one of its most outstanding students.",
      "He later tutored Alexander, returned to Athens, and founded his own school. Because he liked to walk while lecturing, it was called the Peripatetic School.",
      "Aristotle's research covered almost all fields of knowledge of his time. He respected his teacher but insisted on truth, saying, \"I love my teacher, but I love truth even more.\"",
    ],
    giantsFigure: {
      label: "Figure 4-1",
      caption: "Statues of Socrates, Plato, and Aristotle.",
      placeholder: "Illustration placeholder",
    },
    giantsDemo: {
      title: "Philosopher Lineage",
      goal: "See how the three philosophers are connected and what each emphasized.",
      figures: [
        {
          key: "socrates",
          name: "Socrates",
          link: "Socrates → Plato → Aristotle",
          focus: "Used dialogue to question ideas and search for accurate concepts.",
          detail: "He encouraged people to seek truth through reasoned debate.",
        },
        {
          key: "plato",
          name: "Plato",
          link: "Socrates → Plato → Aristotle",
          focus: "Built a school for deep thinking and taught Aristotle.",
          detail: "Plato stressed understanding the world through reason.",
        },
        {
          key: "aristotle",
          name: "Aristotle",
          link: "Socrates → Plato → Aristotle",
          focus: "Systematically summarized how humans think and reason.",
          detail: "He later taught Alexander the Great and founded the Lyceum.",
        },
      ],
    },
    giantsSteps: [
      "Choose a philosopher.",
      "Read the mentor chain and focus idea.",
      "Explain why reason mattered to them.",
    ],
    giantsCheckpoint: {
      prompt: "Which statement best describes the relationship among the three philosophers?",
      options: [
        {
          label: "Plato studied under Socrates, and Aristotle studied under Plato.",
          correct: true,
          explanation: "The teacher-student chain is Socrates → Plato → Aristotle.",
        },
        {
          label: "Aristotle taught Socrates and Plato.",
          correct: false,
          explanation: "Aristotle was younger and studied after them.",
        },
        {
          label: "They were all students at Harvard University.",
          correct: false,
          explanation: "They lived in ancient Greece, long before Harvard.",
        },
      ],
    },
    logicTitle: "2. Aristotle's Logic",
    logicEyebrow: "Rules of thinking",
    logicConceptTitle: "Concept Card",
    logicConceptLines: [
      "Logic is the rules and methods for thinking clearly.",
      "Sound reasoning convinces others; flawed reasoning is sophistry.",
      "Aristotle's syllogism became a core logical form.",
    ],
    logicParas: [
      "The Greeks loved debate. Socrates used dialogue to correct faulty thinking, and Aristotle created the first systematic framework of logic.",
      "In his system, the syllogism links premises to a conclusion. His students later compiled the Organon, marking the start of logic as an independent field.",
      "Syllogisms were the first scientific description of human reasoning, which mattered for AI because machines must imitate clear human thinking.",
    ],
    logicExample: [
      "Major premise: " + "\"All birds have feathers.\"",
      "Minor premise: " + "\"A goose is a bird.\"",
      "Conclusion: " + "\"Therefore, a goose has feathers.\"",
    ],
    logicFigure: {
      label: "Figure 4-2",
      caption: "Example of Aristotle's syllogism.",
      placeholder: "Illustration placeholder",
    },
    logicDemo: {
      title: "Build a Syllogism",
      goal: "Choose premises and see whether the reasoning form is valid.",
      note: "A valid form still needs true premises to be believable.",
      majorOptions: [
        {
          key: "birds",
          text: "All birds have feathers.",
          category: "bird",
          attribute: "has feathers",
        },
        {
          key: "fish",
          text: "All fish live in water.",
          category: "fish",
          attribute: "lives in water",
        },
      ],
      minorOptions: [
        {
          key: "goose-bird",
          text: "A goose is a bird.",
          category: "bird",
        },
        {
          key: "goose-fish",
          text: "A goose is a fish.",
          category: "fish",
        },
      ],
    },
    logicSteps: [
      "Select a major premise and a minor premise.",
      "Check whether the conclusion follows the form.",
      "Explain why logic focuses on the structure.",
    ],
    logicCheckpoint: {
      prompt: "Why was Aristotle's logic important for the origins of AI?",
      options: [
        {
          label: "It clarified how human reasoning works so machines could imitate it.",
          correct: true,
          explanation: "AI needs clear rules of thinking to simulate reasoning.",
        },
        {
          label: "It replaced all math with poetry.",
          correct: false,
          explanation: "Logic supports science and math; it does not replace them.",
        },
        {
          label: "It said machines should avoid rules.",
          correct: false,
          explanation: "Logic provides rules for clear reasoning.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Think it through",
    foodParas: [
      "Aristotle made some mistakes, such as claiming that heavier objects fall faster or that male animals have more teeth. Later scientists proved these claims wrong.",
      "How should we view such mistakes? Do they cancel his other ideas?",
    ],
    foodDemo: {
      title: "How to View Mistakes",
      goal: "Choose a stance and see the most balanced response.",
      choices: [
        {
          key: "reject",
          label: "Reject everything",
          response: "This ignores the value of his logical ideas and long-term influence.",
        },
        {
          key: "balance",
          label: "Respect, but verify",
          response: "A balanced view keeps valuable ideas while re-checking evidence.",
        },
        {
          key: "accept",
          label: "Accept everything",
          response: "Blind acceptance ignores that even great thinkers can be wrong.",
        },
      ],
    },
    foodSteps: [
      "Pick a viewpoint.",
      "Read how that viewpoint treats mistakes.",
      "Explain why evidence and truth-seeking matter.",
    ],
    foodCheckpoint: {
      prompt: "What is the most reasonable way to view Aristotle's mistakes?",
      options: [
        {
          label: "Respect his contributions but verify claims with evidence.",
          correct: true,
          explanation: "Great ideas can coexist with errors; evidence matters.",
        },
        {
          label: "Assume everything he said was correct.",
          correct: false,
          explanation: "Even great thinkers made mistakes that should be checked.",
        },
        {
          label: "Ignore all his ideas because of a few errors.",
          correct: false,
          explanation: "His logic work still shaped later thinking.",
        },
      ],
    },
    historyTitle: "History Corner",
    historyEyebrow: "Logic in life",
    historyCardTitle: "Spotting reasoning flaws",
    historyParas: [
      "Logic is the foundation of reasoning. Clear logic is essential not only in daily conversation but also in scientific research.",
      "Sometimes people use flawed reasoning without realizing it, or use false logic to mislead. We should learn to spot these flaws.",
    ],
    historyDemo: {
      title: "Find the Logic Gap",
      goal: "Choose the response that contains a logical fallacy.",
      scenarios: [
        {
          key: "1",
          prompt: "Speaker: Our companies should not only pursue getting bigger and stronger.",
          options: [
            {
              key: "a",
              label: "So should we make them smaller and weaker?",
              isFallacy: true,
              explanation: "Not only bigger/stronger does not mean smaller/weaker.",
            },
            {
              key: "b",
              label: "Maybe we should also focus on quality and responsibility.",
              isFallacy: false,
              explanation: "This extends the idea without twisting it.",
            },
          ],
        },
        {
          key: "2",
          prompt: "Writer: There are some things abroad we should learn from.",
          options: [
            {
              key: "a",
              label: "If abroad is so good, why come back?",
              isFallacy: true,
              explanation: "Learning some things does not mean everything is better.",
            },
            {
              key: "b",
              label: "We can learn good ideas while still loving home.",
              isFallacy: false,
              explanation: "This keeps the original meaning.",
            },
          ],
        },
      ],
    },
    historySteps: [
      "Select a scenario.",
      "Pick the response with a logic gap.",
      "Explain why it twists the meaning.",
    ],
    historyCheckpoint: {
      prompt: "Why is logic training important?",
      options: [
        {
          label: "It helps us judge reasoning and avoid being misled.",
          correct: true,
          explanation: "Logical thinking improves our ability to tell truth from falsehood.",
        },
        {
          label: "It replaces evidence and experiments.",
          correct: false,
          explanation: "Logic supports evidence-based reasoning; it does not replace it.",
        },
        {
          label: "It only matters in mathematics, not daily life.",
          correct: false,
          explanation: "Logic matters in everyday conversations and decisions.",
        },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryEyebrow: "Summary",
    summaryPoints: [
      "Aristotle was a major thinker who shaped many fields and valued truth.",
      "He systematized logic and introduced the syllogism as a reasoning form.",
      "Clear logical rules helped lay the groundwork for AI.",
      "Mistakes should be examined with evidence, not used to dismiss all ideas.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解亚里士多德的生平。",
      "理解他总结思维规则对 AI 起源的影响。",
      "认识说话做事合乎逻辑的重要性。",
    ],
    introTitle: "故事开头",
    introEyebrow: "开场",
    introText:
      "亚里士多德是古希腊伟大的哲学家，影响了许多学科。他首次科学地总结了人类思维的规则，为机器模仿人类思考奠定了基础。",
    giantsTitle: "1. 巨人的足迹",
    giantsEyebrow: "古希腊三贤",
    giantsConceptTitle: "概念卡片",
    giantsConceptLines: [
      "苏格拉底、柏拉图、亚里士多德是最具代表性的三位哲学家。",
      "他们强调用理性认识世界，重视深入思考。",
      "亚里士多德曾是柏拉图的学生，后来成为老师。",
    ],
    giantsParas: [
      "古希腊群星璀璨。苏格拉底教柏拉图，柏拉图教亚里士多德，他们的思想奠定了多学科的基础。",
      "亚里士多德出生于公元前 384 年，18 岁进入柏拉图学园，学习近 20 年，成为杰出学生。",
      "他后来辅导亚历山大大帝，回到雅典创办学园，因为喜欢边走边讲，被称为逍遥学派。",
      "他研究几乎所有领域，坚持追求真理，留下名言：" + "\"吾爱吾师，更爱真理。\"",
    ],
    giantsFigure: {
      label: "图 4-1",
      caption: "苏格拉底、柏拉图、亚里士多德雕像。",
      placeholder: "插图占位",
    },
    giantsDemo: {
      title: "哲学家传承",
      goal: "查看三位哲学家的师承关系与重点思想。",
      figures: [
        {
          key: "socrates",
          name: "苏格拉底",
          link: "苏格拉底 → 柏拉图 → 亚里士多德",
          focus: "用对话追问概念，纠正错误思考。",
          detail: "强调以理性辩论寻找真理。",
        },
        {
          key: "plato",
          name: "柏拉图",
          link: "苏格拉底 → 柏拉图 → 亚里士多德",
          focus: "创办学园，培养亚里士多德。",
          detail: "主张用理性理解世界。",
        },
        {
          key: "aristotle",
          name: "亚里士多德",
          link: "苏格拉底 → 柏拉图 → 亚里士多德",
          focus: "系统总结人类思维规则。",
          detail: "后来成为亚历山大大帝的老师。",
        },
      ],
    },
    giantsSteps: [
      "选择一位哲学家。",
      "阅读师承线索与思想重点。",
      "说明他们为何重视理性。",
    ],
    giantsCheckpoint: {
      prompt: "下列哪项正确描述三位哲学家的关系？",
      options: [
        {
          label: "柏拉图是苏格拉底的学生，亚里士多德是柏拉图的学生。",
          correct: true,
          explanation: "师承关系是苏格拉底 → 柏拉图 → 亚里士多德。",
        },
        {
          label: "亚里士多德教过苏格拉底和柏拉图。",
          correct: false,
          explanation: "亚里士多德年代更晚，不可能教他们。",
        },
        {
          label: "他们都在哈佛大学求学。",
          correct: false,
          explanation: "他们生活在古希腊。",
        },
      ],
    },
    logicTitle: "2. 亚里士多德的逻辑",
    logicEyebrow: "思维规则",
    logicConceptTitle: "概念卡片",
    logicConceptLines: [
      "逻辑是人们思考问题时遵循的规则与方法。",
      "合乎逻辑的推理更有说服力。",
      "三段论是亚里士多德逻辑的核心。",
    ],
    logicParas: [
      "古希腊喜欢讨论思维方式。苏格拉底用对话纠错，而亚里士多德首次系统研究思维规则。",
      "他提出三段论并把逻辑作为独立学科，后世将其著作汇编成《工具论》。",
      "三段论清晰描述了人的推理过程，为 AI 模仿人类思维提供了线索。",
    ],
    logicExample: [
      "大前提：\"所有鸟都有羽毛。\"",
      "小前提：\"鹅是鸟。\"",
      "结论：\"所以鹅有羽毛。\"",
    ],
    logicFigure: {
      label: "图 4-2",
      caption: "亚里士多德三段论示例。",
      placeholder: "插图占位",
    },
    logicDemo: {
      title: "搭建三段论",
      goal: "选择前提并判断推理形式是否成立。",
      note: "形式正确还需要前提真实才可信。",
      majorOptions: [
        {
          key: "birds",
          text: "所有鸟都有羽毛。",
          category: "bird",
          attribute: "有羽毛",
        },
        {
          key: "fish",
          text: "所有鱼都生活在水里。",
          category: "fish",
          attribute: "生活在水里",
        },
      ],
      minorOptions: [
        {
          key: "goose-bird",
          text: "鹅是鸟。",
          category: "bird",
        },
        {
          key: "goose-fish",
          text: "鹅是鱼。",
          category: "fish",
        },
      ],
    },
    logicSteps: [
      "选择大前提和小前提。",
      "查看结论是否符合逻辑形式。",
      "说明逻辑为何重视结构。",
    ],
    logicCheckpoint: {
      prompt: "亚里士多德的逻辑为何影响了 AI 的起源？",
      options: [
        {
          label: "它清楚描述人类推理步骤，便于机器模仿。",
          correct: true,
          explanation: "AI 需要明确的思维规则。",
        },
        {
          label: "它让数学消失了。",
          correct: false,
          explanation: "逻辑是科学与数学的基础。",
        },
        {
          label: "它主张完全不要规则。",
          correct: false,
          explanation: "逻辑强调规则与方法。",
        },
      ],
    },
    foodTitle: "想一想",
    foodEyebrow: "思考题",
    foodParas: [
      "亚里士多德也犯过错误，比如认为重物落得更快，或雄性动物牙齿更多，这些都被后来证明不正确。",
      "我们该如何看待这些错误？它们会否定他的全部观点吗？",
    ],
    foodDemo: {
      title: "如何看待错误",
      goal: "选择一种态度，看看更合理的回答。",
      choices: [
        {
          key: "reject",
          label: "全盘否定",
          response: "这样会忽视他在逻辑上的巨大贡献。",
        },
        {
          key: "balance",
          label: "尊重但核实",
          response: "保留有价值的思想，同时用证据检验观点。",
        },
        {
          key: "accept",
          label: "全部相信",
          response: "这会忽视伟人也可能犯错的事实。",
        },
      ],
    },
    foodSteps: [
      "选择一种观点。",
      "阅读该观点的结果。",
      "解释为何要尊重证据与真理。",
    ],
    foodCheckpoint: {
      prompt: "看待亚里士多德错误的最佳方式是？",
      options: [
        {
          label: "尊重贡献，但用证据核实观点。",
          correct: true,
          explanation: "科学精神要求核实与修正。",
        },
        {
          label: "因为有错误就完全否定。",
          correct: false,
          explanation: "错误不等于全部无效。",
        },
        {
          label: "无条件全部接受。",
          correct: false,
          explanation: "不加判断会忽略事实。",
        },
      ],
    },
    historyTitle: "历史角",
    historyEyebrow: "生活中的逻辑",
    historyCardTitle: "识别推理漏洞",
    historyParas: [
      "逻辑是推理的基础，科学研究和日常交流都离不开它。",
      "有些人会在表达中出现逻辑漏洞，我们要学会判断。",
    ],
    historyDemo: {
      title: "找出逻辑漏洞",
      goal: "选择包含逻辑错误的回应。",
      scenarios: [
        {
          key: "1",
          prompt: "讲话人：企业不应只追求做大做强。",
          options: [
            {
              key: "a",
              label: "那是不是要做小做弱？",
              isFallacy: true,
              explanation: "“不只”并不等于“相反”。",
            },
            {
              key: "b",
              label: "也可以关注质量与责任。",
              isFallacy: false,
              explanation: "这是对原话的合理补充。",
            },
          ],
        },
        {
          key: "2",
          prompt: "作者：国外有些东西值得我们学习。",
          options: [
            {
              key: "a",
              label: "既然国外那么好，为什么回来？",
              isFallacy: true,
              explanation: "“学习一些”并不等于“全都更好”。",
            },
            {
              key: "b",
              label: "学习优点并不影响热爱家乡。",
              isFallacy: false,
              explanation: "保留了原意。",
            },
          ],
        },
      ],
    },
    historySteps: [
      "选择一个情境。",
      "找出有逻辑漏洞的回答。",
      "说明它错在何处。",
    ],
    historyCheckpoint: {
      prompt: "训练逻辑思维的作用是什么？",
      options: [
        {
          label: "帮助我们判断推理是否合理，避免被误导。",
          correct: true,
          explanation: "逻辑让我们更容易分辨真伪。",
        },
        {
          label: "可以替代证据和实验。",
          correct: false,
          explanation: "逻辑需要与证据相结合。",
        },
        {
          label: "只在数学中有用。",
          correct: false,
          explanation: "生活与研究都需要逻辑。",
        },
      ],
    },
    summaryTitle: "要点回顾",
    summaryEyebrow: "总结",
    summaryPoints: [
      "亚里士多德是多领域的伟大思想家，强调追求真理。",
      "他系统提出逻辑，并以三段论描述推理。",
      "清晰的思维规则为 AI 起源奠定基础。",
      "对错误应保持尊重与验证并重的态度。",
    ],
  },
};
