import { useMemo, useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson7_7({ lang }: LessonProps) {
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
    { id: "what", label: t.whatTitle },
    { id: "local", label: t.localTitle },
    { id: "global", label: t.globalTitle },
    { id: "causes", label: t.causesTitle },
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
        </SectionBlock>

        <SectionBlock id="what" title={t.whatTitle} eyebrow={t.whatEyebrow}>
          {t.whatParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <InfoCard title={t.whatExampleTitle}>
            <p className="text-sm text-slate-700">{t.whatExample}</p>
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.whatSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.whatCheckpoint.prompt}
            options={t.whatCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="local" title={t.localTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.localIntro}</p>
          <LocalHeatmapDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.localSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.localCheckpoint.prompt}
            options={t.localCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="global" title={t.globalTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.globalIntro}</p>
          <GlobalLayersDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.globalSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.globalCheckpoint.prompt}
            options={t.globalCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="causes" title={t.causesTitle} eyebrow={t.causesEyebrow}>
          {t.causesParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <GuidedSteps title={ui.guidedTitle} steps={t.causesSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.causesCheckpoint.prompt}
            options={t.causesCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="summary" title={t.summaryTitle} eyebrow={t.summaryEyebrow}>
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

function LocalHeatmapDemo({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const scenarios = useMemo(
    () => [
      {
        label: isZh ? "预测：书店" : "Prediction: bookstore",
        heat: [
          [0.1, 0.2, 0.4, 0.6],
          [0.5, 0.7, 0.8, 0.4],
          [0.2, 0.4, 0.6, 0.3],
          [0.1, 0.2, 0.3, 0.2],
        ],
      },
      {
        label: isZh ? "预测：汽车" : "Prediction: car",
        heat: [
          [0.2, 0.3, 0.2, 0.1],
          [0.3, 0.4, 0.5, 0.7],
          [0.4, 0.8, 0.9, 0.8],
          [0.2, 0.3, 0.4, 0.4],
        ],
      },
    ],
    [isZh],
  );

  const [scenarioIdx, setScenarioIdx] = useState(0);
  const current = scenarios[scenarioIdx];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-slate-900">
            {isZh ? "局部解释示例（热力图）" : "Local explanation with heatmap"}
          </p>
          <p className="text-xs text-slate-600">
            {isZh
              ? "查看模型在不同预测下关注的区域。"
              : "See which regions the model attends to under different predictions."}
          </p>
        </div>
        <div className="flex gap-2">
          {scenarios.map((s, idx) => (
            <button
              key={s.label}
              type="button"
              onClick={() => setScenarioIdx(idx)}
              className={[
                "rounded-full border px-3 py-1 text-xs font-semibold transition",
                idx === scenarioIdx ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200",
              ].join(" ")}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-1">
        {current.heat.flat().map((val, idx) => (
          <div
            key={idx}
            className="aspect-square rounded-md"
            style={{
              background: `rgba(59,130,246,${0.25 + val * 0.75})`,
            }}
            aria-label={`heat ${val.toFixed(2)}`}
          />
        ))}
      </div>
      <p className="mt-2 text-xs text-slate-500">
        {isZh
          ? "颜色越深表示该区域对当前预测的影响越大。"
          : "Darker blocks mean stronger influence on the current prediction."}
      </p>
    </div>
  );
}

function GlobalLayersDemo({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const layers = [
    { name: isZh ? "第 1 层：边缘" : "Layer 1: Edges", complexity: 10 },
    { name: isZh ? "第 2 层：形状" : "Layer 2: Shapes", complexity: 35 },
    { name: isZh ? "第 3 层：纹理/图案" : "Layer 3: Textures/Patterns", complexity: 55 },
    { name: isZh ? "第 4 层：物体部件" : "Layer 4: Object Parts", complexity: 75 },
    { name: isZh ? "第 5 层：场景/语义" : "Layer 5: Scene/Semantics", complexity: 90 },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <p className="text-sm font-semibold text-slate-900">
        {isZh ? "全局解释：层级复杂度" : "Global explanation: layer complexity"}
      </p>
      <div className="mt-3 space-y-2">
        {layers.map((layer) => (
          <div key={layer.name}>
            <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
              <span>{layer.name}</span>
              <span>{layer.complexity}%</span>
            </div>
            <div className="mt-1 h-2 rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-emerald-500"
                style={{ width: `${layer.complexity}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-slate-500">
        {isZh
          ? "从浅到深，感受野变大，特征更抽象，帮助理解模型整体行为。"
          : "Receptive fields grow and features become more abstract from shallow to deep layers, explaining overall behavior."}
      </p>
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand why explainability matters and the risks of the “black box.”",
      "Learn local vs. global explanation methods and how to apply them.",
      "Explore root causes of low explainability and coping strategies.",
    ],
    introTitle: "The black box problem",
    introEyebrow: "Context",
    intro:
      "Deep learning works well but is often opaque. In safety-critical fields (healthcare, finance, autonomous driving), unexplainable decisions damage trust and increase risk.",
    whatTitle: "1. What is explainability?",
    whatEyebrow: "Seeing the why",
    whatParas: [
      "Explainability means the model can provide clear, understandable reasons for its outputs—not just what it did but why.",
      "Neural networks are complex and nonlinear, making their internal logic hard to trace. Even knowing each calculation step may not reveal the decision rationale.",
      "Low explainability weakens trust and hinders adoption in high-stakes scenarios.",
    ],
    whatExampleTitle: "Example: autonomous driving",
    whatExample:
      "End-to-end driving models map sensor input to steering/braking, but if the car brakes suddenly, users need to know why (obstacle, pedestrian, malfunction). Without reasons, trust drops and errors may repeat.",
    whatSteps: [
      "Identify one high-stakes domain needing explanations (e.g., healthcare).",
      "State why opaque models are risky there.",
    ],
    whatCheckpoint: {
      prompt: "Why is explainability important for neural networks?",
      options: [
        {
          label: "Opaque decisions reduce trust and are unsafe in high-stakes use.",
          correct: true,
          explanation: "Transparency builds trust and safety.",
        },
        {
          label: "Because explainability always improves accuracy automatically.",
          correct: false,
          explanation: "Accuracy isn’t guaranteed by explainability alone.",
        },
        {
          label: "Because models must hide all internal logic.",
          correct: false,
          explanation: "We aim to reveal, not hide, decision logic.",
        },
      ],
    },
    localTitle: "2. Local explanation methods",
    localIntro:
      "Local explanations justify a single decision (e.g., why an image is “apple” not “cat”). Visual heatmaps show which regions influenced the prediction.",
    localSteps: [
      "Switch between two predictions and observe attention changes.",
      "Discuss how heatmaps can reveal wrong focus (e.g., background vs. object).",
    ],
    localCheckpoint: {
      prompt: "What does a local heatmap show?",
      options: [
        {
          label: "Regions that strongly influenced this specific prediction.",
          correct: true,
          explanation: "Heatmaps highlight influential areas for one sample.",
        },
        {
          label: "Average accuracy of the model.",
          correct: false,
          explanation: "Heatmaps are about attention, not overall accuracy.",
        },
        {
          label: "Training loss history.",
          correct: false,
          explanation: "They visualize spatial influence, not loss curves.",
        },
      ],
    },
    globalTitle: "3. Global explanation methods",
    globalIntro:
      "Global explanations summarize model behavior (e.g., what each layer captures, from edges to scenes). Proxy models (like LIME) approximate complex models to reveal feature importance.",
    globalSteps: [
      "Note how layer complexity grows from edges to semantics.",
      "Relate this to object/scene understanding across layers.",
    ],
    globalCheckpoint: {
      prompt: "Why compare shallow vs. deep layers?",
      options: [
        {
          label: "To see how features evolve from simple edges to abstract concepts.",
          correct: true,
          explanation: "Layer comparisons reveal the model’s hierarchical understanding.",
        },
        {
          label: "To remove all non-linearities.",
          correct: false,
          explanation: "Non-linearities remain; we analyze their effects.",
        },
        {
          label: "To replace the model with a linear classifier only.",
          correct: false,
          explanation: "Proxies approximate; they don’t replace the full model in general.",
        },
      ],
    },
    causesTitle: "4. Root causes and thoughts",
    causesEyebrow: "Why it’s hard",
    causesParas: [
      "High freedom and deep non-linear processing make decisions hard to trace.",
      "Post-hoc explanations are limited; ante-hoc interpretable models trade accuracy for clarity.",
      "Some argue controllability (e.g., model fusion) is a practical short-term goal, since human brains are also partly unexplainable.",
    ],
    causesSteps: [
      "List one post-hoc and one ante-hoc approach.",
      "Consider when controllability (redundancy, fusion) might be safer than chasing perfect explanations.",
    ],
    causesCheckpoint: {
      prompt: "What is ante-hoc explainability?",
      options: [
        {
          label: "Designing models with inherently interpretable parts or meanings.",
          correct: true,
          explanation: "Ante-hoc models bake interpretability into the architecture.",
        },
        {
          label: "Explaining a model only after deployment.",
          correct: false,
          explanation: "That is post-hoc explainability.",
        },
        {
          label: "Ignoring interpretability to maximize freedom.",
          correct: false,
          explanation: "Ante-hoc aims for built-in clarity, not less.",
        },
      ],
    },
    summaryTitle: "Section Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "Neural network opacity harms trust and safety.",
      "Local methods explain single samples; global methods summarize model structure/behavior.",
      "Post-hoc vs. ante-hoc: trade clarity vs. performance; controllability can be a practical goal.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解可解释性的重要性和“黑箱”带来的风险。",
      "掌握局部与全局解释方法及其应用。",
      "探索缺乏可解释性的根本原因与应对思路。",
    ],
    introTitle: "黑箱难题",
    introEyebrow: "背景",
    intro:
      "深度学习表现强大，但内部逻辑往往不透明。在医疗、金融、自动驾驶等高风险场景，不可解释的决策会削弱信任并带来安全隐患。",
    whatTitle: "1. 什么是可解释性？",
    whatEyebrow: "看见“为什么”",
    whatParas: [
      "可解释性要求模型不仅给出结果，还能提供清晰、易懂的理由。",
      "神经网络结构复杂、非线性强，即使知道每一步计算也难串联成直观逻辑。",
      "缺乏可解释性会降低信任，限制高风险领域的应用。",
    ],
    whatExampleTitle: "示例：自动驾驶",
    whatExample:
      "端到端驾驶模型直接将传感器数据映射到控制指令，但突发刹车需要知道原因（障碍物？行人？故障？）。没有理由，信任会下降，问题可能重复出现。",
    whatSteps: ["举一个需要解释的高风险领域。", "说明黑箱模型在该领域的风险。"],
    whatCheckpoint: {
      prompt: "为什么神经网络需要可解释性？",
      options: [
        {
          label: "不透明决策会降低信任，在高风险场景不安全。",
          correct: true,
          explanation: "透明度提升信任与安全。",
        },
        {
          label: "可解释性一定让准确率自动上升。",
          correct: false,
          explanation: "可解释性与准确率并非自动关联。",
        },
        {
          label: "模型必须隐藏全部内部逻辑。",
          correct: false,
          explanation: "目标是揭示而非隐藏决策逻辑。",
        },
      ],
    },
    localTitle: "2. 局部解释方法",
    localIntro: "局部解释针对单个样本（如一张图为何判为“苹果”而非“猫”）。热力图可展示模型关注区域。",
    localSteps: ["切换不同预测，观察注意力变化。", "讨论热力图如何暴露错误关注（如背景而非主体）。"],
    localCheckpoint: {
      prompt: "局部热力图展示了什么？",
      options: [
        {
          label: "对当前预测影响最大的区域。",
          correct: true,
          explanation: "热力图凸显单个样本的关键区域。",
        },
        {
          label: "模型平均准确率。",
          correct: false,
          explanation: "热力图与总体准确率无关。",
        },
        {
          label: "训练损失曲线。",
          correct: false,
          explanation: "热力图展示空间关注，不是损失记录。",
        },
      ],
    },
    globalTitle: "3. 全局解释方法",
    globalIntro:
      "全局解释总结模型整体行为（如各层学到了什么：从边缘到场景）。代理模型（如 LIME）用简单模型近似复杂模型，评估特征重要度。",
    globalSteps: ["观察层级复杂度从边缘到语义的演进。", "将其与物体/场景理解联系起来。"],
    globalCheckpoint: {
      prompt: "为什么要比较浅层与深层？",
      options: [
        {
          label: "看特征如何从简单边缘到抽象概念演化。",
          correct: true,
          explanation: "层对比揭示模型的层级理解过程。",
        },
        {
          label: "为了移除全部非线性。",
          correct: false,
          explanation: "非线性仍存在，我们分析其作用。",
        },
        {
          label: "为了只保留线性分类器。",
          correct: false,
          explanation: "代理模型是近似，不是完全替代。",
        },
      ],
    },
    causesTitle: "4. 根源与思考",
    causesEyebrow: "为何难解释",
    causesParas: [
      "高度自由和深度非线性让决策路径难以追踪。",
      "事后解释有限；先验可解释模型往往牺牲性能换取清晰度。",
      "有人认为可控性是短期务实目标（如多模型融合），因为人脑也部分不可解释。",
    ],
    causesSteps: ["列出一个事后解释和一个先验可解释方法。", "思考何时“可控性”比“完美解释”更实际。"],
    causesCheckpoint: {
      prompt: "什么是先验（ante-hoc）可解释性？",
      options: [
        {
          label: "在模型结构中预先植入可解释的部件或含义。",
          correct: true,
          explanation: "先验可解释通过设计提升可解释性。",
        },
        {
          label: "只在部署后解释模型。",
          correct: false,
          explanation: "那是事后解释。",
        },
        {
          label: "为了自由度忽视解释需求。",
          correct: false,
          explanation: "先验可解释性追求内置清晰度。",
        },
      ],
    },
    summaryTitle: "本节小结",
    summaryEyebrow: "要点",
    summaryPoints: [
      "神经网络黑箱会削弱信任与安全。",
      "局部方法解释单样本；全局方法总结结构/行为。",
      "事后 vs 先验：性能与清晰度取舍；可控性是务实方向。",
    ],
  },
};
