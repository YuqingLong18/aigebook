import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { AlphaFoldPipelineToyDemo } from "../demos/AlphaFoldPipelineToyDemo";
import { ProteinFoldHierarchyDemo } from "../demos/ProteinFoldHierarchyDemo";
import { ClusteringPlaygroundDemo } from "../demos/ClusteringPlaygroundDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson4_5({ lang }: LessonProps) {
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
    { id: "alphafold", label: t.alphafoldTitle },
    { id: "butterfly", label: t.butterflyTitle },
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

        <SectionBlock id="alphafold" title={t.alphafoldTitle} eyebrow={t.alphafoldEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.alphafoldIntro}</p>
          <ProteinFoldHierarchyDemo lang={lang} />
          <AlphaFoldPipelineToyDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.alphafoldSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.alphafoldCheckpoint.prompt}
            options={t.alphafoldCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="butterfly" title={t.butterflyTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.butterflyIntro}</p>
          <ClusteringPlaygroundDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.butterflySteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.butterflyCheckpoint.prompt}
            options={t.butterflyCheckpoint.options}
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
      "了解 AI 在分子/进化生物学中的典型突破：AlphaFold 与 ButterflyNet",
      "理解 AI 通过大数据分析推动生物学创新的逻辑",
    ],
    introTitle: "导入",
    introEyebrow: "生命科学 + AI",
    intro: "生物学已进入大数据时代，从分子到生态都积累了海量信息。AI 正成为挖掘生命规律的新引擎。",
    introCardTitle: "本节聚焦",
    introCard: "两个经典案例：AlphaFold 解决蛋白结构预测；ButterflyNet 定量验证米勒拟态的共进化。",
    alphafoldTitle: "1. AlphaFold：预测蛋白结构",
    alphafoldEyebrow: "分子生物学突破",
    alphafoldIntro:
      "蛋白功能由结构决定。AlphaFold2 把折叠误差降到原子级（~1.6 Å），公开 2 亿蛋白结构；AlphaFold3 更能预测蛋白-核酸/药物相互作用，助力新药研发与疾病机理研究。",
    alphafoldSteps: [
      "回顾 Anfinsen 假说：序列决定结构。",
      "理解深度网络如何把序列映射到三维折叠与相互作用。",
      "思考 AlphaFold3 在药物设计、抗生素耐药、塑料降解酶中的潜力。",
    ],
    alphafoldCheckpoint: {
      prompt: "AlphaFold 带来的核心改变是什么？",
      options: [
        { label: "快速从氨基酸序列预测近实验精度的结构", correct: true, explanation: "大幅提效并公开 2 亿结构，验证序列→结构假说。" },
        { label: "让实验测序变得不可能", correct: false, explanation: "实验仍重要，AI 提速预测。" },
        { label: "只能处理 10 条序列", correct: false, explanation: "可覆盖已知蛋白，规模巨大。" },
        { label: "主要用来美化图片", correct: false, explanation: "目标是功能/相互作用研究与药物设计。" },
      ],
    },
    butterflyTitle: "2. ButterflyNet：量化共进化",
    butterflyIntro:
      "米勒拟态提出共生物种互相模仿外观以警示捕食者，但一直缺乏量化证据。ButterflyNet 训练向量空间，让同一亚种聚集、不同亚种分离，进而计算相似度，证明外观收敛。",
    butterflySteps: [
      "理解目标：同亚种距离近、异亚种距离远。",
      "观察嵌入空间如何量化相似度，避免主观判断。",
      "联系结论：不同物种在拟态下也可高度相似，证实共进化。",
    ],
    butterflyCheckpoint: {
      prompt: "ButterflyNet 解决的关键问题是？",
      options: [
        { label: "提供客观的外观相似度度量", correct: true, explanation: "嵌入空间量化距离，验证拟态导致的外观收敛。" },
        { label: "减少蝴蝶数量", correct: false, explanation: "目标是度量相似，而非干预数量。" },
        { label: "阻止物种进化", correct: false, explanation: "研究共进化，不是阻止进化。" },
        { label: "只需人工目测", correct: false, explanation: "恰好替代主观目测，提供量化依据。" },
      ],
    },
    summaryTitle: "3. 小结",
    summaryPoints: [
      "AI 能从序列/图像等大数据中挖掘生命规律：结构预测、相似度量化等。",
      "AlphaFold 打开分子结构与相互作用快车道；ButterflyNet 让进化研究可量化。",
      "未来 AI 将继续在基因、细胞、生态等领域成为发现新知识的引擎。",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "See flagship AI breakthroughs in molecular/evolutionary biology: AlphaFold and ButterflyNet",
      "Understand how AI + big data drive biological discovery",
    ],
    introTitle: "Overview",
    introEyebrow: "Life science meets AI",
    intro: "Biology now overflows with data—from molecules to ecosystems. AI is the engine to mine hidden patterns.",
    introCardTitle: "Focus of this lesson",
    introCard: "Two exemplars: AlphaFold solves protein structure prediction; ButterflyNet quantifies Müllerian mimicry and co-evolution.",
    alphafoldTitle: "1. AlphaFold: Protein Structures",
    alphafoldEyebrow: "Molecular biology breakthrough",
    alphafoldIntro:
      "Protein function follows structure. AlphaFold2 hit near-atomic accuracy (~1.6 Å) and released ~200M predicted structures; AlphaFold3 adds protein–nucleic acid/drug interactions, speeding drug discovery and disease mechanism studies.",
    alphafoldSteps: [
      "Recall Anfinsen’s idea: sequence determines structure.",
      "See how deep nets map sequences to 3D folds and interactions.",
      "Imagine uses: drug design, antibiotic resistance, plastic-degrading enzymes.",
    ],
    alphafoldCheckpoint: {
      prompt: "What core change did AlphaFold bring?",
      options: [
        { label: "Fast, near-experimental structure predictions from sequence", correct: true, explanation: "Validates sequence→structure and releases 200M structures." },
        { label: "Makes sequencing impossible", correct: false, explanation: "Experiments still matter; AI accelerates prediction." },
        { label: "Handles only 10 sequences", correct: false, explanation: "Covers almost all known proteins." },
        { label: "Just for pretty pictures", correct: false, explanation: "Goal is function/interaction insight and drug design." },
      ],
    },
    butterflyTitle: "2. ButterflyNet: Quantifying Mimicry",
    butterflyIntro:
      "Müllerian mimicry says co-located species mimic each other to warn predators, but evidence was subjective. ButterflyNet learns an embedding where same subspecies cluster and different ones separate, enabling objective similarity and showing appearance convergence.",
    butterflySteps: [
      "Goal: same subspecies close, different far in embedding space.",
      "See how embeddings quantify similarity vs subjective eye.",
      "Conclusion: mimicry drives cross-species appearance convergence—evidence for co-evolution.",
    ],
    butterflyCheckpoint: {
      prompt: "Key problem ButterflyNet solved?",
      options: [
        { label: "Provided an objective appearance similarity metric", correct: true, explanation: "Embeddings quantify distance, proving mimicry-driven convergence." },
        { label: "Reduced butterfly populations", correct: false, explanation: "It measures similarity; no population change." },
        { label: "Stopped evolution", correct: false, explanation: "It studies evolution; doesn’t halt it." },
        { label: "Relied only on human eyeballing", correct: false, explanation: "It replaces subjective eyeballing with metrics." },
      ],
    },
    summaryTitle: "3. Summary",
    summaryPoints: [
      "AI extracts biological patterns from sequences/images: structure prediction, similarity quantification, and more.",
      "AlphaFold opened a fast lane for structures/interactions; ButterflyNet makes evolution studies measurable.",
      "Expect AI to keep powering discovery across genes, cells, and ecosystems.",
    ],
  },
};
