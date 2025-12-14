import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { LanguageAmbiguityDemo } from "../demos/LanguageAmbiguityDemo";
import { NgramVsRNNDemo } from "../demos/NgramVsRNNDemo";
import { ScalingLawDemo } from "../demos/ScalingLawDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson4_2({ lang }: LessonProps) {
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
    { id: "language-intel", label: t.languageIntelTitle },
    { id: "secret", label: t.secretTitle },
    { id: "llm", label: t.llmTitle },
    { id: "agi", label: t.agiTitle },
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

        <SectionBlock id="language-intel" title={t.languageIntelTitle} eyebrow={t.languageIntelEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.languageIntelIntro}</p>
          <GuidedSteps title={ui.guidedTitle} steps={t.languageIntelSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.languageIntelCheckpoint.prompt}
            options={t.languageIntelCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="secret" title={t.secretTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.secretIntro}</p>
          <LanguageAmbiguityDemo lang={lang} />
          <NgramVsRNNDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.secretSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.secretCheckpoint.prompt}
            options={t.secretCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="llm" title={t.llmTitle} eyebrow={t.llmEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.llmIntro}</p>
          <ScalingLawDemo lang={lang} />
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

        <SectionBlock id="agi" title={t.agiTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.agiIntro}</p>
          <GuidedSteps title={ui.guidedTitle} steps={t.agiSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.agiCheckpoint.prompt}
            options={t.agiCheckpoint.options}
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
      "了解 AI 在语言理解与生成上的历史突破",
      "认识大语言模型推进通用智能的作用",
    ],
    introTitle: "导入",
    introEyebrow: "语言与智能",
    intro: "语言是人类交流与记录知识的核心。能否理解并使用语言，长期被视为机器是否“有智能”的试金石。",
    introCardTitle: "关键观点",
    introCard: "语言承载知识、思维与创造力；掌握语言，机器就能学习人类积累的知识与思维方式。",
    languageIntelTitle: "1. 语言与智能",
    languageIntelEyebrow: "图灵测试",
    languageIntelIntro:
      "图灵在 1950 年提出“能对话到真假难辨则算智能”。语言承载知识，涉及抽象推理与创造力，也是人机自然交互的桥梁。",
    languageIntelSteps: [
      "语言传递与记录人类知识。",
      "语言包含抽象概念与推理链。",
      "掌握语言可让机器触达知识库、学习人类思维。",
    ],
    languageIntelCheckpoint: {
      prompt: "为什么语言能力被视为高阶智能标志？",
      options: [
        { label: "它包含知识、推理与创造的整合", correct: true, explanation: "语言汇聚知识与思维方式，能用语言即能触达这些能力。" },
        { label: "因为更容易做硬件优化", correct: false, explanation: "硬件重要，但语言的核心在认知层面。" },
        { label: "因为语法非常简单", correct: false, explanation: "恰恰相反，语法与语义复杂而多变。" },
        { label: "只有英语才算智能", correct: false, explanation: "任何语言都体现思维，智能不局限于某个语种。" },
      ],
    },
    secretTitle: "2. 语言的秘密：常见即合理",
    secretIntro:
      "语言的“秘密”是上下文共现模式：常与某词共现的词更可能是正确含义或下一词。违反常见搭配就显得不合理。",
    secretSteps: [
      "观察同词在不同上下文含义不同（bank=河岸/银行）。",
      "理解共现频率决定合理性（“买苹果”语境不同含义不同）。",
      "基于前文预测下一个词即可生成连贯文本。",
    ],
    secretCheckpoint: {
      prompt: "判断句子合理性的关键是什么？",
      options: [
        { label: "前后词的共现模式是否常见", correct: true, explanation: "共现频率与搭配决定句子是否自然。" },
        { label: "随机挑选单词", correct: false, explanation: "随机组合通常破坏语义。" },
        { label: "只看句子长度", correct: false, explanation: "长度不能决定语义合理。" },
        { label: "完全依赖标点", correct: false, explanation: "标点只是形式，核心是词语关系。" },
      ],
    },
    llmTitle: "3. 大语言模型",
    llmEyebrow: "Transformer & 规模",
    llmIntro:
      "传统语言模型只能看很短上下文。Transformer 让模型记住长序列，OpenAI 提出 GPT，随着参数、数据、计算量扩展，开始生成流畅语言并“展现智能”。",
    llmSteps: [
      "语言模型：根据前文预测下一词。",
      "Transformer 解决长序列记忆，提升流畅度与理解力。",
      "扩展定律：参数、数据、算力提升带来能力跃升。",
    ],
    llmCheckpoint: {
      prompt: "GPT 之所以突破的关键在于？",
      options: [
        { label: "能利用长上下文并在大规模数据上训练", correct: true, explanation: "Transformer 持久上下文 + 大数据训练带来质变。" },
        { label: "完全不用数据", correct: false, explanation: "恰恰依赖大规模数据与计算。" },
        { label: "限制参数数量", correct: false, explanation: "是扩大参数而非限制。" },
        { label: "只训练 10 个单词", correct: false, explanation: "需要海量文本才能学到模式。" },
      ],
    },
    agiTitle: "4. 走向通用智能的曙光",
    agiIntro:
      "大语言模型理解语言后，可吸收人类知识与思维方式，成为类似“处理与控制中心”。虽然内部机理仍在研究，但它们提供了实现 AGI 的现实路径。",
    agiSteps: [
      "语言理解让模型读懂/组织知识库。",
      "推理、创作能力随规模与数据增长而涌现。",
      "未来需探索更优架构与机制，确保可靠、可控。",
    ],
    agiCheckpoint: {
      prompt: "为何语言突破被视为通往 AGI 的钥匙？",
      options: [
        { label: "语言让模型汲取知识并学思维模式", correct: true, explanation: "掌握语言即能利用人类知识与思维方式，支撑通用智能。" },
        { label: "语言模型不需要推理", correct: false, explanation: "推理是关键能力，语言突破反而促进推理。" },
        { label: "因为语言模型无需数据", correct: false, explanation: "仍依赖海量数据与计算。" },
        { label: "只要翻译就等于 AGI", correct: false, explanation: "翻译是能力之一，通用智能要求广泛任务能力。" },
      ],
    },
    summaryTitle: "5. 小结",
    summaryPoints: [
      "语言能力是智能核心：承载知识、推理与创造力。",
      "基于共现预测的语言模型在 Transformer 与大规模训练下取得突破。",
      "大语言模型打开了通向通用智能的现实路径，仍需探究机制与可靠性。",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand AI’s breakthroughs in language understanding and generation",
      "Recognize how large language models advance artificial general intelligence",
    ],
    introTitle: "Overview",
    introEyebrow: "Language & intelligence",
    intro: "Language is how humans communicate and store knowledge. Whether machines can use it has long been a benchmark for intelligence.",
    introCardTitle: "Key point",
    introCard: "Language carries knowledge, reasoning, and creativity. Once machines master language, they can learn our knowledge and thinking styles.",
    languageIntelTitle: "1. Language and Intelligence",
    languageIntelEyebrow: "Turing’s lens",
    languageIntelIntro:
      "Turing’s 1950 test said: if dialog is indistinguishable from a human, the machine is intelligent. Language embeds knowledge, abstract reasoning, creativity, and is the bridge for natural interaction.",
    languageIntelSteps: [
      "Language transmits and stores human knowledge.",
      "It encodes abstract concepts and chains of reasoning.",
      "Mastering language lets machines tap human knowledge and thinking patterns.",
    ],
    languageIntelCheckpoint: {
      prompt: "Why is language a hallmark of high-level intelligence?",
      options: [
        { label: "It integrates knowledge, reasoning, and creativity", correct: true, explanation: "Language bundles these abilities; using it taps them all." },
        { label: "It is mainly about hardware", correct: false, explanation: "Hardware matters, but the marker is cognitive." },
        { label: "Because grammar is trivial", correct: false, explanation: "Grammar/semantics are complex and nuanced." },
        { label: "Only English counts", correct: false, explanation: "Any language reflects thinking; no single language defines intelligence." },
      ],
    },
    secretTitle: "2. The Secret of Language",
    secretIntro:
      "Language obeys co-occurrence patterns: what’s commonly said tends to be reasonable. Uncommon pairings sound wrong; context disambiguates meaning.",
    secretSteps: [
      "Same word can mean different things in different contexts.",
      "Common co-occurrences determine what sounds natural.",
      "Predicting the next word from history can generate coherent text.",
    ],
    secretCheckpoint: {
      prompt: "Key to judging if a sentence sounds right?",
      options: [
        { label: "Whether word pairs are common in context", correct: true, explanation: "Co-occurrence patterns drive naturalness." },
        { label: "Pick words at random", correct: false, explanation: "Random words usually break meaning." },
        { label: "Only sentence length", correct: false, explanation: "Length alone doesn’t decide semantics." },
        { label: "Rely only on punctuation", correct: false, explanation: "Punctuation helps, but word relations matter most." },
      ],
    },
    llmTitle: "3. Large Language Models",
    llmEyebrow: "Transformer + scale",
    llmIntro:
      "Old models saw short context. Transformers remember long sequences; OpenAI’s GPT scaled parameters, data, and compute to generate fluent language—and surprising abilities.",
    llmSteps: [
      "Language models predict the next word from history.",
      "Transformer keeps long context, boosting fluency and understanding.",
      "Scaling laws: more parameters/data/compute lead to sharp capability jumps.",
    ],
    llmCheckpoint: {
      prompt: "What unlocked GPT’s leap?",
      options: [
        { label: "Long-context modeling plus large-scale training", correct: true, explanation: "Transformer + big data/compute enabled the jump." },
        { label: "Training with zero data", correct: false, explanation: "It relies on massive text corpora." },
        { label: "Restricting parameters", correct: false, explanation: "Scaling up parameters was key." },
        { label: "Training only 10 words", correct: false, explanation: "It trains on huge amounts of text." },
      ],
    },
    agiTitle: "4. Dawn of AGI",
    agiIntro:
      "By mastering language, LLMs ingest human knowledge and thought patterns, acting like a processing/control center. Mechanisms are still probed, but they offer a realistic path to AGI.",
    agiSteps: [
      "Language understanding lets models read/organize knowledge bases.",
      "Reasoning and creativity emerge as scale grows.",
      "Future work: better architectures and reliable, controllable behavior.",
    ],
    agiCheckpoint: {
      prompt: "Why is language ability viewed as a key to AGI?",
      options: [
        { label: "It lets models absorb knowledge and thinking patterns", correct: true, explanation: "Language unlocks human knowledge and reasoning styles." },
        { label: "Because LLMs don’t need reasoning", correct: false, explanation: "Reasoning is central; language progress boosts it." },
        { label: "Because LLMs use zero data", correct: false, explanation: "They depend on massive data/compute." },
        { label: "Translation alone equals AGI", correct: false, explanation: "Translation is one skill; AGI needs broad abilities." },
      ],
    },
    summaryTitle: "5. Summary",
    summaryPoints: [
      "Language sits at the core of intelligence: knowledge, reasoning, creativity.",
      "Co-occurrence-based language models, empowered by Transformers and scale, broke through.",
      "LLMs opened a practical path to AGI; mechanisms and reliability remain active research.",
    ],
  },
};
