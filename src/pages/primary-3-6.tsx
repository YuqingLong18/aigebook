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

export function PrimaryLesson3_6({ lang }: LessonProps) {
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
    { id: "principle", label: t.principleTitle },
    { id: "blockbusters", label: t.blockbustersTitle },
    { id: "applications", label: t.applicationsTitle },
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

        <SectionBlock id="principle" title={t.principleTitle} eyebrow={t.principleEyebrow}>
          <InfoCard title={t.principleConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.principleConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.principleParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <PhysicsRuleDemo
            lang={lang}
            title={t.principleDemo.title}
            goal={t.principleDemo.goal}
            resetLabel={ui.reset}
            scenes={t.principleDemo.scenes}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.principleSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.principleCheckpoint.prompt}
            options={t.principleCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="blockbusters" title={t.blockbustersTitle} eyebrow={t.blockbustersEyebrow}>
          <InfoCard title={t.blockbustersConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.blockbustersConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.blockbustersParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <div className="grid gap-3 md:grid-cols-2">
            {t.blockbustersFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <SoraFeatureDemo
            lang={lang}
            title={t.blockbustersDemo.title}
            goal={t.blockbustersDemo.goal}
            resetLabel={ui.reset}
            features={t.blockbustersDemo.features}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.blockbustersSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.blockbustersCheckpoint.prompt}
            options={t.blockbustersCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="applications" title={t.applicationsTitle} eyebrow={t.applicationsEyebrow}>
          <InfoCard title={t.applicationsConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.applicationsConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.applicationsParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <SoraUseCaseDemo
            lang={lang}
            title={t.applicationsDemo.title}
            goal={t.applicationsDemo.goal}
            resetLabel={ui.reset}
            cases={t.applicationsDemo.cases}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.applicationsSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.applicationsCheckpoint.prompt}
            options={t.applicationsCheckpoint.options}
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
          <ToolBalanceDemo
            lang={lang}
            title={t.foodDemo.title}
            goal={t.foodDemo.goal}
            resetLabel={ui.reset}
            levels={t.foodDemo.levels}
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

type SceneRule = {
  key: string;
  label: string;
  detail: string;
  outcome: string;
};

function PhysicsRuleDemo({
  lang,
  title,
  goal,
  resetLabel,
  scenes,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  scenes: SceneRule[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(scenes[0]?.key ?? "");
  const current = scenes.find((scene) => scene.key === active) ?? scenes[0];

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
          onClick={() => setActive(scenes[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {scenes.map((scene) => (
          <button
            key={scene.key}
            type="button"
            onClick={() => setActive(scene.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              scene.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {scene.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="font-semibold text-slate-700">{current.detail}</p>
          <p className="mt-1 text-slate-600">{current.outcome}</p>
        </div>
      )}
    </div>
  );
}

type Feature = {
  key: string;
  label: string;
  detail: string;
};

function SoraFeatureDemo({
  lang,
  title,
  goal,
  resetLabel,
  features,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  features: Feature[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(features[0]?.key ?? "");
  const current = features.find((feature) => feature.key === active) ?? features[0];

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
          onClick={() => setActive(features[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {features.map((feature) => (
          <button
            key={feature.key}
            type="button"
            onClick={() => setActive(feature.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              feature.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {feature.label}
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

type UseCase = {
  key: string;
  label: string;
  detail: string;
};

function SoraUseCaseDemo({
  lang,
  title,
  goal,
  resetLabel,
  cases,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  cases: UseCase[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(cases[0]?.key ?? "");
  const current = cases.find((item) => item.key === active) ?? cases[0];

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
          onClick={() => setActive(cases[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {cases.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => setActive(item.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              item.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {item.label}
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

type ToolBalanceLevel = {
  key: string;
  label: string;
  detail: string;
};

function ToolBalanceDemo({
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
  levels: ToolBalanceLevel[];
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
          aria-label={isZh ? "工具依赖" : "Tool reliance"}
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

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand the basic principle behind Sora's video generation.",
      "Learn about Sora's functions and possible applications.",
      "Consider the conveniences and risks of video generation technology.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "In February 2024, OpenAI released Sora, a system that can generate realistic videos up to one minute long. It drew worldwide attention.",
    introFigure: {
      label: "Figure 3-14",
      caption: "Screenshot from a video generated by Sora.",
      placeholder: "Illustration placeholder",
    },
    principleTitle: "1. The Basic Principle of Sora",
    principleEyebrow: "Learning physical rules",
    principleConceptTitle: "Concept Card",
    principleConceptLines: [
      "Sora learns patterns from large video datasets.",
      "It predicts what should happen next in a scene.",
      "Predicted frames combine into a realistic video.",
    ],
    principleParas: [
      "Sora generates videos by learning the rules of the physical world. It studies real videos and estimates what movement should happen next.",
      "It uses statistics to predict the probability of the next moment in a scene.",
      "Even without writing physical equations, Sora can predict likely motions and produce frames that look realistic when played together.",
    ],
    principleDemo: {
      title: "Predict the Next Moment",
      goal: "See how Sora follows physical rules in a scene.",
      scenes: [
        {
          key: "snow",
          label: "Snow",
          detail: "Snow kicked up by an elephant falls back down.",
          outcome: "Gravity makes the snow drop and settle naturally.",
        },
        {
          key: "swing",
          label: "Swing",
          detail: "A person swings an arm through the air.",
          outcome: "The arm keeps moving in a smooth arc.",
        },
        {
          key: "leaf",
          label: "Leaf",
          detail: "A leaf falls from a branch.",
          outcome: "The leaf drifts down with gentle turns.",
        },
      ],
    },
    principleSteps: [
      "Pick a scene.",
      "Read the predicted next action.",
      "Explain why it feels realistic.",
    ],
    principleCheckpoint: {
      prompt: "How does Sora make videos look realistic?",
      options: [
        {
          label: "It learns physical patterns from real video data.",
          correct: true,
          explanation: "Sora predicts likely motions based on data.",
        },
        {
          label: "It guesses randomly without data.",
          correct: false,
          explanation: "Sora relies on learned patterns.",
        },
        {
          label: "It uses only one still picture.",
          correct: false,
          explanation: "Sora predicts many frames in a sequence.",
        },
      ],
    },
    blockbustersTitle: "2. Watching Sora's \"Blockbusters\"",
    blockbustersEyebrow: "What Sora can do",
    blockbustersConceptTitle: "Concept Card",
    blockbustersConceptLines: [
      "Sora can generate realistic scenes from text prompts.",
      "It can create imaginative scenes that still follow physics.",
      "It can extend, edit, and transition between videos.",
    ],
    blockbustersParas: [
      "Sora can create videos from text instructions, turn images into videos, extend scenes, and edit transitions.",
      "It can also invent imaginative scenes like penguins riding bicycles while still making motion feel real.",
    ],
    blockbustersFigures: [
      {
        label: "Figure 3-15",
        caption: "Screenshot from a realistic scene generated by Sora.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 3-16",
        caption: "More examples from the OpenAI team.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 3-17",
        caption: "Sora-generated video of penguins riding bicycles.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 3-18",
        caption: "Sora-generated video created from a still image.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 3-19",
        caption: "Sora's smooth scene transition between two videos.",
        placeholder: "Illustration placeholder",
      },
    ],
    blockbustersDemo: {
      title: "Sora Feature Board",
      goal: "Explore the different video tools Sora provides.",
      features: [
        {
          key: "text",
          label: "Text-to-video",
          detail: "Write a prompt and Sora generates a scene from scratch.",
        },
        {
          key: "creative",
          label: "Creative mix",
          detail: "Impossible scenes can still look believable if physics is consistent.",
        },
        {
          key: "image",
          label: "Image-to-video",
          detail: "A still image can be turned into a moving clip.",
        },
        {
          key: "extend",
          label: "Extend",
          detail: "Sora can extend a short clip into a longer one.",
        },
        {
          key: "transition",
          label: "Transition",
          detail: "It can connect two clips with a smooth transition.",
        },
      ],
    },
    blockbustersSteps: [
      "Pick a feature.",
      "Read the description.",
      "Explain how it could be used in a video.",
    ],
    blockbustersCheckpoint: {
      prompt: "Which is a real ability of Sora?",
      options: [
        {
          label: "Turning a single image into a short video.",
          correct: true,
          explanation: "Sora supports image-to-video generation.",
        },
        {
          label: "Time travel to film real scenes.",
          correct: false,
          explanation: "Sora generates video; it does not travel in time.",
        },
        {
          label: "Only creating videos that are one second long.",
          correct: false,
          explanation: "Sora can generate up to one minute of video.",
        },
      ],
    },
    applicationsTitle: "3. Application Scenarios of Sora",
    applicationsEyebrow: "Where it can help",
    applicationsConceptTitle: "Concept Card",
    applicationsConceptLines: [
      "Sora can speed up art, film, and education work.",
      "It lowers the cost of video creation.",
      "Creators can focus more on ideas and storytelling.",
    ],
    applicationsParas: [
      "In art, Sora can quickly visualize scenes based on descriptions.",
      "In film, it can generate scenes without actors or sets, and allow rapid edits.",
      "In education, it can animate abstract concepts or show experiments that are hard to do in class.",
    ],
    applicationsDemo: {
      title: "Sora in Action",
      goal: "See how Sora might support different fields.",
      cases: [
        { key: "art", label: "Art", detail: "Artists can describe a scene and get a video draft quickly." },
        { key: "film", label: "Film", detail: "Small teams can prototype scenes and effects at low cost." },
        { key: "edu", label: "Education", detail: "Teachers can visualize experiments and abstract ideas." },
      ],
    },
    applicationsSteps: [
      "Choose a field.",
      "Read the benefit.",
      "Explain why it matters.",
    ],
    applicationsCheckpoint: {
      prompt: "Which area could benefit from Sora?",
      options: [
        {
          label: "Education, by visualizing abstract ideas.",
          correct: true,
          explanation: "Sora can make learning scenes easier to see.",
        },
        {
          label: "Only sports, because videos have no story.",
          correct: false,
          explanation: "Sora supports many creative fields, not just sports.",
        },
        {
          label: "Only cooking, because it cannot show experiments.",
          correct: false,
          explanation: "Sora can illustrate experiments and demos.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Tools and dependence",
    foodParas: [
      "Sora makes video creation faster, but heavy reliance on tools can weaken our own skills.",
      "Think about how to use tools wisely while still practicing creativity.",
    ],
    foodDemo: {
      title: "Tool Balance Meter",
      goal: "Reflect on balancing tool use with personal practice.",
      levels: [
        {
          key: "low",
          label: "Practice",
          detail: "You create more on your own and use AI as support.",
        },
        {
          key: "mid",
          label: "Balanced",
          detail: "You combine your skills with AI tools thoughtfully.",
        },
        {
          key: "high",
          label: "Overuse",
          detail: "Too much dependence can weaken creativity and skills.",
        },
      ],
    },
    foodSteps: [
      "Slide to a balance point.",
      "Explain why balance matters.",
      "Share one rule you would follow.",
    ],
    foodCheckpoint: {
      prompt: "What is a good way to use Sora?",
      options: [
        {
          label: "Use it as a tool while continuing to practice your own skills.",
          correct: true,
          explanation: "Balance prevents overreliance.",
        },
        {
          label: "Stop learning video skills completely.",
          correct: false,
          explanation: "The lesson warns against overdependence.",
        },
        {
          label: "Avoid using tools for any task.",
          correct: false,
          explanation: "Tools can be helpful when used wisely.",
        },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryEyebrow: "Lesson summary",
    summaryPoints: [
      "Sora learns from video data to predict realistic motion.",
      "It can generate, extend, and edit videos from prompts or images.",
      "Sora has applications in art, film, and education.",
      "We should balance tool use with personal skill growth.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解 Sora 视频生成的基本原理。",
      "认识 Sora 的功能及可能应用。",
      "思考视频生成技术的便利与风险。",
    ],
    introTitle: "故事开头",
    introEyebrow: "课程导入",
    introText:
      "2024 年春节期间，OpenAI 发布了 Sora，可以生成长达一分钟的逼真视频，引发全球关注。",
    introFigure: {
      label: "图 3-14",
      caption: "Sora 生成视频的截图。",
      placeholder: "插图占位",
    },
    principleTitle: "1. Sora 的基本原理",
    principleEyebrow: "学习物理规律",
    principleConceptTitle: "概念卡片",
    principleConceptLines: [
      "Sora 从大量视频中学习规律。",
      "它预测下一刻会发生什么。",
      "连续预测帧合成逼真视频。",
    ],
    principleParas: [
      "Sora 通过学习真实世界的规律来生成视频。它分析大量视频，估计下一步动作的可能性。",
      "它会用统计方法预测下一帧发生的概率。",
      "虽然它不会写出物理公式，但能预测合理的运动并生成真实的画面。",
    ],
    principleDemo: {
      title: "预测下一刻",
      goal: "看看 Sora 如何遵循物理规律。",
      scenes: [
        {
          key: "snow",
          label: "雪花",
          detail: "大象踢起的雪花又落回地面。",
          outcome: "重力让雪花自然落下。",
        },
        {
          key: "swing",
          label: "挥臂",
          detail: "手臂摆动时形成流畅轨迹。",
          outcome: "动作会沿着弧线继续前进。",
        },
        {
          key: "leaf",
          label: "落叶",
          detail: "树叶从枝头飘落。",
          outcome: "叶子会旋转并缓慢下落。",
        },
      ],
    },
    principleSteps: ["选择一个场景。", "读一读预测结果。", "解释为什么真实。"],
    principleCheckpoint: {
      prompt: "Sora 为什么能生成逼真的视频？",
      options: [
        {
          label: "它从真实视频中学习物理规律。",
          correct: true,
          explanation: "Sora 用数据预测合理动作。",
        },
        {
          label: "它完全靠随机猜测。",
          correct: false,
          explanation: "Sora 依赖学到的规律。",
        },
        {
          label: "它只复制一张静态图片。",
          correct: false,
          explanation: "Sora 生成的是连续画面。",
        },
      ],
    },
    blockbustersTitle: "2. 看看 Sora 的“大片”",
    blockbustersEyebrow: "功能展示",
    blockbustersConceptTitle: "概念卡片",
    blockbustersConceptLines: [
      "Sora 能根据文字生成视频。",
      "它可以创造想象场景但仍符合物理。",
      "它还支持延长、剪辑和转场。",
    ],
    blockbustersParas: [
      "Sora 可以根据文字指令生成视频，也能把图片变成视频、延长片段、实现平滑转场。",
      "它还能生成企鹅骑车等不现实的场景，但依然看起来自然。",
    ],
    blockbustersFigures: [
      { label: "图 3-15", caption: "根据指令生成的逼真场景截图。", placeholder: "插图占位" },
      { label: "图 3-16", caption: "OpenAI 团队发布的更多示例。", placeholder: "插图占位" },
      { label: "图 3-17", caption: "企鹅骑车的创意视频截图。", placeholder: "插图占位" },
      { label: "图 3-18", caption: "由静态图生成的短视频截图。", placeholder: "插图占位" },
      { label: "图 3-19", caption: "两段视频之间的平滑转场。", placeholder: "插图占位" },
    ],
    blockbustersDemo: {
      title: "Sora 功能板",
      goal: "探索 Sora 的视频能力。",
      features: [
        { key: "text", label: "文字生成", detail: "输入描述即可生成新场景。" },
        { key: "creative", label: "创意组合", detail: "想象场景也能保持真实感。" },
        { key: "image", label: "图转视频", detail: "静态图片变成动态画面。" },
        { key: "extend", label: "延长", detail: "把短片段延长成更长视频。" },
        { key: "transition", label: "转场", detail: "不同片段之间无缝过渡。" },
      ],
    },
    blockbustersSteps: ["选择一个功能。", "阅读描述。", "说说它能用在哪。"],
    blockbustersCheckpoint: {
      prompt: "下面哪项是 Sora 的真实能力？",
      options: [
        {
          label: "把一张图片生成短视频。",
          correct: true,
          explanation: "Sora 支持图转视频。",
        },
        {
          label: "穿越时空拍摄真实场景。",
          correct: false,
          explanation: "Sora 只能生成视频。",
        },
        {
          label: "只能生成 1 秒的视频。",
          correct: false,
          explanation: "Sora 可以生成更长片段。",
        },
      ],
    },
    applicationsTitle: "3. Sora 的应用场景",
    applicationsEyebrow: "应用方向",
    applicationsConceptTitle: "概念卡片",
    applicationsConceptLines: [
      "Sora 可以提升艺术、影视与教育效率。",
      "它降低了视频创作成本。",
      "创作者可以专注于创意。",
    ],
    applicationsParas: [
      "在艺术领域，Sora 能快速把想法变成画面。",
      "在电影领域，它可以生成场景并快速试验不同风格。",
      "在教育领域，它能把抽象概念变成动画。",
    ],
    applicationsDemo: {
      title: "Sora 用途卡",
      goal: "了解不同领域的应用。",
      cases: [
        { key: "art", label: "艺术", detail: "文字描述即可生成视频草稿。" },
        { key: "film", label: "影视", detail: "小团队也能快速做出特效场景。" },
        { key: "edu", label: "教育", detail: "抽象知识更容易可视化。" },
      ],
    },
    applicationsSteps: ["选择一个领域。", "阅读它的优势。", "说说它为何重要。"],
    applicationsCheckpoint: {
      prompt: "Sora 哪个应用场景是合理的？",
      options: [
        {
          label: "教育中展示抽象概念。",
          correct: true,
          explanation: "Sora 可以把概念做成动画。",
        },
        {
          label: "只适合体育，其他领域用不上。",
          correct: false,
          explanation: "它可用于艺术、影视、教育等多种领域。",
        },
        {
          label: "无法用于实验演示。",
          correct: false,
          explanation: "它可以生成实验动画。",
        },
      ],
    },
    foodTitle: "想一想",
    foodEyebrow: "工具与依赖",
    foodParas: [
      "Sora 提升效率，但过度依赖工具会削弱自己的能力。",
      "思考怎样在使用工具的同时保持练习。",
    ],
    foodDemo: {
      title: "工具平衡尺",
      goal: "思考如何平衡工具与练习。",
      levels: [
        { key: "low", label: "多练习", detail: "主要靠自己创作，AI 作为辅助。" },
        { key: "mid", label: "平衡", detail: "合理结合工具与自身能力。" },
        { key: "high", label: "过度依赖", detail: "过度依赖会削弱创造力。" },
      ],
    },
    foodSteps: ["拖动滑块选择平衡点。", "解释为什么要平衡。", "说出一条使用规则。"],
    foodCheckpoint: {
      prompt: "使用 Sora 的正确方式是什么？",
      options: [
        {
          label: "把它当工具，同时保持练习。",
          correct: true,
          explanation: "平衡使用才能进步。",
        },
        {
          label: "完全停止学习视频技能。",
          correct: false,
          explanation: "课程提醒不要过度依赖。",
        },
        {
          label: "拒绝任何工具。",
          correct: false,
          explanation: "工具可以帮助我们更高效。",
        },
      ],
    },
    summaryTitle: "关键要点",
    summaryEyebrow: "课程小结",
    summaryPoints: [
      "Sora 从视频数据中学习并预测动作。",
      "它能生成、延长、编辑视频。",
      "Sora 可用于艺术、影视与教育。",
      "要避免过度依赖工具。",
    ],
  },
};
