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

export function PrimaryLesson5_4({ lang }: LessonProps) {
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
    { id: "brain", label: t.brainTitle },
    { id: "networks", label: t.networksTitle },
    { id: "revolution", label: t.revolutionTitle },
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

        <SectionBlock id="brain" title={t.brainTitle} eyebrow={t.brainEyebrow}>
          <InfoCard title={t.brainConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.brainConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.brainParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.brainFigure.label}
            caption={t.brainFigure.caption}
            placeholder={t.brainFigure.placeholder}
          />
          <ConnectionStrengthDemo
            lang={lang}
            title={t.brainDemo.title}
            goal={t.brainDemo.goal}
            resetLabel={ui.reset}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.brainSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.brainCheckpoint.prompt}
            options={t.brainCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="networks" title={t.networksTitle} eyebrow={t.networksEyebrow}>
          <InfoCard title={t.networksConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.networksConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.networksParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <div className="grid gap-3 md:grid-cols-2">
            {t.networksFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <LayerDepthDemo
            lang={lang}
            title={t.networksDemo.title}
            goal={t.networksDemo.goal}
            resetLabel={ui.reset}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.networksSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.networksCheckpoint.prompt}
            options={t.networksCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="revolution" title={t.revolutionTitle} eyebrow={t.revolutionEyebrow}>
          <InfoCard title={t.revolutionConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.revolutionConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.revolutionParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <div className="grid gap-3 md:grid-cols-3">
            {t.revolutionFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <FounderSpotlightDemo
            lang={lang}
            title={t.revolutionDemo.title}
            goal={t.revolutionDemo.goal}
            resetLabel={ui.reset}
            founders={t.revolutionDemo.founders}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.revolutionSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.revolutionCheckpoint.prompt}
            options={t.revolutionCheckpoint.options}
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

function ConnectionStrengthDemo({
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
  const [strength, setStrength] = useState(40);

  const note =
    strength < 40
      ? isZh
        ? "连接较弱，学习进步慢。"
        : "Weak connections mean slower learning."
      : strength < 70
        ? isZh
          ? "连接逐渐加强，能力在提升。"
          : "Connections strengthen as learning improves."
        : isZh
          ? "连接很强，知识技能增长更快。"
          : "Strong connections boost skills quickly.";

  const reset = () => setStrength(40);

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

      <label className="mt-3 block text-sm font-semibold text-slate-700">
        {isZh ? "连接强度" : "Connection strength"}
        <input
          type="range"
          min={0}
          max={100}
          value={strength}
          onChange={(e) => setStrength(Number(e.target.value))}
          className="mt-1 w-full accent-brand-500"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={strength}
        />
        <span className="text-xs text-slate-500">{strength}</span>
      </label>
      <div className="mt-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
        {note}
      </div>
    </div>
  );
}

function LayerDepthDemo({
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
  const [layers, setLayers] = useState(2);

  const label =
    layers <= 3
      ? isZh
        ? "浅层网络"
        : "Shallow network"
      : isZh
        ? "深层网络"
        : "Deep network";

  const reset = () => setLayers(2);

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
        <label className="block text-sm font-semibold text-slate-700">
          {isZh ? "网络层数" : "Number of layers"}
          <input
            type="range"
            min={1}
            max={8}
            value={layers}
            onChange={(e) => setLayers(Number(e.target.value))}
            className="mt-1 w-full accent-brand-500"
            aria-valuemin={1}
            aria-valuemax={8}
            aria-valuenow={layers}
          />
          <span className="text-xs text-slate-500">{layers}</span>
        </label>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "类型" : "Type"}
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{label}</p>
          <p className="mt-2 text-xs text-slate-600">
            {isZh
              ? "多层网络更容易学习复杂模式。"
              : "More layers help learn complex patterns."}
          </p>
        </div>
      </div>
    </div>
  );
}

type Founder = {
  key: string;
  name: string;
  detail: string;
};

function FounderSpotlightDemo({
  lang,
  title,
  goal,
  resetLabel,
  founders,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  founders: Founder[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(founders[0]?.key ?? "");
  const current = founders.find((founder) => founder.key === active) ?? founders[0];

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
          onClick={() => setActive(founders[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 grid gap-2 md:grid-cols-3">
        {founders.map((founder) => (
          <button
            key={founder.key}
            type="button"
            onClick={() => setActive(founder.key)}
            className={[
              "rounded-xl border px-3 py-2 text-left text-xs font-semibold transition",
              founder.key === active
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {founder.name}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "贡献" : "Contribution"}
          </p>
          <p className="mt-1 text-sm">{current.detail}</p>
        </div>
      )}
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand the era of deep learning and its key figure, Geoffrey Hinton.",
      "Learn the principles of artificial neural networks and major achievements.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "After 2010, deep learning boosted AI dramatically. This section explores why deep learning is powerful and who made it possible.",
    brainTitle: "1. Imitating the Brain",
    brainEyebrow: "Learning from neurons",
    brainConceptTitle: "Concept Card",
    brainConceptLines: [
      "Turing argued machines must learn on their own.",
      "The brain has many neurons with changing connections.",
      "Changing connections create new abilities.",
    ],
    brainParas: [
      "The human brain is a vast network of neurons. Each neuron is simple, but together they create intelligence.",
      "Learning happens as connection strengths change, just like children gaining knowledge over time.",
    ],
    brainFigure: {
      label: "Figure 5-8",
      caption: "Human brain neurons and their connections.",
      placeholder: "Illustration placeholder",
    },
    brainDemo: {
      title: "Connection Strength",
      goal: "Adjust connection strength to see learning change.",
    },
    brainSteps: [
      "Move the slider.",
      "Watch the learning note update.",
      "Explain how changing connections matters.",
    ],
    brainCheckpoint: {
      prompt: "Why do changing connections matter in learning?",
      options: [
        {
          label: "They allow the brain to gain new abilities over time.",
          correct: true,
          explanation: "Changing connections reflect learning.",
        },
        {
          label: "They stop the brain from learning.",
          correct: false,
          explanation: "They enable learning.",
        },
        {
          label: "They have no effect at all.",
          correct: false,
          explanation: "Connection strength is crucial to learning.",
        },
      ],
    },
    networksTitle: "2. Artificial Neural Networks and Deep Learning",
    networksEyebrow: "From models to depth",
    networksConceptTitle: "Concept Card",
    networksConceptLines: [
      "McCulloch and Pitts proposed a neuron model in 1943.",
      "Training deep networks was hard for decades.",
      "Hinton's 2006 work unlocked deep learning.",
    ],
    networksParas: [
      "The first artificial neural network models mimicked simple neurons connected by math rules.",
      "Progress was slow until better training methods emerged. Hinton's work in 2006 sparked a deep learning era.",
      "Deep neural networks have more than three layers, and deep learning is based on them.",
    ],
    networksFigures: [
      {
        label: "Figure 5-9",
        caption: "Creators of artificial neural networks and their model.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 5-10",
        caption: "A deep neural network.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 5-11",
        caption: "Relationship between deep learning, neural networks, ML, and AI.",
        placeholder: "Illustration placeholder",
      },
    ],
    networksDemo: {
      title: "Layer Depth",
      goal: "See how shallow vs. deep networks differ.",
    },
    networksSteps: [
      "Adjust the number of layers.",
      "Observe the network label.",
      "Explain why deep networks learn more.",
    ],
    networksCheckpoint: {
      prompt: "When is a neural network called deep?",
      options: [
        {
          label: "When it has more than three layers.",
          correct: true,
          explanation: "More than three layers is considered deep.",
        },
        {
          label: "When it has one layer only.",
          correct: false,
          explanation: "That would be a shallow network.",
        },
        {
          label: "When it has no layers.",
          correct: false,
          explanation: "A network needs layers.",
        },
      ],
    },
    revolutionTitle: "3. The Deep Learning Revolution",
    revolutionEyebrow: "Key contributors",
    revolutionConceptTitle: "Concept Card",
    revolutionConceptLines: [
      "Deep learning boosted accuracy in many tasks.",
      "Hinton, Bengio, and LeCun led the revolution.",
      "Their collaboration shaped modern AI.",
    ],
    revolutionParas: [
      "Deep learning raised face recognition accuracy to over 99% on many datasets.",
      "Hinton's breakthrough inspired a global community. Bengio and LeCun also made key contributions.",
      "In 2018, the ACM awarded them the Turing Award for deep learning.",
    ],
    revolutionFigures: [
      {
        label: "Figure 5-12a",
        caption: "Yoshua Bengio.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 5-12b",
        caption: "Geoffrey Hinton.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 5-12c",
        caption: "Yann LeCun.",
        placeholder: "Illustration placeholder",
      },
    ],
    revolutionDemo: {
      title: "Founders Spotlight",
      goal: "Meet the three pioneers of deep learning.",
      founders: [
        {
          key: "bengio",
          name: "Yoshua Bengio",
          detail: "Advanced deep learning methods and co-led the revolution.",
        },
        {
          key: "hinton",
          name: "Geoffrey Hinton",
          detail: "Unlocked deep networks in 2006 and inspired the field.",
        },
        {
          key: "lecun",
          name: "Yann LeCun",
          detail: "Pioneered neural network research and applied it widely.",
        },
      ],
    },
    revolutionSteps: [
      "Choose a founder.",
      "Read their contribution.",
      "Explain how teamwork advanced deep learning.",
    ],
    revolutionCheckpoint: {
      prompt: "Who received the 2018 Turing Award for deep learning?",
      options: [
        {
          label: "Bengio, Hinton, and LeCun.",
          correct: true,
          explanation: "They were honored for pioneering deep learning.",
        },
        {
          label: "Newton and Einstein.",
          correct: false,
          explanation: "They were not deep learning researchers.",
        },
        {
          label: "Kasparov and Deep Blue.",
          correct: false,
          explanation: "They are chess-related, not Turing Award winners.",
        },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryEyebrow: "Summary",
    summaryPoints: [
      "Deep learning imitates the brain's learning process.",
      "Deep neural networks have more than three layers.",
      "Hinton's 2006 work sparked the deep learning era.",
      "Bengio, Hinton, and LeCun led the revolution.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解深度学习时代及关键人物辛顿。",
      "理解人工神经网络的原理与深度学习成就。",
    ],
    introTitle: "故事开头",
    introEyebrow: "开场",
    introText: "2010 年后深度学习崛起，推动 AI 飞速发展。本节解释它为何强大。",
    brainTitle: "1. 模仿大脑",
    brainEyebrow: "向神经学习",
    brainConceptTitle: "概念卡片",
    brainConceptLines: [
      "图灵认为机器必须具备学习能力。",
      "大脑由大量神经元及可变连接组成。",
      "连接变化带来能力提升。",
    ],
    brainParas: [
      "人脑由大量神经元组成，单个神经元简单但整体很强大。",
      "学习就是连接强度不断变化，儿童也因此不断成长。",
    ],
    brainFigure: {
      label: "图 5-8",
      caption: "人脑神经元及其连接。",
      placeholder: "插图占位",
    },
    brainDemo: {
      title: "连接强度",
      goal: "调整连接强度观察学习变化。",
    },
    brainSteps: [
      "拖动滑块。",
      "观察提示变化。",
      "说明连接变化的重要性。",
    ],
    brainCheckpoint: {
      prompt: "为什么连接强度会影响学习？",
      options: [
        {
          label: "连接变化让大脑获得新能力。",
          correct: true,
          explanation: "连接变化是学习的关键。",
        },
        {
          label: "连接变化会阻碍学习。",
          correct: false,
          explanation: "它促进学习。",
        },
        {
          label: "连接变化没有作用。",
          correct: false,
          explanation: "连接强度很重要。",
        },
      ],
    },
    networksTitle: "2. 人工神经网络与深度学习",
    networksEyebrow: "网络与层数",
    networksConceptTitle: "概念卡片",
    networksConceptLines: [
      "1943 年提出了神经元模型。",
      "长期缺乏有效训练方法。",
      "2006 年辛顿打开深度学习时代。",
    ],
    networksParas: [
      "麦卡洛克和皮茨提出神经元模型，模拟脑结构。",
      "训练深层网络困难，许多人放弃。",
      "辛顿在 2006 年提出方法，释放深层网络潜力。",
    ],
    networksFigures: [
      {
        label: "图 5-9",
        caption: "人工神经网络的提出者与模型。",
        placeholder: "插图占位",
      },
      {
        label: "图 5-10",
        caption: "深层神经网络。",
        placeholder: "插图占位",
      },
      {
        label: "图 5-11",
        caption: "深度学习、神经网络、机器学习与 AI 的关系。",
        placeholder: "插图占位",
      },
    ],
    networksDemo: {
      title: "网络层数",
      goal: "比较浅层与深层网络。",
    },
    networksSteps: [
      "调整层数。",
      "观察网络类型。",
      "说明深层网络的优势。",
    ],
    networksCheckpoint: {
      prompt: "神经网络在什么情况下称为深度？",
      options: [
        {
          label: "层数超过三层。",
          correct: true,
          explanation: "多于三层即为深层网络。",
        },
        {
          label: "只有一层。",
          correct: false,
          explanation: "一层是浅层网络。",
        },
        {
          label: "没有层。",
          correct: false,
          explanation: "神经网络必须有层。",
        },
      ],
    },
    revolutionTitle: "3. 深度学习革命",
    revolutionEyebrow: "重要贡献者",
    revolutionConceptTitle: "概念卡片",
    revolutionConceptLines: [
      "深度学习带来高准确率。",
      "辛顿、班吉奥、勒昆贡献巨大。",
      "合作推动了领域发展。",
    ],
    revolutionParas: [
      "深度学习使人脸识别准确率超过 99%。",
      "辛顿带动全球研究者，班吉奥和勒昆也贡献突出。",
      "2018 年三人获得图灵奖。",
    ],
    revolutionFigures: [
      {
        label: "图 5-12a",
        caption: "约书亚·班吉奥。",
        placeholder: "插图占位",
      },
      {
        label: "图 5-12b",
        caption: "杰弗里·辛顿。",
        placeholder: "插图占位",
      },
      {
        label: "图 5-12c",
        caption: "杨·勒昆。",
        placeholder: "插图占位",
      },
    ],
    revolutionDemo: {
      title: "三位奠基者",
      goal: "认识深度学习的先驱。",
      founders: [
        {
          key: "bengio",
          name: "约书亚·班吉奥",
          detail: "推动深度学习方法发展。",
        },
        {
          key: "hinton",
          name: "杰弗里·辛顿",
          detail: "2006 年突破，带来深度学习时代。",
        },
        {
          key: "lecun",
          name: "杨·勒昆",
          detail: "神经网络与应用研究先驱。",
        },
      ],
    },
    revolutionSteps: [
      "选择一位科学家。",
      "了解他的贡献。",
      "说明合作的重要性。",
    ],
    revolutionCheckpoint: {
      prompt: "2018 年图灵奖授予了谁？",
      options: [
        {
          label: "班吉奥、辛顿、勒昆。",
          correct: true,
          explanation: "他们共同推动深度学习。",
        },
        {
          label: "牛顿和爱因斯坦。",
          correct: false,
          explanation: "他们不是深度学习研究者。",
        },
        {
          label: "卡斯帕罗夫和深蓝。",
          correct: false,
          explanation: "这与图灵奖无关。",
        },
      ],
    },
    summaryTitle: "要点回顾",
    summaryEyebrow: "总结",
    summaryPoints: [
      "深度学习模仿大脑学习机制。",
      "深层神经网络层数超过三层。",
      "辛顿的 2006 年成果开启新时代。",
      "班吉奥、辛顿、勒昆共同推动发展。",
    ],
  },
};
