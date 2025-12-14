import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { DeepfakeRiskDemo } from "../demos/DeepfakeRiskDemo";
import { DeepfakeSpotterDemo } from "../demos/DeepfakeSpotterDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson5_2({ lang }: LessonProps) {
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
    { id: "synthesis", label: t.synthesisTitle },
    { id: "abuse", label: t.abuseTitle },
    { id: "detection", label: t.detectTitle },
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
          <InfoCard title={t.introCardTitle}>
            <p className="text-sm text-slate-700">{t.introCard}</p>
          </InfoCard>
        </SectionBlock>

        <SectionBlock id="synthesis" title={t.synthesisTitle} eyebrow={t.synthesisEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.synthesisIntro}</p>
          <DeepfakeRiskDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.synthesisSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.synthesisCheckpoint.prompt}
            options={t.synthesisCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="abuse" title={t.abuseTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.abuseIntro}</p>
          <CaseGallery lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.abuseSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.abuseCheckpoint.prompt}
            options={t.abuseCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="detection" title={t.detectTitle} eyebrow={t.detectEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.detectIntro}</p>
          <DeepfakeSpotterDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.detectSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.detectCheckpoint.prompt}
            options={t.detectCheckpoint.options}
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

function CaseGallery({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const cases = [
    {
      title: isZh ? "扎克伯格深度伪造视频" : "Zuckerberg deepfake",
      note: isZh ? "虚假宣称“控制全球数据”，引发舆论讨论。" : "Fake claim of “controlling global data,” sparking debate.",
    },
    {
      title: isZh ? "语音换声金融诈骗" : "Voice-conversion fraud",
      note: isZh ? "CEO 被“上级”假声骗转 22 万欧元。" : "CEO wired €220k to scammer mimicking his boss.",
    },
    {
      title: isZh ? "娱乐特效初衷" : "Originally for VFX",
      note: isZh ? "替身换脸、让静态照片动起来，本用于影视娱乐。" : "Face swapping for stunt doubles or animating photos for film/entertainment.",
    },
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
        {isZh ? "案例速览" : "Case snapshots"}
      </p>
      <div className="mt-3 grid gap-3 md:grid-cols-3">
        {cases.map((c) => (
          <div key={c.title} className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-sm text-slate-800">
            <p className="font-semibold text-slate-900">{c.title}</p>
            <p className="mt-1 text-xs text-slate-700">{c.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const content = {
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解 AI 音视频合成技术及滥用带来的社会影响",
      "认识伪造检测技术的作用与局限",
      "讨论技术、防范教育、法律多层治理策略",
    ],
    introTitle: "导入",
    introEyebrow: "已迫在眉睫的风险",
    intro:
      "深度伪造的图像、音频、视频已难以肉眼分辨，并被用于诈骗和舆论操控，需要立刻应对。",
    introCardTitle: "本节聚焦",
    introCard: "合成技术原理与滥用案例、检测与反制手段，以及公众教育与法律规制。",
    synthesisTitle: "1. 音视频合成技术",
    synthesisEyebrow: "Deepfake & 换声",
    synthesisIntro:
      "Deepfake 通过表情编码+解码实现换脸；单张照片驱动可让静态人像“动起来”；换声技术能实时把说话人声音改成他人。",
    synthesisSteps: [
      "理解表情编码→换脸解码流程。",
      "了解静态照片驱动、实时换声的能力。",
      "思考“真假难辨”带来的风险。",
    ],
    synthesisCheckpoint: {
      prompt: "Deepfake 换脸的核心流程是？",
      options: [
        { label: "提取 A 的表情特征，输入 B 的解码器生成新脸", correct: true, explanation: "编码表情→解码到另一张脸上。" },
        { label: "随机生成表情", correct: false, explanation: "依赖源表情而非纯随机。" },
        { label: "只修改背景", correct: false, explanation: "主要针对人脸。" },
        { label: "必须两人长得很像", correct: false, explanation: "模型可跨相貌映射。" },
      ],
    },
    abuseTitle: "2. 滥用与社会影响",
    abuseIntro:
      "原本用于娱乐和特效的技术被用于造假：虚假言论视频、换声诈骗等，造成财务损失与舆论混乱。",
    abuseSteps: [
      "回顾典型滥用案例（假视频、诈骗）。",
      "思考公众为何容易被欺骗。",
      "讨论受害场景：经济、名誉、社会信任。",
    ],
    abuseCheckpoint: {
      prompt: "语音换声在诈骗中的风险是？",
      options: [
        { label: "让骗子冒充可信身份行骗", correct: true, explanation: "真实声线更易取得信任，导致财损。" },
        { label: "只能用于唱歌", correct: false, explanation: "可实时冒充通话。" },
        { label: "必须见面才能实施", correct: false, explanation: "电话/网络即可。" },
        { label: "完全无害", correct: false, explanation: "已有真实财务案例。" },
      ],
    },
    detectTitle: "3. 伪造检测与多层治理",
    detectEyebrow: "AI 对抗 AI",
    detectIntro:
      "检测可查找伪造痕迹：眼中高光反射、音视频不同步等。现有方法针对已知伪造算法，新算法出现需重新适配。",
    detectSteps: [
      "观察检测特征（反射、同步、畸变）。",
      "理解“新伪造→新检测”的军备竞赛。",
      "结合技术、防范教育、法律处罚形成多层防线。",
    ],
    detectCheckpoint: {
      prompt: "为何仅靠检测技术不足以治理伪造？",
      options: [
        { label: "伪造算法更新快，需教育与法律等多层防线", correct: true, explanation: "技术军备竞赛之外，还需提高辨识和惩戒。" },
        { label: "检测率已达 100%", correct: false, explanation: "检测仍有限，难全覆盖。" },
        { label: "法律不允许用检测", correct: false, explanation: "检测是必要但不充分。" },
        { label: "只有技术才重要", correct: false, explanation: "还需公众素养与法规。" },
      ],
    },
    summaryTitle: "4. 小结",
    summaryPoints: [
      "深度伪造与换声让真假难辨，已被用于诈骗与舆论操控。",
      "检测技术可发现伪造，但需与公众教育和法律治理配合。",
      "面对不断进化的伪造算法，治理必须多层次、持续更新。",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand AI audio/video synthesis and impacts of misuse",
      "Recognize detection tech’s role and limits",
      "Discuss multi-layer countermeasures: tech, education, law",
    ],
    introTitle: "Overview",
    introEyebrow: "An urgent risk",
    intro:
      "AI-made images, audio, and video are hard to distinguish and already used in scams and manipulation—an immediate threat.",
    introCardTitle: "Focus",
    introCard: "How synthesis works, abuse cases, detection and countermeasures across tech, literacy, and regulation.",
    synthesisTitle: "1. Audio/Video Synthesis",
    synthesisEyebrow: "Deepfake & voice conversion",
    synthesisIntro:
      "Deepfakes encode expressions from one face and decode onto another; driving a single photo animates it; voice conversion can swap voices in real time.",
    synthesisSteps: [
      "Expression encode → face decode flow.",
      "Single-image driving and real-time voice swap.",
      "Why “indistinguishable” fakes are risky.",
    ],
    synthesisCheckpoint: {
      prompt: "Core Deepfake face-swap flow?",
      options: [
        { label: "Extract A’s expression and decode onto B’s face", correct: true, explanation: "Encode expressions then render onto another face." },
        { label: "Pure random expressions", correct: false, explanation: "Uses source expressions, not pure random." },
        { label: "Only edits backgrounds", correct: false, explanation: "Targets faces." },
        { label: "Requires look-alikes", correct: false, explanation: "Model maps across different faces." },
      ],
    },
    abuseTitle: "2. Misuse and Impact",
    abuseIntro:
      "Originally for VFX, tech is abused for fakes: false speeches, voice-based fraud, causing financial loss and public confusion.",
    abuseSteps: [
      "Review notable misuse cases (fake video, fraud).",
      "Why audiences get fooled.",
      "Impacts: money loss, reputational harm, trust erosion.",
    ],
    abuseCheckpoint: {
      prompt: "Risk of voice conversion in fraud?",
      options: [
        { label: "Let scammers impersonate trusted voices", correct: true, explanation: "Authentic-sounding calls boost credibility." },
        { label: "Only for singing", correct: false, explanation: "It can mimic calls real time." },
        { label: "Needs in-person contact", correct: false, explanation: "Phone/internet suffices." },
        { label: "Harmless", correct: false, explanation: "Real financial losses exist." },
      ],
    },
    detectTitle: "3. Detection & Multi-layer Defense",
    detectEyebrow: "AI vs AI",
    detectIntro:
      "Detectors look for artifacts: eye reflections, AV sync gaps, distortions. New forgeries need updated detectors; add literacy and laws for stronger defense.",
    detectSteps: [
      "Spot detection cues (reflections, sync, artifacts).",
      "Understand the arms race: new fakes → new detectors.",
      "Combine tech, education, and regulation for defense.",
    ],
    detectCheckpoint: {
      prompt: "Why isn’t detection alone sufficient?",
      options: [
        { label: "Fakes evolve; need education and legal deterrence too", correct: true, explanation: "Arms race demands multi-layer controls." },
        { label: "Detection is 100% accurate already", correct: false, explanation: "It’s not perfect." },
        { label: "Laws ban detection use", correct: false, explanation: "Detection is allowed and needed." },
        { label: "Only tech matters", correct: false, explanation: "People and policy matter too." },
      ],
    },
    summaryTitle: "4. Summary",
    summaryPoints: [
      "Deepfakes/voice swaps make reality vs fake hard to tell, already weaponized.",
      "Detection helps but must pair with public literacy and legal governance.",
      "Governance must be multi-layered and adaptive to evolving forgery methods.",
    ],
  },
};
