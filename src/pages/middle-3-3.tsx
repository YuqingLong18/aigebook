import { useMemo, useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson3_3({ lang }: LessonProps) {
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
    { id: "llm", label: t.llmTitle },
    { id: "lvm", label: t.lvmTitle },
    { id: "era", label: t.eraTitle },
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

        <SectionBlock id="llm" title={t.llmTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.llmIntro}</p>
          <LLMTabs lang={lang} />
          <ScaleExplorer lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.llmSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.llmCheckpoint.prompt}
            options={t.llmCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="lvm" title={t.lvmTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.lvmIntro}</p>
          <VisionPanel lang={lang} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.lvmCheckpoint.prompt}
            options={t.lvmCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="era" title={t.eraTitle} eyebrow={t.eraEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.eraIntro}</p>
          <EraTraits lang={lang} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.eraCheckpoint.prompt}
            options={t.eraCheckpoint.options}
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

function LLMTabs({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const [tab, setTab] = useState<"rise" | "abilities" | "reasoning">("rise");
  const copy: Record<typeof tab, { title: string; text: string }> = {
    rise: {
      title: isZh ? "Transformer + GPT 演进" : "Transformer + GPT evolution",
      text: isZh
        ? "Transformer 支持长上下文；GPT-1 1.17 亿→GPT-2 15 亿→GPT-3 1750 亿→GPT-4 规模再跃升。"
        : "Transformer enables long context; GPT-1 117M → GPT-2 1.5B → GPT-3 175B → GPT-4 even larger.",
    },
    abilities: {
      title: isZh ? "多样能力" : "Broad abilities",
      text: isZh
        ? "生成、翻译、对话、编程、医疗/法律辅助等；仅靠“预测下一词”即可涌现多任务能力。"
        : "Generation, translation, dialog, coding, healthcare/legal assist—emerge from next-word training.",
    },
    reasoning: {
      title: isZh ? "推理模型" : "Reasoning models",
      text: isZh
        ? "o1 先生成推理步骤再回答；DeepSeek R1 开源、成本更低，推进推理研究。"
        : "o1 reasons stepwise; DeepSeek R1 open-sourced with lower cost, pushing reasoning research.",
    },
  };
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex gap-2">
        {[
          { key: "rise", label: isZh ? "演进" : "Evolution" },
          { key: "abilities", label: isZh ? "能力" : "Abilities" },
          { key: "reasoning", label: isZh ? "推理" : "Reasoning" },
        ].map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => setTab(item.key as typeof tab)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              tab === item.key
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {item.label}
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

function VisionPanel({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const [model, setModel] = useState<"dalle" | "sora">("dalle");
  const notes: Record<typeof model, string> = {
    dalle: isZh
      ? "DALL·E 1 像处理文本一样串行建模像素；DALL·E 2 用扩散从噪声生成清晰图像。"
      : "DALL·E 1 models pixels like words; DALL·E 2 uses diffusion from noise to image.",
    sora: isZh
      ? "Sora 将扩散与 Transformer 用于视频，理解时空依赖，能生成连贯视频。"
      : "Sora applies diffusion+Transformer to video, capturing space-time to make coherent clips.",
  };
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex gap-2">
        {[
          { key: "dalle", label: "DALL·E" },
          { key: "sora", label: "Sora" },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setModel(tab.key as typeof model)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              model === tab.key
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-sm text-slate-800">{notes[model]}</p>
      <p className="mt-1 text-xs text-slate-600">
        {isZh ? "视觉大模型从文本提示生成图像/视频，初步显露对物理世界的关联理解。" : "Vision models generate images/videos from text, hinting at world understanding."}
      </p>
    </div>
  );
}

function EraTraits({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const items = useMemo(
    () => [
      {
        title: isZh ? "大数据+大模型+大算力" : "Data + models + compute",
        note: isZh ? "规模化成新范式，竞相扩展参数和上下文。" : "Scale is the norm—bigger params/context.",
      },
      {
        title: isZh ? "逼近 AGI" : "Toward AGI",
        note: isZh ? "多任务、多模态、多步骤推理显示通用性苗头。" : "Multi-task/modal/step reasoning hints at generality.",
      },
      {
        title: isZh ? "潜在超智能" : "Toward superintelligence",
        note: isZh ? "生成质量可超大多数人类；需重视隐私、伦理、能耗。" : "Outputs can surpass most humans; raises privacy/ethics/energy concerns.",
      },
    ],
    [isZh],
  );
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="grid gap-2 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
            <p className="text-sm font-semibold text-slate-900">{item.title}</p>
            <p className="mt-1 text-xs text-slate-700">{item.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScaleExplorer({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const sizes = useMemo(
    () => [
      {
        label: "117M",
        era: "GPT-1",
        capability: isZh ? "基础文本生成" : "Basic text generation",
      },
      {
        label: "1.5B",
        era: "GPT-2",
        capability: isZh ? "可用的连贯写作、翻译尝试" : "Usable coherent writing, translation attempts",
      },
      {
        label: "175B",
        era: "GPT-3",
        capability: isZh ? "零样本/少样本任务、多场景对话" : "Zero/ few-shot tasks, broad dialog",
      },
      {
        label: "1.8T",
        era: "GPT-4 级",
        capability: isZh ? "长上下文、推理更强、编程/多模态" : "Long context, stronger reasoning, code/multimodal",
      },
    ],
    [isZh],
  );
  const [idx, setIdx] = useState(0);
  const current = sizes[idx];
  return (
    <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
        {isZh ? "规模与能力" : "Scale vs. capability"}
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {sizes.map((s, i) => (
          <button
            key={s.label}
            type="button"
            onClick={() => setIdx(i)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              idx === i ? "border-brand-500 bg-brand-50 text-brand-700" : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {s.label}
          </button>
        ))}
      </div>
      <div className="mt-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
        <p className="text-sm font-semibold text-slate-900">{current.era}</p>
        <p className="mt-1 text-sm text-slate-800">{current.capability}</p>
      </div>
      <p className="mt-1 text-xs text-slate-600">
        {isZh
          ? "能力常在规模/数据/上下文跃迁处“涌现”。"
          : "Abilities often “emerge” at new scale/data/context thresholds."}
      </p>
    </div>
  );
}

const content = {
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解大模型时代的背景、原理与代表技术。",
      "认识大模型时代人工智能的特点与影响。",
      "思考大模型带来的社会影响与挑战。",
    ],
    introTitle: "开篇理解",
    introEyebrow: "大模型时代",
    intro:
      "当模型与数据规模足够大，Transformer + 预训练带来语言、视觉等领域的爆发，AI 进入大模型时代。",
    introCardTitle: "主线",
    introCard: "语言大模型→视觉大模型→规模化、通用性、潜在超智能与风险。",
    llmTitle: "1. 大语言模型崛起",
    llmIntro:
      "Transformer 支持超长上下文，GPT 系列参数/上下文持续扩展，涌现生成、翻译、对话、编程等能力；o1、DeepSeek R1 专注推理。",
    llmSteps: ["理解语言模型即“预测下一词”", "梳理 GPT 规模演进", "识别多任务/推理能力"],
    llmCheckpoint: {
      prompt: "Transformer 的关键优势是：",
      options: [
        { label: "可建模超长上下文序列", correct: true, explanation: "自注意力支持长依赖。" },
        { label: "只能处理 3 个词", correct: false, explanation: "上下文可很长。" },
        { label: "必须手写规则", correct: false, explanation: "数据驱动预训练。" },
      ],
    },
    lvmTitle: "2. 大视觉模型",
    lvmIntro:
      "DALL·E 把像素当序列，DALL·E 2 用扩散从噪声成图；Sora 生成高逼真视频，捕捉时空依赖，初显物理规则感知。",
    lvmCheckpoint: {
      prompt: "Sora 相比图像生成的主要挑战在于：",
      options: [
        { label: "需要同时处理时间维度保持连贯", correct: true, explanation: "视频需时空一致性。" },
        { label: "不允许使用文本提示", correct: false, explanation: "仍用文本提示。" },
        { label: "只能生成静态图片", correct: false, explanation: "它生成视频。" },
      ],
    },
    eraTitle: "3. 大模型时代特征",
    eraEyebrow: "新范式",
    eraIntro:
      "大数据+大算力+大模型成标配；逼近 AGI，甚至显现超智能苗头；带来效率提升也带来隐私、伦理、能耗等挑战。",
    eraCheckpoint: {
      prompt: "大模型时代的显著特征不包括：",
      options: [
        { label: "规模化训练成为常态", correct: false, explanation: "这是特征之一。" },
        { label: "输出质量可能超过大多数人", correct: false, explanation: "是文本提到的特点。" },
        { label: "完全不需要算力或数据", correct: true, explanation: "恰恰需要巨量算力与数据。" },
      ],
    },
    summaryTitle: "小结",
    summaryPoints: [
      "Transformer+预训练+规模带来 LLM/LVM 爆发。",
      "多任务、推理、跨模态能力让 AI 更通用。",
      "机遇与风险并存：隐私、伦理、能耗需重视。",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Grasp background, principles, and representative tech of the large-model era.",
      "Recognize AI traits in the large-model era.",
      "Explore social impacts and challenges of large models.",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "Large-model era",
    intro:
      "When models/data scale up, Transformer + pretraining ignite language/vision breakthroughs—ushering AI into the large-model era.",
    introCardTitle: "Thread",
    introCard: "LLMs → vision models → scale, generality, superhuman hints and risks.",
    llmTitle: "1. Rise of LLMs",
    llmIntro:
      "Transformer handles long context; GPT scales params/context; abilities emerge (gen/translate/dialog/code); o1/DeepSeek R1 focus on reasoning.",
    llmSteps: ["Language model = next-word prediction", "Trace GPT scaling", "Spot multi-task/reasoning abilities"],
    llmCheckpoint: {
      prompt: "Key advantage of Transformer:",
      options: [
        { label: "Model ultra-long contexts", correct: true, explanation: "Self-attention handles long dependencies." },
        { label: "Only handle 3 words", correct: false, explanation: "Can be much longer." },
        { label: "Requires handwritten rules", correct: false, explanation: "Data-driven pretraining." },
      ],
    },
    lvmTitle: "2. Large Vision Models",
    lvmIntro:
      "DALL·E treats pixels as sequences; DALL·E 2 uses diffusion from noise; Sora makes coherent videos by modeling space-time dependencies.",
    lvmCheckpoint: {
      prompt: "Main challenge Sora tackles beyond images:",
      options: [
        { label: "Maintaining temporal coherence (time dimension)", correct: true, explanation: "Video needs space-time consistency." },
        { label: "Banning text prompts", correct: false, explanation: "Text prompts still used." },
        { label: "Only generating stills", correct: false, explanation: "It generates video." },
      ],
    },
    eraTitle: "3. Era Traits",
    eraEyebrow: "New paradigm",
    eraIntro:
      "Data + compute + large models are standard; closer to AGI and hints of superintelligence; benefits plus privacy/ethics/energy risks.",
    eraCheckpoint: {
      prompt: "NOT a trait of the large-model era:",
      options: [
        { label: "Scaled training as default", correct: false, explanation: "It is a trait." },
        { label: "Outputs can surpass most humans", correct: false, explanation: "Mentioned in text." },
        { label: "Needs no compute or data", correct: true, explanation: "It needs huge compute/data." },
      ],
    },
    summaryTitle: "Summary",
    summaryPoints: [
      "Transformer + pretraining + scale fuel LLM/LVM boom.",
      "Multi-task, reasoning, multimodal abilities make AI more general.",
      "Opportunities with privacy/ethics/energy challenges to manage.",
    ],
  },
};
