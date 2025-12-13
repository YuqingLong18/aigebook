import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { FluidCrystalDemo } from "../demos/FluidCrystalDemo";
import { HeuristicSearchDemo } from "../demos/HeuristicSearchDemo";
import { MinimaxPruningDemo } from "../demos/MinimaxPruningDemo";
import { ProductionRuleDemo } from "../demos/ProductionRuleDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson2_1({ lang }: LessonProps) {
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
    { id: "intelligence", label: isZh ? "1. 知识与智力" : "1. Knowledge & Intelligence" },
    { id: "general-ai", label: isZh ? "2. 基于通用知识的 AI" : "2. General-Knowledge AI" },
    { id: "games", label: isZh ? "人机博弈" : "Game Playing" },
    { id: "limits", label: isZh ? "局限性" : "Limitations" },
    { id: "empirical", label: isZh ? "3. 基于经验知识的 AI" : "3. Empirical-Knowledge AI" },
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

        <SectionBlock id="intelligence" title={t.intelTitle} eyebrow={t.intelEyebrow}>
          <InfoCard title={t.fluidTitle}>
            {t.fluidParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <InfoCard title={t.crystalTitle}>
            {t.crystalParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <FluidCrystalDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.intelSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.intelCheckpoint.prompt}
            options={t.intelCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="general-ai" title={t.generalTitle} eyebrow={t.generalEyebrow}>
          <InfoCard title={t.theoremTitle}>
            {t.theoremParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <HeuristicSearchDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.theoremSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.theoremCheckpoint.prompt}
            options={t.theoremCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="games" title={t.gamesTitle} eyebrow={t.gamesEyebrow}>
          <InfoCard title={t.minimaxTitle}>
            {t.minimaxParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <MinimaxPruningDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.gamesSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.gamesCheckpoint.prompt}
            options={t.gamesCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="limits" title={t.limitsTitle}>
          <InfoCard title={t.limitCardTitle}>
            {t.limitParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.limitSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.limitCheckpoint.prompt}
            options={t.limitCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="empirical" title={t.empiricalTitle} eyebrow={t.empiricalEyebrow}>
          <InfoCard title={t.productionTitle}>
            {t.productionParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <ProductionRuleDemo lang={lang} />
          <InfoCard title={t.expertTitle}>
            <p>{t.expertText}</p>
          </InfoCard>
          <InfoCard title={t.kgTitle}>
            <p>{t.kgText}</p>
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.empiricalSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.empiricalCheckpoint.prompt}
            options={t.empiricalCheckpoint.options}
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
      "Understand fluid intelligence vs. crystallized intelligence and how knowledge supports human intelligence.",
      "Explain general-knowledge-based AI: theorem proving, game playing, heuristic search, minimax, and alpha-beta pruning.",
      "Explain empirical-knowledge-based AI: production rules, expert systems, and knowledge graphs.",
      "Analyze strengths and limits of knowledge-based AI in building knowledge bases, inference efficiency, and scope.",
    ],
    openingTitle: "Opening Idea",
    openingEyebrow: "Introduction",
    openingText:
      "Knowledge-based AI tries to fill a machine with human knowledge so it can reason. Early AI explored two routes: general knowledge (axioms and rules) and empirical knowledge (experience from practice).",
    intelTitle: "1. Knowledge and Intelligence",
    intelEyebrow: "Fluid vs. crystallized",
    fluidTitle: "Fluid intelligence",
    fluidParas: [
      "Fluid intelligence covers fast comprehension, learning, and solving new problems. It often peaks in youth and then declines.",
    ],
    crystalTitle: "Crystallized intelligence",
    crystalParas: [
      "Crystallized intelligence is accumulated knowledge and the ability to apply experience. It grows with learning and practice.",
      "Human civilization’s leap beyond other species comes largely from collective knowledge. Teaching machines knowledge is the core of knowledge-based AI.",
    ],
    intelSteps: [
      "Compare how age and study intensity change fluid vs. crystallized abilities.",
      "Note that knowledge accumulation can compensate for declining fluid skills.",
      "Relate to AI: knowledge bases act like crystallized intelligence for machines.",
    ],
    intelCheckpoint: {
      prompt: "Which statement best matches fluid vs. crystallized intelligence?",
      options: [
        {
          label: "Fluid solves new problems; crystallized applies accumulated knowledge.",
          correct: true,
          explanation: "That mirrors the definitions: new-problem ability vs. stored knowledge use.",
        },
        {
          label: "Both decline steadily after adolescence.",
          correct: false,
          explanation: "Crystallized intelligence usually grows with experience.",
        },
        {
          label: "Both depend purely on speed of thinking.",
          correct: false,
          explanation: "Crystallized relies on knowledge, not just speed.",
        },
      ],
    },
    generalTitle: "2. General-Knowledge-Based AI",
    generalEyebrow: "Axioms + rules",
    theoremTitle: "Automated theorem proving",
    theoremParas: [
      "Early systems like Logic Theorist used axioms and reasoning rules to derive theorems. The process is essentially a search over reasoning states.",
      "Heuristic search estimates which path is closer to the goal theorem, expanding promising nodes first to save time.",
    ],
    theoremSteps: [
      "Treat known facts as start nodes and the target theorem as goal.",
      "Rank candidate steps with a heuristic (similarity to goal).",
      "Expand the best nodes first; compare forward vs. backward reasoning when possible.",
    ],
    theoremCheckpoint: {
      prompt: "Why was heuristic search added to theorem proving?",
      options: [
        {
          label: "To estimate promising reasoning paths and cut search cost.",
          correct: true,
          explanation: "Heuristics prioritize paths likely to reach the target faster.",
        },
        {
          label: "To replace axioms with neural networks.",
          correct: false,
          explanation: "Heuristics guide search; axioms stay the logical basis.",
        },
        {
          label: "To guarantee no branch is ever missed.",
          correct: false,
          explanation: "Heuristics trade completeness for efficiency; they do not guarantee no misses.",
        },
      ],
    },
    gamesTitle: "Man–Machine Game Playing",
    gamesEyebrow: "Minimax and pruning",
    minimaxTitle: "Minimax + alpha-beta",
    minimaxParas: [
      "Minimax assumes the opponent plays optimally; we pick the move that maximizes our outcome under that assumption.",
      "Alpha-beta pruning skips branches that cannot affect the final choice, keeping the same optimal move with fewer node visits.",
    ],
    gamesSteps: [
      "Score leaf nodes as win/lose/score.",
      "Propagate min and max values upward layer by layer.",
      "Apply alpha-beta bounds to prune branches that cannot beat current bests.",
    ],
    gamesCheckpoint: {
      prompt: "What does alpha-beta pruning change compared with plain minimax?",
      options: [
        {
          label: "It keeps the same best move but prunes branches that cannot change the outcome.",
          correct: true,
          explanation: "Pruning improves efficiency without altering the optimal decision.",
        },
        {
          label: "It changes the scoring function of leaves.",
          correct: false,
          explanation: "Leaf evaluation stays the same; only search order/width changes.",
        },
        {
          label: "It forces the search to look deeper than minimax.",
          correct: false,
          explanation: "Depth is unchanged; pruning trims the width.",
        },
      ],
    },
    limitsTitle: "Limits of General Knowledge",
    limitCardTitle: "Why axioms alone are not enough",
    limitParas: [
      "General laws are powerful but often too coarse; deriving real-world phenomena can be computationally prohibitive (e.g., protein properties from physics).",
      "The world has domain-specific rules, multi-scale emergent patterns, and uncertainty—beyond what basic axioms capture.",
    ],
    limitSteps: [
      "Identify when a problem is closed and rule-based (suitable for axioms).",
      "Check if domain rules or emergent effects dominate real outcomes.",
      "Decide whether to combine data-driven evidence instead of pure deduction.",
    ],
    limitCheckpoint: {
      prompt: "Why can theorem proving succeed while weather prediction via Newtonian laws alone fails?",
      options: [
        {
          label: "Theorem proving is closed and near the axioms; weather is open and uncertain.",
          correct: true,
          explanation: "Closed systems align with axioms; open systems add uncertainty and scale issues.",
        },
        {
          label: "Weather has no underlying physics.",
          correct: false,
          explanation: "Weather follows physics but is complex and chaotic.",
        },
        {
          label: "Theorem proving uses more data than weather.",
          correct: false,
          explanation: "It relies on axioms, not larger datasets.",
        },
      ],
    },
    empiricalTitle: "3. Empirical-Knowledge-Based AI",
    empiricalEyebrow: "Rules from experience",
    productionTitle: "Production rules",
    productionParas: [
      "Empirical knowledge is often expressed as if–then rules, chained to form reasoning sequences.",
      "These rules encode observations like weather patterns or diagnostic cues.",
    ],
    expertTitle: "Expert systems",
    expertText:
      "Expert systems combine a knowledge base and an inference engine so computers can reason like human specialists across domains such as medicine, chemistry, and law.",
    kgTitle: "Knowledge graphs",
    kgText:
      "Knowledge graphs store entities and relations as nodes and edges, enabling structured queries like “Who painted the Mona Lisa?” or “Where is it housed?”.",
    empiricalSteps: [
      "Express observations as production rules and chain them.",
      "Use inference engines to fire rules and produce conclusions.",
      "Maintain and update knowledge bases to keep systems reliable.",
    ],
    empiricalCheckpoint: {
      prompt: "What is a core advantage of knowledge graphs in knowledge-based AI?",
      options: [
        {
          label: "They organize entities and relations for efficient querying and reasoning.",
          correct: true,
          explanation: "Graphs make connections explicit, improving retrieval and inference.",
        },
        {
          label: "They remove the need for any expert knowledge.",
          correct: false,
          explanation: "Graphs still rely on curated or learned knowledge.",
        },
        {
          label: "They guarantee zero maintenance cost.",
          correct: false,
          explanation: "Graphs still require updates and curation.",
        },
      ],
    },
    summaryTitle: "Section Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "Knowledge-based AI fills machines with human knowledge to reason; it mirrors crystallized intelligence.",
      "General-knowledge AI shines in closed, rule-heavy tasks (theorem proving, games) and uses heuristics, minimax, and alpha-beta pruning.",
      "Empirical-knowledge AI uses production rules, expert systems, and knowledge graphs to tackle real-world specificity.",
      "Limitations include costly knowledge construction, inference efficiency, and difficulty covering open, uncertain realities.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解流体智力与晶体智力的差异，明确知识在智能形成中的作用。",
      "了解基于通用知识的 AI：定理证明、人机博弈、启发式搜索、极小化极大与 α-β 剪枝。",
      "掌握基于经验知识的 AI：产生式规则、专家系统与知识图谱。",
      "分析知识型 AI 在知识库构建、推理效率与适用范围方面的优势与局限。",
    ],
    openingTitle: "开篇理解",
    openingEyebrow: "引子",
    openingText:
      "知识型 AI 的思路是把人类知识装进机器并让其推理。早期 AI 主要探索两条路径：一是基于通用知识（公理和规则），二是基于经验知识（实践积累的规则）。",
    intelTitle: "1. 知识与智力",
    intelEyebrow: "流体 vs. 晶体",
    fluidTitle: "流体智力",
    fluidParas: ["流体智力是快速理解、学习和解决新问题的能力，通常在年轻时达到峰值，之后逐步下降。"],
    crystalTitle: "晶体智力",
    crystalParas: [
      "晶体智力是积累的知识与经验迁移能力，会随着学习与实践不断增长。",
      "人类文明远超其他物种，核心在于集体知识的积累。让机器拥有知识是知识型 AI 的核心。",
    ],
    intelSteps: [
      "比较年龄与学习强度对两类智力的影响。",
      "注意知识积累能弥补流体能力下降。",
      "对应到 AI：知识库是机器的“晶体智力”。",
    ],
    intelCheckpoint: {
      prompt: "哪句话正确描述了流体智力与晶体智力？",
      options: [
        {
          label: "流体智力解决新问题，晶体智力调用已有知识。",
          correct: true,
          explanation: "这与定义一致：新问题能力 vs. 知识应用。",
        },
        {
          label: "两者都会在青春期后快速下降。",
          correct: false,
          explanation: "晶体智力通常随经验增加而提升。",
        },
        {
          label: "两者只由思维速度决定。",
          correct: false,
          explanation: "晶体智力依赖知识积累，而非纯速度。",
        },
      ],
    },
    generalTitle: "2. 基于通用知识的 AI",
    generalEyebrow: "公理与规则",
    theoremTitle: "自动定理证明",
    theoremParas: [
      "早期系统（如 Logic Theorist）利用公理和推理规则逐步推出定理，本质是对推理状态的搜索。",
      "启发式搜索估计离目标定理更近的路径，优先展开以减少时间开销。",
    ],
    theoremSteps: ["将已知事实视为起点、目标定理视为终点。", "用启发式度量当前状态与目标的相似度。", "优先展开高分节点，可结合正向或逆向推理。"],
    theoremCheckpoint: {
      prompt: "为何在定理证明中引入启发式搜索？",
      options: [
        {
          label: "估计更优路径以降低搜索成本。",
          correct: true,
          explanation: "启发式能优先探索更可能成功的分支。",
        },
        {
          label: "用来用神经网络替代公理。",
          correct: false,
          explanation: "启发式只指导搜索，公理仍是逻辑基础。",
        },
        {
          label: "保证不会遗漏任何分支。",
          correct: false,
          explanation: "启发式强调效率，未必遍历所有分支。",
        },
      ],
    },
    gamesTitle: "人机博弈",
    gamesEyebrow: "极小化极大与剪枝",
    minimaxTitle: "极小化极大 + α-β 剪枝",
    minimaxParas: [
      "极小化极大假设对手最优，选择在最坏情况下仍能最大化己方收益的落子。",
      "α-β 剪枝在不改变最优解的前提下，剪去不可能改变结果的分支，显著减少节点访问。",
    ],
    gamesSteps: ["先评估叶子节点的胜负/得分。", "逐层向上传播最小值与最大值。", "用 α、β 上下界剪掉不可能超越当前最优的分支。"],
    gamesCheckpoint: {
      prompt: "α-β 剪枝相对纯极小化极大带来了什么？",
      options: [
        {
          label: "保持最优决策不变，同时剪去无关分支。",
          correct: true,
          explanation: "剪枝提升效率，最优解不变。",
        },
        {
          label: "改变了叶子打分方式。",
          correct: false,
          explanation: "叶子打分不变，变化的是搜索宽度。",
        },
        {
          label: "强制搜索更深的层数。",
          correct: false,
          explanation: "剪枝主要减少宽度，深度不变。",
        },
      ],
    },
    limitsTitle: "通用知识的局限",
    limitCardTitle: "为何公理并非万能",
    limitParas: [
      "通用规律高度抽象，推导真实现象往往计算量巨大（如从物理推蛋白性质）。",
      "现实存在领域规则、多尺度新涌现与不确定性，超出基础公理的直接覆盖范围。",
    ],
    limitSteps: ["判断任务是否封闭、规则清晰。", "识别领域特有规则或涌现效应是否主导。", "评估是否需结合数据驱动证据，而非纯推理。"],
    limitCheckpoint: {
      prompt: "为何定理证明能成功，而仅用牛顿力学预测天气却困难？",
      options: [
        {
          label: "定理证明是封闭系统，天气是开放且不确定的复杂系统。",
          correct: true,
          explanation: "封闭系统贴近公理，开放系统包含混沌与尺度挑战。",
        },
        {
          label: "天气没有物理规律支撑。",
          correct: false,
          explanation: "天气有物理规律，但复杂度与不确定性高。",
        },
        {
          label: "定理证明用了更多数据。",
          correct: false,
          explanation: "定理证明依赖公理，不靠大量数据。",
        },
      ],
    },
    empiricalTitle: "3. 基于经验知识的 AI",
    empiricalEyebrow: "经验规则",
    productionTitle: "产生式规则",
    productionParas: ["经验知识常用 if-then 形式表达，并通过链式推理串联。", "这些规则刻画了如天气模式或诊断线索等现实观察。"],
    expertTitle: "专家系统",
    expertText:
      "专家系统将知识库与推理机结合，让计算机在医学、化学、法律等领域像专家一样推理决策。",
    kgTitle: "知识图谱",
    kgText: "知识图谱用节点和边表达实体与关系，可结构化回答“谁画了蒙娜丽莎、藏于何处”等问题。",
    empiricalSteps: ["把观察转成产生式并链式组合。", "用推理机触发规则得到结论。", "维护和更新知识库以保持可靠性。"],
    empiricalCheckpoint: {
      prompt: "知识图谱在知识型 AI 中的核心优势是什么？",
      options: [
        {
          label: "用实体与关系的图结构提升查询与推理效率。",
          correct: true,
          explanation: "图让连接关系显式化，便于检索与多跳推理。",
        },
        {
          label: "完全不需要任何专家知识。",
          correct: false,
          explanation: "图谱仍依赖人工或自动化的知识录入。",
        },
        {
          label: "维护成本为零。",
          correct: false,
          explanation: "图谱需要持续更新与维护。",
        },
      ],
    },
    summaryTitle: "本节小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "知识型 AI 把人类知识灌入机器并推理，类似机器的“晶体智力”。",
      "基于通用知识的 AI 适合封闭、规则明确的任务，借助启发式、极小化极大和 α-β 剪枝提升效率。",
      "基于经验知识的 AI 依赖产生式、专家系统与知识图谱处理具体领域问题。",
      "局限在于知识库构建昂贵、推理效率和开放复杂环境下的适用性有限。",
    ],
  },
};
