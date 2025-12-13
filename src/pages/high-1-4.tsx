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

export function HighLesson1_4({ lang }: LessonProps) {
  const isZh = lang === "zh";
  const ui = {
    reset: isZh ? "重置" : "Reset",
    checkpointTag: isZh ? "检查点" : "Checkpoint",
    correctLabel: isZh ? "正确" : "Correct",
    incorrectLabel: isZh ? "再试一次" : "Check again",
    guidedTitle: isZh ? "引导步骤" : "Guided Steps",
  };

  const t = content[lang];

  const toc = [
    { id: "learning-objectives", label: isZh ? "学习目标" : "Learning Objectives" },
    { id: "intro", label: isZh ? "开篇理解" : "Opening Idea" },
    { id: "turing", label: isZh ? "1. 图灵机模型" : "1. Turing Machine" },
    { id: "shannon", label: isZh ? "2. 数字电路" : "2. Digital Circuits" },
    { id: "computer", label: isZh ? "3. 计算机诞生" : "3. Birth of Computers" },
    { id: "summary", label: isZh ? "本节小结" : "Summary" },
  ];

  return (
    <div className="flex gap-6">
      <LessonToc lang={lang} items={toc} />

      <div className="flex-1 space-y-6">
        <SectionBlock id="learning-objectives" title={t.learningObjectivesTitle}>
          <ul className="grid gap-2 text-sm leading-relaxed text-slate-700 md:grid-cols-2">
            {t.learningObjectives.map((obj) => (
              <li key={obj}>{obj}</li>
            ))}
          </ul>
        </SectionBlock>

        <SectionBlock id="intro" title={t.openingTitle} eyebrow={t.openingEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.openingText}</p>
        </SectionBlock>

        <SectionBlock id="turing" title={t.turingTitle} eyebrow={t.turingEyebrow}>
          <InfoCard title={t.turingCardTitle}>
            {t.turingParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <TuringMachineDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.turingSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.turingCheckpoint.prompt}
            options={t.turingCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="shannon" title={t.shannonTitle} eyebrow={t.shannonEyebrow}>
          <InfoCard title={t.shannonCardTitle}>
            {t.shannonParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <LogicGateCircuitDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.shannonSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.shannonCheckpoint.prompt}
            options={t.shannonCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="computer" title={t.compTitle} eyebrow={t.compEyebrow}>
          <InfoCard title={t.compCardTitle}>
            {t.compParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.compSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.compCheckpoint.prompt}
            options={t.compCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="summary" title={t.summaryTitle} eyebrow={t.summaryEyebrow}>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
            {t.summaryPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </SectionBlock>
      </div>
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Explain the Turing machine model and its role in computation/AI.",
      "Understand digital circuits, logic gates, and Shannon’s contribution.",
      "Outline computer history: ENIAC, stored-program architecture.",
      "Clarify how computers support AI development.",
    ],
    openingTitle: "Opening Idea",
    openingEyebrow: "Second cornerstone",
    openingText:
      "Mathematical logic enabled thought to be computed; universal computers were the tool. Turing, Shannon, and von Neumann paved the way for modern computing, empowering AI.",
    turingTitle: "1. Turing Machine Model",
    turingEyebrow: "Universal computation",
    turingCardTitle: "Tape, head, states, rules",
    turingParas: [
      "Turing (1936) showed that simple read/write/move steps over an infinite tape can compute any computable function (Church–Turing Thesis).",
      "Changing the rule table (program) changes the task—one machine for all computations.",
    ],
    turingSteps: [
      "Map reading/writing/moving to program instructions.",
      "See universality: one design, many tasks.",
      "Relate to AI: computation is prerequisite for simulating intelligence.",
    ],
    turingCheckpoint: {
      prompt: "What does the Turing machine demonstrate?",
      options: [
        {
          label: "A universal model can compute any computable function via simple steps.",
          correct: true,
          explanation: "Universality underpins general-purpose computers.",
        },
        {
          label: "Only one task can ever be run.",
          correct: false,
          explanation: "Programs change tasks.",
        },
        {
          label: "It requires no states.",
          correct: false,
          explanation: "State drives the transition rules.",
        },
      ],
    },
    shannonTitle: "2. Digital Circuits",
    shannonEyebrow: "Switches as logic",
    shannonCardTitle: "Boolean logic in hardware",
    shannonParas: [
      "Shannon (1937) showed switches/relays implement Boolean operations (AND/OR/NOT), enabling complex logical circuits.",
      "Logic gates realize Turing-machine steps physically; arithmetic and control emerge from gate combinations.",
    ],
    shannonSteps: [
      "Relate gate on/off to 1/0.",
      "Combine gates to implement logic expressions.",
      "See how logic gates build computing hardware.",
    ],
    shannonCheckpoint: {
      prompt: "Shannon’s key insight?",
      options: [
        {
          label: "Electronic switches can implement Boolean logic, forming digital circuits.",
          correct: true,
          explanation: "Switch = bit; circuits = logic.",
        },
        {
          label: "Relays cannot represent logic.",
          correct: false,
          explanation: "They can, per Shannon.",
        },
        {
          label: "Logic and circuits are unrelated.",
          correct: false,
          explanation: "They are deeply linked.",
        },
      ],
    },
    compTitle: "3. Birth of Computers",
    compEyebrow: "ENIAC to stored program",
    compCardTitle: "General-purpose computing emerges",
    compParas: [
      "Colossus (1943) and ENIAC (1946) proved electronic computing power; ENIAC still wired programs manually.",
      "Von Neumann architecture: binary arithmetic + stored programs + five-part design (ALU, control, memory, I/O) made universal computers practical (Manchester Baby, EDSAC).",
    ],
    compSteps: [
      "Recognize stored-program as key usability leap.",
      "Identify the five components in modern computers.",
      "Link computing as AI’s second cornerstone.",
    ],
    compCheckpoint: {
      prompt: "Why is the stored-program idea crucial?",
      options: [
        {
          label: "Programs become data in memory, easy to modify without rewiring.",
          correct: true,
          explanation: "Flexibility enables general-purpose use.",
        },
        {
          label: "It removes memory entirely.",
          correct: false,
          explanation: "Memory is central to store programs/data.",
        },
        {
          label: "It forbids binary arithmetic.",
          correct: false,
          explanation: "It uses binary arithmetic.",
        },
      ],
    },
    summaryTitle: "Section Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "Turing machine proved universality; computation underpins AI.",
      "Shannon tied logic to circuits, enabling hardware implementation.",
      "Stored-program computers (von Neumann) opened the Information Age.",
      "Computers are AI’s second cornerstone—making simulated intelligence feasible.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解图灵机模型及其对计算/AI 的意义。",
      "理解数字电路、逻辑门与香农的贡献。",
      "概述 ENIAC、存储程序体系等计算机史。",
      "明确计算机如何支撑 AI 发展。",
    ],
    openingTitle: "开篇理解",
    openingEyebrow: "第二块基石",
    openingText: "数理逻辑让思维可计算，通用计算机是工具。图灵、香农、冯·诺依曼奠定现代计算，赋能 AI。",
    turingTitle: "1. 图灵机模型",
    turingEyebrow: "通用计算",
    turingCardTitle: "纸带、读写头、状态、规则",
    turingParas: [
      "图灵（1936）展示：对无限纸带的读写/移动可计算任意可计算函数（丘奇-图灵论题）。",
      "改变规则表（程序）即可换任务，一机多能。",
    ],
    turingSteps: ["把读写移动对应到程序指令。", "理解通用性：一套设计多种任务。", "联系 AI：计算是模拟智能的前提。"],
    turingCheckpoint: {
      prompt: "图灵机证明了什么？",
      options: [
        {
          label: "简单步骤即可实现通用可计算性。",
          correct: true,
          explanation: "通用性奠定通用计算机。",
        },
        {
          label: "只能做一件事。",
          correct: false,
          explanation: "程序可变。",
        },
        {
          label: "无需状态。",
          correct: false,
          explanation: "状态驱动转移。",
        },
      ],
    },
    shannonTitle: "2. 数字电路",
    shannonEyebrow: "开关即逻辑",
    shannonCardTitle: "布尔逻辑的硬件实现",
    shannonParas: [
      "香农（1937）证明开关/继电器可实现布尔运算（与/或/非），能构成复杂逻辑电路。",
      "逻辑门物理实现图灵机步骤；算术与控制源于门组合。",
    ],
    shannonSteps: ["把开/关对应 1/0。", "组合逻辑门实现逻辑表达式。", "理解逻辑门是计算硬件基础。"],
    shannonCheckpoint: {
      prompt: "香农的关键洞见是？",
      options: [
        {
          label: "电子开关可实现布尔逻辑，构成数字电路。",
          correct: true,
          explanation: "开关=比特，电路=逻辑。",
        },
        {
          label: "继电器不能表示逻辑。",
          correct: false,
          explanation: "香农证明可以。",
        },
        {
          label: "逻辑与电路无关。",
          correct: false,
          explanation: "两者紧密相连。",
        },
      ],
    },
    compTitle: "3. 计算机诞生",
    compEyebrow: "ENIAC 到存储程序",
    compCardTitle: "通用计算走向现实",
    compParas: [
      "Colossus（1943）、ENIAC（1946）展示电子计算力；ENIAC 仍需插线。",
      "冯·诺依曼体系：二进制、存储程序、五大部件（运算、控制、存储、输入、输出）让通用机实用化（曼彻斯特 Baby、EDSAC）。",
    ],
    compSteps: ["存储程序是可用性飞跃。", "辨认现代机的五部件。", "把计算视为 AI 第二块基石。"],
    compCheckpoint: {
      prompt: "为何存储程序重要？",
      options: [
        {
          label: "程序存入内存，可轻松修改，无需反复插拔线路。",
          correct: true,
          explanation: "灵活性带来通用性。",
        },
        {
          label: "取消了内存。",
          correct: false,
          explanation: "内存是核心。",
        },
        {
          label: "禁止二进制运算。",
          correct: false,
          explanation: "体系采用二进制。",
        },
      ],
    },
    summaryTitle: "本节小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "图灵机证明通用可计算性；计算支撑 AI。",
      "香农把逻辑与电路联通，实现硬件计算。",
      "存储程序计算机开启信息时代。",
      "计算机是 AI 的第二块基石，让模拟智能可行。",
    ],
  },
};
