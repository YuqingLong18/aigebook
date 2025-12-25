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

export function PrimaryLesson6_3({ lang }: LessonProps) {
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
    { id: "chalk", label: t.chalkTitle },
    { id: "steps", label: t.stepsTitle },
    { id: "distinguish", label: t.distinguishTitle },
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

        <SectionBlock id="chalk" title={t.chalkTitle} eyebrow={t.chalkEyebrow}>
          <InfoCard title={t.chalkConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.chalkConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.chalkParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <ChalkLineDemo
            lang={lang}
            title={t.chalkDemo.title}
            goal={t.chalkDemo.goal}
            resetLabel={ui.reset}
            labels={t.chalkDemo.labels}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.chalkSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.chalkCheckpoint.prompt}
            options={t.chalkCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="steps" title={t.stepsTitle} eyebrow={t.stepsEyebrow}>
          <InfoCard title={t.stepsConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.stepsConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.stepsParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.stepsFigure.label}
            caption={t.stepsFigure.caption}
            placeholder={t.stepsFigure.placeholder}
          />
          <AlgorithmClarityDemo
            lang={lang}
            title={t.stepsDemo.title}
            goal={t.stepsDemo.goal}
            resetLabel={ui.reset}
            labels={t.stepsDemo.labels}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.stepsSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.stepsCheckpoint.prompt}
            options={t.stepsCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="distinguish" title={t.distinguishTitle} eyebrow={t.distinguishEyebrow}>
          <InfoCard title={t.distinguishConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.distinguishConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.distinguishParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <ol className="list-decimal space-y-1 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            {t.distinguishStepsList.map((step) => (
              <li key={step} className="ml-4">
                {step}
              </li>
            ))}
          </ol>
          <GcdStepperDemo
            lang={lang}
            title={t.distinguishDemo.title}
            goal={t.distinguishDemo.goal}
            resetLabel={ui.reset}
            labels={t.distinguishDemo.labels}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.distinguishSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.distinguishCheckpoint.prompt}
            options={t.distinguishCheckpoint.options}
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
          <TrafficLightDemo
            lang={lang}
            title={t.foodDemo.title}
            goal={t.foodDemo.goal}
            resetLabel={ui.reset}
            levels={t.foodDemo.levels}
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

