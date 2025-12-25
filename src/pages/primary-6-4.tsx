import { useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { FigureCard } from "../components/FigureCard";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { FluidCrystalDemo } from "../demos/FluidCrystalDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function PrimaryLesson6_4({ lang }: LessonProps) {
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
    { id: "cattell", label: t.cattellTitle },
    { id: "fluid", label: t.fluidTitle },
    { id: "ai", label: t.aiTitle },
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

        <SectionBlock id="cattell" title={t.cattellTitle} eyebrow={t.cattellEyebrow}>
          <InfoCard title={t.cattellConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.cattellConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.cattellParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.cattellFigure.label}
            caption={t.cattellFigure.caption}
            placeholder={t.cattellFigure.placeholder}
          />
          <CattellTimelineDemo
            lang={lang}
            title={t.cattellDemo.title}
            goal={t.cattellDemo.goal}
            resetLabel={ui.reset}
            events={t.cattellDemo.events}
            labels={t.cattellDemo.labels}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.cattellSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.cattellCheckpoint.prompt}
            options={t.cattellCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="fluid" title={t.fluidTitle} eyebrow={t.fluidEyebrow}>
          <InfoCard title={t.fluidConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.fluidConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.fluidParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.fluidFigure.label}
            caption={t.fluidFigure.caption}
            placeholder={t.fluidFigure.placeholder}
          />
          <FluidCrystalDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.fluidSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.fluidCheckpoint.prompt}
            options={t.fluidCheckpoint.options}
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
          <IntelligenceBlendDemo
            lang={lang}
            title={t.aiDemo.title}
            goal={t.aiDemo.goal}
            resetLabel={ui.reset}
            modes={t.aiDemo.modes}
            labels={t.aiDemo.labels}
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
  year: string;
  title: string;
  detail: string;
};

function CattellTimelineDemo({
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
                {event.year}
              </button>
            );
          })}
        </div>
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.detail}</p>
          <p className="mt-2 text-sm font-semibold text-slate-900">{current.title}</p>
          <p className="mt-1 text-xs text-slate-600">{current.detail}</p>
        </div>
      )}
    </div>
  );
}

type IntelligenceMode = {
  key: string;
  label: string;
  fluid: string;
  crystal: string;
  example: string;
};

