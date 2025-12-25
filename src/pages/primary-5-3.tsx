import { useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { FigureCard } from "../components/FigureCard";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { MinimaxPruningDemo } from "../demos/MinimaxPruningDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function PrimaryLesson5_3({ lang }: LessonProps) {
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
    { id: "legend", label: t.legendTitle },
    { id: "match", label: t.matchTitle },
    { id: "win", label: t.winTitle },
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

        <SectionBlock id="legend" title={t.legendTitle} eyebrow={t.legendEyebrow}>
          <InfoCard title={t.legendConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.legendConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.legendParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.legendFigure.label}
            caption={t.legendFigure.caption}
            placeholder={t.legendFigure.placeholder}
          />
          <KasparovTimelineDemo
            lang={lang}
            title={t.legendDemo.title}
            goal={t.legendDemo.goal}
            resetLabel={ui.reset}
            events={t.legendDemo.events}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.legendSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.legendCheckpoint.prompt}
            options={t.legendCheckpoint.options}
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
          <MatchTimelineDemo
            lang={lang}
            title={t.matchDemo.title}
            goal={t.matchDemo.goal}
            resetLabel={ui.reset}
            rounds={t.matchDemo.rounds}
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

        <SectionBlock id="win" title={t.winTitle} eyebrow={t.winEyebrow}>
          <InfoCard title={t.winConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.winConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.winParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <SearchDepthDemo
            lang={lang}
            title={t.winDemo.title}
            goal={t.winDemo.goal}
            resetLabel={ui.reset}
          />
          <MinimaxPruningDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.winSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.winCheckpoint.prompt}
            options={t.winCheckpoint.options}
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
          <HumanMachineStrengthsDemo
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

type TimelineEvent = {
  key: string;
  year: string;
  label: string;
  detail: string;
};

function KasparovTimelineDemo({
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
            {event.year}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "里程碑" : "Milestone"}
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{current.label}</p>
          <p className="mt-2 text-sm">{current.detail}</p>
        </div>
      )}
    </div>
  );
}

type MatchRound = {
  key: string;
  label: string;
  detail: string;
  result: string;
};

