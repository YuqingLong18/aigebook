import { useMemo, useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { FigureCard } from "../components/FigureCard";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { SelfAttentionDemo } from "../demos/SelfAttentionDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function PrimaryLesson7_7({ lang }: LessonProps) {
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
    { id: "secret", label: t.secretTitle },
    { id: "chatgpt", label: t.chatgptTitle },
    { id: "video", label: t.videoTitle },
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

        <SectionBlock id="secret" title={t.secretTitle} eyebrow={t.secretEyebrow}>
          <InfoCard title={t.secretConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.secretConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.secretParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.secretFigure.label}
            caption={t.secretFigure.caption}
            placeholder={t.secretFigure.placeholder}
          />
          <WordChainDemo
            lang={lang}
            title={t.secretDemo.title}
            goal={t.secretDemo.goal}
            resetLabel={ui.reset}
            labels={t.secretDemo.labels}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.secretSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.secretCheckpoint.prompt}
            options={t.secretCheckpoint.options}
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
          <div className="grid gap-3 md:grid-cols-2">
            {t.chatgptFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <SelfAttentionDemo lang={lang} />
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

        <SectionBlock id="video" title={t.videoTitle} eyebrow={t.videoEyebrow}>
          <InfoCard title={t.videoConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.videoConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.videoParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <div className="grid gap-3 md:grid-cols-2">
            {t.videoFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <SequencePatternDemo
            lang={lang}
            title={t.videoDemo.title}
            goal={t.videoDemo.goal}
            resetLabel={ui.reset}
            labels={t.videoDemo.labels}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.videoSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.videoCheckpoint.prompt}
            options={t.videoCheckpoint.options}
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
          <VerificationDemo
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

const wordOptions = [
  { key: "fruit", en: "fruit", zh: "水果" },
  { key: "watermelon", en: "watermelon", zh: "西瓜" },
  { key: "sun", en: "sun", zh: "太阳" },
  { key: "chair", en: "chair", zh: "椅子" },
];

function WordChainDemo({
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
  labels: { prompt: string; data: string; probability: string; note: string };
}) {
  const isZh = lang === "zh";
  const [data, setData] = useState(60);
  const [choice, setChoice] = useState("fruit");

  const probs = useMemo(() => {
    const base = data / 100;
    return {
      fruit: Math.round((0.4 + base * 0.3) * 100),
      watermelon: Math.round((0.35 + base * 0.2) * 100),
      sun: Math.round((0.12 - base * 0.05) * 100),
      chair: Math.round((0.08 - base * 0.04) * 100),
    };
  }, [data]);

  const reset = () => {
    setData(60);
    setChoice("fruit");
  };

  const selected = wordOptions.find((opt) => opt.key === choice);

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
          <p className="text-sm font-semibold text-slate-700">{labels.prompt}</p>
          <p className="rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-700">
            {isZh ? "妈妈去市场买 _______" : "Mom went to the market to buy _______"}
          </p>
          <div className="flex flex-wrap gap-2">
            {wordOptions.map((opt) => {
              const label = isZh ? opt.zh : opt.en;
              const active = opt.key === choice;
              return (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => setChoice(opt.key)}
                  className={[
                    "rounded-full border px-3 py-1 text-xs font-semibold transition",
                    active
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900",
                  ].join(" ")}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <label className="block text-sm font-semibold text-slate-700">
            {labels.data}
            <input
              type="range"
              min={0}
              max={100}
              value={data}
              onChange={(e) => setData(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{data}</span>
          </label>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{labels.probability}</p>
          <p className="text-lg font-semibold text-slate-900">
            {selected ? (isZh ? selected.zh : selected.en) : ""} · {probs[choice as keyof typeof probs]}%
          </p>
          <div className="mt-3 space-y-2">
            {wordOptions.map((opt) => (
              <ProbabilityBar
                key={opt.key}
                label={isZh ? opt.zh : opt.en}
                value={probs[opt.key as keyof typeof probs]}
              />
            ))}
          </div>
          <div className="mt-3 rounded-lg bg-white px-3 py-2 text-xs text-slate-600">{labels.note}</div>
        </div>
      </div>
    </div>
  );
}

function ProbabilityBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
        <span>{label}</span>
        <span className="text-slate-900">{value}%</span>
      </div>
      <div className="mt-1 h-2 rounded-full bg-white">
        <div
          className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all"
          style={{ width: `${Math.min(100, value)}%` }}
          aria-hidden
        />
      </div>
    </div>
  );
}

function SequencePatternDemo({
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
  labels: { sequence: string; text: string; video: string; context: string; note: string };
}) {
  const isZh = lang === "zh";
  const [mode, setMode] = useState<"text" | "video">("text");
  const [context, setContext] = useState(3);

  const coherence = useMemo(() => {
    const base = mode === "text" ? 50 : 40;
    return Math.min(100, Math.round(base + context * 12));
  }, [context, mode]);

  const reset = () => {
    setMode("text");
    setContext(3);
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
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{labels.sequence}</p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setMode("text")}
              className={[
                "flex-1 rounded-xl border px-3 py-2 text-sm font-semibold transition",
                mode === "text"
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white hover:border-slate-300",
              ].join(" ")}
            >
              {labels.text}
            </button>
            <button
              type="button"
              onClick={() => setMode("video")}
              className={[
                "flex-1 rounded-xl border px-3 py-2 text-sm font-semibold transition",
                mode === "video"
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white hover:border-slate-300",
              ].join(" ")}
            >
              {labels.video}
            </button>
          </div>
          <label className="block text-sm font-semibold text-slate-700">
            {labels.context}
            <input
              type="range"
              min={1}
              max={5}
              value={context}
              onChange={(e) => setContext(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{context}</span>
          </label>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
            {isZh ? "连贯度" : "Coherence"}
          </p>
          <p className="text-2xl font-semibold text-slate-900">{coherence}%</p>
          <p className="mt-2 text-xs text-slate-600">{labels.note}</p>
        </div>
      </div>
    </div>
  );
}

function VerificationDemo({
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
  labels: { verify: string; accuracy: string; note: string };
}) {
  const isZh = lang === "zh";
  const [verify, setVerify] = useState(40);

  const accuracy = useMemo(() => Math.min(100, Math.round(50 + verify * 0.5)), [verify]);

  const reset = () => setVerify(40);

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
            {labels.verify}
            <input
              type="range"
              min={0}
              max={100}
              value={verify}
              onChange={(e) => setVerify(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{verify}</span>
          </label>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{labels.accuracy}</p>
          <p className="text-2xl font-semibold text-slate-900">{accuracy}%</p>
          <p className="mt-2 text-xs text-slate-600">{labels.note}</p>
        </div>
      </div>
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand language models and how they differ from traditional approaches.",
      "Know how large language models like ChatGPT were born.",
      "Recognize limitations and use LLMs rationally.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Overview",
    introText:
      "Large language models feel like magic, but they are built on the simple idea of predicting the next word in a sequence.",
    secretTitle: "1. The Secret of Language",
    secretEyebrow: "Word chains",
    secretConceptTitle: "Concept Card",
    secretConceptLines: [
      "Language stores human knowledge and habits.",
      "Rule-based grammar was hard to scale.",
      "Language models predict the next word like a word chain game.",
    ],
    secretParas: [
      "Traditional language understanding tried to parse grammar and meaning, but real language is messy.",
      "A language model uses statistics to guess the most likely next word, like “Mom went to the market to buy ____.”",
    ],
    secretFigure: {
      label: "Fig. 7-24",
      caption: "Example of a word chain game.",
      placeholder: "Illustration placeholder",
    },
    secretDemo: {
      title: "Word Chain Picker",
      goal: "See how probability chooses the next word.",
      labels: {
        prompt: "Sentence prompt",
        data: "Training data size",
        probability: "Next-word probability",
        note: "More data makes common words more likely than strange ones.",
      },
    },
    secretSteps: [
      "Pick a candidate word.",
      "Adjust the data size slider.",
      "Explain which word is most reasonable.",
    ],
    secretCheckpoint: {
      prompt: "What is a language model’s main job?",
      options: [
        {
          label: "Predict the probability of the next word.",
          correct: true,
          explanation: "Language models estimate next-word probabilities.",
        },
        {
          label: "Only check spelling mistakes.",
          correct: false,
          explanation: "They do more than spelling correction.",
        },
        {
          label: "Store videos on a server.",
          correct: false,
          explanation: "That is not a language model task.",
        },
      ],
    },
    chatgptTitle: "2. The Birth of ChatGPT",
    chatgptEyebrow: "Transformer era",
    chatgptConceptTitle: "Concept Card",
    chatgptConceptLines: [
      "Transformers can look far back in a sequence.",
      "GPT models generate text word by word.",
      "Scaling data and model size produced ChatGPT.",
    ],
    chatgptParas: [
      "The Transformer architecture (2017) enabled long-context modeling.",
      "GPT models learn from massive text and generate responses that feel human-like.",
    ],
    chatgptFigures: [
      {
        label: "Fig. 7-25",
        caption: "Example of GPT generating text word by word.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Fig. 7-26",
        caption: "Timeline of OpenAI’s large language model releases.",
        placeholder: "Illustration placeholder",
      },
    ],
    chatgptSteps: [
      "Pick a token in the attention demo.",
      "See which words it focuses on.",
      "Explain why long context helps understanding.",
    ],
    chatgptCheckpoint: {
      prompt: "Why are Transformers important for LLMs?",
      options: [
        {
          label: "They can model long sequences of words.",
          correct: true,
          explanation: "Long context improves understanding and generation.",
        },
        {
          label: "They only store images.",
          correct: false,
          explanation: "Transformers are sequence models, not storage devices.",
        },
        {
          label: "They replace all training data.",
          correct: false,
          explanation: "Data is still required to train LLMs.",
        },
      ],
    },
    videoTitle: "3. From Text Generation to Video Generation",
    videoEyebrow: "Sequences everywhere",
    videoConceptTitle: "Concept Card",
    videoConceptLines: [
      "Sequences appear in text, images, and video.",
      "Models can learn temporal and spatial patterns.",
      "Sora shows how video generation can follow physics-like rules.",
    ],
    videoParas: [
      "Video contains both spatial patterns in each frame and temporal patterns across frames.",
      "Learning these sequences helps models generate coherent videos.",
    ],
    videoFigures: [
      {
        label: "Fig. 7-27",
        caption: "Sequential patterns as a universal law in nature.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Fig. 7-28",
        caption: "Screenshot from a Sora-generated video.",
        placeholder: "Illustration placeholder",
      },
    ],
    videoDemo: {
      title: "Sequence Pattern Explorer",
      goal: "Compare sequences in text and video.",
      labels: {
        sequence: "Sequence type",
        text: "Text",
        video: "Video",
        context: "Context length",
        note: "Longer context improves coherence for both text and video.",
      },
    },
    videoSteps: [
      "Switch between text and video.",
      "Increase the context length.",
      "Observe the coherence score.",
    ],
    videoCheckpoint: {
      prompt: "Why can video generation use ideas from language models?",
      options: [
        {
          label: "Both involve learning sequences and patterns.",
          correct: true,
          explanation: "Videos and language both have sequential structure.",
        },
        {
          label: "Videos have no time order.",
          correct: false,
          explanation: "Video frames are ordered in time.",
        },
        {
          label: "Language models never use patterns.",
          correct: false,
          explanation: "Patterns are core to language modeling.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Limits",
    foodParas: [
      "LLMs are powerful but can produce wrong facts because they predict probabilities.",
      "We should use them as assistants, not unquestioned authorities.",
    ],
    foodDemo: {
      title: "Verification Habit",
      goal: "See how checking facts improves reliability.",
      labels: {
        verify: "Verification effort",
        accuracy: "Estimated reliability",
        note: "More verification helps catch mistakes and reduce misinformation.",
      },
    },
    foodSteps: [
      "Increase verification effort.",
      "Observe reliability change.",
      "Describe how you would verify important facts.",
    ],
    foodCheckpoint: {
      prompt: "What is a safe way to use LLMs?",
      options: [
        {
          label: "Use them for help but verify key facts.",
          correct: true,
          explanation: "LLMs can be wrong; verification is essential.",
        },
        {
          label: "Trust every answer completely.",
          correct: false,
          explanation: "LLMs may generate errors.",
        },
        {
          label: "Never use them at all.",
          correct: false,
          explanation: "They can be useful when used carefully.",
        },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryEyebrow: "Summary",
    summaryPoints: [
      "Language models predict the next word to generate text.",
      "Transformers enabled long-context LLMs like ChatGPT.",
      "LLMs are powerful but require careful verification.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解语言模型与传统方法的差异。",
      "了解 ChatGPT 等大语言模型的诞生。",
      "认识大语言模型的局限并理性使用。",
    ],
    introTitle: "故事开始",
    introEyebrow: "概览",
    introText: "大语言模型看起来像魔法，但核心思想只是预测下一个词。",
    secretTitle: "1. 语言的秘密",
    secretEyebrow: "词语接龙",
    secretConceptTitle: "概念卡片",
    secretConceptLines: [
      "语言承载人类知识与习惯。",
      "规则法很难覆盖真实语言。",
      "语言模型像词语接龙一样预测下一个词。",
    ],
    secretParas: [
      "传统语言理解试图用语法规则解析句子，但真实语言变化太多。",
      "语言模型通过统计判断“最合理”的下一个词。",
    ],
    secretFigure: {
      label: "图 7-24",
      caption: "词语接龙示例。",
      placeholder: "示意图占位",
    },
    secretDemo: {
      title: "词语接龙选择",
      goal: "体验概率如何决定下一个词。",
      labels: {
        prompt: "句子提示",
        data: "训练数据量",
        probability: "下一个词概率",
        note: "数据越多，常见词更容易被选中。",
      },
    },
    secretSteps: [
      "选择一个候选词。",
      "拖动数据量滑块。",
      "解释哪个词更合理。",
    ],
    secretCheckpoint: {
      prompt: "语言模型最主要的任务是？",
      options: [
        {
          label: "预测下一个词的概率。",
          correct: true,
          explanation: "语言模型做的是下一个词预测。",
        },
        {
          label: "只检查拼写错误。",
          correct: false,
          explanation: "它的能力远不止拼写检查。",
        },
        {
          label: "存储视频文件。",
          correct: false,
          explanation: "这不是语言模型的工作。",
        },
      ],
    },
    chatgptTitle: "2. ChatGPT 的诞生",
    chatgptEyebrow: "Transformer 时代",
    chatgptConceptTitle: "概念卡片",
    chatgptConceptLines: [
      "Transformer 可以看到更长的上下文。",
      "GPT 逐词生成文本。",
      "模型与数据规模扩大，诞生 ChatGPT。",
    ],
    chatgptParas: [
      "2017 年的 Transformer 架构让模型能处理长序列。",
      "GPT 模型从海量文本中学习，生成看起来很自然的回答。",
    ],
    chatgptFigures: [
      {
        label: "图 7-25",
        caption: "GPT 逐词生成文本示例。",
        placeholder: "示意图占位",
      },
      {
        label: "图 7-26",
        caption: "OpenAI 大语言模型发布时间线。",
        placeholder: "示意图占位",
      },
    ],
    chatgptSteps: [
      "在注意力演示中选择一个词。",
      "观察它关注哪些词。",
      "说明长上下文的重要性。",
    ],
    chatgptCheckpoint: {
      prompt: "Transformer 为什么重要？",
      options: [
        {
          label: "它能处理很长的词序列。",
          correct: true,
          explanation: "长上下文让模型理解更完整。",
        },
        {
          label: "它只负责存储图片。",
          correct: false,
          explanation: "Transformer 是序列模型。",
        },
        {
          label: "它不需要训练数据。",
          correct: false,
          explanation: "训练仍然需要大量数据。",
        },
      ],
    },
    videoTitle: "3. 从文本到视频生成",
    videoEyebrow: "序列规律",
    videoConceptTitle: "概念卡片",
    videoConceptLines: [
      "序列不仅存在于文本，也存在于视频。",
      "模型可以学习时间与空间的模式。",
      "Sora 展示了视频生成的潜力。",
    ],
    videoParas: [
      "视频每一帧都有空间结构，帧之间又有时间顺序。",
      "学会这些序列模式就能生成连贯的视频。",
    ],
    videoFigures: [
      {
        label: "图 7-27",
        caption: "序列模式是自然界的普遍规律。",
        placeholder: "示意图占位",
      },
      {
        label: "图 7-28",
        caption: "Sora 生成视频截图。",
        placeholder: "示意图占位",
      },
    ],
    videoDemo: {
      title: "序列模式探索",
      goal: "比较文本与视频中的序列规律。",
      labels: {
        sequence: "序列类型",
        text: "文本",
        video: "视频",
        context: "上下文长度",
        note: "上下文越长，生成越连贯。",
      },
    },
    videoSteps: [
      "在文本与视频之间切换。",
      "增大上下文长度。",
      "观察连贯度变化。",
    ],
    videoCheckpoint: {
      prompt: "视频生成为什么能借鉴语言模型？",
      options: [
        {
          label: "两者都需要学习序列模式。",
          correct: true,
          explanation: "视频与语言都依赖序列结构。",
        },
        {
          label: "视频没有时间顺序。",
          correct: false,
          explanation: "视频帧有明确时间顺序。",
        },
        {
          label: "语言模型不用模式。",
          correct: false,
          explanation: "语言模型正是靠模式学习。",
        },
      ],
    },
    foodTitle: "想一想",
    foodEyebrow: "局限",
    foodParas: [
      "大语言模型依赖概率统计，可能产生错误信息。",
      "我们应把它当作助手，并对关键事实进行验证。",
    ],
    foodDemo: {
      title: "核验习惯",
      goal: "体验核验如何提升可靠性。",
      labels: {
        verify: "核验力度",
        accuracy: "估计可靠性",
        note: "核验越充分，越能减少错误与误导。",
      },
    },
    foodSteps: [
      "提高核验力度。",
      "观察可靠性变化。",
      "说说你如何核验重要信息。",
    ],
    foodCheckpoint: {
      prompt: "使用 LLM 的安全方式是？",
      options: [
        {
          label: "把它当工具并验证关键事实。",
          correct: true,
          explanation: "核验能减少错误。",
        },
        {
          label: "完全相信所有回答。",
          correct: false,
          explanation: "LLM 可能出错。",
        },
        {
          label: "从来不用它。",
          correct: false,
          explanation: "合理使用仍然有价值。",
        },
      ],
    },
    summaryTitle: "关键结论",
    summaryEyebrow: "总结",
    summaryPoints: [
      "语言模型通过预测下一个词生成文本。",
      "Transformer 让大模型能处理长上下文。",
      "强大工具仍需核验与理性使用。",
    ],
  },
};
