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

export function PrimaryLesson2_6({ lang }: LessonProps) {
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
    { id: "flock", label: t.flockTitle },
    { id: "risk", label: t.riskTitle },
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

        <SectionBlock id="flock" title={t.flockTitle} eyebrow={t.flockEyebrow}>
          <InfoCard title={t.flockConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.flockConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.flockParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.flockFigure.label}
            caption={t.flockFigure.caption}
            placeholder={t.flockFigure.placeholder}
          />
          <FlockEchoDemo
            lang={lang}
            title={t.flockDemo.title}
            goal={t.flockDemo.goal}
            resetLabel={ui.reset}
            interests={t.flockDemo.interests}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.flockSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.flockCheckpoint.prompt}
            options={t.flockCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="risk" title={t.riskTitle} eyebrow={t.riskEyebrow}>
          <InfoCard title={t.riskConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.riskConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.riskParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.riskFigure.label}
            caption={t.riskFigure.caption}
            placeholder={t.riskFigure.placeholder}
          />
          <CocoonMeterDemo
            lang={lang}
            title={t.riskDemo.title}
            goal={t.riskDemo.goal}
            resetLabel={ui.reset}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.riskSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.riskCheckpoint.prompt}
            options={t.riskCheckpoint.options}
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
          <BreakoutHabitsDemo
            lang={lang}
            title={t.foodDemo.title}
            goal={t.foodDemo.goal}
            resetLabel={ui.reset}
            habits={t.foodDemo.habits}
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

type Interest = {
  key: string;
  label: string;
  echo: string[];
};

