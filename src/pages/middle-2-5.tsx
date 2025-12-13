import { useMemo, useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson2_5({ lang }: LessonProps) {
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
    { id: "background", label: t.backgroundTitle },
    { id: "prepare", label: t.prepareTitle },
    { id: "conference", label: t.confTitle },
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

        <SectionBlock id="background" title={t.backgroundTitle} eyebrow={t.backgroundEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.backgroundIntro}</p>
          <EarlyWorks lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.backgroundSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.backgroundCheckpoint.prompt}
            options={t.backgroundCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="prepare" title={t.prepareTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.prepareIntro}</p>
          <ProposalView lang={lang} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.prepareCheckpoint.prompt}
            options={t.prepareCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="conference" title={t.confTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.confIntro}</p>
          <AttendeeGrid lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.confSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.confCheckpoint.prompt}
            options={t.confCheckpoint.options}
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

function EarlyWorks({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const works = useMemo(
    () => [
      {
        title: isZh ? "香农下棋算法 (极小化极大)" : "Shannon’s game algorithm (minimax)",
        note: isZh ? "假设对手最优，选择己方最优招法。" : "Assume perfect opponent, pick best move.",
      },
      {
        title: isZh ? "逻辑理论家" : "Logic Theorist",
        note: isZh ? "自动证明《数学原理》前 52 条中的 38 条定理。" : "Proved 38/52 Principia theorems automatically.",
      },
      {
        title: isZh ? "SNARC 神经网络机" : "SNARC neural net",
        note: isZh ? "模仿大脑，通过学习完成任务。" : "Brain-inspired, learned tasks via adaptation.",
      },
    ],
    [isZh],
  );
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="grid gap-2 md:grid-cols-3">
        {works.map((w) => (
          <div key={w.title} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
            <p className="text-sm font-semibold text-slate-900">{w.title}</p>
            <p className="mt-1 text-xs text-slate-700">{w.note}</p>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-slate-600">
        {isZh ? "这些早期成果显示计算机可模拟推理/学习，激发达特茅斯会议。" : "Early results showed computers can reason/learn—fueling Dartmouth."}
      </p>
    </div>
  );
}

function ProposalView({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const topics = useMemo(
    () => [
      isZh ? "让机器用语言、形成抽象" : "Make machines use language, form abstractions",
      isZh ? "如何编程与提升效率" : "How to program and define efficiency",
      isZh ? "神经网络表征概念" : "Neural nets to represent concepts",
      isZh ? "随机性与创造力" : "Randomness and creativity",
    ],
    [isZh],
  );
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
        {isZh ? "提案要点（1955）" : "1955 proposal highlights"}
      </p>
      <ul className="mt-2 space-y-1 text-sm text-slate-800">
        {topics.map((tpc) => (
          <li key={tpc} className="rounded-lg bg-slate-50 px-3 py-2">
            {tpc}
          </li>
        ))}
      </ul>
      <p className="mt-2 text-xs text-slate-600">
        {isZh ? "McCarthy 等首次使用“人工智能”一词，筹备两个月工作坊。" : "McCarthy et al. first used “Artificial Intelligence,” planning a two-month workshop."}
      </p>
    </div>
  );
}

function AttendeeGrid({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const people = useMemo(
    () => [
      { name: "John McCarthy", role: isZh ? "命名 AI，组织会议" : "Coined AI, organized" },
      { name: "Claude Shannon", role: isZh ? "信息论/游戏算法" : "Info theory/game algo" },
      { name: "Marvin Minsky", role: isZh ? "神经网络先行者" : "Neural net pioneer" },
      { name: "Nathaniel Rochester", role: isZh ? "IBM 研究管理者" : "IBM research lead" },
      { name: "Simon & Newell", role: isZh ? "逻辑理论家作者" : "Logic Theorist creators" },
      { name: "John Nash", role: isZh ? "博弈论" : "Game theory" },
    ],
    [isZh],
  );
  const [focus, setFocus] = useState(0);
  const current = people[focus];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="grid gap-2 md:grid-cols-3">
        {people.map((p, idx) => (
          <button
            key={p.name}
            type="button"
            onClick={() => setFocus(idx)}
            className={[
              "rounded-xl border px-3 py-2 text-left text-sm font-semibold transition",
              focus === idx
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-800 hover:border-slate-300",
            ].join(" ")}
          >
            {p.name}
          </button>
        ))}
      </div>
      <div className="mt-3 rounded-xl border border-slate-100 bg-slate-50 p-3 text-sm text-slate-800">
        {current.role}
      </div>
      <p className="mt-1 text-xs text-slate-600">
        {isZh ? "多学科背景汇聚，碰撞出 AI 的方向与问题清单。" : "Multidisciplinary mix shaped AI’s agenda and questions."}
      </p>
    </div>
  );
}

const content = {
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解达特茅斯会议的背景与主要议题。",
      "认识会议如何奠定人工智能学科的方向与基础。",
    ],
    introTitle: "开篇理解",
    introEyebrow: "AI 的命名时刻",
    intro:
      "1956 达特茅斯会议正式提出“人工智能”，标记 AI 作为独立学科登场，汇聚多学科青年科学家。",
    introCardTitle: "核心问题",
    introCard: "如何用计算机实现图灵提出的机器智能？",
    backgroundTitle: "1. 背景与前期成果",
    backgroundEyebrow: "奠基探索",
    backgroundIntro:
      "香农棋类算法、Simon/Newell 的逻辑理论家、Minsky 的 SNARC 展示了计算机能推理和学习，激发举办会议。",
    backgroundSteps: ["列出早期成果", "思考它们如何指向智能", "理解动机：协作加速突破"],
    backgroundCheckpoint: {
      prompt: "“逻辑理论家”展示了什么能力？",
      options: [
        { label: "自动证明数学定理", correct: true, explanation: "证明《数学原理》定理。" },
        { label: "只会下棋", correct: false, explanation: "那是香农的工作方向。" },
        { label: "只会播放音乐", correct: false, explanation: "无关。" },
      ],
    },
    prepareTitle: "2. 筹备与提案",
    prepareIntro:
      "McCarthy、Shannon、Minsky、Rochester 等向洛克菲勒基金提交提案，首次写下“Artificial Intelligence”，列出语言、抽象、效率、神经网络等议题。",
    prepareCheckpoint: {
      prompt: "提案中的关键表述是：",
      options: [
        { label: "“研究如何让机器使用语言、形成抽象”", correct: true, explanation: "摘自提案关键句。" },
        { label: "“禁止机器学习”", correct: false, explanation: "与提案相反。" },
        { label: "“只讨论硬件散热”", correct: false, explanation: "与主题无关。" },
      ],
    },
    confTitle: "3. 会议召开",
    confIntro:
      "1956 年 6 月起在达特茅斯数学系教室举行，为期两个月，约 47 人参加，气氛开放，奠定 AI 问题清单与方向。",
    confSteps: [
      "认识参会者的跨学科背景",
      "提炼核心议题（自我改进、语言、效率）",
      "理解“AI”命名及学科确立意义",
    ],
    confCheckpoint: {
      prompt: "达特茅斯会议的历史意义是：",
      options: [
        { label: "AI 作为独立学科正式命名和确立方向", correct: true, explanation: "是 AI 诞生节点。" },
        { label: "取消所有 AI 研究", correct: false, explanation: "恰恰是启程。" },
        { label: "仅讨论博弈论", correct: false, explanation: "议题更广泛。" },
      ],
    },
    summaryTitle: "小结",
    summaryPoints: [
      "早期推理/学习成果促成 AI 会议。",
      "提案首次写下“人工智能”，明确关键议题。",
      "达特茅斯会议让 AI 成为独立学科，问题清单影响至今。",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand Dartmouth’s background and topics.",
      "See how it established AI’s foundation and direction.",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "Naming AI",
    intro:
      "The 1956 Dartmouth Conference coined “Artificial Intelligence,” launching AI as a field and gathering diverse young scientists.",
    introCardTitle: "Core quest",
    introCard: "How to realize Turing’s machine-intelligence vision with computers?",
    backgroundTitle: "1. Background & Early Work",
    backgroundEyebrow: "Foundational explorations",
    backgroundIntro:
      "Shannon’s minimax chess, Simon/Newell’s Logic Theorist, Minsky’s SNARC showed computers can reason/learn—fueling the meeting.",
    backgroundSteps: ["List early works", "See how they point to intelligence", "Motivation: collaborate to accelerate"],
    backgroundCheckpoint: {
      prompt: "Logic Theorist demonstrated:",
      options: [
        { label: "Automatically proving math theorems", correct: true, explanation: "It proved 38/52 Principia theorems." },
        { label: "Only playing chess", correct: false, explanation: "That was Shannon’s focus." },
        { label: "Only playing music", correct: false, explanation: "Unrelated." },
      ],
    },
    prepareTitle: "2. Preparing & Proposal",
    prepareIntro:
      "McCarthy, Shannon, Minsky, Rochester proposed a workshop to Rockefeller, first writing “Artificial Intelligence,” listing language, abstraction, efficiency, neural nets, creativity topics.",
    prepareCheckpoint: {
      prompt: "A key line in the proposal:",
      options: [
        {
          label: "“Study how to make machines use language, form abstractions…”",
          correct: true,
          explanation: "Direct from the proposal.",
        },
        { label: "“Ban machine learning”", correct: false, explanation: "Opposite of intent." },
        { label: "“Only discuss hardware cooling”", correct: false, explanation: "Not the topic." },
      ],
    },
    confTitle: "3. The Conference",
    confIntro:
      "Started June 1956 at Dartmouth math department, ran two months, ~47 attendees; open discussions set AI’s questions and directions.",
    confSteps: ["Note multidisciplinary attendees", "Extract key topics (self-improve, language, efficiency)", "See AI naming/discipline significance"],
    confCheckpoint: {
      prompt: "Dartmouth’s historic significance:",
      options: [
        { label: "It named AI and set its research agenda", correct: true, explanation: "Birth of AI field." },
        { label: "It ended all AI research", correct: false, explanation: "Opposite." },
        { label: "It only covered game theory", correct: false, explanation: "Topics were broader." },
      ],
    },
    summaryTitle: "Summary",
    summaryPoints: [
      "Early reasoning/learning successes led to the AI workshop.",
      "Proposal first used “Artificial Intelligence,” listing key topics.",
      "Dartmouth birthed AI as a discipline; its questions still echo today.",
    ],
  },
};
