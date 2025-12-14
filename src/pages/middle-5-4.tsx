import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { InfoCocoonRiskDemo } from "../demos/InfoCocoonRiskDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson5_4({ lang }: LessonProps) {
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
    { id: "definition", label: t.definitionTitle },
    { id: "causes", label: t.causesTitle },
    { id: "break", label: t.breakTitle },
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

        <SectionBlock id="definition" title={t.definitionTitle} eyebrow={t.definitionEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.definitionIntro}</p>
          <InfoCocoonRiskDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.definitionSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.definitionCheckpoint.prompt}
            options={t.definitionCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="causes" title={t.causesTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.causesIntro}</p>
          <CausesList lang={lang} />
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

        <SectionBlock id="break" title={t.breakTitle} eyebrow={t.breakEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.breakIntro}</p>
          <BreakStrategies lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.breakSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.breakCheckpoint.prompt}
            options={t.breakCheckpoint.options}
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

function CausesList({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const items = [
    {
      title: isZh ? "个性化推荐" : "Personalized recommendation",
      note: isZh ? "基于兴趣推送，信息愈发单一。" : "Interest-based feeds narrow what you see.",
    },
    {
      title: isZh ? "社交“回声室”" : "Social echo chambers",
      note: isZh ? "相似观点互相放大，隔绝异见。" : "Like-minded circles amplify agreement, mute other voices.",
    },
    {
      title: isZh ? "信息过载与偏好选择" : "Overload + biased filtering",
      note: isZh ? "信息爆炸下只挑爱看的，强化偏好。" : "Too much info → you pick what fits, reinforcing bias.",
    },
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
        {isZh ? "形成原因" : "Why cocoons form"}
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

function BreakStrategies({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const actions = [
    { title: isZh ? "多源信息" : "Multi-source info", note: isZh ? "跨领域阅读/观看，拓宽视角。" : "Read/watch across domains to widen views." },
    { title: isZh ? "查验可信度" : "Check credibility", note: isZh ? "核实来源、日期、作者，警惕不实信息。" : "Verify source/date/author; distrust shaky sources." },
    { title: isZh ? "批判性思考" : "Critical thinking", note: isZh ? "比较不同观点，思考证据与逻辑。" : "Compare viewpoints; probe evidence and logic." },
    { title: isZh ? "多元交流" : "Cross-group exchange", note: isZh ? "参加跨学科/跨社群活动，理解他人视角。" : "Join cross-field/community events to see other perspectives." },
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
        {isZh ? "走出信息茧房" : "Break the cocoon"}
      </p>
      <div className="mt-3 grid gap-3 md:grid-cols-4">
        {actions.map((act) => (
          <div key={act.title} className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-sm text-slate-800">
            <p className="font-semibold text-slate-900">{act.title}</p>
            <p className="mt-1 text-xs text-slate-700">{act.note}</p>
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
      "理解信息茧房的概念、成因及其对认知与社交的影响",
      "学习通过多源信息与批判思维打破信息茧房的方法",
    ],
    introTitle: "导入",
    introEyebrow: "“只看喜欢”带来的隐患",
    intro:
      "算法推荐让我们只看喜欢的信息，形成“信息茧房”，视野变窄、思维固化，还可能导致群体分化。",
    introCardTitle: "关键提示",
    introCard: "信息茧房是信息获取被“密封”的状态，只接触认同的信息，忽视其他声音。",
    definitionTitle: "1. 什么是信息茧房",
    definitionEyebrow: "概念与危害",
    definitionIntro:
      "信息茧房指人只关注和自身兴趣/观点一致的信息，导致视野狭窄、思维僵化、群体分化。",
    definitionSteps: [
      "只看喜欢的内容 → 视角变窄。",
      "长期强化原有观点 → 创造力与批判力下降。",
      "不同群体互不理解 → 容易产生冲突。",
    ],
    definitionCheckpoint: {
      prompt: "信息茧房的主要危害是？",
      options: [
        { label: "视野变窄、思维固化、群体分化", correct: true, explanation: "缺乏多元信息会影响认知与社交和谐。" },
        { label: "获取信息变多样", correct: false, explanation: "恰好相反，信息变单一。" },
        { label: "完全杜绝错误信息", correct: false, explanation: "会忽视其他声音，未必更准确。" },
        { label: "提升创造力", correct: false, explanation: "单一信息反而抑制创造力。" },
      ],
    },
    causesTitle: "2. 信息茧房的成因",
    causesIntro: "个性化推荐、社交回声室、信息过载下的偏好选择，共同导致视角收窄。",
    causesSteps: [
      "算法按兴趣推送，信息越来越单一。",
      "社交圈回声效应，强化同质观点。",
      "信息过载时偏向熟悉内容，进一步过滤异见。",
    ],
    causesCheckpoint: {
      prompt: "导致信息茧房的关键因素不包括？",
      options: [
        { label: "主动接触多元信息源", correct: true, explanation: "多元信息能打破茧房，而非导致它。" },
        { label: "个性化推荐算法", correct: false, explanation: "算法会推送同质内容。" },
        { label: "社交回声室", correct: false, explanation: "同质社群放大一致观点。" },
        { label: "信息过载下的偏好筛选", correct: false, explanation: "人会更倾向熟悉内容。" },
      ],
    },
    breakTitle: "3. 打破信息茧房",
    breakEyebrow: "多源 + 批判",
    breakIntro:
      "主动增加信息来源多样性，核实可信度，培养批判思维，参与跨圈交流，拓宽视野、减少误解。",
    breakSteps: [
      "订阅跨领域内容，设定多元阅读/观看清单。",
      "核实来源、日期、作者，甄别不实信息。",
      "比较不同观点，思考证据与逻辑。",
      "参与跨学科/跨社群活动，理解他人视角。",
    ],
    breakCheckpoint: {
      prompt: "打破信息茧房的有效做法是？",
      options: [
        { label: "主动获取多源信息并进行批判性思考", correct: true, explanation: "多元来源 + 思辨能拓展视角，避免封闭。" },
        { label: "只看同类观点", correct: false, explanation: "会加深茧房。" },
        { label: "忽视来源可信度", correct: false, explanation: "需核实权威与时间。" },
        { label: "远离一切交流", correct: false, explanation: "交流有助于理解他人。" },
      ],
    },
    summaryTitle: "4. 小结",
    summaryPoints: [
      "信息茧房让我们只见单一视角，影响认知、创造力与社会和谐。",
      "成因包括个性化推荐、社交回声室、信息过载中的偏好选择。",
      "多源信息、可信度核查、批判思维与跨圈交流是走出茧房的关键。",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand information cocoons, their causes, and impacts on cognition and social ties",
      "Learn ways to break them via diverse sources and critical thinking",
    ],
    introTitle: "Overview",
    introEyebrow: "The trap of “only what I like”",
    intro:
      "Algorithmic feeds show only what we like, creating an “information cocoon” that narrows views, hardens thinking, and can divide groups.",
    introCardTitle: "Key idea",
    introCard: "An information cocoon seals us inside agreeable info and filters out other voices.",
    definitionTitle: "1. What is an Information Cocoon?",
    definitionEyebrow: "Concept & harms",
    definitionIntro:
      "An information cocoon is focusing only on info that matches your interests/views, narrowing perspective, stiffening thinking, and widening divides.",
    definitionSteps: [
      "Seeing only liked content → narrow viewpoint.",
      "Reinforcing prior beliefs → less creativity/critical thinking.",
      "Isolated groups → more misunderstanding/conflict.",
    ],
    definitionCheckpoint: {
      prompt: "Main harms of information cocoons?",
      options: [
        { label: "Narrow views, rigid thinking, social division", correct: true, explanation: "Single-source info hurts cognition and harmony." },
        { label: "More diverse information", correct: false, explanation: "It becomes less diverse." },
        { label: "Eliminates all false info", correct: false, explanation: "It ignores other voices, not necessarily more accurate." },
        { label: "Boosts creativity", correct: false, explanation: "Uniform info stifles creativity." },
      ],
    },
    causesTitle: "2. Causes of Cocoons",
    causesIntro: "Personalized algorithms, social echo chambers, and overload + biased filtering shrink what we see.",
    causesSteps: [
      "Algorithms push similar content, reducing diversity.",
      "Echo chambers amplify agreement, mute other views.",
      "Info overload leads us to pick familiar content, reinforcing bias.",
    ],
    causesCheckpoint: {
      prompt: "Which does NOT cause cocoons?",
      options: [
        { label: "Actively seeking diverse sources", correct: true, explanation: "Diversity breaks cocoons, not causes them." },
        { label: "Personalized recommendation", correct: false, explanation: "It narrows feeds." },
        { label: "Social echo chambers", correct: false, explanation: "They amplify one viewpoint." },
        { label: "Overload + biased selection", correct: false, explanation: "We choose familiar info under overload." },
      ],
    },
    breakTitle: "3. Breaking the Cocoon",
    breakEyebrow: "Diversity + critical thinking",
    breakIntro:
      "Broaden sources, verify credibility, think critically, and engage across groups to expand perspective and reduce misunderstandings.",
    breakSteps: [
      "Subscribe across domains; set diverse reading/watch lists.",
      "Verify source/date/author; watch for unreliable outlets.",
      "Compare viewpoints; test evidence and logic.",
      "Join cross-field/community activities to see other perspectives.",
    ],
    breakCheckpoint: {
      prompt: "An effective way to break the cocoon?",
      options: [
        { label: "Seek diverse sources and apply critical thinking", correct: true, explanation: "Diversity + reasoning widens views." },
        { label: "Only read similar views", correct: false, explanation: "That deepens the cocoon." },
        { label: "Ignore credibility", correct: false, explanation: "Credibility checks are key." },
        { label: "Avoid all communication", correct: false, explanation: "Dialogue helps understanding." },
      ],
    },
    summaryTitle: "4. Summary",
    summaryPoints: [
      "Information cocoons limit perspective, creativity, and social harmony.",
      "Drivers include personalized feeds, echo chambers, and overloaded biased selection.",
      "Diverse sources, credibility checks, critical thinking, and cross-group exchange help break them.",
    ],
  },
};
