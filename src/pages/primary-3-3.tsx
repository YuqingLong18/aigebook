import { useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";

type LessonProps = {
  lang: "en" | "zh";
};

export function PrimaryLesson3_3({ lang }: LessonProps) {
  const isZh = lang === "zh";
  const ui = {
    reset: isZh ? "重置" : "Reset",
    checkpointTag: isZh ? "小测" : "Checkpoint",
    correctLabel: isZh ? "答对啦" : "Correct",
    incorrectLabel: isZh ? "再想想" : "Try again",
    guidedTitle: isZh ? "一起做" : "Try it",
  };

  const t = content[lang];
  const toc = [
    { id: "learning-objectives", label: t.learningObjectivesTitle },
    { id: "intro", label: t.introTitle },
    { id: "rules", label: t.rulesTitle },
    { id: "growth", label: t.growthTitle },
    { id: "rival", label: t.rivalTitle },
    { id: "history", label: t.historyTitle },
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
          <p className="text-sm leading-relaxed text-slate-700">{t.introText}</p>
          <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 whitespace-pre-line">
            {t.introPoem}
          </div>
          <p className="text-sm leading-relaxed text-slate-700">{t.introOutro}</p>
        </SectionBlock>

        <SectionBlock id="rules" title={t.rulesTitle} eyebrow={t.rulesEyebrow}>
          <InfoCard title={t.rulesConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.rulesConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.rulesParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <VerseRuleDemo
            lang={lang}
            title={t.rulesDemo.title}
            goal={t.rulesDemo.goal}
            resetLabel={ui.reset}
            examples={t.rulesDemo.examples}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.rulesSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.rulesCheckpoint.prompt}
            options={t.rulesCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="growth" title={t.growthTitle} eyebrow={t.growthEyebrow}>
          <InfoCard title={t.growthConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.growthConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.growthParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 whitespace-pre-line">
            {t.growthPoem}
          </div>
          <PatchworkDemo
            lang={lang}
            title={t.growthDemo.title}
            goal={t.growthDemo.goal}
            resetLabel={ui.reset}
            methods={t.growthDemo.methods}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.growthSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.growthCheckpoint.prompt}
            options={t.growthCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="rival" title={t.rivalTitle} eyebrow={t.rivalEyebrow}>
          <InfoCard title={t.rivalConceptTitle}>
            <ul className="space-y-1 text-sm text-slate-700">
              {t.rivalConceptLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoCard>
          {t.rivalParas.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
          <SpeedDepthDemo
            lang={lang}
            title={t.rivalDemo.title}
            goal={t.rivalDemo.goal}
            resetLabel={ui.reset}
            levels={t.rivalDemo.levels}
          />
          <GuidedSteps title={ui.guidedTitle} steps={t.rivalSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.rivalCheckpoint.prompt}
            options={t.rivalCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="history" title={t.historyTitle} eyebrow={t.historyEyebrow}>
          <InfoCard title={t.historyCardTitle}>
            {t.historyParas.map((para) => (
              <p key={para} className="text-sm text-slate-700">
                {para}
              </p>
            ))}
          </InfoCard>
        </SectionBlock>

        <SectionBlock id="summary" title={t.summaryTitle} eyebrow={t.summaryEyebrow}>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
            {t.summaryPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SectionBlock>
      </div>
    </div>
  );
}

type RuleCheck = {
  rule: string;
  ok: boolean;
  note: string;
};

type VerseExample = {
  key: string;
  label: string;
  poem: string;
  checks: RuleCheck[];
};

function VerseRuleDemo({
  lang,
  title,
  goal,
  resetLabel,
  examples,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  examples: VerseExample[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(examples[0]?.key ?? "");
  const current = examples.find((example) => example.key === active) ?? examples[0];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
            {isZh ? "互动演示" : "Interactive Demo"}
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{title}</p>
          <p className="mt-1 text-xs text-slate-600">{goal}</p>
        </div>
        <button
          type="button"
          onClick={() => setActive(examples[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {examples.map((example) => (
          <button
            key={example.key}
            type="button"
            onClick={() => setActive(example.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              example.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {example.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 space-y-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 whitespace-pre-line">
            {current.poem}
          </div>
          <div className="grid gap-2 md:grid-cols-2">
            {current.checks.map((check) => (
              <div key={check.rule} className="rounded-xl border border-slate-200 bg-white p-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-700">{check.rule}</span>
                  <span
                    className={[
                      "rounded-full px-2 py-0.5 text-[10px] font-semibold",
                      check.ok ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700",
                    ].join(" ")}
                  >
                    {check.ok ? (isZh ? "符合" : "Meets") : isZh ? "欠缺" : "Needs work"}
                  </span>
                </div>
                <p className="mt-1 text-slate-600">{check.note}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

type PatchworkMethod = {
  key: string;
  label: string;
  result: string;
  note: string;
};

function PatchworkDemo({
  lang,
  title,
  goal,
  resetLabel,
  methods,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  methods: PatchworkMethod[];
}) {
  const isZh = lang === "zh";
  const [active, setActive] = useState(methods[0]?.key ?? "");
  const current = methods.find((method) => method.key === active) ?? methods[0];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
            {isZh ? "互动演示" : "Interactive Demo"}
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{title}</p>
          <p className="mt-1 text-xs text-slate-600">{goal}</p>
        </div>
        <button
          type="button"
          onClick={() => setActive(methods[0]?.key ?? "")}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {methods.map((method) => (
          <button
            key={method.key}
            type="button"
            onClick={() => setActive(method.key)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              method.key === active
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {method.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="mt-3 space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 whitespace-pre-line">
          <p>{current.result}</p>
          <p className="text-xs text-slate-500">{current.note}</p>
        </div>
      )}
    </div>
  );
}

type SpeedLevel = {
  key: string;
  label: string;
  detail: string;
};

function SpeedDepthDemo({
  lang,
  title,
  goal,
  resetLabel,
  levels,
}: {
  lang: "en" | "zh";
  title: string;
  goal: string;
  resetLabel: string;
  levels: SpeedLevel[];
}) {
  const isZh = lang === "zh";
  const [index, setIndex] = useState(0);
  const current = levels[index] ?? levels[0];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
            {isZh ? "互动演示" : "Interactive Demo"}
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{title}</p>
          <p className="mt-1 text-xs text-slate-600">{goal}</p>
        </div>
        <button
          type="button"
          onClick={() => setIndex(0)}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          {resetLabel}
        </button>
      </div>

      <div className="mt-3">
        <input
          type="range"
          min={0}
          max={levels.length - 1}
          value={index}
          onChange={(event) => setIndex(Number(event.target.value))}
          className="w-full accent-brand-600"
          aria-label={isZh ? "速度与深度" : "Speed and depth"}
        />
        <div className="mt-1 flex justify-between text-xs text-slate-500">
          {levels.map((level) => (
            <span key={level.key}>{level.label}</span>
          ))}
        </div>
      </div>

      {current && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          {current.detail}
        </div>
      )}
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand the development of AI poetry generation.",
      "Know that breakthroughs in AI poetry are made possible by deep neural network models.",
      "Consider whether AI poetry has artistic creativity and how it differs from human creation.",
    ],
    introTitle: "Story Start",
    introEyebrow: "Opening",
    introText:
      "Poetry is a treasure of Chinese culture, but writing it well is extremely hard. Today, AI can already write poems that sound surprisingly fluent. Here is one possible translation of the AI poem Ode to Begonia Blossoms:",
    introPoem:
      "Crimson clouds lightly tint the water's grace,\nTen thousand blooms on emerald peaks are traced.\nAfter one night's rain from an eastern breeze,\nThe city glows with spring beneath heaven's rays.",
    introOutro: "It is hard to imagine this was written by AI. Let's explore how it works.",
    rulesTitle: "1. One Chant and Two Tears Streamed",
    rulesEyebrow: "Poetry rules",
    rulesConceptTitle: "Concept Card",
    rulesConceptLines: [
      "Regulated verse follows strict word count, rhyme, and tone rules.",
      "Lines must be coherent and imagery should be vivid.",
      "Poetry is like dancing in shackles: structured and expressive.",
    ],
    rulesParas: [
      "Regulated verse such as quatrains and lushi follows strict rules. A seven-character quatrain has exactly four lines with seven characters each.",
      "It also must follow rhyme and tone (pingze) patterns. For example: \nMorning rain at Wei has the light dust sprinkled clean;\nRefreshing green willow brightens the travelers inn.",
      "If a poem only follows the rhyme but lacks imagery and logic, it is not a true regulated poem. That is why writing poetry is so difficult.",
      "Tang poet Jia Dao once wrote: \nTwo lines in three years gained,\nOne chant and two tears streamed.",
    ],
    rulesDemo: {
      title: "Poetry Rule Checker",
      goal: "Compare a strong verse with a weak one to see the rules.",
      examples: [
        {
          key: "strong",
          label: "Structured verse",
          poem:
            "Morning rain at Wei has the light dust sprinkled clean;\nRefreshing green willow brightens the travelers inn.",
          checks: [
            {
              rule: "Word count",
              ok: true,
              note: "Lines have consistent length.",
            },
            {
              rule: "Rhyme",
              ok: true,
              note: "Ending sounds match the rhyme pattern.",
            },
            {
              rule: "Imagery",
              ok: true,
              note: "Scenes of rain and willows feel vivid.",
            },
          ],
        },
        {
          key: "weak",
          label: "Weak imagery",
          poem:
            "Beijing heavy rain falls to clear the dust,\nThe room is fine, willows newly brushed.\nPour him another cup of wine,\nOutside the city gates, no one's in sight.",
          checks: [
            {
              rule: "Word count",
              ok: true,
              note: "The lines are even, but the content is flat.",
            },
            {
              rule: "Rhyme",
              ok: true,
              note: "The rhyme exists but feels forced.",
            },
            {
              rule: "Imagery",
              ok: false,
              note: "Images are dull and logic is unclear.",
            },
          ],
        },
      ],
    },
    rulesSteps: [
      "Pick an example poem.",
      "Check which rules are met.",
      "Explain why imagery matters.",
    ],
    rulesCheckpoint: {
      prompt: "Why is regulated verse hard to write?",
      options: [
        {
          label: "It must follow strict rules and still feel vivid and coherent.",
          correct: true,
          explanation: "Poets balance rules with creativity and emotion.",
        },
        {
          label: "Because it can ignore rhyme and tone.",
          correct: false,
          explanation: "Regulated verse must follow rhyme and tone patterns.",
        },
        {
          label: "Because it allows random words without structure.",
          correct: false,
          explanation: "Structure is required in regulated verse.",
        },
      ],
    },
    growthTitle: "2. The Growth of the AI Poet",
    growthEyebrow: "From rules to learning",
    growthConceptTitle: "Concept Card",
    growthConceptLines: [
      "Early AI poets used simple rules or cut-and-paste methods.",
      "Deep neural networks learn from huge collections of poems.",
      "Training at scale helps AI write smoother, more coherent lines.",
    ],
    growthParas: [
      "Early AI poetry used strict templates or swapped lines from old poems. This often produced awkward results because the machine did not understand meaning.",
      "As datasets grew, AI learned by reading massive collections of poems. Deep neural networks can absorb patterns of language, rhythm, and imagery.",
      "Tsinghua University's poetry robot Jiu Ge created this seven-character quatrain about winter:",
    ],
    growthPoem:
      "White snow spreads across the distant hills,\nCold winds pierce the single coat that chills.\nNo trace of sparrows on the frosty trees,\nOnly red plum blossoms brave the year's freeze.",
    growthDemo: {
      title: "Patchwork vs. Learning",
      goal: "See how different methods change poem quality.",
      methods: [
        {
          key: "splice",
          label: "Cut-and-paste",
          result:
            "Fallen autumn light carries the painted screen,\nChu waist, small fan, light in the palm's sheen.",
          note: "Words flow, but the meaning feels jumbled.",
        },
        {
          key: "learn",
          label: "Deep learning",
          result:
            "White snow spreads across the distant hills,\nOnly red plum blossoms brave the year's freeze.",
          note: "The imagery is clearer and more coherent.",
        },
      ],
    },
    growthSteps: [
      "Switch between the two methods.",
      "Compare clarity and imagery.",
      "Explain why learning helps more than splicing.",
    ],
    growthCheckpoint: {
      prompt: "What helped AI poetry improve the most?",
      options: [
        {
          label: "Deep neural networks trained on large collections of poems.",
          correct: true,
          explanation: "Scale and deep learning improved coherence.",
        },
        {
          label: "Only swapping lines between two poems.",
          correct: false,
          explanation: "Cut-and-paste methods are limited.",
        },
        {
          label: "Removing all poetry rules.",
          correct: false,
          explanation: "Rules and patterns still matter for quality.",
        },
      ],
    },
    rivalTitle: "3. Can AI Poets Rival Human Poets?",
    rivalEyebrow: "Strengths and limits",
    rivalConceptTitle: "Concept Card",
    rivalConceptLines: [
      "Human masters create unique, original lines.",
      "AI can generate many poems quickly but may lack depth.",
      "AI can still offer fresh lines that inspire people.",
    ],
    rivalParas: [
      "Great poets like Li Bai and Wen Tingyun used unexpected images to express emotion. Their originality made the poems timeless.",
      "AI poets can write quickly, but many lines feel similar to what they learned. Still, some lines are fresh and can inspire human writers.",
    ],
    rivalDemo: {
      title: "Speed vs. Depth",
      goal: "Compare AI speed with human artistic depth.",
      levels: [
        {
          key: "human",
          label: "Human master",
          detail: "Slow and careful, but with strong emotion and originality.",
        },
        {
          key: "ai",
          label: "AI poet",
          detail: "Fast and productive, but depth can be uneven.",
        },
        {
          key: "mix",
          label: "Collaboration",
          detail: "Humans use AI ideas while keeping human creativity.",
        },
      ],
    },
    rivalSteps: [
      "Slide between human, AI, and collaboration.",
      "Explain one strength and one weakness of AI poetry.",
      "Share how people can use AI responsibly.",
    ],
    rivalCheckpoint: {
      prompt: "Which statement best matches the lesson?",
      options: [
        {
          label: "AI writes quickly but still struggles with deep originality.",
          correct: true,
          explanation: "The lesson highlights speed and limits.",
        },
        {
          label: "AI already surpasses all human poets.",
          correct: false,
          explanation: "The lesson says AI cannot yet match masters.",
        },
        {
          label: "AI poetry is impossible and will never improve.",
          correct: false,
          explanation: "AI poetry has improved with deep learning.",
        },
      ],
    },
    historyTitle: "History Corner",
    historyEyebrow: "Jia Dao",
    historyCardTitle: "The story of Jia Dao",
    historyParas: [
      "Jia Dao (779-843) was a Tang poet nicknamed the \"Poetry Slave\" for his careful crafting of lines.",
      "The idiom \"pushing and knocking\" comes from his debate over a single word in a poem.",
      "He wrote, \"Two lines in three years gained, one chant and two tears streamed,\" to show the hard work of poetry.",
    ],
    summaryTitle: "Key Takeaways",
    summaryEyebrow: "Lesson summary",
    summaryPoints: [
      "Regulated verse follows strict rules of length, rhyme, and tone.",
      "Early AI poetry used rules and splicing, but deep learning improved coherence.",
      "AI poets are fast but still struggle to match human originality.",
      "AI can inspire human writers when used thoughtfully.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "了解 AI 诗歌生成技术的发展。",
      "认识深度神经网络是 AI 诗歌突破的关键。",
      "思考 AI 诗歌是否具有艺术创造力，并理解与人类创作的差异。",
    ],
    introTitle: "故事开头",
    introEyebrow: "课程导入",
    introText:
      "诗歌是中华文化的瑰宝，写好诗却非常难。如今，AI 也能写出令人惊讶的诗句。下面是一种可能的英译版本：",
    introPoem:
      "Crimson clouds lightly tint the water's grace,\nTen thousand blooms on emerald peaks are traced.\nAfter one night's rain from an eastern breeze,\nThe city glows with spring beneath heaven's rays.",
    introOutro: "很难想象这首诗出自 AI。让我们一起揭秘 AI 诗人的秘密。",
    rulesTitle: "1. 一吟双泪流",
    rulesEyebrow: "诗歌规则",
    rulesConceptTitle: "概念卡片",
    rulesConceptLines: [
      "格律诗必须满足字数、押韵和声调规则。",
      "诗句要通顺连贯，意象要生动。",
      "写诗像“戴着镣铐跳舞”。",
    ],
    rulesParas: [
      "格律诗如绝句、律诗有严格要求。比如七言绝句只有四句，每句七个字。",
      "它还要遵守押韵和平仄规则。例如：\n渭城朝雨浥轻尘，\n客舍青青柳色新。",
      "如果诗只押韵却缺乏意象和逻辑，就不能算好诗。写诗因此很难。",
      "唐代诗人贾岛写道：\n二句三年得，\n一吟双泪流。",
    ],
    rulesDemo: {
      title: "诗歌规则检查",
      goal: "对比诗例，看看规则是否满足。",
      examples: [
        {
          key: "strong",
          label: "结构完整",
          poem: "渭城朝雨浥轻尘，\n客舍青青柳色新。",
          checks: [
            { rule: "字数", ok: true, note: "句式整齐。" },
            { rule: "押韵", ok: true, note: "结尾有韵脚呼应。" },
            { rule: "意象", ok: true, note: "雨与柳色画面清晰。" },
          ],
        },
        {
          key: "weak",
          label: "意象不足",
          poem: "北京大雨洗尽尘，\n屋里整洁柳又新。\n再给他斟一杯酒，\n城外再无人影。",
          checks: [
            { rule: "字数", ok: true, note: "结构整齐，但内容单薄。" },
            { rule: "押韵", ok: true, note: "有押韵但显得生硬。" },
            { rule: "意象", ok: false, note: "画面平淡，逻辑不清。" },
          ],
        },
      ],
    },
    rulesSteps: ["选择一个诗例。", "查看哪些规则满足。", "解释为什么意象重要。"],
    rulesCheckpoint: {
      prompt: "为什么格律诗难写？",
      options: [
        {
          label: "既要严格守规矩，又要有生动情感。",
          correct: true,
          explanation: "需要在规则与表达之间平衡。",
        },
        {
          label: "因为可以忽略押韵与平仄。",
          correct: false,
          explanation: "格律诗必须遵守押韵和平仄。",
        },
        {
          label: "因为可以随便写没有结构。",
          correct: false,
          explanation: "格律诗必须有结构与规则。",
        },
      ],
    },
    growthTitle: "2. AI 诗人的成长",
    growthEyebrow: "从规则到学习",
    growthConceptTitle: "概念卡片",
    growthConceptLines: [
      "早期 AI 只会用规则或拼接诗句。",
      "深度神经网络从大量诗歌中学习。",
      "大规模训练让诗句更顺畅。",
    ],
    growthParas: [
      "早期 AI 诗歌常用模板或拼接旧诗句，因此语义容易混乱。",
      "随着数据增多，AI 通过深度神经网络学习诗歌规律，逐渐理解词句之间的关系。",
      "清华大学诗歌机器人“九歌”曾写出这首七言绝句：",
    ],
    growthPoem:
      "白雪铺远岭，\n寒风透单衣。\n树上无飞雀，\n唯有红梅枝。",
    growthDemo: {
      title: "拼接 vs 学习",
      goal: "看看不同方法的诗句效果。",
      methods: [
        {
          key: "splice",
          label: "拼接法",
          result: "落秋之光映画屏，\n楚腰小扇掌中轻。",
          note: "读起来顺，但含义不够连贯。",
        },
        {
          key: "learn",
          label: "深度学习",
          result: "白雪铺远岭，\n唯有红梅枝。",
          note: "画面更清晰，情感更连贯。",
        },
      ],
    },
    growthSteps: ["切换两种方法。", "比较诗句是否连贯。", "解释学习比拼接更有效。"],
    growthCheckpoint: {
      prompt: "AI 诗歌进步的关键是什么？",
      options: [
        {
          label: "深度神经网络和大规模诗歌训练。",
          correct: true,
          explanation: "大规模学习提升了连贯性。",
        },
        {
          label: "只靠拼接两首诗。",
          correct: false,
          explanation: "拼接法效果有限。",
        },
        {
          label: "完全不要任何规则。",
          correct: false,
          explanation: "规则和规律仍然重要。",
        },
      ],
    },
    rivalTitle: "3. AI 诗人能否超越人类？",
    rivalEyebrow: "优势与局限",
    rivalConceptTitle: "概念卡片",
    rivalConceptLines: [
      "人类大师的诗句独特而有灵魂。",
      "AI 写得快，但深度不稳定。",
      "AI 的新句子可以启发人类。",
    ],
    rivalParas: [
      "李白、温庭筠等诗人用独特意象表达情感，因此作品流传千古。",
      "AI 可以快速生成大量诗句，但很多缺少独特性。不过，有些新句子仍能给人启发。",
    ],
    rivalDemo: {
      title: "速度与深度",
      goal: "对比 AI 的速度与人类的艺术深度。",
      levels: [
        {
          key: "human",
          label: "人类大师",
          detail: "创作慢，但情感深、原创性强。",
        },
        {
          key: "ai",
          label: "AI 诗人",
          detail: "写得快，但深度参差不齐。",
        },
        {
          key: "mix",
          label: "合作模式",
          detail: "人类借助 AI 灵感，保持创作主导。",
        },
      ],
    },
    rivalSteps: ["滑动查看不同模式。", "说出 AI 诗歌的一优一弱。", "分享你会如何使用 AI。"],
    rivalCheckpoint: {
      prompt: "哪句话符合本课观点？",
      options: [
        {
          label: "AI 写得快，但还难以达到大师的原创深度。",
          correct: true,
          explanation: "课程强调速度与深度的差别。",
        },
        {
          label: "AI 已经超过所有人类诗人。",
          correct: false,
          explanation: "课程认为 AI 仍有局限。",
        },
        {
          label: "AI 诗歌永远不可能进步。",
          correct: false,
          explanation: "AI 诗歌已随着技术不断提升。",
        },
      ],
    },
    historyTitle: "历史角",
    historyEyebrow: "贾岛",
    historyCardTitle: "贾岛的故事",
    historyParas: [
      "贾岛（779-843）是唐代诗人，被称为“诗奴”。",
      "成语“推敲”来自他在诗句中反复斟酌一个字。",
      "他用“二句三年得，一吟双泪流”表达写诗的艰辛。",
    ],
    summaryTitle: "关键要点",
    summaryEyebrow: "课程小结",
    summaryPoints: [
      "格律诗有字数、押韵和平仄等严格规则。",
      "深度学习让 AI 诗歌更连贯。",
      "AI 速度快，但原创深度仍不稳定。",
      "AI 可作为灵感工具，需理性使用。",
    ],
  },
};
