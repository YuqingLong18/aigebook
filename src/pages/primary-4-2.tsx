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

export function PrimaryLesson4_2({ lang }: LessonProps) {
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
    { id: "self-taught", label: t.selfTaughtTitle },
    { id: "logic", label: t.logicTitle },
    { id: "torch", label: t.torchTitle },
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

        <SectionBlock id="self-taught" title={t.selfTaughtTitle} eyebrow={t.selfTaughtEyebrow}>
          <InfoCard title={t.selfTaughtConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.selfTaughtConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.selfTaughtParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.selfTaughtFigure.label}
            caption={t.selfTaughtFigure.caption}
            placeholder={t.selfTaughtFigure.placeholder}
          />
          <BooleTimelineDemo
            lang={lang}
            title={t.selfTaughtDemo.title}
            goal={t.selfTaughtDemo.goal}
            resetLabel={ui.reset}
            events={t.selfTaughtDemo.events}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.selfTaughtSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.selfTaughtCheckpoint.prompt}
            options={t.selfTaughtCheckpoint.options}
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
          <FigureCard
            label={t.logicFigure.label}
            caption={t.logicFigure.caption}
            placeholder={t.logicFigure.placeholder}
          />
          <SymbolLogicDemo
            lang={lang}
            title={t.logicDemo.title}
            goal={t.logicDemo.goal}
            resetLabel={ui.reset}
            statement={t.logicDemo.statement}
            labels={t.logicDemo.labels}
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

        <SectionBlock id="torch" title={t.torchTitle} eyebrow={t.torchEyebrow}>
          <InfoCard title={t.torchConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.torchConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.torchParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FamilyLegacyDemo
            lang={lang}
            title={t.torchDemo.title}
            goal={t.torchDemo.goal}
            resetLabel={ui.reset}
            members={t.torchDemo.members}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.torchSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.torchCheckpoint.prompt}
            options={t.torchCheckpoint.options}
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
  year: string;
  label: string;
  detail: string;
};

