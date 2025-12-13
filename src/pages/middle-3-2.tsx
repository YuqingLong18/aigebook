import { useMemo, useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson3_2({ lang }: LessonProps) {
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
    { id: "before", label: t.beforeTitle },
    { id: "brain", label: t.brainTitle },
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
          <p className="text-sm leading-relaxed text-slate-700">{t.intro}</p>
          <InfoCard title={t.introCardTitle}>
            <p className="text-sm text-slate-700">{t.introCard}</p>
          </InfoCard>
        </SectionBlock>

        <SectionBlock id="before" title={t.beforeTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.beforeIntro}</p>
          <BeforeLandscape lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.beforeSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.beforeCheckpoint.prompt}
            options={t.beforeCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="brain" title={t.brainTitle} eyebrow={t.brainEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.brainIntro}</p>
          <NeuronTimeline lang={lang} />
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

        <SectionBlock id="revolution" title={t.revolutionTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.revolutionIntro}</p>
          <DeepHighlights lang={lang} />
          <LayerExplorer lang={lang} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.revolutionCheckpoint.prompt}
            options={t.revolutionCheckpoint.options}
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

function BeforeLandscape({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const [filter, setFilter] = useState<"ml" | "data" | "hardware">("ml");
  const copy: Record<typeof filter, string> = {
    ml: isZh
      ? "统计/概率模型主导，手工特征+相关性建模推 AI 进展。"
      : "Statistical/probabilistic models dominated; handcrafted features drove progress.",
    data: isZh
      ? "互联网时代累积海量视频/文本/图像数据，成为潜在宝库。"
      : "Internet era yielded massive video/text/image data—future fuel.",
    hardware: isZh
      ? "CPU 性能提升，GPU 并行计算出现，为大规模训练奠基。"
      : "CPUs sped up; GPUs emerged for parallel compute—foundation for training.",
  };
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex gap-2">
        {[
          { key: "ml", label: isZh ? "统计学习" : "Stat ML" },
          { key: "data", label: isZh ? "大数据" : "Big data" },
          { key: "hardware", label: isZh ? "算力" : "Compute" },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setFilter(tab.key as typeof filter)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              filter === tab.key
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-sm text-slate-800">{copy[filter]}</p>
    </div>
  );
}

function NeuronTimeline({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const steps = useMemo(
    () => [
      isZh ? "1943 人工神经元 (McCulloch/Pitts)" : "1943 artificial neuron (McCulloch/Pitts)",
      isZh ? "1950s 感知机 (Rosenblatt)" : "1950s perceptron (Rosenblatt)",
      isZh ? "1986 反向传播 (Hinton 等)" : "1986 backprop (Hinton et al.)",
      isZh ? "2006 预训练层叠 → 深度学习诞生" : "2006 layer-wise pretraining → deep learning",
    ],
    [isZh],
  );
  return (
    <InfoCard title={isZh ? "神经网络关键节点" : "Neural net milestones"}>
      <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
        {steps.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </InfoCard>
  );
}

function DeepHighlights({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const [focus, setFocus] = useState<"features" | "hardware" | "people">("features");
  const copy: Record<typeof focus, string> = {
    features: isZh
      ? "多层网络分层提取特征：边缘→局部器官→整体人脸，机器自学表示。"
      : "Deep nets learn layered features: edges → parts → whole faces—representation learning.",
    hardware: isZh
      ? "GPU 并行+海量数据+预训练让深度学习超过传统方法。"
      : "GPUs + big data + pretraining let deep nets beat classical methods.",
    people: isZh
      ? "Hinton、Bengio、LeCun 等推动，2018 获图灵奖。"
      : "Hinton, Bengio, LeCun pushed the field; Turing Award 2018.",
  };
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex gap-2">
        {[
          { key: "features", label: isZh ? "分层特征" : "Layered features" },
          { key: "hardware", label: isZh ? "算力+数据" : "Compute+data" },
          { key: "people", label: isZh ? "关键人物" : "Key people" },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setFocus(tab.key as typeof focus)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              focus === tab.key
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-sm text-slate-800">{copy[focus]}</p>
    </div>
  );
}

function LayerExplorer({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const layers = useMemo(
    () => [
      {
        label: isZh ? "第 1 层：边缘" : "Layer 1: edges",
        detail: isZh ? "学到横线、竖线、斜线等简单纹理。" : "Learns simple textures like edges/lines.",
      },
      {
        label: isZh ? "第 3 层：局部部件" : "Layer 3: parts",
        detail: isZh ? "组合边缘形成鼻子、眼睛等局部特征。" : "Combines edges into parts like noses/eyes.",
      },
      {
        label: isZh ? "第 5 层：整体语义" : "Layer 5: whole",
        detail: isZh ? "识别人脸/物体整体，关联类别。" : "Recognizes whole faces/objects with class meaning.",
      },
    ],
    [isZh],
  );
  const [idx, setIdx] = useState(0);
  const current = layers[idx];
  return (
    <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
        {isZh ? "分层特征示意" : "Layered feature intuition"}
      </p>
      <div className="flex flex-wrap gap-2 mt-2">
        {layers.map((layer, i) => (
          <button
            key={layer.label}
            type="button"
            onClick={() => setIdx(i)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              idx === i ? "border-brand-500 bg-brand-50 text-brand-700" : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {layer.label}
          </button>
        ))}
      </div>
      <div className="mt-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
        <p className="text-sm text-slate-800">{current.detail}</p>
      </div>
      <p className="mt-1 text-xs text-slate-600">
        {isZh
          ? "多层网络逐层构建复杂表示，替代手工特征。"
          : "Deep nets build complex representations layer by layer, replacing hand-crafted features."}
      </p>
    </div>
  );
}

const content = {
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解深度学习的背景、核心思想与发展历程。",
      "认识深度学习对 AI 技术与应用的推动作用。",
    ],
    introTitle: "开篇理解",
    introEyebrow: "深度学习时代",
    intro:
      "2006 年 Hinton 层叠预训练论文标志深度学习诞生；大数据+GPU+多层网络推动 AI 进入快车道。",
    introCardTitle: "场景对比",
    introCard: "纪念达特茅斯 50 年时，Hinton 实验室的多层网络突破正在酝酿。",
    beforeTitle: "1. 深度学习之前",
    beforeIntro:
      "21 世纪初，研究者更聚焦领域问题：统计学习、手工特征、互联网大数据与 GPU 硬件为突破埋下伏笔。",
    beforeSteps: [
      "识别当时主流方法：概率/统计模型",
      "理解手工特征与相关性建模的瓶颈",
      "关注数据与算力的积累",
    ],
    beforeCheckpoint: {
      prompt: "深度学习前的主流做法是：",
      options: [
        { label: "人工设计特征 + 概率/统计建模", correct: true, explanation: "手工特征+统计推理。" },
        { label: "完全不需要特征", correct: false, explanation: "当时高度依赖特征工程。" },
        { label: "只靠情感推理", correct: false, explanation: "与情感无关。" },
      ],
    },
    brainTitle: "2. 模拟大脑的梦想",
    brainEyebrow: "连接主义路线",
    brainIntro:
      "神经元模型→感知机→反向传播→多层网络；尽管曾被冷落，Hinton 等坚信神经网络是模拟智力的框架。",
    brainSteps: [
      "梳理神经网络关键节点",
      "理解早期困境：局部最优、训练难",
      "认识坚持者的作用",
    ],
    brainCheckpoint: {
      prompt: "反向传播的作用是：",
      options: [
        { label: "让多层网络可训练", correct: true, explanation: "BP 解决梯度更新问题。" },
        { label: "删除所有数据", correct: false, explanation: "仍需数据。" },
        { label: "只训练单层感知机", correct: false, explanation: "用于多层网络。" },
      ],
    },
    revolutionTitle: "3. 深度学习革命",
    revolutionIntro:
      "2006 预训练让深网可用；多层自动学分层特征，靠大数据+GPU 超越传统方法，奠定预训练范式。",
    revolutionCheckpoint: {
      prompt: "深度学习的关键能力是：",
      options: [
        { label: "分层自动学习特征和表示", correct: true, explanation: "从边缘到整体语义。" },
        { label: "只用手写规则", correct: false, explanation: "规则不再核心。" },
        { label: "无需算力或数据", correct: false, explanation: "恰需二者。" },
      ],
    },
    summaryTitle: "小结",
    summaryPoints: [
      "深度学习诞生于统计瓶颈、数据爆发、算力提升的交汇。",
      "多层网络可分层学习表示，预训练+微调成为范式。",
      "Hinton 等推动领域进入快车道，图灵奖认可贡献。",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand deep learning’s background, core ideas, and trajectory.",
      "See deep learning’s role in advancing AI tech/applications.",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "Deep learning era",
    intro:
      "Hinton’s 2006 layer-wise pretraining marked deep learning’s birth; big data + GPUs + deep nets pushed AI into the fast lane.",
    introCardTitle: "Scene contrast",
    introCard: "At Dartmouth’s 50th, Hinton’s lab was brewing a multilayer breakthrough.",
    beforeTitle: "1. Before Deep Learning",
    beforeIntro:
      "Early 2000s: statistical learning, handcrafted features, internet big data, and GPUs set the stage for a new wave.",
    beforeSteps: ["Identify mainstream probabilistic/stat methods", "Note hand-crafted feature bottlenecks", "Track data/compute buildup"],
    beforeCheckpoint: {
      prompt: "Mainstream approach before deep learning:",
      options: [
        { label: "Handcrafted features + probabilistic/stat modeling", correct: true, explanation: "Feature engineering dominated." },
        { label: "No features needed", correct: false, explanation: "Features were central." },
        { label: "Pure emotional reasoning", correct: false, explanation: "Not the case." },
      ],
    },
    brainTitle: "2. Dream of Brain Simulation",
    brainEyebrow: "Connectionist path",
    brainIntro:
      "Neuron model → perceptron → backprop → multilayer nets; despite downturns, Hinton and others saw nets as core to simulating intelligence.",
    brainSteps: ["List neural milestones", "Early hurdles: local optima/training issues", "Role of persistent advocates"],
    brainCheckpoint: {
      prompt: "Backpropagation enables:",
      options: [
        { label: "Training multilayer networks", correct: true, explanation: "Solves gradient update." },
        { label: "Deleting all data", correct: false, explanation: "Data still needed." },
        { label: "Only single-layer perceptrons", correct: false, explanation: "For deep nets." },
      ],
    },
    revolutionTitle: "3. Deep Learning Revolution",
    revolutionIntro:
      "2006 pretraining made deep nets practical; they learn hierarchical features, and with big data + GPUs outperformed classical methods, defining pretrain-finetune.",
    revolutionCheckpoint: {
      prompt: "Key strength of deep learning:",
      options: [
        { label: "Automatically learning layered features/representations", correct: true, explanation: "Edges → parts → semantics." },
        { label: "Only hand-coded rules", correct: false, explanation: "Rules aren’t core." },
        { label: "No need for compute/data", correct: false, explanation: "It needs both." },
      ],
    },
    summaryTitle: "Summary",
    summaryPoints: [
      "Deep learning emerged at the intersection of statistical limits, data boom, and compute gains.",
      "Multilayer nets learn representations; pretrain+finetune is key.",
      "Hinton et al. propelled the field; Turing Award recognized contributions.",
    ],
  },
};
