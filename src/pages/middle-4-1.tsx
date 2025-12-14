import { useMemo, useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { MinimaxPruningDemo } from "../demos/MinimaxPruningDemo";
import { PolicyValueFusionDemo } from "../demos/PolicyValueFusionDemo";
import { ReinforcementStepDemo } from "../demos/ReinforcementStepDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson4_1({ lang }: LessonProps) {
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
    { id: "history", label: t.historyTitle },
    { id: "deepblue", label: t.deepblueTitle },
    { id: "alphago", label: t.alphagoTitle },
    { id: "overlord", label: t.overlordTitle },
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
          <p className="text-sm leading-relaxed text-slate-700">{t.intro}</p>
          <InfoCard title={t.introCardTitle}>
            <p className="text-sm text-slate-700">{t.introCard}</p>
          </InfoCard>
        </SectionBlock>

        <SectionBlock id="history" title={t.historyTitle} eyebrow={t.historyEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.historyIntro}</p>
          <GameTimeline lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.historySteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.historyCheckpoint.prompt}
            options={t.historyCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="deepblue" title={t.deepblueTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.deepblueIntro}</p>
          <MinimaxPruningDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.deepblueSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.deepblueCheckpoint.prompt}
            options={t.deepblueCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="alphago" title={t.alphagoTitle} eyebrow={t.alphagoEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.alphagoIntro}</p>
          <PolicyValueFusionDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.alphagoSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.alphagoCheckpoint.prompt}
            options={t.alphagoCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="overlord" title={t.overlordTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.overlordIntro}</p>
          <ReinforcementStepDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.overlordSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.overlordCheckpoint.prompt}
            options={t.overlordCheckpoint.options}
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

