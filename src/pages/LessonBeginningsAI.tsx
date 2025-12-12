import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { SectionBlock } from "../components/SectionBlock";

type LessonBeginningsAIProps = {
  lang: "en" | "zh";
};

export function LessonBeginningsAI({ lang }: LessonBeginningsAIProps) {
  const isZh = lang === "zh";
  const ui = {
    reset: isZh ? "重置" : "Reset",
    checkpointTag: isZh ? "检查点" : "Checkpoint",
    correctLabel: isZh ? "正确" : "Correct",
    incorrectLabel: isZh ? "再试一次" : "Check again",
    guidedTitle: isZh ? "引导步骤" : "Guided Steps",
  };
  const t = content[lang];

  return (
    <div className="space-y-6">
      <SectionBlock title={t.learningObjectivesTitle}>
        <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
          {t.learningObjectives.map((obj) => (
            <li key={obj}>{obj}</li>
          ))}
        </ul>
      </SectionBlock>

      <SectionBlock title={t.introTitle} eyebrow={t.introEyebrow}>
        <p className="text-sm leading-relaxed text-slate-700">{t.intro}</p>
      </SectionBlock>

      <SectionBlock title={t.riseTitle} eyebrow={t.riseEyebrow}>
        <InfoCard title={t.riseCardTitle}>
          {t.riseParas.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </InfoCard>
        <EarlyMilestones lang={lang} />
        <GuidedSteps title={ui.guidedTitle} steps={t.riseSteps} />
        <Checkpoint
          tagLabel={ui.checkpointTag}
          prompt={t.riseCheckpoint.prompt}
          options={t.riseCheckpoint.options}
          resetLabel={ui.reset}
          correctLabel={ui.correctLabel}
          incorrectLabel={ui.incorrectLabel}
        />
      </SectionBlock>

      <SectionBlock title={t.dartmouthTitle} eyebrow={t.dartmouthEyebrow}>
        {t.dartmouthParas.map((para) => (
          <p key={para} className="text-sm leading-relaxed text-slate-700">
            {para}
          </p>
        ))}
        <DartmouthTopics lang={lang} />
        <GuidedSteps title={ui.guidedTitle} steps={t.dartmouthSteps} />
        <Checkpoint
          tagLabel={ui.checkpointTag}
          prompt={t.dartmouthCheckpoint.prompt}
          options={t.dartmouthCheckpoint.options}
          resetLabel={ui.reset}
          correctLabel={ui.correctLabel}
          incorrectLabel={ui.incorrectLabel}
        />
      </SectionBlock>

      <SectionBlock title={t.summaryTitle} eyebrow={t.summaryEyebrow}>
        <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
          {t.summaryPoints.map((pt) => (
            <li key={pt}>{pt}</li>
          ))}
        </ul>
      </SectionBlock>
    </div>
  );
}

type EarlyMilestonesProps = { lang: "en" | "zh" };

function EarlyMilestones({ lang }: EarlyMilestonesProps) {
  const isZh = lang === "zh";
  const items =
    lang === "zh"
      ? [
          {
            title: "Shannon 的博弈算法（1950）",
            desc: "深入分析 MinMax 并提出改进方案，为计算机博弈奠定基础。",
          },
          {
            title: "Logic Theorist（1955）",
            desc: "使用树搜索和推理规则，证明《数学原理》前 52 条定理中的 38 条。",
          },
          {
            title: "SNARC 神经网络（1951）",
            desc: "Minsky 设计的 40 个“突触模块”网络，基于反馈进行学习。",
          },
        ]
      : [
          {
            title: "Shannon’s Game Algorithms (1950)",
            desc: "Analyzed MinMax and optimizations, seeding computer game-playing.",
          },
          {
            title: "Logic Theorist (1955)",
            desc: "Tree search with inference rules; proved 38 of the first 52 Principia theorems.",
          },
          {
            title: "SNARC Neural Network (1951)",
            desc: "Minsky’s 40-synapse network trained with operator feedback.",
          },
        ];

  return (
    <div className="grid gap-3 md:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm ring-1 ring-slate-100"
        >
          <p className="text-sm font-semibold text-slate-900">{item.title}</p>
          <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

type DartmouthTopicsProps = { lang: "en" | "zh" };

function DartmouthTopics({ lang }: DartmouthTopicsProps) {
  const isZh = lang === "zh";
  const topics =
    lang === "zh"
      ? [
          "如何编程？",
          "理解并使用自然语言",
          "用神经网络表征概念",
          "计算效率与复杂度",
          "机器如何自我改进",
          "对象的抽象表示",
          "随机性与创造力",
        ]
      : [
          "How to program a computer?",
          "Understanding and using natural language",
          "Neural networks to represent concepts",
          "Defining computational efficiency and complexity",
          "How machines improve themselves",
          "Abstract representations of objects",
          "Incorporating randomness and creativity",
        ];

  return (
    <div className="rounded-2xl border border-dashed border-brand-200 bg-brand-50/60 p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
        {isZh ? "达特茅斯会议讨论的核心问题" : "Core Questions at the Dartmouth Conference"}
      </p>
      <div className="mt-2 grid gap-2 md:grid-cols-2">
        {topics.map((topic) => (
          <div
            key={topic}
            className="rounded-xl border border-brand-100 bg-white px-3 py-2 text-sm text-slate-800"
          >
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand early AI research areas: game-playing algorithms, theorem proving, and early neural networks.",
      "Recognize the historical significance of the Dartmouth Conference in shaping AI.",
      "Reflect on the role of academic exchange and interdisciplinary collaboration in AI progress.",
    ],
    introTitle: "The spark ignites",
    introEyebrow: "Context",
    intro:
      "In 1956, two years after Turing’s passing, young scientists met at Dartmouth College and formally launched artificial intelligence as a field. This lesson traces the pioneering work that led to AI’s birth.",
    riseTitle: "1. The Rise",
    riseEyebrow: "Early breakthroughs",
    riseCardTitle: "Computing power + logic → new ideas",
    riseParas: [
      "With general-purpose computers newly invented and mathematical logic advancing, the vision of simulating human thought on machines captured researchers’ imagination.",
      "Key early achievements included Shannon’s game-playing algorithms, Simon and Newell’s Logic Theorist, and Minsky’s SNARC neural network.",
    ],
    riseSteps: [
      "Explore Shannon’s game algorithms and why chess/Go were chosen as intelligence tests.",
      "See how Logic Theorist used tree search and inference rules to prove theorems.",
      "Review SNARC as an early neural network trained via feedback.",
    ],
    riseCheckpoint: {
      prompt: "Which trio best represents early AI work before Dartmouth?",
      options: [
        {
          label: "Shannon’s game algorithms, Logic Theorist, SNARC neural network",
          correct: true,
          explanation: "These three are canonical early AI milestones cited in the text.",
        },
        {
          label: "Backpropagation, transformers, GANs",
          correct: false,
          explanation: "These are modern methods, not early 1950s work.",
        },
        {
          label: "AlphaGo, AlphaFold, GPT",
          correct: false,
          explanation: "These are recent systems, not the era discussed here.",
        },
      ],
    },
    dartmouthTitle: "2. The Dartmouth Conference: The Birth of AI",
    dartmouthEyebrow: "Field-defining meeting",
    dartmouthParas: [
      "In 1955, McCarthy, Shannon, Minsky, and Rochester proposed a two-month seminar that coined “artificial intelligence.” The conference ran in summer 1956, blending talks with open brainstorming.",
      "Topics ranged from programming and natural language to neural networks, complexity, self-improving machines, abstraction, and creativity—directions that shaped decades of AI research.",
      "Attendees like Simon, Newell, Samuel, Solomonoff, Nash, and others later produced major AI advances (e.g., LISP, machine perception, machine learning, Bayesian reasoning).",
      "The meeting established AI’s name, scope, and methods, marking AI’s entry onto the historical stage and highlighting the value of open, interdisciplinary exchange.",
    ],
    dartmouthSteps: [
      "Scan the core questions posed at Dartmouth (programming, language, networks, complexity, self-improvement, abstraction, randomness).",
      "Connect each question to later AI subfields (e.g., NLP, search/complexity, neural nets).",
      "Reflect on how open dialogue enabled breakthroughs across disciplines.",
    ],
    dartmouthCheckpoint: {
      prompt: "What made the Dartmouth Conference historically decisive?",
      options: [
        {
          label: "It coined “artificial intelligence” and set broad research questions that guided decades of work.",
          correct: true,
          explanation: "The meeting defined the term and charted core directions for the new field.",
        },
        {
          label: "It produced backpropagation during the meeting itself.",
          correct: false,
          explanation: "Backpropagation emerged later; Dartmouth focused on foundational questions.",
        },
        {
          label: "It limited AI research strictly to theorem proving.",
          correct: false,
          explanation: "The agenda was wide-ranging, not constrained to a single topic.",
        },
      ],
    },
    summaryTitle: "Section Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "Early AI combined computation and logic, producing game-playing algorithms, theorem provers, and early neural networks.",
      "The Dartmouth Conference named AI and set research directions (language, neural nets, complexity, self-improvement, abstraction).",
      "Open, interdisciplinary exchange was crucial to the field’s birth and growth.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解早期 AI 研究内容与方法：博弈算法、定理证明、早期神经网络。",
      "认识达特茅斯会议在人工智能领域形成中的历史意义。",
      "反思学术交流与跨学科合作在科学进步中的重要性，理解其如何促进 AI 发展。",
    ],
    introTitle: "火种被点燃",
    introEyebrow: "背景",
    intro:
      "1956 年，在图灵逝世两年后，年轻科学家们在达特茅斯学院聚会，正式开启人工智能这一新领域。本课回顾催生 AI 诞生的先驱工作。",
    riseTitle: "1. 崛起",
    riseEyebrow: "早期突破",
    riseCardTitle: "计算力 + 逻辑 → 新思想",
    riseParas: [
      "通用计算机刚被发明，数理逻辑进展迅速，“用机器模拟思维”的愿景激发了研究热情。",
      "代表性成果包括 Shannon 的博弈算法、Simon/Newell 的 Logic Theorist、Minsky 的 SNARC 神经网络。",
    ],
    riseSteps: [
      "了解 Shannon 的博弈算法，以及为何选择棋类作为智能测试。",
      "看 Logic Theorist 如何用树搜索与推理规则证明定理。",
      "回顾 SNARC 作为基于反馈训练的早期神经网络。",
    ],
    riseCheckpoint: {
      prompt: "以下哪组三个代表达特茅斯前的早期 AI 工作？",
      options: [
        {
          label: "Shannon 的博弈算法、Logic Theorist、SNARC 神经网络",
          correct: true,
          explanation: "这三个是文本提到的经典早期里程碑。",
        },
        {
          label: "反向传播、transformer、GAN",
          correct: false,
          explanation: "这些是现代方法，不是 1950 年代初期工作。",
        },
        {
          label: "AlphaGo、AlphaFold、GPT",
          correct: false,
          explanation: "这些是近期系统，与本课时代不符。",
        },
      ],
    },
    dartmouthTitle: "2. 达特茅斯会议：AI 的诞生",
    dartmouthEyebrow: "奠基会议",
    dartmouthParas: [
      "1955 年，McCarthy、Shannon、Minsky、Rochester 提出两个月研讨，首次提出“人工智能”概念。会议于 1956 年夏天举行，结合报告与开放讨论。",
      "议题涵盖编程、自然语言、神经网络、复杂度、自我改进、抽象与创造力等，影响后续数十年的 AI 研究方向。",
      "与会者如 Simon、Newell、Samuel、Solomonoff、Nash 等，此后贡献了 LISP、机器感知、机器学习、贝叶斯推理等突破。",
      "会议确立了 AI 的名称、范围和方法，也凸显了开放、跨学科交流对新兴领域的重要性。",
    ],
    dartmouthSteps: [
      "浏览会议提出的核心问题（编程、语言、网络、复杂度、自改进、抽象、随机性）。",
      "将问题与后续子领域对应（如 NLP、搜索与复杂度、神经网络等）。",
      "思考开放对话如何促成跨学科突破。",
    ],
    dartmouthCheckpoint: {
      prompt: "是什么使达特茅斯会议成为历史性转折？",
      options: [
        {
          label: "首次提出“人工智能”并设置广泛研究问题，引导后续发展。",
          correct: true,
          explanation: "会议命名了 AI 并确定了核心方向。",
        },
        {
          label: "会议现场就发明了反向传播。",
          correct: false,
          explanation: "反向传播出现更晚，会议聚焦基础议题。",
        },
        {
          label: "把 AI 研究严格限定在定理证明。",
          correct: false,
          explanation: "议题非常广泛，不限于单一主题。",
        },
      ],
    },
    summaryTitle: "本节小结",
    summaryEyebrow: "关键要点",
    summaryPoints: [
      "早期 AI 融合计算与逻辑，产生博弈算法、定理证明、早期神经网络等成果。",
      "达特茅斯会议命名 AI 并设定研究方向（语言、神经网络、复杂度、自改进、抽象等）。",
      "开放、跨学科交流对新领域的诞生和成长至关重要。",
    ],
  },
};
