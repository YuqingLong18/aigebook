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

export function PrimaryLesson2_4({ lang }: LessonProps) {
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
    { id: "early", label: t.earlyTitle },
    { id: "modern", label: t.modernTitle },
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

        <SectionBlock id="early" title={t.earlyTitle} eyebrow={t.earlyEyebrow}>
          <InfoCard title={t.earlyConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.earlyConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.earlyParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <div className="grid gap-3 md:grid-cols-2">
            {t.earlyFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <VacuumTimelineDemo
            lang={lang}
            title={t.earlyDemo.title}
            goal={t.earlyDemo.goal}
            resetLabel={ui.reset}
            models={t.earlyDemo.models}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.earlySteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.earlyCheckpoint.prompt}
            options={t.earlyCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="modern" title={t.modernTitle} eyebrow={t.modernEyebrow}>
          <InfoCard title={t.modernConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.modernConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.modernParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <div className="grid gap-3 md:grid-cols-3">
            {t.modernFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <MappingVisionDemo
            lang={lang}
            title={t.modernDemo.title}
            goal={t.modernDemo.goal}
            resetLabel={ui.reset}
            stages={t.modernDemo.stages}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.modernSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.modernCheckpoint.prompt}
            options={t.modernCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="food" title={t.foodTitle} eyebrow={t.foodEyebrow}>
          <InfoCard title={t.foodConceptTitle}>
            {t.foodParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <ImaginationPracticalDemo
            lang={lang}
            title={t.foodDemo.title}
            goal={t.foodDemo.goal}
            resetLabel={ui.reset}
            choices={t.foodDemo.choices}
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

        <SectionBlock id="history" title={t.historyTitle} eyebrow={t.historyEyebrow}>
          <InfoCard title={t.historyCardTitle}>
            <p className="text-sm text-slate-700">{t.historyText}</p>
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

type VacuumModel = {
  key: string;
  label: string;
  outcome: string;
};

function VacuumTimelineDemo({
  lang,
  title,
  goal,
  resetLabel,
  models,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  models: VacuumModel[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(models[0]?.key ?? "");
  const current = models.find((item) => item.key === active) ?? models[0];

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
          onClick={() => setActive(models[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {models.map((model) => (
          <button
            key={model.key}
            type="button"
            onClick={() => setActive(model.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              model.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {model.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "特点" : "Key Traits"}
          </p>
          <p className="mt-1 text-sm text-slate-700">{current.outcome}</p>
        </div>
      )}
    </div>
  );
}

type MappingStage = {
  key: string;
  label: string;
  outcome: string;
  efficiency: number;
};

function MappingVisionDemo({
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
  stages: MappingStage[];
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
                ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {stage.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
            <span>{isZh ? "清扫效率" : "Cleaning Efficiency"}</span>
            <span>{current.efficiency}%</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-white">
            <div className="h-full rounded-full bg-emerald-500" style={{ width: `${current.efficiency}%` }} />
          </div>
          <p className="mt-2 text-sm text-slate-700">{current.outcome}</p>
        </div>
      )}
    </div>
  );
}

type BalanceChoice = {
  key: string;
  label: string;
  outcome: string;
  balanced: boolean;
};

function ImaginationPracticalDemo({
  lang,
  title,
  goal,
  resetLabel,
  choices,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  choices: BalanceChoice[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(choices[0]?.key ?? "");
  const current = choices.find((choice) => choice.key === active) ?? choices[0];

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
          onClick={() => setActive(choices[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        {choices.map((choice) => (
          <button
            key={choice.key}
            type="button"
            onClick={() => setActive(choice.key)}
            className={[
              "rounded-xl border px-3 py-2 text-left text-xs font-semibold transition",
              choice.key === active
                ? choice.balanced
                  ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                  : "border-rose-500 bg-rose-50 text-rose-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {choice.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "启发" : "Lesson"}
          </p>
          <p className="mt-1 text-sm text-slate-700">{current.outcome}</p>
        </div>
      )}
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand the development of robot vacuums and how they are becoming more intelligent.",
      "Learn about the AI technologies used in the evolution of robot vacuums.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "Robot vacuums can clean while no one is home. Let’s see how they evolved and how AI made them smarter.",
    earlyTitle: "1. Early Robot Vacuums",
    earlyEyebrow: "First attempts",
    earlyConceptTitle: "Concept Card",
    earlyConceptLines: [
      "Trilobite used ultrasonic detection and was expensive.",
      "Roomba simplified sensors and lowered costs.",
      "Random collision cleaned rooms but lacked direction.",
    ],
    earlyParas: [
      "Electrolux released the Trilobite in 1996 (Figure 2-13). It used ultrasonic detection like bats and could build a basic map.",
      "Its algorithms were complex, it moved slowly, and it still bumped into obstacles. It was also too thick for many spaces.",
      "The Trilobite cost about $1600, which was too expensive for most families.",
      "In 2002, iRobot launched Roomba (Figure 2-14). It used random collision, moved in spirals, turned after hits, and stopped at stairs. It cost about $200 and soon sold millions.",
    ],
    earlyFigures: [
      { label: "Figure 2-13", caption: "Trilobite robot vacuum.", placeholder: "Illustration placeholder" },
      { label: "Figure 2-14", caption: "Roomba robot vacuum.", placeholder: "Illustration placeholder" },
    ],
    earlyDemo: {
      title: "Early Models",
      goal: "Compare the first robot vacuums.",
      models: [
        {
          key: "trilobite",
          label: "Trilobite (1996)",
          outcome: "Ultrasonic sensors, basic mapping, very expensive.",
        },
        {
          key: "roomba",
          label: "Roomba (2002)",
          outcome: "Simpler sensors, random movement, affordable price.",
        },
      ],
    },
    earlySteps: ["Pick a model.", "Read its strengths and limits.", "Compare price and intelligence."],
    earlyCheckpoint: {
      prompt: "What was a drawback of Roomba’s random collision method?",
      options: [
        {
          label: "It had no real sense of direction.",
          correct: true,
          explanation: "Random movement can be inefficient.",
        },
        {
          label: "It never stopped at stairs.",
          correct: false,
          explanation: "It could stop at stairs.",
        },
        {
          label: "It required expensive lasers.",
          correct: false,
          explanation: "Random collision did not need lasers.",
        },
      ],
    },
    modernTitle: "2. Modern Robot Vacuums",
    modernEyebrow: "Mapping and vision",
    modernConceptTitle: "Concept Card",
    modernConceptLines: [
      "Random movement is inefficient in complex rooms.",
      "Laser mapping lets robots plan routes.",
      "Camera vision improves recognition and cleaning.",
    ],
    modernParas: [
      "Random collision made it hard to clean multiple rooms efficiently (Figure 2-15).",
      "Neato XV-11 (2010) used a laser rangefinder to map rooms and plan paths (Figure 2-16). Similar mapping is used in self-driving cars and drones.",
      "Roomba 980 (2015) used a camera for visual positioning, object recognition, and smarter cleaning (Figure 2-17). AI advances in segmentation and tracking made this possible.",
    ],
    modernFigures: [
      { label: "Figure 2-15", caption: "Random collision method.", placeholder: "Illustration placeholder" },
      { label: "Figure 2-16", caption: "Neato XV-11 robot vacuum with laser rangefinder.", placeholder: "Illustration placeholder" },
      { label: "Figure 2-17", caption: "Roomba 980 robot vacuum.", placeholder: "Illustration placeholder" },
    ],
    modernDemo: {
      title: "Mapping Upgrades",
      goal: "See how navigation improves cleaning efficiency.",
      stages: [
        {
          key: "random",
          label: "Random",
          outcome: "Moves without direction and repeats areas.",
          efficiency: 35,
        },
        {
          key: "laser",
          label: "Laser map",
          outcome: "Builds a map and plans a cleaner path.",
          efficiency: 70,
        },
        {
          key: "camera",
          label: "Camera vision",
          outcome: "Recognizes objects and cleans more precisely.",
          efficiency: 85,
        },
      ],
    },
    modernSteps: [
      "Choose a navigation method.",
      "Compare cleaning efficiency.",
      "Explain why mapping matters.",
    ],
    modernCheckpoint: {
      prompt: "Why are camera-based robot vacuums smarter?",
      options: [
        {
          label: "They can recognize objects and obstacles.",
          correct: true,
          explanation: "Camera data provides rich information.",
        },
        {
          label: "They only move randomly.",
          correct: false,
          explanation: "Random movement is older technology.",
        },
        {
          label: "They remove the need for any sensors.",
          correct: false,
          explanation: "They still rely on sensors.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Imagination and practicality",
    foodConceptTitle: "Concept Card",
    foodParas: [
      "iRobot was founded by MIT professors and students in 1990 and built many robots like moon explorers and mine-clearing machines, but they did not earn money.",
      "When Trilobite appeared, they saw the idea was great but too expensive for families.",
      "Roomba succeeded by simplifying hardware and reducing cost.",
      "Imagination and practicality together lead to real impact.",
    ],
    foodDemo: {
      title: "Balance the Idea",
      goal: "See how imagination and practicality work together.",
      choices: [
        {
          key: "wild",
          label: "Only imagination",
          outcome: "Great ideas but hard to use or afford.",
          balanced: false,
        },
        {
          key: "practical",
          label: "Only practicality",
          outcome: "Safe but may lack innovation.",
          balanced: false,
        },
        {
          key: "balance",
          label: "Both together",
          outcome: "Creative ideas that solve real problems.",
          balanced: true,
        },
      ],
    },
    foodSteps: ["Choose a design mindset.", "Read the outcome.", "Explain why balance matters."],
    foodCheckpoint: {
      prompt: "What lesson did iRobot learn from Trilobite?",
      options: [
        {
          label: "A useful product must be affordable and practical.",
          correct: true,
          explanation: "Roomba succeeded by lowering cost.",
        },
        {
          label: "Only expensive robots are good.",
          correct: false,
          explanation: "High cost limited Trilobite’s adoption.",
        },
        {
          label: "Random movement is always the best.",
          correct: false,
          explanation: "Random movement is inefficient.",
        },
      ],
    },
    historyTitle: "History Corner",
    historyEyebrow: "Laser basics",
    historyCardTitle: "What Is a Laser?",
    historyText:
      "Lasers are focused, single-color light with high directionality. A laser rangefinder sends beams and measures reflections to map the environment.",
    summaryTitle: "Summary",
    summaryEyebrow: "Key Takeaways",
    summaryPoints: [
      "Robot vacuums evolved from ultrasonic sensing to lasers and cameras.",
      "Mapping and vision make cleaning more efficient.",
      "Practical design plus imagination drives success.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解扫地机器人发展的过程与智能化趋势。",
      "了解扫地机器人进化中的 AI 技术。",
    ],
    introTitle: "故事开头",
    introEyebrow: "课程导入",
    introText: "扫地机器人能在家里自动清洁，让我们看看它如何变得更聪明。",
    earlyTitle: "1. 早期扫地机器人",
    earlyEyebrow: "早期探索",
    earlyConceptTitle: "概念卡片",
    earlyConceptLines: [
      "Trilobite 使用超声波感知但价格高。",
      "Roomba 简化传感器降低成本。",
      "随机碰撞方式缺乏方向感。",
    ],
    earlyParas: [
      "1996 年 Electrolux 推出 Trilobite（图 2-13），使用类似蝙蝠的超声波探测并能建立简单地图。",
      "但算法复杂、反应慢、仍会碰撞，机身也较厚。",
      "Trilobite 价格约 1600 美元，普通家庭难以承受。",
      "2002 年 iRobot 推出 Roomba（图 2-14），采用随机碰撞、螺旋行走、碰撞转向并能识别楼梯，售价约 200 美元，很快售出百万台。",
    ],
    earlyFigures: [
      { label: "图 2-13", caption: "Trilobite 扫地机器人。", placeholder: "插图占位" },
      { label: "图 2-14", caption: "Roomba 扫地机器人。", placeholder: "插图占位" },
    ],
    earlyDemo: {
      title: "早期机型对比",
      goal: "比较早期扫地机器人的特点。",
      models: [
        {
          key: "trilobite",
          label: "Trilobite（1996）",
          outcome: "超声波感知与基础建图，价格昂贵。",
        },
        {
          key: "roomba",
          label: "Roomba（2002）",
          outcome: "简化传感器，随机移动，价格低。",
        },
      ],
    },
    earlySteps: ["选择一个机型。", "阅读其优缺点。", "比较价格与智能程度。"],
    earlyCheckpoint: {
      prompt: "Roomba 随机碰撞方式的缺点是什么？",
      options: [
        {
          label: "缺乏方向感，效率低。",
          correct: true,
          explanation: "随机移动容易重复清扫。",
        },
        {
          label: "无法识别楼梯。",
          correct: false,
          explanation: "它能检测楼梯停止。",
        },
        {
          label: "必须使用昂贵激光。",
          correct: false,
          explanation: "随机方式不需要激光。",
        },
      ],
    },
    modernTitle: "2. 现代扫地机器人",
    modernEyebrow: "建图与视觉",
    modernConceptTitle: "概念卡片",
    modernConceptLines: [
      "随机移动在复杂房间效率低。",
      "激光建图可规划路径。",
      "摄像头视觉识别更精准。",
    ],
    modernParas: [
      "随机碰撞在多房间环境中效率不高（图 2-15）。",
      "2010 年 Neato XV-11 通过激光扫描建图并规划路线（图 2-16），类似技术也用于自动驾驶和无人机。",
      "2015 年 Roomba 980 采用摄像头定位，能识别物体并更智能清洁（图 2-17），这得益于分割与跟踪等 AI 进步。",
    ],
    modernFigures: [
      { label: "图 2-15", caption: "随机碰撞方式。", placeholder: "插图占位" },
      { label: "图 2-16", caption: "Neato XV-11 激光测距扫地机器人。", placeholder: "插图占位" },
      { label: "图 2-17", caption: "Roomba 980 扫地机器人。", placeholder: "插图占位" },
    ],
    modernDemo: {
      title: "导航方式升级",
      goal: "观察导航方式对效率的影响。",
      stages: [
        {
          key: "random",
          label: "随机",
          outcome: "缺乏路线规划，重复清扫。",
          efficiency: 35,
        },
        {
          key: "laser",
          label: "激光建图",
          outcome: "建立地图，规划路线更高效。",
          efficiency: 70,
        },
        {
          key: "camera",
          label: "视觉定位",
          outcome: "识别障碍与材质，清洁更精准。",
          efficiency: 85,
        },
      ],
    },
    modernSteps: ["选择导航方式。", "比较清扫效率。", "说明建图的重要性。"],
    modernCheckpoint: {
      prompt: "为什么摄像头扫地机器人更聪明？",
      options: [
        {
          label: "能识别物体与障碍。",
          correct: true,
          explanation: "视觉信息更丰富。",
        },
        {
          label: "只能随机移动。",
          correct: false,
          explanation: "随机方式较旧。",
        },
        {
          label: "不需要任何传感器。",
          correct: false,
          explanation: "仍需要传感器。",
        },
      ],
    },
    foodTitle: "思考食粮",
    foodEyebrow: "想象与务实",
    foodConceptTitle: "概念卡片",
    foodParas: [
      "iRobot 由 MIT 教授与学生在 1990 年创立，做过月球探测、纳米机器人等，但并未盈利。",
      "看到 Trilobite 后，他们意识到产品太贵不易普及。",
      "Roomba 通过简化硬件降低成本，才进入家庭。",
      "想象力与务实结合才能成功。",
    ],
    foodDemo: {
      title: "平衡创意与实用",
      goal: "思考如何把想象变成可用产品。",
      choices: [
        {
          key: "wild",
          label: "只靠想象",
          outcome: "点子很好，但难以落地。",
          balanced: false,
        },
        {
          key: "practical",
          label: "只讲实用",
          outcome: "稳妥但缺少创新。",
          balanced: false,
        },
        {
          key: "balance",
          label: "两者兼顾",
          outcome: "创意与实用结合，解决真实问题。",
          balanced: true,
        },
      ],
    },
    foodSteps: ["选择一种设计思路。", "阅读结果提示。", "总结平衡的重要性。"],
    foodCheckpoint: {
      prompt: "iRobot 从 Trilobite 学到了什么？",
      options: [
        {
          label: "产品要兼顾价格与实用性。",
          correct: true,
          explanation: "Roomba 成功在于降低成本。",
        },
        {
          label: "越贵越好。",
          correct: false,
          explanation: "高价阻碍普及。",
        },
        {
          label: "随机移动是最优方案。",
          correct: false,
          explanation: "随机方式效率低。",
        },
      ],
    },
    historyTitle: "历史角",
    historyEyebrow: "激光基础",
    historyCardTitle: "什么是激光？",
    historyText: "激光是高度定向的单色光，可通过反射测距并构建环境地图。",
    summaryTitle: "小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "扫地机器人从超声波发展到激光与视觉。",
      "建图与识别能力提升清洁效率。",
      "想象力与实用性同样重要。",
    ],
  },
};
