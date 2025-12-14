import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { FeatureHierarchyDemo } from "../demos/FeatureHierarchyDemo";
import { NgramVsRNNDemo } from "../demos/NgramVsRNNDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson7_5({ lang }: LessonProps) {
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
    { id: "hierarchy", label: t.hierarchyTitle },
    { id: "sequence", label: t.sequenceTitle },
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
          {t.introParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
        </SectionBlock>

        <SectionBlock id="hierarchy" title={t.hierarchyTitle} eyebrow={t.hierarchyEyebrow}>
          {t.hierarchyParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <div className="grid gap-3 md:grid-cols-2">
            {t.hierarchyCards.map((card) => (
              <InfoCard key={card.title} title={card.title}>
                <p className="text-sm text-slate-700">{card.desc}</p>
              </InfoCard>
            ))}
          </div>
          <FeatureHierarchyDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.hierarchySteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.hierarchyCheckpoint.prompt}
            options={t.hierarchyCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="sequence" title={t.sequenceTitle} eyebrow={t.sequenceEyebrow}>
          {t.sequenceParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <InfoCard title={t.sequenceCardTitle}>
            <p className="text-sm text-slate-700">{t.sequenceCardDesc}</p>
          </InfoCard>
          <NgramVsRNNDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.sequenceSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.sequenceCheckpoint.prompt}
            options={t.sequenceCheckpoint.options}
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

const content = {
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解深度学习的层级学习与序列学习原理",
      "认识典型应用：视觉、语言、生成",
      "理解深度模型需要大数据与算力的原因",
    ],
    introTitle: "导入",
    introEyebrow: "深度学习学什么？",
    introParas: [
      "深度网络之所以强大，在于能学习世界的基本规律：层级结构与序列秩序。本课围绕这两条主线展开。",
    ],
    hierarchyTitle: "1. 层级学习",
    hierarchyEyebrow: "从像素到语义",
    hierarchyParas: [
      "世界具有层级：像素→纹理→物体→场景；语言从字到词到句。人脑视觉皮层亦逐层提取线条、形状到完整物体。",
      "深度网络类似，低层提取边缘，越高层越语义化。AlphaGo 的价值网络也从局部形势逐层汇聚成全局评估。",
    ],
    hierarchyCards: [
      { title: "人脑视觉路径", desc: "V1 抽取线条，V2/V4 组合形状，IT 获得完整物体感知，节能且高效。" },
      { title: "机器层级特征", desc: "卷积网络在低层学线条/颜色，中层学纹理，高层学轮廓或器官等语义部件。" },
    ],
    hierarchySteps: [
      "观察层数增加时感受野与语义的变化。",
      "联系人类视觉分层处理的优势。",
      "思考层级特征为何提升鲁棒性与泛化。",
    ],
    hierarchyCheckpoint: {
      prompt: "层级学习带来的关键收益是？",
      options: [
        { label: "从局部到全局抽象出更稳定的语义特征", correct: true, explanation: "高层语义减少像素微变的影响。" },
        { label: "只靠单层就能表达所有模式", correct: false, explanation: "单层表达力有限。" },
        { label: "完全不需要非线性激活", correct: false, explanation: "非线性是层级表达的基础。" },
      ],
    },
    sequenceTitle: "2. 序列学习",
    sequenceEyebrow: "顺序承载含义",
    sequenceParas: [
      "语言顺序决定语义（“虎打武松”与“武松打虎”天差地别）；图像/视频中像素或帧也有顺序约束，合理顺序才像真实世界。",
      "大语言模型用长上下文预测下一词，图像生成可用像素/噪声的序列建模（如扩散模型逐步去噪）。",
    ],
    sequenceCardTitle: "序列建模要点",
    sequenceCardDesc: "模型需记忆前文信息，捕捉长距离依赖，避免顺序错乱带来的语义灾难。",
    sequenceSteps: [
      "体验短上下文模型与长上下文模型的差别。",
      "思考为什么图像/视频也需要顺序约束（像素或帧）。",
      "联系扩散模型从噪声逐步逼近真实分布的过程。",
    ],
    sequenceCheckpoint: {
      prompt: "序列学习之所以重要，是因为…",
      options: [
        { label: "顺序携带语义，错误顺序会改变或破坏含义", correct: true, explanation: "语言、视觉都依赖顺序约束。" },
        { label: "图片不包含任何顺序", correct: false, explanation: "像素/结构存在空间顺序。" },
        { label: "长上下文一定会让模型遗忘前文", correct: false, explanation: "合适的序列模型可保留长距依赖。" },
      ],
    },
    summaryTitle: "小结",
    summaryPoints: [
      "深度学习的核心在于掌握层级与序列两大规律。",
      "层级特征让模型从像素走向语义；序列建模让模型理解语言/视频的秩序。",
      "强表达力依赖大数据与算力，带来强大能力也需重视安全与鲁棒性。",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand hierarchical and sequential learning principles in deep learning",
      "See typical applications in vision, language, and generation",
      "Know why deep models need large data and compute",
    ],
    introTitle: "Warm-up",
    introEyebrow: "What deep learning really learns",
    introParas: [
      "Deep nets excel because they capture two core world rules: hierarchy and sequence. This lesson follows those threads.",
    ],
    hierarchyTitle: "1. Hierarchical Learning",
    hierarchyEyebrow: "From pixels to semantics",
    hierarchyParas: [
      "The world is hierarchical: pixels→textures→objects→scenes; language goes from characters to sentences. The visual cortex also stacks processing from lines to full objects.",
      "Deep nets do likewise: low layers find edges, higher ones capture semantics. AlphaGo’s value net aggregates local board cues into a global evaluation.",
    ],
    hierarchyCards: [
      { title: "Human visual pathway", desc: "V1 lines, V2/V4 shapes, IT full objects—efficient layered processing." },
      { title: "Machine feature layers", desc: "CNNs learn edges/colors low, textures mid, outlines/parts high." },
    ],
    hierarchySteps: [
      "Watch receptive field and semantics change with depth.",
      "Relate to human visual hierarchy advantages.",
      "Explain why hierarchical features boost robustness/generalization.",
    ],
    hierarchyCheckpoint: {
      prompt: "A key benefit of hierarchical learning is…",
      options: [
        { label: "Stable semantics from local-to-global abstraction", correct: true, explanation: "High-level features ignore tiny pixel shifts." },
        { label: "Single layer expresses all patterns", correct: false, explanation: "Single layers are limited." },
        { label: "No need for nonlinear activations", correct: false, explanation: "Nonlinearity underpins hierarchy." },
      ],
    },
    sequenceTitle: "2. Sequential Learning",
    sequenceEyebrow: "Order carries meaning",
    sequenceParas: [
      "Word order changes meaning (“tiger fights Wu Song” vs. “Wu Song fights tiger”); images/videos also have ordering—reasonable structure follows spatial/temporal sequence.",
      "LLMs model long contexts for next-word prediction; image/video generation can model pixel/noise sequences (e.g., diffusion gradually denoises).",
    ],
    sequenceCardTitle: "Sequence modeling essentials",
    sequenceCardDesc: "Models must retain history, capture long dependencies, and avoid order errors that ruin meaning.",
    sequenceSteps: [
      "Compare short-context vs. long-context predictors.",
      "See why images/videos need ordering constraints too.",
      "Link diffusion’s stepwise denoising to sequence prediction.",
    ],
    sequenceCheckpoint: {
      prompt: "Sequential learning matters because…",
      options: [
        { label: "Order encodes meaning; wrong order alters/destroys it", correct: true, explanation: "Language and vision rely on order." },
        { label: "Images contain no ordering at all", correct: false, explanation: "Pixels/structures have spatial order." },
        { label: "Long contexts always forget the past", correct: false, explanation: "Proper sequence models retain long-range info." },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryPoints: [
      "Deep learning’s core is mastering hierarchy and sequence.",
      "Hierarchical features lift models from pixels to semantics; sequence modeling preserves order in language and video.",
      "Power comes with big data/compute demands and the need for safety/robustness.",
    ],
  },
};
