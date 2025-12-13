import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { AIDependenceDemo } from "../demos/AIDependenceDemo";
import { DeepfakeRiskDemo } from "../demos/DeepfakeRiskDemo";
import { JobImpactDemo } from "../demos/JobImpactDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson1_9({ lang }: LessonProps) {
  const isZh = lang === "zh";
  const ui = {
    reset: isZh ? "重置" : "Reset",
    checkpointTag: isZh ? "检查点" : "Checkpoint",
    correctLabel: isZh ? "正确" : "Correct",
    incorrectLabel: isZh ? "再试一次" : "Check again",
    guidedTitle: isZh ? "引导步骤" : "Guided Steps",
  };

  const t = content[lang];

  const toc = [
    { id: "learning-objectives", label: isZh ? "学习目标" : "Learning Objectives" },
    { id: "intro", label: isZh ? "开篇理解" : "Opening Idea" },
    { id: "data", label: isZh ? "1. 数据安全" : "1. Data Security" },
    { id: "deepfake", label: isZh ? "2. 信息伪造" : "2. Information Forgery" },
    { id: "dependence", label: isZh ? "3. AI 依赖" : "3. AI Dependence" },
    { id: "jobs", label: isZh ? "4. 就业冲击" : "4. Job Displacement" },
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

        <SectionBlock id="intro" title={t.openingTitle} eyebrow={t.openingEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.openingText}</p>
        </SectionBlock>

        <SectionBlock id="data" title={t.dataTitle} eyebrow={t.dataEyebrow}>
          <InfoCard title={t.dataCardTitle}>
            {t.dataParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.dataSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.dataCheckpoint.prompt}
            options={t.dataCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="deepfake" title={t.deepfakeTitle} eyebrow={t.deepfakeEyebrow}>
          <InfoCard title={t.deepfakeCardTitle}>
            {t.deepfakeParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <DeepfakeRiskDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.deepfakeSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.deepfakeCheckpoint.prompt}
            options={t.deepfakeCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="dependence" title={t.dependenceTitle} eyebrow={t.dependenceEyebrow}>
          <InfoCard title={t.dependenceCardTitle}>
            {t.dependenceParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <AIDependenceDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.dependenceSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.dependenceCheckpoint.prompt}
            options={t.dependenceCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="jobs" title={t.jobsTitle} eyebrow={t.jobsEyebrow}>
          <InfoCard title={t.jobsCardTitle}>
            {t.jobsParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <JobImpactDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.jobsSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.jobsCheckpoint.prompt}
            options={t.jobsCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="summary" title={t.summaryTitle} eyebrow={t.summaryEyebrow}>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
            {t.summaryPoints.map((point) => (
              <li key={point}>{point}</li>
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
      "Identify near-term AI risks: data security, deepfakes, AI dependence, job disruption.",
      "Understand data security threats (face data, price discrimination, illegal collection).",
      "Explain deepfake threats and countermeasures.",
      "Discuss over-reliance on AI in education/research and its downsides.",
      "Recognize job market impacts and possible responses.",
    ],
    openingTitle: "Opening Idea",
    openingEyebrow: "Near-term risks",
    openingText:
      "AI’s rapid spread brings immediate risks—data misuse, forged media, over-reliance, and employment shifts—requiring awareness and intervention.",
    dataTitle: "1. Data Security",
    dataEyebrow: "Privacy & misuse",
    dataCardTitle: "Personal data risks",
    dataParas: [
      "Face data misuse, big-data price discrimination, third-party tracking, and illegal data collection threaten privacy and safety.",
      "Regulations (e.g., Data Security Law) demand lawful, consent-based collection and protection.",
    ],
    dataSteps: ["Identify common data leak vectors.", "Tie misuse to financial/safety risks.", "Note legal requirements for consent and security."],
    dataCheckpoint: {
      prompt: "Which is a data-security risk?",
      options: [
        {
          label: "Unconsented facial data collection enabling impersonation.",
          correct: true,
          explanation: "Face data misuse leads to fraud and safety threats.",
        },
        {
          label: "Not using any devices.",
          correct: false,
          explanation: "Risk arises from misuse of collected data.",
        },
        {
          label: "Deleting old passwords.",
          correct: false,
          explanation: "Deletion is good hygiene, not a risk.",
        },
      ],
    },
    deepfakeTitle: "2. Information Forgery",
    deepfakeEyebrow: "Deepfake",
    deepfakeCardTitle: "AI-manipulated media",
    deepfakeParas: [
      "Deepfake tools can forge faces/voices for fraud or rumors (e.g., video-call scams, corporate heists).",
      "Regulations require labeling/managing synthetic media; penalties target misuse.",
    ],
    deepfakeSteps: ["Recognize fraud scenarios using deepfakes.", "Connect regulation/detection to risk reduction.", "Promote clear labeling of synthetic media."],
    deepfakeCheckpoint: {
      prompt: "Why are deepfakes dangerous?",
      options: [
        {
          label: "They can convincingly impersonate others for fraud or rumors.",
          correct: true,
          explanation: "Realistic forgeries can deceive and cause harm.",
        },
        {
          label: "They always improve honesty.",
          correct: false,
          explanation: "They enable deception.",
        },
        {
          label: "They require no media at all.",
          correct: false,
          explanation: "They rely on source media to forge.",
        },
      ],
    },
    dependenceTitle: "3. AI Dependence",
    dependenceEyebrow: "Over-reliance",
    dependenceCardTitle: "Education & research risks",
    dependenceParas: [
      "Overusing AI for homework, lesson design, or paper writing erodes skills and creativity.",
      "Current AIs can be wrong; blind trust spreads misinformation and undermines academia.",
    ],
    dependenceSteps: ["Maintain human oversight of AI outputs.", "Promote learning-by-doing, not outsourcing thinking.", "Disclose AI use per publication ethics."],
    dependenceCheckpoint: {
      prompt: "What is a core risk of AI over-reliance in learning?",
      options: [
        {
          label: "Skill stagnation when AI does all the work.",
          correct: true,
          explanation: "Over-reliance blocks real skill growth.",
        },
        {
          label: "Guaranteed perfect answers.",
          correct: false,
          explanation: "AI can err.",
        },
        {
          label: "Faster manual practice.",
          correct: false,
          explanation: "Manual practice declines if overusing AI.",
        },
      ],
    },
    jobsTitle: "4. Job Displacement",
    jobsEyebrow: "Labor shifts",
    jobsCardTitle: "Replacement and creation",
    jobsParas: [
      "AI pressures many roles (drivers, translators, legal, creative, even lab research).",
      "Tech shifts always replace some jobs; reskilling and policy can redistribute benefits.",
    ],
    jobsSteps: ["Recognize sectors at risk.", "Plan for reskilling and creative roles.", "Advocate policy for equitable benefit sharing."],
    jobsCheckpoint: {
      prompt: "How should society view AI-driven job loss?",
      options: [
        {
          label: "Prepare with reskilling and policy while accepting tech-driven shifts.",
          correct: true,
          explanation: "Support transitions and share gains.",
        },
        {
          label: "Assume no jobs will change.",
          correct: false,
          explanation: "Change is expected.",
        },
        {
          label: "Ignore workers’ needs.",
          correct: false,
          explanation: "Support is vital for fairness.",
        },
      ],
    },
    summaryTitle: "Section Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "Near-term risks: data security, deepfakes, over-dependence, job shifts.",
      "Regulation + detection mitigate data/deepfake risks.",
      "Human oversight prevents skill erosion and misinformation.",
      "Reskilling and policy ease employment impacts.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "识别 AI 近期风险：数据安全、深度伪造、AI 依赖、就业冲击。",
      "理解数据安全威胁（人脸、杀熟、非法收集）。",
      "解释深度伪造的威胁与对策。",
      "讨论 AI 过度依赖在教育/科研中的负面影响。",
      "认识 AI 对就业的影响与应对策略。",
    ],
    openingTitle: "开篇理解",
    openingEyebrow: "近期风险",
    openingText: "AI 快速普及带来直接风险——数据滥用、伪造媒体、过度依赖、就业变化——需提前应对。",
    dataTitle: "1. 数据安全",
    dataEyebrow: "隐私与滥用",
    dataCardTitle: "个人数据风险",
    dataParas: [
      "人脸数据滥用、大数据杀熟、第三方跟踪、非法收集威胁隐私和安全。",
      "法律（如《数据安全法》）要求合法、告知、同意与保护。",
    ],
    dataSteps: ["识别常见泄露途径。", "关联滥用与财产/安全风险。", "注意合规与安全要求。"],
    dataCheckpoint: {
      prompt: "以下属于数据安全风险的是？",
      options: [
        {
          label: "未授权采集人脸并用于冒充。",
          correct: true,
          explanation: "人脸滥用导致欺诈与安全威胁。",
        },
        {
          label: "不用任何设备。",
          correct: false,
          explanation: "风险来自数据滥用。",
        },
        {
          label: "删除旧密码。",
          correct: false,
          explanation: "删除是良好习惯。",
        },
      ],
    },
    deepfakeTitle: "2. 信息伪造",
    deepfakeEyebrow: "深度伪造",
    deepfakeCardTitle: "AI 篡改媒体",
    deepfakeParas: ["深度伪造可冒充身份用于诈骗或造谣（如视频会议骗局）。", "法规要求标识/管理合成内容并处罚滥用。"],
    deepfakeSteps: ["识别深度伪造诈骗场景。", "将监管/检测与风险降低关联。", "倡导清晰标识。"],
    deepfakeCheckpoint: {
      prompt: "深度伪造危险在于？",
      options: [
        {
          label: "能逼真冒充他人行骗或造谣。",
          correct: true,
          explanation: "逼真伪造易欺骗。",
        },
        {
          label: "必然提升诚实度。",
          correct: false,
          explanation: "反而可能误导。",
        },
        {
          label: "不需要任何媒体。",
          correct: false,
          explanation: "需源媒体伪造。",
        },
      ],
    },
    dependenceTitle: "3. AI 依赖",
    dependenceEyebrow: "过度使用",
    dependenceCardTitle: "教育与科研风险",
    dependenceParas: [
      "作业、教学、论文过度依赖 AI 会削弱技能与创造力。",
      "当前 AI 可能出错，盲信会传播错误，损害学术公正。",
    ],
    dependenceSteps: ["保持人工审核。", "鼓励亲自思考与实践。", "遵守发表透明披露。"],
    dependenceCheckpoint: {
      prompt: "学习中过度依赖 AI 的核心风险？",
      options: [
        {
          label: "技能停滞，AI 代劳一切。",
          correct: true,
          explanation: "过度依赖阻碍能力成长。",
        },
        {
          label: "必然得到完美答案。",
          correct: false,
          explanation: "AI 仍会出错。",
        },
        {
          label: "更快的手工练习。",
          correct: false,
          explanation: "手工练习反而减少。",
        },
      ],
    },
    jobsTitle: "4. 就业冲击",
    jobsEyebrow: "劳动变化",
    jobsCardTitle: "替代与创造",
    jobsParas: [
      "AI 冲击司机、翻译、法律、创意，甚至实验室研究。",
      "技术革命总会替代部分岗位；再培训与政策可重分配收益。",
    ],
    jobsSteps: ["识别风险行业。", "规划再培训与创意岗位。", "倡导政策保障收益共享。"],
    jobsCheckpoint: {
      prompt: "社会应如何看待 AI 导致的失业？",
      options: [
        {
          label: "接受技术变化并通过再培训与政策缓冲。",
          correct: true,
          explanation: "支持转型与公平分配。",
        },
        {
          label: "认为岗位不会变化。",
          correct: false,
          explanation: "变化是必然。",
        },
        {
          label: "忽视劳动者需求。",
          correct: false,
          explanation: "支持与保障很重要。",
        },
      ],
    },
    summaryTitle: "本节小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "近期风险：数据安全、深度伪造、过度依赖、就业变化。",
      "监管与检测缓解数据/伪造风险。",
      "人工监督防止技能退化与错误传播。",
      "再培训与政策可缓和就业冲击。",
    ],
  },
};
