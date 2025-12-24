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

export function PrimaryLesson3_1({ lang }: LessonProps) {
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
    { id: "understanding", label: t.understandingTitle },
    { id: "magic", label: t.magicTitle },
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
          <FigureCard
            label={t.introFigure.label}
            caption={t.introFigure.caption}
            placeholder={t.introFigure.placeholder}
          />
        </SectionBlock>

        <SectionBlock id="understanding" title={t.understandingTitle} eyebrow={t.understandingEyebrow}>
          <InfoCard title={t.understandingConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.understandingConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.understandingParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <div className="grid gap-3 md:grid-cols-2">
            {t.understandingFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <PixelGridDemo
            lang={lang}
            title={t.pixelDemo.title}
            goal={t.pixelDemo.goal}
            resetLabel={ui.reset}
            grids={t.pixelDemo.grids}
          />
          <ImageCodeDemo
            lang={lang}
            title={t.codeDemo.title}
            goal={t.codeDemo.goal}
            resetLabel={ui.reset}
            presets={t.codeDemo.presets}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.understandingSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.understandingCheckpoint.prompt}
            options={t.understandingCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="magic" title={t.magicTitle} eyebrow={t.magicEyebrow}>
          <InfoCard title={t.magicConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.magicConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.magicParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <div className="grid gap-3 md:grid-cols-3">
            {t.magicFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <FaceGuessDemo
            lang={lang}
            title={t.faceDemo.title}
            goal={t.faceDemo.goal}
            resetLabel={ui.reset}
            options={t.faceDemo.options}
            answer={t.faceDemo.answer}
          />
          <FantasyComboDemo
            lang={lang}
            title={t.fantasyDemo.title}
            goal={t.fantasyDemo.goal}
            resetLabel={ui.reset}
            subjects={t.fantasyDemo.subjects}
            actions={t.fantasyDemo.actions}
          />
          <StyleTransferDemo
            lang={lang}
            title={t.styleDemo.title}
            goal={t.styleDemo.goal}
            resetLabel={ui.reset}
            styles={t.styleDemo.styles}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.magicSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.magicCheckpoint.prompt}
            options={t.magicCheckpoint.options}
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
          <ArtDebateDemo
            lang={lang}
            title={t.foodDemo.title}
            goal={t.foodDemo.goal}
            resetLabel={ui.reset}
            views={t.foodDemo.views}
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

type PixelGrid = {
  key: string;
  label: string;
  cells: string[];
  note: string;
};

function PixelGridDemo({
  lang,
  title,
  goal,
  resetLabel,
  grids,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  grids: PixelGrid[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(grids[0]?.key ?? "");
  const current = grids.find((grid) => grid.key === active) ?? grids[0];

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
          onClick={() => setActive(grids[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {grids.map((grid) => (
          <button
            key={grid.key}
            type="button"
            onClick={() => setActive(grid.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              grid.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {grid.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 grid gap-3 md:grid-cols-[1fr_1.2fr]">
          <div className="grid grid-cols-4 gap-1">
            {current.cells.map((cell, idx) => (
              <div
                key={`${cell}-${idx}`}
                className="flex h-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-[11px] font-semibold text-slate-600"
              >
                {cell}
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            {current.note}
          </div>
        </div>
      )}
    </div>
  );
}

type ImageCodePreset = {
  key: string;
  label: string;
  description: string;
  tone: string;
};

function ImageCodeDemo({
  lang,
  title,
  goal,
  resetLabel,
  presets,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  presets: ImageCodePreset[];
}) {
  const isZh = lang === "zh";
  const [index, setIndex] = useState(0);
  const current = presets[index] ?? presets[0];

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

      <div className="mt-4">
        <input
          type="range"
          min={0}
          max={presets.length - 1}
          step={1}
          value={index}
          onChange={(event) => setIndex(Number(event.target.value))}
          className="w-full"
          aria-label={isZh ? "图像编码" : "Image code"}
        />
        <div className="mt-2 flex justify-between text-[11px] text-slate-500">
          {presets.map((preset) => (
            <span key={preset.key}>{preset.label}</span>
          ))}
        </div>
      </div>

      {current && (
        <div className="mt-3 grid gap-3 md:grid-cols-[1fr_1.2fr]">
          <div
            className="flex min-h-[120px] items-center justify-center rounded-xl border border-slate-200 text-xs font-semibold text-slate-700"
            style={{ background: current.tone }}
          >
            {current.label}
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            {current.description}
          </div>
        </div>
      )}
    </div>
  );
}

type FaceOption = {
  key: string;
  label: string;
  detail: string;
};

function FaceGuessDemo({
  lang,
  title,
  goal,
  resetLabel,
  options,
  answer,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  options: FaceOption[];
  answer: string;
}) {
  const isZh = lang === "zh";
  const [pick, setPick] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const result =
    pick === null
      ? isZh
        ? "请选择一个面孔。"
        : "Pick a face first."
      : pick === answer
        ? isZh
          ? "正确：中间那张是真实人脸。"
          : "Correct: the middle face is real."
        : isZh
          ? "再想想：AI 生成的脸也很真实。"
          : "Try again: AI faces can look very real.";

  const reset = () => {
    setPick(null);
    setRevealed(false);
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
          onClick={reset}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        {options.map((option) => (
          <button
            key={option.key}
            type="button"
            onClick={() => setPick(option.key)}
            className={[
              "rounded-xl border px-3 py-3 text-left text-xs font-semibold transition",
              pick === option.key
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            <p className="text-sm font-semibold text-slate-900">{option.label}</p>
            <p className="mt-1 text-xs text-slate-600">{option.detail}</p>
          </button>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => setRevealed(true)}
          className="rounded-lg border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-slate-300"
          disabled={pick === null}
        >
          {isZh ? "揭晓" : "Reveal"}
        </button>
        <span className="text-xs text-slate-600">
          {revealed ? result : isZh ? "选择后再揭晓" : "Reveal after choosing"}
        </span>
      </div>
    </div>
  );
}

function FantasyComboDemo({
  lang,
  title,
  goal,
  resetLabel,
  subjects,
  actions,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  subjects: string[];
  actions: string[];
}) {
  const isZh = lang === "zh";
  const [subject, setSubject] = useState(subjects[0] ?? "");
  const [action, setAction] = useState(actions[0] ?? "");

  const reset = () => {
    setSubject(subjects[0] ?? "");
    setAction(actions[0] ?? "");
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
          onClick={reset}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <label className="text-xs font-semibold text-slate-600">
          {isZh ? "主体" : "Subject"}
          <select
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-2 py-1 text-sm text-slate-700"
          >
            {subjects.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="text-xs font-semibold text-slate-600">
          {isZh ? "动作" : "Action"}
          <select
            value={action}
            onChange={(event) => setAction(event.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-2 py-1 text-sm text-slate-700"
          >
            {actions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
        {isZh ? "组合结果：" : "Result: "}
        <span className="font-semibold text-slate-900">
          {subject} {action}
        </span>
      </div>
    </div>
  );
}

type StyleOption = {
  key: string;
  label: string;
  outcome: string;
};

function StyleTransferDemo({
  lang,
  title,
  goal,
  resetLabel,
  styles,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  styles: StyleOption[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(styles[0]?.key ?? "");
  const current = styles.find((style) => style.key === active) ?? styles[0];

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
          onClick={() => setActive(styles[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {styles.map((style) => (
          <button
            key={style.key}
            type="button"
            onClick={() => setActive(style.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              style.key === active
                ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {style.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          {current.outcome}
        </div>
      )}
    </div>
  );
}

type DebateView = {
  key: string;
  label: string;
  outcome: string;
};

function ArtDebateDemo({
  lang,
  title,
  goal,
  resetLabel,
  views,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  views: DebateView[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(views[0]?.key ?? "");
  const current = views.find((view) => view.key === active) ?? views[0];

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
          onClick={() => setActive(views[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {views.map((view) => (
          <button
            key={view.key}
            type="button"
            onClick={() => setActive(view.key)}
            className={[
              "rounded-xl border px-3 py-2 text-left text-xs font-semibold transition",
              view.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {view.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          {current.outcome}
        </div>
      )}
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand how AI artists can generate artwork and transfer styles.",
      "Learn the basic principles behind how AI understands and creates images.",
      "Examine the relationship between AI and art, and learn to use AI artist tools wisely and responsibly.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "AI can create realistic images, imagine fantastic scenes, and imitate famous painters. These works look like Figure 3-1.",
    introFigure: {
      label: "Figure 3-1",
      caption: "Examples of images created by AI.",
      placeholder: "Illustration placeholder",
    },
    understandingTitle: "1. It Starts with Understanding Images",
    understandingEyebrow: "Pixels to patterns",
    understandingConceptTitle: "Concept Card",
    understandingConceptLines: [
      "A picture becomes a grid of numbers called pixels.",
      "Color pixels use three values: red, green, and blue.",
      "Neural networks learn patterns and create image code.",
    ],
    understandingParas: [
      "A camera turns images into digital signals. A black-and-white image is a grid of brightness values. A color image uses three numbers for red, green, and blue (Figure 3-2).",
      "Humans see patterns easily, but computers only see numbers. Neural networks helped solve this by learning patterns between pixels.",
      "Neural networks can turn a piece of code into an image. Changing the code changes the image, like DNA shaping how we look (Figure 3-3).",
    ],
    understandingFigures: [
      {
        label: "Figure 3-2",
        caption: "How computers see images as grids of numbers.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 3-3",
        caption: "Generating images through neural networks.",
        placeholder: "Illustration placeholder",
      },
    ],
    pixelDemo: {
      title: "Pixel Grid View",
      goal: "Switch between grayscale and RGB pixel values.",
      grids: [
        {
          key: "gray",
          label: "Grayscale",
          cells: ["12", "34", "56", "78", "23", "45", "67", "89", "34", "56", "78", "90", "45", "67", "89", "100"],
          note: "Each number is a brightness level for one pixel.",
        },
        {
          key: "rgb",
          label: "RGB",
          cells: [
            "12,30,90",
            "34,80,60",
            "56,120,40",
            "78,140,80",
            "20,40,60",
            "60,90,120",
            "80,40,150",
            "90,110,30",
            "40,90,120",
            "70,100,150",
            "90,130,180",
            "20,60,90",
            "10,80,120",
            "60,90,20",
            "90,30,60",
            "100,120,140",
          ],
          note: "Each pixel has three values for red, green, and blue.",
        },
      ],
    },
    codeDemo: {
      title: "Image Code Slider",
      goal: "Adjust the image code and see the output change.",
      presets: [
        {
          key: "code-1",
          label: "Code 1",
          description: "A soft landscape with calm colors appears.",
          tone: "linear-gradient(135deg, #fef3c7, #bfdbfe)",
        },
        {
          key: "code-2",
          label: "Code 2",
          description: "A bold portrait with strong contrast appears.",
          tone: "linear-gradient(135deg, #fee2e2, #a5b4fc)",
        },
        {
          key: "code-3",
          label: "Code 3",
          description: "A dreamy fantasy scene with warm light appears.",
          tone: "linear-gradient(135deg, #fde68a, #fbcfe8)",
        },
      ],
    },
    understandingSteps: [
      "Switch between grayscale and RGB.",
      "Notice how pixels become numbers.",
      "Move the image code slider and see the change.",
    ],
    understandingCheckpoint: {
      prompt: "Why do color images use three numbers per pixel?",
      options: [
        {
          label: "They represent red, green, and blue brightness.",
          correct: true,
          explanation: "RGB values combine to form color.",
        },
        {
          label: "They represent three different cameras.",
          correct: false,
          explanation: "The numbers are color channels, not cameras.",
        },
        {
          label: "They show the price of the pixel.",
          correct: false,
          explanation: "Pixels represent brightness, not cost.",
        },
      ],
    },
    magicTitle: "2. The Magic of AI Artwork",
    magicEyebrow: "Faces, fantasy, styles",
    magicConceptTitle: "Concept Card",
    magicConceptLines: [
      "AI can generate faces that look real.",
      "It can combine ideas into imaginative scenes.",
      "Style transfer lets AI copy artistic styles.",
    ],
    magicParas: [
      "AI can generate faces so realistic that it is hard to tell which is real (Figure 3-4).",
      "It can combine objects into scenes that never happen in real life, like a panda skateboarding (Figure 3-5).",
      "AI can separate content and style, then apply a new style to the same content (Figure 3-6).",
    ],
    magicFigures: [
      {
        label: "Figure 3-4",
        caption: "Spot the real face among AI-generated ones.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 3-5",
        caption: "An AI-generated panda skateboarding.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 3-6",
        caption: "Mona Lisa with different AI styles.",
        placeholder: "Illustration placeholder",
      },
    ],
    faceDemo: {
      title: "Spot the Real Face",
      goal: "Choose which face is real.",
      answer: "B",
      options: [
        { key: "A", label: "Face A", detail: "Looks realistic, but could be AI." },
        { key: "B", label: "Face B", detail: "One of these is real." },
        { key: "C", label: "Face C", detail: "AI can mimic details well." },
      ],
    },
    fantasyDemo: {
      title: "Fantasy Builder",
      goal: "Combine ideas to make an imaginative scene.",
      subjects: ["Panda", "Robot", "Cat", "Dragon"],
      actions: ["skateboarding on a street", "painting a mural", "playing a piano", "flying above a city"],
    },
    styleDemo: {
      title: "Style Transfer",
      goal: "Apply a new style to the Mona Lisa.",
      styles: [
        {
          key: "oil",
          label: "Oil painting",
          outcome: "The Mona Lisa looks thick and textured with oil strokes.",
        },
        {
          key: "water",
          label: "Watercolor",
          outcome: "The Mona Lisa looks soft with flowing watercolor edges.",
        },
        {
          key: "comic",
          label: "Comic",
          outcome: "The Mona Lisa looks bold with stylized outlines.",
        },
      ],
    },
    magicSteps: [
      "Try the face guessing demo.",
      "Build a fantasy scene.",
      "Apply a new artistic style.",
    ],
    magicCheckpoint: {
      prompt: "What makes style transfer possible?",
      options: [
        {
          label: "AI can separate content from style and recombine them.",
          correct: true,
          explanation: "Content and style can be treated separately.",
        },
        {
          label: "AI only copies pixels without understanding.",
          correct: false,
          explanation: "Style transfer relies on learned patterns.",
        },
        {
          label: "AI ignores the original image.",
          correct: false,
          explanation: "The content is still used.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "AI and art",
    foodParas: [
      "People debate whether AI creations are real art. Some say AI can imitate masters and bring new inspiration.",
      "Others argue art is a human way to express feelings and thoughts, which AI cannot truly feel.",
      "Many artists now use AI as a tool and then choose results that match their audience.",
      "Is art something only humans can create? Discuss with your classmates.",
    ],
    foodDemo: {
      title: "Art Debate",
      goal: "Compare different viewpoints about AI art.",
      views: [
        {
          key: "yes",
          label: "AI art is art",
          outcome: "AI can imitate styles and inspire new ideas.",
        },
        {
          key: "no",
          label: "Only humans create art",
          outcome: "Art expresses human emotion that AI lacks.",
        },
      ],
    },
    foodSteps: ["Pick a viewpoint.", "Read the reasoning.", "Share your own opinion."],
    foodCheckpoint: {
      prompt: "What is a responsible way to use AI artist tools?",
      options: [
        {
          label: "Use AI as a tool and think about meaning and ethics.",
          correct: true,
          explanation: "Responsible use includes reflection and care.",
        },
        {
          label: "Copy others without thinking.",
          correct: false,
          explanation: "Art needs responsibility and respect.",
        },
        {
          label: "Never consider how AI art is used.",
          correct: false,
          explanation: "We should use AI wisely.",
        },
      ],
    },
    summaryTitle: "Summary",
    summaryEyebrow: "Key Takeaways",
    summaryPoints: [
      "Images become grids of numbers that AI can learn from.",
      "AI can generate faces, fantasy scenes, and style transfers.",
      "AI art raises new questions about creativity and responsibility.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解 AI 画家如何生成图像并进行风格迁移。",
      "理解 AI 识别与生成图像的基本原理。",
      "思考 AI 与艺术的关系，学会理性使用 AI 画家工具。",
    ],
    introTitle: "故事开头",
    introEyebrow: "课程导入",
    introText:
      "AI 可以生成逼真的图像、创造奇幻场景，并模仿名画风格（图 3-1）。",
    introFigure: {
      label: "图 3-1",
      caption: "AI 生成的图像示例。",
      placeholder: "插图占位",
    },
    understandingTitle: "1. 从理解图像开始",
    understandingEyebrow: "像素与规律",
    understandingConceptTitle: "概念卡片",
    understandingConceptLines: [
      "图像被转成像素数字网格。",
      "彩色像素由红、绿、蓝三通道组成。",
      "神经网络学习规律并生成图像编码。",
    ],
    understandingParas: [
      "相机把图像转换成数字信号。黑白图像是亮度数字网格，彩色图像则用红绿蓝三数字表示（图 3-2）。",
      "人能读懂图像含义，但计算机只看到数字。神经网络帮助它学会像素之间的规律。",
      "神经网络可以把一段代码变成图像，像 DNA 决定外貌一样（图 3-3）。",
    ],
    understandingFigures: [
      {
        label: "图 3-2",
        caption: "计算机看到的数字网格。",
        placeholder: "插图占位",
      },
      {
        label: "图 3-3",
        caption: "神经网络生成图像的过程。",
        placeholder: "插图占位",
      },
    ],
    pixelDemo: {
      title: "像素网格",
      goal: "切换灰度与 RGB 像素值。",
      grids: [
        {
          key: "gray",
          label: "灰度",
          cells: ["12", "34", "56", "78", "23", "45", "67", "89", "34", "56", "78", "90", "45", "67", "89", "100"],
          note: "每个数字代表一个像素的亮度。",
        },
        {
          key: "rgb",
          label: "RGB",
          cells: [
            "12,30,90",
            "34,80,60",
            "56,120,40",
            "78,140,80",
            "20,40,60",
            "60,90,120",
            "80,40,150",
            "90,110,30",
            "40,90,120",
            "70,100,150",
            "90,130,180",
            "20,60,90",
            "10,80,120",
            "60,90,20",
            "90,30,60",
            "100,120,140",
          ],
          note: "每个像素用红绿蓝三个数表示颜色。",
        },
      ],
    },
    codeDemo: {
      title: "图像编码滑块",
      goal: "调整编码观察图像变化。",
      presets: [
        {
          key: "code-1",
          label: "编码 1",
          description: "出现柔和的风景画面。",
          tone: "linear-gradient(135deg, #fef3c7, #bfdbfe)",
        },
        {
          key: "code-2",
          label: "编码 2",
          description: "出现对比强烈的肖像。",
          tone: "linear-gradient(135deg, #fee2e2, #a5b4fc)",
        },
        {
          key: "code-3",
          label: "编码 3",
          description: "出现温暖的奇幻场景。",
          tone: "linear-gradient(135deg, #fde68a, #fbcfe8)",
        },
      ],
    },
    understandingSteps: ["切换灰度与 RGB。", "观察像素数字表示方式。", "拖动编码滑块看变化。"],
    understandingCheckpoint: {
      prompt: "彩色像素为什么要用三个数表示？",
      options: [
        {
          label: "对应红、绿、蓝三种亮度。",
          correct: true,
          explanation: "RGB 组合形成颜色。",
        },
        {
          label: "代表三台相机。",
          correct: false,
          explanation: "它们是颜色通道。",
        },
        {
          label: "代表像素价格。",
          correct: false,
          explanation: "像素只表示亮度与颜色。",
        },
      ],
    },
    magicTitle: "2. AI 艺术的魔法",
    magicEyebrow: "人脸、奇想与风格",
    magicConceptTitle: "概念卡片",
    magicConceptLines: [
      "AI 能生成逼真的人脸。",
      "AI 可组合想象场景。",
      "风格迁移让画作换风格。",
    ],
    magicParas: [
      "AI 生成人脸与真人难分（图 3-4）。",
      "它能组合出真实不存在的场景，如熊猫滑板（图 3-5）。",
      "AI 能把图像内容与风格分开，再进行迁移（图 3-6）。",
    ],
    magicFigures: [
      {
        label: "图 3-4",
        caption: "猜哪张是真人脸。",
        placeholder: "插图占位",
      },
      {
        label: "图 3-5",
        caption: "熊猫滑板的 AI 图像。",
        placeholder: "插图占位",
      },
      {
        label: "图 3-6",
        caption: "不同风格的蒙娜丽莎。",
        placeholder: "插图占位",
      },
    ],
    faceDemo: {
      title: "找出真人脸",
      goal: "猜测哪张是真人脸。",
      answer: "B",
      options: [
        { key: "A", label: "人脸 A", detail: "看似真实，也可能是 AI。" },
        { key: "B", label: "人脸 B", detail: "只有一张是真的。" },
        { key: "C", label: "人脸 C", detail: "AI 可模仿细节。" },
      ],
    },
    fantasyDemo: {
      title: "奇幻组合",
      goal: "组合元素创造新场景。",
      subjects: ["熊猫", "机器人", "小猫", "飞龙"],
      actions: ["在街上滑板", "画壁画", "弹钢琴", "飞越城市"],
    },
    styleDemo: {
      title: "风格迁移",
      goal: "给蒙娜丽莎换风格。",
      styles: [
        {
          key: "oil",
          label: "油画风",
          outcome: "画面质感厚重，笔触明显。",
        },
        {
          key: "water",
          label: "水彩风",
          outcome: "色彩柔和，边缘轻盈。",
        },
        {
          key: "comic",
          label: "漫画风",
          outcome: "线条夸张，风格鲜明。",
        },
      ],
    },
    magicSteps: ["尝试猜测真人脸。", "生成奇幻组合。", "体验风格迁移。"],
    magicCheckpoint: {
      prompt: "风格迁移为何可行？",
      options: [
        {
          label: "AI 能分离内容与风格再组合。",
          correct: true,
          explanation: "内容和风格可以拆分处理。",
        },
        {
          label: "AI 只会复制像素。",
          correct: false,
          explanation: "风格迁移需要理解结构。",
        },
        {
          label: "AI 会忽略原图。",
          correct: false,
          explanation: "仍要保留原图内容。",
        },
      ],
    },
    foodTitle: "思考食粮",
    foodEyebrow: "AI 与艺术",
    foodParas: [
      "有人认为 AI 能模仿名家并带来新灵感，因此 AI 作品也是艺术。",
      "也有人认为艺术是人类情感表达，AI 缺少情感。",
      "许多艺术家已把 AI 当作工具，筛选出最合适的作品。",
      "艺术是否只能由人类创作？请与同学讨论。",
    ],
    foodDemo: {
      title: "艺术观点对比",
      goal: "比较关于 AI 艺术的不同观点。",
      views: [
        {
          key: "yes",
          label: "AI 作品也是艺术",
          outcome: "AI 能模仿风格并带来新灵感。",
        },
        {
          key: "no",
          label: "艺术只属于人类",
          outcome: "艺术需要人类情感表达。",
        },
      ],
    },
    foodSteps: ["选择一个观点。", "阅读理由。", "说出你的看法。"],
    foodCheckpoint: {
      prompt: "理性使用 AI 画家工具的方式是什么？",
      options: [
        {
          label: "把 AI 当工具，同时思考意义与责任。",
          correct: true,
          explanation: "需要谨慎与思考。",
        },
        {
          label: "不加思考地复制他人作品。",
          correct: false,
          explanation: "艺术应尊重与负责。",
        },
        {
          label: "从不考虑作品用途。",
          correct: false,
          explanation: "应该理性使用。",
        },
      ],
    },
    summaryTitle: "小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "图像是像素数字网格，AI 学习其中规律。",
      "AI 可生成真实人脸、奇幻场景与风格迁移。",
      "AI 艺术引发新的创作思考与责任。",
    ],
  },
};