function IntelligenceBlendDemo({
  lang,
  title,
  goal,
  resetLabel,
  modes,
  labels,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  modes: IntelligenceMode[];
  labels: { pick: string; fluid: string; crystal: string; example: string };
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(modes[0]?.key ?? "");
  const current = modes.find((mode) => mode.key === active) ?? modes[0];

  const reset = () => {
    setActive(modes[0]?.key ?? "");
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
          {modes.map((mode) => {
            const selected = mode.key === active;
            return (
              <button
                key={mode.key}
                type="button"
                className={[
                  "rounded-full border px-3 py-1 text-xs font-semibold transition",
                  selected
                    ? "border-brand-500 bg-brand-50 text-brand-700"
                    : "border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900",
                ].join(" ")}
                onClick={() => setActive(mode.key)}
              >
                {mode.label}
              </button>
            );
          })}
        </div>
      </div>

      {current && (
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.fluid}</p>
            <p className="mt-2 text-sm font-semibold text-slate-900">{current.fluid}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.crystal}</p>
            <p className="mt-2 text-sm font-semibold text-slate-900">{current.crystal}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.example}</p>
            <p className="mt-2 text-sm font-semibold text-slate-900">{current.example}</p>
          </div>
        </div>
      )}
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Learn about psychologist Raymond Bernard Cattell and his quantitative methods.",
      "Understand the difference between fluid and crystallized intelligence.",
      "Know that artificial intelligence imitates human intelligence.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "AI was created to imitate human intelligence. To do that, we must understand what intelligence means and how it changes over time.",
    cattellTitle: "1. Psychologist Raymond Bernard Cattell",
    cattellEyebrow: "Quantitative psychology",
    cattellConceptTitle: "Concept Card",
    cattellConceptLines: [
      "Cattell believed psychology needed objective, data-driven methods.",
      "He collected large datasets on personality and cognition.",
      "He proposed 16 personality factors and many assessments.",
    ],
    cattellParas: [
      "Cattell was born in 1905 in England and later moved to the United States, teaching at major universities.",
      "He argued that psychology should use experimental data instead of subjective descriptions.",
      "His work produced hundreds of papers and many standardized psychological tools.",
    ],
    cattellFigure: {
      label: "Figure 6-10",
      caption: "Raymond Bernard Cattell.",
      placeholder: "Illustration placeholder",
    },
    cattellDemo: {
      title: "Cattell Timeline",
      goal: "Explore key moments in Cattell's life and research.",
      labels: {
        pick: "Pick a year",
        detail: "Detail",
      },
      events: [
        {
          key: "1905",
          year: "1905",
          title: "Born in West Bromwich",
          detail: "A year of great scientific discoveries, which inspired him.",
        },
        {
          key: "1929",
          year: "1929",
          title: "Earned a PhD in psychology",
          detail: "Shifted from chemistry to psychology to study human behavior.",
        },
        {
          key: "1937",
          year: "1937",
          title: "Moved to the United States",
          detail: "Taught at Columbia, Harvard, and Illinois universities.",
        },
        {
          key: "1971",
          year: "1971",
          title: "Proposed fluid vs crystallized intelligence",
          detail: "Explained how intelligence changes with age.",
        },
        {
          key: "1998",
          year: "1998",
          title: "Passed away in Honolulu",
          detail: "Left a legacy of data-driven psychology.",
        },
      ],
    },
    cattellSteps: [
      "Select a year.",
      "Read the event description.",
      "Connect the event to his research style.",
    ],
    cattellCheckpoint: {
      prompt: "What did Cattell emphasize for psychology?",
      options: [
        {
          label: "Using quantitative and experimental methods.",
          correct: true,
          explanation: "He wanted psychology to be an objective empirical science.",
        },
        {
          label: "Only relying on personal feelings.",
          correct: false,
          explanation: "He criticized purely subjective approaches.",
        },
        {
          label: "Avoiding data collection.",
          correct: false,
          explanation: "He gathered large datasets for analysis.",
        },
      ],
    },
    fluidTitle: "2. Fluid Intelligence and Crystallized Intelligence",
    fluidEyebrow: "Two kinds of intelligence",
    fluidConceptTitle: "Concept Card",
    fluidConceptLines: [
      "Fluid intelligence is fast reasoning for new problems.",
      "Crystallized intelligence is knowledge built from experience.",
      "They change differently with age.",
    ],
    fluidParas: [
      "Fluid intelligence helps us solve unfamiliar problems through reasoning and learning.",
      "Crystallized intelligence uses accumulated knowledge to solve familiar tasks.",
      "As people age, fluid intelligence may level off while crystallized intelligence continues to grow.",
    ],
    fluidFigure: {
      label: "Figure 6-11",
      caption: "The relationship between human intelligence and age.",
      placeholder: "Illustration placeholder",
    },
    fluidSteps: [
      "Adjust age and study intensity.",
      "Observe changes in fluid and crystallized scores.",
      "Explain why knowledge can keep growing.",
    ],
    fluidCheckpoint: {
      prompt: "Which type of intelligence keeps growing with experience?",
      options: [
        {
          label: "Crystallized intelligence.",
          correct: true,
          explanation: "It grows as knowledge and experience accumulate.",
        },
        {
          label: "Fluid intelligence only.",
          correct: false,
          explanation: "Fluid intelligence can level off after adulthood.",
        },
        {
          label: "Neither type changes.",
          correct: false,
          explanation: "They change differently with age.",
        },
      ],
    },
    aiTitle: "3. Artificial Intelligence and the Two Types of Human Intelligence",
    aiEyebrow: "AI insights",
    aiConceptTitle: "Concept Card",
    aiConceptLines: [
      "Early AI focused on fast reasoning (fluid intelligence).",
      "Knowledge bases simulated crystallized intelligence.",
      "Modern AI combines both learning and knowledge.",
    ],
    aiParas: [
      "Early AI systems used quick reasoning to solve problems, similar to fluid intelligence.",
      "From the 1970s, knowledge bases stored expert experience, like crystallized intelligence.",
      "Modern neural networks can learn and store knowledge, simulating both types at once.",
    ],
    aiDemo: {
      title: "AI Intelligence Mixer",
      goal: "See how different AI systems relate to fluid or crystallized intelligence.",
      labels: {
        pick: "Pick an AI approach",
        fluid: "Fluid side",
        crystal: "Crystallized side",
        example: "Example",
      },
      modes: [
        {
          key: "reasoning",
          label: "Rule-based reasoning",
          fluid: "Strong",
          crystal: "Limited",
          example: "Logical puzzle solver",
        },
        {
          key: "knowledge",
          label: "Knowledge base",
          fluid: "Limited",
          crystal: "Strong",
          example: "Expert system for diagnosis",
        },
        {
          key: "neural",
          label: "Neural network",
          fluid: "Strong",
          crystal: "Strong",
          example: "Modern AI assistants",
        },
      ],
    },
    aiSteps: [
      "Choose an AI approach.",
      "Read how it relates to fluid and crystallized intelligence.",
      "Explain why modern AI can combine both.",
    ],
    aiCheckpoint: {
      prompt: "Which AI approach best simulates crystallized intelligence?",
      options: [
        {
          label: "Knowledge bases that store expert experience.",
          correct: true,
          explanation: "They reflect accumulated knowledge.",
        },
        {
          label: "Only fast arithmetic calculators.",
          correct: false,
          explanation: "Speed alone is not crystallized intelligence.",
        },
        {
          label: "Turning off learning and memory.",
          correct: false,
          explanation: "Crystallized intelligence relies on stored knowledge.",
        },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryEyebrow: "Summary",
    summaryPoints: [
      "Cattell promoted data-driven psychology and quantitative methods.",
      "Fluid intelligence solves new problems quickly.",
      "Crystallized intelligence uses accumulated knowledge.",
      "These two types change differently with age.",
      "AI research learns from both types of intelligence.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解心理学家雷蒙德·伯纳德·卡特尔及其量化研究方法。",
      "理解流体智力与晶体智力的区别。",
      "认识人工智能是对人类智能的模仿。",
    ],
    introTitle: "故事开头",
    introEyebrow: "开场",
    introText:
      "人工智能的目标是模拟人类智能。要做到这一点，需要先理解“智能”是什么，以及它如何变化。",
    cattellTitle: "1. 心理学家雷蒙德·伯纳德·卡特尔",
    cattellEyebrow: "量化心理学",
    cattellConceptTitle: "概念卡",
    cattellConceptLines: [
      "卡特尔强调心理学需要客观数据。",
      "他收集大量人格与认知数据。",
      "提出 16 种人格因素并设计测评工具。",
    ],
    cattellParas: [
      "卡特尔 1905 年出生于英国，后来移居美国并在多所大学任教。",
      "他主张心理学应使用实验数据而不是主观描述。",
      "他的研究成果包括大量论文和标准化测评工具。",
    ],
    cattellFigure: {
      label: "图 6-10",
      caption: "雷蒙德·伯纳德·卡特尔。",
      placeholder: "示意图",
    },
    cattellDemo: {
      title: "卡特尔时间线",
      goal: "了解卡特尔的关键经历。",
      labels: {
        pick: "选择年份",
        detail: "事件详情",
      },
      events: [
        {
          key: "1905",
          year: "1905",
          title: "出生于西布罗姆维奇",
          detail: "当年科学突破频出，对他影响深刻。",
        },
        {
          key: "1929",
          year: "1929",
          title: "获得心理学博士",
          detail: "从化学转向心理学，研究人类行为。",
        },
        {
          key: "1937",
          year: "1937",
          title: "移居美国",
          detail: "在哥伦比亚、哈佛与伊利诺伊大学任教。",
        },
        {
          key: "1971",
          year: "1971",
          title: "提出流体/晶体智力",
          detail: "解释智力随年龄的变化。",
        },
        {
          key: "1998",
          year: "1998",
          title: "在檀香山去世",
          detail: "留下数据驱动心理学的深远影响。",
        },
      ],
    },
    cattellSteps: [
      "选择一个年份。",
      "阅读事件说明。",
      "联系他的研究方法。",
    ],
    cattellCheckpoint: {
      prompt: "卡特尔认为心理学应该怎样做？",
      options: [
        {
          label: "使用量化与实验数据。",
          correct: true,
          explanation: "他希望心理学成为客观的经验科学。",
        },
        {
          label: "只依靠个人感受。",
          correct: false,
          explanation: "他批评过分主观的理论。",
        },
        {
          label: "避免收集数据。",
          correct: false,
          explanation: "他强调数据分析。",
        },
      ],
    },
    fluidTitle: "2. 流体智力与晶体智力",
    fluidEyebrow: "两种智力",
    fluidConceptTitle: "概念卡",
    fluidConceptLines: [
      "流体智力是解决新问题的思考能力。",
      "晶体智力是累积知识带来的能力。",
      "两种智力随年龄变化不同。",
    ],
    fluidParas: [
      "流体智力帮助我们面对陌生问题，通过推理和学习找到答案。",
      "晶体智力依靠经验与知识，能快速解决熟悉的问题。",
      "成年后流体智力可能趋于平稳，晶体智力则继续增长。",
    ],
    fluidFigure: {
      label: "图 6-11",
      caption: "人类智力与年龄的关系。",
      placeholder: "示意图",
    },
    fluidSteps: [
      "调整年龄与学习强度。",
      "观察流体与晶体智力的变化。",
      "解释知识积累为何重要。",
    ],
    fluidCheckpoint: {
      prompt: "哪种智力会随着经验持续增长？",
      options: [
        {
          label: "晶体智力。",
          correct: true,
          explanation: "它来自经验与知识积累。",
        },
        {
          label: "流体智力。",
          correct: false,
          explanation: "流体智力可能在成年后趋于平稳。",
        },
        {
          label: "两者都不变化。",
          correct: false,
          explanation: "两者变化模式不同。",
        },
      ],
    },
    aiTitle: "3. 人工智能与两种智力",
    aiEyebrow: "AI 启示",
    aiConceptTitle: "概念卡",
    aiConceptLines: [
      "早期 AI 偏重快速推理（流体智力）。",
      "知识库模拟晶体智力。",
      "现代 AI 同时具备学习与知识储存。",
    ],
    aiParas: [
      "早期 AI 强调快速推理，类似流体智力。",
      "20 世纪 70 年代后，知识库把经验保存下来，类似晶体智力。",
      "现代神经网络能学习并储存知识，某种程度上同时模拟两者。",
    ],
    aiDemo: {
      title: "AI 智力混合器",
      goal: "观察不同 AI 方法如何对应两种智力。",
      labels: {
        pick: "选择 AI 方法",
        fluid: "流体侧",
        crystal: "晶体侧",
        example: "示例",
      },
      modes: [
        {
          key: "reasoning",
          label: "规则推理",
          fluid: "强",
          crystal: "弱",
          example: "逻辑推理系统",
        },
        {
          key: "knowledge",
          label: "知识库",
          fluid: "弱",
          crystal: "强",
          example: "诊断型专家系统",
        },
        {
          key: "neural",
          label: "神经网络",
          fluid: "强",
          crystal: "强",
          example: "现代 AI 助手",
        },
      ],
    },
    aiSteps: [
      "选择一种 AI 方法。",
      "查看它与两种智力的关系。",
      "解释为何现代 AI 能融合两者。",
    ],
    aiCheckpoint: {
      prompt: "最能模拟晶体智力的 AI 方法是？",
      options: [
        {
          label: "知识库，保存经验与知识。",
          correct: true,
          explanation: "晶体智力来源于经验知识。",
        },
        {
          label: "只做快速算术的系统。",
          correct: false,
          explanation: "快速运算不等于晶体智力。",
        },
        {
          label: "关闭学习与记忆的系统。",
          correct: false,
          explanation: "晶体智力依赖知识存储。",
        },
      ],
    },
    summaryTitle: "要点回顾",
    summaryEyebrow: "总结",
    summaryPoints: [
      "卡特尔推动了数据驱动的心理学研究。",
      "流体智力擅长解决新问题。",
      "晶体智力依赖知识与经验积累。",
      "两种智力随年龄变化不同。",
      "AI 研究从两种智力中获得启发。",
    ],
  },
};
