import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { CounterexampleFinderDemo } from "../demos/CounterexampleFinderDemo";
import { RamanujanMachineToyDemo } from "../demos/RamanujanMachineToyDemo";
import { ToyTheoremProverDemo } from "../demos/ToyTheoremProverDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson4_1({ lang }: LessonProps) {
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
    { id: "theorem-proving", label: isZh ? "1. 数学定理证明" : "1. Mathematical Theorem Proving" },
    { id: "disproving", label: isZh ? "2. 猜想证伪" : "2. Disproving Conjectures" },
    { id: "conjecture-generation", label: isZh ? "3. 生成新猜想" : "3. Generating Conjectures" },
    { id: "knowledge-discovery", label: isZh ? "4. 知识发现" : "4. Knowledge Discovery" },
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
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
            {t.introAreas.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </SectionBlock>

        <SectionBlock id="theorem-proving" title={t.tpTitle} eyebrow={t.tpEyebrow}>
          <InfoCard title={t.tpEarlyTitle}>
            {t.tpEarlyParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <ToyTheoremProverDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.tpSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.tpCheckpoint.prompt}
            options={t.tpCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />

          <div className="mt-4 space-y-4">
            <InfoCard title={t.tpFourColorTitle}>
              {t.tpFourColorParas.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </InfoCard>
            <InfoCard title={t.tpAlphaGeoTitle}>
              {t.tpAlphaGeoParas.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </InfoCard>
          </div>
        </SectionBlock>

        <SectionBlock id="disproving" title={t.disTitle} eyebrow={t.disEyebrow}>
          <InfoCard title={t.disCardTitle}>
            {t.disParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <CounterexampleFinderDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.disSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.disCheckpoint.prompt}
            options={t.disCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="conjecture-generation" title={t.cgTitle} eyebrow={t.cgEyebrow}>
          <InfoCard title={t.cgHistoryTitle}>
            {t.cgHistoryParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <InfoCard title={t.cgRamanujanTitle}>
            {t.cgRamanujanParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <RamanujanMachineToyDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.cgSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.cgCheckpoint.prompt}
            options={t.cgCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="knowledge-discovery" title={t.kdTitle} eyebrow={t.kdEyebrow}>
          <InfoCard title={t.kdCardTitle}>
            {t.kdParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.kdSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.kdCheckpoint.prompt}
            options={t.kdCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700">
            {t.kdTakeaways.map((x) => (
              <li key={x}>{x}</li>
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
      "Understand the intrinsic connection between artificial intelligence and mathematics, and how AI can support mathematical research by improving the efficiency of mathematical discovery and verification.",
      "Grasp the basic ideas of machine theorem proving, and learn about representative cases such as the “Logic Theorist,” the Four Color Theorem proof, and AlphaGeometry, along with their impact on mathematics.",
      "Understand the basic principles of disproving mathematical conjectures, analyze the AutoGraphiX case, and learn how machine learning is used to generate and filter counterexamples for efficient conjecture verification.",
      "Understand how AI generates new mathematical conjectures, recognize the core mechanism of the Ramanujan Machine, and appreciate its value in creative mathematical research.",
      "Understand the cyclical process of mathematical knowledge discovery (generating conjectures → proof or disproof → accumulating knowledge), and explore the role and prospects of AI in mathematical research.",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "AI + mathematics",
    introText:
      "Artificial intelligence and mathematics are naturally and closely linked. AI originated from mathematical analyses of human cognition, and AI progress has become a powerful tool for mathematicians—improving efficiency and inspiring new directions.",
    introAreas: ["Theorem proving", "Conjecture disproving (counterexamples)", "Conjecture generation"],

    tpTitle: "1. Mathematical Theorem Proving",
    tpEyebrow: "Rules · inference · search",
    tpEarlyTitle: "1) Early Achievements",
    tpEarlyParas: [
      "Machine-based theorem proving made notable progress from the very birth of AI. In 1954, Martin Davis at the Institute for Advanced Study (Princeton) developed the first theorem-proving program on an electronic computer named JOHNNIAC. It proved a simple statement: “The sum of two even numbers is still even.”",
      "In 1956, Allen Newell and Herbert Simon developed the “Logic Theorist” to prove theorems. Mimicking how humans solve math problems, it breaks complex problems into simpler sub-problems and solves them step-by-step using known theorems, axioms, and rules of inference.",
      "The Logic Theorist combined forward reasoning (deducing conclusions from known premises) with heuristic search (using domain knowledge to narrow the search space) and successfully proved 38 out of 52 theorems in Chapter 2 of Principia Mathematica by Russell and Whitehead.",
    ],
    tpSteps: [
      "Treat “proving” as deriving a goal from axioms using inference rules.",
      "Compare uninformed search vs heuristic search by expanded nodes.",
      "Connect the idea to Logic Theorist: rules + heuristics to narrow search.",
    ],
    tpCheckpoint: {
      prompt: "Why did the Logic Theorist combine heuristic search with reasoning?",
      options: [
        {
          label: "To narrow the search space and reach proofs with fewer expansions.",
          correct: true,
          explanation: "Heuristics prioritize promising branches, reducing wasted exploration.",
        },
        {
          label: "Because proofs do not need axioms or inference rules.",
          correct: false,
          explanation: "The Logic Theorist still relies on axioms and rules; heuristics guide the search.",
        },
      ],
    },
    tpFourColorTitle: "2) Classic Case: The Four Color Theorem",
    tpFourColorParas: [
      "Some theorems seem simple but involve extremely complex cases, making manual proofs unfeasible. Computers, with their speed and precision, can greatly assist mathematicians with these theorems.",
      "The Four Color Conjecture states: “Any map can be colored using four colors such that no adjacent regions share the same color” (see Figure 4-1). Proposed in 1852 by British cartographer Francis Guthrie, it resisted proof for more than a century.",
      "In 1976, Kenneth Appel and Wolfgang Haken proved it using computers: 1,200 hours of computations on two computers, 10 billion logical inferences, confirming the conjecture and elevating it to the Four Color Theorem—a milestone in computer-assisted proof.",
    ],
    tpAlphaGeoTitle: "3) Recent Advancement: AlphaGeometry",
    tpAlphaGeoParas: [
      "In 2024, DeepMind published AlphaGeometry in Nature. AlphaGeometry combines a neural language model with a symbolic reasoning engine: the language model provides fast, intuitive suggestions, while the symbolic engine handles rigorous logical reasoning.",
      "For example (Figure 4-2), when a proof reaches an impasse, the language model suggests adding an auxiliary line AD to help the reasoning engine proceed. After extensive training, AlphaGeometry can efficiently identify potential solutions to geometry problems.",
      "On IMO geometry benchmarks, AlphaGeometry solved 25 out of 30 problems, close to the average score (25.9) of human gold medalists—showing AI has reached a comparable level in geometric theorem proving.",
    ],

    disTitle: "2. Disproving Conjectures",
    disEyebrow: "Counterexamples · learning-guided search",
    disCardTitle: "Why disproof suits computers",
    disParas: [
      "Mathematical conjectures are unproven statements proposed based on observation or intuition. A conjecture can be proved or disproved: proof is difficult because it requires showing that no counterexamples exist; disproof is relatively easier because it requires only a single counterexample.",
      "Brute-force searching isn’t enough for complex problems. Scientists introduced machine learning to generate more challenging counterexamples, greatly enhancing disproof efficiency—generate candidates, filter the most “dangerous” ones, retrain the generator, and iterate (Figure 4-3).",
      "Case: the AutoGraphiX Conjecture (Wagner 2021): for a graph G with n nodes, f = λ₁ + μ ≥ √(n − 1) + 1. A neural network generates graphs {Gᵢ}; compute f; keep graphs with smaller f-values as dangerous samples; retrain; iterate. Eventually, for n ≥ 19, a counterexample was discovered (disproving it). For n ≤ 18, no counterexamples were found, suggesting it might hold there.",
      "As shown in Figure 4-4 (n = 19), graphs that split into two clusters are more likely to become counterexamples—machines can efficiently test conjectures and inspire new lines of thinking.",
    ],
    disSteps: [
      "State why a single counterexample is enough to disprove a conjecture.",
      "Run “generate → evaluate → keep dangerous → update” to focus search.",
      "Relate the “two clusters” pattern to where counterexamples concentrate.",
    ],
    disCheckpoint: {
      prompt: "Why is disproving often easier than proving a conjecture?",
      options: [
        {
          label: "Disproof needs only one counterexample; proof must rule out all counterexamples.",
          correct: true,
          explanation: "A single violating case disproves; proving requires universal coverage.",
        },
        {
          label: "Disproof never requires computation.",
          correct: false,
          explanation: "Disproof can still be hard; computers help by searching large spaces.",
        },
      ],
    },

    cgTitle: "3. Generating New Mathematical Conjectures",
    cgEyebrow: "Patterns · creativity · “guess then prove”",
    cgHistoryTitle: "1) Famous Conjectures in History",
    cgHistoryParas: [
      "Many famous conjectures have fueled progress and inspired generations. Two examples are Goldbach’s Conjecture and Fermat’s Last Theorem.",
      "Goldbach’s Conjecture (1742): “Every even number greater than 2 can be expressed as the sum of two prime numbers.” It remains unproven, though confirmed for even numbers below 4×10¹⁸. In 1973, Chen Jingrun proved that every sufficiently large even number can be written as the sum of a prime and a semiprime (the “1+2 Theorem,” or Chen’s Theorem).",
      "Fermat’s Last Theorem (1637): no integer solutions to aⁿ + bⁿ = cⁿ for n > 2. After more than 300 years, Andrew Wiles proved it in 1994.",
    ],
    cgRamanujanTitle: "2) The Ramanujan Machine",
    cgRamanujanParas: [
      "Formulating conjectures traditionally required deep expertise and keen insight. With the advancement of AI, machines have begun to demonstrate the ability to generate conjectures. The Ramanujan Machine is a prime example.",
      "In 2020, a team from Israel published the Ramanujan Machine in Nature. Named after Srinivasa Ramanujan, it targets mathematical constants like π and e and searches for expressions that match them.",
      "It represents constants as continued fractions, tweaks parameters to generate many candidates, evaluates them, and compares them to known constant values. If sufficiently close, the expression becomes a new conjecture candidate—still requiring proof. The machine has produced intriguing conjectures, inviting mathematicians to prove them.",
    ],
    cgSteps: [
      "Separate “generate a conjecture” from “prove a conjecture”.",
      "Use closeness to a known constant as a signal to keep candidates.",
      "Explain why “very close” is not the same as “true”.",
    ],
    cgCheckpoint: {
      prompt: "What makes a Ramanujan Machine output a conjecture candidate?",
      options: [
        {
          label: "An expression that matches a target constant closely enough to be worth proving.",
          correct: true,
          explanation: "It filters candidates by numerical closeness, then mathematicians attempt proof.",
        },
        {
          label: "A proof that guarantees the expression is true.",
          correct: false,
          explanation: "The output is a conjecture candidate; proof is separate.",
        },
      ],
    },

    kdTitle: "4. Knowledge Discovery",
    kdEyebrow: "Generate → prove/disprove → accumulate",
    kdCardTitle: "A loop of mathematical discovery",
    kdParas: [
      "The generation and validation of conjectures (including proof and disproof) form a complete loop of knowledge discovery. Conjecture generation aims to extract potential patterns from data, while validation rigorously tests those patterns.",
      "This cycle is not only the established path of mathematical exploration but also a fundamental way humans accumulate scientific knowledge.",
      "AI’s mathematical exploration mirrors this process. Through self-learning, self-induction, and self-verification, AI demonstrates knowledge discovery capabilities—especially for large datasets and complex conditions—rapidly generating and verifying conjectures. This autonomous knowledge acquisition may become a key direction in future AI development.",
    ],
    kdSteps: [
      "Name the three phases: conjecture generation, proof/disproof, knowledge accumulation.",
      "Place theorem proving and counterexample search into the loop.",
      "Describe what AI contributes: speed, scale, and suggestion of promising directions.",
    ],
    kdCheckpoint: {
      prompt: "In the knowledge discovery loop, what does “validation” mean?",
      options: [
        {
          label: "Proving or disproving the conjecture rigorously.",
          correct: true,
          explanation: "Validation tests whether the proposed pattern actually holds.",
        },
        {
          label: "Only making the conjecture look plausible.",
          correct: false,
          explanation: "Plausibility is not enough; validation requires proof or a counterexample.",
        },
      ],
    },
    kdTakeaways: [
      "Theorem proving turns “proof” into inference rules + search.",
      "Disproof can be accelerated by learning-guided counterexample generation and filtering.",
      "Conjecture generation can be automated to produce proof-worthy leads, but proof remains essential.",
      "Mathematics progresses through a loop: generate conjectures → prove/disprove → accumulate knowledge.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解人工智能与数学之间的内在联系，以及 AI 如何通过提升数学发现与验证效率来支持数学研究。",
      "掌握机器定理证明的基本思想，了解“Logic Theorist”、四色定理证明、AlphaGeometry 等代表性案例及其对数学的影响。",
      "理解数学猜想证伪的基本原理，分析 AutoGraphiX 案例，了解如何用机器学习生成并筛选反例，从而高效验证猜想。",
      "理解 AI 如何生成新的数学猜想，认识 Ramanujan Machine 的核心机制，并体会其在创造性数学研究中的价值。",
      "理解数学知识发现的循环过程（生成猜想 → 证明或证伪 → 积累知识），探究 AI 在数学研究中的作用与前景。",
    ],
    introTitle: "开篇理解",
    introEyebrow: "AI + 数学",
    introText:
      "人工智能与数学天然紧密相连。AI 的核心思想——用计算模拟人类思维——源自对人类认知的数学分析；反过来，AI 的进步也成为数学家的有力工具，不仅提升效率，还启发新的研究方向。",
    introAreas: ["定理证明", "猜想证伪（反例）", "猜想生成"],

    tpTitle: "1. 数学定理证明",
    tpEyebrow: "规则 · 推理 · 搜索",
    tpEarlyTitle: "1) 早期成果",
    tpEarlyParas: [
      "机器定理证明在 AI 诞生之初就取得了进展。1954 年，普林斯顿高等研究院的 Martin Davis 在电子计算机 JOHNNIAC 上开发了最早的定理证明程序，证明了一个简单命题：“两个偶数之和仍是偶数”。",
      "1956 年，Allen Newell 与 Herbert Simon 开发了 “Logic Theorist” 程序。它模仿人类解题方式，把复杂问题拆成子问题，并用已知定理、公理与推理规则逐步求解。",
      "Logic Theorist 结合了前向推理（由已知前提推出结论）与启发式搜索（用领域知识缩小搜索空间），成功证明了 Russell 与 Whitehead 的《Principia Mathematica》第 2 章 52 条定理中的 38 条。",
    ],
    tpSteps: [
      "把“证明”理解为：从公理出发，依据推理规则推出目标结论。",
      "对比无启发式搜索与启发式搜索在展开节点数上的差异。",
      "把体验与 Logic Theorist 对应：规则推导 + 启发式缩小搜索空间。",
    ],
    tpCheckpoint: {
      prompt: "为什么 Logic Theorist 要把启发式搜索与推理结合？",
      options: [
        {
          label: "用启发式缩小搜索空间，更快到达证明。",
          correct: true,
          explanation: "启发式优先探索更有希望的分支，减少无效展开。",
        },
        {
          label: "因为证明不需要公理或推理规则。",
          correct: false,
          explanation: "它仍依赖公理与规则；启发式只是在搜索中起“导航”作用。",
        },
      ],
    },
    tpFourColorTitle: "2) 经典案例：四色定理",
    tpFourColorParas: [
      "有些定理看起来简单，却涉及极其复杂的分类讨论，人工证明难以完成。计算机凭借速度与精确性，可以极大地辅助这类定理的证明。",
      "四色猜想指出：“任意地图都能用四种颜色着色，使相邻区域颜色不同”（见图 4-1）。它由英国制图师 Francis Guthrie 于 1852 年提出，此后一个多世纪都未被证明。",
      "1976 年，Kenneth Appel 与 Wolfgang Haken 借助计算机完成证明：两台计算机运行 1200 小时，做出 100 亿次逻辑推断，最终确认猜想成立，成为四色定理，成为计算机辅助证明的里程碑。",
    ],
    tpAlphaGeoTitle: "3) 近期进展：AlphaGeometry",
    tpAlphaGeoParas: [
      "2024 年，DeepMind 在 Nature 发表 AlphaGeometry。它把神经语言模型与符号推理引擎结合：语言模型提供快速直觉式建议，符号引擎负责严格逻辑推理。",
      "例如（图 4-2），当证明陷入僵局时，语言模型建议添加辅助线 AD，帮助推理引擎继续推进。经过大量训练，AlphaGeometry 能高效找到几何题的潜在解法。",
      "在 IMO 几何题基准测试中，AlphaGeometry 解决了 30 题中的 25 题，接近人类金牌选手平均分 25.9，显示 AI 在几何定理证明上已达到顶尖水平。",
    ],

    disTitle: "2. 猜想证伪",
    disEyebrow: "反例 · 学习引导搜索",
    disCardTitle: "为什么证伪适合计算机",
    disParas: [
      "数学猜想是基于观察或直觉提出、尚未证明的命题。猜想要么被证明，要么被证伪：证明困难在于必须说明“没有任何反例”；证伪相对更容易，因为只需要找到一个反例即可。",
      "仅靠暴力搜索往往不够。研究者引入机器学习来生成更“有威胁”的反例：生成候选 → 计算指标 → 筛选最危险样本 → 反向更新生成器，循环迭代（图 4-3）。",
      "案例：AutoGraphiX 猜想（Wagner 2021）：对含 n 个节点的图 G，有 f = λ₁ + μ ≥ √(n − 1) + 1。用神经网络生成图 {Gᵢ}，计算 f 值，保留 f 更小的“危险样本”再训练网络。最终在 n ≥ 19 时发现反例，从而证伪；在 n ≤ 18 时未找到反例，提示其可能在这些情形成立。",
      "如图 4-4（n = 19）所示，多轮迭代得到的最小 f 图往往呈现“两团簇”结构，机器在验证猜想的同时也能启发数学家新的思路。",
    ],
    disSteps: [
      "解释为什么“一个反例”就足以证伪。",
      "用“生成→筛选→再训练”让搜索更集中在危险区域。",
      "把“两团簇”现象理解为反例更可能出现的结构特征。",
    ],
    disCheckpoint: {
      prompt: "为什么猜想证伪通常比证明更容易？",
      options: [
        {
          label: "证伪只需要一个反例；证明需要排除所有反例。",
          correct: true,
          explanation: "找到一个违反命题的例子就可否定；证明需要“对所有情况成立”。",
        },
        {
          label: "证伪从不需要计算。",
          correct: false,
          explanation: "证伪也可能很难；计算机的价值在于高效搜索与筛选。",
        },
      ],
    },

    cgTitle: "3. 生成新猜想",
    cgEyebrow: "模式 · 创造 · “先猜后证”",
    cgHistoryTitle: "1) 历史上的著名猜想",
    cgHistoryParas: [
      "历史上许多著名猜想推动了数学发展，激励了一代又一代数学家。两个典型例子是哥德巴赫猜想与费马大定理。",
      "哥德巴赫猜想（1742）： “任一大于 2 的偶数都可表示为两个素数之和”。至今未被证明，但已对 4×10¹⁸ 以内的偶数验证成立。1973 年，陈景润证明：任一充分大的偶数都可表示为“一个素数 + 一个半素数”（两个素数乘积），即著名的“1+2 定理”（陈氏定理）。",
      "费马大定理（1637）：当 n > 2 时，aⁿ + bⁿ = cⁿ 无整数解。历经 300 多年，Andrew Wiles 于 1994 年完成证明。",
    ],
    cgRamanujanTitle: "2) Ramanujan Machine",
    cgRamanujanParas: [
      "提出猜想往往需要深厚的知识与敏锐的洞察力，传统上属于少数顶尖数学家的工作。但随着 AI 发展，机器开始展示生成数学猜想的能力，Ramanujan Machine 是代表。",
      "2020 年，以色列团队在 Nature 发表 Ramanujan Machine，命名取自 Srinivasa Ramanujan。它面向 π、e 等数学常数，尝试寻找能够表达这些常数的式子。",
      "它把常数表示成连分数形式，不断调整参数生成大量候选表达式，计算并与已知常数值比较；若足够接近，就作为新的猜想候选——但仍需进一步证明。它已产生多条有趣猜想，邀请数学家尝试证明。",
    ],
    cgSteps: [
      "区分“生成猜想”与“证明猜想”。",
      "把“数值上足够接近”当作保留候选的信号。",
      "说明为什么“很接近”不等于“已经被证明”。",
    ],
    cgCheckpoint: {
      prompt: "Ramanujan Machine 产出的“猜想候选”是什么含义？",
      options: [
        {
          label: "数值上与目标常数足够接近、值得数学家去证明的表达式。",
          correct: true,
          explanation: "它用“接近度”筛选线索，真正的证明仍由数学家完成。",
        },
        {
          label: "已经保证为真的严格证明。",
          correct: false,
          explanation: "输出是猜想候选，不等同于证明。",
        },
      ],
    },

    kdTitle: "4. 知识发现",
    kdEyebrow: "生成 → 证明/证伪 → 积累",
    kdCardTitle: "数学知识发现的循环",
    kdParas: [
      "数学猜想的生成与验证（包括证明与证伪）构成完整的知识发现闭环。生成侧强调从数据/现象中提取潜在规律，验证侧强调对规律进行严格检验。",
      "这一循环不仅是数学探索的常规路径，也是人类积累科学知识的重要方式。",
      "AI 的数学探索与这一过程高度相似。通过自学习、自归纳与自验证，AI 展现出知识发现能力；在大数据与复杂条件问题上，计算能力使其能更快生成并验证猜想。这种自主知识获取可能成为未来 AI 的关键发展方向。",
    ],
    kdSteps: [
      "说出三阶段：生成猜想、证明/证伪、积累知识。",
      "把“定理证明”与“反例搜索”放入这一闭环中。",
      "总结 AI 的贡献：规模、速度，以及对“值得探索方向”的提示。",
    ],
    kdCheckpoint: {
      prompt: "在知识发现循环中，“验证”指什么？",
      options: [
        {
          label: "对猜想进行严格的证明或证伪。",
          correct: true,
          explanation: "验证要回答“是否真的成立”，需要证明或反例。",
        },
        {
          label: "让猜想看起来更有道理。",
          correct: false,
          explanation: "合理并不等于成立；验证必须严格。",
        },
      ],
    },
    kdTakeaways: [
      "定理证明把“证明”转化为推理规则与搜索问题。",
      "证伪可通过学习引导的反例生成与筛选显著加速。",
      "猜想生成可以自动化地产生“值得证明的线索”，但证明仍不可替代。",
      "数学知识通过“生成猜想 → 证明/证伪 → 积累”不断进步。",
    ],
  },
} as const;

