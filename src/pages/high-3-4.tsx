import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { ASRDecoderDemo } from "../demos/ASRDecoderDemo";
import { FormantExplorerDemo } from "../demos/FormantExplorerDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson3_4({ lang }: LessonProps) {
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
    { id: "sound", label: isZh ? "1. 语音与共振" : "1. Speech & Resonance" },
    { id: "early", label: isZh ? "2. 早期识别方法" : "2. Early Methods" },
    { id: "stat", label: isZh ? "3. 统计模型" : "3. Statistical Models" },
    { id: "modern", label: isZh ? "4. 端到端深度识别" : "4. End-to-End ASR" },
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

        <SectionBlock id="sound" title={t.soundTitle} eyebrow={t.soundEyebrow}>
          <InfoCard title={t.soundCardTitle}>
            {t.soundParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <FormantExplorerDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.soundSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.soundCheckpoint.prompt}
            options={t.soundCheckpoint.options}
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

        <SectionBlock id="stat" title={t.statTitle} eyebrow={t.statEyebrow}>
          <InfoCard title={t.statCardTitle}>
            {t.statParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <ASRDecoderDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.statSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.statCheckpoint.prompt}
            options={t.statCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="modern" title={t.modernTitle} eyebrow={t.modernEyebrow}>
          <InfoCard title={t.modernCardTitle}>
            {t.modernParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
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
      "Explain speech as vibration carrying content, speaker, emotion.",
      "Understand vocal tract resonance and formants as encoding speech sounds.",
      "Describe early pattern-matching and statistical (HMM + LM) approaches.",
      "Explain end-to-end deep ASR and why it outperforms traditional pipelines.",
      "Appreciate the role of data scale in modern speech recognition.",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "From waves to words",
    introText:
      "Speech is air vibration rich with meaning. We trace how resonance encodes content, how early systems matched patterns or used HMMs, and how deep end-to-end ASR learns speech-to-text directly.",
    soundTitle: "1. Speech & Resonance",
    soundEyebrow: "Formants as fingerprints",
    soundCardTitle: "Vocal cords + vocal tract",
    soundParas: [
      "Vocal cords generate vibration; the vocal tract (oral/nasal cavities) resonates at specific frequencies.",
      "Formants (F1, F2…) are resonance peaks; different vocal tract shapes yield different formant patterns.",
      "Spectrograms show formants as dark bands; patterns encode vowel identity.",
    ],
    soundSteps: [
      "Relate mouth/tongue shape to F1/F2 locations.",
      "Explain resonance as the bottleneck where speech content lives.",
      "Note other info (speaker, emotion) also rides on the signal.",
    ],
    soundCheckpoint: {
      prompt: "F1/F2 patterns primarily encode…",
      options: [
        { label: "Vocal tract shape (vowel identity).", correct: true, explanation: "Formants reflect articulation." },
        { label: "Whether the speaker is happy or sad.", correct: false, explanation: "Emotion is ancillary; formants map to articulation." },
      ],
    },
    earlyTitle: "2. Early Recognition Methods",
    earlyEyebrow: "Pattern matching",
    earlyCardTitle: "Formant traces",
    earlyParas: [
      "Early systems matched formant trajectories (e.g., digits via F1–F2 plots).",
      "Worked for small vocabularies; struggled with variability across speakers/tokens.",
    ],
    earlySteps: ["Describe formant matching for digits.", "List why variability breaks simple matching.", "Link to need for probabilistic models."],
    earlyCheckpoint: {
      prompt: "Pattern-matching fails mainly because…",
      options: [
        { label: "Different pronunciations vary formant paths a lot.", correct: true, explanation: "Variability undermines rigid templates." },
        { label: "Formants never change over time.", correct: false, explanation: "Formants do change; modeling that change is key." },
      ],
    },
    statTitle: "3. Statistical Models",
    statEyebrow: "HMM + language model",
    statCardTitle: "Acoustic model + LM",
    statParas: [
      "HMM acoustic models describe state sequences for phonemes and how likely a signal is generated.",
      "Language models provide linguistic context to choose the most plausible sentence.",
      "Recognition = find the most probable path given acoustic + language probabilities.",
    ],
    statSteps: [
      "Define HMM states for phonemes and their emissions.",
      "Explain how language models re-rank acoustically similar options.",
      "Note limits: hand-crafted features and model assumptions.",
    ],
    statCheckpoint: {
      prompt: "Adding a language model helps because…",
      options: [
        { label: "Context chooses plausible words among acoustically similar options.", correct: true, explanation: "LM disambiguates with context." },
        { label: "It removes the need for any acoustic modeling.", correct: false, explanation: "Acoustic evidence is still essential." },
      ],
    },
    modernTitle: "4. End-to-End Deep ASR",
    modernEyebrow: "Transformer era",
    modernCardTitle: "Encoder–decoder",
    modernParas: [
      "End-to-end models map audio directly to text with a single network (often Transformer-based).",
      "They learn both pronunciation patterns and language knowledge from large datasets.",
      "Benefits: simpler pipeline, better long-context modeling, higher accuracy with enough data.",
    ],
    modernSteps: [
      "Describe encoder extracting acoustic patterns; decoder produces text.",
      "Contrast with HMM+LM two-model pipeline.",
      "Emphasize data scale (e.g., Whisper 680k hours) enabling quality.",
    ],
    modernCheckpoint: {
      prompt: "Why do end-to-end ASR models outperform classic HMM pipelines?",
      options: [
        { label: "They jointly learn acoustics and language from large data.", correct: true, explanation: "Unified training + big data improve accuracy." },
        { label: "They ignore pronunciation entirely.", correct: false, explanation: "They still model pronunciation, just within one network." },
      ],
    },
    summaryTitle: "Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "Speech is resonance; formants encode articulation.",
      "Early pattern matching gave way to HMM + language models for variability and context.",
      "End-to-end deep ASR unifies the pipeline and excels with scale.",
      "Massive data and deep models push ASR to human-level performance in many tasks.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解语音是振动，承载内容/说话人/情感信息。",
      "理解声道共振与共振峰（formant）如何编码语音内容。",
      "掌握早期模式匹配与统计（HMM+语言模型）方法的原理与局限。",
      "理解端到端深度语音识别的结构与优势。",
      "认识数据规模对现代语音识别的决定性作用。",
    ],
    introTitle: "开篇理解",
    introEyebrow: "从声波到文本",
    introText:
      "语音是空气振动，蕴含丰富信息。本节从共振峰开始，回顾模式匹配、HMM+语言模型，再到端到端深度语音识别。",
    soundTitle: "1. 语音与共振",
    soundEyebrow: "共振峰指纹",
    soundCardTitle: "声带 + 声道",
    soundParas: [
      "声带产生振动，声道（口/鼻腔）形成特定共振频率。",
      "共振峰 F1/F2… 是能量峰，不同声道形状产生不同模式。",
      "频谱图呈现共振峰条纹，模式对应元音身份。",
    ],
    soundSteps: ["将口型/舌位与 F1/F2 对应。", "说明共振是信息的“指纹”。", "提醒语音还包含说话人、情感等。"],
    soundCheckpoint: {
      prompt: "F1/F2 主要编码：",
      options: [
        { label: "声道形状（发音内容）。", correct: true, explanation: "共振峰反映构音。" },
        { label: "说话人是否开心。", correct: false, explanation: "情感是附加信息，F1/F2 直接对应构音。" },
      ],
    },
    earlyTitle: "2. 早期识别方法",
    earlyEyebrow: "模式匹配",
    earlyCardTitle: "共振轨迹",
    earlyParas: [
      "早期用 F1–F2 轨迹区分数字等小词表。",
      "对说话人/多次发音的差异敏感，鲁棒性不足。",
    ],
    earlySteps: ["描述数字识别的轨迹匹配。", "指出变异性为何导致失败。", "引出概率模型需求。"],
    earlyCheckpoint: {
      prompt: "模式匹配主要失败因为：",
      options: [
        { label: "同一音的轨迹变化大。", correct: true, explanation: "变异性破坏刚性模板。" },
        { label: "共振峰从不随时间变化。", correct: false, explanation: "共振峰会变化，需要建模。" },
      ],
    },
    statTitle: "3. 统计模型",
    statEyebrow: "HMM + 语言模型",
    statCardTitle: "声学模型 + 语言模型",
    statParas: [
      "HMM 声学模型描述音素状态序列及生成概率。",
      "语言模型提供上下文约束，选择最合理句子。",
      "识别=在声学+语言概率下寻找最优路径。",
    ],
    statSteps: ["定义音素 HMM 状态及输出。", "说明语言模型如何重排近似发音。", "指出手工特征/假设的局限。"],
    statCheckpoint: {
      prompt: "加入语言模型的作用是：",
      options: [
        { label: "在声学相似候选中用上下文选最合理的。", correct: true, explanation: "LM 通过上下文消歧。" },
        { label: "完全不需要声学模型。", correct: false, explanation: "声学证据仍是基础。" },
      ],
    },
    modernTitle: "4. 端到端深度识别",
    modernEyebrow: "Transformer 时代",
    modernCardTitle: "编码器-解码器",
    modernParas: [
      "端到端用单一网络（常为 Transformer）把音频直接映射到文本。",
      "同时学习发音模式与语言知识，依赖大数据提升精度。",
      "优势：流程简单，长上下文建模更好，数据足够时准确率更高。",
    ],
    modernSteps: ["描述编码器提取声学模式，解码器输出文本。", "对比 HMM+LM 的双模型流程。", "强调大数据（如 Whisper 68 万小时）的作用。"],
    modernCheckpoint: {
      prompt: "端到端 ASR 优于传统 HMM 的主要原因是：",
      options: [
        { label: "在大数据上联合学习声学与语言。", correct: true, explanation: "统一训练 + 规模带来性能提升。" },
        { label: "完全忽略发音。", correct: false, explanation: "仍需建模发音，只是放在同一网络中。" },
      ],
    },
    summaryTitle: "本节小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "语音是共振，formant 编码构音内容。",
      "模式匹配 → HMM+语言模型，解决变异与上下文问题。",
      "端到端深度 ASR 统一流程，依靠大规模数据取得高性能。",
      "现代 ASR 在多场景达到接近人类水平。",
    ],
  },
};
