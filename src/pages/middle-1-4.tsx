import { useMemo, useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { ASRDecoderDemo } from "../demos/ASRDecoderDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson1_4({ lang }: LessonProps) {
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
    { id: "asr", label: t.asrTitle },
    { id: "voice", label: t.voiceTitle },
    { id: "events", label: t.eventsTitle },
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
          <AudioScope lang={lang} />
        </SectionBlock>

        <SectionBlock id="asr" title={t.asrTitle} eyebrow={t.asrEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.asrIntro}</p>
          <ASRDecoderDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.asrSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.asrCheckpoint.prompt}
            options={t.asrCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="voice" title={t.voiceTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.voiceIntro}</p>
          <VoiceRisk lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.voiceSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.voiceCheckpoint.prompt}
            options={t.voiceCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="events" title={t.eventsTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.eventsIntro}</p>
          <EventMixer lang={lang} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.eventsCheckpoint.prompt}
            options={t.eventsCheckpoint.options}
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

function AudioScope({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const bands = useMemo(
    () => [
      { label: isZh ? "语音理解（ASR）" : "Speech recognition", detail: isZh ? "从振动信号转成文字/含义" : "Turn vibrations into text/meaning" },
      { label: isZh ? "声纹识别" : "Voiceprint recognition", detail: isZh ? "判断“谁在说”" : "Identify who is speaking" },
      { label: isZh ? "声音事件检测" : "Sound event detection", detail: isZh ? "从混音中分离事件" : "Detect events in mixed audio" },
    ],
    [isZh],
  );
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="grid gap-2 md:grid-cols-3">
        {bands.map((b) => (
          <div key={b.label} className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
            <p className="text-sm font-semibold text-slate-900">{b.label}</p>
            <p className="mt-1 text-xs text-slate-700">{b.detail}</p>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-slate-600">
        {isZh ? "机器听觉：让机器听懂、分辨、判断声音世界。" : "Computational auditory: letting machines hear, tell, and judge sounds."}
      </p>
    </div>
  );
}

function VoiceRisk({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const [view, setView] = useState<"promise" | "risk">("promise");
  const copy = {
    promise: isZh
      ? "深度声纹模型可在 VoxCeleb 上 <1% 错误，支持个性化助手、家庭分工。"
      : "Deep speaker models hit <1% error on VoxCeleb, enabling personalized assistants.",
    risk: isZh
      ? "法庭误判案例提醒：声纹有变动，不能作为唯一证据，需要概率和多模态验证。"
      : "Court mistakes show voiceprints vary; avoid single-evidence use—need probabilities/multimodal checks.",
  };
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex gap-2">
        {[
          { key: "promise", label: isZh ? "应用潜力" : "Potential" },
          { key: "risk", label: isZh ? "使用风险" : "Risks" },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setView(tab.key as "promise" | "risk")}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              view === tab.key
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-sm text-slate-800">{copy[view]}</p>
    </div>
  );
}

function EventMixer({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const [mix, setMix] = useState<"speechMusic" | "trafficMusic">("speechMusic");
  const notes: Record<typeof mix, string> = {
    speechMusic: isZh
      ? "语音+音乐重叠，需同时检测语音段与乐器声，时间、音量交错增加难度。"
      : "Speech + music overlap; must detect both amid time/volume overlaps.",
    trafficMusic: isZh
      ? "车辆声、喇叭、音乐共存，需分辨不同事件类别，类似“音频版目标识别”。"
      : "Vehicles, horns, music co-exist; classify events like “audio object detection.”",
  };
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex gap-2">
        {[
          { key: "speechMusic", label: isZh ? "语音+音乐" : "Speech + music" },
          { key: "trafficMusic", label: isZh ? "交通+音乐" : "Traffic + music" },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setMix(tab.key as typeof mix)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              mix === tab.key
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-sm text-slate-800">{notes[mix]}</p>
      <p className="mt-1 text-xs text-slate-600">
        {isZh ? "声音事件检测类似“听觉版目标识别”，音源重叠使问题更难。" : "Sound-event detection is “audio object recognition”; overlapping sources make it hard."}
      </p>
    </div>
  );
}

const content = {
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解机器听觉的概念与研究方向。",
      "了解语音识别、声纹识别、声音事件检测的原理与应用。",
      "讨论机器听觉的潜在风险与应用边界。",
    ],
    introTitle: "开篇理解",
    introEyebrow: "机器的耳朵",
    intro:
      "机器听觉研究如何让机器“听懂”世界，覆盖语音识别、声纹识别、声音事件检测等方向。",
    asrTitle: "1. 语音识别",
    asrEyebrow: "听清楚 & 听明白",
    asrIntro:
      "语音识别把空气振动转成文字/含义。细微发音差别、上下文依赖让任务复杂。大规模数据+深度模型（如 Whisper、GPT-4o）大幅降低错误率，支持跨语言对话。",
    asrSteps: [
      "把声音看作信号 → 需要特征与模型",
      "关注同音、口音、上下文带来的难点",
      "理解深度模型与大数据如何提升效果",
    ],
    asrCheckpoint: {
      prompt: "语音识别难点之一在于：",
      options: [
        { label: "细微发音差别会改变含义", correct: true, explanation: "同音/近音在语境下区分困难。" },
        { label: "声音没有任何规律", correct: false, explanation: "语音有结构，可建模。" },
        { label: "只能在安静房间使用", correct: false, explanation: "模型正不断提升对噪声的鲁棒性。" },
      ],
    },
    voiceTitle: "2. 声纹识别",
    voiceIntro:
      "声纹像“声音指纹”，可识别“谁在说”。深度网络降低错误率，但声纹会随环境、姿势、情绪变化，不宜单独作为司法定罪依据。",
    voiceSteps: [
      "区分“识别内容”与“识别说话人”",
      "了解声纹随环境/情绪/姿态变化",
      "思考风险：司法、认证需多模态佐证",
    ],
    voiceCheckpoint: {
      prompt: "声纹识别在关键场景需要谨慎，因为：",
      options: [
        { label: "同一人的声纹会变化，存在歧义", correct: true, explanation: "变化可能超过人与人差异。" },
        { label: "声纹永远不变", correct: false, explanation: "与指纹不同，声纹可变。" },
        { label: "听者不用判断概率", correct: false, explanation: "现实中需概率和佐证。" },
      ],
    },
    eventsTitle: "3. 声音事件检测",
    eventsIntro:
      "要从混合音频中识别鸟鸣、雷声、交通、音乐等，类似“听觉版目标识别”。声音往往重叠，时间、音量交错增加难度，AudioSet 等数据集推进了研究。",
    eventsCheckpoint: {
      prompt: "声音事件检测最大的挑战之一是：",
      options: [
        { label: "不同声音时间与音量重叠，难以分离", correct: true, explanation: "混叠使分类更困难。" },
        { label: "声音只会单独出现", correct: false, explanation: "现实中经常重叠。" },
        { label: "不需要数据集", correct: false, explanation: "大规模数据是进步关键。" },
      ],
    },
    summaryTitle: "小结",
    summaryPoints: [
      "机器听觉涵盖听内容、听说话人、听事件",
      "深度模型 + 大数据显著提升准确率",
      "关键场景需关注声纹变动与安全风险",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand computational auditory directions.",
      "Learn speech recognition, voiceprint recognition, and sound-event detection basics.",
      "Discuss risks and boundaries of machine hearing.",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "Ears for machines",
    intro: "Machine hearing spans speech recognition, voiceprints, and sound events—letting machines listen and act.",
    asrTitle: "1. Speech Recognition",
    asrEyebrow: "Hear clearly & understand",
    asrIntro:
      "Speech recognition turns vibrations into text/meaning. Tiny pronunciation changes and context make it hard. Large data + deep models (Whisper, GPT-4o) cut errors and support multilingual dialog.",
    asrSteps: [
      "View sound as signals → need features/models.",
      "Note homophones, accents, context challenges.",
      "See how deep models + big data boost accuracy.",
    ],
    asrCheckpoint: {
      prompt: "One challenge of ASR is that:",
      options: [
        { label: "Small pronunciation differences change meaning", correct: true, explanation: "Homophones/context complicate." },
        { label: "Sound has no structure", correct: false, explanation: "Speech has patterns to model." },
        { label: "It only works in quiet rooms", correct: false, explanation: "Robustness keeps improving." },
      ],
    },
    voiceTitle: "2. Voiceprint Recognition",
    voiceIntro:
      "Voiceprints are like fingerprints of sound—identifying who speaks. Deep nets lower errors, but voices shift with environment/posture/emotion; not suitable as sole legal evidence.",
    voiceSteps: [
      "Separate “what is said” vs. “who says it.”",
      "Know voiceprints vary with environment/emotion.",
      "Consider risk: courts/authentication need more proof.",
    ],
    voiceCheckpoint: {
      prompt: "Why must voiceprints be used carefully in critical cases?",
      options: [
        { label: "A person’s voiceprint can vary and be ambiguous", correct: true, explanation: "Variation can exceed between-speaker gaps." },
        { label: "Voiceprints never change", correct: false, explanation: "They do change." },
        { label: "Probability is unnecessary", correct: false, explanation: "Confidence matters." },
      ],
    },
    eventsTitle: "3. Sound Event Detection",
    eventsIntro:
      "Like “audio object recognition,” it pulls birds, thunder, traffic, music from mixes. Overlapping time/volume makes it hard; datasets like AudioSet push progress.",
    eventsCheckpoint: {
      prompt: "A major challenge in sound-event detection is:",
      options: [
        { label: "Overlapping sounds in time/volume are hard to separate", correct: true, explanation: "Mixing complicates classification." },
        { label: "Sounds always occur one by one", correct: false, explanation: "Real audio overlaps often." },
        { label: "No datasets are needed", correct: false, explanation: "Data drives advances." },
      ],
    },
    summaryTitle: "Summary",
    summaryPoints: [
      "Machine hearing covers content, speaker, and events.",
      "Deep models + big data greatly improve accuracy.",
      "Critical uses must watch voice variability and safety.",
    ],
  },
};
