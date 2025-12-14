import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { GradientDescentDemo } from "../demos/GradientDescentDemo";
import { MLIngredientsDemo } from "../demos/MLIngredientsDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson6_2({ lang }: LessonProps) {
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
    { id: "importance", label: t.importanceTitle },
    { id: "birth", label: t.birthTitle },
    { id: "framework", label: t.frameworkTitle },
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
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.introCheckpoint.prompt}
            options={t.introCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="importance" title={t.importanceTitle}>
          {t.importanceParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
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

        <SectionBlock id="birth" title={t.birthTitle} eyebrow={t.birthEyebrow}>
          {t.birthParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <GuidedSteps title={ui.guidedTitle} steps={t.birthSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.birthCheckpoint.prompt}
            options={t.birthCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="framework" title={t.frameworkTitle} eyebrow={t.frameworkEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.frameworkIntro}</p>
          <div className="grid gap-3 md:grid-cols-2">
            {t.frameworkCards.map((card) => (
              <InfoCard key={card.title} title={card.title}>
                <p className="text-sm text-slate-700">{card.desc}</p>
              </InfoCard>
            ))}
          </div>
          <MLIngredientsDemo lang={lang} />
          <GradientDescentDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.frameworkSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.frameworkCheckpoint.prompt}
            options={t.frameworkCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.knowledgeCheckpoint.prompt}
            options={t.knowledgeCheckpoint.options}
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
      "理解机器学习的基本概念与起源",
      "掌握机器学习的五个基本要素：目标、模型、算法、数据、知识",
      "比较基于知识的方法与基于学习的方法的差异",
    ],
    introTitle: "导入",
    introEyebrow: "为什么要机器学习",
    introParas: [
      "仅靠人类知识喂养的系统无法超越人类知识边界。赋予机器类人的学习能力，让它自行获取新知识，成为突破之路。",
      "机器学习让计算机不再只是执行指令，而是能从数据中总结规律、持续改进，减轻人类编程负担。",
    ],
    introCheckpoint: {
      prompt: "引入机器学习的根本原因是？",
      options: [
        { label: "减少人工编程并突破人类知识上限", correct: true, explanation: "机器可自学新知识，超出人类预设。" },
        { label: "完全替代所有数据需求", correct: false, explanation: "机器学习恰恰依赖数据。" },
        { label: "只为提高硬件速度", correct: false, explanation: "速度重要，但学习能力是核心动机。" },
      ],
    },
    importanceTitle: "1. 学习的重要性",
    importanceParas: [
      "人从胎儿期就开始学习，终身受益；社会进步也依赖学习、继承与创新。",
      "学习是文明阶梯，因此机器要聪明，同样需要学习机制。",
    ],
    importanceSteps: [
      "列举生活中因学习而改变的技能。",
      "思考机器缺少哪些“学习中的反馈”。",
      "总结学习带来的社会影响。",
    ],
    importanceCheckpoint: {
      prompt: "下列哪项最能体现“学习伴随终身”？",
      options: [
        { label: "胎儿就能对外界声音产生反应", correct: true, explanation: "说明学习从生命早期即开始。" },
        { label: "成人无法再形成新记忆", correct: false, explanation: "成年人仍可持续学习。" },
        { label: "学习只发生在课堂", correct: false, explanation: "学习贯穿日常体验与工作。" },
      ],
    },
    birthTitle: "2. 机器学习的诞生",
    birthEyebrow: "Arthur Samuel 与跳棋",
    birthParas: [
      "1959 年 Arthur Samuel 让计算机学会下跳棋，提出“machine learning”。机器对弈越多水平越高，甚至胜过作者本人。",
      "这一里程碑让计算机从“被动执行”转向“主动学习”，开启自我改进的智能代理时代。",
    ],
    birthSteps: [
      "理解 Samuel 的实验目标：让机器自己变强。",
      "关注“无需写出每一步棋”的意义。",
      "联系当下大型模型的自学习能力。",
    ],
    birthCheckpoint: {
      prompt: "Samuel 跳棋实验的重大意义是？",
      options: [
        { label: "证明机器可通过自我博弈提升能力", correct: true, explanation: "机器能靠学习而非硬编码提升。" },
        { label: "首次提出图灵测试", correct: false, explanation: "图灵测试由艾伦·图灵提出。" },
        { label: "证明机器无需数据", correct: false, explanation: "实验仍依赖对弈产生的数据。" },
      ],
    },
    frameworkTitle: "3. 机器学习的基本框架",
    frameworkEyebrow: "目标-模型-算法-数据-知识",
    frameworkIntro:
      "机器学习由五要素组成：目标决定学什么，模型存放知识，算法训练模型，数据提供养料，知识指导、约束并验证。",
    frameworkCards: [
      { title: "目标 (Loss)", desc: "可量化的任务指标，如分类准确率或回归误差，常写成损失函数。" },
      { title: "模型 (Representation)", desc: "存储所学知识的结构，可是规则、线性方程或神经网络。" },
      { title: "算法 (Training)", desc: "优化模型参数的步骤，如梯度下降沿最陡方向降低损失。" },
      { title: "数据 (Experience)", desc: "模型的“食物”，质量与规模决定上限，需清洗与标注。" },
      { title: "知识 (Prior)", desc: "指导模型选择、约束输出，亦可用来校验结果避免常识性错误。" },
    ],
    frameworkSteps: [
      "明确任务并写出量化目标/损失。",
      "根据数据与先验选模型和训练算法。",
      "准备/清洗数据，训练并用知识校验输出。",
    ],
    frameworkCheckpoint: {
      prompt: "损失函数在机器学习中的作用是？",
      options: [
        { label: "量化目标差距，指导参数更新", correct: true, explanation: "损失是学习方向的度量。" },
        { label: "随机生成标签", correct: false, explanation: "标签来自数据，不是损失生成。" },
        { label: "只在推理时使用", correct: false, explanation: "损失用于训练阶段。" },
      ],
    },
    knowledgeCheckpoint: {
      prompt: "“知识”在机器学习中的一个关键作用是？",
      options: [
        { label: "帮助选择合适模型/算法并校验结果", correct: true, explanation: "先验知识可指导设计与验证。" },
        { label: "完全替代数据", correct: false, explanation: "知识不能取代数据来源。" },
        { label: "让模型无法更新", correct: false, explanation: "先验约束并不阻止学习。" },
      ],
    },
    summaryTitle: "小结",
    summaryPoints: [
      "机器学习让机器自我获取知识，突破人类知识编程的边界。",
      "五要素共同作用：目标、模型、算法、数据、知识缺一不可。",
      "梯度下降等算法让模型逐步逼近任务目标，先验知识帮助提升可靠性。",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Grasp what machine learning is and why it emerged",
      "Master the five elements: objective, model, algorithm, data, knowledge",
      "Contrast knowledge-based and learning-based intelligence",
    ],
    introTitle: "Warm-up",
    introEyebrow: "Why Machine Learning",
    introParas: [
      "Systems fed only human knowledge cannot surpass human knowledge. Giving machines human-like learning lets them acquire new skills on their own.",
      "Machine learning turns computers from passive executors into agents that learn from data and lighten human programming burden.",
    ],
    introCheckpoint: {
      prompt: "The core reason to introduce machine learning is…",
      options: [
        { label: "Reduce manual programming and exceed human knowledge limits", correct: true, explanation: "Self-learning breaks the ceiling." },
        { label: "Eliminate the need for any data", correct: false, explanation: "ML is data-hungry." },
        { label: "Only to speed up hardware", correct: false, explanation: "Speed helps, but learning ability is central." },
      ],
    },
    importanceTitle: "1. Importance of Learning",
    importanceParas: [
      "Humans learn from the womb and throughout life; society advances by building on prior knowledge.",
      "If we want smart machines, they need a learning mechanism too.",
    ],
    importanceSteps: [
      "List skills transformed by learning.",
      "Spot which feedback loops machines miss today.",
      "Connect learning to societal progress.",
    ],
    importanceCheckpoint: {
      prompt: "Which best shows “lifelong learning”?",
      options: [
        { label: "A fetus responds to outside sounds", correct: true, explanation: "Learning starts very early." },
        { label: "Adults cannot form new memories", correct: false, explanation: "Adults keep learning." },
        { label: "Learning only happens in class", correct: false, explanation: "It permeates daily life." },
      ],
    },
    birthTitle: "2. Birth of Machine Learning",
    birthEyebrow: "Arthur Samuel and Checkers",
    birthParas: [
      "In 1959 Arthur Samuel taught a computer to play checkers; it improved through self-play and coined “machine learning.”",
      "The milestone shifted computers from step-by-step programming to self-improvement based on experience.",
    ],
    birthSteps: [
      "Note Samuel’s goal: let the machine get stronger by playing.",
      "See why not hard-coding every move matters.",
      "Relate to today’s self-learning large models.",
    ],
    birthCheckpoint: {
      prompt: "Samuel’s checkers work proved that…",
      options: [
        { label: "A machine can improve via self-play", correct: true, explanation: "Learning, not just rules, drove gains." },
        { label: "He invented the Turing Test", correct: false, explanation: "That was Alan Turing." },
        { label: "Machines don’t need data", correct: false, explanation: "Self-play still generates data." },
      ],
    },
    frameworkTitle: "3. Basic ML Framework",
    frameworkEyebrow: "Objective · Model · Algorithm · Data · Knowledge",
    frameworkIntro:
      "An ML system has five ingredients: a target (loss), a model to store knowledge, an algorithm to train it, data as fuel, and prior knowledge to guide and validate.",
    frameworkCards: [
      { title: "Objective (Loss)", desc: "Quantified task goal like accuracy or error, usually encoded as a loss function." },
      { title: "Model (Representation)", desc: "Where learned knowledge lives—rules, linear forms, or neural nets." },
      { title: "Algorithm (Training)", desc: "How to optimize parameters, e.g., gradient descent steps downhill." },
      { title: "Data (Experience)", desc: "The fuel; quality and scale cap performance and need cleaning/labels." },
      { title: "Knowledge (Prior)", desc: "Guides model/algorithm choices and sanity-checks outputs to avoid absurd errors." },
    ],
    frameworkSteps: [
      "Write a measurable target/loss for the task.",
      "Pick model/algorithm based on data and prior knowledge.",
      "Prepare data, train, and validate with expert knowledge.",
    ],
    frameworkCheckpoint: {
      prompt: "What does a loss function do?",
      options: [
        { label: "Quantifies target gap to guide updates", correct: true, explanation: "It directs learning steps." },
        { label: "Randomly generates labels", correct: false, explanation: "Labels come from data, not loss." },
        { label: "Used only at inference time", correct: false, explanation: "Loss drives training." },
      ],
    },
    knowledgeCheckpoint: {
      prompt: "A key role of prior knowledge in ML is…",
      options: [
        { label: "Helping choose models/algorithms and validate outputs", correct: true, explanation: "Priors guide and check learning." },
        { label: "Replacing the need for data", correct: false, explanation: "Data are still required." },
        { label: "Preventing any model updates", correct: false, explanation: "Priors constrain but don’t freeze learning." },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryPoints: [
      "Machine learning lets computers acquire knowledge themselves, beyond human-coded rules.",
      "Five elements jointly matter: objective, model, algorithm, data, and knowledge.",
      "Gradient-based training moves models toward the target; priors improve robustness and realism.",
    ],
  },
};
