import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { BooleanGateDemo } from "../demos/BooleanGateDemo";
import { SyllogismPlaygroundDemo } from "../demos/SyllogismPlaygroundDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson1_3({ lang }: LessonProps) {
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
    { id: "logic", label: isZh ? "1. 形式逻辑起点" : "1. Formal Logic Begins" },
    { id: "math", label: isZh ? "2. 思维的数学化" : "2. Mathematizing Thought" },
    { id: "bool", label: isZh ? "3. 数理逻辑建立" : "3. Establishing Mathematical Logic" },
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

        <SectionBlock id="logic" title={t.logicTitle} eyebrow={t.logicEyebrow}>
          <InfoCard title={t.logicCardTitle}>
            {t.logicParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <SyllogismPlaygroundDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.logicSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.logicCheckpoint.prompt}
            options={t.logicCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="math" title={t.mathTitle} eyebrow={t.mathEyebrow}>
          <InfoCard title={t.mathCardTitle}>
            {t.mathParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.mathSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.mathCheckpoint.prompt}
            options={t.mathCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="bool" title={t.boolTitle} eyebrow={t.boolEyebrow}>
          <InfoCard title={t.boolCardTitle}>
            {t.boolParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <BooleanGateDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.boolSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.boolCheckpoint.prompt}
            options={t.boolCheckpoint.options}
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
      "Understand formal logic, Aristotle’s syllogism, and its role/limits.",
      "See how thought was mathematized by Hobbes, Leibniz, Boole.",
      "Recognize the establishment of mathematical logic (Frege, Russell, Hilbert, Gödel).",
      "Connect early ambitions of simulating human thinking to AI’s roots.",
    ],
    openingTitle: "Opening Idea",
    openingEyebrow: "Thinking → computation",
    openingText:
      "AI’s roots go back to formalizing thought. Logic separated reasoning form from content, later mathematized into symbolic systems that computers could run.",
    logicTitle: "1. Formal Logic Begins",
    logicEyebrow: "Aristotle",
    logicCardTitle: "Syllogism and form vs. truth",
    logicParas: [
      "Aristotle’s syllogism uses major + minor premises to deduce a conclusion, separating reasoning form from content truth.",
      "Logic guarantees form correctness if premises are true; premise truth is judged separately.",
    ],
    logicSteps: [
      "Identify premises and conclusion.",
      "Check form validity independent of content truth.",
      "See form/content separation as key to machine reasoning.",
    ],
    logicCheckpoint: {
      prompt: "What does a valid syllogism guarantee?",
      options: [
        {
          label: "If premises are true, the conclusion must be true.",
          correct: true,
          explanation: "Validity concerns form; premises still need checking.",
        },
        {
          label: "Premises are always true.",
          correct: false,
          explanation: "Truth of premises is separate.",
        },
        {
          label: "All birds can fly.",
          correct: false,
          explanation: "Example shows form vs. content.",
        },
      ],
    },
    mathTitle: "2. Mathematizing Thought",
    mathEyebrow: "From words to symbols",
    mathCardTitle: "Hobbes, Leibniz: reasoning = calculation",
    mathParas: [
      "Hobbes called reasoning “reckoning”; Leibniz envisioned “Let us calculate” to settle disputes.",
      "Mathematizing uses symbols and rules to remove ambiguity and yield repeatable conclusions.",
    ],
    mathSteps: [
      "Replace ambiguous language with precise symbols.",
      "Define rules of operation on symbols.",
      "Aim for anyone using the system to reach the same result.",
    ],
    mathCheckpoint: {
      prompt: "Why mathematize thought?",
      options: [
        {
          label: "To represent reasoning with precise symbols and rules, avoiding ambiguity.",
          correct: true,
          explanation: "It makes conclusions reproducible.",
        },
        {
          label: "To eliminate all reasoning.",
          correct: false,
          explanation: "Goal is to formalize, not remove, reasoning.",
        },
        {
          label: "Because natural language is perfect.",
          correct: false,
          explanation: "Natural language can be ambiguous.",
        },
      ],
    },
    boolTitle: "3. Establishing Mathematical Logic",
    boolEyebrow: "Boole to Gödel",
    boolCardTitle: "Boolean algebra and beyond",
    boolParas: [
      "Boole’s laws of thought used 1/0 and operations (+, ×, −) to model logic; later Frege added quantifiers, expanding expressiveness.",
      "Whitehead, Russell, Hilbert, Gödel refined logical systems, creating a formal foundation for simulating thought.",
    ],
    boolSteps: [
      "Map facts to symbols (1/0).",
      "Use logical operations like AND/OR/NOT to derive conclusions.",
      "See this as the first cornerstone for AI computation.",
    ],
    boolCheckpoint: {
      prompt: "What did Boole contribute?",
      options: [
        {
          label: "A symbolic algebra (1/0 with logical operations) to model reasoning.",
          correct: true,
          explanation: "Boolean algebra formalized logic operations.",
        },
        {
          label: "Invented neural networks.",
          correct: false,
          explanation: "Networks came much later.",
        },
        {
          label: "Created the internet.",
          correct: false,
          explanation: "Boole worked on logic, not networks.",
        },
      ],
    },
    summaryTitle: "Section Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "Formal logic separated reasoning form from content truth (Aristotle).",
      "Mathematizing thought aimed for precise, reproducible reasoning (Hobbes, Leibniz).",
      "Boole and successors built mathematical logic—the first cornerstone of AI.",
      "AI’s original ambition: simulate human thinking through formal, computable logic.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解形式逻辑、三段论及其作用与局限。",
      "认识思维数学化（霍布斯、莱布尼茨、布尔）。",
      "了解数理逻辑的建立（弗雷格、罗素、希尔伯特、哥德尔）。",
      "联系“模拟人类思维”的 AI 初衷与挑战。",
    ],
    openingTitle: "开篇理解",
    openingEyebrow: "思维 → 计算",
    openingText: "AI 的根源在于形式化思维。逻辑把推理形式与内容分离，后被数学化为可由计算机执行的符号系统。",
    logicTitle: "1. 形式逻辑起点",
    logicEyebrow: "亚里士多德",
    logicCardTitle: "三段论与形式/真值分离",
    logicParas: [
      "三段论用大前提+小前提推结论，将推理形式与内容真值分开。",
      "形式正确保证：前提真则结论必真；前提真伪需单独判断。",
    ],
    logicSteps: ["辨析前提与结论。", "独立检查形式有效性。", "把形式/内容分离视为机器推理基础。"],
    logicCheckpoint: {
      prompt: "有效的三段论保证什么？",
      options: [
        {
          label: "若前提为真，结论必为真。",
          correct: true,
          explanation: "有效性关注形式，前提需另查真伪。",
        },
        {
          label: "前提必然为真。",
          correct: false,
          explanation: "前提真值独立。",
        },
        {
          label: "所有鸟都会飞。",
          correct: false,
          explanation: "示例强调内容真伪需验证。",
        },
      ],
    },
    mathTitle: "2. 思维的数学化",
    mathEyebrow: "从语言到符号",
    mathCardTitle: "霍布斯、莱布尼茨：推理即计算",
    mathParas: [
      "霍布斯称推理为“运算”；莱布尼茨设想“让我们计算”以裁决争论。",
      "数学化用符号与规则消除歧义，让结论可重复验证。",
    ],
    mathSteps: ["用精确符号替代含糊语言。", "定义符号操作规则。", "确保遵循规则者得到同样结果。"],
    mathCheckpoint: {
      prompt: "为何要数学化思维？",
      options: [
        {
          label: "用精确符号与规则表达推理，避免歧义。",
          correct: true,
          explanation: "使结论可重复。",
        },
        {
          label: "为了消灭推理。",
          correct: false,
          explanation: "是形式化推理。",
        },
        {
          label: "因为自然语言完美无缺。",
          correct: false,
          explanation: "自然语言常有歧义。",
        },
      ],
    },
    boolTitle: "3. 数理逻辑建立",
    boolEyebrow: "布尔到哥德尔",
    boolCardTitle: "布尔代数及其后",
    boolParas: [
      "布尔用 1/0 与运算（+ × −）刻画逻辑；弗雷格引入量词扩展表达力。",
      "怀特海、罗素、希尔伯特、哥德尔等完善逻辑体系，奠定模拟思维的形式基础。",
    ],
    boolSteps: ["把事实映射为符号（1/0）。", "用与/或/非等逻辑运算推导结论。", "视为 AI 计算的第一块基石。"],
    boolCheckpoint: {
      prompt: "布尔的贡献是？",
      options: [
        {
          label: "用 1/0 与逻辑运算的符号代数来刻画推理。",
          correct: true,
          explanation: "布尔代数形式化了逻辑运算。",
        },
        {
          label: "发明神经网络。",
          correct: false,
          explanation: "网络是更晚的发展。",
        },
        {
          label: "创造了互联网。",
          correct: false,
          explanation: "布尔专注逻辑。",
        },
      ],
    },
    summaryTitle: "本节小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "形式逻辑将推理形式与内容真值分离（亚里士多德）。",
      "思维数学化追求精确可复现的推理（霍布斯、莱布尼茨）。",
      "布尔及后继者建立数理逻辑，成为 AI 的第一块基石。",
      "AI 初衷：用形式化、可计算的逻辑模拟人类思维。",
    ],
  },
};
