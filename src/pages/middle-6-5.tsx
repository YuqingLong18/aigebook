import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { BayesianRainDemo } from "../demos/BayesianRainDemo";
import { DepthExpressivenessDemo } from "../demos/DepthExpressivenessDemo";
import { GeneticAlgorithmDemo } from "../demos/GeneticAlgorithmDemo";
import { SymbolicVsNeuralDemo } from "../demos/SymbolicVsNeuralDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson6_5({ lang }: LessonProps) {
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
    { id: "symbolic", label: t.symbolicTitle },
    { id: "bayesian", label: t.bayesianTitle },
    { id: "connectionist", label: t.connectionistTitle },
    { id: "evolutionary", label: t.evolutionaryTitle },
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

        <SectionBlock id="symbolic" title={t.symbolicTitle} eyebrow={t.symbolicEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.symbolicIntro}</p>
          <InfoCard title={t.symbolicCardTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.symbolicPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </InfoCard>
          <SymbolicVsNeuralDemo lang={lang} />
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

        <SectionBlock id="bayesian" title={t.bayesianTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.bayesianIntro}</p>
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

        <SectionBlock id="connectionist" title={t.connectionistTitle} eyebrow={t.connectionistEyebrow}>
          {t.connectionistParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <DepthExpressivenessDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.connectionistSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.connectionistCheckpoint.prompt}
            options={t.connectionistCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="evolutionary" title={t.evolutionaryTitle}>
          {t.evolutionaryParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <GeneticAlgorithmDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.evolutionarySteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.evolutionaryCheckpoint.prompt}
            options={t.evolutionaryCheckpoint.options}
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
      "了解机器学习的四大学派及代表方法",
      "比较各学派优势、局限与适用场景",
      "梳理历史演进趋势",
    ],
    introTitle: "导入",
    introEyebrow: "四条路径，同一目标",
    introParas: [
      "符号、贝叶斯、连接主义、进化学派用不同工具追求“让机器自学”。它们在不同时代轮流主导，互为补充。",
    ],
    symbolicTitle: "1. 符号学派",
    symbolicEyebrow: "规则、推理与解释性",
    symbolicIntro:
      "以符号计算模拟思维，代表成果有 Logic Theorist、专家系统、Deep Blue。优势是可解释、推理严谨；局限是学习能力弱、知识维护难。",
    symbolicCardTitle: "知识型推理要点",
    symbolicPoints: [
      "人定义符号与规则，推理链清晰。",
      "能从数据中总结新规则，但幅度有限。",
      "适合高可靠领域（医学、航天等）。",
    ],
    symbolicSteps: [
      "区分符号规则与数据驱动模式。",
      "思考何时规则更安全可控。",
      "联系专家系统维护成本的挑战。",
    ],
    symbolicCheckpoint: {
      prompt: "符号学派的突出优点是？",
      options: [
        { label: "推理可解释、规则清晰", correct: true, explanation: "规则明晰便于审计与追溯。" },
        { label: "完全不需要专家知识", correct: false, explanation: "恰恰依赖专家定义符号与规则。" },
        { label: "天生能处理海量非结构化数据", correct: false, explanation: "这更偏向连接主义优势。" },
      ],
    },
    bayesianTitle: "2. 贝叶斯学派",
    bayesianIntro:
      "用概率描述事件关系，结合先验与观测动态更新模型，处理不确定性。适合数据有限或需概率输出的场景。",
    bayesianSteps: [
      "明确先验：对事件关系的初始认知。",
      "输入观测更新条件概率。",
      "用概率结果做决策或追溯原因。",
    ],
    bayesianCheckpoint: {
      prompt: "贝叶斯模型的优势在于？",
      options: [
        { label: "能显式处理不确定性并融入先验", correct: true, explanation: "概率框架自然表达不确定性。" },
        { label: "不需要任何专家知识", correct: false, explanation: "模型结构常需专家设定。" },
        { label: "只能用于图像任务", correct: false, explanation: "贝叶斯适用于多种数据形态。" },
      ],
    },
    connectionistTitle: "3. 连接主义学派",
    connectionistEyebrow: "神经网络与深度学习",
    connectionistParas: [
      "模仿生物神经元连接，简单单元叠加产生复杂功能。2006 年后深度学习崛起，大数据+算力释放出强大学习能力。",
    ],
    connectionistSteps: [
      "认识神经元加权求和+非线性激活的基本单元。",
      "理解深度带来的分层特征学习与表达力提升。",
      "留意数据需求、算力消耗与可解释性挑战。",
    ],
    connectionistCheckpoint: {
      prompt: "连接主义方法的突出特点是？",
      options: [
        { label: "强学习能力，可从大数据中自动提取特征", correct: true, explanation: "深度网络能学分层表征。" },
        { label: "完全不需要数据", correct: false, explanation: "高度依赖大规模数据与算力。" },
        { label: "每个神经元功能高度复杂且各不相同", correct: false, explanation: "单元简单，同质连接产生复杂性。" },
      ],
    },
    evolutionaryTitle: "4. 进化学派",
    evolutionaryParas: [
      "模拟生物进化（选择、变异、适者生存）优化模型，代表算法为遗传算法。常用于无显式模型的复杂优化或对其他模型的搜索。",
    ],
    evolutionarySteps: [
      "选择种群规模与变异率，迭代筛选高适应度个体。",
      "在无清晰梯度/模型时提供可行优化途径。",
      "权衡探索空间与计算开销。",
    ],
    evolutionaryCheckpoint: {
      prompt: "进化学派常用来做什么？",
      options: [
        { label: "在无清晰模型时进行迭代优化", correct: true, explanation: "进化搜索可优化结构或参数。" },
        { label: "直接生成精确的符号规则", correct: false, explanation: "生成规则是符号学派思路。" },
        { label: "替代所有概率计算", correct: false, explanation: "概率推理属于贝叶斯范畴。" },
      ],
    },
    summaryTitle: "小结",
    summaryPoints: [
      "四大学派工具各异：符号重规则、贝叶斯重概率、连接主义重神经网络、进化重搜索。",
      "数据越丰富，连接主义越占优势；数据稀缺或需解释时，符号/贝叶斯更合适；缺模型时可借助进化搜索。",
      "历史上符号→贝叶斯→连接主义逐步占主流，反映数据与算力的演进。",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Learn the four major ML schools and representative methods",
      "Compare strengths, limits, and fit scenarios",
      "Trace historical trends",
    ],
    introTitle: "Warm-up",
    introEyebrow: "Four paths to machine learning",
    introParas: [
      "Symbolic, Bayesian, connectionist, and evolutionary approaches share the goal of machine self-learning, each dominant in different eras and complementary today.",
    ],
    symbolicTitle: "1. Symbolic School",
    symbolicEyebrow: "Rules, reasoning, interpretability",
    symbolicIntro:
      "Simulates thought with symbolic computation. Achievements: Logic Theorist, expert systems, Deep Blue. Strength: clear, auditable reasoning; weakness: limited learning and costly knowledge upkeep.",
    symbolicCardTitle: "Knowledge-centric reasoning",
    symbolicPoints: [
      "Humans define symbols/rules; chains are explicit.",
      "Can derive new rules from data, but within limits.",
      "Fits high-reliability domains (medicine, aerospace, finance).",
    ],
    symbolicSteps: [
      "Separate symbolic rules from data-driven patterns.",
      "Consider when rules are safer and more controllable.",
      "Note knowledge maintenance costs.",
    ],
    symbolicCheckpoint: {
      prompt: "A key strength of the symbolic school is…",
      options: [
        { label: "Interpretable, rule-based reasoning", correct: true, explanation: "Chains are explicit and auditable." },
        { label: "Needing no expert knowledge", correct: false, explanation: "It depends on experts to define rules." },
        { label: "Excelling at raw unstructured big data", correct: false, explanation: "That leans toward connectionism." },
      ],
    },
    bayesianTitle: "2. Bayesian School",
    bayesianIntro:
      "Models probabilistic relations, updates beliefs with priors + observations, and handles uncertainty—useful when data are sparse or probabilistic outputs are needed.",
    bayesianSteps: [
      "Set priors: initial beliefs about event relations.",
      "Update conditional probabilities with observations.",
      "Use probabilities to decide or backtrack causes.",
    ],
    bayesianCheckpoint: {
      prompt: "Bayesian models excel because they…",
      options: [
        { label: "Handle uncertainty explicitly and combine priors", correct: true, explanation: "Probabilities capture uncertainty." },
        { label: "Never use expert input", correct: false, explanation: "Structure often needs expert guidance." },
        { label: "Only work on images", correct: false, explanation: "They apply across data types." },
      ],
    },
    connectionistTitle: "3. Connectionist School",
    connectionistEyebrow: "Neural networks and depth",
    connectionistParas: [
      "Mimics neural connections: simple units yield complex intelligence. Post-2006 deep learning plus big data/compute unlocked strong representation learning.",
    ],
    connectionistSteps: [
      "See neuron units: weighted sum + nonlinearity.",
      "Understand depth enables hierarchical features and expressiveness.",
      "Mind data/compute needs and interpretability challenges.",
    ],
    connectionistCheckpoint: {
      prompt: "A standout trait of connectionism is…",
      options: [
        { label: "Learning rich features automatically from large data", correct: true, explanation: "Deep nets learn layered representations." },
        { label: "Needing no data at all", correct: false, explanation: "They are data- and compute-hungry." },
        { label: "Each neuron is highly unique and complex", correct: false, explanation: "Units are simple; connectivity yields power." },
      ],
    },
    evolutionaryTitle: "4. Evolutionary School",
    evolutionaryParas: [
      "Simulates biological evolution (selection, mutation, survival) to optimize models. Genetic algorithms are used for complex optimization or searching over models when no clear gradients exist.",
    ],
    evolutionarySteps: [
      "Set population and mutation rate; iterate to keep high-fitness individuals.",
      "Use when gradients/models are unclear but search is possible.",
      "Trade off exploration coverage vs. compute cost.",
    ],
    evolutionaryCheckpoint: {
      prompt: "Evolutionary methods are often used to…",
      options: [
        { label: "Optimize when explicit models/gradients are unclear", correct: true, explanation: "They search over candidates." },
        { label: "Directly craft precise symbolic rules", correct: false, explanation: "Rule crafting is symbolic." },
        { label: "Replace all probabilistic reasoning", correct: false, explanation: "Probability belongs to Bayesian methods." },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryPoints: [
      "Four schools use different tools: rules, probability, neural nets, or evolutionary search.",
      "Rich data favors connectionism; scarce data or high interpretability calls for symbolic/Bayesian; no model/gradient invites evolutionary search.",
      "Historically the mainstream shifted from symbolic → Bayesian → connectionist, mirroring growth in data and compute.",
    ],
  },
};
