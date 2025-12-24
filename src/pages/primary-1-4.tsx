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

export function PrimaryLesson1_4({ lang }: LessonProps) {
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
    { id: "cooker", label: t.cookerTitle },
    { id: "ai", label: t.aiTitle },
    { id: "rice-ai", label: t.riceAiTitle },
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
          {t.introParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
        </SectionBlock>

        <SectionBlock id="cooker" title={t.cookerTitle} eyebrow={t.cookerEyebrow}>
          <InfoCard title={t.cookerConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.cookerConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.cookerParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.cookerFigure.label}
            caption={t.cookerFigure.caption}
            placeholder={t.cookerFigure.placeholder}
          />
          <CurieSwitchDemo
            lang={lang}
            title={t.cookerDemo.title}
            goal={t.cookerDemo.goal}
            resetLabel={ui.reset}
            curiePoint={t.cookerDemo.curiePoint}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.cookerSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.cookerCheckpoint.prompt}
            options={t.cookerCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="ai" title={t.aiTitle} eyebrow={t.aiEyebrow}>
          <InfoCard title={t.aiConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.aiConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.aiParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.aiFigure.label}
            caption={t.aiFigure.caption}
            placeholder={t.aiFigure.placeholder}
          />
          <AutomationVsAIDemo
            lang={lang}
            title={t.aiDemo.title}
            goal={t.aiDemo.goal}
            resetLabel={ui.reset}
            controls={t.aiDemo.controls}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.aiSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.aiCheckpoint.prompt}
            options={t.aiCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="rice-ai" title={t.riceAiTitle} eyebrow={t.riceAiEyebrow}>
          <InfoCard title={t.riceAiConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.riceAiConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.riceAiParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <CookerUpgradeDemo
            lang={lang}
            title={t.riceDemo.title}
            goal={t.riceDemo.goal}
            resetLabel={ui.reset}
            upgrades={t.riceDemo.upgrades}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.riceAiSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.riceAiCheckpoint.prompt}
            options={t.riceAiCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="food" title={t.foodTitle} eyebrow={t.foodEyebrow}>
          <InfoCard title={t.foodPromptTitle}>
            {t.foodQuestions.map((question) => (
              <p key={question}>{question}</p>
            ))}
          </InfoCard>
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
              <p key={para}>{para}</p>
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

function CurieSwitchDemo({
  lang,
  title,
  goal,
  resetLabel,
  curiePoint,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  curiePoint: number;
}) {
  const isZh = lang === "zh";
  const [temp, setTemp] = useState(80);
  const isMagnetic = temp < curiePoint;
  const heaterOn = isMagnetic;
  const waterPresent = temp <= 100;

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
          onClick={() => setTemp(80)}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-4">
        <input
          type="range"
          min={20}
          max={140}
          step={1}
          value={temp}
          onChange={(event) => setTemp(Number(event.target.value))}
          className="w-full"
          aria-label={isZh ? "温度滑块" : "Temperature slider"}
        />
        <div className="mt-2 flex justify-between text-[11px] text-slate-500">
          <span>{isZh ? "低温" : "Cool"}</span>
          <span>{isZh ? "Curie 点" : "Curie point"}</span>
          <span>{isZh ? "高温" : "Hot"}</span>
        </div>
      </div>

      <div className="mt-3 grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 sm:grid-cols-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "当前温度" : "Temperature"}
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{temp}°C</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "磁性" : "Magnet"}
          </p>
          <p className="mt-1 text-sm text-slate-700">
            {isMagnetic ? (isZh ? "有磁性" : "Magnetic") : isZh ? "失去磁性" : "Not magnetic"}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "加热开关" : "Heater"}
          </p>
          <p className="mt-1 text-sm text-slate-700">
            {heaterOn ? (isZh ? "继续加热" : "Heating") : isZh ? "弹起停止" : "Popped off"}
          </p>
        </div>
      </div>

      <p className="mt-3 text-sm text-slate-700">
        {waterPresent
          ? isZh
            ? "水还在锅里，温度接近 100°C。"
            : "Water is still present, so the temperature stays near 100°C."
          : isZh
            ? "水已烧干，温度上升到 Curie 点后开关弹起。"
            : "Water is gone, so the temperature rises past the Curie point and the switch pops."}
      </p>
    </div>
  );
}

