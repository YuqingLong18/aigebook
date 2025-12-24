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

export function PrimaryLesson3_7({ lang }: LessonProps) {
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
    { id: "ancient", label: t.ancientTitle },
    { id: "modern", label: t.modernTitle },
    { id: "rise", label: t.riseTitle },
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

        <SectionBlock id="ancient" title={t.ancientTitle} eyebrow={t.ancientEyebrow}>
          <InfoCard title={t.ancientConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.ancientConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.ancientParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <WeatherSayingDemo
            lang={lang}
            title={t.ancientDemo.title}
            goal={t.ancientDemo.goal}
            resetLabel={ui.reset}
            sayings={t.ancientDemo.sayings}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.ancientSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.ancientCheckpoint.prompt}
            options={t.ancientCheckpoint.options}
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
          <FigureCard
            label={t.modernFigure.label}
            caption={t.modernFigure.caption}
            placeholder={t.modernFigure.placeholder}
          />
          <ObservationDemo
            lang={lang}
            title={t.modernDemo.title}
            goal={t.modernDemo.goal}
            resetLabel={ui.reset}
            tools={t.modernDemo.tools}
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

        <SectionBlock id="rise" title={t.riseTitle} eyebrow={t.riseEyebrow}>
          <InfoCard title={t.riseConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.riseConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.riseParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.riseFigure.label}
            caption={t.riseFigure.caption}
            placeholder={t.riseFigure.placeholder}
          />
          <AIForecastDemo
            lang={lang}
            title={t.riseDemo.title}
            goal={t.riseDemo.goal}
            resetLabel={ui.reset}
            levels={t.riseDemo.levels}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.riseSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.riseCheckpoint.prompt}
            options={t.riseCheckpoint.options}
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
          <DataPartnerDemo
            lang={lang}
            title={t.foodDemo.title}
            goal={t.foodDemo.goal}
            resetLabel={ui.reset}
            options={t.foodDemo.options}
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

type WeatherSaying = {
  key: string;
  label: string;
  meaning: string;
};

