import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { SourceFilterDemo } from "../demos/SourceFilterDemo";
import { TTSQualityDemo } from "../demos/TTSQualityDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson3_5({ lang }: LessonProps) {
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
    { id: "learning-objectives", label: isZh ? "学习目标" : "Learning Objectives" },
    { id: "intro", label: isZh ? "开篇理解" : "Opening Idea" },
    { id: "human", label: isZh ? "1. 人类发声机制" : "1. Human Speech Production" },
    { id: "early", label: isZh ? "2. 传统合成方法" : "2. Traditional Synthesis" },
    { id: "deep", label: isZh ? "3. 端到端深度合成" : "3. End-to-End Neural TTS" },
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

        <SectionBlock id="intro" title={t.introTitle} eyebrow={t.introEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.introText}</p>
        </SectionBlock>

        <SectionBlock id="human" title={t.humanTitle} eyebrow={t.humanEyebrow}>
          <InfoCard title={t.humanCardTitle}>
            {t.humanParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <SourceFilterDemo lang={lang} />
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

        <SectionBlock id="early" title={t.earlyTitle} eyebrow={t.earlyEyebrow}>
          <InfoCard title={t.earlyCardTitle}>
            {t.earlyParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
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

        <SectionBlock id="deep" title={t.deepTitle} eyebrow={t.deepEyebrow}>
          <InfoCard title={t.deepCardTitle}>
            {t.deepParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <TTSQualityDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.deepSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.deepCheckpoint.prompt}
            options={t.deepCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="summary" title={t.summaryTitle} eyebrow={t.summaryEyebrow}>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
            {t.summaryPoints.map((p) => (
              <li key={p}>{p}</li>
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
      "Define speech synthesis (TTS) scenarios and importance.",
      "Explain the source–filter model: excitation + vocal tract modulation.",
      "Compare traditional methods: parametric/formant, concatenative, statistical.",
      "Describe end-to-end neural TTS and its advantages.",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "Giving machines a voice",
    introText:
      "TTS converts text to speech. We start from human speech production, review traditional source–filter-based methods, then cover neural end-to-end systems that deliver natural, fluent audio.",
    humanTitle: "1. Human Speech Production",
    humanEyebrow: "Source–filter model",
    humanCardTitle: "Glottal excitation + vocal tract",
    humanParas: [
      "Glottis (vocal cords) generates excitation: pulses for voiced sounds, noise for unvoiced.",
      "Vocal tract filters the excitation; formants shape the resulting sound.",
      "Source–filter model underpins classic synthesis and vocoders.",
    ],
    humanSteps: [
      "Identify source (glottis) and filter (vocal tract).",
      "Connect voiced pulses vs. unvoiced noise to different phonemes.",
      "Relate formants to the filter response.",
    ],
    humanCheckpoint: {
      prompt: "In the source–filter model, the filter corresponds to…",
      options: [
        { label: "The vocal tract shaping resonance (formants).", correct: true, explanation: "The tract filters the excitation." },
        { label: "The pulse generator in the glottis.", correct: false, explanation: "That is the source, not the filter." },
      ],
    },
    earlyTitle: "2. Traditional Synthesis",
    earlyEyebrow: "Parametric → Concatenative → Statistical",
    earlyCardTitle: "Three stages",
    earlyParas: [
      "Parametric/formant: specify formant frequencies, synthesize via vocoder; low cost but robotic.",
      "Concatenative: stitch recorded units; natural but inflexible and data heavy.",
      "Statistical (HMM): generate parameters via models; flexible but often over-smoothed.",
    ],
    earlySteps: [
      "Match each method to its pros/cons.",
      "Explain why concatenative is natural but limited by the corpus.",
      "Explain why HMM speech sounds flat (averaging).",
    ],
    earlyCheckpoint: {
      prompt: "Concatenative synthesis is limited because…",
      options: [
        { label: "It can only use voices present in the recorded corpus.", correct: true, explanation: "No new timbres beyond the database." },
        { label: "It never uses real recordings.", correct: false, explanation: "It relies entirely on recorded segments." },
      ],
    },
    deepTitle: "3. End-to-End Neural TTS",
    deepEyebrow: "Sequence-to-sequence",
    deepCardTitle: "One model from text to audio",
    deepParas: [
      "Sequence-to-sequence models learn text→speech directly, often generating spectrograms or waveforms.",
      "Advantages: simplifies pipeline, boosts naturalness/fluency, handles context (prosody, pauses, stress).",
      "Requires tens of hours+ of data; moves beyond explicit source–filter design.",
    ],
    deepSteps: [
      "Contrast end-to-end with vocoder-centric pipelines.",
      "List why naturalness improves (direct waveform/spectrogram generation).",
      "Note data requirements for quality.",
    ],
    deepCheckpoint: {
      prompt: "A key advantage of end-to-end neural TTS is…",
      options: [
        { label: "Higher naturalness by learning speech directly from data.", correct: true, explanation: "Direct generation captures prosody and nuance." },
        { label: "Needing no training data at all.", correct: false, explanation: "It needs large datasets." },
      ],
    },
    summaryTitle: "Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "Source–filter: glottal excitation + vocal tract shaping = speech.",
      "Traditional TTS: parametric (cheap, robotic), concatenative (natural, inflexible), statistical (flexible, flat).",
      "Neural end-to-end TTS simplifies the chain and achieves high naturalness with data scale.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解语音合成（TTS）概念与应用价值。",
      "掌握声源-声道（source–filter）模型：激励 + 声道调制。",
      "比较传统方法：参数/共振峰、拼接、统计，各自特点与局限。",
      "理解端到端深度 TTS 的核心思想与优势。",
    ],
    introTitle: "开篇理解",
    introEyebrow: "让机器“开口”",
    introText:
      "TTS 把文本变成语音。本节从人类发声机制出发，回顾传统声源-声道方法，最后介绍端到端深度模型如何产生更自然的声音。",
    humanTitle: "1. 人类发声机制",
    humanEyebrow: "声源-声道模型",
    humanCardTitle: "声门激励 + 声道滤波",
    humanParas: [
      "声门（声带）产生激励：有声音是脉冲，无声音是噪声。",
      "声道滤波形成共振峰，塑造音质与元音特征。",
      "这一模型支撑了经典的合成与声码器设计。",
    ],
    humanSteps: ["明确声源与声道。", "区分有声/无声激励及对应音素。", "把共振峰与滤波响应对应起来。"],
    humanCheckpoint: {
      prompt: "在声源-声道模型中，滤波器对应：",
      options: [
        { label: "声道共振（共振峰）。", correct: true, explanation: "声道决定滤波特性。" },
        { label: "声门脉冲发生器。", correct: false, explanation: "脉冲是声源，不是滤波器。" },
      ],
    },
    earlyTitle: "2. 传统合成方法",
    earlyEyebrow: "参数 → 拼接 → 统计",
    earlyCardTitle: "三阶段",
    earlyParas: [
      "参数/共振峰合成：指定共振峰，用声码器合成，成本低但机械感强。",
      "拼接合成：拼录音片段，音质真但受语料库限制、存储大。",
      "统计（HMM）合成：模型生成参数，灵活但声音偏平滑。",
    ],
    earlySteps: ["对应优缺点。", "解释拼接为何受语料限制。", "解释 HMM 声音平滑的原因。"],
    earlyCheckpoint: {
      prompt: "拼接合成的局限在于：",
      options: [
        { label: "只能使用语料库中已有的声音。", correct: true, explanation: "无法轻松生成新音色。" },
        { label: "完全不使用录音。", correct: false, explanation: "拼接依赖录音片段。" },
      ],
    },
    deepTitle: "3. 端到端深度合成",
    deepEyebrow: "序列到序列",
    deepCardTitle: "一体化模型",
    deepParas: [
      "序列到序列模型直接学文本→语音，通常生成频谱或波形。",
      "优势：流程简化，自然度/流畅度提升，可建模语境（韵律、停顿、重音）。",
      "需数十小时以上数据；超越显式声源-声道设计。",
    ],
    deepSteps: ["对比端到端与传统声码器流程。", "列举自然度提升的原因（直接生成频谱/波形）。", "强调数据需求。"],
    deepCheckpoint: {
      prompt: "端到端深度 TTS 的突出优势是：",
      options: [
        { label: "通过数据直接学习语音，提升自然度。", correct: true, explanation: "直接生成捕捉韵律与细节。" },
        { label: "完全不需要任何训练数据。", correct: false, explanation: "仍需大量数据。" },
      ],
    },
    summaryTitle: "本节小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "声源-声道：声门激励 + 声道共振 = 语音。",
      "传统 TTS：参数（低成本）、拼接（自然但僵化）、统计（灵活但平滑）。",
      "端到端深度 TTS 简化链路，依赖大数据获得高自然度。",
    ],
  },
};