type DemoControl = {
  key: string;
  label: string;
  defaultChecked: boolean;
  effect: string;
};

function AutomationVsAIDemo({
  lang,
  title,
  goal,
  resetLabel,
  controls,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  controls: DemoControl[];
}) {
  const isZh = lang === "zh";
  const initialState = controls.reduce<Record<string, boolean>>((acc, control) => {
    acc[control.key] = control.defaultChecked;
    return acc;
  }, {});
  const [state, setState] = useState(initialState);

  const hasLearning = state.learns || state.adapts;
  const label = hasLearning
    ? isZh
      ? "更接近人工智能"
      : "Closer to AI"
    : isZh
      ? "更接近自动化"
      : "Closer to automation";
  const activeEffect = hasLearning
    ? (state.learns ? controls.find((control) => control.key === "learns") : controls.find((control) => control.key === "adapts"))
    : controls.find((control) => control.key === "preset");

  const reset = () => setState(initialState);

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

      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {controls.map((control) => (
          <label
            key={control.key}
            className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700"
          >
            <span>{control.label}</span>
            <input
              type="checkbox"
              checked={state[control.key]}
              onChange={(event) =>
                setState((prev) => ({
                  ...prev,
                  [control.key]: event.target.checked,
                }))
              }
            />
          </label>
        ))}
      </div>

      <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {isZh ? "判断结果" : "Result"}
        </p>
        <p className="mt-1 text-sm font-semibold text-slate-900">{label}</p>
        <p className="mt-1 text-sm text-slate-700">
          {activeEffect?.effect}
        </p>
      </div>
    </div>
  );
}

type UpgradeOption = {
  key: string;
  label: string;
  effect: string;
};

