import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { InfoCocoonRiskDemo } from "../demos/InfoCocoonRiskDemo";
import { RecoSimilarityDemo } from "../demos/RecoSimilarityDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson3_10({ lang }: LessonProps) {
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
    { id: "what", label: isZh ? "1. 什么是推荐算法" : "1. What is a Recommendation Algorithm" },
    { id: "idea", label: isZh ? "2. 相似性核心思路" : "2. Similarity Core Idea" },
    { id: "nn", label: isZh ? "3. 神经网络推荐" : "3. Neural Network Recommendations" },
    { id: "risk", label: isZh ? "4. 社会争议" : "4. Social Controversies" },
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

        <SectionBlock id="idea" title={t.ideaTitle} eyebrow={t.ideaEyebrow}>
          <InfoCard title={t.ideaCardTitle}>
            {t.ideaParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <RecoSimilarityDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.ideaSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.ideaCheckpoint.prompt}
            options={t.ideaCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="nn" title={t.nnTitle} eyebrow={t.nnEyebrow}>
          <InfoCard title={t.nnCardTitle}>
            {t.nnParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.nnSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.nnCheckpoint.prompt}
            options={t.nnCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="risk" title={t.riskTitle} eyebrow={t.riskEyebrow}>
          <InfoCard title={t.riskCardTitle}>
            {t.riskParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <InfoCocoonRiskDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.riskSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.riskCheckpoint.prompt}
            options={t.riskCheckpoint.options}
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
      "Define recommendation algorithms and contrast with search.",
      "Explain similarity-based recommendations and collaborative filtering logic.",
      "Describe neural recommenders and embeddings for users/items.",
      "Discuss social issues: info cocoons, privacy, price discrimination.",
      "View recommendations as opportunities + responsibilities.",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "Pushing info to you",
    introText:
      "Recommendations proactively surface content by learning user/item similarity. Neural models improve personalization but raise privacy and fairness concerns.",
    whatTitle: "1. What is a Recommendation Algorithm?",
    whatEyebrow: "Push vs. pull",
    whatCardTitle: "Beyond search",
    whatParas: [
      "Search requires explicit query; recommendations infer intent from behavior (browsing, likes, purchases).",
      "Used in e-commerce, video, news, social feeds.",
    ],
    whatSteps: [
      "Distinguish passive search vs. active recommendation.",
      "List common application scenarios.",
    ],
    whatCheckpoint: {
      prompt: "Recommendation differs from search because…",
      options: [
        { label: "It pushes content based on inferred interests, not explicit queries.", correct: true, explanation: "Inference vs. explicit request." },
        { label: "It ignores user behavior.", correct: false, explanation: "It depends on behavior signals." },
      ],
    },
    ideaTitle: "2. Similarity Core Idea",
    ideaEyebrow: "Users/items",
    ideaCardTitle: "Collaborative filtering intuition",
    ideaParas: [
      "Recommend similar items to the same user; recommend the same item to similar users.",
      "Similarity from attributes or behavior co-occurrence (collaborative filtering).",
    ],
    ideaSteps: [
      "Explain user-user and item-item similarity.",
      "Give examples (also-bought, same-age-group).",
      "Note co-occurrence as evidence of similarity.",
    ],
    ideaCheckpoint: {
      prompt: "Collaborative filtering uses…",
      options: [
        { label: "Behavior co-occurrence to infer similarity.", correct: true, explanation: "Shared behavior signals similar taste." },
        { label: "Manual labels for every item.", correct: false, explanation: "It leverages behavior, not only manual labels." },
      ],
    },
    nnTitle: "3. Neural Network Recommendations",
    nnEyebrow: "Embeddings",
    nnCardTitle: "Object embeddings",
    nnParas: [
      "Neural models map users/items into vectors; distance reflects similarity.",
      "Embeddings capture latent relations and improve personalization.",
      "User vectors from aggregated item vectors enable clustering/targeting.",
    ],
    nnSteps: [
      "Define embeddings for users/items.",
      "Explain how similarity is computed in vector space.",
      "Describe user vector aggregation and clustering.",
    ],
    nnCheckpoint: {
      prompt: "Embedding-based recommenders work by…",
      options: [
        { label: "Placing similar users/items close in vector space.", correct: true, explanation: "Distance encodes similarity." },
        { label: "Assigning random scores with no training.", correct: false, explanation: "They are trained on interaction data." },
      ],
    },
    riskTitle: "4. Social Controversies",
    riskEyebrow: "Ethics",
    riskCardTitle: "Privacy, bias, cocoons",
    riskParas: [
      "Privacy: pervasive tracking across platforms.",
      "Price discrimination: loyal users charged more; group-based differential pushes.",
      "Information cocoons: over-personalization narrows viewpoints.",
    ],
    riskSteps: [
      "Identify main risks.",
      "Explain info cocoon mechanism.",
      "Suggest mitigations (diversity, transparency, user control).",
    ],
    riskCheckpoint: {
      prompt: "Which increases cocoon risk?",
      options: [
        { label: "Very high personalization with little diversity.", correct: true, explanation: "Narrow feeds reinforce one view." },
        { label: "Deliberate diversity injection.", correct: false, explanation: "Diversity reduces cocoon effects." },
      ],
    },
    summaryTitle: "Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "Recommendation = similarity-driven push; neural embeddings enhance it.",
      "Benefits: relevance and efficiency; Risks: privacy, discrimination, cocoons.",
      "Responsible design needs transparency, diversity, and user control.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "定义推荐算法，区分与搜索的差异。",
      "解释相似性与协同过滤的核心逻辑。",
      "理解神经网络推荐与嵌入向量的原理。",
      "讨论隐私、价格歧视、信息茧房等社会问题。",
      "认识机会与责任并存。",
    ],
    introTitle: "开篇理解",
    introEyebrow: "把信息“推”给你",
    introText:
      "推荐通过学习用户/物品相似性主动推送内容。神经模型提升个性化，也带来隐私与公平性挑战。",
    whatTitle: "1. 什么是推荐算法",
    whatEyebrow: "推送 vs. 搜索",
    whatCardTitle: "搜索之外的入口",
    whatParas: ["搜索需明确查询；推荐基于行为推测兴趣。", "广泛用于电商、视频、新闻、社交。"],
    whatSteps: ["区分主动搜索与被动推荐。", "列举应用场景。"],
    whatCheckpoint: {
      prompt: "推荐区别于搜索在于：",
      options: [
        { label: "基于行为推送内容，不必用户先提需求。", correct: true, explanation: "推送而非仅响应查询。" },
        { label: "完全不看用户行为。", correct: false, explanation: "恰恰依赖行为信号。" },
      ],
    },
    ideaTitle: "2. 相似性核心思路",
    ideaEyebrow: "用户/物品",
    ideaCardTitle: "协同过滤直觉",
    ideaParas: [
      "给同一用户推荐相似物品；给相似用户推荐同一物品。",
      "相似性可来自属性，也可来自行为共现（协同过滤）。",
    ],
    ideaSteps: ["解释用户-用户、物品-物品相似。", "举例“同时购买/观看”推断相似。", "说明共现是相似性的证据。"],
    ideaCheckpoint: {
      prompt: "协同过滤利用的是：",
      options: [
        { label: "行为共现推断相似。", correct: true, explanation: "共享行为意味着偏好相近。" },
        { label: "每个物品的纯手工标签。", correct: false, explanation: "核心是行为数据。" },
      ],
    },
    nnTitle: "3. 神经网络推荐",
    nnEyebrow: "嵌入向量",
    nnCardTitle: "对象嵌入",
    nnParas: [
      "神经模型把用户/物品映射到向量空间，距离代表相似度。",
      "嵌入刻画潜在关联，提升个性化。",
      "用户向量可由交互物品向量聚合，再做相似度/聚类。",
    ],
    nnSteps: ["定义用户/物品嵌入。", "说明向量空间相似度。", "描述用户向量聚合与分群。"],
    nnCheckpoint: {
      prompt: "嵌入式推荐的核心是：",
      options: [
        { label: "把相似用户/物品放在近距离。", correct: true, explanation: "距离编码相似。" },
        { label: "完全随机打分。", correct: false, explanation: "需用交互数据训练。" },
      ],
    },
    riskTitle: "4. 社会争议",
    riskEyebrow: "伦理",
    riskCardTitle: "隐私、偏见、茧房",
    riskParas: [
      "隐私：跨平台行为跟踪令人担忧。",
      "价格歧视：忠实用户被收更高价，或按群体差异推送。",
      "信息茧房：过度个性化导致视野狭窄、回音室。",
    ],
    riskSteps: ["列举主要风险。", "说明茧房形成机制。", "提出多样性、透明度、用户控制的缓解措施。"],
    riskCheckpoint: {
      prompt: "下列哪项会加剧信息茧房？",
      options: [
        { label: "极高的个性化、缺少多样性。", correct: true, explanation: "过度定制导致视野收窄。" },
        { label: "刻意引入多样化信息。", correct: false, explanation: "多样性有助缓解茧房。" },
      ],
    },
    summaryTitle: "本节小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "推荐=相似驱动的推送；神经嵌入强化效果。",
      "收益：相关性高、体验好；风险：隐私、歧视、茧房。",
      "需透明、多样性、用户控制来负责任地使用推荐技术。",
    ],
  },
};
