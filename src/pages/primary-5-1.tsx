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

export function PrimaryLesson5_1({ lang }: LessonProps) {
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
    { id: "journey", label: t.journeyTitle },
    { id: "method", label: t.methodTitle },
    { id: "educator", label: t.educatorTitle },
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
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
            {t.introQuote}
          </div>
          <FigureCard
            label={t.introFigure.label}
            caption={t.introFigure.caption}
            placeholder={t.introFigure.placeholder}
          />
        </SectionBlock>

        <SectionBlock id="journey" title={t.journeyTitle} eyebrow={t.journeyEyebrow}>
          <InfoCard title={t.journeyConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.journeyConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.journeyParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <MentorPathDemo
            lang={lang}
            title={t.journeyDemo.title}
            goal={t.journeyDemo.goal}
            resetLabel={ui.reset}
            mentors={t.journeyDemo.mentors}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.journeySteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.journeyCheckpoint.prompt}
            options={t.journeyCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="method" title={t.methodTitle} eyebrow={t.methodEyebrow}>
          <InfoCard title={t.methodConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.methodConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.methodParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.methodFigure.label}
            caption={t.methodFigure.caption}
            placeholder={t.methodFigure.placeholder}
          />
          <AlgebraizeGeometryDemo
            lang={lang}
            title={t.methodDemo.title}
            goal={t.methodDemo.goal}
            resetLabel={ui.reset}
            examples={t.methodDemo.examples}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.methodSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.methodCheckpoint.prompt}
            options={t.methodCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="educator" title={t.educatorTitle} eyebrow={t.educatorEyebrow}>
          <InfoCard title={t.educatorConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.educatorConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.educatorParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <EducationImpactDemo
            lang={lang}
            title={t.educatorDemo.title}
            goal={t.educatorDemo.goal}
            resetLabel={ui.reset}
            impacts={t.educatorDemo.impacts}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.educatorSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.educatorCheckpoint.prompt}
            options={t.educatorCheckpoint.options}
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
          <CourageStarterDemo
            lang={lang}
            title={t.foodDemo.title}
            goal={t.foodDemo.goal}
            resetLabel={ui.reset}
            choices={t.foodDemo.choices}
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

type Mentor = {
  key: string;
  name: string;
  role: string;
  impact: string;
};

function MentorPathDemo({
  lang,
  title,
  goal,
  resetLabel,
  mentors,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  mentors: Mentor[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(mentors[0]?.key ?? "");
  const current = mentors.find((mentor) => mentor.key === active) ?? mentors[0];

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
          onClick={() => setActive(mentors[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 grid gap-2 md:grid-cols-3">
        {mentors.map((mentor) => (
          <button
            key={mentor.key}
            type="button"
            onClick={() => setActive(mentor.key)}
            className={[
              "rounded-xl border px-3 py-2 text-left text-xs font-semibold transition",
              mentor.key === active
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {mentor.name}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "关键引导" : "Key guidance"}
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{current.role}</p>
          <p className="mt-2 text-sm">{current.impact}</p>
        </div>
      )}
    </div>
  );
}

type GeometryExample = {
  key: string;
  label: string;
  geometry: string;
  algebra: string;
};

function AlgebraizeGeometryDemo({
  lang,
  title,
  goal,
  resetLabel,
  examples,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  examples: GeometryExample[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(examples[0]?.key ?? "");
  const current = examples.find((example) => example.key === active) ?? examples[0];

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
          onClick={() => setActive(examples[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {examples.map((example) => (
          <button
            key={example.key}
            type="button"
            onClick={() => setActive(example.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              example.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {example.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {isZh ? "几何描述" : "Geometry"}
            </p>
            <p className="mt-1 text-sm">{current.geometry}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {isZh ? "代数表达" : "Algebra"}
            </p>
            <p className="mt-1 text-sm">{current.algebra}</p>
          </div>
        </div>
      )}
    </div>
  );
}

type EducationImpact = {
  key: string;
  title: string;
  detail: string;
};

function EducationImpactDemo({
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
  impacts: EducationImpact[];
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
            {isZh ? "教育影响" : "Education impact"}
          </p>
          <p className="mt-1 text-sm">{current.detail}</p>
        </div>
      )}
    </div>
  );
}

type CourageChoice = {
  key: string;
  label: string;
  response: string;
};

function CourageStarterDemo({
  lang,
  title,
  goal,
  resetLabel,
  choices,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  choices: CourageChoice[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(choices[0]?.key ?? "");
  const current = choices.find((choice) => choice.key === active) ?? choices[0];

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
          onClick={() => setActive(choices[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {choices.map((choice) => (
          <button
            key={choice.key}
            type="button"
            onClick={() => setActive(choice.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              choice.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {choice.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "回应" : "Response"}
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
      "Learn about Wu Wenjun's life and achievements in geometric theorem proving.",
      "Discover the origin of the Wu Wenjun AI Award and its role in China.",
      "Gain inspiration from Wu Wenjun's scientific journey.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "Wu Wenjun proposed the mechanization of mathematics and created an algebraic method for proving geometric theorems. He brought China to the international forefront of automated geometry.",
    introQuote:
      "Woody Bledsoe wrote: \"Wu's work on automatic proof of plane geometry theorems is first-rate. He alone brought China to the international forefront in this field.\"",
    introFigure: {
      label: "Figure 5-1",
      caption: "Portrait of Wu Wenjun.",
      placeholder: "Illustration placeholder",
    },
    journeyTitle: "1. The Mathematician Who Started with a Zero",
    journeyEyebrow: "Turning point",
    journeyConceptTitle: "Concept Card",
    journeyConceptLines: [
      "Wu was born in 1919 and studied topology in France.",
      "He returned to China in 1951 and became a leading mathematician.",
      "Three mentors guided him from weak math grades to mastery.",
    ],
    journeyParas: [
      "As a child, Wu dreamed of physics and once even scored zero in math. His path changed because of mentors who guided him toward mathematics.",
      "Professor Wu Chonglin sparked his passion for modern mathematics, and Shiing-Shen Chern trained him in topology.",
      "Wu later proposed Wu's Formula and earned major awards for his contributions.",
    ],
    journeyDemo: {
      title: "Mentors Who Guided Wu",
      goal: "See how each mentor helped Wu shift toward mathematics.",
      mentors: [
        {
          key: "physics",
          name: "Physics teacher",
          role: "Encouraged him to major in math.",
          impact: "Noticed Wu's physics strength came from solid math.",
        },
        {
          key: "wuchonglin",
          name: "Wu Chonglin",
          role: "Taught algebra and real analysis.",
          impact: "Awakened Wu's interest in modern mathematics.",
        },
        {
          key: "chern",
          name: "Shiing-Shen Chern",
          role: "Trained him in topology.",
          impact: "Led Wu into topology and inspired Wu's Formula.",
        },
      ],
    },
    journeySteps: [
      "Choose a mentor.",
      "Read how they guided Wu.",
      "Explain why mentors can change a path.",
    ],
    journeyCheckpoint: {
      prompt: "What helped Wu Wenjun turn toward mathematics?",
      options: [
        {
          label: "Mentors who guided him step by step.",
          correct: true,
          explanation: "His mentors encouraged and trained him in math.",
        },
        {
          label: "Winning a chess tournament.",
          correct: false,
          explanation: "His path was shaped by teachers and mathematicians.",
        },
        {
          label: "Avoiding all hard courses.",
          correct: false,
          explanation: "He pursued challenging topics like real analysis.",
        },
      ],
    },
    methodTitle: "2. The Birth of the Wu Method",
    methodEyebrow: "Automated geometry",
    methodConceptTitle: "Concept Card",
    methodConceptLines: [
      "Wu experienced computers in the 1970s and learned programming at age 60.",
      "He proposed the Wu Method in 1977.",
      "The method algebraizes geometry for automated proof.",
    ],
    methodParas: [
      "Wu spent long hours in a computer lab and introduced the Wu Method for geometric theorem proving.",
      "He turned geometric statements into algebraic equations, making them solvable by computers.",
      "His method transformed geometric theorem proving into a successful AI field and won him the Herbrand Award.",
    ],
    methodFigure: {
      label: "Figure 5-2",
      caption: "Wu Wenjun working with a computer.",
      placeholder: "Illustration placeholder",
    },
    methodDemo: {
      title: "Algebraizing Geometry",
      goal: "Match a geometry statement with its algebra form.",
      examples: [
        {
          key: "circle",
          label: "Circle",
          geometry: "A circle has all points the same distance from the center.",
          algebra: "x^2 + y^2 = r^2",
        },
        {
          key: "triangle",
          label: "Right triangle",
          geometry: "A right triangle follows the Pythagorean theorem.",
          algebra: "a^2 + b^2 = c^2",
        },
        {
          key: "line",
          label: "Straight line",
          geometry: "Points on a line follow a linear rule.",
          algebra: "y = mx + b",
        },
      ],
    },
    methodSteps: [
      "Choose a geometry example.",
      "Read the matching algebra form.",
      "Explain why equations help computers prove theorems.",
    ],
    methodCheckpoint: {
      prompt: "What is the key idea of the Wu Method?",
      options: [
        {
          label: "Turn geometry into algebra so computers can solve it.",
          correct: true,
          explanation: "Wu's method makes geometric proofs computable.",
        },
        {
          label: "Avoid using any equations.",
          correct: false,
          explanation: "The method relies on algebraic equations.",
        },
        {
          label: "Only focus on poetry.",
          correct: false,
          explanation: "The method focuses on geometric theorems.",
        },
      ],
    },
    educatorTitle: "3. Wu Wenjun the Educator",
    educatorEyebrow: "Talent and awards",
    educatorConceptTitle: "Concept Card",
    educatorConceptLines: [
      "Wu advocated talent development in mathematics and physics.",
      "The Tianyuan Fund supported cutting-edge math research.",
      "The Wu Wenjun AI Award became China's top AI honor.",
    ],
    educatorParas: [
      "Wu called on China to strengthen education after the launch of the first satellite.",
      "He helped establish the Mathematics Tianyuan Fund in 1989 to support researchers.",
      "In 2011, the Wu Wenjun AI Award was created to honor AI achievements in China.",
    ],
    educatorDemo: {
      title: "Education Impact",
      goal: "See how Wu supported math talent and AI recognition.",
      impacts: [
        {
          key: "sputnik",
          title: "1957 call",
          detail: "Wu urged China to strengthen math and physics talent.",
        },
        {
          key: "tianyuan",
          title: "Tianyuan Fund",
          detail: "Established in 1989 to support cutting-edge math research.",
        },
        {
          key: "award",
          title: "AI Award",
          detail: "The Wu Wenjun AI Award became China's top AI honor.",
        },
      ],
    },
    educatorSteps: [
      "Choose an impact item.",
      "Explain its role in education or AI.",
      "Share why talent support matters.",
    ],
    educatorCheckpoint: {
      prompt: "What is the Wu Wenjun AI Award?",
      options: [
        {
          label: "China's top prize in intelligent science and technology.",
          correct: true,
          explanation: "It honors outstanding AI achievements in China.",
        },
        {
          label: "A chess tournament trophy.",
          correct: false,
          explanation: "It is an AI science and technology award.",
        },
        {
          label: "A new math textbook.",
          correct: false,
          explanation: "It is an award, not a book.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Courage to learn",
    foodParas: [
      "Wu started learning computers at age 60 and did not retreat from new challenges.",
      "Imagine if you were in his position. Would you push beyond your limits?",
    ],
    foodDemo: {
      title: "Starting from Scratch",
      goal: "Pick a response to a new challenge and see the outcome.",
      choices: [
        {
          key: "avoid",
          label: "Avoid it",
          response: "Avoiding keeps you safe, but you miss growth opportunities.",
        },
        {
          key: "try",
          label: "Give it a try",
          response: "Trying small steps builds confidence over time.",
        },
        {
          key: "persist",
          label: "Persist",
          response: "Persistence turns challenges into breakthroughs.",
        },
      ],
    },
    foodSteps: [
      "Choose a response.",
      "Read the outcome.",
      "Share one challenge you want to face.",
    ],
    foodCheckpoint: {
      prompt: "What can we learn from Wu's late start with computers?",
      options: [
        {
          label: "It is never too late to learn and grow.",
          correct: true,
          explanation: "Wu started programming at 60 and achieved breakthroughs.",
        },
        {
          label: "Only young people can learn new skills.",
          correct: false,
          explanation: "Wu's story shows lifelong learning matters.",
        },
        {
          label: "Challenges should be avoided.",
          correct: false,
          explanation: "He faced challenges bravely and succeeded.",
        },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryEyebrow: "Summary",
    summaryPoints: [
      "Wu Wenjun moved from weak math grades to world-class achievements.",
      "The Wu Method algebraized geometry for automated proof.",
      "He promoted talent development and inspired the Wu Wenjun AI Award.",
      "Courage and persistence can turn challenges into breakthroughs.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解吴文俊的生平与几何定理证明成就。",
      "认识吴文俊人工智能奖的由来及意义。",
      "从吴文俊的科学之路获得启发和力量。",
    ],
    introTitle: "故事开头",
    introEyebrow: "开场",
    introText:
      "吴文俊提出“数学机械化”并创立代数化几何的证明方法，让中国走在自动几何证明前列。",
    introQuote:
      "布莱德索写道：\"吴文俊在平面几何定理自动证明方面的工作是一流的，他独自把中国带到国际前沿。\"",
    introFigure: {
      label: "图 5-1",
      caption: "吴文俊画像。",
      placeholder: "插图占位",
    },
    journeyTitle: "1. 从零开始的数学家",
    journeyEyebrow: "转折之路",
    journeyConceptTitle: "概念卡片",
    journeyConceptLines: [
      "吴文俊 1919 年出生，赴法研究拓扑。",
      "1951 年回国，成为世界知名数学家。",
      "三位导师一步步引导他走进数学。",
    ],
    journeyParas: [
      "吴文俊小时候数学并不突出，甚至考过零分。导师们的引导改变了他的方向。",
      "吴崇林激发他对现代数学的兴趣，陈省身带他进入拓扑领域。",
      "他提出吴公式并获得多项大奖。",
    ],
    journeyDemo: {
      title: "导师引路",
      goal: "了解导师如何帮助吴文俊走向数学。",
      mentors: [
        {
          key: "physics",
          name: "物理老师",
          role: "建议他选择数学专业。",
          impact: "发现他的物理优势来自扎实数学基础。",
        },
        {
          key: "wuchonglin",
          name: "吴崇林",
          role: "教授代数与实变函数。",
          impact: "点燃他对现代数学的热情。",
        },
        {
          key: "chern",
          name: "陈省身",
          role: "在拓扑领域严格培养。",
          impact: "引导他提出吴公式。",
        },
      ],
    },
    journeySteps: [
      "选择一位导师。",
      "阅读他的引导作用。",
      "说明导师如何改变人生轨迹。",
    ],
    journeyCheckpoint: {
      prompt: "吴文俊走向数学的关键因素是什么？",
      options: [
        {
          label: "导师的循循善诱与指导。",
          correct: true,
          explanation: "导师一步步引导他进入数学世界。",
        },
        {
          label: "参加棋类比赛。",
          correct: false,
          explanation: "他的转折来自数学导师。",
        },
        {
          label: "刻意躲避难课。",
          correct: false,
          explanation: "他深入学习实变函数等内容。",
        },
      ],
    },
    methodTitle: "2. 吴方法的诞生",
    methodEyebrow: "自动几何证明",
    methodConceptTitle: "概念卡片",
    methodConceptLines: [
      "吴文俊 60 岁学习编程。",
      "1977 年提出吴方法。",
      "用代数化几何实现自动证明。",
    ],
    methodParas: [
      "他在机房长时间工作，最终提出吴方法。",
      "吴方法把几何问题转成代数方程，让计算机能高效证明。",
      "这项工作赢得了赫伯兰德奖。",
    ],
    methodFigure: {
      label: "图 5-2",
      caption: "吴文俊在电脑前工作。",
      placeholder: "插图占位",
    },
    methodDemo: {
      title: "几何代数化",
      goal: "把几何语句对应到代数表达。",
      examples: [
        {
          key: "circle",
          label: "圆",
          geometry: "圆上各点到圆心距离相等。",
          algebra: "x^2 + y^2 = r^2",
        },
        {
          key: "triangle",
          label: "直角三角形",
          geometry: "直角三角形满足勾股定理。",
          algebra: "a^2 + b^2 = c^2",
        },
        {
          key: "line",
          label: "直线",
          geometry: "直线上点满足线性关系。",
          algebra: "y = mx + b",
        },
      ],
    },
    methodSteps: [
      "选择一个几何例子。",
      "查看它的代数表达。",
      "说明方程为何适合计算机。",
    ],
    methodCheckpoint: {
      prompt: "吴方法的核心思想是什么？",
      options: [
        {
          label: "把几何问题转成代数方程。",
          correct: true,
          explanation: "代数化让计算机能自动证明。",
        },
        {
          label: "完全不用方程。",
          correct: false,
          explanation: "吴方法依赖代数方程。",
        },
        {
          label: "只研究诗歌。",
          correct: false,
          explanation: "吴方法面向几何定理证明。",
        },
      ],
    },
    educatorTitle: "3. 吴文俊的教育情怀",
    educatorEyebrow: "人才与奖项",
    educatorConceptTitle: "概念卡片",
    educatorConceptLines: [
      "倡导基础学科人才培养。",
      "推动天元基金支持数学研究。",
      "吴文俊人工智能奖成为最高奖项之一。",
    ],
    educatorParas: [
      "1957 年苏联发射卫星后，吴文俊呼吁重视数学与物理人才。",
      "1989 年推动成立天元基金支持前沿数学研究。",
      "2011 年设立吴文俊人工智能奖，成为我国 AI 领域最高荣誉。",
    ],
    educatorDemo: {
      title: "教育影响",
      goal: "了解吴文俊推动教育与 AI 发展的举措。",
      impacts: [
        {
          key: "sputnik",
          title: "1957 呼吁",
          detail: "强调发展数学与物理人才。",
        },
        {
          key: "tianyuan",
          title: "天元基金",
          detail: "1989 年设立，支持前沿数学研究。",
        },
        {
          key: "award",
          title: "吴文俊 AI 奖",
          detail: "2011 年设立，成为我国 AI 最高荣誉之一。",
        },
      ],
    },
    educatorSteps: [
      "选择一个影响事件。",
      "说出它的意义。",
      "分享为何人才培养重要。",
    ],
    educatorCheckpoint: {
      prompt: "吴文俊人工智能奖的定位是？",
      options: [
        {
          label: "我国智能科学技术领域的顶级奖项。",
          correct: true,
          explanation: "它是中国 AI 领域最高荣誉之一。",
        },
        {
          label: "象棋比赛冠军奖杯。",
          correct: false,
          explanation: "它是 AI 科技奖项。",
        },
        {
          label: "数学课本名称。",
          correct: false,
          explanation: "它是奖项而非教材。",
        },
      ],
    },
    foodTitle: "想一想",
    foodEyebrow: "勇敢学习",
    foodParas: [
      "吴文俊 60 岁才开始学习计算机，却没有退缩。",
      "如果是你，会不会尝试突破自己？",
    ],
    foodDemo: {
      title: "从零开始",
      goal: "选择面对新挑战的方式。",
      choices: [
        {
          key: "avoid",
          label: "避开",
          response: "避开会减少压力，但也失去成长机会。",
        },
        {
          key: "try",
          label: "尝试",
          response: "迈出一步会逐渐建立信心。",
        },
        {
          key: "persist",
          label: "坚持",
          response: "坚持能把挑战变成突破。",
        },
      ],
    },
    foodSteps: [
      "选择一种回应。",
      "阅读结果。",
      "分享你想克服的挑战。",
    ],
    foodCheckpoint: {
      prompt: "吴文俊的故事告诉我们什么？",
      options: [
        {
          label: "学习永远不晚，勇敢面对挑战。",
          correct: true,
          explanation: "他 60 岁开始学编程并取得突破。",
        },
        {
          label: "年长就无法学习新技能。",
          correct: false,
          explanation: "他的经历说明终身学习很重要。",
        },
        {
          label: "遇到困难就放弃。",
          correct: false,
          explanation: "他选择坚持并取得成果。",
        },
      ],
    },
    summaryTitle: "要点回顾",
    summaryEyebrow: "总结",
    summaryPoints: [
      "吴文俊从数学薄弱走向世界级成就。",
      "吴方法把几何证明代数化，推动自动定理证明。",
      "他推动人才培养并设立吴文俊 AI 奖。",
      "勇气和坚持能带来突破。",
    ],
  },
};
