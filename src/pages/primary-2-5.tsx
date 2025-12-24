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

export function PrimaryLesson2_5({ lang }: LessonProps) {
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
    { id: "birth", label: t.birthTitle },
    { id: "modern", label: t.modernTitle },
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

        <SectionBlock id="birth" title={t.birthTitle} eyebrow={t.birthEyebrow}>
          <InfoCard title={t.birthConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.birthConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.birthParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <div className="grid gap-3 md:grid-cols-3">
            {t.birthFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <AutoDriveTimelineDemo
            lang={lang}
            title={t.birthDemo.title}
            goal={t.birthDemo.goal}
            resetLabel={ui.reset}
            stages={t.birthDemo.stages}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.birthSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.birthCheckpoint.prompt}
            options={t.birthCheckpoint.options}
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
          <div className="grid gap-3 md:grid-cols-2">
            {t.modernFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <CoreTechDemo
            lang={lang}
            title={t.modernDemo.title}
            goal={t.modernDemo.goal}
            resetLabel={ui.reset}
            tech={t.modernDemo.tech}
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
          <RiskScenarioDemo
            lang={lang}
            title={t.foodDemo.title}
            goal={t.foodDemo.goal}
            resetLabel={ui.reset}
            risks={t.foodDemo.risks}
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

type AutoStage = {
  key: string;
  label: string;
  detail: string;
};

function AutoDriveTimelineDemo({
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
  stages: AutoStage[];
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
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "里程碑" : "Milestone"}
          </p>
          <p className="mt-1 text-sm text-slate-700">{current.detail}</p>
        </div>
      )}
    </div>
  );
}

type CoreTech = {
  key: string;
  label: string;
  outcome: string;
};

