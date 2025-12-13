import { useMemo, useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson3_5({ lang }: LessonProps) {
  const isZh = lang === "zh";
  const ui = {
    reset: isZh ? "重置" : "Reset",
    checkpointTag: isZh ? "检查点" : "Checkpoint",
    correctLabel: isZh ? "正确" : "Correct",
    incorrectLabel: isZh ? "再试一次" : "Try again",
    guidedTitle: isZh ? "引导步骤" : "Guided Steps",
  };

  const t = content[lang];
  const toc = [
    { id: "learning-objectives", label: t.learningObjectivesTitle },
    { id: "intro", label: t.introTitle },
    { id: "directions", label: t.directionsTitle },
    { id: "research", label: t.researchTitle },
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
          <p className="text-sm leading-relaxed text-slate-700">{t.intro}</p>
          <InfoCard title={t.introCardTitle}>
            <p className="text-sm text-slate-700">{t.introCard}</p>
          </InfoCard>
        </SectionBlock>

        <SectionBlock id="directions" title={t.directionsTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.directionsIntro}</p>
          <DirectionsTabs lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.directionsSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.directionsCheckpoint.prompt}
            options={t.directionsCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="research" title={t.researchTitle} eyebrow={t.researchEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.researchIntro}</p>
          <ResearchGrid lang={lang} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.researchCheckpoint.prompt}
            options={t.researchCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="summary" title={t.summaryTitle}>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
            {t.summaryPoints.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        </SectionBlock>
      </div>
    </div>
  );
}

function DirectionsTabs({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const [tab, setTab] = useState<"agi" | "integration">("agi");
  const copy: Record<typeof tab, { title: string; text: string }> = {
    agi: {
      title: isZh ? "通用人工智能 (AGI)" : "Artificial General Intelligence (AGI)",
      text: isZh
        ? "LLM 让通用智能更近，但能否真正达到仍未知；通用需多任务、理解意图、推理/泛化。"
        : "LLMs bring us closer, but true AGI remains uncertain; needs multi-task, intent understanding, reasoning/generalization.",
    },
    integration: {
      title: isZh ? "与各学科深度融合" : "Integration with other fields",
      text: isZh
        ? "大数据+复杂问题迫使 AI 成为通用“科研助手”，已在天文、生物等展现。"
        : "Data + complex problems push AI as a universal research aide across sciences.",
    },
  };
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex gap-2">
        {[
          { key: "agi", label: "AGI" },
          { key: "integration", label: isZh ? "学科融合" : "Integration" },
        ].map((tabItem) => (
          <button
            key={tabItem.key}
            type="button"
            onClick={() => setTab(tabItem.key as typeof tab)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              tab === tabItem.key
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {tabItem.label}
          </button>
        ))}
      </div>
      <div className="mt-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
        <p className="text-sm font-semibold text-slate-900">{copy[tab].title}</p>
        <p className="mt-1 text-sm text-slate-800">{copy[tab].text}</p>
      </div>
    </div>
  );
}

function ResearchGrid({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const items = useMemo(
    () => [
      {
        title: isZh ? "类脑计算" : "Brain-inspired computing",
        note: isZh
          ? "用神经形态芯片降低能耗（如 TrueNorth、天机）；仍缺通用性。"
          : "Neuromorphic chips to cut energy (TrueNorth, Tianji); still task-specific.",
      },
      {
        title: isZh ? "具身智能" : "Embodied intelligence",
        note: isZh
          ? "让 AI 有“身体”探索/学习，获取环境反馈，面向救援、太空等。"
          : "Give AI bodies to act/learn from environment for rescue/space/etc.",
      },
      {
        title: isZh ? "价值对齐" : "Value alignment",
        note: isZh
          ? "让更强 AI 行为符合人类价值，RLHF 等方法面临“人难以判断”难题。"
          : "Keep powerful AI aligned with humans; RLHF faces ‘humans can’t judge’ issue.",
      },
      {
        title: isZh ? "超级智能安全" : "Superintelligence safety",
        note: isZh
          ? "超越人类的 AI 需法律/治理（如 EU AI Act）与技术安全防线。"
          : "If AI surpasses humans, need law/governance (e.g., EU AI Act) and technical safeguards.",
      },
    ],
    [isZh],
  );
  const [focus, setFocus] = useState(0);
  const current = items[focus];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="grid gap-2 md:grid-cols-4">
        {items.map((item, idx) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setFocus(idx)}
            className={[
              "rounded-xl border px-3 py-2 text-left text-xs font-semibold transition",
              focus === idx
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-800 hover:border-slate-300",
            ].join(" ")}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="mt-3 rounded-xl border border-slate-100 bg-slate-50 p-3 text-sm text-slate-800">
        {current.note}
      </div>
    </div>
  );
}

const content = {
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解人工智能未来方向：AGI 与跨学科融合。",
      "认识类脑计算、具身智能、价值对齐、超级智能等前沿方向与挑战。",
    ],
    introTitle: "开篇理解",
    introEyebrow: "迈向未来",
    intro:
      "AI 将更强大、更普及：向 AGI 靠近、与各学科深融，同时面对能耗、安全、伦理挑战。",
    introCardTitle: "前瞻视角",
    introCard: "更强智能 + 更深融合 + 更高安全要求。",
    directionsTitle: "1. 发展方向",
    directionsIntro:
      "未来走向：通用人工智能与学科深度融合。LLM 展现通用苗头，跨学科让 AI 成为科研助手。",
    directionsSteps: [
      "辨析 AGI 与狭义 AI 的差别",
      "理解 LLM 带来的通用性迹象",
      "思考跨学科融合的现实例子",
    ],
    directionsCheckpoint: {
      prompt: "AGI 关注的是：",
      options: [
        { label: "跨任务的通用智能，理解意图并推理泛化", correct: true, explanation: "AGI 核心目标。" },
        { label: "仅限单一任务", correct: false, explanation: "那是狭域 AI。" },
        { label: "只增加模型参数但不提升能力", correct: false, explanation: "参数增长需带来能力。" },
      ],
    },
    researchTitle: "2. 前沿研究方向",
    researchEyebrow: "值得关注",
    researchIntro:
      "类脑计算降能耗；具身智能获取真实反馈；价值对齐确保 AI 行为安全；超级智能需法规与技术防护。",
    researchCheckpoint: {
      prompt: "价值对齐的挑战之一是：",
      options: [
        { label: "当 AI 过强时，人可能难以判断其输出优劣", correct: true, explanation: "RLHF 信号可能不足。" },
        { label: "AI 不需要任何反馈", correct: false, explanation: "对齐需要反馈。" },
        { label: "只需增加模型大小即可对齐", correct: false, explanation: "规模≠对齐。" },
      ],
    },
    summaryTitle: "小结",
    summaryPoints: [
      "未来 AI：走向 AGI，深度融合科学领域。",
      "关键方向：类脑、具身、价值对齐、安全治理。",
      "需关注伦理、安全、能耗，确保智能造福社会。",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand future AI directions: AGI and cross-disciplinary integration.",
      "Know frontier areas: brain-inspired, embodied, alignment, superintelligence and their challenges.",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "Toward the future",
    intro:
      "AI will grow stronger and more pervasive: closer to AGI, deeper integration, while facing energy, safety, and ethics challenges.",
    introCardTitle: "Forward view",
    introCard: "Stronger intelligence + deeper integration + higher safety needs.",
    directionsTitle: "1. Development Directions",
    directionsIntro:
      "Future paths: AGI and deep integration. LLMs hint at generality; cross-disciplinary work makes AI a research partner.",
    directionsSteps: ["Differentiate AGI vs. narrow AI", "See generality hints from LLMs", "Note real cross-field examples"],
    directionsCheckpoint: {
      prompt: "AGI focuses on:",
      options: [
        { label: "General intelligence across tasks—intent understanding and reasoning/generalization", correct: true, explanation: "Core goal." },
        { label: "Only single tasks", correct: false, explanation: "That’s narrow AI." },
        { label: "Just growing parameters without capability gains", correct: false, explanation: "Scale must bring ability." },
      ],
    },
    researchTitle: "2. Frontier Research",
    researchEyebrow: "Worth watching",
    researchIntro:
      "Brain-inspired computing to cut energy; embodied intelligence for real-world feedback; alignment to keep AI safe; superintelligence needs governance.",
    researchCheckpoint: {
      prompt: "A challenge in value alignment:",
      options: [
        { label: "When AI is very strong, humans may not judge its outputs well", correct: true, explanation: "RLHF signal may fail." },
        { label: "AI needs zero feedback", correct: false, explanation: "Alignment needs feedback." },
        { label: "Just scaling size guarantees alignment", correct: false, explanation: "Scale alone doesn’t align." },
      ],
    },
    summaryTitle: "Summary",
    summaryPoints: [
      "Future AI heads toward AGI and deep scientific integration.",
      "Key fronts: neuromorphic, embodied, alignment, superintelligence safety.",
      "Ethics/safety/energy must be managed so intelligence benefits society.",
    ],
  },
};
