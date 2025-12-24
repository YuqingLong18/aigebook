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

export function PrimaryLesson1_2({ lang }: LessonProps) {
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
    { id: "book", label: t.bookTitle },
    { id: "band", label: t.bandTitle },
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

        <SectionBlock id="book" title={t.bookTitle} eyebrow={t.bookEyebrow}>
          <InfoCard title={t.bookConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.bookConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.bookParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <KnowledgeSharingDialDemo
            lang={lang}
            title={t.sharingDemo.title}
            goal={t.sharingDemo.goal}
            resetLabel={ui.reset}
            levels={t.sharingDemo.levels}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.bookSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.bookCheckpoint.prompt}
            options={t.bookCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="band" title={t.bandTitle} eyebrow={t.bandEyebrow}>
          <InfoCard title={t.bandConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.bandConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          <p className="text-sm leading-relaxed text-slate-700">{t.bandIntro}</p>
          <div className="grid gap-3 md:grid-cols-2">
            {t.bandFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          {t.bandParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <BandWaterflowDemo
            lang={lang}
            title={t.bandDemo.title}
            goal={t.bandDemo.goal}
            resetLabel={ui.reset}
            steps={t.bandDemo.steps}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.bandSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.bandCheckpoint.prompt}
            options={t.bandCheckpoint.options}
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
          <InfoCard title={t.foodPromptTitle}>
            <p>{t.foodPrompt}</p>
          </InfoCard>
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
          {t.historyParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
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

type SharingLevel = {
  key: string;
  label: string;
  outcome: string;
  score: number;
};

function KnowledgeSharingDialDemo({
  lang,
  title,
  goal,
  levels,
  resetLabel,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  levels: SharingLevel[];
  resetLabel: string;
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

      <div className="mt-4">
        <input
          type="range"
          min={0}
          max={levels.length - 1}
          step={1}
          value={index}
          onChange={(event) => setIndex(Number(event.target.value))}
          className="w-full"
          aria-label={isZh ? "分享程度" : "Sharing level"}
        />
        <div className="mt-2 flex justify-between text-[11px] text-slate-500">
          {levels.map((level) => (
            <span key={level.key}>{level.label}</span>
          ))}
        </div>
      </div>

      <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {isZh ? "可复现程度" : "Reproducibility"}
        </p>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-white">
          <div className="h-full rounded-full bg-brand-500" style={{ width: `${current.score}%` }} />
        </div>
        <p className="mt-2 text-sm text-slate-700">{current.outcome}</p>
      </div>
    </div>
  );
}

type BandStep = {
  title: string;
  detail: string;
};

function BandWaterflowDemo({
  lang,
  title,
  goal,
  steps,
  resetLabel,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  steps: BandStep[];
  resetLabel: string;
}) {
  const isZh = lang === "zh";
  const [index, setIndex] = useState(0);
  const current = steps[index] ?? steps[0];

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

      <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {isZh ? "当前阶段" : "Current Stage"}
        </p>
        <p className="mt-1 text-sm font-semibold text-slate-900">{current.title}</p>
        <p className="mt-1 text-sm text-slate-700">{current.detail}</p>
      </div>

      <div className="mt-3 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => setIndex((prev) => Math.max(prev - 1, 0))}
          className="rounded-lg border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-slate-300"
          disabled={index === 0}
        >
          {isZh ? "上一步" : "Back"}
        </button>
        <div className="text-xs font-semibold text-slate-600">
          {index + 1} / {steps.length}
        </div>
        <button
          type="button"
          onClick={() => setIndex((prev) => Math.min(prev + 1, steps.length - 1))}
          className="rounded-lg border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-slate-300"
          disabled={index === steps.length - 1}
        >
          {isZh ? "下一步" : "Next"}
        </button>
      </div>
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand who Al-Jazari was and see how people across cultures shared the dream of intelligent machines.",
      "Appreciate the value of Al-Jazari’s ideas about sharing knowledge and replicable design.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "Stories about intelligent machines spread widely in the Western world as well. One of the most famous inventors was Al-Jazari, who not only built clever devices but also carefully recorded how to make them.",
    bookTitle: "1. Al-Jazari and The Book of Knowledge of Ingenious Mechanical Devices",
    bookEyebrow: "Inventor and author",
    bookConceptTitle: "Concept Card",
    bookConceptLines: [
      "Al-Jazari lived during the Islamic Golden Age and focused on hands-on engineering.",
      "He wrote a book with more than 50 devices he actually built.",
      "Clear instructions made his machines easy to replicate.",
    ],
    bookParas: [
      "Al-Jazari (1136–1206) was an outstanding Arab scholar during the Islamic Golden Age. He was an inventor, mechanical engineer, craftsman, artist, mathematician, and astronomer.",
      "He cared more about techniques and craftsmanship than abstract theory, so he designed inventions by building and testing instead of only calculating.",
      "His most famous work, The Book of Knowledge of Ingenious Mechanical Devices (1206), documented more than 50 devices that he personally built. He explained them in plain, simple language so others could reproduce them.",
      "Science historian George Sarton praised the book, saying it was the most elaborate of its kind. Because of his influence, some people call Al-Jazari the father of modern engineering.",
    ],
    sharingDemo: {
      title: "Share the Steps",
      goal: "See how detailed instructions make machines easier to reproduce.",
      levels: [
        {
          key: "secret",
          label: "Keep secret",
          outcome: "Others cannot repeat the design, so progress slows down.",
          score: 20,
        },
        {
          key: "hint",
          label: "Give hints",
          outcome: "People can copy some parts, but results are inconsistent.",
          score: 55,
        },
        {
          key: "steps",
          label: "Full steps",
          outcome: "Clear steps help others rebuild and improve the machine.",
          score: 95,
        },
      ],
    },
    bookSteps: [
      "Move the slider from secret to full steps.",
      "Notice how reproducibility changes.",
      "Connect this to Al-Jazari’s book.",
    ],
    bookCheckpoint: {
      prompt: "What made Al-Jazari’s book special for later inventors?",
      options: [
        {
          label: "It explained devices in clear steps so others could recreate them.",
          correct: true,
          explanation: "Reproducible instructions were the key.",
        },
        {
          label: "It hid all methods to keep them secret.",
          correct: false,
          explanation: "He shared his methods openly.",
        },
        {
          label: "It only listed ideas that were never built.",
          correct: false,
          explanation: "He documented machines he actually built.",
        },
      ],
    },
    bandTitle: "2. The Automatic Band",
    bandEyebrow: "Mechanical music",
    bandConceptTitle: "Concept Card",
    bandConceptLines: [
      "Water power turns wheels to move the musicians’ arms.",
      "Air pressure is released to blow the flute.",
      "Changing wheels changes the tune like a program.",
    ],
    bandIntro:
      "Al-Jazari designed devices for productivity and for royal entertainment. One famous example is the automatic musical band.",
    bandFigures: [
      {
        label: "Figure 1-2",
        caption: "Al-Jazari’s automatic band.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 1-3",
        caption: "How the automatic band works.",
        placeholder: "Illustration placeholder",
      },
    ],
    bandParas: [
      "In the scene, the king sits on the right. On the left, four musicians play instruments: two drummers, a harpist, and a flutist.",
      "A water tank under the band releases water into a tipping bucket. When it fills, it pours into a smaller tank that releases water to the right, spinning a wheel and turning a wooden shaft. The wheels move the musicians’ arms.",
      "Water also builds air pressure that blows the flute. By adjusting the wheels underneath, the tune changes—much like changing programs in a modern computer.",
    ],
    bandDemo: {
      title: "Follow the Waterflow",
      goal: "Step through how water drives the music.",
      steps: [
        {
          title: "Tank fills",
          detail: "Water flows into a tipping bucket beneath the musicians.",
        },
        {
          title: "Bucket tips",
          detail: "The bucket pours into a smaller tank, releasing water to the right.",
        },
        {
          title: "Wheels spin",
          detail: "A wheel turns the shaft and moves the musicians’ arms up and down.",
        },
        {
          title: "Air pushes",
          detail: "Air pressure blows through the flute to make sound.",
        },
      ],
    },
    bandSteps: [
      "Click through the stages of waterflow.",
      "Notice how motion reaches the instruments.",
      "Explain why changing the wheels changes the tune.",
    ],
    bandCheckpoint: {
      prompt: "What makes the flute produce sound in the automatic band?",
      options: [
        {
          label: "Air pressure builds and blows through the flute.",
          correct: true,
          explanation: "Water drives air into the flute.",
        },
        {
          label: "A singer hides inside the machine.",
          correct: false,
          explanation: "The sound is mechanical, not human.",
        },
        {
          label: "The drummers shout the notes.",
          correct: false,
          explanation: "The drummers move arms; the flute uses air.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Reproducibility",
    foodParas: [
      "Al-Jazari’s book clearly recorded the steps for making each device so others could follow and recreate them. This idea of reproducibility is a core principle of modern science.",
      "In his time, knowledge was often kept secret within special groups, and most methods were passed down orally. Writing out every step so clearly was rare.",
      "That is why his idea about sharing knowledge and replicable design became so respected by later scientists.",
    ],
    foodPromptTitle: "Think about it",
    foodPrompt: "How did Al-Jazari’s way of sharing knowledge help the development of science?",
    foodCheckpoint: {
      prompt: "Why is reproducibility important for science?",
      options: [
        {
          label: "It lets others repeat and improve discoveries.",
          correct: true,
          explanation: "Repeatable steps allow progress to build.",
        },
        {
          label: "It hides information from everyone else.",
          correct: false,
          explanation: "Reproducibility is about sharing, not hiding.",
        },
        {
          label: "It makes inventions impossible to copy.",
          correct: false,
          explanation: "Reproducibility makes copying possible.",
        },
      ],
    },
    historyTitle: "History Corner",
    historyEyebrow: "Middle Ages",
    historyParas: [
      "The Middle Ages usually refers to the time between the fall of the Western Roman Empire in the 5th century and the Renaissance in the 15th century, lasting about 1,000 years.",
      "European society was based on the feudal system. Land was the main form of wealth, controlled by kings, nobles, and the church. Serfs worked the land in exchange for protection.",
      "In the early Middle Ages, Europe went through a period of chaos known as the “Dark Ages,” when cultural and scientific progress slowed. Later, trade and cities grew again, and places like Venice and Florence became important centers of commerce.",
    ],
    summaryTitle: "Summary",
    summaryEyebrow: "Key Takeaways",
    summaryPoints: [
      "Al-Jazari combined hands-on craftsmanship with careful documentation.",
      "The automatic band shows early programmable ideas through adjustable wheels.",
      "Sharing knowledge and reproducible steps helped science move forward.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解贾兹里是谁，认识不同文化中对智能机器的共同梦想。",
      "体会贾兹里的“sharing knowledge and replicable design”理念的价值。",
    ],
    introTitle: "故事开头",
    introEyebrow: "课程导入",
    introText:
      "在西方世界，关于智能机器的故事也广泛流传。最著名的发明家之一是贾兹里，他不仅制造机械装置，还把制作方法清楚记录下来。",
    bookTitle: "1. 贾兹里与《精巧机械装置知识之书》",
    bookEyebrow: "发明家与作者",
    bookConceptTitle: "概念卡片",
    bookConceptLines: [
      "贾兹里生活在伊斯兰黄金时代，强调动手实践。",
      "他写下了 50 多种自己亲手制作的装置。",
      "清晰步骤让别人也能复现机器。",
    ],
    bookParas: [
      "贾兹里（1136–1206）是伊斯兰黄金时代的杰出学者，身份包括发明家、机械工程师、工匠、艺术家、数学家和天文学家。",
      "作为传统工匠，他更重视技术与工艺，而不是抽象理论，因此通过搭建和测试来设计发明。",
      "他在 1206 年完成《精巧机械装置知识之书》，记录了 50 多种装置。这些并非想法，而是他亲手制作的机器。他用简洁易懂的语言写下细节，让人照着就能复现。",
      "科学史家乔治·萨顿称赞这本书是同类作品中最完善的。因为贡献巨大，有人称他为“现代工程之父”。",
    ],
    sharingDemo: {
      title: "分享步骤的力量",
      goal: "观察说明越详细，复现就越容易。",
      levels: [
        {
          key: "secret",
          label: "保密",
          outcome: "别人难以复现，进步会变慢。",
          score: 20,
        },
        {
          key: "hint",
          label: "给提示",
          outcome: "只能复现一部分，结果不稳定。",
          score: 55,
        },
        {
          key: "steps",
          label: "完整步骤",
          outcome: "清晰步骤让他人复刻并改进机器。",
          score: 95,
        },
      ],
    },
    bookSteps: ["把滑块从“保密”拖到“完整步骤”。", "观察可复现程度的变化。", "联系贾兹里的做法。"],
    bookCheckpoint: {
      prompt: "贾兹里的书为什么对后人特别重要？",
      options: [
        {
          label: "它用清晰步骤说明，别人也能复现装置。",
          correct: true,
          explanation: "可复现的步骤最关键。",
        },
        {
          label: "它把所有方法都藏起来。",
          correct: false,
          explanation: "他恰恰是公开分享。",
        },
        {
          label: "它只写了想法，没有实物。",
          correct: false,
          explanation: "书里记录的是他亲手制作的装置。",
        },
      ],
    },
    bandTitle: "2. 自动乐队",
    bandEyebrow: "机械音乐",
    bandConceptTitle: "概念卡片",
    bandConceptLines: [
      "水流推动轮子，带动乐师手臂。",
      "气压推动笛子发声。",
      "调整轮子即可改变旋律，像更换程序。",
    ],
    bandIntro: "贾兹里设计了很多机器，有的提升生产力，有的用于宫廷娱乐。自动乐队就是其中的代表。",
    bandFigures: [
      {
        label: "图 1-2",
        caption: "贾兹里的自动乐队。",
        placeholder: "插图占位",
      },
      {
        label: "图 1-3",
        caption: "自动乐队的工作原理。",
        placeholder: "插图占位",
      },
    ],
    bandParas: [
      "画面中，国王坐在右侧，左侧四位乐师演奏：两位鼓手、一位弹竖琴、一位吹笛。",
      "乐队下方有水箱，水流进入翻斗桶。半小时后翻斗倾倒，把水倒入小水箱，再慢慢流向右侧推动轮子和木轴。",
      "轮子带动乐师手臂上下摆动，水还产生气压推动笛子发声。调整轮子位置，就能改变旋律，类似于改变程序。",
    ],
    bandDemo: {
      title: "追踪水流与音乐",
      goal: "一步步看水如何驱动音乐。",
      steps: [
        {
          title: "水箱注水",
          detail: "水流进入翻斗桶。",
        },
        {
          title: "翻斗倾倒",
          detail: "桶满后倾倒到小水箱，水流向右侧。",
        },
        {
          title: "轮子转动",
          detail: "水推动轮子转动，木轴带动乐师手臂。",
        },
        {
          title: "气流发声",
          detail: "气压推动笛子产生声音。",
        },
      ],
    },
    bandSteps: ["点击步骤了解水流过程。", "观察动作如何传到乐器。", "解释为什么调轮子能改旋律。"],
    bandCheckpoint: {
      prompt: "笛子声音是怎么产生的？",
      options: [
        {
          label: "水产生气压，气流吹过笛子。",
          correct: true,
          explanation: "气压让笛子发声。",
        },
        {
          label: "乐师在机器里唱歌。",
          correct: false,
          explanation: "这是机械装置，不是人演唱。",
        },
        {
          label: "鼓手打击笛子。",
          correct: false,
          explanation: "鼓手只带动手臂动作。",
        },
      ],
    },
    foodTitle: "思考食粮",
    foodEyebrow: "可复现性",
    foodParas: [
      "贾兹里的书把每个装置的制作步骤写得很清楚，别人可以照着复现。可复现性是现代科学的重要原则。",
      "在他的时代，知识常被少数群体掌握，多靠口口相传，很少有人把细节写得如此清楚。",
      "因此他关于 sharing knowledge and replicable design 的思想受到后人尊重，并影响了现代研究。",
    ],
    foodPromptTitle: "想一想",
    foodPrompt: "贾兹里分享知识的做法如何促进了科学发展？",
    foodCheckpoint: {
      prompt: "科学为什么重视可复现性？",
      options: [
        {
          label: "它让别人可以重复并改进成果。",
          correct: true,
          explanation: "可复现让进步得以积累。",
        },
        {
          label: "它帮助把知识完全隐藏起来。",
          correct: false,
          explanation: "可复现强调分享，而不是隐藏。",
        },
        {
          label: "它让别人无法复制。",
          correct: false,
          explanation: "可复现就是为了能复制。",
        },
      ],
    },
    historyTitle: "历史角",
    historyEyebrow: "中世纪",
    historyParas: [
      "中世纪通常指西罗马帝国在 5 世纪灭亡到 15 世纪文艺复兴之间的时期，持续约 1000 年。",
      "欧洲社会以封建制度为基础，土地是主要财富，由国王、贵族与教会掌控。农民以耕作换取保护。",
      "中世纪早期欧洲经历了“黑暗时代”的混乱阶段，文化与科学进展缓慢。到了晚期，贸易和城市复兴，威尼斯、佛罗伦萨等成为重要商贸中心。",
    ],
    summaryTitle: "小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "贾兹里将动手实践与记录分享结合起来。",
      "自动乐队展示了早期“可编程”的思想。",
      "分享知识与可复现步骤推动了科学发展。",
    ],
  },
};
