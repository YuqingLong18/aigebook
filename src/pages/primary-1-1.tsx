import { useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";

type LessonProps = {
  lang: "en" | "zh";
};

export function PrimaryLesson1_1({ lang }: LessonProps) {
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
    { id: "story", label: t.storyTitle },
    { id: "craftsmen", label: t.craftsmenTitle },
    { id: "think", label: t.thinkTitle },
    { id: "knowledge", label: t.knowledgeTitle },
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
          {t.introParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <InfoCard title={t.keyIdeaTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.keyIdeaLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
        </SectionBlock>

        <SectionBlock id="story" title={t.storyTitle} eyebrow={t.storyEyebrow}>
          <InfoCard title={t.storyConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.storyConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.storyParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <PuppetRevealDemo
            lang={lang}
            resetLabel={ui.reset}
            title={t.puppetDemo.title}
            goal={t.puppetDemo.goal}
            stages={t.puppetDemo.stages}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.storySteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.storyCheckpoint.prompt}
            options={t.storyCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="craftsmen" title={t.craftsmenTitle} eyebrow={t.craftsmenEyebrow}>
          <InfoCard title={t.craftsmenConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.craftsmenConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          <p className="text-sm leading-relaxed text-slate-700">{t.craftsmenIntro}</p>
          <CraftsmenSpotlightDemo
            lang={lang}
            resetLabel={ui.reset}
            title={t.craftsmenDemo.title}
            goal={t.craftsmenDemo.goal}
            profiles={t.craftsmenDemo.profiles}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.craftsmenSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.craftsmenCheckpoint.prompt}
            options={t.craftsmenCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="think" title={t.thinkTitle} eyebrow={t.thinkEyebrow}>
          {t.thinkParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <GuidedSteps title={ui.guidedTitle} steps={t.thinkSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.thinkCheckpoint.prompt}
            options={t.thinkCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="knowledge" title={t.knowledgeTitle} eyebrow={t.knowledgeEyebrow}>
          <InfoCard title={t.knowledgeCardTitle}>
            {t.knowledgeParas.map((para) => (
              <p key={para}>{para}</p>
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

type PuppetStage = {
  key: string;
  label: string;
  outcome: string;
};

function PuppetRevealDemo({
  lang,
  title,
  goal,
  stages,
  resetLabel,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  stages: PuppetStage[];
  resetLabel: string;
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(stages[0]?.key ?? "");
  const current = stages.find((stage) => stage.key === active) ?? stages[0];

  const reset = () => setActive(stages[0]?.key ?? "");

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

      <div className="mt-3 flex flex-wrap gap-2">
        {stages.map((stage) => (
          <button
            key={stage.key}
            type="button"
            onClick={() => setActive(stage.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              stage.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {stage.label}
          </button>
        ))}
      </div>

      <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {isZh ? "观察结果" : "Outcome"}
        </p>
        <p className="mt-1 text-sm text-slate-700">{current?.outcome}</p>
      </div>
    </div>
  );
}

type CraftsmanProfile = {
  key: string;
  name: string;
  invention: string;
  lesson: string;
};

function CraftsmenSpotlightDemo({
  lang,
  title,
  goal,
  profiles,
  resetLabel,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  profiles: CraftsmanProfile[];
  resetLabel: string;
}) {
  const isZh = lang === "zh";
  const [pick, setPick] = useState(profiles[0]?.key ?? "");
  const current = profiles.find((profile) => profile.key === pick) ?? profiles[0];

  const reset = () => setPick(profiles[0]?.key ?? "");

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

      <div className="mt-3 flex flex-wrap gap-2">
        {profiles.map((profile) => (
          <button
            key={profile.key}
            type="button"
            onClick={() => setPick(profile.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              profile.key === pick
                ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {profile.name}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "代表作品" : "Signature Work"}
          </p>
          <p className="mt-1 text-sm text-slate-700">{current.invention}</p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            {isZh ? "启发" : "Lesson"}
          </p>
          <p className="mt-1 text-sm text-slate-700">{current.lesson}</p>
        </div>
      )}
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Learn the story of Yan Shi, who built a human-like puppet and showed an ancient Chinese dream of intelligent machines.",
      "Appreciate the hardworking, practical spirit of ancient Chinese craftsmen.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introParas: [
      "Creating intelligent machines that can listen and speak has been a human dream for thousands of years. In China, stories of intelligent machines date back more than 2,000 years to the Spring and Autumn period, when productivity grew quickly and many schools of thought flourished.",
      "Inventors like Gongshu Ban (Lu Ban) and Mo Di built clever devices. Their inventions became legends that inspired later generations. This lesson tells the legend of Yan Shi and his human-like puppet.",
    ],
    keyIdeaTitle: "Key Idea",
    keyIdeaLines: [
      "Legends show a long longing for human-like machines.",
      "Clever mechanisms are impressive but still human-made.",
      "Imagination inspires invention, and hard work makes it real.",
    ],
    storyTitle: "1. Yan Shi Creates a Puppet",
    storyEyebrow: "Legend",
    storyConceptTitle: "Concept Card",
    storyConceptLines: [
      "Yan Shi presented a puppet that looked and moved like a real person.",
      "The king doubted the puppet was real after a startling moment.",
      "Taking it apart revealed materials, proving it was a machine.",
    ],
    storyParas: [
      "In the book Liezi: Questions of Tang, a skilled craftsman named Yan Shi presented a puppet that could sing and dance to King Mu of Zhou. The puppet almost cost him his life.",
      "King Mu loved travel and met Yan Shi on his way back from the Kunlun Mountains. Yan Shi said he could make anything, and promised a marvelous creation. The next day, he brought a handsome young man to court and explained, “This is not a real person. It is a puppet I made that can sing and dance.”",
      "The king walked around the puppet, but could not find any difference between it and a real person. The puppet then sang and danced so naturally that the king invited everyone to watch.",
      "Suddenly, the puppet winked at the king’s concubines. The king became furious and thought Yan Shi was tricking him with a real person.",
      "Yan Shi took the puppet apart on the spot. The king saw leather, wood, glue, and paint, as well as lifelike but artificial organs. When Yan Shi reassembled it, the puppet performed again. The king finally believed him and praised his craftsmanship.",
    ],
    puppetDemo: {
      title: "Look Inside the Puppet",
      goal: "See why the king believed the puppet was real and what proved it was a machine.",
      stages: [
        {
          key: "outside",
          label: "Outer appearance",
          outcome: "The puppet looked like a real young man, with lifelike skin, hair, and movement.",
        },
        {
          key: "materials",
          label: "Inside materials",
          outcome: "Yan Shi showed leather, wood, glue, and paint—clear signs it was made by hand.",
        },
        {
          key: "organs",
          label: "Artificial organs",
          outcome: "The puppet even had artificial organs and bones that imitated a real body.",
        },
      ],
    },
    storySteps: [
      "Find the moment the king became suspicious.",
      "Look for the proof Yan Shi showed.",
      "Connect the story to the dream of intelligent machines.",
    ],
    storyCheckpoint: {
      prompt: "What convinced King Mu that the puppet was not a real person?",
      options: [
        {
          label: "He saw leather, wood, glue, and paint inside it.",
          correct: true,
          explanation: "The materials showed it was a man-made machine.",
        },
        {
          label: "The puppet stopped singing forever.",
          correct: false,
          explanation: "It performed again after being reassembled.",
        },
        {
          label: "Yan Shi ran away from the court.",
          correct: false,
          explanation: "He stayed and proved the truth by taking it apart.",
        },
      ],
    },
    craftsmenTitle: "2. Master Craftsmen and Humility",
    craftsmenEyebrow: "Craftsman spirit",
    craftsmenConceptTitle: "Concept Card",
    craftsmenConceptLines: [
      "The legend spread to other inventors like Lu Ban and Mo Di.",
      "They admired Yan Shi’s skill and became more humble.",
      "Ancient society respected skilled, practical workmanship.",
    ],
    craftsmenIntro:
      "The story of Yan Shi spread to other master craftsmen. Gongshu Ban (Lu Ban) was known for inventions like the saw, ink marker, and carpenter’s square. Mo Di was famous for creating a wooden bird that could fly for a day. After hearing about Yan Shi’s puppet, they grew humble and stopped boasting about their skills.",
    craftsmenDemo: {
      title: "Meet the Master Craftsmen",
      goal: "Compare what each craftsman built and the lesson their stories teach.",
      profiles: [
        {
          key: "yan",
          name: "Yan Shi",
          invention: "A human-like puppet that could sing and dance.",
          lesson: "Skill and patience can make the unbelievable feel real.",
        },
        {
          key: "lu",
          name: "Lu Ban",
          invention: "Saws, ink markers, carpenter squares, and ingenious tools.",
          lesson: "Careful tools help people build and solve problems.",
        },
        {
          key: "mo",
          name: "Mo Di",
          invention: "A wooden bird that could fly for an entire day.",
          lesson: "Imagination paired with craftsmanship creates new possibilities.",
        },
      ],
    },
    craftsmenSteps: [
      "Pick a craftsman and read the invention.",
      "Notice what problem or dream it solves.",
      "Compare how their skills reflect humility and respect.",
    ],
    craftsmenCheckpoint: {
      prompt: "What did Lu Ban and Mo Di learn from Yan Shi’s puppet?",
      options: [
        {
          label: "They became more humble and respected his craftsmanship.",
          correct: true,
          explanation: "The legend says they stopped boasting after hearing it.",
        },
        {
          label: "They decided to keep all inventions secret.",
          correct: false,
          explanation: "The story focuses on humility, not secrecy.",
        },
        {
          label: "They believed machines should never be built.",
          correct: false,
          explanation: "They were inventors who admired skillful work.",
        },
      ],
    },
    thinkTitle: "Think About It",
    thinkEyebrow: "Reflection",
    thinkParas: [
      "Some people believe ancient inventors might have built intelligent machines that were lost to history. It is possible, but in ancient times there were no modern materials, production techniques, or computers.",
      "Even today, we still cannot make robots that are exactly like humans. Technology takes time and effort to develop, not imagination and luck alone. Ancient people used mechanical principles and simple automation to invent amazing devices. We can learn from their spirit: be practical, start small, and work hard.",
    ],
    thinkSteps: [
      "List the tools ancient craftsmen did have.",
      "Name one thing modern technology adds.",
      "Explain why patience and effort matter for inventions.",
    ],
    thinkCheckpoint: {
      prompt: "Why was it extremely difficult to build a human-like puppet in ancient times?",
      options: [
        {
          label: "There were no modern materials, techniques, or computers.",
          correct: true,
          explanation: "The tools and materials were limited.",
        },
        {
          label: "People refused to try any inventions.",
          correct: false,
          explanation: "Inventors were active and creative.",
        },
        {
          label: "Ancient people already had perfect robots.",
          correct: false,
          explanation: "The text explains that even today we cannot make perfect human-like robots.",
        },
      ],
    },
    knowledgeTitle: "Knowledge Corner",
    knowledgeEyebrow: "Background",
    knowledgeCardTitle: "Liezi and the Classic Stories",
    knowledgeParas: [
      "Liezi (Lie Yu Kou) was a philosopher who lived around 2,400 years ago during the Warring States period.",
      "He lived in the State of Zheng near today’s Zhengzhou, Henan, and was a major figure of Daoist thought as well as a respected writer and teacher.",
      "The book Liezi contains 134 stories, fables, and myths. “Yan Shi Creates a Puppet” is one of the most famous tales.",
    ],
    summaryTitle: "Summary",
    summaryEyebrow: "Key Takeaways",
    summaryPoints: [
      "The legend of Yan Shi shows an early dream of intelligent machines.",
      "Careful craftsmanship and practical skill earned deep respect.",
      "Technology grows through time, effort, and shared learning.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解偃师制作机关人的故事，理解它反映了古代中国人制造智能机器的梦想。",
      "体会古代工匠勤劳务实的精神。",
    ],
    introTitle: "故事开头",
    introEyebrow: "课程导入",
    introParas: [
      "让机器能听会说，是人类几千年的梦想。在中国，关于智能机器的故事可以追溯到两千多年前的春秋时期。当时生产力提高，诸子百家兴起。",
      "鲁班、墨子等发明家制造了许多巧妙器物，他们的故事流传为传奇，激励了后来的发明者。本课讲偃师制作机关人的传说。",
    ],
    keyIdeaTitle: "关键信息",
    keyIdeaLines: [
      "传说反映了对“像人一样的机器”的渴望。",
      "机关很巧妙，但仍是人造的装置。",
      "想象激发发明，务实让技术走得更远。",
    ],
    storyTitle: "1. 偃师造人",
    storyEyebrow: "传说故事",
    storyConceptTitle: "概念卡片",
    storyConceptLines: [
      "偃师献上了会唱会舞、外形逼真的机关人。",
      "国王一度怀疑是活人假扮。",
      "拆开后看到材料与器官结构，证明是机关。",
    ],
    storyParas: [
      "《列子·汤问》中有许多故事，其中一个讲手艺高超的偃师献给周穆王会唱会舞的机关人，却差点因此丢了性命。",
      "周穆王喜爱游历，回昆仑山途中遇到偃师。偃师说他手艺高超，能做许多奇物，并承诺献上一件“绝妙之物”。第二天，他带来一位俊美青年并说：“这不是活人，而是我做的机关人。”",
      "国王围着机关人观看，却找不出与真人的差别。机关人开始表演，唱歌跳舞十分自然，国王邀请大臣和宫女一起观看。",
      "忽然机关人向王妃眨眼示意。国王大怒，以为偃师用真人欺骗自己。",
      "偃师当场拆开机关人，地上散落的是皮革、木头、胶和漆。国王还看到了逼真的“心肝肺肾”等器官。偃师重新组装后，机关人又能表演，国王这才相信并大加赞赏。",
    ],
    puppetDemo: {
      title: "看看机关人的内部",
      goal: "观察外表与内部材料，理解国王为何相信这是机关。",
      stages: [
        {
          key: "outside",
          label: "外表",
          outcome: "机关人外形与动作像真人，几乎难以分辨。",
        },
        {
          key: "materials",
          label: "材料",
          outcome: "拆开后看到皮革、木头、胶和漆，证明是人造的。",
        },
        {
          key: "organs",
          label: "器官结构",
          outcome: "内部还有逼真的“器官”和骨骼，模仿人的身体。",
        },
      ],
    },
    storySteps: ["找出国王起疑的时刻。", "找到偃师证明的方法。", "联系“智能机器梦想”的主题。"],
    storyCheckpoint: {
      prompt: "什么让周穆王相信机关人不是活人？",
      options: [
        {
          label: "他看到内部的皮革、木头、胶和漆。",
          correct: true,
          explanation: "这些材料说明它是人工制作的。",
        },
        {
          label: "机关人永远停止了表演。",
          correct: false,
          explanation: "它重新组装后还能继续表演。",
        },
        {
          label: "偃师逃离了王宫。",
          correct: false,
          explanation: "他留下并当场拆开机关人证明。",
        },
      ],
    },
    craftsmenTitle: "2. 工匠的荣耀与谦逊",
    craftsmenEyebrow: "匠人精神",
    craftsmenConceptTitle: "概念卡片",
    craftsmenConceptLines: [
      "传说传到鲁班与墨子等名匠。",
      "他们敬佩偃师的技艺，变得更加谦逊。",
      "社会尊重勤劳务实的手艺人。",
    ],
    craftsmenIntro:
      "偃师的故事传开后，鲁班与墨子等名匠也听说了。鲁班被称为中国木匠之祖，据说发明了锯子、墨斗、曲尺等工具。墨子以制作木鸟能飞一天而著名。听闻偃师的机关人后，他们更加谦逊，不再夸耀自己的聪明。",
    craftsmenDemo: {
      title: "认识三位巧匠",
      goal: "比较他们的作品与带来的启发。",
      profiles: [
        {
          key: "yan",
          name: "偃师",
          invention: "会唱会舞、外形逼真的机关人。",
          lesson: "技艺与耐心让“不可思议”变得可见。",
        },
        {
          key: "lu",
          name: "鲁班",
          invention: "锯子、墨斗、曲尺等巧妙工具。",
          lesson: "实用工具帮助人们建造与解决问题。",
        },
        {
          key: "mo",
          name: "墨子",
          invention: "能飞一天的木鸟。",
          lesson: "想象与工艺结合会带来新可能。",
        },
      ],
    },
    craftsmenSteps: ["选择一位工匠，阅读他的作品。", "想想它解决了什么问题。", "比较他们的谦逊与敬业。"],
    craftsmenCheckpoint: {
      prompt: "鲁班和墨子从偃师的故事中得到了什么启示？",
      options: [
        {
          label: "他们更加谦逊，并敬佩偃师的技艺。",
          correct: true,
          explanation: "故事说他们不再夸耀自己的聪明。",
        },
        {
          label: "他们决定把所有发明都保密。",
          correct: false,
          explanation: "传说强调的是谦逊，而不是保密。",
        },
        {
          label: "他们认为机器不应被制造。",
          correct: false,
          explanation: "他们都是发明家，尊重巧技。",
        },
      ],
    },
    thinkTitle: "想一想",
    thinkEyebrow: "思考",
    thinkParas: [
      "有人说古人可能真的制造过智能机器，只是失传了。虽然可能，但古代没有现代材料、生产技术和计算机，要做出这样的机关人非常困难。",
      "即使在今天，我们也无法制造与真人完全一样的机器人。技术需要时间和努力，而不是只靠想象和运气。古人用机械原理与简单自动化创造了惊人的装置，我们要学习他们务实、肯干的工匠精神：从小事做起，踏实努力。",
    ],
    thinkSteps: ["列出古代工匠已有的工具。", "说出一种现代技术带来的变化。", "解释为什么耐心与努力很重要。"],
    thinkCheckpoint: {
      prompt: "古代制造“像真人一样的机关人”为何很难？",
      options: [
        {
          label: "缺少现代材料、技术和计算机。",
          correct: true,
          explanation: "工具与条件有限。",
        },
        {
          label: "古人不愿意尝试任何发明。",
          correct: false,
          explanation: "古代发明非常活跃。",
        },
        {
          label: "古人已经有完美机器人。",
          correct: false,
          explanation: "连今天都做不到完全一样的机器人。",
        },
      ],
    },
    knowledgeTitle: "知识角",
    knowledgeEyebrow: "背景补充",
    knowledgeCardTitle: "《列子》与故事",
    knowledgeParas: [
      "列子，名列御寇，约生活在两千四百年前的战国时期。",
      "他生活在郑国（今河南郑州一带），是道家重要人物，也是著名哲学家与教育家。",
      "《列子》收录了 134 则故事、寓言和神话，“偃师造人”是其中著名的篇章。",
    ],
    summaryTitle: "小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "偃师的传说反映了人类早期的智能机器梦想。",
      "匠人精神与务实态度受到社会尊重。",
      "技术进步来自长期努力与积累。",
    ],
  },
};
