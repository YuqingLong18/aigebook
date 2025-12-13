import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { BayesianRainDemo } from "../demos/BayesianRainDemo";
import { FruitBoundaryDemo } from "../demos/FruitBoundaryDemo";
import { GeneticAlgorithmDemo } from "../demos/GeneticAlgorithmDemo";
import { ProductionRuleDemo } from "../demos/ProductionRuleDemo";
import { SchoolChooserDemo } from "../demos/SchoolChooserDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson2_5({ lang }: LessonProps) {
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
    { id: "symbolic", label: isZh ? "1. 符号学派" : "1. Symbolic School" },
    { id: "bayesian", label: isZh ? "2. 贝叶斯学派" : "2. Bayesian School" },
    { id: "connectionist", label: isZh ? "3. 联结学派" : "3. Connectionist School" },
    { id: "evolutionary", label: isZh ? "4. 进化学派" : "4. Evolutionary School" },
    { id: "integration", label: isZh ? "5. 融合与选择" : "5. Integration & Choice" },
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

        <SectionBlock id="symbolic" title={t.symbolicTitle} eyebrow={t.symbolicEyebrow}>
          <InfoCard title={t.symbolicCoreTitle}>
            {t.symbolicParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <ProductionRuleDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.symbolicSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.symbolicCheckpoint.prompt}
            options={t.symbolicCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="bayesian" title={t.bayesianTitle} eyebrow={t.bayesianEyebrow}>
          <InfoCard title={t.bayesianCoreTitle}>
            {t.bayesianParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <BayesianRainDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.bayesianSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.bayesianCheckpoint.prompt}
            options={t.bayesianCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="connectionist" title={t.connTitle} eyebrow={t.connEyebrow}>
          <InfoCard title={t.connCoreTitle}>
            {t.connParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <FruitBoundaryDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.connSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.connCheckpoint.prompt}
            options={t.connCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="evolutionary" title={t.evoTitle} eyebrow={t.evoEyebrow}>
          <InfoCard title={t.evoCoreTitle}>
            {t.evoParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <GeneticAlgorithmDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.evoSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.evoCheckpoint.prompt}
            options={t.evoCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="integration" title={t.integrationTitle}>
          <InfoCard title={t.integrationCardTitle}>
            {t.integrationParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <SchoolChooserDemo lang={lang} />
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
      "Understand the core ideas and methods of the Symbolic, Bayesian, Connectionist, and Evolutionary schools.",
      "Explain symbolic knowledge representation and expert systems’ limits.",
      "Describe Bayesian networks and their strength with uncertainty.",
      "Explain neural networks’ structure, learning mechanism, and limits.",
      "Outline genetic algorithms and when evolutionary methods fit; discuss integration trends.",
    ],
    openingTitle: "Opening Idea",
    openingEyebrow: "Four schools",
    openingText:
      "Machine learning developed four major schools—Symbolic, Bayesian, Connectionist, Evolutionary—each answering how machines learn with different tools. Modern AI often blends them.",
    symbolicTitle: "1. Symbolic School",
    symbolicEyebrow: "Logic & rules",
    symbolicCoreTitle: "Symbols and production rules",
    symbolicParas: [
      "Cognition is symbol manipulation; expert systems use if–then rules to reason, and can extend their knowledge by learning new rules from data.",
      "Strength: clear logic and interpretability; Limitation: brittle updates and limited large-scale learning.",
    ],
    symbolicSteps: [
      "Represent domain knowledge as symbols and rules.",
      "Chain rules to derive conclusions.",
      "Beware stability when updating rules at scale.",
    ],
    symbolicCheckpoint: {
      prompt: "What is a core limitation of symbolic systems?",
      options: [
        {
          label: "Large rule updates can destabilize or become hard to manage.",
          correct: true,
          explanation: "Rule changes can ripple through the system.",
        },
        {
          label: "They cannot represent any domain knowledge.",
          correct: false,
          explanation: "They are built on explicit knowledge.",
        },
        {
          label: "They inherently require huge labeled datasets.",
          correct: false,
          explanation: "They rely more on rules than massive labels.",
        },
      ],
    },
    bayesianTitle: "2. Bayesian School",
    bayesianEyebrow: "Probability & uncertainty",
    bayesianCoreTitle: "Conditional probabilities and networks",
    bayesianParas: [
      "Models the world as random variables linked by conditional probabilities (Bayesian networks).",
      "Strength: handles uncertainty and sparse data using priors; Limitation: defining dependencies can be expert-heavy and computation can be expensive.",
    ],
    bayesianSteps: [
      "Define variables and conditional probabilities.",
      "Update beliefs with new observations.",
      "Use probabilities to reason over effects (e.g., rainfall vs. humidity/season).",
    ],
    bayesianCheckpoint: {
      prompt: "Why are priors valuable in Bayesian methods?",
      options: [
        {
          label: "They provide informed starting beliefs when data are limited or noisy.",
          correct: true,
          explanation: "Priors stabilize inference under uncertainty.",
        },
        {
          label: "They eliminate the need for observations.",
          correct: false,
          explanation: "Data still updates the priors.",
        },
        {
          label: "They guarantee zero computation.",
          correct: false,
          explanation: "Bayesian inference can still be costly.",
        },
      ],
    },
    connTitle: "3. Connectionist School",
    connEyebrow: "Neural networks",
    connCoreTitle: "Learning via weighted connections",
    connParas: [
      "Artificial neural networks mimic brain connections; weights update through learning to map inputs to outputs.",
      "Strength: strong learning capacity with large data; Limitations: low interpretability, high data/compute demand.",
    ],
    connSteps: [
      "Design network structure (layers, connections).",
      "Train weights with data-driven optimization.",
      "Check generalization; beware interpretability gaps.",
    ],
    connCheckpoint: {
      prompt: "Which scenario highlights a connectionist strength?",
      options: [
        {
          label: "Learning complex patterns from large datasets by adjusting weights.",
          correct: true,
          explanation: "Neural nets excel with data-rich pattern learning.",
        },
        {
          label: "Explaining every decision in strict logical steps.",
          correct: false,
          explanation: "Interpretability is a weakness of many neural nets.",
        },
        {
          label: "Operating without any training data.",
          correct: false,
          explanation: "They rely heavily on data to learn.",
        },
      ],
    },
    evoTitle: "4. Evolutionary School",
    evoEyebrow: "Optimization by evolution",
    evoCoreTitle: "Genetic algorithms and search",
    evoParas: [
      "Simulates crossover, mutation, and selection to evolve better solutions, even without fixed model forms.",
      "Strength: generality and flexibility; Limitations: compute cost and risk of local optima.",
    ],
    evoSteps: [
      "Define a fitness function to score candidates.",
      "Iterate selection, crossover, mutation to explore solutions.",
      "Monitor convergence and adjust mutation to avoid local optima.",
    ],
    evoCheckpoint: {
      prompt: "What is a typical drawback of genetic algorithms?",
      options: [
        {
          label: "High computation and potential to stall in local optima.",
          correct: true,
          explanation: "GAs can be slow and may need hybrid strategies.",
        },
        {
          label: "They require closed-form gradients.",
          correct: false,
          explanation: "GAs do not need gradients.",
        },
        {
          label: "They cannot optimize unknown structures.",
          correct: false,
          explanation: "They are useful when structures are unclear.",
        },
      ],
    },
    integrationTitle: "5. Integration and Method Choice",
    integrationCardTitle: "Blending schools",
    integrationParas: [
      "Modern systems mix ideas: knowledge graphs + neural networks; Bayesian neural networks for uncertainty-aware learning.",
      "No Free Lunch suggests choosing or combining methods per problem rather than clinging to one school.",
    ],
    summaryTitle: "Section Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "Symbolic: explicit rules, interpretable but brittle for large updates.",
      "Bayesian: probabilistic reasoning under uncertainty; needs priors and compute.",
      "Connectionist: neural networks learn from data; powerful but less interpretable.",
      "Evolutionary: search via mutation/selection; flexible but costly.",
      "Integration is common—pick or blend schools to fit data, knowledge, and uncertainty.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解符号、贝叶斯、联结、进化四大学派的核心思想与方法。",
      "说明符号表示与专家系统的局限。",
      "说明贝叶斯网络如何处理不确定性。",
      "理解神经网络的结构、学习机制与局限。",
      "概括遗传算法的原理与适用场景，并认识融合趋势。",
    ],
    openingTitle: "开篇理解",
    openingEyebrow: "四大学派",
    openingText: "机器学习形成了符号、贝叶斯、联结、进化四大学派，各用不同工具回答“机器如何学习”。现代 AI 常常融合这些思路。",
    symbolicTitle: "1. 符号学派",
    symbolicEyebrow: "逻辑与规则",
    symbolicCoreTitle: "符号与产生式规则",
    symbolicParas: [
      "把认知视为符号操作；专家系统用 if-then 规则推理，也可从数据总结新规则扩展知识库。",
      "优势：逻辑清晰、可解释；局限：大规模更新易失稳，难以大规模学习。",
    ],
    symbolicSteps: ["用符号与规则表达领域知识。", "链式触发规则得到结论。", "大规模更新时关注系统稳定性。"],
    symbolicCheckpoint: {
      prompt: "符号系统的核心局限是什么？",
      options: [
        {
          label: "大规模规则更新可能失稳、难维护。",
          correct: true,
          explanation: "规则变动会连锁影响推理。",
        },
        {
          label: "无法表达任何领域知识。",
          correct: false,
          explanation: "恰恰依赖显式知识。",
        },
        {
          label: "天生依赖海量标注数据。",
          correct: false,
          explanation: "更依赖规则而非大规模标注。",
        },
      ],
    },
    bayesianTitle: "2. 贝叶斯学派",
    bayesianEyebrow: "概率与不确定性",
    bayesianCoreTitle: "条件概率与网络",
    bayesianParas: [
      "把世界建模为随机变量与条件概率（贝叶斯网络）。",
      "优势：善于处理不确定与稀疏数据；局限：依赖专家定义依赖关系，计算量可能较大。",
    ],
    bayesianSteps: ["定义变量与条件概率。", "用新观测更新信念。", "用概率推理事件影响（如降雨 vs. 湿度/季节）。"],
    bayesianCheckpoint: {
      prompt: "为何先验在贝叶斯方法中有价值？",
      options: [
        {
          label: "在数据有限或有噪声时提供有依据的起点。",
          correct: true,
          explanation: "先验能稳定不确定场景下的推断。",
        },
        {
          label: "意味着不再需要观测数据。",
          correct: false,
          explanation: "数据仍会更新先验。",
        },
        {
          label: "保证零计算代价。",
          correct: false,
          explanation: "贝叶斯推理仍可能耗费计算。",
        },
      ],
    },
    connTitle: "3. 联结学派",
    connEyebrow: "神经网络",
    connCoreTitle: "通过连接权重学习",
    connParas: [
      "人工神经网络仿脑连接；通过学习调整权重，把输入映射为输出。",
      "优势：配合大数据有强学习力；局限：可解释性弱、需要大量数据和算力。",
    ],
    connSteps: ["设计网络结构（层次、连接）。", "用数据驱动优化权重。", "检查泛化，并关注可解释性缺口。"],
    connCheckpoint: {
      prompt: "哪种情景体现联结学派的优势？",
      options: [
        {
          label: "在大数据上通过调权重学习复杂模式。",
          correct: true,
          explanation: "神经网络擅长大规模模式学习。",
        },
        {
          label: "用严格逻辑逐步解释每个决策。",
          correct: false,
          explanation: "低可解释性是弱项。",
        },
        {
          label: "完全不需要任何训练数据。",
          correct: false,
          explanation: "神经网络高度依赖数据。",
        },
      ],
    },
    evoTitle: "4. 进化学派",
    evoEyebrow: "进化式优化",
    evoCoreTitle: "遗传算法与搜索",
    evoParas: [
      "模拟交叉、变异、选择来进化更优解，即便没有固定模型形式也可搜索。",
      "优势：通用灵活；局限：计算开销大、易陷局部最优。",
    ],
    evoSteps: ["定义适应度函数评分候选解。", "迭代选择、交叉、变异探索解空间。", "监测收敛，调节变异避免局部最优。"],
    evoCheckpoint: {
      prompt: "遗传算法的典型缺点是什么？",
      options: [
        {
          label: "计算量大且可能停在局部最优。",
          correct: true,
          explanation: "需要混合或调整策略来跳出局部最优。",
        },
        {
          label: "必须要有梯度公式。",
          correct: false,
          explanation: "遗传算法不需要梯度。",
        },
        {
          label: "无法优化结构未知的问题。",
          correct: false,
          explanation: "相反，它适合结构不明的问题。",
        },
      ],
    },
    integrationTitle: "5. 融合与选择",
    integrationCardTitle: "跨学派融合",
    integrationParas: [
      "现代系统常融合：知识图谱 + 神经网络，或贝叶斯神经网络处理不确定性。",
      "“免费午餐不存在”提示应按问题选择或组合学派，而非执着单一路线。",
    ],
    summaryTitle: "本节小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "符号学派：显式规则，可解释但大规模更新脆弱。",
      "贝叶斯学派：概率推理应对不确定；依赖先验与计算。",
      "联结学派：神经网络靠数据学习；强大但难解释。",
      "进化学派：变异/选择式搜索；灵活但计算昂贵。",
      "融合常见——根据数据、知识与不确定性选择或组合学派。",
    ],
  },
};
