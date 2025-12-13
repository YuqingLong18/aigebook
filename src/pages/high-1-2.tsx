import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { BrainEQDemo } from "../demos/BrainEQDemo";
import { CooperationTrustDemo } from "../demos/CooperationTrustDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson1_2({ lang }: LessonProps) {
  const isZh = lang === "zh";
  const ui = {
    reset: isZh ? "重置" : "Reset",
    checkpointTag: isZh ? "检查点" : "Checkpoint",
    correctLabel: isZh ? "正确" : "Correct",
    incorrectLabel: isZh ? "再试一次" : "Check again",
    guidedTitle: isZh ? "引导步骤" : "Guided Steps",
  };

  const t = content[lang];

  const toc = [
    { id: "learning-objectives", label: isZh ? "学习目标" : "Learning Objectives" },
    { id: "intro", label: isZh ? "开篇理解" : "Opening Idea" },
    { id: "history", label: isZh ? "1. 生命与人类演化" : "1. Life & Human Evolution" },
    { id: "brain", label: isZh ? "2. 人类为何聪明" : "2. Why Humans Are Smart" },
    { id: "leap", label: isZh ? "3. 智力跃迁之谜" : "3. The Intelligence Leap" },
    { id: "civilization", label: isZh ? "4. 文明的诞生" : "4. Birth of Civilization" },
    { id: "summary", label: isZh ? "本节小结" : "Summary" },
  ];

  return (
    <div className="flex gap-6">
      <LessonToc lang={lang} items={toc} />

      <div className="flex-1 space-y-6">
        <SectionBlock id="learning-objectives" title={t.learningObjectivesTitle}>
          <ul className="grid gap-2 text-sm leading-relaxed text-slate-700 md:grid-cols-2">
            {t.learningObjectives.map((obj) => (
              <li key={obj}>{obj}</li>
            ))}
          </ul>
        </SectionBlock>

        <SectionBlock id="intro" title={t.openingTitle} eyebrow={t.openingEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.openingText}</p>
        </SectionBlock>

        <SectionBlock id="history" title={t.historyTitle} eyebrow={t.historyEyebrow}>
          <InfoCard title={t.historyCardTitle}>
            {t.historyParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.historySteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.historyCheckpoint.prompt}
            options={t.historyCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="brain" title={t.brainTitle} eyebrow={t.brainEyebrow}>
          <InfoCard title={t.brainCardTitle}>
            {t.brainParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <BrainEQDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.brainSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.brainCheckpoint.prompt}
            options={t.brainCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="leap" title={t.leapTitle} eyebrow={t.leapEyebrow}>
          <InfoCard title={t.coopTitle}>
            {t.coopParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <CooperationTrustDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.leapSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.leapCheckpoint.prompt}
            options={t.leapCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="civilization" title={t.civilTitle} eyebrow={t.civilEyebrow}>
          <InfoCard title={t.civilCardTitle}>
            {t.civilParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.civilSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.civilCheckpoint.prompt}
            options={t.civilCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="summary" title={t.summaryTitle} eyebrow={t.summaryEyebrow}>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
            {t.summaryPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </SectionBlock>
      </div>
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Outline human evolutionary milestones from ancient apes to Homo sapiens.",
      "Understand EQ and the brain–body link to intelligence.",
      "Explain cooperation, trust, and empathy in the leap of human intelligence.",
      "Describe cumulative culture (ratchet effect) and civilizational growth.",
      "Reflect on how human intelligence inspires AI development.",
    ],
    openingTitle: "Opening Idea",
    openingEyebrow: "From savanna to cities",
    openingText:
      "Humanity rose from ancient savannas to modern cities through evolving brains, cooperation, and culture. This lesson explores how human intelligence formed and what it means for AI.",
    historyTitle: "1. Life & Human Evolution",
    historyEyebrow: "Timeline",
    historyCardTitle: "From early life to Homo sapiens",
    historyParas: [
      "Earth formed ~4.5B years ago; life emerged ~4B. Animals appeared ~580M; Cambrian explosion ~530M.",
      "Ancient apes stood upright (~6M years ago), Australopithecus (~4M), Homo habilis made tools (~2M), Homo erectus mastered fire and spread, Homo sapiens (~400–300k) used language, art, and complex tools.",
    ],
    historySteps: [
      "Note key jumps: bipedalism, tools, fire, language.",
      "Connect cognitive advances to survival advantages.",
      "See Homo sapiens as direct ancestors shaping civilization.",
    ],
    historyCheckpoint: {
      prompt: "Which milestone directly boosted early human cognition?",
      options: [
        {
          label: "Language enabling abstract concepts and communication.",
          correct: true,
          explanation: "Language expanded memory, planning, and cooperation.",
        },
        {
          label: "Only larger teeth.",
          correct: false,
          explanation: "Teeth matter, but cognition leap came from language/tools.",
        },
        {
          label: "Losing the ability to walk upright.",
          correct: false,
          explanation: "Bipedalism was a key advantage, not a loss.",
        },
      ],
    },
    brainTitle: "2. Why Humans Are Smart",
    brainEyebrow: "Brain as foundation",
    brainCardTitle: "Brain size, EQ, and survival",
    brainParas: [
      "Brain-to-body ratio (EQ) indicates surplus capacity for cognition; humans rank high (~7.5 EQ).",
      "Humans relied on brains, not claws or fangs—evolving sophisticated neural capacity.",
    ],
    brainSteps: [
      "Relate EQ to available cognitive resources.",
      "Compare human EQ with other animals (e.g., dolphins).",
      "Link surplus brainpower to abstract reasoning.",
    ],
    brainCheckpoint: {
      prompt: "What does a high EQ suggest?",
      options: [
        {
          label: "More brain capacity beyond bodily control, supporting higher cognition.",
          correct: true,
          explanation: "Surplus capacity fuels complex thinking.",
        },
        {
          label: "Weaker intelligence.",
          correct: false,
          explanation: "Higher EQ correlates with stronger cognition.",
        },
        {
          label: "Guarantee of sharp claws.",
          correct: false,
          explanation: "EQ is about brain, not physical weapons.",
        },
      ],
    },
    leapTitle: "3. The Intelligence Leap",
    leapEyebrow: "Beyond survival",
    coopTitle: "Cooperation, language, empathy",
    coopParas: [
      "Cooperative hunting forced strategy, division of labor, and communication—exercising brains.",
      "Trust and empathy let humans help and share beyond kin, deepening collaboration.",
    ],
    leapSteps: [
      "See cooperation as a driver for complex thinking.",
      "Language amplified memory and abstraction.",
      "Empathy enabled trust, sharing, and prosocial selection.",
    ],
    leapCheckpoint: {
      prompt: "Why did human cooperation boost intelligence?",
      options: [
        {
          label: "It required planning, communication, and trust, pushing cognitive growth.",
          correct: true,
          explanation: "Deep cooperation trains complex cognition.",
        },
        {
          label: "It reduced brain use.",
          correct: false,
          explanation: "It increased cognitive demand.",
        },
        {
          label: "It eliminated language needs.",
          correct: false,
          explanation: "Language was central to cooperation.",
        },
      ],
    },
    civilTitle: "4. Birth of Civilization",
    civilEyebrow: "Ratchet effect",
    civilCardTitle: "Cumulative culture",
    civilParas: [
      "Trust enabled knowledge sharing; each generation built on prior gains (ratchet effect).",
      "Writing, art, science, and technology accumulated, expanding collective intelligence.",
    ],
    civilSteps: [
      "Recognize sharing + trust as fuel for cumulative culture.",
      "Link accumulation to modern science and technology leaps.",
      "Connect collective intelligence to AI inspiration (multi-agent learning).",
    ],
    civilCheckpoint: {
      prompt: "What is the ratchet effect?",
      options: [
        {
          label: "Knowledge is preserved and improved each generation, preventing backward slide.",
          correct: true,
          explanation: "Cumulative culture locks in progress.",
        },
        {
          label: "Knowledge disappears each generation.",
          correct: false,
          explanation: "Opposite of the ratchet idea.",
        },
        {
          label: "Only individuals learn; groups cannot.",
          correct: false,
          explanation: "Group sharing is key.",
        },
      ],
    },
    summaryTitle: "Section Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "Human intelligence rests on biological brain capacity (high EQ) and evolutionary milestones.",
      "Cooperation, trust, empathy, and language sparked leaps beyond survival needs.",
      "Cumulative culture (ratchet effect) let civilization compound knowledge.",
      "These patterns inspire AI: material substrate (compute), collaboration, and continual learning.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "概述从古猿到智人的演化里程碑。",
      "理解 EQ 与脑体比对智力的意义。",
      "解释合作、信任、共情在智力跃迁中的作用。",
      "描述累积文化（棘轮效应）与文明发展。",
      "思考人类智力对人工智能的启示。",
    ],
    openingTitle: "开篇理解",
    openingEyebrow: "从草原到城市",
    openingText: "人类凭借大脑、合作与文化从远古走到今日。本课探讨人类智力的形成及其对 AI 的启发。",
    historyTitle: "1. 生命与人类演化",
    historyEyebrow: "时间轴",
    historyCardTitle: "从早期生命到智人",
    historyParas: [
      "约 45 亿年前地球形成，约 40 亿年出现生命；约 5.3 亿年寒武纪大爆发。",
      "古猿直立行走（~600 万年前），南方古猿（~400 万），能人制工具（~200 万），直立人用火并外迁，智人（~40–30 万）使用语言、艺术与复杂工具。",
    ],
    historySteps: ["关注直立、工具、用火、语言等跳跃。", "把认知提升与生存优势对应。", "智人成为现代人的直接祖先。"],
    historyCheckpoint: {
      prompt: "哪一里程碑直接推动了早期认知？",
      options: [
        {
          label: "语言让抽象概念与交流成为可能。",
          correct: true,
          explanation: "语言扩展记忆与计划能力。",
        },
        {
          label: "只有牙齿变大。",
          correct: false,
          explanation: "认知跃迁核心在工具/语言等。",
        },
        {
          label: "失去直立行走能力。",
          correct: false,
          explanation: "直立是优势。",
        },
      ],
    },
    brainTitle: "2. 人类为何聪明",
    brainEyebrow: "大脑基础",
    brainCardTitle: "脑体比、EQ 与生存",
    brainParas: [
      "脑体比（EQ）体现超出身体控制需求的脑容量；人类 EQ 高（约 7.5）。",
      "人类靠脑力而非利齿利爪，神经结构愈发复杂。",
    ],
    brainSteps: ["把 EQ 与可用认知资源关联。", "比较人类与其他动物的 EQ。", "连接富余脑力与抽象推理。"],
    brainCheckpoint: {
      prompt: "高 EQ 意味着？",
      options: [
        {
          label: "超出身体控制的脑容量，可用于高级认知。",
          correct: true,
          explanation: "富余脑力支持复杂思维。",
        },
        {
          label: "智力更弱。",
          correct: false,
          explanation: "高 EQ 通常对应更强认知。",
        },
        {
          label: "保证长出尖牙。",
          correct: false,
          explanation: "EQ 关于大脑，不是武器。",
        },
      ],
    },
    leapTitle: "3. 智力跃迁之谜",
    leapEyebrow: "超越生存",
    coopTitle: "合作、语言与共情",
    coopParas: [
      "群猎需要策略、分工、沟通，锻炼大脑。",
      "信任与共情让人类愿意超越血缘互助分享，合作更深。",
    ],
    leapSteps: ["把合作视为复杂思维的驱动力。", "语言提升记忆与抽象。", "共情促进信任、分享与选择。"],
    leapCheckpoint: {
      prompt: "为何人类合作能提升智力？",
      options: [
        {
          label: "需要计划、沟通、信任，提升认知需求。",
          correct: true,
          explanation: "深度合作训练复杂认知。",
        },
        {
          label: "降低了大脑使用。",
          correct: false,
          explanation: "相反提高了需求。",
        },
        {
          label: "不再需要语言。",
          correct: false,
          explanation: "语言是合作核心。",
        },
      ],
    },
    civilTitle: "4. 文明的诞生",
    civilEyebrow: "棘轮效应",
    civilCardTitle: "知识的累积文化",
    civilParas: [
      "信任促使分享与传承，每代在前代成果上改进（棘轮效应）。",
      "文字、艺术、科学、技术持续累积，形成集体智慧。",
    ],
    civilSteps: ["把分享+信任看作累积文化燃料。", "联系到科学技术的跨代跃升。", "联想到 AI 中的群体学习。"],
    civilCheckpoint: {
      prompt: "棘轮效应指？",
      options: [
        {
          label: "知识被保留并改进，不会轻易倒退。",
          correct: true,
          explanation: "累积文化锁定进步。",
        },
        {
          label: "知识每代都会消失。",
          correct: false,
          explanation: "与棘轮效应相反。",
        },
        {
          label: "只有个人能学习，群体不能。",
          correct: false,
          explanation: "群体分享是关键。",
        },
      ],
    },
    summaryTitle: "本节小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "人类智力源于大脑物质基础与演化里程碑（高 EQ）。",
      "合作、信任、共情、语言推动智力超越生存需求。",
      "累积文化（棘轮效应）让文明代代进步。",
      "对 AI 的启示：计算基底、合作与持续学习的重要性。",
    ],
  },
};
