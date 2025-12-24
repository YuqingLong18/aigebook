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

export function PrimaryLesson3_4({ lang }: LessonProps) {
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
    { id: "go", label: t.goTitle },
    { id: "birth", label: t.birthTitle },
    { id: "match", label: t.matchTitle },
    { id: "retire", label: t.retireTitle },
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

        <SectionBlock id="go" title={t.goTitle} eyebrow={t.goEyebrow}>
          <InfoCard title={t.goConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.goConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.goParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <TerritoryBalanceDemo
            lang={lang}
            title={t.goDemo.title}
            goal={t.goDemo.goal}
            resetLabel={ui.reset}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.goSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.goCheckpoint.prompt}
            options={t.goCheckpoint.options}
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
          <AlphaGoTimelineDemo
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

        <SectionBlock id="match" title={t.matchTitle} eyebrow={t.matchEyebrow}>
          <InfoCard title={t.matchConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.matchConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.matchParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.matchFigure.label}
            caption={t.matchFigure.caption}
            placeholder={t.matchFigure.placeholder}
          />
          <MatchScoreDemo
            lang={lang}
            title={t.matchDemo.title}
            goal={t.matchDemo.goal}
            resetLabel={ui.reset}
            games={t.matchDemo.games}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.matchSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.matchCheckpoint.prompt}
            options={t.matchCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="retire" title={t.retireTitle} eyebrow={t.retireEyebrow}>
          <InfoCard title={t.retireConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.retireConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.retireParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.retireFigure.label}
            caption={t.retireFigure.caption}
            placeholder={t.retireFigure.placeholder}
          />
          <SelfPlayDemo
            lang={lang}
            title={t.retireDemo.title}
            goal={t.retireDemo.goal}
            resetLabel={ui.reset}
            modes={t.retireDemo.modes}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.retireSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.retireCheckpoint.prompt}
            options={t.retireCheckpoint.options}
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
          <MindsetDemo
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

        <SectionBlock id="history" title={t.historyTitle} eyebrow={t.historyEyebrow}>
          <InfoCard title={t.historyCardTitle}>
            {t.historyParas.map((para) => (
              <p key={para} className="text-sm text-slate-700">
                {para}
              </p>
            ))}
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

function TerritoryBalanceDemo({
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
  const [blackRatio, setBlackRatio] = useState(50);

  const reset = () => setBlackRatio(50);
  const whiteRatio = 100 - blackRatio;
  const leader =
    blackRatio === whiteRatio
      ? isZh
        ? "势均力敌"
        : "Tied"
      : blackRatio > whiteRatio
        ? isZh
          ? "黑棋领先"
          : "Black leads"
        : isZh
          ? "白棋领先"
          : "White leads";

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

      <div className="mt-3">
        <input
          type="range"
          min={0}
          max={100}
          value={blackRatio}
          onChange={(event) => setBlackRatio(Number(event.target.value))}
          className="w-full accent-brand-600"
          aria-label={isZh ? "黑棋占地比例" : "Black territory ratio"}
        />
        <div className="mt-1 flex justify-between text-xs text-slate-500">
          <span>{isZh ? "黑棋" : "Black"}</span>
          <span>{isZh ? "白棋" : "White"}</span>
        </div>
      </div>

      <div className="mt-3 grid gap-2 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          {isZh ? `黑棋领地：${blackRatio}%` : `Black territory: ${blackRatio}%`}
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          {isZh ? `白棋领地：${whiteRatio}%` : `White territory: ${whiteRatio}%`}
        </div>
      </div>
      <p className="mt-2 text-sm font-semibold text-slate-700">{leader}</p>
    </div>
  );
}

type TimelineEvent = {
  key: string;
  label: string;
  year: string;
  detail: string;
};

