import { useMemo, useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { FigureCard } from "../components/FigureCard";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { AdversarialNoiseDemo } from "../demos/AdversarialNoiseDemo";
import { SpoofingRiskDemo } from "../demos/SpoofingRiskDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function PrimaryLesson7_9({ lang }: LessonProps) {
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
    { id: "what", label: t.whatTitle },
    { id: "risks", label: t.risksTitle },
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

        <SectionBlock id="what" title={t.whatTitle} eyebrow={t.whatEyebrow}>
          <InfoCard title={t.whatConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.whatConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.whatParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <div className="grid gap-3 md:grid-cols-2">
            {t.whatFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <AdversarialNoiseDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.whatSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.whatCheckpoint.prompt}
            options={t.whatCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="risks" title={t.risksTitle} eyebrow={t.risksEyebrow}>
          <InfoCard title={t.risksConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.risksConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.risksParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <div className="grid gap-3 md:grid-cols-2">
            {t.risksFigures.map((fig) => (
              <FigureCard
                key={fig.label}
                label={fig.label}
                caption={fig.caption}
                placeholder={fig.placeholder}
              />
            ))}
          </div>
          <SpoofingRiskDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.risksSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.risksCheckpoint.prompt}
            options={t.risksCheckpoint.options}
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
          <DefenseMixerDemo
            lang={lang}
            title={t.foodDemo.title}
            goal={t.foodDemo.goal}
            resetLabel={ui.reset}
            labels={t.foodDemo.labels}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.foodSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.foodCheckpoint.prompt}
            options={t.foodCheckpoint.options}
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

function DefenseMixerDemo({
  lang,
  title,
  goal,
  resetLabel,
  labels,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  labels: { noise: string; ensemble: string; risk: string; note: string };
}) {
  const isZh = lang === "zh";
  const [noise, setNoise] = useState(20);
  const [ensemble, setEnsemble] = useState(30);

  const risk = useMemo(() => {
    const raw = 90 - noise * 0.5 - ensemble * 0.6;
    return Math.max(10, Math.round(raw));
  }, [ensemble, noise]);

  const reset = () => {
    setNoise(20);
    setEnsemble(30);
  };

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
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
          onClick={reset}
          aria-label={resetLabel}
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-slate-700">
            {labels.noise}
            <input
              type="range"
              min={0}
              max={80}
              value={noise}
              onChange={(e) => setNoise(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{noise}</span>
          </label>
          <label className="block text-sm font-semibold text-slate-700">
            {labels.ensemble}
            <input
              type="range"
              min={0}
              max={80}
              value={ensemble}
              onChange={(e) => setEnsemble(Number(e.target.value))}
              className="mt-1 w-full accent-brand-500"
            />
            <span className="text-xs text-slate-500">{ensemble}</span>
          </label>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{labels.risk}</p>
          <p className="text-2xl font-semibold text-slate-900">{risk}%</p>
          <p className="mt-2 text-xs text-slate-600">{labels.note}</p>
        </div>
      </div>
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand what adversarial examples are.",
      "Recognize real-world risks from adversarial examples.",
      "Learn simple defense ideas and stay security aware.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Overview",
    introText:
      "Adversarial examples are tiny, crafted changes that fool neural networks into making confident mistakes.",
    whatTitle: "1. What Are Adversarial Examples?",
    whatEyebrow: "Fragile models",
    whatConceptTitle: "Concept Card",
    whatConceptLines: [
      "Small, human-invisible changes can flip a prediction.",
      "Models may output wrong answers with high confidence.",
      "FGSM and similar methods craft such perturbations.",
    ],
    whatParas: [
      "A panda can be changed into a “gibbon” in the model’s eyes with tiny noise.",
      "Adversarial examples are usually artificial, not naturally occurring.",
    ],
    whatFigures: [
      {
        label: "Figure 7-32",
        caption: "Example of adversarial images.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 7-33",
        caption: "Adding noise to images can cause deep neural networks to misclassify.",
        placeholder: "Illustration placeholder",
      },
    ],
    whatSteps: [
      "Adjust noise and patches.",
      "Watch the prediction change.",
      "Explain why the change is dangerous.",
    ],
    whatCheckpoint: {
      prompt: "What is an adversarial example?",
      options: [
        {
          label: "A tiny change that tricks a model into a wrong answer.",
          correct: true,
          explanation: "Small perturbations can cause confident errors.",
        },
        {
          label: "A normal photo that always works.",
          correct: false,
          explanation: "Adversarial examples are crafted to fool models.",
        },
        {
          label: "A training dataset of clean images.",
          correct: false,
          explanation: "It is a specific input designed to attack models.",
        },
      ],
    },
    risksTitle: "2. Risks of Adversarial Examples",
    risksEyebrow: "Security threats",
    risksConceptTitle: "Concept Card",
    risksConceptLines: [
      "Traffic signs can be misread with tiny stickers.",
      "Face recognition can be fooled by adversarial glasses.",
      "Biometric systems like voiceprints are also vulnerable.",
    ],
    risksParas: [
      "A small dot could turn a red light into a green light for a model.",
      "Adversarial glasses can cause a system to confuse identities.",
    ],
    risksFigures: [
      {
        label: "Figure 7-34",
        caption: "Adversarial changes to traffic lights and stop signs.",
        placeholder: "Illustration placeholder",
      },
      {
        label: "Figure 7-35",
        caption: "Adversarial glasses.",
        placeholder: "Illustration placeholder",
      },
    ],
    risksSteps: [
      "Select an attack type.",
      "Read the risk and defenses.",
      "Summarize why security matters.",
    ],
    risksCheckpoint: {
      prompt: "Why are adversarial examples dangerous?",
      options: [
        {
          label: "They can fool critical systems like traffic or security.",
          correct: true,
          explanation: "Misclassification can lead to real-world harm.",
        },
        {
          label: "They only affect cartoons.",
          correct: false,
          explanation: "They can affect real systems.",
        },
        {
          label: "They make models more accurate.",
          correct: false,
          explanation: "They reduce reliability.",
        },
      ],
    },
    foodTitle: "Food for Thought",
    foodEyebrow: "Defense",
    foodParas: [
      "Adversarial examples reveal the fragility of deep learning.",
      "Defenses like random noise and model ensembles can reduce risk but not eliminate it.",
    ],
    foodDemo: {
      title: "Defense Mixer",
      goal: "See how simple defenses reduce risk.",
      labels: {
        noise: "Random noise",
        ensemble: "Model ensemble",
        risk: "Attack risk",
        note: "Combining defenses lowers risk but cannot remove it completely.",
      },
    },
    foodSteps: [
      "Increase noise and ensemble strength.",
      "Watch risk decrease.",
      "Explain why no defense is perfect yet.",
    ],
    foodCheckpoint: {
      prompt: "Which statement is true about defenses?",
      options: [
        {
          label: "Defenses help but cannot fully eliminate risk.",
          correct: true,
          explanation: "Current methods reduce, not erase, vulnerability.",
        },
        {
          label: "Random noise guarantees perfect safety.",
          correct: false,
          explanation: "It helps but cannot guarantee safety.",
        },
        {
          label: "Defenses are never needed.",
          correct: false,
          explanation: "Security measures are important.",
        },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryEyebrow: "Summary",
    summaryPoints: [
      "Adversarial examples are tiny changes that mislead models.",
      "They pose real risks to traffic, security, and biometrics.",
      "Defenses can reduce risk but must keep improving.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解对抗样本的基本概念。",
      "认识对抗样本带来的现实风险。",
      "了解简单防护思路并提高安全意识。",
    ],
    introTitle: "故事开始",
    introEyebrow: "概览",
    introText: "对抗样本是一些微小却精心设计的变化，能让模型做出错误判断。",
    whatTitle: "1. 什么是对抗样本？",
    whatEyebrow: "脆弱性",
    whatConceptTitle: "概念卡片",
    whatConceptLines: [
      "细微变化就能改变模型判断。",
      "模型会以很高置信度给出错误答案。",
      "FGSM 等方法可以生成对抗样本。",
    ],
    whatParas: [
      "熊猫图片加一点噪声，模型可能认成长臂猿。",
      "对抗样本通常是人为制造的。",
    ],
    whatFigures: [
      {
        label: "图 7-32",
        caption: "对抗样本示例。",
        placeholder: "示意图占位",
      },
      {
        label: "图 7-33",
        caption: "加入噪声会让模型误分类。",
        placeholder: "示意图占位",
      },
    ],
    whatSteps: [
      "调节噪声与贴片。",
      "观察模型预测变化。",
      "说明为什么这很危险。",
    ],
    whatCheckpoint: {
      prompt: "对抗样本是什么？",
      options: [
        {
          label: "用微小变化欺骗模型的输入。",
          correct: true,
          explanation: "小扰动能造成错误判断。",
        },
        {
          label: "永远正确的正常图片。",
          correct: false,
          explanation: "对抗样本是专门设计的。",
        },
        {
          label: "一份干净的训练数据。",
          correct: false,
          explanation: "它是攻击性输入。",
        },
      ],
    },
    risksTitle: "2. 对抗样本的风险",
    risksEyebrow: "安全威胁",
    risksConceptTitle: "概念卡片",
    risksConceptLines: [
      "交通信号可能被小贴纸误读。",
      "人脸识别可能被对抗眼镜欺骗。",
      "声纹和指纹也可能被攻击。",
    ],
    risksParas: [
      "在红灯上贴一个小点，模型可能识别成绿灯。",
      "对抗眼镜可能让系统把人识别成别人。",
    ],
    risksFigures: [
      {
        label: "图 7-34",
        caption: "对交通灯和停牌的对抗攻击。",
        placeholder: "示意图占位",
      },
      {
        label: "图 7-35",
        caption: "对抗眼镜。",
        placeholder: "示意图占位",
      },
    ],
    risksSteps: [
      "选择一种攻击方式。",
      "阅读风险与防护。",
      "总结安全影响。",
    ],
    risksCheckpoint: {
      prompt: "对抗样本为什么危险？",
      options: [
        {
          label: "会欺骗交通或安全系统。",
          correct: true,
          explanation: "错误判断会带来现实伤害。",
        },
        {
          label: "只影响卡通图片。",
          correct: false,
          explanation: "现实系统也会受影响。",
        },
        {
          label: "能让模型更准确。",
          correct: false,
          explanation: "它会降低可靠性。",
        },
      ],
    },
    foodTitle: "想一想",
    foodEyebrow: "防护",
    foodParas: [
      "对抗样本揭示了深度学习的脆弱性。",
      "加入随机噪声或多模型投票可以降低风险，但无法彻底解决。",
    ],
    foodDemo: {
      title: "防护混合器",
      goal: "体验防护措施如何降低风险。",
      labels: {
        noise: "随机噪声",
        ensemble: "多模型投票",
        risk: "攻击风险",
        note: "防护措施能降低风险，但无法完全消除。",
      },
    },
    foodSteps: [
      "提高噪声与投票强度。",
      "观察风险下降。",
      "解释为何仍需持续研究。",
    ],
    foodCheckpoint: {
      prompt: "关于防护方法，哪句话正确？",
      options: [
        {
          label: "防护能降低风险但难以彻底消除。",
          correct: true,
          explanation: "目前没有完美防护。",
        },
        {
          label: "随机噪声能完全解决问题。",
          correct: false,
          explanation: "它只是缓解而不是彻底解决。",
        },
        {
          label: "防护没有必要。",
          correct: false,
          explanation: "安全防护很重要。",
        },
      ],
    },
    summaryTitle: "关键结论",
    summaryEyebrow: "总结",
    summaryPoints: [
      "对抗样本是微小变化造成的误判。",
      "它会威胁交通、安全与生物识别系统。",
      "防护能降低风险但仍需改进。",
    ],
  },
};
