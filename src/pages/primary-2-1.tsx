import { useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { FigureCard } from "../components/FigureCard";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";

type LessonProps = {
  lang: "en" | "zh";
};

export function PrimaryLesson2_1({ lang }: LessonProps) {
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
    { id: "evolution", label: t.evolutionTitle },
    { id: "uses", label: t.usesTitle },
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

        <SectionBlock id="evolution" title={t.evolutionTitle} eyebrow={t.evolutionEyebrow}>
          <InfoCard title={t.evolutionConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.evolutionConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.evolutionParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <div className="grid gap-3 md:grid-cols-3">
            {t.evolutionFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <TicketEvolutionDemo
            lang={lang}
            title={t.ticketDemo.title}
            goal={t.ticketDemo.goal}
            resetLabel={ui.reset}
            stages={t.ticketDemo.stages}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.evolutionSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.evolutionCheckpoint.prompt}
            options={t.evolutionCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="uses" title={t.usesTitle} eyebrow={t.usesEyebrow}>
          <InfoCard title={t.usesConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.usesConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.usesParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <div className="grid gap-3 md:grid-cols-2">
            {t.usesFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <FaceUseCasesDemo
            lang={lang}
            title={t.usesDemo.title}
            goal={t.usesDemo.goal}
            resetLabel={ui.reset}
            cases={t.usesDemo.cases}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.usesSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.usesCheckpoint.prompt}
            options={t.usesCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="food" title={t.foodTitle} eyebrow={t.foodEyebrow}>
          <InfoCard title={t.foodConceptTitle}>
            <p>{t.foodConceptText}</p>
          </InfoCard>
          <InfoCard title={t.foodPromptTitle}>
            <p>{t.foodPrompt}</p>
          </InfoCard>
          <SafeScanDemo
            lang={lang}
            title={t.safeDemo.title}
            goal={t.safeDemo.goal}
            resetLabel={ui.reset}
            actions={t.safeDemo.actions}
          />
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
          <InfoCard title={t.historyCardTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.historyPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </InfoCard>
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

type TicketStage = {
  key: string;
  label: string;
  details: string[];
};

function TicketEvolutionDemo({
  lang,
  title,
  goal,
  resetLabel,
  stages,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  stages: TicketStage[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(stages[0]?.key ?? "");
  const current = stages.find((stage) => stage.key === active) ?? stages[0];

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
          onClick={() => setActive(stages[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {stages.map((stage) => (
          <button
            key={stage.key}
            type="button"
            onClick={() => setActive(stage.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              stage.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {stage.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "关键变化" : "Key Changes"}
          </p>
          <ul className="mt-2 space-y-1 text-sm text-slate-700">
            {current.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

type UseCase = {
  key: string;
  label: string;
  outcome: string;
};

function FaceUseCasesDemo({
  lang,
  title,
  goal,
  resetLabel,
  cases,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  cases: UseCase[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(cases[0]?.key ?? "");
  const current = cases.find((item) => item.key === active) ?? cases[0];

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
          onClick={() => setActive(cases[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        {cases.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => setActive(item.key)}
            className={[
              "rounded-xl border px-3 py-2 text-left text-xs font-semibold transition",
              item.key === active
                ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {item.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "应用结果" : "Outcome"}
          </p>
          <p className="mt-1 text-sm text-slate-700">{current.outcome}</p>
        </div>
      )}
    </div>
  );
}

type SafeAction = {
  key: string;
  label: string;
  outcome: string;
  safe: boolean;
};

function SafeScanDemo({
  lang,
  title,
  goal,
  resetLabel,
  actions,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  actions: SafeAction[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(actions[0]?.key ?? "");
  const current = actions.find((action) => action.key === active) ?? actions[0];

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
          onClick={() => setActive(actions[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        {actions.map((action) => (
          <button
            key={action.key}
            type="button"
            onClick={() => setActive(action.key)}
            className={[
              "rounded-xl border px-3 py-2 text-left text-xs font-semibold transition",
              action.key === active
                ? action.safe
                  ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                  : "border-rose-500 bg-rose-50 text-rose-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {action.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "结果提示" : "Outcome"}
          </p>
          <p className="mt-1 text-sm text-slate-700">{current.outcome}</p>
        </div>
      )}
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand how train tickets have changed over time and learn that high-speed rail’s paperless travel benefits from facial recognition technology.",
      "Learn about the convenience and risks of facial recognition and develop an awareness of how to use it wisely.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "If you have ever taken a ride on the Fuxing or Harmony high-speed trains, you have seen how efficient modern travel is. AI supports every step of the journey. Let’s see how train tickets evolved.",
    evolutionTitle: "1. The Evolution of a Train Ticket",
    evolutionEyebrow: "From paper to face scan",
    evolutionConceptTitle: "Concept Card",
    evolutionConceptLines: [
      "Early tickets required long lines and manual hole punching.",
      "12306 enabled online purchase and magnetic tickets with gates.",
      "Paperless entry compares your ID photo and face scan.",
    ],
    evolutionParas: [
      "Older train tickets (Figure 2-1) were bought only after waiting in long lines. A ticket inspector punched a hole to show the ticket was used. These tickets were anonymous, so losing one meant you could not board.",
      "In 2010, China’s railway system launched the 12306 website. People could buy tickets online. Blue magnetic tickets (Figure 2-2) could be inserted into automatic gates, which made entry faster.",
      "In 2020, high-speed rail went paperless. Passengers use an ID card and a face scan at the gate (Figure 2-3). The system compares the ID photo with your face and opens the gate if they match.",
    ],
    evolutionFigures: [
      { label: "Figure 2-1", caption: "Early hard-card train ticket.", placeholder: "Illustration placeholder" },
      { label: "Figure 2-2", caption: "Blue magnetic train ticket.", placeholder: "Illustration placeholder" },
      { label: "Figure 2-3", caption: "Automated facial recognition ticket gate.", placeholder: "Illustration placeholder" },
    ],
    ticketDemo: {
      title: "Ticket Timeline",
      goal: "Compare how tickets, checks, and IDs changed over time.",
      stages: [
        {
          key: "paper",
          label: "Hard-card ticket",
          details: ["Buy in line at the station.", "Inspector punches a hole.", "Anonymous ticket; losing it blocks entry."],
        },
        {
          key: "magnetic",
          label: "Magnetic ticket",
          details: ["Buy online via 12306.", "Insert ticket into gate.", "Faster entry without manual inspection."],
        },
        {
          key: "face",
          label: "Paperless face scan",
          details: ["Show ID card and look at the camera.", "System matches ID photo and face scan.", "No paper ticket needed."],
        },
      ],
    },
    evolutionSteps: [
      "Pick a stage in the ticket timeline.",
      "Note who or what checks the ticket.",
      "Explain why face scan enables paperless travel.",
    ],
    evolutionCheckpoint: {
      prompt: "What makes paperless entry possible on high-speed rail?",
      options: [
        {
          label: "Facial recognition matches your ID photo with your face scan.",
          correct: true,
          explanation: "The system opens the gate only if the match is successful.",
        },
        {
          label: "A paper ticket is stamped by a ticket inspector.",
          correct: false,
          explanation: "Paperless entry does not use stamped tickets.",
        },
        {
          label: "The ticket is anonymous and has no ID check.",
          correct: false,
          explanation: "Paperless entry requires verified identity.",
        },
      ],
    },
    usesTitle: "2. Other Uses of Facial Recognition",
    usesEyebrow: "Beyond tickets",
    usesConceptTitle: "Concept Card",
    usesConceptLines: [
      "Face scans can verify identity for many services.",
      "They help public safety and reduce paperwork.",
      "They are even used to identify animals.",
    ],
    usesParas: [
      "Facial recognition works as more than a ticket inspector. It can verify your face for temporary travel IDs, ATM withdrawals, exam check-ins, and even coffee payments (Figure 2-4).",
      "It can also help police catch criminals. In 2019, a system in Chongqing alerted police to a fugitive based on an old photo, and the suspect was captured.",
      "Facial recognition is used for animals too. Dogs can be identified by nose patterns, pigs can be monitored for health (Figure 2-5), and wildlife can be tracked for conservation.",
    ],
    usesFigures: [
      { label: "Figure 2-4", caption: "Coffee machine with facial recognition payment.", placeholder: "Illustration placeholder" },
      { label: "Figure 2-5", caption: "Pig facial recognition technology.", placeholder: "Illustration placeholder" },
    ],
    usesDemo: {
      title: "Where Face Scans Help",
      goal: "Explore different real-world uses of facial recognition.",
      cases: [
        {
          key: "travel",
          label: "Travel ID check",
          outcome: "A face scan can verify identity even if the ID card is lost.",
        },
        {
          key: "bank",
          label: "ATM withdrawal",
          outcome: "Banks can use face scans to confirm who is withdrawing cash.",
        },
        {
          key: "public",
          label: "Public safety",
          outcome: "Police can compare face data to find suspects.",
        },
        {
          key: "coffee",
          label: "Face payment",
          outcome: "Some kiosks let you pay by scanning your face.",
        },
        {
          key: "pets",
          label: "Pet ID",
          outcome: "Animals can have biological IDs to help them get home.",
        },
        {
          key: "wildlife",
          label: "Wildlife tracking",
          outcome: "Researchers can monitor animals and protect habitats.",
        },
      ],
    },
    usesSteps: [
      "Pick a place where face scans are used.",
      "Read the outcome and benefit.",
      "Notice that safety and convenience both matter.",
    ],
    usesCheckpoint: {
      prompt: "Which example shows facial recognition used for animals?",
      options: [
        {
          label: "Monitoring pig health with face scans.",
          correct: true,
          explanation: "Pig facial recognition helps track health.",
        },
        {
          label: "Scanning a face to enter a train gate.",
          correct: false,
          explanation: "That example is for travel, not animals.",
        },
        {
          label: "Paying at a coffee machine with a face scan.",
          correct: false,
          explanation: "That example is for payment, not animals.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Privacy and safety",
    foodConceptTitle: "Concept Card",
    foodConceptText:
      "Facial recognition is convenient, but privacy and security risks mean we must protect identity information and report suspicious behavior quickly.",
    foodPromptTitle: "Think about it",
    foodPrompt:
      "If someone at a subway station offers a free gift for scanning a QR code, what should you do?",
    safeDemo: {
      title: "Safe Scan Choices",
      goal: "Practice a safe response to suspicious QR code offers.",
      actions: [
        {
          key: "scan",
          label: "Scan the code right away",
          outcome: "Risky: it could steal identity information.",
          safe: false,
        },
        {
          key: "ask",
          label: "Ask staff or parents first",
          outcome: "Safer: verify before sharing any information.",
          safe: true,
        },
        {
          key: "refuse",
          label: "Refuse and walk away",
          outcome: "Safe: avoid unknown requests for identity data.",
          safe: true,
        },
      ],
    },
    foodSteps: [
      "Choose an action for the QR code offer.",
      "Check whether the action is safe.",
      "Explain why identity data must be protected.",
    ],
    foodCheckpoint: {
      prompt: "What is the safest response to a QR code gift offer?",
      options: [
        {
          label: "Verify with staff or parents and refuse if unsure.",
          correct: true,
          explanation: "Protect identity information first.",
        },
        {
          label: "Scan immediately so you do not miss the gift.",
          correct: false,
          explanation: "Unknown QR codes can be risky.",
        },
        {
          label: "Share your face photo to get the prize.",
          correct: false,
          explanation: "Never share identity data with strangers.",
        },
      ],
    },
    historyTitle: "History Corner",
    historyEyebrow: "High-speed rail",
    historyCardTitle: "China’s High-Speed Rail Network",
    historyPoints: [
      "The first Beijing-Tianjin line opened in 2008, and the network now exceeds 40,000 km.",
      "High-speed trains run between 250 and 350 km/h, cutting travel times in half or more.",
      "The network boosts tourism, logistics, and regional development across China.",
    ],
    summaryTitle: "Summary",
    summaryEyebrow: "Key Takeaways",
    summaryPoints: [
      "Train tickets evolved from paper to magnetic to paperless face scans.",
      "Facial recognition offers convenience but needs careful privacy protection.",
      "AI-powered rail systems support faster, greener travel.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解火车票的发展变化，认识高铁无纸化出行依赖人脸识别技术。",
      "了解人脸识别的便利与风险，培养理性使用的意识。",
    ],
    introTitle: "故事开头",
    introEyebrow: "课程导入",
    introText:
      "如果你坐过“复兴号”或“和谐号”，一定感受过高铁的高效与便捷。旅程的每个环节都离不开 AI。我们从火车票的变化开始探索。",
    evolutionTitle: "1. 火车票的演变",
    evolutionEyebrow: "从纸票到刷脸",
    evolutionConceptTitle: "概念卡片",
    evolutionConceptLines: [
      "早期纸质票需要排队购买并人工打孔。",
      "12306 让购票更方便，磁票可自助进站。",
      "无纸化通过 ID 与人脸比对实现刷脸通行。",
    ],
    evolutionParas: [
      "过去的硬纸票（图 2-1）需要在窗口排长队购买。进站时检票员会在票上打孔，票是匿名的，丢了就无法进站。",
      "2010 年铁路 12306 上线，购票变为线上。蓝色磁卡票（图 2-2）可直接插入闸机，通行更快捷。",
      "2020 年高铁全面无纸化。乘客把身份证放在闸机上并看向摄像头（图 2-3），系统比对身份证照片与人脸后放行。",
    ],
    evolutionFigures: [
      { label: "图 2-1", caption: "早期硬纸火车票。", placeholder: "插图占位" },
      { label: "图 2-2", caption: "蓝色磁卡火车票。", placeholder: "插图占位" },
      { label: "图 2-3", caption: "刷脸自动检票闸机。", placeholder: "插图占位" },
    ],
    ticketDemo: {
      title: "火车票时间线",
      goal: "比较不同阶段的购票与检票方式。",
      stages: [
        {
          key: "paper",
          label: "硬纸票",
          details: ["站内排队购票。", "检票员打孔验票。", "匿名票丢失无法进站。"],
        },
        {
          key: "magnetic",
          label: "磁卡票",
          details: ["12306 在线购票。", "插卡闸机自动开门。", "进站效率更高。"],
        },
        {
          key: "face",
          label: "无纸化刷脸",
          details: ["刷身份证并看向摄像头。", "系统比对证件与人脸。", "不再需要纸票。"],
        },
      ],
    },
    evolutionSteps: ["选择一个票种阶段。", "观察检票方式的变化。", "说明刷脸如何实现无纸化。"],
    evolutionCheckpoint: {
      prompt: "高铁无纸化进站依靠什么技术？",
      options: [
        {
          label: "人脸识别对比身份证照片。",
          correct: true,
          explanation: "证件照与人脸匹配后才放行。",
        },
        {
          label: "检票员人工打孔。",
          correct: false,
          explanation: "无纸化不再使用纸票。",
        },
        {
          label: "匿名票无需核验身份。",
          correct: false,
          explanation: "无纸化需要身份验证。",
        },
      ],
    },
    usesTitle: "2. 人脸识别的更多用途",
    usesEyebrow: "不止是检票",
    usesConceptTitle: "概念卡片",
    usesConceptLines: [
      "刷脸可用于多种身份验证场景。",
      "它能提升便利性，也支持公共安全。",
      "动物识别也在使用这项技术。",
    ],
    usesParas: [
      "刷脸不仅是“检票员”。高铁遗失身份证可刷脸办理临时证明，银行 ATM 可刷脸取现，商超、餐厅、考试签到等场景也在使用（图 2-4）。",
      "人脸识别还能协助警方破案。2019 年重庆某地系统根据旧照片识别到逃犯，最终成功抓捕。",
      "它还用于动物识别：狗鼻纹识别、猪脸识别健康监测（图 2-5），以及野生动物追踪保护。",
    ],
    usesFigures: [
      { label: "图 2-4", caption: "人脸识别支付咖啡机。", placeholder: "插图占位" },
      { label: "图 2-5", caption: "猪脸识别技术。", placeholder: "插图占位" },
    ],
    usesDemo: {
      title: "刷脸应用地图",
      goal: "了解人脸识别在不同场景的用途。",
      cases: [
        {
          key: "travel",
          label: "出行核验",
          outcome: "刷脸验证身份，临时证明也能通行。",
        },
        {
          key: "bank",
          label: "银行取现",
          outcome: "刷脸确认身份，减少卡证丢失风险。",
        },
        {
          key: "public",
          label: "公共安全",
          outcome: "系统比对人脸数据，协助抓捕嫌疑人。",
        },
        {
          key: "coffee",
          label: "刷脸支付",
          outcome: "无需现金或卡片即可完成支付。",
        },
        {
          key: "pets",
          label: "宠物识别",
          outcome: "给宠物建立身份档案，便于走失找回。",
        },
        {
          key: "wildlife",
          label: "野生动物",
          outcome: "追踪迁徙与栖息地变化，支持保护。",
        },
      ],
    },
    usesSteps: ["选择一个使用场景。", "阅读刷脸带来的好处。", "思考便利与风险。"],
    usesCheckpoint: {
      prompt: "哪个例子体现了动物人脸识别？",
      options: [
        {
          label: "猪脸识别监测健康。",
          correct: true,
          explanation: "猪脸识别用于健康监测。",
        },
        {
          label: "刷脸进站。",
          correct: false,
          explanation: "这是交通出行场景。",
        },
        {
          label: "刷脸买咖啡。",
          correct: false,
          explanation: "这是支付场景。",
        },
      ],
    },
    foodTitle: "思考食粮",
    foodEyebrow: "隐私与安全",
    foodConceptTitle: "概念卡片",
    foodConceptText: "刷脸带来便利，但也有隐私与安全风险，需要保护身份信息并及时报警。",
    foodPromptTitle: "想一想",
    foodPrompt: "地铁站有人让你扫码领小礼物，你应该怎么做？",
    safeDemo: {
      title: "安全扫码选择",
      goal: "练习面对陌生二维码时的安全判断。",
      actions: [
        {
          key: "scan",
          label: "马上扫码",
          outcome: "有风险，可能泄露身份信息。",
          safe: false,
        },
        {
          key: "ask",
          label: "先询问工作人员或家长",
          outcome: "更安全，核实后再决定。",
          safe: true,
        },
        {
          key: "refuse",
          label: "拒绝并离开",
          outcome: "安全，避免未知风险。",
          safe: true,
        },
      ],
    },
    foodSteps: ["选择你的应对方式。", "判断是否安全。", "解释为什么要保护身份信息。"],
    foodCheckpoint: {
      prompt: "遇到陌生二维码赠礼，最安全的做法是什么？",
      options: [
        {
          label: "先核实来源，不确定就拒绝。",
          correct: true,
          explanation: "保护身份信息最重要。",
        },
        {
          label: "立刻扫码领取。",
          correct: false,
          explanation: "未知二维码存在风险。",
        },
        {
          label: "把人脸照片发给对方。",
          correct: false,
          explanation: "不应向陌生人提供身份信息。",
        },
      ],
    },
    historyTitle: "历史角",
    historyEyebrow: "高铁发展",
    historyCardTitle: "中国高铁",
    historyPoints: [
      "2008 年京津城际开通，高铁里程已超 4 万公里。",
      "列车时速 250–350 公里，大幅缩短城市间通行时间。",
      "高铁带动旅游、物流与区域经济发展。",
    ],
    summaryTitle: "小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "火车票从纸票到磁票再到刷脸无纸化。",
      "人脸识别便利但需警惕隐私风险。",
      "AI 让高铁出行更高效、更绿色。",
    ],
  },
};
