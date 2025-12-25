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

export function PrimaryLesson4_4({ lang }: LessonProps) {
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
    { id: "abacus", label: t.abacusTitle },
    { id: "general", label: t.generalTitle },
    { id: "architecture", label: t.architectureTitle },
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

        <SectionBlock id="abacus" title={t.abacusTitle} eyebrow={t.abacusEyebrow}>
          <InfoCard title={t.abacusConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.abacusConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.abacusParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.abacusFigure.label}
            caption={t.abacusFigure.caption}
            placeholder={t.abacusFigure.placeholder}
          />
          <ToolEvolutionDemo
            lang={lang}
            title={t.abacusDemo.title}
            goal={t.abacusDemo.goal}
            resetLabel={ui.reset}
            stages={t.abacusDemo.stages}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.abacusSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.abacusCheckpoint.prompt}
            options={t.abacusCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="general" title={t.generalTitle} eyebrow={t.generalEyebrow}>
          <InfoCard title={t.generalConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.generalConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.generalParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.generalFigure.label}
            caption={t.generalFigure.caption}
            placeholder={t.generalFigure.placeholder}
          />
          <ENIACFactsDemo
            lang={lang}
            title={t.generalDemo.title}
            goal={t.generalDemo.goal}
            resetLabel={ui.reset}
            facts={t.generalDemo.facts}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.generalSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.generalCheckpoint.prompt}
            options={t.generalCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="architecture" title={t.architectureTitle} eyebrow={t.architectureEyebrow}>
          <InfoCard title={t.architectureConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.architectureConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.architectureParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.architectureFigure.label}
            caption={t.architectureFigure.caption}
            placeholder={t.architectureFigure.placeholder}
          />
          <div className="grid gap-3 md:grid-cols-2">
            {t.architectureFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <ArchitectureBlocksDemo
            lang={lang}
            title={t.architectureDemo.title}
            goal={t.architectureDemo.goal}
            resetLabel={ui.reset}
            blocks={t.architectureDemo.blocks}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.architectureSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.architectureCheckpoint.prompt}
            options={t.architectureCheckpoint.options}
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

type ToolStage = {
  key: string;
  label: string;
  detail: string;
  insight: string;
};

function ToolEvolutionDemo({
  lang,
  title,
  goal,
  resetLabel,
  stages,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  stages: ToolStage[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(stages[0]?.key ?? "");
  const current = stages.find((stage) => stage.key === active) ?? stages[0];

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
          onClick={() => setActive(stages[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {stages.map((stage) => (
          <button
            key={stage.key}
            type="button"
            onClick={() => setActive(stage.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              stage.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {stage.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "关键变化" : "Key change"}
          </p>
          <p className="mt-1 text-sm">{current.detail}</p>
          <p className="mt-2 text-xs text-slate-600">{current.insight}</p>
        </div>
      )}
    </div>
  );
}

type FactCard = {
  key: string;
  label: string;
  detail: string;
};

function ENIACFactsDemo({
  lang,
  title,
  goal,
  resetLabel,
  facts,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  facts: FactCard[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(facts[0]?.key ?? "");
  const current = facts.find((fact) => fact.key === active) ?? facts[0];

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
          onClick={() => setActive(facts[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {facts.map((fact) => (
          <button
            key={fact.key}
            type="button"
            onClick={() => setActive(fact.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              fact.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {fact.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "ENIAC 事实" : "ENIAC fact"}
          </p>
          <p className="mt-1 text-sm">{current.detail}</p>
        </div>
      )}
    </div>
  );
}

type ArchitectureBlock = {
  key: string;
  label: string;
  detail: string;
};

function ArchitectureBlocksDemo({
  lang,
  title,
  goal,
  resetLabel,
  blocks,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  blocks: ArchitectureBlock[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(blocks[0]?.key ?? "");
  const current = blocks.find((block) => block.key === active) ?? blocks[0];

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
          onClick={() => setActive(blocks[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 grid gap-2 md:grid-cols-3">
        {blocks.map((block) => (
          <button
            key={block.key}
            type="button"
            onClick={() => setActive(block.key)}
            className={[
              "rounded-xl border px-3 py-2 text-left text-xs font-semibold transition",
              block.key === active
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {block.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "部件作用" : "Role"}
          </p>
          <p className="mt-1 text-sm">{current.detail}</p>
        </div>
      )}
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand how computers were invented.",
      "Learn about John von Neumann's contributions and architecture.",
      "See how computers impacted human civilization.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "The Turing machine was a theoretical model. Building real computers required practical inventions and a revolution in the 1930s and 1940s.",
    abacusTitle: "1. From the Abacus to Mechanical Calculators",
    abacusEyebrow: "Early tools",
    abacusConceptTitle: "Concept Card",
    abacusConceptLines: [
      "The abacus served for centuries but could not handle growing complexity.",
      "Pascal built a mechanical adder in 1642.",
      "Early machines were task-specific, not general-purpose.",
    ],
    abacusParas: [
      "As calculations grew more complex, people needed tools beyond the abacus.",
      "Blaise Pascal invented a wheel-based calculator to help his father with taxes.",
      "These machines performed specific tasks but were not flexible like modern computers.",
    ],
    abacusFigure: {
      label: "Figure 4-10",
      caption: "A wheel-based adder invented by Pascal.",
      placeholder: "Illustration placeholder",
    },
    abacusDemo: {
      title: "Calculation Tools",
      goal: "See how tools evolved from manual to mechanical.",
      stages: [
        {
          key: "abacus",
          label: "Abacus",
          detail: "Manual beads helped people calculate by hand.",
          insight: "Great for basic arithmetic, but limited for complex tasks.",
        },
        {
          key: "pascal",
          label: "Pascal's machine",
          detail: "Gears rotated to perform addition automatically.",
          insight: "A leap toward automation, but still task-specific.",
        },
        {
          key: "mechanical",
          label: "Mechanical calculators",
          detail: "More complex machines appeared over time.",
          insight: "They still lacked the flexibility of general-purpose computers.",
        },
      ],
    },
    abacusSteps: [
      "Pick a tool stage.",
      "Read what it could do.",
      "Explain why general-purpose machines were needed next.",
    ],
    abacusCheckpoint: {
      prompt: "Why did people move beyond the abacus?",
      options: [
        {
          label: "Calculations became more complex and needed automation.",
          correct: true,
          explanation: "Manual tools could not keep up with complexity.",
        },
        {
          label: "The abacus could only count to five.",
          correct: false,
          explanation: "The abacus could handle larger numbers.",
        },
        {
          label: "No one used math anymore.",
          correct: false,
          explanation: "Math was increasingly important.",
        },
      ],
    },
    generalTitle: "2. The Birth of the General-Purpose Computer",
    generalEyebrow: "ENIAC era",
    generalConceptTitle: "Concept Card",
    generalConceptLines: [
      "Vacuum tubes enabled fully electronic computers.",
      "Colossus was programmable but not general-purpose.",
      "ENIAC was the first general-purpose electronic computer.",
    ],
    generalParas: [
      "By the 1940s, scientists built electronic computers using vacuum tubes.",
      "Colossus was programmable but designed for specific tasks.",
      "ENIAC was massive, hard to program with wires and switches, and often had tubes burn out. The ENIAC Girls did much of the programming work.",
    ],
    generalFigure: {
      label: "Figure 4-11",
      caption: "The ENIAC Girls.",
      placeholder: "Illustration placeholder",
    },
    generalDemo: {
      title: "ENIAC at a Glance",
      goal: "Explore why ENIAC was powerful but difficult to use.",
      facts: [
        {
          key: "size",
          label: "Size",
          detail: "30.48 m long, 6 m wide, about 170 square meters in area.",
        },
        {
          key: "weight",
          label: "Weight",
          detail: "Around 27 tons and filled two to three classrooms.",
        },
        {
          key: "programming",
          label: "Programming",
          detail: "Used jumper wires and switches, which was very tedious.",
        },
        {
          key: "stability",
          label: "Stability",
          detail: "Vacuum tubes often burned out and needed replacement.",
        },
      ],
    },
    generalSteps: [
      "Select an ENIAC fact.",
      "Describe why it was difficult to operate.",
      "Compare ENIAC with today's devices.",
    ],
    generalCheckpoint: {
      prompt: "What made ENIAC difficult to use?",
      options: [
        {
          label: "Programming required wiring and switches, which was slow and complex.",
          correct: true,
          explanation: "ENIAC was programmable but tedious to rewire.",
        },
        {
          label: "It could not do calculations.",
          correct: false,
          explanation: "ENIAC was very powerful for its time.",
        },
        {
          label: "It was smaller than a modern phone.",
          correct: false,
          explanation: "ENIAC was enormous.",
        },
      ],
    },
    architectureTitle: "3. John von Neumann and Modern Architecture",
    architectureEyebrow: "Stored-program idea",
    architectureConceptTitle: "Concept Card",
    architectureConceptLines: [
      "Von Neumann formalized the stored-program architecture.",
      "Programs and data live in the same memory space.",
      "This made computers more flexible and efficient.",
    ],
    architectureParas: [
      "Von Neumann outlined a stored-program design in the 1945 EDVAC report.",
      "He divided a computer into six parts and proposed using binary.",
      "The architecture let computers read instructions from memory instead of rewiring.",
    ],
    architectureFigure: {
      label: "Figure 4-12",
      caption: "Von Neumann's stored-program computer architecture.",
      placeholder: "Illustration placeholder",
    },
    architectureFigures: [
      {
        label: "Figure 4-13",
        caption: "Manchester Baby.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 4-14",
        caption: "EDSAC developed at the University of Cambridge.",
        placeholder: "Illustration placeholder",
      },
    ],
    architectureDemo: {
      title: "Architecture Blocks",
      goal: "Explore the six parts of von Neumann's computer design.",
      blocks: [
        {
          key: "arithmetic",
          label: "Arithmetic unit",
          detail: "Handles calculations and logic operations.",
        },
        {
          key: "control",
          label: "Control unit",
          detail: "Directs the machine to follow instructions.",
        },
        {
          key: "memory",
          label: "Memory",
          detail: "Stores both data and program instructions.",
        },
        {
          key: "input",
          label: "Input device",
          detail: "Sends data and instructions into the computer.",
        },
        {
          key: "output",
          label: "Output device",
          detail: "Shows results to the outside world.",
        },
        {
          key: "storage",
          label: "External storage",
          detail: "Keeps data for longer-term use.",
        },
      ],
    },
    architectureSteps: [
      "Choose a block.",
      "Read its role in the system.",
      "Explain why storing programs in memory matters.",
    ],
    architectureCheckpoint: {
      prompt: "What is the key idea of the stored-program architecture?",
      options: [
        {
          label: "Programs and data are stored together in memory.",
          correct: true,
          explanation: "This allows automatic execution without rewiring.",
        },
        {
          label: "Programs can only be written with switches and wires.",
          correct: false,
          explanation: "Stored programs removed the need for constant rewiring.",
        },
        {
          label: "Data and instructions must be stored separately forever.",
          correct: false,
          explanation: "The key was sharing one memory space.",
        },
      ],
    },
    historyTitle: "History Corner",
    historyEyebrow: "Vacuum tubes",
    historyCardTitle: "From Edison to logic circuits",
    historyParas: [
      "Vacuum tubes enabled early computers to build logic circuits. Edison discovered the Edison Effect, leading to the vacuum diode and triode.",
      "The triode could amplify and switch current, making logical operations possible.",
    ],
    summaryTitle: "Key Takeaways",
    summaryEyebrow: "Summary",
    summaryPoints: [
      "Early calculators evolved from abacuses to mechanical devices.",
      "ENIAC was the first general-purpose electronic computer but was hard to program.",
      "Von Neumann's stored-program architecture made computers flexible.",
      "Vacuum tubes enabled early logic circuits and electronic computing.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解计算机的发明过程。",
      "认识冯·诺依曼对计算机架构的贡献。",
      "理解计算机对人类文明的影响。",
    ],
    introTitle: "故事开头",
    introEyebrow: "开场",
    introText:
      "图灵机是理论模型，真正的计算机需要工程实践。20 世纪 30-40 年代的计算革命由此展开。",
    abacusTitle: "1. 从算盘到机械计算器",
    abacusEyebrow: "早期工具",
    abacusConceptTitle: "概念卡片",
    abacusConceptLines: [
      "算盘使用了数百年，但难以应对复杂计算。",
      "帕斯卡在 1642 年发明机械加法器。",
      "早期机器只能完成特定任务。",
    ],
    abacusParas: [
      "随着社会进步，计算需求越来越复杂，算盘逐渐不够用。",
      "帕斯卡为帮助父亲处理税务发明了齿轮式计算器。",
      "这些装置可以自动计算，但仍缺少通用性。",
    ],
    abacusFigure: {
      label: "图 4-10",
      caption: "帕斯卡发明的轮式加法器。",
      placeholder: "插图占位",
    },
    abacusDemo: {
      title: "计算工具演变",
      goal: "了解从手动到机械的变化。",
      stages: [
        {
          key: "abacus",
          label: "算盘",
          detail: "通过拨珠完成手工计算。",
          insight: "适合基础运算，但难以处理复杂任务。",
        },
        {
          key: "pascal",
          label: "帕斯卡机",
          detail: "齿轮转动完成加法。",
          insight: "迈向自动化，但仍是专用机器。",
        },
        {
          key: "mechanical",
          label: "机械计算器",
          detail: "功能更复杂的机械装置逐渐出现。",
          insight: "仍缺少通用能力。",
        },
      ],
    },
    abacusSteps: [
      "选择一个工具阶段。",
      "阅读它的功能与局限。",
      "说说通用计算机为何必要。",
    ],
    abacusCheckpoint: {
      prompt: "为什么要从算盘走向机械计算器？",
      options: [
        {
          label: "计算更复杂，需要自动化工具。",
          correct: true,
          explanation: "手动工具难以满足需求。",
        },
        {
          label: "算盘只能算到 5。",
          correct: false,
          explanation: "算盘可以处理更大数值。",
        },
        {
          label: "数学不再重要。",
          correct: false,
          explanation: "数学需求反而增加。",
        },
      ],
    },
    generalTitle: "2. 通用计算机的诞生",
    generalEyebrow: "ENIAC 时代",
    generalConceptTitle: "概念卡片",
    generalConceptLines: [
      "真空管推动了电子计算机的发展。",
      "巨像机可编程但不是通用机。",
      "ENIAC 是第一台通用电子计算机。",
    ],
    generalParas: [
      "20 世纪 40 年代，真空管让计算机实现全电子化。",
      "巨像机能够编程，但仅用于特定任务。",
      "ENIAC 体积巨大、编程麻烦、故障频发，但开启了通用计算机时代。ENIAC 女程序员做出重要贡献。",
    ],
    generalFigure: {
      label: "图 4-11",
      caption: "“ENIAC 女孩”。",
      placeholder: "插图占位",
    },
    generalDemo: {
      title: "ENIAC 一览",
      goal: "了解 ENIAC 强大却难用的原因。",
      facts: [
        {
          key: "size",
          label: "尺寸",
          detail: "长 30.48 米、宽 6 米，面积约 170 平方米。",
        },
        {
          key: "weight",
          label: "重量",
          detail: "重约 27 吨，相当于两三间教室。",
        },
        {
          key: "programming",
          label: "编程",
          detail: "需要用跳线与开关设置，过程繁琐。",
        },
        {
          key: "stability",
          label: "稳定性",
          detail: "真空管常常烧坏，需要频繁更换。",
        },
      ],
    },
    generalSteps: [
      "选择一个 ENIAC 事实。",
      "说明它为何难以使用。",
      "对比今天的设备。",
    ],
    generalCheckpoint: {
      prompt: "ENIAC 最难使用的原因是什么？",
      options: [
        {
          label: "必须用跳线和开关编程，过程繁琐。",
          correct: true,
          explanation: "这让改程序非常费时。",
        },
        {
          label: "它不能计算。",
          correct: false,
          explanation: "它当时非常强大。",
        },
        {
          label: "它比手机还小。",
          correct: false,
          explanation: "ENIAC 体积巨大。",
        },
      ],
    },
    architectureTitle: "3. 冯·诺依曼与现代架构",
    architectureEyebrow: "存储程序",
    architectureConceptTitle: "概念卡片",
    architectureConceptLines: [
      "冯·诺依曼提出了存储程序结构。",
      "程序与数据存储在同一内存中。",
      "计算机因此更灵活高效。",
    ],
    architectureParas: [
      "冯·诺依曼在 EDVAC 报告中明确了存储程序思想。",
      "他将计算机分成六大部件，并提出使用二进制。",
      "机器可以自动读取指令，不再依赖跳线。",
    ],
    architectureFigure: {
      label: "图 4-12",
      caption: "冯·诺依曼的存储程序计算机架构。",
      placeholder: "插图占位",
    },
    architectureFigures: [
      {
        label: "图 4-13",
        caption: "曼彻斯特宝宝。",
        placeholder: "插图占位",
      },
      {
        label: "图 4-14",
        caption: "剑桥大学的 EDSAC。",
        placeholder: "插图占位",
      },
    ],
    architectureDemo: {
      title: "架构模块",
      goal: "了解冯·诺依曼计算机的六大部件。",
      blocks: [
        {
          key: "arithmetic",
          label: "运算器",
          detail: "负责算术与逻辑运算。",
        },
        {
          key: "control",
          label: "控制器",
          detail: "指挥执行指令。",
        },
        {
          key: "memory",
          label: "存储器",
          detail: "存放程序与数据。",
        },
        {
          key: "input",
          label: "输入设备",
          detail: "将信息送入计算机。",
        },
        {
          key: "output",
          label: "输出设备",
          detail: "把结果输出给外界。",
        },
        {
          key: "storage",
          label: "外部存储",
          detail: "用于长期保存数据。",
        },
      ],
    },
    architectureSteps: [
      "选择一个部件。",
      "理解它的作用。",
      "说明存储程序为何重要。",
    ],
    architectureCheckpoint: {
      prompt: "存储程序结构的核心思想是什么？",
      options: [
        {
          label: "程序和数据存放在同一内存中。",
          correct: true,
          explanation: "机器可以自动读取并执行指令。",
        },
        {
          label: "必须靠跳线才能编程。",
          correct: false,
          explanation: "存储程序避免了频繁改线。",
        },
        {
          label: "程序和数据永远分开存放。",
          correct: false,
          explanation: "关键是共享内存空间。",
        },
      ],
    },
    historyTitle: "历史角",
    historyEyebrow: "真空管",
    historyCardTitle: "从爱迪生到逻辑电路",
    historyParas: [
      "真空管让早期计算机能够进行逻辑运算。爱迪生效应推动了二极管和三极管的发明。",
      "三极管既能放大电流又能充当开关，为逻辑运算奠定基础。",
    ],
    summaryTitle: "要点回顾",
    summaryEyebrow: "总结",
    summaryPoints: [
      "计算工具从算盘发展到机械计算器。",
      "ENIAC 是首台通用电子计算机，但编程复杂。",
      "冯·诺依曼存储程序结构奠定现代计算机基础。",
      "真空管让逻辑电路成为可能。",
    ],
  },
};
