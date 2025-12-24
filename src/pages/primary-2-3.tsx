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

export function PrimaryLesson2_3({ lang }: LessonProps) {
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
    { id: "basic", label: t.basicTitle },
    { id: "ai", label: t.aiTitle },
    { id: "moon", label: t.moonTitle },
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

        <SectionBlock id="basic" title={t.basicTitle} eyebrow={t.basicEyebrow}>
          <InfoCard title={t.basicConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.basicConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.basicParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.basicFigure.label}
            caption={t.basicFigure.caption}
            placeholder={t.basicFigure.placeholder}
          />
          <EditingTimelineDemo
            lang={lang}
            title={t.basicDemo.title}
            goal={t.basicDemo.goal}
            resetLabel={ui.reset}
            stages={t.basicDemo.stages}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.basicSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.basicCheckpoint.prompt}
            options={t.basicCheckpoint.options}
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
          <div className="grid gap-3 md:grid-cols-2">
            {t.aiFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <MakeupTransferDemo
            lang={lang}
            title={t.aiDemo.title}
            goal={t.aiDemo.goal}
            resetLabel={ui.reset}
            styles={t.aiDemo.styles}
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

        <SectionBlock id="moon" title={t.moonTitle} eyebrow={t.moonEyebrow}>
          <InfoCard title={t.moonConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.moonConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.moonParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.moonFigure.label}
            caption={t.moonFigure.caption}
            placeholder={t.moonFigure.placeholder}
          />
          <MoonEnhanceDemo
            lang={lang}
            title={t.moonDemo.title}
            goal={t.moonDemo.goal}
            resetLabel={ui.reset}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.moonSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.moonCheckpoint.prompt}
            options={t.moonCheckpoint.options}
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
          <HealthyViewDemo
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

type EditStage = {
  key: string;
  label: string;
  outcome: string;
};

function EditingTimelineDemo({
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
  stages: EditStage[];
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
            {isZh ? "编辑效果" : "Editing Result"}
          </p>
          <p className="mt-1 text-sm text-slate-700">{current.outcome}</p>
        </div>
      )}
    </div>
  );
}

type StyleChoice = {
  key: string;
  label: string;
  outcome: string;
};

