import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { AEBottleneckDemo } from "../demos/AEBottleneckDemo";
import { ArchitectureExplorerDemo } from "../demos/ArchitectureExplorerDemo";
import { CNNKernelDemo } from "../demos/CNNKernelDemo";
import { RNNMemoryDemo } from "../demos/RNNMemoryDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson2_7({ lang }: LessonProps) {
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
    { id: "mlp", label: isZh ? "1. 多层感知机" : "1. Multilayer Perceptron" },
    { id: "cnn", label: isZh ? "2. 卷积神经网络" : "2. Convolutional Neural Network" },
    { id: "rnn", label: isZh ? "3. 循环神经网络" : "3. Recurrent Neural Network" },
    { id: "ae", label: isZh ? "4. 自编码器" : "4. Autoencoder" },
    { id: "compare", label: isZh ? "结构选择" : "Choosing Structures" },
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

        <SectionBlock id="mlp" title={t.mlpTitle} eyebrow={t.mlpEyebrow}>
          <InfoCard title={t.mlpCardTitle}>
            {t.mlpParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
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

        <SectionBlock id="cnn" title={t.cnnTitle} eyebrow={t.cnnEyebrow}>
          <InfoCard title={t.cnnCardTitle}>
            {t.cnnParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <CNNKernelDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.cnnSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.cnnCheckpoint.prompt}
            options={t.cnnCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="rnn" title={t.rnnTitle} eyebrow={t.rnnEyebrow}>
          <InfoCard title={t.rnnCardTitle}>
            {t.rnnParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <RNNMemoryDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.rnnSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.rnnCheckpoint.prompt}
            options={t.rnnCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="ae" title={t.aeTitle} eyebrow={t.aeEyebrow}>
          <InfoCard title={t.aeCardTitle}>
            {t.aeParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <AEBottleneckDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.aeSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.aeCheckpoint.prompt}
            options={t.aeCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="compare" title={t.compareTitle}>
          <ArchitectureExplorerDemo lang={lang} />
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
      "Understand MLP, CNN, RNN, AE structures and their task fit.",
      "Grasp fully connected MLP traits and scenarios.",
      "Master convolution/pooling principles and why CNNs suit images.",
      "Understand RNN recurrence for sequences and memory.",
      "Recognize autoencoder compression and generation uses.",
    ],
    openingTitle: "Opening Idea",
    openingEyebrow: "Structures",
    openingText:
      "Neural networks have flexible structures. This lesson covers four representative forms—MLP, CNN, RNN, AE—and when each shines.",
    mlpTitle: "1. Multilayer Perceptron (MLP)",
    mlpEyebrow: "Fully connected",
    mlpCardTitle: "General dense network",
    mlpParas: [
      "An MLP links every neuron across adjacent layers; depth is unbounded in theory and trainable with backprop.",
      "It is general-purpose, but domain-specific structures can outperform it when data has special patterns.",
    ],
    mlpSteps: [
      "Identify input, hidden, and output layers.",
      "Apply nonlinear activation in hidden units.",
      "Train with backprop; adapt depth/width to data.",
    ],
    mlpCheckpoint: {
      prompt: "What makes an MLP “fully connected”?",
      options: [
        {
          label: "Each neuron links to all neurons in the next layer.",
          correct: true,
          explanation: "Dense connections define the MLP.",
        },
        {
          label: "Weights are all shared.",
          correct: false,
          explanation: "Sharing is characteristic of CNNs, not standard MLPs.",
        },
        {
          label: "It has no hidden layers.",
          correct: false,
          explanation: "MLPs typically include hidden layers.",
        },
      ],
    },
    cnnTitle: "2. Convolutional Neural Network (CNN)",
    cnnEyebrow: "Local + shared",
    cnnCardTitle: "Convolution and pooling",
    cnnParas: [
      "CNNs connect locally and share weights (kernels) across positions; pooling compresses and enlarges receptive fields.",
      "Locality plus invariance suits spatial data like images: features can appear anywhere yet look similar.",
    ],
    cnnSteps: [
      "Use small kernels to scan local regions.",
      "Share kernel weights across the plane.",
      "Pool to compress and expand receptive fields for higher-level features.",
    ],
    cnnCheckpoint: {
      prompt: "Why do CNNs share kernel weights?",
      options: [
        {
          label: "To capture the same feature wherever it appears, with fewer parameters.",
          correct: true,
          explanation: "Weight sharing encodes spatial invariance efficiently.",
        },
        {
          label: "To stop training.",
          correct: false,
          explanation: "Sharing reduces parameters; training still proceeds.",
        },
        {
          label: "To ignore local structure.",
          correct: false,
          explanation: "CNNs exploit local structure via kernels.",
        },
      ],
    },
    rnnTitle: "3. Recurrent Neural Network (RNN)",
    rnnEyebrow: "Temporal memory",
    rnnCardTitle: "Recurrent connections",
    rnnParas: [
      "RNN hidden states feed into the next time step, accumulating sequence semantics (memory).",
      "Order matters in language and time series; recurrence captures temporal dependencies.",
    ],
    rnnSteps: [
      "Feed each token/time step sequentially.",
      "Carry hidden state forward to encode history.",
      "Use state to predict outputs such as translation or sentiment.",
    ],
    rnnCheckpoint: {
      prompt: "What enables RNNs to model sequence order?",
      options: [
        {
          label: "Hidden states recur over time, carrying past information.",
          correct: true,
          explanation: "Recurrence gives memory of previous steps.",
        },
        {
          label: "They ignore all prior tokens.",
          correct: false,
          explanation: "They explicitly use prior tokens via hidden state.",
        },
        {
          label: "They require images as input.",
          correct: false,
          explanation: "RNNs are for sequences, not specifically images.",
        },
      ],
    },
    aeTitle: "4. Autoencoder (AE)",
    aeEyebrow: "Bottleneck learning",
    aeCardTitle: "Reconstruct input",
    aeParas: [
      "AEs compress inputs through a bottleneck then reconstruct; the bottleneck keeps only essential features.",
      "Adjusting bottleneck features enables generation and manipulation of outputs.",
    ],
    aeSteps: [
      "Encode input to a smaller latent vector.",
      "Decode to reconstruct the original.",
      "Tune bottleneck size to balance compression and fidelity.",
    ],
    aeCheckpoint: {
      prompt: "Why does an autoencoder include a bottleneck layer?",
      options: [
        {
          label: "To force the network to keep only essential features for reconstruction.",
          correct: true,
          explanation: "Compression encourages key feature learning.",
        },
        {
          label: "To make the network random.",
          correct: false,
          explanation: "The bottleneck is purposeful compression.",
        },
        {
          label: "To stop the decoder from working.",
          correct: false,
          explanation: "Decoder relies on the compressed code.",
        },
      ],
    },
    compareTitle: "Choosing Structures",
    summaryTitle: "Section Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "MLP: dense and general; other architectures specialize.",
      "CNN: local connections + weight sharing for spatial invariance.",
      "RNN: recurrent memory for sequences and order-sensitive tasks.",
      "AE: bottleneck compression for feature extraction and generation.",
      "Structured designs encode domain assumptions, often outperforming plain MLPs when data matches those assumptions.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解 MLP、CNN、RNN、AE 四种结构及适用任务。",
      "掌握全连接 MLP 的特点与场景。",
      "掌握卷积/池化原理，理解 CNN 为何适合图像。",
      "理解 RNN 递归记忆的序列建模能力。",
      "认识自编码器的压缩与生成用途。",
    ],
    openingTitle: "开篇理解",
    openingEyebrow: "结构形态",
    openingText: "神经网络结构灵活。本节介绍 MLP、CNN、RNN、AE 四类代表性网络，理解各自假设与适用场景。",
    mlpTitle: "1. 多层感知机 (MLP)",
    mlpEyebrow: "全连接",
    mlpCardTitle: "通用稠密网络",
    mlpParas: [
      "MLP 邻层全连接，理论深度不限，可用 BP 训练。",
      "通用性强，但数据有特殊结构时专用网络往往更优。",
    ],
    mlpSteps: ["明确输入、隐藏、输出层。", "隐藏层用非线性激活。", "用反向传播训练，按数据调节深宽。"],
    mlpCheckpoint: {
      prompt: "为何称 MLP 为“全连接”？",
      options: [
        {
          label: "相邻层每个神经元都与对方所有神经元相连。",
          correct: true,
          explanation: "稠密连接是 MLP 特征。",
        },
        {
          label: "所有权重都共享。",
          correct: false,
          explanation: "共享是 CNN 特点，非 MLP。",
        },
        {
          label: "没有隐藏层。",
          correct: false,
          explanation: "MLP 通常有隐藏层。",
        },
      ],
    },
    cnnTitle: "2. 卷积神经网络 (CNN)",
    cnnEyebrow: "局部 + 共享",
    cnnCardTitle: "卷积与池化",
    cnnParas: [
      "CNN 使用局部连接与权重共享（卷积核）；池化压缩并扩大感受野。",
      "局部性与不变性匹配图像特征：特征可在任意位置出现且形态相似。",
    ],
    cnnSteps: ["用小卷积核扫描局部区域。", "共享卷积核以捕捉空间不变特征。", "池化压缩特征并扩大感受野。"],
    cnnCheckpoint: {
      prompt: "为何 CNN 要共享卷积核权重？",
      options: [
        {
          label: "在任意位置检测同一特征，并减少参数量。",
          correct: true,
          explanation: "共享编码空间不变性且节省参数。",
        },
        {
          label: "为了停止训练。",
          correct: false,
          explanation: "共享是结构设定，训练仍继续。",
        },
        {
          label: "为了忽略局部结构。",
          correct: false,
          explanation: "CNN 正是利用局部结构。",
        },
      ],
    },
    rnnTitle: "3. 循环神经网络 (RNN)",
    rnnEyebrow: "时间记忆",
    rnnCardTitle: "递归连接",
    rnnParas: [
      "RNN 的隐藏状态递归传递，累积序列语义，具有记忆性。",
      "顺序对语言、时间序列很重要；递归捕捉时序依赖。",
    ],
    rnnSteps: ["按顺序输入每个时刻。", "携带隐藏状态编码历史。", "用状态预测输出，如翻译或情感判断。"],
    rnnCheckpoint: {
      prompt: "RNN 能建模序列顺序的关键是什么？",
      options: [
        {
          label: "隐藏状态随时间递归，携带过去信息。",
          correct: true,
          explanation: "递归提供记忆。",
        },
        {
          label: "忽略全部历史。",
          correct: false,
          explanation: "RNN 明确利用历史。",
        },
        {
          label: "必须用图像输入。",
          correct: false,
          explanation: "RNN 面向序列，不限定图像。",
        },
      ],
    },
    aeTitle: "4. 自编码器 (AE)",
    aeEyebrow: "瓶颈学习",
    aeCardTitle: "重构输入",
    aeParas: [
      "AE 通过瓶颈压缩后再重构输入，瓶颈保留最关键信息。",
      "调节瓶颈特征可操纵输出，具有生成潜力。",
    ],
    aeSteps: ["编码为更小的潜在向量。", "解码重构原始输入。", "调整瓶颈大小平衡压缩与保真。"],
    aeCheckpoint: {
      prompt: "为何要设置瓶颈层？",
      options: [
        {
          label: "迫使网络仅保留重构所需的关键信息。",
          correct: true,
          explanation: "压缩促使学习关键特征。",
        },
        {
          label: "为了让网络随机输出。",
          correct: false,
          explanation: "瓶颈用于有目的的压缩。",
        },
        {
          label: "阻止解码器工作。",
          correct: false,
          explanation: "解码依赖瓶颈表示。",
        },
      ],
    },
    compareTitle: "结构选择",
    summaryTitle: "本节小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "MLP：稠密通用；特化结构在特定数据上更优。",
      "CNN：局部连接 + 权重共享，适合具空间不变性的图像等数据。",
      "RNN：递归记忆，擅长序列和顺序敏感任务。",
      "AE：瓶颈压缩提取关键特征并可生成。",
      "结构化设计嵌入领域假设，数据满足假设时往往优于纯 MLP。",
    ],
  },
};
