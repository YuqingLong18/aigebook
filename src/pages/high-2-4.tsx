import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { ClusteringPlaygroundDemo } from "../demos/ClusteringPlaygroundDemo";
import { LearningMethodSelectorDemo } from "../demos/LearningMethodSelectorDemo";
import { ReinforcementStepDemo } from "../demos/ReinforcementStepDemo";
import { SupervisedSignalsDemo } from "../demos/SupervisedSignalsDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson2_4({ lang }: LessonProps) {
  const isZh = lang === "zh";
  const ui = {
    reset: isZh ? "重置" : "Reset",
    checkpointTag: isZh ? "检查点" : "Checkpoint",
    correctLabel: isZh ? "正确" : "Correct",
    incorrectLabel: isZh ? "再试一次" : "Check again",
    guidedTitle: isZh ? "引导步骤" : "Guided Steps",
  };

  const t = content[lang];

  const toc = [
    { id: "learning-objectives", label: isZh ? "学习目标" : "Learning Objectives" },
    { id: "intro", label: isZh ? "开篇理解" : "Opening Idea" },
    { id: "supervised", label: isZh ? "1. 监督学习" : "1. Supervised Learning" },
    { id: "unsupervised", label: isZh ? "2. 无监督学习" : "2. Unsupervised Learning" },
    { id: "reinforcement", label: isZh ? "3. 强化学习" : "3. Reinforcement Learning" },
    { id: "compare", label: isZh ? "方法选择" : "Method Choice" },
    { id: "summary", label: isZh ? "本节小结" : "Summary" },
  ];

  return (
    <div className="flex gap-6">
      <LessonToc lang={lang} items={toc} />

      <div className="flex-1 space-y-6">
        <SectionBlock id="learning-objectives" title={t.learningObjectivesTitle}>
          <ul className="grid gap-2 text-sm leading-relaxed text-slate-700 md:grid-cols-2">
            {t.learningObjectives.map((obj) => (
              <li key={obj}>{obj}</li>
            ))}
          </ul>
        </SectionBlock>

        <SectionBlock id="intro" title={t.openingTitle} eyebrow={t.openingEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.openingText}</p>
        </SectionBlock>

        <SectionBlock id="supervised" title={t.supervisedTitle} eyebrow={t.supervisedEyebrow}>
          <InfoCard title={t.supervisedCardTitle}>
            {t.supervisedParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <SupervisedSignalsDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.supervisedSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.supervisedCheckpoint.prompt}
            options={t.supervisedCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="unsupervised" title={t.unsupervisedTitle} eyebrow={t.unsupervisedEyebrow}>
          <InfoCard title={t.clusterTitle}>
            {t.clusterParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <ClusteringPlaygroundDemo lang={lang} />
          <InfoCard title={t.manifoldTitle}>
            {t.manifoldParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.unsupervisedSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.unsupervisedCheckpoint.prompt}
            options={t.unsupervisedCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="reinforcement" title={t.rlTitle} eyebrow={t.rlEyebrow}>
          <InfoCard title={t.rlCardTitle}>
            {t.rlParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <ReinforcementStepDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.rlSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.rlCheckpoint.prompt}
            options={t.rlCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="compare" title={t.compareTitle}>
          <LearningMethodSelectorDemo lang={lang} />
        </SectionBlock>

        <SectionBlock id="summary" title={t.summaryTitle} eyebrow={t.summaryEyebrow}>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
            {t.summaryPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </SectionBlock>
      </div>
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand supervised, unsupervised, and reinforcement learning and when to use each.",
      "Differentiate classification vs. regression tasks and the role of labels.",
      "Explain clustering and manifold learning in unsupervised settings.",
      "Describe reinforcement learning for multi-step decisions and feedback.",
      "Analyze differences and connections among the three methods.",
    ],
    openingTitle: "Opening Idea",
    openingEyebrow: "Learning styles",
    openingText:
      "Machines can learn with a teacher (supervised), self-organize data (unsupervised), or learn from trial-and-error rewards (reinforcement). Each suits different tasks.",
    supervisedTitle: "1. Supervised Learning",
    supervisedEyebrow: "Teacher-guided",
    supervisedCardTitle: "Classification vs. regression and labeling",
    supervisedParas: [
      "Classification outputs discrete labels (cat/dog, digit 1/9). Regression outputs continuous values (house price, temperature).",
      "Accurate human labels are the fuel; labeling difficulty varies by task.",
    ],
    supervisedSteps: [
      "Collect labeled examples that reflect deployment conditions.",
      "Choose classification or regression according to output type.",
      "Measure accuracy/error to guide training.",
    ],
    supervisedCheckpoint: {
      prompt: "Which statement is correct about supervised learning?",
      options: [
        {
          label: "It needs labeled data to guide predictions (classification or regression).",
          correct: true,
          explanation: "Labels provide the “teacher” signal.",
        },
        {
          label: "It never uses human-provided answers.",
          correct: false,
          explanation: "Labels are central to supervised learning.",
        },
        {
          label: "Regression predicts categories; classification predicts numbers.",
          correct: false,
          explanation: "It is the opposite: classification → categories; regression → numbers.",
        },
      ],
    },
    unsupervisedTitle: "2. Unsupervised Learning",
    unsupervisedEyebrow: "Self-study",
    clusterTitle: "Clustering",
    clusterParas: [
      "Groups similar samples without labels; K-means iteratively assigns points to cluster centers and updates the centers.",
      "Applications include recommendation and segmentation.",
    ],
    manifoldTitle: "Manifold learning",
    manifoldParas: [
      "Finds lower-dimensional structure within high-dimensional data (e.g., swiss-roll surface).",
      "Supports compression and visualization; distances along the manifold are more meaningful than in the raw space.",
    ],
    unsupervisedSteps: [
      "Standardize features before clustering.",
      "Pick K based on domain cues or validation.",
      "Use dimensionality reduction to visualize or denoise.",
    ],
    unsupervisedCheckpoint: {
      prompt: "Why reduce dimensions in manifold learning?",
      options: [
        {
          label: "To capture intrinsic structure and enable clearer visualization/compression.",
          correct: true,
          explanation: "Dimensionality reduction reveals the low-dimensional manifold.",
        },
        {
          label: "To add more noise to the data.",
          correct: false,
          explanation: "The goal is to denoise and simplify, not add noise.",
        },
        {
          label: "To generate labels automatically.",
          correct: false,
          explanation: "Dimensionality reduction itself does not create labels.",
        },
      ],
    },
    rlTitle: "3. Reinforcement Learning",
    rlEyebrow: "Trial-and-error",
    rlCardTitle: "Feedback-driven policy learning",
    rlParas: [
      "Learns by interacting with an environment, receiving rewards/punishments, and optimizing long-term return.",
      "Fits multi-step decisions (robot control, trading, games like Go).",
    ],
    rlSteps: [
      "Define states, actions, rewards, and a goal.",
      "Balance exploration (try new moves) and exploitation (use known good moves).",
      "Optimize the policy to maximize expected cumulative reward.",
    ],
    rlCheckpoint: {
      prompt: "What makes reinforcement learning distinct?",
      options: [
        {
          label: "It uses reward feedback over sequences of actions to learn a policy.",
          correct: true,
          explanation: "Rewards drive learning across multi-step decisions.",
        },
        {
          label: "It requires fully labeled datasets for every state.",
          correct: false,
          explanation: "Labels for every state are not provided; rewards guide learning.",
        },
        {
          label: "It cannot handle multi-step tasks.",
          correct: false,
          explanation: "It excels at sequential tasks.",
        },
      ],
    },
    compareTitle: "Picking the Right Method",
    summaryTitle: "Section Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "Supervised learning needs labels; choose classification vs. regression based on output.",
      "Unsupervised learning discovers structure via clustering and manifold methods without labels.",
      "Reinforcement learning optimizes policies from reward signals for sequential decisions.",
      "Method choice depends on labels, feedback, and task structure.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解监督学习、无监督学习、强化学习的原理与适用场景。",
      "区分分类与回归任务，认识标签的重要性。",
      "掌握聚类、流形学习的思路与价值。",
      "理解强化学习在多步决策中的作用与反馈机制。",
      "比较三种方法的联系与差异。",
    ],
    openingTitle: "开篇理解",
    openingEyebrow: "多种学习方式",
    openingText: "机器可以“上课式”学习（监督）、“自学”整理数据（无监督），也可以靠试错奖励改进策略（强化）。不同任务适合不同方式。",
    supervisedTitle: "1. 监督学习",
    supervisedEyebrow: "教师引导",
    supervisedCardTitle: "分类、回归与标注",
    supervisedParas: [
      "分类输出离散标签（猫/狗、数字 1/9）；回归输出连续值（房价、温度）。",
      "准确的人工标注是燃料；标注难度因任务而异。",
    ],
    supervisedSteps: ["采集贴近应用场景的标注样本。", "按输出类型选择分类或回归。", "用准确率/误差衡量并指导训练。"],
    supervisedCheckpoint: {
      prompt: "关于监督学习，哪项表述正确？",
      options: [
        {
          label: "需要带标签的数据来指导分类或回归。",
          correct: true,
          explanation: "标签提供“老师”信号。",
        },
        {
          label: "绝不使用人工答案。",
          correct: false,
          explanation: "标签是监督学习的核心。",
        },
        {
          label: "回归预测类别，分类预测数值。",
          correct: false,
          explanation: "恰好相反：分类→类别；回归→数值。",
        },
      ],
    },
    unsupervisedTitle: "2. 无监督学习",
    unsupervisedEyebrow: "自我组织",
    clusterTitle: "聚类",
    clusterParas: ["在无标签下把相似样本分组；K-Means 反复分配样本、更新中心。", "常用于推荐、分群等。"],
    manifoldTitle: "流形学习",
    manifoldParas: [
      "在高维数据中寻找低维结构（如瑞士卷曲面）。",
      "支持压缩与可视化；沿流形的距离比原空间更有意义。",
    ],
    unsupervisedSteps: ["聚类前标准化特征。", "结合领域或验证选择合适的 K。", "用降维来可视化或去噪。"],
    unsupervisedCheckpoint: {
      prompt: "为何要在流形学习中降维？",
      options: [
        {
          label: "为了捕捉内在结构，并便于可视化/压缩。",
          correct: true,
          explanation: "降维揭示低维流形。",
        },
        {
          label: "为了往数据里增加噪声。",
          correct: false,
          explanation: "目标是简化、去噪，而非添噪。",
        },
        {
          label: "为了自动生成标签。",
          correct: false,
          explanation: "降维本身不产生标签。",
        },
      ],
    },
    rlTitle: "3. 强化学习",
    rlEyebrow: "试错反馈",
    rlCardTitle: "靠奖励学习策略",
    rlParas: [
      "通过与环境交互、接收奖惩，优化长期回报的策略。",
      "适合多步决策（机器人控制、投资策略、围棋等）。",
    ],
    rlSteps: ["定义状态、动作、奖励与目标。", "平衡探索（尝试新动作）与利用（用已知好动作）。", "优化策略以最大化期望累计奖励。"],
    rlCheckpoint: {
      prompt: "强化学习的显著特征是什么？",
      options: [
        {
          label: "用奖励信号在动作序列上学习策略。",
          correct: true,
          explanation: "奖励驱动多步决策的策略改进。",
        },
        {
          label: "必须为每个状态提供精确标签。",
          correct: false,
          explanation: "没有状态标签，靠奖励引导。",
        },
        {
          label: "无法处理多步任务。",
          correct: false,
          explanation: "它正是为多步决策而生。",
        },
      ],
    },
    compareTitle: "选择合适的方法",
    summaryTitle: "本节小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "监督学习依赖标签，按输出选分类或回归。",
      "无监督学习在无标签下用聚类、流形方法挖掘结构。",
      "强化学习用奖励信号优化多步策略。",
      "方法选择取决于是否有标签、是否有反馈以及任务结构。",
    ],
  },
};
