import { useMemo, useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { FigureCard } from "../components/FigureCard";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";

type LessonProps = {
  lang: "en" | "zh";
};

export function PrimaryLesson7_4({ lang }: LessonProps) {
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
    { id: "child", label: t.childTitle },
    { id: "birth", label: t.birthTitle },
    { id: "impact", label: t.impactTitle },
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

        <SectionBlock id="child" title={t.childTitle} eyebrow={t.childEyebrow}>
          <InfoCard title={t.childConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.childConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.childParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.childFigure.label}
            caption={t.childFigure.caption}
            placeholder={t.childFigure.placeholder}
          />
          <FeiFeiTimelineDemo
            lang={lang}
            title={t.childDemo.title}
            goal={t.childDemo.goal}
            resetLabel={ui.reset}
            events={t.childDemo.events}
            labels={t.childDemo.labels}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.childSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.childCheckpoint.prompt}
            options={t.childCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
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
          <FigureCard
            label={t.birthFigure.label}
            caption={t.birthFigure.caption}
            placeholder={t.birthFigure.placeholder}
          />
          <DatasetBuilderDemo
            lang={lang}
            title={t.birthDemo.title}
            goal={t.birthDemo.goal}
            resetLabel={ui.reset}
            labels={t.birthDemo.labels}
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

        <SectionBlock id="impact" title={t.impactTitle} eyebrow={t.impactEyebrow}>
          <InfoCard title={t.impactConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.impactConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.impactParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.impactFigure.label}
            caption={t.impactFigure.caption}
            placeholder={t.impactFigure.placeholder}
          />
          <ImageNetImpactDemo
            lang={lang}
            title={t.impactDemo.title}
            goal={t.impactDemo.goal}
            resetLabel={ui.reset}
            labels={t.impactDemo.labels}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.impactSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.impactCheckpoint.prompt}
            options={t.impactCheckpoint.options}
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
          <OrdinaryWorkDemo
            lang={lang}
            title={t.foodDemo.title}
            goal={t.foodDemo.goal}
            resetLabel={ui.reset}
            options={t.foodDemo.options}
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

function FeiFeiTimelineDemo({
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

function DatasetBuilderDemo({
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
  labels: { images: string; workers: string; days: string; note: string };
}) {
  const isZh = lang === "zh";
  const [images, setImages] = useState(120);
  const [workers, setWorkers] = useState(30);

  const days = useMemo(() => Math.max(1, Math.round((images * 50) / Math.max(1, workers))), [images, workers]);

  const reset = () => {
    setImages(120);
    setWorkers(30);
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
          <label className="block text-sm font-semibold text-slate-700">
            {labels.images}
            <input
              type="range"
              min={20}
              max={320}
              value={images}
              onChange={(e) => setImages(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{images}k</span>
          </label>
          <label className="block text-sm font-semibold text-slate-700">
            {labels.workers}
            <input
              type="range"
              min={5}
              max={120}
              value={workers}
              onChange={(e) => setWorkers(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{workers}</span>
          </label>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.days}</p>
          <p className="mt-2 text-2xl font-semibold text-slate-900">{days}</p>
          <p className="mt-1 text-xs text-slate-600">{labels.note}</p>
        </div>
      </div>
    </div>
  );
}

function ImageNetImpactDemo({
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
  labels: { year: string; error: string; note: string };
}) {
  const isZh = lang === "zh";
  const [year, setYear] = useState(2010);

  const errorRate = useMemo(() => {
    const timeline: Record<number, number> = {
      2010: 28,
      2012: 16,
      2014: 7,
      2015: 5,
      2017: 2.25,
    };
    return timeline[year] ?? 20;
  }, [year]);

  const reset = () => {
    setYear(2012);
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
        <label className="block text-sm font-semibold text-slate-700">
          {labels.year}
          <input
            type="range"
            min={2010}
            max={2017}
            step={1}
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="mt-1 w-full accent-brand-500"
          />
          <span className="text-xs text-slate-500">{year}</span>
        </label>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.error}</p>
          <p className="mt-2 text-2xl font-semibold text-slate-900">{errorRate}%</p>
          <p className="mt-1 text-xs text-slate-600">{labels.note}</p>
        </div>
      </div>
    </div>
  );
}

type OrdinaryOption = {
  key: string;
  label: string;
  impact: string;
};

function OrdinaryWorkDemo({
  lang,
  title,
  goal,
  resetLabel,
  options,
  labels,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  options: OrdinaryOption[];
  labels: { impact: string };
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(options[0]?.key ?? "");
  const current = options.find((option) => option.key === active) ?? options[0];

  const reset = () => {
    setActive(options[0]?.key ?? "");
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

      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => {
          const selected = option.key === active;
          return (
            <button
              key={option.key}
              type="button"
              className={[
                "rounded-full border px-3 py-1 text-xs font-semibold transition",
                selected
                  ? "border-brand-500 bg-brand-50 text-brand-700"
                  : "border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900",
              ].join(" ")}
              onClick={() => setActive(option.key)}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.impact}</p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{current.impact}</p>
        </div>
      )}
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Learn Fei-Fei Li's education journey and perseverance.",
      "Understand what ImageNet is and why data work matters.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "Fei-Fei Li built the ImageNet dataset, providing the data " +
      "that helped deep learning succeed.",
    childTitle: "1. A Child of Immigrants",
    childEyebrow: "Early life",
    childConceptTitle: "Concept Card",
    childConceptLines: [
      "Born in Beijing in 1976 and grew up in Chengdu.",
      "Moved to the United States at age 16.",
      "Worked hard despite language and financial challenges.",
    ],
    childParas: [
      "Li's family struggled with English and finances after immigrating.",
      "She worked part-time jobs and still excelled academically.",
      "She entered Princeton and later earned a PhD in computer vision.",
    ],
    childFigure: {
      label: "Figure 7-15",
      caption: "Fei-Fei Li.",
      placeholder: "Illustration placeholder",
    },
    childDemo: {
      title: "Fei-Fei Timeline",
      goal: "Follow key steps in Fei-Fei Li's journey.",
      labels: {
        pick: "Pick a step",
        detail: "Detail",
      },
      events: [
        {
          key: "1995",
          label: "1995",
          detail: "Entered Princeton with a full scholarship.",
        },
        {
          key: "1999",
          label: "1999",
          detail: "Graduated from Princeton and wrote a thesis on hearing.",
        },
        {
          key: "2005",
          label: "2005",
          detail: "Earned a PhD in computer vision at Caltech.",
        },
        {
          key: "2006",
          label: "2006",
          detail: "Began building the ImageNet dataset.",
        },
      ],
    },
    childSteps: [
      "Select a step.",
      "Read the detail.",
      "Explain how perseverance helped her succeed.",
    ],
    childCheckpoint: {
      prompt: "What challenge did Fei-Fei Li face when she immigrated?",
      options: [
        {
          label: "Limited English and financial hardship.",
          correct: true,
          explanation: "Her family worked hard to make a living.",
        },
        {
          label: "She already had a large research team.",
          correct: false,
          explanation: "She had no team or funding at first.",
        },
        {
          label: "She never needed to study at school.",
          correct: false,
          explanation: "She studied intensely and worked part-time.",
        },
      ],
    },
    birthTitle: "2. The Birth of the ImageNet Dataset",
    birthEyebrow: "Building data",
    birthConceptTitle: "Concept Card",
    birthConceptLines: [
      "ImageNet is a large-scale image database.",
      "Li used crowdsourcing to label millions of images.",
      "The dataset became public in 2009.",
    ],
    birthParas: [
      "Collecting data was seen as low-prestige, but Li persisted.",
      "Mechanical Turk enabled low-cost labeling at scale.",
      "ImageNet reached 3.2 million images and 5,247 categories.",
    ],
    birthFigure: {
      label: "Figure 7-16",
      caption: "The public release of the ImageNet dataset.",
      placeholder: "Illustration placeholder",
    },
    birthDemo: {
      title: "Dataset Builder",
      goal: "See how scale and manpower affect labeling time.",
      labels: {
        images: "Images (thousands)",
        workers: "Labelers",
        days: "Estimated days",
        note: "Large datasets require coordinated effort.",
      },
    },
    birthSteps: [
      "Adjust image count and labelers.",
      "Observe the estimated time.",
      "Explain why crowdsourcing mattered.",
    ],
    birthCheckpoint: {
      prompt: "How did Li solve the labeling manpower problem?",
      options: [
        {
          label: "She used Mechanical Turk crowdsourcing.",
          correct: true,
          explanation: "mTurk enabled many people to label images.",
        },
        {
          label: "She labeled everything alone.",
          correct: false,
          explanation: "The dataset was too large for one person.",
        },
        {
          label: "She stopped the project.",
          correct: false,
          explanation: "She completed ImageNet after years of work.",
        },
      ],
    },
    impactTitle: "3. The Impact of the ImageNet Dataset",
    impactEyebrow: "Deep learning fuel",
    impactConceptTitle: "Concept Card",
    impactConceptLines: [
      "ImageNet enabled large-scale visual recognition challenges.",
      "AlexNet won in 2012 and sparked deep learning adoption.",
      "By 2017, error rates dropped to 2.25%.",
    ],
    impactParas: [
      "ImageNet highlighted the importance of data for machine learning.",
      "Large datasets completed the missing piece of deep learning.",
      "Li received many honors for her contributions.",
    ],
    impactFigure: {
      label: "Figure 7-17",
      caption: "Error rates of deep neural networks on ImageNet (2010-2017).",
      placeholder: "Illustration placeholder",
    },
    impactDemo: {
      title: "Error Rate Timeline",
      goal: "Track how ImageNet errors dropped over time.",
      labels: {
        year: "Year",
        error: "Error rate",
        note: "2012 and 2017 mark major breakthroughs.",
      },
    },
    impactSteps: [
      "Slide through the years.",
      "Read the error rate.",
      "Explain why data scale mattered.",
    ],
    impactCheckpoint: {
      prompt: "Why was ImageNet so influential?",
      options: [
        {
          label: "It provided large-scale data for training and testing.",
          correct: true,
          explanation: "Data scale unlocked deep learning power.",
        },
        {
          label: "It replaced neural networks.",
          correct: false,
          explanation: "It supported neural network training.",
        },
        {
          label: "It removed the need for labels.",
          correct: false,
          explanation: "ImageNet required careful labeling.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Ordinary work",
    foodParas: [
      "Fei-Fei Li's success began with data collection, not flashy theory.",
      "Ordinary work can become a major contribution when done at scale.",
    ],
    foodDemo: {
      title: "Ordinary Work, Big Impact",
      goal: "See how steady tasks can lead to big change.",
      labels: {
        impact: "Potential impact",
      },
      options: [
        {
          key: "label",
          label: "Labeling images",
          impact: "Builds the foundation for modern vision systems.",
        },
        {
          key: "cleanup",
          label: "Cleaning data",
          impact: "Improves model reliability and fairness.",
        },
        {
          key: "document",
          label: "Writing documentation",
          impact: "Helps teams share knowledge and scale projects.",
        },
      ],
    },
    foodSteps: [
      "Pick a task.",
      "Read the impact.",
      "Connect it to Li's story.",
    ],
    foodCheckpoint: {
      prompt: "What lesson does Li's ImageNet work highlight?",
      options: [
        {
          label: "Ordinary work can become extraordinary at scale.",
          correct: true,
          explanation: "Large datasets can change an entire field.",
        },
        {
          label: "Only theory matters in AI.",
          correct: false,
          explanation: "Data work was crucial to deep learning.",
        },
        {
          label: "Data collection is always useless.",
          correct: false,
          explanation: "ImageNet proved it can be powerful.",
        },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryEyebrow: "Summary",
    summaryPoints: [
      "Fei-Fei Li overcame hardships to pursue research.",
      "ImageNet provided large-scale labeled images for AI.",
      "AlexNet's 2012 win made ImageNet famous.",
      "Error rates dropped to near human level by 2017.",
      "Ordinary data work can yield huge impact.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解李飞飞的求学经历与坚持。",
      "理解 ImageNet 的意义与数据工作的价值。",
    ],
    introTitle: "故事开头",
    introEyebrow: "开场",
    introText:
      "李飞飞创建 ImageNet 数据集，为深度学习提供了关键数据基础。",
    childTitle: "1. 移民家庭的孩子",
    childEyebrow: "早年经历",
    childConceptTitle: "概念卡",
    childConceptLines: [
      "1976 年出生于北京，在成都长大。",
      "16 岁随家人移居美国。",
      "在困难中努力学习与工作。",
    ],
    childParas: [
      "移民初期语言与经济压力巨大。",
      "她打工补贴家用并逐步取得好成绩。",
      "进入普林斯顿并在加州理工获得博士学位。",
    ],
    childFigure: {
      label: "图 7-15",
      caption: "李飞飞。",
      placeholder: "示意图",
    },
    childDemo: {
      title: "李飞飞时间线",
      goal: "回顾她的学习经历。",
      labels: {
        pick: "选择节点",
        detail: "细节",
      },
      events: [
        {
          key: "1995",
          label: "1995",
          detail: "进入普林斯顿大学学习物理。",
        },
        {
          key: "1999",
          label: "1999",
          detail: "完成本科并研究双耳听觉。",
        },
        {
          key: "2005",
          label: "2005",
          detail: "在加州理工获得计算机视觉博士学位。",
        },
        {
          key: "2006",
          label: "2006",
          detail: "开始构建 ImageNet 数据集。",
        },
      ],
    },
    childSteps: [
      "选择一个节点。",
      "阅读细节。",
      "说明坚持的作用。",
    ],
    childCheckpoint: {
      prompt: "李飞飞移民后面临的主要困难是什么？",
      options: [
        {
          label: "语言与经济压力。",
          correct: true,
          explanation: "她在艰难条件下努力学习。",
        },
        {
          label: "拥有强大团队。",
          correct: false,
          explanation: "她起步时缺少资源。",
        },
        {
          label: "无需再读书。",
          correct: false,
          explanation: "她通过学习改变命运。",
        },
      ],
    },
    birthTitle: "2. ImageNet 的诞生",
    birthEyebrow: "数据建设",
    birthConceptTitle: "概念卡",
    birthConceptLines: [
      "ImageNet 是大型图像数据库。",
      "通过众包完成标注。",
      "2009 年公开发布。",
    ],
    birthParas: [
      "当时数据收集被认为不够高端。",
      "她利用众包平台解决人力问题。",
      "最终形成 320 万张、5247 类图像。",
    ],
    birthFigure: {
      label: "图 7-16",
      caption: "ImageNet 数据集公开发布。",
      placeholder: "示意图",
    },
    birthDemo: {
      title: "数据集建造器",
      goal: "观察规模与人力对时间的影响。",
      labels: {
        images: "图像数量 (千)",
        workers: "标注人数",
        days: "预计天数",
        note: "规模越大，协作越关键。",
      },
    },
    birthSteps: [
      "调节图像量与标注人数。",
      "查看预计时间。",
      "说明众包的重要性。",
    ],
    birthCheckpoint: {
      prompt: "李飞飞如何解决标注人力问题？",
      options: [
        {
          label: "使用 mTurk 众包。",
          correct: true,
          explanation: "众包让标注规模化。",
        },
        {
          label: "她独自完成所有标注。",
          correct: false,
          explanation: "规模太大无法一人完成。",
        },
        {
          label: "放弃项目。",
          correct: false,
          explanation: "她坚持完成 ImageNet。",
        },
      ],
    },
    impactTitle: "3. ImageNet 的影响",
    impactEyebrow: "深度学习燃料",
    impactConceptTitle: "概念卡",
    impactConceptLines: [
      "2012 年 AlexNet 赢得比赛。",
      "ImageNet 让深度学习爆发。",
      "2017 年错误率降至 2.25%。",
    ],
    impactParas: [
      "ImageNet 提醒我们数据是机器学习的关键。",
      "没有足够数据，深度学习无法发挥潜力。",
      "李飞飞因贡献获得多项荣誉。",
    ],
    impactFigure: {
      label: "图 7-17",
      caption: "ImageNet 错误率变化 (2010-2017)。",
      placeholder: "示意图",
    },
    impactDemo: {
      title: "错误率时间线",
      goal: "观察错误率下降的过程。",
      labels: {
        year: "年份",
        error: "错误率",
        note: "2012 与 2017 是重要节点。",
      },
    },
    impactSteps: [
      "滑动年份。",
      "观察错误率。",
      "说明数据规模的重要性。",
    ],
    impactCheckpoint: {
      prompt: "ImageNet 为什么重要？",
      options: [
        {
          label: "它提供了大规模训练与测试数据。",
          correct: true,
          explanation: "数据规模释放了深度学习潜力。",
        },
        {
          label: "它替代了神经网络。",
          correct: false,
          explanation: "它是神经网络的训练基础。",
        },
        {
          label: "它不需要标注。",
          correct: false,
          explanation: "ImageNet 需要大量标注。",
        },
      ],
    },
    foodTitle: "想一想",
    foodEyebrow: "平凡的价值",
    foodParas: [
      "李飞飞从看似普通的数据工作起步。",
      "当规模足够大，普通工作也能创造巨大贡献。",
    ],
    foodDemo: {
      title: "普通工作，大影响",
      goal: "理解小事积累的价值。",
      labels: {
        impact: "潜在影响",
      },
      options: [
        {
          key: "label",
          label: "标注图像",
          impact: "建立视觉模型的基础。",
        },
        {
          key: "cleanup",
          label: "清理数据",
          impact: "提升模型可靠与公平。",
        },
        {
          key: "document",
          label: "写文档",
          impact: "帮助团队共享与扩展。",
        },
      ],
    },
    foodSteps: [
      "选择一个任务。",
      "阅读影响。",
      "联系李飞飞的故事。",
    ],
    foodCheckpoint: {
      prompt: "李飞飞故事带来的启示是什么？",
      options: [
        {
          label: "普通工作在规模化后能产生巨大价值。",
          correct: true,
          explanation: "ImageNet 证明了数据工作的意义。",
        },
        {
          label: "只有理论才重要。",
          correct: false,
          explanation: "数据同样关键。",
        },
        {
          label: "数据收集没有意义。",
          correct: false,
          explanation: "ImageNet 的成功说明了价值。",
        },
      ],
    },
    summaryTitle: "要点回顾",
    summaryEyebrow: "总结",
    summaryPoints: [
      "李飞飞克服困难坚持求学。",
      "ImageNet 提供大规模标注数据。",
      "AlexNet 让 ImageNet 影响力爆发。",
      "错误率下降至接近人类水平。",
      "平凡工作也能带来巨大贡献。",
    ],
  },
};
