import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { AdversarialNoiseDemo } from "../demos/AdversarialNoiseDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson7_6({ lang }: LessonProps) {
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
    { id: "generation", label: t.generationTitle },
    { id: "causes", label: t.causesTitle },
    { id: "risks", label: t.risksTitle },
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
          {t.introParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <AdversarialNoiseDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.introSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.introCheckpoint.prompt}
            options={t.introCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="generation" title={t.generationTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.generationIntro}</p>
          <InfoCard title={t.generationCardTitle}>
            <ul className="list-disc space-y-1 pl-4 text-sm text-slate-700">
              {t.generationItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.generationSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.generationCheckpoint.prompt}
            options={t.generationCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="causes" title={t.causesTitle} eyebrow={t.causesEyebrow}>
          {t.causesParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <GuidedSteps title={ui.guidedTitle} steps={t.causesSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.causesCheckpoint.prompt}
            options={t.causesCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="risks" title={t.risksTitle}>
          <div className="grid gap-3 md:grid-cols-2">
            {t.riskCards.map((card) => (
              <InfoCard key={card.title} title={card.title}>
                <p className="text-sm text-slate-700">{card.desc}</p>
              </InfoCard>
            ))}
          </div>
          <GuidedSteps title={ui.guidedTitle} steps={t.riskSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.riskCheckpoint.prompt}
            options={t.riskCheckpoint.options}
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

const content = {
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解对抗样本概念与生成方式",
      "认识对抗样本产生的原因与模型局限",
      "讨论风险与主要防护手段",
    ],
    introTitle: "导入",
    introEyebrow: "对抗样本是什么",
    introParas: [
      "在猪的图片上加一点人眼难察觉的噪声，模型可能自信地把它当飞机。对抗样本外观几乎正常，却能让模型犯错。",
    ],
    introSteps: [
      "观察微小扰动如何改变预测标签与置信度。",
      "理解“人觉察不到 vs. 模型高度敏感”的差异。",
      "联系交通灯、路牌等安全场景的风险。",
    ],
    introCheckpoint: {
      prompt: "对抗样本的定义是？",
      options: [
        { label: "人看来正常却让模型输出错误的样本", correct: true, explanation: "核心在于对人微小、对模型致命。" },
        { label: "大幅度修改后的图片", correct: false, explanation: "通常扰动很小。" },
        { label: "随机噪声图片", correct: false, explanation: "噪声需沿特定方向设计。" },
      ],
    },
    generationTitle: "1. 对抗样本如何生成",
    generationIntro: "沿梯度方向添加微扰可最大改变输出；也可通过旋转、缩放或贴纸等方式欺骗模型。",
    generationCardTitle: "常见方法",
    generationItems: [
      "梯度扰动：计算使输出变化最大的方向，微小步长即可误导。",
      "几何变换：轻微旋转/缩放让模型误判（如手枪→捕鼠器）。",
      "物理贴片：在路牌上贴彩色块欺骗交通标志识别。",
    ],
    generationSteps: [
      "确认扰动目标：让模型输出指定的错误类别。",
      "选择方式：数字噪声、几何变换或物理贴纸。",
      "评估可感知性：对人是否可见，对模型是否有效。",
    ],
    generationCheckpoint: {
      prompt: "常见的数字对抗攻击特点是？",
      options: [
        { label: "沿梯度方向施加极小扰动即可翻转输出", correct: true, explanation: "梯度指示最敏感方向。" },
        { label: "必须肉眼可见的大改动", correct: false, explanation: "往往肉眼几乎察觉不到。" },
        { label: "只能通过随机噪声完成", correct: false, explanation: "随机噪声通常效果差。" },
      ],
    },
    causesTitle: "2. 产生原因",
    causesEyebrow: "机器与人理解的差异",
    causesParas: [
      "神经网络可能学习到数据集中“无语义”的模式（如苹果皮斑点），人不在意但模型高度依赖；加噪破坏模式即可使模型犯错。",
    ],
    causesSteps: [
      "理解模型在高维空间找到的微妙特征可能缺乏普适意义。",
      "联系训练数据偏差与模型对噪声的敏感性。",
      "思考提升鲁棒性的需求。",
    ],
    causesCheckpoint: {
      prompt: "对抗样本频发的根本原因是？",
      options: [
        { label: "模型学到人类不关心的脆弱模式", correct: true, explanation: "这些模式易被微扰破坏。" },
        { label: "模型不会泛化任何规律", correct: false, explanation: "模型能泛化，但可能依赖伪特征。" },
        { label: "训练集中没有任何噪声", correct: false, explanation: "即使有噪声也可能学到脆弱特征。" },
      ],
    },
    risksTitle: "3. 风险与防护",
    riskCards: [
      { title: "风险案例", desc: "贴纸让停车牌被识别为限速，特殊眼镜欺骗人脸识别，可能导致安全事故或身份冒用。" },
      { title: "防护思路", desc: "对抗训练、加入随机噪声、预处理去噪/尺度规范、多模型投票提高鲁棒性。" },
    ],
    riskSteps: [
      "设计测试集加入对抗样本，评估安全性。",
      "选择防护：对抗训练、随机扰动、预处理或模型集成。",
      "在高风险场景结合多重冗余与人工复核。",
    ],
    riskCheckpoint: {
      prompt: "以下哪项属于常见的防御手段？",
      options: [
        { label: "使用对抗样本一起训练模型", correct: true, explanation: "对抗训练可提升鲁棒性。" },
        { label: "完全忽略对抗风险", correct: false, explanation: "忽略风险会留下安全隐患。" },
        { label: "禁止使用任何数据增强", correct: false, explanation: "适度增强可提升稳健性。" },
      ],
    },
    summaryTitle: "小结",
    summaryPoints: [
      "对抗样本对人类几乎不可见，却可让模型高置信度犯错。",
      "原因在于模型依赖脆弱或非语义特征。",
      "需通过对抗训练、预处理、集成等多手段增强鲁棒性，尤其在安全场景。",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand adversarial examples and how they are crafted",
      "See why they arise and the limits they expose",
      "Discuss risks and main defenses",
    ],
    introTitle: "Warm-up",
    introEyebrow: "What are adversarial examples?",
    introParas: [
      "Add tiny noise to a pig photo and the model may confidently say “plane.” Adversarial examples look normal to humans yet fool models.",
    ],
    introSteps: [
      "Watch small perturbations flip labels and confidence.",
      "Note the gap between human perception and model sensitivity.",
      "Link to safety-critical cases like traffic lights/signs.",
    ],
    introCheckpoint: {
      prompt: "An adversarial example is…",
      options: [
        { label: "Human-normal input that makes the model misjudge", correct: true, explanation: "Tiny changes can be fatal to the model." },
        { label: "A hugely distorted image", correct: false, explanation: "Perturbations are usually tiny." },
        { label: "Pure random noise", correct: false, explanation: "Perturbations are crafted, not random." },
      ],
    },
    generationTitle: "1. How They Are Generated",
    generationIntro: "Follow the gradient to tweak inputs for maximal output change; slight rotations/patches can also mislead.",
    generationCardTitle: "Common methods",
    generationItems: [
      "Gradient perturbation: move a tiny step along the most sensitive direction.",
      "Geometric tweaks: small rotations/scales can cause mislabels.",
      "Physical patches: stickers on signs to fool traffic-sign models.",
    ],
    generationSteps: [
      "Set a target error (desired wrong label).",
      "Pick a channel: numeric noise, geometric change, or physical patch.",
      "Check visibility: imperceptible to humans, impactful to models.",
    ],
    generationCheckpoint: {
      prompt: "A typical digital adversarial attack…",
      options: [
        { label: "Adds tiny gradient-based noise to flip outputs", correct: true, explanation: "Gradients expose the sensitive direction." },
        { label: "Must be obvious to humans", correct: false, explanation: "It’s usually hard to see." },
        { label: "Works only with random noise", correct: false, explanation: "Random noise is less effective." },
      ],
    },
    causesTitle: "2. Why They Occur",
    causesEyebrow: "Model vs. human perception",
    causesParas: [
      "Networks may latch onto non-semantic patterns (e.g., apple spots). Humans ignore them, but models rely on them; tiny noise can destroy or imitate those patterns.",
    ],
    causesSteps: [
      "Note fragile features in high-dimensional space may lack real-world meaning.",
      "Connect to dataset biases and sensitivity to noise.",
      "Motivate the need for robustness.",
    ],
    causesCheckpoint: {
      prompt: "Adversarial examples arise mainly because…",
      options: [
        { label: "Models learn fragile patterns humans don’t care about", correct: true, explanation: "Tiny changes break those patterns." },
        { label: "Models never generalize any patterns", correct: false, explanation: "They generalize but may rely on spurious cues." },
        { label: "Training data contain zero noise", correct: false, explanation: "Even with noise, spurious cues can form." },
      ],
    },
    risksTitle: "3. Risks and Defenses",
    riskCards: [
      { title: "Risk examples", desc: "Patches turn STOP into speed-limit; patterned glasses fool face ID—leading to safety or identity risks." },
      { title: "Defense ideas", desc: "Adversarial training, random noise injection, denoise/resize preprocessing, and ensemble voting improve robustness." },
    ],
    riskSteps: [
      "Include adversarial tests to gauge safety.",
      "Pick defenses: adversarial training, randomization, preprocessing, or ensembles.",
      "Use redundancy + human review in high-stakes settings.",
    ],
    riskCheckpoint: {
      prompt: "Which is a common defense?",
      options: [
        { label: "Training with adversarial examples", correct: true, explanation: "Adversarial training boosts robustness." },
        { label: "Ignoring all adversarial risks", correct: false, explanation: "Ignoring leaves systems exposed." },
        { label: "Banning all data augmentation", correct: false, explanation: "Some augmentations improve robustness." },
      ],
    },
    summaryTitle: "Key Takeaways",
    summaryPoints: [
      "Adversarial examples look normal to humans but fool models with high confidence.",
      "They stem from reliance on fragile, non-semantic patterns.",
      "Defenses include adversarial training, preprocessing, and ensembles—critical for safety-sensitive uses.",
    ],
  },
};
