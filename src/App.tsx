import { useState } from "react";
import { Checkpoint } from "./components/Checkpoint";
import { GuidedSteps } from "./components/GuidedSteps";
import { InfoCard } from "./components/InfoCard";
import { SectionBlock } from "./components/SectionBlock";
import { DepthExpressivenessDemo } from "./demos/DepthExpressivenessDemo";
import { FeatureHierarchyDemo } from "./demos/FeatureHierarchyDemo";
import { LossLandscapeDemo } from "./demos/LossLandscapeDemo";
import { PretrainingFlowDemo } from "./demos/PretrainingFlowDemo";
import { StepApproxDemo } from "./demos/StepApproxDemo";
import { SuccessFactorsDemo } from "./demos/SuccessFactorsDemo";

function App() {
  const [lang, setLang] = useState<"en" | "zh">("en");
  const isZh = lang === "zh";
  const ui = {
    reset: isZh ? "重置" : "Reset",
    checkpointTag: isZh ? "检查点" : "Checkpoint",
    correctLabel: isZh ? "正确" : "Correct",
    incorrectLabel: isZh ? "再试一次" : "Check again",
    guidedTitle: isZh ? "引导步骤" : "Guided Steps",
    toggleLabel: isZh ? "Switch to English" : "切换到中文",
  };

  const content = {
    en: {
      sectionLabel: "Section 2.8",
      title: "Deep Learning Basics",
      intro:
        "Deep learning builds multi-layer neural networks that can simulate the brain's hierarchical processing. This guided lesson mirrors the book's flow while adding small, browser-only demos to make each idea tangible.",
      chips: ["DNNs", "Training difficulty", "Pre-training", "Hierarchical features"],
      learningObjectivesTitle: "Learning Objectives",
      learningObjectives: [
        "Understand the basic concepts of deep learning, the characteristics of deep neural networks, and how they differ from traditional machine learning.",
        "Recognize why training deep networks is difficult and the role and limits of backpropagation.",
        "Master Hinton's pre-training method and why it solved deep network training challenges.",
        "Understand hierarchical feature learning, abstractness, and conceptualization in higher layers.",
        "Recognize why deep learning flourished—big data, computing resources, and open-source sharing.",
      ],
      openingTitle: "Opening Idea",
      openingEyebrow: "Introduction",
      openingText:
        "Deep learning relies on multi-layer neural networks. Adding more layers improves expressive power for complex classification or fitting problems and imitates the brain's hierarchical processing. This shift turned neural networks from simple function-fitting tools into information processing systems akin to the human brain.",
      dnnTitle: "1. Deep Neural Networks",
      dnnEyebrow: "Core concept",
      basicConceptsTitle: "1) Basic Concepts",
      basicConceptsParas: [
        "A neural network with more than two hidden layers is called a deep neural network (DNN). Given the same total number of neurons, making a network deeper instead of simply wider can yield stronger expressive power.",
        "Multi-layer models are often referred to as deep learning. Today deep neural networks are the most widely used deep learning model, so deep learning can be seen as learning based on deep neural networks.",
      ],
      depthSteps: [
        "Set a depth of at least 3 hidden layers to simulate a DNN.",
        "Compare what happens when width grows but depth stays shallow.",
        "Watch the expressive score and hierarchy depth respond.",
      ],
      depthCheckpoint: {
        prompt: "Why does adding depth (not just width) strengthen a DNN?",
        options: [
          {
            label: "Deeper stacks enable multi-stage feature composition without exploding parameters.",
            correct: true,
            explanation:
              "Depth reuses neurons across layers, enabling hierarchical abstractions at similar budgets.",
          },
          {
            label: "Depth only improves because gradients are larger.",
            correct: false,
            explanation: "Gradient scale alone does not explain expressive power.",
          },
          {
            label: "Width always beats depth when neurons are fixed.",
            correct: false,
            explanation: "The text notes the opposite: depth wins under equal neuron budgets.",
          },
        ],
      },
      difficultiesTitle: "2) Difficulties in Training Deep Neural Networks",
      difficultiesText:
        "Despite stronger expressive power, deep networks were once neglected. The universal approximation theorem suggested a single hidden layer could approximate any continuous function given enough neurons, and deeper networks were hard to train in practice. Backpropagation is a gradient descent method—on complex loss surfaces with many local minima or saddle plateaus, training can stall or fall into poor valleys.",
      diffSteps: [
        "Start from a random point on the loss curve.",
        "Take gradient steps and observe how easily you get stuck.",
        "Adjust the learning rate to see overshooting or plateaus.",
      ],
      diffCheckpoint: {
        prompt: "What makes training deep networks difficult in practice?",
        options: [
          {
            label: "Loss surfaces with many valleys and saddle-like plateaus trap gradient descent.",
            correct: true,
            explanation:
              "The VGG-like surface example shows numerous local minima and saddles that slow training.",
          },
          {
            label: "Backpropagation cannot run on GPUs.",
            correct: false,
            explanation: "Hardware support is not the core difficulty described here.",
          },
          {
            label: "Deep networks violate the universal approximation theorem.",
            correct: false,
            explanation: "The theorem applies; the challenge is optimization, not expressiveness.",
          },
        ],
      },
      universalTitle: "Extended Reading: Universal Approximation Theorem",
      universalKeyIdea:
        "Even a simple neural network with a single hidden layer can approximate any continuous function if it has enough hidden nodes. The classic proof uses step activation functions to form rectangular window functions that sum to match the target curve.",
      universalSteps: [
        "Pick the target shape (bump or wave).",
        "Increase hidden node pairs to add more rectangular windows.",
        "Watch the mean error shrink, showing approximation improves with more pairs.",
      ],
      universalCheckpoint: {
        prompt: "How do step activations help approximate arbitrary continuous functions?",
        options: [
          {
            label: "Pairs of step units form small rectangular windows that sum into the target curve.",
            correct: true,
            explanation:
              "Each window covers a slice of the domain; enough windows approximate the whole function.",
          },
          {
            label: "Only sigmoid activations can approximate functions.",
            correct: false,
            explanation: "The text highlights step functions as a valid construction.",
          },
          {
            label: "Approximation requires infinitely many layers.",
            correct: false,
            explanation: "A single hidden layer suffices if it has enough nodes.",
          },
        ],
      },
      pretrainTitle: "3) Hinton's Pre-training Method",
      pretrainText:
        "Geoffrey Hinton proposed a layer-wise pre-training method in 2006. Train a shallow Restricted Boltzmann Machine (RBM), freeze it, use its output as input to the next RBM, and stack the models. After pre-training, connect them, invert to form a decoder, and fine-tune with a small amount of data to get a high-performance deep autoencoder.",
      rbmInfoTitle: "Extended Reading: Restricted Boltzmann Machine",
      rbmInfoText:
        "An RBM is a generative stochastic neural network with a visible layer and a hidden layer. Connections exist only between layers, not within a layer. Training adjusts weights so the visible layer's distribution matches the training data. After training, the hidden layer vector h captures the feature representation of input x.",
      pretrainSteps: [
        "Walk through RBM1 → RBM2 → RBM3 stacking.",
        "Note that each layer learns from the frozen previous layer outputs.",
        "Unfreeze all layers and fine-tune for reconstruction.",
      ],
      pretrainCheckpoint: {
        prompt: "Why did pre-training unlock deeper models before modern data and compute?",
        options: [
          {
            label: "Layer-wise RBM training gave good initializations, avoiding poor local minima.",
            correct: true,
            explanation:
              "Pre-training moved parameters near useful basins so fine-tuning needed less data.",
          },
          {
            label: "It removed the need for backpropagation entirely.",
            correct: false,
            explanation: "Fine-tuning still used backpropagation.",
          },
          {
            label: "It increased dataset size automatically.",
            correct: false,
            explanation: "Pre-training reorganized training, not data volume.",
          },
        ],
      },
      flourishTitle: "4) The Flourishing Development of Deep Learning",
      flourishText:
        "After pre-training sparked interest, Hinton's team won ImageNet 2012 with the 8-layer AlexNet, showing that model depth strongly boosts performance. Geoffrey Hinton, Yoshua Bengio, and Yann LeCun led the field and received the 2018 Turing Award for deep learning.",
      flourishCheckpoint: {
        prompt: "What did AlexNet demonstrate in 2012?",
        options: [
          {
            label: "Depth of convolutional networks is crucial for performance gains on vision tasks.",
            correct: true,
            explanation: "AlexNet's 8 layers delivered a decisive ImageNet victory.",
          },
          {
            label: "Shallow networks are always better than deep ones.",
            correct: false,
            explanation: "AlexNet showed the opposite.",
          },
          {
            label: "Pre-training removed the need for labels in ImageNet.",
            correct: false,
            explanation: "AlexNet trained in a supervised way.",
          },
        ],
      },
      hierarchyTitle: "2. Hierarchical Feature Learning",
      hierarchyEyebrow: "Feature abstraction",
      highLevelTitle: "1) What Are High-Level Features?",
      highLevelText:
        "Deep networks progressively extract abstract features. Lower layers capture simple lines; higher layers capture global patterns. High-level or abstract features have clear, conceptual meaning—like “Zhang San's face” or “a Labrador's head” regardless of pose or accessories.",
      faceExampleTitle: "2) Example: Convolutional Network for Face Recognition",
      faceExampleText:
        "In lower layers, neurons activate on simple lines; in higher layers, larger-scale facial patterns activate the neurons. Later-layer features are more advanced and strongly tied to the recognition task.",
      featureSteps: [
        "Move through layers to see receptive fields grow.",
        "Observe how features change from edges to semantic parts.",
        "Connect this to task relevance—later layers focus on what matters for recognition.",
      ],
      featureCheckpoint: {
        prompt: "Why do later convolutional layers become more task-related and abstract?",
        options: [
          {
            label:
              "Receptive fields expand, letting later layers combine simpler patterns into clear concepts needed for the task.",
            correct: true,
            explanation:
              "Larger context plus task-driven training yields semantic, task-relevant features.",
          },
          {
            label: "Because early layers are randomly frozen.",
            correct: false,
            explanation: "Early layers are trained; abstraction comes from depth and objectives.",
          },
          {
            label: "Because higher layers remove non-linearities.",
            correct: false,
            explanation: "Non-linearities remain; abstraction comes from composition and training.",
          },
        ],
      },
      sharedTitle: "3) Shared Bottom Layers, Varied Top Layers",
      sharedText:
        "Different convolutional networks (faces, cars, elephants, chairs) share similar low-level features because all images are built from simple lines. Higher layers diverge as features combine into object-specific contours.",
      brainTitle: "4) Comparison with Human Information Processing",
      brainText:
        "Deep network hierarchies resemble human visual processing. Early visual areas align with lower convolutional layers, while later areas align with higher layers, supporting the analogy to human perception.",
      successTitle: "Success Factors: Data, Compute, Open Source",
      successText:
        "Today, pre-training is no longer essential when data is abundant and computation is powerful. The rise of deep learning rests on algorithmic advances plus big data, stronger computing resources, and industry-wide open-source sharing of code, data, papers, and models.",
      summaryTitle: "Section Summary",
      summaryEyebrow: "Key takeaways",
      summaryPoints: [
        "Deep neural networks (more than two hidden layers) outperform equally sized shallow networks by composing features hierarchically.",
        "Training can be difficult because backpropagation follows gradients on rugged loss surfaces with many valleys and saddles.",
        "Hinton's RBM-based pre-training provided effective initialization, opening the door to deeper models before today's data and compute scale.",
        "Hierarchical feature learning yields abstract, task-relevant representations and mirrors aspects of human visual processing.",
        "Modern success depends on algorithms plus data scale, computational power, and open-source collaboration.",
      ],
    },
    zh: {
      sectionLabel: "第 2.8 节",
      title: "深度学习基础",
      intro:
        "深度学习以多层神经网络为基础，可以模拟大脑的分层信息处理。本引导式页面遵循书中的顺序，加入浏览器端小实验，帮助把每个概念变得可操作。",
      chips: ["深层神经网络", "训练困难", "预训练", "分层特征"],
      learningObjectivesTitle: "学习目标",
      learningObjectives: [
        "理解深度学习的基本概念，厘清深层神经网络的特点及其与传统机器学习的差异。",
        "认识训练深层网络的难点，理解反向传播的作用与局限。",
        "掌握 Hinton 提出的预训练方法，理解其如何解决深层网络的训练难题。",
        "理解深度学习的分层特征学习过程，认识高层特征的抽象性与概念化。",
        "认识深度学习成功的因素：大数据、计算资源与开源共享的作用。",
      ],
      openingTitle: "开篇理解",
      openingEyebrow: "引言",
      openingText:
        "深度学习依托多层神经网络。增加层数不仅能提升复杂分类或拟合任务的表达能力，还能模拟大脑的层级处理。这个转变让神经网络从“拟合函数”变成类似大脑的信息处理系统。",
      dnnTitle: "1. 深层神经网络",
      dnnEyebrow: "核心概念",
      basicConceptsTitle: "1) 基本概念",
      basicConceptsParas: [
        "包含两层以上隐藏层的神经网络称为深层神经网络（DNN）。在总神经元数量相同的情况下，增加深度而非仅增加宽度通常能获得更强的表达能力。",
        "多层结构的学习常被统称为深度学习。目前深层神经网络是最主流的深度学习模型，因此可以把深度学习视作基于深层神经网络的学习过程。",
      ],
      depthSteps: [
        "把隐藏层数设置到 3 层或以上，模拟一个 DNN。",
        "对比只加宽度但保持浅层时的变化。",
        "观察表达分和层次深度指标的响应。",
      ],
      depthCheckpoint: {
        prompt: "为何增加深度（而非仅增加宽度）能强化 DNN？",
        options: [
          {
            label: "更深的堆叠可多阶段组合特征而不使参数爆炸。",
            correct: true,
            explanation: "深度跨层复用神经元，让层级抽象在相似参数预算下成为可能。",
          },
          {
            label: "因为梯度更大所以才变好。",
            correct: false,
            explanation: "梯度尺度并不能解释表达能力的提升。",
          },
          {
            label: "在固定神经元数时，宽度总是优于深度。",
            correct: false,
            explanation: "文本指出相同神经元预算下深度反而占优。",
          },
        ],
      },
      difficultiesTitle: "2) 深层神经网络的训练困难",
      difficultiesText:
        "尽管表达力更强，深层网络曾长期被忽视。普适逼近定理表明单隐层也能逼近任意连续函数，而深层网络在实践中难以训练。反向传播本质是梯度下降：当损失面有大量局部极小值或鞍形平台时，训练容易停滞或陷入次优谷底。",
      diffSteps: ["从损失曲线的随机位置开始。", "执行梯度步，体会卡住的容易程度。", "调整学习率，观察震荡或平台停滞。"],
      diffCheckpoint: {
        prompt: "是什么让深层网络的训练在实践中变得困难？",
        options: [
          {
            label: "损失面充满山谷和鞍形平台，会困住梯度下降。",
            correct: true,
            explanation: "如 VGG 类表面存在大量局部极小值和鞍点，导致训练缓慢或停滞。",
          },
          {
            label: "反向传播无法在 GPU 上运行。",
            correct: false,
            explanation: "硬件不是这里的核心难点。",
          },
          {
            label: "深层网络违背普适逼近定理。",
            correct: false,
            explanation: "定理仍成立，难点在优化而非表达性。",
          },
        ],
      },
      universalTitle: "延伸阅读：普适逼近定理",
      universalKeyIdea:
        "即便只有单隐层的简单神经网络，只要隐藏节点够多也能逼近任何连续函数。经典证明用阶跃激活组合成矩形窗函数，再加和出目标曲线。",
      universalSteps: ["选择目标形状（矩形脉冲或波形）。", "增加隐藏节点对，加入更多矩形窗口。", "观察平均误差下降，说明更多窗口提升逼近能力。"],
      universalCheckpoint: {
        prompt: "阶跃激活如何帮助逼近任意连续函数？",
        options: [
          {
            label: "成对的阶跃单元构成小矩形窗口，叠加后逼近目标曲线。",
            correct: true,
            explanation: "每个窗口覆盖一段区间，足够多的窗口即可逼近整体函数。",
          },
          {
            label: "只有 Sigmoid 激活才可逼近函数。",
            correct: false,
            explanation: "文本强调阶跃函数也是可行构造。",
          },
          {
            label: "必须用无限多层才能逼近。",
            correct: false,
            explanation: "单隐层若节点足够多即可逼近。",
          },
        ],
      },
      pretrainTitle: "3) Hinton 的预训练方法",
      pretrainText:
        "2006 年 Geoffrey Hinton 提出逐层预训练：先训练一个浅层受限玻尔兹曼机（RBM）并冻结，再把输出作为下一层 RBM 的输入堆叠起来。预训练完成后将各层串联并反向镜像为解码器，用少量数据微调即可得到性能优良的深度自编码器。",
      rbmInfoTitle: "延伸阅读：受限玻尔兹曼机",
      rbmInfoText:
        "RBM 是生成式随机神经网络，由可见层与隐藏层组成，层内无连接。训练目标是让可见层的概率分布匹配训练数据分布。训练后，隐藏向量 h 表征输入 x 的特征。",
      pretrainSteps: ["走一遍 RBM1 → RBM2 → RBM3 的堆叠。", "注意每层都从被冻结的前一层输出学习。", "解冻全部层，为重构目标做端到端微调。"],
      pretrainCheckpoint: {
        prompt: "为什么预训练在数据和算力有限时能解锁更深模型？",
        options: [
          {
            label: "逐层 RBM 训练提供良好初始化，避免落入差的局部极小值。",
            correct: true,
            explanation: "预训练把参数推到有用的盆地附近，微调所需数据更少。",
          },
          {
            label: "它完全不用反向传播。",
            correct: false,
            explanation: "微调仍依赖反向传播。",
          },
          {
            label: "它会自动放大数据集规模。",
            correct: false,
            explanation: "预训练改变的是训练方式，而非数据量。",
          },
        ],
      },
      flourishTitle: "4) 深度学习的蓬勃发展",
      flourishText:
        "预训练激发兴趣后，Hinton 团队的 8 层 AlexNet 在 2012 年 ImageNet 竞赛中获胜，证明模型深度对性能的关键作用。Geoffrey Hinton、Yoshua Bengio、Yann LeCun 领衔领域，并在 2018 年共同获得图灵奖。",
      flourishCheckpoint: {
        prompt: "2012 年的 AlexNet 证明了什么？",
        options: [
          {
            label: "卷积网络的深度对视觉任务性能提升至关重要。",
            correct: true,
            explanation: "8 层 AlexNet 带来了决定性的 ImageNet 胜利。",
          },
          {
            label: "浅层网络总比深层网络好。",
            correct: false,
            explanation: "AlexNet 恰好展示了相反结论。",
          },
          {
            label: "预训练让 ImageNet 不需要标签。",
            correct: false,
            explanation: "AlexNet 是监督训练的。",
          },
        ],
      },
      hierarchyTitle: "2. 分层特征学习",
      hierarchyEyebrow: "特征抽象",
      highLevelTitle: "1) 什么是高层特征？",
      highLevelText:
        "深度网络逐层提取抽象特征。低层学习简单线条，高层学习全局模式。高层/抽象特征具有清晰的概念含义，如“张三的脸”或“一只拉布拉多的头”，无论姿态或佩戴都指向同一概念。",
      faceExampleTitle: "2) 卷积人脸识别网络示例",
      faceExampleText:
        "在低层，神经元被简单线条激活；在高层，较大尺度的面部模式触发神经元。越靠后的特征越高级，也与识别任务越相关。",
      featureSteps: [
        "移动层级滑杆，查看感受野如何变大。",
        "观察特征从边缘变为语义局部的过程。",
        "联系任务相关性——后期层更关注识别所需信息。",
      ],
      featureCheckpoint: {
        prompt: "为什么越后面的卷积层越抽象、越与任务相关？",
        options: [
          {
            label: "感受野扩大，让后期层能组合简单模式形成清晰概念。",
            correct: true,
            explanation: "更大的上下文加上任务驱动训练，形成语义且任务相关的特征。",
          },
          {
            label: "因为前几层被随机冻结。",
            correct: false,
            explanation: "前层参与训练；抽象来自深度与目标驱动。",
          },
          {
            label: "因为高层移除了非线性。",
            correct: false,
            explanation: "非线性仍在；抽象源于组合与训练。",
          },
        ],
      },
      sharedTitle: "3) 底层共享、顶层分化",
      sharedText:
        "不同任务的卷积网络（人脸、汽车、大象、椅子）在底层学到的低级特征相似，因为所有图像都由简单线条构成；在高层特征逐渐分化，组合出各自的轮廓与语义。",
      brainTitle: "4) 与人类信息处理的类比",
      brainText:
        "深度网络的层级处理与人脑视觉加工相似。早期视觉区对应较低卷积层，后期视觉区对应更高层，为深度学习的有效性提供另一侧证。",
      successTitle: "成功因素：数据、算力与开源",
      successText:
        "如今在数据充足、算力强劲时，预训练不再是必需。深度学习的崛起依赖算法、海量数据、更强计算资源，以及代码、数据、论文、模型的开放共享。",
      summaryTitle: "本节小结",
      summaryEyebrow: "关键要点",
      summaryPoints: [
        "深层神经网络（多于两层隐藏层）在同规模下优于浅层网络，因为能分层组合特征。",
        "训练困难源于反向传播要在崎岖损失面上沿梯度下降，易陷入山谷与鞍点。",
        "基于 RBM 的预训练提供有效初始化，在数据和算力不足时打开了更深模型的可能性。",
        "分层特征学习产生抽象、任务相关的表征，并与人类视觉处理有相似之处。",
        "当今成功依赖算法叠加数据规模、计算能力与开源协作。",
      ],
    },
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-5xl px-4 py-10 lg:px-6">
        <header className="mb-8 rounded-3xl bg-white/90 p-6 shadow-soft ring-1 ring-slate-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-brand-600">{t.sectionLabel}</p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-900">{t.title}</h1>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-700">{t.intro}</p>
            </div>
            <button
              className="h-10 rounded-full border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900"
              type="button"
              onClick={() => setLang(isZh ? "en" : "zh")}
              aria-label={ui.toggleLabel}
            >
              {lang === "en" ? "English / 中文" : "中文 / English"}
            </button>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-600">
            {t.chips.map((chip) => (
              <span key={chip} className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-700">
                {chip}
              </span>
            ))}
          </div>
        </header>

        <main className="space-y-6">
          <SectionBlock title={t.learningObjectivesTitle}>
            <ul className="grid gap-2 text-sm leading-relaxed text-slate-700 md:grid-cols-2">
              {t.learningObjectives.map((obj) => (
                <li key={obj}>{obj}</li>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock title={t.openingTitle} eyebrow={t.openingEyebrow}>
            <p className="text-sm leading-relaxed text-slate-700">{t.openingText}</p>
          </SectionBlock>

          <SectionBlock id="dnn" title={t.dnnTitle} eyebrow={t.dnnEyebrow}>
            <InfoCard title={t.basicConceptsTitle}>
              {t.basicConceptsParas.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </InfoCard>

            <DepthExpressivenessDemo lang={lang} />
            <GuidedSteps title={ui.guidedTitle} steps={t.depthSteps} />
            <Checkpoint
              tagLabel={ui.checkpointTag}
              prompt={t.depthCheckpoint.prompt}
              options={t.depthCheckpoint.options}
              resetLabel={ui.reset}
              correctLabel={ui.correctLabel}
              incorrectLabel={ui.incorrectLabel}
            />
          </SectionBlock>

          <SectionBlock title={t.difficultiesTitle}>
            <p className="text-sm leading-relaxed text-slate-700">{t.difficultiesText}</p>
            <LossLandscapeDemo lang={lang} />
            <GuidedSteps title={ui.guidedTitle} steps={t.diffSteps} />
            <Checkpoint
              tagLabel={ui.checkpointTag}
              prompt={t.diffCheckpoint.prompt}
              options={t.diffCheckpoint.options}
              resetLabel={ui.reset}
              correctLabel={ui.correctLabel}
              incorrectLabel={ui.incorrectLabel}
            />
          </SectionBlock>

          <SectionBlock title={t.universalTitle}>
            <InfoCard title={isZh ? "关键思想" : "Key Idea"}>
              <p>{t.universalKeyIdea}</p>
            </InfoCard>
            <StepApproxDemo lang={lang} />
            <GuidedSteps title={ui.guidedTitle} steps={t.universalSteps} />
            <Checkpoint
              tagLabel={ui.checkpointTag}
              prompt={t.universalCheckpoint.prompt}
              options={t.universalCheckpoint.options}
              resetLabel={ui.reset}
              correctLabel={ui.correctLabel}
              incorrectLabel={ui.incorrectLabel}
            />
          </SectionBlock>

          <SectionBlock title={t.pretrainTitle}>
            <p className="text-sm leading-relaxed text-slate-700">{t.pretrainText}</p>
            <InfoCard title={t.rbmInfoTitle}>
              <p>{t.rbmInfoText}</p>
            </InfoCard>
            <PretrainingFlowDemo lang={lang} />
            <GuidedSteps title={ui.guidedTitle} steps={t.pretrainSteps} />
            <Checkpoint
              tagLabel={ui.checkpointTag}
              prompt={t.pretrainCheckpoint.prompt}
              options={t.pretrainCheckpoint.options}
              resetLabel={ui.reset}
              correctLabel={ui.correctLabel}
              incorrectLabel={ui.incorrectLabel}
            />
          </SectionBlock>

          <SectionBlock title={t.flourishTitle}>
            <p className="text-sm leading-relaxed text-slate-700">{t.flourishText}</p>
            <Checkpoint
              tagLabel={ui.checkpointTag}
              prompt={t.flourishCheckpoint.prompt}
              options={t.flourishCheckpoint.options}
              resetLabel={ui.reset}
              correctLabel={ui.correctLabel}
              incorrectLabel={ui.incorrectLabel}
            />
          </SectionBlock>

          <SectionBlock id="hierarchy" title={t.hierarchyTitle} eyebrow={t.hierarchyEyebrow}>
            <InfoCard title={t.highLevelTitle}>
              <p>{t.highLevelText}</p>
            </InfoCard>
            <InfoCard title={t.faceExampleTitle}>
              <p>{t.faceExampleText}</p>
            </InfoCard>

            <FeatureHierarchyDemo lang={lang} />
            <GuidedSteps title={ui.guidedTitle} steps={t.featureSteps} />
            <Checkpoint
              tagLabel={ui.checkpointTag}
              prompt={t.featureCheckpoint.prompt}
              options={t.featureCheckpoint.options}
              resetLabel={ui.reset}
              correctLabel={ui.correctLabel}
              incorrectLabel={ui.incorrectLabel}
            />

            <InfoCard title={t.sharedTitle}>
              <p>{t.sharedText}</p>
            </InfoCard>
            <InfoCard title={t.brainTitle}>
              <p>{t.brainText}</p>
            </InfoCard>
          </SectionBlock>

          <SectionBlock title={t.successTitle}>
            <p className="text-sm leading-relaxed text-slate-700">{t.successText}</p>
            <SuccessFactorsDemo lang={lang} />
          </SectionBlock>

          <SectionBlock title={t.summaryTitle} eyebrow={t.summaryEyebrow}>
            <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
              {t.summaryPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </SectionBlock>
        </main>
      </div>
    </div>
  );
}

export default App;
