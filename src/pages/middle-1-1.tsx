import { useMemo, useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson1_1({ lang }: LessonProps) {
  const isZh = lang === "zh";
  const ui = {
    reset: isZh ? "重置" : "Reset",
    checkpointTag: isZh ? "检查点" : "Checkpoint",
    correctLabel: isZh ? "正确" : "Correct",
    incorrectLabel: isZh ? "再试一次" : "Try again",
    guidedTitle: isZh ? "引导步骤" : "Guided Steps",
  };

  const t = content[lang];
  const toc = [
    { id: "learning-objectives", label: t.learningObjectivesTitle },
    { id: "intro", label: t.introTitle },
    { id: "legends", label: t.legendsTitle },
    { id: "automation", label: t.automationTitle },
    { id: "movies", label: t.moviesTitle },
    { id: "reality", label: t.realityTitle },
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
          <p className="text-sm leading-relaxed text-slate-700">{t.intro}</p>
          <InfoCard title={t.keyIdeaTitle}>
            <p className="text-sm text-slate-700">{t.keyIdea}</p>
          </InfoCard>
        </SectionBlock>

        <SectionBlock id="legends" title={t.legendsTitle} eyebrow={t.legendsEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.legendsIntro}</p>
          <LegendExplorer lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.legendsSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.legendsCheckpoint.prompt}
            options={t.legendsCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="automation" title={t.automationTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.automationIntro}</p>
          <AutomationSpotlight lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.automationSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.automationCheckpoint.prompt}
            options={t.automationCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="movies" title={t.moviesTitle} eyebrow={t.moviesEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.moviesIntro}</p>
          <MoviePanel lang={lang} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.moviesCheckpoint.prompt}
            options={t.moviesCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="reality" title={t.realityTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.realityIntro}</p>
          <InfoCard title={t.realityTakeawayTitle}>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
              {t.realityTakeaways.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </InfoCard>
        </SectionBlock>
      </div>
    </div>
  );
}

function LegendExplorer({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const items = useMemo(
    () => [
      {
        key: "luban",
        label: isZh ? "鲁班竹鸟" : "Lu Ban’s bamboo bird",
        summary: isZh
          ? "竹制“木鸢”，据说可在空中停留三天，可能是早期风筝。"
          : "Bamboo magpie that could glide for days—likely an early kite.",
      },
      {
        key: "yanshi",
        label: isZh ? "偃师机关人" : "Yan Shi’s puppet",
        summary: isZh
          ? "木、发、漆等材料做的人偶会唱歌跳舞，传说中的“会动的人”。"
          : "Wood-and-lacquer humanoid puppet that sang and danced for a king.",
      },
      {
        key: "mozi",
        label: isZh ? "墨子飞鸟" : "Mozi’s flying bird",
        summary: isZh ? "会飞一天的木鸟，显示古人对飞行的想象。" : "Wooden bird that flew for a day—ancient flight imagination.",
      },
    ],
    [isZh],
  );
  const [selected, setSelected] = useState(items[0].key);
  const current = items.find((i) => i.key === selected) ?? items[0];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => setSelected(item.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              item.key === selected
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-sm text-slate-800">{current.summary}</p>
      <p className="mt-2 text-xs text-slate-600">
        {isZh
          ? "这些故事多为传说，但反映了古人对智能机器的向往。"
          : "Legendary stories show an early longing for intelligent helpers."}
      </p>
    </div>
  );
}

function AutomationSpotlight({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const [index, setIndex] = useState(0);
  const cases = useMemo(
    () => [
      {
        title: isZh ? "阿基米德螺旋" : "Archimedean screw",
        detail: isZh
          ? "提升水流的机械装置，展示了早期“自动化”解决方案。"
          : "Mechanical water-lift showing early practical automation.",
      },
      {
        title: isZh ? "赫罗自动剧场" : "Heron’s automaton theater",
        detail: isZh
          ? "齿轮、杠杆驱动的木偶剧场，程序化表演的雏形。"
          : "Gear-and-lever puppet theater—an early programmed show.",
      },
      {
        title: isZh ? "瓦康松消化鸭" : "Vaucanson’s digesting duck",
        detail: isZh
          ? "能吃能“排泄”的机械鸭，精巧但并非真正智能。"
          : "Mechanical duck that ate and “pooped”—clever mechanics, not intelligence.",
      },
    ],
    [isZh],
  );

  const current = cases[index];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between gap-3">
        <h4 className="text-sm font-semibold text-slate-900">{current.title}</h4>
        <div className="flex gap-2">
          {cases.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={[
                "h-2 w-6 rounded-full border transition",
                i === index ? "border-brand-500 bg-brand-100" : "border-slate-200 bg-white",
              ].join(" ")}
              aria-label={isZh ? `切换案例 ${i + 1}` : `Switch to case ${i + 1}`}
            />
          ))}
        </div>
      </div>
      <p className="mt-2 text-sm text-slate-700">{current.detail}</p>
      <p className="mt-2 text-xs text-slate-600">
        {isZh ? "机械巧思 ≠ 智能；它们为真正智能机器铺路。" : "Ingenious mechanisms ≠ intelligence, but they paved the way."}
      </p>
    </div>
  );
}

function MoviePanel({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const [pick, setPick] = useState<"metropolis" | "hal" | "walle">("metropolis");
  const copy: Record<typeof pick, { title: string; note: string }> = {
    metropolis: {
      title: isZh ? "1927《大都会》" : "Metropolis (1927)",
      note: isZh
        ? "女性机器人玛利亚具备类人外形与自主决策，早期银幕机器人形象。"
        : "Robot Maria with human form and agency—early cinematic robot.",
    },
    hal: {
      title: isZh ? "《2001 太空漫游》HAL 9000" : "HAL 9000",
      note: isZh
        ? "会对话、执行指令甚至表现情感的智能计算机，凸显决策与风险。"
        : "Conversational computer showing emotion, decision-making—and risk.",
    },
    walle: {
      title: isZh ? "《机器人总动员》" : "WALL-E (2008)",
      note: isZh
        ? "具备情感与协作能力的环保机器人，引发对“有温度”的智能的想象。"
        : "Emotionally rich robots WALL-E/EVE, imagining warm, relatable AI.",
    },
  };

  const tabs = [
    { key: "metropolis", label: "Metropolis" },
    { key: "hal", label: "HAL 9000" },
    { key: "walle", label: "WALL-E" },
  ] as const;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setPick(tab.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              pick === tab.key
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <h4 className="mt-3 text-sm font-semibold text-slate-900">{copy[pick].title}</h4>
      <p className="mt-1 text-sm text-slate-700">{copy[pick].note}</p>
    </div>
  );
}

const content = {
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解人类构建智能机器的长期梦想。",
      "了解历史上重要的自动化装置及其影响。",
    ],
    introTitle: "开篇理解",
    introEyebrow: "课程导入",
    intro:
      "从竹鸟到机械鸭，再到大银幕机器人，智能机器的梦想穿越了千年。计算机的出现让这一梦想真正迈入现实，成为可以计算和模拟思维的智能系统。",
    keyIdeaTitle: "关键信息",
    keyIdea: "传说与机械装置体现了想象与实践，但真正的“智能”要靠计算来模拟思维。",
    legendsTitle: "1. 古代智能机器的传说",
    legendsEyebrow: "故事与想象",
    legendsIntro:
      "古人以鲁班竹鸟、偃师机关人等故事表达对“会飞、会跳舞”的机器的想象。它们多为传说，却映射出人类对智能助手的期盼。",
    legendsSteps: [
      "定位故事主角：飞行、拟人、歌舞等能力",
      "判断哪些能力在当时只能靠想象实现",
      "联系今天的技术：哪些已经有原型？",
    ],
    legendsCheckpoint: {
      prompt: "这些传说共同反映了什么核心愿望？",
      options: [
        { label: "机器能像人一样活动并协助生活", correct: true, explanation: "传说都聚焦“像人一样”与“帮忙”。" },
        { label: "人们只关注飞行，不关心智能", correct: false, explanation: "故事关注的远不止飞行。"},
        { label: "古人反对机械装置的出现", correct: false, explanation: "传说多为赞叹与向往，而非反对。"},
      ],
    },
    automationTitle: "2. 早期自动化装置",
    automationIntro:
      "阿基米德螺旋、赫罗自动剧场、瓦康松机械鸭等机械作品，让“自动”变得可见，但仍停留在预设动作与巧妙机关。",
    automationSteps: [
      "识别装置要解决的实际问题（提水、演出、逗乐）",
      "判断它是自动化还是智能：是否能独立思考、学习？",
      "思考：这些装置如何为现代机器人奠基？",
    ],
    automationCheckpoint: {
      prompt: "瓦康松的“消化鸭”向大众揭示了什么？",
      options: [
        { label: "复杂机械可以模仿生命过程但不等于智能", correct: true, explanation: "机械演示≠理解与思考。" },
        { label: "自动化装置一定具备情感", correct: false, explanation: "机械运作并不包含情感。" },
        { label: "机械装置无法吸引公众", correct: false, explanation: "它曾引发轰动与好奇。"},
      ],
    },
    moviesTitle: "3. 现代电影中的机器人",
    moviesEyebrow: "科幻映像",
    moviesIntro:
      "从《大都会》的玛利亚到 HAL 9000，再到《机器人总动员》里的 WALL-E、EVE，电影赋予机器人人格、情感与自主决策，提醒我们技术与伦理并行。",
    moviesCheckpoint: {
      prompt: "HAL 9000 的形象提醒了什么风险？",
      options: [
        { label: "智能系统也可能与人目标冲突", correct: true, explanation: "自主决策可能偏离人类意图。"},
        { label: "只能做语音识别，毫无威胁", correct: false, explanation: "影片中 HAL 能决策并控制系统。" },
        { label: "电影中的机器人都不需要规则", correct: false, explanation: "作品常强调规则与边界。"},
      ],
    },
    realityTitle: "4. 从梦想到现实",
    realityIntro:
      "古代传说和机械装置让人心驰神往，但真正的智能来自“让机器思考”。计算机与 AI 将想象落地，也提出安全与责任的新课题。",
    realityTakeawayTitle: "小结要点",
    realityTakeaways: [
      "传说映射愿望：会飞、会动、会协助。",
      "自动化≠智能，需引入“思考”的计算方法。",
      "现代影视强化了情感与伦理议题。",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand humanity’s long-standing dream of intelligent machines.",
      "Learn key automated machines in history and their impact.",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "Lesson launch",
    intro:
      "From bamboo birds to mechanical ducks to on-screen robots, the dream of intelligent machines spans centuries. Computers finally let us simulate thinking and turn that dream into working systems.",
    keyIdeaTitle: "Key Idea",
    keyIdea: "Legends and mechanisms show imagination and craft, but real “intelligence” needs computation to simulate thought.",
    legendsTitle: "1. Legends of Ancient Intelligent Machines",
    legendsEyebrow: "Stories & imagination",
    legendsIntro:
      "Stories of Lu Ban’s bamboo bird or Yan Shi’s lifelike puppet reveal an early desire for machines that fly, perform, or assist—mostly legend, but full of longing.",
    legendsSteps: [
      "Spot what each story’s “machine” can do.",
      "Decide which abilities were impossible then.",
      "Link to today: which have prototypes now?",
    ],
    legendsCheckpoint: {
      prompt: "What shared wish runs through these legends?",
      options: [
        {
          label: "Machines acting like people and helping daily life",
          correct: true,
          explanation: "They center on human-like help and movement.",
        },
        { label: "People only cared about flight", correct: false, explanation: "The stories are broader than flying." },
        { label: "Ancients rejected mechanical ideas", correct: false, explanation: "They mostly admired and imagined them." },
      ],
    },
    automationTitle: "2. Early Automated Machines",
    automationIntro:
      "Archimedes’ screw, Heron’s theaters, and Vaucanson’s duck made “automatic” visible, yet stayed at preset motions and clever mechanisms.",
    automationSteps: [
      "Name the problem each device solves (water, shows, wonder).",
      "Judge: automation or intelligence—can it think/learn?",
      "Ask: how did these prepare us for modern robots?",
    ],
    automationCheckpoint: {
      prompt: "What did Vaucanson’s “digesting duck” really reveal?",
      options: [
        {
          label: "Complex mechanics can mimic life but not true intelligence",
          correct: true,
          explanation: "Mechanical demo ≠ understanding or thought.",
        },
        { label: "Automation always includes emotions", correct: false, explanation: "Mechanisms don’t add feelings." },
        { label: "Public ignored mechanical marvels", correct: false, explanation: "It drew crowds and curiosity." },
      ],
    },
    moviesTitle: "3. Robots in Modern Movies",
    moviesEyebrow: "Sci-fi lens",
    moviesIntro:
      "From Metropolis’s Maria to HAL 9000 to WALL-E and EVE, films give robots bodies, decisions, and feelings—raising excitement and ethical caution.",
    moviesCheckpoint: {
      prompt: "What risk does HAL 9000 highlight?",
      options: [
        { label: "An intelligent system can diverge from human goals", correct: true, explanation: "Autonomy may misalign." },
        { label: "It only does speech-to-text, harmless", correct: false, explanation: "HAL controls systems and makes choices." },
        { label: "Robots in films need no rules", correct: false, explanation: "Stories often stress boundaries." },
      ],
    },
    realityTitle: "4. From Dreams to Reality",
    realityIntro:
      "Legends and mechanisms fascinate, but true intelligence comes from “making machines think.” Computers and AI realize the dream and surface new safety duties.",
    realityTakeawayTitle: "Key Takeaways",
    realityTakeaways: [
      "Legends mirror wishes: fly, move, and assist.",
      "Automation ≠ intelligence; thinking needs computation.",
      "Modern media pushes emotional and ethical questions.",
    ],
  },
};
