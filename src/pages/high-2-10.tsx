import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { MultimodalFusionDemo } from "../demos/MultimodalFusionDemo";
import { PromptCOTDemo } from "../demos/PromptCOTDemo";
import { RAGDemo } from "../demos/RAGDemo";
import { ScalingLawDemo } from "../demos/ScalingLawDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson2_10({ lang }: LessonProps) {
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
    { id: "prompts", label: isZh ? "1. 通用智能与提示" : "1. Generality & Prompts" },
    { id: "fewshot", label: isZh ? "2. 少样本与 CoT" : "2. Few-shot & CoT" },
    { id: "scaling", label: isZh ? "3. 扩展定律" : "3. Scaling Laws" },
    { id: "rag", label: isZh ? "4. 检索增强生成" : "4. Retrieval-Augmented Generation" },
    { id: "multimodal", label: isZh ? "5. 多模态与“手脚”" : "5. Multimodality & Tools" },
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

        <SectionBlock id="prompts" title={t.promptsTitle} eyebrow={t.promptsEyebrow}>
          <InfoCard title={t.promptsCardTitle}>
            {t.promptsParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.promptsSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.promptsCheckpoint.prompt}
            options={t.promptsCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="fewshot" title={t.fewshotTitle} eyebrow={t.fewshotEyebrow}>
          <InfoCard title={t.fewshotCardTitle}>
            {t.fewshotParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <PromptCOTDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.fewshotSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.fewshotCheckpoint.prompt}
            options={t.fewshotCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="scaling" title={t.scalingTitle} eyebrow={t.scalingEyebrow}>
          <InfoCard title={t.scalingCardTitle}>
            {t.scalingParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <ScalingLawDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.scalingSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.scalingCheckpoint.prompt}
            options={t.scalingCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="rag" title={t.ragTitle} eyebrow={t.ragEyebrow}>
          <InfoCard title={t.ragCardTitle}>
            {t.ragParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <RAGDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.ragSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.ragCheckpoint.prompt}
            options={t.ragCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="multimodal" title={t.multiTitle} eyebrow={t.multiEyebrow}>
          <InfoCard title={t.multiCardTitle}>
            {t.multiParas.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </InfoCard>
          <MultimodalFusionDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.multiSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.multiCheckpoint.prompt}
            options={t.multiCheckpoint.options}
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
      "Understand LLM generality via prompts and reduced task-specific models.",
      "Grasp few-shot and Chain-of-Thought reasoning enhancements.",
      "Analyze scaling laws linking size, data, compute to performance.",
      "Explain RAG for reducing hallucination and updating knowledge.",
      "Describe multimodal large models and tool/actuator integration.",
    ],
    openingTitle: "Opening Idea",
    openingEyebrow: "LLM tech stack",
    openingText:
      "Post-2018, LLMs evolved with prompt-based generality, few-shot/CoT reasoning, scaling laws, retrieval augmentation, and multimodal extensions—pushing toward general intelligence.",
    promptsTitle: "1. Generality with Prompts",
    promptsEyebrow: "Generative AI",
    promptsCardTitle: "Prompt-defined tasks",
    promptsParas: [
      "LLMs accept natural-language prompts to do translation, sentiment, reasoning without separate models, showing general intelligence.",
      "Outputting solutions in natural language is a universal interface; prompts replace many task-specific architectures.",
    ],
    promptsSteps: [
      "Describe the task in a prompt instead of training a new model.",
      "Let the model generate step-by-step answers.",
      "View prompts as a flexible API for general problem solving.",
    ],
    promptsCheckpoint: {
      prompt: "Why do prompts signal LLM generality?",
      options: [
        {
          label: "One model can follow different task descriptions without retraining specialized architectures.",
          correct: true,
          explanation: "Prompting reduces task-specific model needs.",
        },
        {
          label: "Prompts remove language understanding.",
          correct: false,
          explanation: "They rely on strong language understanding.",
        },
        {
          label: "Prompts disable generation.",
          correct: false,
          explanation: "Prompts drive generation.",
        },
      ],
    },
    fewshotTitle: "2. Few-shot & Chain-of-Thought",
    fewshotEyebrow: "Reasoning boosts",
    fewshotCardTitle: "Examples and stepwise reasoning",
    fewshotParas: [
      "Few-shot: give examples to teach implicit patterns when text descriptions are hard.",
      "CoT: show reasoning steps so the model analogizes and solves complex problems more reliably.",
    ],
    fewshotSteps: [
      "Provide 1–few examples to frame the task.",
      "Ask the model to reason step by step (CoT).",
      "Compare direct answers vs. guided reasoning.",
    ],
    fewshotCheckpoint: {
      prompt: "How does Chain-of-Thought improve answers?",
      options: [
        {
          label: "By encouraging explicit intermediate reasoning before giving the final answer.",
          correct: true,
          explanation: "Structured steps reduce errors on complex tasks.",
        },
        {
          label: "By hiding the reasoning process.",
          correct: false,
          explanation: "CoT exposes the reasoning chain.",
        },
        {
          label: "By removing examples.",
          correct: false,
          explanation: "CoT can pair with examples.",
        },
      ],
    },
    scalingTitle: "3. Scaling Laws",
    scalingEyebrow: "Size–data–compute",
    scalingCardTitle: "Performance vs. resources",
    scalingParas: [
      "Performance grows predictably with model size, data, and compute; resource competition drives larger models.",
      "Challenges: data exhaustion, high energy/compute cost.",
    ],
    scalingSteps: [
      "Increase parameters, data, compute together for gains.",
      "Monitor diminishing returns and resource pressure.",
      "Plan scaling budgets vs. benefit.",
    ],
    scalingCheckpoint: {
      prompt: "What do scaling laws imply?",
      options: [
        {
          label: "Bigger models with more data/compute tend to perform better—at higher resource cost.",
          correct: true,
          explanation: "Performance and cost both scale.",
        },
        {
          label: "Performance is unrelated to scale.",
          correct: false,
          explanation: "Empirically, scale matters.",
        },
        {
          label: "Scaling removes the need for training data.",
          correct: false,
          explanation: "Data remains essential.",
        },
      ],
    },
    ragTitle: "4. Retrieval-Augmented Generation",
    ragEyebrow: "Reduce hallucination",
    ragCardTitle: "External knowledge + generation",
    ragParas: [
      "RAG retrieves relevant documents and conditions generation to cut hallucinations, update knowledge, and reduce memory burden.",
      "It helps keep outputs current without retraining giant models frequently.",
    ],
    ragSteps: [
      "Retrieve fresh/contextual documents.",
      "Feed them with the prompt to guide generation.",
      "Compare answers with and without retrieval.",
    ],
    ragCheckpoint: {
      prompt: "What problem does RAG address?",
      options: [
        {
          label: "Hallucination and stale knowledge by grounding answers in retrieved sources.",
          correct: true,
          explanation: "Retrieval provides factual context.",
        },
        {
          label: "Faster GPU clock speeds.",
          correct: false,
          explanation: "Hardware speed is separate.",
        },
        {
          label: "Eliminating prompts.",
          correct: false,
          explanation: "RAG still uses prompts plus retrieval.",
        },
      ],
    },
    multiTitle: "5. Multimodality & Tools",
    multiEyebrow: "Eyes, ears, hands",
    multiCardTitle: "Beyond text",
    multiParas: [
      "Multimodal LLMs fuse text, image, audio, video—mapping them to a shared conceptual space (e.g., a cow in words, sight, and sound).",
      "Tool/actuator use (“hands and feet”) lets LLMs execute code or control devices (e.g., drones), extending impact to the physical world.",
    ],
    multiSteps: [
      "Add perception modalities (vision/audio/video).",
      "Use generated code/API calls to act on tools or robots.",
      "Evaluate new applications unlocked by each modality.",
    ],
    multiCheckpoint: {
      prompt: "Why add multimodal inputs or tools to LLMs?",
      options: [
        {
          label: "To perceive and act beyond text, enabling richer tasks and real-world impact.",
          correct: true,
          explanation: "Modalities + tools broaden capabilities.",
        },
        {
          label: "To remove language ability.",
          correct: false,
          explanation: "They build on language ability.",
        },
        {
          label: "To guarantee zero energy use.",
          correct: false,
          explanation: "Modalities and tools still need compute.",
        },
      ],
    },
    summaryTitle: "Section Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "Prompts give one model generality; generation is the interface.",
      "Few-shot + CoT guide LLMs to better reasoning.",
      "Scaling laws link performance to size/data/compute but raise resource concerns.",
      "RAG grounds outputs with retrieved knowledge to curb hallucination and stay current.",
      "Multimodal inputs and tool use extend LLMs toward AGI-like perception and action.",
    ],
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解提示带来的通用智能，减少专用模型依赖。",
      "掌握少样本与 Chain-of-Thought 提升复杂推理。",
      "分析扩展定律中规模、数据、算力与性能的关系。",
      "阐释 RAG 如何降低幻觉、更新知识。",
      "理解多模态大模型与“手脚”工具整合的潜力。",
    ],
    openingTitle: "开篇理解",
    openingEyebrow: "LLM 技术迭代",
    openingText: "GPT 之后，大模型技术快速演进：提示通用化、少样本/CoT 推理、扩展定律、RAG、跨模态与工具控制，推动通用智能。",
    promptsTitle: "1. 通用智能与提示",
    promptsEyebrow: "生成式 AI",
    promptsCardTitle: "用提示定义任务",
    promptsParas: [
      "LLM 接受自然语言提示即可完成翻译、情感、推理等，无需单独模型，体现通用性。",
      "用自然语言输出过程与结果，提示成为通用接口。",
    ],
    promptsSteps: ["用提示描述任务，代替新建模型。", "让模型生成分步答案。", "把提示视为通用 API。"],
    promptsCheckpoint: {
      prompt: "提示为何体现 LLM 通用性？",
      options: [
        {
          label: "同一模型可按不同提示完成多任务，无需专用架构。",
          correct: true,
          explanation: "提示减少专用模型需求。",
        },
        {
          label: "提示会移除语言理解。",
          correct: false,
          explanation: "提示依赖强语言理解。",
        },
        {
          label: "提示会禁止生成。",
          correct: false,
          explanation: "提示驱动生成。",
        },
      ],
    },
    fewshotTitle: "2. 少样本与 CoT",
    fewshotEyebrow: "推理强化",
    fewshotCardTitle: "示例与链式推理",
    fewshotParas: [
      "少样本：用少量示例传达隐含模式，适合难以文字定义的任务。",
      "CoT：示范推理链，让模型类比，提升复杂问题可靠性。",
    ],
    fewshotSteps: ["提供 1–少量示例刻画任务。", "要求模型按步骤推理。", "比较直接回答与 CoT 答案。"],
    fewshotCheckpoint: {
      prompt: "Chain-of-Thought 如何改进回答？",
      options: [
        {
          label: "鼓励先展示中间推理，再给最终答案。",
          correct: true,
          explanation: "结构化步骤降低复杂任务错误。",
        },
        {
          label: "隐藏推理过程。",
          correct: false,
          explanation: "CoT 强调显式推理链。",
        },
        {
          label: "移除示例。",
          correct: false,
          explanation: "CoT 可与示例结合。",
        },
      ],
    },
    scalingTitle: "3. 扩展定律",
    scalingEyebrow: "规模-数据-算力",
    scalingCardTitle: "性能与资源",
    scalingParas: [
      "性能随参数、数据、算力可预测提升，但资源消耗大。",
      "挑战：数据枯竭、能耗与算力成本高企。",
    ],
    scalingSteps: ["同步放大参数/数据/算力获取收益。", "关注收益递减与资源压力。", "规划投入与收益平衡。"],
    scalingCheckpoint: {
      prompt: "扩展定律意味着什么？",
      options: [
        {
          label: "更大模型+更多数据/算力通常更强，但资源成本更高。",
          correct: true,
          explanation: "性能与成本一起增长。",
        },
        {
          label: "性能与规模无关。",
          correct: false,
          explanation: "经验表明规模重要。",
        },
        {
          label: "扩展后不再需要数据。",
          correct: false,
          explanation: "数据仍必不可少。",
        },
      ],
    },
    ragTitle: "4. 检索增强生成 (RAG)",
    ragEyebrow: "降低幻觉",
    ragCardTitle: "外部知识 + 生成",
    ragParas: [
      "RAG 检索相关资料并引导生成，减少幻觉、及时更新知识，降低模型记忆负担。",
      "无需频繁重训巨模也能获取新信息。",
    ],
    ragSteps: ["检索最新/相关资料。", "将资料与提示一起输入生成模型。", "对比有/无检索的回答。"],
    ragCheckpoint: {
      prompt: "RAG 主要解决什么问题？",
      options: [
        {
          label: "通过检索支撑答案，减少幻觉并保持信息新鲜。",
          correct: true,
          explanation: "检索提供事实依据。",
        },
        {
          label: "提升 GPU 主频。",
          correct: false,
          explanation: "与硬件频率无关。",
        },
        {
          label: "移除提示。",
          correct: false,
          explanation: "RAG 仍配合提示使用。",
        },
      ],
    },
    multiTitle: "5. 多模态与“手脚”",
    multiEyebrow: "眼耳手",
    multiCardTitle: "超越文本",
    multiParas: [
      "多模态 LLM 融合文本、图像、音频、视频，映射到统一概念空间（如“牛”的文字、图像、声音）。",
      "工具/执行能力（“手脚”）让 LLM 生成代码或控制设备（如无人机），进入物理世界。",
    ],
    multiSteps: ["加入视觉/听觉等感知。", "用生成代码/API 控制工具或机器人。", "评估各模态解锁的应用。"],
    multiCheckpoint: {
      prompt: "为何要给 LLM 加多模态或工具？",
      options: [
        {
          label: "让模型感知并行动于文本之外，拓展任务与真实世界影响力。",
          correct: true,
          explanation: "模态+工具拓宽能力边界。",
        },
        {
          label: "移除语言能力。",
          correct: false,
          explanation: "是在语言能力之上扩展。",
        },
        {
          label: "保证零能耗。",
          correct: false,
          explanation: "仍需计算资源。",
        },
      ],
    },
    summaryTitle: "本节小结",
    summaryEyebrow: "要点回顾",
    summaryPoints: [
      "提示让单一模型多任务化，生成是通用接口。",
      "少样本 + CoT 提升推理质量。",
      "扩展定律指向性能随规模/数据/算力提升但成本上升。",
      "RAG 以检索支撑生成，降低幻觉、更新知识。",
      "多模态与工具能力让模型具备“眼耳手”，向通用智能迈进。",
    ],
  },
};
