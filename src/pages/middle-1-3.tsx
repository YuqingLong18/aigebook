import { useMemo, useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson1_3({ lang }: LessonProps) {
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
    { id: "face", label: t.faceTitle },
    { id: "plate", label: t.plateTitle },
    { id: "object", label: t.objectTitle },
    { id: "risks", label: t.risksTitle },
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
          <VisionGrowth lang={lang} />
        </SectionBlock>

        <SectionBlock id="face" title={t.faceTitle} eyebrow={t.faceEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.faceIntro}</p>
          <GuidedSteps title={ui.guidedTitle} steps={t.faceSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.faceCheckpoint.prompt}
            options={t.faceCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="plate" title={t.plateTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.plateIntro}</p>
          <PlateFlow lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.plateSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.plateCheckpoint.prompt}
            options={t.plateCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="object" title={t.objectTitle} eyebrow={t.objectEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.objectIntro}</p>
          <ObjectScene lang={lang} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.objectCheckpoint.prompt}
            options={t.objectCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="risks" title={t.risksTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.risksIntro}</p>
          <InfoCard title={t.risksCardTitle}>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
              {t.risksPoints.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </InfoCard>
        </SectionBlock>
      </div>
    </div>
  );
}

function VisionGrowth({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const stages = useMemo(
    () => [
      { year: "1960s", text: isZh ? "特征点+几何规则，易受光照/角度影响" : "Keypoints + geometry; fragile to light/angle" },
      { year: "2012", text: isZh ? "深度网络显著降低错误率" : "Deep nets slash error rates" },
      { year: "Now", text: isZh ? "人脸/车牌 >99% 准确，物体识别超越人眼" : "Face/plate >99%, object beats humans" },
    ],
    [isZh],
  );
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="grid gap-3 md:grid-cols-3">
        {stages.map((s) => (
          <div key={s.year} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
            <p className="text-xs font-semibold text-brand-700">{s.year}</p>
            <p className="mt-1 text-sm text-slate-800">{s.text}</p>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-slate-600">
        {isZh ? "深度学习让机器视觉进入日常。" : "Deep learning brought computer vision to daily life."}
      </p>
    </div>
  );
}

function PlateFlow({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const [condition, setCondition] = useState<"clear" | "fast" | "rain">("clear");
  const notes: Record<typeof condition, string> = {
    clear: isZh ? "晴天+低速：定位、识别最容易，>99% 准确率。" : "Clear & slow: easiest; >99% accuracy.",
    fast: isZh ? "高速行驶：定位模糊，需更强模型与帧选择。" : "High speed: blur hurts; need stronger models/frame pick.",
    rain: isZh ? "雨雪弱光：图像质量差，深度网络显著提升鲁棒性。" : "Rain/low light: poor quality; deep nets improve robustness.",
  };
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex gap-2">
        {[
          { key: "clear", label: isZh ? "晴朗" : "Clear" },
          { key: "fast", label: isZh ? "高速" : "Fast" },
          { key: "rain", label: isZh ? "雨雪" : "Rain/Snow" },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setCondition(tab.key as typeof condition)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              condition === tab.key
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-sm text-slate-800">{notes[condition]}</p>
      <p className="mt-1 text-xs text-slate-600">
        {isZh ? "流程：先定位车牌，再识别字符，环境越复杂越考验模型。" : "Flow: locate plate, then read text; tough conditions test models."}
      </p>
    </div>
  );
}

function ObjectScene({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const [focus, setFocus] = useState("cars");
  const items: Record<string, string[]> = {
    cars: [isZh ? "汽车" : "Car", isZh ? "行人" : "Pedestrian", isZh ? "红绿灯" : "Traffic light"],
    store: [isZh ? "商品" : "Item", isZh ? "篮子" : "Basket", isZh ? "手部动作" : "Hand action"],
    lab: [isZh ? "显微病灶" : "Lesion", isZh ? "细胞类型" : "Cell type", isZh ? "标记区域" : "Marked area"],
  };
  const scenes = [
    { key: "cars", label: isZh ? "自动驾驶" : "Self-driving" },
    { key: "store", label: isZh ? "无人商店" : "Unmanned store" },
    { key: "lab", label: isZh ? "医学影像" : "Medical images" },
  ] as const;
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex flex-wrap gap-2">
        {scenes.map((s) => (
          <button
            key={s.key}
            type="button"
            onClick={() => setFocus(s.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              focus === s.key
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {s.label}
          </button>
        ))}
      </div>
      <div className="mt-3 grid gap-2 md:grid-cols-3">
        {items[focus].map((i) => (
          <div key={i} className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-800">
            {i}
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-slate-600">
        {isZh
          ? "目标识别=框出对象并标注类别，是场景理解的第一步。"
          : "Object recognition: box + label objects—the first step of scene understanding."}
      </p>
    </div>
  );
}

const content = {
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解计算机视觉的概念与重要性。",
      "了解人脸、车牌、物体识别的原理与应用。",
      "思考机器视觉的优势与潜在风险。",
    ],
    introTitle: "开篇理解",
    introEyebrow: "机器的眼睛",
    intro:
      "给机器装上“眼睛”让它能看、能认，且在许多场景超过人眼。深度学习让准确率跃升，推动刷脸支付、电子警察等应用普及。",
    faceTitle: "1. 人脸识别",
    faceEyebrow: "从几何到深度",
    faceIntro:
      "早期依赖关键点与几何特征，光照角度变化会大幅降性能；2014 年后深度网络让 LFW 数据集准确率超 99.8%，进入日常支付与安防。",
    faceSteps: [
      "先定位“人脸区域”，再做身份匹配",
      "思考光照/角度对特征稳定性的影响",
      "识别典型应用：支付、检票、安防、宠物找回",
    ],
    faceCheckpoint: {
      prompt: "深度网络对人脸识别的主要贡献是：",
      options: [
        { label: "显著提升复杂场景下的稳定性和准确率", correct: true, explanation: "鲁棒性与精度跃升。" },
        { label: "只支持白天使用", correct: false, explanation: "深度模型提升了多条件表现。" },
        { label: "完全不需要定位人脸", correct: false, explanation: "定位仍是管线的一步。" },
      ],
    },
    plateTitle: "2. 车牌识别",
    plateIntro:
      "车牌识别分“定位车牌 + 识别字符”两步。雨雪、弱光、高速等会降低准确率，深度学习让识别在复杂环境下依然保持高精度，支撑“电子交警”。",
    plateSteps: [
      "区分“定位”与“字符识别”两个子任务",
      "列出复杂条件：高速、雨雪、光线差、车流密",
      "讨论为何电子警察离不开高鲁棒性",
    ],
    plateCheckpoint: {
      prompt: "哪种情境最能考验车牌识别的鲁棒性？",
      options: [
        { label: "雨雪弱光+高速行驶", correct: true, explanation: "模糊+低质图像最具挑战。" },
        { label: "车库静态展示车", correct: false, explanation: "静态、光线可控，难度低。" },
        { label: "白天清晰静止照片", correct: false, explanation: "最容易的情况。" },
      ],
    },
    objectTitle: "3. 物体识别",
    objectEyebrow: "场景理解的入口",
    objectIntro:
      "物体识别在自驾、无人店、工业检测等场景中框出对象并标注类别。ImageNet 竞赛推动精度从 28% 误差降到 2.25%，已超人眼。",
    objectCheckpoint: {
      prompt: "物体识别的核心任务是：",
      options: [
        { label: "定位并标注场景中的对象类别", correct: true, explanation: "框+类是基础步骤。" },
        { label: "只统计像素数量", correct: false, explanation: "像素统计不等于识别。" },
        { label: "只支持单一类别", correct: false, explanation: "需识别多类别、多目标。" },
      ],
    },
    risksTitle: "4. 风险与思考",
    risksIntro:
      "机器视觉的感知方式可能与人不同，带来错判风险；人机协同需要对同一场景保持一致理解，避免“人看苹果、机判火焰”式偏差。",
    risksCardTitle: "小结要点",
    risksPoints: [
      "视觉能力可超人，但须防错判与偏差",
      "复杂环境需高鲁棒模型与数据",
      "人机认知一致性是安全关键",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Grasp computer vision basics and importance.",
      "Understand principles/applications of face, plate, and object recognition.",
      "Reflect on strengths and risks of machine vision.",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "Eyes for machines",
    intro:
      "Giving machines eyes lets them see and recognize—often surpassing humans. Deep learning boosted accuracy and enabled face pay, plate policing, and more.",
    faceTitle: "1. Face Recognition",
    faceEyebrow: "From geometry to deep nets",
    faceIntro:
      "Early keypoints were brittle to light/angle; post-2014 deep nets pushed LFW accuracy past 99.8%, powering payments, checkpoints, security, even pet ID.",
    faceSteps: [
      "Locate a face region, then match identity.",
      "Consider lighting/angle impact on features.",
      "List common uses: pay, tickets, security, pet find.",
    ],
    faceCheckpoint: {
      prompt: "Deep nets mainly improved face recognition by:",
      options: [
        { label: "Greatly boosting stability and accuracy in complex scenes", correct: true, explanation: "Robust and precise." },
        { label: "Only working in daytime", correct: false, explanation: "They improve multi-condition results." },
        { label: "Skipping face localization", correct: false, explanation: "Localization remains required." },
      ],
    },
    plateTitle: "2. License Plate Recognition",
    plateIntro:
      "Two steps: locate plate, then read characters. Rain, low light, and speed hurt accuracy; deep learning keeps performance high, enabling “electronic traffic police.”",
    plateSteps: [
      "Separate localization vs. character reading.",
      "List hard cases: speed, rain/snow, low light, heavy flow.",
      "Why e-police need robustness.",
    ],
    plateCheckpoint: {
      prompt: "Which scenario stresses plate-recognition robustness most?",
      options: [
        { label: "Rain/low light + high speed", correct: true, explanation: "Blur + poor images are hardest." },
        { label: "Static display car indoors", correct: false, explanation: "Controlled, easy." },
        { label: "Sunny, still photo", correct: false, explanation: "Simplest case." },
      ],
    },
    objectTitle: "3. Object Recognition",
    objectEyebrow: "Doorway to scene understanding",
    objectIntro:
      "Self-driving, unmanned stores, inspection all need boxes + labels. ImageNet drove error from 28% to 2.25%, surpassing human eyes.",
    objectCheckpoint: {
      prompt: "Core of object recognition is to:",
      options: [
        { label: "Locate and label objects in a scene", correct: true, explanation: "Box + class." },
        { label: "Only count pixels", correct: false, explanation: "Counting isn’t recognition." },
        { label: "Support only one category", correct: false, explanation: "It must handle many." },
      ],
    },
    risksTitle: "4. Risks & Reflection",
    risksIntro:
      "Machine perception may differ from ours, risking misalignment; safe collaboration needs consistent understanding to avoid mistakes (e.g., mislabeling an apple as fire).",
    risksCardTitle: "Key Points",
    risksPoints: ["Vision can surpass humans but can misjudge", "Complex settings demand robust models/data", "Human–machine alignment is safety-critical"],
  },
};
