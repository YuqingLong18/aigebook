import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { SpoofingRiskDemo } from "../demos/SpoofingRiskDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson5_3({ lang }: LessonProps) {
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
    { id: "biometric", label: t.biometricTitle },
    { id: "personal", label: t.personalTitle },
    { id: "llm", label: t.llmTitle },
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

        <SectionBlock id="biometric" title={t.biometricTitle} eyebrow={t.biometricEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.biometricIntro}</p>
          <SpoofingRiskDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.biometricSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.biometricCheckpoint.prompt}
            options={t.biometricCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="personal" title={t.personalTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.personalIntro}</p>
          <BreachCaseList lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.personalSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.personalCheckpoint.prompt}
            options={t.personalCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="llm" title={t.llmTitle} eyebrow={t.llmEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.llmIntro}</p>
          <LLMRiskCard lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.llmSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.llmCheckpoint.prompt}
            options={t.llmCheckpoint.options}
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

function BreachCaseList({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const cases = [
    {
      title: "BioStar 2",
      note: isZh ? "2800 万生物特征记录泄漏（指纹/人脸）。" : "28M biometric records leaked (fingerprints/faces).",
    },
    {
      title: "T-Mobile 2021",
      note: isZh ? "1 亿用户信息外泄，罚款与赔偿巨大。" : "100M users’ data leaked; heavy fines and payouts.",
    },
    {
      title: "NPD 2024",
      note: isZh ? "29 亿人敏感信息被曝网上，规模惊人。" : "2.9B people’s sensitive data exposed online—massive scale.",
    },
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
        {isZh ? "泄漏案例" : "Leak cases"}
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

function LLMRiskCard({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const items = [
    {
      title: isZh ? "用户输入泄漏" : "User input leakage",
      note: isZh ? "不慎输入个人/机密信息被存储或暴露（如 bug 导致他人可见）。" : "Accidentally input personal/confidential data that get stored/exposed (e.g., bugs showing others’ info).",
    },
    {
      title: isZh ? "训练数据回溯" : "Training data regurgitation",
      note: isZh ? "模型可能输出训练中的敏感片段（医/法律文本、代码等）。" : "Models may output sensitive snippets from training (medical/legal texts, code, etc.).",
    },
    {
      title: isZh ? "内部数据上报" : "Internal data capture",
      note: isZh ? "企业员工将敏感代码/会议内容贴入模型，风险被采集或泄露。" : "Employees paste sensitive code/notes into the model; risk of capture/exposure.",
    },
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
        {isZh ? "大模型相关风险" : "LLM-related risks"}
      </p>
      <div className="mt-3 grid gap-3 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-sm text-slate-800">
            <p className="font-semibold text-slate-900">{item.title}</p>
            <p className="mt-1 text-xs text-slate-700">{item.note}</p>
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
      "了解 AI 带来的生物特征/个人信息泄漏风险及案例",
      "认识大语言模型可能导致的信息泄漏问题与应对",
      "探索信息泄漏的防范策略",
    ],
    introTitle: "导入",
    introEyebrow: "数据驱动的隐忧",
    intro:
      "AI 依赖大规模数据，集中存储与训练增加了生物特征、个人信息泄漏的风险。",
    introCardTitle: "本节聚焦",
    introCard: "生物特征泄漏、群体个人信息泄漏、大模型泄漏风险与防护思路。",
    biometricTitle: "1. 生物特征泄漏风险",
    biometricEyebrow: "人脸/声音/指纹",
    biometricIntro:
      "摄像头、语音助手等可能在未授权下收集人脸、声音等生物特征；泄漏后可被用来伪造身份或生成逼真的假音视频。",
    biometricSteps: [
      "了解生物特征（人脸、指纹、虹膜、声音）可被非法采集。",
      "案例：BioStar 2 暴露指纹/人脸；公众对人脸滥用的担忧（如“Ban the Scan”）。",
      "识别活体检测、多模验证等防护措施。",
    ],
    biometricCheckpoint: {
      prompt: "生物特征泄漏为何危险？",
      options: [
        { label: "可被用来伪造身份或生成逼真假音视频", correct: true, explanation: "泄漏后难以更改，易被滥用身份验证与合成伪造。" },
        { label: "因为生物特征可以随时重置", correct: false, explanation: "与密码不同，生物特征难以更换。" },
        { label: "完全不会被采集", correct: false, explanation: "摄像头/语音设备可能非法采集。" },
        { label: "只影响设备速度", correct: false, explanation: "核心是身份与隐私风险。" },
      ],
    },
    personalTitle: "2. 大规模个人信息泄漏",
    personalIntro:
      "黑客攻击或管理不善可泄漏海量个人数据（姓名、证件号、地址等）。如 T-Mobile 2021、NPD 2024 等事件，规模巨大、损失严重。",
    personalSteps: [
      "回顾典型大规模泄漏案例与影响。",
      "思考集中存储与弱防护的风险。",
      "认识法律处罚与合规要求的重要性。",
    ],
    personalCheckpoint: {
      prompt: "集中存储个人信息的主要风险是？",
      options: [
        { label: "一旦被攻破可导致大规模泄漏", correct: true, explanation: "集中库被黑会同时暴露大量用户数据。" },
        { label: "无法被黑客攻击", correct: false, explanation: "恰恰易成为攻击目标。" },
        { label: "让网络更快", correct: false, explanation: "与速度无关，是安全风险。" },
        { label: "泄漏只影响单个用户", correct: false, explanation: "集中库涉及成百上千万乃至数十亿用户。" },
      ],
    },
    llmTitle: "3. 大模型信息泄漏风险",
    llmEyebrow: "输入、训练、输出",
    llmIntro:
      "用户输入可能被记录；模型可能复现训练数据；员工可能把公司敏感内容贴入模型，导致泄漏或被外部提取。",
    llmSteps: [
      "案例：ChatGPT bug 显示他人姓名/卡号；三星员工贴入敏感代码；研究者从模型对话中提取训练样本。",
      "识别风险源：输入、训练数据、输出泄漏。",
      "防护：脱敏/本地部署、访问控制、数据最小化、审计与提示不输入敏感信息。",
    ],
    llmCheckpoint: {
      prompt: "降低大模型泄漏风险的做法包括？",
      options: [
        { label: "尽量不输入敏感数据，或使用本地/隔离部署与审计", correct: true, explanation: "数据最小化、隔离、权限与审计可降低风险。" },
        { label: "把所有机密都粘贴给模型", correct: false, explanation: "这会增加泄漏风险。" },
        { label: "完全不需要访问控制", correct: false, explanation: "访问与日志管控很重要。" },
        { label: "只能靠运气", correct: false, explanation: "有明确的技术与流程防护。" },
      ],
    },
    summaryTitle: "4. 小结",
    summaryPoints: [
      "AI 时代数据集中与合成能力使生物特征和个人信息泄漏后果加剧。",
      "大规模泄漏案例凸显防护、合规与惩戒的重要性。",
      "大模型需数据最小化、隔离部署与审计，个人也应提高信息保护意识。",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand biometric/personal info leak risks with AI and key cases",
      "Recognize LLM-related leak risks and mitigations",
      "Explore strategies to respond to information leakage",
    ],
    introTitle: "Overview",
    introEyebrow: "Data-driven risks",
    intro:
      "AI relies on massive data; centralized storage/training raises risks of biometric and personal info leaks.",
    introCardTitle: "Focus",
    introCard: "Biometric leakage, mass personal data breaches, LLM leak risks, and defenses.",
    biometricTitle: "1. Biometric Leakage Risks",
    biometricEyebrow: "Face/voice/fingerprint",
    biometricIntro:
      "Cameras/voice assistants may collect biometrics without consent; leaks can fuel identity forgery or hyper-real fakes.",
    biometricSteps: [
      "Biometrics (face, fingerprint, iris, voice) can be illicitly captured.",
      "Cases: BioStar 2 exposed fingerprints/faces; public fears misuse (e.g., “Ban the Scan”).",
      "Note defenses: liveness, multimodal factors, better consent/limits.",
    ],
    biometricCheckpoint: {
      prompt: "Why is biometric leakage dangerous?",
      options: [
        { label: "It can be used to forge identity or create convincing fakes", correct: true, explanation: "Biometrics are hard to change and can power spoofing and deepfakes." },
        { label: "Biometrics can be reset easily", correct: false, explanation: "Unlike passwords, they’re hard to replace." },
        { label: "They can’t be collected at all", correct: false, explanation: "Cameras/voice devices can collect them." },
        { label: "Only slows devices down", correct: false, explanation: "Risk is identity/privacy, not speed." },
      ],
    },
    personalTitle: "2. Mass Personal Data Leaks",
    personalIntro:
      "Hacks or poor management leak huge datasets (names, IDs, addresses). Events like T-Mobile 2021, NPD 2024 show massive scale and loss.",
    personalSteps: [
      "Review major breach cases and impacts.",
      "Consider risks of centralized storage and weak controls.",
      "Note importance of penalties and compliance.",
    ],
    personalCheckpoint: {
      prompt: "Main risk of centralized personal data stores?",
      options: [
        { label: "One breach can leak data for millions", correct: true, explanation: "Central stores are high-value targets." },
        { label: "They cannot be hacked", correct: false, explanation: "They are prime targets." },
        { label: "They speed up the internet", correct: false, explanation: "Not about speed; about risk." },
        { label: "Only a single user is affected", correct: false, explanation: "Millions can be exposed at once." },
      ],
    },
    llmTitle: "3. LLM Leakage Risks",
    llmEyebrow: "Inputs, training, outputs",
    llmIntro:
      "User inputs may be stored; models can regurgitate training data; staff may paste sensitive code/notes, risking capture or exposure.",
    llmSteps: [
      "Cases: ChatGPT bug showing others’ names/cards; Samsung staff pasted sensitive code; researchers extracted training samples via prompts.",
      "Risk sources: user input, training data, output leakage.",
      "Mitigation: minimize sensitive input, isolated/local deployment, access controls, auditing, user prompts/warnings.",
    ],
    llmCheckpoint: {
      prompt: "Which helps reduce LLM leak risk?",
      options: [
        { label: "Avoid sensitive input; use local/isolated deployments with controls", correct: true, explanation: "Data minimization + isolation + audits help." },
        { label: "Paste all secrets into the model", correct: false, explanation: "That increases risk." },
        { label: "No access control needed", correct: false, explanation: "Controls/logs are vital." },
        { label: "Rely on luck only", correct: false, explanation: "Concrete mitigations exist." },
      ],
    },
    summaryTitle: "4. Summary",
    summaryPoints: [
      "AI era data centralization and synthesis amplify biometric/personal leak impacts.",
      "Large breaches highlight the need for protection, compliance, and deterrence.",
      "LLMs need data minimization, isolation, and auditing; individuals should boost info-protection habits.",
    ],
  },
};