function MakeupTransferDemo({
  lang,
  title,
  goal,
  resetLabel,
  styles,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  styles: StyleChoice[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(styles[0]?.key ?? "");
  const current = styles.find((style) => style.key === active) ?? styles[0];

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
          onClick={() => setActive(styles[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        {styles.map((style) => (
          <button
            key={style.key}
            type="button"
            onClick={() => setActive(style.key)}
            className={[
              "rounded-xl border px-3 py-2 text-left text-xs font-semibold transition",
              style.key === active
                ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {style.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "AI 做了什么" : "AI Result"}
          </p>
          <p className="mt-1 text-sm text-slate-700">{current.outcome}</p>
        </div>
      )}
    </div>
  );
}

function MoonEnhanceDemo({
  lang,
  title,
  goal,
  resetLabel,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
}) {
  const isZh = lang === "zh";
  const [detail, setDetail] = useState(30);
  const label =
    detail < 40
      ? isZh
        ? "模糊"
        : "Blurry"
      : detail < 70
        ? isZh
          ? "清晰"
          : "Clearer"
        : isZh
          ? "细节丰富"
          : "Detailed";

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
          onClick={() => setDetail(30)}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-4">
        <input
          type="range"
          min={0}
          max={100}
          value={detail}
          onChange={(event) => setDetail(Number(event.target.value))}
          className="w-full"
          aria-label={isZh ? "清晰度" : "Detail slider"}
        />
        <div className="mt-2 flex justify-between text-[11px] text-slate-500">
          <span>{isZh ? "低" : "Low"}</span>
          <span>{isZh ? "中" : "Mid"}</span>
          <span>{isZh ? "高" : "High"}</span>
        </div>
      </div>

      <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {isZh ? "清晰度状态" : "Detail State"}
        </p>
        <p className="mt-1 text-sm text-slate-700">{label}</p>
      </div>
    </div>
  );
}

type HealthyChoice = {
  key: string;
  label: string;
  outcome: string;
  healthy: boolean;
};

function HealthyViewDemo({
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
  choices: HealthyChoice[];
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
                ? choice.healthy
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
            {isZh ? "心态提示" : "Mindset Tip"}
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
      "Understand the relationship between beauty camera functions and the progress of AI technology.",
      "Learn the basic working principles of beauty cameras.",
      "Learn to view beauty filters in a rational and healthy way.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "Beauty filters can instantly improve photos and video calls. Behind these effects are powerful AI algorithms.",
    basicTitle: "1. Photo Editing: Basic Beauty Filters",
    basicEyebrow: "From darkroom to software",
    basicConceptTitle: "Concept Card",
    basicConceptLines: [
      "Early editing used darkroom lighting, color, and contrast.",
      "Digital software like Photoshop made editing easier.",
      "Basic beauty filters smooth skin and adjust tone.",
    ],
    basicParas: [
      "Photographers once adjusted lighting, color, and contrast in darkrooms, which required skill and time.",
      "With digital imaging, software like Photoshop let people adjust skin tone and remove blemishes (Figure 2-9).",
    ],
    basicFigure: {
      label: "Figure 2-9",
      caption: "A comparison of a portrait before and after photo editing.",
      placeholder: "Illustration placeholder",
    },
    basicDemo: {
      title: "Editing Timeline",
      goal: "Compare how photo editing methods evolved.",
      stages: [
        {
          key: "darkroom",
          label: "Darkroom",
          outcome: "Manual work to adjust lighting, color, and contrast.",
        },
        {
          key: "software",
          label: "Software tools",
          outcome: "Digital edits like skin tone and blemish removal.",
        },
        {
          key: "filters",
          label: "Beauty filters",
          outcome: "Instant smoothing and polishing in apps.",
        },
      ],
    },
    basicSteps: [
      "Select a stage of photo editing.",
      "Read how the method works.",
      "Connect it to basic beauty filters.",
    ],
    basicCheckpoint: {
      prompt: "What did digital software like Photoshop enable?",
      options: [
        {
          label: "Adjusting skin tone and removing blemishes.",
          correct: true,
          explanation: "Software made these edits easier.",
        },
        {
          label: "Only taking photos, not editing them.",
          correct: false,
          explanation: "Software is for editing.",
        },
        {
          label: "Building cameras from scratch.",
          correct: false,
          explanation: "That is not photo editing.",
        },
      ],
    },
    aiTitle: "2. AI Beauty Filters",
    aiEyebrow: "Style transfer",
    aiConceptTitle: "Concept Card",
    aiConceptLines: [
      "AI analyzes a reference photo and extracts makeup features.",
      "It separates facial structure from makeup regions.",
      "Features are transferred to the original photo.",
    ],
    aiParas: [
      "AI beauty filters can understand the content of a picture and apply makeup styles more precisely.",
      "The system compares an original photo and a reference photo, extracts makeup features, and transfers them (Figure 2-10).",
      "Some filters also reshape facial features, apply stronger styles, and even remove glasses (Figure 2-11).",
    ],
    aiFigures: [
      { label: "Figure 2-10", caption: "AI beauty filter with style transfer.", placeholder: "Illustration placeholder" },
      {
        label: "Figure 2-11",
        caption: "A beauty filter that changes facial features and makeup.",
        placeholder: "Illustration placeholder",
      },
    ],
    aiDemo: {
      title: "Makeup Style Transfer",
      goal: "See how AI transfers makeup from a reference style.",
      styles: [
        {
          key: "natural",
          label: "Natural",
          outcome: "AI adds gentle tone and soft eye shadows.",
        },
        {
          key: "glam",
          label: "Glam",
          outcome: "AI emphasizes lips and highlights for a polished look.",
        },
        {
          key: "bold",
          label: "Bold",
          outcome: "AI applies strong color and sharper facial features.",
        },
      ],
    },
    aiSteps: [
      "Choose a makeup style.",
      "Observe how AI applies features.",
      "Explain why AI needs to detect face vs makeup.",
    ],
    aiCheckpoint: {
      prompt: "What must AI understand to apply makeup correctly?",
      options: [
        {
          label: "Which parts are facial structure and which are makeup.",
          correct: true,
          explanation: "AI separates face features from makeup regions.",
        },
        {
          label: "Only the background colors.",
          correct: false,
          explanation: "Background is not the key focus.",
        },
        {
          label: "How to change the camera lens.",
          correct: false,
          explanation: "Lens changes are not AI makeup.",
        },
      ],
    },
    moonTitle: "3. Beautifying the Moon",
    moonEyebrow: "AI enhancement",
    moonConceptTitle: "Concept Card",
    moonConceptLines: [
      "AI learns moon details from many images.",
      "It fills in missing detail in blurry photos.",
      "The result looks brighter and clearer.",
    ],
    moonParas: [
      "AI can enhance moon photos by filling in details it learned from many examples.",
      "With AI, a blurry moon photo becomes clearer and richer in detail (Figure 2-12).",
    ],
    moonFigure: {
      label: "Figure 2-12",
      caption: "AI enhancing the clarity and detail of a photo of the moon.",
      placeholder: "Illustration placeholder",
    },
    moonDemo: {
      title: "Moon Detail Slider",
      goal: "Slide to see how AI increases detail.",
    },
    moonSteps: ["Move the detail slider.", "Watch the clarity label change.", "Explain why AI can add details."],
    moonCheckpoint: {
      prompt: "Why can AI make moon photos clearer?",
      options: [
        {
          label: "It learned moon details from many images.",
          correct: true,
          explanation: "AI fills in missing details using learned patterns.",
        },
        {
          label: "It changes the moon itself.",
          correct: false,
          explanation: "It only enhances the photo.",
        },
        {
          label: "It removes the camera lens.",
          correct: false,
          explanation: "Lens changes are unrelated.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Healthy mindset",
    foodConceptTitle: "Concept Card",
    foodParas: [
      "Beauty filters can be fun, but overuse can cause anxiety.",
      "Your appearance is unique and valuable.",
      "Focus on knowledge, skills, and character to grow inner beauty.",
    ],
    foodDemo: {
      title: "Beauty Filter Choices",
      goal: "Compare different attitudes toward beauty filters.",
      choices: [
        {
          key: "overuse",
          label: "Use filters all the time",
          outcome: "Overuse can cause anxiety without filters.",
          healthy: false,
        },
        {
          key: "balance",
          label: "Use sometimes",
          outcome: "Moderate use keeps confidence and balance.",
          healthy: true,
        },
        {
          key: "focus",
          label: "Focus on inner growth",
          outcome: "Skills and character build lasting beauty.",
          healthy: true,
        },
      ],
    },
    foodSteps: ["Select a mindset.", "Read how it affects you.", "Summarize a healthy attitude."],
    foodCheckpoint: {
      prompt: "What is a healthy way to view beauty filters?",
      options: [
        {
          label: "Use them moderately and focus on inner growth.",
          correct: true,
          explanation: "Balance and confidence matter most.",
        },
        {
          label: "Use them constantly and never show your real face.",
          correct: false,
          explanation: "Overuse can increase anxiety.",
        },
        {
          label: "Stop caring about learning or character.",
          correct: false,
          explanation: "Inner growth is important.",
        },
      ],
    },
    summaryTitle: "Summary",
    summaryEyebrow: "Key Takeaways",
    summaryPoints: [
      "Beauty filters evolved from manual edits to AI-assisted effects.",
      "AI transfers makeup by understanding facial features.",
      "Healthy confidence matters more than perfect looks.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解美颜功能的发展与 AI 技术进步的关系。",
      "了解美颜相机的基本工作原理。",
      "学会理性健康地看待美颜滤镜。",
    ],
    introTitle: "故事开头",
    introEyebrow: "课程导入",
    introText: "美颜滤镜让照片和视频更好看，背后是强大的 AI 算法。",
    basicTitle: "1. 图片编辑：基础美颜",
    basicEyebrow: "从暗房到软件",
    basicConceptTitle: "概念卡片",
    basicConceptLines: [
      "早期在暗房中调整光线、色彩与对比。",
      "数字时代使用 Photoshop 等软件。",
      "基础美颜可调肤色、去瑕疵。",
    ],
    basicParas: [
      "摄影师曾在暗房中调整光线、色彩与对比，需要时间和经验。",
      "数字成像后，软件可调整肤色、去除瑕疵（图 2-9）。",
    ],
    basicFigure: {
      label: "图 2-9",
      caption: "照片编辑前后对比。",
      placeholder: "插图占位",
    },
    basicDemo: {
      title: "编辑方式演进",
      goal: "比较不同编辑方式的变化。",
      stages: [
        {
          key: "darkroom",
          label: "暗房",
          outcome: "手工调整光线与对比度。",
        },
        {
          key: "software",
          label: "软件",
          outcome: "数字化修改肤色与瑕疵。",
        },
        {
          key: "filters",
          label: "美颜滤镜",
          outcome: "一键平滑与美化效果。",
        },
      ],
    },
    basicSteps: ["选择一种编辑方式。", "阅读它的特点。", "联系基础美颜功能。"],
    basicCheckpoint: {
      prompt: "Photoshop 等软件带来了什么变化？",
      options: [
        {
          label: "可以调整肤色并去除瑕疵。",
          correct: true,
          explanation: "软件让编辑更方便。",
        },
        {
          label: "只能拍照不能编辑。",
          correct: false,
          explanation: "软件就是为了编辑。",
        },
        {
          label: "能直接建造相机。",
          correct: false,
          explanation: "这不是编辑功能。",
        },
      ],
    },
    aiTitle: "2. AI 美颜滤镜",
    aiEyebrow: "妆容迁移",
    aiConceptTitle: "概念卡片",
    aiConceptLines: [
      "AI 分析参考照片中的妆容特征。",
      "区分人脸结构与化妆区域。",
      "将妆容迁移到原始照片。",
    ],
    aiParas: [
      "AI 美颜能理解图片内容，进行更精细的美化。",
      "它对比原图与参考图，提取口红、眼影等特征并迁移（图 2-10）。",
      "一些滤镜还会改变脸型与五官，甚至去掉眼镜，效果更明显（图 2-11）。",
    ],
    aiFigures: [
      { label: "图 2-10", caption: "AI 美颜风格迁移。", placeholder: "插图占位" },
      { label: "图 2-11", caption: "改变五官与妆容的美颜效果。", placeholder: "插图占位" },
    ],
    aiDemo: {
      title: "妆容风格迁移",
      goal: "看看 AI 如何迁移妆容。",
      styles: [
        {
          key: "natural",
          label: "自然风",
          outcome: "轻微提亮肤色与眼影。",
        },
        {
          key: "glam",
          label: "精致风",
          outcome: "突出唇色与高光。",
        },
        {
          key: "bold",
          label: "浓艳风",
          outcome: "色彩更强烈，五官更突出。",
        },
      ],
    },
    aiSteps: ["选择一种妆容风格。", "观察 AI 的变化。", "说明为什么要识别面部与妆容。"],
    aiCheckpoint: {
      prompt: "AI 要正确上妆需要理解什么？",
      options: [
        {
          label: "哪部分是五官结构，哪部分是妆容。",
          correct: true,
          explanation: "区分结构与妆容才能准确迁移。",
        },
        {
          label: "只需要背景颜色。",
          correct: false,
          explanation: "背景不是关键。",
        },
        {
          label: "换掉相机镜头。",
          correct: false,
          explanation: "镜头与妆容无关。",
        },
      ],
    },
    moonTitle: "3. 美化月亮",
    moonEyebrow: "AI 细节增强",
    moonConceptTitle: "概念卡片",
    moonConceptLines: [
      "AI 学习大量月球图片的细节。",
      "能为模糊照片补全细节。",
      "照片看起来更清晰明亮。",
    ],
    moonParas: [
      "AI 通过学习大量月球图像，知道月面细节。",
      "因此能增强模糊照片的细节（图 2-12）。",
    ],
    moonFigure: {
      label: "图 2-12",
      caption: "AI 提升月亮照片清晰度。",
      placeholder: "插图占位",
    },
    moonDemo: {
      title: "月亮清晰度滑块",
      goal: "调整清晰度观察变化。",
    },
    moonSteps: ["拖动清晰度滑块。", "观察状态变化。", "解释 AI 如何补全细节。"],
    moonCheckpoint: {
      prompt: "AI 为什么能让月亮照片更清晰？",
      options: [
        {
          label: "它从大量月亮照片中学到了细节。",
          correct: true,
          explanation: "学习到的细节可用于增强。",
        },
        {
          label: "它改变了真实月亮。",
          correct: false,
          explanation: "AI 只处理图片。",
        },
        {
          label: "它拆掉了镜头。",
          correct: false,
          explanation: "与镜头无关。",
        },
      ],
    },
    foodTitle: "思考食粮",
    foodEyebrow: "健康心态",
    foodConceptTitle: "概念卡片",
    foodParas: [
      "美颜可以使用，但不要过度依赖。",
      "每个人的外貌都是独特的礼物。",
      "更重要的是提升知识、能力与品格。",
    ],
    foodDemo: {
      title: "美颜心态选择",
      goal: "比较不同的美颜使用态度。",
      choices: [
        {
          key: "overuse",
          label: "一直依赖滤镜",
          outcome: "容易产生没有滤镜的焦虑。",
          healthy: false,
        },
        {
          key: "balance",
          label: "适度使用",
          outcome: "保持自信与真实。",
          healthy: true,
        },
        {
          key: "focus",
          label: "重视内在成长",
          outcome: "知识与品格让人更持久美好。",
          healthy: true,
        },
      ],
    },
    foodSteps: ["选择一种态度。", "阅读提示。", "总结健康的看法。"],
    foodCheckpoint: {
      prompt: "怎样看待美颜滤镜更健康？",
      options: [
        {
          label: "适度使用，并重视内在成长。",
          correct: true,
          explanation: "保持自信与真实。",
        },
        {
          label: "完全依赖滤镜，不露真面目。",
          correct: false,
          explanation: "过度依赖会带来焦虑。",
        },
        {
          label: "忽视学习与品格。",
          correct: false,
          explanation: "内在成长很重要。",
        },
      ],
    },
    summaryTitle: "小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "美颜从暗房编辑发展到 AI 智能处理。",
      "AI 通过识别五官与妆容实现迁移。",
      "健康心态比外表更重要。",
    ],
  },
};
