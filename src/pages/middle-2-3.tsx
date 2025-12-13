import { useMemo, useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { LogicGateCircuitDemo } from "../demos/LogicGateCircuitDemo";
import { TuringMachineDemo } from "../demos/TuringMachineDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson2_3({ lang }: LessonProps) {
  const isZh = lang === "zh";
  const ui = {
    reset: isZh ? "重置" : "Reset",
    checkpointTag: isZh ? "检查点" : "Checkpoint",
    correctLabel: isZh ? "正确" : "Correct",
    incorrectLabel: isZh ? "再试一次" : "Try again",
    guidedTitle: isZh ? "引导步骤" : "Guided Steps",
  };

  const t = content[lang];
  const toc = [
    { id: "learning-objectives", label: t.learningObjectivesTitle },
    { id: "intro", label: t.introTitle },
    { id: "machines", label: t.machineTitle },
    { id: "turing", label: t.turingTitle },
    { id: "shannon", label: t.shannonTitle },
    { id: "eniac", label: t.eniacTitle },
    { id: "stored", label: t.storedTitle },
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
          <p className="text-sm leading-relaxed text-slate-700">{t.intro}</p>
          <InfoCard title={t.introCardTitle}>
            <p className="text-sm text-slate-700">{t.introCard}</p>
          </InfoCard>
        </SectionBlock>

        <SectionBlock id="machines" title={t.machineTitle} eyebrow={t.machineEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.machineIntro}</p>
          <CalcGallery lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.machineSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.machineCheckpoint.prompt}
            options={t.machineCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="turing" title={t.turingTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.turingIntro}</p>
          <TuringStrip lang={lang} />
          <TuringMachineDemo lang={lang} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.turingCheckpoint.prompt}
            options={t.turingCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="shannon" title={t.shannonTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.shannonIntro}</p>
          <InfoCard title={t.shannonCardTitle}>
            <p className="text-sm text-slate-700">{t.shannonCard}</p>
          </InfoCard>
          <LogicGateCircuitDemo lang={lang} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.shannonCheckpoint.prompt}
            options={t.shannonCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="eniac" title={t.eniacTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.eniacIntro}</p>
          <GuidedSteps title={ui.guidedTitle} steps={t.eniacSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.eniacCheckpoint.prompt}
            options={t.eniacCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="stored" title={t.storedTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.storedIntro}</p>
          <InfoCard title={t.storedCardTitle}>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
              {t.storedPoints.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </InfoCard>
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.storedCheckpoint.prompt}
            options={t.storedCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="summary" title={t.summaryTitle}>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
            {t.summaryPoints.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        </SectionBlock>
      </div>
    </div>
  );
}

function CalcGallery({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const items = useMemo(
    () => [
      { title: isZh ? "算盘" : "Abacus", note: isZh ? "人工操作，不自动。" : "Manual aid, not automatic." },
      { title: isZh ? "帕斯卡机 (1642)" : "Pascaline (1642)", note: isZh ? "齿轮加减，帮父亲算税。" : "Gear add/subtract for tax work." },
      { title: isZh ? "差分机 (1820s)" : "Difference Engine (1820s)", note: isZh ? "为多项式/函数表而设计。" : "For polynomial/function tables." },
    ],
    [isZh],
  );
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="grid gap-2 md:grid-cols-3">
        {items.map((i) => (
          <div key={i.title} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
            <p className="text-sm font-semibold text-slate-900">{i.title}</p>
            <p className="mt-1 text-xs text-slate-700">{i.note}</p>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-slate-600">
        {isZh ? "从人工工具到自动机，为通用计算奠基。" : "Manual aids → automated machines → toward general computing."}
      </p>
    </div>
  );
}

function TuringStrip({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const [state, setState] = useState<"tape" | "head" | "control">("tape");
  const notes: Record<typeof state, string> = {
    tape: isZh ? "无限带记录 0/1 等符号，类比内存。" : "Infinite tape stores 0/1 symbols—like memory.",
    head: isZh ? "读写头可左右移动，读写符号。" : "Head reads/writes and moves left/right.",
    control: isZh ? "控制器按程序与状态决定读写和移动。" : "Controller follows program + state to act.",
  };
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex gap-2">
        {[
          { key: "tape", label: isZh ? "纸带" : "Tape" },
          { key: "head", label: isZh ? "读写头" : "Head" },
          { key: "control", label: isZh ? "控制器" : "Controller" },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setState(tab.key as typeof state)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              state === tab.key
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-sm text-slate-800">{notes[state]}</p>
      <p className="mt-1 text-xs text-slate-600">
        {isZh ? "图灵机极简却通用：能模拟任何可计算函数。" : "Turing Machine is simple yet universal: simulates any computable function."}
      </p>
    </div>
  );
}

const content = {
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解从机械计算到电子计算机的演进与里程碑。",
      "掌握图灵机、二值逻辑、存储程序架构等核心概念。",
      "理解计算机的诞生如何推动人工智能发展。",
    ],
    introTitle: "开篇理解",
    introEyebrow: "计算的基石",
    intro:
      "数学逻辑告诉我们思维可被计算，计算机让这成为现实。机械机→图灵机模型→电子机→存储程序架构，奠定 AI 的工具。",
    introCardTitle: "主线",
    introCard: "从“如何算”到“算得通用且高效”，为智能奠基。",
    machineTitle: "1. 计算机的前身",
    machineEyebrow: "机械计算",
    machineIntro:
      "算盘是手工工具；帕斯卡机用齿轮加减；巴贝奇差分机尝试自动生成表格，催生通用机雏形（分析机）。",
    machineSteps: ["识别自动 vs 手动", "理解差分机目标", "思考为什么未完全实现"],
    machineCheckpoint: {
      prompt: "差分机的设计目标是：",
      options: [
        { label: "自动计算多项式/函数表", correct: true, explanation: "为表格生成自动化。" },
        { label: "只做加减税务", correct: false, explanation: "那是帕斯卡机的应用。" },
        { label: "播放音乐", correct: false, explanation: "与差分机无关。" },
      ],
    },
    turingTitle: "2. 图灵机的诞生",
    turingIntro:
      "图灵 1936 提出“纸带+读写头+控制器”模型，定义可计算函数，通用且极简，为计算机与 AI 奠基。",
    turingCheckpoint: {
      prompt: "图灵机为何重要？",
      options: [
        { label: "用极简模型定义了通用可计算性", correct: true, explanation: "可模拟任何可计算函数。" },
        { label: "只能做加减法", correct: false, explanation: "可模拟复杂计算。" },
        { label: "必须用十进制", correct: false, explanation: "符号可灵活，常用二进制。" },
      ],
    },
    shannonTitle: "3. 香农贡献",
    shannonIntro:
      "1937 提出用电子开关实现二值逻辑，为数字电路奠基；0/1 状态即可完成逻辑/算术。",
    shannonCardTitle: "关键点",
    shannonCard: "电子开关 + 二值逻辑 → 可拼装复杂数字电路。",
    shannonCheckpoint: {
      prompt: "香农工作的核心是：",
      options: [
        { label: "用电子开关实现布尔逻辑", correct: true, explanation: "开启数字电路时代。" },
        { label: "发明算盘", correct: false, explanation: "与香农无关。" },
        { label: "拒绝使用二进制", correct: false, explanation: "他拥抱二值逻辑。" },
      ],
    },
    eniacTitle: "4. ENIAC",
    eniacIntro:
      "1946 年首台通用电子计算机 ENIAC 面世：真空管、穿线式“编程”，为炮弹弹道而建但可通用计算。",
    eniacSteps: ["认识真空管规模与耗能", "理解“穿线编程”的低效", "看到“通用计算”意义"],
    eniacCheckpoint: {
      prompt: "ENIAC 的突破在于：",
      options: [
        { label: "实现电子化的通用计算", correct: true, explanation: "不限单一任务，电子速度快。" },
        { label: "完全不耗电", correct: false, explanation: "耗电极大。" },
        { label: "无需任何编程设置", correct: false, explanation: "需插拔线缆设定任务。" },
      ],
    },
    storedTitle: "5. 存储程序架构",
    storedIntro:
      "冯·诺依曼等提出二进制、程序与数据同存、五大部件（运算、控制、存储、输入、输出）。现代计算机仍沿用。",
    storedCardTitle: "核心要素",
    storedPoints: ["二进制计算", "程序/数据同存", "运算、控制、存储、输入、输出的分工"],
    storedCheckpoint: {
      prompt: "存储程序架构的关键优势是：",
      options: [
        { label: "程序可存储并与数据共存，易修改与通用", correct: true, explanation: "提升可编程性与通用性。" },
        { label: "只能执行单一固定任务", correct: false, explanation: "反而支持多任务。" },
        { label: "取消输入输出", correct: false, explanation: "IO 是五大部件之一。" },
      ],
    },
    summaryTitle: "小结",
    summaryPoints: [
      "从机械机到图灵机，再到电子计算机，计算走向通用与高效。",
      "香农二值逻辑与 ENIAC 实现了电子化通用计算。",
      "存储程序架构奠定现代计算机形态，为 AI 提供算力工具。",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Trace evolution from mechanical calculators to electronic computers.",
      "Grasp Turing Machine, binary logic, stored-program concepts.",
      "See how computers’ birth fueled AI.",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "Computation’s foundation",
    intro:
      "Logic showed thinking is computable; computers made it real. Mechanical → Turing model → electronic → stored-program built AI’s toolset.",
    introCardTitle: "Throughline",
    introCard: "Move from “how to compute” to “compute universally and efficiently.”",
    machineTitle: "1. Early Calculating Machines",
    machineEyebrow: "Mechanical era",
    machineIntro:
      "Abacus was manual; Pascaline used gears; Babbage’s Difference Engine aimed to automate tables—leading to a general machine idea.",
    machineSteps: ["Spot manual vs. automatic", "Note Difference Engine goal", "Why it wasn’t fully built"],
    machineCheckpoint: {
      prompt: "Difference Engine aimed to:",
      options: [
        { label: "Automatically compute polynomial/function tables", correct: true, explanation: "For tables." },
        { label: "Only add/subtract for taxes", correct: false, explanation: "Pascaline did that." },
        { label: "Play music", correct: false, explanation: "Unrelated." },
      ],
    },
    turingTitle: "2. Birth of the Turing Machine",
    turingIntro:
      "In 1936 Turing proposed tape + head + controller; defined computable functions; simple yet universal—foundation for computers/AI.",
    turingCheckpoint: {
      prompt: "Turing Machine matters because it:",
      options: [
        { label: "Defines universality with a simple model", correct: true, explanation: "Simulates any computable function." },
        { label: "Only does addition", correct: false, explanation: "It’s general." },
        { label: "Must use decimal", correct: false, explanation: "Symbols can be binary." },
      ],
    },
    shannonTitle: "3. Shannon’s Contribution",
    shannonIntro:
      "In 1937 he used electronic switches for Boolean logic—starting digital circuit design; on/off states perform logic/arithmetic.",
    shannonCardTitle: "Key point",
    shannonCard: "Switches + binary logic → build complex digital circuits.",
    shannonCheckpoint: {
      prompt: "Shannon’s core idea:",
      options: [
        { label: "Implement Boolean logic with electronic switches", correct: true, explanation: "Birth of digital circuits." },
        { label: "Invent the abacus", correct: false, explanation: "Not him." },
        { label: "Reject binary", correct: false, explanation: "He embraced it." },
      ],
    },
    eniacTitle: "4. ENIAC",
    eniacIntro:
      "1946 ENIAC: first general electronic computer; vacuum tubes, plugboard “programming”, built for ballistics but general-purpose.",
    eniacSteps: ["See tube scale/power", "Understand plugboard cost", "Value of general computation"],
    eniacCheckpoint: {
      prompt: "ENIAC’s breakthrough:",
      options: [
        { label: "Electronic, general-purpose computing", correct: true, explanation: "Not limited to one task." },
        { label: "Zero power use", correct: false, explanation: "It used huge power." },
        { label: "No setup needed", correct: false, explanation: "It required cabling." },
      ],
    },
    storedTitle: "5. Stored-Program Architecture",
    storedIntro:
      "Von Neumann and others: binary, program/data in one memory, five parts (ALU, control, memory, input, output). Modern computers still follow this.",
    storedCardTitle: "Core elements",
    storedPoints: ["Binary compute", "Program + data co-located", "ALU/control/memory/input/output roles"],
    storedCheckpoint: {
      prompt: "Key benefit of stored-program design:",
      options: [
        { label: "Programs stored with data, easily modified and general", correct: true, explanation: "Enables versatility." },
        { label: "Only one fixed task", correct: false, explanation: "It supports many." },
        { label: "No input/output needed", correct: false, explanation: "I/O is essential." },
      ],
    },
    summaryTitle: "Summary",
    summaryPoints: [
      "Mechanical → Turing → electronic made computing universal/efficient.",
      "Shannon + ENIAC realized electronic general computing.",
      "Stored-program design shapes modern computers powering AI.",
    ],
  },
};
