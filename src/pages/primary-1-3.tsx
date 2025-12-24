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

export function PrimaryLesson1_3({ lang }: LessonProps) {
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
    { id: "walle", label: t.walleTitle },
    { id: "baymax", label: t.baymaxTitle },
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

        <SectionBlock id="walle" title={t.walleTitle} eyebrow={t.walleEyebrow}>
          <InfoCard title={t.walleConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.walleConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.walleParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.walleFigure.label}
            caption={t.walleFigure.caption}
            placeholder={t.walleFigure.placeholder}
          />
          <CooperationMeterDemo
            lang={lang}
            title={t.walleDemo.title}
            goal={t.walleDemo.goal}
            resetLabel={ui.reset}
            options={t.walleDemo.options}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.walleSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.walleCheckpoint.prompt}
            options={t.walleCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="baymax" title={t.baymaxTitle} eyebrow={t.baymaxEyebrow}>
          <InfoCard title={t.baymaxConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.baymaxConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.baymaxParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <FigureCard
            label={t.baymaxFigure.label}
            caption={t.baymaxFigure.caption}
            placeholder={t.baymaxFigure.placeholder}
          />
          <CareProtocolDemo
            lang={lang}
            title={t.baymaxDemo.title}
            goal={t.baymaxDemo.goal}
            resetLabel={ui.reset}
            actions={t.baymaxDemo.actions}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.baymaxSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.baymaxCheckpoint.prompt}
            options={t.baymaxCheckpoint.options}
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
          <InfoCard title={t.lawsTitle}>
            <ol className="list-decimal space-y-1 pl-5 text-sm text-slate-700">
              {t.laws.map((law) => (
                <li key={law}>{law}</li>
              ))}
            </ol>
          </InfoCard>
          <InfoCard title={t.foodPromptTitle}>
            <p>{t.foodPrompt}</p>
          </InfoCard>
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.lawsCheckpoint.prompt}
            options={t.lawsCheckpoint.options}
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

type CooperationOption = {
  key: string;
  label: string;
  outcome: string;
  score: number;
};