function MatchTimelineDemo({
  lang,
  title,
  goal,
  resetLabel,
  rounds,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  rounds: MatchRound[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(rounds[0]?.key ?? "");
  const current = rounds.find((round) => round.key === active) ?? rounds[0];

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
          onClick={() => setActive(rounds[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {rounds.map((round) => (
          <button
            key={round.key}
            type="button"
            onClick={() => setActive(round.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              round.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {round.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "对局结果" : "Match result"}
          </p>
          <p className="mt-1 text-sm">{current.detail}</p>
          <p className="mt-2 text-xs text-slate-600">{current.result}</p>
        </div>
      )}
    </div>
  );
}

function SearchDepthDemo({
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
  const [depth, setDepth] = useState(6);

  const outlook = depth < 6
    ? isZh
      ? "新手：只能看到 3-4 步"
      : "Beginner: only 3-4 moves"
    : depth < 10
      ? isZh
        ? "高手：可看到 7-8 步"
        : "Skilled: 7-8 moves"
      : isZh
        ? "顶尖：可看到 9-10 步以上"
        : "Elite: 9-10+ moves";

  const reset = () => setDepth(6);

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
          {isZh ? "预判步数" : "Search depth"}
          <input
            type="range"
            min={3}
            max={12}
            value={depth}
            onChange={(e) => setDepth(Number(e.target.value))}
            className="mt-1 w-full accent-brand-500"
            aria-valuemin={3}
            aria-valuemax={12}
            aria-valuenow={depth}
          />
          <span className="text-xs text-slate-500">{depth}</span>
        </label>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "对应水平" : "Level"}
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{outlook}</p>
          <p className="mt-2 text-xs text-slate-600">
            {isZh
              ? "深度越大，机器越能搜索更多可能。"
              : "Greater depth lets machines explore far more moves."}
          </p>
        </div>
      </div>
    </div>
  );
}

type StrengthChoice = {
  key: string;
  label: string;
  response: string;
};

function HumanMachineStrengthsDemo({
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
  choices: StrengthChoice[];
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
            {isZh ? "提示" : "Takeaway"}
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
      "Understand Deep Blue's victory over Kasparov and its chess algorithm.",
      "Learn why machines have advantages in board games.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "In 1997, IBM's Deep Blue defeated world chess champion Garry Kasparov, marking a major milestone in AI history.",
    legendTitle: "1. The Legend of Kasparov",
    legendEyebrow: "World champion",
    legendConceptTitle: "Concept Card",
    legendConceptLines: [
      "Kasparov became world champion at age 22.",
      "He dominated chess for two decades.",
      "His story sets the stage for Deep Blue's challenge.",
    ],
    legendParas: [
      "Kasparov grew up in a chess-loving family and showed talent from a young age.",
      "By 1985, he defeated Anatoly Karpov and became the youngest world champion.",
      "He stayed at the top of the chess world for about 20 years.",
    ],
    legendFigure: {
      label: "Figure 5-5",
      caption: "Garry Kasparov and the game of chess.",
      placeholder: "Illustration placeholder",
    },
    legendDemo: {
      title: "Kasparov Timeline",
      goal: "Follow Kasparov's rise to world champion.",
      events: [
        {
          key: "1963",
          year: "1963",
          label: "Born in Baku",
          detail: "Grew up in a chess-loving family.",
        },
        {
          key: "1978",
          year: "1978",
          label: "Chess master",
          detail: "Reached master level at age 15.",
        },
        {
          key: "1985",
          year: "1985",
          label: "World champion",
          detail: "Defeated Karpov at age 22.",
        },
      ],
    },
    legendSteps: [
      "Pick a milestone.",
      "Explain why it mattered for chess.",
      "Describe why Kasparov was a tough opponent.",
    ],
    legendCheckpoint: {
      prompt: "Why was Kasparov a legendary opponent?",
      options: [
        {
          label: "He became the youngest world champion and dominated for years.",
          correct: true,
          explanation: "Kasparov held top rankings for decades.",
        },
        {
          label: "He never won any major matches.",
          correct: false,
          explanation: "He won the world championship in 1985.",
        },
        {
          label: "He avoided chess tournaments.",
          correct: false,
          explanation: "He competed and dominated tournaments.",
        },
      ],
    },
    matchTitle: "2. A Historic Match",
    matchEyebrow: "Deep Blue vs. Kasparov",
    matchConceptTitle: "Concept Card",
    matchConceptLines: [
      "Deep Blue grew from ChipTest and Deep Thought.",
      "IBM upgraded it into the 1997 version.",
      "The rematch ended 3.5-2.5 for Deep Blue.",
    ],
    matchParas: [
      "Deep Blue was developed at IBM after earlier chess machines like ChipTest and Deep Thought.",
      "The 1996 match ended 4-2 for Kasparov, but IBM upgraded the machine.",
      "In 1997, Deep Blue won the rematch after six intense games.",
    ],
    matchFigure: {
      label: "Figure 5-6",
      caption: "The Deep Blue supercomputer.",
      placeholder: "Illustration placeholder",
    },
    matchDemo: {
      title: "1997 Match Timeline",
      goal: "Track the key games in the rematch.",
      rounds: [
        {
          key: "game1",
          label: "Game 1",
          detail: "Kasparov won after a long battle.",
          result: "Kasparov leads 1-0.",
        },
        {
          key: "game2",
          label: "Game 2",
          detail: "Deep Blue struck back with strong calculation.",
          result: "Score tied 1-1.",
        },
        {
          key: "draws",
          label: "Games 3-5",
          detail: "Three intense draws.",
          result: "Score tied 2.5-2.5.",
        },
        {
          key: "game6",
          label: "Game 6",
          detail: "Deep Blue won decisively.",
          result: "Deep Blue wins 3.5-2.5.",
        },
      ],
    },
    matchSteps: [
      "Choose a game stage.",
      "Describe what happened.",
      "Explain why the match was historic.",
    ],
    matchCheckpoint: {
      prompt: "What made the 1997 match historic?",
      options: [
        {
          label: "A computer defeated the reigning world chess champion.",
          correct: true,
          explanation: "Deep Blue was the first to do this in a standard match.",
        },
        {
          label: "Kasparov retired before playing.",
          correct: false,
          explanation: "He played all six games.",
        },
        {
          label: "Deep Blue only played for fun.",
          correct: false,
          explanation: "It was a serious official match.",
        },
      ],
    },
    winTitle: "3. Why Did Deep Blue Win?",
    winEyebrow: "Search power",
    winConceptTitle: "Concept Card",
    winConceptLines: [
      "Deep Blue used alpha-beta pruning to search moves.",
      "Machines can search deeper than humans.",
      "Deep Blue evaluated 200 million moves per second.",
    ],
    winParas: [
      "Alpha-beta pruning is a search method similar to how humans consider moves and countermoves.",
      "Humans can only look a few moves ahead, while Deep Blue reached about 12 moves.",
      "Its massive hardware let it calculate incredibly fast and select strong moves.",
    ],
    winDemo: {
      title: "Search Depth Advantage",
      goal: "Adjust how many moves a player can see ahead.",
    },
    winSteps: [
      "Move the depth slider.",
      "Compare human and machine ranges.",
      "Explain how deeper search helps win.",
    ],
    winCheckpoint: {
      prompt: "Why did Deep Blue have an advantage?",
      options: [
        {
          label: "It could search far more moves with huge computing power.",
          correct: true,
          explanation: "Deep Blue evaluated 200 million moves per second.",
        },
        {
          label: "It relied on random guesses.",
          correct: false,
          explanation: "It used structured search and evaluation.",
        },
        {
          label: "It followed no rules.",
          correct: false,
          explanation: "It played by the rules of chess.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Humans and AI",
    foodParas: [
      "Machines excel in rule-based games like chess and Go because of fast calculation and memory.",
      "Humans still have strengths like creativity and artistic feeling.",
    ],
    foodDemo: {
      title: "Strengths Check",
      goal: "Compare human strengths with machine strengths.",
      choices: [
        {
          key: "speed",
          label: "Fast calculation",
          response: "Machines win in speed and memory-heavy tasks.",
        },
        {
          key: "creativity",
          label: "Creativity",
          response: "Humans bring imagination and emotion into art and ideas.",
        },
        {
          key: "specialist",
          label: "Specialist",
          response: "People can develop unique strengths alongside AI partners.",
        },
      ],
    },
    foodSteps: [
      "Choose a strength focus.",
      "Read the takeaway.",
      "Share one personal strength to develop.",
    ],
    foodCheckpoint: {
      prompt: "In which areas do machines usually outperform humans?",
      options: [
        {
          label: "Rule-based board games with deep search.",
          correct: true,
          explanation: "Machines excel at fast calculation and memory.",
        },
        {
          label: "Creating unique human emotions.",
          correct: false,
          explanation: "Humans still lead in emotional creativity.",
        },
        {
          label: "All tasks without exception.",
          correct: false,
          explanation: "Machines are not best at everything.",
        },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryEyebrow: "Summary",
    summaryPoints: [
      "Deep Blue beat Kasparov in a historic 1997 match.",
      "It used alpha-beta pruning and deep search to choose moves.",
      "Machines excel in rule-based games with fast computation.",
      "Humans still hold strengths in creativity and imagination.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解深蓝战胜卡斯帕罗夫的故事与棋力算法。",
      "认识机器在棋类中的优势。",
    ],
    introTitle: "故事开头",
    introEyebrow: "开场",
    introText: "1997 年，IBM 深蓝击败世界冠军卡斯帕罗夫，成为 AI 里程碑事件。",
    legendTitle: "1. 卡斯帕罗夫传奇",
    legendEyebrow: "世界冠军",
    legendConceptTitle: "概念卡片",
    legendConceptLines: [
      "卡斯帕罗夫 22 岁成为世界冠军。",
      "他统治棋坛近 20 年。",
      "他的传奇背景让比赛更震撼。",
    ],
    legendParas: [
      "卡斯帕罗夫出生在棋迷家庭，从小展现天赋。",
      "1985 年他击败卡尔波夫，成为最年轻世界冠军。",
      "此后长期保持世界第一。",
    ],
    legendFigure: {
      label: "图 5-5",
      caption: "卡斯帕罗夫与国际象棋。",
      placeholder: "插图占位",
    },
    legendDemo: {
      title: "卡斯帕罗夫时间线",
      goal: "了解他登顶世界冠军的过程。",
      events: [
        {
          key: "1963",
          year: "1963",
          label: "出生于巴库",
          detail: "成长于棋迷家庭。",
        },
        {
          key: "1978",
          year: "1978",
          label: "成为棋王",
          detail: "15 岁达到大师水平。",
        },
        {
          key: "1985",
          year: "1985",
          label: "世界冠军",
          detail: "击败卡尔波夫夺冠。",
        },
      ],
    },
    legendSteps: [
      "选择一个节点。",
      "说明它的重要性。",
      "解释他为何是强劲对手。",
    ],
    legendCheckpoint: {
      prompt: "卡斯帕罗夫为何被称为传奇？",
      options: [
        {
          label: "他是最年轻世界冠军并长期称霸棋坛。",
          correct: true,
          explanation: "他保持世界第一近 20 年。",
        },
        {
          label: "他没有赢过冠军。",
          correct: false,
          explanation: "他在 1985 年夺冠。",
        },
        {
          label: "他从未参加比赛。",
          correct: false,
          explanation: "他参加并赢得大量比赛。",
        },
      ],
    },
    matchTitle: "2. 历史性对决",
    matchEyebrow: "深蓝对卡斯帕罗夫",
    matchConceptTitle: "概念卡片",
    matchConceptLines: [
      "深蓝源自 ChipTest 和深思。",
      "IBM 升级后在 1997 年再次挑战。",
      "最终深蓝以 3.5:2.5 获胜。",
    ],
    matchParas: [
      "深蓝由 IBM 研发，源自更早的棋机项目。",
      "1996 年挑战失败后，IBM 升级系统。",
      "1997 年复赛中深蓝最终胜出。",
    ],
    matchFigure: {
      label: "图 5-6",
      caption: "深蓝超级计算机。",
      placeholder: "插图占位",
    },
    matchDemo: {
      title: "1997 对局时间线",
      goal: "回顾关键对局。",
      rounds: [
        {
          key: "game1",
          label: "第一局",
          detail: "卡斯帕罗夫获胜。",
          result: "卡斯帕罗夫 1-0 领先。",
        },
        {
          key: "game2",
          label: "第二局",
          detail: "深蓝反击获胜。",
          result: "比分 1-1 平。",
        },
        {
          key: "draws",
          label: "三场平局",
          detail: "第三到第五局激烈胶着。",
          result: "比分 2.5-2.5 平。",
        },
        {
          key: "game6",
          label: "第六局",
          detail: "深蓝决胜。",
          result: "深蓝 3.5-2.5 获胜。",
        },
      ],
    },
    matchSteps: [
      "选择一个阶段。",
      "描述对局结果。",
      "说明它为何震撼。",
    ],
    matchCheckpoint: {
      prompt: "1997 年对局的历史意义是什么？",
      options: [
        {
          label: "计算机首次击败现役世界冠军。",
          correct: true,
          explanation: "深蓝是第一台做到这一点的系统。",
        },
        {
          label: "卡斯帕罗夫没有参赛。",
          correct: false,
          explanation: "他完成了整场比赛。",
        },
        {
          label: "比赛只是娱乐。",
          correct: false,
          explanation: "它是正式对局。",
        },
      ],
    },
    winTitle: "3. 深蓝为何获胜",
    winEyebrow: "搜索能力",
    winConceptTitle: "概念卡片",
    winConceptLines: [
      "深蓝使用 α-β 剪枝搜索。",
      "机器能搜索更深的步数。",
      "深蓝每秒计算约 2 亿步。",
    ],
    winParas: [
      "α-β 剪枝是一种搜索方法，模拟人类思考走子。",
      "人类能看 3-10 步，深蓝可达 12 步。",
      "庞大的算力让深蓝能迅速评估大量走法。",
    ],
    winDemo: {
      title: "搜索深度优势",
      goal: "调整可预判步数，理解机器优势。",
    },
    winSteps: [
      "拖动滑块调整步数。",
      "比较人类与机器范围。",
      "说明深度搜索的作用。",
    ],
    winCheckpoint: {
      prompt: "深蓝获胜的主要优势是什么？",
      options: [
        {
          label: "强大的算力让它能搜索更多走法。",
          correct: true,
          explanation: "它每秒可评估 2 亿步。",
        },
        {
          label: "完全随机走子。",
          correct: false,
          explanation: "它使用系统搜索与评估。",
        },
        {
          label: "不遵守棋规。",
          correct: false,
          explanation: "它严格遵守规则。",
        },
      ],
    },
    foodTitle: "想一想",
    foodEyebrow: "人机优势",
    foodParas: [
      "机器在棋类等规则明确的任务上有优势。",
      "人类在创造力与艺术感方面仍有独特能力。",
    ],
    foodDemo: {
      title: "优势对比",
      goal: "比较人类与机器的优势。",
      choices: [
        {
          key: "speed",
          label: "计算速度",
          response: "机器在速度与记忆上更强。",
        },
        {
          key: "creativity",
          label: "创造力",
          response: "人类的想象力与情感独特。",
        },
        {
          key: "specialist",
          label: "专长",
          response: "发展个人强项能更好与 AI 合作。",
        },
      ],
    },
    foodSteps: [
      "选择一个优势。",
      "阅读提示。",
      "说出你想培养的能力。",
    ],
    foodCheckpoint: {
      prompt: "机器通常在哪些任务上更有优势？",
      options: [
        {
          label: "规则明确且可深度搜索的棋类。",
          correct: true,
          explanation: "机器计算快、记忆强。",
        },
        {
          label: "情感创作。",
          correct: false,
          explanation: "人类更擅长情感与创意。",
        },
        {
          label: "所有任务都更强。",
          correct: false,
          explanation: "机器并非在所有领域领先。",
        },
      ],
    },
    summaryTitle: "要点回顾",
    summaryEyebrow: "总结",
    summaryPoints: [
      "深蓝在 1997 年击败卡斯帕罗夫。",
      "它使用 α-β 剪枝和深度搜索。",
      "机器在规则游戏上优势明显。",
      "人类在创造力与艺术感上仍强。",
    ],
  },
};
