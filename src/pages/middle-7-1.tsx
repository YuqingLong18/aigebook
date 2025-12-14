import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { SynapticPruningDemo } from "../demos/SynapticPruningDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson7_1({ lang }: LessonProps) {
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
    { id: "composition", label: t.compositionTitle },
    { id: "development", label: t.developmentTitle },
    { id: "features", label: t.featuresTitle },
    { id: "transmission", label: t.transmissionTitle },
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

        <SectionBlock id="composition" title={t.compositionTitle}>
          <div className="grid gap-3 md:grid-cols-2">
            <InfoCard title={t.centralTitle}>
              <p className="text-sm text-slate-700">{t.centralDesc}</p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-700">
                {t.centralItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </InfoCard>
            <InfoCard title={t.peripheralTitle}>
              <p className="text-sm text-slate-700">{t.peripheralDesc}</p>
            </InfoCard>
          </div>
          <GuidedSteps title={ui.guidedTitle} steps={t.compositionSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.compositionCheckpoint.prompt}
            options={t.compositionCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="development" title={t.developmentTitle} eyebrow={t.developmentEyebrow}>
          {t.developmentParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <SynapticPruningDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.developmentSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.developmentCheckpoint.prompt}
            options={t.developmentCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="features" title={t.featuresTitle}>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
            {t.featurePoints.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
          <GuidedSteps title={ui.guidedTitle} steps={t.featuresSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.featuresCheckpoint.prompt}
            options={t.featuresCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="transmission" title={t.transmissionTitle} eyebrow={t.transmissionEyebrow}>
          {t.transmissionParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <GuidedSteps title={ui.guidedTitle} steps={t.transmissionSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.transmissionCheckpoint.prompt}
            options={t.transmissionCheckpoint.options}
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
      "理解人类神经系统的组成、特点与发育历程",
      "理解生物电信号在神经元间的传递机制及其作用",
    ],
    introTitle: "导入",
    introEyebrow: "神经系统的敏捷与智慧",
    introParas: [
      "触到油炸食物瞬间缩手、蚊子飞来立刻眨眼——敏捷反应源自全身神经网络的协调。",
      "神经系统不仅控制动作，还承担感知、分析、想象等高级智能。",
    ],
    compositionTitle: "1. 神经系统的组成",
    centralTitle: "中枢神经系统",
    centralDesc: "由大脑和脊髓组成，大脑负责信息处理与决策，脊髓是指令和感知的高速通道。",
    centralItems: ["大脑（左/右半球：逻辑/创造）", "小脑（运动协调与平衡）", "脑干（呼吸、心跳等生命中枢）"],
    peripheralTitle: "周围神经系统",
    peripheralDesc:
      "遍布全身的神经网络，躯体神经控制肌肉与感觉，交感/副交感神经调节心脏、胃等内脏以保持平衡。",
    compositionSteps: [
      "区分中枢 vs. 周围神经系统的职责。",
      "连接例子：骑车时小脑和脊髓如何协作？",
      "思考自主与非自主调节如何互补。",
    ],
    compositionCheckpoint: {
      prompt: "脊髓的主要作用是？",
      options: [
        { label: "连接大脑与身体，传递指令与感觉", correct: true, explanation: "脊髓是信息高速通道。" },
        { label: "负责视觉解析", correct: false, explanation: "视觉主要在大脑皮层处理。" },
        { label: "调节内脏的自主平衡", correct: false, explanation: "这是交感/副交感神经的职责。" },
      ],
    },
    developmentTitle: "2. 发育过程",
    developmentEyebrow: "从神经管到成熟网络",
    developmentParas: [
      "胚胎期神经板内折形成神经管，逐步分化为大脑、小脑、脊髓；婴儿期感官探索驱动连接建立。",
      "童年快速学习强化神经连接；青春期独立思考与情绪发展使网络更成熟。",
    ],
    developmentSteps: [
      "梳理从神经管到分区的大致时间线。",
      "观察练习/学习如何强化或修剪连接。",
      "联系恢复：脑损伤后康复训练为何有效。",
    ],
    developmentCheckpoint: {
      prompt: "神经系统发育的一个关键特点是？",
      options: [
        { label: "连接可随学习被强化或修剪", correct: true, explanation: "可塑性贯穿发育与学习。" },
        { label: "出生后连接完全固定", correct: false, explanation: "连接会持续变化。" },
        { label: "只能在成年期形成连接", correct: false, explanation: "早期发育尤为关键。" },
      ],
    },
    featuresTitle: "3. 神经系统特点",
    featurePoints: [
      "神经元简单同质：树突接收，轴突输出。",
      "连接产生功能：海量互联形成感知、记忆、想象。",
      "高度适应：连接强度随练习与思考而变。",
    ],
    featuresSteps: [
      "用“简单单元 + 大规模连接”解释智能来源。",
      "举例说明练习如何改变连接强度。",
      "思考人工神经网络与生物神经的相似之处。",
    ],
    featuresCheckpoint: {
      prompt: "神经系统能产生强大功能的根本原因是？",
      options: [
        { label: "大量简单神经元的连接与可塑性", correct: true, explanation: "连接模式带来复杂功能。" },
        { label: "每个神经元功能完全不同", correct: false, explanation: "神经元功能相似。" },
        { label: "神经元只在静态状态工作", correct: false, explanation: "活跃的连接变化是关键。" },
      ],
    },
    transmissionTitle: "4. 神经元间的信息传递",
    transmissionEyebrow: "突触与神经递质",
    transmissionParas: [
      "树突与轴突在突触处连接；上游电信号触发递质释放，引起下游电位变化。电位累积超阈值则产生神经冲动继续传递。",
      "赫尔姆霍茨测得传导速度约 27.25 m/s，足以让我们瞬间避险。",
    ],
    transmissionSteps: [
      "确认信息流向：树突→胞体→轴突→突触。",
      "理解阈值触发与“全或无”特性。",
      "联系反射动作的速度与安全性。",
    ],
    transmissionCheckpoint: {
      prompt: "神经信号在突触处如何传递？",
      options: [
        { label: "释放神经递质，引起下游电位变化", correct: true, explanation: "化学递质完成信息传递。" },
        { label: "直接复制 DNA", correct: false, explanation: "突触不涉及遗传复制。" },
        { label: "通过机械振动传递", correct: false, explanation: "主要是电-化学信号。" },
      ],
    },
    summaryTitle: "小结",
    summaryPoints: [
      "神经系统由中枢与周围部分协同，既处理信息又调节生命活动。",
      "发育与学习塑造神经连接，可塑性是智能的基础。",
      "生物电信号通过突触层层传递，为敏捷反应与高级认知提供支撑。",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand the composition, traits, and development of the human nervous system",
      "Explain bioelectric signal transmission between neurons and its role",
    ],
    introTitle: "Warm-up",
    introEyebrow: "Agility and intelligence of the nervous system",
    introParas: [
      "Instantly pulling back from heat or blinking at a flying bug comes from a coordinated neural network.",
      "The nervous system controls movement and enables perception, analysis, imagination, and other higher cognition.",
    ],
    compositionTitle: "1. Composition of the Nervous System",
    centralTitle: "Central nervous system",
    centralDesc: "Brain + spinal cord. Brain processes and decides; spinal cord relays commands and sensations rapidly.",
    centralItems: ["Cerebrum (left/right: logic/creativity)", "Cerebellum (coordination, balance)", "Brainstem (breathing, heartbeat, digestion)"],
    peripheralTitle: "Peripheral nervous system",
    peripheralDesc:
      "Body-wide nerves. Somatic nerves control muscles/sensation; sympathetic/parasympathetic manage organs to keep balance.",
    compositionSteps: [
      "Separate duties of central vs. peripheral systems.",
      "Connect examples: riding a bike—cerebellum + spinal cord roles.",
      "Consider how voluntary and autonomic control complement each other.",
    ],
    compositionCheckpoint: {
      prompt: "The spinal cord mainly…",
      options: [
        { label: "Carries commands/sensations between brain and body", correct: true, explanation: "It is the fast highway." },
        { label: "Performs detailed visual parsing", correct: false, explanation: "Vision centers are cortical." },
        { label: "Balances organ activity autonomously", correct: false, explanation: "Autonomic nerves handle that." },
      ],
    },
    developmentTitle: "2. Development Process",
    developmentEyebrow: "From neural tube to mature network",
    developmentParas: [
      "In embryos a neural plate folds into a tube, later differentiating into brain/cerebellum/spinal cord; infant sensory exploration strengthens connections.",
      "Childhood brings rapid learning; adolescence adds independent thinking and richer emotions, maturing the network.",
    ],
    developmentSteps: [
      "Outline the timeline from neural tube to differentiated regions.",
      "See how practice/learning strengthens or prunes links.",
      "Relate to recovery: why rehab can restore functions.",
    ],
    developmentCheckpoint: {
      prompt: "A key feature of nervous system development is…",
      options: [
        { label: "Connections strengthen or prune with learning", correct: true, explanation: "Plasticity drives growth." },
        { label: "All links are fixed after birth", correct: false, explanation: "Links keep changing." },
        { label: "Connections form only in adulthood", correct: false, explanation: "Early development is crucial." },
      ],
    },
    featuresTitle: "3. Nervous System Features",
    featurePoints: [
      "Neurons are simple and similar: dendrites receive, axons send.",
      "Connections create function: massive interlinks yield perception, memory, imagination.",
      "High adaptability: connection strength shifts with practice and thought.",
    ],
    featuresSteps: [
      "Use “simple units + massive connections” to explain intelligence.",
      "Give examples of practice changing connection strength.",
      "Compare biological and artificial neural networks.",
    ],
    featuresCheckpoint: {
      prompt: "The nervous system’s power comes from…",
      options: [
        { label: "Many simple neurons connected with plasticity", correct: true, explanation: "Connectivity yields complexity." },
        { label: "Each neuron being unique and complex", correct: false, explanation: "Neurons are fairly uniform." },
        { label: "Neurons working only when static", correct: false, explanation: "Dynamic changes matter." },
      ],
    },
    transmissionTitle: "4. Information Transmission",
    transmissionEyebrow: "Synapse and neurotransmitters",
    transmissionParas: [
      "Dendrites and axons meet at synapses; upstream impulses release neurotransmitters, shifting downstream potentials. If summed potential crosses a threshold, a new impulse fires.",
      "Helmholtz measured ~27.25 m/s—fast enough for rapid reflexes.",
    ],
    transmissionSteps: [
      "Track flow: dendrite → soma → axon → synapse.",
      "Note threshold-triggered “all-or-none” firing.",
      "Link speed to safety in reflexes.",
    ],
    transmissionCheckpoint: {
      prompt: "At a synapse, signals pass by…",
      options: [
        { label: "Releasing neurotransmitters to change downstream potential", correct: true, explanation: "Chemical messengers bridge the gap." },
        { label: "Copying DNA directly", correct: false, explanation: "Synapses do not replicate DNA." },
        { label: "Mechanical vibration only", correct: false, explanation: "It’s electro-chemical signaling." },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryPoints: [
      "Central and peripheral systems cooperate to process information and regulate life functions.",
      "Development and learning reshape connections; plasticity underpins intelligence.",
      "Bioelectric signals cascade through synapses, enabling fast reflexes and higher cognition.",
    ],
  },
};
