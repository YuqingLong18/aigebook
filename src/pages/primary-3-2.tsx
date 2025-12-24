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

export function PrimaryLesson3_2({ lang }: LessonProps) {
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
    { id: "dice", label: t.diceTitle },
    { id: "birth", label: t.birthTitle },
    { id: "modern", label: t.modernTitle },
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

        <SectionBlock id="dice" title={t.diceTitle} eyebrow={t.diceEyebrow}>
          <InfoCard title={t.diceConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.diceConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.diceParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.diceFigure.label}
            caption={t.diceFigure.caption}
            placeholder={t.diceFigure.placeholder}
          />
          <DiceComposerDemo
            lang={lang}
            title={t.diceDemo.title}
            goal={t.diceDemo.goal}
            resetLabel={ui.reset}
            rollLabel={t.diceDemo.rollLabel}
            maxBars={t.diceDemo.maxBars}
            bars={t.diceDemo.bars}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.diceSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.diceCheckpoint.prompt}
            options={t.diceCheckpoint.options}
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
          <div className="grid gap-3 md:grid-cols-2">
            {t.birthFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <IlliacTimelineDemo
            lang={lang}
            title={t.birthDemo.title}
            goal={t.birthDemo.goal}
            resetLabel={ui.reset}
            events={t.birthDemo.events}
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

        <SectionBlock id="modern" title={t.modernTitle} eyebrow={t.modernEyebrow}>
          <InfoCard title={t.modernConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.modernConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.modernParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <MusicPatternDemo
            lang={lang}
            title={t.modernDemo.title}
            goal={t.modernDemo.goal}
            resetLabel={ui.reset}
            levels={t.modernDemo.levels}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.modernSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.modernCheckpoint.prompt}
            options={t.modernCheckpoint.options}
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
          <ComposerBalanceDemo
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

        <SectionBlock id="history" title={t.historyTitle} eyebrow={t.historyEyebrow}>
          <InfoCard title={t.historyCardTitle}>
            <ul className="space-y-2 text-sm text-slate-700">
              {t.historyLines.map((line) => (
                <li key={line}>{line}</li>
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

type DiceBar = {
  key: string;
  label: string;
  notes: string[];
};

function DiceComposerDemo({
  lang,
  title,
  goal,
  resetLabel,
  rollLabel,
  maxBars,
  bars,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  rollLabel: string;
  maxBars: number;
  bars: DiceBar[];
}) {
  const isZh = lang === "zh";
  const [sequence, setSequence] = useState<number[]>([]);

  const roll = () => {
    const nextIndex = Math.floor(Math.random() * bars.length);
    setSequence((prev) => {
      const next = [...prev, nextIndex];
      return next.length > maxBars ? next.slice(-maxBars) : next;
    });
  };

  const reset = () => setSequence([]);
  const sequenceBars = sequence.map((index) => bars[index]).filter(Boolean);

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

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={roll}
          className="rounded-full bg-brand-600 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-brand-700"
        >
          {rollLabel}
        </button>
        <span className="text-xs text-slate-500">
          {isZh ? `最多 ${maxBars} 小节` : `Up to ${maxBars} bars`}
        </span>
      </div>

      <div className="mt-3 rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3">
        {sequenceBars.length === 0 ? (
          <p className="text-sm text-slate-500">{isZh ? "还没有小节" : "No bars yet"}</p>
        ) : (
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {isZh ? "当前旋律" : "Current melody"}
            </p>
            <div className="flex flex-wrap gap-2">
              {sequenceBars.map((bar, index) => (
                <span
                  key={`${bar.key}-${index}`}
                  className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700"
                >
                  {bar.label}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-600">
              {sequenceBars.map((bar) => bar.notes.join(" - ")).join(" | ")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

type TimelineEvent = {
  key: string;
  label: string;
  year: string;
  detail: string;
};

function IlliacTimelineDemo({
  lang,
  title,
  goal,
  resetLabel,
  events,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  events: TimelineEvent[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(events[0]?.key ?? "");
  const current = events.find((event) => event.key === active) ?? events[0];

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
          onClick={() => setActive(events[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {events.map((event) => (
          <button
            key={event.key}
            type="button"
            onClick={() => setActive(event.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              event.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {event.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{current.year}</p>
          <p className="mt-1 text-sm text-slate-700">{current.detail}</p>
        </div>
      )}
    </div>
  );
}

type PatternLevel = {
  key: string;
  label: string;
  detail: string;
  melody: string;
};

function MusicPatternDemo({
  lang,
  title,
  goal,
  resetLabel,
  levels,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  levels: PatternLevel[];
}) {
  const isZh = lang === "zh";
  const [index, setIndex] = useState(0);
  const current = levels[index] ?? levels[0];

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

      <div className="mt-3">
        <input
          type="range"
          min={0}
          max={levels.length - 1}
          value={index}
          onChange={(event) => setIndex(Number(event.target.value))}
          className="w-full accent-brand-600"
          aria-label={isZh ? "数据量" : "Data size"}
        />
        <div className="mt-1 flex justify-between text-xs text-slate-500">
          {levels.map((level) => (
            <span key={level.key}>{level.label}</span>
          ))}
        </div>
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "旋律印象" : "Melody"}
          </p>
          <p className="mt-1 text-sm text-slate-700">{current.detail}</p>
          <p className="mt-2 text-xs text-slate-500">{current.melody}</p>
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

function ComposerBalanceDemo({
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

      <div className="mt-3 flex flex-wrap gap-2">
        {views.map((view) => (
          <button
            key={view.key}
            type="button"
            onClick={() => setActive(view.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
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
      "Understand the origins and the \"magic\" of AI music composition.",
      "Reflect on the relationship between AI and art and use AI composition tools rationally.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "Imagine you are a composer staring at a blank sheet of music with no inspiration. Throughout history, people have searched for tricks to spark ideas. With artificial intelligence, computers can now help generate music in new ways.",
    diceTitle: "1. Composers Who Rolled Dice",
    diceEyebrow: "Musical dice games",
    diceConceptTitle: "Concept Card",
    diceConceptLines: [
      "Dice games used random rolls to select music bars.",
      "Kirnberger and Mozart both used dice-based methods.",
      "Randomness offered a shortcut when composing felt difficult.",
    ],
    diceParas: [
      "Long ago, composers invented the musical dice game (Figure 3-7). They rolled dice and wrote down the bars that matched the roll, then stitched those bars into a piece.",
      "Johann Philipp Kirnberger, a student of Bach, is the first known composer to use dice this way. Later, Mozart designed a game where 16 bars were selected from 176 short waltz segments.",
      "Why was this popular? Creating music is hard. Random choices gave composers fresh patterns to work with.",
    ],
    diceFigure: {
      label: "Figure 3-7",
      caption: "Rolling dice to compose music.",
      placeholder: "Illustration placeholder",
    },
    diceDemo: {
      title: "Dice Melody Builder",
      goal: "Roll dice to build a short melody, just like an early music game.",
      rollLabel: "Roll the dice",
      maxBars: 4,
      bars: [
        { key: "bar-1", label: "Bar A", notes: ["do", "re", "mi"] },
        { key: "bar-2", label: "Bar B", notes: ["mi", "fa", "so"] },
        { key: "bar-3", label: "Bar C", notes: ["so", "la", "ti"] },
        { key: "bar-4", label: "Bar D", notes: ["ti", "do", "re"] },
        { key: "bar-5", label: "Bar E", notes: ["re", "mi", "fa"] },
        { key: "bar-6", label: "Bar F", notes: ["fa", "so", "la"] },
      ],
    },
    diceSteps: [
      "Press the dice button to add a bar.",
      "Read the bar labels and note patterns.",
      "Explain how randomness can spark new ideas.",
    ],
    diceCheckpoint: {
      prompt: "What is the main idea of a musical dice game?",
      options: [
        {
          label: "Use dice to randomly pick bars or notes for a new piece.",
          correct: true,
          explanation: "Dice rolls select short segments that are combined into music.",
        },
        {
          label: "Memorize a song and repeat it exactly.",
          correct: false,
          explanation: "The dice game focuses on randomness, not memorization.",
        },
        {
          label: "Only use one note so the music is simple.",
          correct: false,
          explanation: "Dice games still use multiple notes and bars.",
        },
      ],
    },
    birthTitle: "2. The Birth of AI Music",
    birthEyebrow: "Computers enter composition",
    birthConceptTitle: "Concept Card",
    birthConceptLines: [
      "The Dartmouth Conference in 1956 marked the birth of AI.",
      "Hiller and Isaacson used the ILLIAC I computer to compose The Illiac Suite.",
      "They showed computers could follow musical rules.",
    ],
    birthParas: [
      "In 1956, the Dartmouth Conference officially launched the field of artificial intelligence. Around the same time, Lejaren Hiller and Leonard Isaacson used the ILLIAC I computer to create The Illiac Suite (Figure 3-8).",
      "Hiller was trained in music but worked as a chemist. Access to the computer inspired him to test musical rules with code. The result was the first AI-composed string quartet, created in 1957 (Figure 3-9).",
    ],
    birthFigures: [
      { label: "Figure 3-8", caption: "The Illiac Suite.", placeholder: "Illustration placeholder" },
      {
        label: "Figure 3-9",
        caption: "Lejaren Hiller and Leonard Isaacson composing music with a computer.",
        placeholder: "Illustration placeholder",
      },
    ],
    birthDemo: {
      title: "AI Music Timeline",
      goal: "Track the early steps that led to AI composition.",
      events: [
        {
          key: "dartmouth",
          label: "Dartmouth",
          year: "1956",
          detail: "The Dartmouth Conference named the field of artificial intelligence.",
        },
        {
          key: "illiac",
          label: "ILLIAC I",
          year: "1957",
          detail: "Hiller and Isaacson composed The Illiac Suite on a computer.",
        },
        {
          key: "string",
          label: "String quartet",
          year: "1957",
          detail: "The Illiac Suite became the first AI-generated string quartet.",
        },
      ],
    },
    birthSteps: [
      "Select a timeline moment.",
      "Explain why computers were exciting for composers.",
      "Connect the timeline to The Illiac Suite.",
    ],
    birthCheckpoint: {
      prompt: "What was special about The Illiac Suite?",
      options: [
        {
          label: "It was the first AI-generated string quartet created on a computer.",
          correct: true,
          explanation: "Hiller and Isaacson composed it using ILLIAC I in 1957.",
        },
        {
          label: "It was a song copied from Mozart without changes.",
          correct: false,
          explanation: "It was newly generated using computer rules.",
        },
        {
          label: "It used no musical rules at all.",
          correct: false,
          explanation: "The piece was created by following musical rules in code.",
        },
      ],
    },
    modernTitle: "3. Modern AI Composition",
    modernEyebrow: "Learning from big data",
    modernConceptTitle: "Concept Card",
    modernConceptLines: [
      "AI studies large amounts of music to learn patterns.",
      "Deep neural networks can generate smooth, natural-sounding songs.",
      "AI can also add surprising twists and inspire humans.",
    ],
    modernParas: [
      "As AI grew stronger, computers learned from massive music datasets. They track how melodies rise and fall, how rhythms repeat, and how voices blend together.",
      "Modern tools such as Suno can generate complete songs. AI can also try unexpected combinations, offering composers fresh ideas.",
    ],
    modernDemo: {
      title: "Pattern Learning Meter",
      goal: "See how more data can make AI compositions smoother.",
      levels: [
        {
          key: "few",
          label: "Little data",
          detail: "The melody feels choppy and the pattern breaks easily.",
          melody: "do - mi - do | ti - do",
        },
        {
          key: "some",
          label: "More data",
          detail: "The melody flows better and repeats in a gentle rhythm.",
          melody: "do - re - mi | mi - re - do",
        },
        {
          key: "lots",
          label: "Lots of data",
          detail: "The melody feels smooth and balanced with clear structure.",
          melody: "do - re - mi - fa | so - fa - mi - re",
        },
      ],
    },
    modernSteps: [
      "Drag the slider from little to lots of data.",
      "Read how the melody description changes.",
      "Explain why more data helps AI compose.",
    ],
    modernCheckpoint: {
      prompt: "How does AI learn to compose music today?",
      options: [
        {
          label: "By learning patterns from large amounts of music data.",
          correct: true,
          explanation: "AI studies melodies, rhythms, and structure across many songs.",
        },
        {
          label: "By guessing without any music to learn from.",
          correct: false,
          explanation: "Modern AI relies on big datasets for training.",
        },
        {
          label: "By copying one song forever.",
          correct: false,
          explanation: "AI learns broader patterns, not just a single song.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "AI and art",
    foodParas: [
      "AI composition has sparked debate. Some people think AI music sounds fresh and opens new creative doors. Others say human music has emotional depth that AI still lacks.",
      "Even so, AI can be a helpful partner. We should keep an open mind, learn the tool, and use it wisely.",
    ],
    foodDemo: {
      title: "Balance the View",
      goal: "Compare different attitudes toward AI composition.",
      views: [
        {
          key: "inspire",
          label: "AI inspires",
          outcome: "AI can spark new ideas and help finish a song.",
        },
        {
          key: "emotion",
          label: "AI lacks emotion",
          outcome: "Some listeners feel human emotion is still irreplaceable.",
        },
        {
          key: "tool",
          label: "Use as tool",
          outcome: "A balanced view treats AI as a creative assistant.",
        },
      ],
    },
    foodSteps: [
      "Choose a viewpoint.",
      "Explain one advantage and one concern.",
      "Share how you would use AI responsibly.",
    ],
    foodCheckpoint: {
      prompt: "Which attitude best matches the lesson?",
      options: [
        {
          label: "Use AI as a helpful tool while keeping an open mind.",
          correct: true,
          explanation: "The lesson encourages curiosity and responsible use.",
        },
        {
          label: "Reject all AI music without listening.",
          correct: false,
          explanation: "The lesson suggests staying open to new tools.",
        },
        {
          label: "Let AI replace all human composers.",
          correct: false,
          explanation: "AI is seen as a partner, not a full replacement.",
        },
      ],
    },
    historyTitle: "History Corner",
    historyEyebrow: "Why music rules matter",
    historyCardTitle: "Music follows rules",
    historyLines: [
      "Rhythmic rules: how long each note lasts and the spacing between notes.",
      "Melodic rules: how pitches and timing form recognizable tunes.",
      "Harmonic rules: how multiple notes sound together as harmony or tension.",
      "Tonal rules: how melody and harmony relate to create moods.",
      "Structural rules: how a piece is organized into sections.",
    ],
    summaryTitle: "Key Takeaways",
    summaryEyebrow: "Lesson summary",
    summaryPoints: [
      "Composers once used dice games to generate music patterns.",
      "Hiller and Isaacson created the first AI-composed string quartet with ILLIAC I.",
      "Modern AI learns from large datasets to create smoother music.",
      "AI can inspire humans, but it still raises questions about emotion and artistry.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解 AI 作曲的起源与“魔力”。",
      "思考 AI 与艺术的关系，学会理性使用 AI 作曲工具。",
    ],
    introTitle: "故事开头",
    introEyebrow: "课程导入",
    introText:
      "想象你是一名作曲家，面对空白的五线谱却没有灵感。历史上，人们一直在寻找激发灵感的方法。随着 AI 的到来，计算机也能参与音乐创作。",
    diceTitle: "1. 掷骰子的作曲家",
    diceEyebrow: "音乐骰子游戏",
    diceConceptTitle: "概念卡片",
    diceConceptLines: [
      "骰子游戏用随机点数选择乐句或小节。",
      "基恩伯格和莫扎特都用过骰子作曲法。",
      "随机性帮助作曲家打破灵感瓶颈。",
    ],
    diceParas: [
      "很久以前，作曲家发明了“音乐骰子游戏”（图 3-7）。他们掷骰子，根据点数选择小节，再把这些小节拼成一首曲子。",
      "巴赫的学生基恩伯格是最早用骰子作曲的人之一。后来莫扎特也设计了骰子游戏，用 176 段华尔兹片段随机组合成 16 小节的曲子。",
      "为什么大家喜欢这种方法？因为作曲很难，随机选择能带来新的灵感。",
    ],
    diceFigure: {
      label: "图 3-7",
      caption: "掷骰子作曲。",
      placeholder: "插图占位",
    },
    diceDemo: {
      title: "骰子旋律生成器",
      goal: "掷骰子组合小节，体验早期作曲游戏。",
      rollLabel: "掷骰子",
      maxBars: 4,
      bars: [
        { key: "bar-1", label: "小节 A", notes: ["do", "re", "mi"] },
        { key: "bar-2", label: "小节 B", notes: ["mi", "fa", "so"] },
        { key: "bar-3", label: "小节 C", notes: ["so", "la", "ti"] },
        { key: "bar-4", label: "小节 D", notes: ["ti", "do", "re"] },
        { key: "bar-5", label: "小节 E", notes: ["re", "mi", "fa"] },
        { key: "bar-6", label: "小节 F", notes: ["fa", "so", "la"] },
      ],
    },
    diceSteps: ["点击掷骰子按钮添加小节。", "观察小节标签与音符组合。", "说说随机选择如何带来灵感。"],
    diceCheckpoint: {
      prompt: "音乐骰子游戏的核心做法是什么？",
      options: [
        {
          label: "用骰子随机挑选小节或音符组合成新曲子。",
          correct: true,
          explanation: "骰子点数决定要选用的乐段。",
        },
        {
          label: "把一首歌背下来并原样重复。",
          correct: false,
          explanation: "骰子游戏强调随机选择，不是背诵。",
        },
        {
          label: "只用一个音符来作曲。",
          correct: false,
          explanation: "骰子游戏仍然使用多个音符和小节。",
        },
      ],
    },
    birthTitle: "2. AI 作曲的诞生",
    birthEyebrow: "计算机加入创作",
    birthConceptTitle: "概念卡片",
    birthConceptLines: [
      "1956 年达特茅斯会议宣告 AI 诞生。",
      "希勒和艾萨克森用 ILLIAC I 写出 The Illiac Suite。",
      "他们证明计算机可以遵循音乐规则。",
    ],
    birthParas: [
      "1956 年达特茅斯会议正式提出人工智能。差不多在同一时期，莱杰伦·希勒和伦纳德·艾萨克森用 ILLIAC I 计算机创作了《The Illiac Suite》（图 3-8）。",
      "希勒原本是一名化学家，也受过音乐训练。他尝试用计算机测试音乐规则，最终在 1957 年完成了第一首 AI 作曲的弦乐四重奏（图 3-9）。",
    ],
    birthFigures: [
      { label: "图 3-8", caption: "《The Illiac Suite》。", placeholder: "插图占位" },
      { label: "图 3-9", caption: "希勒与艾萨克森用计算机作曲。", placeholder: "插图占位" },
    ],
    birthDemo: {
      title: "AI 作曲时间线",
      goal: "了解 AI 作曲诞生的关键节点。",
      events: [
        {
          key: "dartmouth",
          label: "达特茅斯",
          year: "1956 年",
          detail: "达特茅斯会议让“人工智能”成为学科。",
        },
        {
          key: "illiac",
          label: "ILLIAC I",
          year: "1957 年",
          detail: "希勒与艾萨克森用计算机创作《The Illiac Suite》。",
        },
        {
          key: "string",
          label: "弦乐四重奏",
          year: "1957 年",
          detail: "《The Illiac Suite》成为第一首 AI 生成的弦乐四重奏。",
        },
      ],
    },
    birthSteps: ["选择一个时间点。", "解释计算机为何吸引作曲家。", "把时间线和《The Illiac Suite》联系起来。"],
    birthCheckpoint: {
      prompt: "《The Illiac Suite》特别之处是什么？",
      options: [
        {
          label: "它是第一首由计算机生成的弦乐四重奏。",
          correct: true,
          explanation: "希勒与艾萨克森在 1957 年用 ILLIAC I 创作了它。",
        },
        {
          label: "它只是原样复制了莫扎特的作品。",
          correct: false,
          explanation: "它是用计算机规则生成的新作品。",
        },
        {
          label: "它完全不使用音乐规则。",
          correct: false,
          explanation: "它依然遵循音乐规则来创作。",
        },
      ],
    },
    modernTitle: "3. 现代 AI 作曲",
    modernEyebrow: "从大数据学习",
    modernConceptTitle: "概念卡片",
    modernConceptLines: [
      "AI 从大量音乐数据中学习规律。",
      "深度神经网络可以生成更自然的旋律。",
      "AI 还能带来意想不到的灵感。",
    ],
    modernParas: [
      "随着 AI 发展，计算机会分析海量音乐数据，学习旋律起伏、节奏变化和声部配合。",
      "如今像 Suno 这样的工具可以生成完整歌曲。AI 还会尝试新的组合，给作曲家灵感。",
    ],
    modernDemo: {
      title: "规律学习指示器",
      goal: "观察数据量如何影响 AI 作曲的流畅度。",
      levels: [
        {
          key: "few",
          label: "数据少",
          detail: "旋律断断续续，规律不稳定。",
          melody: "do - mi - do | ti - do",
        },
        {
          key: "some",
          label: "数据多",
          detail: "旋律更顺畅，节奏开始重复。",
          melody: "do - re - mi | mi - re - do",
        },
        {
          key: "lots",
          label: "数据充足",
          detail: "旋律更完整，结构清晰。",
          melody: "do - re - mi - fa | so - fa - mi - re",
        },
      ],
    },
    modernSteps: ["拖动滑块查看不同数据量。", "读一读旋律描述的变化。", "说明为什么数据越多越好学。"],
    modernCheckpoint: {
      prompt: "现代 AI 是如何学会作曲的？",
      options: [
        {
          label: "从大量音乐数据中学习规律。",
          correct: true,
          explanation: "AI 通过数据学习旋律和节奏。",
        },
        {
          label: "完全不需要学习就能作曲。",
          correct: false,
          explanation: "现代 AI 依赖大量数据训练。",
        },
        {
          label: "只会复制一首歌。",
          correct: false,
          explanation: "AI 学习的是更广泛的音乐规律。",
        },
      ],
    },
    foodTitle: "想一想",
    foodEyebrow: "AI 与艺术",
    foodParas: [
      "AI 作曲引发争论。有的人觉得 AI 作品新鲜又有创意，能打开新的大门；也有人认为人类音乐更有情感深度。",
      "无论如何，AI 仍是一个工具。我们要保持开放心态，学会合理使用它。",
    ],
    foodDemo: {
      title: "观点小平衡",
      goal: "比较不同的 AI 作曲观点。",
      views: [
        {
          key: "inspire",
          label: "灵感助手",
          outcome: "AI 可以提供灵感并帮助补全作品。",
        },
        {
          key: "emotion",
          label: "情感不足",
          outcome: "有人认为人类情感仍不可替代。",
        },
        {
          key: "tool",
          label: "理性使用",
          outcome: "把 AI 当作创作伙伴更稳妥。",
        },
      ],
    },
    foodSteps: ["选择一个观点。", "说出一个优点和一个担忧。", "分享你会如何使用 AI。"],
    foodCheckpoint: {
      prompt: "本课鼓励的态度是什么？",
      options: [
        {
          label: "把 AI 当作工具，保持开放与理性。",
          correct: true,
          explanation: "课程强调开放心态与理性使用。",
        },
        {
          label: "完全拒绝 AI 音乐。",
          correct: false,
          explanation: "课程并不鼓励全盘否定。",
        },
        {
          label: "让 AI 取代所有作曲家。",
          correct: false,
          explanation: "AI 被视为伙伴而非替代。",
        },
      ],
    },
    historyTitle: "历史角",
    historyEyebrow: "音乐规则",
    historyCardTitle: "音乐创作有规则",
    historyLines: [
      "节奏规则：规定音符时值和间隔。",
      "旋律规则：规定音高与节奏的组合。",
      "和声规则：多音叠加时形成和谐或紧张。",
      "调式规则：旋律与和声的音高关系与情绪色彩。",
      "结构规则：作品整体的段落与框架安排。",
    ],
    summaryTitle: "关键要点",
    summaryEyebrow: "课程小结",
    summaryPoints: [
      "音乐骰子游戏用随机方式组合小节。",
      "《The Illiac Suite》是第一首 AI 生成的弦乐四重奏。",
      "现代 AI 从海量数据中学习，旋律更自然。",
      "AI 能激发灵感，但仍需要理性使用。",
    ],
  },
};
