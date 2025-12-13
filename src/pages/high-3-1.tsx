import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { EigenfaceExplorerDemo } from "../demos/EigenfaceExplorerDemo";
import { FaceVerificationDemo } from "../demos/FaceVerificationDemo";
import { SpoofingRiskDemo } from "../demos/SpoofingRiskDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson3_1({ lang }: LessonProps) {
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
    { id: "what", label: isZh ? "1. 什么是人脸识别" : "1. What is Facial Recognition" },
    { id: "human", label: isZh ? "2. 人类如何识别面孔" : "2. How Humans Recognize Faces" },
    { id: "traditional", label: isZh ? "3. 传统方法" : "3. Traditional Methods" },
    { id: "deep", label: isZh ? "4. 深度神经网络方法" : "4. Deep Neural Networks" },
    { id: "risks", label: isZh ? "5. 风险与防护" : "5. Risks & Defenses" },
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

        <SectionBlock id="what" title={t.whatTitle} eyebrow={t.whatEyebrow}>
          <InfoCard title={t.whatCardTitle}>
            {t.whatParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
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

        <SectionBlock id="human" title={t.humanTitle} eyebrow={t.humanEyebrow}>
          <InfoCard title={t.humanCardTitle}>
            {t.humanParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
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

        <SectionBlock id="traditional" title={t.traditionalTitle} eyebrow={t.traditionalEyebrow}>
          <InfoCard title={t.traditionalCardTitle}>
            {t.traditionalParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <EigenfaceExplorerDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.traditionalSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.traditionalCheckpoint.prompt}
            options={t.traditionalCheckpoint.options}
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
          <FaceVerificationDemo lang={lang} />
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

        <SectionBlock id="risks" title={t.risksTitle} eyebrow={t.risksEyebrow}>
          <InfoCard title={t.risksCardTitle}>
            {t.risksParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <SpoofingRiskDemo lang={lang} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.risksCheckpoint.prompt}
            options={t.risksCheckpoint.options}
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
      "Define face identification vs. verification and where each is used.",
      "Explain human face processing (fusiform gyrus), prosopagnosia, and the cross-race effect.",
      "Compare geometry-based and eigenface methods and their limits.",
      "Describe deep embedding + cosine verification and why deep nets win.",
      "List risks: privacy leaks, spoofing, deepfake video, and defenses.",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "Why faces matter",
    introText:
      "To a machine, a face is a grid of pixels. Turning those pixels into reliable identity cues is difficult. This lesson walks from human perception to geometry, eigenfaces, deep embeddings, and the safety issues of facial recognition.",
    whatTitle: "1. What is Facial Recognition",
    whatEyebrow: "Concept & tasks",
    whatCardTitle: "Identification vs. verification",
    whatParas: [
      "Face identification: find the target person in a large gallery (one-to-many).",
      "Face verification: judge if two faces belong to the same person (one-to-one).",
      "Modern applications span phone unlock, payment, border control, campus/office access, and smart surveillance.",
    ],
    whatSteps: [
      "Differentiate identification (one-to-many) from verification (one-to-one).",
      "Map typical scenarios: gate/turnstile vs. photo deduplication.",
      "Note why this lesson focuses on verification thresholds and embeddings.",
    ],
    whatCheckpoint: {
      prompt: "Which scenario is face verification?",
      options: [
        {
          label: "Matching a live selfie to a stored ID photo for entry.",
          correct: true,
          explanation: "Verification compares two samples of one claimed identity.",
        },
        {
          label: "Searching a watchlist to find a suspect in a crowd.",
          correct: false,
          explanation: "That is identification (one-to-many).",
        },
      ],
    },
    humanTitle: "2. How Humans Recognize Faces",
    humanEyebrow: "Biology insight",
    humanCardTitle: "Fusiform gyrus, prosopagnosia, cross-race effect",
    humanParas: [
      "Visual signals reach the fusiform gyrus for specialized face processing.",
      "Infants are broadly sensitive; adults become tuned to frequent faces, leading to the cross-race effect.",
      "Damage or underdevelopment can cause prosopagnosia—difficulty recognizing even close relatives.",
    ],
    humanSteps: [
      "Relate fusiform gyrus activity to social exposure.",
      "Explain why frequent exposure shapes sensitivity (cross-race effect).",
      "Connect prosopagnosia to failure of this pipeline.",
    ],
    humanCheckpoint: {
      prompt: "The cross-race effect arises because…",
      options: [
        {
          label: "Brains tune to frequently seen facial features.",
          correct: true,
          explanation: "Exposure sculpts sensitivity, lowering recognition of less-seen features.",
        },
        {
          label: "Different races have identical facial structures.",
          correct: false,
          explanation: "Structures vary; tuning, not sameness, drives the effect.",
        },
      ],
    },
    traditionalTitle: "3. Traditional Handcrafted Methods",
    traditionalEyebrow: "Geometry & eigenfaces",
    traditionalCardTitle: "From keypoints to eigenfaces",
    traditionalParas: [
      "Geometry methods measure distances/angles between landmarks; interpretable but require precise keypoint detection.",
      "Eigenfaces (PCA) learn basis faces capturing global variance; faces become weight vectors compared by a classifier.",
      "Limits: brittle under lighting/view changes; weaker on fine local details.",
    ],
    traditionalSteps: [
      "Identify what geometry captures (distances) vs. what eigenfaces capture (global variance).",
      "Relate PCA weights to a downstream linear classifier or threshold.",
      "State why lighting/view changes hurt handcrafted features.",
    ],
    traditionalCheckpoint: {
      prompt: "Eigenfaces improve over pure geometry because…",
      options: [
        {
          label: "They model global variance without exact landmark accuracy.",
          correct: true,
          explanation: "PCA captures overall face structure without pinpointing every part.",
        },
        {
          label: "They always model local skin pores precisely.",
          correct: false,
          explanation: "Eigenfaces emphasize global structure, not micro details.",
        },
      ],
    },
    deepTitle: "4. Deep Neural Network Methods",
    deepEyebrow: "Hierarchical features",
    deepCardTitle: "Convolution, embeddings, cosine",
    deepParas: [
      "CNNs learn edges → parts → holistic faces; a penultimate layer yields an embedding vector.",
      "Verification uses cosine similarity + threshold to decide same/different person.",
      "Deep models surpass 99% on LFW by learning discriminative, robust features.",
    ],
    deepSteps: [
      "Trace layered feature learning (edges → eyes/nose → full face).",
      "Explain why cosine distance on embeddings works for verification.",
      "Connect data scale + deep nets to robustness under pose/light.",
    ],
    deepCheckpoint: {
      prompt: "Why are deep embeddings more robust than handcrafted features?",
      options: [
        {
          label: "They are learned from massive varied data, covering pose/light changes.",
          correct: true,
          explanation: "Data-driven features generalize across conditions.",
        },
        {
          label: "They remove the need for any thresholding.",
          correct: false,
          explanation: "Thresholds are still used for verification decisions.",
        },
      ],
    },
    risksTitle: "5. Potential Risks",
    risksEyebrow: "Privacy & spoofing",
    risksCardTitle: "Privacy, liveness, adversarial attacks",
    risksParas: [
      "Biometric data leaks are hard to revoke; consent and storage security matter.",
      "Spoofing via photos, deepfake videos, or adversarial glasses can bypass weak systems.",
      "Liveness checks, multimodal factors, and adversarially robust training raise security.",
    ],
    risksCheckpoint: {
      prompt: "Which countermeasure best mitigates photo-based spoofing?",
      options: [
        {
          label: "Liveness prompts (blink/turn) with IR or depth sensing.",
          correct: true,
          explanation: "Dynamic checks make static photos fail.",
        },
        {
          label: "Lowering the decision threshold a lot.",
          correct: false,
          explanation: "Lower thresholds increase false accepts and security risk.",
        },
      ],
    },
    summaryTitle: "Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "Face ID vs. verification: one-to-many vs. one-to-one tasks.",
      "Biological face processing inspires computational approaches; cross-race effect shows tuning by exposure.",
      "Geometry and eigenfaces are interpretable but brittle; deep embeddings deliver accuracy and robustness.",
      "Security requires liveness checks, robust models, and privacy safeguards.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "区分人脸识别的识别（检索）与验证（比对）及其应用场景。",
      "理解人类面孔加工的颞下回梭状回、脸盲症与“跨种族效应”。",
      "掌握几何特征、特征脸等传统方法的原理与局限。",
      "理解深度卷积网络的分层特征与嵌入向量+余弦阈值的验证流程。",
      "识别隐私泄露、照片/视频伪造、对抗眼镜等风险与防护措施。",
    ],
    introTitle: "开篇理解",
    introEyebrow: "为什么脸难？",
    introText:
      "机器看到的是像素，而不是“脸”。本课从人脑机制到几何与特征脸，再到深度嵌入与安全防护，完整梳理人脸识别的原理与风险。",
    whatTitle: "1. 什么是人脸识别",
    whatEyebrow: "概念与任务",
    whatCardTitle: "识别 vs. 验证",
    whatParas: [
      "人脸识别是用面部特征确认身份。",
      "识别（identification）：一对多检索；验证（verification）：一对一比对。",
      "应用：手机解锁、支付、出入境、楼宇/校园门禁与城市安防等。",
    ],
    whatSteps: ["区分一对多检索与一对一比对。", "映射典型场景：闸机 vs. 照片去重。", "聚焦本课验证阈值与嵌入。"],
    whatCheckpoint: {
      prompt: "以下哪项属于人脸验证？",
      options: [
        {
          label: "刷脸比对证件照后开门。",
          correct: true,
          explanation: "一对一比对即为验证。",
        },
        {
          label: "从人群中搜索通缉目标。",
          correct: false,
          explanation: "这是识别（检索）。",
        },
      ],
    },
    humanTitle: "2. 人类如何识别面孔",
    humanEyebrow: "生物启发",
    humanCardTitle: "梭状回、脸盲、跨种族效应",
    humanParas: [
      "视觉信号进入梭状回进行面孔加工。",
      "婴儿广泛敏感，成人对高频接触人群更敏感，出现跨种族效应。",
      "梭状回受损/发育不足会导致脸盲，甚至认不出亲人或自己。",
    ],
    humanSteps: ["联系社交频率与梭状回活跃度。", "解释接触频率如何塑造敏感度。", "用脸盲说明链路失效的后果。"],
    humanCheckpoint: {
      prompt: "跨种族效应的主要原因是：",
      options: [
        {
          label: "大脑对常见面孔特征更加敏感。",
          correct: true,
          explanation: "频繁暴露导致调谐效应。",
        },
        {
          label: "不同种族脸完全一致。",
          correct: false,
          explanation: "面孔有差异，调谐而非一致导致效应。",
        },
      ],
    },
    traditionalTitle: "3. 传统方法",
    traditionalEyebrow: "几何与特征脸",
    traditionalCardTitle: "人工特征提取",
    traditionalParas: [
      "几何法：测量眼、鼻、口的关键点距离与角度，易解释但依赖精确定位。",
      "特征脸：用 PCA 找到“基脸”，任何脸表示为权重向量；再用分类/阈值判别。",
      "局限：光照/姿态敏感，对局部细节刻画不足。",
    ],
    traditionalSteps: ["说明几何捕捉局部距离，特征脸捕捉全局差异。", "阐述权重向量如何进入分类器。", "指出光照/姿态带来的脆弱性。"],
    traditionalCheckpoint: {
      prompt: "特征脸相对几何法的优势是：",
      options: [
        {
          label: "无需逐点精确定位即可建模全局差异。",
          correct: true,
          explanation: "PCA 捕捉整体方差。",
        },
        {
          label: "可以完美建模每个毛孔。",
          correct: false,
          explanation: "特征脸强调全局而非微观细节。",
        },
      ],
    },
    deepTitle: "4. 深度神经网络方法",
    deepEyebrow: "分层特征 + 嵌入",
    deepCardTitle: "卷积特征与余弦阈值",
    deepParas: [
      "卷积网络层层学习：边缘→五官→整体脸，倒数第二层输出嵌入向量。",
      "余弦相似度 + 阈值判断是否同一人。",
      "在 LFW 上深度模型准确率>99%，原因在于大数据+强表征能力。",
    ],
    deepSteps: ["描述层级特征。", "说明余弦+阈值的判定逻辑。", "联系大规模数据带来的稳健性。"],
    deepCheckpoint: {
      prompt: "深度嵌入比手工特征更鲁棒的原因是：",
      options: [
        {
          label: "在大规模多样数据上学习到判别且稳定的特征。",
          correct: true,
          explanation: "数据与模型使其跨光照/姿态表现好。",
        },
        {
          label: "完全不需要阈值。",
          correct: false,
          explanation: "验证仍需阈值。",
        },
      ],
    },
    risksTitle: "5. 风险与防护",
    risksEyebrow: "隐私与攻防",
    risksCardTitle: "泄露、伪造、对抗",
    risksParas: [
      "生物特征难以更换，需注意采集同意与存储安全。",
      "照片/视频伪造、对抗眼镜可绕过薄弱系统。",
      "活体检测、多因子、对抗鲁棒训练是常见防护组合。",
    ],
    risksCheckpoint: {
      prompt: "应对照片攻击的有效手段是：",
      options: [
        {
          label: "随机动作活体检测并辅以深度/红外。",
          correct: true,
          explanation: "动态指令让静态照片失效。",
        },
        {
          label: "把阈值调得很低。",
          correct: false,
          explanation: "阈值过低会放大误接受，降低安全。",
        },
      ],
    },
    summaryTitle: "本节小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "识别 vs. 验证：一对多与一对一。",
      "梭状回驱动人脸加工，跨种族效应显示暴露塑形；脸盲是链路受损。",
      "几何/特征脸可解释但脆弱；深度嵌入带来高精度与稳健性。",
      "安全需活体、鲁棒模型与隐私保护协同。",
    ],
  },
};
