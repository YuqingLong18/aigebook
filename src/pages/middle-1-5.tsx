import { useMemo, useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson1_5({ lang }: LessonProps) {
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
    { id: "early", label: t.earlyTitle },
    { id: "vocoder", label: t.vocoderTitle },
    { id: "modern", label: t.modernTitle },
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
          <VoiceTimeline lang={lang} />
        </SectionBlock>

        <SectionBlock id="early" title={t.earlyTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.earlyIntro}</p>
          <GuidedSteps title={ui.guidedTitle} steps={t.earlySteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.earlyCheckpoint.prompt}
            options={t.earlyCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="vocoder" title={t.vocoderTitle} eyebrow={t.vocoderEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.vocoderIntro}</p>
          <InfoCard title={t.vocoderCardTitle}>
            <p className="text-sm text-slate-700">{t.vocoderCardText}</p>
          </InfoCard>
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.vocoderCheckpoint.prompt}
            options={t.vocoderCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="modern" title={t.modernTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.modernIntro}</p>
          <GuidedSteps title={ui.guidedTitle} steps={t.modernSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.modernCheckpoint.prompt}
            options={t.modernCheckpoint.options}
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

function VoiceTimeline({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const stages = useMemo(
    () => [
      { label: isZh ? "1769 机械发声机" : "1769 Mechanical speaker", note: isZh ? "皮囊+阀门模拟肺喉口鼻" : "Bellows + valves mimic lungs/throat" },
      { label: isZh ? "1939 语音编码器" : "1939 Vocoder", note: isZh ? "分解振动与声道，用电路重建" : "Split source/filter, rebuild electronically" },
      { label: isZh ? "神经网络语音合成" : "Neural TTS", note: isZh ? "大模型学人声，几可乱真" : "Large nets learn speech, nearly human" },
    ],
    [isZh],
  );
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="grid gap-3 md:grid-cols-3">
        {stages.map((s) => (
          <div key={s.label} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
            <p className="text-xs font-semibold text-brand-700">{s.label}</p>
            <p className="mt-1 text-sm text-slate-800">{s.note}</p>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-slate-600">
        {isZh ? "路径：机械模仿 → 电子建模 → 神经网络拟真。" : "Path: mechanical mimic → electronic model → neural realism."}
      </p>
    </div>
  );
}

const content = {
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解语音合成的原理与发展历程。",
      "认识现代语音合成的主要方法与风险。",
    ],
    introTitle: "开篇理解",
    introEyebrow: "机器的嘴巴",
    intro:
      "让机器“开口说话”经历了机械发声、电子编码到神经网络拟真，声音越来越自然，也带来诈骗与版权风险。",
    earlyTitle: "1. 早期机械发声",
    earlyIntro:
      "1769 年 Kempelen 的机械发声机用皮囊模拟肺，用阀门、木箱模拟喉腔与口鼻，能发出简单音节但不流畅。",
    earlySteps: [
      "理解机械如何模拟人类发声器官",
      "观察局限：音色单一、无法连贯讲话",
      "对比现代流畅度与清晰度",
    ],
    earlyCheckpoint: {
      prompt: "机械发声机的主要局限是：",
      options: [
        { label: "声音简单，难以连贯自然地说话", correct: true, explanation: "只能发出碎片化音节。" },
        { label: "完全无法发声", correct: false, explanation: "可以发声但不自然。" },
        { label: "比人类更流畅", correct: false, explanation: "恰好相反。" },
      ],
    },
    vocoderTitle: "2. 语音编码器（Vocoder）",
    vocoderEyebrow: "现代语音学起点",
    vocoderIntro:
      "1939 年 Dudley 提出 vocoder，把人声拆成振动源与声道特性，用电路重建，首次实现可连续播放的电子合成语音，引爆世博会。",
    vocoderCardTitle: "核心突破",
    vocoderCardText: "把发声拆解成可计算的部分，并用数学与电路重建，为后续算法合成奠基。",
    vocoderCheckpoint: {
      prompt: "Vocoder 的关键贡献在于：",
      options: [
        { label: "把声音拆解并用电子方式重建", correct: true, explanation: "源/滤波模型可计算、可合成。" },
        { label: "只靠机械振动", correct: false, explanation: "这是早期机械阶段。" },
        { label: "禁止连续播放", correct: false, explanation: "恰好实现了连续合成。" },
      ],
    },
    modernTitle: "3. 现代语音合成",
    modernIntro:
      "神经网络用大规模语音数据学习人类发声细节，语音自然度接近真人，支持“AI 歌手”“语音换声”。",
    modernSteps: [
      "理解数据+大模型带来的拟真提升",
      "观察语音转换：分离内容与说话人特征再组合",
      "思考版权/安全影响",
    ],
    modernCheckpoint: {
      prompt: "现代神经语音合成相比传统方法的突出优势是：",
      options: [
        { label: "声音更自然，接近人类语音", correct: true, explanation: "大模型学习细节，拟真度高。" },
        { label: "只能发出简单音节", correct: false, explanation: "可流畅表达。" },
        { label: "不需要数据", correct: false, explanation: "依赖大量语音数据训练。" },
      ],
    },
    risksTitle: "4. 风险与思考",
    risksIntro:
      "逼真语音带来诈骗与版权风险，可能伪造身份或创作版权争议。需要身份校验、多模态验证与清晰的版权归属。",
    risksCardTitle: "小结要点",
    risksPoints: [
      "发展路径：机械→电子→神经网络",
      "拟真度提升同时放大安全/版权风险",
      "关键防线：验证身份、多模态佐证、版权规范",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand principles and history of speech synthesis.",
      "Know modern methods and risks of synthetic speech.",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "Machine mouth",
    intro:
      "Making machines talk moved from mechanical voice boxes to vocoders to neural realism; voices grew natural—and risks grew.",
    earlyTitle: "1. Early Mechanical Speech",
    earlyIntro:
      "In 1769 Kempelen’s bellows+valves mimicked lungs/throat to make simple syllables—far from fluent speech.",
    earlySteps: ["See how mechanics mimic vocal organs", "Spot limits: single tone, no fluency", "Compare to today’s natural speech"],
    earlyCheckpoint: {
      prompt: "Main limitation of mechanical speech devices:",
      options: [
        { label: "Simple, choppy sounds—not fluent", correct: true, explanation: "They can’t speak naturally." },
        { label: "They made no sound", correct: false, explanation: "They did, but crudely." },
        { label: "More fluent than humans", correct: false, explanation: "Opposite is true." },
      ],
    },
    vocoderTitle: "2. Vocoder",
    vocoderEyebrow: "Modern phonetics start",
    vocoderIntro:
      "In 1939 Dudley split speech into source + filter and rebuilt electronically, enabling continuous synthesized speech and sparking excitement.",
    vocoderCardTitle: "Key Breakthrough",
    vocoderCardText: "Decomposed speech into computable parts and rebuilt via math/electronics—foundation for later synthesis.",
    vocoderCheckpoint: {
      prompt: "The vocoder’s key contribution was:",
      options: [
        { label: "Decomposing and electronically rebuilding speech", correct: true, explanation: "Source/filter model is computable." },
        { label: "Relying only on mechanics", correct: false, explanation: "That was earlier tech." },
        { label: "Banning continuous playback", correct: false, explanation: "It enabled it." },
      ],
    },
    modernTitle: "3. Modern Speech Synthesis",
    modernIntro:
      "Neural nets learn speech details from large data, making voices near-human; voice conversion splits content vs. speaker traits to mix voices.",
    modernSteps: ["Data + large models boost realism", "Voice conversion = content + speaker traits recombined", "Consider copyright/safety impact"],
    modernCheckpoint: {
      prompt: "Modern neural TTS stands out because it:",
      options: [
        { label: "Produces natural, human-like speech", correct: true, explanation: "Learns fine details." },
        { label: "Can only make simple syllables", correct: false, explanation: "It’s fluent." },
        { label: "Needs no data", correct: false, explanation: "It needs lots of data." },
      ],
    },
    risksTitle: "4. Risks & Reflection",
    risksIntro:
      "Lifelike voices create fraud and copyright risks—identity spoofing and ownership disputes. Guard with verification, multimodal checks, clear rights.",
    risksCardTitle: "Key Points",
    risksPoints: [
      "Path: mechanical → electronic → neural",
      "More realism → bigger safety/copyright risks",
      "Defenses: identity checks, multimodal proofs, rights clarity",
    ],
  },
};