function AlphaGoTimelineDemo({
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

type MatchGame = {
  key: string;
  label: string;
  winner: string;
  detail: string;
};

function MatchScoreDemo({
  lang,
  title,
  goal,
  resetLabel,
  games,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  games: MatchGame[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(games[0]?.key ?? "");
  const current = games.find((game) => game.key === active) ?? games[0];

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
          onClick={() => setActive(games[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {games.map((game) => (
          <button
            key={game.key}
            type="button"
            onClick={() => setActive(game.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              game.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {game.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-sm font-semibold text-slate-700">{current.winner}</p>
          <p className="mt-1 text-sm text-slate-600">{current.detail}</p>
        </div>
      )}
    </div>
  );
}

type SelfPlayMode = {
  key: string;
  label: string;
  detail: string;
};

function SelfPlayDemo({
  lang,
  title,
  goal,
  resetLabel,
  modes,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  modes: SelfPlayMode[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(modes[0]?.key ?? "");
  const current = modes.find((mode) => mode.key === active) ?? modes[0];

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
          onClick={() => setActive(modes[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {modes.map((mode) => (
          <button
            key={mode.key}
            type="button"
            onClick={() => setActive(mode.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              mode.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {mode.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          {current.detail}
        </div>
      )}
    </div>
  );
}

type MindsetChoice = {
  key: string;
  label: string;
  outcome: string;
};

function MindsetDemo({
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
  choices: MindsetChoice[];
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
      "Understand the birth and development of AlphaGo and its two key matches.",
      "Appreciate the impact of technological progress and the scientific spirit behind it.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "AlphaGo changed the world's view of artificial intelligence. Let's learn how it grew from early experiments to defeating top Go players.",
    goTitle: "1. Go: A Battle of Wits",
    goEyebrow: "The game of Go",
    goConceptTitle: "Concept Card",
    goConceptLines: [
      "Go is a 19x19 board game with simple rules and deep strategy.",
      "Players place black and white stones to claim territory.",
      "Because of its complexity, Go is a major AI challenge.",
    ],
    goParas: [
      "Go originated in China. The board has 19 rows and 19 columns. Players surround territory with stones, and the one with more territory wins.",
      "The rules are simple, but the number of possible games is enormous. That is why Go is seen as a test of intelligence and strategy.",
    ],
    goDemo: {
      title: "Territory Balance",
      goal: "Adjust territory share to see who is leading.",
    },
    goSteps: [
      "Drag the slider to change black territory.",
      "Observe the black vs. white balance.",
      "Explain why territory matters in Go.",
    ],
    goCheckpoint: {
      prompt: "Why is Go considered a tough challenge for AI?",
      options: [
        {
          label: "The game has a huge number of possible positions and strategies.",
          correct: true,
          explanation: "Go's complexity makes it hard for computers to search all moves.",
        },
        {
          label: "Because the rules are secret and unknown.",
          correct: false,
          explanation: "Go has simple, well-known rules.",
        },
        {
          label: "Because it is played on a 3x3 board.",
          correct: false,
          explanation: "Go is played on a 19x19 board.",
        },
      ],
    },
    birthTitle: "2. The Birth of AlphaGo",
    birthEyebrow: "From Deep Blue to Go",
    birthConceptTitle: "Concept Card",
    birthConceptLines: [
      "AI researchers long wanted to beat top human players in board games.",
      "AlphaGo started in 2014 and improved quickly.",
      "In 2015 it beat European champion Fan Hui 5-0.",
    ],
    birthParas: [
      "In 1997, IBM's Deep Blue defeated chess champion Garry Kasparov. This inspired more AI game research.",
      "Go is much harder than chess. Before AlphaGo, Go programs were only at amateur levels. AlphaGo began in 2014 and soon reached professional strength.",
      "In October 2015, AlphaGo defeated Fan Hui 5-0, becoming the first AI to beat a pro on a full-size board.",
    ],
    birthDemo: {
      title: "AlphaGo Timeline",
      goal: "Follow the milestones that led to AlphaGo's breakthrough.",
      events: [
        {
          key: "deep-blue",
          label: "Deep Blue",
          year: "1997",
          detail: "Deep Blue defeated chess champion Garry Kasparov.",
        },
        {
          key: "project",
          label: "Project start",
          year: "2014",
          detail: "The AlphaGo project began at DeepMind.",
        },
        {
          key: "fan-hui",
          label: "Fan Hui",
          year: "2015",
          detail: "AlphaGo beat European champion Fan Hui 5-0.",
        },
      ],
    },
    birthSteps: [
      "Pick a timeline event.",
      "Explain why Go was harder than chess.",
      "Describe why the Fan Hui match mattered.",
    ],
    birthCheckpoint: {
      prompt: "What made the 2015 Fan Hui match historic?",
      options: [
        {
          label: "It was the first time an AI beat a professional Go player on a full board.",
          correct: true,
          explanation: "AlphaGo won 5-0 on a 19x19 board.",
        },
        {
          label: "It was the first time a human beat AlphaGo.",
          correct: false,
          explanation: "AlphaGo was the winner of the match.",
        },
        {
          label: "It proved Go was easier than chess.",
          correct: false,
          explanation: "Go remained extremely complex.",
        },
      ],
    },
    matchTitle: "3. The Match of the Century",
    matchEyebrow: "AlphaGo vs. Lee Sedol",
    matchConceptTitle: "Concept Card",
    matchConceptLines: [
      "The 2016 match against Lee Sedol drew worldwide attention.",
      "AlphaGo won 4-1, with Lee's victory in Game 4.",
      "The match changed how people viewed AI's potential.",
    ],
    matchParas: [
      "In March 2016, AlphaGo faced Korean champion Lee Sedol (9-dan). Many people believed the human would win.",
      "AlphaGo won the first three games. Lee Sedol's brilliant move in Game 4 forced AlphaGo to resign, the last human win against it.",
      "AlphaGo won Game 5 and secured a 4-1 victory in the historic match.",
    ],
    matchFigure: {
      label: "Figure 3-10",
      caption: "AlphaGo challenges Korean player Lee Sedol, 9-dan.",
      placeholder: "Illustration placeholder",
    },
    matchDemo: {
      title: "Match Scoreboard",
      goal: "Review each game result from the 2016 match.",
      games: [
        {
          key: "game1",
          label: "Game 1",
          winner: "AlphaGo won",
          detail: "AlphaGo surprised everyone by winning the first game.",
        },
        {
          key: "game2",
          label: "Game 2",
          winner: "AlphaGo won",
          detail: "Another victory showed the AI was very strong.",
        },
        {
          key: "game3",
          label: "Game 3",
          winner: "AlphaGo won",
          detail: "The third win secured the overall victory.",
        },
        {
          key: "game4",
          label: "Game 4",
          winner: "Lee Sedol won",
          detail: "Lee's move 78 forced AlphaGo to resign.",
        },
        {
          key: "game5",
          label: "Game 5",
          winner: "AlphaGo won",
          detail: "AlphaGo finished the match with a final win.",
        },
      ],
    },
    matchSteps: [
      "Select a game from the scoreboard.",
      "Describe the key moment in that game.",
      "Explain why Game 4 was special.",
    ],
    matchCheckpoint: {
      prompt: "Who won the 2016 match overall?",
      options: [
        {
          label: "AlphaGo won 4-1 against Lee Sedol.",
          correct: true,
          explanation: "AlphaGo won Games 1, 2, 3, and 5.",
        },
        {
          label: "Lee Sedol won 4-1.",
          correct: false,
          explanation: "Lee won only Game 4.",
        },
        {
          label: "The match ended in a tie.",
          correct: false,
          explanation: "AlphaGo won four games.",
        },
      ],
    },
    retireTitle: "4. Retirement from the Arena",
    retireEyebrow: "AlphaGo Zero",
    retireConceptTitle: "Concept Card",
    retireConceptLines: [
      "AlphaGo beat Ke Jie in 2017 and then retired.",
      "The Chinese Go Association awarded it a 9-dan title.",
      "AlphaGo Zero learned by self-play and became even stronger.",
    ],
    retireParas: [
      "In 2017, AlphaGo defeated China's top player Ke Jie. After the match, the Chinese Weiqi Association awarded AlphaGo a professional 9-dan title (Figure 3-11).",
      "DeepMind then released AlphaGo Zero, which learned only by playing against itself. This showed AI could discover strategies beyond human experience.",
    ],
    retireFigure: {
      label: "Figure 3-11",
      caption: "The Chinese Weiqi Association awards AlphaGo the professional 9-dan title.",
      placeholder: "Illustration placeholder",
    },
    retireDemo: {
      title: "Self-Play Boost",
      goal: "Compare learning from humans vs. learning by self-play.",
      modes: [
        {
          key: "human",
          label: "Human games",
          detail: "AlphaGo learned from human expert games and improved fast.",
        },
        {
          key: "self",
          label: "Self-play",
          detail: "AlphaGo Zero learned by playing itself and became even stronger.",
        },
      ],
    },
    retireSteps: [
      "Switch between learning modes.",
      "Explain why self-play can be powerful.",
      "Connect this to AlphaGo Zero.",
    ],
    retireCheckpoint: {
      prompt: "What was special about AlphaGo Zero?",
      options: [
        {
          label: "It learned only by self-play without human game data.",
          correct: true,
          explanation: "Self-play allowed it to go beyond human strategies.",
        },
        {
          label: "It stopped learning after one game.",
          correct: false,
          explanation: "It trained by playing many games against itself.",
        },
        {
          label: "It was weaker than AlphaGo.",
          correct: false,
          explanation: "AlphaGo Zero was even stronger.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Keep an open mind",
    foodParas: [
      "Many people once said it was impossible for a machine to beat a human at Go. AlphaGo proved that great breakthroughs can happen.",
      "Progress takes patience and perseverance. The AlphaGo team kept improving year after year.",
    ],
    foodDemo: {
      title: "From Impossible to Possible",
      goal: "Choose a mindset when facing a tough challenge.",
      choices: [
        {
          key: "closed",
          label: "" +
            "Impossible",
          outcome: "If we assume something is impossible, we stop trying.",
        },
        {
          key: "open",
          label: "" +
            "Open mind",
          outcome: "An open mind invites hard work and new solutions.",
        },
        {
          key: "persist",
          label: "" +
            "Persevere",
          outcome: "Breakthroughs come from long-term effort and patience.",
        },
      ],
    },
    foodSteps: [
      "Pick a mindset option.",
      "Explain how it affects learning.",
      "Share a time you kept trying.",
    ],
    foodCheckpoint: {
      prompt: "What lesson does AlphaGo's story teach?",
      options: [
        {
          label: "Keep an open mind and persevere when facing challenges.",
          correct: true,
          explanation: "The team improved AlphaGo through long-term effort.",
        },
        {
          label: "Give up if something looks too hard.",
          correct: false,
          explanation: "Progress requires persistence.",
        },
        {
          label: "Technology improves by luck alone.",
          correct: false,
          explanation: "Breakthroughs need research and hard work.",
        },
      ],
    },
    historyTitle: "History Corner",
    historyEyebrow: "Why Go is so complex",
    historyCardTitle: "The numbers are huge",
    historyParas: [
      "Go's state-space complexity is about 10^171, far larger than chess at 10^47.",
      "Scientists estimate there are about 10^23 stars in the universe, still far less than Go positions.",
      "That is why Go became one of AI's ultimate challenges.",
    ],
    summaryTitle: "Key Takeaways",
    summaryEyebrow: "Lesson summary",
    summaryPoints: [
      "Go has simple rules but enormous complexity.",
      "AlphaGo began in 2014 and beat Fan Hui in 2015.",
      "In 2016, AlphaGo defeated Lee Sedol 4-1 in the Match of the Century.",
      "AlphaGo Zero learned by self-play and showed AI's powerful potential.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解 AlphaGo 的诞生与发展，认识两场关键比赛。",
      "感受科技进步的巨大影响与科学精神。",
    ],
    introTitle: "故事开头",
    introEyebrow: "课程导入",
    introText: "AlphaGo 改变了人们对人工智能的看法。本课将追溯它的成长之路。",
    goTitle: "1. 围棋：智力的较量",
    goEyebrow: "围棋简介",
    goConceptTitle: "概念卡片",
    goConceptLines: [
      "围棋是 19x19 的棋盘游戏，规则简单但变化极多。",
      "黑白双方通过围地盘取胜。",
      "复杂性让围棋成为 AI 的难题。",
    ],
    goParas: [
      "围棋起源于中国。棋盘有 19 行 19 列，黑白双方通过围住更多地盘获胜。",
      "规则简单，但变化极多，因此被视为智慧与战略的象征。",
    ],
    goDemo: {
      title: "地盘占比",
      goal: "调整黑白占地比例，看看谁领先。",
    },
    goSteps: ["拖动滑块改变黑棋占地。", "观察黑白比例变化。", "说明围棋为何看重地盘。"],
    goCheckpoint: {
      prompt: "为什么围棋对 AI 是一大挑战？",
      options: [
        {
          label: "可能局面数量极多，策略复杂。",
          correct: true,
          explanation: "围棋的复杂度远超棋类游戏。",
        },
        {
          label: "因为规则是保密的。",
          correct: false,
          explanation: "围棋规则公开且简单。",
        },
        {
          label: "因为只有 3x3 的棋盘。",
          correct: false,
          explanation: "围棋是 19x19 的棋盘。",
        },
      ],
    },
    birthTitle: "2. AlphaGo 的诞生",
    birthEyebrow: "从深蓝到围棋",
    birthConceptTitle: "概念卡片",
    birthConceptLines: [
      "AI 早就想在棋类中击败人类高手。",
      "AlphaGo 项目从 2014 年开始快速进步。",
      "2015 年 AlphaGo 战胜欧洲冠军范晖。",
    ],
    birthParas: [
      "1997 年，IBM 的深蓝击败国际象棋冠军卡斯帕罗夫，推动了 AI 棋类研究。",
      "围棋比国际象棋更复杂。AlphaGo 于 2014 年启动，很快达到职业水平。",
      "2015 年 10 月，AlphaGo 以 5-0 战胜范晖，成为首个在 19x19 棋盘击败职业棋手的 AI。",
    ],
    birthDemo: {
      title: "AlphaGo 时间线",
      goal: "了解 AlphaGo 关键里程碑。",
      events: [
        {
          key: "deep-blue",
          label: "深蓝",
          year: "1997 年",
          detail: "深蓝击败国际象棋冠军卡斯帕罗夫。",
        },
        {
          key: "project",
          label: "项目启动",
          year: "2014 年",
          detail: "AlphaGo 项目在 DeepMind 启动。",
        },
        {
          key: "fan-hui",
          label: "范晖",
          year: "2015 年",
          detail: "AlphaGo 以 5-0 战胜范晖。",
        },
      ],
    },
    birthSteps: ["选择一个时间点。", "说说围棋为什么更难。", "解释范晖之战的重要性。"],
    birthCheckpoint: {
      prompt: "2015 年范晖之战的意义是什么？",
      options: [
        {
          label: "AI 首次在 19x19 棋盘击败职业棋手。",
          correct: true,
          explanation: "AlphaGo 以 5-0 获胜。",
        },
        {
          label: "这是人类首次击败 AlphaGo。",
          correct: false,
          explanation: "范晖输给了 AlphaGo。",
        },
        {
          label: "证明围棋比象棋简单。",
          correct: false,
          explanation: "围棋仍然非常复杂。",
        },
      ],
    },
    matchTitle: "3. 世纪大战",
    matchEyebrow: "对战李世石",
    matchConceptTitle: "概念卡片",
    matchConceptLines: [
      "2016 年 AlphaGo 对战李世石引发全球关注。",
      "AlphaGo 以 4-1 获胜，李世石赢下第 4 局。",
      "这场比赛改变了人们对 AI 的认知。",
    ],
    matchParas: [
      "2016 年 3 月，AlphaGo 挑战韩国九段李世石，世界瞩目。",
      "AlphaGo 连赢三局，李世石在第 4 局下出神之一手迫使 AI 认输。",
      "第 5 局 AlphaGo 获胜，最终总比分 4-1。",
    ],
    matchFigure: {
      label: "图 3-10",
      caption: "AlphaGo 挑战韩国九段李世石。",
      placeholder: "插图占位",
    },
    matchDemo: {
      title: "比赛记分牌",
      goal: "回顾每局比赛的结果。",
      games: [
        { key: "game1", label: "第 1 局", winner: "AlphaGo 获胜", detail: "首局胜利震惊世界。" },
        { key: "game2", label: "第 2 局", winner: "AlphaGo 获胜", detail: "连胜说明 AI 实力强大。" },
        { key: "game3", label: "第 3 局", winner: "AlphaGo 获胜", detail: "第三局锁定胜局。" },
        { key: "game4", label: "第 4 局", winner: "李世石获胜", detail: "第 78 手迫使 AlphaGo 认输。" },
        { key: "game5", label: "第 5 局", winner: "AlphaGo 获胜", detail: "最终以 4-1 结束比赛。" },
      ],
    },
    matchSteps: ["选择一局比赛。", "描述关键瞬间。", "说说第 4 局为何特别。"],
    matchCheckpoint: {
      prompt: "2016 年对战最终结果如何？",
      options: [
        {
          label: "AlphaGo 以 4-1 战胜李世石。",
          correct: true,
          explanation: "AlphaGo 赢下了第 1、2、3、5 局。",
        },
        {
          label: "李世石以 4-1 获胜。",
          correct: false,
          explanation: "李世石只赢了第 4 局。",
        },
        {
          label: "双方打成平局。",
          correct: false,
          explanation: "AlphaGo 赢了四局。",
        },
      ],
    },
    retireTitle: "4. 退役与新起点",
    retireEyebrow: "AlphaGo Zero",
    retireConceptTitle: "概念卡片",
    retireConceptLines: [
      "2017 年 AlphaGo 战胜柯洁后宣布退役。",
      "中国围棋协会授予它职业九段称号。",
      "AlphaGo Zero 通过自我对弈更强。",
    ],
    retireParas: [
      "2017 年 AlphaGo 战胜当时世界第一的柯洁，随后中国围棋协会授予它职业九段称号（图 3-11）。",
      "之后推出的 AlphaGo Zero 只靠自我对弈学习，能力甚至更强。",
    ],
    retireFigure: {
      label: "图 3-11",
      caption: "中国围棋协会授予 AlphaGo 职业九段称号。",
      placeholder: "插图占位",
    },
    retireDemo: {
      title: "自我对弈提升",
      goal: "比较“学人类棋谱”和“自我对弈”的差别。",
      modes: [
        { key: "human", label: "人类棋谱", detail: "AlphaGo 先学习人类高手棋局。" },
        { key: "self", label: "自我对弈", detail: "AlphaGo Zero 通过自我对弈变得更强。" },
      ],
    },
    retireSteps: ["切换两种学习方式。", "说明自我对弈为何有效。", "联系 AlphaGo Zero。"],
    retireCheckpoint: {
      prompt: "AlphaGo Zero 的特点是什么？",
      options: [
        {
          label: "只靠自我对弈学习，不依赖人类棋谱。",
          correct: true,
          explanation: "自我对弈让它超过前代。",
        },
        {
          label: "只下了一局就停止学习。",
          correct: false,
          explanation: "它通过大量自我对弈训练。",
        },
        {
          label: "它比 AlphaGo 更弱。",
          correct: false,
          explanation: "AlphaGo Zero 更强。",
        },
      ],
    },
    foodTitle: "想一想",
    foodEyebrow: "保持开放",
    foodParas: [
      "很多人曾说机器不可能战胜人类，但 AlphaGo 证明了突破的可能。",
      "成功离不开长期的努力和坚持。",
    ],
    foodDemo: {
      title: "从不可能到可能",
      goal: "选择面对挑战的心态。",
      choices: [
        { key: "closed", label: "不可能", outcome: "如果先入为主，就会停止尝试。" },
        { key: "open", label: "开放心态", outcome: "开放心态会激发持续学习。" },
        { key: "persist", label: "坚持不懈", outcome: "长期坚持才会迎来突破。" },
      ],
    },
    foodSteps: ["选择一个心态选项。", "解释它如何影响学习。", "分享你坚持过的事情。"],
    foodCheckpoint: {
      prompt: "AlphaGo 的故事给我们的启示是什么？",
      options: [
        {
          label: "保持开放心态并坚持努力。",
          correct: true,
          explanation: "突破来自长期努力。",
        },
        {
          label: "遇到难题就放弃。",
          correct: false,
          explanation: "进步需要坚持。",
        },
        {
          label: "科技靠运气就能进步。",
          correct: false,
          explanation: "成果来自研究与实践。",
        },
      ],
    },
    historyTitle: "历史角",
    historyEyebrow: "围棋的复杂度",
    historyCardTitle: "数字有多大",
    historyParas: [
      "围棋状态空间复杂度约为 10^171，比国际象棋 10^47 大得多。",
      "宇宙中大约有 10^23 颗恒星，仍远少于围棋局面数。",
      "这就是围棋成为 AI 终极挑战之一的原因。",
    ],
    summaryTitle: "关键要点",
    summaryEyebrow: "课程小结",
    summaryPoints: [
      "围棋规则简单但变化巨大。",
      "AlphaGo 2014 年启动，2015 年战胜范晖。",
      "2016 年 AlphaGo 以 4-1 战胜李世石。",
      "AlphaGo Zero 通过自我对弈展示 AI 潜力。",
    ],
  },
};
