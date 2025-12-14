import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { RNNMemoryDemo } from "../demos/RNNMemoryDemo";
import { XORLimitDemo } from "../demos/XORLimitDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson7_3({ lang }: LessonProps) {
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
    { id: "perceptron", label: t.perceptronTitle },
    { id: "mlp", label: t.mlpTitle },
    { id: "network-types", label: t.networkTitle },
    { id: "deep", label: t.deepTitle },
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

        <SectionBlock id="perceptron" title={t.perceptronTitle} eyebrow={t.perceptronEyebrow}>
          {t.perceptronParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <XORLimitDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.perceptronSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.perceptronCheckpoint.prompt}
            options={t.perceptronCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="mlp" title={t.mlpTitle} eyebrow={t.mlpEyebrow}>
          {t.mlpParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <InfoCard title={t.bpTitle}>
            <p className="text-sm text-slate-700">{t.bpDesc}</p>
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.mlpSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.mlpCheckpoint.prompt}
            options={t.mlpCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="network-types" title={t.networkTitle}>
          <div className="grid gap-3 md:grid-cols-2">
            {t.networkCards.map((card) => (
              <InfoCard key={card.title} title={card.title}>
                <p className="text-sm text-slate-700">{card.desc}</p>
              </InfoCard>
            ))}
          </div>
          <RNNMemoryDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.networkSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.networkCheckpoint.prompt}
            options={t.networkCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="deep" title={t.deepTitle}>
          {t.deepParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <GuidedSteps title={ui.guidedTitle} steps={t.deepSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.deepCheckpoint.prompt}
            options={t.deepCheckpoint.options}
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
      "梳理人工神经网络发展史：感知机→多层→深度网络",
      "理解典型网络结构的原理与应用场景",
      "认识深度网络的学习能力与影响",
    ],
    perceptronTitle: "1. 感知机的兴衰",
    perceptronEyebrow: "线性可分的局限",
    perceptronParas: [
      "感知机在 1957 年由罗森布拉特提出，能学习线性分类，开启“机器通过学习获得智能”的新路。",
      "但它只能处理线性可分问题，XOR 等非线性问题无法用一条直线分开。明斯基《Perceptrons》指出局限，导致低谷。",
    ],
    perceptronSteps: [
      "观察线性可分与不可分的差别。",
      "理解单层感知机为何无法解决 XOR。",
      "思考需要什么改进才能处理非线性。",
    ],
    perceptronCheckpoint: {
      prompt: "感知机崩溃的核心原因是？",
      options: [
        { label: "只能处理线性可分问题", correct: true, explanation: "非线性问题如 XOR 无法解决。" },
        { label: "缺少任何训练算法", correct: false, explanation: "感知机有学习算法，但受限于线性边界。" },
        { label: "完全不可解释", correct: false, explanation: "感知机决策边界清晰可解释。" },
      ],
    },
    mlpTitle: "2. 多层感知机与 BP",
    mlpEyebrow: "用深度破线性限制",
    mlpParas: [
      "在输入与输出间加入隐藏层并使用非线性激活，可构建复杂边界解决线性不可分问题。",
      "Werbos 提出的反向传播算法在 1986 年被 Hinton 等应用于神经网络，解锁多层网络的训练。",
    ],
    bpTitle: "反向传播要点",
    bpDesc: "前向计算输出→计算误差→误差从后往前传递调整每层权重，迭代收敛。",
    mlpSteps: [
      "在 XOR 示例上想象隐藏层如何扭曲空间。",
      "抓住 BP 的两个阶段：前向、反向。",
      "认识多层网络需要非线性激活。",
    ],
    mlpCheckpoint: {
      prompt: "反向传播的作用是？",
      options: [
        { label: "根据输出误差逐层更新权重", correct: true, explanation: "梯度从后向前传播以调整参数。" },
        { label: "只在输出层训练", correct: false, explanation: "BP 训练所有层。" },
        { label: "随机重置权重", correct: false, explanation: "权重更新是有方向的。" },
      ],
    },
    networkTitle: "3. 网络结构的丰富化",
    networkCards: [
      { title: "卷积神经网络 (CNN)", desc: "局部连接+权重共享，擅长提取图像局部模式，LeNet 率先在手写识别成功。" },
      { title: "循环神经网络 (RNN)", desc: "保留历史状态处理序列，Jordan/Elman 提出，LSTM 解决长期依赖，广泛用于语言与语音。" },
    ],
    networkSteps: [
      "理解 CNN 为什么强调局部感受野与共享卷积核。",
      "体验 RNN 如何累积上下文语义。",
      "匹配各自适用的数据类型（图像 vs. 序列）。",
    ],
    networkCheckpoint: {
      prompt: "RNN 适合的任务特征是？",
      options: [
        { label: "需要建模时间/顺序依赖的序列", correct: true, explanation: "RNN 保留历史隐藏状态。" },
        { label: "完全静态、无上下文数据", correct: false, explanation: "静态数据更适合前馈/CNN。" },
        { label: "只能处理单个像素", correct: false, explanation: "像素更适合 CNN 处理局部模式。" },
      ],
    },
    deepTitle: "4. 深度神经网络的崛起",
    deepParas: [
      "2006 年后，研究者发现层数增加可逐层提取特征、理解模式，深度网络搭配海量数据/算力取得突破；注意力机制进一步加强序列建模，进入大模型时代。",
    ],
    deepSteps: [
      "思考“从低层线条到高层语义”的特征学习。",
      "注意算力与数据是深度崛起的基础。",
      "留意深度网络带来的可解释性与安全挑战。",
    ],
    deepCheckpoint: {
      prompt: "深度网络强大的原因之一是？",
      options: [
        { label: "分层提取特征，表达复杂模式", correct: true, explanation: "层级抽象提升表达力。" },
        { label: "无需数据即可训练", correct: false, explanation: "深度学习依赖大量数据。" },
        { label: "每层都是线性变换，无非线性", correct: false, explanation: "非线性激活是关键。" },
      ],
    },
    summaryTitle: "小结",
    summaryPoints: [
      "感知机开路但受限于线性可分；多层与 BP 赋予网络解决非线性问题的能力。",
      "CNN、RNN 等结构针对图像/序列等任务表现卓越。",
      "深度学习借助层级特征与注意力走向大模型时代，带来强大能力与新挑战。",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Review neural network history from perceptron to deep nets",
      "Understand principles and scenarios for key architectures",
      "Recognize deep networks’ learning power and impact",
    ],
    perceptronTitle: "1. Rise and Fall of the Perceptron",
    perceptronEyebrow: "Linear separability limit",
    perceptronParas: [
      "Rosenblatt’s 1957 perceptron learned linear classification, proving machines could gain intelligence via learning.",
      "But it only solves linearly separable problems; XOR and other nonlinear tasks fail. Minsky’s book highlighted this, triggering a winter.",
    ],
    perceptronSteps: [
      "Contrast linearly separable vs. inseparable data.",
      "See why a single perceptron fails on XOR.",
      "Consider what’s needed to handle nonlinearity.",
    ],
    perceptronCheckpoint: {
      prompt: "The core flaw that stalled perceptrons was…",
      options: [
        { label: "They only handle linearly separable problems", correct: true, explanation: "Nonlinear cases like XOR fail." },
        { label: "They had no training algorithm", correct: false, explanation: "They did but were limited by linearity." },
        { label: "They were totally uninterpretable", correct: false, explanation: "Decision boundaries were clear." },
      ],
    },
    mlpTitle: "2. MLP and Backpropagation",
    mlpEyebrow: "Adding depth to beat linear limits",
    mlpParas: [
      "Adding hidden layers with nonlinear activations builds complex boundaries for nonlinear problems.",
      "Werbos proposed backpropagation; Hinton and colleagues applied it in 1986, enabling multilayer training.",
    ],
    bpTitle: "Backprop essentials",
    bpDesc: "Forward compute → measure error → backpropagate error to update each layer, iterating to convergence.",
    mlpSteps: [
      "Visualize how hidden layers warp space for XOR.",
      "Remember BP’s two phases: forward and backward.",
      "Note the need for nonlinear activations in hidden layers.",
    ],
    mlpCheckpoint: {
      prompt: "Backpropagation’s role is to…",
      options: [
        { label: "Update each layer’s weights based on output error", correct: true, explanation: "Gradients flow backward to tune parameters." },
        { label: "Train only the output layer", correct: false, explanation: "BP trains all layers." },
        { label: "Randomly reset weights", correct: false, explanation: "Updates are directed, not random." },
      ],
    },
    networkTitle: "3. Diversifying Architectures",
    networkCards: [
      { title: "Convolutional neural network (CNN)", desc: "Local connections + shared kernels capture patterns in images; LeNet excelled in handwritten digit recognition." },
      { title: "Recurrent neural network (RNN)", desc: "Carries hidden state for sequences; Jordan/Elman started it, LSTM solved long dependencies, widely used in language/speech." },
    ],
    networkSteps: [
      "Why CNNs rely on receptive fields and shared kernels.",
      "See how RNNs accumulate context over time.",
      "Match each to suitable data (images vs. sequences).",
    ],
    networkCheckpoint: {
      prompt: "RNNs fit tasks that…",
      options: [
        { label: "Need sequence/time dependency modeling", correct: true, explanation: "Hidden states retain context." },
        { label: "Are fully static with no context", correct: false, explanation: "Static data fit feedforward/CNN better." },
        { label: "Contain only single pixels", correct: false, explanation: "CNNs handle pixel patterns better." },
      ],
    },
    deepTitle: "4. Deep Neural Networks",
    deepParas: [
      "Post-2006, more layers meant richer feature hierarchies. With data + compute, deep nets broke through; attention boosted sequence modeling, ushering in large models.",
    ],
    deepSteps: [
      "Think “from edges to semantics” in feature hierarchies.",
      "Note data and compute as foundations for depth.",
      "Mind interpretability and safety challenges of deep models.",
    ],
    deepCheckpoint: {
      prompt: "A reason deep nets are powerful is…",
      options: [
        { label: "Hierarchical features capture complex patterns", correct: true, explanation: "Layered abstraction boosts expressiveness." },
        { label: "They need no data to train", correct: false, explanation: "Deep learning is data-hungry." },
        { label: "All layers are purely linear", correct: false, explanation: "Nonlinear activations are crucial." },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryPoints: [
      "Perceptrons opened the door but were linear; depth + BP unlocked nonlinear problems.",
      "CNNs/RNNs target images/sequences respectively.",
      "Deep learning, with hierarchies and attention, powers today’s large models along with new risks.",
    ],
  },
};
