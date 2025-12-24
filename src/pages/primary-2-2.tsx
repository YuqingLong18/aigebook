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

export function PrimaryLesson2_2({ lang }: LessonProps) {
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
    { id: "lights", label: t.lightsTitle },
    { id: "birth", label: t.birthTitle },
    { id: "assist", label: t.assistTitle },
    { id: "brain", label: t.brainTitle },
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

        <SectionBlock id="lights" title={t.lightsTitle} eyebrow={t.lightsEyebrow}>
          <InfoCard title={t.lightsConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.lightsConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.lightsParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.lightsFigure.label}
            caption={t.lightsFigure.caption}
            placeholder={t.lightsFigure.placeholder}
          />
          <RuleBreakImpactDemo
            lang={lang}
            title={t.lightsDemo.title}
            goal={t.lightsDemo.goal}
            resetLabel={ui.reset}
            scenarios={t.lightsDemo.scenarios}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.lightsSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.lightsCheckpoint.prompt}
            options={t.lightsCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="birth" title={t.birthTitle} eyebrow={t.birthEyebrow}>
          <InfoCard title={t.birthConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.birthConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.birthParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.birthFigure.label}
            caption={t.birthFigure.caption}
            placeholder={t.birthFigure.placeholder}
          />
          <PlatePipelineDemo
            lang={lang}
            title={t.birthDemo.title}
            goal={t.birthDemo.goal}
            resetLabel={ui.reset}
            steps={t.birthDemo.steps}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.birthSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.birthCheckpoint.prompt}
            options={t.birthCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="assist" title={t.assistTitle} eyebrow={t.assistEyebrow}>
          <InfoCard title={t.assistConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.assistConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          <p className="text-sm leading-relaxed text-slate-700">{t.assistIntro}</p>
          <div className="grid gap-3 md:grid-cols-2">
            {t.assistFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <HelperDeviceDemo
            lang={lang}
            title={t.assistDemo.title}
            goal={t.assistDemo.goal}
            resetLabel={ui.reset}
            devices={t.assistDemo.devices}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.assistSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.assistCheckpoint.prompt}
            options={t.assistCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="brain" title={t.brainTitle} eyebrow={t.brainEyebrow}>
          <InfoCard title={t.brainConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.brainConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.brainParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <TrafficBrainDemo
            lang={lang}
            title={t.brainDemo.title}
            goal={t.brainDemo.goal}
            resetLabel={ui.reset}
            tasks={t.brainDemo.tasks}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.brainSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.brainCheckpoint.prompt}
            options={t.brainCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="food" title={t.foodTitle} eyebrow={t.foodEyebrow}>
          <InfoCard title={t.foodConceptTitle}>
            {t.foodParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <InfoCard title={t.foodPromptTitle}>
            <p>{t.foodPrompt}</p>
          </InfoCard>
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
            {t.summaryPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SectionBlock>
      </div>
    </div>
  );
}

type RuleScenario = {
  key: string;
  label: string;
  outcome: string;
  risk: number;
};

function RuleBreakImpactDemo({
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
  scenarios: RuleScenario[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(scenarios[0]?.key ?? "");
  const current = scenarios.find((item) => item.key === active) ?? scenarios[0];

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
        {scenarios.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => setActive(item.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
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
          <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
            <span>{isZh ? "风险水平" : "Risk Level"}</span>
            <span>{current.risk}%</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-white">
            <div className="h-full rounded-full bg-rose-400" style={{ width: `${current.risk}%` }} />
          </div>
          <p className="mt-2 text-sm text-slate-700">{current.outcome}</p>
        </div>
      )}
    </div>
  );
}

type PipelineStep = {
  title: string;
  detail: string;
};

function PlatePipelineDemo({
  lang,
  title,
  goal,
  resetLabel,
  steps,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  steps: PipelineStep[];
}) {
  const isZh = lang === "zh";
  const [index, setIndex] = useState(0);
  const current = steps[index] ?? steps[0];

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
          onClick={() => setIndex(0)}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {isZh ? "当前步骤" : "Current Step"}
        </p>
        <p className="mt-1 text-sm font-semibold text-slate-900">{current.title}</p>
        <p className="mt-1 text-sm text-slate-700">{current.detail}</p>
      </div>

      <div className="mt-3 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => setIndex((prev) => Math.max(prev - 1, 0))}
          className="rounded-lg border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-slate-300"
          disabled={index === 0}
        >
          {isZh ? "上一步" : "Back"}
        </button>
        <div className="text-xs font-semibold text-slate-600">
          {index + 1} / {steps.length}
        </div>
        <button
          type="button"
          onClick={() => setIndex((prev) => Math.min(prev + 1, steps.length - 1))}
          className="rounded-lg border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-slate-300"
          disabled={index === steps.length - 1}
        >
          {isZh ? "下一步" : "Next"}
        </button>
      </div>
    </div>
  );
}

type HelperDevice = {
  key: string;
  label: string;
  outcome: string;
};

function HelperDeviceDemo({
  lang,
  title,
  goal,
  resetLabel,
  devices,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  devices: HelperDevice[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(devices[0]?.key ?? "");
  const current = devices.find((item) => item.key === active) ?? devices[0];

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
          onClick={() => setActive(devices[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {devices.map((device) => (
          <button
            key={device.key}
            type="button"
            onClick={() => setActive(device.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              device.key === active
                ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {device.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "作用" : "Role"}
          </p>
          <p className="mt-1 text-sm text-slate-700">{current.outcome}</p>
        </div>
      )}
    </div>
  );
}

type BrainTask = {
  key: string;
  label: string;
  outcome: string;
};

function TrafficBrainDemo({
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
  tasks: BrainTask[];
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

      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {tasks.map((task) => (
          <button
            key={task.key}
            type="button"
            onClick={() => setActive(task.key)}
            className={[
              "rounded-xl border px-3 py-2 text-left text-xs font-semibold transition",
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
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "效果" : "Outcome"}
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
      "Understand what traffic enforcement cameras are, how they work, and that they are an application of AI.",
      "Learn about the role AI plays in managing city traffic.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "Growing cities mean more cars and pedestrians. AI-powered traffic enforcement cameras help keep roads safe with their high-tech \"eyes\".",
    lightsTitle: "1. Traffic Lights: The Traffic Commanders",
    lightsEyebrow: "Rules at intersections",
    lightsConceptTitle: "Concept Card",
    lightsConceptLines: [
      "Traffic lights guide cars with red, yellow, and green.",
      "Rule-breaking is dangerous and hard to catch manually.",
      "AI cameras help enforce rules safely.",
    ],
    lightsParas: [
      "At busy intersections, traffic lights guide cars and pedestrians (Figure 2-6).",
      "When people run red lights or speed, police once had to catch them in person. This was time-consuming and risky.",
    ],
    lightsFigure: {
      label: "Figure 2-6",
      caption: "Traffic lights and police officers directing traffic.",
      placeholder: "Illustration placeholder",
    },
    lightsDemo: {
      title: "Rule Breaking Impact",
      goal: "See how rule-breaking changes traffic safety risk.",
      scenarios: [
        {
          key: "follow",
          label: "Most follow rules",
          outcome: "Traffic flows smoothly and accidents are rare.",
          risk: 15,
        },
        {
          key: "break",
          label: "Some run red lights",
          outcome: "Safety risk rises and police workload increases.",
          risk: 65,
        },
        {
          key: "chaos",
          label: "Many ignore rules",
          outcome: "High risk of accidents and traffic chaos.",
          risk: 90,
        },
      ],
    },
    lightsSteps: [
      "Pick a traffic behavior scenario.",
      "Observe how the risk level changes.",
      "Explain why enforcement cameras help.",
    ],
    lightsCheckpoint: {
      prompt: "Why are traffic enforcement cameras helpful?",
      options: [
        {
          label: "They catch violations without risking officers at the road.",
          correct: true,
          explanation: "Cameras reduce danger and workload for police.",
        },
        {
          label: "They turn all lights green forever.",
          correct: false,
          explanation: "Lights still follow rules; cameras enforce them.",
        },
        {
          label: "They remove the need for any traffic rules.",
          correct: false,
          explanation: "Rules are still needed for safety.",
        },
      ],
    },
    birthTitle: "2. The Birth of Traffic Enforcement Camera",
    birthEyebrow: "Automatic license plate recognition",
    birthConceptTitle: "Concept Card",
    birthConceptLines: [
      "Cameras read license plates automatically.",
      "Violations are recorded and tickets are sent.",
      "Video evidence keeps enforcement fair.",
    ],
    birthParas: [
      "Automatic license plate recognition lets cameras read plates (Figure 2-7).",
      "If a car runs a red light, speeds, or parks illegally, the system records it and sends a ticket.",
      "Records can be reviewed if drivers appeal, keeping enforcement fair.",
      "Advanced AI like image segmentation, pose recognition, and action recognition can spot seat-belt, phone, or smoking violations.",
    ],
    birthFigure: {
      label: "Figure 2-7",
      caption: "Automatic license plate recognition.",
      placeholder: "Illustration placeholder",
    },
    birthDemo: {
      title: "From Camera to Ticket",
      goal: "Follow the steps of an enforcement camera.",
      steps: [
        { title: "Capture plate", detail: "The camera reads the license plate." },
        { title: "Check database", detail: "The system finds the vehicle owner." },
        { title: "Record evidence", detail: "Video is stored as proof." },
        { title: "Send ticket", detail: "The violation notice is issued automatically." },
      ],
    },
    birthSteps: [
      "Click through the enforcement steps.",
      "Find where evidence is stored.",
      "Explain why appeals are possible.",
    ],
    birthCheckpoint: {
      prompt: "Why does the system save video evidence?",
      options: [
        {
          label: "To prove the violation and ensure fairness.",
          correct: true,
          explanation: "Evidence helps review appeals.",
        },
        {
          label: "To make the traffic lights brighter.",
          correct: false,
          explanation: "Evidence is for review, not lighting.",
        },
        {
          label: "To hide the violation from drivers.",
          correct: false,
          explanation: "Evidence is used openly for verification.",
        },
      ],
    },
    assistTitle: "3. Assistive Devices for Traffic Enforcement Camera",
    assistEyebrow: "Helpers on the road",
    assistConceptTitle: "Concept Card",
    assistConceptLines: [
      "Cameras work with sound sensors, drones, and robots.",
      "Helpers spot honking, accidents, and lane abuse.",
      "Multiple tools make enforcement more complete.",
    ],
    assistIntro:
      "Traffic enforcement cameras do not work alone. They team up with devices like sound localization, drones, and patrol robots.",
    assistFigures: [
      {
        label: "Figure 2-8 (a)",
        caption: "Drones monitoring traffic from above.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 2-8 (b)",
        caption: "Patrol robots capturing cars using emergency lanes illegally.",
        placeholder: "Illustration placeholder",
      },
    ],
    assistDemo: {
      title: "Choose a Helper",
      goal: "Learn what each helper device does.",
      devices: [
        {
          key: "sound",
          label: "Sound localization",
          outcome: "Finds where horns come from to catch illegal honking.",
        },
        {
          key: "drone",
          label: "Drone patrol",
          outcome: "Spots accidents quickly and helps guide traffic.",
        },
        {
          key: "robot",
          label: "Patrol robot",
          outcome: "Photographs cars using the emergency lane illegally.",
        },
      ],
    },
    assistSteps: [
      "Pick a helper device.",
      "Read its role in traffic safety.",
      "Explain why multiple tools help enforcement.",
    ],
    assistCheckpoint: {
      prompt: "What can drones do for traffic enforcement?",
      options: [
        {
          label: "Monitor traffic from above and report accidents quickly.",
          correct: true,
          explanation: "Drones give a bird’s-eye view.",
        },
        {
          label: "Repair broken traffic lights instantly.",
          correct: false,
          explanation: "Drones do not repair lights.",
        },
        {
          label: "Sell tickets at the intersection.",
          correct: false,
          explanation: "They are used for monitoring, not sales.",
        },
      ],
    },
    brainTitle: "4. The City's \"Brain\"",
    brainEyebrow: "Smarter traffic flow",
    brainConceptTitle: "Concept Card",
    brainConceptLines: [
      "AI can track parking time and traffic flow.",
      "It helps find suspects and manage jams.",
      "Sharing data improves city navigation.",
    ],
    brainParas: [
      "AI can record parking time for management and fees.",
      "It can track routes to help police catch criminals.",
      "During jams, AI can adjust lights and share data with navigation apps.",
    ],
    brainDemo: {
      title: "Traffic Brain Tasks",
      goal: "See how AI coordinates city traffic.",
      tasks: [
        {
          key: "parking",
          label: "Parking management",
          outcome: "Tracks how long cars park and helps manage fees.",
        },
        {
          key: "tracking",
          label: "Suspect tracking",
          outcome: "Follows routes to help police respond quickly.",
        },
        {
          key: "jam",
          label: "Jam control",
          outcome: "Adjusts signal timing to ease congestion.",
        },
        {
          key: "navigation",
          label: "Navigation sharing",
          outcome: "Shares data to guide drivers to faster routes.",
        },
      ],
    },
    brainSteps: [
      "Pick a city traffic task.",
      "Read the AI outcome.",
      "Explain how the city becomes more efficient.",
    ],
    brainCheckpoint: {
      prompt: "How does the city's \"brain\" help during traffic jams?",
      options: [
        {
          label: "It controls lights to guide cars and ease congestion.",
          correct: true,
          explanation: "Signal timing can reduce jams.",
        },
        {
          label: "It turns off all lights.",
          correct: false,
          explanation: "Turning off lights would be unsafe.",
        },
        {
          label: "It tells everyone to stop driving forever.",
          correct: false,
          explanation: "The goal is smoother flow, not stopping traffic.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Rules matter",
    foodConceptTitle: "Concept Card",
    foodParas: [
      "Traffic enforcement cameras are helpful, but safety depends on everyone following rules.",
      "Some people obey only when cameras are nearby, which is dangerous.",
      "The true goal of rules is to protect everyone.",
    ],
    foodPromptTitle: "Discuss",
    foodPrompt: "Is it really a loss to be someone who always follows traffic rules?",
    foodCheckpoint: {
      prompt: "Why should we follow traffic rules even without cameras?",
      options: [
        {
          label: "Because safety depends on everyone, not just on cameras.",
          correct: true,
          explanation: "Rules protect all road users.",
        },
        {
          label: "Because rules only matter when cameras watch.",
          correct: false,
          explanation: "Rules matter everywhere for safety.",
        },
        {
          label: "Because following rules is always slower and worse.",
          correct: false,
          explanation: "Safe travel is more important than speed.",
        },
      ],
    },
    summaryTitle: "Summary",
    summaryEyebrow: "Key Takeaways",
    summaryPoints: [
      "Traffic enforcement cameras use AI to detect violations.",
      "Helpers like drones and robots expand road safety coverage.",
      "AI also acts as a city traffic brain to reduce congestion.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解电子交警是什么、如何工作，并认识它是人工智能的应用。",
      "了解 AI 在城市交通管理中的作用。",
    ],
    introTitle: "故事开头",
    introEyebrow: "课程导入",
    introText:
      "城市越大，车辆和行人越多，交通管理更难。AI 电子交警用“高科技眼睛”守护交通安全。",
    lightsTitle: "1. 交通灯：交通指挥官",
    lightsEyebrow: "规则与安全",
    lightsConceptTitle: "概念卡片",
    lightsConceptLines: [
      "红黄绿信号灯指挥车辆通行。",
      "违章行为危险且难以人工抓拍。",
      "电子交警可以安全执法。",
    ],
    lightsParas: ["繁忙路口由交通灯指挥（图 2-6）。", "闯红灯、超速等违章过去需要警察现场执法，费时且危险。"],
    lightsFigure: {
      label: "图 2-6",
      caption: "交通灯与交警指挥交通。",
      placeholder: "插图占位",
    },
    lightsDemo: {
      title: "违章影响",
      goal: "观察违章对安全风险的影响。",
      scenarios: [
        {
          key: "follow",
          label: "多数守规矩",
          outcome: "交通顺畅，事故少。",
          risk: 15,
        },
        {
          key: "break",
          label: "有人闯红灯",
          outcome: "风险上升，执法压力变大。",
          risk: 65,
        },
        {
          key: "chaos",
          label: "普遍违规",
          outcome: "事故风险极高，交通混乱。",
          risk: 90,
        },
      ],
    },
    lightsSteps: ["选择一种路口情况。", "观察风险变化。", "说明电子交警的作用。"],
    lightsCheckpoint: {
      prompt: "电子交警有什么重要作用？",
      options: [
        {
          label: "减少警察现场执法风险并提高效率。",
          correct: true,
          explanation: "自动化执法更安全高效。",
        },
        {
          label: "让所有信号灯都常亮绿灯。",
          correct: false,
          explanation: "信号灯仍按规则运行。",
        },
        {
          label: "取消所有交通规则。",
          correct: false,
          explanation: "规则是安全基础。",
        },
      ],
    },
    birthTitle: "2. 电子交警的诞生",
    birthEyebrow: "自动识别车牌",
    birthConceptTitle: "概念卡片",
    birthConceptLines: [
      "摄像头可自动识别车牌。",
      "违章记录并自动开罚单。",
      "视频证据保证公平。",
    ],
    birthParas: [
      "自动车牌识别让摄像头能读取车牌（图 2-7）。",
      "闯红灯、超速、违停等会被记录并自动处罚。",
      "系统保存视频证据，便于复核申诉。",
      "图像分割、姿态识别、动作识别等 AI 技术还能发现不系安全带、打电话等行为。",
    ],
    birthFigure: {
      label: "图 2-7",
      caption: "自动车牌识别。",
      placeholder: "插图占位",
    },
    birthDemo: {
      title: "从摄像头到罚单",
      goal: "了解电子交警的执法流程。",
      steps: [
        { title: "抓拍车牌", detail: "摄像头读取车牌信息。" },
        { title: "查询车主", detail: "系统匹配数据库。" },
        { title: "保存证据", detail: "视频记录作为依据。" },
        { title: "自动处罚", detail: "生成并发送罚单。" },
      ],
    },
    birthSteps: ["按步骤查看执法流程。", "找出保存证据的环节。", "说明为何可以申诉。"],
    birthCheckpoint: {
      prompt: "系统为什么要保存违章视频？",
      options: [
        {
          label: "作为证据，保证处罚公平。",
          correct: true,
          explanation: "证据便于复核。",
        },
        {
          label: "让信号灯更亮。",
          correct: false,
          explanation: "视频与灯光无关。",
        },
        {
          label: "隐藏违章事实。",
          correct: false,
          explanation: "视频用于公开核查。",
        },
      ],
    },
    assistTitle: "3. 电子交警的助手",
    assistEyebrow: "多种设备协作",
    assistConceptTitle: "概念卡片",
    assistConceptLines: [
      "电子交警有声音、无人机与机器人助手。",
      "可监测鸣笛、事故与应急车道。",
      "多工具协作更全面。",
    ],
    assistIntro: "电子交警还有助手，例如声源定位、无人机和巡逻机器人。",
    assistFigures: [
      {
        label: "图 2-8 (a)",
        caption: "无人机空中监控交通。",
        placeholder: "插图占位",
      },
      {
        label: "图 2-8 (b)",
        caption: "巡逻机器人抓拍占用应急车道。",
        placeholder: "插图占位",
      },
    ],
    assistDemo: {
      title: "选择助手设备",
      goal: "看看不同设备的作用。",
      devices: [
        {
          key: "sound",
          label: "声源定位",
          outcome: "定位乱鸣笛车辆的方向。",
        },
        {
          key: "drone",
          label: "无人机",
          outcome: "空中监测事故并引导交通。",
        },
        {
          key: "robot",
          label: "巡逻机器人",
          outcome: "拍摄占用应急车道的车辆。",
        },
      ],
    },
    assistSteps: ["选择一种设备。", "阅读它的作用。", "说明协作的意义。"],
    assistCheckpoint: {
      prompt: "无人机在交通管理中能做什么？",
      options: [
        {
          label: "从空中监测并快速报告事故。",
          correct: true,
          explanation: "无人机可提供高空视角。",
        },
        {
          label: "修理路口信号灯。",
          correct: false,
          explanation: "无人机负责监测，不是维修。",
        },
        {
          label: "售卖交通罚单。",
          correct: false,
          explanation: "它不是售卖设备。",
        },
      ],
    },
    brainTitle: "4. 城市的“交通大脑”",
    brainEyebrow: "智能管理",
    brainConceptTitle: "概念卡片",
    brainConceptLines: [
      "AI 能记录停车时长与交通流量。",
      "可以追踪嫌疑车辆路线。",
      "通过信号灯调度缓解拥堵。",
    ],
    brainParas: [
      "电子交警可记录路边停车时长，方便管理与收费。",
      "在追捕嫌疑人时，系统可迅速追踪路线。",
      "遇到拥堵，AI 可调整信号灯并共享数据给导航软件。",
    ],
    brainDemo: {
      title: "交通大脑任务",
      goal: "了解 AI 如何统筹交通。",
      tasks: [
        {
          key: "parking",
          label: "停车管理",
          outcome: "记录停放时长，辅助收费。",
        },
        {
          key: "tracking",
          label: "路线追踪",
          outcome: "帮助警方快速定位嫌疑车辆。",
        },
        {
          key: "jam",
          label: "拥堵疏导",
          outcome: "调整信号灯缓解车流。",
        },
        {
          key: "navigation",
          label: "导航共享",
          outcome: "提供数据让出行更高效。",
        },
      ],
    },
    brainSteps: ["选择一个管理任务。", "观察 AI 的作用。", "说明城市为何更高效。"],
    brainCheckpoint: {
      prompt: "交通大脑在拥堵时会怎么做？",
      options: [
        {
          label: "调整信号灯引导车流。",
          correct: true,
          explanation: "信号调度可以缓解拥堵。",
        },
        {
          label: "关闭所有红绿灯。",
          correct: false,
          explanation: "关闭信号灯会更危险。",
        },
        {
          label: "让所有人停止出行。",
          correct: false,
          explanation: "目标是优化通行。",
        },
      ],
    },
    foodTitle: "思考食粮",
    foodEyebrow: "自觉守规矩",
    foodConceptTitle: "概念卡片",
    foodParas: [
      "电子交警很强大，但最重要的是人人自觉遵守规则。",
      "只在有摄像头时守规矩很危险。",
      "交通规则的目标是保护每个人。",
    ],
    foodPromptTitle: "讨论",
    foodPrompt: "总是遵守交通规则真的吃亏吗？",
    foodCheckpoint: {
      prompt: "为什么没摄像头也要遵守规则？",
      options: [
        {
          label: "因为安全靠每个人共同维护。",
          correct: true,
          explanation: "规则保护所有道路参与者。",
        },
        {
          label: "因为只有摄像头处需要规则。",
          correct: false,
          explanation: "规则在任何地方都重要。",
        },
        {
          label: "因为守规矩一定更慢更糟。",
          correct: false,
          explanation: "安全比速度更重要。",
        },
      ],
    },
    summaryTitle: "小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "电子交警用 AI 自动识别违章。",
      "无人机与机器人等设备协同提升安全。",
      "AI 也成为城市交通的“大脑”。",
    ],
  },
};
