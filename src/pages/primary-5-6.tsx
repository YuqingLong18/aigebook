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

export function PrimaryLesson5_6({ lang }: LessonProps) {
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
    { id: "no-end", label: t.noEndTitle },
    { id: "beyond", label: t.beyondTitle },
    { id: "disciplines", label: t.disciplinesTitle },
    { id: "coexist", label: t.coexistTitle },
    { id: "food", label: t.foodTitle },
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

        <SectionBlock id="no-end" title={t.noEndTitle} eyebrow={t.noEndEyebrow}>
          <InfoCard title={t.noEndConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.noEndConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.noEndParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <EverydayAIDemo
            lang={lang}
            title={t.noEndDemo.title}
            goal={t.noEndDemo.goal}
            resetLabel={ui.reset}
            tasks={t.noEndDemo.tasks}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.noEndSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.noEndCheckpoint.prompt}
            options={t.noEndCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="beyond" title={t.beyondTitle} eyebrow={t.beyondEyebrow}>
          <InfoCard title={t.beyondConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.beyondConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.beyondParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <AGISpectrumDemo
            lang={lang}
            title={t.beyondDemo.title}
            goal={t.beyondDemo.goal}
            resetLabel={ui.reset}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.beyondSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.beyondCheckpoint.prompt}
            options={t.beyondCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="disciplines" title={t.disciplinesTitle} eyebrow={t.disciplinesEyebrow}>
          <InfoCard title={t.disciplinesConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.disciplinesConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.disciplinesParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.disciplinesFigure.label}
            caption={t.disciplinesFigure.caption}
            placeholder={t.disciplinesFigure.placeholder}
          />
          <DisciplineImpactDemo
            lang={lang}
            title={t.disciplinesDemo.title}
            goal={t.disciplinesDemo.goal}
            resetLabel={ui.reset}
            impacts={t.disciplinesDemo.impacts}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.disciplinesSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.disciplinesCheckpoint.prompt}
            options={t.disciplinesCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="coexist" title={t.coexistTitle} eyebrow={t.coexistEyebrow}>
          <InfoCard title={t.coexistConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.coexistConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.coexistParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <RiskBenefitDemo
            lang={lang}
            title={t.coexistDemo.title}
            goal={t.coexistDemo.goal}
            resetLabel={ui.reset}
            scenarios={t.coexistDemo.scenarios}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.coexistSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.coexistCheckpoint.prompt}
            options={t.coexistCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="food" title={t.foodTitle} eyebrow={t.foodEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.foodPrompt}</p>
          <FutureRoleDemo
            lang={lang}
            title={t.foodDemo.title}
            goal={t.foodDemo.goal}
            resetLabel={ui.reset}
            roles={t.foodDemo.roles}
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

        <SectionBlock id="summary" title={t.summaryTitle} eyebrow={t.summaryEyebrow}>
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

type TaskCard = {
  key: string;
  label: string;
  detail: string;
};

function EverydayAIDemo({
  lang,
  title,
  goal,
  resetLabel,
  tasks,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  tasks: TaskCard[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(tasks[0]?.key ?? "");
  const current = tasks.find((task) => task.key === active) ?? tasks[0];

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
          onClick={() => setActive(tasks[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {tasks.map((task) => (
          <button
            key={task.key}
            type="button"
            onClick={() => setActive(task.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              task.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {task.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "AI 表现" : "AI capability"}
          </p>
          <p className="mt-1 text-sm">{current.detail}</p>
        </div>
      )}
    </div>
  );
}

function AGISpectrumDemo({
  lang,
  title,
  goal,
  resetLabel,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
}) {
  const isZh = lang === "zh";
  const [level, setLevel] = useState(40);

  const label =
    level < 40
      ? isZh
        ? "窄智能"
        : "Narrow AI"
      : level < 70
        ? isZh
          ? "通用智能雏形"
          : "Toward general AI"
        : isZh
          ? "更强的通用智能"
          : "Stronger general intelligence";

  const reset = () => setLevel(40);

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
          onClick={reset}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 grid gap-4 md:grid-cols-2">
        <label className="block text-sm font-semibold text-slate-700">
          {isZh ? "智能水平" : "Intelligence level"}
          <input
            type="range"
            min={0}
            max={100}
            value={level}
            onChange={(e) => setLevel(Number(e.target.value))}
            className="mt-1 w-full accent-brand-500"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={level}
          />
          <span className="text-xs text-slate-500">{level}</span>
        </label>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "阶段" : "Stage"}
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{label}</p>
          <p className="mt-2 text-xs text-slate-600">
            {isZh
              ? "大模型让智能从窄域走向更通用。"
              : "Large models move AI toward more general abilities."}
          </p>
        </div>
      </div>
    </div>
  );
}

type DisciplineImpact = {
  key: string;
  title: string;
  detail: string;
};

function DisciplineImpactDemo({
  lang,
  title,
  goal,
  resetLabel,
  impacts,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  impacts: DisciplineImpact[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(impacts[0]?.key ?? "");
  const current = impacts.find((impact) => impact.key === active) ?? impacts[0];

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
          onClick={() => setActive(impacts[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 grid gap-2 md:grid-cols-3">
        {impacts.map((impact) => (
          <button
            key={impact.key}
            type="button"
            onClick={() => setActive(impact.key)}
            className={[
              "rounded-xl border px-3 py-2 text-left text-xs font-semibold transition",
              impact.key === active
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {impact.title}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "突破" : "Impact"}
          </p>
          <p className="mt-1 text-sm">{current.detail}</p>
        </div>
      )}
    </div>
  );
}

type RiskScenario = {
  key: string;
  title: string;
  benefit: string;
  risk: string;
};

function RiskBenefitDemo({
  lang,
  title,
  goal,
  resetLabel,
  scenarios,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  scenarios: RiskScenario[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(scenarios[0]?.key ?? "");
  const current = scenarios.find((scenario) => scenario.key === active) ?? scenarios[0];

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
          onClick={() => setActive(scenarios[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {scenarios.map((scenario) => (
          <button
            key={scenario.key}
            type="button"
            onClick={() => setActive(scenario.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              scenario.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {scenario.title}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">
            <p className="text-xs font-semibold uppercase tracking-wide">{isZh ? "优势" : "Benefit"}</p>
            <p className="mt-1 text-sm">{current.benefit}</p>
          </div>
          <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-800">
            <p className="text-xs font-semibold uppercase tracking-wide">{isZh ? "风险" : "Risk"}</p>
            <p className="mt-1 text-sm">{current.risk}</p>
          </div>
        </div>
      )}
    </div>
  );
}

type RoleOption = {
  key: string;
  label: string;
  response: string;
};

function FutureRoleDemo({
  lang,
  title,
  goal,
  resetLabel,
  roles,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  roles: RoleOption[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(roles[0]?.key ?? "");
  const current = roles.find((role) => role.key === active) ?? roles[0];

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
          onClick={() => setActive(roles[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {roles.map((role) => (
          <button
            key={role.key}
            type="button"
            onClick={() => setActive(role.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              role.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {role.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "思考" : "Reflection"}
          </p>
          <p className="mt-1 text-sm">{current.response}</p>
        </div>
      )}
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand future trends in AI.",
      "Learn about AGI and its capabilities.",
      "Reflect on how humans should live alongside AI.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "AI has grown for nearly 70 years with peaks and downturns. We are now at a new crossroads.",
    noEndTitle: "1. No Predicted End Point",
    noEndEyebrow: "AI everywhere",
    noEndConceptTitle: "Concept Card",
    noEndConceptLines: [
      "AI writes reports and helps daily life.",
      "Artists and musicians already use AI tools.",
      "No one can predict the final endpoint.",
    ],
    noEndParas: [
      "Large language model apps can summarize notes, plan trips, and polish essays.",
      "If the 1956 pioneers saw today, they would be amazed by AI's progress.",
    ],
    noEndDemo: {
      title: "Everyday AI",
      goal: "See what AI can already do around us.",
      tasks: [
        {
          key: "writing",
          label: "Writing",
          detail: "Drafts essays, summaries, and reports quickly.",
        },
        {
          key: "music",
          label: "Music",
          detail: "Helps compose melodies and generate ideas.",
        },
        {
          key: "planning",
          label: "Planning",
          detail: "Suggests travel plans and schedules.",
        },
      ],
    },
    noEndSteps: [
      "Pick a daily AI task.",
      "Describe how it helps people.",
      "Discuss what still needs humans.",
    ],
    noEndCheckpoint: {
      prompt: "Why is there no predicted end point for AI?",
      options: [
        {
          label: "AI keeps improving and no one knows its final limit.",
          correct: true,
          explanation: "Progress is ongoing and future ability is uncertain.",
        },
        {
          label: "AI already stopped developing.",
          correct: false,
          explanation: "AI is still advancing rapidly.",
        },
        {
          label: "AI only works for one task.",
          correct: false,
          explanation: "AI works across many tasks today.",
        },
      ],
    },
    beyondTitle: "2. Intelligence Beyond Humans",
    beyondEyebrow: "Toward AGI",
    beyondConceptTitle: "Concept Card",
    beyondConceptLines: [
      "Narrow AI handled single tasks.",
      "Large models bring more general abilities.",
      "AI may surpass humans in many areas.",
    ],
    beyondParas: [
      "Large models reduce the need for separate systems for each task.",
      "With more data and better algorithms, AI's abilities will keep growing.",
      "AI can also control tools like drones and learn from real-world interaction.",
    ],
    beyondDemo: {
      title: "AGI Spectrum",
      goal: "Slide from narrow AI toward general intelligence.",
    },
    beyondSteps: [
      "Adjust the intelligence slider.",
      "Read the stage label.",
      "Explain the difference between narrow and general AI.",
    ],
    beyondCheckpoint: {
      prompt: "What changed with large language models?",
      options: [
        {
          label: "AI became more general and multi-task capable.",
          correct: true,
          explanation: "Large models handle broader tasks with one system.",
        },
        {
          label: "AI stopped learning from data.",
          correct: false,
          explanation: "Large models depend on massive data.",
        },
        {
          label: "AI only works for translation now.",
          correct: false,
          explanation: "Large models cover many tasks beyond translation.",
        },
      ],
    },
    disciplinesTitle: "3. Entering Other Disciplines",
    disciplinesEyebrow: "AI + science",
    disciplinesConceptTitle: "Concept Card",
    disciplinesConceptLines: [
      "AI is integrating with many scientific fields.",
      "AlphaFold predicted protein structures quickly.",
      "Cross-discipline impact may exceed ChatGPT or Sora.",
    ],
    disciplinesParas: [
      "AlphaFold reduced years of experiments to minutes, transforming biology and medicine.",
      "AI now supports breakthroughs in physics, astronomy, engineering, and more.",
    ],
    disciplinesFigure: {
      label: "Figure 5-17",
      caption: "AlphaFold predicting protein structure.",
      placeholder: "Illustration placeholder",
    },
    disciplinesDemo: {
      title: "Discipline Impact",
      goal: "Explore how AI supports other fields.",
      impacts: [
        {
          key: "biology",
          title: "Biology",
          detail: "AlphaFold predicts protein structures rapidly.",
        },
        {
          key: "astronomy",
          title: "Astronomy",
          detail: "AI helps analyze large telescope data.",
        },
        {
          key: "engineering",
          title: "Engineering",
          detail: "AI optimizes complex designs faster.",
        },
      ],
    },
    disciplinesSteps: [
      "Pick a discipline.",
      "Describe the AI impact.",
      "Explain why integration matters.",
    ],
    disciplinesCheckpoint: {
      prompt: "Why is AlphaFold important?",
      options: [
        {
          label: "It predicts protein structures quickly, transforming biology.",
          correct: true,
          explanation: "It reduced years of experiments to minutes.",
        },
        {
          label: "It only writes poems.",
          correct: false,
          explanation: "It focuses on protein structures.",
        },
        {
          label: "It stopped research progress.",
          correct: false,
          explanation: "It accelerated research progress.",
        },
      ],
    },
    coexistTitle: "4. Peaceful Coexistence with AI",
    coexistEyebrow: "Risks and benefits",
    coexistConceptTitle: "Concept Card",
    coexistConceptLines: [
      "AI can spread misinformation.",
      "Autonomous weapons raise safety concerns.",
      "We must learn to use AI wisely.",
    ],
    coexistParas: [
      "Large models sometimes generate incorrect information, making filtering harder.",
      "AI weapons and autonomous systems create new safety risks.",
      "Learning to coexist with AI is essential for modern citizens.",
    ],
    coexistDemo: {
      title: "Balance Benefits and Risks",
      goal: "Compare AI's advantages and risks.",
      scenarios: [
        {
          key: "news",
          title: "Information",
          benefit: "AI can summarize news quickly.",
          risk: "It may also spread misinformation.",
        },
        {
          key: "weapons",
          title: "Autonomy",
          benefit: "AI can assist in dangerous tasks.",
          risk: "Autonomous weapons may threaten safety.",
        },
        {
          key: "tools",
          title: "Everyday tools",
          benefit: "AI boosts productivity and creativity.",
          risk: "Overreliance may weaken critical thinking.",
        },
      ],
    },
    coexistSteps: [
      "Pick a scenario.",
      "Compare benefit and risk.",
      "Explain how to use AI safely.",
    ],
    coexistCheckpoint: {
      prompt: "What is a key skill for living with AI?",
      options: [
        {
          label: "Using AI's strengths while avoiding its dangers.",
          correct: true,
          explanation: "Balanced use is essential.",
        },
        {
          label: "Ignoring AI completely.",
          correct: false,
          explanation: "AI is already part of daily life.",
        },
        {
          label: "Letting AI make every decision.",
          correct: false,
          explanation: "Humans must stay responsible.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Future role",
    foodPrompt:
      "If AI discovers new laws of nature, what role should human scientists play?",
    foodDemo: {
      title: "Human Role",
      goal: "Consider how humans can contribute alongside AI.",
      roles: [
        {
          key: "guide",
          label: "Guide",
          response: "Humans can set goals and ethics for AI discovery.",
        },
        {
          key: "collab",
          label: "Collaborator",
          response: "Humans can interpret results and build new theories.",
        },
        {
          key: "creator",
          label: "Creator",
          response: "Humans can design new questions and directions.",
        },
      ],
    },
    foodSteps: [
      "Pick a possible role.",
      "Explain why it matters.",
      "Discuss how humans and AI can co-create.",
    ],
    foodCheckpoint: {
      prompt: "What is a healthy way to view AI's future?",
      options: [
        {
          label: "Work with AI while keeping human values and responsibility.",
          correct: true,
          explanation: "Coexistence requires balance and ethics.",
        },
        {
          label: "Stop using AI altogether.",
          correct: false,
          explanation: "AI is already part of society.",
        },
        {
          label: "Let AI replace all humans.",
          correct: false,
          explanation: "Humans still provide goals and values.",
        },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryEyebrow: "Summary",
    summaryPoints: [
      "AI continues to advance with no clear endpoint.",
      "Large models push AI toward more general abilities.",
      "AI is transforming many scientific disciplines.",
      "We must balance benefits and risks to coexist with AI.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解 AI 未来发展趋势。",
      "理解通用人工智能及其能力。",
      "思考人类如何与 AI 共处。",
    ],
    introTitle: "故事开头",
    introEyebrow: "开场",
    introText: "人工智能发展近 70 年，经历起伏，如今再度站在关键路口。",
    noEndTitle: "1. 没有终点",
    noEndEyebrow: "AI 无处不在",
    noEndConceptTitle: "概念卡片",
    noEndConceptLines: [
      "AI 能写报告、润色文章。",
      "艺术家与音乐人已开始使用 AI。",
      "未来的终点无人可预测。",
    ],
    noEndParas: [
      "大模型应用能总结会议、规划行程、润色写作。",
      "如果 1956 年的学者看到今天，会十分震撼。",
    ],
    noEndDemo: {
      title: "日常 AI",
      goal: "看看 AI 已经能做什么。",
      tasks: [
        {
          key: "writing",
          label: "写作",
          detail: "快速生成摘要、报告和作文。",
        },
        {
          key: "music",
          label: "音乐",
          detail: "辅助作曲与创意灵感。",
        },
        {
          key: "planning",
          label: "规划",
          detail: "提供旅行计划与日程建议。",
        },
      ],
    },
    noEndSteps: [
      "选择一个任务。",
      "描述 AI 如何帮助人们。",
      "讨论哪些仍需要人类。",
    ],
    noEndCheckpoint: {
      prompt: "为什么无法预测 AI 的终点？",
      options: [
        {
          label: "AI 还在持续进步，未来未知。",
          correct: true,
          explanation: "能力仍在增长。",
        },
        {
          label: "AI 已经停止发展。",
          correct: false,
          explanation: "AI 仍在快速进步。",
        },
        {
          label: "AI 只能做一件事。",
          correct: false,
          explanation: "AI 已能处理多种任务。",
        },
      ],
    },
    beyondTitle: "2. 智能超越人类",
    beyondEyebrow: "走向通用",
    beyondConceptTitle: "概念卡片",
    beyondConceptLines: [
      "过去的 AI 只能做单一任务。",
      "大模型带来更通用能力。",
      "AI 可能超过人类多项能力。",
    ],
    beyondParas: [
      "大模型减少了对多个专用模型的依赖。",
      "随着数据和算法提升，AI 能力继续增长。",
      "AI 还能控制工具，如无人机并从现实学习。",
    ],
    beyondDemo: {
      title: "AGI 光谱",
      goal: "从窄智能走向通用智能。",
    },
    beyondSteps: [
      "调整智能滑块。",
      "观察阶段变化。",
      "解释窄智能与通用智能差异。",
    ],
    beyondCheckpoint: {
      prompt: "大模型带来的变化是什么？",
      options: [
        {
          label: "AI 变得更通用、多任务。",
          correct: true,
          explanation: "大模型可执行多种任务。",
        },
        {
          label: "AI 不再需要数据。",
          correct: false,
          explanation: "数据仍是核心。",
        },
        {
          label: "AI 只剩翻译功能。",
          correct: false,
          explanation: "大模型覆盖多种任务。",
        },
      ],
    },
    disciplinesTitle: "3. 走进各学科",
    disciplinesEyebrow: "跨学科",
    disciplinesConceptTitle: "概念卡片",
    disciplinesConceptLines: [
      "AI 与科学学科深度融合。",
      "AlphaFold 改变了生物学。",
      "影响可能超过 ChatGPT。",
    ],
    disciplinesParas: [
      "AlphaFold 将蛋白质结构预测从多年缩短到数分钟。",
      "AI 正在推动物理、天文、工程等领域进步。",
    ],
    disciplinesFigure: {
      label: "图 5-17",
      caption: "AlphaFold 预测蛋白质结构。",
      placeholder: "插图占位",
    },
    disciplinesDemo: {
      title: "学科影响",
      goal: "看看 AI 如何推动各学科发展。",
      impacts: [
        {
          key: "biology",
          title: "生物学",
          detail: "AlphaFold 快速预测蛋白质结构。",
        },
        {
          key: "astronomy",
          title: "天文学",
          detail: "AI 分析海量望远镜数据。",
        },
        {
          key: "engineering",
          title: "工程",
          detail: "AI 优化复杂设计方案。",
        },
      ],
    },
    disciplinesSteps: [
      "选择一个学科。",
      "描述 AI 影响。",
      "说明跨学科意义。",
    ],
    disciplinesCheckpoint: {
      prompt: "AlphaFold 的重要性是什么？",
      options: [
        {
          label: "快速预测蛋白质结构，推动生物学。",
          correct: true,
          explanation: "它大幅加速科研。",
        },
        {
          label: "只会写诗。",
          correct: false,
          explanation: "它用于蛋白质结构预测。",
        },
        {
          label: "阻碍科研进展。",
          correct: false,
          explanation: "它加速科研。",
        },
      ],
    },
    coexistTitle: "4. 与 AI 和平共处",
    coexistEyebrow: "风险与收益",
    coexistConceptTitle: "概念卡片",
    coexistConceptLines: [
      "AI 可能传播错误信息。",
      "自动武器带来安全隐患。",
      "要学会合理使用 AI。",
    ],
    coexistParas: [
      "大模型有时会生成错误信息，影响判断。",
      "AI 武器的出现带来安全风险。",
      "学会利用优势、规避风险是关键。",
    ],
    coexistDemo: {
      title: "权衡收益与风险",
      goal: "比较 AI 的优势与隐患。",
      scenarios: [
        {
          key: "news",
          title: "信息",
          benefit: "快速总结新闻与资料。",
          risk: "可能传播错误信息。",
        },
        {
          key: "weapons",
          title: "自动化",
          benefit: "执行危险任务更安全。",
          risk: "自主武器可能威胁安全。",
        },
        {
          key: "tools",
          title: "日常工具",
          benefit: "提高效率与创造力。",
          risk: "过度依赖削弱思考。",
        },
      ],
    },
    coexistSteps: [
      "选择一个情境。",
      "比较优势与风险。",
      "说明如何安全使用 AI。",
    ],
    coexistCheckpoint: {
      prompt: "与 AI 共处的关键能力是什么？",
      options: [
        {
          label: "发挥 AI 优势并规避风险。",
          correct: true,
          explanation: "需要理性与责任。",
        },
        {
          label: "完全忽视 AI。",
          correct: false,
          explanation: "AI 已融入生活。",
        },
        {
          label: "让 AI 决定一切。",
          correct: false,
          explanation: "人类仍需负责。",
        },
      ],
    },
    foodTitle: "想一想",
    foodEyebrow: "科学家的角色",
    foodPrompt:
      "如果 AI 能发现自然新规律，人类科学家该扮演什么角色？",
    foodDemo: {
      title: "人类角色",
      goal: "思考人类与 AI 的合作方式。",
      roles: [
        {
          key: "guide",
          label: "引导者",
          response: "人类制定目标与价值方向。",
        },
        {
          key: "collab",
          label: "合作者",
          response: "人类解释结果并建立新理论。",
        },
        {
          key: "creator",
          label: "创造者",
          response: "人类提出新的问题与探索方向。",
        },
      ],
    },
    foodSteps: [
      "选择一个角色。",
      "说明它的意义。",
      "讨论人机共创的未来。",
    ],
    foodCheckpoint: {
      prompt: "如何更好地面对 AI 未来？",
      options: [
        {
          label: "与 AI 合作，同时坚持人类价值与责任。",
          correct: true,
          explanation: "共存需要平衡与伦理。",
        },
        {
          label: "完全不用 AI。",
          correct: false,
          explanation: "AI 已进入社会。",
        },
        {
          label: "让 AI 取代所有人。",
          correct: false,
          explanation: "人类仍需定义价值与方向。",
        },
      ],
    },
    summaryTitle: "要点回顾",
    summaryEyebrow: "总结",
    summaryPoints: [
      "AI 持续前进，没有明确终点。",
      "大模型推动 AI 走向更通用能力。",
      "AI 正在改变多学科发展。",
      "我们需要平衡风险与收益，共处共进。",
    ],
  },
};
