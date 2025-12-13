import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { ReactionTypeClassifierToyDemo } from "../demos/ReactionTypeClassifierToyDemo";
import { SmilesTokenizerDemo } from "../demos/SmilesTokenizerDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson4_5({ lang }: LessonProps) {
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
    { id: "learning-objectives", label: isZh ? "学习目标" : "Learning Objectives" },
    { id: "intro", label: isZh ? "开篇理解" : "Opening Idea" },
    { id: "chem", label: isZh ? "1. 化学反应简介" : "1. Introduction to Chemical Reactions" },
    { id: "ai", label: isZh ? "2. AI 能为化学家做什么" : "2. What AI Can Do for Chemists" },
    { id: "bert", label: isZh ? "3. 用 AI 预测反应类型" : "3. Predicting Reaction Types with AI" },
    { id: "summary", label: isZh ? "本节小结" : "Section Summary" },
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

        <SectionBlock id="intro" title={t.introTitle} eyebrow={t.introEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.introText}</p>
        </SectionBlock>

        <SectionBlock id="chem" title={t.chemTitle} eyebrow={t.chemEyebrow}>
          <InfoCard title={t.chemImportanceTitle}>
            {t.chemImportanceParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <InfoCard title={t.chemHardTitle}>
            {t.chemHardParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.chemSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.chemCheckpoint.prompt}
            options={t.chemCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="ai" title={t.aiTitle} eyebrow={t.aiEyebrow}>
          <InfoCard title={t.aiCardTitle}>
            {t.aiParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {t.aiBullets.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.aiSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.aiCheckpoint.prompt}
            options={t.aiCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="bert" title={t.bertTitle} eyebrow={t.bertEyebrow}>
          <InfoCard title={t.predTitle}>
            {t.predParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <InfoCard title={t.bertIntroTitle}>
            {t.bertIntroParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <SmilesTokenizerDemo lang={lang} />
          <InfoCard title={t.smilesTitle}>
            {t.smilesParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <ReactionTypeClassifierToyDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.bertSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.bertCheckpoint.prompt}
            options={t.bertCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="summary" title={t.summaryTitle} eyebrow={t.summaryEyebrow}>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
            {t.summaryPoints.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.summaryCheckpoint.prompt}
            options={t.summaryCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>
      </div>
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand the basic concept of chemical reactions and their wide applications in industrial production, medicine, and energy.",
      "Recognize the application of artificial intelligence in chemical research, and grasp the role and value of AI in classifying chemical reactions, predicting reaction conditions, and optimizing experimental plans.",
      "Master the principles of using the BERT model in classifying chemical reactions; understand how NLP techniques can be applied to chemical reaction equations; grasp the concept of SMILES and how to serialize reactions for deep learning models.",
      "Understand the potential of artificial intelligence in interdisciplinary research, and explore the generalizability and broad applicability of deep learning models in scientific research.",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "Turning chemistry into a learning task",
    introText:
      "Chemists have accumulated vast experimental data. By leveraging this data, machine learning can be trained to classify reaction types. This lesson uses BERT reaction classification as an example of formalizing scientific problems into machine learning tasks.",

    chemTitle: "1. Introduction to Chemical Reactions",
    chemEyebrow: "Everywhere in life",
    chemImportanceTitle: "1) The importance of chemical reactions",
    chemImportanceParas: [
      "Chemical reactions are everywhere: oxygen binding to hemoglobin during breathing, chemical changes during cooking, and countless processes that sustain life. They also drive societal progress.",
      "Example: ammonia synthesis enabled large-scale nitrogen fertilizer production, boosting agriculture and alleviating famine. Another example is the 2021 lab synthesis of starch from CO₂ by the Chinese Academy of Sciences (Figure 4-30), showing potential to address food shortages.",
      "By controlling chemical reactions, we create new materials and pharmaceuticals, improving quality of life.",
    ],
    chemHardTitle: "2) The elusive nature of chemical reactions",
    chemHardParas: [
      "Despite ubiquity, many reactions are complex and hard to fully control. Ammonia synthesis is a classic example: simple reactants, but industrial production took long effort.",
      "In the late 19th century, many methods failed. In the early 20th century, Fritz Haber used theoretical calculations to identify optimal conditions (iron catalyst, high temperature and pressure), leading to the Haber process and modern ammonia industry.",
      "This case shows that even seemingly simple reactions can require extensive trials to master.",
    ],
    chemSteps: [
      "Name one daily-life example where reactions sustain life.",
      "Explain why controlling reactions matters (materials/medicine/energy).",
      "Use the Haber process story to illustrate complexity and the value of guidance.",
    ],
    chemCheckpoint: {
      prompt: "What does the Haber process story illustrate about chemical reactions?",
      options: [
        {
          label: "Even simple-looking reactions can be complex and require many trials to control at scale.",
          correct: true,
          explanation: "The text emphasizes complexity and long efforts to industrialize ammonia synthesis.",
        },
        {
          label: "Chemical reactions are always easy to predict and control.",
          correct: false,
          explanation: "The section explicitly describes reactions as complex and difficult to master.",
        },
      ],
    },

    aiTitle: "2. What AI Can Do for Chemists",
    aiEyebrow: "Data-driven discovery",
    aiCardTitle: "AI as a tool for efficiency",
    aiParas: [
      "The complexity of chemical reactions makes discovering new processes costly in time and resources. Artificial intelligence offers new tools: by learning from large volumes of experimental data, AI can analyze conditions and predict outcomes, reducing costs and accelerating research.",
      "Specifically, AI can assist in:",
    ],
    aiBullets: [
      "Determining the nature of chemical reactions: predict reaction type and potential risks.",
      "Inferring reaction conditions: suggest catalysts, temperature, and pressure by searching combinations quickly.",
      "Designing experimental plans: validate theories and propose hypotheses/steps based on data and rules.",
    ],
    aiSteps: [
      "Match each AI capability to a concrete research pain point (time, cost, safety).",
      "Explain why “learning from mass data” helps find good conditions faster.",
      "Relate classification to downstream tasks like planning and safety checks.",
    ],
    aiCheckpoint: {
      prompt: "Which is listed as one way AI can help chemists?",
      options: [
        {
          label: "Inferring reaction conditions such as catalysts, temperature, and pressure.",
          correct: true,
          explanation: "The text lists condition inference as a core AI assistance area.",
        },
        {
          label: "Eliminating the need for experimental data entirely.",
          correct: false,
          explanation: "The section emphasizes AI learning from large volumes of experimental data.",
        },
      ],
    },

    bertTitle: "3. Predicting Chemical Reaction Types with AI",
    bertEyebrow: "BERT + SMILES",
    predTitle: "1) Reaction type prediction",
    predParas: [
      "Chemical reactions break and recombine molecules. Scientists classify reactions (combination, decomposition, single replacement, double replacement; and finer types in organic chemistry).",
      "Knowing the reaction type guides conditions, products, and side reactions. Accurate classification improves success rates and helps design synthesis routes.",
      "In 2021, researchers from IBM and the University of Bern used BERT to classify chemical reactions.",
    ],
    bertIntroTitle: "2) Introduction to the BERT model",
    bertIntroParas: [
      "BERT (Bidirectional Encoder Representations from Transformers) is a Transformer-based pre-trained model for NLP. It encodes sequences bidirectionally to enhance contextual understanding.",
      "Special tokens like CLS represent the whole sequence; SEP separates segments. After training, the CLS vector can represent the entire sequence and feed a classifier.",
    ],
    smilesTitle: "3) Reaction equation serialization",
    smilesParas: [
      "Researchers used SMILES (Simplified Molecular Input Line Entry System) to convert chemical reaction equations into symbol sequences (Figure 4-32). This makes reactions similar to sentences, enabling NLP models to learn from them.",
    ],
    bertSteps: [
      "Explain why serialization (SMILES) is needed to use NLP models on reactions.",
      "State how BERT uses CLS to represent the whole sequence for classification.",
      "Interpret “98.2% accuracy vs 41.0%”: stronger sequence representations capture reaction patterns better.",
    ],
    bertCheckpoint: {
      prompt: "In BERT-style classification, what is the role of the CLS token?",
      options: [
        {
          label: "It represents the whole sequence and feeds the classifier.",
          correct: true,
          explanation: "The text explains CLS can represent the entire sequence for classification.",
        },
        {
          label: "It separates reactants and products in the reaction string.",
          correct: false,
          explanation: "In the described reaction serialization, “>>” separates reactants and products (analogous to SEP).",
        },
      ],
    },

    summaryTitle: "Section Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "Chemical reactions are ubiquitous and crucial for society, but many are complex and hard to control.",
      "AI can help chemists by classifying reactions, inferring conditions, and optimizing experiments using large datasets.",
      "BERT provides a powerful sequence model for reaction classification when reactions are serialized as SMILES strings.",
      "Adding CLS enables sequence-level classification; attention-based models can capture complex patterns in reaction data.",
      "Deep learning’s broad applicability enables interdisciplinary advances by formalizing scientific problems into learning tasks.",
    ],
    summaryCheckpoint: {
      prompt: "Why does SMILES help apply BERT to reaction classification?",
      options: [
        {
          label: "It turns reaction equations into symbol sequences that can be processed like text.",
          correct: true,
          explanation: "SMILES serialization makes reactions sentence-like sequences for NLP models.",
        },
        {
          label: "It guarantees reaction outcomes without data.",
          correct: false,
          explanation: "The method still relies on learning from experimental reaction datasets.",
        },
      ],
    },
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解化学反应的基本概念及其在工业生产、医药与能源等领域的广泛应用。",
      "认识人工智能在化学研究中的应用，掌握 AI 在反应类型分类、反应条件预测与实验方案优化中的作用与价值。",
      "掌握用 BERT 模型进行反应类型分类的原理；理解 NLP 技术如何用于化学反应方程；掌握 SMILES 的概念以及如何把反应序列化用于深度学习模型。",
      "理解人工智能在交叉学科研究中的潜力，探究深度学习模型的可迁移性与广泛适用性。",
    ],
    introTitle: "开篇理解",
    introEyebrow: "把化学变成可学习任务",
    introText:
      "随着科学发展，化学家积累了大量实验数据。借助这些数据，可以训练机器学习模型自动分类化学反应类型。本节以 BERT 反应分类为例，说明如何把科学问题形式化为机器学习任务。",

    chemTitle: "1. 化学反应简介",
    chemEyebrow: "无处不在",
    chemImportanceTitle: "1) 化学反应的重要性",
    chemImportanceParas: [
      "化学反应广泛存在于日常生活：呼吸时氧与血红蛋白结合、烹饪时食物变化等都依赖反应维持生命活动；化学反应研究也推动社会进步。",
      "例如 20 世纪初氨合成推动氮肥工业化，大幅提升农业产量并缓解饥荒。又如 2021 年中科院实现二氧化碳合成淀粉（图 4-30），展示解决粮食短缺的潜力。",
      "随着技术进步，人类能控制并利用反应，制造新材料与药物，显著提升生活质量。",
    ],
    chemHardTitle: "2) 化学反应的复杂性",
    chemHardParas: [
      "尽管常见，许多化学反应极其复杂，难以完全理解或控制。以氨合成为例：反应物简单，但实现工业化曾经历漫长探索。",
      "19 世纪末多种方法均失败。20 世纪初 Fritz Haber 通过理论计算确定最佳条件（铁催化剂、高温高压），实现合成并形成 Haber 过程，奠定现代氨工业基础。",
      "这一案例揭示：即便看似简单的反应，也可能需要大量试验才能掌握。",
    ],
    chemSteps: [
      "说出一个“化学反应支撑生命”的日常例子。",
      "解释为什么控制反应很重要（材料/医药/能源）。",
      "用 Haber 过程说明：反应复杂、需要指导与优化。",
    ],
    chemCheckpoint: {
      prompt: "Haber 过程的故事说明了化学反应的什么特点？",
      options: [
        {
          label: "看似简单的反应也可能很复杂，工业化控制需要大量尝试与优化。",
          correct: true,
          explanation: "文本强调氨合成经历漫长探索才找到可行条件。",
        },
        {
          label: "化学反应总是很容易预测与控制。",
          correct: false,
          explanation: "本节明确指出反应复杂、难以控制。",
        },
      ],
    },

    aiTitle: "2. AI 能为化学家做什么",
    aiEyebrow: "数据驱动探索",
    aiCardTitle: "AI 提升效率",
    aiParas: [
      "化学反应复杂，使得发现新方法与工艺成本高、耗时长。AI 通过学习大量实验数据，帮助快速分析条件并预测结果，从而降低成本并加速研究。",
      "具体而言，AI 可以协助：",
    ],
    aiBullets: [
      "判定反应性质：预测反应类型、是否可行以及潜在安全风险。",
      "推断反应条件：给出催化剂、温度、压力等建议，快速搜索组合以寻找最优条件。",
      "设计实验方案：验证理论、提出假设与实验步骤，减少试错成本。",
    ],
    aiSteps: [
      "把三类能力对应到具体痛点：时间、成本与安全。",
      "解释“从海量数据学习”为什么能更快找到好条件。",
      "说明反应类型分类如何帮助后续规划与风险评估。",
    ],
    aiCheckpoint: {
      prompt: "下列哪项是文中列出的 AI 帮助化学家的方式？",
      options: [
        {
          label: "推断反应条件，如催化剂、温度与压力。",
          correct: true,
          explanation: "本节明确将“推断反应条件”列为 AI 的优势之一。",
        },
        {
          label: "完全不需要实验数据。",
          correct: false,
          explanation: "文本强调 AI 通过学习大量实验数据发挥作用。",
        },
      ],
    },

    bertTitle: "3. 用 AI 预测化学反应类型",
    bertEyebrow: "BERT + SMILES",
    predTitle: "1) 反应类型预测",
    predParas: [
      "化学反应涉及分子断裂与重组。为了理解与管理反应，科学家对其分类（化合、分解、置换、复分解等；有机化学中还有更细分类）。",
      "知道反应类型有助于预测条件、产物与副反应，提高实验成功率，并帮助设计更符合目标的合成路线。",
      "2021 年 IBM 与伯尔尼大学研究者使用 BERT 成功分类化学反应。",
    ],
    bertIntroTitle: "2) BERT 模型简介",
    bertIntroParas: [
      "BERT 是基于 Transformer 的预训练模型，能双向编码输入序列以增强上下文理解。",
      "BERT 使用 CLS 表示整条序列语义，SEP 用于分隔片段。训练后，CLS 对应的向量可代表整个序列并送入分类器。",
    ],
    smilesTitle: "3) 反应方程序列化",
    smilesParas: [
      "研究者用 SMILES（简化分子线性输入规范）把化学反应方程转成符号序列（图 4-32）。这样反应就很像一句话，从而能用 NLP 模型学习与分类。",
    ],
    bertSteps: [
      "说明为何要用 SMILES 把反应序列化，才能让 NLP 模型处理。",
      "说明 CLS 如何作为整条序列表示用于分类。",
      "解释“98.2% vs 41.0%”：更强的序列表征能捕捉更复杂的化学模式。",
    ],
    bertCheckpoint: {
      prompt: "在 BERT 风格的分类中，CLS token 的作用是什么？",
      options: [
        {
          label: "代表整条序列的向量，用于输入分类器。",
          correct: true,
          explanation: "文本说明 CLS 可代表整个序列语义并用于分类。",
        },
        {
          label: "用于分隔反应物与生成物。",
          correct: false,
          explanation: "在反应序列化中，“>>”用于分隔反应物与生成物（类似 SEP）。",
        },
      ],
    },

    summaryTitle: "本节小结",
    summaryEyebrow: "关键要点",
    summaryPoints: [
      "化学反应广泛且重要，但许多反应复杂难控。",
      "AI 可通过反应分类、条件推断与实验优化帮助化学家提升效率，减少试错成本。",
      "当反应以 SMILES 序列化后，BERT 等 NLP 模型能够像处理文本一样学习并分类反应。",
      "CLS 提供序列级表示，注意力模型能捕捉反应数据中的复杂规律。",
      "通过把科学问题形式化为学习任务，深度学习可以在交叉学科中发挥广泛价值。",
    ],
    summaryCheckpoint: {
      prompt: "为什么 SMILES 有助于把 BERT 用于反应分类？",
      options: [
        {
          label: "它把化学反应方程转成符号序列，使其可以像文本一样被模型处理。",
          correct: true,
          explanation: "SMILES 让反应变成“序列”，从而适配 NLP 模型的输入形式。",
        },
        {
          label: "它保证无需数据就能预测所有反应结果。",
          correct: false,
          explanation: "方法仍依赖从大量反应数据中学习。",
        },
      ],
    },
  },
} as const;

