import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { FruitBoundaryDemo } from "../demos/FruitBoundaryDemo";
import { MLIngredientsDemo } from "../demos/MLIngredientsDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson2_2({ lang }: LessonProps) {
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
    { id: "importance", label: isZh ? "1. 学习的重要性" : "1. Why Learning Matters" },
    { id: "ml-origin", label: isZh ? "2. 机器学习概念" : "2. Birth of Machine Learning" },
    { id: "framework", label: isZh ? "3. 机器学习五要素" : "3. Five Elements of ML" },
    { id: "advantages", label: isZh ? "4. 学习型 AI 的优势" : "4. Advantages of ML" },
    { id: "example", label: isZh ? "5. 苹果橙子示例" : "5. Apple–Orange Example" },
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

        <SectionBlock id="importance" title={t.importanceTitle} eyebrow={t.importanceEyebrow}>
          <InfoCard title={t.humansTitle}>
            {t.humanParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <InfoCard title={t.animalsTitle}>
            {t.animalParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.importanceSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.importanceCheckpoint.prompt}
            options={t.importanceCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="ml-origin" title={t.originTitle} eyebrow={t.originEyebrow}>
          <InfoCard title={t.saulTitle}>
            {t.samuelParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.originSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.originCheckpoint.prompt}
            options={t.originCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="framework" title={t.frameworkTitle} eyebrow={t.frameworkEyebrow}>
          <InfoCard title={t.frameworkCardTitle}>
            {t.frameworkParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <MLIngredientsDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.frameworkSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.frameworkCheckpoint.prompt}
            options={t.frameworkCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="advantages" title={t.advTitle}>
          <InfoCard title={t.advCardTitle}>
            {t.advParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.advSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.advCheckpoint.prompt}
            options={t.advCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="example" title={t.exampleTitle} eyebrow={t.exampleEyebrow}>
          <InfoCard title={t.exampleGoalTitle}>
            {t.exampleParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <FruitBoundaryDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.exampleSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.exampleCheckpoint.prompt}
            options={t.exampleCheckpoint.options}
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
      "Understand how machine learning emerged and why Arthur Samuel proposed it.",
      "Grasp the idea of autonomous learning and its central role in AI.",
      "Master the five elements of machine learning: objective, model, algorithm, data, knowledge.",
      "Recognize the importance of data quality, quantity, and scenario coverage.",
      "Use the apple–orange example to understand classification and the learning process.",
    ],
    openingTitle: "Opening Idea",
    openingEyebrow: "Introduction",
    openingText:
      "Arthur Samuel named “machine learning” in 1959 with a self-improving checkers program. Computing and data were limited then; the data-rich 21st century let machine learning flourish.",
    importanceTitle: "1. Why Learning Matters",
    importanceEyebrow: "Across life",
    humansTitle: "Humans learn lifelong",
    humanParas: [
      "From fetal stages, the brain can process signals; after birth we imitate speech, walk, fold paper planes, and master subjects through teaching.",
    ],
    animalsTitle: "Beyond humans",
    animalParas: [
      "Animals learn survival skills; experiments even hint plants can associate signals (corn seedlings linking wind to light).",
    ],
    importanceSteps: [
      "Connect human, animal, and plant learning to the need for adaptive AI.",
      "Contrast innate rules with learned experience.",
      "Reflect on why static knowledge alone is insufficient for growth.",
    ],
    importanceCheckpoint: {
      prompt: "What key insight motivates learning-based AI?",
      options: [
        {
          label: "Adaptive learning is essential across living systems; AI also needs to learn.",
          correct: true,
          explanation: "Learning enables growth beyond fixed instructions.",
        },
        {
          label: "Only humans learn; AI should avoid it.",
          correct: false,
          explanation: "Learning is widespread; AI benefits from it.",
        },
        {
          label: "Learning only matters before birth.",
          correct: false,
          explanation: "Learning continues across the lifespan.",
        },
      ],
    },
    originTitle: "2. Birth of Machine Learning",
    originEyebrow: "1959 and beyond",
    saulTitle: "Arthur Samuel’s checkers system",
    samuelParas: [
      "Samuel provided rules plus adjustable parameters; after 8–10 hours the system beat its programmer by self-tuning.",
      "Later models like Bayesian networks and neural networks expanded machine learning’s reach, boosted by modern data and compute.",
    ],
    originSteps: [
      "Start with task rules and simple strategies.",
      "Let parameters adjust from experience instead of hand-coding everything.",
      "Use compute and data scale to iterate faster.",
    ],
    originCheckpoint: {
      prompt: "Why did Samuel’s checkers experiment matter?",
      options: [
        {
          label: "It showed machines could improve through data-driven parameter updates.",
          correct: true,
          explanation: "Learning beat static programming in his trial.",
        },
        {
          label: "It removed the need for any game rules.",
          correct: false,
          explanation: "Rules still framed the task; learning tuned play.",
        },
        {
          label: "It relied on massive modern GPUs.",
          correct: false,
          explanation: "It predated modern hardware and used modest compute.",
        },
      ],
    },
    frameworkTitle: "3. The Five Elements of ML",
    frameworkEyebrow: "Objective → knowledge",
    frameworkCardTitle: "Objective, model, algorithm, data, knowledge",
    frameworkParas: [
      "Objective: mathematically defined goal/loss (e.g., accuracy, error).",
      "Model: the learnable structure (rules, Bayesian nets, neural nets).",
      "Algorithm: how parameters update (optimization or evolutionary search).",
      "Data: nutrition for learning—needs quality, quantity, and coverage.",
      "Knowledge: task constraints and priors that guide the learning process.",
    ],
    frameworkSteps: [
      "Define a measurable objective/loss.",
      "Pick a model form and a fitting algorithm.",
      "Collect quality, diverse data; inject prior knowledge where helpful.",
    ],
    frameworkCheckpoint: {
      prompt: "Which element directly encodes task constraints like valid ranges or domain rules?",
      options: [
        {
          label: "Prior knowledge",
          correct: true,
          explanation: "Priors constrain and guide learning for the task.",
        },
        {
          label: "The optimizer hardware",
          correct: false,
          explanation: "Hardware is not one of the five conceptual elements.",
        },
        {
          label: "File system layout",
          correct: false,
          explanation: "Storage is not the conceptual element described.",
        },
      ],
    },
    advTitle: "4. Advantages of Learning-Based AI",
    advCardTitle: "Why self-learning matters",
    advParas: [
      "Machine learning can discover patterns humans have not summarized, explore new paths, and potentially surpass human strategies.",
      "Only machines that learn autonomously can break through the ceiling of hand-coded knowledge.",
    ],
    advSteps: [
      "Contrast static knowledge with discovery from data.",
      "List cases where machine learning found non-obvious patterns.",
      "Connect to risks: powerful but unpredictable capability.",
    ],
    advCheckpoint: {
      prompt: "Why can learning machines surpass human knowledge limits?",
      options: [
        {
          label: "Both humans and machines learn from data; machines add speed and memory, so they may find patterns humans miss.",
          correct: true,
          explanation: "That combination enables discoveries beyond prior human summaries.",
        },
        {
          label: "They ignore all prior knowledge.",
          correct: false,
          explanation: "Priors still guide learning; ignoring them is risky.",
        },
        {
          label: "They never need data once deployed.",
          correct: false,
          explanation: "Ongoing data is key for continued learning.",
        },
      ],
    },
    exampleTitle: "5. Example: Distinguishing Apples and Oranges",
    exampleEyebrow: "Hands-on classification",
    exampleGoalTitle: "From objective to algorithm",
    exampleParas: [
      "Objective: maximize classification accuracy (or minimize error rate).",
      "Model: Y = a × color + b × size with parameters a, b to learn.",
      "Data: labeled fruit samples; Algorithm: adjust a, b so Y aligns with labels.",
    ],
    exampleSteps: [
      "Set a clear loss: prediction vs. true label.",
      "Adjust parameters iteratively to move the decision boundary.",
      "Check accuracy and refine data/priors when it stalls.",
    ],
    exampleCheckpoint: {
      prompt: "In the apple–orange demo, what drives accuracy upward?",
      options: [
        {
          label: "Tuning weights so model outputs align with labeled examples.",
          correct: true,
          explanation: "Weight updates move the boundary to fit labels.",
        },
        {
          label: "Removing labels from the dataset.",
          correct: false,
          explanation: "Labels are needed for supervised classification here.",
        },
        {
          label: "Making the model ignore size and color features.",
          correct: false,
          explanation: "These features carry the signal; ignoring them hurts.",
        },
      ],
    },
    summaryTitle: "Section Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "Machine learning emerged to let machines self-improve from data; Samuel’s checkers program marked a milestone.",
      "Five elements—objective, model, algorithm, data, knowledge—form the ML scaffold.",
      "Data quality, quantity, and coverage are critical; priors guide the search space.",
      "Learning-based AI can discover new patterns and surpass hand-coded limits, as shown in the fruit classification example.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解机器学习的起源以及 Samuel 提出该概念的背景。",
      "掌握“自主学习”在 AI 中的核心作用。",
      "熟悉机器学习的五个要素：目标、模型、算法、数据、知识。",
      "认识数据质量、数量与场景覆盖度的重要性。",
      "通过苹果/橙子示例理解分类流程与学习步骤。",
    ],
    openingTitle: "开篇理解",
    openingEyebrow: "引子",
    openingText:
      "1959 年，Arthur Samuel 用能自我改进的跳棋程序提出了“机器学习”一词。当时算力和数据有限；进入 21 世纪，数据爆发让机器学习真正起飞。",
    importanceTitle: "1. 学习的重要性",
    importanceEyebrow: "贯穿生命",
    humansTitle: "人类的终身学习",
    humanParas: ["胎儿阶段大脑即可处理信号；出生后通过模仿、练习与教学持续学习语言、走路、折纸、学科知识。"],
    animalsTitle: "超越人类的例子",
    animalParas: ["动物通过经验习得生存技能；实验甚至显示植物也能建立联结（玉米幼苗把风与光联系起来）。"],
    importanceSteps: ["把人、动物、植物的学习联结到 AI 的适应性需求。", "对比先天规则与后天经验。", "思考为何仅有静态知识不足以成长。"],
    importanceCheckpoint: {
      prompt: "是什么动机推动了学习型 AI？",
      options: [
        {
          label: "学习是普遍需求，AI 也需自适应。",
          correct: true,
          explanation: "学习使系统超越固定指令。",
        },
        {
          label: "只有人类会学习，AI 不需要。",
          correct: false,
          explanation: "学习广泛存在，AI 也受益。",
        },
        {
          label: "学习只在出生前有用。",
          correct: false,
          explanation: "学习贯穿一生。",
        },
      ],
    },
    originTitle: "2. 机器学习概念的提出",
    originEyebrow: "1959 及其后",
    saulTitle: "Samuel 的跳棋系统",
    samuelParas: [
      "Samuel 给出规则和可调参数；系统自我调整 8–10 小时后反超程序员。",
      "随后的贝叶斯网络、神经网络等模型扩展了机器学习，现代数据与算力进一步放大其能力。",
    ],
    originSteps: ["先给任务规则与基本策略。", "让参数靠经验更新，而非全靠手写。", "用算力和数据规模加速迭代。"],
    originCheckpoint: {
      prompt: "Samuel 的跳棋实验意义何在？",
      options: [
        {
          label: "证明机器能通过数据驱动的参数更新自我提升。",
          correct: true,
          explanation: "学习战胜了纯手工编程。",
        },
        {
          label: "完全不需要棋规。",
          correct: false,
          explanation: "规则仍定义任务，学习调整策略。",
        },
        {
          label: "依赖现代 GPU 大集群。",
          correct: false,
          explanation: "当时算力有限，仍展示了学习的价值。",
        },
      ],
    },
    frameworkTitle: "3. 机器学习的五要素",
    frameworkEyebrow: "目标到先验",
    frameworkCardTitle: "目标、模型、算法、数据、知识",
    frameworkParas: [
      "目标：可度量的数学形式（如准确率、误差）。",
      "模型：可学习的结构（规则系统、贝叶斯网、神经网络等）。",
      "算法：参数更新方式（优化或进化搜索等）。",
      "数据：学习的“养分”——需高质、足量、覆盖广。",
      "知识：任务约束与先验，指导学习的方向与范围。",
    ],
    frameworkSteps: ["设定可度量的目标/损失。", "选择模型形式与优化算法。", "收集高质量多样数据，并注入先验约束。"],
    frameworkCheckpoint: {
      prompt: "哪个要素直接编码任务的约束与规则？",
      options: [
        {
          label: "先验知识",
          correct: true,
          explanation: "先验为学习设定边界与方向。",
        },
        {
          label: "优化器硬件",
          correct: false,
          explanation: "硬件不是五要素之一。",
        },
        {
          label: "文件系统布局",
          correct: false,
          explanation: "存储布局不是概念性要素。",
        },
      ],
    },
    advTitle: "4. 学习型 AI 的优势",
    advCardTitle: "为何需要自学习",
    advParas: [
      "机器学习能发现人类尚未总结的模式，探索新路径，甚至超越人类策略。",
      "只有能自主学习的机器，才能突破手工知识的上限。",
    ],
    advSteps: ["对比静态知识与数据发现。", "列举机器学习挖掘非直观模式的案例。", "联系风险：能力强但可能难以预测。"],
    advCheckpoint: {
      prompt: "为何学习型机器有可能超越人类知识上限？",
      options: [
        {
          label: "人和机器都从数据学起，机器凭速度与记忆或发现人类遗漏的模式。",
          correct: true,
          explanation: "二者优势互补，使机器可能突破人类总结。",
        },
        {
          label: "因为它们会忽略所有先验知识。",
          correct: false,
          explanation: "先验仍是重要指导，忽略先验反而风险增大。",
        },
        {
          label: "因为部署后无需再见到数据。",
          correct: false,
          explanation: "持续数据对持续学习很关键。",
        },
      ],
    },
    exampleTitle: "5. 示例：区分苹果与橙子",
    exampleEyebrow: "实践分类",
    exampleGoalTitle: "从目标到算法",
    exampleParas: ["目标：最大化分类准确率（或最小化错误）。", "模型：Y = a × 颜色 + b × 尺寸，参数 a、b 需学习。", "数据：带标签的水果；算法：调整 a、b 使输出贴合标签。"],
    exampleSteps: ["设定清晰损失：预测 vs. 标签。", "迭代调整参数，移动决策边界。", "检查准确率，停滞时完善数据或先验。"],
    exampleCheckpoint: {
      prompt: "在苹果橙子示例中，是什么驱动了准确率提升？",
      options: [
        {
          label: "调整权重，使模型输出贴合带标签的样本。",
          correct: true,
          explanation: "权重更新移动边界以匹配标签。",
        },
        {
          label: "移除数据集中所有标签。",
          correct: false,
          explanation: "监督分类依赖标签信号。",
        },
        {
          label: "让模型忽略尺寸和颜色特征。",
          correct: false,
          explanation: "这些特征包含信号，忽略会降低效果。",
        },
      ],
    },
    summaryTitle: "本节小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "机器学习为机器提供自我改进途径；Samuel 的跳棋是里程碑。",
      "目标、模型、算法、数据、知识构成机器学习的基本框架。",
      "数据质量、数量与覆盖度关键；先验知识可指导搜索空间。",
      "学习型 AI 能发现新模式、突破手工上限，水果分类示例展示了完整流程。",
    ],
  },
};
