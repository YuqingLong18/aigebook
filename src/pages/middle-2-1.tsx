import { useMemo, useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson2_1({ lang }: LessonProps) {
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
    { id: "evolution", label: t.evolutionTitle },
    { id: "leap", label: t.leapTitle },
    { id: "cooperation", label: t.coopTitle },
    { id: "civilization", label: t.civilTitle },
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
          <p className="text-sm leading-relaxed text-slate-700">{t.intro}</p>
          <InfoCard title={t.introCardTitle}>
            <p className="text-sm text-slate-700">{t.introCard}</p>
          </InfoCard>
        </SectionBlock>

        <SectionBlock id="evolution" title={t.evolutionTitle} eyebrow={t.evolutionEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.evolutionIntro}</p>
          <EvolutionTimeline lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.evolutionSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.evolutionCheckpoint.prompt}
            options={t.evolutionCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="leap" title={t.leapTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.leapIntro}</p>
          <BrainCompare lang={lang} />
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

        <SectionBlock id="cooperation" title={t.coopTitle} eyebrow={t.coopEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.coopIntro}</p>
          <HuntPlanner lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.coopSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.coopCheckpoint.prompt}
            options={t.coopCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="civilization" title={t.civilTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.civilIntro}</p>
          <InfoCard title={t.civilCardTitle}>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
              {t.civilPoints.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </InfoCard>
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.civilCheckpoint.prompt}
            options={t.civilCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="summary" title={t.summaryTitle}>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
            {t.summaryPoints.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        </SectionBlock>
      </div>
    </div>
  );
}

function EvolutionTimeline({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const [index, setIndex] = useState(0);
  const milestones = useMemo(
    () => [
      {
        label: isZh ? "地球形成 (45 亿年前)" : "Earth forms (4.5B yrs ago)",
        note: isZh ? "地壳冷却，海洋出现，为生命铺路。" : "Crust cools, oceans appear—set stage for life.",
      },
      {
        label: isZh ? "单细胞生命 (38–35 亿年前)" : "Single-celled life (3.8–3.5B)",
        note: isZh ? "蛋白质与早期细胞诞生，多样进化。" : "Proteins + early cells diversify.",
      },
      {
        label: isZh ? "直立行走猿人 (约 600 万年前)" : "Upright apes (~6M yrs ago)",
        note: isZh ? "环境变化促成直立行走的南方古猿。" : "Changing habitats → upright Australopithecus.",
      },
      {
        label: isZh ? "巧人制石器 (约 200 万年前)" : "Homo habilis tools (~2M)",
        note: isZh ? "双手制石器，拉开“人”的序幕。" : "Stone tools mark early humans.",
      },
      {
        label: isZh ? "智人出现 (约 20 万年前)" : "Homo sapiens (~200k)",
        note: isZh ? "成为现代人的祖先，脑力跃升。" : "Ancestors of us; brain power leaps.",
      },
      {
        label: isZh ? "走出非洲 (约 6 万年前)" : "Out of Africa (~60k)",
        note: isZh ? "迁徙、交流、混血，形成多样人群。" : "Migrate, mix, diversify populations.",
      },
    ],
    [isZh],
  );
  const current = milestones[index];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex flex-wrap gap-2">
        {milestones.map((m, i) => (
          <button
            key={m.label}
            type="button"
            onClick={() => setIndex(i)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              i === index
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {m.label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-sm text-slate-800">{current.note}</p>
      <p className="mt-2 text-xs text-slate-600">
        {isZh ? "从地球形成到智人迁徙，演化铺垫了智能的物质基础。" : "From Earth’s birth to sapiens, evolution set intelligence’s stage."}
      </p>
    </div>
  );
}

function BrainCompare({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const [species, setSpecies] = useState<"human" | "chimp" | "dolphin">("human");
  const stats: Record<typeof species, { eq: string; note: string }> = {
    human: {
      eq: isZh ? "EQ≈7.4" : "EQ≈7.4",
      note: isZh
        ? "约 1.4kg 脑重，>1000 亿神经元；脑力超越生存需求，支撑艺术、科学。"
        : "~1.4kg brain, 100B+ neurons; far beyond survival, enabling art/science.",
    },
    chimp: {
      eq: isZh ? "EQ≈2–3" : "EQ≈2–3",
      note: isZh ? "近亲但未出现语言、文明跃迁，脑量与认知仍有限。" : "Close kin yet no language/civilization leap; limited cognition.",
    },
    dolphin: {
      eq: isZh ? "EQ≈4–5" : "EQ≈4–5",
      note: isZh ? "高 EQ 但未达人类水平，说明脑大小/比例并非唯一原因。" : "High EQ but not human-level—brain size isn’t sole cause.",
    },
  };
  const labels = [
    { key: "human", label: isZh ? "人类" : "Human" },
    { key: "chimp", label: isZh ? "黑猩猩" : "Chimp" },
    { key: "dolphin", label: isZh ? "海豚" : "Dolphin" },
  ] as const;
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex gap-2">
        {labels.map((l) => (
          <button
            key={l.key}
            type="button"
            onClick={() => setSpecies(l.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              species === l.key
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {l.label}
          </button>
        ))}
      </div>
      <div className="mt-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
        <p className="text-xs font-semibold text-brand-700">{stats[species].eq}</p>
        <p className="mt-1 text-sm text-slate-800">{stats[species].note}</p>
      </div>
      <p className="mt-2 text-xs text-slate-600">
        {isZh ? "脑容量重要，但合作与基因突变等共同促成智能飞跃。" : "Brain size matters, but genes + cooperation drive the leap."}
      </p>
    </div>
  );
}

function HuntPlanner({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const [role, setRole] = useState<"drive" | "ambush">("drive");
  const notes: Record<typeof role, string> = {
    drive: isZh
      ? "驱赶者需观察兽群、规划路线把猎物赶向陷阱，考验合作与沟通。"
      : "Drivers track herds and steer them to traps—planning + communication.",
    ambush: isZh
      ? "埋伏者选择位置、隐藏并协同时机，团队分工提升成功率。"
      : "Ambushers pick spots, hide, time attacks—team roles raise success.",
  };
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex gap-2">
        {[
          { key: "drive", label: isZh ? "驱赶" : "Drive" },
          { key: "ambush", label: isZh ? "埋伏" : "Ambush" },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setRole(tab.key as typeof role)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              role === tab.key
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-sm text-slate-800">{notes[role]}</p>
      <p className="mt-1 text-xs text-slate-600">
        {isZh
          ? "合作迫使人类规划、语言、角色分工，进一步锻炼大脑。"
          : "Cooperation forces planning, language, role split—exercising the brain."}
      </p>
    </div>
  );
}

const content = {
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: ["了解人类演化历史与智力飞跃之谜。", "认识合作在智能与文明形成中的关键作用。"],
    introTitle: "开篇理解",
    introEyebrow: "智力之问",
    intro:
      "人类拥有远超其他物种的智力：感知、记忆、决策、想象、情感。为何在数百万物种中，唯独人类跃升？",
    introCardTitle: "核心追问",
    introCard: "是什么让人类脱颖而出，建立复杂文明？",
    evolutionTitle: "1. 人类演化",
    evolutionEyebrow: "从地球到智人",
    evolutionIntro:
      "地球形成、生命诞生、物种多样化，约 600 万年前古猿直立行走，200 万年前制石器的巧人，20 万年前出现智人并走出非洲。",
    evolutionSteps: ["梳理时间线：关键节点", "思考每一步对智力演化的影响", "关注迁徙与基因流动"],
    evolutionCheckpoint: {
      prompt: "智人走出非洲的大致时间是？",
      options: [
        { label: "约 6 万年前", correct: true, explanation: "文本强调约 6 万年前迁徙并混血。", },
        { label: "约 200 万年前", correct: false, explanation: "那是巧人制作石器的时间。", },
        { label: "约 4.5 亿年前", correct: false, explanation: "与人类演化无关的时间尺度。", },
      ],
    },
    leapTitle: "2. 智力飞跃之谜",
    leapIntro:
      "人类 EQ、脑重/体重比极高，脑力超越生存需求。基因突变（如 ARHGAP11B）或促脑发育，但脑容量并非唯一解释。",
    leapSteps: ["比较 EQ 与脑重比例", "思考基因突变作用", "理解脑容量≠全部原因"],
    leapCheckpoint: {
      prompt: "为何仅靠脑容量无法完全解释人类智力？",
      options: [
        { label: "因为脑容量停滞甚至略减，但智力仍发展", correct: true, explanation: "智力提升还依赖合作、文化等因素。" },
        { label: "因为人类没有大脑", correct: false, explanation: "事实错误。" },
        { label: "因为 EQ 只适用于猫", correct: false, explanation: "EQ 用于多种动物的比较。" },
      ],
    },
    coopTitle: "3. 合作点燃智力",
    coopEyebrow: "群体 hunting",
    coopIntro:
      "Bickerton 与 Tomasello 认为合作是智力跃升的关键。狩猎需计划、沟通、角色分工，推动语言与社会技能发展。",
    coopSteps: ["识别驱赶/埋伏等分工", "联系计划、沟通对大脑的锻炼", "思考合作如何积累知识"],
    coopCheckpoint: {
      prompt: "狩猎合作如何促进智力？",
      options: [
        { label: "迫使人类规划、沟通、分工，锻炼大脑", correct: true, explanation: "合作提高生存并刺激认知。" },
        { label: "完全不需要计划", correct: false, explanation: "恰恰需要计划与沟通。" },
        { label: "阻碍语言发展", correct: false, explanation: "合作促进语言与社交。"},
      ],
    },
    civilTitle: "4. 合作走向文明",
    civilIntro:
      "人类合作深且常态化：分享食物、传授经验、抚养后代，甚至利他。共享认知促语言、文字、规范与社会结构形成。",
    civilCardTitle: "文明推进因素",
    civilPoints: ["共享身份与利他合作", "语言文字传递经验", "角色分化→氏族、部落、社会"],
    civilCheckpoint: {
      prompt: "人类合作与其他动物不同之处在于：",
      options: [
        { label: "合作深入且常态化，并包含利他与知识传递", correct: true, explanation: "文本强调深度合作与传承。" },
        { label: "只在偶尔捕猎时合作", correct: false, explanation: "合作是社会常态。" },
        { label: "完全不分享经验", correct: false, explanation: "恰恰通过分享累积文明。" },
      ],
    },
    summaryTitle: "小结",
    summaryPoints: [
      "基因与脑容量奠定物质基础，但合作与文化催化智力飞跃。",
      "狩猎分工锻炼计划、沟通、社交能力。",
      "深层合作与知识传承是文明与高智力的关键动力。",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand human evolution history and the mystery of our intelligence leap.",
      "See cooperation’s key role in intelligence and civilization.",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "Why so smart?",
    intro:
      "Humans excel at perception, memory, decision, imagination, emotion. Why did only we, among millions of species, reach this level and build civilization?",
    introCardTitle: "Core question",
    introCard: "What let humans stand out and build complex societies?",
    evolutionTitle: "1. Human Evolution",
    evolutionEyebrow: "From Earth to Homo sapiens",
    evolutionIntro:
      "Earth cooled, life emerged, diversity flourished. ~6M years ago upright apes, ~2M tool-making Homo habilis, ~200k Homo sapiens, ~60k out-of-Africa.",
    evolutionSteps: ["Trace timeline milestones", "Link each step to intelligence growth", "Note migration and gene flow"],
    evolutionCheckpoint: {
      prompt: "Homo sapiens left Africa roughly:",
      options: [
        { label: "About 60,000 years ago", correct: true, explanation: "Text highlights ~60k migration and mixing." },
        { label: "About 2 million years ago", correct: false, explanation: "That’s Homo habilis era." },
        { label: "About 450 million years ago", correct: false, explanation: "Not related to humans." },
      ],
    },
    leapTitle: "2. Puzzle of the Intelligence Leap",
    leapIntro:
      "Humans have high EQ and brain/body ratio; brains exceed survival needs. Genes (e.g., ARHGAP11B) may aid growth, but brain size alone can’t explain it.",
    leapSteps: ["Compare EQ/brain ratios", "Consider genetic mutations", "See why brain size ≠ full answer"],
    leapCheckpoint: {
      prompt: "Why can’t brain size alone explain human intelligence?",
      options: [
        { label: "Brain size plateaued or dipped while intelligence advanced", correct: true, explanation: "Cooperation/culture also drive gains." },
        { label: "Humans have no brain", correct: false, explanation: "Incorrect." },
        { label: "EQ only applies to cats", correct: false, explanation: "EQ compares many animals." },
      ],
    },
    coopTitle: "3. Cooperation Sparked Intelligence",
    coopEyebrow: "Group hunting",
    coopIntro:
      "Bickerton and Tomasello argue cooperation triggered the leap. Hunting required planning, communication, roles—boosting language and social skills.",
    coopSteps: ["Identify drive/ambush roles", "See planning/communication brain workout", "Connect cooperation to shared knowledge"],
    coopCheckpoint: {
      prompt: "How did cooperative hunting grow intelligence?",
      options: [
        { label: "Forced planning, communication, role split—exercising brains", correct: true, explanation: "Co-op raised survival and cognition." },
        { label: "Needed no planning at all", correct: false, explanation: "It demanded plans." },
        { label: "Blocked language growth", correct: false, explanation: "It fostered language/social skills." },
      ],
    },
    civilTitle: "4. Cooperation → Civilization",
    civilIntro:
      "Human cooperation is deep and routine: sharing food, passing skills, caring for others’ children, even altruism. Shared understanding enabled language, writing, norms, social roles.",
    civilCardTitle: "Civilization drivers",
    civilPoints: ["Shared identity + altruism", "Language/writing to pass experience", "Role differentiation → clans, tribes, society"],
    civilCheckpoint: {
      prompt: "Human cooperation differs because it is:",
      options: [
        {
          label: "Deep, routine, includes altruism and knowledge sharing",
          correct: true,
          explanation: "Text stresses depth/continuity and transmission.",
        },
        { label: "Only occasional for hunting", correct: false, explanation: "It’s a norm." },
        { label: "Never involves sharing experience", correct: false, explanation: "Sharing builds civilization." },
      ],
    },
    summaryTitle: "Summary",
    summaryPoints: [
      "Genes/brain give substrate; cooperation and culture catalyze the leap.",
      "Hunt roles trained planning, language, social skills.",
      "Deep cooperation + knowledge transfer power civilization and high intelligence.",
    ],
  },
};
