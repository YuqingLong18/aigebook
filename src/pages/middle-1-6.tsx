import { useMemo, useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson1_6({ lang }: LessonProps) {
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
    { id: "vacuum", label: t.vacuumTitle },
    { id: "selfdrive", label: t.selfdriveTitle },
    { id: "arms", label: t.armsTitle },
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
          <RobotTypes lang={lang} />
        </SectionBlock>

        <SectionBlock id="vacuum" title={t.vacuumTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.vacuumIntro}</p>
          <PathPlanner lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.vacuumSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.vacuumCheckpoint.prompt}
            options={t.vacuumCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="selfdrive" title={t.selfdriveTitle} eyebrow={t.selfdriveEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.selfdriveIntro}</p>
          <GuidedSteps title={ui.guidedTitle} steps={t.selfdriveSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.selfdriveCheckpoint.prompt}
            options={t.selfdriveCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="arms" title={t.armsTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.armsIntro}</p>
          <ArmModes lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.armsSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.armsCheckpoint.prompt}
            options={t.armsCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="summary" title={t.summaryTitle}>
          <InfoCard title={t.summaryTitle}>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
              {t.summaryPoints.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </InfoCard>
        </SectionBlock>
      </div>
    </div>
  );
}

function RobotTypes({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const types = useMemo(
    () => [
      { title: isZh ? "移动机器人" : "Mobile robots", note: isZh ? "自驾车、无人机、清洁车" : "Self-driving cars, drones, cleaners" },
      { title: isZh ? "操作型机器人" : "Manipulation robots", note: isZh ? "机械臂、手术机器人" : "Arms, surgical bots" },
      { title: isZh ? "组合能力" : "Hybrid abilities", note: isZh ? "如火星车：先走再取样" : "e.g., Mars rover: move + sample" },
    ],
    [isZh],
  );
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="grid gap-2 md:grid-cols-3">
        {types.map((t) => (
          <div key={t.title} className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
            <p className="text-sm font-semibold text-slate-900">{t.title}</p>
            <p className="mt-1 text-xs text-slate-700">{t.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PathPlanner({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const [mode, setMode] = useState<"random" | "slam">("random");
  const copy = {
    random: isZh
      ? "“随机碰撞”法：碰到障碍就转向，路径混乱且易卡住。"
      : "Random bumping: turn on collision—messy paths, easy to get stuck.",
    slam: isZh
      ? "SLAM 同步建图+定位：边探索边绘制地图，规划覆盖更高效。"
      : "SLAM mapping + localization: build map while exploring; plan efficient coverage.",
  };
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex gap-2">
        {[
          { key: "random", label: isZh ? "早期随机" : "Early random" },
          { key: "slam", label: "SLAM" },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setMode(tab.key as "random" | "slam")}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              mode === tab.key
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-sm text-slate-800">{copy[mode]}</p>
      <p className="mt-1 text-xs text-slate-600">
        {isZh ? "高效清扫依赖规划；SLAM 让机器人无需预制地图。" : "Efficient cleaning needs planning; SLAM removes pre-made map need."}
      </p>
    </div>
  );
}

function ArmModes({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const [mode, setMode] = useState<"programmed" | "taught" | "selflearn">("programmed");
  const notes: Record<typeof mode, string> = {
    programmed: isZh
      ? "传统示教：固定程序，位置变化就容易失败。"
      : "Fixed programs; small shifts can break tasks.",
    taught: isZh
      ? "示教学习：人工带着走一遍，机器人记录动作。"
      : "Teach-and-repeat: guide once, robot records actions.",
    selflearn: isZh
      ? "自主学习：反复尝试抓取，优化策略，适应不同形状。"
      : "Self-learning: trial-and-error grasping to adapt to shapes.",
  };
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex gap-2">
        {[
          { key: "programmed", label: isZh ? "固定程序" : "Fixed program" },
          { key: "taught", label: isZh ? "示教" : "Taught" },
          { key: "selflearn", label: isZh ? "自主学习" : "Self-learning" },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setMode(tab.key as typeof mode)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              mode === tab.key
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-sm text-slate-800">{notes[mode]}</p>
      <p className="mt-1 text-xs text-slate-600">
        {isZh ? "智能化让机械臂更灵活，也提升生产安全与效率。" : "Intelligence makes arms flexible, boosting safety and efficiency."}
      </p>
    </div>
  );
}

const content = {
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解机器人类型：移动与操作。",
      "了解扫地机器人、自动驾驶、机械臂的基本原理与应用。",
      "思考人工智能如何让机器人更聪明。",
    ],
    introTitle: "开篇理解",
    introEyebrow: "机器的手与脚",
    intro:
      "机器人包含虚拟与实体两类，这里聚焦实体机器人：移动（走、飞、驶）与操作（抓、焊、装配），很多场景需要二者结合。",
    vacuumTitle: "1. 扫地机器人",
    vacuumIntro:
      "关键是路径规划。早期随机碰撞效率低，SLAM 让机器人边走边建图、规划覆盖，避免重复与卡死。",
    vacuumSteps: [
      "区分“随机碰撞”与“规划路径”",
      "理解 SLAM：同时定位与建图",
      "思考为何规划提高清洁效率",
    ],
    vacuumCheckpoint: {
      prompt: "SLAM 相比随机碰撞的优势是：",
      options: [
        { label: "能同步建图和定位，规划更高效", correct: true, explanation: "避免盲撞、少重复。" },
        { label: "只能在空房间运行", correct: false, explanation: "正是为复杂环境设计。" },
        { label: "完全不需要传感器", correct: false, explanation: "仍依赖感知获取环境信息。" },
      ],
    },
    selfdriveTitle: "2. 自动驾驶",
    selfdriveEyebrow: "移动智能",
    selfdriveIntro:
      "自动驾驶依赖感知（雷达、摄像头）、路径规划与控制。规划是最智能的环节，需在复杂道路、突发情况下做决策。目标是从辅助驾驶到 L5 全无人驾驶。",
    selfdriveSteps: [
      "分解为感知→规划→控制",
      "列出挑战：高速、突发状况、多样路况",
      "理解自动驾驶对出行、物流、城市的影响",
    ],
    selfdriveCheckpoint: {
      prompt: "自动驾驶最核心的智能环节是：",
      options: [
        { label: "路径规划与决策", correct: true, explanation: "需要理解场景并决策。" },
        { label: "仅有车轮数量", correct: false, explanation: "硬件数量不是智能核心。" },
        { label: "忽略环境信息", correct: false, explanation: "必须依赖感知输入。" },
      ],
    },
    armsTitle: "3. 机械臂",
    armsIntro:
      "传统机械臂按固定程序工作，位置偏差就失败。引入 AI 后可示教或自主学习抓取，提高柔性与安全，适应多样场景。",
    armsSteps: [
      "区分固定程序、示教、自动学习",
      "思考柔性制造为何需要“会适应”的机械臂",
      "列举危险/重复场景中机械臂的价值",
    ],
    armsCheckpoint: {
      prompt: "AI 对机械臂带来的最大提升是：",
      options: [
        { label: "更能适应位置偏差与多样物体", correct: true, explanation: "学习与感知带来自适应能力。" },
        { label: "完全不需要数据或示教", correct: false, explanation: "学习仍需数据或示例。" },
        { label: "只能在固定位置工作", correct: false, explanation: "恰好是突破固定限制。" },
      ],
    },
    summaryTitle: "小结",
    summaryPoints: [
      "机器人分移动与操作，常需组合",
      "AI 让路径规划、感知决策更智能",
      "柔性、效率、安全是智能机器人的价值",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand mobile vs. manipulation robots.",
      "Learn basics of robot vacuums, self-driving cars, and robotic arms.",
      "See how AI makes robots smarter.",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "Hands & feet",
    intro:
      "Robots can move or manipulate—or both. We focus on physical robots: moving (drive/fly) and acting (grasp/weld), often combined.",
    vacuumTitle: "1. Robot Vacuums",
    vacuumIntro:
      "Path planning is key. Early random bumping was inefficient; SLAM maps while moving to plan efficient coverage without pre-made maps.",
    vacuumSteps: ["Contrast random vs. planned paths", "See SLAM: simultaneous localization + mapping", "Why planning boosts cleaning"],
    vacuumCheckpoint: {
      prompt: "SLAM improves over random bumping because it:",
      options: [
        { label: "Builds a map while localizing, enabling efficient plans", correct: true, explanation: "Less stuck, less repeat." },
        { label: "Only works in empty rooms", correct: false, explanation: "It’s for real environments." },
        { label: "Needs no sensors at all", correct: false, explanation: "Still needs perception." },
      ],
    },
    selfdriveTitle: "2. Self-Driving",
    selfdriveEyebrow: "Mobile intelligence",
    selfdriveIntro:
      "Self-driving uses sensing (LiDAR, cameras, radar), path planning, and control. Planning is the brain—handling complex roads and surprises on the path to Level 5.",
    selfdriveSteps: ["Break into sense → plan → control", "List challenges: speed, surprises, varied roads", "Impact on travel, logistics, cities"],
    selfdriveCheckpoint: {
      prompt: "The most intelligent core of self-driving is:",
      options: [
        { label: "Path planning and decision-making", correct: true, explanation: "Requires scene understanding + choices." },
        { label: "Number of wheels", correct: false, explanation: "Hardware count isn’t intelligence." },
        { label: "Ignoring the environment", correct: false, explanation: "It must rely on perception." },
      ],
    },
    armsTitle: "3. Robotic Arms",
    armsIntro:
      "Fixed programs break when parts shift. With AI, arms can be taught or self-learn grasps, gaining flexibility and safety for varied tasks.",
    armsSteps: ["Compare fixed, taught, self-learning modes", "Why flexible arms matter in manufacturing", "List value in dangerous/repetitive jobs"],
    armsCheckpoint: {
      prompt: "AI mainly improves arms by:",
      options: [
        { label: "Adapting to position shifts and varied objects", correct: true, explanation: "Learning + perception add flexibility." },
        { label: "Needing zero data or teaching", correct: false, explanation: "Learning still needs examples/data." },
        { label: "Restricting them to fixed spots", correct: false, explanation: "Opposite—flexibility rises." },
      ],
    },
    summaryTitle: "Summary",
    summaryPoints: [
      "Robots move, manipulate, or combine both.",
      "AI powers planning, perception, and decisions.",
      "Flexibility, efficiency, safety are the gains.",
    ],
  },
};
