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

export function PrimaryLesson6_5({ lang }: LessonProps) {
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
    { id: "shift", label: t.shiftTitle },
    { id: "risks", label: t.risksTitle },
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

        <SectionBlock id="shift" title={t.shiftTitle} eyebrow={t.shiftEyebrow}>
          <InfoCard title={t.shiftConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.shiftConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.shiftParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.shiftFigure.label}
            caption={t.shiftFigure.caption}
            placeholder={t.shiftFigure.placeholder}
          />
          <LearningShiftDemo
            lang={lang}
            title={t.shiftDemo.title}
            goal={t.shiftDemo.goal}
            resetLabel={ui.reset}
            modes={t.shiftDemo.modes}
            labels={t.shiftDemo.labels}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.shiftSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.shiftCheckpoint.prompt}
            options={t.shiftCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="risks" title={t.risksTitle} eyebrow={t.risksEyebrow}>
          <InfoCard title={t.risksConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.risksConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.risksParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <DataRiskDemo
            lang={lang}
            title={t.risksDemo.title}
            goal={t.risksDemo.goal}
            resetLabel={ui.reset}
            labels={t.risksDemo.labels}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.risksSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.risksCheckpoint.prompt}
            options={t.risksCheckpoint.options}
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
          <LearningHabitDemo
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

type ShiftMode = {
  key: string;
  label: string;
  base: number;
  note: string;
};

function LearningShiftDemo({
  lang,
  title,
  goal,
  resetLabel,
  modes,
  labels,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  modes: ShiftMode[];
  labels: { mode: string; hours: string; score: string; note: string };
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(modes[0]?.key ?? "");
  const [hours, setHours] = useState(5);

  const mode = modes.find((item) => item.key === active) ?? modes[0];
  const score = useMemo(() => {
    if (!mode) return 50;
    if (mode.key === "knowledge") return mode.base;
    return Math.min(100, Math.round(mode.base + hours * 6));
  }, [hours, mode]);

  const reset = () => {
    setActive(modes[0]?.key ?? "");
    setHours(5);
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
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.mode}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {modes.map((item) => {
            const selected = item.key === active;
            return (
              <button
                key={item.key}
                type="button"
                className={[
                  "rounded-full border px-3 py-1 text-xs font-semibold transition",
                  selected
                    ? "border-brand-500 bg-brand-50 text-brand-700"
                    : "border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900",
                ].join(" ")}
                onClick={() => setActive(item.key)}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-3 grid gap-4 md:grid-cols-2">
        <label className="block text-sm font-semibold text-slate-700">
          {labels.hours}
          <input
            type="range"
            min={0}
            max={10}
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="mt-1 w-full accent-brand-500"
            aria-valuemin={0}
            aria-valuemax={10}
            aria-valuenow={hours}
          />
          <span className="text-xs text-slate-500">{hours}</span>
        </label>
        <div className="rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.score}</p>
          <p className="mt-2 text-2xl font-semibold text-slate-900">{score}</p>
          <p className="mt-1 text-xs text-slate-600">{mode?.note}</p>
        </div>
      </div>
    </div>
  );
}

function DataRiskDemo({
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
  labels: { quality: string; bias: string; performance: string; risk: string; notes: string[] };
}) {
  const isZh = lang === "zh";
  const [quality, setQuality] = useState(70);
  const [bias, setBias] = useState(30);

  const performance = useMemo(() => Math.max(0, Math.round(quality - bias * 0.5)), [quality, bias]);
  const riskNote = bias > 60 ? labels.notes[2] : bias > 30 ? labels.notes[1] : labels.notes[0];

  const reset = () => {
    setQuality(70);
    setBias(30);
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

      <div className="mt-3 grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <Slider label={labels.quality} value={quality} onChange={setQuality} />
          <Slider label={labels.bias} value={bias} onChange={setBias} />
        </div>
        <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50/70 p-3">
          <Metric label={labels.performance} value={performance} />
          <div className="rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800">
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">{labels.risk}</p>
            <p className="mt-1 leading-relaxed">{riskNote}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slider({ label, value, onChange }: { label: string; value: number; onChange: (val: number) => void }) {
  return (
    <label className="block text-sm font-semibold text-slate-700">
      {label}
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1 w-full accent-brand-500"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
      />
      <span className="text-xs text-slate-500">{value}</span>
    </label>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
        <span>{label}</span>
        <span className="text-slate-900">{value}</span>
      </div>
      <div className="mt-1 h-2 rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-sky-500 transition-all"
          style={{ width: `${Math.min(100, value)}%` }}
          aria-hidden
        />
      </div>
    </div>
  );
}

function LearningHabitDemo({
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
  labels: { minutes: string; growth: string; messages: string[] };
}) {
  const isZh = lang === "zh";
  const [minutes, setMinutes] = useState(20);
  const growth = useMemo(() => Math.min(100, Math.round(minutes * 2.5)), [minutes]);
  const message = growth > 70 ? labels.messages[2] : growth > 40 ? labels.messages[1] : labels.messages[0];

  const reset = () => {
    setMinutes(20);
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

      <div className="mt-3 grid gap-4 md:grid-cols-2">
        <label className="block text-sm font-semibold text-slate-700">
          {labels.minutes}
          <input
            type="range"
            min={0}
            max={60}
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
            className="mt-1 w-full accent-brand-500"
            aria-valuemin={0}
            aria-valuemax={60}
            aria-valuenow={minutes}
          />
          <span className="text-xs text-slate-500">{minutes}</span>
        </label>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.growth}</p>
          <p className="mt-2 text-2xl font-semibold text-slate-900">{growth}</p>
          <p className="mt-1 text-xs text-slate-600">{message}</p>
        </div>
      </div>
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand the difference between self-learning AI and knowledge-based AI.",
      "Learn the origin and development of machine learning.",
      "Recognize the advantages and risks of machine learning.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "Early AI relied on human knowledge. Machine learning introduced a new path where machines learn from data and go beyond human instructions.",
    shiftTitle: "1. From Knowledge-Driven to Machine Learning",
    shiftEyebrow: "Learning machines",
    shiftConceptTitle: "Concept Card",
    shiftConceptLines: [
      "Knowledge-driven AI relies on human-designed rules.",
      "Machine learning lets machines learn patterns from data.",
      "Arthur Samuel's checkers program showed early success.",
    ],
    shiftParas: [
      "Alan Turing suggested teaching machines like children, using feedback to learn.",
      "Early computers lacked enough power, so knowledge-driven systems dominated at first.",
      "In 1959, Arthur Samuel proposed machine learning with a self-learning checkers program that improved rapidly.",
    ],
    shiftFigure: {
      label: "Figure 6-12",
      caption: "Arthur Samuel and the checkers game he designed with automatic learning ability.",
      placeholder: "Illustration placeholder",
    },
    shiftDemo: {
      title: "Learning Shift",
      goal: "Compare a knowledge-driven system with a learning system.",
      labels: {
        mode: "Mode",
        hours: "Learning hours",
        score: "Skill score",
        note: "Note",
      },
      modes: [
        {
          key: "knowledge",
          label: "Knowledge-driven",
          base: 60,
          note: "Stays near the human-designed baseline.",
        },
        {
          key: "learning",
          label: "Machine learning",
          base: 40,
          note: "Improves with more training time.",
        },
      ],
    },
    shiftSteps: [
      "Choose a mode.",
      "Slide the learning hours.",
      "Notice how learning systems improve over time.",
    ],
    shiftCheckpoint: {
      prompt: "What made Samuel's checkers program special?",
      options: [
        {
          label: "It learned and improved by itself.",
          correct: true,
          explanation: "Samuel let the program learn instead of hard-coding every move.",
        },
        {
          label: "It never changed after being written.",
          correct: false,
          explanation: "The program improved through learning.",
        },
        {
          label: "It did not follow the rules of checkers.",
          correct: false,
          explanation: "It learned within the rules of the game.",
        },
      ],
    },
    risksTitle: "2. The Advantages and Risks of Machine Learning",
    risksEyebrow: "Data matters",
    risksConceptTitle: "Concept Card",
    risksConceptLines: [
      "Neural networks can learn powerful patterns from large data.",
      "Data quality shapes model behavior.",
      "Biased or corrupted data can cause harmful outputs.",
    ],
    risksParas: [
      "With big data and strong computing, machine learning has achieved great success.",
      "But data is like food - if it is biased or poor, the model learns bad habits.",
    ],
    risksDemo: {
      title: "Data Quality Meter",
      goal: "Adjust data quality and bias to see performance and risk.",
      labels: {
        quality: "Data quality",
        bias: "Data bias",
        performance: "Expected performance",
        risk: "Risk note",
        notes: [
          "Clean data helps the model behave well.",
          "Some bias appears and may distort results.",
          "High bias can lead to unfair or inappropriate outputs.",
        ],
      },
    },
    risksSteps: [
      "Move the sliders for quality and bias.",
      "Observe performance and risk notes.",
      "Explain why data matters so much.",
    ],
    risksCheckpoint: {
      prompt: "Why is biased data risky for machine learning?",
      options: [
        {
          label: "It can lead to incorrect or unfair outputs.",
          correct: true,
          explanation: "Models learn patterns from data, including bad ones.",
        },
        {
          label: "It makes computers stop working.",
          correct: false,
          explanation: "The risk is wrong behavior, not hardware failure.",
        },
        {
          label: "It always improves accuracy.",
          correct: false,
          explanation: "Bias can reduce accuracy and fairness.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Keep learning",
    foodParas: [
      "AI moved from relying on human knowledge to learning on its own.",
      "This reminds us that steady learning over time builds true strength.",
    ],
    foodDemo: {
      title: "Learning Habit",
      goal: "See how daily practice builds long-term growth.",
      labels: {
        minutes: "Minutes of daily learning",
        growth: "Growth meter",
        messages: [
          "Every small step counts.",
          "Steady practice brings visible progress.",
          "Long-term effort leads to strong growth.",
        ],
      },
    },
    foodSteps: [
      "Move the minutes slider.",
      "Read the growth message.",
      "Share one learning habit you want to keep.",
    ],
    foodCheckpoint: {
      prompt: "What does the lesson say about learning?",
      options: [
        {
          label: "Real achievements come from steady effort over time.",
          correct: true,
          explanation: "Learning is gradual and needs persistence.",
        },
        {
          label: "Learning happens overnight.",
          correct: false,
          explanation: "The text says learning is not instant.",
        },
        {
          label: "Learning is unnecessary once you know the basics.",
          correct: false,
          explanation: "Continuous learning is encouraged.",
        },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryEyebrow: "Summary",
    summaryPoints: [
      "Knowledge-driven AI follows human rules, while machine learning learns from data.",
      "Turing and Samuel helped start the idea of machines learning on their own.",
      "Machine learning can surpass human knowledge with enough data and compute.",
      "Data bias and low quality create risks and bad outputs.",
      "Steady learning over time leads to real growth.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解自学习 AI 与知识驱动 AI 的区别。",
      "了解机器学习的起源与发展。",
      "认识机器学习的优势与风险。",
    ],
    introTitle: "故事开头",
    introEyebrow: "开场",
    introText:
      "早期 AI 依靠人工知识，而机器学习让机器从数据中学习，突破人类知识的限制。",
    shiftTitle: "1. 从知识驱动到机器学习",
    shiftEyebrow: "学习机器",
    shiftConceptTitle: "概念卡",
    shiftConceptLines: [
      "知识驱动 AI 依赖人类规则。",
      "机器学习让机器从数据中学习模式。",
      "阿瑟·塞缪尔的跳棋程序是早期成功例子。",
    ],
    shiftParas: [
      "图灵提出让机器像孩子一样通过反馈学习。",
      "早期计算机算力不足，因此以知识驱动方法为主。",
      "1959 年塞缪尔提出机器学习，并设计了会自我学习的跳棋程序。",
    ],
    shiftFigure: {
      label: "图 6-12",
      caption: "阿瑟·塞缪尔与他设计的自动学习跳棋程序。",
      placeholder: "示意图",
    },
    shiftDemo: {
      title: "学习方式对比",
      goal: "对比知识驱动系统与学习型系统。",
      labels: {
        mode: "模式",
        hours: "学习小时数",
        score: "技能分数",
        note: "提示",
      },
      modes: [
        {
          key: "knowledge",
          label: "知识驱动",
          base: 60,
          note: "主要停留在人工设定水平。",
        },
        {
          key: "learning",
          label: "机器学习",
          base: 40,
          note: "训练时间越多，水平越高。",
        },
      ],
    },
    shiftSteps: [
      "选择模式。",
      "拖动学习小时数。",
      "观察学习型系统的提升。",
    ],
    shiftCheckpoint: {
      prompt: "塞缪尔的跳棋程序特别在哪里？",
      options: [
        {
          label: "它能自我学习并不断进步。",
          correct: true,
          explanation: "他没有硬编码每一步。",
        },
        {
          label: "写好后永远不变。",
          correct: false,
          explanation: "它会通过学习改进。",
        },
        {
          label: "不遵守跳棋规则。",
          correct: false,
          explanation: "它在规则内学习。",
        },
      ],
    },
    risksTitle: "2. 机器学习的优势与风险",
    risksEyebrow: "数据很重要",
    risksConceptTitle: "概念卡",
    risksConceptLines: [
      "神经网络能从大量数据中学习规律。",
      "数据质量决定模型表现。",
      "偏差数据会带来风险。",
    ],
    risksParas: [
      "在大数据和强算力支持下，机器学习取得巨大成功。",
      "但数据就像食物，若有偏差，模型也会学坏。",
    ],
    risksDemo: {
      title: "数据质量仪表",
      goal: "调节数据质量与偏差，观察表现与风险。",
      labels: {
        quality: "数据质量",
        bias: "数据偏差",
        performance: "预期表现",
        risk: "风险提示",
        notes: [
          "数据干净时，模型表现更好。",
          "偏差增大时，结果会被扭曲。",
          "偏差过大可能导致不公平输出。",
        ],
      },
    },
    risksSteps: [
      "调整数据质量与偏差。",
      "观察表现与风险提示。",
      "解释为什么数据这么重要。",
    ],
    risksCheckpoint: {
      prompt: "为什么有偏差的数据会带来风险？",
      options: [
        {
          label: "会导致模型输出不正确或不公平。",
          correct: true,
          explanation: "模型会学到错误模式。",
        },
        {
          label: "会让硬件停止工作。",
          correct: false,
          explanation: "风险在于行为不当，而非硬件故障。",
        },
        {
          label: "一定会提高准确率。",
          correct: false,
          explanation: "偏差可能降低准确性与公平性。",
        },
      ],
    },
    foodTitle: "想一想",
    foodEyebrow: "持续学习",
    foodParas: [
      "AI 从依赖人类知识到自己学习，说明学习非常重要。",
      "真正的进步来自长期坚持的努力。",
    ],
    foodDemo: {
      title: "学习习惯",
      goal: "观察每天的学习时间如何积累成长。",
      labels: {
        minutes: "每天学习分钟数",
        growth: "成长进度",
        messages: [
          "每一点积累都有意义。",
          "持续练习会带来明显进步。",
          "长期努力会形成巨大成长。",
        ],
      },
    },
    foodSteps: [
      "拖动学习时间滑块。",
      "阅读成长提示。",
      "分享你想坚持的学习习惯。",
    ],
    foodCheckpoint: {
      prompt: "这段文字强调了学习的什么特点？",
      options: [
        {
          label: "成就来自长期坚持的努力。",
          correct: true,
          explanation: "学习需要时间和持续性。",
        },
        {
          label: "学习一夜之间完成。",
          correct: false,
          explanation: "文本强调学习不是一蹴而就。",
        },
        {
          label: "学会基础后就不用再学。",
          correct: false,
          explanation: "持续学习非常重要。",
        },
      ],
    },
    summaryTitle: "要点回顾",
    summaryEyebrow: "总结",
    summaryPoints: [
      "知识驱动 AI 依赖规则，机器学习从数据中学习。",
      "图灵与塞缪尔推动了机器自学习的理念。",
      "数据和算力让机器学习能力快速提升。",
      "数据偏差会带来错误与风险。",
      "持续学习与努力会带来真正成长。",
    ],
  },
};
