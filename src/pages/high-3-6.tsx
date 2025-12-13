import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { AttentionTranslationDemo } from "../demos/AttentionTranslationDemo";
import { LanguageAmbiguityDemo } from "../demos/LanguageAmbiguityDemo";
import { SMTAlignmentDemo } from "../demos/SMTAlignmentDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson3_6({ lang }: LessonProps) {
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
    { id: "lang", label: isZh ? "1. 语言特性" : "1. Language Traits" },
    { id: "rule", label: isZh ? "2. 规则方法" : "2. Rule-Based MT" },
    { id: "smt", label: isZh ? "3. 统计机器翻译" : "3. Statistical MT" },
    { id: "nmt", label: isZh ? "4. 神经机器翻译" : "4. Neural MT" },
    { id: "history", label: isZh ? "5. 历史与趋势" : "5. History & Trends" },
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

        <SectionBlock id="lang" title={t.langTitle} eyebrow={t.langEyebrow}>
          <InfoCard title={t.langCardTitle}>
            {t.langParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <LanguageAmbiguityDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.langSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.langCheckpoint.prompt}
            options={t.langCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="rule" title={t.ruleTitle} eyebrow={t.ruleEyebrow}>
          <InfoCard title={t.ruleCardTitle}>
            {t.ruleParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.ruleSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.ruleCheckpoint.prompt}
            options={t.ruleCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="smt" title={t.smtTitle} eyebrow={t.smtEyebrow}>
          <InfoCard title={t.smtCardTitle}>
            {t.smtParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <SMTAlignmentDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.smtSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.smtCheckpoint.prompt}
            options={t.smtCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="nmt" title={t.nmtTitle} eyebrow={t.nmtEyebrow}>
          <InfoCard title={t.nmtCardTitle}>
            {t.nmtParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <AttentionTranslationDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.nmtSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.nmtCheckpoint.prompt}
            options={t.nmtCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="history" title={t.historyTitle} eyebrow={t.historyEyebrow}>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
            {t.historyPoints.map((p) => (
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
      "Explain language traits (abstraction, rule+flexibility, ambiguity) and cross-lingual impact.",
      "Differentiate rule-based MT types and limits.",
      "Describe SMT: parallel corpora, phrase alignment, probabilistic decoding.",
      "Explain NMT: end-to-end, attention, advantages and current bottlenecks.",
      "Trace MT evolution and future trends.",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "Breaking language barriers",
    introText:
      "MT evolved from rules → statistics → neural. Language’s abstraction, flexibility, and ambiguity make translation hard; deep models now handle much of it end-to-end.",
    langTitle: "1. Characteristics of Human Language",
    langEyebrow: "Abstraction · Flexibility · Ambiguity",
    langCardTitle: "Why MT is hard",
    langParas: [
      "Abstraction: symbols condense huge meaning (e.g., “protein”).",
      "Rules + flexibility: grammar guides meaning but can be bent (“Chair give me”).",
      "Ambiguity: polysemy/homophones need context (bank, 好).",
    ],
    langSteps: [
      "Name the three traits and why they hinder direct mapping.",
      "Use context to resolve a polysemous word.",
      "Relate to MT: need disambiguation before translation.",
    ],
    langCheckpoint: {
      prompt: "Why is ambiguity challenging for MT?",
      options: [
        {
          label: "Words like “bank” need context to choose correct meaning.",
          correct: true,
          explanation: "MT must infer sense from surrounding words.",
        },
        {
          label: "All words have only one meaning.",
          correct: false,
          explanation: "Polysemy is common; ignoring it causes errors.",
        },
      ],
    },
    ruleTitle: "2. Rule-Based MT",
    ruleEyebrow: "Dictionaries + grammar",
    ruleCardTitle: "Direct, transfer, interlingua",
    ruleParas: [
      "Direct: word-by-word + reorder; simple, brittle.",
      "Transfer: parse source → intermediate → target; parsing difficulty limits quality.",
      "Interlingua: map both languages to a shared meaning space; ambitious but hard.",
      "Cold War optimism faded after ALPAC showed semantic limits.",
    ],
    ruleSteps: [
      "Contrast direct vs. transfer vs. interlingua.",
      "Recall Georgetown-IBM demo and ALPAC critique.",
      "Note rule-based weakness on deep syntax/semantics.",
    ],
    ruleCheckpoint: {
      prompt: "Transfer-based MT differs from direct MT because…",
      options: [
        {
          label: "It parses into an intermediate structure before generating target.",
          correct: true,
          explanation: "Transfer uses layered conversion, not pure word mapping.",
        },
        {
          label: "It ignores grammar entirely.",
          correct: false,
          explanation: "Transfer relies on grammar; direct is simpler.",
        },
      ],
    },
    smtTitle: "3. Statistical Machine Translation",
    smtEyebrow: "Data-driven",
    smtCardTitle: "Parallel corpora + phrase table",
    smtParas: [
      "Uses parallel sentences to learn word/phrase alignments and probabilities.",
      "Decoding picks the most probable target sequence (learned lexicon + language model).",
      "Limits: data hungry, struggles with long sentences/fluency.",
    ],
    smtSteps: [
      "Define parallel corpus and phrase alignment.",
      "Explain probabilistic decoding.",
      "State SMT limits (data coverage, long-range syntax).",
    ],
    smtCheckpoint: {
      prompt: "SMT dictionaries/rules come from…",
      options: [
        { label: "Statistics over parallel corpora.", correct: true, explanation: "Phrase tables are learned." },
        { label: "Purely hand-written rules.", correct: false, explanation: "That was rule-based MT." },
      ],
    },
    nmtTitle: "4. Neural Machine Translation",
    nmtEyebrow: "End-to-end + attention",
    nmtCardTitle: "Encoder–decoder with attention",
    nmtParas: [
      "Neural MT learns mappings in network weights; simpler architecture than SMT.",
      "Attention lets decoder focus on relevant source words per target token.",
      "Advantages: fluency, long-range dependency handling; challenges: low-resource, domain terms, rare/new words.",
    ],
    nmtSteps: [
      "Outline encoder-decoder workflow.",
      "Describe attention’s role in alignment and long context.",
      "List NMT strengths vs. SMT and current bottlenecks.",
    ],
    nmtCheckpoint: {
      prompt: "Attention improves NMT by…",
      options: [
        {
          label: "Letting the decoder focus on relevant source words for each target word.",
          correct: true,
          explanation: "This aids alignment and long dependencies.",
        },
        {
          label: "Removing the encoder entirely.",
          correct: false,
          explanation: "Encoder still encodes the source sequence.",
        },
      ],
    },
    historyTitle: "5. Breaking Barriers",
    historyEyebrow: "Timeline & future",
    historyPoints: [
      "1947 Weaver memo → 1954 Georgetown-IBM → 1966 ALPAC → 1988 IBM SMT → 2016 Google NMT.",
      "Low-resource MT: exploring unsupervised, cross-lingual transfer, knowledge+data fusion.",
      "Goal: seamless global communication; even playful pet “translation” hints at broader horizons.",
    ],
    summaryTitle: "Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "Language traits make MT challenging: abstraction, flexible rules, ambiguity.",
      "Rule-based → SMT → NMT: increasing data-driven learning.",
      "SMT learns phrase probabilities; NMT learns end-to-end with attention.",
      "NMT excels on major pairs; low-resource/domain terms remain difficult.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "阐述语言的抽象性、规则+灵活性、歧义性及其跨语种影响。",
      "区分基于规则的直译/转换/中间语方法与局限。",
      "掌握 SMT：平行语料、短语对齐、概率解码的核心思想。",
      "理解 NMT 端到端翻译与注意力机制，比较其优势与瓶颈。",
      "梳理机器翻译发展历程与未来趋势。",
    ],
    introTitle: "开篇理解",
    introEyebrow: "跨越语言鸿沟",
    introText:
      "机器翻译经历了规则→统计→神经的演进。语言的抽象、灵活与歧义让翻译困难，深度模型正用端到端方式破解。",
    langTitle: "1. 语言特性",
    langEyebrow: "抽象·灵活·歧义",
    langCardTitle: "为何翻译难",
    langParas: [
      "抽象：符号背后是庞大含义（如“蛋白质”）。",
      "规则+灵活：有语法却常被打破（“Chair give me”）。",
      "歧义：多义/同音需上下文消歧（bank、好）。",
    ],
    langSteps: ["列出三大特性与障碍。", "用上下文消解多义词。", "联系翻译需要先消歧。"],
    langCheckpoint: {
      prompt: "歧义对机器翻译的挑战在于：",
      options: [
        { label: "同一词在不同上下文含义不同，需先判定。", correct: true, explanation: "需依赖上下文消歧。" },
        { label: "所有词都只有一个意思。", correct: false, explanation: "多义普遍，忽视会误译。" },
      ],
    },
    ruleTitle: "2. 基于规则的方法",
    ruleEyebrow: "词典 + 语法",
    ruleCardTitle: "直译、转换、中间语",
    ruleParas: [
      "直译：逐词翻译+调整词序，简单但脆弱。",
      "转换：自底向上解析→中间层→生成目标，解析难度高。",
      "中间语：映射到共享语义空间，理想化但实现难。",
      "冷战乐观被 ALPAC 报告泼冷水，暴露语义瓶颈。",
    ],
    ruleSteps: ["对比直译/转换/中间语。", "回顾乔治城-IBM 实验与 ALPAC 批评。", "指出规则方法难处理复杂语义。"],
    ruleCheckpoint: {
      prompt: "转换式翻译区别于直译在于：",
      options: [
        { label: "先解析到中间结构，再生成目标语。", correct: true, explanation: "多层转换而非逐词替换。" },
        { label: "完全不管语法。", correct: false, explanation: "转换依赖语法；直译更简单。" },
      ],
    },
    smtTitle: "3. 统计机器翻译",
    smtEyebrow: "数据驱动",
    smtCardTitle: "平行语料 + 短语表",
    smtParas: [
      "利用平行句对统计词/短语对齐与概率。",
      "解码时用概率选择最可能的译文（短语表+语言模型）。",
      "局限：数据依赖大，长句/复杂结构流畅性不足。",
    ],
    smtSteps: ["定义平行语料与短语对齐。", "解释概率解码。", "说明数据与结构局限。"],
    smtCheckpoint: {
      prompt: "SMT 的词典/规则主要来自：",
      options: [
        { label: "平行语料的统计学习。", correct: true, explanation: "短语表是数据学得的。" },
        { label: "纯手写规则。", correct: false, explanation: "那是规则翻译。" },
      ],
    },
    nmtTitle: "4. 神经机器翻译",
    nmtEyebrow: "端到端 + 注意力",
    nmtCardTitle: "编码-解码与注意力",
    nmtParas: [
      "端到端在网络权重中学习映射，结构比 SMT 简洁。",
      "注意力让解码器逐词关注相关源词，处理对齐与长依赖。",
      "优点：流畅、长依赖；挑战：低资源、领域术语、罕见/新词。",
    ],
    nmtSteps: ["概述编码-解码流程。", "说明注意力的对齐作用。", "列出优势与瓶颈。"],
    nmtCheckpoint: {
      prompt: "注意力的作用是：",
      options: [
        { label: "生成每个译词时关注对应源词。", correct: true, explanation: "对齐与长依赖处理。" },
        { label: "把编码器删掉。", correct: false, explanation: "编码器仍需编码源序列。" },
      ],
    },
    historyTitle: "5. 历程与趋势",
    historyEyebrow: "回顾与展望",
    historyPoints: [
      "1947 Weaver → 1954 乔治城-IBM → 1966 ALPAC → 1988 IBM SMT → 2016 Google NMT。",
      "低资源探索：无监督、跨语迁移、知识+数据融合。",
      "愿景：无障碍交流，甚至宠物“翻译”等趣味应用。",
    ],
    summaryTitle: "本节小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "语言特性让翻译难：抽象、灵活、歧义。",
      "演进：规则→统计→神经，数据驱动增强。",
      "SMT 学概率表，NMT 端到端+注意力。",
      "主流语对接近人类，低资源/专有名词仍是难点。",
    ],
  },
};
