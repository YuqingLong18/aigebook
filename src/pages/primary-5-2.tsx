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

export function PrimaryLesson5_2({ lang }: LessonProps) {
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
    { id: "golden", label: t.goldenTitle },
    { id: "knowledge", label: t.knowledgeTitle },
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

        <SectionBlock id="golden" title={t.goldenTitle} eyebrow={t.goldenEyebrow}>
          <InfoCard title={t.goldenConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.goldenConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.goldenParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <RuleDomainDemo
            lang={lang}
            title={t.goldenDemo.title}
            goal={t.goldenDemo.goal}
            resetLabel={ui.reset}
            domains={t.goldenDemo.domains}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.goldenSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.goldenCheckpoint.prompt}
            options={t.goldenCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="knowledge" title={t.knowledgeTitle} eyebrow={t.knowledgeEyebrow}>
          <InfoCard title={t.knowledgeConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.knowledgeConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.knowledgeParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <div className="grid gap-3 md:grid-cols-2">
            {t.knowledgeFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <ExpertSystemDemo
            lang={lang}
            title={t.knowledgeDemo.title}
            goal={t.knowledgeDemo.goal}
            resetLabel={ui.reset}
            cases={t.knowledgeDemo.cases}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.knowledgeSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.knowledgeCheckpoint.prompt}
            options={t.knowledgeCheckpoint.options}
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
          <PerseveranceScaleDemo
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
          <KnowledgePowerDemo
            lang={lang}
            title={t.historyDemo.title}
            goal={t.historyDemo.goal}
            resetLabel={ui.reset}
            sliders={t.historyDemo.sliders}
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

type DomainCard = {
  key: string;
  label: string;
  rules: string;
  outcome: string;
};

function RuleDomainDemo({
  lang,
  title,
  goal,
  resetLabel,
  domains,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  domains: DomainCard[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(domains[0]?.key ?? "");
  const current = domains.find((domain) => domain.key === active) ?? domains[0];

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
          onClick={() => setActive(domains[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {domains.map((domain) => (
          <button
            key={domain.key}
            type="button"
            onClick={() => setActive(domain.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              domain.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {domain.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {isZh ? "规则清晰度" : "Rule clarity"}
            </p>
            <p className="mt-1 text-sm">{current.rules}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {isZh ? "效果" : "Outcome"}
            </p>
            <p className="mt-1 text-sm">{current.outcome}</p>
          </div>
        </div>
      )}
    </div>
  );
}

type ExpertCase = {
  key: string;
  title: string;
  inputs: string[];
  output: string;
  note: string;
};

function ExpertSystemDemo({
  lang,
  title,
  goal,
  resetLabel,
  cases,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  cases: ExpertCase[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(cases[0]?.key ?? "");
  const current = cases.find((item) => item.key === active) ?? cases[0];

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
          onClick={() => setActive(cases[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {cases.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => setActive(item.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              item.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {item.title}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {isZh ? "输入信息" : "Input"}
            </p>
            <ul className="mt-1 space-y-1 text-sm">
              {current.inputs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {isZh ? "系统建议" : "System output"}
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900">{current.output}</p>
            <p className="mt-2 text-xs text-slate-600">{current.note}</p>
          </div>
        </div>
      )}
    </div>
  );
}

type PerseveranceChoice = {
  key: string;
  label: string;
  response: string;
};

function PerseveranceScaleDemo({
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
  choices: PerseveranceChoice[];
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
            {isZh ? "启示" : "Reflection"}
          </p>
          <p className="mt-1 text-sm">{current.response}</p>
        </div>
      )}
    </div>
  );
}

type PowerSlider = {
  key: string;
  label: string;
  description: string;
};

function KnowledgePowerDemo({
  lang,
  title,
  goal,
  resetLabel,
  sliders,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  sliders: PowerSlider[];
}) {
  const isZh = lang === "zh";
  const [scores, setScores] = useState<Record<string, number>>(() =>
    Object.fromEntries(sliders.map((item) => [item.key, 60])),
  );

  const total = Math.round(
    sliders.reduce((sum, item) => sum + (scores[item.key] ?? 0), 0) / sliders.length,
  );

  const reset = () => {
    setScores(Object.fromEntries(sliders.map((item) => [item.key, 60])));
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

      <div className="mt-3 grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          {sliders.map((item) => (
            <label key={item.key} className="block text-sm font-semibold text-slate-700">
              {item.label}
              <input
                type="range"
                min={0}
                max={100}
                value={scores[item.key] ?? 0}
                onChange={(e) =>
                  setScores((prev) => ({
                    ...prev,
                    [item.key]: Number(e.target.value),
                  }))
                }
                className="mt-1 w-full accent-brand-500"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={scores[item.key] ?? 0}
              />
              <span className="text-xs text-slate-500">{scores[item.key] ?? 0}</span>
            </label>
          ))}
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "综合水平" : "Overall"}
          </p>
          <div className="mt-2 h-2 rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-emerald-500 transition-all"
              style={{ width: `${total}%` }}
              aria-hidden
            />
          </div>
          <p className="mt-2 text-xs text-slate-600">
            {isZh
              ? "推理能力和知识储备都需要提升，才能更聪明。"
              : "Reasoning and knowledge both need growth for stronger intelligence."}
          </p>
        </div>
      </div>
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand the background of expert systems and AI's ups and downs.",
      "Learn the basic idea of expert systems and typical examples.",
      "Appreciate Feigenbaum's perseverance in adversity.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "AI has had many ups and downs. Edward Feigenbaum restored confidence by creating expert systems and launching the era of knowledge engineering.",
    goldenTitle: "1. The End of the Golden Decade",
    goldenEyebrow: "AI winter",
    goldenConceptTitle: "Concept Card",
    goldenConceptLines: [
      "1956-1960s was a Golden Decade of rule-based AI.",
      "Rules worked well in narrow domains like games.",
      "By the 1970s, AI entered a slump.",
    ],
    goldenParas: [
      "Early AI used general rules like Newton's laws or Euclidean axioms. It solved well-defined tasks such as checkers and simple theorem proving.",
      "But rule-based AI struggled with complex tasks like language and speech. The limits led to an AI winter.",
      "Feigenbaum stayed committed and searched for new methods.",
    ],
    goldenDemo: {
      title: "Rules vs. Real Worlds",
      goal: "Compare where rule-based AI succeeds and where it struggles.",
      domains: [
        {
          key: "checkers",
          label: "Checkers",
          rules: "Clear rules and limited states.",
          outcome: "Rule-based AI performs well.",
        },
        {
          key: "geometry",
          label: "Geometry",
          rules: "Axioms define the problem space.",
          outcome: "Programs can prove many theorems.",
        },
        {
          key: "language",
          label: "Language",
          rules: "Rules are fuzzy and full of exceptions.",
          outcome: "Rule-based AI struggles.",
        },
        {
          key: "speech",
          label: "Speech",
          rules: "Signals vary with noise and accents.",
          outcome: "Rule-based AI struggles.",
        },
      ],
    },
    goldenSteps: [
      "Choose a domain.",
      "Check the rule clarity and outcome.",
      "Explain why clear rules matter.",
    ],
    goldenCheckpoint: {
      prompt: "Why did rule-based AI hit a limit?",
      options: [
        {
          label: "It struggled with complex tasks lacking clear rules.",
          correct: true,
          explanation: "Language and speech were too complex for fixed rules.",
        },
        {
          label: "It never worked for any games.",
          correct: false,
          explanation: "It worked well in games and simple proofs.",
        },
        {
          label: "Computers stopped working entirely.",
          correct: false,
          explanation: "The issue was method limits, not computers stopping.",
        },
      ],
    },
    knowledgeTitle: "2. Knowledge Is Intelligence",
    knowledgeEyebrow: "Expert systems",
    knowledgeConceptTitle: "Concept Card",
    knowledgeConceptLines: [
      "Feigenbaum believed knowledge is the core of intelligence.",
      "Expert systems store expert knowledge for reasoning.",
      "DENDRAL was the first expert system in 1965.",
    ],
    knowledgeParas: [
      "Feigenbaum learned from Herbert Simon and built the EPAM memory program.",
      "He realized AI needed rich knowledge, not just methods, and proposed expert systems.",
      "DENDRAL used chemical knowledge to identify molecular structures, proving the approach worked.",
    ],
    knowledgeFigures: [
      {
        label: "Figure 5-3",
        caption: "Edward Feigenbaum.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 5-4",
        caption: "The illustration of an expert system.",
        placeholder: "Illustration placeholder",
      },
    ],
    knowledgeDemo: {
      title: "Mini Expert System",
      goal: "See how expert knowledge leads to a recommendation.",
      cases: [
        {
          key: "health",
          title: "Health",
          inputs: ["Symptoms: fever, cough", "History: tired after school"],
          output: "Possible flu; rest and consult a doctor.",
          note: "Expert systems search a knowledge base for matches.",
        },
        {
          key: "chemistry",
          title: "Chemistry",
          inputs: ["Formula: C6H6", "Mass spectrum data"],
          output: "Likely structure: benzene ring.",
          note: "DENDRAL used similar chemical knowledge.",
        },
        {
          key: "repair",
          title: "Repair",
          inputs: ["Device: lamp", "Issue: no light, plug OK"],
          output: "Likely bulb failure; replace bulb.",
          note: "Rules connect symptoms to solutions.",
        },
      ],
    },
    knowledgeSteps: [
      "Pick a case.",
      "Read the input facts.",
      "Explain how knowledge leads to the output.",
    ],
    knowledgeCheckpoint: {
      prompt: "What is the core idea of expert systems?",
      options: [
        {
          label: "Use expert knowledge to reason and solve problems.",
          correct: true,
          explanation: "Knowledge drives the system's decisions.",
        },
        {
          label: "Avoid using any knowledge.",
          correct: false,
          explanation: "Expert systems rely on stored knowledge.",
        },
        {
          label: "Only use random guesses.",
          correct: false,
          explanation: "They apply rules and knowledge bases.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Perseverance",
    foodParas: [
      "Feigenbaum stayed with AI during a downturn and found a new path.",
      "Perseverance turns challenges into opportunities.",
    ],
    foodDemo: {
      title: "Facing a Slump",
      goal: "Choose a response to setbacks and see the result.",
      choices: [
        {
          key: "quit",
          label: "Quit",
          response: "Quitting avoids pressure but loses long-term chances.",
        },
        {
          key: "pause",
          label: "Pause and reflect",
          response: "Reflection can lead to new, better methods.",
        },
        {
          key: "persist",
          label: "Persist",
          response: "Persistence can revive progress, like expert systems did.",
        },
      ],
    },
    foodSteps: [
      "Pick a response.",
      "Read the reflection.",
      "Share a time you kept going.",
    ],
    foodCheckpoint: {
      prompt: "What attitude did Feigenbaum show?",
      options: [
        {
          label: "Courage and practical problem-solving in adversity.",
          correct: true,
          explanation: "He stayed in AI and found a new direction.",
        },
        {
          label: "Giving up on AI completely.",
          correct: false,
          explanation: "He kept working in AI.",
        },
        {
          label: "Avoiding challenges at all costs.",
          correct: false,
          explanation: "He faced the challenge head-on.",
        },
      ],
    },
    historyTitle: "History Corner",
    historyEyebrow: "Knowledge is power",
    historyCardTitle: "From Bacon to Cattell",
    historyParas: [
      "Francis Bacon wrote \"Knowledge itself is power\" in 1597. Later Thomas Hobbes popularized the phrase \"Knowledge is power.\"",
      "Psychologist Raymond Cattell divided intelligence into fluid intelligence (reasoning) and crystallized intelligence (knowledge).",
    ],
    historyDemo: {
      title: "Knowledge + Reasoning",
      goal: "Adjust knowledge and reasoning to see combined strength.",
      sliders: [
        {
          key: "fluid",
          label: "Fluid intelligence",
          description: "Reasoning and problem-solving ability.",
        },
        {
          key: "crystal",
          label: "Crystallized intelligence",
          description: "Knowledge and experience.",
        },
      ],
    },
    historySteps: [
      "Adjust both sliders.",
      "Observe the overall score.",
      "Explain why knowledge matters for intelligence.",
    ],
    historyCheckpoint: {
      prompt: "Why is knowledge important in AI?",
      options: [
        {
          label: "Knowledge provides the content that reasoning can use.",
          correct: true,
          explanation: "Expert systems rely on rich knowledge bases.",
        },
        {
          label: "Knowledge is unnecessary for thinking.",
          correct: false,
          explanation: "Reasoning needs knowledge to work on.",
        },
        {
          label: "Only luck matters in problem-solving.",
          correct: false,
          explanation: "Knowledge and reasoning are key.",
        },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryEyebrow: "Summary",
    summaryPoints: [
      "Rule-based AI thrived early but struggled in complex tasks.",
      "Feigenbaum proposed expert systems centered on knowledge.",
      "DENDRAL proved knowledge-driven AI worked.",
      "Perseverance and knowledge helped AI revive.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解专家系统提出的背景与 AI 的起伏。",
      "理解专家系统的基本思想与典型例子。",
      "感受费根鲍姆在逆境中的坚持。",
    ],
    introTitle: "故事开头",
    introEyebrow: "开场",
    introText: "人工智能发展经历起伏。费根鲍姆提出专家系统，使 AI 进入“知识工程”时代。",
    goldenTitle: "1. 黄金十年的终结",
    goldenEyebrow: "AI 寒冬",
    goldenConceptTitle: "概念卡片",
    goldenConceptLines: [
      "1956-1960 年代是规则 AI 的黄金期。",
      "规则方法在棋类等窄领域表现好。",
      "到 1970 年代 AI 进入低谷。",
    ],
    goldenParas: [
      "早期 AI 把牛顿定律、欧几里得公理等规则写进程序，解决清晰问题。",
      "但在语言和语音等复杂任务中，规则方法力不从心，导致 AI 进入寒冬。",
      "费根鲍姆坚持梦想，寻找新的方法。",
    ],
    goldenDemo: {
      title: "规则与现实",
      goal: "比较规则清晰的任务与复杂任务。",
      domains: [
        {
          key: "checkers",
          label: "跳棋",
          rules: "规则清晰，状态有限。",
          outcome: "规则方法效果好。",
        },
        {
          key: "geometry",
          label: "几何证明",
          rules: "公理明确，可推理。",
          outcome: "程序能证明许多定理。",
        },
        {
          key: "language",
          label: "自然语言",
          rules: "规则复杂且例外多。",
          outcome: "规则方法难以胜任。",
        },
        {
          key: "speech",
          label: "语音识别",
          rules: "信号多变，噪声影响大。",
          outcome: "规则方法表现不足。",
        },
      ],
    },
    goldenSteps: [
      "选择一个领域。",
      "查看规则清晰度与效果。",
      "说明规则清晰为何重要。",
    ],
    goldenCheckpoint: {
      prompt: "规则 AI 为什么会遇到瓶颈？",
      options: [
        {
          label: "复杂任务缺乏清晰规则。",
          correct: true,
          explanation: "语言、语音难以用固定规则描述。",
        },
        {
          label: "规则 AI 从未在棋类成功。",
          correct: false,
          explanation: "规则 AI 在棋类表现很好。",
        },
        {
          label: "计算机完全停止运作。",
          correct: false,
          explanation: "瓶颈来自方法限制。",
        },
      ],
    },
    knowledgeTitle: "2. 知识就是智能",
    knowledgeEyebrow: "专家系统",
    knowledgeConceptTitle: "概念卡片",
    knowledgeConceptLines: [
      "费根鲍姆认为知识是智能的核心。",
      "专家系统用知识库推理。",
      "1965 年诞生首个专家系统 DENDRAL。",
    ],
    knowledgeParas: [
      "费根鲍姆在赫伯特·西蒙指导下研究记忆程序。",
      "他认为 AI 需要丰富知识，并提出专家系统。",
      "DENDRAL 用化学知识识别分子结构，证明了知识驱动 AI 的可行性。",
    ],
    knowledgeFigures: [
      {
        label: "图 5-3",
        caption: "爱德华·费根鲍姆。",
        placeholder: "插图占位",
      },
      {
        label: "图 5-4",
        caption: "专家系统示意图。",
        placeholder: "插图占位",
      },
    ],
    knowledgeDemo: {
      title: "小型专家系统",
      goal: "观察知识如何带来建议。",
      cases: [
        {
          key: "health",
          title: "健康",
          inputs: ["症状：发烧、咳嗽", "背景：学习疲劳"],
          output: "可能感冒，请休息并咨询医生。",
          note: "专家系统在知识库中寻找匹配。",
        },
        {
          key: "chemistry",
          title: "化学",
          inputs: ["分子式：C6H6", "质谱数据"],
          output: "可能结构：苯环。",
          note: "DENDRAL 就是这样工作的。",
        },
        {
          key: "repair",
          title: "维修",
          inputs: ["设备：台灯", "现象：插好电却不亮"],
          output: "可能灯泡损坏，建议更换。",
          note: "规则把症状与解决方案相连。",
        },
      ],
    },
    knowledgeSteps: [
      "选择一个案例。",
      "阅读输入信息。",
      "说明知识如何推理出结果。",
    ],
    knowledgeCheckpoint: {
      prompt: "专家系统的核心思想是什么？",
      options: [
        {
          label: "用专家知识进行推理和决策。",
          correct: true,
          explanation: "知识是专家系统的核心。",
        },
        {
          label: "完全不需要知识。",
          correct: false,
          explanation: "专家系统依赖知识库。",
        },
        {
          label: "随机猜测。",
          correct: false,
          explanation: "专家系统使用规则和知识。",
        },
      ],
    },
    foodTitle: "想一想",
    foodEyebrow: "坚持",
    foodParas: [
      "AI 遇到低谷时，费根鲍姆没有放弃。",
      "坚持和反思能带来新突破。",
    ],
    foodDemo: {
      title: "面对低谷",
      goal: "选择面对挫折的态度。",
      choices: [
        {
          key: "quit",
          label: "放弃",
          response: "放弃能暂时轻松，但也失去机会。",
        },
        {
          key: "pause",
          label: "停下来反思",
          response: "反思能找到新的路径。",
        },
        {
          key: "persist",
          label: "坚持",
          response: "坚持让专家系统重新点燃 AI。",
        },
      ],
    },
    foodSteps: [
      "选择一种态度。",
      "阅读它带来的结果。",
      "分享一次坚持的经历。",
    ],
    foodCheckpoint: {
      prompt: "费根鲍姆展现了什么品质？",
      options: [
        {
          label: "勇气与务实解决问题的精神。",
          correct: true,
          explanation: "他在低谷中寻找新方法。",
        },
        {
          label: "彻底放弃 AI。",
          correct: false,
          explanation: "他坚持 AI 研究。",
        },
        {
          label: "躲避困难。",
          correct: false,
          explanation: "他正视困难并努力解决。",
        },
      ],
    },
    historyTitle: "历史角",
    historyEyebrow: "知识的力量",
    historyCardTitle: "从培根到卡特尔",
    historyParas: [
      "培根在 1597 年写下“知识本身就是力量”。霍布斯后来推广为“知识就是力量”。",
      "心理学家卡特尔把智能分为流体智能（推理）和晶体智能（知识）。",
    ],
    historyDemo: {
      title: "知识 + 推理",
      goal: "调节知识与推理，观察整体能力。",
      sliders: [
        {
          key: "fluid",
          label: "流体智能",
          description: "推理与解决问题能力。",
        },
        {
          key: "crystal",
          label: "晶体智能",
          description: "知识与经验积累。",
        },
      ],
    },
    historySteps: [
      "调整两项数值。",
      "观察综合水平。",
      "解释知识为何重要。",
    ],
    historyCheckpoint: {
      prompt: "知识对 AI 的意义是什么？",
      options: [
        {
          label: "为推理提供内容与材料。",
          correct: true,
          explanation: "专家系统需要丰富知识库。",
        },
        {
          label: "知识不重要。",
          correct: false,
          explanation: "推理离不开知识。",
        },
        {
          label: "只靠运气。",
          correct: false,
          explanation: "知识与推理共同作用。",
        },
      ],
    },
    summaryTitle: "要点回顾",
    summaryEyebrow: "总结",
    summaryPoints: [
      "规则 AI 在清晰任务中有效，但在复杂任务中受限。",
      "费根鲍姆提出以知识为核心的专家系统。",
      "DENDRAL 证明知识驱动 AI 可行。",
      "坚持与知识让 AI 走出低谷。",
    ],
  },
};