function ChalkLineDemo({
  lang,
  title,
  goal,
  resetLabel,
  labels,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  labels: { plan: string; effort: string; success: string; note: string };
}) {
  const isZh = lang === "zh";
  const [plan, setPlan] = useState(60);
  const [effort, setEffort] = useState(60);

  const success = useMemo(() => Math.round(plan * 0.6 + effort * 0.4), [plan, effort]);

  const reset = () => {
    setPlan(60);
    setEffort(60);
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
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-slate-700">
            {labels.plan}
            <input
              type="range"
              min={0}
              max={100}
              value={plan}
              onChange={(e) => setPlan(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={plan}
            />
            <span className="text-xs text-slate-500">{plan}</span>
          </label>
          <label className="block text-sm font-semibold text-slate-700">
            {labels.effort}
            <input
              type="range"
              min={0}
              max={100}
              value={effort}
              onChange={(e) => setEffort(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={effort}
            />
            <span className="text-xs text-slate-500">{effort}</span>
          </label>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.success}</p>
          <p className="mt-2 text-2xl font-semibold text-slate-900">{success}</p>
          <p className="mt-1 text-xs text-slate-600">{labels.note}</p>
        </div>
      </div>
    </div>
  );
}

function AlgorithmClarityDemo({
  lang,
  title,
  goal,
  resetLabel,
  labels,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  labels: { clear: string; ordered: string; outcome: string };
}) {
  const isZh = lang === "zh";
  const [clear, setClear] = useState(true);
  const [ordered, setOrdered] = useState(true);

  const reset = () => {
    setClear(true);
    setOrdered(true);
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
        <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <Toggle label={labels.clear} value={clear} onChange={setClear} />
          <Toggle label={labels.ordered} value={ordered} onChange={setOrdered} />
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.outcome}</p>
          <p className="mt-2 text-sm font-semibold text-slate-900">
            {clear && ordered ? (lang === "zh" ? "可以顺利执行" : "Steps can be followed") : (lang === "zh" ? "容易混乱" : "Steps become unclear")}
          </p>
        </div>
      </div>
    </div>
  );
}

function Toggle({ label, value, onChange }: { label: string; value: boolean; onChange: (val: boolean) => void }) {
  return (
    <label className="flex cursor-pointer items-center justify-between rounded-lg bg-white px-3 py-2 shadow-sm">
      <span className="text-sm font-semibold">{label}</span>
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 accent-brand-500"
      />
    </label>
  );
}

function GcdStepperDemo({
  lang,
  title,
  goal,
  resetLabel,
  labels,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  labels: { a: string; b: string; remainder: string; step: string; next: string; back: string };
}) {
  const isZh = lang === "zh";
  const [aInput, setAInput] = useState(48);
  const [bInput, setBInput] = useState(18);
  const [stepIndex, setStepIndex] = useState(0);

  const steps = useMemo(() => {
    const list: { a: number; b: number; r: number }[] = [];
    let a = Math.max(1, Math.floor(aInput));
    let b = Math.max(1, Math.floor(bInput));
    if (b > a) {
      [a, b] = [b, a];
    }
    while (b !== 0) {
      const r = a % b;
      list.push({ a, b, r });
      if (r === 0) break;
      a = b;
      b = r;
    }
    return list.length > 0 ? list : [{ a, b, r: a % b }];
  }, [aInput, bInput]);

  const current = steps[stepIndex] ?? steps[0];

  const reset = () => {
    setAInput(48);
    setBInput(18);
    setStepIndex(0);
  };

  const next = () => {
    setStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const back = () => {
    setStepIndex((prev) => Math.max(prev - 1, 0));
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

      <div className="mt-3 grid gap-3 md:grid-cols-2">
        <label className="block text-sm font-semibold text-slate-700">
          {labels.a}
          <input
            type="number"
            min={1}
            value={aInput}
            onChange={(e) => {
              setAInput(Number(e.target.value));
              setStepIndex(0);
            }}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />
        </label>
        <label className="block text-sm font-semibold text-slate-700">
          {labels.b}
          <input
            type="number"
            min={1}
            value={bInput}
            onChange={(e) => {
              setBInput(Number(e.target.value));
              setStepIndex(0);
            }}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />
        </label>
      </div>

      <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {labels.step} {stepIndex + 1}/{steps.length}
        </p>
        <div className="mt-2 grid gap-2 md:grid-cols-3">
          <div>
            <p className="text-xs text-slate-500">a</p>
            <p className="text-sm font-semibold text-slate-900">{current.a}</p>
          </div>
          <div>
            <p className="text-xs text-slate-500">b</p>
            <p className="text-sm font-semibold text-slate-900">{current.b}</p>
          </div>
          <div>
            <p className="text-xs text-slate-500">{labels.remainder}</p>
            <p className="text-sm font-semibold text-slate-900">{current.r}</p>
          </div>
        </div>
        {current.r === 0 && (
          <p className="mt-2 text-xs font-semibold text-emerald-700">
            {isZh ? "余数为 0，当前 b 就是最大公约数。" : "Remainder is 0, current b is the GCD."}
          </p>
        )}
      </div>

      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={back}
          disabled={stepIndex === 0}
          className={[
            "rounded-full border px-3 py-1 text-xs font-semibold transition",
            stepIndex === 0
              ? "cursor-not-allowed border-slate-200 text-slate-400"
              : "border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900",
          ].join(" ")}
        >
          {labels.back}
        </button>
        <button
          type="button"
          onClick={next}
          disabled={stepIndex === steps.length - 1}
          className={[
            "rounded-full border px-3 py-1 text-xs font-semibold transition",
            stepIndex === steps.length - 1
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

type TrafficLevel = {
  key: string;
  label: string;
  timing: string;
  note: string;
};

function TrafficLightDemo({
  lang,
  title,
  goal,
  resetLabel,
  levels,
  labels,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  levels: TrafficLevel[];
  labels: { pick: string; timing: string };
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(levels[0]?.key ?? "");
  const current = levels.find((level) => level.key === active) ?? levels[0];

  const reset = () => {
    setActive(levels[0]?.key ?? "");
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
          {levels.map((level) => {
            const selected = level.key === active;
            return (
              <button
                key={level.key}
                type="button"
                className={[
                  "rounded-full border px-3 py-1 text-xs font-semibold transition",
                  selected
                    ? "border-brand-500 bg-brand-50 text-brand-700"
                    : "border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900",
                ].join(" ")}
                onClick={() => setActive(level.key)}
              >
                {level.label}
              </button>
            );
          })}
        </div>
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.timing}</p>
          <p className="mt-2 text-sm font-semibold text-slate-900">{current.timing}</p>
          <p className="mt-1 text-xs text-slate-600">{current.note}</p>
        </div>
      )}
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand the basic concept and role of algorithms.",
      "Distinguish between algorithms and programs and their relationship.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "We have learned about programs. Another word we often hear is algorithm. This lesson explains what an algorithm is and how it differs from a program.",
    chalkTitle: "1. The Story of a Chalk Line",
    chalkEyebrow: "Idea vs. execution",
    chalkConceptTitle: "Concept Card",
    chalkConceptLines: [
      "An algorithm is like the expert's idea and plan.",
      "A program is the execution of that plan on a computer.",
      "Good methods can be more valuable than hard labor alone.",
    ],
    chalkParas: [
      "In the story, the expert drew a chalk line to point out the fault and gave a plan to fix it.",
      "The workers carried out the repair, but without the expert's plan they would not have solved the problem.",
      "This shows that the method (algorithm) and the execution (program) are different roles.",
    ],
    chalkDemo: {
      title: "Plan vs. Effort",
      goal: "Adjust plan clarity and effort to see the chance of success.",
      labels: {
        plan: "Plan clarity",
        effort: "Execution effort",
        success: "Success score",
        note: "A clear plan boosts the chance of success.",
      },
    },
    chalkSteps: [
      "Move the sliders to change plan and effort.",
      "Observe the success score.",
      "Explain why the plan matters so much.",
    ],
    chalkCheckpoint: {
      prompt: "In the story, what does the chalk line represent?",
      options: [
        {
          label: "The algorithm or solution plan.",
          correct: true,
          explanation: "It shows the key idea to solve the problem.",
        },
        {
          label: "The workers' repair work.",
          correct: false,
          explanation: "The workers are like the program execution.",
        },
        {
          label: "A new machine part.",
          correct: false,
          explanation: "The chalk line is a plan, not a part.",
        },
      ],
    },
    stepsTitle: "2. Algorithm: A Solution and a Set of Steps",
    stepsEyebrow: "Ordered steps",
    stepsConceptTitle: "Concept Card",
    stepsConceptLines: [
      "An algorithm is an ordered series of steps to solve a problem.",
      "It is like a cooking recipe that anyone can follow.",
      "The word comes from the mathematician al-Khwarizmi.",
    ],
    stepsParas: [
      "A good recipe lists ingredients, amounts, and steps so anyone can cook the same dish.",
      "Al-Khwarizmi introduced the Hindu numeral system (0-9) to Europe, which replaced Roman numerals.",
    ],
    stepsFigure: {
      label: "Figure 6-8",
      caption: "The correspondence between Roman numerals and Arabic numerals.",
      placeholder: "Illustration placeholder",
    },
    stepsDemo: {
      title: "Clear Steps",
      goal: "See why algorithms need clear and ordered steps.",
      labels: {
        clear: "Steps are clear",
        ordered: "Steps are in order",
        outcome: "Outcome",
      },
    },
    stepsSteps: [
      "Toggle whether steps are clear and ordered.",
      "Observe the outcome message.",
      "Explain why order matters.",
    ],
    stepsCheckpoint: {
      prompt: "What is an algorithm in modern meaning?",
      options: [
        {
          label: "An ordered series of steps to solve a problem.",
          correct: true,
          explanation: "Algorithms are step-by-step methods.",
        },
        {
          label: "A computer that runs programs.",
          correct: false,
          explanation: "That describes hardware, not an algorithm.",
        },
        {
          label: "A file stored on a hard drive.",
          correct: false,
          explanation: "Files can store programs or data, not algorithms themselves.",
        },
      ],
    },
    distinguishTitle: "3. Distinguishing Algorithms from Programs",
    distinguishEyebrow: "Plan vs. code",
    distinguishConceptTitle: "Concept Card",
    distinguishConceptLines: [
      "Algorithms are ideas or plans for solving a problem.",
      "Programs are the implementation of algorithms on computers.",
      "Both must align for correct results.",
    ],
    distinguishParas: [
      "To find the greatest common divisor (GCD), we can use the Euclidean Algorithm.",
      "Below is the step-by-step method described in the book.",
    ],
    distinguishStepsList: [
      "Input two positive integers a and b.",
      "If b > a, swap them so that a is larger.",
      "Repeat: divide a by b to get remainder r; if r = 0, b is the GCD; otherwise set a = b and b = r.",
      "When remainder is 0, output the current b.",
    ],
    distinguishDemo: {
      title: "GCD Stepper",
      goal: "Walk through the Euclidean Algorithm with two numbers.",
      labels: {
        a: "Number a",
        b: "Number b",
        remainder: "Remainder",
        step: "Step",
        next: "Next",
        back: "Back",
      },
    },
    distinguishSteps: [
      "Enter two integers.",
      "Click Next to see each division step.",
      "Stop when the remainder becomes 0.",
    ],
    distinguishCheckpoint: {
      prompt: "In the Euclidean Algorithm, when do we stop?",
      options: [
        {
          label: "When the remainder is 0.",
          correct: true,
          explanation: "At that point, b is the GCD.",
        },
        {
          label: "When a becomes larger than b.",
          correct: false,
          explanation: "We may swap, but that is not the stopping rule.",
        },
        {
          label: "When the numbers are equal.",
          correct: false,
          explanation: "Equality is not required for stopping.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Algorithms in life",
    foodParas: [
      "An intelligent traffic light system is a classic example of an algorithm in action.",
      "It monitors traffic flow and adjusts timing to reduce congestion.",
    ],
    foodDemo: {
      title: "Traffic Light Planner",
      goal: "Choose a traffic level and see the suggested timing.",
      labels: {
        pick: "Traffic level",
        timing: "Suggested timing",
      },
      levels: [
        {
          key: "low",
          label: "Low traffic",
          timing: "Short green cycles",
          note: "Quick switching keeps side roads moving.",
        },
        {
          key: "medium",
          label: "Medium traffic",
          timing: "Balanced cycles",
          note: "Keep the main road flowing while letting others pass.",
        },
        {
          key: "high",
          label: "High traffic",
          timing: "Longer green for main road",
          note: "Reduce long queues on busy roads.",
        },
      ],
    },
    foodSteps: [
      "Select a traffic level.",
      "Read the suggested timing.",
      "Think of another everyday algorithm example.",
    ],
    foodCheckpoint: {
      prompt: "Why does the traffic light algorithm adjust timing?",
      options: [
        {
          label: "To optimize traffic flow and reduce congestion.",
          correct: true,
          explanation: "The algorithm uses real-time traffic to adjust lights.",
        },
        {
          label: "To make all lights stay red.",
          correct: false,
          explanation: "That would stop traffic, not optimize it.",
        },
        {
          label: "To ignore traffic flow completely.",
          correct: false,
          explanation: "The key idea is using traffic data.",
        },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryEyebrow: "Summary",
    summaryPoints: [
      "An algorithm is a step-by-step method for solving a problem.",
      "A program is the implementation of an algorithm on a computer.",
      "Clear and ordered steps make algorithms effective.",
      "The Euclidean Algorithm finds the GCD by repeating remainders.",
      "Algorithms are everywhere, such as in smart traffic lights.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解算法的基本概念与作用。",
      "区分算法与程序，理解两者关系。",
    ],
    introTitle: "故事开头",
    introEyebrow: "开场",
    introText:
      "我们学过什么是程序，但日常生活中也常听到“算法”。这一课会解释算法是什么，以及它和程序的区别。",
    chalkTitle: "1. 粉笔线的故事",
    chalkEyebrow: "思想与执行",
    chalkConceptTitle: "概念卡",
    chalkConceptLines: [
      "算法像专家的思路与方法。",
      "程序像工人的实际执行。",
      "好的方法能节省大量劳动。",
    ],
    chalkParas: [
      "专家在机器上画出粉笔线并给出修理方案。",
      "工人按方案执行，才修好机器。",
      "这说明方法（算法）与执行（程序）是不同角色。",
    ],
    chalkDemo: {
      title: "方案与努力",
      goal: "调整方案清晰度与执行努力，观察成功概率。",
      labels: {
        plan: "方案清晰度",
        effort: "执行努力",
        success: "成功分数",
        note: "清晰方案能显著提升成功率。",
      },
    },
    chalkSteps: [
      "调整两个滑块。",
      "观察成功分数。",
      "说明为什么方案很关键。",
    ],
    chalkCheckpoint: {
      prompt: "故事中的粉笔线代表什么？",
      options: [
        {
          label: "算法或解决方案。",
          correct: true,
          explanation: "粉笔线指向关键方法。",
        },
        {
          label: "工人的劳动。",
          correct: false,
          explanation: "工人代表程序执行。",
        },
        {
          label: "机器零件。",
          correct: false,
          explanation: "粉笔线不是零件。",
        },
      ],
    },
    stepsTitle: "2. 算法：解决问题的一组步骤",
    stepsEyebrow: "有序步骤",
    stepsConceptTitle: "概念卡",
    stepsConceptLines: [
      "算法是解决问题的有序步骤。",
      "它像食谱，人人都能照着做。",
      "算法一词来自数学家花剌子密。",
    ],
    stepsParas: [
      "一份好的食谱会列出材料、用量与步骤，让做出的菜味道一致。",
      "花剌子密把印度数字系统带到欧洲，推动了阿拉伯数字取代罗马数字。",
    ],
    stepsFigure: {
      label: "图 6-8",
      caption: "罗马数字与阿拉伯数字的对应关系。",
      placeholder: "示意图",
    },
    stepsDemo: {
      title: "清晰步骤",
      goal: "观察算法为何需要清晰且有序的步骤。",
      labels: {
        clear: "步骤清晰",
        ordered: "步骤有序",
        outcome: "结果",
      },
    },
    stepsSteps: [
      "勾选步骤是否清晰与有序。",
      "观察结果变化。",
      "解释为什么顺序重要。",
    ],
    stepsCheckpoint: {
      prompt: "现代意义上的算法是什么？",
      options: [
        {
          label: "解决问题的有序步骤。",
          correct: true,
          explanation: "算法是一步步的方法。",
        },
        {
          label: "一台运行程序的计算机。",
          correct: false,
          explanation: "那是硬件，不是算法。",
        },
        {
          label: "硬盘里的一个文件。",
          correct: false,
          explanation: "文件可以保存程序或数据。",
        },
      ],
    },
    distinguishTitle: "3. 区分算法与程序",
    distinguishEyebrow: "方法与实现",
    distinguishConceptTitle: "概念卡",
    distinguishConceptLines: [
      "算法是解决问题的思路或方案。",
      "程序是算法在计算机上的实现。",
      "算法与程序要对应一致。",
    ],
    distinguishParas: [
      "求最大公约数可以使用欧几里得算法。",
      "下面是书中的步骤描述。",
    ],
    distinguishStepsList: [
      "输入两个正整数 a 和 b。",
      "若 b > a，则交换，使 a 更大。",
      "重复：a 除以 b 得余数 r；若 r = 0，则 b 为最大公约数；否则令 a = b，b = r。",
      "当余数为 0 时，输出当前 b。",
    ],
    distinguishDemo: {
      title: "最大公约数演示",
      goal: "用两个数字走一遍欧几里得算法。",
      labels: {
        a: "数字 a",
        b: "数字 b",
        remainder: "余数",
        step: "步骤",
        next: "下一步",
        back: "上一步",
      },
    },
    distinguishSteps: [
      "输入两个整数。",
      "点击下一步查看每次除法。",
      "余数为 0 时停止。",
    ],
    distinguishCheckpoint: {
      prompt: "欧几里得算法什么时候停止？",
      options: [
        {
          label: "余数为 0 时。",
          correct: true,
          explanation: "此时 b 就是最大公约数。",
        },
        {
          label: "当 a 大于 b 时。",
          correct: false,
          explanation: "需要继续取余数。",
        },
        {
          label: "当 a 等于 b 时。",
          correct: false,
          explanation: "不一定相等才结束。",
        },
      ],
    },
    foodTitle: "想一想",
    foodEyebrow: "生活中的算法",
    foodParas: [
      "智能交通灯是算法在现实中的经典应用。",
      "它会根据交通流量动态调整红绿灯时间。",
    ],
    foodDemo: {
      title: "交通灯调度",
      goal: "选择交通流量，查看建议时长。",
      labels: {
        pick: "交通流量",
        timing: "建议时长",
      },
      levels: [
        {
          key: "low",
          label: "低流量",
          timing: "短绿灯循环",
          note: "让小路也能及时通行。",
        },
        {
          key: "medium",
          label: "中流量",
          timing: "均衡循环",
          note: "主路畅通，也兼顾支路。",
        },
        {
          key: "high",
          label: "高流量",
          timing: "主路延长绿灯",
          note: "减少拥堵与排队。",
        },
      ],
    },
    foodSteps: [
      "选择交通流量。",
      "查看建议的时长。",
      "想一想其他算法例子。",
    ],
    foodCheckpoint: {
      prompt: "交通灯算法调整时长的目的是什么？",
      options: [
        {
          label: "优化交通流，减少拥堵。",
          correct: true,
          explanation: "算法根据实时流量调整。",
        },
        {
          label: "让所有路口一直红灯。",
          correct: false,
          explanation: "那会阻塞交通。",
        },
        {
          label: "完全忽略交通流量。",
          correct: false,
          explanation: "实时流量是关键输入。",
        },
      ],
    },
    summaryTitle: "要点回顾",
    summaryEyebrow: "总结",
    summaryPoints: [
      "算法是解决问题的有序方法。",
      "程序是算法在计算机上的实现。",
      "清晰且有序的步骤决定算法效果。",
      "欧几里得算法通过不断取余求最大公约数。",
      "算法广泛存在于生活场景中。",
    ],
  },
};
