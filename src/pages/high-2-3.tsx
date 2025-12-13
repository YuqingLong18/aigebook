import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { GradientDescentDemo } from "../demos/GradientDescentDemo";
import { OverfitBalanceDemo } from "../demos/OverfitBalanceDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson2_3({ lang }: LessonProps) {
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
    { id: "design", label: isZh ? "1. 模型设计" : "1. Model Design" },
    { id: "training", label: isZh ? "2. 模型训练" : "2. Model Training" },
    { id: "testing", label: isZh ? "3. 模型测试" : "3. Model Testing" },
    { id: "selection", label: isZh ? "4. 模型选择" : "4. Model Selection" },
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

        <SectionBlock id="design" title={t.designTitle} eyebrow={t.designEyebrow}>
          <InfoCard title={t.nflTitle}>
            {t.nflParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <InfoCard title={t.designFactorsTitle}>
            {t.designFactors.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.designSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.designCheckpoint.prompt}
            options={t.designCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="training" title={t.trainingTitle} eyebrow={t.trainingEyebrow}>
          <InfoCard title={t.lossTitle}>
            {t.lossParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <GradientDescentDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.trainingSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.trainingCheckpoint.prompt}
            options={t.trainingCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="testing" title={t.testingTitle} eyebrow={t.testingEyebrow}>
          <InfoCard title={t.overfitTitle}>
            {t.overfitParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <OverfitBalanceDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.testingSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.testingCheckpoint.prompt}
            options={t.testingCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="selection" title={t.selectionTitle}>
          <InfoCard title={t.occamTitle}>
            {t.occamParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.selectionSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.selectionCheckpoint.prompt}
            options={t.selectionCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
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
      "Understand the four stages: model design, training, testing, selection.",
      "Apply the No Free Lunch theorem to model choice.",
      "Grasp loss functions and gradient descent for training.",
      "Recognize overfitting/underfitting and test-set evaluation.",
      "Use Occam’s Razor to balance performance and complexity.",
    ],
    openingTitle: "Opening Idea",
    openingEyebrow: "Workflow",
    openingText:
      "Building a machine learning system follows a loop: design the model, train it to reduce loss, test on unseen data, and select a balanced model.",
    designTitle: "1. Model Design",
    designEyebrow: "No Free Lunch",
    nflTitle: "The No Free Lunch theorem",
    nflParas: [
      "No single model dominates all tasks; performance depends on the task’s structure and data. Choosing “the best model” only makes sense relative to a scenario.",
    ],
    designFactorsTitle: "Factors to weigh",
    designFactors: [
      "Data format/size (continuous vs. discrete; 1D vs. 2D; structured vs. unstructured).",
      "Data distribution (uniform vs. clustered; uni- vs. multimodal).",
      "Compute/memory cost and acceptable error rate in the application.",
    ],
    designSteps: [
      "Extract key features that simplify the task.",
      "Match model type to data format and error tolerance.",
      "Plan resources (memory/time) before committing to a design.",
    ],
    designCheckpoint: {
      prompt: "What does No Free Lunch imply for model selection?",
      options: [
        {
          label: "A model is good only relative to a specific task/data setting.",
          correct: true,
          explanation: "There is no universally best model; context matters.",
        },
        {
          label: "One algorithm always wins if trained longer.",
          correct: false,
          explanation: "Training time alone doesn’t override task fit.",
        },
        {
          label: "Model choice is arbitrary.",
          correct: false,
          explanation: "Choice should align with task characteristics.",
        },
      ],
    },
    trainingTitle: "2. Model Training",
    trainingEyebrow: "Loss + optimization",
    lossTitle: "Define objective and optimize",
    lossParas: [
      "Design a loss that measures the gap between prediction and truth (e.g., squared error L = (Y − T)²).",
      "Training adjusts parameters to minimize loss—an optimization problem.",
    ],
    trainingSteps: [
      "Choose a clear loss tied to the task objective.",
      "Compute gradients of the loss with respect to parameters.",
      "Update parameters opposite to the gradient direction.",
    ],
    trainingCheckpoint: {
      prompt: "What does gradient descent do each step?",
      options: [
        {
          label: "Moves parameters along the negative gradient to lower loss.",
          correct: true,
          explanation: "It follows the steepest descent direction.",
        },
        {
          label: "Randomly reinitializes all parameters.",
          correct: false,
          explanation: "Random restarts differ from gradient descent steps.",
        },
        {
          label: "Increases loss to explore harder examples.",
          correct: false,
          explanation: "The goal is to decrease loss.",
        },
      ],
    },
    testingTitle: "3. Model Testing",
    testingEyebrow: "Generalization",
    overfitTitle: "Overfitting vs. underfitting",
    overfitParas: [
      "Overfitting: the model memorizes noise and performs poorly on unseen data; underfitting: the model is too simple to learn real patterns.",
      "Use an independent test set to gauge true performance.",
    ],
    testingSteps: [
      "Split training vs. test data to avoid leaking answers.",
      "Watch for gaps between train and test accuracy.",
      "Adjust complexity or regularization to reduce overfitting.",
    ],
    testingCheckpoint: {
      prompt: "What signals overfitting?",
      options: [
        {
          label: "High training accuracy but low test accuracy.",
          correct: true,
          explanation: "The model memorized training noise and fails to generalize.",
        },
        {
          label: "Both training and test accuracy are low.",
          correct: false,
          explanation: "That suggests underfitting or insufficient signal.",
        },
        {
          label: "Training accuracy is lower than random.",
          correct: false,
          explanation: "That indicates a broken setup, not classic overfitting.",
        },
      ],
    },
    selectionTitle: "4. Model Selection",
    occamTitle: "Occam’s Razor",
    occamParas: [
      "If models perform similarly, prefer the simpler one to avoid unnecessary capacity and overfitting risk.",
      "Balance complexity: too simple underfits, too complex overfits—the sweet spot generalizes best.",
    ],
    selectionSteps: [
      "Compare models on validation/test data, not just training loss.",
      "Prefer simplicity when performance is tied.",
      "Iterate: refine design based on test feedback.",
    ],
    selectionCheckpoint: {
      prompt: "How does Occam’s Razor guide model choice?",
      options: [
        {
          label: "Choose the simpler model when performance is similar.",
          correct: true,
          explanation: "Simplicity reduces overfitting risk without sacrificing accuracy.",
        },
        {
          label: "Always pick the most complex model.",
          correct: false,
          explanation: "Complexity can overfit; context matters.",
        },
        {
          label: "Ignore performance if the model is elegant.",
          correct: false,
          explanation: "Empirical performance still matters.",
        },
      ],
    },
    summaryTitle: "Section Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "Model design depends on task traits—No Free Lunch warns against a one-size-fits-all choice.",
      "Training minimizes a defined loss, often with gradient descent.",
      "Testing on unseen data exposes overfitting or underfitting.",
      "Model selection balances simplicity and performance per Occam’s Razor.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解模型设计、训练、测试、选择四个阶段。",
      "用“免费午餐不存在”原则指导模型选择。",
      "掌握损失函数与梯度下降的训练思路。",
      "识别过拟合/欠拟合并用测试集评估。",
      "用奥卡姆剃刀平衡性能与复杂度。",
    ],
    openingTitle: "开篇理解",
    openingEyebrow: "工作流",
    openingText: "构建机器学习系统要经历：设计模型、通过训练降低损失、用未见数据测试，再选择平衡的模型。",
    designTitle: "1. 模型设计",
    designEyebrow: "没有免费午餐",
    nflTitle: "“免费午餐不存在”",
    nflParas: ["没有单一模型能通吃所有任务；性能取决于任务结构与数据，评价“最好模型”必须落在具体场景上。"],
    designFactorsTitle: "设计要考虑的因素",
    designFactors: [
      "数据形式/规模（连续 vs 离散；1D vs 2D；结构化 vs 非结构化）。",
      "数据分布（均匀或聚簇；单峰或多峰）。",
      "计算/内存成本以及应用可接受的误差水平。",
    ],
    designSteps: ["提取能简化任务的关键特征。", "将模型类型与数据形式和容错需求匹配。", "在设计前规划资源（内存/时间）。"],
    designCheckpoint: {
      prompt: "“免费午餐不存在”对模型选择的含义是什么？",
      options: [
        {
          label: "模型好坏要结合具体任务与数据才能判断。",
          correct: true,
          explanation: "不存在普适最优模型，需情景匹配。",
        },
        {
          label: "某个算法只要训练够久一定最优。",
          correct: false,
          explanation: "时间无法取代任务契合度。",
        },
        {
          label: "模型选择是随意的。",
          correct: false,
          explanation: "选择应依据任务特性。",
        },
      ],
    },
    trainingTitle: "2. 模型训练",
    trainingEyebrow: "损失与优化",
    lossTitle: "定义目标并优化",
    lossParas: [
      "设计度量预测与真实差距的损失（如平方误差 L = (Y − T)²）。",
      "训练通过调整参数最小化损失，本质是优化问题。",
    ],
    trainingSteps: ["选定与任务目标一致的损失。", "计算损失对参数的梯度。", "沿负梯度方向更新参数。"],
    trainingCheckpoint: {
      prompt: "梯度下降每一步在做什么？",
      options: [
        {
          label: "沿负梯度方向移动参数，降低损失。",
          correct: true,
          explanation: "梯度指出最陡方向，负梯度是下坡路。",
        },
        {
          label: "随机重置全部参数。",
          correct: false,
          explanation: "随机重启不同于梯度下降步骤。",
        },
        {
          label: "刻意增大损失以探索更难样本。",
          correct: false,
          explanation: "目标是让损失下降。",
        },
      ],
    },
    testingTitle: "3. 模型测试",
    testingEyebrow: "泛化",
    overfitTitle: "过拟合与欠拟合",
    overfitParas: [
      "过拟合：记住噪声，测试表现差；欠拟合：模型过简单，连主要模式都没学到。",
      "用独立测试集评估真实性能，避免泄漏答案。",
    ],
    testingSteps: ["分训练/测试集避免泄漏。", "关注训练与测试精度差距。", "通过调节复杂度或正则化缓解过拟合。"],
    testingCheckpoint: {
      prompt: "什么现象提示过拟合？",
      options: [
        {
          label: "训练精度高、测试精度低。",
          correct: true,
          explanation: "模型记住训练噪声，泛化差。",
        },
        {
          label: "训练和测试都很低。",
          correct: false,
          explanation: "更像欠拟合或信号不足。",
        },
        {
          label: "训练精度比随机还低。",
          correct: false,
          explanation: "这表示设置有问题，不是典型过拟合。",
        },
      ],
    },
    selectionTitle: "4. 模型选择",
    occamTitle: "奥卡姆剃刀",
    occamParas: [
      "性能相近时选更简单的模型，以降低不必要的容量和过拟合风险。",
      "复杂度过低会欠拟合，过高会过拟合；中间区间最易泛化。",
    ],
    selectionSteps: ["用验证/测试集比较模型，而非仅看训练损失。", "性能持平时偏向简单模型。", "基于测试反馈迭代改进设计。"],
    selectionCheckpoint: {
      prompt: "奥卡姆剃刀如何指导模型选择？",
      options: [
        {
          label: "性能相当时选择更简单的模型。",
          correct: true,
          explanation: "简洁可减少过拟合风险且不损失精度。",
        },
        {
          label: "永远选择最复杂的模型。",
          correct: false,
          explanation: "复杂度过高可能过拟合，需平衡。",
        },
        {
          label: "只要模型优雅就不用管性能。",
          correct: false,
          explanation: "经验性能仍然重要。",
        },
      ],
    },
    summaryTitle: "本节小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "模型设计需结合任务特征，“免费午餐不存在”提醒我们没有通吃方案。",
      "训练是定义损失并用梯度下降等方法最小化它。",
      "测试用未见数据检查过拟合或欠拟合。",
      "模型选择要在性能与简洁间平衡，遵循奥卡姆剃刀。",
    ],
  },
};
