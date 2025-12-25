import { useMemo, useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { FigureCard } from "../components/FigureCard";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";

type LessonProps = {
  lang: "en" | "zh";
};

export function PrimaryLesson6_1({ lang }: LessonProps) {
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
    { id: "hardware", label: t.hardwareTitle },
    { id: "software", label: t.softwareTitle },
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

        <SectionBlock id="hardware" title={t.hardwareTitle} eyebrow={t.hardwareEyebrow}>
          <InfoCard title={t.hardwareConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.hardwareConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.hardwareParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <ul className="space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            {t.hardwareParts.map((part) => (
              <li key={part.label} className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-slate-900">{part.label}</span>
                <span className="text-xs text-slate-600">{part.detail}</span>
              </li>
            ))}
          </ul>
          <div className="grid gap-3 md:grid-cols-2">
            {t.hardwareFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <HardwareRolesDemo
            lang={lang}
            title={t.hardwareDemo.title}
            goal={t.hardwareDemo.goal}
            resetLabel={ui.reset}
            tasks={t.hardwareDemo.tasks}
            labels={t.hardwareRoles}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.hardwareSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.hardwareCheckpoint.prompt}
            options={t.hardwareCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="software" title={t.softwareTitle} eyebrow={t.softwareEyebrow}>
          <InfoCard title={t.softwareConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.softwareConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.softwareParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <ol className="list-decimal space-y-1 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            {t.softwareRules.map((rule) => (
              <li key={rule} className="ml-4">
                {rule}
              </li>
            ))}
          </ol>
          <SoftwareStackDemo
            lang={lang}
            title={t.softwareDemo.title}
            goal={t.softwareDemo.goal}
            resetLabel={ui.reset}
            actions={t.softwareDemo.actions}
            labels={t.softwareRoles}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.softwareSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.softwareCheckpoint.prompt}
            options={t.softwareCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="food" title={t.foodTitle} eyebrow={t.foodEyebrow}>
          {t.foodParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FutureComputingDemo
            lang={lang}
            title={t.foodDemo.title}
            goal={t.foodDemo.goal}
            resetLabel={ui.reset}
            options={t.foodDemo.options}
            labels={t.foodDemo.labels}
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
          <InfoCard title={t.historyConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.historyConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.historyParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <BinaryBuilderDemo
            lang={lang}
            title={t.historyDemo.title}
            goal={t.historyDemo.goal}
            resetLabel={ui.reset}
            labels={t.historyDemo.labels}
            note={t.historyDemo.note}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.historySteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.historyCheckpoint.prompt}
            options={t.historyCheckpoint.options}
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

type HardwareTask = {
  key: string;
  label: string;
  cpu: string;
  ram: string;
  storage: string;
};

function HardwareRolesDemo({
  lang,
  title,
  goal,
  resetLabel,
  tasks,
  labels,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  tasks: HardwareTask[];
  labels: { cpu: string; ram: string; storage: string };
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(tasks[0]?.key ?? "");
  const current = tasks.find((task) => task.key === active) ?? tasks[0];

  const reset = () => {
    setActive(tasks[0]?.key ?? "");
  };

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
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
          onClick={reset}
          aria-label={resetLabel}
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {tasks.map((task) => {
          const selected = task.key === active;
          return (
            <button
              key={task.key}
              type="button"
              className={[
                "rounded-full border px-3 py-1 text-xs font-semibold transition",
                selected
                  ? "border-brand-500 bg-brand-50 text-brand-700"
                  : "border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900",
              ].join(" ")}
              onClick={() => setActive(task.key)}
            >
              {task.label}
            </button>
          );
        })}
      </div>

      {current && (
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <RoleCard title={labels.cpu} detail={current.cpu} />
          <RoleCard title={labels.ram} detail={current.ram} />
          <RoleCard title={labels.storage} detail={current.storage} />
        </div>
      )}
    </div>
  );
}

function RoleCard({ title, detail }: { title: string; detail: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-700">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{title}</p>
      <p className="mt-2 text-sm font-semibold text-slate-900">{detail}</p>
    </div>
  );
}

type SoftwareAction = {
  key: string;
  label: string;
  os: string;
  app: string;
};

function SoftwareStackDemo({
  lang,
  title,
  goal,
  resetLabel,
  actions,
  labels,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  actions: SoftwareAction[];
  labels: { os: string; app: string };
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(actions[0]?.key ?? "");
  const current = actions.find((action) => action.key === active) ?? actions[0];

  const reset = () => {
    setActive(actions[0]?.key ?? "");
  };

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
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
          onClick={reset}
          aria-label={resetLabel}
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {actions.map((action) => {
          const selected = action.key === active;
          return (
            <button
              key={action.key}
              type="button"
              className={[
                "rounded-full border px-3 py-1 text-xs font-semibold transition",
                selected
                  ? "border-brand-500 bg-brand-50 text-brand-700"
                  : "border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900",
              ].join(" ")}
              onClick={() => setActive(action.key)}
            >
              {action.label}
            </button>
          );
        })}
      </div>

      {current && (
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.os}</p>
            <p className="mt-2 text-sm font-semibold text-slate-900">{current.os}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.app}</p>
            <p className="mt-2 text-sm font-semibold text-slate-900">{current.app}</p>
          </div>
        </div>
      )}
    </div>
  );
}

