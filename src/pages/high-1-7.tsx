import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { EraTimelineDemo } from "../demos/EraTimelineDemo";
import { ExpertSystemCostDemo } from "../demos/ExpertSystemCostDemo";
import { SymbolicVsNeuralDemo } from "../demos/SymbolicVsNeuralDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson1_7({ lang }: LessonProps) {
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
    { id: "golden", label: isZh ? "1) 黄金十年" : "1) Golden Decade" },
    { id: "winter1", label: isZh ? "2) 第一次寒冬" : "2) First Winter" },
    { id: "boom2", label: isZh ? "3) 第二次热潮" : "3) Second Boom" },
    { id: "winter2", label: isZh ? "4) 第二次寒冬" : "4) Second Winter" },
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

        <SectionBlock id="golden" title={t.goldenTitle} eyebrow={t.goldenEyebrow}>
          <InfoCard title={t.goldenCardTitle}>
            {t.goldenParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.goldenSteps} />
        </SectionBlock>

        <SectionBlock id="winter1" title={t.winter1Title} eyebrow={t.winter1Eyebrow}>
          <InfoCard title={t.winter1CardTitle}>
            {t.winter1Paras.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.winter1Steps} />
        </SectionBlock>

        <SectionBlock id="boom2" title={t.boom2Title} eyebrow={t.boom2Eyebrow}>
          <InfoCard title={t.boom2CardTitle}>
            {t.boom2Paras.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <SymbolicVsNeuralDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.boom2Steps} />
        </SectionBlock>

        <SectionBlock id="winter2" title={t.winter2Title} eyebrow={t.winter2Eyebrow}>
          <InfoCard title={t.winter2CardTitle}>
            {t.winter2Paras.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <ExpertSystemCostDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.winter2Steps} />
        </SectionBlock>

        <SectionBlock id="summary" title={t.summaryTitle} eyebrow={t.summaryEyebrow}>
          <EraTimelineDemo lang={lang} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.summaryCheckpoint.prompt}
            options={t.summaryCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
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
      "Trace early AI eras: Golden Decade, First Winter, Second Boom, Second Winter.",
      "Understand symbolic approaches (theorem proving, ELIZA, expert systems) and limits.",
      "Recall perceptron and early neural nets plus their bottlenecks.",
      "Analyze expert system limits and Fifth Generation failure reasons.",
    ],
    openingTitle: "Opening Idea",
    openingEyebrow: "Early ups and downs",
    openingText:
      "Post-Dartmouth, AI boomed then cooled multiple times. Symbolic knowledge was dominant while neural networks quietly evolved.",
    goldenTitle: "1) Golden Decade (1956–1974)",
    goldenEyebrow: "First boom",
    goldenCardTitle: "Theorem proving, ELIZA, perceptron",
    goldenParas: [
      "AI labs flourished at MIT, CMU, Stanford, Edinburgh; funding was abundant.",
      "Breakthroughs: resolution theorem proving, ELIZA chatbot, perceptron hardware recognizing letters.",
    ],
    goldenSteps: [
      "Note optimism about human-level AI.",
      "See symbolic reasoning as the mainstream.",
      "Recognize perceptron as early learnable neural hardware.",
    ],
    winter1Title: "2) First Winter (1974–1980)",
    winter1Eyebrow: "Cooling",
    winter1CardTitle: "Limits emerge",
    winter1Paras: [
      "Symbolic systems struggled with open, uncertain tasks and heavy compute.",
      "Perceptron only solved linearly separable problems; neural nets stalled after critiques by Minsky and Papert.",
    ],
    winter1Steps: [
      "Match cause: task difficulty + limited compute.",
      "Recall perceptron linearity as bottleneck.",
      "Understand funding cuts followed unmet expectations.",
    ],
    boom2Title: "3) Second Boom (1980–1987)",
    boom2Eyebrow: "Knowledge engineering",
    boom2CardTitle: "Expert systems + BP revival",
    boom2Paras: [
      "Expert systems (e.g., DENDRAL) used domain knowledge; AI shifted to applied knowledge engineering.",
      "Backpropagation (1986) enabled multilayer perceptrons, reviving neural nets (e.g., handwriting recognition).",
    ],
    boom2Steps: [
      "Contrast domain-specific knowledge vs. general symbolic search.",
      "See BP as overcoming perceptron linear separability.",
      "Link to renewed confidence.",
    ],
    winter2Title: "4) Second Winter (1987–1993)",
    winter2Eyebrow: "Costs & reflection",
    winter2CardTitle: "Expert system fatigue & Fifth Generation fail",
    winter2Paras: [
      "Knowledge bases were costly to build/maintain; conflicts slowed progress (e.g., CADUCEUS).",
      "Fifth Generation project over-relied on logic/experts; economic bubble burst.",
      "Brooks critiqued pure symbolism; action-oriented ideas and simple perception-feedback agents emerged.",
    ],
    winter2Steps: [
      "Map cost/maintenance as core weakness.",
      "Recognize overpromises vs. tech limits.",
      "See new directions from embodied intelligence critiques.",
    ],
    summaryTitle: "Section Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "Early AI cycled through booms and winters driven by optimism vs. technical limits.",
      "Symbolic methods excelled in narrow reasoning but struggled with openness/uncertainty.",
      "Perceptron bottlenecks paused neural nets until BP and MLPs revived them.",
      "Expert systems’ maintenance burden and Fifth Generation overreach led to the second winter.",
    ],
    summaryCheckpoint: {
      prompt: "What key factor led to the second AI winter?",
      options: [
        {
          label: "Expert systems were expensive to build/maintain and couldn’t scale.",
          correct: true,
          explanation: "Knowledge acquisition/conflicts drove costs and disappointment.",
        },
        {
          label: "Perceptrons suddenly solved all problems.",
          correct: false,
          explanation: "They were limited to linearly separable tasks.",
        },
        {
          label: "No one funded AI labs in the 1980s.",
          correct: false,
          explanation: "Funding declined after failures, not absent initially.",
        },
      ],
    },
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "梳理 AI 早期的黄金十年、第一次寒冬、第二次热潮、第二次寒冬。",
      "理解符号方法（定理证明、ELIZA、专家系统）的场景与局限。",
      "回顾感知机与早期神经网络的探索与瓶颈。",
      "分析专家系统局限与第五代计划失败原因。",
    ],
    openingTitle: "开篇理解",
    openingEyebrow: "早期起伏",
    openingText: "达特茅斯之后，AI 多次起落。知识/符号方法占主流，神经网络悄然发展。",
    goldenTitle: "1) 黄金十年 (1956–1974)",
    goldenEyebrow: "首次热潮",
    goldenCardTitle: "定理证明、ELIZA、感知机",
    goldenParas: [
      "MIT、CMU、斯坦福、爱丁堡等实验室成立，资金充足。",
      "分辨率证明法、ELIZA 对话、感知机硬件识字等突破。",
    ],
    goldenSteps: ["记录当时对人类级 AI 的乐观。", "符号推理为主流。", "感知机是早期可学习神经硬件。"],
    winter1Title: "2) 第一次寒冬 (1974–1980)",
    winter1Eyebrow: "降温",
    winter1CardTitle: "局限显现",
    winter1Paras: [
      "符号系统难以描述开放、不确定问题，计算量大。",
      "感知机仅解线性可分；Minsky/Papert 批评后停滞。",
    ],
    winter1Steps: ["原因：任务难+算力不足。", "线性可分是关键瓶颈。", "期望落空导致资金削减。"],
    boom2Title: "3) 第二次热潮 (1980–1987)",
    boom2Eyebrow: "知识工程",
    boom2CardTitle: "专家系统 + BP 复兴",
    boom2Paras: [
      "专家系统用领域知识（如 DENDRAL），AI 进入知识工程时代。",
      "1986 BP 解决多层网络训练，手写识别等进展显著。",
    ],
    boom2Steps: ["对比领域知识 vs. 通用搜索。", "BP 克服感知机线性局限。", "信心回升。"],
    winter2Title: "4) 第二次寒冬 (1987–1993)",
    winter2Eyebrow: "成本与反思",
    winter2CardTitle: "专家系统疲态与五代失败",
    winter2Paras: [
      "知识库获取/维护昂贵，知识冲突难解（如 CADUCEUS）。",
      "第五代计划过度依赖逻辑/专家，经济泡沫破裂雪上加霜。",
      "Brooks 批判纯符号，强调感知/行动的行动主义与仿生昆虫研究。",
    ],
    winter2Steps: ["成本/维护为核心弱点。", "过度承诺超出技术上限。", "体现具身智能的新方向。"],
    summaryTitle: "本节小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "早期 AI 在乐观与局限间多次起伏。",
      "符号方法擅长封闭推理，难应对开放/不确定。",
      "感知机瓶颈令神经网络停滞，后被 BP+MLP 复兴。",
      "专家系统维护成本与五代计划过度预期导致第二次寒冬。",
    ],
    summaryCheckpoint: {
      prompt: "导致第二次 AI 寒冬的关键因素是？",
      options: [
        {
          label: "专家系统知识库昂贵且难维护，期望落空。",
          correct: true,
          explanation: "知识获取/冲突带来高成本与失望。",
        },
        {
          label: "感知机突然解决所有问题。",
          correct: false,
          explanation: "感知机恰好受限。",
        },
        {
          label: "1980 年代无人资助 AI。",
          correct: false,
          explanation: "资金在失败后下降，并非一开始缺失。",
        },
      ],
    },
  },
};
