import { useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { FigureCard } from "../components/FigureCard";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { DataComputeTriadDemo } from "../demos/DataComputeTriadDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function PrimaryLesson5_5({ lang }: LessonProps) {
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
    { id: "background", label: t.backgroundTitle },
    { id: "chatgpt", label: t.chatgptTitle },
    { id: "era", label: t.eraTitle },
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

        <SectionBlock id="background" title={t.backgroundTitle} eyebrow={t.backgroundEyebrow}>
          <InfoCard title={t.backgroundConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.backgroundConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.backgroundParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <div className="grid gap-3 md:grid-cols-2">
            {t.backgroundFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <DataScaleDemo
            lang={lang}
            title={t.backgroundDemo.title}
            goal={t.backgroundDemo.goal}
            resetLabel={ui.reset}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.backgroundSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.backgroundCheckpoint.prompt}
            options={t.backgroundCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="chatgpt" title={t.chatgptTitle} eyebrow={t.chatgptEyebrow}>
          <InfoCard title={t.chatgptConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.chatgptConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.chatgptParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <GPTTimelineDemo
            lang={lang}
            title={t.chatgptDemo.title}
            goal={t.chatgptDemo.goal}
            resetLabel={ui.reset}
            events={t.chatgptDemo.events}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.chatgptSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.chatgptCheckpoint.prompt}
            options={t.chatgptCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="era" title={t.eraTitle} eyebrow={t.eraEyebrow}>
          <InfoCard title={t.eraConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.eraConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.eraParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.eraFigure.label}
            caption={t.eraFigure.caption}
            placeholder={t.eraFigure.placeholder}
          />
          <DataComputeTriadDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.eraSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.eraCheckpoint.prompt}
            options={t.eraCheckpoint.options}
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
          <EssayReflectionDemo
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

function DataScaleDemo({
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
  const [data, setData] = useState(60);
  const [compute, setCompute] = useState(50);

  const note =
    data + compute < 80
      ? isZh
        ? "数据与算力不足，模型成长慢。"
        : "Limited data and compute slow progress."
      : data + compute < 140
        ? isZh
          ? "条件改善，模型能力逐步提升。"
          : "Better conditions help models improve."
        : isZh
          ? "数据与算力充足，推动大模型出现。"
          : "Strong data and compute enable large models.";

  const reset = () => {
    setData(60);
    setCompute(50);
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
          onClick={reset}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-slate-700">
            {isZh ? "数据规模" : "Data scale"}
            <input
              type="range"
              min={0}
              max={100}
              value={data}
              onChange={(e) => setData(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={data}
            />
            <span className="text-xs text-slate-500">{data}</span>
          </label>
          <label className="block text-sm font-semibold text-slate-700">
            {isZh ? "算力" : "Compute"}
            <input
              type="range"
              min={0}
              max={100}
              value={compute}
              onChange={(e) => setCompute(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={compute}
            />
            <span className="text-xs text-slate-500">{compute}</span>
          </label>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "发展提示" : "Progress"}
          </p>
          <p className="mt-1 text-sm">{note}</p>
        </div>
      </div>
    </div>
  );
}

type GPTEvent = {
  key: string;
  year: string;
  label: string;
  detail: string;
};

function GPTTimelineDemo({
  lang,
  title,
  goal,
  resetLabel,
  events,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  events: GPTEvent[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(events[0]?.key ?? "");
  const current = events.find((event) => event.key === active) ?? events[0];

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
          onClick={() => setActive(events[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {events.map((event) => (
          <button
            key={event.key}
            type="button"
            onClick={() => setActive(event.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              event.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {event.year}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "里程碑" : "Milestone"}
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{current.label}</p>
          <p className="mt-2 text-sm">{current.detail}</p>
        </div>
      )}
    </div>
  );
}

type EssayChoice = {
  key: string;
  label: string;
  response: string;
};

function EssayReflectionDemo({
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
  choices: EssayChoice[];
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

      <div className="mt-3 flex flex-wrap gap-2">
        {choices.map((choice) => (
          <button
            key={choice.key}
            type="button"
            onClick={() => setActive(choice.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              choice.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {choice.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "思考" : "Reflection"}
          </p>
          <p className="mt-1 text-sm">{current.response}</p>
        </div>
      )}
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand why large models emerged and the conditions for ChatGPT.",
      "Learn the development process of ChatGPT and its language power.",
      "Recognize the three key elements: model, data, and computation.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "From 2010 to 2020, deep learning surged. Large models then became the core of a new AI revolution.",
    backgroundTitle: "1. Background of Large Models",
    backgroundEyebrow: "Data + compute",
    backgroundConceptTitle: "Concept Card",
    backgroundConceptLines: [
      "2012 showed deep learning's power.",
      "Mobile internet created massive data.",
      "GPUs made training far faster.",
    ],
    backgroundParas: [
      "Large-scale neural networks became easier to train as algorithms improved.",
      "Open platforms and smartphones generated huge amounts of data.",
      "GPUs enabled parallel training, speeding tasks from months to hours.",
    ],
    backgroundFigures: [
      {
        label: "Figure 5-13",
        caption: "Examples of open community platforms.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 5-14",
        caption: "Graphics processing hardware used in personal computers.",
        placeholder: "Illustration placeholder",
      },
    ],
    backgroundDemo: {
      title: "Data and Compute Growth",
      goal: "Adjust data and compute to see readiness for large models.",
    },
    backgroundSteps: [
      "Move the data and compute sliders.",
      "Read how readiness changes.",
      "Explain why GPUs mattered.",
    ],
    backgroundCheckpoint: {
      prompt: "Why did GPUs boost deep learning?",
      options: [
        {
          label: "They handle massive parallel calculations efficiently.",
          correct: true,
          explanation: "GPUs are good at many repeated calculations.",
        },
        {
          label: "They reduced data to zero.",
          correct: false,
          explanation: "GPUs process data, they do not remove it.",
        },
        {
          label: "They replaced all algorithms.",
          correct: false,
          explanation: "Algorithms still mattered.",
        },
      ],
    },
    chatgptTitle: "2. The Birth of ChatGPT",
    chatgptEyebrow: "Transformer era",
    chatgptConceptTitle: "Concept Card",
    chatgptConceptLines: [
      "Transformer (2017) handled long context.",
      "GPT-1 and GPT-2 showed scaling power.",
      "ChatGPT (GPT-3.5) launched in 2022.",
    ],
    chatgptParas: [
      "Transformer let models use long context to understand meaning.",
      "GPT-2 showed large models could do tasks they never saw before.",
      "ChatGPT aligned language models to human values and gained massive users quickly.",
    ],
    chatgptDemo: {
      title: "GPT Timeline",
      goal: "Follow GPT milestones from 2017 to 2022.",
      events: [
        {
          key: "transformer",
          year: "2017",
          label: "Transformer",
          detail: "Handled long context and improved language understanding.",
        },
        {
          key: "gpt1",
          year: "2018",
          label: "GPT-1",
          detail: "117M parameters, 512 tokens, 40GB text.",
        },
        {
          key: "gpt2",
          year: "2019",
          label: "GPT-2",
          detail: "1.5B parameters, 1024 tokens, showed new abilities.",
        },
        {
          key: "chatgpt",
          year: "2022",
          label: "ChatGPT",
          detail: "GPT-3.5 aligned to human values; rapid adoption.",
        },
      ],
    },
    chatgptSteps: [
      "Pick a milestone.",
      "Describe its improvement.",
      "Explain why context matters.",
    ],
    chatgptCheckpoint: {
      prompt: "What was Transformer's key advantage?",
      options: [
        {
          label: "It could handle long contextual information.",
          correct: true,
          explanation: "Context helps models choose correct meanings.",
        },
        {
          label: "It removed the need for data.",
          correct: false,
          explanation: "Data was still essential.",
        },
        {
          label: "It made GPUs unnecessary.",
          correct: false,
          explanation: "Compute still mattered.",
        },
      ],
    },
    eraTitle: "3. The Era of Large Models",
    eraEyebrow: "Model, data, compute",
    eraConceptTitle: "Concept Card",
    eraConceptLines: [
      "Large models use massive data and compute.",
      "Multimodal models handle text, image, audio, video.",
      "Humans and AI co-create data and progress.",
    ],
    eraParas: [
      "ChatGPT marked a new era, and many organizations built large models worldwide.",
      "Models now include multimodal systems like DALL-E, GPT-4, and Sora.",
      "Large models learn patterns from data and generate new content.",
    ],
    eraFigure: {
      label: "Figure 5-15",
      caption: "Examples of outputs from multi-modal large models.",
      placeholder: "Illustration placeholder",
    },
    eraSteps: [
      "Adjust model, data, and compute.",
      "Observe capability changes.",
      "Explain why all three matter.",
    ],
    eraCheckpoint: {
      prompt: "Which three elements drive large models?",
      options: [
        {
          label: "Model, data, and computation.",
          correct: true,
          explanation: "They work together to enable scale.",
        },
        {
          label: "Only data.",
          correct: false,
          explanation: "Compute and model design are also required.",
        },
        {
          label: "Only hardware design.",
          correct: false,
          explanation: "Data and algorithms are essential too.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Writing with AI",
    foodParas: [
      "Large models can help write essays, but do they build your own skills?",
      "Try using a model to write and discuss its impact on learning.",
    ],
    foodDemo: {
      title: "Essay Reflection",
      goal: "Choose how to use AI writing tools wisely.",
      choices: [
        {
          key: "copy",
          label: "Copy everything",
          response: "Fast, but your own skills may not grow.",
        },
        {
          key: "draft",
          label: "Use as draft",
          response: "You can revise and learn while still thinking for yourself.",
        },
        {
          key: "brainstorm",
          label: "Brainstorm only",
          response: "Use AI for ideas, then write with your own voice.",
        },
      ],
    },
    foodSteps: [
      "Pick a usage choice.",
      "Read the reflection.",
      "Discuss what builds real skills.",
    ],
    foodCheckpoint: {
      prompt: "What is a responsible way to use large models for writing?",
      options: [
        {
          label: "Use them to brainstorm and then write yourself.",
          correct: true,
          explanation: "That keeps learning active.",
        },
        {
          label: "Always copy without thinking.",
          correct: false,
          explanation: "That weakens your own skills.",
        },
        {
          label: "Never learn from them.",
          correct: false,
          explanation: "Thoughtful use can help learning.",
        },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryEyebrow: "Summary",
    summaryPoints: [
      "Large models rose from data growth and GPU compute.",
      "Transformer enabled long-context understanding.",
      "ChatGPT launched the large-model era.",
      "Model, data, and compute drive large-model power.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解大模型出现的背景与 ChatGPT 诞生条件。",
      "认识 ChatGPT 发展过程与语言理解能力。",
      "理解模型、数据、算力三要素的重要性。",
    ],
    introTitle: "故事开头",
    introEyebrow: "开场",
    introText: "2010-2020 年深度学习快速发展，大模型成为新一轮 AI 革命核心。",
    backgroundTitle: "1. 大模型的背景",
    backgroundEyebrow: "数据 + 算力",
    backgroundConceptTitle: "概念卡片",
    backgroundConceptLines: [
      "2012 年深度学习崭露头角。",
      "移动互联网带来海量数据。",
      "GPU 加速训练效率。",
    ],
    backgroundParas: [
      "大规模网络训练变得更高效，算法持续进步。",
      "手机与开放平台让数据快速增长。",
      "GPU 并行计算让训练速度提升几十倍。",
    ],
    backgroundFigures: [
      {
        label: "图 5-13",
        caption: "开放社区平台示例。",
        placeholder: "插图占位",
      },
      {
        label: "图 5-14",
        caption: "个人电脑中的图形处理硬件。",
        placeholder: "插图占位",
      },
    ],
    backgroundDemo: {
      title: "数据与算力增长",
      goal: "调节数据和算力，观察大模型准备度。",
    },
    backgroundSteps: [
      "调整数据与算力滑块。",
      "观察提示变化。",
      "说明 GPU 的作用。",
    ],
    backgroundCheckpoint: {
      prompt: "GPU 为什么能推动深度学习？",
      options: [
        {
          label: "适合并行处理大量重复计算。",
          correct: true,
          explanation: "神经网络训练需要海量并行计算。",
        },
        {
          label: "让数据消失。",
          correct: false,
          explanation: "GPU 处理数据，不会减少数据。",
        },
        {
          label: "取代所有算法。",
          correct: false,
          explanation: "算法依然重要。",
        },
      ],
    },
    chatgptTitle: "2. ChatGPT 的诞生",
    chatgptEyebrow: "Transformer 时代",
    chatgptConceptTitle: "概念卡片",
    chatgptConceptLines: [
      "Transformer 能处理长上下文。",
      "GPT-1 与 GPT-2 展示规模力量。",
      "2022 年 ChatGPT 引爆热潮。",
    ],
    chatgptParas: [
      "Transformer 让模型理解更长上下文，意义更准确。",
      "GPT-2 表现出“看似会做没学过的任务”。",
      "ChatGPT 对齐人类价值观，用户迅速破亿。",
    ],
    chatgptDemo: {
      title: "GPT 时间线",
      goal: "回顾 GPT 的关键里程碑。",
      events: [
        {
          key: "transformer",
          year: "2017",
          label: "Transformer",
          detail: "长上下文让语义理解更好。",
        },
        {
          key: "gpt1",
          year: "2018",
          label: "GPT-1",
          detail: "1.17 亿参数，512 token，上下文训练。",
        },
        {
          key: "gpt2",
          year: "2019",
          label: "GPT-2",
          detail: "15 亿参数，1024 token，能力跃升。",
        },
        {
          key: "chatgpt",
          year: "2022",
          label: "ChatGPT",
          detail: "GPT-3.5 面向用户发布。",
        },
      ],
    },
    chatgptSteps: [
      "选择一个节点。",
      "说出它的提升点。",
      "解释上下文为何重要。",
    ],
    chatgptCheckpoint: {
      prompt: "Transformer 的关键优势是什么？",
      options: [
        {
          label: "能处理更长的上下文。",
          correct: true,
          explanation: "上下文决定意义。",
        },
        {
          label: "不需要数据。",
          correct: false,
          explanation: "数据依然必需。",
        },
        {
          label: "让算力不再重要。",
          correct: false,
          explanation: "算力仍然关键。",
        },
      ],
    },
    eraTitle: "3. 大模型时代",
    eraEyebrow: "模型 + 数据 + 算力",
    eraConceptTitle: "概念卡片",
    eraConceptLines: [
      "大模型依赖海量数据与算力。",
      "多模态模型扩展到图像、语音、视频。",
      "人类与 AI 共同创造数据。",
    ],
    eraParas: [
      "ChatGPT 标志大模型时代到来，全球机构纷纷推出大模型。",
      "多模态模型如 DALL-E、GPT-4、Sora 等出现。",
      "大模型从数据中学习模式并生成内容。",
    ],
    eraFigure: {
      label: "图 5-15",
      caption: "多模态大模型输出示例。",
      placeholder: "插图占位",
    },
    eraSteps: [
      "调整模型、数据、算力。",
      "观察能力变化。",
      "说明三要素为何缺一不可。",
    ],
    eraCheckpoint: {
      prompt: "推动大模型的三要素是什么？",
      options: [
        {
          label: "模型、数据、算力。",
          correct: true,
          explanation: "三者共同决定规模能力。",
        },
        {
          label: "只有数据。",
          correct: false,
          explanation: "算法与算力也需要。",
        },
        {
          label: "只有硬件。",
          correct: false,
          explanation: "模型与数据同样关键。",
        },
      ],
    },
    foodTitle: "想一想",
    foodEyebrow: "写作与 AI",
    foodParas: [
      "使用大模型写作文很方便，但是否提升了你的写作能力？",
      "尝试使用工具后，与同学讨论。",
    ],
    foodDemo: {
      title: "写作反思",
      goal: "思考如何合理使用写作工具。",
      choices: [
        {
          key: "copy",
          label: "直接照抄",
          response: "很快，但自己的能力可能停滞。",
        },
        {
          key: "draft",
          label: "作为草稿",
          response: "可以修改并学习表达。",
        },
        {
          key: "brainstorm",
          label: "仅作灵感",
          response: "自己写作，保持原创。",
        },
      ],
    },
    foodSteps: [
      "选择一种用法。",
      "阅读提示。",
      "讨论怎样提升能力。",
    ],
    foodCheckpoint: {
      prompt: "合理使用大模型写作的方式是？",
      options: [
        {
          label: "用作灵感，再自己完成。",
          correct: true,
          explanation: "这样能保持学习与思考。",
        },
        {
          label: "完全照抄。",
          correct: false,
          explanation: "会削弱写作能力。",
        },
        {
          label: "完全不用。",
          correct: false,
          explanation: "适度使用也能帮助学习。",
        },
      ],
    },
    summaryTitle: "要点回顾",
    summaryEyebrow: "总结",
    summaryPoints: [
      "大模型源自数据增长与 GPU 算力提升。",
      "Transformer 支持长上下文理解。",
      "ChatGPT 引爆大模型时代。",
      "模型、数据、算力是三要素。",
    ],
  },
};
