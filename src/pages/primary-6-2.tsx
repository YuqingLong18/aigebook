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

export function PrimaryLesson6_2({ lang }: LessonProps) {
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
    { id: "programs", label: t.programsTitle },
    { id: "languages", label: t.languagesTitle },
    { id: "running", label: t.runningTitle },
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

        <SectionBlock id="programs" title={t.programsTitle} eyebrow={t.programsEyebrow}>
          <InfoCard title={t.programsConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.programsConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.programsParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <InstructionTranslatorDemo
            lang={lang}
            title={t.programsDemo.title}
            goal={t.programsDemo.goal}
            resetLabel={ui.reset}
            instructions={t.programsDemo.instructions}
            labels={t.programsDemo.labels}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.programsSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.programsCheckpoint.prompt}
            options={t.programsCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="languages" title={t.languagesTitle} eyebrow={t.languagesEyebrow}>
          <InfoCard title={t.languagesConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.languagesConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.languagesParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.languagesFigure.label}
            caption={t.languagesFigure.caption}
            placeholder={t.languagesFigure.placeholder}
          />
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
            {t.languagesCodeNote}
          </div>
          <pre className="overflow-x-auto rounded-xl border border-slate-200 bg-slate-900 p-4 text-xs text-slate-100">
            <code>{t.languagesCodeSample}</code>
          </pre>
          <p className="text-sm leading-relaxed text-slate-700">{t.languagesAfterCode}</p>
          <LanguageMatchDemo
            lang={lang}
            title={t.languagesDemo.title}
            goal={t.languagesDemo.goal}
            resetLabel={ui.reset}
            tasks={t.languagesDemo.tasks}
            labels={t.languagesDemo.labels}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.languagesSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.languagesCheckpoint.prompt}
            options={t.languagesCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="running" title={t.runningTitle} eyebrow={t.runningEyebrow}>
          <InfoCard title={t.runningConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.runningConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.runningParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <ProgramRunnerDemo
            lang={lang}
            title={t.runningDemo.title}
            goal={t.runningDemo.goal}
            resetLabel={ui.reset}
            steps={t.runningDemo.steps}
            labels={t.runningDemo.labels}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.runningSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.runningCheckpoint.prompt}
            options={t.runningCheckpoint.options}
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
          <ProgramOrAIDemo
            lang={lang}
            title={t.foodDemo.title}
            goal={t.foodDemo.goal}
            resetLabel={ui.reset}
            scenarios={t.foodDemo.scenarios}
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

type InstructionCard = {
  key: string;
  label: string;
  source: string;
  binary: string;
  note: string;
};

function InstructionTranslatorDemo({
  lang,
  title,
  goal,
  resetLabel,
  instructions,
  labels,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  instructions: InstructionCard[];
  labels: { source: string; machine: string };
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(instructions[0]?.key ?? "");
  const current = instructions.find((inst) => inst.key === active) ?? instructions[0];

  const reset = () => {
    setActive(instructions[0]?.key ?? "");
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
        {instructions.map((inst) => {
          const selected = inst.key === active;
          return (
            <button
              key={inst.key}
              type="button"
              className={[
                "rounded-full border px-3 py-1 text-xs font-semibold transition",
                selected
                  ? "border-brand-500 bg-brand-50 text-brand-700"
                  : "border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900",
              ].join(" ")}
              onClick={() => setActive(inst.key)}
            >
              {inst.label}
            </button>
          );
        })}
      </div>

      {current && (
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.source}</p>
            <p className="mt-2 text-sm font-semibold text-slate-900">{current.source}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.machine}</p>
            <p className="mt-2 font-mono text-xs text-slate-900">{current.binary}</p>
          </div>
          <div className="md:col-span-2 rounded-xl border border-dashed border-slate-200 bg-white p-3 text-xs text-slate-600">
            {current.note}
          </div>
        </div>
      )}
    </div>
  );
}

type LanguageTask = {
  key: string;
  label: string;
  language: string;
  reason: string;
};

function LanguageMatchDemo({
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
  tasks: LanguageTask[];
  labels: { pick: string; match: string };
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

      <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.pick}</p>
        <div className="mt-2 flex flex-wrap gap-2">
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
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.match}</p>
          <p className="mt-2 text-sm font-semibold text-slate-900">{current.language}</p>
          <p className="mt-1 text-xs text-slate-600">{current.reason}</p>
        </div>
      )}
    </div>
  );
}