function CooperationMeterDemo({
  lang,
  title,
  goal,
  options,
  resetLabel,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  options: CooperationOption[];
  resetLabel: string;
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(options[0]?.key ?? "");
  const current = options.find((option) => option.key === active) ?? options[0];

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
          onClick={() => setActive(options[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option.key}
            type="button"
            onClick={() => setActive(option.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              option.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {isZh ? "地球恢复进度" : "Earth Recovery"}
        </p>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-white">
          <div className="h-full rounded-full bg-emerald-500" style={{ width: `${current.score}%` }} />
        </div>
        <p className="mt-2 text-sm text-slate-700">{current.outcome}</p>
      </div>
    </div>
  );
}

type CareAction = {
  key: string;
  label: string;
  outcome: string;
};

function CareProtocolDemo({
  lang,
  title,
  goal,
  actions,
  resetLabel,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  actions: CareAction[];
  resetLabel: string;
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(actions[0]?.key ?? "");
  const current = actions.find((action) => action.key === active) ?? actions[0];

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
          onClick={() => setActive(actions[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        {actions.map((action) => (
          <button
            key={action.key}
            type="button"
            onClick={() => setActive(action.key)}
            className={[
              "rounded-xl border px-3 py-2 text-left text-xs font-semibold transition",
              action.key === active
                ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {action.label}
          </button>
        ))}
      </div>

      <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {isZh ? "贝麦斯的目标" : "Baymax’s Purpose"}
        </p>
        <p className="mt-1 text-sm text-slate-700">{current.outcome}</p>
      </div>
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Learn about AI figures in movies and explore people’s hopes for human-like robots.",
      "Recognize the importance of living in harmony with artificial intelligence.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "Many of us imagine a smart robot friend who keeps us company and helps us in trouble. Movies often show robots like this. Let’s meet two famous robot stars: WALL·E and Baymax.",
    walleTitle: "1. The Brave and Clever Robot: WALL·E",
    walleEyebrow: "Movie story",
    walleConceptTitle: "Concept Card",
    walleConceptLines: [
      "WALL·E cleans a trash-covered Earth for hundreds of years.",
      "He protects a small plant—the first sign of life in a long time.",
      "Humans and robots succeed by working together.",
    ],
    walleParas: [
      "In the movie WALL·E, Earth is buried in trash and humans live in space. Most cleanup robots stop working, but one robot, WALL·E, keeps going alone.",
      "WALL·E collects objects as memories and discovers a tiny plant, the first sign that Earth can recover. He protects it carefully.",
      "Robot EVE arrives to search for life. She brings the plant to the spaceship, but the ship’s autopilot tries to keep humans from returning. WALL·E and EVE join forces with the captain to bring everyone back to Earth.",
      "The story shows humans and robots rebuilding a better home together. WALL·E develops his own choices and emotions, not just simple instructions.",
    ],
    walleFigure: {
      label: "Figure 1-4",
      caption: "The robot WALL·E.",
      placeholder: "Illustration placeholder",
    },
    walleDemo: {
      title: "Teamwork Meter",
      goal: "See how cooperation helps Earth recover.",
      options: [
        {
          key: "solo-walle",
          label: "WALL·E alone",
          outcome: "He works hard, but one robot cannot restore Earth alone.",
          score: 35,
        },
        {
          key: "solo-eve",
          label: "EVE alone",
          outcome: "She can detect life, but needs teamwork to change the plan.",
          score: 40,
        },
        {
          key: "humans",
          label: "Humans alone",
          outcome: "Humans need help to return and rebuild safely.",
          score: 45,
        },
        {
          key: "together",
          label: "Together",
          outcome: "Humans and robots cooperate and Earth begins to recover.",
          score: 95,
        },
      ],
    },
    walleSteps: [
      "Choose a team on the meter.",
      "Read how the outcome changes.",
      "Explain why teamwork matters in the story.",
    ],
    walleCheckpoint: {
      prompt: "What does WALL·E’s story show?",
      options: [
        {
          label: "Humans and robots can work together to rebuild Earth.",
          correct: true,
          explanation: "Cooperation is the key message.",
        },
        {
          label: "Robots should never help humans.",
          correct: false,
          explanation: "The story highlights helpful robots.",
        },
        {
          label: "Humans must leave Earth forever.",
          correct: false,
          explanation: "They return and rebuild with robots.",
        },
      ],
    },
    baymaxTitle: "2. The Kind and Gentle Robot: Baymax",
    baymaxEyebrow: "Movie story",
    baymaxConceptTitle: "Concept Card",
    baymaxConceptLines: [
      "Baymax is a healthcare robot designed to help people.",
      "He supports Hiro through grief and danger.",
      "His purpose is to heal, not to harm.",
    ],
    baymaxParas: [
      "Baymax from Big Hero 6 is a soft, round medical robot with great healthcare skills and a caring heart.",
      "Hiro’s older brother dies in a fire, and Baymax becomes his support. Later, Hiro discovers a plot to destroy the city and forms a team with Baymax and friends.",
      "Hiro upgrades Baymax for battle, but Baymax never forgets his true purpose: to heal. He even sacrifices himself to save Hiro, and later returns in a new body.",
    ],
    baymaxFigure: {
      label: "Figure 1-5",
      caption: "The robot Baymax.",
      placeholder: "Illustration placeholder",
    },
    baymaxDemo: {
      title: "Care Protocol",
      goal: "Match Baymax’s actions to his mission.",
      actions: [
        {
          key: "heal",
          label: "Provide care and healing",
          outcome: "This matches Baymax’s core mission to keep people safe.",
        },
        {
          key: "fight",
          label: "Fight with maximum force",
          outcome: "Baymax was upgraded, but he still prioritizes care.",
        },
        {
          key: "ignore",
          label: "Ignore a person in need",
          outcome: "Baymax is designed to help, not to ignore.",
        },
      ],
    },
    baymaxSteps: ["Pick an action to see Baymax’s response.", "Compare actions to his purpose.", "Summarize Baymax’s main goal."],
    baymaxCheckpoint: {
      prompt: "What is Baymax’s main purpose?",
      options: [
        {
          label: "To heal and care for people.",
          correct: true,
          explanation: "He is a healthcare assistant at heart.",
        },
        {
          label: "To destroy everything in his path.",
          correct: false,
          explanation: "He is gentle and protective.",
        },
        {
          label: "To collect garbage like WALL·E.",
          correct: false,
          explanation: "That is WALL·E’s job, not Baymax’s.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Safety and rules",
    foodParas: [
      "WALL·E and Baymax show beautiful dreams of friendly intelligent machines. Movies suggest robots may one day have their own emotions and ideas.",
      "If robots become too independent, they might create risks. People have long thought about how to prevent harm.",
      "In 1942, Isaac Asimov proposed the “Three Laws of Robotics” to keep robots safe for humans.",
    ],
    lawsTitle: "Three Laws of Robotics",
    laws: [
      "A robot may not harm a human being or, through inaction, allow a human being to come to harm.",
      "A robot must obey human orders unless they conflict with the First Law.",
      "A robot must protect its own existence as long as it does not conflict with the First or Second Law.",
    ],
    foodPromptTitle: "Think about this",
    foodPrompt:
      "Is it reasonable to limit the development of robots to prevent them from harming humans?",
    lawsCheckpoint: {
      prompt: "Which rule comes first in Asimov’s Three Laws?",
      options: [
        {
          label: "A robot may not harm a human being.",
          correct: true,
          explanation: "The First Law puts human safety above all else.",
        },
        {
          label: "A robot must obey all orders without exception.",
          correct: false,
          explanation: "Orders cannot break the First Law.",
        },
        {
          label: "A robot must always protect itself.",
          correct: false,
          explanation: "Self-protection is the Third Law.",
        },
      ],
    },
    summaryTitle: "Summary",
    summaryEyebrow: "Key Takeaways",
    summaryPoints: [
      "Movie robots reflect hopes for friendly, helpful AI.",
      "WALL·E and Baymax show teamwork and care.",
      "Safety rules like the Three Laws highlight responsibility.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解电影中的 AI 形象，体会人们对类人机器人的希望。",
      "认识与人工智能和谐相处的重要性。",
    ],
    introTitle: "故事开头",
    introEyebrow: "课程导入",
    introText:
      "很多人都想要一个聪明的机器人朋友，能陪伴我们、在遇到困难时帮助我们。电影里也出现了这样的机器人。让我们认识两位明星：瓦力和贝麦斯。",
    walleTitle: "1. 勇敢聪明的机器人：瓦力",
    walleEyebrow: "电影故事",
    walleConceptTitle: "概念卡片",
    walleConceptLines: [
      "瓦力独自在被垃圾覆盖的地球工作了很久。",
      "他保护着一株小植物，这是地球恢复生机的希望。",
      "人类与机器人合作，才让地球重生。",
    ],
    walleParas: [
      "《瓦力》中，地球被垃圾掩埋，人类搬到太空生活。大多数清理机器人早已停工，只有瓦力坚持工作。",
      "瓦力收集人类留下的物品，并发现一株小植物，证明地球可能恢复。他小心守护这株植物。",
      "机器人伊娃来到地球寻找生命，带走植物返回飞船，但自动驾驶系统阻止人类返回。瓦力与伊娃与船长合作，最终带人类回到地球。",
      "故事展现了人类与机器人一起重建家园。瓦力不只是执行指令，还发展出选择和情感。",
    ],
    walleFigure: {
      label: "图 1-4",
      caption: "机器人瓦力。",
      placeholder: "插图占位",
    },
    walleDemo: {
      title: "合作能量条",
      goal: "观察合作如何帮助地球恢复。",
      options: [
        {
          key: "solo-walle",
          label: "瓦力独自",
          outcome: "他很努力，但一个机器人无法独自恢复地球。",
          score: 35,
        },
        {
          key: "solo-eve",
          label: "伊娃独自",
          outcome: "她能发现生命，但需要团队改变计划。",
          score: 40,
        },
        {
          key: "humans",
          label: "人类独自",
          outcome: "人类需要机器帮助才能返回并重建。",
          score: 45,
        },
        {
          key: "together",
          label: "一起合作",
          outcome: "人类与机器人协作，地球逐步复苏。",
          score: 95,
        },
      ],
    },
    walleSteps: ["选择一个团队组合。", "观察结果如何变化。", "说说合作为什么重要。"],
    walleCheckpoint: {
      prompt: "瓦力的故事告诉我们什么？",
      options: [
        {
          label: "人类与机器人可以合作重建地球。",
          correct: true,
          explanation: "合作是故事的核心。",
        },
        {
          label: "机器人不应该帮助人类。",
          correct: false,
          explanation: "电影强调机器人是人类伙伴。",
        },
        {
          label: "人类要永远离开地球。",
          correct: false,
          explanation: "故事结局是回到地球重建。",
        },
      ],
    },
    baymaxTitle: "2. 温柔善良的机器人：贝麦斯",
    baymaxEyebrow: "电影故事",
    baymaxConceptTitle: "概念卡片",
    baymaxConceptLines: [
      "贝麦斯是医疗护理机器人。",
      "他在悲伤时陪伴并支持小宏。",
      "他的使命是治疗而非伤害。",
    ],
    baymaxParas: [
      "《超能陆战队》中的贝麦斯是柔软圆润的医疗机器人，具备高超的医护技能与温暖的心。",
      "小宏的哥哥在火灾中去世，贝麦斯成了他的支持。后来，小宏发现阴谋，与贝麦斯组队阻止灾难。",
      "小宏升级贝麦斯的战斗力，但贝麦斯始终记得自己的使命：帮助与治疗。他还为救小宏牺牲，最终在新身体里重生。",
    ],
    baymaxFigure: {
      label: "图 1-5",
      caption: "机器人贝麦斯。",
      placeholder: "插图占位",
    },
    baymaxDemo: {
      title: "护理协议",
      goal: "把行为与贝麦斯的使命对应起来。",
      actions: [
        {
          key: "heal",
          label: "帮助并治疗他人",
          outcome: "这符合贝麦斯的核心使命：守护与治疗。",
        },
        {
          key: "fight",
          label: "全力作战",
          outcome: "即使被升级，他仍以护理为先。",
        },
        {
          key: "ignore",
          label: "无视需要帮助的人",
          outcome: "贝麦斯被设计成帮助他人，而不是忽视。",
        },
      ],
    },
    baymaxSteps: ["选择一个行为，查看回应。", "比较行为与使命是否一致。", "总结贝麦斯的目标。"],
    baymaxCheckpoint: {
      prompt: "贝麦斯最重要的目的是什么？",
      options: [
        {
          label: "帮助和治疗人类。",
          correct: true,
          explanation: "他是医疗护理机器人。",
        },
        {
          label: "无差别地战斗。",
          correct: false,
          explanation: "他温柔且以守护为主。",
        },
        {
          label: "像瓦力一样清理垃圾。",
          correct: false,
          explanation: "那是瓦力的工作。",
        },
      ],
    },
    foodTitle: "思考食粮",
    foodEyebrow: "安全与规则",
    foodParas: [
      "瓦力和贝麦斯体现了人们对友好智能机器的美好愿望。电影暗示机器人可能拥有情感与想法。",
      "如果机器人过于独立，可能带来风险。人们一直在思考如何防止伤害。",
      "1942 年，科幻作家阿西莫夫提出了“机器人三定律”。",
    ],
    lawsTitle: "机器人三定律",
    laws: [
      "机器人不得伤害人类，或因不作为使人类受到伤害。",
      "机器人必须服从人类的命令，除非该命令与第一定律冲突。",
      "机器人应保护自身存在，除非这与第一或第二定律冲突。",
    ],
    foodPromptTitle: "想一想",
    foodPrompt: "为了防止伤害，人类是否应当限制机器人的发展？",
    lawsCheckpoint: {
      prompt: "阿西莫夫三定律中排在第一的规则是什么？",
      options: [
        {
          label: "机器人不得伤害人类。",
          correct: true,
          explanation: "人类安全优先。",
        },
        {
          label: "机器人必须无条件服从命令。",
          correct: false,
          explanation: "服从不能违背第一定律。",
        },
        {
          label: "机器人必须保护自身。",
          correct: false,
          explanation: "那是第三定律。",
        },
      ],
    },
    summaryTitle: "小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "电影机器人体现了人们对友善 AI 的期待。",
      "瓦力与贝麦斯都强调合作与关怀。",
      "安全规则提醒我们要负责任地发展智能机器。",
    ],
  },
};
