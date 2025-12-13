import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { ControlRiskDemo } from "../demos/ControlRiskDemo";
import { LiabilityScenarioDemo } from "../demos/LiabilityScenarioDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson1_10({ lang }: LessonProps) {
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
    { id: "weapons", label: isZh ? "1. AI 武器与失控风险" : "1. AI Weapons & Control" },
    { id: "uncontrol", label: isZh ? "2. 失控来源" : "2. Sources of Uncontrollability" },
    { id: "ethics", label: isZh ? "3. 伦理与法律挑战" : "3. Ethical & Legal Challenges" },
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

        <SectionBlock id="weapons" title={t.weaponsTitle} eyebrow={t.weaponsEyebrow}>
          <InfoCard title={t.weaponsCardTitle}>
            {t.weaponsParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.weaponsSteps} />
        </SectionBlock>

        <SectionBlock id="uncontrol" title={t.uncontrolTitle} eyebrow={t.uncontrolEyebrow}>
          <InfoCard title={t.uncontrolCardTitle}>
            {t.uncontrolParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <ControlRiskDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.uncontrolSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.uncontrolCheckpoint.prompt}
            options={t.uncontrolCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="ethics" title={t.ethicsTitle} eyebrow={t.ethicsEyebrow}>
          <InfoCard title={t.ethicsCardTitle}>
            {t.ethicsParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <LiabilityScenarioDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.ethicsSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.ethicsCheckpoint.prompt}
            options={t.ethicsCheckpoint.options}
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
      "Understand long-term AI risks: uncontrollability, weaponization, ethics/legal challenges.",
      "Know AI weapon risks and lethal autonomous weapons concerns.",
      "Explain uncontrollability from autonomy, opacity, and data bias.",
      "Discuss ethical/legal challenges (accident liability, copyright, AI subjectivity).",
      "Reflect on future human–AI relations (e.g., Three Laws of Robotics).",
    ],
    openingTitle: "Opening Idea",
    openingEyebrow: "Long-term risks",
    openingText:
      "As AI grows more capable, uncontrollability and ethical/legal challenges loom—especially with autonomous weapons and opaque models.",
    weaponsTitle: "1. AI Weapons & Control",
    weaponsEyebrow: "Direct threats",
    weaponsCardTitle: "From AlphaDogfight to killer robots",
    weaponsParas: [
      "AI already assists in combat; incidents show autonomous attacks (e.g., Kargu-2 report).",
      "Fully autonomous lethal weapons could be catastrophic; concern centers on keeping humans in control.",
    ],
    weaponsSteps: [
      "Recognize autonomous weapon risks vs. human-in-the-loop.",
      "Compare to nuclear deterrence: control is key.",
      "Note need for global norms and safeguards.",
    ],
    uncontrolTitle: "2. Sources of Uncontrollability",
    uncontrolEyebrow: "Why control is hard",
    uncontrolCardTitle: "Autonomy, opacity, data bias",
    uncontrolParas: [
      "Highly flexible models may find non-human strategies misaligned with values.",
      "Large neural nets lack interpretability; even with full parameters, reasons remain unclear.",
      "Data bias or malicious training can embed hidden dangers; continuous learning can be hijacked.",
    ],
    uncontrolSteps: [
      "Balance autonomy with constraints.",
      "Improve interpretability and monitoring.",
      "Secure data/training to prevent drift or poisoning.",
    ],
    uncontrolCheckpoint: {
      prompt: "Why are large neural nets hard to control?",
      options: [
        {
          label: "They are opaque and can learn strategies misaligned with human intent; data bias can hide risks.",
          correct: true,
          explanation: "Opacity + flexibility + data issues create uncertainty.",
        },
        {
          label: "They have zero parameters.",
          correct: false,
          explanation: "They have many parameters.",
        },
        {
          label: "They never use data.",
          correct: false,
          explanation: "They rely on data heavily.",
        },
      ],
    },
    ethicsTitle: "3. Ethical & Legal Challenges",
    ethicsEyebrow: "Responsibility & rights",
    ethicsCardTitle: "Accidents, copyright, subjectivity",
    ethicsParas: [
      "Autonomous driving liability spans makers, developers, drivers, and infrastructure; laws are evolving.",
      "AI-generated content raises copyright questions; AI lacks legal personhood, but human credit may be limited.",
      "Debates on AI subjectivity challenge the tool-only view; Asimov’s Three Laws highlight the human-first norm.",
    ],
    ethicsSteps: [
      "Map responsibility by automation level.",
      "Disclose AI’s role in creation; clarify ownership.",
      "Consider when AI autonomy may warrant new legal/ethical status.",
    ],
    ethicsCheckpoint: {
      prompt: "What complicates AI accident liability?",
      options: [
        {
          label: "Multiple parties (maker, developer, user) may share responsibility depending on autonomy level.",
          correct: true,
          explanation: "Responsibility is distributed and evolving.",
        },
        {
          label: "Only the road is responsible.",
          correct: false,
          explanation: "It involves more parties.",
        },
        {
          label: "AI has legal personhood today.",
          correct: false,
          explanation: "AI is not a legal person yet.",
        },
      ],
    },
    summaryTitle: "Section Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "AI’s long-term risks include weaponization and loss of control due to autonomy, opacity, and data bias.",
      "Ethical/legal puzzles: liability in autonomy, copyright of AI output, potential AI subjectivity.",
      "Mitigation needs safety research, interpretability, secure data, and evolving governance.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解 AI 的远期风险：失控、武器化、伦理与法律挑战。",
      "了解 AI 武器风险与致命自主武器争议。",
      "解释自主性、不可解释性、数据偏见导致的失控。",
      "讨论伦理/法律难题（事故责任、版权、AI 主体性）。",
      "思考人机未来关系（如机器人三定律）。",
    ],
    openingTitle: "开篇理解",
    openingEyebrow: "长期风险",
    openingText: "随着 AI 更强，失控与伦理/法律挑战加剧——尤其在自主武器与黑箱模型上。",
    weaponsTitle: "1. AI 武器与失控风险",
    weaponsEyebrow: "直接威胁",
    weaponsCardTitle: "从 AlphaDogfight 到“杀手机器人”",
    weaponsParas: [
      "AI 已辅助作战；报告显示有自主攻击案例（如 Kargu-2）。",
      "全面自主致命武器或将灾难；核心担忧是保持人类控制。",
    ],
    weaponsSteps: ["识别有人在回路 vs. 完全自主的风险。", "类比核威慑：控制至关重要。", "需要全球规范与防护。"],
    uncontrolTitle: "2. 失控来源",
    uncontrolEyebrow: "为何难控",
    uncontrolCardTitle: "自主、黑箱、数据偏见",
    uncontrolParas: [
      "高度灵活模型可能学出与人类价值不符的策略。",
      "大规模神经网络缺乏可解释性，即便知道参数也难理解决策。",
      "数据偏差或恶意训练可埋藏风险；持续学习可能被劫持。",
    ],
    uncontrolSteps: ["平衡自主与约束。", "提升可解释性与监测。", "保障数据/训练安全，防止漂移与污染。"],
    uncontrolCheckpoint: {
      prompt: "为何大规模神经网络难控？",
      options: [
        {
          label: "它们不透明且可能学到与人意图不符的策略，数据偏见埋藏风险。",
          correct: true,
          explanation: "黑箱+灵活+数据问题带来不确定性。",
        },
        {
          label: "它们没有参数。",
          correct: false,
          explanation: "参数众多。",
        },
        {
          label: "它们不用数据。",
          correct: false,
          explanation: "高度依赖数据。",
        },
      ],
    },
    ethicsTitle: "3. 伦理与法律挑战",
    ethicsEyebrow: "责任与权利",
    ethicsCardTitle: "事故、版权、主体性",
    ethicsParas: [
      "自动驾驶事故涉及制造商、开发者、驾驶员、基础设施等；法律仍在演进。",
      "AI 生成内容的版权争议：AI 非主体，人类贡献或减弱。",
      "关于 AI 主体性的讨论挑战“仅工具”观；机器人三定律体现人类优先准则。",
    ],
    ethicsSteps: ["按自动化级别分配责任。", "披露 AI 参与并澄清归属。", "思考何时 AI 自主性需新法律/伦理框架。"],
    ethicsCheckpoint: {
      prompt: "为何 AI 事故责任复杂？",
      options: [
        {
          label: "多方（制造、开发、用户等）可能共同承担，视自动化而定。",
          correct: true,
          explanation: "责任分布且在演进。",
        },
        {
          label: "只有道路负责。",
          correct: false,
          explanation: "涉及多方。",
        },
        {
          label: "AI 目前是法律主体。",
          correct: false,
          explanation: "AI 尚非主体。",
        },
      ],
    },
    summaryTitle: "本节小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "长期风险：武器化与失控，源于自主、黑箱、数据偏差。",
      "伦理/法律难题：自动化责任、AI 作品版权、潜在 AI 主体性。",
      "需安全研究、可解释性、数据保障与治理演进来应对。",
    ],
  },
};
