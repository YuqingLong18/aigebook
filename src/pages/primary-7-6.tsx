import { useMemo, useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { FigureCard } from "../components/FigureCard";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";

type LessonProps = {
  lang: "en" | "zh";
};

export function PrimaryLesson7_6({ lang }: LessonProps) {
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
    { id: "difficulty", label: t.difficultyTitle },
    { id: "alphago", label: t.alphagoTitle },
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
        </SectionBlock>

        <SectionBlock id="difficulty" title={t.difficultyTitle} eyebrow={t.difficultyEyebrow}>
          <InfoCard title={t.difficultyConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.difficultyConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.difficultyParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.difficultyFigure.label}
            caption={t.difficultyFigure.caption}
            placeholder={t.difficultyFigure.placeholder}
          />
          <GoComplexityDemo
            lang={lang}
            title={t.difficultyDemo.title}
            goal={t.difficultyDemo.goal}
            resetLabel={ui.reset}
            labels={t.difficultyDemo.labels}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.difficultySteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.difficultyCheckpoint.prompt}
            options={t.difficultyCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="alphago" title={t.alphagoTitle} eyebrow={t.alphagoEyebrow}>
          <InfoCard title={t.alphagoConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.alphagoConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.alphagoParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <div className="grid gap-3 md:grid-cols-2">
            {t.alphagoFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <BoardVisionDemo
            lang={lang}
            title={t.alphagoDemo.title}
            goal={t.alphagoDemo.goal}
            resetLabel={ui.reset}
            labels={t.alphagoDemo.labels}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.alphagoSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.alphagoCheckpoint.prompt}
            options={t.alphagoCheckpoint.options}
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
          <RationalViewDemo
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

function GoComplexityDemo({
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
  labels: {
    size: string;
    intersections: string;
    positions: string;
    note: string;
  };
}) {
  const isZh = lang === "zh";
  const sizes = [9, 13, 19];
  const [size, setSize] = useState(19);

  const complexity = useMemo(() => {
    const intersections = size * size;
    const exponent = size === 9 ? 35 : size === 13 ? 70 : 170;
    return { intersections, exponent };
  }, [size]);

  const reset = () => setSize(19);

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

      <div className="mt-3 grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{labels.size}</p>
          <div className="flex gap-2">
            {sizes.map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => setSize(val)}
                className={[
                  "flex-1 rounded-xl border px-3 py-2 text-sm font-semibold transition",
                  size === val
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white hover:border-slate-300",
                ].join(" ")}
              >
                {val}×{val}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{labels.intersections}</p>
          <p className="text-lg font-semibold text-slate-900">{complexity.intersections}</p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-600">{labels.positions}</p>
          <p className="text-lg font-semibold text-slate-900">{`10^${complexity.exponent}`}</p>
          <p className="mt-2 text-xs text-slate-600">{labels.note}</p>
        </div>
      </div>
    </div>
  );
}

function BoardVisionDemo({
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
  labels: { view: string; local: string; regional: string; global: string; note: string };
}) {
  const isZh = lang === "zh";
  const views = [2, 4, 8, 19];
  const [index, setIndex] = useState(1);

  const info = useMemo(() => {
    const size = views[index];
    const coverage = Math.round((size * size / (19 * 19)) * 100);
    const label =
      size <= 2 ? labels.local : size <= 4 ? labels.regional : size <= 8 ? labels.regional : labels.global;
    return { size, coverage, label };
  }, [index, labels.global, labels.local, labels.regional, views]);

  const reset = () => setIndex(1);

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

      <div className="mt-3 grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-slate-700">
            {labels.view}
            <input
              type="range"
              min={0}
              max={views.length - 1}
              value={index}
              onChange={(e) => setIndex(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{info.size}×{info.size}</span>
          </label>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{info.label}</p>
          <p className="text-lg font-semibold text-slate-900">{info.coverage}%</p>
          <p className="mt-2 text-xs text-slate-600">{labels.note}</p>
        </div>
      </div>
    </div>
  );
}

function RationalViewDemo({
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
  labels: { slider: string; left: string; right: string; note: string };
}) {
  const isZh = lang === "zh";
  const [value, setValue] = useState(50);

  const reset = () => setValue(50);

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
          {labels.slider}
          <input
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="mt-1 w-full accent-brand-500"
          />
        </label>
        <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
          <span>{labels.left}</span>
          <span>{labels.right}</span>
        </div>
        <div className="rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-700">{labels.note}</div>
      </div>
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Learn the rules and complexity of Go.",
      "Understand how AlphaGo evaluates a Go board with deep learning.",
      "Build a rational view of AI rather than blind worship.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Overview",
    introText: "AlphaGo's victory surprised the world. Let’s see why Go is hard and how AlphaGo works.",
    difficultyTitle: "1. Why Is Go So Difficult?",
    difficultyEyebrow: "Game complexity",
    difficultyConceptTitle: "Concept Card",
    difficultyConceptLines: [
      "A 19×19 Go board has 361 intersections.",
      "The number of possible positions is astronomical (about 10^170).",
      "It is hard to judge who is winning before the end.",
    ],
    difficultyParas: [
      "Go rules are simple, but the search space is enormous.",
      "Unlike chess, evaluating a Go position is difficult even for experts.",
    ],
    difficultyFigure: {
      label: "Figure 7-21",
      caption: "A Go board.",
      placeholder: "Illustration placeholder",
    },
    difficultyDemo: {
      title: "Go Complexity Explorer",
      goal: "See how board size changes the number of possible positions.",
      labels: {
        size: "Board size",
        intersections: "Intersections",
        positions: "Estimated positions",
        note: "10^170 is far beyond the number of stars in the observable universe.",
      },
    },
    difficultySteps: [
      "Switch between 9×9, 13×13, and 19×19.",
      "Compare intersections and position counts.",
      "Explain why search is hard.",
    ],
    difficultyCheckpoint: {
      prompt: "What makes Go so hard for computers?",
      options: [
        {
          label: "Huge number of positions and hard-to-evaluate boards.",
          correct: true,
          explanation: "The search space is enormous and evaluation is subtle.",
        },
        {
          label: "The board is too small.",
          correct: false,
          explanation: "The board is large, not small.",
        },
        {
          label: "There are no rules.",
          correct: false,
          explanation: "Go has simple rules; the difficulty is complexity.",
        },
      ],
    },
    alphagoTitle: "2. From Deep Blue to AlphaGo",
    alphagoEyebrow: "Search + evaluation",
    alphagoConceptTitle: "Concept Card",
    alphagoConceptLines: [
      "Humans search ahead and evaluate positions.",
      "Deep Blue used search plus hand-crafted evaluation rules.",
      "AlphaGo uses deep neural networks to evaluate the board.",
    ],
    alphagoParas: [
      "Deep neural networks can view local patterns first, then combine them into a global judgment.",
      "AlphaGo learns from human games and self-play, then outputs a win probability for each move.",
    ],
    alphagoFigures: [
      {
        label: "Figure 7-22",
        caption: "The strategy of making moves in Go.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 7-23",
        caption: "Using a deep neural network to evaluate a Go position.",
        placeholder: "Illustration placeholder",
      },
    ],
    alphagoDemo: {
      title: "Layered Board View",
      goal: "See how a wider view helps evaluate Go positions.",
      labels: {
        view: "Viewing window",
        local: "Local patterns",
        regional: "Regional balance",
        global: "Whole-board control",
        note: "Larger views capture more of the game’s global structure.",
      },
    },
    alphagoSteps: [
      "Move the view slider from small to large.",
      "Notice how coverage increases.",
      "Connect this to AlphaGo’s deep layers.",
    ],
    alphagoCheckpoint: {
      prompt: "How does AlphaGo evaluate a board?",
      options: [
        {
          label: "A deep neural network estimates the win probability.",
          correct: true,
          explanation: "The network outputs a win rate for candidate moves.",
        },
        {
          label: "It memorizes every possible board exactly.",
          correct: false,
          explanation: "The state space is far too large to memorize.",
        },
        {
          label: "It flips a coin for each move.",
          correct: false,
          explanation: "AlphaGo relies on learned evaluation, not randomness alone.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Rational view",
    foodParas: [
      "AlphaGo’s strength is not magic—it comes from massive data, self-play, and fast computation.",
      "Understanding the method helps us view AI objectively and prepare for risks.",
    ],
    foodDemo: {
      title: "Rational Lens",
      goal: "Balance awe with understanding and caution.",
      labels: {
        slider: "Your attitude",
        left: "Blind worship",
        right: "Clear understanding",
        note: "A rational view appreciates AI power while staying thoughtful and cautious.",
      },
    },
    foodSteps: [
      "Slide toward understanding.",
      "Explain why transparency matters.",
      "Summarize a rational attitude toward AI.",
    ],
    foodCheckpoint: {
      prompt: "Which attitude best matches the lesson?",
      options: [
        {
          label: "Understand AI’s principles and stay objective.",
          correct: true,
          explanation: "The lesson emphasizes rational understanding, not blind worship.",
        },
        {
          label: "Treat AI as magic and stop learning.",
          correct: false,
          explanation: "We should learn how AI works and stay thoughtful.",
        },
        {
          label: "Ignore AI completely.",
          correct: false,
          explanation: "AI impacts society; ignoring it is not wise.",
        },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryEyebrow: "Summary",
    summaryPoints: [
      "Go is simple to play but extremely complex to compute.",
      "AlphaGo uses deep learning to evaluate positions and guide search.",
      "Understanding AI leads to a rational, balanced mindset.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解围棋规则与复杂性。",
      "理解 AlphaGo 如何用深度学习评估棋盘。",
      "学会理性看待人工智能。",
    ],
    introTitle: "故事开始",
    introEyebrow: "概览",
    introText: "AlphaGo 的胜利震惊世界。我们一起看看围棋为何困难，以及 AlphaGo 如何下棋。",
    difficultyTitle: "1. 为什么围棋这么难？",
    difficultyEyebrow: "游戏复杂度",
    difficultyConceptTitle: "概念卡片",
    difficultyConceptLines: [
      "19×19 棋盘共有 361 个交叉点。",
      "可能棋局数量极其巨大（约 10^170）。",
      "在终局前很难判断胜负。",
    ],
    difficultyParas: [
      "围棋规则简单，但搜索空间异常庞大。",
      "与象棋相比，围棋局面评价更难。",
    ],
    difficultyFigure: {
      label: "图 7-21",
      caption: "围棋棋盘。",
      placeholder: "示意图占位",
    },
    difficultyDemo: {
      title: "围棋复杂度探索",
      goal: "观察棋盘大小如何影响可能局面数量。",
      labels: {
        size: "棋盘大小",
        intersections: "交叉点数量",
        positions: "估计局面数",
        note: "10^170 远远超过可观测宇宙中的星星数量。",
      },
    },
    difficultySteps: [
      "切换 9×9、13×13、19×19。",
      "对比交叉点与局面数量。",
      "解释为何搜索困难。",
    ],
    difficultyCheckpoint: {
      prompt: "围棋为什么难？",
      options: [
        {
          label: "局面数量巨大且评价困难。",
          correct: true,
          explanation: "搜索空间庞大，评价又很复杂。",
        },
        {
          label: "棋盘太小。",
          correct: false,
          explanation: "棋盘很大，并不是太小。",
        },
        {
          label: "没有规则。",
          correct: false,
          explanation: "围棋规则简单但局面复杂。",
        },
      ],
    },
    alphagoTitle: "2. 从深蓝到 AlphaGo",
    alphagoEyebrow: "搜索 + 评估",
    alphagoConceptTitle: "概念卡片",
    alphagoConceptLines: [
      "人类会向前搜索并评估局面。",
      "深蓝靠搜索加上人工规则评分。",
      "AlphaGo 通过深度神经网络评估局面。",
    ],
    alphagoParas: [
      "深度网络先看局部再看全局，形成综合判断。",
      "AlphaGo 通过人类棋局与自我对弈学习，并输出每个候选落子的胜率。",
    ],
    alphagoFigures: [
      {
        label: "图 7-22",
        caption: "围棋落子决策的思路。",
        placeholder: "示意图占位",
      },
      {
        label: "图 7-23",
        caption: "深度神经网络评估围棋局面。",
        placeholder: "示意图占位",
      },
    ],
    alphagoDemo: {
      title: "分层视野",
      goal: "体会视野扩大如何帮助评价局面。",
      labels: {
        view: "观察范围",
        local: "局部战斗",
        regional: "区域平衡",
        global: "全局控制",
        note: "视野越大，越能捕捉棋局整体结构。",
      },
    },
    alphagoSteps: [
      "移动视野滑块，从小到大。",
      "观察覆盖面积变化。",
      "联系 AlphaGo 的深层网络。",
    ],
    alphagoCheckpoint: {
      prompt: "AlphaGo 如何评估棋盘？",
      options: [
        {
          label: "用深度神经网络估计胜率。",
          correct: true,
          explanation: "网络输出每个落子的胜率评估。",
        },
        {
          label: "记住所有棋局。",
          correct: false,
          explanation: "棋局数量太多，无法记住。",
        },
        {
          label: "随机抛硬币决定。",
          correct: false,
          explanation: "AlphaGo 使用学习后的评估。",
        },
      ],
    },
    foodTitle: "想一想",
    foodEyebrow: "理性看待",
    foodParas: [
      "AlphaGo 的强大来自大量数据、自我对弈和强大算力，并非神秘魔法。",
      "理解原理能帮助我们理性看待 AI，并提前思考风险。",
    ],
    foodDemo: {
      title: "理性视角",
      goal: "在惊叹与理解之间找到平衡。",
      labels: {
        slider: "你的态度",
        left: "盲目崇拜",
        right: "清晰理解",
        note: "理性看待 AI，既承认力量也保持思考。",
      },
    },
    foodSteps: [
      "把滑块向理解一侧移动。",
      "说说为什么要理解原理。",
      "总结对 AI 的理性态度。",
    ],
    foodCheckpoint: {
      prompt: "最符合本课的态度是？",
      options: [
        {
          label: "理解原理并保持客观。",
          correct: true,
          explanation: "本课强调理性理解与思考。",
        },
        {
          label: "把 AI 当成魔法就不用学习。",
          correct: false,
          explanation: "我们需要理解 AI 的原理。",
        },
        {
          label: "完全忽视 AI。",
          correct: false,
          explanation: "AI 已影响社会，不应忽视。",
        },
      ],
    },
    summaryTitle: "关键结论",
    summaryEyebrow: "总结",
    summaryPoints: [
      "围棋规则简单但计算复杂度极高。",
      "AlphaGo 用深度学习评估局面并指导搜索。",
      "理解 AI 原理有助于理性看待与应对。",
    ],
  },
};