function WeatherSayingDemo({
  lang,
  title,
  goal,
  resetLabel,
  sayings,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  sayings: WeatherSaying[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(sayings[0]?.key ?? "");
  const current = sayings.find((saying) => saying.key === active) ?? sayings[0];

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
          onClick={() => setActive(sayings[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {sayings.map((saying) => (
          <button
            key={saying.key}
            type="button"
            onClick={() => setActive(saying.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              saying.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {saying.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          {current.meaning}
        </div>
      )}
    </div>
  );
}

type ObservationTool = {
  key: string;
  label: string;
  detail: string;
};

function ObservationDemo({
  lang,
  title,
  goal,
  resetLabel,
  tools,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  tools: ObservationTool[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(tools[0]?.key ?? "");
  const current = tools.find((tool) => tool.key === active) ?? tools[0];

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
          onClick={() => setActive(tools[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {tools.map((tool) => (
          <button
            key={tool.key}
            type="button"
            onClick={() => setActive(tool.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              tool.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {tool.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          {current.detail}
        </div>
      )}
    </div>
  );
}

type ForecastLevel = {
  key: string;
  label: string;
  detail: string;
};

function AIForecastDemo({
  lang,
  title,
  goal,
  resetLabel,
  levels,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  levels: ForecastLevel[];
}) {
  const isZh = lang === "zh";
  const [index, setIndex] = useState(0);
  const current = levels[index] ?? levels[0];

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
          onClick={() => setIndex(0)}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3">
        <input
          type="range"
          min={0}
          max={levels.length - 1}
          value={index}
          onChange={(event) => setIndex(Number(event.target.value))}
          className="w-full accent-brand-600"
          aria-label={isZh ? "数据规模" : "Data scale"}
        />
        <div className="mt-1 flex justify-between text-xs text-slate-500">
          {levels.map((level) => (
            <span key={level.key}>{level.label}</span>
          ))}
        </div>
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          {current.detail}
        </div>
      )}
    </div>
  );
}

type PartnerOption = {
  key: string;
  label: string;
  detail: string;
};

function DataPartnerDemo({
  lang,
  title,
  goal,
  resetLabel,
  options,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  options: PartnerOption[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(options[0]?.key ?? "");
  const current = options.find((option) => option.key === active) ?? options[0];

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
          onClick={() => setActive(options[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option.key}
            type="button"
            onClick={() => setActive(option.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              option.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {option.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          {current.detail}
        </div>
      )}
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand the development of weather forecasting and the strengths and limits of AI forecasts.",
      "Learn how AI improves on traditional methods and why data matters.",
      "Understand the importance of data for AI.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "Weather forecasting has always been important. As data grew too large for humans to process, AI became a powerful new tool.",
    ancientTitle: "1. Ancient Weather Forecasting",
    ancientEyebrow: "Experience and sayings",
    ancientConceptTitle: "Concept Card",
    ancientConceptLines: [
      "People once relied on observation and experience.",
      "Weather sayings preserved patterns across generations.",
      "Stories like the Battle of Red Cliffs show early forecasting ideas.",
    ],
    ancientParas: [
      "In the past, people used experience to predict weather. Many sayings summarized those observations.",
      "Examples include \"Sun halo, rain by night; moon halo, wind by noon\" and \"Morning glow, don't go out; evening glow, travel far.\"",
      "In Romance of the Three Kingdoms, Zhuge Liang \"borrowed\" the east wind at the Battle of Red Cliffs, a dramatic example of forecasting.",
    ],
    ancientDemo: {
      title: "Weather Saying Interpreter",
      goal: "Match a traditional saying with its meaning.",
      sayings: [
        {
          key: "halo",
          label: "Halo",
          meaning: "A sun halo suggests rain at night; a moon halo suggests wind at noon.",
        },
        {
          key: "east",
          label: "East wind",
          meaning: "After rain comes a strong east wind, it may rain again tomorrow.",
        },
        {
          key: "glow",
          label: "Glow",
          meaning: "Red morning sky warns of bad weather; red evening sky suggests fair weather.",
        },
      ],
    },
    ancientSteps: [
      "Pick a saying.",
      "Read its meaning.",
      "Explain why people remembered these sayings.",
    ],
    ancientCheckpoint: {
      prompt: "How did people forecast weather in ancient times?",
      options: [
        {
          label: "By observing nature and summarizing patterns in sayings.",
          correct: true,
          explanation: "Experience-based sayings guided predictions.",
        },
        {
          label: "By downloading apps on phones.",
          correct: false,
          explanation: "Modern tools did not exist then.",
        },
        {
          label: "By reading satellites every minute.",
          correct: false,
          explanation: "Satellites are modern tools.",
        },
      ],
    },
    modernTitle: "2. Modern Weather Observation Networks",
    modernEyebrow: "Data collection",
    modernConceptTitle: "Concept Card",
    modernConceptLines: [
      "Weather stations, radar, balloons, and satellites collect data.",
      "These tools watch the atmosphere around the clock.",
      "They create massive datasets for forecasting centers.",
    ],
    modernParas: [
      "Experience-based forecasting lacked precision, so meteorologists built modern observation networks.",
      "Ground stations, radar, upper-atmosphere systems, and satellites collect temperature, humidity, and wind data (Figure 3-20).",
    ],
    modernFigure: {
      label: "Figure 3-20",
      caption: "Modern weather observation network.",
      placeholder: "Illustration placeholder",
    },
    modernDemo: {
      title: "Observation Tool Map",
      goal: "See what each tool measures.",
      tools: [
        { key: "station", label: "Station", detail: "Measures local temperature, humidity, and wind." },
        { key: "radar", label: "Radar", detail: "Detects rainfall and storm movement." },
        { key: "balloon", label: "Balloon", detail: "Collects upper-atmosphere data." },
        { key: "satellite", label: "Satellite", detail: "Observes large-scale cloud patterns." },
      ],
    },
    modernSteps: [
      "Select a tool.",
      "Read the data it gathers.",
      "Explain why multiple tools are needed.",
    ],
    modernCheckpoint: {
      prompt: "Why are modern observation networks important?",
      options: [
        {
          label: "They collect massive data needed for accurate forecasts.",
          correct: true,
          explanation: "More data improves prediction quality.",
        },
        {
          label: "They replace the need for any data.",
          correct: false,
          explanation: "They exist to collect more data.",
        },
        {
          label: "They only measure one weather factor.",
          correct: false,
          explanation: "They measure many factors across the atmosphere.",
        },
      ],
    },
    riseTitle: "3. The Rise of AI",
    riseEyebrow: "Faster and smarter",
    riseConceptTitle: "Concept Card",
    riseConceptLines: [
      "Traditional numerical models struggled with complex weather.",
      "AI learns directly from data to make fast predictions.",
      "Pangu used 39 years of data and beat a top forecasting system.",
    ],
    riseParas: [
      "As data exploded, traditional numerical forecasting was slow and sometimes inaccurate. AI can learn relationships directly from data and predict faster.",
      "In 2023, Huawei's Pangu model used 39 years of data and outperformed the European Centre's system, especially for typhoons (Figure 3-21).",
      "The model was also about 10,000 times faster, but AI forecasts can be hard to explain because of the black box problem.",
    ],
    riseFigure: {
      label: "Figure 3-21",
      caption: "Pangu's typhoon path compared to actual and European Centre predictions.",
      placeholder: "Illustration placeholder",
    },
    riseDemo: {
      title: "Data Scale vs. Accuracy",
      goal: "See how more data can improve AI forecasts.",
      levels: [
        { key: "low", label: "Small data", detail: "Forecasts are rough and less reliable." },
        { key: "mid", label: "More data", detail: "Predictions improve as patterns become clearer." },
        { key: "high", label: "Big data", detail: "Models become faster and more accurate." },
      ],
    },
    riseSteps: [
      "Move the slider to change data scale.",
      "Read the accuracy description.",
      "Explain why AI needs large datasets.",
    ],
    riseCheckpoint: {
      prompt: "Why did AI forecasting become stronger recently?",
      options: [
        {
          label: "Because it learned from massive historical weather data.",
          correct: true,
          explanation: "Large datasets allow AI to detect complex patterns.",
        },
        {
          label: "Because it stopped using data.",
          correct: false,
          explanation: "AI depends on data for learning.",
        },
        {
          label: "Because weather became simpler.",
          correct: false,
          explanation: "Weather remains complex; AI handles complexity better.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "AI as a partner",
    foodParas: [
      "AI can process complex data that humans cannot handle alone. It is becoming a partner across many fields.",
      "No matter what industry you choose, AI may help you solve complex problems.",
    ],
    foodDemo: {
      title: "Choose Your Partner",
      goal: "Connect AI to different fields you might study.",
      options: [
        { key: "science", label: "Science", detail: "AI helps analyze experiments and big datasets." },
        { key: "city", label: "City", detail: "AI manages traffic, weather, and resources." },
        { key: "health", label: "Health", detail: "AI assists doctors and medical research." },
      ],
    },
    foodSteps: [
      "Pick a field.",
      "Describe how AI could help there.",
      "Share one skill you want to learn.",
    ],
    foodCheckpoint: {
      prompt: "Why is data so important for AI?",
      options: [
        {
          label: "More data helps AI learn complex patterns better.",
          correct: true,
          explanation: "Data is the fuel for AI learning.",
        },
        {
          label: "AI works best without data.",
          correct: false,
          explanation: "AI needs data to train models.",
        },
        {
          label: "Data is only useful for old machines.",
          correct: false,
          explanation: "Modern AI depends on data.",
        },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryEyebrow: "Lesson summary",
    summaryPoints: [
      "Ancient forecasting relied on observation and sayings.",
      "Modern tools collect huge amounts of weather data.",
      "AI learns from data to forecast faster and more accurately.",
      "Data is essential for AI, making it a powerful partner.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解天气预报的发展过程，以及 AI 预测的优势与局限。",
      "认识 AI 相比传统方法的突破，以及数据的重要性。",
      "理解数据对 AI 的意义。",
    ],
    introTitle: "故事开头",
    introEyebrow: "课程导入",
    introText:
      "天气预报一直很重要。随着数据规模迅速增长，AI 成为更强大的预测工具。",
    ancientTitle: "1. 古代天气预报",
    ancientEyebrow: "经验与谚语",
    ancientConceptTitle: "概念卡片",
    ancientConceptLines: [
      "古人依靠观察和经验判断天气。",
      "天气谚语记录了长期规律。",
      "历史故事也体现了早期预测思想。",
    ],
    ancientParas: [
      "古代人通过观察自然现象来预测天气，并总结成谚语。",
      "例如“日晕则雨，月晕则风”“朝霞不出门，晚霞行千里”。",
      "《三国演义》中诸葛亮“借东风”是戏剧化的预测例子。",
    ],
    ancientDemo: {
      title: "谚语小解释",
      goal: "看看谚语背后的天气含义。",
      sayings: [
        { key: "halo", label: "日月晕", meaning: "日晕可能夜间下雨，月晕可能中午刮风。" },
        { key: "east", label: "东风", meaning: "雨后东风大，第二天可能再下雨。" },
        { key: "glow", label: "霞光", meaning: "早霞预示坏天气，晚霞预示晴天。" },
      ],
    },
    ancientSteps: ["选择一条谚语。", "读一读它的含义。", "解释它为何被记住。"],
    ancientCheckpoint: {
      prompt: "古人如何预测天气？",
      options: [
        {
          label: "通过观察自然现象并总结规律。",
          correct: true,
          explanation: "经验与谚语帮助预测。",
        },
        {
          label: "通过手机天气应用。",
          correct: false,
          explanation: "古代没有现代设备。",
        },
        {
          label: "通过卫星实时监测。",
          correct: false,
          explanation: "卫星是现代工具。",
        },
      ],
    },
    modernTitle: "2. 现代观测网络",
    modernEyebrow: "数据采集",
    modernConceptTitle: "概念卡片",
    modernConceptLines: [
      "气象站、雷达、气球和卫星采集数据。",
      "观测工具 24 小时监测大气。",
      "这些数据进入预报中心。",
    ],
    modernParas: [
      "传统经验预测不够准确，气象学家建立了现代观测网络。",
      "地面站、雷达、高空观测系统和卫星一起采集温度、湿度、风速等数据（图 3-20）。",
    ],
    modernFigure: {
      label: "图 3-20",
      caption: "现代气象观测网络。",
      placeholder: "插图占位",
    },
    modernDemo: {
      title: "观测工具地图",
      goal: "了解不同工具采集的内容。",
      tools: [
        { key: "station", label: "气象站", detail: "测量地面温度、湿度和风。" },
        { key: "radar", label: "雷达", detail: "探测降雨和风暴移动。" },
        { key: "balloon", label: "高空气球", detail: "采集高空大气数据。" },
        { key: "satellite", label: "卫星", detail: "观测大范围云系变化。" },
      ],
    },
    modernSteps: ["选择一个工具。", "读一读它采集的数据。", "说明为何需要多种工具。"],
    modernCheckpoint: {
      prompt: "现代观测网络为什么重要？",
      options: [
        {
          label: "它能提供大量数据提高预测准确度。",
          correct: true,
          explanation: "数据越多，预测越可靠。",
        },
        {
          label: "它让人不再需要数据。",
          correct: false,
          explanation: "观测网络就是为了采集数据。",
        },
        {
          label: "它只测量一种天气要素。",
          correct: false,
          explanation: "现代工具能测多种要素。",
        },
      ],
    },
    riseTitle: "3. AI 的崛起",
    riseEyebrow: "更快更准",
    riseConceptTitle: "概念卡片",
    riseConceptLines: [
      "传统数值预报在复杂天气下会受限。",
      "AI 直接从数据学习，预测更快。",
      "盘古模型使用 39 年数据取得突破。",
    ],
    riseParas: [
      "随着数据爆炸，传统数值预报速度慢、准确率有限。AI 能直接从数据中学习规律，预测更快。",
      "2023 年华为的盘古模型使用 39 年数据，预测效果优于欧洲中心系统，尤其在台风路径上表现突出（图 3-21）。",
      "盘古模型速度快了约 1 万倍，但 AI 预测仍存在“黑箱”问题，难以解释原因。",
    ],
    riseFigure: {
      label: "图 3-21",
      caption: "盘古模型预测的台风路径与真实路径对比。",
      placeholder: "插图占位",
    },
    riseDemo: {
      title: "数据规模与准确度",
      goal: "观察数据量如何影响 AI 预测。",
      levels: [
        { key: "low", label: "数据少", detail: "预测粗略，误差较大。" },
        { key: "mid", label: "数据多", detail: "规律更清晰，预测改善。" },
        { key: "high", label: "大数据", detail: "模型更快更准。" },
      ],
    },
    riseSteps: ["拖动滑块改变数据规模。", "阅读准确度描述。", "解释数据为何重要。"],
    riseCheckpoint: {
      prompt: "AI 预测为什么最近更强？",
      options: [
        {
          label: "它从大量历史天气数据中学习。",
          correct: true,
          explanation: "数据越多，规律越清晰。",
        },
        {
          label: "它不再需要任何数据。",
          correct: false,
          explanation: "AI 依赖数据训练。",
        },
        {
          label: "因为天气变简单了。",
          correct: false,
          explanation: "天气仍然复杂。",
        },
      ],
    },
    foodTitle: "想一想",
    foodEyebrow: "AI 是伙伴",
    foodParas: [
      "AI 能处理人类难以应对的复杂数据，正在成为多个领域的伙伴。",
      "无论你将来从事什么行业，AI 都可能是你的助手。",
    ],
    foodDemo: {
      title: "选择你的伙伴",
      goal: "想一想 AI 可以帮助哪些领域。",
      options: [
        { key: "science", label: "科学", detail: "AI 帮助分析实验与大数据。" },
        { key: "city", label: "城市", detail: "AI 帮助管理交通、天气与资源。" },
        { key: "health", label: "健康", detail: "AI 支持医疗和健康研究。" },
      ],
    },
    foodSteps: ["选择一个领域。", "说明 AI 能提供的帮助。", "说出你想学的技能。"],
    foodCheckpoint: {
      prompt: "为什么数据对 AI 很重要？",
      options: [
        {
          label: "数据让 AI 更好地学习复杂规律。",
          correct: true,
          explanation: "数据是 AI 学习的燃料。",
        },
        {
          label: "AI 最好不看任何数据。",
          correct: false,
          explanation: "AI 需要数据训练。",
        },
        {
          label: "数据只对旧机器有用。",
          correct: false,
          explanation: "现代 AI 同样依赖数据。",
        },
      ],
    },
    summaryTitle: "关键要点",
    summaryEyebrow: "课程小结",
    summaryPoints: [
      "古人依靠观察和谚语预报天气。",
      "现代观测网络提供大量数据。",
      "AI 从数据中学习，预测更快更准。",
      "数据让 AI 成为重要伙伴。",
    ],
  },
};
