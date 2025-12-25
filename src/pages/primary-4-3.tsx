import { Checkpoint } from "../components/Checkpoint";
import { FigureCard } from "../components/FigureCard";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { TuringMachineDemo } from "../demos/TuringMachineDemo";
import { useState } from "react";

type LessonProps = {
  lang: "en" | "zh";
};

export function PrimaryLesson4_3({ lang }: LessonProps) {
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
    { id: "road", label: t.roadTitle },
    { id: "machine", label: t.machineTitle },
    { id: "food", label: t.foodTitle },
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
          <FigureCard
            label={t.introFigure.label}
            caption={t.introFigure.caption}
            placeholder={t.introFigure.placeholder}
          />
        </SectionBlock>

        <SectionBlock id="road" title={t.roadTitle} eyebrow={t.roadEyebrow}>
          <InfoCard title={t.roadConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.roadConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.roadParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <div className="grid gap-3 md:grid-cols-3">
            {t.roadFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <TuringTimelineDemo
            lang={lang}
            title={t.roadDemo.title}
            goal={t.roadDemo.goal}
            resetLabel={ui.reset}
            events={t.roadDemo.events}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.roadSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.roadCheckpoint.prompt}
            options={t.roadCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="machine" title={t.machineTitle} eyebrow={t.machineEyebrow}>
          <InfoCard title={t.machineConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.machineConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.machineParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.machineFigure.label}
            caption={t.machineFigure.caption}
            placeholder={t.machineFigure.placeholder}
          />
          <TuringMachineDemo lang={lang} />
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

function TuringTimelineDemo({
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
            {isZh ? "关键事件" : "Key event"}
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{current.label}</p>
          <p className="mt-2 text-sm">{current.detail}</p>
        </div>
      )}
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand Alan Turing's life, contributions, and the origin of the Turing Award.",
      "Appreciate how the Turing machine works and why it is the prototype of computers.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "Alan Turing was a brilliant mathematician who laid the foundations of computer science and pointed the way toward artificial intelligence.",
    introFigure: {
      label: "Figure 4-5",
      caption: "Alan Turing.",
      placeholder: "Illustration placeholder",
    },
    roadTitle: "1. The Road of a Genius",
    roadEyebrow: "Life and achievements",
    roadConceptTitle: "Concept Card",
    roadConceptLines: [
      "Turing showed extraordinary talent from childhood.",
      "He proposed the Turing machine in 1936.",
      "His wartime codebreaking saved countless lives.",
    ],
    roadParas: [
      "Turing studied at Cambridge and published a landmark paper on computable numbers, proposing the Turing machine.",
      "He later joined the codebreaking effort against the Enigma cipher and helped design the Bombe machine.",
      "After the war, he worked on early computers and proposed ideas like the Turing Test. The ACM later created the Turing Award to honor him.",
    ],
    roadFigures: [
      {
        label: "Figure 4-6",
        caption: "The Bombe codebreaking machine.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 4-7",
        caption: "Turing competing in a marathon.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 4-8",
        caption: "The Turing Award trophy.",
        placeholder: "Illustration placeholder",
      },
    ],
    roadDemo: {
      title: "Turing's Timeline",
      goal: "Trace key milestones in Turing's life.",
      events: [
        {
          key: "1912",
          year: "1912",
          label: "Born in London",
          detail: "He showed exceptional talent from a young age.",
        },
        {
          key: "1936",
          year: "1936",
          label: "Turing machine",
          detail: "Published the paper on computable numbers.",
        },
        {
          key: "1940",
          year: "WWII",
          label: "Bombe codebreaking",
          detail: "Helped crack Enigma and aided the war effort.",
        },
        {
          key: "1950",
          year: "1950",
          label: "Turing Test",
          detail: "Proposed the imitation game for machine intelligence.",
        },
      ],
    },
    roadSteps: [
      "Pick a milestone.",
      "Explain why it mattered for computing or AI.",
      "Summarize Turing's influence.",
    ],
    roadCheckpoint: {
      prompt: "Which achievement is Turing best known for?",
      options: [
        {
          label: "Proposing the Turing machine and founding computer science theory.",
          correct: true,
          explanation: "His 1936 paper defined the model of computation.",
        },
        {
          label: "Inventing the abacus.",
          correct: false,
          explanation: "The abacus existed long before Turing.",
        },
        {
          label: "Designing the first smartphone.",
          correct: false,
          explanation: "Smartphones came decades later.",
        },
      ],
    },
    machineTitle: "2. The Turing Machine",
    machineEyebrow: "Computing model",
    machineConceptTitle: "Concept Card",
    machineConceptLines: [
      "A Turing machine has a tape and a read-write head.",
      "The head follows rules to read, write, and move.",
      "Any computable task can be done by a Turing machine.",
    ],
    machineParas: [
      "Turing described computation as a simple machine that executes instructions on an infinite tape.",
      "Despite its simplicity, it has immense power. Any model of computation cannot exceed it.",
      "Because it is simple to implement, it became the foundation of universal computers.",
    ],
    machineFigure: {
      label: "Figure 4-9",
      caption: "The principle of the Turing machine.",
      placeholder: "Illustration placeholder",
    },
    machineSteps: [
      "Click Step to move the head.",
      "Watch how symbols change on the tape.",
      "Explain how simple rules can compute tasks.",
    ],
    machineCheckpoint: {
      prompt: "What makes the Turing machine so important?",
      options: [
        {
          label: "It shows a simple model that can perform any computable task.",
          correct: true,
          explanation: "Its power equals any other computational model.",
        },
        {
          label: "It is a real commercial product sold today.",
          correct: false,
          explanation: "It is a theoretical model, not a product.",
        },
        {
          label: "It only works for one specific problem.",
          correct: false,
          explanation: "It can handle any computable process.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Theory matters",
    foodParas: [
      "The Turing machine is not a physical device but a theoretical model. What matters is its power to describe any computable process.",
      "This reminds us that deep theories guide practical inventions and help civilization progress steadily.",
    ],
    foodSteps: [
      "Name one theory that changed technology.",
      "Explain how theory can guide invention.",
      "Share why thinking deeply matters.",
    ],
    foodCheckpoint: {
      prompt: "What does the Turing machine teach us about theory?",
      options: [
        {
          label: "Solid theory can guide powerful inventions.",
          correct: true,
          explanation: "The Turing machine showed the foundation of computing.",
        },
        {
          label: "Theory is less important than practice.",
          correct: false,
          explanation: "Theory often guides practice.",
        },
        {
          label: "Computers were built without any theory.",
          correct: false,
          explanation: "Theoretical ideas guided computer design.",
        },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryEyebrow: "Summary",
    summaryPoints: [
      "Alan Turing founded key ideas in computer science and AI.",
      "The Turing machine models computation with a tape and read-write head.",
      "Its power equals any other computable model.",
      "Strong theory can guide real-world inventions.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解图灵的生平、贡献及图灵奖的由来。",
      "理解图灵机原理及其作为计算机原型的重要性。",
    ],
    introTitle: "故事开头",
    introEyebrow: "开场",
    introText: "艾伦·图灵是伟大的数学家，他奠定了计算机科学基础，并指引了人工智能的发展方向。",
    introFigure: {
      label: "图 4-5",
      caption: "艾伦·图灵。",
      placeholder: "插图占位",
    },
    roadTitle: "1. 天才之路",
    roadEyebrow: "生平与成就",
    roadConceptTitle: "概念卡片",
    roadConceptLines: [
      "图灵从小天赋异禀。",
      "1936 年提出图灵机模型。",
      "二战破译密码功不可没。",
    ],
    roadParas: [
      "图灵在剑桥求学并发表计算理论论文，提出图灵机。",
      "二战期间他参与破解恩尼格玛密码，设计“炸弹机”。",
      "战后他参与早期计算机设计，并提出图灵测试。图灵奖因此以他命名。",
    ],
    roadFigures: [
      {
        label: "图 4-6",
        caption: "“炸弹机”密码破译装置。",
        placeholder: "插图占位",
      },
      {
        label: "图 4-7",
        caption: "图灵参加马拉松比赛。",
        placeholder: "插图占位",
      },
      {
        label: "图 4-8",
        caption: "图灵奖奖杯。",
        placeholder: "插图占位",
      },
    ],
    roadDemo: {
      title: "图灵时间线",
      goal: "回顾图灵人生的重要节点。",
      events: [
        {
          key: "1912",
          year: "1912",
          label: "出生于伦敦",
          detail: "少年时期展现卓越天赋。",
        },
        {
          key: "1936",
          year: "1936",
          label: "提出图灵机",
          detail: "发表可计算数论文，奠定计算理论。",
        },
        {
          key: "1940",
          year: "二战",
          label: "破译密码",
          detail: "设计“炸弹机”，帮助破解恩尼格玛。",
        },
        {
          key: "1950",
          year: "1950",
          label: "图灵测试",
          detail: "提出“模仿游戏”来判断机器智能。",
        },
      ],
    },
    roadSteps: [
      "选择一个节点。",
      "说出它对计算或 AI 的意义。",
      "总结图灵的影响。",
    ],
    roadCheckpoint: {
      prompt: "图灵最著名的贡献是什么？",
      options: [
        {
          label: "提出图灵机并奠定计算理论基础。",
          correct: true,
          explanation: "1936 年的论文是计算机科学里程碑。",
        },
        {
          label: "发明算盘。",
          correct: false,
          explanation: "算盘出现时间更早。",
        },
        {
          label: "设计第一部智能手机。",
          correct: false,
          explanation: "智能手机在很久之后才出现。",
        },
      ],
    },
    machineTitle: "2. 图灵机",
    machineEyebrow: "计算模型",
    machineConceptTitle: "概念卡片",
    machineConceptLines: [
      "图灵机由纸带和读写头组成。",
      "读写头按规则读写并移动。",
      "任何可计算过程都能用图灵机完成。",
    ],
    machineParas: [
      "图灵把计算想象为一个简单机器在纸带上执行指令。",
      "它结构简单却拥有极强的计算能力，任何模型都不超过它。",
      "因此它成为通用计算机的理论基础。",
    ],
    machineFigure: {
      label: "图 4-9",
      caption: "图灵机原理示意。",
      placeholder: "插图占位",
    },
    machineSteps: [
      "点击“执行一步”移动读写头。",
      "观察纸带上的符号变化。",
      "说明简单规则为何能完成计算。",
    ],
    machineCheckpoint: {
      prompt: "图灵机的重要性体现在哪一点？",
      options: [
        {
          label: "它展示了一个可完成任何可计算任务的模型。",
          correct: true,
          explanation: "它的能力等同于任何计算模型。",
        },
        {
          label: "它是一台正在销售的商品。",
          correct: false,
          explanation: "图灵机是理论模型。",
        },
        {
          label: "它只能解决一个具体问题。",
          correct: false,
          explanation: "它适用于所有可计算过程。",
        },
      ],
    },
    foodTitle: "想一想",
    foodEyebrow: "理论的力量",
    foodParas: [
      "图灵机不是实体机器，而是计算模型。它告诉我们任何可计算过程都能被描述。",
      "这提醒我们：深刻的理论能引导伟大发明，推动文明前进。",
    ],
    foodSteps: [
      "举例说明一个改变技术的理论。",
      "说说理论如何指导实践。",
      "分享你对“思考”的理解。",
    ],
    foodCheckpoint: {
      prompt: "图灵机提醒我们什么？",
      options: [
        {
          label: "扎实理论能指引强大的发明。",
          correct: true,
          explanation: "图灵机为计算机奠定理论基础。",
        },
        {
          label: "理论不如实践重要。",
          correct: false,
          explanation: "理论常常指导实践。",
        },
        {
          label: "计算机不需要理论支撑。",
          correct: false,
          explanation: "计算机的诞生离不开理论。",
        },
      ],
    },
    summaryTitle: "要点回顾",
    summaryEyebrow: "总结",
    summaryPoints: [
      "图灵为计算机科学与 AI 奠定了基础。",
      "图灵机用纸带和读写头描述计算。",
      "它的能力覆盖所有可计算过程。",
      "理论能够引导现实发明。",
    ],
  },
};
