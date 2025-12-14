import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { ClusteringPlaygroundDemo } from "../demos/ClusteringPlaygroundDemo";
import { SupervisedSignalsDemo } from "../demos/SupervisedSignalsDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson6_3({ lang }: LessonProps) {
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
    { id: "overview", label: t.overviewTitle },
    { id: "supervised", label: t.supervisedTitle },
    { id: "unsupervised", label: t.unsupervisedTitle },
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

        <SectionBlock id="overview" title={t.overviewTitle} eyebrow={t.overviewEyebrow}>
          {t.overviewParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <div className="grid gap-3 md:grid-cols-3">
            {t.methodCards.map((card) => (
              <InfoCard key={card.title} title={card.title}>
                <p className="text-sm text-slate-700">{card.desc}</p>
              </InfoCard>
            ))}
          </div>
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.overviewCheckpoint.prompt}
            options={t.overviewCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="supervised" title={t.supervisedTitle}>
          {t.supervisedParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <InfoCard title={t.supervisedStepsTitle}>
            <ol className="list-decimal space-y-1 pl-4 text-sm text-slate-700">
              {t.supervisedSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </InfoCard>
          <SupervisedSignalsDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.supervisedGuided} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.supervisedCheckpoint.prompt}
            options={t.supervisedCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.classificationCheckpoint.prompt}
            options={t.classificationCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="unsupervised" title={t.unsupervisedTitle}>
          {t.unsupervisedParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <InfoCard title={t.unsupervisedStepsTitle}>
            <ol className="list-decimal space-y-1 pl-4 text-sm text-slate-700">
              {t.unsupervisedSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </InfoCard>
          <ClusteringPlaygroundDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.unsupervisedGuided} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.unsupervisedCheckpoint.prompt}
            options={t.unsupervisedCheckpoint.options}
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
      "理解监督学习与无监督学习的概念与差异",
      "认识典型任务：分类/回归、聚类/降维",
      "讨论适用场景、优势与局限",
    ],
    overviewTitle: "导览：机器学习方法全景",
    overviewEyebrow: "学习信号的来源",
    overviewParas: [
      "机器学习可按“学习信号”来源分为监督、无监督、强化学习。本节聚焦前两类，下一节介绍强化学习。",
    ],
    methodCards: [
      { title: "监督学习", desc: "学习自人工标注数据，预测标签或数值。" },
      { title: "无监督学习", desc: "学习自无标注数据，探索分布与结构。" },
      { title: "强化学习", desc: "通过与环境交互、奖励/惩罚优化策略。" },
    ],
    overviewCheckpoint: {
      prompt: "下列哪项匹配学习信号？",
      options: [
        { label: "监督学习依赖人工标注", correct: true, explanation: "标注是监督信号来源。" },
        { label: "无监督学习需要奖励信号", correct: false, explanation: "奖励属于强化学习。" },
        { label: "强化学习使用固定标签", correct: false, explanation: "强化学习没有固定标签。" },
      ],
    },
    supervisedTitle: "1. 监督学习",
    supervisedParas: [
      "监督学习基于标注数据，模型从“输入-标签”映射中学习，典型任务是分类与回归。",
    ],
    supervisedStepsTitle: "基本流程",
    supervisedSteps: [
      "采集并标注数据，例如标出图片中的猫/狗。",
      "用标注数据训练模型，使输出逼近真实标签。",
      "用未见过的测试集评估，验证泛化能力。",
    ],
    supervisedGuided: [
      "区分分类（离散标签）与回归（连续值）。",
      "思考哪些特征最能帮助模型分辨类别/数值。",
      "检视训练与测试差异是否合理。",
    ],
    supervisedCheckpoint: {
      prompt: "监督学习最关键的前提是？",
      options: [
        { label: "拥有带标签的数据", correct: true, explanation: "标签提供监督信号。" },
        { label: "模型不能更新参数", correct: false, explanation: "监督学习需要训练更新参数。" },
        { label: "只能用于文本任务", correct: false, explanation: "监督学习适用于多模态。" },
      ],
    },
    classificationCheckpoint: {
      prompt: "分类与回归的区别是？",
      options: [
        { label: "分类输出离散类别，回归输出连续数值", correct: true, explanation: "回归预测连续量，如价格。" },
        { label: "分类比回归更快", correct: false, explanation: "速度取决于模型与数据，非本质区别。" },
        { label: "回归不需要特征", correct: false, explanation: "两者都依赖特征。" },
      ],
    },
    unsupervisedTitle: "2. 无监督学习",
    unsupervisedParas: [
      "无监督学习在无标签数据上发现结构和模式。常见任务包括聚类（分组相似样本）与降维（压缩高维特征）。",
    ],
    unsupervisedStepsTitle: "基本流程",
    unsupervisedSteps: [
      "收集无标注数据。",
      "用相似度/差异度训练模型划分或压缩数据。",
      "发现隐藏模式，并用来处理新样本。",
    ],
    unsupervisedGuided: [
      "观察聚类数量对分组效果的影响。",
      "思考降维如何帮助可视化与压缩。",
      "联系实际：如用户分群、图像压缩。",
    ],
    unsupervisedCheckpoint: {
      prompt: "无监督学习的主要目标是？",
      options: [
        { label: "在无标签数据中发现结构或模式", correct: true, explanation: "核心是挖掘内在规律。" },
        { label: "根据标签直接预测数值", correct: false, explanation: "那是监督学习。" },
        { label: "通过奖励信号选择动作", correct: false, explanation: "那是强化学习。" },
      ],
    },
    summaryTitle: "小结",
    summaryPoints: [
      "监督学习依赖标注，典型任务为分类与回归。",
      "无监督学习无标签，侧重挖掘结构，如聚类与降维。",
      "选择方法需看数据标注情况与任务需求。",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand supervised vs. unsupervised learning",
      "Know core tasks: classification/regression, clustering/dimensionality reduction",
      "Discuss strengths, weaknesses, and fit scenarios",
    ],
    overviewTitle: "Landscape of ML Methods",
    overviewEyebrow: "Where the learning signal comes from",
    overviewParas: [
      "By learning signal, ML splits into supervised, unsupervised, and reinforcement learning. This lesson covers the first two; RL is next.",
    ],
    methodCards: [
      { title: "Supervised learning", desc: "Learn from labeled data to predict labels/values." },
      { title: "Unsupervised learning", desc: "Learn from unlabeled data to discover structure." },
      { title: "Reinforcement learning", desc: "Learn via interaction and reward signals." },
    ],
    overviewCheckpoint: {
      prompt: "Which pairing is correct?",
      options: [
        { label: "Supervised learning uses human labels", correct: true, explanation: "Labels provide supervision." },
        { label: "Unsupervised learning needs reward signals", correct: false, explanation: "Rewards belong to RL." },
        { label: "Reinforcement learning uses fixed labels", correct: false, explanation: "RL has no fixed labels." },
      ],
    },
    supervisedTitle: "1. Supervised Learning",
    supervisedParas: [
      "Supervised learning fits mappings from inputs to human-provided labels. Core tasks are classification and regression.",
    ],
    supervisedStepsTitle: "Basic workflow",
    supervisedSteps: [
      "Collect and label data (e.g., tag cats/dogs).",
      "Train a model so outputs match labels.",
      "Test on unseen data to verify generalization.",
    ],
    supervisedGuided: [
      "Separate classification (discrete) from regression (continuous).",
      "Pick features that help distinguish categories/values.",
      "Check whether train/test gaps are reasonable.",
    ],
    supervisedCheckpoint: {
      prompt: "Supervised learning fundamentally requires…",
      options: [
        { label: "Labeled data", correct: true, explanation: "Labels are the supervision signal." },
        { label: "Frozen parameters", correct: false, explanation: "Training updates parameters." },
        { label: "Only text inputs", correct: false, explanation: "It works across modalities." },
      ],
    },
    classificationCheckpoint: {
      prompt: "Classification vs. regression differs because…",
      options: [
        { label: "Classification outputs discrete classes; regression outputs continuous values", correct: true, explanation: "Regression predicts quantities like price." },
        { label: "Classification is always faster", correct: false, explanation: "Speed depends on model/data." },
        { label: "Regression needs no features", correct: false, explanation: "Both rely on features." },
      ],
    },
    unsupervisedTitle: "2. Unsupervised Learning",
    unsupervisedParas: [
      "Unsupervised learning finds patterns without labels. Common tasks: clustering (group similar samples) and dimensionality reduction (compress features).",
    ],
    unsupervisedStepsTitle: "Basic workflow",
    unsupervisedSteps: [
      "Gather unlabeled data.",
      "Train a model on similarities/differences to partition or compress.",
      "Use discovered patterns to place new samples.",
    ],
    unsupervisedGuided: [
      "See how cluster count changes grouping quality.",
      "Relate dimensionality reduction to visualization/compression.",
      "Map to practice: user segmentation, image compression, etc.",
    ],
    unsupervisedCheckpoint: {
      prompt: "The main goal of unsupervised learning is…",
      options: [
        { label: "Finding structure/patterns in unlabeled data", correct: true, explanation: "It discovers hidden organization." },
        { label: "Predicting labels from targets", correct: false, explanation: "That is supervised learning." },
        { label: "Choosing actions from rewards", correct: false, explanation: "That is reinforcement learning." },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryPoints: [
      "Supervised learning depends on labels; classification/regression are core tasks.",
      "Unsupervised learning works without labels, uncovering structure via clustering or dimensionality reduction.",
      "Pick methods based on label availability and task needs.",
    ],
  },
};
