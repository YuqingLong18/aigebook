import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { JobImpactDemo } from "../demos/JobImpactDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson5_5({ lang }: LessonProps) {
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
    { id: "bias", label: t.biasTitle },
    { id: "access", label: t.accessTitle },
    { id: "misuse", label: t.misuseTitle },
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

        <SectionBlock id="bias" title={t.biasTitle} eyebrow={t.biasEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.biasIntro}</p>
          <BiasCases lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.biasSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.biasCheckpoint.prompt}
            options={t.biasCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="access" title={t.accessTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.accessIntro}</p>
          <AccessChallenges lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.accessSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.accessCheckpoint.prompt}
            options={t.accessCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="misuse" title={t.misuseTitle} eyebrow={t.misuseEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.misuseIntro}</p>
          <JobImpactDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.misuseSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.misuseCheckpoint.prompt}
            options={t.misuseCheckpoint.options}
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

function BiasCases({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const cases = [
    {
      title: isZh ? "招聘性别偏见" : "Hiring gender bias",
      note: isZh ? "亚马逊简历筛选对女性不利，源于男性占多数的历史数据。" : "Amazon screening penalized women due to male-heavy historical data.",
    },
    {
      title: isZh ? "司法种族偏见" : "Judicial racial bias",
      note: isZh ? "COMPAS 将低风险黑人标高风险，源自偏见数据。" : "COMPAS flagged low-risk Black defendants as high-risk—data bias.",
    },
    {
      title: isZh ? "信贷性别/种族差异" : "Credit gender/race gaps",
      note: isZh ? "Apple Card 被指女性额度偏低，金融数据中的历史不平等被放大。" : "Apple Card showed lower limits for women—historic inequities amplified.",
    },
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
        {isZh ? "偏见案例" : "Bias cases"}
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

function AccessChallenges({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const items = [
    {
      title: isZh ? "老年人数字鸿沟" : "Elderly digital gap",
      note: isZh
        ? "复杂的网办/预约系统让老人难以获取服务（如疫苗预约、挂号）。"
        : "Complex online appointments/services (e.g., vaccines, hospital booking) exclude seniors.",
    },
    {
      title: isZh ? "残障群体被忽视" : "Disability overlooked",
      note: isZh
        ? "设计缺乏无障碍入口，训练数据缺少残障特征，导致识别与使用不佳。"
        : "Lack of accessible design; sparse disability data → poor recognition and usability.",
    },
    {
      title: isZh ? "垄断控制与被迫同意" : "Monopoly and forced consent",
      note: isZh
        ? "部分软件要求刷脸/指纹才能用，用户无选择权。"
        : "Some services mandate face/fingerprint with no alternatives.",
    },
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
        {isZh ? "可及性与使用不平等" : "Accessibility & inequality"}
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
      "理解 AI 公平性问题：数据偏见、特殊群体门槛与滥用风险",
      "学习改进数据、提升可及性、加强监管的应对方法",
    ],
    introTitle: "导入",
    introEyebrow: "AI 与公平",
    intro:
      "AI 若含偏见或被少数人滥用，会加剧不公、伤害弱势。需正视数据与设计的隐性歧视与滥用风险。",
    introCardTitle: "三类挑战",
    introCard: "数据偏见引发歧视；老年人/残障人士的使用鸿沟；少数主体控制技术引发不公平使用。",
    biasTitle: "1. 数据偏见引发系统性歧视",
    biasEyebrow: "招聘/司法/信贷案例",
    biasIntro:
      "训练数据的历史歧视会被模型学到并放大：招聘性别偏见、司法种族偏见、信贷性别/种族差异。",
    biasSteps: [
      "识别偏见源：历史数据中固有的不平等。",
      "观察案例对不同群体的实际影响。",
      "思考缓解：数据再采样、偏差检测、透明审计。",
    ],
    biasCheckpoint: {
      prompt: "AI 产生性别/种族歧视的根源通常是？",
      options: [
        { label: "训练数据中的历史偏见被模型学到", correct: true, explanation: "模型复制并可能放大数据中的歧视。" },
        { label: "算法永远公平", correct: false, explanation: "算法会反映数据偏差。" },
        { label: "因为没有用到数据", correct: false, explanation: "偏见来自数据而非缺数据。" },
        { label: "只要隐藏性别即可彻底消除", correct: false, explanation: "隐含特征仍可能泄露群体差异。" },
      ],
    },
    accessTitle: "2. 特殊群体的可及性难题",
    accessIntro:
      "老年人、残障人士在数字化/智能化场景中常被忽视，复杂界面、缺乏无障碍设计、稀缺的相关训练数据导致不公平体验。",
    accessSteps: [
      "举例：线上预约、智能设备对老年人不友好。",
      "残障数据稀少 → 识别和交互效果差。",
      "解决：通用设计、无障碍规范、多模态输入、人工兜底。",
    ],
    accessCheckpoint: {
      prompt: "提升 AI 对特殊群体公平性的做法是？",
      options: [
        { label: "加强无障碍设计与人工兜底选项", correct: true, explanation: "通用设计、多模态输入、人工渠道可减少排斥。" },
        { label: "移除所有帮助选项", correct: false, explanation: "反而增加门槛。" },
        { label: "只支持最新手机", correct: false, explanation: "会排斥老旧设备与老人。" },
        { label: "忽视残障用户的数据", correct: false, explanation: "需包含与增强相关数据。" },
      ],
    },
    misuseTitle: "3. 不当使用与不公平控制",
    misuseEyebrow: "垄断与滥用",
    misuseIntro:
      "AI 掌握在少数机构时，可能被用于过度监控、强制采集、价格歧视或岗位替代而缺乏配套保障，需要透明、监管与再培训支持。",
    misuseSteps: [
      "理解垄断/强制采集带来的权利不平等。",
      "联系价格歧视与岗位替代对弱势群体的冲击。",
      "思考对策：透明审计、法规约束、再培训与补偿。",
    ],
    misuseCheckpoint: {
      prompt: "减少 AI 带来不公平使用的措施包括？",
      options: [
        { label: "透明审计、法规约束并提供再培训支持", correct: true, explanation: "治理滥用，帮助受冲击群体转型。" },
        { label: "完全不监管", correct: false, explanation: "缺乏监管易被滥用。" },
        { label: "只允许一家企业独占", correct: false, explanation: "垄断易导致不公。" },
        { label: "忽视受影响群体", correct: false, explanation: "需补偿与再培训。" },
      ],
    },
    summaryTitle: "4. 小结",
    summaryPoints: [
      "AI 公平性挑战源自数据偏见、可及性不足、权力集中与滥用。",
      "缓解需改进数据、无障碍与通用设计，并通过法规、透明审计与再培训护航。",
      "AI 的目标应是让社会更公平，而非放大既有不平等。",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand AI fairness issues: data bias, accessibility gaps, and misuse risks",
      "Learn responses: better data, inclusive design, stronger governance",
    ],
    introTitle: "Overview",
    introEyebrow: "AI and fairness",
    intro:
      "AI can worsen inequality if biased or misused. We must address hidden discrimination in data/design and the risks of concentrated control.",
    introCardTitle: "Three challenges",
    introCard: "Data bias → discrimination; barriers for seniors/people with disabilities; unfair control/misuse by a few.",
    biasTitle: "1. Data Bias → Systemic Discrimination",
    biasEyebrow: "Hiring/justice/credit",
    biasIntro:
      "Historical bias in training data gets learned and amplified: hiring gender bias, justice racial bias, credit gender/race gaps.",
    biasSteps: [
      "Find the bias source: inequities baked into data.",
      "See impacts on different groups.",
      "Mitigate: resampling, bias detection, transparency/audits.",
    ],
    biasCheckpoint: {
      prompt: "Root cause of AI gender/racial discrimination?",
      options: [
        { label: "Historical bias in training data learned by models", correct: true, explanation: "Models copy and may amplify data bias." },
        { label: "Algorithms are always fair", correct: false, explanation: "They reflect data issues." },
        { label: "No data was used", correct: false, explanation: "Bias comes from the data used." },
        { label: "Hiding gender alone guarantees fairness", correct: false, explanation: "Proxies still leak group info." },
      ],
    },
    accessTitle: "2. Accessibility Challenges",
    accessIntro:
      "Seniors and people with disabilities are often excluded by complex UIs, missing accessible design, and sparse data—creating unfair experiences.",
    accessSteps: [
      "Examples: online booking, smart devices unfriendly to seniors.",
      "Sparse disability data → poor recognition/interaction.",
      "Solutions: universal design, accessibility standards, multimodal inputs, human fallback.",
    ],
    accessCheckpoint: {
      prompt: "How to improve fairness for special groups?",
      options: [
        { label: "Add accessible design and human fallback options", correct: true, explanation: "Universal design, multimodal input, and manual channels reduce exclusion." },
        { label: "Remove all help options", correct: false, explanation: "That raises barriers." },
        { label: "Support only newest devices", correct: false, explanation: "Excludes older users/devices." },
        { label: "Ignore disability data", correct: false, explanation: "Need more inclusive data." },
      ],
    },
    misuseTitle: "3. Misuse & Unfair Control",
    misuseEyebrow: "Monopoly/abuse",
    misuseIntro:
      "When a few control AI, risks include over-surveillance, forced biometrics, price discrimination, and job displacement without support—needing transparency, regulation, and reskilling aid.",
    misuseSteps: [
      "See how monopoly/forced data collection creates unequal rights.",
      "Link price discrimination and job loss impacts on vulnerable groups.",
      "Countermeasures: transparency, regulation, audits, reskilling and compensation.",
    ],
    misuseCheckpoint: {
      prompt: "What reduces unfair AI misuse?",
      options: [
        { label: "Transparency/audits, regulation, and reskilling support", correct: true, explanation: "Govern misuse and help affected workers/users." },
        { label: "No oversight at all", correct: false, explanation: "Invites abuse." },
        { label: "Single-firm monopoly", correct: false, explanation: "Concentrates power and risk." },
        { label: "Ignore impacted groups", correct: false, explanation: "Need support and safeguards." },
      ],
    },
    summaryTitle: "4. Summary",
    summaryPoints: [
      "Fairness challenges stem from data bias, poor accessibility, and concentrated control/misuse.",
      "Mitigation: better data, inclusive design, regulation, transparency, and reskilling/compensation.",
      "AI should aim to make society fairer, not amplify inequalities.",
    ],
  },
};
