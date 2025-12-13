import { useMemo, useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson1_2({ lang }: LessonProps) {
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
    { id: "smart-vs-ai", label: t.smartTitle },
    { id: "human-intel", label: t.humanTitle },
    { id: "definition", label: t.definitionTitle },
    { id: "universality", label: t.universalTitle },
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
          <InfoCard title={t.goalTitle}>
            <p className="text-sm text-slate-700">{t.goal}</p>
          </InfoCard>
        </SectionBlock>

        <SectionBlock id="smart-vs-ai" title={t.smartTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.smartIntro}</p>
          <SmartSorter lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.smartSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.smartCheckpoint.prompt}
            options={t.smartCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="human-intel" title={t.humanTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.humanIntro}</p>
          <InfoCard title={t.humanCardTitle}>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
              {t.humanPoints.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.humanSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.humanCheckpoint.prompt}
            options={t.humanCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="definition" title={t.definitionTitle} eyebrow={t.definitionEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.definitionIntro}</p>
          <LogicPath lang={lang} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.definitionCheckpoint.prompt}
            options={t.definitionCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="universality" title={t.universalTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.universalIntro}</p>
          <InfoCard title={t.universalCardTitle}>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
              {t.universalPoints.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </InfoCard>
        </SectionBlock>
      </div>
    </div>
  );
}

function SmartSorter({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const devices = useMemo(
    () => [
      { name: isZh ? "温控冰箱" : "Auto-temp fridge", type: "auto" },
      { name: isZh ? "扫地机器人（SLAM）" : "Robot vacuum (SLAM)", type: "ai" },
      { name: isZh ? "自动关火电饭煲" : "Auto-off rice cooker", type: "auto" },
      { name: isZh ? "会学习口味的语音助手" : "Voice assistant that learns tastes", type: "ai" },
    ],
    [isZh],
  );
  const [filter, setFilter] = useState<"all" | "auto" | "ai">("all");
  const filtered = devices.filter((d) => filter === "all" || d.type === filter);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex flex-wrap gap-2">
        {[
          { key: "all", label: isZh ? "全部" : "All" },
          { key: "auto", label: isZh ? "自动化" : "Automation" },
          { key: "ai", label: isZh ? "人工智能" : "Artificial intelligence" },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setFilter(tab.key as "all" | "auto" | "ai")}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              filter === tab.key
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-3 grid gap-2 md:grid-cols-2">
        {filtered.map((d) => (
          <div
            key={d.name}
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-800"
          >
            {d.name}
            <span className="ml-2 rounded-full bg-white px-2 py-0.5 text-[11px] font-bold text-brand-700">
              {d.type === "ai" ? (isZh ? "模拟思考" : "Simulates thinking") : isZh ? "预设流程" : "Preset flow"}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-slate-600">
        {isZh
          ? "判断标准：是否能学习、推理或适应新情境，而不仅仅是重复固定流程。"
          : "Test: does it learn/reason/adapt, not just repeat a fixed routine?"}
      </p>
    </div>
  );
}

function LogicPath({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const steps = useMemo(
    () => [
      isZh ? "亚里士多德：思维有逻辑可循" : "Aristotle: thinking follows logic",
      isZh ? "布尔：把逻辑变成符号运算" : "Boole: turn logic into symbolic operations",
      isZh ? "ENIAC：计算机诞生" : "ENIAC: computers arrive",
      isZh ? "1956 达特茅斯：AI 命名" : "1956 Dartmouth: AI is named",
    ],
    [isZh],
  );
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex flex-wrap gap-2">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-700">
              {i + 1}
            </div>
            <span className="text-sm font-semibold text-slate-800">{step}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-slate-600">
        {isZh ? "AI 的定义：用计算机模拟人的智能行为。" : "Definition: using computers to simulate human intelligent behavior."}
      </p>
    </div>
  );
}

const content = {
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "认识人类智能的主要类型与特征。",
      "厘清人工智能的定义：用计算模拟人类智能行为。",
    ],
    introTitle: "开篇理解",
    introEyebrow: "课程导入",
    intro:
      "广告常把“自动”说成“智能”，但真正的人工智能追求“像人一样思考与行动”。本节用案例辨别“自动化”与“智能化”，并回到 AI 的正式定义。",
    goalTitle: "学习主线",
    goal: "从“自动”到“智能”：只有能学习、推理、适应的机器才属于人工智能。",
    smartTitle: "1. “聪明机器”不一定是人工智能",
    smartIntro:
      "自动关火、控温、转头的机器是自动化，而能学习用户偏好的助手、会规划路径的扫地机器人更接近人工智能。",
    smartSteps: [
      "先判断设备是否只是固定流程",
      "再看能否学习、推理或适应环境变化",
      "归类：自动化 vs. 人工智能",
    ],
    smartCheckpoint: {
      prompt: "以下哪一项更符合人工智能的特征？",
      options: [
        { label: "会根据房间变化更新地图的扫地机器人", correct: true, explanation: "体现感知与规划的学习/适应。" },
        { label: "恒温冰箱", correct: false, explanation: "属于自动控制，不模拟思维。" },
        { label: "定时关机的烤箱", correct: false, explanation: "预设计时，不具智能行为。"},
      ],
    },
    humanTitle: "2. 人类智能有哪些？",
    humanIntro:
      "智能包含感知、运动、推理、学习、规划、想象、创造、情感表达等。人类与动物的差异在更复杂的感知联结、双足行走、精细动作与语言理解。",
    humanCardTitle: "人类智能的例子",
    humanPoints: ["感知并理解含义", "双足行走、精细书写雕刻", "想象、创造、表达情感"],
    humanSteps: [
      "列出人类智能的常见表现",
      "与动物或机器的简单自动化对比",
      "思考哪些能力最难被机器模拟",
    ],
    humanCheckpoint: {
      prompt: "哪项最能体现“高级智能”而非简单自动？",
      options: [
        { label: "听到声音并理解其含义", correct: true, explanation: "涉及感知+理解，超越反射。" },
        { label: "风吹风铃发声", correct: false, explanation: "物理现象，无智能。" },
        { label: "闹钟按时响铃", correct: false, explanation: "预设程序。"},
      ],
    },
    definitionTitle: "3. 人工智能的定义",
    definitionEyebrow: "逻辑脉络",
    definitionIntro:
      "从亚里士多德的逻辑到布尔代数，再到 ENIAC 计算机和 1956 年“人工智能”命名，AI 选择了“用计算机模拟人类智能行为”的路线。",
    definitionCheckpoint: {
      prompt: "AI 之所以区别于普通自动化，是因为它：",
      options: [
        { label: "用计算机模拟人的智能行为", correct: true, explanation: "核心在于“模拟智能”而非只自动。" },
        { label: "仅靠机械结构实现动作", correct: false, explanation: "那是自动化或机械化。" },
        { label: "必须有金属外壳", correct: false, explanation: "外形与智能无直接关系。" },
      ],
    },
    universalTitle: "4. AI 的普适性",
    universalIntro:
      "智能是所有学科的基础。AI 如果能模拟人类智能，就能服务或拓展任何学科，已经在生物、化学、物理、天文等领域展现通用性。",
    universalCardTitle: "关键要点",
    universalPoints: ["模拟智能→跨学科适用", "自动≠智能：需要学习、推理、适应", "AI 目标：接近甚至超越人类高级思维"],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Learn main types of human intelligence.",
      "Clarify AI’s definition: using computation to simulate human intelligent behavior.",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "Lesson launch",
    intro:
      "Marketing often calls anything automatic “smart,” but true AI aims to think and act like humans. We separate automation from intelligence and return to AI’s formal definition.",
    goalTitle: "Guiding Thread",
    goal: "From “automatic” to “intelligent”: only machines that learn, reason, or adapt count as AI.",
    smartTitle: "1. Smart Machines ≠ Artificial Intelligence",
    smartIntro:
      "Auto-off cookers or thermostats are automation; assistants that learn tastes or vacuums that map rooms lean toward AI.",
    smartSteps: [
      "Check if it’s just a fixed routine.",
      "Ask if it learns, reasons, or adapts.",
      "Classify: automation vs. AI.",
    ],
    smartCheckpoint: {
      prompt: "Which fits AI better?",
      options: [
        { label: "A vacuum that updates maps as rooms change", correct: true, explanation: "Shows sensing + planning/learning." },
        { label: "A fridge that keeps temperature steady", correct: false, explanation: "Automatic control, not thinking." },
        { label: "An oven that turns off on schedule", correct: false, explanation: "Preset timing only." },
      ],
    },
    humanTitle: "2. Human Intelligence",
    humanIntro:
      "Intelligence spans perception, movement, reasoning, learning, planning, imagination, creation, emotions. Humans differ via richer sense-links, bipedal gait, fine motor skills, and language understanding.",
    humanCardTitle: "Examples",
    humanPoints: ["Perceive and understand meaning", "Bipedal walking, fine writing or carving", "Imagine, create, express emotions"],
    humanSteps: [
      "List common human-intelligence behaviors.",
      "Contrast with animals or simple machines.",
      "Spot which abilities are hardest to simulate.",
    ],
    humanCheckpoint: {
      prompt: "Which best shows higher intelligence over simple automation?",
      options: [
        { label: "Hearing a sound and understanding its meaning", correct: true, explanation: "Combines perception + semantics." },
        { label: "Wind chimes ringing", correct: false, explanation: "A physical reaction only." },
        { label: "An alarm clock ringing on time", correct: false, explanation: "Preset routine." },
      ],
    },
    definitionTitle: "3. Definition of AI",
    definitionEyebrow: "Logic path",
    definitionIntro:
      "From Aristotle’s logic to Boole’s algebra to ENIAC and the 1956 naming, AI chose the path of using computers to simulate human intelligent behavior.",
    definitionCheckpoint: {
      prompt: "AI differs from plain automation because it:",
      options: [
        { label: "Uses computers to simulate human intelligent behavior", correct: true, explanation: "Simulation of intelligence is key." },
        { label: "Relies only on mechanical parts", correct: false, explanation: "That’s automation/mechanization." },
        { label: "Must have a metal shell", correct: false, explanation: "Form doesn’t define intelligence." },
      ],
    },
    universalTitle: "4. Universality of AI",
    universalIntro:
      "Intelligence underpins every field. If AI simulates human intelligence, it can serve any discipline, already impacting biology, chemistry, physics, astronomy, and more.",
    universalCardTitle: "Key Points",
    universalPoints: [
      "Simulating intelligence → cross-disciplinary use",
      "Automation ≠ AI: needs learning/reasoning/adaptation",
      "Goal: reach or exceed advanced human thinking",
    ],
  },
};
