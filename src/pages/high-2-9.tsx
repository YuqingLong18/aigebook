import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { NgramVsRNNDemo } from "../demos/NgramVsRNNDemo";
import { SelfAttentionDemo } from "../demos/SelfAttentionDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson2_9({ lang }: LessonProps) {
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
    { id: "lm", label: isZh ? "1. 语言模型基础" : "1. Language Models" },
    { id: "ngram", label: isZh ? "2. N-gram 模型" : "2. N-gram Models" },
    { id: "nnlm", label: isZh ? "3. 神经网络语言模型" : "3. Neural Language Models" },
    { id: "transformer", label: isZh ? "4. Transformer 与自注意力" : "4. Transformer & Self-Attention" },
    { id: "gpt", label: isZh ? "5. GPT 系列" : "5. GPT Series" },
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

        <SectionBlock id="lm" title={t.lmTitle} eyebrow={t.lmEyebrow}>
          <InfoCard title={t.lmCardTitle}>
            {t.lmParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.lmSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.lmCheckpoint.prompt}
            options={t.lmCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="ngram" title={t.ngramTitle} eyebrow={t.ngramEyebrow}>
          <InfoCard title={t.ngramCardTitle}>
            {t.ngramParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.ngramSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.ngramCheckpoint.prompt}
            options={t.ngramCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="nnlm" title={t.nnlmTitle} eyebrow={t.nnlmEyebrow}>
          <InfoCard title={t.nnlmCardTitle}>
            {t.nnlmParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <NgramVsRNNDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.nnlmSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.nnlmCheckpoint.prompt}
            options={t.nnlmCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="transformer" title={t.transTitle} eyebrow={t.transEyebrow}>
          <InfoCard title={t.transCardTitle}>
            {t.transParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <SelfAttentionDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.transSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.transCheckpoint.prompt}
            options={t.transCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="gpt" title={t.gptTitle} eyebrow={t.gptEyebrow}>
          <InfoCard title={t.gptTimelineTitle}>
            <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
              {t.gptPoints.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.gptSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.gptCheckpoint.prompt}
            options={t.gptCheckpoint.options}
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
      "Explain language model basics and breakthroughs in long-context modeling.",
      "Describe N-gram pros/limits and neural LM evolution (RNN, embeddings).",
      "Understand how RNN LMs overcome N-gram context limits.",
      "Clarify self-attention/Transformer for ultra-long sequences and semantic disambiguation.",
      "Outline GPT development and contributions to NLP/general tasks.",
    ],
    openingTitle: "Opening Idea",
    openingEyebrow: "Large models rise",
    openingText:
      "Large language models (LLMs) emerged by modeling ultra-long context to absorb humanity’s textual knowledge. This section traces principles from N-grams to Transformers and GPT.",
    lmTitle: "1. Language Model Basics",
    lmEyebrow: "Probabilities over words",
    lmCardTitle: "Next-word likelihood",
    lmParas: [
      "A language model gives P(next word | context). Probabilities reflect how likely a word follows prior words.",
      "Uses include auto-complete, spelling checks, machine translation, and text generation.",
    ],
    lmSteps: ["Express language as conditional probabilities.", "Estimate likelihoods from data or models.", "Generate text by sampling next words repeatedly."],
    lmCheckpoint: {
      prompt: "What does a language model estimate?",
      options: [
        {
          label: "The probability of the next word given a context.",
          correct: true,
          explanation: "LMs predict likely continuations.",
        },
        {
          label: "Exact grammar rules only.",
          correct: false,
          explanation: "LLMs learn probabilities, not hand-coded rules.",
        },
        {
          label: "Image pixel values.",
          correct: false,
          explanation: "Language models focus on word sequences.",
        },
      ],
    },
    ngramTitle: "2. N-gram Models",
    ngramEyebrow: "Statistical counts",
    ngramCardTitle: "Short-context tables",
    ngramParas: [
      "N-grams use frequency tables of the previous N−1 words to predict the next word; larger N improves fluency but needs more memory.",
      "Limitations: long-distance dependencies are lost and tables explode with large vocabularies.",
    ],
    ngramSteps: [
      "Count occurrences of word sequences.",
      "Normalize counts to probabilities.",
      "Sample next words using the table; note coherence gaps for long logic.",
    ],
    ngramCheckpoint: {
      prompt: "Main limitation of N-gram LMs?",
      options: [
        {
          label: "Cannot model long contexts without huge tables.",
          correct: true,
          explanation: "Context length is short and memory-heavy.",
        },
        {
          label: "They require images.",
          correct: false,
          explanation: "They operate on text counts.",
        },
        {
          label: "They forbid any probabilities.",
          correct: false,
          explanation: "They are probability tables by design.",
        },
      ],
    },
    nnlmTitle: "3. Neural Network Language Models",
    nnlmEyebrow: "RNNs and embeddings",
    nnlmCardTitle: "Continuous semantics + long context",
    nnlmParas: [
      "Bengio introduced neural LMs; Mikolov’s RNN LM accumulates semantics through recurrence, breaking N-gram context limits.",
      "Word embeddings map words to continuous vectors, capturing semantic distances; directions encode relations (king→queen like man→woman).",
    ],
    nnlmSteps: [
      "Embed words into vectors instead of one-hot codes.",
      "Use RNN to accumulate long-range context.",
      "Predict next word; distances in embedding space reflect meaning.",
    ],
    nnlmCheckpoint: {
      prompt: "How do RNN LMs overcome N-gram limits?",
      options: [
        {
          label: "Recurrent hidden states carry information across long sequences.",
          correct: true,
          explanation: "Context is no longer fixed-length tables.",
        },
        {
          label: "They remove vocabulary entirely.",
          correct: false,
          explanation: "They still operate on words via embeddings.",
        },
        {
          label: "They forbid using probabilities.",
          correct: false,
          explanation: "They are probabilistic predictors.",
        },
      ],
    },
    transTitle: "4. Transformer & Self-Attention",
    transEyebrow: "Ultra-long context",
    transCardTitle: "Semantic purification + long range",
    transParas: [
      "Self-attention computes relevance between every pair of tokens and aggregates values, clarifying meaning via context (semantic purification).",
      "Unlike RNNs, self-attention sees all positions at once, modeling ultra-long sequences; multi-head attention plus residuals form the Transformer.",
    ],
    transSteps: [
      "Create queries, keys, values for each token.",
      "Score relevance to reweight contextual information.",
      "Stack multi-head attention + feedforward + normalization for deep understanding.",
    ],
    transCheckpoint: {
      prompt: "Why does self-attention help long-context modeling?",
      options: [
        {
          label: "Each token can attend to all others regardless of distance.",
          correct: true,
          explanation: "No gradual forgetting like plain RNNs.",
        },
        {
          label: "It deletes earlier tokens.",
          correct: false,
          explanation: "It uses all tokens, not deletes them.",
        },
        {
          label: "It replaces probabilities with images.",
          correct: false,
          explanation: "It still models text probabilities.",
        },
      ],
    },
    gptTitle: "5. GPT Series",
    gptEyebrow: "LLM milestones",
    gptTimelineTitle: "From GPT to GPT-4/4o",
    gptPoints: [
      "2018: GPT (12-layer Transformer, 117M params, 512 tokens) shows fluent generation and pretraining value.",
      "2019–2020: GPT-2 (1.5B, 1024 tokens) and GPT-3 (175B, 2048 tokens) scale up with massive data.",
      "2022: ChatGPT (GPT-3.5) aligns with human feedback; can write code.",
      "2023–2024: GPT-4/4o expand parameters, context length, and add vision/audio; o1 focuses on deep reasoning.",
    ],
    gptSteps: [
      "Scale parameters, data, and context length per scaling law.",
      "Use pretraining on large corpora, then light fine-tuning.",
      "Leverage natural-language prompts for many downstream tasks.",
    ],
    gptCheckpoint: {
      prompt: "What key idea drove GPT’s success?",
      options: [
        {
          label: "Large-scale Transformer LMs predict next words over long context, absorbing broad knowledge.",
          correct: true,
          explanation: "Scaling + self-attention + data enable broad capabilities.",
        },
        {
          label: "Hand-written grammar rules only.",
          correct: false,
          explanation: "GPT learns from data, not manual rules.",
        },
        {
          label: "Removing natural language from training.",
          correct: false,
          explanation: "Training relies on massive text corpora.",
        },
      ],
    },
    summaryTitle: "Section Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "Language models assign next-word probabilities; N-grams are short-context and memory-heavy.",
      "Neural LMs with embeddings and RNNs capture long contexts and semantic space structure.",
      "Self-attention/Transformers model ultra-long sequences and disambiguate meaning.",
      "GPT scaled Transformers with huge data/context, enabling strong generative and understanding abilities.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解语言模型原理与长上下文突破。",
      "认识 N-gram 及神经语言模型（RNN、词向量）的演进。",
      "理解 RNN 语言模型如何突破 N-gram 上下文限制。",
      "掌握自注意力/Transformer 在超长序列与语义澄清中的作用。",
      "了解 GPT 发展历程及其在 NLP/通用任务中的贡献。",
    ],
    openingTitle: "开篇理解",
    openingEyebrow: "大模型崛起",
    openingText: "大语言模型通过超长上下文建模吸收人类文本知识。本节从 N-gram 到 Transformer、GPT 梳理原理。",
    lmTitle: "1. 语言模型基础",
    lmEyebrow: "词序概率",
    lmCardTitle: "下一个词的可能性",
    lmParas: [
      "语言模型给出 P(下一个词 | 上下文)，概率反映词语连贯度。",
      "应用包括联想输入、拼写检查、机器翻译、文本生成等。",
    ],
    lmSteps: ["把语言表示为条件概率。", "从数据或模型估计概率。", "反复采样下一个词生成文本。"],
    lmCheckpoint: {
      prompt: "语言模型估计什么？",
      options: [
        {
          label: "给定上下文时下一个词的概率。",
          correct: true,
          explanation: "LM 预测最可能的延续。",
        },
        {
          label: "仅仅手写语法规则。",
          correct: false,
          explanation: "LLM 学习概率而非手写规则。",
        },
        {
          label: "图片像素值。",
          correct: false,
          explanation: "语言模型关注词序列。",
        },
      ],
    },
    ngramTitle: "2. N-gram 模型",
    ngramEyebrow: "统计计数",
    ngramCardTitle: "短上下文表",
    ngramParas: [
      "N-gram 用前 N−1 个词的频次表预测下一词；N 越大越流畅，但内存消耗激增。",
      "局限：长距离依赖缺失，词表大时表格爆炸。",
    ],
    ngramSteps: ["统计词序出现频次。", "归一化为概率。", "用表采样下一词；长逻辑容易断裂。"],
    ngramCheckpoint: {
      prompt: "N-gram 主要局限是什么？",
      options: [
        {
          label: "无法在不爆表的情况下建模长上下文。",
          correct: true,
          explanation: "上下文短且内存需求大。",
        },
        {
          label: "必须依赖图像。",
          correct: false,
          explanation: "它只做文本计数。",
        },
        {
          label: "禁止使用概率。",
          correct: false,
          explanation: "它本身是概率表。",
        },
      ],
    },
    nnlmTitle: "3. 神经网络语言模型",
    nnlmEyebrow: "RNN 与词向量",
    nnlmCardTitle: "连续语义 + 长上下文",
    nnlmParas: [
      "Bengio 提出神经 LM；Mikolov 的 RNN LM 通过递归累积语义，突破 N-gram 上下文限制。",
      "词嵌入把词映射为连续向量，距离可度量；方向蕴含关系（king→queen 如 man→woman）。",
    ],
    nnlmSteps: ["用词向量代替 one-hot。", "用 RNN 累积长程上下文。", "预测下一词；向量空间距离反映语义。"],
    nnlmCheckpoint: {
      prompt: "RNN 语言模型如何突破 N-gram 局限？",
      options: [
        {
          label: "递归的隐藏状态携带长距离信息。",
          correct: true,
          explanation: "上下文不再固定长度表。",
        },
        {
          label: "删除词汇表。",
          correct: false,
          explanation: "仍用嵌入表示词汇。",
        },
        {
          label: "禁止概率。",
          correct: false,
          explanation: "仍然是概率预测。",
        },
      ],
    },
    transTitle: "4. Transformer 与自注意力",
    transEyebrow: "超长上下文",
    transCardTitle: "语义澄清 + 长程关联",
    transParas: [
      "自注意力计算任意两词相关性并加权聚合，借上下文澄清多义词语义（语义净化）。",
      "与 RNN 不同，自注意力一次看到所有位置，能建模超长序列；多头注意力+残差构成 Transformer。",
    ],
    transSteps: ["为每个词生成 query、key、value。", "相关性打分后重加权上下文。", "堆叠多头注意力+前馈+归一化提升理解。"],
    transCheckpoint: {
      prompt: "自注意力为何擅长长上下文？",
      options: [
        {
          label: "任意词都可关注所有其他词，距离不限。",
          correct: true,
          explanation: "无需像 RNN 那样逐步遗忘。",
        },
        {
          label: "会删除早期词。",
          correct: false,
          explanation: "它利用所有词的信息。",
        },
        {
          label: "用图像替代文本。",
          correct: false,
          explanation: "仍是文本概率建模。",
        },
      ],
    },
    gptTitle: "5. GPT 系列",
    gptEyebrow: "LLM 里程碑",
    gptTimelineTitle: "从 GPT 到 GPT-4/4o",
    gptPoints: [
      "2018：GPT（12 层 Transformer，1.17 亿参数，512 token）展现流畅生成与预训练价值。",
      "2019–2020：GPT-2（15 亿，1024 token）、GPT-3（1750 亿，2048 token）大幅扩展规模。",
      "2022：ChatGPT（GPT-3.5）结合对齐与代码能力。",
      "2023–2024：GPT-4/4o 扩大参数、上下文并加入视觉/音频；o1 突出深度推理。",
    ],
    gptSteps: ["按扩展定律放大参数、数据、上下文。", "用大规模预训练+小样本微调。", "用自然语言提示驱动多任务。"],
    gptCheckpoint: {
      prompt: "GPT 成功的核心思路是？",
      options: [
        {
          label: "基于大规模 Transformer 的长上下文预测，吸收大量知识。",
          correct: true,
          explanation: "扩展+自注意力+数据带来强能力。",
        },
        {
          label: "完全手写语法规则。",
          correct: false,
          explanation: "GPT 依赖数据学习，不是手工规则。",
        },
        {
          label: "不使用任何文本训练。",
          correct: false,
          explanation: "训练依赖海量文本。",
        },
      ],
    },
    summaryTitle: "本节小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "语言模型给出下一词概率；N-gram 上下文短且内存要求高。",
      "神经语言模型用嵌入与 RNN 捕捉长上下文和语义空间。",
      "自注意力/Transformer 同时关注全局，澄清语义并建模超长序列。",
      "GPT 扩展 Transformer 与数据/上下文，形成强大的生成与理解能力。",
    ],
  },
};