type FutureOption = {
  key: string;
  label: string;
  benefit: string;
  caution: string;
};

function FutureComputingDemo({
  lang,
  title,
  goal,
  resetLabel,
  options,
  labels,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  options: FutureOption[];
  labels: { benefit: string; caution: string };
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(options[0]?.key ?? "");
  const current = options.find((option) => option.key === active) ?? options[0];

  const reset = () => {
    setActive(options[0]?.key ?? "");
  };

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
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
          onClick={reset}
          aria-label={resetLabel}
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 grid gap-2 md:grid-cols-2">
        {options.map((option) => {
          const selected = option.key === active;
          return (
            <button
              key={option.key}
              type="button"
              className={[
                "rounded-xl border px-3 py-2 text-left text-sm font-semibold transition",
                selected
                  ? "border-brand-500 bg-brand-50 text-brand-700"
                  : "border-slate-200 text-slate-700 hover:border-slate-300",
              ].join(" ")}
              onClick={() => setActive(option.key)}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      {current && (
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {labels.benefit}
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{current.benefit}</p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
            {labels.caution}
          </p>
          <p className="mt-1 text-sm text-slate-700">{current.caution}</p>
        </div>
      )}
    </div>
  );
}

function BinaryBuilderDemo({
  lang,
  title,
  goal,
  resetLabel,
  labels,
  note,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  labels: { decimal: string; binary: string };
  note: string;
}) {
  const isZh = lang === "zh";
  const [value, setValue] = useState(11);
  const binary = useMemo(() => value.toString(2), [value]);

  const reset = () => {
    setValue(11);
  };

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
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
          onClick={reset}
          aria-label={resetLabel}
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <label className="block text-sm font-semibold text-slate-700">
          {labels.decimal}
          <input
            type="range"
            min={0}
            max={31}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="mt-1 w-full accent-brand-500"
            aria-valuemin={0}
            aria-valuemax={31}
            aria-valuenow={value}
          />
          <span className="text-xs text-slate-500">{value}</span>
        </label>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {labels.binary}
          </p>
          <p className="mt-2 text-lg font-semibold text-slate-900">{binary}</p>
          <p className="mt-1 text-xs text-slate-600">{note}</p>
        </div>
      </div>
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand the hardware components of a computer.",
      "Learn about the structure of computer software.",
      "Understand the developmental trends in computing.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "Computers are essential partners in work and daily life. They are made of hardware and software, and this lesson introduces the basic parts so you can understand them better.",
    hardwareTitle: "1. Hardware of a Computer",
    hardwareEyebrow: "Main parts",
    hardwareConceptTitle: "Concept Card",
    hardwareConceptLines: [
      "Modern computers follow the von Neumann architecture.",
      "External devices provide input/output, while internal modules do the work.",
      "CPU, RAM, and storage are the three key components inside the main unit.",
    ],
    hardwareParas: [
      "Desktops, laptops, tablets, and smartphones all share the same basic architecture. The main unit and screen may be separate or combined, and input tools can be keyboards, mice, or touchscreens.",
      "Inside the case, a motherboard connects the CPU, memory, and storage. Other parts like graphics cards, sound cards, USB ports, and network cards can be added or removed as needed.",
      "The CPU is the brain. The operating system turns your commands into very simple instructions that the CPU executes extremely fast.",
      "RAM is temporary storage for running programs. Storage devices like hard drives and flash drives keep data even after power is off.",
    ],
    hardwareParts: [
      {
        label: "CPU (Central Processing Unit)",
        detail: "Carries out calculations and control instructions at high speed.",
      },
      {
        label: "RAM (Memory)",
        detail: "Temporary workspace for programs and data currently in use.",
      },
      {
        label: "Storage (Hard drive / Flash drive)",
        detail: "Long-term storage that keeps data after power is off.",
      },
    ],
    hardwareFigures: [
      {
        label: "Figure 6-1",
        caption: "Various forms of computers.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 6-2",
        caption: "Main components of a computer.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 6-3",
        caption: "A modern CPU.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 6-4",
        caption: "Memory (RAM).",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 6-5",
        caption: "Magnetic hard drive.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 6-6",
        caption: "USB flash drive.",
        placeholder: "Illustration placeholder",
      },
    ],
    hardwareDemo: {
      title: "Inside a Task",
      goal: "See how CPU, RAM, and storage cooperate during everyday tasks.",
      tasks: [
        {
          key: "document",
          label: "Type a document",
          cpu: "Interprets keystrokes and formats text.",
          ram: "Holds the document while you work.",
          storage: "Saves the file when you click save.",
        },
        {
          key: "game",
          label: "Play a game",
          cpu: "Runs game logic and updates frames.",
          ram: "Stores textures and current game state.",
          storage: "Loads game assets from disk.",
        },
        {
          key: "photo",
          label: "Save a photo",
          cpu: "Processes and compresses the image.",
          ram: "Keeps the photo in memory before saving.",
          storage: "Writes the photo permanently.",
        },
      ],
    },
    hardwareRoles: {
      cpu: "CPU role",
      ram: "RAM role",
      storage: "Storage role",
    },
    hardwareSteps: [
      "Pick a daily task.",
      "Read what the CPU, RAM, and storage each do.",
      "Explain why storage keeps data after power is off.",
    ],
    hardwareCheckpoint: {
      prompt: "Which part keeps data after the power is off?",
      options: [
        {
          label: "Storage devices like hard drives or flash drives.",
          correct: true,
          explanation: "Storage is long-term and keeps data without power.",
        },
        {
          label: "RAM.",
          correct: false,
          explanation: "RAM is temporary and loses data when power is off.",
        },
        {
          label: "The keyboard.",
          correct: false,
          explanation: "The keyboard is an input device, not storage.",
        },
      ],
    },
    softwareTitle: "2. Software Structure",
    softwareEyebrow: "Programs and data",
    softwareConceptTitle: "Concept Card",
    softwareConceptLines: [
      "Software is the programs and data that run on hardware.",
      "The operating system manages hardware and provides services.",
      "Applications help users do specific tasks like writing and chatting.",
    ],
    softwareParas: [
      "Hardware alone cannot work without software. Software turns low-level instructions into tools people can use.",
      "The operating system (Windows, macOS, Android, iOS) starts when the computer powers on. It manages hardware and decides what happens when you press keys or tap the screen.",
      "Applications like Office, WeChat, or maps apps run on top of the operating system to complete specific jobs.",
      "Good software habits keep computers fast and safe.",
    ],
    softwareRules: [
      "Use official, licensed software - never use pirated versions.",
      "Avoid unknown or unsafe websites.",
      "Download programs only from trusted sources.",
      "Do not share personal information unless it is secure.",
    ],
    softwareDemo: {
      title: "Who Does What?",
      goal: "Choose an action to see how the OS and apps divide the work.",
      actions: [
        {
          key: "keyboard",
          label: "Press a key",
          os: "Receives the hardware signal and sends it to the right program.",
          app: "Inserts the character into your document or message.",
        },
        {
          key: "open",
          label: "Open a file",
          os: "Finds the file location and loads it into memory.",
          app: "Reads the file format and displays the content.",
        },
        {
          key: "share",
          label: "Share a photo",
          os: "Provides network and storage access.",
          app: "Uploads the photo and shows the result.",
        },
      ],
    },
    softwareRoles: {
      os: "Operating system",
      app: "Application",
    },
    softwareSteps: [
      "Pick an action.",
      "Identify the operating system's job.",
      "Explain what the application adds for the user.",
    ],
    softwareCheckpoint: {
      prompt: "What is the operating system's main job?",
      options: [
        {
          label: "Manage hardware and provide services for other software.",
          correct: true,
          explanation: "The OS controls hardware and supports applications.",
        },
        {
          label: "Only store files permanently.",
          correct: false,
          explanation: "Storage devices keep files, not the OS alone.",
        },
        {
          label: "Replace all application software.",
          correct: false,
          explanation: "Applications still do specific tasks for users.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Future computers",
    foodParas: [
      "Computers have improved quickly. A smartphone today can beat a room-sized supercomputer from the 1980s.",
      "In the future, computers may become faster and smaller, connect to brains through interfaces, or use new materials like light, quantum states, or biological systems.",
    ],
    foodDemo: {
      title: "Future Paths",
      goal: "Explore possible directions for the next generation of computers.",
      labels: {
        benefit: "Potential benefit",
        caution: "Open question",
      },
      options: [
        {
          key: "faster",
          label: "Faster and smaller chips",
          benefit: "More power in tiny devices.",
          caution: "Heat and energy limits are still challenges.",
        },
        {
          key: "brain",
          label: "Brain-machine interfaces",
          benefit: "Commands could be given more naturally.",
          caution: "Safety and ethics must be carefully considered.",
        },
        {
          key: "quantum",
          label: "Quantum and photonic computers",
          benefit: "New ways to compute extremely fast.",
          caution: "They are still difficult to build reliably.",
        },
        {
          key: "bio",
          label: "Biological computers",
          benefit: "Potentially energy-efficient computation.",
          caution: "It is still an early research direction.",
        },
      ],
    },
    foodSteps: [
      "Choose a future direction.",
      "Read the possible benefit.",
      "Think of one question or challenge for it.",
    ],
    foodCheckpoint: {
      prompt: "Why are brain-machine interfaces interesting?",
      options: [
        {
          label: "They could make giving commands more natural.",
          correct: true,
          explanation: "The text notes they could connect directly to our brains.",
        },
        {
          label: "They remove the need for software.",
          correct: false,
          explanation: "Software would still be required.",
        },
        {
          label: "They make storage devices unnecessary.",
          correct: false,
          explanation: "Storage is still needed for data.",
        },
      ],
    },
    historyTitle: "History Corner",
    historyEyebrow: "Binary numbers",
    historyConceptTitle: "Concept Card",
    historyConceptLines: [
      "Decimal counts by tens; binary counts by twos.",
      "Computers use binary because circuits have two states: on and off.",
      "11 in decimal equals 1011 in binary.",
    ],
    historyParas: [
      "Computers use binary numbers because their electronic circuits are either on (1) or off (0).",
      "With only two states, circuits are easier to build and more reliable.",
    ],
    historyDemo: {
      title: "Binary Builder",
      goal: "Convert a decimal number into binary.",
      labels: {
        decimal: "Decimal number",
        binary: "Binary number",
      },
      note: "Binary uses only 0 and 1.",
    },
    historySteps: [
      "Move the slider to pick a decimal number.",
      "Read the binary version on the right.",
      "Check that 11 becomes 1011.",
    ],
    historyCheckpoint: {
      prompt: "What is 11 in binary?",
      options: [
        {
          label: "1011",
          correct: true,
          explanation: "The lesson example shows 11 equals 1011 in binary.",
        },
        {
          label: "1101",
          correct: false,
          explanation: "1101 is a different number (13).",
        },
        {
          label: "1111",
          correct: false,
          explanation: "1111 equals 15 in decimal.",
        },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryEyebrow: "Summary",
    summaryPoints: [
      "A computer consists of hardware (CPU, RAM, storage) and software.",
      "The operating system manages hardware and supports applications.",
      "RAM is temporary, while storage keeps data long term.",
      "Binary numbers fit electronic circuits with on/off states.",
      "Computers will likely become faster and smaller, with new types emerging.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解计算机的硬件组成。",
      "认识计算机软件的结构。",
      "了解计算机的发展趋势。",
    ],
    introTitle: "故事开头",
    introEyebrow: "开场",
    introText:
      "计算机已经成为工作和生活的重要伙伴。它由硬件和软件组成，本课将带你认识计算机的基本部分。",
    hardwareTitle: "1. 计算机的硬件",
    hardwareEyebrow: "主要部件",
    hardwareConceptTitle: "概念卡",
    hardwareConceptLines: [
      "现代计算机遵循冯·诺依曼体系结构。",
      "外部设备提供输入输出，内部模块负责计算与存储。",
      "CPU、内存和存储是主机内的三大核心部件。",
    ],
    hardwareParas: [
      "台式机、笔记本、平板和手机都有相同的基础结构。显示器和主机可以分开或合在一起，输入工具可以是键盘、鼠标或触屏。",
      "打开主机后可以看到主板，上面连接着 CPU、内存和存储，还可以插入显卡、声卡、USB 接口和网卡等模块。",
      "CPU 像大脑一样高速执行指令，操作系统把命令翻译成非常基础的步骤让 CPU 运行。",
      "RAM 是临时存储，存储设备（硬盘、闪存）可以在断电后保存数据。",
    ],
    hardwareParts: [
      {
        label: "CPU（中央处理器）",
        detail: "负责计算与控制，运行速度极快。",
      },
      {
        label: "RAM（内存）",
        detail: "临时工作区，保存正在运行的数据和指令。",
      },
      {
        label: "存储（硬盘/闪存）",
        detail: "长期保存数据，断电也不会丢失。",
      },
    ],
    hardwareFigures: [
      {
        label: "图 6-1",
        caption: "各种形态的计算机。",
        placeholder: "示意图",
      },
      {
        label: "图 6-2",
        caption: "计算机的主要组成部分。",
        placeholder: "示意图",
      },
      {
        label: "图 6-3",
        caption: "现代 CPU。",
        placeholder: "示意图",
      },
      {
        label: "图 6-4",
        caption: "内存（RAM）。",
        placeholder: "示意图",
      },
      {
        label: "图 6-5",
        caption: "磁性硬盘。",
        placeholder: "示意图",
      },
      {
        label: "图 6-6",
        caption: "U 盘（闪存）。",
        placeholder: "示意图",
      },
    ],
    hardwareDemo: {
      title: "任务内部小剧场",
      goal: "看看 CPU、RAM 和存储在日常任务中的分工。",
      tasks: [
        {
          key: "document",
          label: "写文档",
          cpu: "解析输入并排版文字。",
          ram: "临时保存正在编辑的内容。",
          storage: "保存文档到磁盘。",
        },
        {
          key: "game",
          label: "玩游戏",
          cpu: "运行游戏逻辑、更新画面。",
          ram: "保存贴图与即时状态。",
          storage: "从磁盘读取资源。",
        },
        {
          key: "photo",
          label: "保存照片",
          cpu: "处理并压缩图像。",
          ram: "保存照片的临时副本。",
          storage: "写入永久文件。",
        },
      ],
    },
    hardwareRoles: {
      cpu: "CPU 分工",
      ram: "内存分工",
      storage: "存储分工",
    },
    hardwareSteps: [
      "选择一个日常任务。",
      "阅读 CPU、内存和存储的作用。",
      "解释为什么存储断电后还能保留数据。",
    ],
    hardwareCheckpoint: {
      prompt: "断电后还能保存数据的部件是？",
      options: [
        {
          label: "存储设备（硬盘或闪存）。",
          correct: true,
          explanation: "存储是长期保存数据的地方。",
        },
        {
          label: "RAM 内存。",
          correct: false,
          explanation: "内存是临时的，断电会清空。",
        },
        {
          label: "键盘。",
          correct: false,
          explanation: "键盘只是输入设备。",
        },
      ],
    },
    softwareTitle: "2. 软件结构",
    softwareEyebrow: "程序与数据",
    softwareConceptTitle: "概念卡",
    softwareConceptLines: [
      "软件是运行在硬件上的程序与数据。",
      "操作系统管理硬件并提供基础服务。",
      "应用程序帮助我们完成具体任务。",
    ],
    softwareParas: [
      "硬件离不开软件。软件把低级指令变成我们可用的工具。",
      "操作系统在开机时自动加载，负责管理硬件并处理按键、触屏等事件。",
      "应用程序如 Office、微信或地图，用来完成特定的工作。",
      "正确使用软件能保持设备安全与稳定。",
    ],
    softwareRules: [
      "使用正版软件，绝不使用盗版。",
      "不访问不明或危险网站。",
      "只从可信来源下载程序。",
      "不要随意在网上泄露个人信息。",
    ],
    softwareDemo: {
      title: "谁在负责？",
      goal: "选择一个操作，看看操作系统与应用的分工。",
      actions: [
        {
          key: "keyboard",
          label: "按下按键",
          os: "接收硬件信号并发送给程序。",
          app: "把字符写进你的文档或消息。",
        },
        {
          key: "open",
          label: "打开文件",
          os: "定位文件并加载到内存。",
          app: "解析格式并显示内容。",
        },
        {
          key: "share",
          label: "分享照片",
          os: "提供网络和存储访问。",
          app: "上传照片并显示结果。",
        },
      ],
    },
    softwareRoles: {
      os: "操作系统",
      app: "应用程序",
    },
    softwareSteps: [
      "选择一个操作。",
      "找出操作系统做了什么。",
      "说明应用程序如何帮助用户。",
    ],
    softwareCheckpoint: {
      prompt: "操作系统最重要的作用是什么？",
      options: [
        {
          label: "管理硬件并为软件提供服务。",
          correct: true,
          explanation: "操作系统负责管理硬件和支持应用。",
        },
        {
          label: "永久保存所有文件。",
          correct: false,
          explanation: "文件由存储设备保存，而不是操作系统本身。",
        },
        {
          label: "替代所有应用软件。",
          correct: false,
          explanation: "应用仍然负责具体任务。",
        },
      ],
    },
    foodTitle: "想一想",
    foodEyebrow: "未来趋势",
    foodParas: [
      "计算机的发展非常快，现在的手机比 20 世纪 80 年代的超级计算机还强。",
      "未来计算机可能更快更小，甚至通过脑机接口更自然地下达指令，也可能出现光子、量子或生物计算机。",
    ],
    foodDemo: {
      title: "未来方向",
      goal: "探索下一代计算机的可能路径。",
      labels: {
        benefit: "可能优势",
        caution: "需要思考",
      },
      options: [
        {
          key: "faster",
          label: "更快更小的芯片",
          benefit: "把更强的计算塞进更小设备。",
          caution: "散热与能耗仍是挑战。",
        },
        {
          key: "brain",
          label: "脑机接口",
          benefit: "指令可能更自然直接。",
          caution: "安全和伦理需要被重视。",
        },
        {
          key: "quantum",
          label: "量子/光子计算",
          benefit: "尝试全新的高速计算方式。",
          caution: "可靠制造仍然困难。",
        },
        {
          key: "bio",
          label: "生物计算",
          benefit: "可能更节能的计算方式。",
          caution: "仍处于早期探索阶段。",
        },
      ],
    },
    foodSteps: [
      "选择一个未来方向。",
      "阅读可能的优势。",
      "想想它的挑战或疑问。",
    ],
    foodCheckpoint: {
      prompt: "脑机接口的吸引力在于什么？",
      options: [
        {
          label: "能让人更自然地下达指令。",
          correct: true,
          explanation: "文本中提到它可能直接连接大脑。",
        },
        {
          label: "可以不再需要软件。",
          correct: false,
          explanation: "软件仍然必不可少。",
        },
        {
          label: "可以完全取消存储设备。",
          correct: false,
          explanation: "数据仍然需要保存。",
        },
      ],
    },
    historyTitle: "历史角",
    historyEyebrow: "二进制",
    historyConceptTitle: "概念卡",
    historyConceptLines: [
      "十进制按 10 计数，二进制按 2 计数。",
      "电路只有开与关两种状态，适合二进制。",
      "十进制的 11 等于二进制的 1011。",
    ],
    historyParas: [
      "计算机使用二进制，因为电路只有 1（开）和 0（关）两种状态。",
      "使用两种状态更可靠，也更容易制造电路。",
    ],
    historyDemo: {
      title: "二进制小转换",
      goal: "把十进制数字转换成二进制。",
      labels: {
        decimal: "十进制数字",
        binary: "二进制数字",
      },
      note: "二进制只使用 0 和 1。",
    },
    historySteps: [
      "拖动滑块选择一个十进制数字。",
      "查看对应的二进制。",
      "确认 11 会变成 1011。",
    ],
    historyCheckpoint: {
      prompt: "十进制 11 的二进制是？",
      options: [
        {
          label: "1011",
          correct: true,
          explanation: "例子中 11 对应 1011。",
        },
        {
          label: "1101",
          correct: false,
          explanation: "1101 是十进制 13。",
        },
        {
          label: "1111",
          correct: false,
          explanation: "1111 是十进制 15。",
        },
      ],
    },
    summaryTitle: "要点回顾",
    summaryEyebrow: "总结",
    summaryPoints: [
      "计算机由硬件与软件组成。",
      "CPU、RAM 和存储是硬件的核心部件。",
      "操作系统管理硬件并支持应用程序。",
      "二进制符合电路的开与关两种状态。",
      "未来计算机会更快、更小，并出现新类型。",
    ],
  },
};
