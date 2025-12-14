import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { FeatureHierarchyDemo } from "../demos/FeatureHierarchyDemo";
import { DepthExpressivenessDemo } from "../demos/DepthExpressivenessDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson7_4({ lang }: LessonProps) {
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
    { id: "journey", label: t.journeyTitle },
    { id: "multilayer", label: t.multilayerTitle },
    { id: "deep-start", label: t.deepStartTitle },
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

        <SectionBlock id="journey" title={t.journeyTitle} eyebrow={t.journeyEyebrow}>
          {t.journeyParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <InfoCard title={t.timelineTitle}>
            <ul className="list-disc space-y-1 pl-4 text-sm text-slate-700">
              {t.timelineItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.journeySteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.journeyCheckpoint.prompt}
            options={t.journeyCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="multilayer" title={t.multilayerTitle} eyebrow={t.multilayerEyebrow}>
          {t.multilayerParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <DepthExpressivenessDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.multilayerSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.multilayerCheckpoint.prompt}
            options={t.multilayerCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="deep-start" title={t.deepStartTitle} eyebrow={t.deepStartEyebrow}>
          {t.deepStartParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FeatureHierarchyDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.deepStartSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.deepStartCheckpoint.prompt}
            options={t.deepStartCheckpoint.options}
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
      "了解 Hinton 的经历与深度学习诞生背景",
      "理解分层特征学习的重要性",
      "认识大数据学习时代的意义",
    ],
    journeyTitle: "1. Hinton 的求学与坚持",
    journeyEyebrow: "从怀疑到坚持",
    journeyParas: [
      "Hinton 出身学术家庭，对大脑工作机制着迷。大学辗转多个专业，最终研究神经网络，在低谷期坚持这一方向。",
      "即使 SVM 等方法一度表现更好，他仍相信神经网络潜力，坚持攻克训练难题。",
    ],
    timelineTitle: "关键时间线",
    timelineItems: [
      "1970 年获实验心理学学士，之后做木匠维持生计仍不放弃科研。",
      "1973 年入爱丁堡攻读博士，研究神经网络，遭遇怀疑与资金低谷。",
      "1986 年与人合作推广 BP 算法，神经网络迎来回暖。",
    ],
    journeySteps: [
      "关注“他人不看好、他却坚持”的节点。",
      "思考科学突破中“信念+证据”的关系。",
      "联系今天的前沿：哪些方向仍需长期坚持？",
    ],
    journeyCheckpoint: {
      prompt: "Hinton 坚持神经网络的原因是？",
      options: [
        { label: "相信训练问题解决后可释放潜力", correct: true, explanation: "他坚信网络能力尚未被挖掘。" },
        { label: "神经网络当时已无可挑战者", correct: false, explanation: "当时 SVM 等方法表现更好。" },
        { label: "他反对任何数据驱动方法", correct: false, explanation: "他主张用数据训练网络。" },
      ],
    },
    multilayerTitle: "2. 多层网络的再崛起",
    multilayerEyebrow: "BP 与 SVM 之争",
    multilayerParas: [
      "BP 解决了多层网络训练难题，但 1990s SVM 因易训练、全局最优而风靡。多层网络理论上强，却难以训练、表现不稳。",
    ],
    multilayerSteps: [
      "比较 SVM 与神经网络的优缺点。",
      "理解训练稳定性为何重要。",
      "思考何时应选更易训练的模型。",
    ],
    multilayerCheckpoint: {
      prompt: "90 年代 SVM 受欢迎的原因之一是？",
      options: [
        { label: "易训练且易得全局最优", correct: true, explanation: "稳定性使其广受青睐。" },
        { label: "完全不需要数据", correct: false, explanation: "SVM 仍需要数据。" },
        { label: "比神经网络更难实现", correct: false, explanation: "SVM 在当时实现较简单。" },
      ],
    },
    deepStartTitle: "3. 深度学习的开端",
    deepStartEyebrow: "分层特征与大数据号角",
    deepStartParas: [
      "2006 年 Hinton 提出逐层预训练（如 RBM 堆叠）提取分层特征，再微调，显著提升表达力。",
      "分层特征类似人脑由简单到复杂的处理；数据、算力积累让深度学习成为“大数据学习”时代的号角，推动进入大模型时代。",
    ],
    deepStartSteps: [
      "理解逐层预训练如何获得更高层语义。",
      "联系人类视觉层级处理的类比。",
      "思考数据与算力对深度模型的支撑作用。",
    ],
    deepStartCheckpoint: {
      prompt: "Hinton 2006 年工作的核心贡献是？",
      options: [
        { label: "强调分层特征学习的重要性", correct: true, explanation: "逐层预训练凸显层级表示。" },
        { label: "证明深度网络不需要数据", correct: false, explanation: "恰恰需要大量数据。" },
        { label: "否定非线性激活的必要性", correct: false, explanation: "非线性仍是关键。" },
      ],
    },
    summaryTitle: "小结",
    summaryPoints: [
      "Hinton 的坚持与逐层预训练点燃深度学习热潮。",
      "分层特征让网络更好地理解复杂语义，数据/算力是关键推动力。",
      "深度学习开启大数据学习时代，迈向大模型与通用智能。",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Learn Hinton’s journey and the backdrop of deep learning",
      "Grasp why hierarchical feature learning matters",
      "See the significance of the big-data learning era",
    ],
    journeyTitle: "1. Hinton’s Path and Persistence",
    journeyEyebrow: "From doubt to conviction",
    journeyParas: [
      "From a science-filled family, Hinton was fascinated by the brain. He bounced across majors, pursued neural nets during their winter, and never quit.",
      "Even when SVMs outperformed nets, he believed training issues—not potential—held nets back.",
    ],
    timelineTitle: "Key milestones",
    timelineItems: [
      "1970: BA in experimental psychology; worked as a carpenter while staying in research.",
      "1973: PhD in Edinburgh on neural nets amid skepticism and low funding.",
      "1986: Popularized BP with collaborators, reviving neural networks.",
    ],
    journeySteps: [
      "Spot moments where belief plus evidence mattered.",
      "Consider how long-term conviction fuels breakthroughs.",
      "Relate to today’s frontier areas needing persistence.",
    ],
    journeyCheckpoint: {
      prompt: "Hinton stuck with neural nets because he…",
      options: [
        { label: "Believed solving training would unlock their power", correct: true, explanation: "He trusted their potential." },
        { label: "Thought no other methods existed", correct: false, explanation: "SVMs were strong competitors." },
        { label: "Opposed data-driven methods", correct: false, explanation: "He advocated training with data." },
      ],
    },
    multilayerTitle: "2. Multilayer Networks’ Return",
    multilayerEyebrow: "BP vs. SVMs",
    multilayerParas: [
      "BP enabled multilayer training, but 1990s SVMs were popular for easy training and global optima. Nets were powerful in theory but unstable in practice.",
    ],
    multilayerSteps: [
      "Compare SVM vs. neural nets strengths/weaknesses.",
      "Note why training stability matters.",
      "Consider when simpler-to-train models are better choices.",
    ],
    multilayerCheckpoint: {
      prompt: "One reason SVMs were favored in the 1990s was…",
      options: [
        { label: "Easier training with global optima", correct: true, explanation: "Stability made SVMs attractive." },
        { label: "No data needed", correct: false, explanation: "SVMs still require data." },
        { label: "Harder to implement than neural nets", correct: false, explanation: "They were relatively easy to implement." },
      ],
    },
    deepStartTitle: "3. Beginning of Deep Learning",
    deepStartEyebrow: "Layered features and the big-data trumpet",
    deepStartParas: [
      "In 2006 Hinton proposed layer-wise pretraining (e.g., stacked RBMs) to learn hierarchical features before fine-tuning, boosting expressiveness.",
      "Layered features mirror human perception; data + compute made deep learning the trumpet for the big-data era, paving the way to large models.",
    ],
    deepStartSteps: [
      "See how pretraining yields higher-level semantics.",
      "Link to human visual hierarchies.",
      "Recognize data/compute as enablers of deep models.",
    ],
    deepStartCheckpoint: {
      prompt: "Hinton’s 2006 work mainly highlighted…",
      options: [
        { label: "The importance of hierarchical feature learning", correct: true, explanation: "Layer-wise pretraining exposed hierarchy." },
        { label: "That deep nets need no data", correct: false, explanation: "They are data-hungry." },
        { label: "That nonlinear activations are unnecessary", correct: false, explanation: "Nonlinearity remained crucial." },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryPoints: [
      "Hinton’s persistence and layer-wise pretraining ignited deep learning.",
      "Hierarchical features improve semantic understanding; data/compute fuel the rise.",
      "Deep learning heralded the big-data era, leading toward large models and broader intelligence.",
    ],
  },
};
