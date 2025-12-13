import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { HideSeekStrategyDemo } from "../demos/HideSeekStrategyDemo";
import { RLTradeoffDemo } from "../demos/RLTradeoffDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson3_8({ lang }: LessonProps) {
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
    { id: "learning-objectives", label: isZh ? "学习目标" : "Learning Objectives" },
    { id: "intro", label: isZh ? "开篇理解" : "Opening Idea" },
    { id: "compare", label: isZh ? "1. 视频游戏 vs. 桌游" : "1. Video vs. Board Games" },
    { id: "rl", label: isZh ? "2. 强化学习回顾" : "2. Reinforcement Learning" },
    { id: "atari", label: isZh ? "3. Atari 突破" : "3. Atari Breakthrough" },
    { id: "hide", label: isZh ? "4. 藏猫猫策略演化" : "4. Hide-and-Seek Evolution" },
    { id: "alphastar", label: isZh ? "5. AlphaStar" : "5. AlphaStar" },
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

        <SectionBlock id="intro" title={t.introTitle} eyebrow={t.introEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.introText}</p>
        </SectionBlock>

        <SectionBlock id="compare" title={t.compareTitle} eyebrow={t.compareEyebrow}>
          <InfoCard title={t.compareCardTitle}>
            {t.compareParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.compareSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.compareCheckpoint.prompt}
            options={t.compareCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="rl" title={t.rlTitle} eyebrow={t.rlEyebrow}>
          <InfoCard title={t.rlCardTitle}>
            {t.rlParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <RLTradeoffDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.rlSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.rlCheckpoint.prompt}
            options={t.rlCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="atari" title={t.atariTitle} eyebrow={t.atariEyebrow}>
          <InfoCard title={t.atariCardTitle}>
            {t.atariParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.atariSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.atariCheckpoint.prompt}
            options={t.atariCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="hide" title={t.hideTitle} eyebrow={t.hideEyebrow}>
          <InfoCard title={t.hideCardTitle}>
            {t.hideParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <HideSeekStrategyDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.hideSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.hideCheckpoint.prompt}
            options={t.hideCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="alphastar" title={t.alphastarTitle} eyebrow={t.alphastarEyebrow}>
          <InfoCard title={t.alphastarCardTitle}>
            {t.alphastarParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.alphastarSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.alphastarCheckpoint.prompt}
            options={t.alphastarCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="summary" title={t.summaryTitle} eyebrow={t.summaryEyebrow}>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
            {t.summaryPoints.map((p) => (
              <li key={p}>{p}</li>
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
      "Compare video vs. board games for AI: complexity, partial observability, real-time decisions.",
      "Review reinforcement learning concepts and explore/exploit balance.",
      "Explain deep RL success on Atari (CNN + reward).",
      "Describe OpenAI hide-and-seek strategy evolution via self-play.",
      "Understand AlphaStar training (human data + self-play) and real-time strategy skills.",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "From boards to arenas",
    introText:
      "Video games demand perception + real-time decisions. Deep RL pairs neural nets with trial-and-error to master Atari, hide-and-seek, and StarCraft II.",
    compareTitle: "1. Video Games vs. Board Games",
    compareEyebrow: "Similar goals, tougher setting",
    compareCardTitle: "State/action + reward",
    compareParas: [
      "Both need policies mapping states to actions to maximize reward/win.",
      "Video games add fast-changing visuals, real-time control, uncertainty.",
    ],
    compareSteps: [
      "Identify shared structure (state, action, reward).",
      "List extra demands of video games (speed, partial info).",
      "Example: Breakout needs vision + trajectory prediction.",
    ],
    compareCheckpoint: {
      prompt: "A key difference for video games is…",
      options: [
        { label: "Real-time, visually rich states require fast decisions.", correct: true, explanation: "Time pressure + perception add difficulty." },
        { label: "They have no rewards.", correct: false, explanation: "Games still supply rewards/scores." },
      ],
    },
    rlTitle: "2. Reinforcement Learning Review",
    rlEyebrow: "Trial and reward",
    rlCardTitle: "Goal-driven learning",
    rlParas: [
      "RL optimizes behavior via interaction and delayed cumulative rewards.",
      "Balance exploration vs. exploitation (e.g., ε-greedy).",
      "No labeled data needed; strategies improve iteratively.",
    ],
    rlSteps: [
      "Define agent, environment, reward.",
      "Describe explore vs. exploit trade-off.",
      "Connect to games: repeated play improves policy.",
    ],
    rlCheckpoint: {
      prompt: "High exploitation, low exploration risk:",
      options: [
        { label: "Getting stuck in suboptimal strategies.", correct: true, explanation: "Without exploring, better policies stay hidden." },
        { label: "Instantly finding the optimal policy.", correct: false, explanation: "Exploration is needed to discover better actions." },
      ],
    },
    atariTitle: "3. Mastering Atari",
    atariEyebrow: "Deep RL",
    atariCardTitle: "CNN + reward signal",
    atariParas: [
      "DeepMind used CNNs to process screens and output joystick actions.",
      "Rewards came from game scores; training adjusted weights to maximize scores.",
      "Breakthrough: one architecture beat humans in many Atari games.",
    ],
    atariSteps: ["Explain CNN for vision input.", "Relate score to reward signal.", "Note generality across multiple games."],
    atariCheckpoint: {
      prompt: "In Atari deep RL, the reward is…",
      options: [
        { label: "The game score guiding weight updates.", correct: true, explanation: "Score signals success in the game." },
        { label: "Manual labels for each frame.", correct: false, explanation: "No frame labels are given." },
      ],
    },
    hideTitle: "4. Hide-and-Seek Strategy Evolution",
    hideEyebrow: "Self-play creativity",
    hideCardTitle: "Tool use emerges",
    hideParas: [
      "Agents trained with RL/self-play learned to build forts, stack boxes, climb, and counter each other.",
      "Showed emergent strategies and cooperation/competition.",
    ],
    hideSteps: [
      "Describe hide vs. seek goals.",
      "Note emergent tool use and co-evolution of strategies.",
      "Reflect on creativity from simple rewards.",
    ],
    hideCheckpoint: {
      prompt: "Emergent tool use arose because…",
      options: [
        { label: "Self-play pressure drove agents to find novel strategies.", correct: true, explanation: "Competition sparks creativity." },
        { label: "Humans scripted every move.", correct: false, explanation: "Policies were learned, not hand-coded." },
      ],
    },
    alphastarTitle: "5. AlphaStar",
    alphastarEyebrow: "Real-time strategy",
    alphastarCardTitle: "Human data + self-play",
    alphastarParas: [
      "Trained on human games, then massive self-play (equivalent to 200 years).",
      "Demonstrated macro strategy + micro control, coordinating many units.",
      "Reached 99.8% human level in StarCraft II ladder.",
    ],
    alphastarSteps: [
      "Explain supervised warm-start + self-play refinement.",
      "Note need for planning and real-time control.",
      "Mention multi-agent coordination significance.",
    ],
    alphastarCheckpoint: {
      prompt: "AlphaStar’s strength comes mainly from…",
      options: [
        { label: "Combining human data with extensive self-play RL.", correct: true, explanation: "Bootstraps from humans, then surpasses via self-play." },
        { label: "Hard-coded build orders only.", correct: false, explanation: "Strategies were learned, not fixed scripts." },
      ],
    },
    summaryTitle: "Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "Video games add real-time perception/action challenges beyond board games.",
      "Reinforcement learning learns from reward; deep nets supply perception/policy power.",
      "Atari breakthrough, hide-and-seek emergent strategies, and AlphaStar show deep RL’s adaptability.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "比较视频游戏与桌游的人机对抗特点（实时性、不确定性）。",
      "回顾强化学习与探索/利用平衡。",
      "理解深度强化学习在 Atari 上的突破（CNN + 奖励）。",
      "了解藏猫猫中策略/工具的自发演化。",
      "理解 AlphaStar 的训练方式及其实时战略能力。",
    ],
    introTitle: "开篇理解",
    introEyebrow: "从棋盘到竞技场",
    introText:
      "视频游戏要求感知+实时决策。深度强化学习结合神经网络与试错，在 Atari、藏猫猫、星际争霸 II 中展现了强大适应性。",
    compareTitle: "1. 视频游戏 vs. 桌游",
    compareEyebrow: "同构不同难度",
    compareCardTitle: "状态-动作-奖励",
    compareParas: [
      "两者都要学策略；视频游戏增加实时视觉、部分可观测、动作频繁。",
      "例如 Breakout 需视觉定位球拍/小球并快速预测轨迹。",
    ],
    compareSteps: ["写出共同点（状态/动作/奖励）。", "列出视频游戏的额外挑战。", "用 Breakout 举例。"],
    compareCheckpoint: {
      prompt: "视频游戏相对桌游的突出挑战是：",
      options: [
        { label: "需要实时、基于视觉的快速决策。", correct: true, explanation: "时间压力与感知增加难度。" },
        { label: "没有任何奖励。", correct: false, explanation: "仍然有分数/奖励信号。" },
      ],
    },
    rlTitle: "2. 强化学习回顾",
    rlEyebrow: "试错与奖励",
    rlCardTitle: "目标驱动学习",
    rlParas: [
      "通过与环境交互、延迟累积奖励来优化行为。",
      "探索与利用平衡（如 ε-greedy）。",
      "无需标注，通过反复试错改进策略。",
    ],
    rlSteps: ["定义智能体/环境/奖励。", "解释探索-利用取舍。", "联系游戏中反复练习。"],
    rlCheckpoint: {
      prompt: "探索过少的风险是：",
      options: [
        { label: "陷入次优策略。", correct: true, explanation: "不探索就可能错过更好策略。" },
        { label: "瞬间找到最优策略。", correct: false, explanation: "缺少探索难以提升。" },
      ],
    },
    atariTitle: "3. Atari 突破",
    atariEyebrow: "深度强化学习",
    atariCardTitle: "CNN + 奖励信号",
    atariParas: [
      "CNN 直接处理游戏画面输出手柄动作。",
      "屏幕分数作为奖励信号，训练权重以提高分数。",
      "同一架构在多款 Atari 游戏超越人类。",
    ],
    atariSteps: ["说明 CNN 处理视觉输入。", "联系分数与奖励。", "指出一套网络适配多游戏。"],
    atariCheckpoint: {
      prompt: "Atari 深度强化学习中的奖励是：",
      options: [
        { label: "游戏得分用于指导权重更新。", correct: true, explanation: "得分反映成功程度。" },
        { label: "对每一帧的人工作标。", correct: false, explanation: "无帧级标注。" },
      ],
    },
    hideTitle: "4. 藏猫猫策略演化",
    hideEyebrow: "自博弈创造力",
    hideCardTitle: "工具使用涌现",
    hideParas: [
      "自博弈训练学会筑墙、堆箱子、攀爬等攻防策略。",
      "展示了简单奖励下的策略共进化与合作/对抗。",
    ],
    hideSteps: ["描述藏与搜的目标。", "指出工具使用与共进化。", "思考简单奖励如何引出复杂行为。"],
    hideCheckpoint: {
      prompt: "工具使用出现的原因是：",
      options: [
        { label: "自博弈压力促使智能体发现新策略。", correct: true, explanation: "竞争驱动创新。" },
        { label: "人类逐步编写了所有动作。", correct: false, explanation: "策略由学习得出。" },
      ],
    },
    alphastarTitle: "5. AlphaStar",
    alphastarEyebrow: "实时策略",
    alphastarCardTitle: "人类数据 + 自博弈",
    alphastarParas: [
      "先用人类对局预训练，再通过大量自博弈强化（相当于 200 年游戏时长）。",
      "展现宏观战略与微操能力，协调大量单位。",
      "在星际争霸 II 天梯达到 99.8% 人类水平。",
    ],
    alphastarSteps: ["说明有监督预训练 + 自博弈强化。", "强调实时规划与控制需求。", "提到多智能体协同的重要性。"],
    alphastarCheckpoint: {
      prompt: "AlphaStar 的主要训练方式是：",
      options: [
        { label: "先学人类对局，再大量自博弈强化。", correct: true, explanation: "人类数据打底，自博弈超越。" },
        { label: "完全手写脚本。", correct: false, explanation: "策略由学习获得。" },
      ],
    },
    summaryTitle: "本节小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "视频游戏更强调实时感知与决策。",
      "强化学习靠奖励驱动策略，深度网络提供感知/决策能力。",
      "Atari、藏猫猫、AlphaStar 展示深度强化学习的适应力与创造性。",
    ],
  },
};
