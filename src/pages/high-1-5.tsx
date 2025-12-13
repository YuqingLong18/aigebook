import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { RewardLearningDemo } from "../demos/RewardLearningDemo";
import { TuringTestDemo } from "../demos/TuringTestDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson1_5({ lang }: LessonProps) {
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
    { id: "genius", label: isZh ? "1. 少年天才" : "1. Young Genius" },
    { id: "tm", label: isZh ? "2. 贡献一：图灵机" : "2. Contribution 1: Turing Machine" },
    { id: "early-ai", label: isZh ? "3. 贡献二：机器智能思想" : "3. Contribution 2: Machine Intelligence Ideas" },
    { id: "ttest", label: isZh ? "4. 贡献三：图灵测试" : "4. Contribution 3: Turing Test" },
    { id: "impact", label: isZh ? "5. 百年影响" : "5. Century Impact" },
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

        <SectionBlock id="genius" title={t.geniusTitle} eyebrow={t.geniusEyebrow}>
          <InfoCard title={t.geniusCardTitle}>
            {t.geniusParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
        </SectionBlock>

        <SectionBlock id="tm" title={t.tmTitle} eyebrow={t.tmEyebrow}>
          <InfoCard title={t.tmCardTitle}>
            {t.tmParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.tmSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.tmCheckpoint.prompt}
            options={t.tmCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="early-ai" title={t.earlyTitle} eyebrow={t.earlyEyebrow}>
          <InfoCard title={t.earlyCardTitle}>
            {t.earlyParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <RewardLearningDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.earlySteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.earlyCheckpoint.prompt}
            options={t.earlyCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="ttest" title={t.ttestTitle} eyebrow={t.ttestEyebrow}>
          <InfoCard title={t.ttestCardTitle}>
            {t.ttestParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <TuringTestDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.ttestSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.ttestCheckpoint.prompt}
            options={t.ttestCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="impact" title={t.impactTitle} eyebrow={t.impactEyebrow}>
          <InfoCard title={t.impactCardTitle}>
            {t.impactParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
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
      "Recognize Turing’s foundational role in CS and AI.",
      "Understand Turing machine principles and significance.",
      "Learn Turing’s early ideas on machine learning, reinforcement, evolution.",
      "Understand the Turing Test and its importance.",
      "See Turing’s influence (Turing Award) on AI and computing.",
    ],
    openingTitle: "Opening Idea",
    openingEyebrow: "Turing’s legacy",
    openingText:
      "Alan Turing shaped computation and AI: universal machines, early visions of learning, and the Turing Test. His influence still anchors the field.",
    geniusTitle: "1. Young Genius",
    geniusEyebrow: "Early brilliance",
    geniusCardTitle: "From school to Cambridge",
    geniusParas: [
      "Born 1912, gifted from childhood; excelled at Sherborne School, self-studied Einstein.",
      "At Cambridge, earned First Class Honors, research fellowship, and Smith’s Prize for math contributions.",
    ],
    tmTitle: "2. Contribution 1: Turing Machine",
    tmEyebrow: "Computability",
    tmCardTitle: "Universal model",
    tmParas: [
      "In 1936, Turing proposed the Turing machine while addressing Hilbert’s Entscheidungsproblem—showing a universal algorithmic model.",
      "Program = rule table; changing it yields any computation, inspiring stored-program computers.",
    ],
    tmSteps: [
      "Tie memory, program, controller to Turing’s components.",
      "See universality as foundation for general computers.",
      "Connect to AI: computation enables simulated intelligence.",
    ],
    tmCheckpoint: {
      prompt: "What makes the Turing machine foundational?",
      options: [
        {
          label: "It is a universal model: any computable task can be encoded by its rules.",
          correct: true,
          explanation: "Universality underlies general-purpose computers.",
        },
        {
          label: "It only does one fixed task forever.",
          correct: false,
          explanation: "Rules can change tasks.",
        },
        {
          label: "It forbids memory.",
          correct: false,
          explanation: "Tape serves as memory.",
        },
      ],
    },
    earlyTitle: "3. Contribution 2: Machine Intelligence Ideas",
    earlyEyebrow: "Learning visions",
    earlyCardTitle: "Child machine, reward, evolution",
    earlyParas: [
      "Turing’s 1948 report “Intelligent Machinery” suggested training a general machine like a child—early machine learning intuition.",
      "He proposed rewards/punishments (reinforcement learning) and evolutionary simulation for intelligence.",
    ],
    earlySteps: [
      "View learning as staged training, not fixed programming.",
      "Use reward signals to guide behavior.",
      "Consider evolution-inspired search for intelligent behaviors.",
    ],
    earlyCheckpoint: {
      prompt: "Which idea foreshadowed reinforcement learning?",
      options: [
        {
          label: "Training machines with rewards and punishments to shape behavior.",
          correct: true,
          explanation: "Direct link to RL.",
        },
        {
          label: "Removing feedback entirely.",
          correct: false,
          explanation: "RL relies on feedback.",
        },
        {
          label: "Hand-coding every rule.",
          correct: false,
          explanation: "Learning replaces exhaustive coding.",
        },
      ],
    },
    ttestTitle: "4. Contribution 3: Turing Test",
    ttestEyebrow: "Behavioral criterion",
    ttestCardTitle: "Imitation game",
    ttestParas: [
      "In 1950, Turing proposed judging machine intelligence via natural-language conversation indistinguishable from a human (30% judges fooled in ~5 minutes).",
      "Provided a concrete, testable goal beyond abstract definitions of intelligence.",
    ],
    ttestSteps: [
      "Focus on observable behavior (dialogue).",
      "Set operational criteria for “intelligent”.",
      "Relate to modern conversational AI benchmarks.",
    ],
    ttestCheckpoint: {
      prompt: "What does the Turing Test emphasize?",
      options: [
        {
          label: "Behavioral indistinguishability in conversation as evidence of intelligence.",
          correct: true,
          explanation: "It tests observable behavior.",
        },
        {
          label: "Direct brain scan of a machine.",
          correct: false,
          explanation: "It uses conversation, not internals.",
        },
        {
          label: "Only math proofs.",
          correct: false,
          explanation: "It’s an empirical interaction test.",
        },
      ],
    },
    impactTitle: "5. Century Impact",
    impactEyebrow: "Honors",
    impactCardTitle: "Turing Award and recognition",
    impactParas: [
      "Nature hailed Turing as a top influential scientist; UK £50 note honors him.",
      "ACM’s Turing Award (since 1966) is the “Nobel of Computing,” fueling CS/AI progress (78 laureates through 2024).",
    ],
    summaryTitle: "Section Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "Turing’s Turing machine made universal computation conceivable and fueled computer design.",
      "His child-machine, reward, and evolutionary ideas presaged ML/RL.",
      "The Turing Test set a practical benchmark for machine intelligence.",
      "His influence endures via the Turing Award and modern AI’s foundations.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "认识图灵在计算机与 AI 中的奠基作用。",
      "理解图灵机原理与意义。",
      "了解图灵关于机器学习、强化学习、进化学习的早期设想。",
      "理解图灵测试及其重要性。",
      "认识图灵影响（图灵奖）对计算机与 AI 的推动。",
    ],
    openingTitle: "开篇理解",
    openingEyebrow: "图灵的遗产",
    openingText: "图灵塑造了计算与 AI：通用机、学习设想、图灵测试。他的影响至今支撑该领域。",
    geniusTitle: "1. 少年天才",
    geniusEyebrow: "早期才华",
    geniusCardTitle: "从学童到剑桥",
    geniusParas: [
      "1912 年生，自幼天赋卓绝；在舍伯恩学校自学爱因斯坦。",
      "剑桥获一等荣誉与研究奖学金、史密斯奖，数学造诣突出。",
    ],
    tmTitle: "2. 贡献一：图灵机",
    tmEyebrow: "可计算性",
    tmCardTitle: "通用模型",
    tmParas: [
      "1936 年，图灵提出图灵机，回应希尔伯特判定问题，奠定通用算法模型。",
      "程序=规则表，改变即可执行任意计算，启发存储程序计算机。",
    ],
    tmSteps: ["把存储、程序、控制与图灵机构件对应。", "通用性是通用计算机基础。", "连接 AI：计算使模拟智能成为可能。"],
    tmCheckpoint: {
      prompt: "图灵机的奠基意义是？",
      options: [
        {
          label: "它是通用模型，任何可计算任务都能编码为其规则。",
          correct: true,
          explanation: "通用性支撑通用计算机。",
        },
        {
          label: "只能永远做一件事。",
          correct: false,
          explanation: "规则可变换任务。",
        },
        {
          label: "不需要记忆。",
          correct: false,
          explanation: "纸带即记忆。",
        },
      ],
    },
    earlyTitle: "3. 贡献二：机器智能思想",
    earlyEyebrow: "学习愿景",
    earlyCardTitle: "儿童机、奖励、进化",
    earlyParas: [
      "1948 年报告《智能机器》提出像训练孩子一样训练通用机——早期机器学习想法。",
      "提出用奖惩“教育”机器（强化学习），以及模拟进化获取智能。",
    ],
    earlySteps: ["将学习视为分阶段训练而非全手写。", "用奖励信号引导行为。", "思考进化式搜索智能行为。"],
    earlyCheckpoint: {
      prompt: "哪一想法预示了强化学习？",
      options: [
        {
          label: "用奖励/惩罚训练机器塑造行为。",
          correct: true,
          explanation: "直接对应 RL 思路。",
        },
        {
          label: "移除所有反馈。",
          correct: false,
          explanation: "RL 依赖反馈。",
        },
        {
          label: "手写全部规则。",
          correct: false,
          explanation: "学习替代穷举编码。",
        },
      ],
    },
    ttestTitle: "4. 贡献三：图灵测试",
    ttestEyebrow: "行为标准",
    ttestCardTitle: "模仿游戏",
    ttestParas: [
      "1950 年图灵提出：若机器在对话中无法被区分为机器（如 5 分钟内让 30% 评审误判），则可视为有智能。",
      "提供可操作的智能目标，超越抽象定义。",
    ],
    ttestSteps: ["关注可观察的对话行为。", "用操作性标准定义“智能”。", "联系现代对话 AI 基准。"],
    ttestCheckpoint: {
      prompt: "图灵测试强调什么？",
      options: [
        {
          label: "在对话中行为不可区分，作为智能证据。",
          correct: true,
          explanation: "测试可观察行为。",
        },
        {
          label: "对机器做脑扫描。",
          correct: false,
          explanation: "用对话而非内部结构。",
        },
        {
          label: "只做数学证明。",
          correct: false,
          explanation: "是交互式检验。",
        },
      ],
    },
    impactTitle: "5. 百年影响",
    impactEyebrow: "荣誉",
    impactCardTitle: "图灵奖与纪念",
    impactParas: [
      "《自然》评其为最有影响力科学家之一；英国 50 英镑新钞印其头像。",
      "ACM 1966 设立图灵奖（“计算机界诺奖”），推动 CS/AI，至 2024 年 78 位得主。",
    ],
    summaryTitle: "本节小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "图灵机让通用计算成为可能，推动计算机设计。",
      "儿童机、奖励、进化等构想预示 ML/RL。",
      "图灵测试给出可操作的智能标尺。",
      "图灵影响以图灵奖等形式延续，奠定现代 AI 基础。",
    ],
  },
};
