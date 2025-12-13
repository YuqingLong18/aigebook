import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { InvertedIndexDemo } from "../demos/InvertedIndexDemo";
import { PageRankDemo } from "../demos/PageRankDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson3_9({ lang }: LessonProps) {
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
    { id: "what", label: isZh ? "1. 搜索引擎是什么" : "1. What is a Search Engine" },
    { id: "index", label: isZh ? "2. 定位网页：倒排索引" : "2. Locating Pages: Inverted Index" },
    { id: "rank", label: isZh ? "3. 网页重要性评估" : "3. Ranking Importance" },
    { id: "pagerank", label: isZh ? "4. PageRank" : "4. PageRank" },
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

        <SectionBlock id="index" title={t.indexTitle} eyebrow={t.indexEyebrow}>
          <InfoCard title={t.indexCardTitle}>
            {t.indexParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <InvertedIndexDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.indexSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.indexCheckpoint.prompt}
            options={t.indexCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="rank" title={t.rankTitle} eyebrow={t.rankEyebrow}>
          <InfoCard title={t.rankCardTitle}>
            {t.rankParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.rankSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.rankCheckpoint.prompt}
            options={t.rankCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="pagerank" title={t.pagerankTitle} eyebrow={t.pagerankEyebrow}>
          <InfoCard title={t.pagerankCardTitle}>
            {t.pagerankParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <PageRankDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.pagerankSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.pagerankCheckpoint.prompt}
            options={t.pagerankCheckpoint.options}
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
      "Explain search engines’ role in internet information retrieval.",
      "Describe inverted index for fast keyword → document mapping.",
      "List page-attribute and link-based signals for ranking.",
      "Understand PageRank iterative computation and circular dependency resolution.",
      "Recognize modern search integrates many AI techniques.",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "Finding needles in haystacks",
    introText:
      "Search engines solve two problems: locate matching documents fast (inverted index) and rank them by importance (signals like PageRank).",
    whatTitle: "1. What is a Search Engine?",
    whatEyebrow: "From Archie to Google",
    whatCardTitle: "History & purpose",
    whatParas: [
      "Early Archie/FTP search → Web + Mosaic → Google/Baidu rise.",
      "Handles massive growth of internet data (billions of users, hundreds of EB/day).",
    ],
    whatSteps: [
      "Trace key milestones from Archie to modern engines.",
      "Note explosion of web content and need for search.",
    ],
    whatCheckpoint: {
      prompt: "A core search task is…",
      options: [
        { label: "Finding relevant pages and ranking them by importance.", correct: true, explanation: "Search = retrieval + ranking." },
        { label: "Storing only one copy of the web.", correct: false, explanation: "Search must index many pages, not just one." },
      ],
    },
    indexTitle: "2. Locating Pages: Inverted Index",
    indexEyebrow: "Keyword → docs",
    indexCardTitle: "Reverse mapping",
    indexParas: [
      "Inverted index maps each keyword to the list of documents containing it.",
      "Query terms’ posting lists are intersected to find matches.",
      "Precomputed offline to answer queries quickly online.",
    ],
    indexSteps: [
      "Define keywords, posting lists, intersection.",
      "Explain why precomputation speeds queries.",
      "Relate to student-club analogy (mapping members).",
    ],
    indexCheckpoint: {
      prompt: "Inverted index stores…",
      options: [
        { label: "Document lists for each keyword.", correct: true, explanation: "Reverse map from term to docs." },
        { label: "Only the page titles.", correct: false, explanation: "It stores postings of term occurrences." },
      ],
    },
    rankTitle: "3. Evaluating Importance",
    rankEyebrow: "Signals",
    rankCardTitle: "Attributes + links",
    rankParas: [
      "On-page signals: term in title, bold, first paragraph.",
      "Link signals: inbound links act like citations; more/stronger links imply authority.",
    ],
    rankSteps: [
      "List on-page relevance signals.",
      "Explain link-based importance intuition (citations).",
    ],
    rankCheckpoint: {
      prompt: "Links help ranking because…",
      options: [
        { label: "Being linked by important pages implies authority.", correct: true, explanation: "Links pass importance." },
        { label: "Links eliminate the need for keywords.", correct: false, explanation: "Relevance still matters." },
      ],
    },
    pagerankTitle: "4. PageRank",
    pagerankEyebrow: "Iterative link voting",
    pagerankCardTitle: "Probability of random surfer",
    pagerankParas: [
      "Assigns each page a probability a random surfer visits it; more important pages have higher rank.",
      "Iterative updates propagate importance through links, resolving circular dependency.",
    ],
    pagerankSteps: [
      "Define random surfer probability.",
      "Explain iterative update until convergence.",
      "Relate link from high-rank page as higher vote weight.",
    ],
    pagerankCheckpoint: {
      prompt: "PageRank resolves circular dependency by…",
      options: [
        { label: "Iteratively updating ranks until they stabilize.", correct: true, explanation: "Repeats updates to convergence." },
        { label: "Ignoring all incoming links.", correct: false, explanation: "Links are central to PageRank." },
      ],
    },
    summaryTitle: "Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "Search engines need fast retrieval (inverted index) and good ranking (signals like PageRank).",
      "PageRank iterates link votes to estimate importance.",
      "Modern engines extend with spellcheck, intent, images, voice, knowledge graphs, LLM answers.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解搜索引擎的概念与在互联网信息检索中的作用。",
      "掌握倒排索引的原理，理解关键词快速定位文档。",
      "理解页面重要性评估的信号：页面属性与链接关系。",
      "掌握 PageRank 的核心思想与迭代计算，理解如何解决循环依赖。",
      "认识现代搜索融合多种 AI 技术。",
    ],
    introTitle: "开篇理解",
    introEyebrow: "信息海洋里的罗盘",
    introText: "搜索需要先找得到，再排得好。倒排索引负责定位，PageRank 等负责排序。",
    whatTitle: "1. 搜索引擎是什么",
    whatEyebrow: "从 Archie 到 Google",
    whatCardTitle: "历史与使命",
    whatParas: ["Archie/FTP → Web 与 Mosaic → Google/Baidu 崛起。", "用户与数据爆炸，需要高效检索与排名。"],
    whatSteps: ["梳理关键里程碑。", "指出数据增长带来的检索需求。"],
    whatCheckpoint: {
      prompt: "搜索引擎的核心任务之一是：",
      options: [
        { label: "找到相关页面并按重要性排序。", correct: true, explanation: "检索+排名是核心。" },
        { label: "只存一份网页副本。", correct: false, explanation: "需要索引大量页面。" },
      ],
    },
    indexTitle: "2. 定位网页：倒排索引",
    indexEyebrow: "关键词→文档",
    indexCardTitle: "反向映射",
    indexParas: [
      "倒排索引为每个关键词记录包含它的文档列表。",
      "查询时取多个关键词的列表求交集得到命中集合。",
      "索引离线预计算，在线快速响应。",
    ],
    indexSteps: ["定义关键词、倒排列表、交集。", "解释预计算带来的加速。", "用学生-社团类比说明。"],
    indexCheckpoint: {
      prompt: "倒排索引存储的是：",
      options: [
        { label: "关键词对应的文档列表。", correct: true, explanation: "从词到文档的反向表。" },
        { label: "仅页面标题。", correct: false, explanation: "存储词项出现的文档列表。" },
      ],
    },
    rankTitle: "3. 网页重要性评估",
    rankEyebrow: "信号",
    rankCardTitle: "属性 + 链接",
    rankParas: ["页内信号：标题、加粗、段首出现。", "链接信号：被重要页面引用等同学术“被引”。"],
    rankSteps: ["列出页内相关性信号。", "说明链接投票的直觉。"],
    rankCheckpoint: {
      prompt: "链接有助于排名的原因是：",
      options: [
        { label: "被重要页面链接说明更权威。", correct: true, explanation: "重要性可传递。" },
        { label: "有链接就不需关键词了。", correct: false, explanation: "相关性仍需关键词。", },
      ],
    },
    pagerankTitle: "4. PageRank",
    pagerankEyebrow: "迭代链接投票",
    pagerankCardTitle: "随机游走概率",
    pagerankParas: [
      "将网页重要性视为随机游走访问概率，越高越重要。",
      "通过迭代传播链接权重，直至收敛，解决循环依赖。",
    ],
    pagerankSteps: ["定义随机游走概率。", "解释迭代直至收敛。", "说明高权重页面的链接权重更大。"],
    pagerankCheckpoint: {
      prompt: "PageRank 解决循环依赖的方法是：",
      options: [
        { label: "迭代更新直到稳定。", correct: true, explanation: "重复传播直至收敛。" },
        { label: "忽略所有入链。", correct: false, explanation: "入链是核心信号。" },
      ],
    },
    summaryTitle: "本节小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "搜索=定位+排序：倒排索引加速匹配，PageRank 等评估重要性。",
      "PageRank 通过迭代链接投票得到稳定排名。",
      "现代搜索融合纠错、意图、图像/语音、知识图谱、LLM 直接回答等技术。",
    ],
  },
};
