import { useMemo } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { DiceMelodyDemo } from "../demos/DiceMelodyDemo";
import { StyleTransferDemo } from "../demos/StyleTransferDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson4_3({ lang }: LessonProps) {
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
    { id: "poem", label: t.poemTitle },
    { id: "music", label: t.musicTitle },
    { id: "painting", label: t.paintingTitle },
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

        <SectionBlock id="poem" title={t.poemTitle} eyebrow={t.poemEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.poemIntro}</p>
          <PoemEvolution lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.poemSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.poemCheckpoint.prompt}
            options={t.poemCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="music" title={t.musicTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.musicIntro}</p>
          <DiceMelodyDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.musicSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.musicCheckpoint.prompt}
            options={t.musicCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="painting" title={t.paintingTitle} eyebrow={t.paintingEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.paintingIntro}</p>
          <StyleTransferDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.paintingSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.paintingCheckpoint.prompt}
            options={t.paintingCheckpoint.options}
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

function PoemEvolution({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const stages = useMemo(
    () => [
      {
        label: isZh ? "机械拼接" : "Mechanical stitching",
        note: isZh ? "早期句子拼接，语义割裂、韵律差。" : "Early phrase stitching; poor meaning/metrics.",
      },
      {
        label: "SMT",
        note: isZh ? "统计机器翻译模型提升流畅度，但难懂含义。" : "Statistical MT improved fluency but shallow meaning.",
      },
      {
        label: isZh ? "深度语义向量" : "Neural semantic vectors",
        note: isZh ? "深度网络将意图映射到语义空间，再生成句子。" : "Deep nets map intent to semantic space then generate lines.",
      },
      {
        label: isZh ? "大语言模型" : "Large language models",
        note: isZh ? "海量经典作品训练，生成更自然、富意象的诗句。" : "Trained on classics; produce natural, imagery-rich verse.",
      },
    ],
    [isZh],
  );

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
        {isZh ? "诗歌生成演进" : "Poetry generation evolution"}
      </p>
      <div className="mt-3 grid gap-2 md:grid-cols-4">
        {stages.map((s) => (
          <div key={s.label} className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-sm text-slate-800">
            <p className="font-semibold text-slate-900">{s.label}</p>
            <p className="mt-1 text-xs text-slate-700">{s.note}</p>
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
      "了解 AI 在诗歌、音乐、绘画创作的技术发展与代表成果",
      "思考 AI 艺术创作带来的机会与挑战",
    ],
    introTitle: "导入",
    introEyebrow: "艺术与智能",
    intro: "AI 不止能算数和分析数据，也能作诗、写曲、绘画，正改变艺术的创作流程与灵感来源。",
    introCardTitle: "核心提示",
    introCard: "算法优化 + 数据丰富让 AI 更懂情感与美感，但也带来原创性与滥用的讨论。",
    poemTitle: "1. AI 诗人：文字里的情感",
    poemEyebrow: "诗歌生成演变",
    poemIntro:
      "从早期机械拼接，到统计模型，再到深度语义表示和大语言模型，机器逐步学会把意图转为流畅、有意境的诗句。",
    poemSteps: [
      "对比机械拼接、SMT、深度语义与大模型的差异。",
      "观察生成诗的流畅性与意象提升。",
      "思考大模型带来的质量跃升与不足。",
    ],
    poemCheckpoint: {
      prompt: "深度与大模型让诗歌生成提升的关键是？",
      options: [
        { label: "理解语义意图并建模长文本依赖", correct: true, explanation: "深度语义+长上下文让句子更贴合意图与韵律。" },
        { label: "完全不需要训练数据", correct: false, explanation: "恰恰依赖大规模语料。" },
        { label: "只需随机拼接句子", correct: false, explanation: "随机拼接无法保证意境与韵律。" },
        { label: "把诗行缩短为一个字", correct: false, explanation: "长度不是核心，语义与结构才是关键。" },
      ],
    },
    musicTitle: "2. AI 作曲：旋律里的惊喜",
    musicIntro:
      "从 1956 年 ILLIAC I 的 Illiac Suite 到基于 Transformer 的 MusicLM、Suno，深度网络可学习音符时序与结构，生成完整曲式。",
    musicSteps: [
      "体验从骰子/Markov 到 LSTM/Transformer 的旋律差异。",
      "注意长序列建模如何带来结构与动机的连贯。",
      "联想到音乐生成从片段到完整曲式的跨越。",
    ],
    musicCheckpoint: {
      prompt: "相比早期方法，深度模型作曲的优势主要在？",
      options: [
        { label: "能建模更长的时序与结构", correct: true, explanation: "长序列建模捕获动机、和声、段落关系。" },
        { label: "完全不需要乐谱数据", correct: false, explanation: "需要大量音频/乐谱训练。" },
        { label: "只能生成 2 秒音频", correct: false, explanation: "反而能生成完整段落。" },
        { label: "必须靠人工逐音符输入", correct: false, explanation: "模型可自动生成旋律与伴奏。" },
      ],
    },
    paintingTitle: "3. AI 绘画：用风格描绘世界",
    paintingEyebrow: "风格与内容分离",
    paintingIntro:
      "卷积网络能分离内容与风格向量，实现“以猫为内容、梵高为风格”的新画作；扩散与大模型也可用文本生成富有艺术感的图像。",
    paintingSteps: [
      "理解内容向量决定“画什么”，风格向量决定“怎么画”。",
      "观察风格迁移如何把名画风格应用到新内容。",
      "思考文本生成图像如何激发创意同时带来版权与伦理挑战。",
    ],
    paintingCheckpoint: {
      prompt: "风格迁移的核心思路是？",
      options: [
        { label: "分离内容与风格特征再重组生成", correct: true, explanation: "提取内容/风格向量并融合生成新图像。" },
        { label: "随机打乱像素", correct: false, explanation: "随机像素无法保留内容或风格。" },
        { label: "只使用一张图片", correct: false, explanation: "需内容图与风格图共同决定输出。" },
        { label: "让画面全变成文字", correct: false, explanation: "目标是画面保留内容并呈现风格。" },
      ],
    },
    summaryTitle: "4. 小结",
    summaryPoints: [
      "AI 已能在诗、曲、画中生成有意境的作品，成为艺术家的新工具。",
      "深度模型与大模型让生成更流畅、更有结构与风格感。",
      "需关注原创性、版权与滥用风险，制定规范以确保与人类审美价值对齐。",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand AI’s tech path and achievements in poetry, music, and painting",
      "Consider opportunities and challenges AI brings to art creation",
    ],
    introTitle: "Overview",
    introEyebrow: "Art meets AI",
    intro: "AI now writes poems, composes music, and paints—reshaping creative workflows and inspiration sources.",
    introCardTitle: "Key note",
    introCard: "Better algorithms + data deepen AI’s sense of emotion/aesthetics, but originality and misuse remain open questions.",
    poemTitle: "1. AI Poets: Emotion in Words",
    poemEyebrow: "Generation evolution",
    poemIntro:
      "From mechanical stitching to statistical models, to deep semantic vectors and large language models, machines increasingly map intent into fluent, imagery-rich verse.",
    poemSteps: [
      "Compare stitching, SMT, deep semantics, and LLMs.",
      "Notice gains in fluency and imagery.",
      "Reflect on LLM quality leaps and remaining flaws.",
    ],
    poemCheckpoint: {
      prompt: "Why did deep/LLM methods boost poem quality?",
      options: [
        { label: "They model intent and long text dependencies", correct: true, explanation: "Semantic vectors + long context better match meaning and rhythm." },
        { label: "They need zero training data", correct: false, explanation: "They rely on large corpora." },
        { label: "They just shuffle random lines", correct: false, explanation: "Random lines won’t ensure meaning or meter." },
        { label: "They shorten lines to one character", correct: false, explanation: "Length isn’t the key; semantics/structure are." },
      ],
    },
    musicTitle: "2. AI Composer: Melodic Breakthroughs",
    musicIntro:
      "From the 1956 Illiac Suite to Transformer-based MusicLM and Suno, deep models learn note timing and structure to create full sections.",
    musicSteps: [
      "Experience dice/Markov vs. LSTM/Transformer melodies.",
      "See how long-context modeling adds structure and motifs.",
      "Connect music generation’s shift from snippets to full songs.",
    ],
    musicCheckpoint: {
      prompt: "Key advantage of deep models over early methods?",
      options: [
        { label: "They capture longer timing and structure", correct: true, explanation: "Long sequences encode motifs, harmony, and form." },
        { label: "They require no music data", correct: false, explanation: "They need lots of audio/score data." },
        { label: "They only make 2-second clips", correct: false, explanation: "They can generate full sections." },
        { label: "Humans must input every note", correct: false, explanation: "Models can generate melodies and accompaniments." },
      ],
    },
    paintingTitle: "3. AI Painting: Style on Canvas",
    paintingEyebrow: "Content vs. style",
    paintingIntro:
      "CNNs separate content and style vectors—e.g., cat content + Van Gogh style. Diffusion and large vision models can also craft artistic images from text prompts.",
    paintingSteps: [
      "Content vectors decide “what,” style vectors decide “how.”",
      "See style transfer apply famous styles to new content.",
      "Consider text-to-image creativity alongside copyright/ethics concerns.",
    ],
    paintingCheckpoint: {
      prompt: "Core idea of style transfer?",
      options: [
        { label: "Separate and recombine content/style features", correct: true, explanation: "Extract content/style vectors and fuse to generate." },
        { label: "Randomly scramble pixels", correct: false, explanation: "Random pixels lose both content and style." },
        { label: "Use only one image", correct: false, explanation: "Needs both content and style sources." },
        { label: "Turn the image into text", correct: false, explanation: "Goal is an image with preserved content and chosen style." },
      ],
    },
    summaryTitle: "4. Summary",
    summaryPoints: [
      "AI can produce evocative poems, music, and paintings—becoming a creative aid.",
      "Deep/large models improve fluency, structure, and stylistic control.",
      "Originality, copyright, and misuse require guardrails to align with human aesthetics and values.",
    ],
  },
};
