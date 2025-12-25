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

export function PrimaryLesson4_6({ lang }: LessonProps) {
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
    { id: "background", label: t.backgroundTitle },
    { id: "conference", label: t.conferenceTitle },
    { id: "influence", label: t.influenceTitle },
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

        <SectionBlock id="background" title={t.backgroundTitle} eyebrow={t.backgroundEyebrow}>
          <InfoCard title={t.backgroundConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.backgroundConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.backgroundParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <div className="grid gap-3 md:grid-cols-3">
            {t.backgroundFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <PioneersDemo
            lang={lang}
            title={t.backgroundDemo.title}
            goal={t.backgroundDemo.goal}
            resetLabel={ui.reset}
            people={t.backgroundDemo.people}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.backgroundSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.backgroundCheckpoint.prompt}
            options={t.backgroundCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="conference" title={t.conferenceTitle} eyebrow={t.conferenceEyebrow}>
          <InfoCard title={t.conferenceConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.conferenceConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.conferenceParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <div className="grid gap-3 md:grid-cols-2">
            {t.conferenceFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <TopicBoardDemo
            lang={lang}
            title={t.conferenceDemo.title}
            goal={t.conferenceDemo.goal}
            resetLabel={ui.reset}
            topics={t.conferenceDemo.topics}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.conferenceSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.conferenceCheckpoint.prompt}
            options={t.conferenceCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="influence" title={t.influenceTitle} eyebrow={t.influenceEyebrow}>
          <InfoCard title={t.influenceConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.influenceConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.influenceParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <ImpactDemo
            lang={lang}
            title={t.influenceDemo.title}
            goal={t.influenceDemo.goal}
            resetLabel={ui.reset}
            impacts={t.influenceDemo.impacts}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.influenceSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.influenceCheckpoint.prompt}
            options={t.influenceCheckpoint.options}
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

type PersonCard = {
  key: string;
  name: string;
  role: string;
  contribution: string;
};

function PioneersDemo({
  lang,
  title,
  goal,
  resetLabel,
  people,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  people: PersonCard[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(people[0]?.key ?? "");
  const current = people.find((person) => person.key === active) ?? people[0];

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
          onClick={() => setActive(people[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 grid gap-2 md:grid-cols-3">
        {people.map((person) => (
          <button
            key={person.key}
            type="button"
            onClick={() => setActive(person.key)}
            className={[
              "rounded-xl border px-3 py-2 text-left text-xs font-semibold transition",
              person.key === active
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {person.name}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "研究贡献" : "Contribution"}
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{current.role}</p>
          <p className="mt-2 text-sm">{current.contribution}</p>
        </div>
      )}
    </div>
  );
}

type TopicCard = {
  key: string;
  title: string;
  detail: string;
};

function TopicBoardDemo({
  lang,
  title,
  goal,
  resetLabel,
  topics,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  topics: TopicCard[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(topics[0]?.key ?? "");
  const current = topics.find((topic) => topic.key === active) ?? topics[0];

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
          onClick={() => setActive(topics[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {topics.map((topic) => (
          <button
            key={topic.key}
            type="button"
            onClick={() => setActive(topic.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              topic.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {topic.title}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "讨论内容" : "Discussion"}
          </p>
          <p className="mt-1 text-sm">{current.detail}</p>
        </div>
      )}
    </div>
  );
}

type ImpactCard = {
  key: string;
  title: string;
  detail: string;
};

function ImpactDemo({
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
  impacts: ImpactCard[];
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
            {isZh ? "影响" : "Impact"}
          </p>
          <p className="mt-1 text-sm">{current.detail}</p>
        </div>
      )}
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand the background, discussions, and influence of the Dartmouth Conference.",
      "Appreciate the passion of young researchers at the birth of a new field.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "In 1956, a summer workshop at Dartmouth College introduced artificial intelligence as a new field. This historic event became the Dartmouth Conference.",
    backgroundTitle: "1. Historical Background",
    backgroundEyebrow: "Puzzle pieces",
    backgroundConceptTitle: "Concept Card",
    backgroundConceptLines: [
      "Computers were emerging in the 1950s.",
      "Turing's dream of machine intelligence inspired researchers.",
      "Early projects formed a rough outline of AI.",
    ],
    backgroundParas: [
      "Claude Shannon studied game algorithms, Simon and Newell built the Logic Theorist, and Minsky designed the SNARC learning machine.",
      "John McCarthy, a young mathematician, wanted a summer seminar on intelligent machines and invited like-minded colleagues.",
      "They proposed the term Artificial Intelligence for the first time in their 1955 proposal.",
    ],
    backgroundFigures: [
      {
        label: "Figure 4-20",
        caption: "Claude Shannon.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 4-21",
        caption: "Herbert Simon.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 4-22",
        caption: "Allen Newell.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 4-23",
        caption: "Marvin Minsky.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 4-24",
        caption: "John McCarthy.",
        placeholder: "Illustration placeholder",
      },
    ],
    backgroundDemo: {
      title: "AI Pioneers",
      goal: "Meet the researchers who gathered for Dartmouth.",
      people: [
        {
          key: "shannon",
          name: "Shannon",
          role: "Information theory pioneer",
          contribution: "Studied game-playing algorithms.",
        },
        {
          key: "simon",
          name: "Simon",
          role: "Cognitive scientist",
          contribution: "Co-created the Logic Theorist with Newell.",
        },
        {
          key: "newell",
          name: "Newell",
          role: "AI researcher",
          contribution: "Developed early theorem-proving systems.",
        },
        {
          key: "minsky",
          name: "Minsky",
          role: "Neural network pioneer",
          contribution: "Designed the SNARC learning machine.",
        },
        {
          key: "mccarthy",
          name: "McCarthy",
          role: "Organizer",
          contribution: "Coined the term Artificial Intelligence.",
        },
        {
          key: "rochester",
          name: "Rochester",
          role: "IBM researcher",
          contribution: "Helped design the IBM 701.",
        },
      ],
    },
    backgroundSteps: [
      "Pick a pioneer.",
      "Read their role and contribution.",
      "Explain why many pieces were needed for AI to start.",
    ],
    backgroundCheckpoint: {
      prompt: "Who coined the term " + "\"Artificial Intelligence\"?",
      options: [
        {
          label: "John McCarthy.",
          correct: true,
          explanation: "He used the term in the 1955 proposal.",
        },
        {
          label: "Alan Turing.",
          correct: false,
          explanation: "Turing inspired AI but did not coin the term.",
        },
        {
          label: "Claude Shannon.",
          correct: false,
          explanation: "Shannon worked on information theory.",
        },
      ],
    },
    conferenceTitle: "2. The Historic Conference",
    conferenceEyebrow: "Summer workshop",
    conferenceConceptTitle: "Concept Card",
    conferenceConceptLines: [
      "The workshop ran for about two months in 1956.",
      "Participants discussed many aspects of intelligent machines.",
      "It set the main directions of modern AI research.",
    ],
    conferenceParas: [
      "The conference was held in a Dartmouth classroom with about 47 participants.",
      "Discussions covered language, neural networks, complexity, self-improvement, abstraction, and creativity.",
      "McCarthy, Minsky, and others attended and debated freely.",
    ],
    conferenceFigures: [
      {
        label: "Figure 4-25",
        caption: "The building where the Dartmouth Conference was held.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 4-26",
        caption: "Some participants of the Dartmouth Conference.",
        placeholder: "Illustration placeholder",
      },
    ],
    conferenceDemo: {
      title: "Discussion Topics",
      goal: "Explore the key questions the pioneers debated.",
      topics: [
        {
          key: "language",
          title: "Language",
          detail: "How to make computers understand and use language.",
        },
        {
          key: "networks",
          title: "Neural nets",
          detail: "How to represent concepts with neural networks.",
        },
        {
          key: "complexity",
          title: "Complexity",
          detail: "How to define computational complexity of tasks.",
        },
        {
          key: "self",
          title: "Self-improvement",
          detail: "How machines could improve themselves.",
        },
        {
          key: "abstraction",
          title: "Abstraction",
          detail: "How to design abstract representations of objects.",
        },
        {
          key: "creativity",
          title: "Creativity",
          detail: "How to incorporate randomness and creativity.",
        },
      ],
    },
    conferenceSteps: [
      "Pick a topic.",
      "Explain why it was challenging in 1956.",
      "Connect it to modern AI.",
    ],
    conferenceCheckpoint: {
      prompt: "Which topic was discussed at the Dartmouth Conference?",
      options: [
        {
          label: "How computers could understand language.",
          correct: true,
          explanation: "Language understanding was a key discussion topic.",
        },
        {
          label: "How to build smartphones.",
          correct: false,
          explanation: "Smartphones did not exist yet.",
        },
        {
          label: "How to market social media apps.",
          correct: false,
          explanation: "This was unrelated to early AI research.",
        },
      ],
    },
    influenceTitle: "3. Influence of the Dartmouth Conference",
    influenceEyebrow: "Birth of a field",
    influenceConceptTitle: "Concept Card",
    influenceConceptLines: [
      "The conference marked the official birth of AI.",
      "It sparked enthusiasm among young researchers.",
      "Many later achievements trace back to this moment.",
    ],
    influenceParas: [
      "After the conference, AI directions became clearer. McCarthy created LISP, Samuel advanced machine learning, and Selfridge explored machine perception.",
      "The conference is widely viewed as the origin of AI as a science.",
    ],
    influenceDemo: {
      title: "Lasting Impact",
      goal: "See how the conference influenced later breakthroughs.",
      impacts: [
        {
          key: "lisp",
          title: "LISP",
          detail: "McCarthy developed LISP, a classic AI programming language.",
        },
        {
          key: "ml",
          title: "Machine learning",
          detail: "Arthur Samuel coined the term and built learning systems.",
        },
        {
          key: "perception",
          title: "Perception",
          detail: "Selfridge proposed ideas about machine perception.",
        },
      ],
    },
    influenceSteps: [
      "Pick an impact area.",
      "Describe the achievement.",
      "Explain why the Dartmouth meeting mattered.",
    ],
    influenceCheckpoint: {
      prompt: "Why is the Dartmouth Conference considered historic?",
      options: [
        {
          label: "It officially launched AI as a scientific field.",
          correct: true,
          explanation: "It introduced AI as a distinct research area.",
        },
        {
          label: "It built the first smartphone.",
          correct: false,
          explanation: "Smartphones appeared decades later.",
        },
        {
          label: "It ended all research debates.",
          correct: false,
          explanation: "It started the field rather than ending debate.",
        },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryEyebrow: "Summary",
    summaryPoints: [
      "The 1956 Dartmouth Conference named the field of AI.",
      "Researchers discussed language, neural networks, and self-improvement.",
      "The meeting shaped future directions and inspired major breakthroughs.",
      "Young researchers' passion helped launch a new science.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解达特茅斯会议的背景、讨论与影响。",
      "感受新学科诞生时年轻学者的热情与勇气。",
    ],
    introTitle: "故事开头",
    introEyebrow: "开场",
    introText: "1956 年达特茅斯暑期研讨会首次提出“人工智能”这一学科，史称达特茅斯会议。",
    backgroundTitle: "1. 历史背景",
    backgroundEyebrow: "拼图逐渐成形",
    backgroundConceptTitle: "概念卡片",
    backgroundConceptLines: [
      "20 世纪 50 年代计算机开始出现。",
      "图灵的梦想激励年轻研究者。",
      "多个早期成果拼出 AI 的轮廓。",
    ],
    backgroundParas: [
      "香农研究博弈算法，西蒙和纽厄尔开发逻辑理论家，明斯基设计 SNARC 学习机。",
      "麦卡锡希望组织研讨会，邀请志同道合的伙伴。",
      "1955 年的提案首次使用“人工智能”一词。",
    ],
    backgroundFigures: [
      {
        label: "图 4-20",
        caption: "克劳德·香农。",
        placeholder: "插图占位",
      },
      {
        label: "图 4-21",
        caption: "赫伯特·西蒙。",
        placeholder: "插图占位",
      },
      {
        label: "图 4-22",
        caption: "艾伦·纽厄尔。",
        placeholder: "插图占位",
      },
      {
        label: "图 4-23",
        caption: "马文·明斯基。",
        placeholder: "插图占位",
      },
      {
        label: "图 4-24",
        caption: "约翰·麦卡锡。",
        placeholder: "插图占位",
      },
    ],
    backgroundDemo: {
      title: "AI 先驱",
      goal: "认识参与达特茅斯会议的研究者。",
      people: [
        {
          key: "shannon",
          name: "香农",
          role: "信息论先驱",
          contribution: "研究博弈与信息理论。",
        },
        {
          key: "simon",
          name: "西蒙",
          role: "认知科学家",
          contribution: "与纽厄尔开发逻辑理论家。",
        },
        {
          key: "newell",
          name: "纽厄尔",
          role: "AI 研究者",
          contribution: "推动定理证明系统发展。",
        },
        {
          key: "minsky",
          name: "明斯基",
          role: "神经网络先驱",
          contribution: "设计 SNARC 学习机。",
        },
        {
          key: "mccarthy",
          name: "麦卡锡",
          role: "组织者",
          contribution: "首次提出“人工智能”术语。",
        },
        {
          key: "rochester",
          name: "罗切斯特",
          role: "IBM 研究者",
          contribution: "参与 IBM 701 设计。",
        },
      ],
    },
    backgroundSteps: [
      "选择一位先驱。",
      "阅读他的角色与贡献。",
      "说明早期成果为何像拼图。",
    ],
    backgroundCheckpoint: {
      prompt: "“人工智能”这一术语最早由谁提出？",
      options: [
        {
          label: "约翰·麦卡锡。",
          correct: true,
          explanation: "他在 1955 年提案中首次使用该词。",
        },
        {
          label: "艾伦·图灵。",
          correct: false,
          explanation: "图灵启发 AI，但未提出该术语。",
        },
        {
          label: "克劳德·香农。",
          correct: false,
          explanation: "香农以信息论著称。",
        },
      ],
    },
    conferenceTitle: "2. 历史性的会议",
    conferenceEyebrow: "暑期研讨",
    conferenceConceptTitle: "概念卡片",
    conferenceConceptLines: [
      "会议持续约两个月，约 47 位参与者。",
      "讨论内容涵盖语言、神经网络等问题。",
      "它奠定了现代 AI 的主要方向。",
    ],
    conferenceParas: [
      "会议在达特茅斯数学系教室举行，讨论自由而热烈。",
      "参与者探讨了语言理解、神经网络、复杂度、自我改进等问题。",
      "这次会议确定了 AI 研究的大方向。",
    ],
    conferenceFigures: [
      {
        label: "图 4-25",
        caption: "达特茅斯会议举办地。",
        placeholder: "插图占位",
      },
      {
        label: "图 4-26",
        caption: "达特茅斯会议部分参与者。",
        placeholder: "插图占位",
      },
    ],
    conferenceDemo: {
      title: "讨论议题",
      goal: "了解会议讨论的核心问题。",
      topics: [
        {
          key: "language",
          title: "语言",
          detail: "如何让计算机理解与使用语言。",
        },
        {
          key: "networks",
          title: "神经网络",
          detail: "如何用神经网络表示概念。",
        },
        {
          key: "complexity",
          title: "复杂度",
          detail: "如何定义计算复杂度。",
        },
        {
          key: "self",
          title: "自我改进",
          detail: "如何让机器不断进步。",
        },
        {
          key: "abstraction",
          title: "抽象表示",
          detail: "如何抽象描述对象。",
        },
        {
          key: "creativity",
          title: "创造性",
          detail: "如何引入随机与创造。",
        },
      ],
    },
    conferenceSteps: [
      "选择一个议题。",
      "说明当时为什么难。",
      "联系今天的 AI。",
    ],
    conferenceCheckpoint: {
      prompt: "下列哪项是达特茅斯会议讨论内容？",
      options: [
        {
          label: "让计算机理解语言。",
          correct: true,
          explanation: "语言理解是重要议题。",
        },
        {
          label: "如何制造智能手机。",
          correct: false,
          explanation: "那时还没有智能手机。",
        },
        {
          label: "社交媒体营销策略。",
          correct: false,
          explanation: "与早期 AI 研究无关。",
        },
      ],
    },
    influenceTitle: "3. 达特茅斯会议的影响",
    influenceEyebrow: "AI 诞生",
    influenceConceptTitle: "概念卡片",
    influenceConceptLines: [
      "会议标志着 AI 作为学科的诞生。",
      "激发了年轻研究者的热情。",
      "许多成果可以追溯到这次会议。",
    ],
    influenceParas: [
      "会议后研究方向更清晰，麦卡锡发明 LISP，塞缪尔发展机器学习，自利奇研究机器感知。",
      "因此，达特茅斯会议被视为 AI 学科的起点。",
    ],
    influenceDemo: {
      title: "持续影响",
      goal: "了解会议带来的后续成果。",
      impacts: [
        {
          key: "lisp",
          title: "LISP",
          detail: "麦卡锡开发的经典 AI 编程语言。",
        },
        {
          key: "ml",
          title: "机器学习",
          detail: "塞缪尔提出术语并开发学习系统。",
        },
        {
          key: "perception",
          title: "机器感知",
          detail: "自利奇提出机器感知理论。",
        },
      ],
    },
    influenceSteps: [
      "选择一个影响方向。",
      "说明它的成果。",
      "解释会议为何重要。",
    ],
    influenceCheckpoint: {
      prompt: "达特茅斯会议为何具有里程碑意义？",
      options: [
        {
          label: "它正式确立了人工智能学科。",
          correct: true,
          explanation: "会议首次使用 AI 术语并形成研究方向。",
        },
        {
          label: "它发明了智能手机。",
          correct: false,
          explanation: "智能手机出现得更晚。",
        },
        {
          label: "它终结了所有争论。",
          correct: false,
          explanation: "会议开启了新的研究之路。",
        },
      ],
    },
    summaryTitle: "要点回顾",
    summaryEyebrow: "总结",
    summaryPoints: [
      "1956 年达特茅斯会议正式提出 AI 概念。",
      "研究者讨论语言、神经网络、自我改进等问题。",
      "会议引发热潮并推动后续突破。",
      "年轻学者的热情开启了新学科。",
    ],
  },
};
