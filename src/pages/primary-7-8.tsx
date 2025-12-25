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

type Scenario = {
  key: string;
  label: string;
  input: string;
  output: string;
};

export function PrimaryLesson7_8({ lang }: LessonProps) {
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
    { id: "black-box", label: t.blackBoxTitle },
    { id: "research", label: t.researchTitle },
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

        <SectionBlock id="black-box" title={t.blackBoxTitle} eyebrow={t.blackBoxEyebrow}>
          <InfoCard title={t.blackBoxConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.blackBoxConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.blackBoxParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.blackBoxFigure.label}
            caption={t.blackBoxFigure.caption}
            placeholder={t.blackBoxFigure.placeholder}
          />
          <BlackBoxScenarioDemo
            lang={lang}
            title={t.blackBoxDemo.title}
            goal={t.blackBoxDemo.goal}
            resetLabel={ui.reset}
            scenarios={t.blackBoxDemo.scenarios}
            labels={t.blackBoxDemo.labels}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.blackBoxSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.blackBoxCheckpoint.prompt}
            options={t.blackBoxCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="research" title={t.researchTitle} eyebrow={t.researchEyebrow}>
          <InfoCard title={t.researchConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.researchConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.researchParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <div className="grid gap-3 md:grid-cols-2">
            {t.researchFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <InterpretabilityProbeDemo
            lang={lang}
            title={t.researchDemo.title}
            goal={t.researchDemo.goal}
            resetLabel={ui.reset}
            labels={t.researchDemo.labels}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.researchSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.researchCheckpoint.prompt}
            options={t.researchCheckpoint.options}
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
          <TrustBalanceDemo
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

function BlackBoxScenarioDemo({
  lang,
  title,
  goal,
  resetLabel,
  scenarios,
  labels,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  scenarios: Scenario[];
  labels: { pick: string; input: string; output: string; note: string };
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(scenarios[0]?.key ?? "");

  const current = scenarios.find((s) => s.key === active) ?? scenarios[0];

  const reset = () => setActive(scenarios[0]?.key ?? "");

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
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{labels.pick}</p>
          {scenarios.map((scenario) => {
            const selected = scenario.key === active;
            return (
              <button
                key={scenario.key}
                type="button"
                onClick={() => setActive(scenario.key)}
                className={[
                  "w-full rounded-xl border px-3 py-2 text-left text-sm font-semibold transition",
                  selected
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white hover:border-slate-300",
                ].join(" ")}
              >
                {scenario.label}
              </button>
            );
          })}
        </div>

        {current && (
          <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
            <div className="rounded-lg bg-white px-3 py-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.input}</p>
              <p className="text-sm font-semibold text-slate-900">{current.input}</p>
            </div>
            <div className="rounded-lg bg-white px-3 py-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.output}</p>
              <p className="text-sm font-semibold text-slate-900">{current.output}</p>
            </div>
            <div className="rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800">{labels.note}</div>
          </div>
        )}
      </div>
    </div>
  );
}

function InterpretabilityProbeDemo({
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
  labels: { disturb: string; object: string; background: string; confidence: string; map: string; note: string };
}) {
  const isZh = lang === "zh";
  const [target, setTarget] = useState<"object" | "background">("object");
  const [level, setLevel] = useState(40);

  const confidence = useMemo(() => {
    const base = target === "object" ? 98 : 92;
    const drop = target === "object" ? level * 0.9 : level * 0.2;
    return Math.max(1, Math.round(base - drop));
  }, [level, target]);

  const reset = () => {
    setTarget("object");
    setLevel(40);
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
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{labels.disturb}</p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setTarget("object")}
              className={[
                "flex-1 rounded-xl border px-3 py-2 text-sm font-semibold transition",
                target === "object"
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white hover:border-slate-300",
              ].join(" ")}
            >
              {labels.object}
            </button>
            <button
              type="button"
              onClick={() => setTarget("background")}
              className={[
                "flex-1 rounded-xl border px-3 py-2 text-sm font-semibold transition",
                target === "background"
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white hover:border-slate-300",
              ].join(" ")}
            >
              {labels.background}
            </button>
          </div>
          <label className="block text-sm font-semibold text-slate-700">
            {labels.map}
            <input
              type="range"
              min={0}
              max={60}
              value={level}
              onChange={(e) => setLevel(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{level}</span>
          </label>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{labels.confidence}</p>
          <p className="text-2xl font-semibold text-slate-900">{confidence}%</p>
          <p className="mt-2 text-xs text-slate-600">{labels.note}</p>
        </div>
      </div>
    </div>
  );
}

function TrustBalanceDemo({
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
      "Understand why neural networks are called black boxes.",
      "Recognize risks caused by low interpretability.",
      "Learn basic interpretability research ideas.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Overview",
    introText:
      "Deep neural networks solve tasks well, but their decision process is often hard to explain. This is the black-box problem.",
    blackBoxTitle: "1. Black Box Models",
    blackBoxEyebrow: "Opaque decisions",
    blackBoxConceptTitle: "Concept Card",
    blackBoxConceptLines: [
      "Neural network decisions come from many neurons working together.",
      "We often cannot trace which neuron caused the final result.",
      "This makes decisions hard to explain or trust.",
    ],
    blackBoxParas: [
      "In self-driving cars, a sudden brake might be correct but hard to explain.",
      "In healthcare, a wrong AI diagnosis can cause serious harm if doctors cannot verify it.",
      "For robots, unpredictable strategies can introduce safety risks.",
    ],
    blackBoxFigure: {
      label: "Figure 7-29",
      caption: "A black-box model.",
      placeholder: "Illustration placeholder",
    },
    blackBoxDemo: {
      title: "Black Box Scenarios",
      goal: "See how outputs appear without clear reasons.",
      labels: {
        pick: "Pick a scenario",
        input: "Inputs",
        output: "Output",
        note: "The decision appears, but the reason is hidden.",
      },
      scenarios: [
        {
          key: "drive",
          label: "Autonomous braking",
          input: "Camera image + radar distance",
          output: "Brake suddenly",
        },
        {
          key: "health",
          label: "AI diagnosis",
          input: "Symptoms + scan results",
          output: "Predict pneumonia",
        },
        {
          key: "robot",
          label: "Robot action",
          input: "Task reward + environment",
          output: "Unusual movement path",
        },
      ],
    },
    blackBoxSteps: [
      "Select a scenario.",
      "Compare input and output.",
      "Explain why lack of reasons is risky.",
    ],
    blackBoxCheckpoint: {
      prompt: "Why are neural networks called black boxes?",
      options: [
        {
          label: "We can see outputs but not clear internal reasons.",
          correct: true,
          explanation: "The internal decision path is hard to trace.",
        },
        {
          label: "They never make mistakes.",
          correct: false,
          explanation: "They can make mistakes, which is the concern.",
        },
        {
          label: "They are always transparent.",
          correct: false,
          explanation: "Opacity is the core issue.",
        },
      ],
    },
    researchTitle: "2. Research on Interpretability",
    researchEyebrow: "Opening the box",
    researchConceptTitle: "Concept Card",
    researchConceptLines: [
      "Researchers test models by disturbing inputs.",
      "Activation maps highlight regions that matter.",
      "Interpretability is still an active research area.",
    ],
    researchParas: [
      "If noise is added to the key part of an image, confidence can drop sharply.",
      "Activation maps show which region contributed most to the decision.",
    ],
    researchFigures: [
      {
        label: "Figure 7-30",
        caption: "Explaining neural network decisions by adding disturbances to an image.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 7-31",
        caption: "An activation map to explain image-based predictions.",
        placeholder: "Illustration placeholder",
      },
    ],
    researchDemo: {
      title: "Disturbance Probe",
      goal: "Observe how confidence changes when key regions are disturbed.",
      labels: {
        disturb: "Disturbance focus",
        object: "Object area",
        background: "Background",
        confidence: "Model confidence",
        map: "Disturbance level",
        note: "Disturbing key regions causes confidence to drop much more.",
      },
    },
    researchSteps: [
      "Switch between object and background.",
      "Increase disturbance level.",
      "Explain what the confidence drop means.",
    ],
    researchCheckpoint: {
      prompt: "What does an activation map show?",
      options: [
        {
          label: "Which parts of the input matter most to the decision.",
          correct: true,
          explanation: "It highlights influential regions.",
        },
        {
          label: "The model’s password.",
          correct: false,
          explanation: "Activation maps are about attention, not passwords.",
        },
        {
          label: "The exact training data list.",
          correct: false,
          explanation: "Activation maps do not list training data.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Debate",
    foodParas: [
      "Some say we don’t fully understand human brains either, yet we still trust people.",
      "Others argue AI decisions need extra transparency because they affect safety.",
    ],
    foodDemo: {
      title: "Trust Balance",
      goal: "Think about how much explanation we need.",
      labels: {
        slider: "How much explanation?",
        left: "Trust without reasons",
        right: "Demand clear reasons",
        note: "Safety-critical systems often need stronger explanations.",
      },
    },
    foodSteps: [
      "Move the slider to your position.",
      "Explain your choice.",
      "Consider safety-critical cases.",
    ],
    foodCheckpoint: {
      prompt: "Why is interpretability important in healthcare?",
      options: [
        {
          label: "Doctors need to judge if AI decisions are reasonable.",
          correct: true,
          explanation: "Medical errors can cause serious harm.",
        },
        {
          label: "Hospitals want more colorful screens.",
          correct: false,
          explanation: "The issue is safety, not visuals.",
        },
        {
          label: "It makes computers slower on purpose.",
          correct: false,
          explanation: "Interpretability is about trust and safety.",
        },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryEyebrow: "Summary",
    summaryPoints: [
      "Neural networks can act like black boxes with unclear reasons.",
      "Low interpretability causes risks in driving, healthcare, and robotics.",
      "Researchers use disturbances and activation maps to explain decisions.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解神经网络为何被称为黑箱。",
      "认识可解释性不足带来的风险。",
      "了解可解释性研究的基本方法。",
    ],
    introTitle: "故事开始",
    introEyebrow: "概览",
    introText: "深度神经网络能力强，但决策过程难以解释，这就是“黑箱”问题。",
    blackBoxTitle: "1. 黑箱模型",
    blackBoxEyebrow: "决策不透明",
    blackBoxConceptTitle: "概念卡片",
    blackBoxConceptLines: [
      "神经网络的决策来自许多神经元共同作用。",
      "很难追溯哪个神经元导致最终结果。",
      "缺乏解释会影响信任与安全。",
    ],
    blackBoxParas: [
      "自动驾驶突然刹车可能正确，但难以解释原因。",
      "医疗诊断若无解释，医生难以判断是否可靠。",
      "机器人策略难以理解，可能带来安全风险。",
    ],
    blackBoxFigure: {
      label: "图 7-29",
      caption: "黑箱模型。",
      placeholder: "示意图占位",
    },
    blackBoxDemo: {
      title: "黑箱场景",
      goal: "观察只有输出却缺少解释的情况。",
      labels: {
        pick: "选择场景",
        input: "输入",
        output: "输出",
        note: "我们看到结果，却不知道原因。",
      },
      scenarios: [
        {
          key: "drive",
          label: "自动驾驶刹车",
          input: "摄像头图像 + 雷达距离",
          output: "突然刹车",
        },
        {
          key: "health",
          label: "AI 医疗诊断",
          input: "症状 + 检查结果",
          output: "预测肺炎",
        },
        {
          key: "robot",
          label: "机器人动作",
          input: "任务奖励 + 环境",
          output: "异常路径移动",
        },
      ],
    },
    blackBoxSteps: [
      "选择一个场景。",
      "查看输入与输出。",
      "说明黑箱带来的风险。",
    ],
    blackBoxCheckpoint: {
      prompt: "为什么神经网络被称为黑箱？",
      options: [
        {
          label: "只能看到输出，看不到清晰原因。",
          correct: true,
          explanation: "内部决策路径难以追踪。",
        },
        {
          label: "因为它们从不出错。",
          correct: false,
          explanation: "问题恰恰在于会出错。",
        },
        {
          label: "因为它们非常透明。",
          correct: false,
          explanation: "黑箱正是指不透明。",
        },
      ],
    },
    researchTitle: "2. 可解释性研究",
    researchEyebrow: "打开黑箱",
    researchConceptTitle: "概念卡片",
    researchConceptLines: [
      "通过扰动输入观察模型反应。",
      "激活图显示模型关注区域。",
      "可解释性仍是研究热点。",
    ],
    researchParas: [
      "扰动关键区域会让模型置信度大幅下降。",
      "激活图可以显示哪些区域最重要。",
    ],
    researchFigures: [
      {
        label: "图 7-30",
        caption: "通过扰动图像解释模型判断。",
        placeholder: "示意图占位",
      },
      {
        label: "图 7-31",
        caption: "激活图解释图像预测。",
        placeholder: "示意图占位",
      },
    ],
    researchDemo: {
      title: "扰动探测",
      goal: "观察关键区域被扰动时置信度变化。",
      labels: {
        disturb: "扰动位置",
        object: "物体区域",
        background: "背景",
        confidence: "模型置信度",
        map: "扰动强度",
        note: "扰动关键区域会让置信度下降更多。",
      },
    },
    researchSteps: [
      "切换扰动目标。",
      "增加扰动强度。",
      "解释置信度变化。",
    ],
    researchCheckpoint: {
      prompt: "激活图说明了什么？",
      options: [
        {
          label: "输入中最重要的区域。",
          correct: true,
          explanation: "激活图突出关键区域。",
        },
        {
          label: "模型的密码。",
          correct: false,
          explanation: "激活图与密码无关。",
        },
        {
          label: "训练数据列表。",
          correct: false,
          explanation: "激活图不展示训练数据。",
        },
      ],
    },
    foodTitle: "想一想",
    foodEyebrow: "讨论",
    foodParas: [
      "有人认为人类大脑也不完全透明，但我们仍信任他人。",
      "也有人认为 AI 影响安全时需要更强解释。",
    ],
    foodDemo: {
      title: "信任平衡",
      goal: "思考我们需要多少解释。",
      labels: {
        slider: "解释需求",
        left: "不问原因",
        right: "要求解释",
        note: "安全关键场景通常需要更高可解释性。",
      },
    },
    foodSteps: [
      "把滑块移动到你的立场。",
      "说明理由。",
      "考虑安全场景的需求。",
    ],
    foodCheckpoint: {
      prompt: "医疗场景为什么需要可解释性？",
      options: [
        {
          label: "医生需要判断 AI 是否合理。",
          correct: true,
          explanation: "错误诊断会带来严重后果。",
        },
        {
          label: "只是为了界面更好看。",
          correct: false,
          explanation: "核心问题是安全与信任。",
        },
        {
          label: "为了让计算更慢。",
          correct: false,
          explanation: "可解释性不是为了拖慢系统。",
        },
      ],
    },
    summaryTitle: "关键结论",
    summaryEyebrow: "总结",
    summaryPoints: [
      "神经网络往往像黑箱，难以解释。",
      "可解释性不足会带来安全风险。",
      "扰动测试与激活图能帮助解释模型。",
    ],
  },
};
