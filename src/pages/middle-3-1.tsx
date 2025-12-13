import { useMemo, useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson3_1({ lang }: LessonProps) {
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
    { id: "golden", label: t.goldenTitle },
    { id: "winter1", label: t.winter1Title },
    { id: "recovery", label: t.recoveryTitle },
    { id: "winter2", label: t.winter2Title },
    { id: "pragmatic", label: t.pragmaticTitle },
    { id: "growth", label: t.growthTitle },
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
          <EraExplorer lang={lang} />
        </SectionBlock>

        <SectionBlock id="golden" title={t.goldenTitle} eyebrow={t.goldenEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.goldenIntro}</p>
          <MilestoneGrid lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.goldenSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.goldenCheckpoint.prompt}
            options={t.goldenCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="winter1" title={t.winter1Title}>
          <p className="text-sm leading-relaxed text-slate-700">{t.winter1Intro}</p>
          <WinterCard lang={lang} phase="first" />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.winter1Checkpoint.prompt}
            options={t.winter1Checkpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="recovery" title={t.recoveryTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.recoveryIntro}</p>
          <GuidedSteps title={ui.guidedTitle} steps={t.recoverySteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.recoveryCheckpoint.prompt}
            options={t.recoveryCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="winter2" title={t.winter2Title}>
          <p className="text-sm leading-relaxed text-slate-700">{t.winter2Intro}</p>
          <WinterCard lang={lang} phase="second" />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.winter2Checkpoint.prompt}
            options={t.winter2Checkpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="pragmatic" title={t.pragmaticTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.pragmaticIntro}</p>
          <TimelineList title={t.pragmaticTimelineTitle} items={t.pragmaticTimeline} />
          <GuidedSteps title={ui.guidedTitle} steps={t.pragmaticSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.pragmaticCheckpoint.prompt}
            options={t.pragmaticCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="growth" title={t.growthTitle} eyebrow={t.growthEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.growthIntro}</p>
          <GrowthHighlights lang={lang} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.growthCheckpoint.prompt}
            options={t.growthCheckpoint.options}
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

function MilestoneGrid({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const items = useMemo(
    () => [
      {
        title: isZh ? "逻辑推理机" : "Logic Theorist",
        note: isZh ? "证明数学定理，奠定符号 AI 成功" : "Proved theorems—symbolic AI win.",
      },
      {
        title: "ELIZA",
        note: isZh ? "模板对话，模仿心理咨询" : "Template chatbot, therapist style.",
      },
      {
        title: isZh ? "感知机" : "Perceptron",
        note: isZh ? "单层神经网络做简单识别" : "Single-layer net for simple recognition.",
      },
    ],
    [isZh],
  );
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="grid gap-2 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
            <p className="text-sm font-semibold text-slate-900">{item.title}</p>
            <p className="mt-1 text-xs text-slate-700">{item.note}</p>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-slate-600">
        {isZh ? "黄金十年聚焦符号推理，聊天模板与早期神经网络。" : "Golden decade: symbolic reasoning, chat templates, early nets."}
      </p>
    </div>
  );
}

function WinterCard({ lang, phase }: { lang: "en" | "zh"; phase: "first" | "second" }) {
  const isZh = lang === "zh";
  const copy = {
    first: {
      title: isZh ? "第一次寒冬" : "First AI winter",
      text: isZh
        ? "复杂度理论揭示大量问题难以高效求解；感知机被批评仅能线性可分。"
        : "Complexity theory shows many tasks are intractable; perceptron limited to linear cases.",
    },
    second: {
      title: isZh ? "第二次寒冬" : "Second AI winter",
      text: isZh
        ? "专家系统构建/维护知识库困难；第五代项目未达预期；象棋式批评转向行为智能。"
        : "Expert systems hard to build/maintain; FGCS stalled; shift toward behavior-based AI.",
    },
  }[phase];
  return (
    <InfoCard title={copy.title}>
      <p className="text-sm text-slate-700">{copy.text}</p>
    </InfoCard>
  );
}

function TimelineList({ title, items }: { title: string; items: string[] }) {
  return (
    <InfoCard title={title}>
      <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </InfoCard>
  );
}

function GrowthHighlights({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const [focus, setFocus] = useState<"data" | "events">("data");
  const notes: Record<typeof focus, string> = {
    data: isZh
      ? "大数据+算力让深度学习崛起；ImageNet 2012 误差降至 15.3%。"
      : "Big data + compute powered deep nets; ImageNet 2012 error to 15.3%.",
    events: isZh
      ? "AlphaGo 2016、GPT 时代、Sora 视频生成等标志性节点。"
      : "AlphaGo 2016, GPT era, Sora video generation as key milestones.",
  };
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex gap-2">
        {[
          { key: "data", label: isZh ? "技术驱动" : "Tech drivers" },
          { key: "events", label: isZh ? "关键事件" : "Key events" },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setFocus(tab.key as typeof focus)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              focus === tab.key
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-sm text-slate-800">{notes[focus]}</p>
    </div>
  );
}

function EraExplorer({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const eras = useMemo(
    () => [
      {
        key: "golden",
        label: isZh ? "黄金十年" : "Golden decade",
        optimism: isZh ? "符号推理+感知机，信心高涨" : "Symbolic + perceptron optimism",
        blocker: isZh ? "现实问题复杂度被低估" : "Real-world complexity underestimated",
        lesson: isZh ? "乐观需配合可验证的路径" : "Optimism needs testable paths",
      },
      {
        key: "winter",
        label: isZh ? "寒冬时期" : "Winter periods",
        optimism: isZh ? "期望落空，资金/信心下滑" : "Expectations miss, funding/faith dip",
        blocker: isZh ? "算力、算法、知识获取受限" : "Limited compute, algorithms, knowledge capture",
        lesson: isZh ? "重新聚焦可行问题与方法" : "Refocus on tractable problems/methods",
      },
      {
        key: "revival",
        label: isZh ? "复苏与深度时代" : "Revival & deep era",
        optimism: isZh ? "数据+算力+深度网络开启新篇章" : "Data + compute + deep nets reopen growth",
        blocker: isZh ? "仍需解决效率、对齐、安全" : "Still need efficiency, alignment, safety",
        lesson: isZh ? "坚持 + 技术突破推动新周期" : "Persistence + breakthroughs power new cycles",
      },
    ],
    [isZh],
  );
  const [idx, setIdx] = useState(0);
  const current = eras[idx];
  return (
    <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex flex-wrap gap-2">
        {eras.map((era, i) => (
          <button
            key={era.key}
            type="button"
            onClick={() => setIdx(i)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              idx === i ? "border-brand-500 bg-brand-50 text-brand-700" : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {era.label}
          </button>
        ))}
      </div>
      <div className="mt-3 grid gap-2 md:grid-cols-3">
        <InfoCard title={isZh ? "乐观点" : "Optimism"}>
          <p className="text-sm text-slate-700">{current.optimism}</p>
        </InfoCard>
        <InfoCard title={isZh ? "受限因素" : "Blocker"}>
          <p className="text-sm text-slate-700">{current.blocker}</p>
        </InfoCard>
        <InfoCard title={isZh ? "启示" : "Lesson"}>
          <p className="text-sm text-slate-700">{current.lesson}</p>
        </InfoCard>
      </div>
    </div>
  );
}

const content = {
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解人工智能发展的高潮与低谷及代表性成果。",
      "体会科学家在困境中的坚持精神与学科前进动力。",
    ],
    introTitle: "开篇理解",
    introEyebrow: "曲折之路",
    intro:
      "达特茅斯会议后，AI 历经高峰与寒冬。有的转行，有的坚守，推动领域前进。本节回顾起伏与坚持。",
    introCardTitle: "主线",
    introCard: "AI 发展并非直线：黄金十年→寒冬→专家系统→再遇寒冬→务实复苏→深度浪潮。",
    goldenTitle: "1. 黄金十年（1956–1974）",
    goldenEyebrow: "符号 AI 崛起",
    goldenIntro:
      "符号推理、ELIZA、感知机等成果让学者信心高涨。Simon/Minsky 预测“机器将做任何人能做的事”。",
    goldenSteps: ["列出关键成果", "理解符号推理与早期神经网络", "思考乐观预测缘由"],
    goldenCheckpoint: {
      prompt: "黄金十年的代表成果不包括：",
      options: [
        { label: "ELIZA 模板聊天", correct: false, explanation: "它是代表成果之一。" },
        { label: "感知机图像识别", correct: false, explanation: "也是代表成果。" },
        { label: "解决所有非线性问题的神经网络", correct: true, explanation: "当时仅线性可分，未解决非线性。"},
      ],
    },
    winter1Title: "2. 第一次寒冬（1974–1980）",
    winter1Intro:
      "复杂度理论揭示大量 AI 问题难以高效求解，感知机被证明只能处理线性可分问题，信心受挫。",
    winter1Checkpoint: {
      prompt: "感知机被批评的核心原因是：",
      options: [
        { label: "只能解决线性可分问题", correct: true, explanation: "Minsky/Papert 指出局限。" },
        { label: "完全不能学习", correct: false, explanation: "能学但受限。" },
        { label: "太便宜", correct: false, explanation: "成本不是批评点。" },
      ],
    },
    recoveryTitle: "3. 暂时复苏（1980–1987）",
    recoveryIntro:
      "专家系统聚焦窄领域：DENDRAL、MYCIN、XCON 等在化学、医疗、配置等场景取得成功。",
    recoverySteps: ["识别专家系统组件：知识库+推理机", "列举应用场景", "理解为何能在窄域成功"],
    recoveryCheckpoint: {
      prompt: "专家系统的典型组成是：",
      options: [
        { label: "知识库 + 推理规则", correct: true, explanation: "核心就是知识与规则。" },
        { label: "随机猜测器", correct: false, explanation: "需要知识驱动。" },
        { label: "五代硬件", correct: false, explanation: "非其核心。" },
      ],
    },
    winter2Title: "4. 第二次寒冬（1987–1993）",
    winter2Intro:
      "知识获取/维护成本高，第五代项目未达预期，Brooks 倡导“先感知行动” → 行为式智能与机器人昆虫。",
    winter2Checkpoint: {
      prompt: "导致第二次寒冬的关键因素之一是：",
      options: [
        { label: "知识库构建维护困难", correct: true, explanation: "专家系统难扩展。" },
        { label: "算力过剩", correct: false, explanation: "算力当时不足。" },
        { label: "完全没有应用需求", correct: false, explanation: "需求在，但方法受限。" },
      ],
    },
    pragmaticTitle: "5. 务实复苏（1993–2010）",
    pragmaticIntro:
      "聚焦可落地问题，数据与统计模型推动语音/图像/NLP；1997 深蓝击败卡斯帕罗夫，2011 Watson 赢 Jeopardy!。",
    pragmaticTimelineTitle: "关键事件",
    pragmaticTimeline: ["1997 深蓝胜世界冠军", "2011 Watson 赢 Jeopardy!", "统计学习/特征工程成为主流"],
    pragmaticSteps: ["聚焦数据与统计方法", "理解特征工程角色", "梳理标志性事件"],
    pragmaticCheckpoint: {
      prompt: "Deep Blue 的意义在于：",
      options: [
        { label: "展示专用搜索+评估在棋类的实力", correct: true, explanation: "凸显计算+知识结合。" },
        { label: "证明 AGI 已实现", correct: false, explanation: "仍是窄域系统。" },
        { label: "完全没有人参与", correct: false, explanation: "仍需人类开发与调参。" },
      ],
    },
    growthTitle: "6. 快速增长（2011–至今）",
    growthEyebrow: "深度学习崛起",
    growthIntro:
      "大数据+GPU+多层网络→ImageNet 突破；AlphaGo、ChatGPT、Sora 等标志智能革命，预训练模型开启新纪元。",
    growthCheckpoint: {
      prompt: "2012 年 ImageNet 突破来自：",
      options: [
        { label: "深度卷积网络显著降低错误率", correct: true, explanation: "AlexNet 把 Top-5 误差降到 15.3%。" },
        { label: "完全停用 GPU", correct: false, explanation: "GPU 是关键算力。" },
        { label: "删掉所有训练数据", correct: false, explanation: "数据越多越好。" },
      ],
    },
    summaryTitle: "小结",
    summaryPoints: [
      "AI 发展曲折：符号→寒冬→专家系统→再寒冬→统计务实→深度浪潮。",
      "每次低谷都有坚持者开辟新路径。",
      "方法论从规则驱动转向数据/表示学习，继续演进。",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand AI’s highs/lows and representative milestones.",
      "See perseverance of scientists during winters and its role in progress.",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "A winding road",
    intro:
      "After Dartmouth, AI saw peaks and winters. Some left; others persisted and reshaped the field. We review the twists and determination.",
    introCardTitle: "Thread",
    introCard: "Golden decade → winter → expert systems → second winter → pragmatic revival → deep wave.",
    goldenTitle: "1. Golden Decade (1956–1974)",
    goldenEyebrow: "Symbolic AI rise",
    goldenIntro:
      "Symbolic reasoning, ELIZA, perceptron boosted optimism. Simon/Minsky predicted machines would do any human work.",
    goldenSteps: ["List key wins", "Contrast symbolic vs early nets", "Ask why optimism grew"],
    goldenCheckpoint: {
      prompt: "Which was NOT achieved in the golden decade?",
      options: [
        { label: "ELIZA template chat", correct: false, explanation: "It was achieved." },
        { label: "Perceptron image recognition", correct: false, explanation: "A milestone." },
        { label: "Neural nets solving all nonlinear problems", correct: true, explanation: "They handled only linear cases." },
      ],
    },
    winter1Title: "2. First AI Winter (1974–1980)",
    winter1Intro:
      "Complexity theory showed many tasks are intractable; perceptron limited to linear separable problems—confidence dropped.",
    winter1Checkpoint: {
      prompt: "Core critique of the perceptron:",
      options: [
        { label: "Only handles linearly separable problems", correct: true, explanation: "Minsky/Papert showed this." },
        { label: "Cannot learn at all", correct: false, explanation: "It learns but is limited." },
        { label: "Too cheap", correct: false, explanation: "Cost wasn’t the issue." },
      ],
    },
    recoveryTitle: "3. Brief Recovery (1980–1987)",
    recoveryIntro:
      "Expert systems in narrow domains: DENDRAL, MYCIN, XCON succeeded in chemistry, medicine, configuration.",
    recoverySteps: ["Know components: knowledge base + inference", "List domains", "Why narrow focus wins"],
    recoveryCheckpoint: {
      prompt: "Typical components of expert systems:",
      options: [
        { label: "Knowledge base + inference rules", correct: true, explanation: "Core pieces." },
        { label: "Random guesser", correct: false, explanation: "Needs knowledge." },
        { label: "Fifth-gen hardware", correct: false, explanation: "Not core." },
      ],
    },
    winter2Title: "4. Second AI Winter (1987–1993)",
    winter2Intro:
      "Knowledge bases costly; FGCS underdelivered; Brooks pushed behavior-based AI (perception/action over symbols).",
    winter2Checkpoint: {
      prompt: "A key factor in the second winter:",
      options: [
        { label: "Knowledge acquisition/maintenance difficulty", correct: true, explanation: "Expert systems were brittle." },
        { label: "Excessive compute power", correct: false, explanation: "Compute was scarce." },
        { label: "Zero application demand", correct: false, explanation: "Demand existed; methods lagged." },
      ],
    },
    pragmaticTitle: "5. Pragmatism & Revival (1993–2010)",
    pragmaticIntro:
      "Focus on solvable tasks; data + statistical models drove speech/vision/NLP. 1997 Deep Blue beat Kasparov; 2011 Watson won Jeopardy!.",
    pragmaticTimelineTitle: "Key events",
    pragmaticTimeline: ["1997 Deep Blue defeats world champ", "2011 Watson wins Jeopardy!", "Statistical learning + feature engineering"],
    pragmaticSteps: ["Center on data/statistics", "Role of feature engineering", "Recall landmark events"],
    pragmaticCheckpoint: {
      prompt: "Deep Blue signified:",
      options: [
        { label: "Power of domain-specific search + evaluation", correct: true, explanation: "Compute + knowledge combo." },
        { label: "Proof AGI was solved", correct: false, explanation: "Still narrow AI." },
        { label: "No human involvement", correct: false, explanation: "Humans built/tuned it." },
      ],
    },
    growthTitle: "6. Rapid Growth (2011–present)",
    growthEyebrow: "Deep learning boom",
    growthIntro:
      "Big data + GPUs + deep nets → ImageNet breakthrough; AlphaGo, ChatGPT, Sora mark an intelligence revolution and pretraining era.",
    growthCheckpoint: {
      prompt: "ImageNet 2012 leap came from:",
      options: [
        { label: "Deep CNN slashing error rates", correct: true, explanation: "AlexNet cut Top-5 error to 15.3%." },
        { label: "Avoiding GPUs entirely", correct: false, explanation: "GPUs were essential." },
        { label: "Removing all training data", correct: false, explanation: "More data helped." },
      ],
    },
    summaryTitle: "Summary",
    summaryPoints: [
      "AI path: symbolic → winter → expert systems → winter → statistical pragmatism → deep wave.",
      "Each trough had persistent pioneers opening new paths.",
      "Methods shifted from rule-driven to data/representation learning.",
    ],
  },
};
