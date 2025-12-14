import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { MPNeuronDemo } from "../demos/MPNeuronDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson7_2({ lang }: LessonProps) {
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
    { id: "background", label: t.backgroundTitle },
    { id: "model", label: t.modelTitle },
    { id: "impact", label: t.impactTitle },
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

        <SectionBlock id="background" title={t.backgroundTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.backgroundIntro}</p>
          <div className="grid gap-3 md:grid-cols-2">
            {t.backgroundCards.map((card) => (
              <InfoCard key={card.title} title={card.title}>
                <p className="text-sm text-slate-700">{card.desc}</p>
              </InfoCard>
            ))}
          </div>
          <GuidedSteps title={ui.guidedTitle} steps={t.backgroundSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.backgroundCheckpoint.prompt}
            options={t.backgroundCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="model" title={t.modelTitle} eyebrow={t.modelEyebrow}>
          {t.modelParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <MPNeuronDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.modelSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.modelCheckpoint.prompt}
            options={t.modelCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="impact" title={t.impactTitle}>
          {t.impactParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <GuidedSteps title={ui.guidedTitle} steps={t.impactSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.impactCheckpoint.prompt}
            options={t.impactCheckpoint.options}
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
      "了解人工神经网络的起点及两位奠基者的故事",
      "理解 M-P 神经元模型的工作原理、意义与局限",
    ],
    introTitle: "导入",
    introEyebrow: "借脑启发机器",
    introParas: [
      "见识了人脑的智慧后，科学家尝试用计算模型复刻神经元的工作方式。M-P 模型由麦卡洛克与皮茨提出，拉开人工神经网络序幕。",
    ],
    backgroundTitle: "1. 时代背景与两位天才",
    backgroundIntro:
      "20 世纪前半叶，神经科学揭示突触可变，数学/逻辑/计算机科学迅速发展，为模拟大脑提供理论与算力基础。",
    backgroundCards: [
      {
        title: "沃伦·麦卡洛克",
        desc: "神经生理学家，1941 年赴芝加哥，与年轻的皮茨合作研究脑的计算机制。",
      },
      {
        title: "沃尔特·皮茨",
        desc: "天才少年前往芝加哥旁听逻辑课，痴迷数学与神经科学，19 岁与麦卡洛克共创 M-P 模型。",
      },
    ],
    backgroundSteps: [
      "连接学科：逻辑+神经生理+可计算性共同促成模型诞生。",
      "关注突触权重可变这一关键观察。",
      "理解跨学科学习对 AI 的启示。",
    ],
    backgroundCheckpoint: {
      prompt: "M-P 模型诞生的条件之一是？",
      options: [
        { label: "已有对神经元连接与突触可变的认识", correct: true, explanation: "生理发现提供了灵感。" },
        { label: "图灵机已被证明不能计算", correct: false, explanation: "图灵机提供了可计算性基础。" },
        { label: "需要海量 GPU", correct: false, explanation: "模型简单，不依赖现代 GPU。" },
      ],
    },
    modelTitle: "2. M-P 神经元模型",
    modelEyebrow: "阈值逻辑单元",
    modelParas: [
      "将神经元视为逻辑单元：输入乘以权重求和，超过阈值输出 1，否则输出 0，模拟“全或无”特性。",
      "三个输入的阈值不同，可实现逻辑与/或。多层连接可组合出复杂逻辑，奠定了通用计算的可能。",
    ],
    modelSteps: [
      "调节权重/阈值，观察输出逻辑变化。",
      "理解“与/或”如何由阈值实现。",
      "思考多层连接如何表达复杂命题。",
    ],
    modelCheckpoint: {
      prompt: "M-P 神经元的核心机制是？",
      options: [
        { label: "输入加权求和，超过阈值才激活", correct: true, explanation: "体现“全或无”的激活特性。" },
        { label: "随机输出 0/1", correct: false, explanation: "输出由阈值决定。" },
        { label: "无需权重", correct: false, explanation: "权重表示突触强度。" },
      ],
    },
    impactTitle: "3. 意义与不足",
    impactParas: [
      "首次用数学刻画神经元工作，证明了神经网络可实现通用逻辑计算，为后续感知机、BP、多层网络等奠基。",
      "局限：权重与阈值需人工设定，不能自学；仍偏简单，与真实神经系统有差距。",
    ],
    impactSteps: [
      "列出后续发展：感知机、BP、卷积/循环网络等。",
      "指出模型的不可学习局限。",
      "思考如何让网络“会学”——引入训练算法。",
    ],
    impactCheckpoint: {
      prompt: "M-P 模型的主要局限是？",
      options: [
        { label: "权重/阈值固定，缺乏学习能力", correct: true, explanation: "需后续方法赋予可学习性。" },
        { label: "无法做逻辑计算", correct: false, explanation: "模型可组合出复杂逻辑。" },
        { label: "完全不可解释", correct: false, explanation: "阈值逻辑非常可解释。" },
      ],
    },
    summaryTitle: "小结",
    summaryPoints: [
      "M-P 模型以阈值逻辑描述神经元，开创人工神经网络。",
      "跨学科成果促成模型诞生；后续方法弥补其学习缺陷。",
      "简单设计蕴含通用计算能力，为深度学习奠定思想基础。",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Learn the origins of artificial neural networks and the story of McCulloch & Pitts",
      "Understand the M-P neuron’s logic, significance, and limits",
    ],
    introTitle: "Warm-up",
    introEyebrow: "Borrowing from the brain",
    introParas: [
      "After witnessing the brain’s intelligence, scientists modeled neurons mathematically. McCulloch and Pitts proposed the M-P model, opening the neural-network era.",
    ],
    backgroundTitle: "1. Background and the Two Geniuses",
    backgroundIntro:
      "Mid-20th century advances in synapse research, logic, and computability laid the groundwork to model the brain.",
    backgroundCards: [
      {
        title: "Warren McCulloch",
        desc: "Neurophysiologist in Chicago; teamed with Pitts to study computational mechanisms of the brain.",
      },
      {
        title: "Walter Pitts",
        desc: "Prodigy who loved logic/math; at 19, co-created the M-P model with McCulloch.",
      },
    ],
    backgroundSteps: [
      "See how logic + neurophysiology + computability converged.",
      "Note the key insight: synaptic strengths can change.",
      "Value interdisciplinary learning in AI advances.",
    ],
    backgroundCheckpoint: {
      prompt: "A condition that enabled the M-P model was…",
      options: [
        { label: "Knowledge that neuron connections and synapses vary", correct: true, explanation: "Biology inspired the model." },
        { label: "Proof that Turing machines cannot compute", correct: false, explanation: "Turing machines enabled computability theory." },
        { label: "Needing massive GPUs", correct: false, explanation: "The model is simple and predates GPUs." },
      ],
    },
    modelTitle: "2. The M-P Neuron Model",
    modelEyebrow: "Threshold logic unit",
    modelParas: [
      "Treats a neuron as a logic unit: weighted inputs sum; if above threshold output 1, else 0, mirroring all-or-none firing.",
      "With three inputs, different thresholds implement AND/OR. Connecting units yields complex logic, pointing toward universal computation.",
    ],
    modelSteps: [
      "Adjust weights/threshold to see logic change.",
      "Link thresholds to AND/OR behavior.",
      "Imagine multilayer connections for complex propositions.",
    ],
    modelCheckpoint: {
      prompt: "The core mechanism of an M-P neuron is…",
      options: [
        { label: "Weighted sum of inputs, activate only if above threshold", correct: true, explanation: "It captures all-or-none firing." },
        { label: "Randomly output 0/1", correct: false, explanation: "Output follows threshold logic." },
        { label: "No weights needed", correct: false, explanation: "Weights encode synapse strength." },
      ],
    },
    impactTitle: "3. Significance and Flaws",
    impactParas: [
      "First mathematical description of neuron behavior; showed neural networks can realize general logic, inspiring perceptrons, BP, CNNs/RNNs.",
      "Limits: weights/thresholds are hand-set, not learned; the model is simpler than real nervous systems.",
    ],
    impactSteps: [
      "List later advances: perceptron, BP, CNN/RNN, etc.",
      "Call out the lack of learning in the original model.",
      "Consider how training algorithms make networks learnable.",
    ],
    impactCheckpoint: {
      prompt: "A main limitation of the M-P model is…",
      options: [
        { label: "Weights/thresholds are fixed and cannot learn", correct: true, explanation: "Learning came later (perceptron/BP)." },
        { label: "It cannot do logic at all", correct: false, explanation: "It can implement logic via thresholds." },
        { label: "It is completely uninterpretable", correct: false, explanation: "Threshold logic is highly interpretable." },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryPoints: [
      "The M-P model used threshold logic to describe neurons, launching neural-network research.",
      "Interdisciplinary progress enabled the model; later work added learning ability.",
      "Simplicity plus logic hinted at universal computation, setting the stage for deep learning.",
    ],
  },
};
