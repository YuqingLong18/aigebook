import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { ReinforcementStepDemo } from "../demos/ReinforcementStepDemo";
import { RLTradeoffDemo } from "../demos/RLTradeoffDemo";
import { SelfPlayGrowthDemo } from "../demos/SelfPlayGrowthDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson6_4({ lang }: LessonProps) {
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
    { id: "human", label: t.humanTitle },
    { id: "method", label: t.methodTitle },
    { id: "applications", label: t.applicationsTitle },
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

        <SectionBlock id="human" title={t.humanTitle} eyebrow={t.humanEyebrow}>
          {t.humanParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <GuidedSteps title={ui.guidedTitle} steps={t.humanSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.humanCheckpoint.prompt}
            options={t.humanCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="method" title={t.methodTitle}>
          {t.methodParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <InfoCard title={t.methodCardTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.methodCardItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </InfoCard>
          <ReinforcementStepDemo lang={lang} />
          <RLTradeoffDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.methodSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.methodCheckpoint.prompt}
            options={t.methodCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="applications" title={t.applicationsTitle}>
          <div className="grid gap-3 md:grid-cols-2">
            {t.applicationCards.map((card) => (
              <InfoCard key={card.title} title={card.title}>
                <p className="text-sm text-slate-700">{card.desc}</p>
              </InfoCard>
            ))}
          </div>
          <SelfPlayGrowthDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.appSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.appCheckpoint.prompt}
            options={t.appCheckpoint.options}
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
      "理解强化学习的基本概念及其与监督/无监督学习的差别",
      "掌握互动、奖励、策略优化的核心流程",
      "认识强化学习在机器人训练与游戏中的典型应用",
    ],
    introTitle: "导入",
    introEyebrow: "另一种学习信号：奖励",
    introParas: [
      "与监督/无监督不同，强化学习没有现成数据，靠与环境互动获得延迟奖励，逐步改进策略。",
      "它常用于未知环境的决策，如让机器人学会行走或让 AI 精通游戏。",
    ],
    introCheckpoint: {
      prompt: "强化学习的训练信号来自哪里？",
      options: [
        { label: "与环境交互得到的奖励/惩罚", correct: true, explanation: "奖励信号驱动策略改进。" },
        { label: "人工一次性标注的固定标签", correct: false, explanation: "那属于监督学习。" },
        { label: "完全没有任何反馈", correct: false, explanation: "没有反馈就无法优化策略。" },
      ],
    },
    humanTitle: "1. 人类的强化学习",
    humanEyebrow: "跌倒-调整-再尝试",
    humanParas: [
      "学习走路时，摔倒带来“惩罚”，成功站稳得到鼓励；反馈并非即时逐步指导，而是基于结果的强化。",
    ],
    humanSteps: [
      "经历探索（尝试迈步）与反馈（跌倒/被表扬）。",
      "根据反馈调整下一次动作。",
      "逐渐形成稳定的走路策略。",
    ],
    humanCheckpoint: {
      prompt: "人类学走路体现了强化学习的什么特点？",
      options: [
        { label: "通过结果反馈调整行为", correct: true, explanation: "奖励/惩罚塑造策略。" },
        { label: "需要详尽的每步指导", correct: false, explanation: "父母不会逐步硬编码动作。" },
        { label: "不需要反复尝试", correct: false, explanation: "强化学习依赖反复探索。" },
      ],
    },
    methodTitle: "2. 强化学习的过程",
    methodParas: [
      "以打砖块游戏为例：智能体观察屏幕（状态），选择左右移动（动作），接球得分（奖励），目标是最大化长期回报。",
    ],
    methodCardTitle: "关键概念",
    methodCardItems: [
      "状态（State）：环境观测，如球和挡板位置。",
      "动作（Action）：可执行的操作，如向左/右移动。",
      "奖励（Reward）：得分或惩罚，可延迟出现。",
      "策略（Policy）：在状态下如何选动作的规则，目标是累计奖励最大。",
    ],
    methodSteps: [
      "观察当前状态，选一个动作。",
      "执行动作得到即时或延迟奖励。",
      "更新策略平衡长远收益与短期得分（探索-利用）。",
    ],
    methodCheckpoint: {
      prompt: "强化学习中的“策略”指的是？",
      options: [
        { label: "在每个状态下选择动作的规则", correct: true, explanation: "策略映射状态到动作。" },
        { label: "数据集的标注指南", correct: false, explanation: "那更像监督学习的标注规范。" },
        { label: "固定不变的随机动作序列", correct: false, explanation: "策略会随学习改进。" },
      ],
    },
    applicationsTitle: "3. 应用与案例",
    applicationCards: [
      { title: "机器人训练", desc: "强化学习让机械狗学会平衡、避障、跳跃；机械手可通过试错掌握抓取。" },
      { title: "自我博弈游戏", desc: "AlphaGo 通过大量自我对局优化策略；AlphaStar 在即时战略中达到大师水平。" },
      { title: "其他场景", desc: "自动驾驶、金融交易、推荐排序等均可用奖励信号优化决策。" },
    ],
    appSteps: [
      "识别奖励设计：什么是想要的长期目标？",
      "平衡探索与利用，避免陷入局部最优。",
      "通过自博弈或真实环境不断迭代。",
    ],
    appCheckpoint: {
      prompt: "AlphaGo 成功的原因之一是？",
      options: [
        { label: "通过自我对局积累经验并优化策略", correct: true, explanation: "自博弈提供海量互动数据。" },
        { label: "无需任何对局数据直接完成", correct: false, explanation: "自博弈本身生成了训练数据。" },
        { label: "完全由人工写好所有棋步", correct: false, explanation: "策略通过学习获得。" },
      ],
    },
    summaryTitle: "小结",
    summaryPoints: [
      "强化学习靠奖励/惩罚信号，不依赖固定标签。",
      "核心在于策略优化与探索-利用平衡。",
      "已在机器人、游戏等需交互的场景取得突破，未来与大模型/机器人结合前景广阔。",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand reinforcement learning and how it differs from supervised/unsupervised learning",
      "Grasp interaction, reward, and policy optimization",
      "See RL applications in robotics and games",
    ],
    introTitle: "Warm-up",
    introEyebrow: "A Different Signal: Reward",
    introParas: [
      "Unlike supervised/unsupervised methods, RL has no fixed dataset. It learns by interacting with an environment and receiving delayed rewards.",
      "It fits decision-making in unknown settings, such as training robots or mastering games.",
    ],
    introCheckpoint: {
      prompt: "Where do RL training signals come from?",
      options: [
        { label: "Rewards/penalties from interaction", correct: true, explanation: "Feedback drives policy updates." },
        { label: "One-shot human labels", correct: false, explanation: "That’s supervised learning." },
        { label: "No feedback at all", correct: false, explanation: "No feedback means no learning." },
      ],
    },
    humanTitle: "1. Human Reinforcement Learning",
    humanEyebrow: "Fall–adjust–try again",
    humanParas: [
      "Learning to walk involves pain (negative reward) and praise (positive reward); feedback is outcome-based rather than step-by-step instructions.",
    ],
    humanSteps: [
      "Explore actions (try a step) and receive feedback (fall/praise).",
      "Adjust the next move based on feedback.",
      "Gradually form a stable walking policy.",
    ],
    humanCheckpoint: {
      prompt: "Learning to walk illustrates RL because…",
      options: [
        { label: "Behavior adjusts from outcome feedback", correct: true, explanation: "Rewards shape the policy." },
        { label: "Every step is explicitly scripted", correct: false, explanation: "Parents don’t hard-code steps." },
        { label: "No trial and error is needed", correct: false, explanation: "Trial-and-error is central." },
      ],
    },
    methodTitle: "2. RL Process",
    methodParas: [
      "In a brick-breaker game, the agent observes the screen (state), moves left/right (actions), scores when catching the ball (reward), and aims to maximize long-term return.",
    ],
    methodCardTitle: "Key concepts",
    methodCardItems: [
      "State: observation of the environment (ball/paddle positions).",
      "Action: available moves such as left/right.",
      "Reward: gains or penalties, possibly delayed.",
      "Policy: rules for choosing actions per state; goal is maximum cumulative reward.",
    ],
    methodSteps: [
      "Observe state and pick an action.",
      "Execute and receive immediate or delayed reward.",
      "Update policy to balance long-term gain vs. short-term points (explore vs. exploit).",
    ],
    methodCheckpoint: {
      prompt: "In RL, a “policy” is…",
      options: [
        { label: "A rule mapping states to actions", correct: true, explanation: "The policy decides actions." },
        { label: "Labeling guidelines for data", correct: false, explanation: "That fits supervised labeling, not RL." },
        { label: "A fixed random action list", correct: false, explanation: "Policies change as learning proceeds." },
      ],
    },
    applicationsTitle: "3. Applications and Cases",
    applicationCards: [
      { title: "Robot training", desc: "RL teaches robot dogs to balance/jump and robot hands to grasp through trial and error." },
      { title: "Self-play games", desc: "AlphaGo refined its policy via massive self-play; AlphaStar reached grandmaster level in RTS." },
      { title: "Other domains", desc: "Autonomous driving, trading, and recommendation can optimize decisions with reward signals." },
    ],
    appSteps: [
      "Design rewards that reflect the long-term goal.",
      "Balance exploration and exploitation to avoid local optima.",
      "Iterate through self-play or real-world interaction.",
    ],
    appCheckpoint: {
      prompt: "One reason AlphaGo succeeded is…",
      options: [
        { label: "It gained experience through self-play to optimize its policy", correct: true, explanation: "Self-play generated training data." },
        { label: "It needed no game data at all", correct: false, explanation: "Self-play itself produced data." },
        { label: "All moves were handwritten by humans", correct: false, explanation: "Strategies were learned, not scripted." },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryPoints: [
      "RL learns from rewards rather than fixed labels.",
      "Policy optimization hinges on the explore–exploit balance.",
      "It shines in interactive domains like robotics and games, and will pair strongly with future robots + large models.",
    ],
  },
};
