import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";
import { AlphaFoldPipelineToyDemo } from "../demos/AlphaFoldPipelineToyDemo";
import { ProteinFoldHierarchyDemo } from "../demos/ProteinFoldHierarchyDemo";

type LessonProps = {
  lang: "en" | "zh";
};

export function HighLesson4_3({ lang }: LessonProps) {
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
    { id: "basic", label: isZh ? "1. 蛋白质基础知识" : "1. Basic Knowledge About Proteins" },
    { id: "anfinsen", label: isZh ? "2. Anfinsen 理论" : "2. Anfinsen’s Theory" },
    { id: "alphafold", label: isZh ? "3. AlphaFold" : "3. AlphaFold" },
    { id: "summary", label: isZh ? "本节小结" : "Section Summary" },
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

        <SectionBlock id="basic" title={t.basicTitle} eyebrow={t.basicEyebrow}>
          <InfoCard title={t.basicImportanceTitle}>
            {t.basicImportanceParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <InfoCard title={t.basicStructureTitle}>
            {t.basicStructureParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {t.basicLevels.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </InfoCard>
          <ProteinFoldHierarchyDemo lang={lang} />
          <GuidedSteps title={ui.guidedTitle} steps={t.basicSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.basicCheckpoint.prompt}
            options={t.basicCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="anfinsen" title={t.anfTitle} eyebrow={t.anfEyebrow}>
          <InfoCard title={t.anfCardTitle}>
            {t.anfParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.anfSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.anfCheckpoint.prompt}
            options={t.anfCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="alphafold" title={t.afTitle} eyebrow={t.afEyebrow}>
          <InfoCard title={t.af12Title}>
            {t.af12Paras.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <AlphaFoldPipelineToyDemo lang={lang} />
          <InfoCard title={t.afUniverseTitle}>
            {t.afUniverseParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <InfoCard title={t.af3Title}>
            {t.af3Paras.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </InfoCard>
          <GuidedSteps title={ui.guidedTitle} steps={t.afSteps} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.afCheckpoint.prompt}
            options={t.afCheckpoint.options}
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
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.summaryCheckpoint.prompt}
            options={t.summaryCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>
      </div>
    </div>
  );
}

const content = {
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand the central role of proteins in life processes, master the composition and structural hierarchy of proteins, and how their spatial structure determines biological function.",
      "Learn the principles and limitations of traditional methods for protein structure analysis (NMR, X-ray crystallography, cryo-electron microscopy), and understand the technical challenges involved.",
      "Understand Anfinsen’s theory, master how amino acid sequences determine a protein’s final structure, and recognize the potential of computational protein structure prediction.",
      "Grasp the basic principles of AlphaFold, understand the model framework of AlphaFold2, and recognize its groundbreaking contribution to protein structure prediction.",
      "Learn about the latest developments in AlphaFold3, understand its role in predicting biomolecular interactions, and explore its applications in drug development, disease research, and personalized medicine.",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "AI accelerates life science",
    introText:
      "Protein function is determined by spatial structure, but resolving structures has long been a challenge. Traditional experiments are slow and expensive. AlphaFold2 dramatically improved speed and accuracy, propelling life science forward, and AlphaFold3 further expands to interactions.",

    basicTitle: "1. Basic Knowledge About Proteins",
    basicEyebrow: "Structure determines function",
    basicImportanceTitle: "1) The importance of proteins",
    basicImportanceParas: [
      "Proteins are the foundation of life, participating in nearly all physiological activities. They are essential components of cells. In humans, skin, muscles, bones, nerves, and blood all contain large amounts of proteins. Proteins make up about 16–20% of total body weight.",
      "Proteins maintain normal biological operations: hemoglobin transports oxygen; enzymatic proteins catalyze biochemical reactions; immunoglobulins defend against pathogens; photoreceptive proteins in cone cells help us perceive color.",
      "Without proteins, organisms could not sustain basic physiological processes. Proteins are commonly known as the foundation of life and a crucial subject of biological research.",
    ],
    basicStructureTitle: "2) Protein composition, structure, and function",
    basicStructureParas: [
      "Amino acids are the basic building blocks of proteins, mainly composed of carbon, hydrogen, oxygen, and nitrogen (some include sulfur, phosphorus, iron, zinc, etc.). Inside cells, amino acids link by dehydration synthesis to form a peptide chain. A chain with more than 10 amino acids is a polypeptide; over 50 is considered a protein.",
      "A protein’s specific function mainly depends on the spatial structure formed by folding of its peptide chain. Protein structure is typically divided into four levels:",
      "Structure strongly relates to function; proteins can denature under heat or chemical changes (e.g., egg solidifying when heated). Therefore, analyzing spatial structure is crucial for understanding biological roles and binding capabilities.",
      "Traditional methods include NMR, X-ray crystallography, and cryo-electron microscopy, but they require expensive equipment, complex procedures, and substantial time. Around 170,000 structures have been identified, while over 200 million known proteins still await determination—highlighting the value of fast prediction.",
    ],
    basicLevels: [
      "Primary structure: the sequence of amino acids in the peptide chain.",
      "Secondary structure: local folding, typically alpha-helices or beta-sheets.",
      "Tertiary structure: further 3D folding into a unique shape.",
      "Quaternary structure: in some proteins, multiple peptide chains combine into more complex structures.",
    ],
    basicSteps: [
      "Identify what “primary structure” means (sequence).",
      "Explain why structure affects function (binding, denaturation).",
      "Relate the four levels to the idea of “sequence → fold → function”.",
    ],
    basicCheckpoint: {
      prompt: "Which level of protein structure refers to the amino acid sequence?",
      options: [
        {
          label: "Primary structure.",
          correct: true,
          explanation: "Primary structure is defined as the amino acid sequence in the peptide chain.",
        },
        {
          label: "Tertiary structure.",
          correct: false,
          explanation: "Tertiary structure is the overall 3D fold built from local motifs.",
        },
      ],
    },

    anfTitle: "2. Anfinsen’s Theory",
    anfEyebrow: "Sequence determines native structure",
    anfCardTitle: "A key idea (1961)",
    anfParas: [
      "In 1961, Nobel laureate Christian Anfinsen proposed a key theory about the relationship between a protein’s spatial structure and its amino acid sequence.",
      "Anfinsen found that when a protein becomes denatured under certain conditions, it can sometimes spontaneously return to its original functional structure if placed back into a suitable environment.",
      "Based on this, he proposed that a protein’s amino acid sequence determines its “native structure”—the most stable, lowest-energy state that sequence can form. Conditions like temperature or pH may shift the conformation.",
      "This suggests that if we know the amino acid sequence, we should theoretically be able to predict the native structure—an ideal solution because sequencing is mature and prediction would greatly increase efficiency.",
    ],
    anfSteps: [
      "Define “native structure” as the lowest-energy stable state.",
      "Connect denaturation + recovery to the idea of refolding in suitable conditions.",
      "Explain why this motivates computational structure prediction from sequence.",
    ],
    anfCheckpoint: {
      prompt: "According to Anfinsen’s theory, what determines a protein’s native structure?",
      options: [
        {
          label: "Its amino acid sequence (in a suitable environment) determines the lowest-energy native structure.",
          correct: true,
          explanation: "Anfinsen’s theory states the sequence determines the most stable (lowest-energy) fold.",
        },
        {
          label: "Only the microscope used to observe it.",
          correct: false,
          explanation: "Observation tools do not determine the physical structure; sequence and conditions do.",
        },
      ],
    },

    afTitle: "3. AlphaFold",
    afEyebrow: "End-to-end prediction",
    af12Title: "1) From AlphaFold1 to AlphaFold2",
    af12Paras: [
      "In 2018, DeepMind began using AI to predict protein structures and developed AlphaFold1. Results were promising but not yet at practical research standards; it laid foundations.",
      "In 2020, AlphaFold2 marked a major leap: prediction error was only 1.6 Å, approaching experimental precision (Figure 4-19).",
      "AlphaFold2 uses an end-to-end neural network: input an amino acid sequence and output a 3D structure (Figure 4-20). Two key information sources are used: gene databases (homologous sequences and co-variation constraints) and protein structure databases (structural references/templates).",
      "By 2022, over 500,000 scientists across 190+ countries adopted AlphaFold for drug design, disease mechanism exploration, and more.",
    ],
    afUniverseTitle: "2) Mapping the protein universe",
    afUniverseParas: [
      "In July 2022, DeepMind announced it completed structure predictions for 200 million proteins across millions of species and released them via the AlphaFold database for global researchers.",
    ],
    af3Title: "3) AlphaFold3",
    af3Paras: [
      "On May 8, 2024, DeepMind released AlphaFold3, which can predict structures and interactions of various biomolecules—proteins, nucleic acids, ions, and drug molecules—ushering in a new era for life sciences.",
      "Understanding molecular interactions reveals life processes and helps explain diseases caused by dysfunctions at the molecular level. AlphaFold3 can accelerate research on disease mechanisms and development of personalized treatments.",
    ],
    afSteps: [
      "State what AlphaFold2 takes as input and what it outputs.",
      "Name the two key information sources: gene databases and structure databases.",
      "Explain how AlphaFold3 extends the target from structures to interactions.",
    ],
    afCheckpoint: {
      prompt: "AlphaFold2’s prediction process incorporates two key information sources. Which pair is correct?",
      options: [
        {
          label: "Gene databases (homologs/co-variation) and protein structure databases (templates).",
          correct: true,
          explanation: "The text describes gene and structure databases as the two key sources.",
        },
        {
          label: "Only microscope photos and only a dictionary of atoms.",
          correct: false,
          explanation: "The described system leverages sequence homology/co-variation and structural references.",
        },
      ],
    },

    summaryTitle: "Section Summary",
    summaryEyebrow: "Key takeaways",
    summaryPoints: [
      "Proteins are central to life, and their function depends on spatial structure; traditional structure determination methods are slow and expensive.",
      "Anfinsen’s theory suggests the amino acid sequence determines the most stable native structure, motivating prediction from sequence.",
      "AlphaFold2 uses an end-to-end model to predict 3D structure from sequence, leveraging gene databases and structure databases, with near-experimental accuracy.",
      "AlphaFold3 further predicts biomolecular interactions, supporting drug development and disease research.",
      "AI has become an essential tool in biology and is expected to increasingly integrate with life sciences.",
    ],
    summaryCheckpoint: {
      prompt: "Why is fast protein structure prediction significant?",
      options: [
        {
          label: "Because experimental methods are time-consuming/expensive and many proteins still lack determined structures.",
          correct: true,
          explanation: "The text contrasts slow experiments with massive unmet demand for structures.",
        },
        {
          label: "Because protein function is unrelated to structure.",
          correct: false,
          explanation: "The text states structure determines function.",
        },
      ],
    },
  },
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解蛋白质在生命过程中的核心作用，掌握蛋白质的组成与结构层级，以及空间结构如何决定生物功能。",
      "了解传统蛋白质结构解析方法（NMR、X 射线晶体学、冷冻电镜）的原理与局限，理解其中的技术挑战。",
      "理解 Anfinsen 理论，掌握氨基酸序列如何决定蛋白质最终结构，认识计算预测蛋白质结构的潜力。",
      "掌握 AlphaFold 的基本原理，理解 AlphaFold2 的模型框架，认识其对蛋白质结构预测的突破性贡献。",
      "了解 AlphaFold3 的最新进展，理解其在预测生物分子相互作用中的角色，并探索其在药物研发、疾病研究与个性化医疗中的应用。",
    ],
    introTitle: "开篇理解",
    introEyebrow: "AI 加速生命科学",
    introText:
      "蛋白质的功能由其空间结构决定，但准确解析结构长期以来都是生物学难题。传统实验方法耗时昂贵。AlphaFold2 显著提升了结构预测的速度与精度，推动生命科学发展；AlphaFold3 进一步扩展到分子相互作用预测。",

    basicTitle: "1. 蛋白质基础知识",
    basicEyebrow: "结构决定功能",
    basicImportanceTitle: "1) 蛋白质的重要性",
    basicImportanceParas: [
      "蛋白质是生命的基础，参与人体几乎所有生理活动，也是细胞的重要组成部分。以人体为例，皮肤、肌肉、骨骼、神经与血液都含有大量蛋白质，蛋白质约占体重的 16–20%。",
      "蛋白质维持正常生命活动：血红蛋白运输氧气；酶催化代谢反应；免疫球蛋白识别并抵御病原体；视锥细胞中的感光蛋白帮助我们感知颜色。",
      "可以说没有蛋白质，生命难以维持。因此蛋白质被称为“生命的基础”，也是生物学研究的重要对象。",
    ],
    basicStructureTitle: "2) 组成、结构与功能",
    basicStructureParas: [
      "氨基酸是蛋白质的基本构件，主要由碳、氢、氧、氮组成（有的还含硫、磷、铁、锌等）。细胞内氨基酸通过脱水缩合连接成肽链。一般 10 个以上氨基酸的肽链称为多肽，50 个以上称为蛋白质。",
      "蛋白质的功能主要取决于肽链折叠形成的空间结构。蛋白质结构通常分为四个层级：",
      "结构与功能紧密相关：蛋白质在高温或化学环境变化下可能变性（结构破坏导致功能丧失），如鸡蛋加热凝固就是蛋白质结构变化的结果。因此解析空间结构对理解生物功能与结合能力至关重要。",
      "长期以来科学家依赖 NMR、X 射线晶体学与冷冻电镜解析结构，但设备昂贵、流程复杂且耗时。已解析结构约 17 万个，而已知蛋白质超过 2 亿仍待解析，体现了快速预测的重要性。",
    ],
    basicLevels: [
      "一级结构：肽链中的氨基酸序列。",
      "二级结构：肽链的局部折叠，常见为 α 螺旋或 β 折叠。",
      "三级结构：由二级结构进一步折叠形成的三维整体形态。",
      "四级结构：某些蛋白质由多条肽链组合形成更复杂结构。",
    ],
    basicSteps: [
      "指出“一级结构”就是序列。",
      "说明结构如何影响功能（结合、变性）。",
      "把四级层次与“序列 → 折叠 → 功能”的链条对应起来。",
    ],
    basicCheckpoint: {
      prompt: "哪一层蛋白质结构指的是氨基酸序列？",
      options: [
        {
          label: "一级结构。",
          correct: true,
          explanation: "一级结构定义为肽链中的氨基酸序列。",
        },
        {
          label: "三级结构。",
          correct: false,
          explanation: "三级结构是整体三维折叠形态。",
        },
      ],
    },

    anfTitle: "2. Anfinsen 理论",
    anfEyebrow: "序列决定天然结构",
    anfCardTitle: "关键思想（1961）",
    anfParas: [
      "1961 年，诺奖得主 Christian Anfinsen 提出了蛋白质空间结构与氨基酸序列关系的关键理论。",
      "他发现：蛋白质在某些条件下变性（空间结构被破坏）后，如果回到合适环境，有时能够自发恢复到原本具有功能的结构。",
      "据此他提出：蛋白质的氨基酸序列决定其“天然结构”（native structure）——该序列在给定条件下能形成的最低能量、最稳定状态。温度、pH 等改变会使结构转向其他构象。",
      "这意味着只要知道序列，理论上就可预测天然结构。由于测序技术成熟，这为提高结构解析效率提供了理想路径。",
    ],
    anfSteps: [
      "把“天然结构”定义为最低能量的稳定构象。",
      "把“变性→恢复”与“在合适环境下可自发折叠”联系起来。",
      "说明为何这启发了从序列预测结构的计算方法。",
    ],
    anfCheckpoint: {
      prompt: "按 Anfinsen 理论，蛋白质的天然结构由什么决定？",
      options: [
        {
          label: "氨基酸序列（在合适环境下）决定最低能量的天然结构。",
          correct: true,
          explanation: "理论核心是：序列决定最稳定（最低能量）构象。",
        },
        {
          label: "只由观测仪器决定。",
          correct: false,
          explanation: "观测工具不会决定结构；序列与条件才是关键。",
        },
      ],
    },

    afTitle: "3. AlphaFold",
    afEyebrow: "端到端预测",
    af12Title: "1) 从 AlphaFold1 到 AlphaFold2",
    af12Paras: [
      "2018 年，DeepMind 开始用 AI 预测蛋白质结构，开发 AlphaFold1。它在既有基础上取得进展，但尚未达到研究级实用标准，为后续突破奠定基础。",
      "2020 年 AlphaFold2 取得重大飞跃：预测误差仅 1.6 Å，接近实验精度（图 4-19）。",
      "AlphaFold2 采用端到端神经网络：输入氨基酸序列，输出三维结构（图 4-20）。其预测过程融合两类关键信息：基因数据库（同源序列与氨基酸共变约束）与蛋白质结构数据库（相似结构的参考模板）。",
      "据 DeepMind 统计，至 2022 年已有来自 190 多个国家的 50 万以上科学家在药物设计、疾病机制研究等工作中使用 AlphaFold。",
    ],
    afUniverseTitle: "2) 绘制“蛋白质宇宙”",
    afUniverseParas: [
      "2022 年 7 月，DeepMind 宣布完成对 2 亿个蛋白质的结构预测，覆盖数百万物种，并通过 AlphaFold 数据库向全球研究者免费开放。",
    ],
    af3Title: "3) AlphaFold3",
    af3Paras: [
      "2024 年 5 月 8 日，DeepMind 发布 AlphaFold3，可自动预测多种生物分子的结构与相互作用，开启生命科学新阶段。",
      "与 AlphaFold2 相比，AlphaFold3 不仅预测蛋白质与核酸的三维结构，还能建模它们与离子、药物分子等的相互作用，从而帮助理解生命过程与疾病机制，并加速个性化治疗研究。",
    ],
    afSteps: [
      "说明 AlphaFold2 的输入与输出。",
      "说出两类关键信息来源：基因数据库与结构数据库。",
      "解释 AlphaFold3 如何把任务扩展到“相互作用预测”。",
    ],
    afCheckpoint: {
      prompt: "AlphaFold2 的预测过程融合了哪两类关键信息来源？",
      options: [
        {
          label: "基因数据库（同源/共变）与蛋白质结构数据库（结构参考）。",
          correct: true,
          explanation: "文本明确指出这两类来源为关键约束与参考。",
        },
        {
          label: "只需要显微镜照片与原子字典。",
          correct: false,
          explanation: "描述中强调的是同源共变约束与结构模板参考。",
        },
      ],
    },

    summaryTitle: "本节小结",
    summaryEyebrow: "关键要点",
    summaryPoints: [
      "蛋白质在生命过程中至关重要，其功能由空间结构决定；传统解析方法耗时昂贵。",
      "Anfinsen 理论指出：氨基酸序列决定最低能量的天然结构，为从序列预测结构提供理论基础。",
      "AlphaFold2 用端到端模型从序列预测三维结构，并融合基因数据库与结构数据库信息，精度接近实验水平。",
      "AlphaFold3 进一步预测生物分子相互作用，服务药物研发与疾病研究。",
      "AI 已成为生物学研究的重要工具，未来将更深度融入生命科学。",
    ],
    summaryCheckpoint: {
      prompt: "为什么快速预测蛋白质结构具有重大意义？",
      options: [
        {
          label: "因为实验方法耗时昂贵，而仍有大量蛋白质结构尚未解析。",
          correct: true,
          explanation: "文本对比了实验的高成本与结构缺口，强调预测价值。",
        },
        {
          label: "因为蛋白质功能与结构无关。",
          correct: false,
          explanation: "文本强调：结构决定功能。",
        },
      ],
    },
  },
} as const;

