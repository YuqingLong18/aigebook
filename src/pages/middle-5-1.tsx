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

export function MiddleLesson5_1({ lang }: LessonProps) {
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
    { id: "asimov", label: t.asimovTitle },
    { id: "laws", label: t.lawsTitle },
    { id: "limits", label: t.limitsTitle },
    { id: "ethics", label: t.ethicsTitle },
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

        <SectionBlock id="asimov" title={t.asimovTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.asimovIntro}</p>
          <GuidedSteps title={ui.guidedTitle} steps={t.asimovSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.asimovCheckpoint.prompt}
            options={t.asimovCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="laws" title={t.lawsTitle} eyebrow={t.lawsEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.lawsIntro}</p>
          <InfoCard title={t.lawsCardTitle}>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
              {t.lawsList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.lawsSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.lawsCheckpoint.prompt}
            options={t.lawsCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="limits" title={t.limitsTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.limitsIntro}</p>
          <ControlRiskDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.limitsSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.limitsCheckpoint.prompt}
            options={t.limitsCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="ethics" title={t.ethicsTitle} eyebrow={t.ethicsEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.ethicsIntro}</p>
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
      "了解机器人三定律的内容与伦理意义",
      "分析三定律在现代 AI 背景下的局限与挑战",
      "思考从三定律延展出的现代 AI 伦理规范",
    ],
    introTitle: "导入",
    introEyebrow: "人与机器的边界",
    intro:
      "机器人已深入家庭、工厂、医院。强大模型可能让机器人接近或超越人类智能：如何确保它们只帮不害？",
    introCardTitle: "核心问题",
    introCard: "三定律曾是机器人行为的“底线”，但现代智能的复杂性远超当年设想，规范需更新。",
    asimovTitle: "1. 阿西莫夫其人",
    asimovIntro:
      "科幻作家阿西莫夫在 1942 年《迷航》中提出机器人三定律，旨在让机器人成为人类助手而非威胁。",
    asimovSteps: [
      "阿西莫夫被誉为科幻“三巨头”之一。",
      "他反对“机器人必背叛”的刻板形象。",
      "提出三定律以塑造人机和谐关系。",
    ],
    asimovCheckpoint: {
      prompt: "阿西莫夫提出三定律的初衷是？",
      options: [
        { label: "为机器人设伦理框架，避免伤害人类", correct: true, explanation: "希望机器人服务人类而非威胁人类。" },
        { label: "证明机器人不可控", correct: false, explanation: "目标是可控与安全。" },
        { label: "让机器人统治人类", correct: false, explanation: "反之，他强调人类优先。" },
        { label: "仅作为故事噱头，无需伦理意义", correct: false, explanation: "作品意在引发伦理思考。" },
      ],
    },
    lawsTitle: "2. 三定律的内容",
    lawsEyebrow: "保护、服从、自保",
    lawsIntro: "第一：不得伤害人类；第二：服从人类前提不违第一；第三：保护自己前提不违一二。",
    lawsCardTitle: "三定律（摘要）",
    lawsList: [
      "第一：保护人类安全（主动或被动均不得伤害）。",
      "第二：服从命令（若违第一，可拒绝）。",
      "第三：自我保护（不违前两条的范围内）。",
    ],
    lawsSteps: [
      "理解优先级：第一 > 第二 > 第三。",
      "注意“通过不作为”也算伤害。",
      "服从命令前提是“不得违第一”。",
    ],
    lawsCheckpoint: {
      prompt: "三定律的优先级是？",
      options: [
        { label: "第一优先人类安全，其次服从，再次自保", correct: true, explanation: "保护人类>服从命令>自我保护。" },
        { label: "自保最高，其次服从，最后人类安全", correct: false, explanation: "与原意相反。" },
        { label: "三条无优先级", correct: false, explanation: "有严格优先次序。" },
        { label: "只需执行第二条", correct: false, explanation: "三条需并行，且有顺序。" },
      ],
    },
    limitsTitle: "3. 三定律的局限",
    limitsIntro:
      "自然语言含糊，三定律可互相冲突；现实情境复杂（如接种、两难抉择），三定律无法涵盖全部法律与道德关系。",
    limitsSteps: [
      "语言歧义：什么算“伤害”？心理伤害？延迟？",
      "冲突案例：伤一人救一人？接种短痛 vs 长期安全。",
      "责任空白：学习型机器人失误如何追责？",
    ],
    limitsCheckpoint: {
      prompt: "三定律不能彻底保障安全的原因是？",
      options: [
        { label: "语言模糊、规则冲突、现实情境更复杂", correct: true, explanation: "三条口号不足以覆盖复杂伦理与责任。" },
        { label: "因为机器人无法听懂人话", correct: false, explanation: "核心是规则不足与情境复杂。" },
        { label: "三定律禁止自保", correct: false, explanation: "第三条允许自保但有约束。" },
        { label: "现代机器人不存在风险", correct: false, explanation: "风险仍在，需更系统规范。" },
      ],
    },
    ethicsTitle: "4. 从三定律到 AI 伦理",
    ethicsEyebrow: "服从 vs 共生",
    ethicsIntro:
      "三定律体现“人类主—机器人仆”。随着智能提升，需讨论机器是否有“代理”地位、人机关系是否转向协同/共生，以及责任划分和规范设计。",
    ethicsSteps: [
      "思考智能体是否应被视作类似动物的代理。",
      "合作/共生关系挑战“绝对服从”。",
      "新规范需明确责任、权利、可解释性与安全边界。",
    ],
    ethicsCheckpoint: {
      prompt: "现代 AI 伦理需超越三定律的原因是？",
      options: [
        { label: "智能体更复杂，需要合作/责任等新规范", correct: true, explanation: "需兼顾协同、安全、责任与权利。" },
        { label: "机器人已不存在", correct: false, explanation: "机器人与 AI 依然存在且发展快速。" },
        { label: "因为三定律没有提到自保", correct: false, explanation: "三定律含自保，但不足以涵盖现代议题。" },
        { label: "智能体不可能学习", correct: false, explanation: "恰恰能学习，增加伦理复杂度。" },
      ],
    },
    summaryTitle: "5. 小结",
    summaryPoints: [
      "三定律奠定“保护人类、服从命令、自保有序”框架，但存在歧义与冲突。",
      "现代 AI 情境复杂：责任、权利、协同与安全需要更细致的伦理与法规。",
      "人机未来可能从单向服从走向合作共生，新规范需谨慎设计。",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand Asimov’s Three Laws and their ethical intent",
      "Analyze their limitations in modern AI contexts",
      "Explore extended AI ethics beyond the Three Laws",
    ],
    introTitle: "Overview",
    introEyebrow: "Human–machine boundary",
    intro:
      "Robots and AI systems are smarter and more present than ever. How do we ensure they help, not harm?",
    introCardTitle: "Key issue",
    introCard: "The Three Laws once set a safety baseline, but modern AI complexity demands updates.",
    asimovTitle: "1. Isaac Asimov",
    asimovIntro:
      "Asimov, a sci-fi “Big Three” author, proposed the Three Laws in 1942’s “Runaround,” aiming for helpful robots, not monsters.",
    asimovSteps: [
      "Recognize Asimov’s influence across 500+ works.",
      "He resisted the trope of robot rebellion.",
      "He framed rules to keep robots as human helpers.",
    ],
    asimovCheckpoint: {
      prompt: "Why did Asimov propose the Three Laws?",
      options: [
        { label: "To give robots an ethical frame that prevents harming humans", correct: true, explanation: "He wanted safe, helpful robots." },
        { label: "To prove robots are uncontrollable", correct: false, explanation: "Opposite—he sought control." },
        { label: "To let robots rule humans", correct: false, explanation: "Humans stay priority." },
        { label: "Pure gimmick with no ethical intent", correct: false, explanation: "He aimed to spark ethical thought." },
      ],
    },
    lawsTitle: "2. The Three Laws",
    lawsEyebrow: "Protect, obey, survive",
    lawsIntro: "1) Don’t harm humans; 2) Obey unless it conflicts with 1; 3) Self-protect unless it conflicts with 1 or 2.",
    lawsCardTitle: "Three Laws (summary)",
    lawsList: [
      "First: Protect humans (no harm, active or passive).",
      "Second: Obey humans (unless it violates the First).",
      "Third: Self-preserve (unless it violates First/Second).",
    ],
    lawsSteps: [
      "Priority order: First > Second > Third.",
      "“Through inaction” counts as harm.",
      "Obedience is bounded by safety.",
    ],
    lawsCheckpoint: {
      prompt: "What is the priority ordering?",
      options: [
        { label: "Human safety first, then obedience, then self-preservation", correct: true, explanation: "Safety > obedience > self." },
        { label: "Self first, then obedience, then safety", correct: false, explanation: "Opposite of the laws." },
        { label: "No priority at all", correct: false, explanation: "There is a strict order." },
        { label: "Only the Second Law matters", correct: false, explanation: "All three with priority." },
      ],
    },
    limitsTitle: "3. Limits of the Laws",
    limitsIntro:
      "Natural language is ambiguous; laws can conflict; real life (e.g., shots, dilemmas) is richer than three rules, leaving gaps in responsibility and morality.",
    limitsSteps: [
      "Ambiguity: what counts as harm—pain, delay, emotional hurt?",
      "Conflicts: harm one to save another? shot pain vs safety?",
      "Responsibility gaps: who’s liable for a learning robot’s mistake?",
    ],
    limitsCheckpoint: {
      prompt: "Why can’t the Laws fully guarantee safety?",
      options: [
        { label: "Ambiguity, conflicts, and real-world complexity", correct: true, explanation: "Three slogans can’t cover all ethics or law." },
        { label: "Robots can’t understand language at all", correct: false, explanation: "Core issue is rule sufficiency, not comprehension alone." },
        { label: "Laws forbid self-protection", correct: false, explanation: "Third Law allows it with limits." },
        { label: "Modern robots have zero risk", correct: false, explanation: "Risks persist; better rules needed." },
      ],
    },
    ethicsTitle: "4. Beyond the Laws: AI Ethics",
    ethicsEyebrow: "Obedience vs partnership",
    ethicsIntro:
      "The Laws assume human master/robot servant. As AI grows, we must consider agent-like status, collaboration/symbiosis, accountability, and rights—beyond pure obedience.",
    ethicsSteps: [
      "Should intelligent agents be treated like animals (some rights/constraints)?",
      "Collaboration/symbiosis challenges absolute obedience.",
      "New norms must clarify accountability, safety, explainability, and boundaries.",
    ],
    ethicsCheckpoint: {
      prompt: "Why go beyond the Three Laws today?",
      options: [
        { label: "Modern AI complexity requires norms on collaboration and responsibility", correct: true, explanation: "Need safety, rights, accountability beyond obedience." },
        { label: "Robots have vanished", correct: false, explanation: "They’re growing, not gone." },
        { label: "No self-protection is allowed", correct: false, explanation: "Third Law includes it." },
        { label: "AI cannot learn", correct: false, explanation: "Learning increases ethical complexity." },
      ],
    },
    summaryTitle: "5. Summary",
    summaryPoints: [
      "Three Laws set a protect–obey–self-preserve hierarchy but are ambiguous and conflicting.",
      "Modern AI raises issues of responsibility, rights, collaboration, and safety beyond those laws.",
      "Future human–machine relations may shift from obedience to partnership, needing careful norm design.",
    ],
  },
};
