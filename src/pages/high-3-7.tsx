import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { MCTSExplorerDemo } from "../demos/MCTSExplorerDemo";
import { PolicyValueFusionDemo } from "../demos/PolicyValueFusionDemo";
import { SelfPlayGrowthDemo } from "../demos/SelfPlayGrowthDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson3_7({ lang }: LessonProps) {
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
    { id: "challenge", label: isZh ? "1. 围棋的挑战" : "1. Challenge of Go" },
    { id: "mcts", label: isZh ? "2. 蒙特卡洛树搜索" : "2. Monte Carlo Tree Search" },
    { id: "networks", label: isZh ? "3. 策略网 + 价值网" : "3. Policy & Value Networks" },
    { id: "selfplay", label: isZh ? "4. 自我博弈与 AlphaGo Zero" : "4. Self-Play & AlphaGo Zero" },
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

        <SectionBlock id="challenge" title={t.challengeTitle} eyebrow={t.challengeEyebrow}>
          <InfoCard title={t.challengeCardTitle}>
            {t.challengeParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.challengeSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.challengeCheckpoint.prompt}
            options={t.challengeCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="mcts" title={t.mctsTitle} eyebrow={t.mctsEyebrow}>
          <InfoCard title={t.mctsCardTitle}>
            {t.mctsParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <MCTSExplorerDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.mctsSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.mctsCheckpoint.prompt}
            options={t.mctsCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="networks" title={t.networksTitle} eyebrow={t.networksEyebrow}>
          <InfoCard title={t.networksCardTitle}>
            {t.networksParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <PolicyValueFusionDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.networksSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.networksCheckpoint.prompt}
            options={t.networksCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="selfplay" title={t.selfplayTitle} eyebrow={t.selfplayEyebrow}>
          <InfoCard title={t.selfplayCardTitle}>
            {t.selfplayParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <SelfPlayGrowthDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.selfplaySteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.selfplayCheckpoint.prompt}
            options={t.selfplayCheckpoint.options}
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
      "Explain Go’s complexity vs. chess and why brute search fails.",
      "Describe MCTS steps and its role in Go-playing AI.",
      "Explain policy/value networks and how they combine with MCTS.",
      "Contrast supervised learning vs. self-play, and grasp AlphaGo Zero’s significance.",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "Go as AI’s big test",
    introText:
      "Go defeated classical search heuristics. AlphaGo combined MCTS, policy/value nets, and massive self-play, then AlphaGo Zero learned without human data.",
    challengeTitle: "1. Challenge of Go",
    challengeEyebrow: "Why Deep Blue tactics fail",
    challengeCardTitle: "Huge branching, hard evaluation",
    challengeParas: [
      "Go has 19x19 grid, massive branching; board evaluation is intuitive, not easily hand-coded.",
      "Alpha-Beta pruning needs good heuristics; without reliable evaluation, deep search collapses.",
    ],
    challengeSteps: [
      "Compare chess heuristics to Go complexity.",
      "Explain why evaluating Go positions is hard.",
      "Note why full search to game end is infeasible.",
    ],
    challengeCheckpoint: {
      prompt: "Why is Go harder for classic search?",
      options: [
        {
          label: "Branching is huge and position evaluation is hard to quantify.",
          correct: true,
          explanation: "No reliable heuristic → search/pruning ineffective.",
        },
        {
          label: "Go has fewer moves than chess.",
          correct: false,
          explanation: "Go has many more moves per turn.",
        },
      ],
    },
    mctsTitle: "2. Monte Carlo Tree Search",
    mctsEyebrow: "Simulate to estimate",
    mctsCardTitle: "Select · Expand · Simulate · Backprop",
    mctsParas: [
      "MCTS samples playouts instead of full expansion; uses win-rate statistics to guide growth.",
      "Repeated simulations approximate the best move by average win rate.",
    ],
    mctsSteps: [
      "Name the four steps of MCTS.",
      "Explain why partial sampling beats exhaustive search in Go.",
      "Relate win-rate stats to move selection.",
    ],
    mctsCheckpoint: {
      prompt: "Backpropagation in MCTS does what?",
      options: [
        {
          label: "Updates ancestor nodes with the simulation result.",
          correct: true,
          explanation: "Each simulation informs all nodes along the path.",
        },
        {
          label: "Deletes nodes with low scores.",
          correct: false,
          explanation: "Nodes are not deleted; stats are updated.",
        },
      ],
    },
    networksTitle: "3. Policy & Value Networks",
    networksEyebrow: "Neural guidance",
    networksCardTitle: "Priors + win-rate estimates",
    networksParas: [
      "Policy network: suggests promising moves (priors) before simulations.",
      "Value network: estimates win chance of a position, seeding node values.",
      "Fusion with MCTS: policy guides exploration; value reduces rollout cost.",
    ],
    networksSteps: [
      "Define policy vs. value network roles.",
      "Explain how priors and values plug into MCTS.",
      "Discuss why this pairing beats random rollouts alone.",
    ],
    networksCheckpoint: {
      prompt: "Policy network mainly provides…",
      options: [
        { label: "Prior probabilities over moves.", correct: true, explanation: "It biases MCTS toward good moves." },
        { label: "Final game scoring rules.", correct: false, explanation: "Scoring is external; policy gives move priors." },
      ],
    },
    selfplayTitle: "4. Self-Play & AlphaGo Zero",
    selfplayEyebrow: "From human data to zero human",
    selfplayCardTitle: "Learning by playing itself",
    selfplayParas: [
      "AlphaGo used human games + self-play; AlphaGo Zero removed human data and features.",
      "Self-play generates data, and the networks are retrained to match MCTS outcomes.",
      "Rapid Elo gain showed machines can surpass human knowledge in closed domains.",
    ],
    selfplaySteps: [
      "Compare supervised pretraining vs. pure self-play.",
      "Describe the self-play → train loop.",
      "State why AlphaGo Zero was a milestone.",
    ],
    selfplayCheckpoint: {
      prompt: "AlphaGo Zero’s key difference was…",
      options: [
        { label: "No human games/features; pure self-play learning.", correct: true, explanation: "It learned from scratch." },
        { label: "More handcrafted heuristics.", correct: false, explanation: "It removed human-designed features." },
      ],
    },
    summaryTitle: "Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "Go’s complexity breaks classic heuristic search.",
      "MCTS uses sampled playouts; policy/value nets guide it.",
      "Self-play plus deep nets unlocked superhuman Go; AlphaGo Zero proved pure self-learning works.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "说明围棋的复杂性与经典搜索失效的原因。",
      "掌握 MCTS 四步及其在围棋 AI 中的作用。",
      "理解策略网/价值网如何与 MCTS 结合。",
      "区分有监督训练与自我博弈，理解 AlphaGo Zero 的意义。",
    ],
    introTitle: "开篇理解",
    introEyebrow: "AI 的围棋战役",
    introText:
      "围棋击败了传统搜索。AlphaGo 融合 MCTS、策略/价值网络和大规模自我博弈；AlphaGo Zero 更进一步，完全靠自学。",
    challengeTitle: "1. 围棋的挑战",
    challengeEyebrow: "为什么 Deep Blue 思路失效",
    challengeCardTitle: "分支庞大，评估困难",
    challengeParas: [
      "19x19 棋盘、分支爆炸；局面评估依赖直觉，难以手写。",
      "Alpha-Beta 需要可靠估值；缺少好启发式时搜索失效。",
    ],
    challengeSteps: ["对比国际象棋启发式与围棋复杂度。", "解释围棋局面为何难量化。", "指出完全搜索不可行。"],
    challengeCheckpoint: {
      prompt: "围棋让经典搜索受挫的原因是：",
      options: [
        { label: "分支巨大且局面评估难量化。", correct: true, explanation: "无好估值，剪枝与搜索失效。" },
        { label: "围棋每步只有一手可下。", correct: false, explanation: "每步选择远多于一手。" },
      ],
    },
    mctsTitle: "2. 蒙特卡洛树搜索",
    mctsEyebrow: "模拟估计",
    mctsCardTitle: "选择-扩展-模拟-回传",
    mctsParas: [
      "MCTS 通过随机对局采样，而非全展开；用胜率统计指导扩展。",
      "多次模拟后，平均胜率最高的分支即为推荐落子。",
    ],
    mctsSteps: ["写出 MCTS 四步。", "说明采样为何优于穷举。", "联系胜率统计与落子选择。"],
    mctsCheckpoint: {
      prompt: "MCTS 的回传步骤作用是：",
      options: [
        { label: "把模拟结果更新到路径上的各节点。", correct: true, explanation: "整条路径共享一次模拟的奖励。" },
        { label: "删除低分节点。", correct: false, explanation: "更新统计，不是删除节点。" },
      ],
    },
    networksTitle: "3. 策略网 + 价值网",
    networksEyebrow: "神经引导",
    networksCardTitle: "先验 + 胜率估计",
    networksParas: [
      "策略网提供候选落子的先验概率。",
      "价值网估计局面胜率，为新节点提供初值。",
      "二者与 MCTS 结合：策略引导探索，价值降低随机模拟成本。",
    ],
    networksSteps: ["定义策略/价值网。", "说明如何与 MCTS 融合。", "解释为何比纯随机模拟更强。"],
    networksCheckpoint: {
      prompt: "策略网的主要作用是：",
      options: [
        { label: "提供落子先验概率，指导搜索。", correct: true, explanation: "先验让搜索聚焦好招。" },
        { label: "给出最终计分规则。", correct: false, explanation: "计分规则外部决定，策略网给先验。" },
      ],
    },
    selfplayTitle: "4. 自我博弈与 AlphaGo Zero",
    selfplayEyebrow: "从人类数据到零人类",
    selfplayCardTitle: "靠自我对弈学习",
    selfplayParas: [
      "AlphaGo 先用人类棋谱+自博弈；AlphaGo Zero 移除人类数据与手工特征。",
      "自博弈生成数据，网络再训练以拟合 MCTS 结果。",
      "快速 Elo 提升表明在封闭任务中机器可自行超越人类知识。",
    ],
    selfplaySteps: ["对比监督预训练与纯自博弈。", "描述自博弈→训练的循环。", "强调 AlphaGo Zero 的里程碑意义。"],
    selfplayCheckpoint: {
      prompt: "AlphaGo Zero 的关键变化是：",
      options: [
        { label: "去掉人类棋谱和手工特征，纯自博弈。", correct: true, explanation: "完全从零自学。" },
        { label: "增加更多人工规则。", correct: false, explanation: "恰恰去除了手工规则。" },
      ],
    },
    summaryTitle: "本节小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "围棋复杂度让传统搜索失效。",
      "MCTS 用模拟+统计选择好招，策略/价值网提供引导与评估。",
      "自我博弈+深度网络实现超越人类，AlphaGo Zero 展示纯自学潜力。",
    ],
  },
};