function CoreTechDemo({
  lang,
  title,
  goal,
  resetLabel,
  tech,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  tech: CoreTech[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(tech[0]?.key ?? "");
  const current = tech.find((item) => item.key === active) ?? tech[0];

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
          onClick={() => setActive(tech[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        {tech.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => setActive(item.key)}
            className={[
              "rounded-xl border px-3 py-2 text-left text-xs font-semibold transition",
              item.key === active
                ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {item.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "作用" : "Role"}
          </p>
          <p className="mt-1 text-sm text-slate-700">{current.outcome}</p>
        </div>
      )}
    </div>
  );
}

type RiskScenario = {
  key: string;
  label: string;
  outcome: string;
};

function RiskScenarioDemo({
  lang,
  title,
  goal,
  resetLabel,
  risks,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  risks: RiskScenario[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(risks[0]?.key ?? "");
  const current = risks.find((risk) => risk.key === active) ?? risks[0];

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
          onClick={() => setActive(risks[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {risks.map((risk) => (
          <button
            key={risk.key}
            type="button"
            onClick={() => setActive(risk.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              risk.key === active
                ? "border-rose-500 bg-rose-50 text-rose-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {risk.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "风险说明" : "Risk Note"}
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
      "Understand the development of autonomous driving technology and what it can do today.",
      "Learn about the core technologies behind autonomous driving.",
      "Understand the risks of autonomous driving and how they might be avoided.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "Self-driving ideas started with the first cars, but only recently became practical. Let’s trace the twists and turns of this technology.",
    birthTitle: "1. The Birth of Autonomous Driving",
    birthEyebrow: "Early milestones",
    birthConceptTitle: "Concept Card",
    birthConceptLines: [
      "Early cars inspired ideas of driving without humans.",
      "Radio control and road circuits guided cars.",
      "These experiments laid the foundation for autonomy.",
    ],
    birthParas: [
      "Karl Benz invented the first car in 1886 (Figure 2-18), and Ford’s Model T brought cars to families (Figure 2-19).",
      "In 1925, a radio-controlled car demo in New York showed remote guidance ideas.",
      "In 1939, Norman Bel Geddes proposed roads with circuits to guide cars. A 1957 test road used signal cables, and a 1960 Citroën DS19 used magnetic cables (Figure 2-20).",
    ],
    birthFigures: [
      { label: "Figure 2-18", caption: "Karl Benz and the first car he invented.", placeholder: "Illustration placeholder" },
      { label: "Figure 2-19", caption: "The Ford Model T assembly line.", placeholder: "Illustration placeholder" },
      { label: "Figure 2-20", caption: "A 1960 Citroën DS19 guided by magnetic cables.", placeholder: "Illustration placeholder" },
    ],
    birthDemo: {
      title: "Autonomous Driving Timeline",
      goal: "Explore early experiments in self-driving.",
      stages: [
        {
          key: "radio",
          label: "1925 radio control",
          detail: "A radio-guided car demo showed remote control ideas.",
        },
        {
          key: "circuits",
          label: "1939 road circuits",
          detail: "Proposed roads with embedded circuits to guide cars.",
        },
        {
          key: "testroad",
          label: "1957 test road",
          detail: "Signal cables guided a car along a test lane.",
        },
      ],
    },
    birthSteps: ["Choose a milestone.", "Read the guiding method.", "Explain how it inspired later tech."],
    birthCheckpoint: {
      prompt: "What guided early autonomous cars on test roads?",
      options: [
        {
          label: "Circuits or cables embedded in the road.",
          correct: true,
          explanation: "Signals from the road guided the cars.",
        },
        {
          label: "Satellite maps and smartphones.",
          correct: false,
          explanation: "Those came much later.",
        },
        {
          label: "The cars had no guidance at all.",
          correct: false,
          explanation: "They used signals or cables.",
        },
      ],
    },
    modernTitle: "2. Modern Autonomous Driving Technology",
    modernEyebrow: "Sensors, AI, maps",
    modernConceptTitle: "Concept Card",
    modernConceptLines: [
      "Modern autonomy uses sensors like cameras and LiDAR.",
      "AI algorithms make driving decisions.",
      "High-definition maps and positioning guide routes.",
    ],
    modernParas: [
      "Since the 1980s, sensors like cameras and radar became central. A German project drove at 95.9 km/h using cameras, and DARPA’s ALV reached 31 km/h.",
      "Carnegie Mellon’s Navlab completed a 5,000 km trip with 98.2% autonomous driving.",
      "Stanford’s Stanley won the 2005 DARPA Grand Challenge (Figure 2-21), a major milestone.",
      "Today, robo-taxis and driverless trucks are appearing in real life. In 2024, a self-driving taxi without a steering wheel was announced, and RoboTaxi services exist in some cities (Figure 2-22).",
    ],
    modernFigures: [
      { label: "Figure 2-21", caption: "The self-driving car Stanley.", placeholder: "Illustration placeholder" },
      { label: "Figure 2-22", caption: "The RoboTaxi self-driving taxi.", placeholder: "Illustration placeholder" },
    ],
    modernDemo: {
      title: "Core Technology Stack",
      goal: "Learn the three key technologies of autonomous driving.",
      tech: [
        {
          key: "sensors",
          label: "Sensors",
          outcome: "The car’s eyes and ears detect roads, cars, and pedestrians.",
        },
        {
          key: "ai",
          label: "AI algorithms",
          outcome: "The brain that decides when to speed up, slow down, or turn.",
        },
        {
          key: "maps",
          label: "HD maps",
          outcome: "Accurate positioning tells the car where it is and where to go.",
        },
      ],
    },
    modernSteps: ["Select a technology.", "Read its role.", "Explain how they work together."],
    modernCheckpoint: {
      prompt: "Which part is the car's \"brain\" in autonomous driving?",
      options: [
        {
          label: "AI algorithms that make driving decisions.",
          correct: true,
          explanation: "Algorithms process data and decide actions.",
        },
        {
          label: "The car’s tires.",
          correct: false,
          explanation: "Tires are not decision-making.",
        },
        {
          label: "The paint color.",
          correct: false,
          explanation: "Color is not related to decisions.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Risks and responsibility",
    foodConceptTitle: "Concept Card",
    foodParas: [
      "Autonomous driving faces technical risks like bad weather and model errors.",
      "Legal responsibility is unclear when no human is driving.",
      "A driverless car without headlights once raised questions about who should be fined.",
      "Safety rules and laws must keep improving.",
    ],
    foodDemo: {
      title: "Risk Scenarios",
      goal: "Review the main risks of autonomous driving.",
      risks: [
        {
          key: "technical",
          label: "Technical risk",
          outcome: "Sensors may fail in poor weather or low light.",
        },
        {
          key: "legal",
          label: "Legal risk",
          outcome: "It can be unclear who is responsible after an accident.",
        },
        {
          key: "safety",
          label: "Safety response",
          outcome: "Systems must be tested and improved to reduce mistakes.",
        },
      ],
    },
    foodSteps: ["Choose a risk type.", "Read the description.", "Discuss how risks can be reduced."],
    foodCheckpoint: {
      prompt: "Why is legal responsibility difficult in autonomous driving?",
      options: [
        {
          label: "Because no human is driving, responsibility is unclear.",
          correct: true,
          explanation: "It is hard to assign blame.",
        },
        {
          label: "Because cars do not need to follow laws.",
          correct: false,
          explanation: "Cars must still follow laws.",
        },
        {
          label: "Because maps are too colorful.",
          correct: false,
          explanation: "Map color is unrelated.",
        },
      ],
    },
    summaryTitle: "Summary",
    summaryEyebrow: "Key Takeaways",
    summaryPoints: [
      "Autonomous driving evolved from early guidance ideas to modern AI systems.",
      "Sensors, AI algorithms, and HD maps form the core tech stack.",
      "Safety and legal questions must be addressed carefully.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解自动驾驶的发展与当前能力。",
      "了解自动驾驶的核心技术。",
      "理解自动驾驶的风险及应对方式。",
    ],
    introTitle: "故事开头",
    introEyebrow: "课程导入",
    introText: "自动驾驶的想法很早就出现，但直到近十年才逐渐成熟。",
    birthTitle: "1. 自动驾驶的诞生",
    birthEyebrow: "早期里程碑",
    birthConceptTitle: "概念卡片",
    birthConceptLines: [
      "汽车出现后，人们就想让它自己驾驶。",
      "无线电控制与道路电路引导是早期尝试。",
      "这些实验奠定了自动驾驶基础。",
    ],
    birthParas: [
      "1886 年卡尔·本茨发明汽车（图 2-18），1908 年福特 Model T 让汽车走进家庭（图 2-19）。",
      "1925 年无线电遥控汽车在纽约演示，展示远程控制思路。",
      "1939 年提出在道路中嵌入电路引导车辆，1957 年测试道路使用信号电缆，1960 年雪铁龙 DS19 使用磁缆（图 2-20）。",
    ],
    birthFigures: [
      { label: "图 2-18", caption: "卡尔·本茨和他发明的汽车。", placeholder: "插图占位" },
      { label: "图 2-19", caption: "福特 Model T 流水线。", placeholder: "插图占位" },
      { label: "图 2-20", caption: "磁缆引导的 1960 年雪铁龙 DS19。", placeholder: "插图占位" },
    ],
    birthDemo: {
      title: "自动驾驶时间线",
      goal: "了解早期自动驾驶的尝试。",
      stages: [
        {
          key: "radio",
          label: "1925 无线电控制",
          detail: "遥控汽车展示了远程控制思路。",
        },
        {
          key: "circuits",
          label: "1939 道路电路",
          detail: "设想在道路中嵌入电路引导车辆。",
        },
        {
          key: "testroad",
          label: "1957 测试道路",
          detail: "电缆信号引导车辆行驶。",
        },
      ],
    },
    birthSteps: ["选择一个里程碑。", "阅读引导方式。", "说明它的启发。"],
    birthCheckpoint: {
      prompt: "早期自动驾驶车辆如何被引导？",
      options: [
        {
          label: "道路中嵌入电路或电缆。",
          correct: true,
          explanation: "信号从道路传给车辆。",
        },
        {
          label: "手机导航实时控制。",
          correct: false,
          explanation: "当时没有智能手机。",
        },
        {
          label: "完全没有引导。",
          correct: false,
          explanation: "仍需要引导方式。",
        },
      ],
    },
    modernTitle: "2. 现代自动驾驶技术",
    modernEyebrow: "传感器、AI 与地图",
    modernConceptTitle: "概念卡片",
    modernConceptLines: [
      "传感器采集道路与周边信息。",
      "AI 算法做出驾驶决策。",
      "高精地图提供定位与路线。",
    ],
    modernParas: [
      "80 年代以来，摄像头、雷达等传感器成为主流。德国项目曾以 95.9 km/h 行驶，DARPA 的 ALV 项目达到 31 km/h。",
      "卡内基梅隆 Navlab 完成 5000 公里旅程，98.2% 自动驾驶。",
      "2005 年斯坦福 Stanley 赢得挑战赛（图 2-21）。",
      "如今出现 RoboTaxi 与无人卡车等应用。2024 年出现无方向盘的自动驾驶出租车，部分城市已有 RoboTaxi 服务（图 2-22）。",
    ],
    modernFigures: [
      { label: "图 2-21", caption: "自动驾驶汽车 Stanley。", placeholder: "插图占位" },
      { label: "图 2-22", caption: "RoboTaxi 自动驾驶出租车。", placeholder: "插图占位" },
    ],
    modernDemo: {
      title: "核心技术组合",
      goal: "认识自动驾驶的三大核心技术。",
      tech: [
        {
          key: "sensors",
          label: "高精传感器",
          outcome: "像眼睛和耳朵一样感知环境。",
        },
        {
          key: "ai",
          label: "AI 算法",
          outcome: "像大脑一样做出驾驶决策。",
        },
        {
          key: "maps",
          label: "高精地图",
          outcome: "提供精确定位与导航。",
        },
      ],
    },
    modernSteps: ["选择一种核心技术。", "阅读它的作用。", "说明三者如何协作。"],
    modernCheckpoint: {
      prompt: "自动驾驶的“脑”指的是什么？",
      options: [
        {
          label: "处理数据并做决策的 AI 算法。",
          correct: true,
          explanation: "AI 负责判断与控制。",
        },
        {
          label: "轮胎。",
          correct: false,
          explanation: "轮胎不做决策。",
        },
        {
          label: "车身颜色。",
          correct: false,
          explanation: "颜色与决策无关。",
        },
      ],
    },
    foodTitle: "思考食粮",
    foodEyebrow: "风险与责任",
    foodConceptTitle: "概念卡片",
    foodParas: [
      "技术风险包括恶劣天气与模型错误。",
      "法律风险在于责任归属不明确。",
      "曾有无人车夜间不开车灯引发“谁来罚款”的争议。",
      "安全规则与法规需要不断完善。",
    ],
    foodDemo: {
      title: "风险场景",
      goal: "了解自动驾驶的主要风险。",
      risks: [
        {
          key: "technical",
          label: "技术风险",
          outcome: "恶劣天气或光线会影响传感器。",
        },
        {
          key: "legal",
          label: "法律风险",
          outcome: "无人驾驶时责任难界定。",
        },
        {
          key: "safety",
          label: "安全应对",
          outcome: "需要严格测试与持续改进。",
        },
      ],
    },
    foodSteps: ["选择一种风险。", "阅读说明。", "讨论如何降低风险。"],
    foodCheckpoint: {
      prompt: "自动驾驶的法律责任为何复杂？",
      options: [
        {
          label: "因为无人驾驶时责任难以划分。",
          correct: true,
          explanation: "责任归属需要法律明确。",
        },
        {
          label: "因为汽车不需要法律。",
          correct: false,
          explanation: "汽车必须遵守法律。",
        },
        {
          label: "因为地图颜色太多。",
          correct: false,
          explanation: "地图颜色无关。",
        },
      ],
    },
    summaryTitle: "小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "自动驾驶从早期引导系统发展到现代 AI。",
      "核心技术包括传感器、算法和地图。",
      "风险与责任需要持续关注。",
    ],
  },
};