function GameTimeline({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const items = useMemo(
    () => [
      {
        year: "1950s",
        label: isZh ? "香农、麦卡锡讨论博弈算法" : "Shannon & McCarthy debate game search",
        detail: isZh
          ? "Alpha-Beta 思想出现，Samuel 机器跳棋自学数小时即可超越程序员。"
          : "Alpha-beta ideas surface; Samuel’s checkers program learns for hours to beat its coder.",
      },
      {
        year: "1997",
        label: isZh ? "深蓝击败卡斯帕罗夫" : "Deep Blue beats Kasparov",
        detail: isZh
          ? "定深搜索+剪枝+棋力库展示“计算力+人类知识”模式。"
          : "Fixed-depth search + pruning + opening/endgame books—compute + human knowledge.",
      },
      {
        year: "2016",
        label: isZh ? "AlphaGo 战胜李世石" : "AlphaGo vs. Lee Sedol",
        detail: isZh
          ? "卷积网络评估局面，MCTS+自博弈训练，探索复杂围棋形势。"
          : "Conv nets judge boards; MCTS + self-play training tackles Go’s vast states.",
      },
      {
        year: "2019",
        label: isZh ? "AlphaStar、OpenAI Five" : "AlphaStar & OpenAI Five",
        detail: isZh
          ? "实时策略、多人协作也被攻克，展示通用决策与大规模训练。"
          : "Real-time strategy and teamwork conquered—showcasing general decision-making at scale.",
      },
    ],
    [isZh],
  );
  const [current, setCurrent] = useState(items[0]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
          {isZh ? "博弈里程碑" : "Game milestones"}
        </p>
        <button
          type="button"
          onClick={() => setCurrent(items[0])}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
        >
          {isZh ? "重置" : "Reset"}
        </button>
      </div>
      <div className="mt-3 grid gap-2 md:grid-cols-4">
        {items.map((item) => (
          <button
            key={item.year}
            type="button"
            onClick={() => setCurrent(item)}
            className={[
              "rounded-xl border px-3 py-2 text-left text-sm font-semibold transition",
              current.year === item.year
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-200 bg-white hover:border-slate-300",
            ].join(" ")}
          >
            <span className="block text-xs text-brand-200/90">{item.year}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
      <div className="mt-3 rounded-xl border border-slate-100 bg-slate-50 p-3 text-sm text-slate-800">
        {current.detail}
      </div>
    </div>
  );
}

const content = {
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解棋类、电子游戏中的 AI 关键突破与里程碑",
      "理解搜索、剪枝、自博弈等策略优化方法",
      "思考游戏为何能驱动 AI 技术进步及其外溢影响",
    ],
    introTitle: "导入",
    introEyebrow: "博弈与智能",
    intro: "从图灵手算象棋程序到 AlphaStar 统治电子竞技，棋类与游戏一直是人工智能最好的“试炼场”。",
    introCardTitle: "为什么从游戏起步？",
    introCard: "规则清晰、反馈即时、胜负可量化，让算法进步可被快速检验并复用到更复杂场景。",
    historyTitle: "1. 历史上的人机对决",
    historyEyebrow: "早期探索",
    historyIntro:
      "1950 年代起，麦卡锡、香农把博弈视为检验“会思考”机器的窗口。Samuel 让跳棋程序自学数小时击败作者，显示机器学习潜力。",
    historySteps: [
      "回顾麦卡锡、香农在达特茅斯会议前后的游戏思考。",
      "观察 Samuel 跳棋的自学习得与突破。",
      "理解游戏成绩如何激发对智能的信心。",
    ],
    historyCheckpoint: {
      prompt: "Samuel 跳棋的意义是什么？",
      options: [
        { label: "证明机器能靠学习提升棋力", correct: true, explanation: "短时自学就超越作者，展示学习提升能力。" },
        { label: "说明硬件比算法更重要", correct: false, explanation: "硬件重要，但突破来自学习策略与评价函数。" },
        { label: "表明搜索越深越好", correct: false, explanation: "跳棋强调评估与学习，不只是盲目加深搜索。" },
        { label: "展示强化学习必然失败", correct: false, explanation: "相反，它显示学习可以有效。"},
      ],
    },
    deepblueTitle: "2. 深蓝与象棋",
    deepblueIntro:
      "1997 年，IBM 深蓝以极小化极大 + α-β 剪枝、开局库和评估函数击败世界冠军卡斯帕罗夫，彰显“计算力 + 人类棋谱”范式。",
    deepblueSteps: [
      "假设对手理性，搜索自己获益最大的分支（极小化极大）。",
      "用 α-β 剪枝跳过必输分支，提高效率。",
      "配合开局库/残局库，减少盲搜成本。",
    ],
    deepblueCheckpoint: {
      prompt: "α-β 剪枝带来的核心收益是？",
      options: [
        { label: "找到全新规则", correct: false, explanation: "规则未变，只是搜索策略改进。" },
        { label: "减少无效分支，节省计算", correct: true, explanation: "剪枝跳过不影响结果的分支，搜索更快。" },
        { label: "让棋盘更小", correct: false, explanation: "棋盘未变，是算法效率提升。" },
        { label: "保证零错误", correct: false, explanation: "仍依赖估值与深度，不能绝对无错。" },
      ],
    },
    alphagoTitle: "3. AlphaGo 与围棋",
    alphagoEyebrow: "深度网络 + MCTS",
    alphagoIntro:
      "围棋状态空间巨大，传统枚举无效。AlphaGo 用卷积网络评估局面，策略/价值网络与蒙特卡洛树搜索结合，再通过自我博弈快速迭代，2016 年击败李世石。",
    alphagoSteps: [
      "策略网提供先验走子概率，缩小搜索重点。",
      "价值网评估局面胜率，避免深搜浪费。",
      "自博弈生成新数据，迭代提升（AlphaGo Zero 更彻底）。",
    ],
    alphagoCheckpoint: {
      prompt: "AlphaGo 为什么要同时使用策略网和价值网？",
      options: [
        { label: "策略网负责选子，价值网估胜率，互补指导搜索", correct: true, explanation: "先验+评估双保险，让搜索聚焦高价值分支。" },
        { label: "因为只能用两个网络", correct: false, explanation: "并非数量限制，而是功能分工。" },
        { label: "为了减少棋盘大小", correct: false, explanation: "棋盘不变，重点是评估与引导。" },
        { label: "让人类更容易下棋", correct: false, explanation: "目标是提升 AI 棋力，自然也给人类启发。"},
      ],
    },
    overlordTitle: "4. 游戏霸主：从棋盘到实时战场",
    overlordIntro:
      "Atari、德州扑克、Dota2、星际争霸等开放、不完美信息或实时对战中，AI 依靠深度强化学习、长时间自博弈与大规模模拟，学会观察、规划、协同，能力外溢到交易、机器人、战术推演。",
    overlordSteps: [
      "区分完全信息棋类与不完全信息/实时游戏的挑战。",
      "理解强化学习中的“探索-利用”权衡。",
      "思考自博弈、模拟平台如何支撑复杂决策。"
    ],
    overlordCheckpoint: {
      prompt: "在复杂实时游戏里，为什么需要“探索-利用”平衡？",
      options: [
        { label: "避免一直重复同一套路，错过更优策略", correct: true, explanation: "探索可发现新策略，利用确保现有收益，两者需折中。" },
        { label: "因为规则经常改变", correct: false, explanation: "即便规则稳定也需平衡，以免陷入局部最优。" },
        { label: "为了减小棋盘", correct: false, explanation: "平衡针对策略空间，而非棋盘大小。" },
        { label: "只为增加随机性让人类赢", correct: false, explanation: "目标是提升 AI，随机只是探索手段。" },
      ],
    },
    summaryTitle: "5. 小结",
    summaryPoints: [
      "游戏是验证智能的天然实验室：规则清晰、反馈即时、胜负可量化。",
      "深蓝代表“搜索+人类知识”，AlphaGo 代表“深度学习+自博弈”。",
      "从棋盘到电竞，AI 展现通用决策与学习能力，技术已外溢到科研、工业与安全领域。",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Review milestones where AI mastered board and video games",
      "Understand search, pruning, and self-play strategy optimization",
      "Consider why games accelerate AI progress and how capabilities transfer",
    ],
    introTitle: "Overview",
    introEyebrow: "Games as testbeds",
    intro: "From Turing’s hand-simulated chess to AlphaStar conquering esports, games have been AI’s favorite proving ground.",
    introCardTitle: "Why start with games?",
    introCard:
      "Clear rules, immediate feedback, and measurable wins make progress visible—and transferable to harder domains.",
    historyTitle: "1. Historic Showdowns",
    historyEyebrow: "Early sparks",
    historyIntro:
      "In the 1950s, McCarthy and Shannon treated games as a window into “thinking machines.” Samuel’s checkers program learned for hours and beat its author, hinting at machine learning’s promise.",
    historySteps: [
      "Recall McCarthy/Shannon’s pre-Dartmouth game discussions.",
      "See how Samuel’s self-learning checkers surprised its creator.",
      "Connect game wins to rising confidence in machine intelligence.",
    ],
    historyCheckpoint: {
      prompt: "Why was Samuel’s checkers result important?",
      options: [
        { label: "It proved learning could raise playing strength", correct: true, explanation: "Few hours of self-learning surpassed the programmer—learning works." },
        { label: "It showed hardware beats algorithms", correct: false, explanation: "Hardware mattered, but the gain came from learning and evaluation." },
        { label: "It meant deeper search always wins", correct: false, explanation: "It was about learned evaluation, not just search depth." },
        { label: "It proved RL will always fail", correct: false, explanation: "It actually supported learning-based success." },
      ],
    },
    deepblueTitle: "2. Deep Blue and Chess",
    deepblueIntro:
      "In 1997, IBM’s Deep Blue beat world champion Garry Kasparov using minimax + alpha-beta pruning, opening/endgame books, and strong evaluation—“compute + human knowledge” at scale.",
    deepblueSteps: [
      "Assume a rational opponent; pick moves maximizing your outcome (minimax).",
      "Use alpha-beta pruning to skip branches that cannot change the result.",
      "Rely on curated openings/endgames to reduce blind search.",
    ],
    deepblueCheckpoint: {
      prompt: "Main benefit of alpha-beta pruning?",
      options: [
        { label: "It invents new chess rules", correct: false, explanation: "Rules stay the same; search gets smarter." },
        { label: "It cuts useless branches to save compute", correct: true, explanation: "Pruning skips branches that can’t affect the best move." },
        { label: "It makes the board smaller", correct: false, explanation: "Board unchanged; efficiency improved." },
        { label: "It guarantees zero mistakes", correct: false, explanation: "Quality still depends on depth and evaluation." },
      ],
    },
    alphagoTitle: "3. AlphaGo and Go",
    alphagoEyebrow: "Deep nets + MCTS",
    alphagoIntro:
      "Go’s vast state space foiled brute force. AlphaGo used convolutional nets to read boards, blended policy/value nets with Monte Carlo Tree Search, and trained via self-play—defeating Lee Sedol in 2016.",
    alphagoSteps: [
      "Policy net gives prior move probabilities to focus search.",
      "Value net estimates win rate to avoid wasting deep searches.",
      "Self-play generates fresh data for rapid iteration (even stronger in AlphaGo Zero).",
    ],
    alphagoCheckpoint: {
      prompt: "Why combine policy and value networks?",
      options: [
        { label: "Policy guides moves, value scores positions—together steering search", correct: true, explanation: "Priors plus win estimates sharpen MCTS focus." },
        { label: "Because only two nets are allowed", correct: false, explanation: "It’s a design choice, not a rule limit." },
        { label: "To shrink the board", correct: false, explanation: "Board size is fixed; evaluation changes." },
        { label: "To make Go easier for humans", correct: false, explanation: "Goal is strong AI; humans benefit indirectly." },
      ],
    },
    overlordTitle: "4. Game Overlord: Beyond Boards",
    overlordIntro:
      "Atari, poker, Dota2, and StarCraft pushed AI into partial information, real-time, and teamwork. Deep RL, massive simulation, and self-play taught agents to observe, plan, and coordinate—techniques spilling into trading, robotics, and tactical planning.",
    overlordSteps: [
      "Contrast perfect-information boards with messy, real-time or hidden-info games.",
      "See the explore–exploit trade-off in reinforcement learning.",
      "Consider how simulators and self-play fuel complex decision skills.",
    ],
    overlordCheckpoint: {
      prompt: "Why balance exploration and exploitation in complex games?",
      options: [
        { label: "To avoid repeating one tactic and miss better ones", correct: true, explanation: "Exploration finds new strategies; exploitation secures current wins." },
        { label: "Because rules keep changing", correct: false, explanation: "Even with fixed rules, balance prevents local optima." },
        { label: "To shrink the board", correct: false, explanation: "It’s about strategy space, not board size." },
        { label: "Only to let humans win sometimes", correct: false, explanation: "Randomness aids learning, not human victories." },
      ],
    },
    summaryTitle: "5. Summary",
    summaryPoints: [
      "Games are natural labs for intelligence: clear rules, fast feedback, measurable outcomes.",
      "Deep Blue embodied “search + human knowledge”; AlphaGo added “deep learning + self-play.”",
      "From boards to esports, AI shows general decision power, with spillover to science, industry, and safety.",
    ],
  },
};
