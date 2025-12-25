import { useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { FigureCard } from "../components/FigureCard";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { TuringTestDemo } from "../demos/TuringTestDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function PrimaryLesson4_5({ lang }: LessonProps) {
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
    { id: "pathways", label: t.pathwaysTitle },
    { id: "turing-test", label: t.turingTestTitle },
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

        <SectionBlock id="pathways" title={t.pathwaysTitle} eyebrow={t.pathwaysEyebrow}>
          <InfoCard title={t.pathwaysConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.pathwaysConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.pathwaysParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <div className="grid gap-3 md:grid-cols-2">
            {t.pathwaysFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <PathwaysDemo
            lang={lang}
            title={t.pathwaysDemo.title}
            goal={t.pathwaysDemo.goal}
            resetLabel={ui.reset}
            paths={t.pathwaysDemo.paths}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.pathwaysSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.pathwaysCheckpoint.prompt}
            options={t.pathwaysCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="turing-test" title={t.turingTestTitle} eyebrow={t.turingTestEyebrow}>
          <InfoCard title={t.turingTestConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.turingTestConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.turingTestParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.turingTestFigure.label}
            caption={t.turingTestFigure.caption}
            placeholder={t.turingTestFigure.placeholder}
          />
          <TuringTestDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.turingTestSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.turingTestCheckpoint.prompt}
            options={t.turingTestCheckpoint.options}
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

type Pathway = {
  key: string;
  title: string;
  idea: string;
  example: string;
};

function PathwaysDemo({
  lang,
  title,
  goal,
  resetLabel,
  paths,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  paths: Pathway[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(paths[0]?.key ?? "");
  const current = paths.find((path) => path.key === active) ?? paths[0];

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
          onClick={() => setActive(paths[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 grid gap-2 md:grid-cols-3">
        {paths.map((path) => (
          <button
            key={path.key}
            type="button"
            onClick={() => setActive(path.key)}
            className={[
              "rounded-xl border px-3 py-2 text-left text-xs font-semibold transition",
              path.key === active
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {path.title}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "核心想法" : "Core idea"}
          </p>
          <p className="mt-1 text-sm">{current.idea}</p>
          <p className="mt-2 text-xs text-slate-600">{current.example}</p>
        </div>
      )}
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Know Turing's earliest ideas about machine intelligence.",
      "Understand the methods he proposed: learning, brain-like networks, and evolution.",
      "Understand the Turing Test and why it matters.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "After World War II, Turing imagined intelligent machines that could simulate human thinking. His early ideas became treasures of AI history.",
    pathwaysTitle: "1. Pathways to Intelligent Machines",
    pathwaysEyebrow: "Turing's ideas",
    pathwaysConceptTitle: "Concept Card",
    pathwaysConceptLines: [
      "Turing described several paths to intelligence in 1948.",
      "Learning, brain simulation, and evolution were key ideas.",
      "Modern AI methods trace back to these ideas.",
    ],
    pathwaysParas: [
      "Turing believed machines should learn like humans, improving through feedback and experience.",
      "He also imagined artificial neural networks that could learn, inspired by the brain.",
      "Finally, he proposed evolving machines that keep the best strategies, similar to natural selection.",
    ],
    pathwaysFigures: [
      {
        label: "Fig. 4-15",
        caption: "The process of learning to walk.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Fig. 4-16",
        caption: "Training a dog to understand gestures.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Fig. 4-17",
        caption: "The human brain's learning mechanism.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Fig. 4-18",
        caption: "Biological evolution.",
        placeholder: "Illustration placeholder",
      },
    ],
    pathwaysDemo: {
      title: "Three Paths to Intelligence",
      goal: "Compare Turing's three approaches to building smart machines.",
      paths: [
        {
          key: "learn",
          title: "Learning",
          idea: "Machines improve through rewards and punishments, like learning to walk.",
          example: "Reinforcement learning in games and robots.",
        },
        {
          key: "brain",
          title: "Brain simulation",
          idea: "Artificial neural networks mimic how neurons learn.",
          example: "Deep learning systems today use this idea.",
        },
        {
          key: "evolution",
          title: "Evolution",
          idea: "Machines try many strategies and keep the best, like natural selection.",
          example: "Genetic algorithms search for good solutions.",
        },
      ],
    },
    pathwaysSteps: [
      "Pick one path.",
      "Explain its core idea in your own words.",
      "Describe a real-world example.",
    ],
    pathwaysCheckpoint: {
      prompt: "Which method uses rewards and punishments to learn?",
      options: [
        {
          label: "Reinforcement learning.",
          correct: true,
          explanation: "Rewards and punishments guide improvement.",
        },
        {
          label: "Evolution only.",
          correct: false,
          explanation: "Evolution selects strategies over generations, not rewards.",
        },
        {
          label: "No learning at all.",
          correct: false,
          explanation: "Turing emphasized learning as a key pathway.",
        },
      ],
    },
    turingTestTitle: "2. The Standard for Intelligence: The Turing Test",
    turingTestEyebrow: "Imitation game",
    turingTestConceptTitle: "Concept Card",
    turingTestConceptLines: [
      "Turing proposed judging intelligence by conversation.",
      "If a tester cannot tell human from machine, the machine passes.",
      "The test set a goal for AI research.",
    ],
    turingTestParas: [
      "Turing replaced a person in a guessing game with a computer. If the tester could not tell which was human, the machine was considered intelligent.",
      "He predicted that after five minutes, a machine could fool judges at least 30% of the time.",
      "In 2014, a program claimed to pass the test, though the result was controversial. The idea remains influential.",
    ],
    turingTestFigure: {
      label: "Fig. 4-19",
      caption: "Diagram of the Turing Test.",
      placeholder: "Illustration placeholder",
    },
    turingTestSteps: [
      "Adjust the model skill and conversation time.",
      "See how the pass probability changes.",
      "Explain why language ability matters in the test.",
    ],
    turingTestCheckpoint: {
      prompt: "What does the Turing Test measure?",
      options: [
        {
          label: "Whether a machine can imitate human conversation well enough to fool a tester.",
          correct: true,
          explanation: "The test focuses on indistinguishable dialogue.",
        },
        {
          label: "Whether a machine can run fast.",
          correct: false,
          explanation: "Speed is not the focus of the test.",
        },
        {
          label: "Whether a machine looks like a robot.",
          correct: false,
          explanation: "The test is about conversation, not appearance.",
        },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryEyebrow: "Summary",
    summaryPoints: [
      "Turing proposed learning, brain-like networks, and evolution as paths to intelligence.",
      "Reinforcement learning uses rewards and punishments.",
      "The Turing Test focuses on indistinguishable conversation.",
      "These early ideas still shape AI today.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解图灵对机器智能的最初设想。",
      "理解学习、模拟大脑、进化等方法。",
      "理解图灵测试的意义。",
    ],
    introTitle: "故事开头",
    introEyebrow: "开场",
    introText: "二战后图灵思考如何让机器模拟人类思维，他的想法成为 AI 早期的重要宝藏。",
    pathwaysTitle: "1. 通往机器智能的路径",
    pathwaysEyebrow: "图灵的思路",
    pathwaysConceptTitle: "概念卡片",
    pathwaysConceptLines: [
      "图灵在 1948 年提出多种智能机器方案。",
      "学习、神经网络与进化是核心方向。",
      "现代 AI 方法都能追溯到这些想法。",
    ],
    pathwaysParas: [
      "图灵认为机器应该像人一样学习，通过反馈不断改进。",
      "他设想人工神经网络能够模仿大脑的学习方式。",
      "他还提出“进化机器”的想法，用优胜劣汰提升智能。",
    ],
    pathwaysFigures: [
      {
        label: "图 4-15",
        caption: "学习走路的过程。",
        placeholder: "插图占位",
      },
      {
        label: "图 4-16",
        caption: "训练狗理解手势。",
        placeholder: "插图占位",
      },
      {
        label: "图 4-17",
        caption: "人脑学习机制。",
        placeholder: "插图占位",
      },
      {
        label: "图 4-18",
        caption: "生物进化。",
        placeholder: "插图占位",
      },
    ],
    pathwaysDemo: {
      title: "三条路径",
      goal: "对比图灵提出的三种方法。",
      paths: [
        {
          key: "learn",
          title: "学习",
          idea: "用奖励和惩罚让机器不断改进。",
          example: "强化学习用于游戏与机器人。",
        },
        {
          key: "brain",
          title: "模拟大脑",
          idea: "人工神经网络模仿神经元学习。",
          example: "深度学习系统遵循该思想。",
        },
        {
          key: "evolution",
          title: "进化",
          idea: "像自然选择一样保留最佳策略。",
          example: "遗传算法寻找更优方案。",
        },
      ],
    },
    pathwaysSteps: [
      "选择一种路径。",
      "用自己的话概括核心思想。",
      "说出一个现实例子。",
    ],
    pathwaysCheckpoint: {
      prompt: "哪种方法强调奖励与惩罚？",
      options: [
        {
          label: "强化学习。",
          correct: true,
          explanation: "奖励和惩罚用于指导学习。",
        },
        {
          label: "纯进化。",
          correct: false,
          explanation: "进化强调优胜劣汰而非奖励。",
        },
        {
          label: "完全不学习。",
          correct: false,
          explanation: "图灵强调学习的重要性。",
        },
      ],
    },
    turingTestTitle: "2. 智能标准：图灵测试",
    turingTestEyebrow: "模仿游戏",
    turingTestConceptTitle: "概念卡片",
    turingTestConceptLines: [
      "图灵用对话来判断机器智能。",
      "若测试者无法分辨人机，则机器通过。",
      "该测试为 AI 设定了目标。",
    ],
    turingTestParas: [
      "图灵把游戏中的一名参与者替换为计算机。如果测试者无法区分人和机器，机器便可视为有智能。",
      "他预测机器能在五分钟对话中至少迷惑 30% 的评审。",
      "2014 年有程序宣称通过测试，但结果存在争议。这个思想仍具影响力。",
    ],
    turingTestFigure: {
      label: "图 4-19",
      caption: "图灵测试示意图。",
      placeholder: "插图占位",
    },
    turingTestSteps: [
      "调整模型水平和对话时长。",
      "观察通过概率变化。",
      "说明语言能力的重要性。",
    ],
    turingTestCheckpoint: {
      prompt: "图灵测试主要考察什么？",
      options: [
        {
          label: "机器能否在对话中像人一样迷惑评审。",
          correct: true,
          explanation: "核心是让评审难以分辨人机。",
        },
        {
          label: "机器跑得有多快。",
          correct: false,
          explanation: "速度不是测试重点。",
        },
        {
          label: "机器外形是否像人。",
          correct: false,
          explanation: "测试关注对话，而非外形。",
        },
      ],
    },
    summaryTitle: "要点回顾",
    summaryEyebrow: "总结",
    summaryPoints: [
      "图灵提出学习、模拟大脑和进化三条路径。",
      "强化学习通过奖励与惩罚改进。",
      "图灵测试用对话判断智能。",
      "这些思想至今仍影响 AI。",
    ],
  },
};
