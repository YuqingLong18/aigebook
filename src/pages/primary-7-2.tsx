import { useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { FigureCard } from "../components/FigureCard";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { FruitBoundaryDemo } from "../demos/FruitBoundaryDemo";
import { XORLimitDemo } from "../demos/XORLimitDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function PrimaryLesson7_2({ lang }: LessonProps) {
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
    { id: "rosenblatt", label: t.rosenblattTitle },
    { id: "perceptron", label: t.perceptronTitle },
    { id: "limits", label: t.limitsTitle },
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

        <SectionBlock id="rosenblatt" title={t.rosenblattTitle} eyebrow={t.rosenblattEyebrow}>
          <InfoCard title={t.rosenblattConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.rosenblattConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.rosenblattParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.rosenblattFigure.label}
            caption={t.rosenblattFigure.caption}
            placeholder={t.rosenblattFigure.placeholder}
          />
          <RosenblattTimelineDemo
            lang={lang}
            title={t.rosenblattDemo.title}
            goal={t.rosenblattDemo.goal}
            resetLabel={ui.reset}
            events={t.rosenblattDemo.events}
            labels={t.rosenblattDemo.labels}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.rosenblattSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.rosenblattCheckpoint.prompt}
            options={t.rosenblattCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="perceptron" title={t.perceptronTitle} eyebrow={t.perceptronEyebrow}>
          <InfoCard title={t.perceptronConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.perceptronConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.perceptronParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <div className="grid gap-3 md:grid-cols-2">
            {t.perceptronFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <FruitBoundaryDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.perceptronSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.perceptronCheckpoint.prompt}
            options={t.perceptronCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="limits" title={t.limitsTitle} eyebrow={t.limitsEyebrow}>
          <InfoCard title={t.limitsConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.limitsConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.limitsParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.limitsFigure.label}
            caption={t.limitsFigure.caption}
            placeholder={t.limitsFigure.placeholder}
          />
          <XORLimitDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.limitsSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.limitsCheckpoint.prompt}
            options={t.limitsCheckpoint.options}
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
          <DebateBalanceDemo
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

type TimelineEvent = {
  key: string;
  label: string;
  detail: string;
};

function RosenblattTimelineDemo({
  lang,
  title,
  goal,
  resetLabel,
  events,
  labels,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  events: TimelineEvent[];
  labels: { pick: string; detail: string };
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(events[0]?.key ?? "");
  const current = events.find((event) => event.key === active) ?? events[0];

  const reset = () => {
    setActive(events[0]?.key ?? "");
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

      <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.pick}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {events.map((event) => {
            const selected = event.key === active;
            return (
              <button
                key={event.key}
                type="button"
                className={[
                  "rounded-full border px-3 py-1 text-xs font-semibold transition",
                  selected
                    ? "border-brand-500 bg-brand-50 text-brand-700"
                    : "border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900",
                ].join(" ")}
                onClick={() => setActive(event.key)}
              >
                {event.label}
              </button>
            );
          })}
        </div>
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.detail}</p>
          <p className="mt-2 text-sm font-semibold text-slate-900">{current.detail}</p>
        </div>
      )}
    </div>
  );
}

