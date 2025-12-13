import { useMemo, useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { BooleanGateDemo } from "../demos/BooleanGateDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson2_2({ lang }: LessonProps) {
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
    { id: "aristotle", label: t.aristotleTitle },
    { id: "math-logic", label: t.mathTitle },
    { id: "establish", label: t.establishTitle },
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
          <InfoCard title={t.chainTitle}>
            <p className="text-sm text-slate-700">{t.chainCopy}</p>
          </InfoCard>
        </SectionBlock>

        <SectionBlock id="aristotle" title={t.aristotleTitle} eyebrow={t.aristotleEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.aristotleIntro}</p>
          <SyllogismPlay lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.aristotleSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.aristotleCheckpoint.prompt}
            options={t.aristotleCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="math-logic" title={t.mathTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.mathIntro}</p>
          <LogicSymbols lang={lang} />
          <BooleanGateDemo lang={lang} />
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

        <SectionBlock id="establish" title={t.establishTitle} eyebrow={t.establishEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.establishIntro}</p>
          <InfoCard title={t.establishCardTitle}>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
              {t.establishPoints.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </InfoCard>
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.establishCheckpoint.prompt}
            options={t.establishCheckpoint.options}
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

function SyllogismPlay({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const [premises, setPremises] = useState({
    major: isZh ? "所有鸟都有羽毛" : "All birds have feathers",
    minor: isZh ? "麻雀是一种鸟" : "Sparrow is a bird",
  });
  const conclusion = useMemo(() => {
    const isFish = premises.major.includes("鱼");
    if (isFish) {
      return isZh ? "结论存疑：大前提可能错误" : "Conclusion doubtful: flawed major premise";
    }
    return isZh ? "麻雀有羽毛" : "Sparrow has feathers";
  }, [premises.major, isZh]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">{isZh ? "三段论示例" : "Syllogism example"}</p>
      <div className="mt-2 grid gap-2 md:grid-cols-3">
        <input
          aria-label="major premise"
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm"
          value={premises.major}
          onChange={(e) => setPremises((p) => ({ ...p, major: e.target.value }))}
        />
        <input
          aria-label="minor premise"
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm"
          value={premises.minor}
          onChange={(e) => setPremises((p) => ({ ...p, minor: e.target.value }))}
        />
        <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-800">
          {isZh ? "结论：" : "Conclusion:"} {conclusion}
        </div>
      </div>
      <p className="mt-2 text-xs text-slate-600">
        {isZh ? "前提若错，结论也会错；三段论分离“内容”与“推理过程”。" : "If premises fail, conclusion fails; syllogism separates content vs. process."}
      </p>
    </div>
  );
}

function LogicSymbols({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const samples = useMemo(
    () => [
      {
        label: isZh ? "布尔代数" : "Boolean algebra",
        text: isZh ? "AND/OR/NOT 用符号计算推理" : "AND/OR/NOT as symbolic computation",
      },
      {
        label: isZh ? "全称量词 ∀" : "Universal ∀",
        text: isZh ? "∀x p(x)：所有 x 满足性质 p" : "∀x p(x): all x satisfy property p",
      },
      {
        label: isZh ? "存在量词 ∃" : "Existential ∃",
        text: isZh ? "∃x p(x)：存在某 x 满足性质 p" : "∃x p(x): there exists some x",
      },
    ],
    [isZh],
  );
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="grid gap-2 md:grid-cols-3">
        {samples.map((s) => (
          <div key={s.label} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
            <p className="text-sm font-semibold text-slate-900">{s.label}</p>
            <p className="mt-1 text-xs text-slate-700">{s.text}</p>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-slate-600">
        {isZh
          ? "把推理转成符号计算，为“思维→逻辑→计算”奠基。"
          : "Turning reasoning into symbols enables the thinking → logic → computation chain."}
      </p>
    </div>
  );
}

const content = {
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解亚里士多德形式逻辑总结思维模式的意义。",
      "了解布尔代数、数理逻辑对思维数学化的贡献。",
      "理解“思维-逻辑-计算”链条如何奠基人工智能。",
    ],
    introTitle: "开篇理解",
    introEyebrow: "思维的规律",
    intro:
      "AI 要“用计算机模拟人类思维”。先要把人类思维的规律抽象出来，再用逻辑和数学表示，才能让机器计算。",
    chainTitle: "思维 → 逻辑 → 计算",
    chainCopy: "抽象思维过程→符号化逻辑→机器可计算，为 AI 奠基。",
    aristotleTitle: "1. 亚里士多德与三段论",
    aristotleEyebrow: "逻辑起点",
    aristotleIntro:
      "亚里士多德系统研究思维，提出三段论：大前提+小前提→结论。只要前提为真，结论必真，首次分离“内容”与“过程”。",
    aristotleSteps: [
      "辨析大/小前提与结论关系",
      "发现错误结论可能源于前提而非推理",
      "理解逻辑可被机器遵循",
    ],
    aristotleCheckpoint: {
      prompt: "三段论的突破在于：",
      options: [
        { label: "分离思维内容与推理过程，前提真则结论真", correct: true, explanation: "核心贡献。" },
        { label: "证明所有鱼会飞", correct: false, explanation: "无关且错误。" },
        { label: "否认推理的重要性", correct: false, explanation: "相反，强调推理。" },
      ],
    },
    mathTitle: "2. 思维的数学化",
    mathIntro:
      "霍布斯提出“推理即计算”，莱布尼茨主张用数学消除歧义，布尔用 AND/OR/NOT 符号化推理，开启布尔代数。",
    mathSteps: [
      "理解布尔代数把事实与关系符号化",
      "认识 ∀、∃ 等量词扩展表达力",
      "体会数学化让推理客观、可实现",
    ],
    mathCheckpoint: {
      prompt: "布尔代数的重要意义是：",
      options: [
        { label: "用符号运算精确表达逻辑推理", correct: true, explanation: "让推理可计算。" },
        { label: "只用于算术加减", correct: false, explanation: "它针对逻辑关系。" },
        { label: "让推理更含糊", correct: false, explanation: "恰好更精确。" },
      ],
    },
    establishTitle: "3. 数理逻辑的建立",
    establishEyebrow: "逻辑进阶",
    establishIntro:
      "弗雷格式提出量词与命题变量，怀特海与罗素奠基《数学原理》，希尔伯特研究形式系统，哥德尔不完备定理揭示局限，数理逻辑得以确立。",
    establishCardTitle: "关键人物与贡献",
    establishPoints: ["弗雷格式：量词与概念脚本", "怀特海/罗素：数学逻辑体系", "希尔伯特与哥德尔：形式系统与其极限"],
    establishCheckpoint: {
      prompt: "数理逻辑确立的意义在于：",
      options: [
        {
          label: "验证“推理是可以计算的”，为机器模拟思维提供符号体系",
          correct: true,
          explanation: "为计算实现奠基。",
        },
        { label: "证明所有命题都真", correct: false, explanation: "不完备性揭示局限。" },
        { label: "否定逻辑的作用", correct: false, explanation: "逻辑地位反而提升。" },
      ],
    },
    summaryTitle: "小结",
    summaryPoints: [
      "亚里士多德三段论首次系统总结思维过程。",
      "布尔代数把推理变为符号运算，迈向可计算。",
      "数理逻辑奠定“思维-逻辑-计算”链，AI 得以模拟思维。",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "See Aristotle’s formal logic as a thinking-pattern summary.",
      "Learn Boolean algebra and mathematical logic in mathematizing thought.",
      "Understand the thinking–logic–computation chain for AI.",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "Patterns of thought",
    intro:
      "AI simulates thinking with computers. We must abstract thinking rules, express them in logic/math, then compute them.",
    chainTitle: "Thinking → Logic → Computation",
    chainCopy: "Abstract process → logical symbols → machine computation, grounding AI.",
    aristotleTitle: "1. Aristotle & Syllogism",
    aristotleEyebrow: "Logic starting point",
    aristotleIntro:
      "Aristotle studied thought, proposed syllogism: major + minor → conclusion. True premises guarantee true conclusion, separating content vs. process.",
    aristotleSteps: ["Spot major/minor/conclusion", "See errors from premises not reasoning", "Logic can be machine-followed"],
    aristotleCheckpoint: {
      prompt: "Syllogism’s breakthrough:",
      options: [
        { label: "Separates content from reasoning; true premises → true conclusion", correct: true, explanation: "Core contribution." },
        { label: "Proves all fish can fly", correct: false, explanation: "Not so." },
        { label: "Rejects reasoning’s value", correct: false, explanation: "He valued reasoning." },
      ],
    },
    mathTitle: "2. Mathematization of Thinking",
    mathIntro:
      "Hobbes: reasoning is calculation; Leibniz: math resolves disputes; Boole: AND/OR/NOT symbolic logic—Boolean algebra.",
    mathSteps: ["See Boolean algebra symbolizing facts/relations", "Understand ∀, ∃ boost expressiveness", "Math makes reasoning precise"],
    mathCheckpoint: {
      prompt: "Significance of Boolean algebra:",
      options: [
        { label: "Express logic as precise symbolic computation", correct: true, explanation: "Makes reasoning computable." },
        { label: "Only for arithmetic", correct: false, explanation: "It models logic." },
        { label: "Makes reasoning vague", correct: false, explanation: "It sharpens it." },
      ],
    },
    establishTitle: "3. Establishing Mathematical Logic",
    establishEyebrow: "Logic advances",
    establishIntro:
      "Frege added quantifiers/variables; Whitehead & Russell built Principia; Hilbert explored formal systems; Gödel’s incompleteness exposed limits—forming mathematical logic.",
    establishCardTitle: "Key figures & impacts",
    establishPoints: ["Frege: quantifiers/concept script", "Whitehead/Russell: logical foundations", "Hilbert/Gödel: formal systems & limits"],
    establishCheckpoint: {
      prompt: "Why does mathematical logic matter for AI?",
      options: [
        { label: "It proves reasoning is computable, giving machines a symbolic framework", correct: true, explanation: "Enables implementation." },
        { label: "It proves all statements are true", correct: false, explanation: "Incompleteness shows limits." },
        { label: "It dismisses logic’s role", correct: false, explanation: "Logic is elevated." },
      ],
    },
    summaryTitle: "Summary",
    summaryPoints: [
      "Syllogism first systemized thinking.",
      "Boolean algebra turned reasoning into symbols.",
      "Mathematical logic anchors the thinking–logic–computation chain for AI.",
    ],
  },
};
