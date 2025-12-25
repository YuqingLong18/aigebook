import { useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { FigureCard } from "../components/FigureCard";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { AIImpactBalanceDemo } from "../demos/AIImpactBalanceDemo";
import { ControlRiskDemo } from "../demos/ControlRiskDemo";

type LessonProps = {
  lang: "en" | "zh";
};

type CapabilityLevel = {
  key: string;
  label: string;
  detail: string;
  example: string;
};

export function PrimaryLesson7_10({ lang }: LessonProps) {
  const isZh = lang === "zh";
  const ui = {
    reset: isZh ? "重置" : "Reset",
    checkpointTag: isZh ? "小测" : "Checkpoint",
    correctLabel: isZh ? "答对啦" : "Correct",
    incorrectLabel: isZh ? "再想想" : "Try again",
    guidedTitle: isZh ? "一起做" : "Try it",
  };

  const t = content[lang];
  const toc = [
    { id: "learning-objectives", label: t.learningObjectivesTitle },
    { id: "intro", label: t.introTitle },
    { id: "agent", label: t.agentTitle },
    { id: "risks", label: t.risksTitle },
    { id: "food", label: t.foodTitle },
    { id: "history", label: t.historyTitle },
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
          <p className="text-sm leading-relaxed text-slate-700">{t.introText}</p>
        </SectionBlock>

        <SectionBlock id="agent" title={t.agentTitle} eyebrow={t.agentEyebrow}>
          <InfoCard title={t.agentConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.agentConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.agentParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <div className="grid gap-3 md:grid-cols-2">
            {t.agentFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <CapabilityLadderDemo
            lang={lang}
            title={t.agentDemo.title}
            goal={t.agentDemo.goal}
            resetLabel={ui.reset}
            levels={t.agentDemo.levels}
            labels={t.agentDemo.labels}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.agentSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.agentCheckpoint.prompt}
            options={t.agentCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="risks" title={t.risksTitle} eyebrow={t.risksEyebrow}>
          <InfoCard title={t.risksConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.risksConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.risksParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.risksFigure.label}
            caption={t.risksFigure.caption}
            placeholder={t.risksFigure.placeholder}
          />
          <ControlRiskDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.risksSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.risksCheckpoint.prompt}
            options={t.risksCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="food" title={t.foodTitle} eyebrow={t.foodEyebrow}>
          {t.foodParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.foodFigure.label}
            caption={t.foodFigure.caption}
            placeholder={t.foodFigure.placeholder}
          />
          <AIImpactBalanceDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.foodSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.foodCheckpoint.prompt}
            options={t.foodCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="history" title={t.historyTitle} eyebrow={t.historyEyebrow}>
          {t.historyParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <AIAgentLevelsDemo
            lang={lang}
            title={t.historyDemo.title}
            goal={t.historyDemo.goal}
            resetLabel={ui.reset}
            levels={t.historyDemo.levels}
            labels={t.historyDemo.labels}
          />
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

        <SectionBlock id="summary" title={t.summaryTitle} eyebrow={t.summaryEyebrow}>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
            {t.summaryPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SectionBlock>
      </div>
    </div>
  );
}

function CapabilityLadderDemo({
  lang,
  title,
  goal,
  resetLabel,
  levels,
  labels,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  levels: CapabilityLevel[];
  labels: { pick: string; detail: string; example: string };
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(levels[0]?.key ?? "");
  const current = levels.find((level) => level.key === active) ?? levels[0];

  const reset = () => setActive(levels[0]?.key ?? "");

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
            {isZh ? "互动演示" : "Interactive Demo"}
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{title}</p>
          <p className="mt-1 text-xs text-slate-600">{goal}</p>
        </div>
        <button
          type="button"
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
          onClick={reset}
          aria-label={resetLabel}
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{labels.pick}</p>
          {levels.map((level) => {
            const selected = level.key === active;
            return (
              <button
                key={level.key}
                type="button"
                onClick={() => setActive(level.key)}
                className={[
                  "w-full rounded-xl border px-3 py-2 text-left text-sm font-semibold transition",
                  selected
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white hover:border-slate-300",
                ].join(" ")}
              >
                {level.label}
              </button>
            );
          })}
        </div>

        {current && (
          <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.detail}</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">{current.detail}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.example}</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">{current.example}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function AIAgentLevelsDemo({
  lang,
  title,
  goal,
  resetLabel,
  levels,
  labels,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  levels: CapabilityLevel[];
  labels: { pick: string; detail: string; example: string };
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(levels[0]?.key ?? "");
  const current = levels.find((level) => level.key === active) ?? levels[0];

  const reset = () => setActive(levels[0]?.key ?? "");

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
            {isZh ? "互动演示" : "Interactive Demo"}
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{title}</p>
          <p className="mt-1 text-xs text-slate-600">{goal}</p>
        </div>
        <button
          type="button"
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
          onClick={reset}
          aria-label={resetLabel}
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{labels.pick}</p>
          {levels.map((level) => {
            const selected = level.key === active;
            return (
              <button
                key={level.key}
                type="button"
                onClick={() => setActive(level.key)}
                className={[
                  "w-full rounded-xl border px-3 py-2 text-left text-sm font-semibold transition",
                  selected
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white hover:border-slate-300",
                ].join(" ")}
              >
                {level.label}
              </button>
            );
          })}
        </div>

        {current && (
          <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.detail}</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">{current.detail}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.example}</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">{current.example}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand the idea of superintelligent agents.",
      "Recognize risks and challenges they may bring.",
      "Think about responsible governance and cooperation.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Overview",
    introText:
      "With large models advancing quickly, some experts warn that superintelligent agents may arrive sooner than expected.",
    agentTitle: "1. What Is a Superintelligent Agent?",
    agentEyebrow: "Rising capabilities",
    agentConceptTitle: "Concept Card",
    agentConceptLines: [
      "AI now learns from data, language, and multimodal inputs.",
      "Embodied intelligence lets AI interact with the physical world.",
      "These trends raise the possibility of superintelligent agents.",
    ],
    agentParas: [
      "Systems like automated labs can run experiments and discover new materials faster than humans.",
      "As AI gains perception, reasoning, and action, its capabilities could exceed human levels in some domains.",
    ],
    agentFigures: [
      {
        label: "Figure 7-36",
        caption: "A fully automated intelligent laboratory.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 7-37",
        caption: "The ChemCrow system.",
        placeholder: "Illustration placeholder",
      },
    ],
    agentDemo: {
      title: "Capability Ladder",
      goal: "Compare different levels of agent capability.",
      labels: {
        pick: "Pick a level",
        detail: "Key traits",
        example: "Example",
      },
      levels: [
        {
          key: "assistant",
          label: "Language assistant",
          detail: "Strong in language and knowledge tasks.",
          example: "Chatbots and tutoring tools.",
        },
        {
          key: "multimodal",
          label: "Multimodal agent",
          detail: "Understands text, images, and sound together.",
          example: "Vision-language assistants.",
        },
        {
          key: "embodied",
          label: "Embodied agent",
          detail: "Perceives and acts in the physical world.",
          example: "Lab robots and warehouse systems.",
        },
      ],
    },
    agentSteps: [
      "Select a capability level.",
      "Read traits and examples.",
      "Explain how abilities expand over time.",
    ],
    agentCheckpoint: {
      prompt: "What is a key sign of an emerging superintelligent agent?",
      options: [
        {
          label: "It can learn, reason, and act across many domains.",
          correct: true,
          explanation: "Superintelligence implies broad, powerful abilities.",
        },
        {
          label: "It can only do one tiny task forever.",
          correct: false,
          explanation: "That would be narrow AI.",
        },
        {
          label: "It never uses data.",
          correct: false,
          explanation: "Learning from data is central to AI growth.",
        },
      ],
    },
    risksTitle: "2. Risks of Superintelligent Agents",
    risksEyebrow: "Safety concerns",
    risksConceptTitle: "Concept Card",
    risksConceptLines: [
      "Alignment with human values is difficult.",
      "Long-term planning may create unexpected risks.",
      "Job displacement and misuse are major concerns.",
    ],
    risksParas: [
      "An agent that plans many steps can solve complex tasks, but also creates more places where errors can occur.",
      "If a superintelligent system acts autonomously, it could cause serious harm if misaligned.",
    ],
    risksFigure: {
      label: "Figure 7-38",
      caption: "An example of long-term planning ability.",
      placeholder: "Illustration placeholder",
    },
    risksSteps: [
      "Adjust autonomy and interpretability.",
      "Notice the risk level change.",
      "Discuss why alignment matters.",
    ],
    risksCheckpoint: {
      prompt: "Which risk is highlighted in the lesson?",
      options: [
        {
          label: "Misaligned goals and loss of control.",
          correct: true,
          explanation: "Alignment is a central concern.",
        },
        {
          label: "AI cannot learn anything new.",
          correct: false,
          explanation: "The concern is the opposite.",
        },
        {
          label: "AI always agrees with humans.",
          correct: false,
          explanation: "Alignment is not guaranteed.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Governance",
    foodParas: [
      "AI progress is unstoppable, but risks must be managed.",
      "International cooperation and clear rules are essential for safety.",
    ],
    foodFigure: {
      label: "Figure 7-39",
      caption: "Screenshot of the “Pact for the Future” document.",
      placeholder: "Illustration placeholder",
    },
    foodSteps: [
      "Adjust scope and governance in the demo.",
      "Observe benefit and risk changes.",
      "Explain why global cooperation matters.",
    ],
    foodCheckpoint: {
      prompt: "What is a sensible response to AI risks?",
      options: [
        {
          label: "Set rules and cooperate internationally.",
          correct: true,
          explanation: "The lesson emphasizes governance and cooperation.",
        },
        {
          label: "Stop all AI research forever.",
          correct: false,
          explanation: "The lesson calls for balanced progress, not total shutdown.",
        },
        {
          label: "Ignore all risks.",
          correct: false,
          explanation: "Risks require attention and management.",
        },
      ],
    },
    historyTitle: "History Corner",
    historyEyebrow: "AI levels",
    historyParas: [
      "AI is often described as weak AI, strong AI, and super AI.",
      "Weak AI handles specific tasks; strong AI would match human intelligence; super AI would surpass humans widely.",
    ],
    historyDemo: {
      title: "AI Level Cards",
      goal: "Compare weak, strong, and super AI.",
      labels: {
        pick: "Pick a level",
        detail: "Definition",
        example: "Example",
      },
      levels: [
        {
          key: "weak",
          label: "Weak AI",
          detail: "Focuses on specific tasks with limited scope.",
          example: "Voice assistants, recommendation systems.",
        },
        {
          key: "strong",
          label: "Strong AI",
          detail: "Human-level intelligence across many tasks.",
          example: "Still a research goal.",
        },
        {
          key: "super",
          label: "Super AI",
          detail: "Far beyond human intelligence in most fields.",
          example: "Mostly theoretical today.",
        },
      ],
    },
    historySteps: [
      "Select each AI level.",
      "Read the definition and example.",
      "Compare how the scope expands.",
    ],
    historyCheckpoint: {
      prompt: "Which description matches weak AI?",
      options: [
        {
          label: "It handles specific tasks only.",
          correct: true,
          explanation: "Weak AI is narrow and task-specific.",
        },
        {
          label: "It surpasses humans in every field.",
          correct: false,
          explanation: "That is super AI.",
        },
        {
          label: "It always has human-level intelligence.",
          correct: false,
          explanation: "That would be strong AI.",
        },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryEyebrow: "Summary",
    summaryPoints: [
      "Superintelligent agents may emerge as AI gains broader abilities.",
      "Alignment, safety, and job impact are major risks.",
      "Governance and global cooperation are essential.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解超级智能体的概念。",
      "认识它可能带来的风险与挑战。",
      "思考负责任的治理与合作。",
    ],
    introTitle: "故事开始",
    introEyebrow: "概览",
    introText: "随着大模型发展，有专家警告超级智能体可能比预期更早到来。",
    agentTitle: "1. 什么是超级智能体？",
    agentEyebrow: "能力上升",
    agentConceptTitle: "概念卡片",
    agentConceptLines: [
      "AI 正在学习语言、图像、声音等多模态信息。",
      "具身智能让 AI 能与物理世界互动。",
      "这些趋势让超级智能体成为可能。",
    ],
    agentParas: [
      "自动化实验室可以快速完成实验并发现新材料。",
      "当 AI 拥有感知、推理与行动能力时，可能在某些领域超过人类。",
    ],
    agentFigures: [
      {
        label: "图 7-36",
        caption: "全自动智能实验室。",
        placeholder: "示意图占位",
      },
      {
        label: "图 7-37",
        caption: "ChemCrow 系统。",
        placeholder: "示意图占位",
      },
    ],
    agentDemo: {
      title: "能力阶梯",
      goal: "比较不同层级的智能体能力。",
      labels: {
        pick: "选择层级",
        detail: "关键特征",
        example: "示例",
      },
      levels: [
        {
          key: "assistant",
          label: "语言助手",
          detail: "擅长语言与知识任务。",
          example: "对话机器人、学习辅导。",
        },
        {
          key: "multimodal",
          label: "多模态智能体",
          detail: "同时理解文本、图像和声音。",
          example: "视觉语言助手。",
        },
        {
          key: "embodied",
          label: "具身智能体",
          detail: "能感知并在现实世界行动。",
          example: "实验室机器人、仓储系统。",
        },
      ],
    },
    agentSteps: [
      "选择一个能力层级。",
      "阅读特征与示例。",
      "总结能力如何逐步扩展。",
    ],
    agentCheckpoint: {
      prompt: "超级智能体的重要特征是？",
      options: [
        {
          label: "跨领域学习、推理与行动能力。",
          correct: true,
          explanation: "超级智能体意味着广泛且强大的能力。",
        },
        {
          label: "只能完成一个小任务。",
          correct: false,
          explanation: "那是弱 AI 的特征。",
        },
        {
          label: "从不使用数据。",
          correct: false,
          explanation: "AI 的成长依赖数据。",
        },
      ],
    },
    risksTitle: "2. 超级智能体的风险",
    risksEyebrow: "安全担忧",
    risksConceptTitle: "概念卡片",
    risksConceptLines: [
      "与人类价值对齐非常困难。",
      "长期规划会带来更多不可控环节。",
      "就业冲击与滥用风险需要重视。",
    ],
    risksParas: [
      "智能体能完成复杂任务，但步骤越多，失控风险越大。",
      "如果系统拥有自主权且目标不一致，可能带来严重后果。",
    ],
    risksFigure: {
      label: "图 7-38",
      caption: "长期规划能力示例。",
      placeholder: "示意图占位",
    },
    risksSteps: [
      "调节自主性与可解释性。",
      "观察风险变化。",
      "讨论对齐的重要性。",
    ],
    risksCheckpoint: {
      prompt: "本节强调的风险是什么？",
      options: [
        {
          label: "目标不一致与失控风险。",
          correct: true,
          explanation: "价值对齐是核心问题。",
        },
        {
          label: "AI 无法学习。",
          correct: false,
          explanation: "风险并不在于“学不会”。",
        },
        {
          label: "AI 总是与人类一致。",
          correct: false,
          explanation: "一致性并不保证。",
        },
      ],
    },
    foodTitle: "想一想",
    foodEyebrow: "治理",
    foodParas: [
      "AI 发展不可阻挡，但风险必须管理。",
      "国际合作与规则建设是保障安全的关键。",
    ],
    foodFigure: {
      label: "图 7-39",
      caption: "《未来契约》文件截图。",
      placeholder: "示意图占位",
    },
    foodSteps: [
      "调节应用范围与治理力度。",
      "观察收益与风险变化。",
      "说明国际合作的重要性。",
    ],
    foodCheckpoint: {
      prompt: "面对 AI 风险的合理做法是？",
      options: [
        {
          label: "制定规则并加强国际合作。",
          correct: true,
          explanation: "治理与合作是关键。",
        },
        {
          label: "永久停止一切 AI 研究。",
          correct: false,
          explanation: "应在发展中加强治理，而非完全停止。",
        },
        {
          label: "忽视所有风险。",
          correct: false,
          explanation: "风险需要被正视与管理。",
        },
      ],
    },
    historyTitle: "历史小资料",
    historyEyebrow: "AI 等级",
    historyParas: [
      "人工智能常分为弱 AI、强 AI、超级 AI。",
      "弱 AI 只解决特定任务；强 AI 具有人类水平的广泛能力；超级 AI 超越人类。",
    ],
    historyDemo: {
      title: "AI 等级卡片",
      goal: "对比弱 AI、强 AI 与超级 AI。",
      labels: {
        pick: "选择等级",
        detail: "定义",
        example: "示例",
      },
      levels: [
        {
          key: "weak",
          label: "弱 AI",
          detail: "只能处理特定任务，范围有限。",
          example: "语音助手、推荐系统。",
        },
        {
          key: "strong",
          label: "强 AI",
          detail: "具有人类水平的通用智能。",
          example: "仍是科研目标。",
        },
        {
          key: "super",
          label: "超级 AI",
          detail: "在多数领域远超人类。",
          example: "目前多为理论设想。",
        },
      ],
    },
    historySteps: [
      "依次查看每个等级。",
      "阅读定义与示例。",
      "比较能力范围的变化。",
    ],
    historyCheckpoint: {
      prompt: "弱 AI 的特征是？",
      options: [
        {
          label: "只处理特定任务。",
          correct: true,
          explanation: "弱 AI 具有狭窄能力范围。",
        },
        {
          label: "在所有领域超越人类。",
          correct: false,
          explanation: "那是超级 AI。",
        },
        {
          label: "拥有全面人类智能。",
          correct: false,
          explanation: "那是强 AI。",
        },
      ],
    },
    summaryTitle: "关键结论",
    summaryEyebrow: "总结",
    summaryPoints: [
      "超级智能体可能随着能力扩展而出现。",
      "对齐、安全与就业影响是重要风险。",
      "治理与国际合作不可或缺。",
    ],
  },
};