function CookerUpgradeDemo({
  lang,
  title,
  goal,
  resetLabel,
  upgrades,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  upgrades: UpgradeOption[];
}) {
  const isZh = lang === "zh";
  const [selected, setSelected] = useState<Record<string, boolean>>(
    upgrades.reduce<Record<string, boolean>>((acc, upgrade) => {
      acc[upgrade.key] = false;
      return acc;
    }, {}),
  );

  const count = Object.values(selected).filter(Boolean).length;
  const label = count >= 2 ? (isZh ? "具备 AI 特征" : "AI-like features") : isZh ? "仍是自动化" : "Still automation";

  const reset = () =>
    setSelected(
      upgrades.reduce<Record<string, boolean>>((acc, upgrade) => {
        acc[upgrade.key] = false;
        return acc;
      }, {}),
    );

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

      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {upgrades.map((upgrade) => (
          <label
            key={upgrade.key}
            className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700"
          >
            <span>{upgrade.label}</span>
            <input
              type="checkbox"
              checked={selected[upgrade.key]}
              onChange={(event) =>
                setSelected((prev) => ({
                  ...prev,
                  [upgrade.key]: event.target.checked,
                }))
              }
            />
          </label>
        ))}
      </div>

      <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {isZh ? "结果" : "Outcome"}
        </p>
        <p className="mt-1 text-sm font-semibold text-slate-900">{label}</p>
        <p className="mt-1 text-sm text-slate-700">
          {upgrades.find((upgrade) => selected[upgrade.key])?.effect ??
            (isZh ? "选择升级功能看看会发生什么。" : "Select upgrades to see what changes.")}
        </p>
      </div>
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand the concept of artificial intelligence by thinking about whether a rice cooker counts as AI.",
      "Understand the differences and connections between automation and artificial intelligence.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introParas: [
      "Earlier, we met legendary puppets and movie robots that reflect our desire to build intelligent machines. The technology behind this dream is called artificial intelligence.",
      "Does a rice cooker that stops automatically count as AI? Let’s use it to explore what AI is and is not.",
    ],
    cookerTitle: "1. How a Rice Cooker Works",
    cookerEyebrow: "Automation example",
    cookerConceptTitle: "Concept Card",
    cookerConceptLines: [
      "A special magnet holds the heater switch closed while water is present.",
      "When the temperature reaches the Curie point, the magnet loses magnetism.",
      "The switch pops up and cooking stops.",
    ],
    cookerParas: [
      "In 1895, French physicist Pierre Curie discovered that magnets lose magnetism at a certain temperature, now called the Curie point.",
      "A rice cooker uses a magnet whose Curie point is slightly above 100°C. While water remains, temperature stays near 100°C and the magnet holds the heater switch closed.",
      "When water boils away, temperature rises. At the Curie point the magnet loses magnetism, the switch releases, and the cooker stops heating.",
    ],
    cookerFigure: {
      label: "Figure 1-6",
      caption: "The structure of a rice cooker.",
      placeholder: "Illustration placeholder",
    },
    cookerDemo: {
      title: "Curie Point Switch",
      goal: "Move the temperature to see when the magnet releases the switch.",
      curiePoint: 103,
    },
    cookerSteps: [
      "Drag the temperature slider.",
      "Watch the magnet and heater status change.",
      "Connect it to the rice cooker’s stop signal.",
    ],
    cookerCheckpoint: {
      prompt: "Why does the rice cooker stop heating?",
      options: [
        {
          label: "The magnet loses magnetism at the Curie point.",
          correct: true,
          explanation: "The switch pops when magnetism disappears.",
        },
        {
          label: "The cooker guesses using emotions.",
          correct: false,
          explanation: "It is a physical mechanism, not emotions.",
        },
        {
          label: "The cooker reads human thoughts.",
          correct: false,
          explanation: "It follows a physical temperature rule.",
        },
      ],
    },
    aiTitle: "2. What Is Artificial Intelligence?",
    aiEyebrow: "Core definition",
    aiConceptTitle: "Concept Card",
    aiConceptLines: [
      "AI aims to simulate human intelligent behavior with computers.",
      "Logic and computation make thinking processes programmable.",
      "There are two main approaches: behavior imitation and brain modeling.",
    ],
    aiParas: [
      "Throughout history, people built machines that seemed smart, from Al-Jazari’s band to the south-pointing chariot. These were impressive but followed preset instructions.",
      "To make machines truly intelligent, we need them to mimic how humans think. The study of logic began with Aristotle, and George Boole showed logical reasoning could be expressed by calculations.",
      "Alan Turing and John von Neumann built electronic computers, which made those calculations practical. AI began to flourish from there.",
      "Over time, AI expanded beyond logic to include perception, action, learning, imagination, and emotion.",
      "Today, most researchers define AI as the science of simulating human intelligent behaviors with computers.",
    ],
    aiFigure: {
      label: "Figure 1-7",
      caption: "The definition of artificial intelligence.",
      placeholder: "Illustration placeholder",
    },
    aiDemo: {
      title: "Automation vs. AI",
      goal: "Toggle features to see when a system moves toward AI.",
      controls: [
        {
          key: "preset",
          label: "Follows preset rules only",
          defaultChecked: true,
          effect: "Preset rules alone are automation, not intelligence.",
        },
        {
          key: "learns",
          label: "Learns from data",
          defaultChecked: false,
          effect: "Learning is a key sign of AI-like behavior.",
        },
        {
          key: "adapts",
          label: "Adapts to new situations",
          defaultChecked: false,
          effect: "Adaptation suggests more intelligent behavior.",
        },
      ],
    },
    aiSteps: [
      "Switch on learning and adaptation.",
      "Notice the result label.",
      "Describe how AI differs from automation.",
    ],
    aiCheckpoint: {
      prompt: "Which definition best matches AI in this lesson?",
      options: [
        {
          label: "The science of simulating human intelligent behaviors with computers.",
          correct: true,
          explanation: "This is the lesson’s definition.",
        },
        {
          label: "Any machine that moves by itself.",
          correct: false,
          explanation: "Movement alone is not intelligence.",
        },
        {
          label: "A machine that follows only fixed rules.",
          correct: false,
          explanation: "That is automation, not AI.",
        },
      ],
    },
    riceAiTitle: "3. Is a Rice Cooker AI?",
    riceAiEyebrow: "Check the difference",
    riceAiConceptTitle: "Concept Card",
    riceAiConceptLines: [
      "Automatic switches follow physical rules, not learning.",
      "Adding learning and adaptation brings AI-like features.",
      "Smart control makes the difference.",
    ],
    riceAiParas: [
      "A rice cooker can stop automatically, but the switch is based on physical laws, not computation or learning.",
      "If we added an intelligent control system that learned from past cooking and adjusted for different rice types, it would start to show AI-like features.",
    ],
    riceDemo: {
      title: "Upgrade the Rice Cooker",
      goal: "Select upgrades to see when it becomes AI-like.",
      upgrades: [
        {
          key: "learn",
          label: "Learns from past cooking",
          effect: "Learning helps the cooker improve over time.",
        },
        {
          key: "adapt",
          label: "Adapts to rice type and water amount",
          effect: "Adapting settings makes it more intelligent.",
        },
        {
          key: "adjust",
          label: "Adjusts heat and time automatically",
          effect: "Automatic adjustment moves beyond simple automation.",
        },
      ],
    },
    riceAiSteps: [
      "Pick one or more upgrades.",
      "Watch the result label change.",
      "Decide which feature makes it closer to AI.",
    ],
    riceAiCheckpoint: {
      prompt: "Why isn’t a basic rice cooker considered AI?",
      options: [
        {
          label: "It relies on physical switches, not learning or computation.",
          correct: true,
          explanation: "It follows a fixed physical rule.",
        },
        {
          label: "It is too small to be AI.",
          correct: false,
          explanation: "Size does not decide AI.",
        },
        {
          label: "It cooks too quickly to be AI.",
          correct: false,
          explanation: "Speed is not the reason.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Look around",
    foodPromptTitle: "Think about it",
    foodQuestions: [
      "What machines around you use artificial intelligence?",
      "What machines seem powerful but don’t actually use AI?",
    ],
    foodCheckpoint: {
      prompt: "Which example is more likely to involve AI?",
      options: [
        {
          label: "A music app that recommends songs based on your taste.",
          correct: true,
          explanation: "Personalized recommendations often use AI.",
        },
        {
          label: "A light switch that turns on when you press it.",
          correct: false,
          explanation: "That is a simple manual switch.",
        },
        {
          label: "A kettle that boils water at 100°C.",
          correct: false,
          explanation: "Boiling is a physical process, not AI.",
        },
      ],
    },
    historyTitle: "History Corner",
    historyEyebrow: "The Curies",
    historyCardTitle: "Pierre and Marie Curie",
    historyParas: [
      "Pierre Curie was a French physicist. His wife Marie Curie was also a famous scientist known as Madame Curie.",
      "In 1903, Pierre and Marie Curie shared the Nobel Prize in Physics with Henri Becquerel for work on radioactivity. It was the first time a married couple shared the prize.",
      "In 1911, Marie Curie won the Nobel Prize in Chemistry after continuing the work despite Pierre’s death. She discovered radium and polonium.",
    ],
    summaryTitle: "Summary",
    summaryEyebrow: "Key Takeaways",
    summaryPoints: [
      "Rice cookers use physical switches, not AI.",
      "AI simulates human intelligent behavior using computation.",
      "Learning and adaptation are key signs of AI-like systems.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "通过电饭煲例子理解什么是人工智能。",
      "理解自动化与人工智能的区别与联系。",
    ],
    introTitle: "故事开头",
    introEyebrow: "课程导入",
    introParas: [
      "前面我们认识了传奇机关人与电影机器人，它们体现了人类制造智能机器的梦想。支撑这一梦想的技术叫作人工智能。",
      "电饭煲能自动停止加热，它算 AI 吗？让我们通过它来理解 AI 是什么、不是什麽。",
    ],
    cookerTitle: "1. 电饭煲如何工作",
    cookerEyebrow: "自动化例子",
    cookerConceptTitle: "概念卡片",
    cookerConceptLines: [
      "特殊磁铁在有水时吸住加热开关。",
      "达到 Curie 点后磁性消失。",
      "开关弹起，停止加热。",
    ],
    cookerParas: [
      "1895 年，法国物理学家皮埃尔·居里发现磁铁在特定温度下会失去磁性，这个温度叫 Curie 点。",
      "电饭煲使用的磁铁 Curie 点略高于 100°C。锅内有水时温度接近 100°C，磁铁吸住开关。",
      "水烧干后温度上升，达到 Curie 点后磁性消失，开关弹起，电饭煲停止加热。",
    ],
    cookerFigure: {
      label: "图 1-6",
      caption: "电饭煲结构示意。",
      placeholder: "插图占位",
    },
    cookerDemo: {
      title: "Curie 点开关",
      goal: "移动温度滑块，观察磁性与开关变化。",
      curiePoint: 103,
    },
    cookerSteps: ["拖动温度滑块。", "观察磁性与加热状态。", "连接到电饭煲的停止机制。"],
    cookerCheckpoint: {
      prompt: "电饭煲为什么会停止加热？",
      options: [
        {
          label: "达到 Curie 点后磁铁失去磁性。",
          correct: true,
          explanation: "磁性消失使开关弹起。",
        },
        {
          label: "电饭煲有情绪决定停止。",
          correct: false,
          explanation: "它是物理机制。",
        },
        {
          label: "电饭煲会读心术。",
          correct: false,
          explanation: "它依据温度变化。",
        },
      ],
    },
    aiTitle: "2. 什么是人工智能",
    aiEyebrow: "核心定义",
    aiConceptTitle: "概念卡片",
    aiConceptLines: [
      "AI 目标是用计算机模拟人类智能行为。",
      "逻辑与计算让思维过程可被描述。",
      "两条路径：模仿行为与模拟大脑。",
    ],
    aiParas: [
      "历史上人们制造过许多“看似聪明”的机器，如自动乐队和指南车，但它们只是按固定规则工作。",
      "要让机器真正智能，就要让它模仿人类思维。逻辑学起源于亚里士多德，布尔等人证明逻辑推理可以用计算表达。",
      "图灵与冯·诺依曼等人制造了电子计算机，让这些计算成为现实，人工智能由此发展起来。",
      "AI 后来扩展到感知、行动、学习、想象和情感等方面。",
      "如今，人工智能被定义为：用计算机模拟人类智能行为的科学。",
    ],
    aiFigure: {
      label: "图 1-7",
      caption: "人工智能的定义。",
      placeholder: "插图占位",
    },
    aiDemo: {
      title: "自动化 vs 人工智能",
      goal: "打开不同功能，观察系统是否更接近 AI。",
      controls: [
        {
          key: "preset",
          label: "只遵循固定规则",
          defaultChecked: true,
          effect: "只有固定规则属于自动化。",
        },
        {
          key: "learns",
          label: "从数据中学习",
          defaultChecked: false,
          effect: "学习是 AI 的重要特征。",
        },
        {
          key: "adapts",
          label: "适应新情况",
          defaultChecked: false,
          effect: "能适应说明更智能。",
        },
      ],
    },
    aiSteps: ["打开“学习”和“适应”。", "观察结果标签变化。", "总结 AI 与自动化的区别。"],
    aiCheckpoint: {
      prompt: "本课对 AI 的定义是什么？",
      options: [
        {
          label: "用计算机模拟人类智能行为的科学。",
          correct: true,
          explanation: "这是课文的定义。",
        },
        {
          label: "任何能自己移动的机器。",
          correct: false,
          explanation: "移动不等于智能。",
        },
        {
          label: "只执行固定规则的机器。",
          correct: false,
          explanation: "那属于自动化。",
        },
      ],
    },
    riceAiTitle: "3. 电饭煲是 AI 吗？",
    riceAiEyebrow: "判断",
    riceAiConceptTitle: "概念卡片",
    riceAiConceptLines: [
      "物理开关只是自动化，不会学习。",
      "加入学习与适应后才更像 AI。",
      "智能控制是关键差别。",
    ],
    riceAiParas: [
      "电饭煲能自动停止加热，但它依靠物理开关，而不是计算与学习。",
      "如果加入能学习的控制系统，能根据经验和米、水量调整加热，它就开始具备 AI 特征。",
    ],
    riceDemo: {
      title: "升级电饭煲",
      goal: "选择升级功能，观察它是否更像 AI。",
      upgrades: [
        {
          key: "learn",
          label: "从过去的烹饪中学习",
          effect: "学习让电饭煲不断改进。",
        },
        {
          key: "adapt",
          label: "根据米种和水量调整",
          effect: "能适应不同情况更像 AI。",
        },
        {
          key: "adjust",
          label: "自动调整火力与时间",
          effect: "自动调整超越了简单自动化。",
        },
      ],
    },
    riceAiSteps: ["选择一项或多项升级。", "观察结果标签变化。", "判断哪一项最关键。"],
    riceAiCheckpoint: {
      prompt: "基础电饭煲为什么不算 AI？",
      options: [
        {
          label: "它依靠物理开关，没有学习与计算。",
          correct: true,
          explanation: "只有固定物理机制。",
        },
        {
          label: "它体积太小。",
          correct: false,
          explanation: "大小不是关键。",
        },
        {
          label: "它煮饭太快。",
          correct: false,
          explanation: "速度不是理由。",
        },
      ],
    },
    foodTitle: "思考食粮",
    foodEyebrow: "观察身边",
    foodPromptTitle: "想一想",
    foodQuestions: ["你身边哪些机器使用了人工智能？", "哪些机器看起来很强大，但其实没有 AI？"],
    foodCheckpoint: {
      prompt: "哪一种更可能使用 AI？",
      options: [
        {
          label: "根据你的喜好推荐音乐的应用。",
          correct: true,
          explanation: "个性化推荐常使用 AI。",
        },
        {
          label: "按下按钮就开灯的开关。",
          correct: false,
          explanation: "这是简单机械控制。",
        },
        {
          label: "把水烧到 100°C 的水壶。",
          correct: false,
          explanation: "这是物理过程。",
        },
      ],
    },
    historyTitle: "历史角",
    historyEyebrow: "居里夫妇",
    historyCardTitle: "皮埃尔与玛丽·居里",
    historyParas: [
      "皮埃尔·居里是法国物理学家，他的妻子玛丽·居里也是著名科学家，被称为居里夫人。",
      "1903 年，居里夫妇与贝克勒尔因放射性研究获得诺贝尔物理学奖，这是首次有女性获奖，也是首对共同获奖的夫妻。",
      "1906 年皮埃尔去世后，玛丽继续研究，发现镭与钋。1911 年她获得诺贝尔化学奖。",
    ],
    summaryTitle: "小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "电饭煲是自动化装置，不是 AI。",
      "AI 以计算机模拟人类智能行为为目标。",
      "学习与适应是 AI 的重要特征。",
    ],
  },
};
