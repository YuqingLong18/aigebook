import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { DataComputeTriadDemo } from "../demos/DataComputeTriadDemo";
import { MilestoneSpotlightDemo } from "../demos/MilestoneSpotlightDemo";
import { SelfAttentionDemo } from "../demos/SelfAttentionDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson1_8({ lang }: LessonProps) {
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
    { id: "pragmatic", label: isZh ? "1. 务实复兴" : "1. Pragmatic Revival" },
    { id: "data", label: isZh ? "2. 数据与算力" : "2. Data & Compute" },
    { id: "ml", label: isZh ? "3. 机器学习方法" : "3. Machine Learning Methods" },
    { id: "milestones", label: isZh ? "4. 里程碑事件" : "4. Milestones" },
    { id: "deep", label: isZh ? "5. 深度学习时代" : "5. Deep Learning Era" },
    { id: "llm", label: isZh ? "6. 大模型时代" : "6. Era of Large Models" },
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

        <SectionBlock id="pragmatic" title={t.pragTitle} eyebrow={t.pragEyebrow}>
          <InfoCard title={t.pragCardTitle}>
            {t.pragParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.pragSteps} />
        </SectionBlock>

        <SectionBlock id="data" title={t.dataTitle} eyebrow={t.dataEyebrow}>
          <InfoCard title={t.dataCardTitle}>
            {t.dataParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <DataComputeTriadDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.dataSteps} />
        </SectionBlock>

        <SectionBlock id="ml" title={t.mlTitle} eyebrow={t.mlEyebrow}>
          <InfoCard title={t.mlCardTitle}>
            {t.mlParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.mlSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.mlCheckpoint.prompt}
            options={t.mlCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="milestones" title={t.milestoneTitle} eyebrow={t.milestoneEyebrow}>
          <MilestoneSpotlightDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.milestoneSteps} />
        </SectionBlock>

        <SectionBlock id="deep" title={t.deepTitle} eyebrow={t.deepEyebrow}>
          <InfoCard title={t.deepCardTitle}>
            {t.deepParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
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

        <SectionBlock id="llm" title={t.llmTitle} eyebrow={t.llmEyebrow}>
          <InfoCard title={t.llmCardTitle}>
            {t.llmParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <SelfAttentionDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.llmSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.llmCheckpoint.prompt}
            options={t.llmCheckpoint.options}
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
      "Explain AI’s revival via data growth and compute advances.",
      "Summarize post-1990 machine learning (probabilistic models, neural nets).",
      "Recall milestones: Deep Blue, DARPA challenge, Watson, AlexNet, AlphaGo.",
      "Understand the deep learning revolution (AlexNet, AlphaGo, AlphaFold).",
      "Describe the large-model era, Transformers, and generative AI (GPT, DALL·E, Sora).",
    ],
    openingTitle: "Opening Idea",
    openingEyebrow: "Revival to large models",
    openingText: "Data, compute, and learning shifted AI from symbolic limits to modern deep and generative models.",
    pragTitle: "1. Pragmatic Revival (1993–2011)",
    pragEyebrow: "Domain focus",
    pragCardTitle: "From lofty goals to practical tasks",
    pragParas: [
      "Focus moved to speech, vision, NLP, control; machine learning became mainstream with rising data/compute.",
    ],
    pragSteps: ["Track shift to solvable domain problems.", "Note ML ascent with internet-era data.", "Connect pragmatism to renewed growth."],
    dataTitle: "2. Data & Compute",
    dataEyebrow: "Foundations",
    dataCardTitle: "Internet data + Moore’s Law",
    dataParas: [
      "Internet/mobile era exploded data; open datasets emerged.",
      "Hardware followed Moore’s Law; GPUs enabled data-heavy neural nets.",
    ],
    dataSteps: ["Link data scale to learning quality.", "See compute enabling bigger models.", "Recognize feasibility shift for neural nets."],
    mlTitle: "3. Machine Learning Methods",
    mlEyebrow: "Probabilistic & neural",
    mlCardTitle: "Learning from data",
    mlParas: [
      "Probabilistic models capture uncertainty and event relations (e.g., medical diagnosis).",
      "Neural networks (connectionism) gained flexibility; bigger data/compute awaited deep breakthroughs.",
    ],
    mlSteps: ["Contrast probabilistic vs. neural flexibility.", "Recall connectionism’s hypothesis: complex nets approximate any function.", "Connect to later deep learning."],
    mlCheckpoint: {
      prompt: "Why did ML surge after the 1990s?",
      options: [
        {
          label: "Data and compute finally matched ML’s needs.",
          correct: true,
          explanation: "Scale enabled effective training.",
        },
        {
          label: "Researchers stopped caring about accuracy.",
          correct: false,
          explanation: "Accuracy improved with scale.",
        },
        {
          label: "Knowledge engineering became free.",
          correct: false,
          explanation: "Knowledge remained costly; ML learned from data.",
        },
      ],
    },
    milestoneTitle: "4. Milestones",
    milestoneEyebrow: "Chess, cars, QA",
    milestoneSteps: ["Study how search+compute beat Kasparov.", "Note autonomous driving milestone (Stanley).", "See Watson’s parallel NLP for Jeopardy!."],
    deepTitle: "5. Deep Learning Era (2011–2020)",
    deepEyebrow: "Deep nets rise",
    deepCardTitle: "Image, Go, science",
    deepParas: [
      "AlexNet (2012) cut ImageNet error 10%; by 2017 error < human.",
      "AlphaGo (2016/17) used deep nets + search + self-play to beat champions.",
      "AlphaFold (2020+) predicted protein structures at atomic accuracy, transforming biology.",
    ],
    deepSteps: ["Connect pretraining (2006) to feasible deep nets.", "See deep nets + big data across domains.", "Link to interdisciplinary breakthroughs."],
    deepCheckpoint: {
      prompt: "What made AlphaGo special?",
      options: [
        {
          label: "Deep policy/value nets plus self-play and search conquered a complex game.",
          correct: true,
          explanation: "It combined learning and search effectively.",
        },
        {
          label: "It ignored past human games entirely.",
          correct: false,
          explanation: "It used human games then self-play.",
        },
        {
          label: "It was purely rule-based.",
          correct: false,
          explanation: "Deep learning was central.",
        },
      ],
    },
    llmTitle: "6. Era of Large Models (2020–)",
    llmEyebrow: "Transformers & generation",
    llmCardTitle: "Transformer → GPT, DALL·E, Sora",
    llmParas: [
      "Transformer (2017) modeled long sequences; GPT (2018) pretrained on massive text, leading to GPT-3.5 (ChatGPT), GPT-4/4o, DeepSeek R1.",
      "Generative models extended to images (DALL·E), video (Sora), music (MusicLM, Suno); multimodal models handle text/vision/audio.",
    ],
    llmSteps: ["Understand self-attention’s long-context power.", "See large-scale pretraining + generation as new paradigm.", "Note multimodal expansion and reasoning gains (o1, R1)."],
    llmCheckpoint: {
      prompt: "What underpins today’s large models?",
      options: [
        {
          label: "Transformer self-attention + large-scale pretraining data/compute.",
          correct: true,
          explanation: "Architecture plus scale drive capability.",
        },
        {
          label: "Manual rules only.",
          correct: false,
          explanation: "Rules are replaced by learned parameters.",
        },
        {
          label: "Lack of data.",
          correct: false,
          explanation: "Data scale is essential.",
        },
      ],
    },
    summaryTitle: "Section Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "Data + compute enabled pragmatic ML revival.",
      "Probabilistic models and neural nets matured post-1990.",
      "Milestones (Deep Blue, DARPA, Watson) marked applied progress.",
      "Deep learning breakthroughs (AlexNet, AlphaGo, AlphaFold) reshaped AI.",
      "Transformer-based large models fuel today’s generative, multimodal era.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解 AI 复兴的背景：数据积累与算力提升。",
      "总结 1990 年代后的机器学习（概率模型、神经网络）。",
      "回顾里程碑：深蓝、DARPA 挑战、Watson、AlexNet、AlphaGo。",
      "理解深度学习革命（AlexNet、AlphaGo、AlphaFold）。",
      "描述大模型时代、Transformer、生成式 AI（GPT、DALL·E、Sora）。",
    ],
    openingTitle: "开篇理解",
    openingEyebrow: "复兴到大模型",
    openingText: "数据、算力与学习让 AI 从符号瓶颈走向现代深度与生成模型。",
    pragTitle: "1. 务实复兴 (1993–2011)",
    pragEyebrow: "聚焦应用",
    pragCardTitle: "从终极目标到具体任务",
    pragParas: ["研究转向语音、视觉、NLP、控制；互联网数据与算力提升让机器学习成主流。"],
    pragSteps: ["聚焦可落地领域。", "记录互联网时代数据驱动。", "联系务实转向与增长。"],
    dataTitle: "2. 数据与算力",
    dataEyebrow: "基础",
    dataCardTitle: "互联网数据 + 摩尔定律",
    dataParas: ["互联网/移动互联网使数据爆炸；开放数据集出现。", "硬件遵循摩尔定律；GPU 让数据密集的神经网络成为可能。"],
    dataSteps: ["数据规模影响学习质量。", "算力支撑更大模型。", "可行性转折点。"],
    mlTitle: "3. 机器学习方法",
    mlEyebrow: "概率与神经",
    mlCardTitle: "从数据中学习",
    mlParas: [
      "概率模型刻画不确定性与事件关系（如医疗诊断）。",
      "神经网络更灵活，假设复杂网络可逼近任意函数；等待数据/算力推动深度突破。",
    ],
    mlSteps: ["对比概率模型与神经网络。", "联系联结主义的能力假设。", "连接到后续深度学习。"],
    mlCheckpoint: {
      prompt: "为何 1990 之后机器学习崛起？",
      options: [
        {
          label: "数据与算力满足了学习需求。",
          correct: true,
          explanation: "规模让训练有效。",
        },
        {
          label: "研究者不再关注准确率。",
          correct: false,
          explanation: "准确率随规模提升。",
        },
        {
          label: "知识工程免费了。",
          correct: false,
          explanation: "知识获取仍昂贵，学习靠数据。",
        },
      ],
    },
    milestoneTitle: "4. 里程碑事件",
    milestoneEyebrow: "棋、车、问答",
    milestoneSteps: ["了解搜索+算力战胜卡斯帕罗夫。", "识别无人车里程碑（Stanley）。", "Watson 并行 NLP 赢得 Jeopardy!"],
    deepTitle: "5. 深度学习时代 (2011–2020)",
    deepEyebrow: "深层网络崛起",
    deepCardTitle: "视觉、围棋、科学",
    deepParas: [
      "AlexNet（2012）让 ImageNet 误差降 10%，2017 已低于人类。",
      "AlphaGo 用深网+搜索+自博弈击败顶尖棋手。",
      "AlphaFold 预测蛋白结构至原子级精度，革新生物学。",
    ],
    deepSteps: ["连接 2006 预训练到深网可行。", "深网+大数据跨领域。", "联系跨学科突破。"],
    deepCheckpoint: {
      prompt: "AlphaGo 的关键是？",
      options: [
        {
          label: "深度策略/价值网络 + 自我博弈与搜索攻克复杂棋局。",
          correct: true,
          explanation: "学习与搜索结合。",
        },
        {
          label: "完全不用人类棋谱。",
          correct: false,
          explanation: "先用棋谱再自博弈。",
        },
        {
          label: "纯规则系统。",
          correct: false,
          explanation: "深度学习核心。",
        },
      ],
    },
    llmTitle: "6. 大模型时代 (2020–)",
    llmEyebrow: "Transformer 与生成",
    llmCardTitle: "Transformer → GPT、DALL·E、Sora",
    llmParas: [
      "Transformer（2017）建模长序列；GPT（2018）大规模预训练文本，迭代到 GPT-3.5/4/4o、DeepSeek R1。",
      "生成模型扩展到图像（DALL·E）、视频（Sora）、音乐（MusicLM、Suno）；多模态模型处理文/视/音。",
    ],
    llmSteps: ["理解自注意力的长上下文能力。", "大规模预训练+生成成为新范式。", "注意多模态扩展与推理增强（o1、R1）。"],
    llmCheckpoint: {
      prompt: "当下大模型的基础是？",
      options: [
        {
          label: "Transformer 自注意力 + 海量数据与算力的预训练。",
          correct: true,
          explanation: "架构与规模共同驱动。",
        },
        {
          label: "纯手写规则。",
          correct: false,
          explanation: "规则由参数学习取代。",
        },
        {
          label: "缺乏数据。",
          correct: false,
          explanation: "数据规模至关重要。",
        },
      ],
    },
    summaryTitle: "本节小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "数据与算力促成务实的机器学习复兴。",
      "概率模型与神经网络在 1990 后成熟。",
      "深蓝、DARPA 挑战、Watson 等标志应用进展。",
      "深度学习突破（AlexNet、AlphaGo、AlphaFold）重塑 AI。",
      "基于 Transformer 的大模型推动生成式、多模态时代。",
    ],
  },
};
