import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { AEBottleneckDemo } from "../demos/AEBottleneckDemo";
import { BackpropFlowDemo } from "../demos/BackpropFlowDemo";
import { MPNeuronDemo } from "../demos/MPNeuronDemo";
import { SynapticPruningDemo } from "../demos/SynapticPruningDemo";
import { XORLimitDemo } from "../demos/XORLimitDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson2_6({ lang }: LessonProps) {
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
    { id: "brain", label: isZh ? "1. 脑中的神经网络" : "1. Neural Networks in the Brain" },
    { id: "mp", label: isZh ? "2. M-P 神经元" : "2. M-P Neuron" },
    { id: "perceptron", label: isZh ? "3. 感知机与线性不可分" : "3. Perceptron & Linear Inseparability" },
    { id: "mlp", label: isZh ? "4. 多层感知机与反向传播" : "4. MLP & Backpropagation" },
    { id: "history", label: isZh ? "5. 发展历程" : "5. Development Timeline" },
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

        <SectionBlock id="brain" title={t.brainTitle} eyebrow={t.brainEyebrow}>
          <InfoCard title={t.brainCardTitle}>
            {t.brainParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <SynapticPruningDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.brainSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.brainCheckpoint.prompt}
            options={t.brainCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="mp" title={t.mpTitle} eyebrow={t.mpEyebrow}>
          <InfoCard title={t.mpCardTitle}>
            {t.mpParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <MPNeuronDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.mpSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.mpCheckpoint.prompt}
            options={t.mpCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="perceptron" title={t.percTitle} eyebrow={t.percEyebrow}>
          <InfoCard title={t.percCardTitle}>
            {t.percParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <XORLimitDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.percSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.percCheckpoint.prompt}
            options={t.percCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="mlp" title={t.mlpTitle} eyebrow={t.mlpEyebrow}>
          <InfoCard title={t.mlpCardTitle}>
            {t.mlpParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <BackpropFlowDemo lang={lang} />
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

        <SectionBlock id="history" title={t.historyTitle} eyebrow={t.historyEyebrow}>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
            {t.historyPoints.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
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
      "Understand neurons, synapses, pruning, and how neural nets imitate the brain.",
      "Master the McCulloch-Pitts neuron math and its role/limits.",
      "Recognize the Perceptron, linear inseparability, and historical impact.",
      "Know multilayer perceptron structure, hidden layers, and backpropagation.",
      "Trace neural network milestones leading to modern deep learning.",
    ],
    openingTitle: "Opening Idea",
    openingEyebrow: "Introduction",
    openingText:
      "Connectionism rose with data and compute. Artificial neural networks model the brain by connecting simple units; this section covers their ideas and history before structural details in the next lesson.",
    brainTitle: "1. Neural Networks in the Brain",
    brainEyebrow: "Biology inspiration",
    brainCardTitle: "Neurons, synapses, pruning",
    brainParas: [
      "The brain has tens of billions of similar neurons; learning comes from adjusting synaptic strengths.",
      "Infants start with dense connections; learning strengthens frequently used links and prunes unused ones, creating efficient pathways.",
    ],
    brainSteps: [
      "Contrast infant dense connections with adult efficient ones.",
      "Relate pruning to efficiency gains.",
      "Map the idea to ANN weight updates.",
    ],
    brainCheckpoint: {
      prompt: "What does neural pruning achieve?",
      options: [
        {
          label: "Removes unused connections to improve efficiency.",
          correct: true,
          explanation: "Pruning keeps frequently used pathways, boosting efficiency.",
        },
        {
          label: "Adds more random connections.",
          correct: false,
          explanation: "Pruning reduces, not increases, redundant links.",
        },
        {
          label: "Stops learning completely.",
          correct: false,
          explanation: "Pruning supports more effective learning.",
        },
      ],
    },
    mpTitle: "2. The M-P Neuron Model",
    mpEyebrow: "Threshold logic",
    mpCardTitle: "Weighted sum + activation",
    mpParas: [
      "McCulloch and Pitts (1943) proposed a neuron that sums weighted binary inputs and compares to a threshold to output 0/1.",
      "Networks of M-P neurons can compute logical calculus, seeding ANN theory, but the model itself cannot learn.",
    ],
    mpSteps: [
      "Adjust weights and threshold to realize simple logic (AND/OR).",
      "Note the activation compares weighted sum to a threshold.",
      "Observe limits: no built-in learning in the original model.",
    ],
    mpCheckpoint: {
      prompt: "What key element lets the M-P neuron fire?",
      options: [
        {
          label: "Weighted sum exceeds a threshold.",
          correct: true,
          explanation: "Activation is triggered when sum ≥ threshold.",
        },
        {
          label: "Random noise injection.",
          correct: false,
          explanation: "Noise is not the firing rule.",
        },
        {
          label: "External database lookup.",
          correct: false,
          explanation: "The neuron only uses inputs and weights.",
        },
      ],
    },
    percTitle: "3. Perceptron and Linear Inseparability",
    percEyebrow: "Learning single-layer nets",
    percCardTitle: "Rosenblatt’s perceptron",
    percParas: [
      "Rosenblatt (1958) added learnable weights and an algorithm to fit labels; hardware Mark I recognized letters.",
      "Minsky and Papert showed single-layer perceptrons cannot solve linearly inseparable tasks such as XOR.",
    ],
    percSteps: [
      "Try separating XOR points with one line.",
      "See misclassification persists—needs more layers or features.",
      "Connect to why research moved to multi-layer models.",
    ],
    percCheckpoint: {
      prompt: "Why did XOR challenge perceptrons?",
      options: [
        {
          label: "XOR is linearly inseparable; one-layer perceptrons can’t split it with a single line.",
          correct: true,
          explanation: "Single-layer models fail on non-linear boundaries.",
        },
        {
          label: "XOR has no labels.",
          correct: false,
          explanation: "Labels exist; the issue is separability.",
        },
        {
          label: "Perceptrons cannot handle any binary inputs.",
          correct: false,
          explanation: "They handle many binary tasks, but not XOR.",
        },
      ],
    },
    mlpTitle: "4. Multilayer Perceptron & Backpropagation",
    mlpEyebrow: "Hidden layers + BP",
    mlpCardTitle: "Expressiveness and training",
    mlpParas: [
      "Adding hidden layers (MLP) handles complex tasks; weights connect layer to layer with nonlinear activations.",
      "Rumelhart, Hinton, and Williams (1986) popularized backpropagation to train deep layers efficiently by reusing gradients backward.",
    ],
    mlpSteps: [
      "Stack layers to increase expressive power.",
      "Compute loss and gradients layer by layer.",
      "Update from output back to input using shared gradients.",
    ],
    mlpCheckpoint: {
      prompt: "What makes backpropagation crucial for MLPs?",
      options: [
        {
          label: "It efficiently passes gradients backward to train multiple layers.",
          correct: true,
          explanation: "BP reuses gradients and enables deep training.",
        },
        {
          label: "It removes the need for data.",
          correct: false,
          explanation: "Data is still required.",
        },
        {
          label: "It forces all weights to zero.",
          correct: false,
          explanation: "Weights are optimized, not nulled.",
        },
      ],
    },
    historyTitle: "5. Flourishing Development",
    historyEyebrow: "Milestones",
    historyPoints: [
      "1943: M-P neuron proposes logical computation via thresholds.",
      "1958: Rosenblatt’s perceptron introduces learnable weights and hardware demo.",
      "1969: Minsky & Papert show linear inseparability limits (e.g., XOR).",
      "1986: Backpropagation enables training deep MLPs.",
      "1990s–2000s: CNNs, RNNs emerge; 2006+ deep learning and big data drive modern AI.",
    ],
    summaryTitle: "Section Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "Biological neurons inspire ANNs; learning adjusts connection strengths and prunes redundancy.",
      "The M-P neuron formalized weighted-sum + threshold; perceptrons added learning but fail on non-linear separability.",
      "MLPs with hidden layers and backpropagation unlocked complex learning, setting the stage for deep neural networks.",
      "Modern deep nets became core AI tools across vision, speech, language, and science.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解人工神经网络的基本概念，掌握神经元、突触、修剪等机制。",
      "掌握 M-P 神经元的数学原理及其早期贡献与局限。",
      "认识感知机模型、线性不可分问题及其历史影响。",
      "掌握多层感知机结构、隐藏层作用、反向传播训练思想。",
      "梳理神经网络发展历程，认识深度神经网络在现代 AI 中的重要地位。",
    ],
    openingTitle: "开篇理解",
    openingEyebrow: "引子",
    openingText: "互联网与数据崛起让联结主义大放异彩。人工神经网络模拟大脑神经系统，通过连接简单单元实现复杂功能，本节聚焦其核心思想与发展史。",
    brainTitle: "1. 脑中的神经网络",
    brainEyebrow: "生物启发",
    brainCardTitle: "神经元、突触、修剪",
    brainParas: [
      "大脑含数百亿神经元，学习依赖突触强度调整。",
      "婴儿连接稠密，学习中常用连接被强化，少用连接被修剪，留下高效通路。",
    ],
    brainSteps: ["比较婴儿稠密连接与成人高效连接。", "理解修剪如何提升效率。", "对应到 ANN 的权重更新与正则。"],
    brainCheckpoint: {
      prompt: "突触修剪的作用是什么？",
      options: [
        {
          label: "删除无用连接以提升效率。",
          correct: true,
          explanation: "修剪保留常用通路，提升处理效率。",
        },
        {
          label: "随机增加连接。",
          correct: false,
          explanation: "修剪减少冗余而非增加。",
        },
        {
          label: "让大脑停止学习。",
          correct: false,
          explanation: "修剪支持更有效的学习。",
        },
      ],
    },
    mpTitle: "2. M-P 神经元模型",
    mpEyebrow: "阈值逻辑",
    mpCardTitle: "加权求和 + 激活",
    mpParas: [
      "McCulloch 与 Pitts（1943）提出神经元：二值输入加权求和与阈值比较得到 0/1 输出。",
      "由此可实现逻辑推演，奠定 ANN 理论，但模型本身不会学习。",
    ],
    mpSteps: ["调节权重与阈值实现 AND/OR。", "观察加权和与阈值比较。", "认识原始模型缺少学习能力。"],
    mpCheckpoint: {
      prompt: "M-P 神经元触发输出的关键条件是？",
      options: [
        {
          label: "加权和超过阈值。",
          correct: true,
          explanation: "满足 sum≥阈值即输出 1。",
        },
        {
          label: "随机噪声触发。",
          correct: false,
          explanation: "激活条件与噪声无关。",
        },
        {
          label: "查数据库决定输出。",
          correct: false,
          explanation: "只依赖输入与权重。",
        },
      ],
    },
    percTitle: "3. 感知机与线性不可分",
    percEyebrow: "单层学习",
    percCardTitle: "Rosenblatt 感知机",
    percParas: [
      "Rosenblatt（1958）引入可学习权重与训练算法，硬件 Mark I 识别字符。",
      "Minsky 与 Papert 证明单层感知机无法解决 XOR 等线性不可分问题，引发反思。",
    ],
    percSteps: ["尝试用一条直线分开 XOR 点。", "看到误分仍存在，需要多层或非线性。", "理解这推动多层模型发展。"],
    percCheckpoint: {
      prompt: "为何 XOR 让感知机受限？",
      options: [
        {
          label: "XOR 线性不可分，单层感知机无法用一条直线分开。",
          correct: true,
          explanation: "缺少非线性或多层结构。",
        },
        {
          label: "XOR 没有标签。",
          correct: false,
          explanation: "有标签，问题在分隔面。",
        },
        {
          label: "感知机无法处理任何二值输入。",
          correct: false,
          explanation: "能处理部分，可分问题，但无法解决 XOR。",
        },
      ],
    },
    mlpTitle: "4. 多层感知机与反向传播",
    mlpEyebrow: "隐藏层 + BP",
    mlpCardTitle: "表达力与训练",
    mlpParas: [
      "增加隐藏层（MLP）可解决更复杂任务；层间权重配合非线性激活。",
      "Rumelhart、Hinton、Williams（1986）推广反向传播，高效逐层回传梯度训练深层网络。",
    ],
    mlpSteps: ["堆叠多层提升表达能力。", "计算损失与梯度。", "从输出向前复用梯度更新参数。"],
    mlpCheckpoint: {
      prompt: "反向传播对 MLP 的关键意义是？",
      options: [
        {
          label: "高效地把梯度逐层回传，训练多层网络。",
          correct: true,
          explanation: "BP 复用梯度，支持深层学习。",
        },
        {
          label: "不再需要数据。",
          correct: false,
          explanation: "训练仍需数据。",
        },
        {
          label: "强制所有权重为零。",
          correct: false,
          explanation: "BP 优化权重而非清零。",
        },
      ],
    },
    historyTitle: "5. 发展历程",
    historyEyebrow: "里程碑",
    historyPoints: [
      "1943：M-P 神经元提出阈值逻辑。",
      "1958：Rosenblatt 感知机引入可学习权重与硬件实现。",
      "1969：Minsky & Papert 指出线性不可分局限（如 XOR）。",
      "1986：反向传播让多层网络可训练。",
      "1990s–2000s：CNN、RNN 等涌现；2006+ 深度学习崛起，神经网络成为 AI 核心。",
    ],
    summaryTitle: "本节小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "生物神经启发 ANN，学习通过调整连接与修剪冗余实现。",
      "M-P 神经元形式化阈值逻辑；感知机可学习但难解非线性可分问题。",
      "多层感知机与反向传播打开复杂学习大门，为深度神经网络奠基。",
      "现代深度网络成为视觉、语音、语言及科学领域的核心工具。",
    ],
  },
};
