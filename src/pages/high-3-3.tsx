import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { DeepfakeSpotterDemo } from "../demos/DeepfakeSpotterDemo";
import { GanTrainerDemo } from "../demos/GanTrainerDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson3_3({ lang }: LessonProps) {
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
    { id: "fake", label: isZh ? "1. 假脸生成" : "1. Fake Face Generation" },
    { id: "gan", label: isZh ? "2. GAN 对抗学习" : "2. GAN Adversarial Learning" },
    { id: "swap", label: isZh ? "3. 换脸与表情控制" : "3. Face-Swapping & Control" },
    { id: "detect", label: isZh ? "4. 伪造检测思路" : "4. Detecting Fakes" },
    { id: "risk", label: isZh ? "5. 社会风险" : "5. Social Risks" },
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

        <SectionBlock id="fake" title={t.fakeTitle} eyebrow={t.fakeEyebrow}>
          <InfoCard title={t.fakeCardTitle}>
            {t.fakeParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.fakeSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.fakeCheckpoint.prompt}
            options={t.fakeCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="gan" title={t.ganTitle} eyebrow={t.ganEyebrow}>
          <InfoCard title={t.ganCardTitle}>
            {t.ganParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <GanTrainerDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.ganSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.ganCheckpoint.prompt}
            options={t.ganCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="swap" title={t.swapTitle} eyebrow={t.swapEyebrow}>
          <InfoCard title={t.swapCardTitle}>
            {t.swapParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.swapSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.swapCheckpoint.prompt}
            options={t.swapCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="detect" title={t.detectTitle} eyebrow={t.detectEyebrow}>
          <InfoCard title={t.detectCardTitle}>
            {t.detectParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <DeepfakeSpotterDemo lang={lang} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.detectCheckpoint.prompt}
            options={t.detectCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="risk" title={t.riskTitle} eyebrow={t.riskEyebrow}>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
            {t.riskPoints.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
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
      "Explain generative factors and how deep nets synthesize faces.",
      "Understand GAN generator–discriminator interplay.",
      "Compare traditional vs. deepfake face-swapping and facial control.",
      "Spot typical flaws in fake images and outline detection ideas.",
      "Discuss social/ethical risks and the arms race of forgery vs. detection.",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "When fakes look real",
    introText:
      "Deep nets can fabricate faces and even animate portraits. We examine how they work (GANs, autoencoders), how face-swaps/control are built, how to detect fakes, and the social risks.",
    fakeTitle: "1. Fake Face Generation",
    fakeEyebrow: "Generative factors",
    fakeCardTitle: "From factors to faces",
    fakeParas: [
      "Deep models learn “generative factors”: hair shape, skin tone, face shape, expression, etc.",
      "Combining factors produces realistic faces; GANs are a common architecture.",
    ],
    fakeSteps: [
      "Define generative factors as underlying attributes.",
      "Connect factors to the latent vector of a generator.",
      "Note realism comes from large, diverse training sets.",
    ],
    fakeCheckpoint: {
      prompt: "Generative factors in face synthesis are…",
      options: [
        {
          label: "Attributes like hair, face shape, expression that compose a face.",
          correct: true,
          explanation: "These factors mix to form a plausible face.",
        },
        {
          label: "Random pixel noise displayed directly.",
          correct: false,
          explanation: "Noise is transformed into structured factors by the generator.",
        },
      ],
    },
    ganTitle: "2. GAN Adversarial Learning",
    ganEyebrow: "Generator vs. discriminator",
    ganCardTitle: "Adversarial training loop",
    ganParas: [
      "Generator turns noise into images; discriminator distinguishes real vs. fake.",
      "They alternate training; balance yields realistic outputs.",
      "If D too weak → artifacts pass; if G too weak → training stalls.",
    ],
    ganSteps: ["Describe G’s goal (fool D) and D’s goal (spot fakes).", "Explain why balanced training matters.", "Relate stability to fake quality."],
    ganCheckpoint: {
      prompt: "If the discriminator is far stronger than the generator, what happens?",
      options: [
        {
          label: "Generator learns slowly and fakes stay poor.",
          correct: true,
          explanation: "Overpowered D blocks G’s progress.",
        },
        {
          label: "Fakes instantly become perfect.",
          correct: false,
          explanation: "Training collapses, not improves.",
        },
      ],
    },
    swapTitle: "3. Face-Swapping & Facial Control",
    swapEyebrow: "Traditional vs. deepfake",
    swapCardTitle: "Swap vs. drive expressions",
    swapParas: [
      "Traditional swaps align keypoints and transfer geometry—often leaving visible seams.",
      "Deepfake swaps share an encoder, use separate decoders per identity; expressions transfer, identity changes.",
      "Facial control drives a single face with another person’s expression/motion (e.g., animate Mona Lisa).",
    ],
    swapSteps: [
      "Differentiate swapping (change identity) vs. control (drive expressions).",
      "Explain autoencoder shared encoder + per-person decoders.",
      "Note backgrounds stay the same in both cases.",
    ],
    swapCheckpoint: {
      prompt: "Facial control differs from face-swapping because…",
      options: [
        {
          label: "Identity stays, only expressions/motion are transferred.",
          correct: true,
          explanation: "Control drives expressions on the same face.",
        },
        {
          label: "Background is regenerated every frame.",
          correct: false,
          explanation: "Background is typically preserved.",
        },
      ],
    },
    detectTitle: "4. Detecting Fakes",
    detectEyebrow: "Clues & models",
    detectCardTitle: "Look for subtle artifacts",
    detectParas: [
      "AI fakes often slip on details: eye reflections, earrings, hair edges, lip-sync timing.",
      "Detection tools exploit these cues; accuracy must improve as forgeries improve.",
    ],
    detectCheckpoint: {
      prompt: "Which clue often reveals GAN-generated faces?",
      options: [
        {
          label: "Inconsistent eye reflections or asymmetry.",
          correct: true,
          explanation: "Physical lighting consistency is hard to fake perfectly.",
        },
        {
          label: "Always perfectly symmetric pupils.",
          correct: false,
          explanation: "GANs often fail symmetry, not perfect it.",
        },
      ],
    },
    riskTitle: "5. Social Risks",
    riskEyebrow: "Ethics & law",
    riskPoints: [
      "Deepfakes can violate privacy, enable fraud/extortion, and spread misinformation.",
      "Open-source tools lower the barrier; detection is an arms race.",
      "Need technical detection + legal/ethical guardrails.",
    ],
    summaryTitle: "Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "Generative factors + GANs power realistic fake faces.",
      "Deepfake swapping and facial control differ in identity vs. motion transfer.",
      "Detection relies on fine visual/temporal cues; must evolve with forgeries.",
      "Social risks demand both technical and regulatory responses.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解生成因子与深度网络合成假脸的原理。",
      "掌握 GAN 生成器-判别器对抗机制。",
      "区分传统/深度换脸与表情/动作驱动（facial control）。",
      "掌握伪造检测的常见细节线索与思路。",
      "思考深度伪造的社会、伦理与法律风险。",
    ],
    introTitle: "开篇理解",
    introEyebrow: "“真”与“假”",
    introText:
      "深度网络能造假，也能抓假。本节讲生成因子、GAN、换脸与表情控制、检测线索，以及伪造带来的社会风险与攻防拉锯。",
    fakeTitle: "1. 假脸生成",
    fakeEyebrow: "生成因子",
    fakeCardTitle: "从因子到人脸",
    fakeParas: [
      "生成因子包括发型、肤色、脸型、表情等底层描述。",
      "组合因子即可合成逼真脸；GAN 是常见架构之一。",
    ],
    fakeSteps: ["定义生成因子。", "联系因子与生成器潜向量。", "指出多样数据对真实性的作用。"],
    fakeCheckpoint: {
      prompt: "生成因子是指：",
      options: [
        { label: "发型、脸型、表情等可组合的底层属性。", correct: true, explanation: "因子组合成完整人脸。" },
        { label: "直接显示的随机噪声。", correct: false, explanation: "噪声需经生成器转化为因子。" },
      ],
    },
    ganTitle: "2. GAN 对抗学习",
    ganEyebrow: "生成器 vs. 判别器",
    ganCardTitle: "对抗训练闭环",
    ganParas: [
      "生成器把噪声变图片，判别器分真假，交替训练。",
      "平衡时最逼真；判别器过弱→伪影漏过；生成器过弱→学习停滞。",
    ],
    ganSteps: ["写清 G/D 各自目标。", "说明为何需要实力平衡。", "联系平衡与假图质量。"],
    ganCheckpoint: {
      prompt: "判别器远强于生成器时，结果是：",
      options: [
        { label: "生成器难以提升，假图质量停滞。", correct: true, explanation: "过强判别器阻碍生成器学习。" },
        { label: "假图瞬间完美。", correct: false, explanation: "训练会崩溃，不会瞬间完美。" },
      ],
    },
    swapTitle: "3. 换脸与表情控制",
    swapEyebrow: "传统 vs. Deepfake",
    swapCardTitle: "换身份 vs. 驱动作",
    swapParas: [
      "传统换脸对齐关键点、替换几何，容易留下拼接痕迹。",
      "Deepfake：共享编码器、独立解码器，表达保留、身份切换。",
      "Facial control：同一张脸，驱动其表情/动作（如让《蒙娜丽莎》动起来）。背景通常保持不变。",
    ],
    swapSteps: ["区分换脸（身份变）与控制（身份同、表情动）。", "解释共享编码器+独立解码器。", "强调背景不变。"],
    swapCheckpoint: {
      prompt: "表情控制与换脸的核心区别是：",
      options: [
        { label: "身份保持不变，只转移表情/动作。", correct: true, explanation: "控制只驱动表情，不换身份。" },
        { label: "每一帧都重建背景。", correct: false, explanation: "背景通常保持不变。" },
      ],
    },
    detectTitle: "4. 伪造检测",
    detectEyebrow: "线索与模型",
    detectCardTitle: "细节露馅",
    detectParas: [
      "伪造常在细节出错：眼反光不一致、耳饰模糊、发丝边缘、嘴型不同步等。",
      "检测模型利用这些线索；伪造越强，检测也需持续升级。",
    ],
    detectCheckpoint: {
      prompt: "下列哪项常暴露 GAN 假脸？",
      options: [
        { label: "瞳孔反光/对称性异常。", correct: true, explanation: "光照一致性难以完美伪造。" },
        { label: "永远完美对称的瞳孔。", correct: false, explanation: "问题是“失真”，不是完美。" },
      ],
    },
    riskTitle: "5. 社会风险",
    riskEyebrow: "伦理与法律",
    riskPoints: [
      "深度伪造可侵犯隐私、用于诈骗敲诈、制造谣言。",
      "开源工具降低门槛，攻防呈军备竞赛态势。",
      "需技术检测 + 法律伦理共治。",
    ],
    summaryTitle: "本节小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "生成因子+GAN 让假脸逼真。",
      "换脸与表情控制：身份改变 vs. 表情驱动。",
      "检测依赖细节/时序线索，需持续迭代。",
      "风险需技术与法规双管齐下。",
    ],
  },
};
