import { useMemo, useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson2_4({ lang }: LessonProps) {
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
    { id: "life", label: t.lifeTitle },
    { id: "contrib", label: t.contribTitle },
    { id: "recognition", label: t.recogTitle },
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

        <SectionBlock id="life" title={t.lifeTitle} eyebrow={t.lifeEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.lifeIntro}</p>
          <LifeTimeline lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.lifeSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.lifeCheckpoint.prompt}
            options={t.lifeCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="contrib" title={t.contribTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.contribIntro}</p>
          <ContribTabs lang={lang} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.contribCheckpoint.prompt}
            options={t.contribCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="recognition" title={t.recogTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.recogIntro}</p>
          <InfoCard title={t.recogCardTitle}>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
              {t.recogPoints.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </InfoCard>
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

function LifeTimeline({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const [index, setIndex] = useState(0);
  const events = useMemo(
    () => [
      {
        label: isZh ? "1912 伦敦出生" : "1912 Born London",
        note: isZh ? "童年展现数学天赋，热爱科学。" : "Early math talent, loved science.",
      },
      {
        label: isZh ? "1936 图灵机论文" : "1936 TM paper",
        note: isZh ? "提出图灵机与决策问题，不存在万能算法。" : "Proposed TM; no universal decision algorithm.",
      },
      {
        label: isZh ? "二战破译 Enigma" : "WWII Enigma",
        note: isZh ? "在布莱切利庄园破译德军密码，缩短战争。" : "Bletchley Park codebreaking shortened war.",
      },
      {
        label: isZh ? "1948 智能机器报告" : "1948 Intelligent Machinery",
        note: isZh ? "提出机器学习、进化思想，探索机器智能。" : "Proposed learning/evolution ideas for machines.",
      },
      {
        label: isZh ? "1950 图灵测试" : "1950 Turing Test",
        note: isZh ? "用对话可否被辨认来界定“智能”。" : "Behavioral test: indistinguishable conversation as intelligence mark.",
      },
    ],
    [isZh],
  );
  const current = events[index];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex flex-wrap gap-2">
        {events.map((e, i) => (
          <button
            key={e.label}
            type="button"
            onClick={() => setIndex(i)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              i === index
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {e.label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-sm text-slate-800">{current.note}</p>
      <p className="mt-1 text-xs text-slate-600">
        {isZh ? "图灵的成长与贡献贯穿计算与智能的奠基。 " : "Turing’s milestones span computing and intelligence foundations."}
      </p>
    </div>
  );
}

function ContribTabs({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const [tab, setTab] = useState<"tm" | "intelligence" | "test">("tm");
  const copy: Record<typeof tab, { title: string; text: string }> = {
    tm: {
      title: isZh ? "图灵机模型" : "Turing Machine model",
      text: isZh
        ? "极简通用计算模型，奠定现代计算机原型与可计算性理论。"
        : "Simple universal model; foundation of modern computers and computability.",
    },
    intelligence: {
      title: isZh ? "机器智能构想" : "Machine intelligence ideas",
      text: isZh
        ? "提出像“教孩子”一样训练机器、强化学习、进化算法的思路。"
        : "Suggested training machines like children, reinforcement learning, evolutionary ideas.",
    },
    test: {
      title: isZh ? "图灵测试" : "Turing Test",
      text: isZh
        ? "以对话不可区分为“智能”判据，强调行为标准。"
        : "Behavioral criterion: indistinguishable dialog signals intelligence.",
    },
  };
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex gap-2">
        {[
          { key: "tm", label: isZh ? "图灵机" : "Turing Machine" },
          { key: "intelligence", label: isZh ? "智能设想" : "Intelligence ideas" },
          { key: "test", label: isZh ? "图灵测试" : "Turing Test" },
        ].map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => setTab(item.key as typeof tab)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              tab === item.key
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="mt-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
        <p className="text-sm font-semibold text-slate-900">{copy[tab].title}</p>
        <p className="mt-1 text-sm text-slate-800">{copy[tab].text}</p>
      </div>
    </div>
  );
}

const content = {
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解图灵生平及其对计算机科学与人工智能的影响。",
      "掌握图灵机、机器智能设想、图灵测试三大贡献。",
    ],
    introTitle: "开篇理解",
    introEyebrow: "计算巨人",
    intro:
      "图灵在计算、智能、密码、测试标准等方面开创先河，让“计算”成为信息时代的核心。",
    introCardTitle: "关键主线",
    introCard: "图灵机 → 机器智能设想 → 图灵测试，奠定 AI 思想与工具。",
    lifeTitle: "1. 图灵生平",
    lifeEyebrow: "成长轨迹",
    lifeIntro:
      "从少年天赋到剑桥/普林斯顿学习，再到二战破译，再到机器智能探索，生命虽短贡献巨大。",
    lifeSteps: ["梳理时间节点", "看到学术与战争贡献", "理解其如何引出 AI 思想"],
    lifeCheckpoint: {
      prompt: "图灵在二战中的突出贡献是：",
      options: [
        { label: "破译 Enigma 并设计高效解密机", correct: true, explanation: "缩短战争时间。" },
        { label: "发明算盘", correct: false, explanation: "与图灵无关。" },
        { label: "提出牛顿定律", correct: false, explanation: "与图灵无关。" },
      ],
    },
    contribTitle: "2. 三大贡献",
    contribIntro:
      "图灵机提供通用计算模型；“像教孩子”般训练机器，提出学习/进化思路；图灵测试以对话不可区分作为智能判据。",
    contribCheckpoint: {
      prompt: "图灵测试的核心思想是：",
      options: [
        { label: "通过对话无法区分人机即可认为机器有智能", correct: true, explanation: "行为标准。" },
        { label: "机器必须有情感", correct: false, explanation: "测试关注可观察行为。" },
        { label: "只要速度快就算智能", correct: false, explanation: "关注行为而非速度。" },
      ],
    },
    recogTitle: "3. 百年致敬",
    recogIntro:
      "2012 百年纪念、2022 英镑肖像，ACM 设立“图灵奖”表彰计算机科学贡献，鼓励后人。",
    recogCardTitle: "致敬与奖项",
    recogPoints: ["图灵奖被誉为“计算机界诺奖”", "激励后续科学家推动计算与 AI"],
    summaryTitle: "小结",
    summaryPoints: [
      "图灵用通用计算模型、智能设想、测试标准奠基 AI。",
      "破译密码、设计存储程序机等实践推进计算时代。",
      "图灵奖等致敬延续其影响力。",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Learn Turing’s life and impact on CS/AI.",
      "Master his three AI contributions: TM model, machine intelligence ideas, Turing Test.",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "Giant of computing",
    intro:
      "Turing pioneered computation, intelligence, cryptanalysis, and testing standards—making computation central to the information age.",
    introCardTitle: "Key thread",
    introCard: "Turing Machine → machine-intelligence ideas → Turing Test build AI’s tools and goals.",
    lifeTitle: "1. Turing’s Life",
    lifeEyebrow: "Trajectory",
    lifeIntro:
      "From gifted youth to Cambridge/Princeton, WWII codebreaking, then machine intelligence; short life, huge impact.",
    lifeSteps: ["Track key years", "See academic + wartime impact", "How it led to AI ideas"],
    lifeCheckpoint: {
      prompt: "Turing’s standout WWII contribution:",
      options: [
        { label: "Cracking Enigma and designing efficient decryption machines", correct: true, explanation: "Shortened the war." },
        { label: "Inventing the abacus", correct: false, explanation: "Not him." },
        { label: "Proposing Newton’s laws", correct: false, explanation: "Not his work." },
      ],
    },
    contribTitle: "2. Three Contributions",
    contribIntro:
      "TM for universal computing; training machines like children—learning/evolution ideas; Turing Test: indistinguishable dialog as intelligence criterion.",
    contribCheckpoint: {
      prompt: "Core idea of the Turing Test:",
      options: [
        { label: "If dialog can’t be told from human, machine counts as intelligent", correct: true, explanation: "Behavioral bar." },
        { label: "Machine must feel emotions", correct: false, explanation: "Focus is behavior." },
        { label: "Speed alone defines intelligence", correct: false, explanation: "Not about speed." },
      ],
    },
    recogTitle: "3. Recognition",
    recogIntro:
      "2012 centennial honors; 2022 UK £50 portrait; ACM’s 1966 Turing Award (the “Nobel of CS”) inspires future work.",
    recogCardTitle: "Honors",
    recogPoints: ["Turing Award lauds CS excellence", "Keeps his influence alive"],
    summaryTitle: "Summary",
    summaryPoints: [
      "TM, intelligence ideas, and the Turing Test anchor AI foundations.",
      "Codebreaking and stored-program work pushed the computing era.",
      "Awards and memorials extend his legacy.",
    ],
  },
};