function FlockEchoDemo({
  lang,
  title,
  goal,
  resetLabel,
  interests,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  interests: Interest[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(interests[0]?.key ?? "");
  const current = interests.find((interest) => interest.key === active) ?? interests[0];

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
          onClick={() => setActive(interests[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {interests.map((interest) => (
          <button
            key={interest.key}
            type="button"
            onClick={() => setActive(interest.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              interest.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {interest.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "推荐回声" : "Recommendation Echo"}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {current.echo.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function CocoonMeterDemo({
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
  const [diversity, setDiversity] = useState(30);
  const risk = Math.max(0, 100 - diversity);

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
          onClick={() => setDiversity(30)}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-4">
        <input
          type="range"
          min={0}
          max={100}
          value={diversity}
          onChange={(event) => setDiversity(Number(event.target.value))}
          className="w-full"
          aria-label={isZh ? "内容多样性" : "Content diversity"}
        />
        <div className="mt-2 flex justify-between text-[11px] text-slate-500">
          <span>{isZh ? "单一" : "Narrow"}</span>
          <span>{isZh ? "多样" : "Diverse"}</span>
        </div>
      </div>

      <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
          <span>{isZh ? "茧房风险" : "Cocoon Risk"}</span>
          <span>{risk}%</span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-white">
          <div className="h-full rounded-full bg-rose-400" style={{ width: `${risk}%` }} />
        </div>
        <p className="mt-2 text-sm text-slate-700">
          {risk > 60
            ? isZh
              ? "内容太单一，容易形成信息茧房。"
              : "Content is narrow, cocoon risk is high."
            : isZh
              ? "内容更丰富，视野更开阔。"
              : "More diversity means a wider view."}
        </p>
      </div>
    </div>
  );
}

type BreakoutHabit = {
  key: string;
  label: string;
  effect: string;
};

function BreakoutHabitsDemo({
  lang,
  title,
  goal,
  resetLabel,
  habits,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  habits: BreakoutHabit[];
}) {
  const isZh = lang === "zh";
  const [selected, setSelected] = useState<Record<string, boolean>>(
    habits.reduce<Record<string, boolean>>((acc, habit) => {
      acc[habit.key] = false;
      return acc;
    }, {}),
  );

  const score = Object.values(selected).filter(Boolean).length;
  const reset = () =>
    setSelected(
      habits.reduce<Record<string, boolean>>((acc, habit) => {
        acc[habit.key] = false;
        return acc;
      }, {}),
    );

  const activeHabit = useMemo(
    () => habits.find((habit) => selected[habit.key]),
    [habits, selected],
  );

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
        {habits.map((habit) => (
          <label
            key={habit.key}
            className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700"
          >
            <span>{habit.label}</span>
            <input
              type="checkbox"
              checked={selected[habit.key]}
              onChange={(event) =>
                setSelected((prev) => ({
                  ...prev,
                  [habit.key]: event.target.checked,
                }))
              }
            />
          </label>
        ))}
      </div>

      <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
          <span>{isZh ? "破茧行动数" : "Breakout Actions"}</span>
          <span>{score} / {habits.length}</span>
        </div>
        <p className="mt-2 text-sm text-slate-700">
          {activeHabit?.effect ??
            (isZh ? "选择一些行动来拓宽视野。" : "Select actions to broaden your view.")}
        </p>
      </div>
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand what a recommender system is and learn about its features.",
      "Understand the risks of recommender systems, such as information cocoons, and learn to view them critically.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "Short video and shopping apps seem to know what you like. This is the work of recommender systems (Figure 2-23).",
    introFigure: {
      label: "Figure 2-23",
      caption: "Examples of platforms that use recommender systems.",
      placeholder: "Illustration placeholder",
    },
    flockTitle: "1. Birds of a Feather",
    flockEyebrow: "Flocks and echoes",
    flockConceptTitle: "Concept Card",
    flockConceptLines: [
      "Recommender systems group people with similar preferences.",
      "You see what your \"flock\" watches or buys.",
      "Recommendations echo what your group likes.",
    ],
    flockParas: [
      "People with similar interests are grouped together. A sports lover sees sports gear; a tech enthusiast sees tech news.",
      "If two people buy similar items, the system recommends what one buys to the other (Figure 2-24).",
      "This is like an echo: you shout \"apple,\" and similar fruit ideas echo back.",
    ],
    flockFigure: {
      label: "Figure 2-24",
      caption: "Recommendations based on similar purchase history.",
      placeholder: "Illustration placeholder",
    },
    flockDemo: {
      title: "Echo Recommendations",
      goal: "See how a \"flock\" echoes your interests.",
      interests: [
        {
          key: "sports",
          label: "Sports lover",
          echo: ["Running shoes", "Training shirts", "Sports watch"],
        },
        {
          key: "tech",
          label: "Tech enthusiast",
          echo: ["AI news", "Smart gadgets", "Coding tips"],
        },
        {
          key: "cartoon",
          label: "Cartoon fan",
          echo: ["Animated clips", "Comic books", "Character toys"],
        },
      ],
    },
    flockSteps: ["Pick an interest group.", "Read the echo recommendations.", "Explain why they feel familiar."],
    flockCheckpoint: {
      prompt: "Why do recommender systems feel like an echo?",
      options: [
        {
          label: "They recommend what your similar group already likes.",
          correct: true,
          explanation: "The system echoes your group’s choices.",
        },
        {
          label: "They show random content with no pattern.",
          correct: false,
          explanation: "They use your group’s patterns.",
        },
        {
          label: "They only show things you never liked.",
          correct: false,
          explanation: "They focus on similar preferences.",
        },
      ],
    },
    riskTitle: "2. Risks of Recommender Systems",
    riskEyebrow: "Information cocoon",
    riskConceptTitle: "Concept Card",
    riskConceptLines: [
      "Recommenders make life easier but can narrow information.",
      "An information cocoon limits what you see.",
      "Extreme opinions can be reinforced.",
    ],
    riskParas: [
      "Recommenders help people find information and help businesses offer personalized services, but they also have downsides.",
      "If you only watch cartoons, the system keeps recommending cartoons, and other knowledge may be cut off.",
      "When biases are repeated, people can become more extreme in their views.",
    ],
    riskFigure: {
      label: "Figure 2-25",
      caption: "A diagram explaining the information cocoon.",
      placeholder: "Illustration placeholder",
    },
    riskDemo: {
      title: "Cocoon Meter",
      goal: "Adjust diversity and watch cocoon risk change.",
    },
    riskSteps: ["Move the diversity slider.", "Watch cocoon risk change.", "Explain why diversity helps."],
    riskCheckpoint: {
      prompt: "What is an information cocoon?",
      options: [
        {
          label: "A situation where recommendations limit what you see.",
          correct: true,
          explanation: "It narrows your information sources.",
        },
        {
          label: "A tool that shows all topics equally.",
          correct: false,
          explanation: "It is the opposite of diversity.",
        },
        {
          label: "A safe space that blocks all ads.",
          correct: false,
          explanation: "It is about information narrowing.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Breaking the cocoon",
    foodConceptTitle: "Concept Card",
    foodParas: [
      "Information cocoons limit growth and make thinking rigid.",
      "We can break free by exploring new fields and listening to others.",
      "Remember: algorithms are cold and may narrow our view.",
    ],
    foodDemo: {
      title: "Breakout Habits",
      goal: "Pick habits that help you escape a cocoon.",
      habits: [
        {
          key: "diverse",
          label: "Read diverse topics",
          effect: "More topics widen your view of the world.",
        },
        {
          key: "reflect",
          label: "Self-reflect",
          effect: "Reflection helps you check your biases.",
        },
        {
          key: "discuss",
          label: "Discuss with others",
          effect: "Talking to others reveals new ideas.",
        },
        {
          key: "pause",
          label: "Pause and compare sources",
          effect: "Comparing sources reduces one-sided views.",
        },
      ],
    },
    foodSteps: ["Select helpful habits.", "See how many actions you chose.", "Commit to one habit this week."],
    foodCheckpoint: {
      prompt: "Which habit best helps break an information cocoon?",
      options: [
        {
          label: "Explore different topics and viewpoints.",
          correct: true,
          explanation: "Diverse content widens perspective.",
        },
        {
          label: "Only follow one topic forever.",
          correct: false,
          explanation: "That strengthens the cocoon.",
        },
        {
          label: "Avoid all new ideas.",
          correct: false,
          explanation: "New ideas are needed to grow.",
        },
      ],
    },
    summaryTitle: "Summary",
    summaryEyebrow: "Key Takeaways",
    summaryPoints: [
      "Recommender systems group people by similar preferences.",
      "Echo-like recommendations can create information cocoons.",
      "Diverse exploration helps you break free.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解推荐系统及其特点。",
      "理解信息茧房等风险，并学会批判性看待。",
    ],
    introTitle: "故事开头",
    introEyebrow: "课程导入",
    introText: "短视频和购物平台常能猜到你的喜好，这是推荐系统的作用（图 2-23）。",
    introFigure: {
      label: "图 2-23",
      caption: "使用推荐系统的平台示例。",
      placeholder: "插图占位",
    },
    flockTitle: "1. 物以类聚",
    flockEyebrow: "群体与回声",
    flockConceptTitle: "概念卡片",
    flockConceptLines: [
      "推荐系统会把兴趣相近的人归为一组。",
      "你会看到同组人喜欢的内容。",
      "推荐像回声一样重复相似主题。",
    ],
    flockParas: [
      "系统把兴趣相似的人归成“群体”。体育爱好者会看到运动商品，科技爱好者看到科技资讯。",
      "如果两个人买过相似的商品，系统会互相推荐（图 2-24）。",
      "这就像回声：你喊“苹果”，回声也会回应“苹果”或类似的水果。",
    ],
    flockFigure: {
      label: "图 2-24",
      caption: "基于相似购买历史的推荐示例。",
      placeholder: "插图占位",
    },
    flockDemo: {
      title: "回声式推荐",
      goal: "观察兴趣群体如何带来推荐回声。",
      interests: [
        {
          key: "sports",
          label: "运动爱好者",
          echo: ["跑鞋", "训练服", "运动手表"],
        },
        {
          key: "tech",
          label: "科技迷",
          echo: ["AI 新闻", "智能设备", "编程技巧"],
        },
        {
          key: "cartoon",
          label: "动漫迷",
          echo: ["动画短片", "漫画书", "角色玩具"],
        },
      ],
    },
    flockSteps: ["选择一个兴趣群体。", "查看推荐回声。", "说明为何感觉熟悉。"],
    flockCheckpoint: {
      prompt: "为什么推荐系统像“回声”？",
      options: [
        {
          label: "它推荐的是你所在群体喜欢的内容。",
          correct: true,
          explanation: "回声来自同类偏好。",
        },
        {
          label: "它完全随机推荐。",
          correct: false,
          explanation: "推荐不是随机的。",
        },
        {
          label: "它只推荐你讨厌的内容。",
          correct: false,
          explanation: "推荐基于相似兴趣。",
        },
      ],
    },
    riskTitle: "2. 推荐系统的风险",
    riskEyebrow: "信息茧房",
    riskConceptTitle: "概念卡片",
    riskConceptLines: [
      "推荐系统方便但可能限制信息。",
      "信息茧房会缩小视野。",
      "偏见可能被不断强化。",
    ],
    riskParas: [
      "推荐系统能帮助找到信息并提供个性化服务，但也有风险。",
      "如果只看动漫，系统会不断推荐动漫，其他知识可能被挡在外面。",
      "偏见被反复推荐后，观点可能越来越极端。",
    ],
    riskFigure: {
      label: "图 2-25",
      caption: "信息茧房概念示意图。",
      placeholder: "插图占位",
    },
    riskDemo: {
      title: "茧房风险计",
      goal: "调整内容多样性，观察茧房风险变化。",
    },
    riskSteps: ["拖动多样性滑块。", "观察茧房风险变化。", "说明多样性的重要性。"],
    riskCheckpoint: {
      prompt: "什么是信息茧房？",
      options: [
        {
          label: "推荐限制了我们看到的信息范围。",
          correct: true,
          explanation: "信息变得单一。",
        },
        {
          label: "所有话题都被平均推荐。",
          correct: false,
          explanation: "茧房恰恰不是多样化。",
        },
        {
          label: "可以屏蔽所有广告的地方。",
          correct: false,
          explanation: "茧房关注的是信息范围。",
        },
      ],
    },
    foodTitle: "思考食粮",
    foodEyebrow: "破茧行动",
    foodConceptTitle: "概念卡片",
    foodParas: [
      "信息茧房会限制个人成长。",
      "探索新领域、倾听不同观点能破茧。",
      "算法冷冰冰，我们要主动拓宽视野。",
    ],
    foodDemo: {
      title: "破茧习惯",
      goal: "选择能帮助你跳出茧房的习惯。",
      habits: [
        {
          key: "diverse",
          label: "阅读不同领域",
          effect: "多元内容能拓宽视野。",
        },
        {
          key: "reflect",
          label: "自我反思",
          effect: "反思能检查偏见。",
        },
        {
          key: "discuss",
          label: "与他人交流",
          effect: "交流带来新观点。",
        },
        {
          key: "pause",
          label: "比较不同来源",
          effect: "对比来源避免单一视角。",
        },
      ],
    },
    foodSteps: ["选择破茧习惯。", "查看已选数量。", "制定一个行动计划。"],
    foodCheckpoint: {
      prompt: "哪种做法最有助于破除信息茧房？",
      options: [
        {
          label: "主动接触不同观点与内容。",
          correct: true,
          explanation: "多样性可以拓宽视野。",
        },
        {
          label: "只关注一种话题。",
          correct: false,
          explanation: "会加深茧房。",
        },
        {
          label: "拒绝所有新想法。",
          correct: false,
          explanation: "新想法有助成长。",
        },
      ],
    },
    summaryTitle: "小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "推荐系统会根据相似兴趣推送内容。",
      "信息茧房会缩小视野并强化偏见。",
      "主动多元探索可以破茧。",
    ],
  },
};