function BooleTimelineDemo({
  lang,
  title,
  goal,
  resetLabel,
  events,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  events: TimelineEvent[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(events[0]?.key ?? "");
  const current = events.find((event) => event.key === active) ?? events[0];

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
          onClick={() => setActive(events[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {events.map((event) => (
          <button
            key={event.key}
            type="button"
            onClick={() => setActive(event.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              event.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {event.year}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "生平节点" : "Life milestone"}
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{current.label}</p>
          <p className="mt-2 text-sm">{current.detail}</p>
        </div>
      )}
    </div>
  );
}

type SymbolLabels = {
  a: string;
  b: string;
  implies: string;
  and: string;
  or: string;
  trueLabel: string;
  falseLabel: string;
};

function SymbolLogicDemo({
  lang,
  title,
  goal,
  resetLabel,
  statement,
  labels,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  statement: string;
  labels: SymbolLabels;
}) {
  const isZh = lang === "zh";
  const [a, setA] = useState(true);
  const [b, setB] = useState(true);

  const implies = !a || b;
  const and = a && b;
  const or = a || b;

  const reset = () => {
    setA(true);
    setB(true);
  };

  const displayBool = (value: boolean) => (value ? labels.trueLabel : labels.falseLabel);

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

      <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {isZh ? "原句" : "Original statement"}
        </p>
        <p className="mt-1 text-sm">{statement}</p>
      </div>

      <div className="mt-3 grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <Toggle label={labels.a} value={a} onChange={setA} />
          <Toggle label={labels.b} value={b} onChange={setB} />
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "计算结果" : "Computed results"}
          </p>
          <div className="mt-2 space-y-2">
            <ResultRow label={labels.implies} value={displayBool(implies)} />
            <ResultRow label={labels.and} value={displayBool(and)} />
            <ResultRow label={labels.or} value={displayBool(or)} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Toggle({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (val: boolean) => void;
}) {
  return (
    <label className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700">
      <span>{label}</span>
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 accent-brand-500"
      />
    </label>
  );
}

function ResultRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm">
      <span>{label}</span>
      <span className="text-slate-900">{value}</span>
    </div>
  );
}

type LegacyMember = {
  key: string;
  name: string;
  relation: string;
  contribution: string;
};

function FamilyLegacyDemo({
  lang,
  title,
  goal,
  resetLabel,
  members,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  members: LegacyMember[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(members[0]?.key ?? "");
  const current = members.find((member) => member.key === active) ?? members[0];

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
          onClick={() => setActive(members[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {members.map((member) => (
          <button
            key={member.key}
            type="button"
            onClick={() => setActive(member.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              member.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {member.name}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "传承线索" : "Legacy"}
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{current.relation}</p>
          <p className="mt-2 text-sm">{current.contribution}</p>
        </div>
      )}
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Learn about Boole's life.",
      "Understand his idea of using symbols and computation to describe thinking.",
      "See why formalizing thinking matters for the origins of AI.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "Aristotle created logic, but natural language can be ambiguous. George Boole made logic precise with symbols and rules, allowing thinking to be described mathematically.",
    selfTaughtTitle: "1. A Self-Taught Mathematician",
    selfTaughtEyebrow: "Boole's life",
    selfTaughtConceptTitle: "Concept Card",
    selfTaughtConceptLines: [
      "George Boole was born in 1815 in England.",
      "He had little formal education and taught himself languages and math.",
      "His effort led him into the academic mainstream.",
    ],
    selfTaughtParas: [
      "Boole's family was poor, so he left school early and studied on his own. At 16 he became a teacher to support his family.",
      "At 19, he founded his own school and continued researching mathematics. He later became a professor at Queen's College Cork.",
      "In 1857, he was elected a Fellow of the Royal Society.",
    ],
    selfTaughtFigure: {
      label: "Figure 4-3",
      caption: "George Boole.",
      placeholder: "Illustration placeholder",
    },
    selfTaughtDemo: {
      title: "Boole's Timeline",
      goal: "Follow key moments in Boole's life.",
      events: [
        {
          key: "1815",
          year: "1815",
          label: "Born in Lincolnshire",
          detail: "He grew up in a working-class family and learned on his own.",
        },
        {
          key: "1831",
          year: "16",
          label: "Became a teacher",
          detail: "He taught to support his family while studying math.",
        },
        {
          key: "1834",
          year: "19",
          label: "Founded a school",
          detail: "He became a headmaster and continued research.",
        },
        {
          key: "1849",
          year: "1849",
          label: "Queen's College Cork",
          detail: "He entered Britain's academic mainstream.",
        },
        {
          key: "1857",
          year: "1857",
          label: "Royal Society Fellow",
          detail: "His achievements earned major recognition.",
        },
      ],
    },
    selfTaughtSteps: [
      "Pick a year or age.",
      "Read what happened at that time.",
      "Explain how persistence helped Boole grow.",
    ],
    selfTaughtCheckpoint: {
      prompt: "What best describes Boole's early path?",
      options: [
        {
          label: "He was largely self-taught and worked as a teacher while studying math.",
          correct: true,
          explanation: "Boole learned on his own and taught to support his family.",
        },
        {
          label: "He studied at a rich university from childhood.",
          correct: false,
          explanation: "He had little formal education and learned independently.",
        },
        {
          label: "He avoided teaching and only studied art.",
          correct: false,
          explanation: "He taught and pursued mathematics seriously.",
        },
      ],
    },
    logicTitle: "2. Boole's Mathematical Logic",
    logicEyebrow: "Symbols and computation",
    logicConceptTitle: "Concept Card",
    logicConceptLines: [
      "Boole used symbols to represent statements and reasoning rules.",
      "Each statement is either true or false.",
      "Logic becomes as clear as a math problem.",
    ],
    logicParas: [
      "Boole showed that thinking could be represented by symbols and operations. For example, let A mean \"It rains today\" and B mean \"I will not play outside.\"",
      "The statement becomes A -> B. With clear symbols and rules, machines can compute logic precisely.",
      "Boole's work later influenced binary circuits and became the basis of Boolean algebra.",
    ],
    logicFigure: {
      label: "Figure 4-4",
      caption: "Boole Crater.",
      placeholder: "Illustration placeholder",
    },
    logicDemo: {
      title: "Symbolic Logic",
      goal: "Switch A and B to see how logic results change.",
      statement: "If it rains today, I will not play outside.",
      labels: {
        a: "A: It rains today",
        b: "B: I will not play outside",
        implies: "A -> B",
        and: "A AND B",
        or: "A OR B",
        trueLabel: "True",
        falseLabel: "False",
      },
    },
    logicSteps: [
      "Toggle whether A and B are true.",
      "Observe the result of A -> B and other operations.",
      "Explain why clear symbols help machines compute logic.",
    ],
    logicCheckpoint: {
      prompt: "Why did Boole's symbols matter for AI?",
      options: [
        {
          label: "They made logic precise so machines could compute it.",
          correct: true,
          explanation: "Clear symbols and rules let machines process reasoning.",
        },
        {
          label: "They removed the need for any rules.",
          correct: false,
          explanation: "Boole defined rules for computation.",
        },
        {
          label: "They made logic less clear.",
          correct: false,
          explanation: "The goal was precision and clarity.",
        },
      ],
    },
    torchTitle: "3. Passing the Torch",
    torchEyebrow: "Family legacy",
    torchConceptTitle: "Concept Card",
    torchConceptLines: [
      "Boole's descendants contributed to literature, science, and AI.",
      "The Hinton family links Boole to modern deep learning.",
      "Their stories show how ideas can travel across generations.",
    ],
    torchParas: [
      "Boole's family included writers and scientists. His youngest daughter Ethel wrote the novel The Gadfly.",
      "His descendants Han Ding and Han Chun contributed to Chinese social development, while the Hinton branch led to Geoffrey Hinton.",
      "Geoffrey Hinton introduced deep neural networks and won major awards, earning the title \"Godfather of AI.\"",
    ],
    torchDemo: {
      title: "Family Legacy",
      goal: "Explore how Boole's descendants impacted society and AI.",
      members: [
        {
          key: "ethel",
          name: "Ethel",
          relation: "Youngest daughter of Boole",
          contribution: "Author of the famous novel The Gadfly.",
        },
        {
          key: "handing",
          name: "Han Ding",
          relation: "Great-grandson (Sebastian's son)",
          contribution: "Journalist who documented China's land reform experiences.",
        },
        {
          key: "hanchun",
          name: "Han Chun",
          relation: "Great-granddaughter (Sebastian's daughter)",
          contribution: "Dedicated her life to China's agricultural mechanization.",
        },
        {
          key: "hinton",
          name: "Geoffrey Hinton",
          relation: "Descendant through the Hinton family",
          contribution: "Introduced deep neural networks and advanced modern AI.",
        },
      ],
    },
    torchSteps: [
      "Choose a descendant.",
      "Read their connection to Boole.",
      "Explain how ideas can pass through generations.",
    ],
    torchCheckpoint: {
      prompt: "Which descendant helped usher AI into the deep learning era?",
      options: [
        {
          label: "Geoffrey Hinton.",
          correct: true,
          explanation: "He introduced deep neural networks in 2006.",
        },
        {
          label: "Ethel Lilian Voynich.",
          correct: false,
          explanation: "She was a novelist, not a deep learning researcher.",
        },
        {
          label: "Han Chun.",
          correct: false,
          explanation: "She focused on agricultural mechanization.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Stay determined",
    foodParas: [
      "Boole grew up poor and had little formal education, yet he succeeded through self-study and perseverance.",
      "Everyone faces difficulties, but effort and confidence can turn challenges into opportunities.",
    ],
    foodSteps: [
      "Recall a challenge you faced.",
      "List one action that helped you move forward.",
      "Share how persistence changes outcomes.",
    ],
    foodCheckpoint: {
      prompt: "What message does Boole's story teach us?",
      options: [
        {
          label: "Persistent effort can overcome difficult beginnings.",
          correct: true,
          explanation: "Boole's success came from self-study and perseverance.",
        },
        {
          label: "Only formal schooling leads to success.",
          correct: false,
          explanation: "Boole's example shows self-study can be powerful.",
        },
        {
          label: "Challenges should be avoided at all costs.",
          correct: false,
          explanation: "Challenges can become opportunities for growth.",
        },
      ],
    },
    historyTitle: "History Corner",
    historyEyebrow: "Han Chun",
    historyCardTitle: "A courageous choice",
    historyParas: [
      "Han Chun worked on the Manhattan Project but resigned after realizing the destructive power of nuclear weapons.",
      "She later devoted her life to agricultural mechanization in China and to fostering friendship between China and the United States.",
    ],
    summaryTitle: "Key Takeaways",
    summaryEyebrow: "Summary",
    summaryPoints: [
      "Boole turned logic into precise symbols and operations.",
      "Symbolic logic enabled machines to compute reasoning steps.",
      "His descendants, including Geoffrey Hinton, influenced modern AI.",
      "Perseverance and self-study can change a life story.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解布尔的生平。",
      "理解他用符号和计算描述思维的想法。",
      "认识形式化思维对 AI 起源的重要性。",
    ],
    introTitle: "故事开头",
    introEyebrow: "开场",
    introText:
      "亚里士多德建立了逻辑学，但自然语言容易含糊。布尔用符号与规则让逻辑变得精确，使思维可以用数学来描述。",
    selfTaughtTitle: "1. 自学成才的数学家",
    selfTaughtEyebrow: "布尔的一生",
    selfTaughtConceptTitle: "概念卡片",
    selfTaughtConceptLines: [
      "布尔出生于 1815 年的英国。",
      "他几乎没有正式教育，靠自学语言和数学。",
      "持续努力让他进入学术主流。",
    ],
    selfTaughtParas: [
      "布尔家境贫寒，只能早早离校自学，16 岁当老师养家。",
      "19 岁他创办学校并持续研究数学，后来进入科克女王学院任教。",
      "1857 年他当选英国皇家学会会士。",
    ],
    selfTaughtFigure: {
      label: "图 4-3",
      caption: "乔治·布尔。",
      placeholder: "插图占位",
    },
    selfTaughtDemo: {
      title: "布尔时间线",
      goal: "了解布尔人生的重要节点。",
      events: [
        {
          key: "1815",
          year: "1815",
          label: "出生",
          detail: "他在艰苦环境中成长并自学。",
        },
        {
          key: "1831",
          year: "16 岁",
          label: "开始任教",
          detail: "一边教书一边学习数学。",
        },
        {
          key: "1834",
          year: "19 岁",
          label: "创办学校",
          detail: "成为校长并继续研究。",
        },
        {
          key: "1849",
          year: "1849",
          label: "进入大学",
          detail: "任职科克女王学院，走向学术主流。",
        },
        {
          key: "1857",
          year: "1857",
          label: "皇家学会",
          detail: "学术成就获得认可。",
        },
      ],
    },
    selfTaughtSteps: [
      "选择一个年份或年龄。",
      "阅读当时发生的事。",
      "说说坚持带来的变化。",
    ],
    selfTaughtCheckpoint: {
      prompt: "布尔早年的经历最符合哪一项？",
      options: [
        {
          label: "主要靠自学，并当老师支撑家庭。",
          correct: true,
          explanation: "他早早离校，自学语言和数学。",
        },
        {
          label: "从小就在名校接受完整教育。",
          correct: false,
          explanation: "他几乎没有正式教育。",
        },
        {
          label: "只研究文学，不接触数学。",
          correct: false,
          explanation: "他长期研究数学。",
        },
      ],
    },
    logicTitle: "2. 布尔的数理逻辑",
    logicEyebrow: "符号与计算",
    logicConceptTitle: "概念卡片",
    logicConceptLines: [
      "布尔用符号表达命题，用规则表达推理。",
      "命题只有“真/假”两种取值。",
      "逻辑变得像数学题一样清晰。",
    ],
    logicParas: [
      "他用符号表示事实，用运算符表示推理过程。例如 A 表示“今天下雨”，B 表示“我不去户外玩”。",
      "这句话就变成 A -> B。符号清晰后，机器才能准确计算。",
      "布尔的思想影响了二进制电路，被称为布尔代数。",
    ],
    logicFigure: {
      label: "图 4-4",
      caption: "布尔陨石坑。",
      placeholder: "插图占位",
    },
    logicDemo: {
      title: "符号逻辑",
      goal: "切换 A 和 B 的真假，观察逻辑结果。",
      statement: "如果今天下雨，我就不去户外玩。",
      labels: {
        a: "A：今天下雨",
        b: "B：我不去户外玩",
        implies: "A -> B",
        and: "A 且 B",
        or: "A 或 B",
        trueLabel: "真",
        falseLabel: "假",
      },
    },
    logicSteps: [
      "切换 A 与 B 的真假。",
      "观察 A -> B 的结果变化。",
      "说明清晰符号为何适合机器计算。",
    ],
    logicCheckpoint: {
      prompt: "布尔的符号逻辑对 AI 有何意义？",
      options: [
        {
          label: "让逻辑更精确，便于机器计算。",
          correct: true,
          explanation: "符号化与规则化使逻辑可计算。",
        },
        {
          label: "让逻辑更含糊。",
          correct: false,
          explanation: "布尔追求清晰与严格。",
        },
        {
          label: "完全不需要规则。",
          correct: false,
          explanation: "他提出的是运算规则。",
        },
      ],
    },
    torchTitle: "3. 火炬传承",
    torchEyebrow: "家族故事",
    torchConceptTitle: "概念卡片",
    torchConceptLines: [
      "布尔后代在文学、科学、AI 等领域继续发光。",
      "辛顿家族将布尔的思想连接到深度学习。",
      "思想可以跨越代际传递。",
    ],
    torchParas: [
      "布尔的女儿艾塞尔·伏尼契写下《牛虻》，家族中也有科学家。",
      "韩丁、韩春投身中国社会建设，而辛顿家族带来了杰弗里·辛顿。",
      "辛顿提出深度神经网络，被称为“AI 教父”。",
    ],
    torchDemo: {
      title: "家族传承",
      goal: "了解布尔后代对社会与 AI 的影响。",
      members: [
        {
          key: "ethel",
          name: "艾塞尔",
          relation: "布尔最小的女儿",
          contribution: "著名小说《牛虻》的作者。",
        },
        {
          key: "handing",
          name: "韩丁",
          relation: "曾孙（塞巴斯蒂安之子）",
          contribution: "记者，记录中国土地改革经历。",
        },
        {
          key: "hanchun",
          name: "韩春",
          relation: "曾孙女（塞巴斯蒂安之女）",
          contribution: "终身投入农业机械化建设。",
        },
        {
          key: "hinton",
          name: "杰弗里·辛顿",
          relation: "辛顿支系后代",
          contribution: "提出深度神经网络，推动现代 AI。",
        },
      ],
    },
    torchSteps: [
      "选择一位后代。",
      "阅读他们的贡献。",
      "说明思想如何跨代延续。",
    ],
    torchCheckpoint: {
      prompt: "哪位后代推动了深度学习时代的到来？",
      options: [
        {
          label: "杰弗里·辛顿。",
          correct: true,
          explanation: "他提出深度神经网络并获多项大奖。",
        },
        {
          label: "艾塞尔·伏尼契。",
          correct: false,
          explanation: "她是文学作家。",
        },
        {
          label: "韩春。",
          correct: false,
          explanation: "她致力于农业机械化。",
        },
      ],
    },
    foodTitle: "想一想",
    foodEyebrow: "坚持与信心",
    foodParas: [
      "布尔家境贫困、缺少教育，却凭自学与坚持获得成功。",
      "困难是磨砺，保持信心就能走得更远。",
    ],
    foodSteps: [
      "回想一次遇到困难的经历。",
      "说出你坚持下来的原因。",
      "分享坚持带来的收获。",
    ],
    foodCheckpoint: {
      prompt: "布尔故事的核心启示是什么？",
      options: [
        {
          label: "坚持努力可以改变命运。",
          correct: true,
          explanation: "他靠自学和毅力取得成就。",
        },
        {
          label: "只有名校教育才会成功。",
          correct: false,
          explanation: "布尔没有完整的正规教育。",
        },
        {
          label: "遇到困难就应该放弃。",
          correct: false,
          explanation: "困难也能成为成长机会。",
        },
      ],
    },
    historyTitle: "历史角",
    historyEyebrow: "韩春的选择",
    historyCardTitle: "勇敢的决定",
    historyParas: [
      "韩春曾参与曼哈顿计划，但意识到核武器的巨大危害后毅然辞职。",
      "她后来回到中国投身农业机械化，并促进中美友好交流。",
    ],
    summaryTitle: "要点回顾",
    summaryEyebrow: "总结",
    summaryPoints: [
      "布尔把逻辑转化为可计算的符号与规则。",
      "符号逻辑让机器能够处理推理过程。",
      "他的后代中出现了推动深度学习的杰弗里·辛顿。",
      "坚持与自学能让人突破困难。",
    ],
  },
};