type RunStep = {
  title: string;
  detail: string;
};

function ProgramRunnerDemo({
  lang,
  title,
  goal,
  resetLabel,
  steps,
  labels,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  steps: RunStep[];
  labels: { back: string; next: string; step: string };
}) {
  const isZh = lang === "zh";
  const [index, setIndex] = useState(0);
  const current = steps[index];

  const reset = () => {
    setIndex(0);
  };

  const next = () => {
    setIndex((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const back = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
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

      <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {labels.step} {index + 1}/{steps.length}
        </p>
        <p className="mt-2 text-sm font-semibold text-slate-900">{current.title}</p>
        <p className="mt-1 text-xs text-slate-600">{current.detail}</p>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={back}
          disabled={index === 0}
          className={[
            "rounded-full border px-3 py-1 text-xs font-semibold transition",
            index === 0
              ? "cursor-not-allowed border-slate-200 text-slate-400"
              : "border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900",
          ].join(" ")}
        >
          {labels.back}
        </button>
        <button
          type="button"
          onClick={next}
          disabled={index === steps.length - 1}
          className={[
            "rounded-full border px-3 py-1 text-xs font-semibold transition",
            index === steps.length - 1
              ? "cursor-not-allowed border-slate-200 text-slate-400"
              : "border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900",
          ].join(" ")}
        >
          {labels.next}
        </button>
      </div>
    </div>
  );
}

type Scenario = {
  key: string;
  label: string;
  category: string;
  explanation: string;
};

function ProgramOrAIDemo({
  lang,
  title,
  goal,
  resetLabel,
  scenarios,
  labels,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  scenarios: Scenario[];
  labels: { pick: string; result: string };
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(scenarios[0]?.key ?? "");
  const current = scenarios.find((scenario) => scenario.key === active) ?? scenarios[0];

  const reset = () => {
    setActive(scenarios[0]?.key ?? "");
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

      <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.pick}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {scenarios.map((scenario) => {
            const selected = scenario.key === active;
            return (
              <button
                key={scenario.key}
                type="button"
                className={[
                  "rounded-full border px-3 py-1 text-xs font-semibold transition",
                  selected
                    ? "border-brand-500 bg-brand-50 text-brand-700"
                    : "border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900",
                ].join(" ")}
                onClick={() => setActive(scenario.key)}
              >
                {scenario.label}
              </button>
            );
          })}
        </div>
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.result}</p>
          <p className="mt-2 text-sm font-semibold text-slate-900">{current.category}</p>
          <p className="mt-1 text-xs text-slate-600">{current.explanation}</p>
        </div>
      )}
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand the basic concept of computer programs and distinguish programs from languages.",
      "Learn how computers execute programs.",
      "Know the differences and connections between programming and AI.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "To make a computer do tasks, we must give it instructions it can understand. Those instructions form a computer program.",
    programsTitle: "1. Computer Programs and Computer Languages",
    programsEyebrow: "Instructions",
    programsConceptTitle: "Concept Card",
    programsConceptLines: [
      "A program is a sequence of instructions designed by people.",
      "Computers only understand binary code (0s and 1s).",
      "High-level languages help humans write programs more easily.",
    ],
    programsParas: [
      "A program is like a task guide. Programmers design the instruction sequence, and the finished program is called code.",
      "Early programmers wrote directly in binary machine language, but it was extremely hard to memorize.",
      "High-level languages use human-friendly syntax like if...then or a + b, so programming became easier.",
    ],
    programsDemo: {
      title: "Instruction Translator",
      goal: "Compare a high-level instruction with a machine-language example.",
      labels: {
        source: "Human-readable instruction",
        machine: "Machine code example",
      },
      instructions: [
        {
          key: "add",
          label: "Calculate 125 + 136",
          source: "result = 125 + 136",
          binary: "1010 1101 0010 0110",
          note: "Real machine code differs by CPU type, but it is all 0s and 1s.",
        },
        {
          key: "read",
          label: "Read from memory",
          source: "read data from a memory address",
          binary: "1100 0011 1001 0101",
          note: "Each binary pattern stands for one tiny instruction.",
        },
        {
          key: "if",
          label: "If...then",
          source: "if x > y then swap",
          binary: "0110 1001 0111 0001",
          note: "High-level logic becomes many simple machine steps.",
        },
      ],
    },
    programsSteps: [
      "Choose an instruction.",
      "Compare the human-readable line with the binary example.",
      "Explain why machine language is hard for humans.",
    ],
    programsCheckpoint: {
      prompt: "Why were high-level languages created?",
      options: [
        {
          label: "Binary programming was too hard for humans.",
          correct: true,
          explanation: "High-level languages simplify writing programs.",
        },
        {
          label: "Computers stopped using binary code.",
          correct: false,
          explanation: "Computers still run binary machine code.",
        },
        {
          label: "They make CPUs run slower.",
          correct: false,
          explanation: "They mainly help humans write code more easily.",
        },
      ],
    },
    languagesTitle: "2. Different Computer Languages",
    languagesEyebrow: "Many choices",
    languagesConceptTitle: "Concept Card",
    languagesConceptLines: [
      "Thousands of languages exist for different purposes.",
      "C++, JavaScript, Java, and Python are common examples.",
      "Python is especially popular in AI because of its libraries.",
    ],
    languagesParas: [
      "C++ is efficient and used for operating systems or game engines. JavaScript powers interactive web pages, Java is common for Android apps, and Python is simple and flexible.",
      "Below are two short programs that print \"Hello World\" in C++ and Python.",
    ],
    languagesFigure: {
      label: "Figure 6-7",
      caption: "Examples of currently popular computer languages.",
      placeholder: "Illustration placeholder",
    },
    languagesCodeNote:
      "(Editor's note: Please do not change anything in the following block of codes. Colors and codes are chosen in a very specific manner)",
    languagesCodeSample: `//A program in C++ language
#include <iostream>

int main() {
    //Output Hello World to the console
    std::cout << "Hello World" << std::endl;
    return 0;
}

# A program in Python
print("Hello World")`,
    languagesAfterCode:
      "Writing programs is not easy. Bugs are common, and even small mistakes can stop a program. AI tools can help check or fix code, but careful writing is still important.",
    languagesDemo: {
      title: "Language Match",
      goal: "Pick a task and see which language fits best.",
      labels: {
        pick: "Pick a task",
        match: "Suggested language",
      },
      tasks: [
        {
          key: "os",
          label: "Build an operating system",
          language: "C++",
          reason: "C++ offers low-level control and high efficiency.",
        },
        {
          key: "web",
          label: "Make a web page interactive",
          language: "JavaScript",
          reason: "JavaScript is the main language for web interactivity.",
        },
        {
          key: "android",
          label: "Create an Android app",
          language: "Java",
          reason: "Java is widely used for Android development.",
        },
        {
          key: "ai",
          label: "Build an AI prototype",
          language: "Python",
          reason: "Python has rich AI and data libraries.",
        },
      ],
    },
    languagesSteps: [
      "Choose a task.",
      "See which language fits.",
      "Explain why different languages exist.",
    ],
    languagesCheckpoint: {
      prompt: "Which language is especially popular for AI?",
      options: [
        {
          label: "Python",
          correct: true,
          explanation: "Python has many AI libraries and is easy to use.",
        },
        {
          label: "HTML",
          correct: false,
          explanation: "HTML is a markup language, not a programming language for AI.",
        },
        {
          label: "SQL",
          correct: false,
          explanation: "SQL is for databases, not general AI development.",
        },
      ],
    },
    runningTitle: "3. How Programs Run",
    runningEyebrow: "From source to machine",
    runningConceptTitle: "Concept Card",
    runningConceptLines: [
      "Source code must be translated into machine code.",
      "The compiler performs the translation.",
      "The operating system loads and runs the program with the CPU.",
    ],
    runningParas: [
      "Source code is written for humans, so a compiler is needed to turn it into machine language.",
      "After compilation, the operating system loads the program into memory and tells the CPU to execute it.",
    ],
    runningDemo: {
      title: "From Source to Run",
      goal: "Step through how a program becomes a running process.",
      labels: {
        back: "Back",
        next: "Next",
        step: "Step",
      },
      steps: [
        {
          title: "Write source code",
          detail: "Humans write code using a high-level language.",
        },
        {
          title: "Compile",
          detail: "The compiler translates code into machine language.",
        },
        {
          title: "Load to memory",
          detail: "The operating system loads the program into RAM.",
        },
        {
          title: "CPU executes",
          detail: "The CPU runs the instructions step by step.",
        },
      ],
    },
    runningSteps: [
      "Click Next to move through the steps.",
      "Say what the compiler does.",
      "Notice how the OS helps run programs.",
    ],
    runningCheckpoint: {
      prompt: "What is the compiler's job?",
      options: [
        {
          label: "Translate source code into machine code.",
          correct: true,
          explanation: "Compilers convert high-level code to machine language.",
        },
        {
          label: "Store files permanently.",
          correct: false,
          explanation: "Storage devices store files, not compilers.",
        },
        {
          label: "Create new hardware.",
          correct: false,
          explanation: "Compilers are software tools, not hardware.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Programming vs AI",
    foodParas: [
      "Programs and AI are related but different. Programming is a broad skill; AI is one special type of program.",
      "Learning programming helps with AI, but it is not the same as learning AI.",
    ],
    foodDemo: {
      title: "Program or AI?",
      goal: "Decide whether a task is simple programming, AI, or both.",
      labels: {
        pick: "Pick a task",
        result: "Result",
      },
      scenarios: [
        {
          key: "calculator",
          label: "A calculator app",
          category: "Programming",
          explanation: "It follows fixed rules without learning.",
        },
        {
          key: "chatbot",
          label: "A chatbot that learns",
          category: "AI program",
          explanation: "It uses learning or reasoning to respond.",
        },
        {
          key: "spreadsheet",
          label: "Spreadsheet formulas",
          category: "Programming",
          explanation: "They are clear instructions, not AI learning.",
        },
      ],
    },
    foodSteps: [
      "Choose a task.",
      "Read the explanation.",
      "Explain why programming and AI are different.",
    ],
    foodCheckpoint: {
      prompt: "Does learning programming mean you are learning AI?",
      options: [
        {
          label: "No. Programming helps, but AI is only one area of it.",
          correct: true,
          explanation: "Programming is broader; AI is a special type of program.",
        },
        {
          label: "Yes. Every program is AI.",
          correct: false,
          explanation: "Many programs are simple and not AI.",
        },
        {
          label: "Yes, because AI does not need code.",
          correct: false,
          explanation: "AI still relies on programs and code.",
        },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryEyebrow: "Summary",
    summaryPoints: [
      "Programs are instruction sequences written by programmers.",
      "Machine language is binary; high-level languages help humans write code.",
      "Different languages fit different tasks like web, systems, or AI.",
      "Compilers translate source code into machine code for the CPU.",
      "Programming is broader than AI, but it supports AI learning.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解计算机程序的基本概念，区分程序与语言。",
      "了解计算机如何执行程序。",
      "认识编程与人工智能的区别与联系。",
    ],
    introTitle: "故事开头",
    introEyebrow: "开场",
    introText:
      "要让计算机完成任务，我们必须用它能理解的语言给出指令，这些指令组成了计算机程序。",
    programsTitle: "1. 计算机程序与计算机语言",
    programsEyebrow: "指令",
    programsConceptTitle: "概念卡",
    programsConceptLines: [
      "程序是人们设计的一串指令。",
      "计算机只真正理解二进制代码。",
      "高级语言让人更容易写程序。",
    ],
    programsParas: [
      "程序就像任务指南，程序员负责设计指令序列，最终形成代码。",
      "早期程序员直接写二进制机器语言，但非常困难。",
      "高级语言使用 if...then、a + b 等人类可读的语法，让编程更容易。",
    ],
    programsDemo: {
      title: "指令翻译器",
      goal: "对比人类指令和机器语言示例。",
      labels: {
        source: "人类可读指令",
        machine: "机器语言示例",
      },
      instructions: [
        {
          key: "add",
          label: "计算 125 + 136",
          source: "result = 125 + 136",
          binary: "1010 1101 0010 0110",
          note: "不同 CPU 的机器码不同，但都由 0 和 1 组成。",
        },
        {
          key: "read",
          label: "读取内存",
          source: "read data from a memory address",
          binary: "1100 0011 1001 0101",
          note: "每段二进制代表一个非常小的指令。",
        },
        {
          key: "if",
          label: "如果...就...",
          source: "if x > y then swap",
          binary: "0110 1001 0111 0001",
          note: "高级逻辑会被拆成许多简单步骤。",
        },
      ],
    },
    programsSteps: [
      "选择一条指令。",
      "对比人类指令与机器码。",
      "说明机器语言为什么难写。",
    ],
    programsCheckpoint: {
      prompt: "为什么要发明高级语言？",
      options: [
        {
          label: "二进制编程太难。",
          correct: true,
          explanation: "高级语言让人更容易编程。",
        },
        {
          label: "计算机不再使用二进制。",
          correct: false,
          explanation: "计算机仍然运行二进制机器码。",
        },
        {
          label: "为了让 CPU 运行更慢。",
          correct: false,
          explanation: "高级语言主要是为了方便人类。",
        },
      ],
    },
    languagesTitle: "2. 不同的计算机语言",
    languagesEyebrow: "多种选择",
    languagesConceptTitle: "概念卡",
    languagesConceptLines: [
      "编程语言有上千种，各有用途。",
      "常见语言包括 C++、JavaScript、Java 和 Python。",
      "Python 因为丰富的库在 AI 时代非常流行。",
    ],
    languagesParas: [
      "C++ 高效且可控，适合操作系统或游戏引擎。JavaScript 用于网页交互，Java 常用于安卓开发，Python 简单直观。",
      "下面是 C++ 和 Python 的 Hello World 示例。",
    ],
    languagesFigure: {
      label: "图 6-7",
      caption: "当前常见的计算机语言示例。",
      placeholder: "示意图",
    },
    languagesCodeNote: "（编者注：请不要更改以下代码块的任何内容。）",
    languagesCodeSample: `//A program in C++ language
#include <iostream>

int main() {
    //Output Hello World to the console
    std::cout << "Hello World" << std::endl;
    return 0;
}

# A program in Python
print("Hello World")`,
    languagesAfterCode:
      "写程序不容易，错误（bug）很常见。计算机非常严格，一个小错误就会导致程序无法运行。AI 可以帮助检查或修复代码，但认真书写仍很重要。",
    languagesDemo: {
      title: "语言配对",
      goal: "为任务选择合适的语言。",
      labels: {
        pick: "选择任务",
        match: "推荐语言",
      },
      tasks: [
        {
          key: "os",
          label: "开发操作系统",
          language: "C++",
          reason: "需要底层控制与高效率。",
        },
        {
          key: "web",
          label: "网页交互",
          language: "JavaScript",
          reason: "网页交互主要靠 JavaScript。",
        },
        {
          key: "android",
          label: "安卓应用",
          language: "Java",
          reason: "Java 在安卓开发中很常见。",
        },
        {
          key: "ai",
          label: "AI 小项目",
          language: "Python",
          reason: "Python 拥有丰富的 AI 库。",
        },
      ],
    },
    languagesSteps: [
      "选择一个任务。",
      "查看推荐语言。",
      "说明不同语言为何存在。",
    ],
    languagesCheckpoint: {
      prompt: "哪种语言在 AI 领域特别流行？",
      options: [
        {
          label: "Python",
          correct: true,
          explanation: "Python 有大量 AI 与数据处理库。",
        },
        {
          label: "HTML",
          correct: false,
          explanation: "HTML 是标记语言，不是 AI 编程语言。",
        },
        {
          label: "SQL",
          correct: false,
          explanation: "SQL 主要用于数据库。",
        },
      ],
    },
    runningTitle: "3. 程序如何运行",
    runningEyebrow: "从源代码到执行",
    runningConceptTitle: "概念卡",
    runningConceptLines: [
      "源代码需要翻译成机器语言。",
      "编译器负责翻译工作。",
      "操作系统加载程序并让 CPU 执行。",
    ],
    runningParas: [
      "源代码写给人看，所以需要编译器把它翻译成机器码。",
      "编译完成后，操作系统把程序加载进内存，再由 CPU 按顺序执行。",
    ],
    runningDemo: {
      title: "程序运行流程",
      goal: "一步步观察程序如何运行。",
      labels: {
        back: "上一步",
        next: "下一步",
        step: "步骤",
      },
      steps: [
        {
          title: "写源代码",
          detail: "人类使用高级语言编写程序。",
        },
        {
          title: "编译",
          detail: "编译器把代码翻译成机器码。",
        },
        {
          title: "加载到内存",
          detail: "操作系统把程序装进 RAM。",
        },
        {
          title: "CPU 执行",
          detail: "CPU 逐条执行机器指令。",
        },
      ],
    },
    runningSteps: [
      "点击下一步查看流程。",
      "说明编译器的作用。",
      "观察操作系统如何帮忙执行。",
    ],
    runningCheckpoint: {
      prompt: "编译器的工作是什么？",
      options: [
        {
          label: "把源代码翻译成机器码。",
          correct: true,
          explanation: "编译器负责把高层代码变成机器语言。",
        },
        {
          label: "永久保存文件。",
          correct: false,
          explanation: "文件由存储设备保存。",
        },
        {
          label: "制造硬件。",
          correct: false,
          explanation: "编译器是软件工具。",
        },
      ],
    },
    foodTitle: "想一想",
    foodEyebrow: "编程与 AI",
    foodParas: [
      "计算机程序与人工智能有关，但并不相同。编程是一项通用技能，AI 只是其中一类程序。",
      "学习编程有助于学习 AI，但不等于学会 AI。",
    ],
    foodDemo: {
      title: "程序还是 AI？",
      goal: "判断某个任务属于编程还是 AI。",
      labels: {
        pick: "选择任务",
        result: "判断结果",
      },
      scenarios: [
        {
          key: "calculator",
          label: "计算器程序",
          category: "编程",
          explanation: "它按固定规则计算，没有学习能力。",
        },
        {
          key: "chatbot",
          label: "会学习的聊天机器人",
          category: "AI 程序",
          explanation: "它会学习或推理来回答问题。",
        },
        {
          key: "spreadsheet",
          label: "表格公式",
          category: "编程",
          explanation: "公式是明确的指令，不是 AI 学习。",
        },
      ],
    },
    foodSteps: [
      "选择一个任务。",
      "阅读解释。",
      "总结编程与 AI 的区别。",
    ],
    foodCheckpoint: {
      prompt: "学习编程就等于学习 AI 吗？",
      options: [
        {
          label: "不等于。编程范围更广，AI 只是其中一部分。",
          correct: true,
          explanation: "AI 属于程序的一类。",
        },
        {
          label: "等于。所有程序都是 AI。",
          correct: false,
          explanation: "很多程序不具备智能。",
        },
        {
          label: "等于，因为 AI 不需要代码。",
          correct: false,
          explanation: "AI 仍然需要程序与代码。",
        },
      ],
    },
    summaryTitle: "要点回顾",
    summaryEyebrow: "总结",
    summaryPoints: [
      "程序是一串指令，程序员负责编写。",
      "机器语言是二进制，高级语言让人更易编程。",
      "不同语言适合不同任务，如网页、系统或 AI。",
      "编译器把源代码翻译成机器码，操作系统负责运行。",
      "编程与 AI 有联系但并不相同。",
    ],
  },
};