function DebateBalanceDemo({
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
  labels: { scale: string; left: string; right: string; note: string };
}) {
  const isZh = lang === "zh";
  const [value, setValue] = useState(50);

  const reset = () => {
    setValue(50);
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

      <div className="mt-3 space-y-3">
        <label className="block text-sm font-semibold text-slate-700">
          {labels.scale}
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
        <div className="rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-700">
          {labels.note}
        </div>
      </div>
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Learn the life and work of Frank Rosenblatt.",
      "Understand how the perceptron learns through adjustable weights.",
      "Know the perceptron's significance and limitations.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "Rosenblatt extended the M-P model into a learning system called the perceptron, the first neural network that could learn.",
    rosenblattTitle: "1. Rosenblatt and His Perceptron Model",
    rosenblattEyebrow: "Pioneer story",
    rosenblattConceptTitle: "Concept Card",
    rosenblattConceptLines: [
      "Born in 1928, Rosenblatt studied psychology at Cornell.",
      "He designed the perceptron in 1957 and built MARK I in 1960.",
      "His work sparked public excitement about learning machines.",
    ],
    rosenblattParas: [
      "The perceptron could learn to recognize letters by adjusting weights.",
      "Newspapers called it a prototype of the electronic computer.",
      "Rosenblatt later led the Cognitive Systems Research Lab at Cornell.",
    ],
    rosenblattFigure: {
      label: "Figure 7-7",
      caption: "Frank Rosenblatt and the Mark I Perceptron.",
      placeholder: "Illustration placeholder",
    },
    rosenblattDemo: {
      title: "Rosenblatt Timeline",
      goal: "Trace key moments in Rosenblatt's career.",
      labels: {
        pick: "Pick a moment",
        detail: "Detail",
      },
      events: [
        {
          key: "1950",
          label: "1950",
          detail: "Finished a psychology bachelor's degree at Cornell.",
        },
        {
          key: "1957",
          label: "1957",
          detail: "Designed the perceptron model.",
        },
        {
          key: "1960",
          label: "1960",
          detail: "Built the MARK I Perceptron hardware.",
        },
        {
          key: "1962",
          label: "1962",
          detail: "Published Principles of Neurodynamics.",
        },
      ],
    },
    rosenblattSteps: [
      "Select a timeline point.",
      "Read what happened.",
      "Connect it to the perceptron model.",
    ],
    rosenblattCheckpoint: {
      prompt: "What was MARK I Perceptron?",
      options: [
        {
          label: "A hardware machine built to run the perceptron.",
          correct: true,
          explanation: "Rosenblatt built a special device in 1960.",
        },
        {
          label: "A book about chess strategies.",
          correct: false,
          explanation: "It was a machine, not a book.",
        },
        {
          label: "A robot that could walk and talk.",
          correct: false,
          explanation: "The perceptron focused on pattern recognition.",
        },
      ],
    },
    perceptronTitle: "2. How the Perceptron Works",
    perceptronEyebrow: "Learning weights",
    perceptronConceptTitle: "Concept Card",
    perceptronConceptLines: [
      "Perceptron has input, hidden, and output layers.",
      "Only some connections are learnable.",
      "It was designed for visual recognition tasks.",
    ],
    perceptronParas: [
      "The input layer used a 20x20 grid of photodetectors.",
      "Hidden connections were fixed, while hidden-to-output weights could learn.",
      "The output unit for a letter would fire when its pattern was recognized.",
    ],
    perceptronFigures: [
      {
        label: "Figure 7-8",
        caption: "Diagram showing the structure of the perceptron.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 7-9",
        caption: "The perceptron recognizing the letter \"C\" in an image.",
        placeholder: "Illustration placeholder",
      },
    ],
    perceptronSteps: [
      "Adjust weights and bias.",
      "Watch how outputs change.",
      "Explain why learning weights matters.",
    ],
    perceptronCheckpoint: {
      prompt: "Which connections were learnable in Rosenblatt's perceptron?",
      options: [
        {
          label: "Hidden layer to output layer.",
          correct: true,
          explanation: "Those connections were adjusted during learning.",
        },
        {
          label: "Input layer to hidden layer only.",
          correct: false,
          explanation: "Those were random and fixed.",
        },
        {
          label: "All connections everywhere.",
          correct: false,
          explanation: "Only part of the network learned.",
        },
      ],
    },
    limitsTitle: "3. Limitations and Significance",
    limitsEyebrow: "Linear separability",
    limitsConceptTitle: "Concept Card",
    limitsConceptLines: [
      "Perceptron solves only linearly separable problems.",
      "Minsky and Papert highlighted this limitation.",
      "Despite limits, it opened the path to learning machines.",
    ],
    limitsParas: [
      "Minsky and Papert wrote Perceptrons to explain the limitation.",
      "Research momentum slowed, but the perceptron still inspired future neural networks.",
    ],
    limitsFigure: {
      label: "Figure 7-10",
      caption: "Marvin Minsky and the book Perceptrons: An Introduction to Computational Geometry.",
      placeholder: "Illustration placeholder",
    },
    limitsSteps: [
      "Adjust the line.",
      "See why XOR cannot be separated.",
      "Connect this to perceptron limits.",
    ],
    limitsCheckpoint: {
      prompt: "What problem showed a key perceptron limitation?",
      options: [
        {
          label: "XOR is not linearly separable.",
          correct: true,
          explanation: "A single line cannot separate XOR points.",
        },
        {
          label: "Sorting numbers.",
          correct: false,
          explanation: "Sorting is not the classic perceptron limit example.",
        },
        {
          label: "Adding two digits.",
          correct: false,
          explanation: "Addition is not the focus here.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Historical debate",
    foodParas: [
      "Some believe Minsky's book slowed neural network research.",
      "Others think critique was necessary for scientific progress.",
    ],
    foodDemo: {
      title: "Debate Scale",
      goal: "Reflect on the book's impact on research momentum.",
      labels: {
        scale: "Where do you stand?",
        left: "Slowed progress",
        right: "Necessary critique",
        note: "Balanced views often acknowledge both caution and inspiration.",
      },
    },
    foodSteps: [
      "Move the scale.",
      "Consider both sides.",
      "Share a balanced view.",
    ],
    foodCheckpoint: {
      prompt: "What is a fair view of the Perceptrons debate?",
      options: [
        {
          label: "Critique slowed progress but clarified real limits.",
          correct: true,
          explanation: "Both caution and progress matter in science.",
        },
        {
          label: "Critique had no effect at all.",
          correct: false,
          explanation: "It did influence research momentum.",
        },
        {
          label: "Critique should never be allowed.",
          correct: false,
          explanation: "Critical analysis is essential to science.",
        },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryEyebrow: "Summary",
    summaryPoints: [
      "Rosenblatt created the perceptron, a learnable neural model.",
      "The perceptron adjusted weights to recognize patterns.",
      "It was limited to linearly separable problems like XOR.",
      "Despite limits, it opened a new path for AI research.",
      "Debate around it shows the value of critique and persistence.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解罗森布拉特与感知机的故事。",
      "理解感知机如何通过权重学习。",
      "认识感知机的重要性与局限性。",
    ],
    introTitle: "故事开头",
    introEyebrow: "开场",
    introText:
      "罗森布拉特把 M-P 模型发展成可学习的感知机，开启了神经网络学习时代。",
    rosenblattTitle: "1. 罗森布拉特与感知机模型",
    rosenblattEyebrow: "先驱故事",
    rosenblattConceptTitle: "概念卡",
    rosenblattConceptLines: [
      "罗森布拉特 1928 年出生，学习心理学。",
      "1957 年设计感知机，1960 年制作 MARK I。",
      "他的成果引发社会关注。",
    ],
    rosenblattParas: [
      "感知机可以学习识别字母等图像特征。",
      "媒体曾称它为电子计算机的原型。",
      "他后来在康奈尔领导认知系统研究。",
    ],
    rosenblattFigure: {
      label: "图 7-7",
      caption: "罗森布拉特与 Mark I 感知机。",
      placeholder: "示意图",
    },
    rosenblattDemo: {
      title: "罗森布拉特时间线",
      goal: "回顾感知机关键节点。",
      labels: {
        pick: "选择节点",
        detail: "细节",
      },
      events: [
        {
          key: "1950",
          label: "1950",
          detail: "完成康奈尔心理学本科。",
        },
        {
          key: "1957",
          label: "1957",
          detail: "设计感知机模型。",
        },
        {
          key: "1960",
          label: "1960",
          detail: "制作 MARK I 感知机。",
        },
        {
          key: "1962",
          label: "1962",
          detail: "出版《神经动力学原理》。",
        },
      ],
    },
    rosenblattSteps: [
      "选择一个年份。",
      "阅读事件。",
      "联系感知机模型。",
    ],
    rosenblattCheckpoint: {
      prompt: "MARK I 感知机是什么？",
      options: [
        {
          label: "用于运行感知机的硬件机器。",
          correct: true,
          explanation: "它是罗森布拉特搭建的设备。",
        },
        {
          label: "一本棋类策略书。",
          correct: false,
          explanation: "它不是书。",
        },
        {
          label: "会行走的机器人。",
          correct: false,
          explanation: "感知机主要用于识别。",
        },
      ],
    },
    perceptronTitle: "2. 感知机如何工作",
    perceptronEyebrow: "权重学习",
    perceptronConceptTitle: "概念卡",
    perceptronConceptLines: [
      "感知机包含输入层、隐层、输出层。",
      "部分连接可学习。",
      "主要用于识别图像特征。",
    ],
    perceptronParas: [
      "输入层由 20x20 光电探测器组成。",
      "隐层到输出层的连接可以学习。",
      "识别字母时对应输出神经元被激活。",
    ],
    perceptronFigures: [
      {
        label: "图 7-8",
        caption: "感知机结构示意图。",
        placeholder: "示意图",
      },
      {
        label: "图 7-9",
        caption: "感知机识别字母 C。",
        placeholder: "示意图",
      },
    ],
    perceptronSteps: [
      "调整权重与偏置。",
      "观察输出变化。",
      "说明学习权重的意义。",
    ],
    perceptronCheckpoint: {
      prompt: "感知机中哪些连接可以学习？",
      options: [
        {
          label: "隐层到输出层。",
          correct: true,
          explanation: "这些权重会被更新。",
        },
        {
          label: "输入层到隐层。",
          correct: false,
          explanation: "这部分是固定的。",
        },
        {
          label: "所有连接都可学习。",
          correct: false,
          explanation: "感知机只学习部分连接。",
        },
      ],
    },
    limitsTitle: "3. 局限与意义",
    limitsEyebrow: "线性可分",
    limitsConceptTitle: "概念卡",
    limitsConceptLines: [
      "感知机只能解决线性可分问题。",
      "明斯基与帕珀特指出其不足。",
      "它仍然开辟了机器学习的新道路。",
    ],
    limitsParas: [
      "《感知机》一书让研究热度下降，但也明确了限制。",
      "这为后续多层网络研究奠定了基础。",
    ],
    limitsFigure: {
      label: "图 7-10",
      caption: "明斯基与《感知机》一书。",
      placeholder: "示意图",
    },
    limitsSteps: [
      "调整直线位置。",
      "发现 XOR 无法被分开。",
      "联系感知机局限。",
    ],
    limitsCheckpoint: {
      prompt: "感知机的典型局限是什么？",
      options: [
        {
          label: "无法解决 XOR 等非线性可分问题。",
          correct: true,
          explanation: "单层感知机无法分开 XOR。",
        },
        {
          label: "无法计算加法。",
          correct: false,
          explanation: "加法不是感知机局限。",
        },
        {
          label: "无法读取输入。",
          correct: false,
          explanation: "输入层可以读取数据。",
        },
      ],
    },
    foodTitle: "想一想",
    foodEyebrow: "历史反思",
    foodParas: [
      "有人认为《感知机》拖慢了研究进度。",
      "也有人认为批评让方向更清晰。",
    ],
    foodDemo: {
      title: "观点平衡",
      goal: "思考批评与进步的关系。",
      labels: {
        scale: "你的立场",
        left: "拖慢进度",
        right: "必要批评",
        note: "理性的观点往往承认两者作用。",
      },
    },
    foodSteps: [
      "拖动刻度。",
      "考虑两种观点。",
      "说出你的平衡理解。",
    ],
    foodCheckpoint: {
      prompt: "对《感知机》争议较合理的看法是？",
      options: [
        {
          label: "它既提醒局限，也带来反思。",
          correct: true,
          explanation: "科学需要批评与坚持。",
        },
        {
          label: "它完全没有影响。",
          correct: false,
          explanation: "它确实影响了研究氛围。",
        },
        {
          label: "批评永远不应该存在。",
          correct: false,
          explanation: "批评推动科学进步。",
        },
      ],
    },
    summaryTitle: "要点回顾",
    summaryEyebrow: "总结",
    summaryPoints: [
      "罗森布拉特提出感知机并搭建机器。",
      "感知机通过调整权重学习识别。",
      "单层感知机只能解决线性可分问题。",
      "感知机为后续神经网络奠基。",
      "科学发展需要批评与坚持。",
    ],
  },
};
