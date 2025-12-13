import { useMemo, useState } from "react";
import { Checkpoint } from "../components/Checkpoint";
import { GuidedSteps } from "../components/GuidedSteps";
import { InfoCard } from "../components/InfoCard";
import { LessonToc } from "../components/LessonToc";
import { SectionBlock } from "../components/SectionBlock";

type LessonProps = {
  lang: "en" | "zh";
};

export function MiddleLesson3_4({ lang }: LessonProps) {
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
    { id: "bio", label: t.bioTitle },
    { id: "chem", label: t.chemTitle },
    { id: "astro", label: t.astroTitle },
    { id: "medicine", label: t.medTitle },
    { id: "reasons", label: t.reasonsTitle },
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

        <SectionBlock id="bio" title={t.bioTitle} eyebrow={t.bioEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.bioIntro}</p>
          <BioPanel lang={lang} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.bioCheckpoint.prompt}
            options={t.bioCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="chem" title={t.chemTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.chemIntro}</p>
          <ChemPanel lang={lang} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.chemCheckpoint.prompt}
            options={t.chemCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="astro" title={t.astroTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.astroIntro}</p>
          <AstroPanel lang={lang} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.astroCheckpoint.prompt}
            options={t.astroCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="medicine" title={t.medTitle}>
          <p className="text-sm leading-relaxed text-slate-700">{t.medIntro}</p>
          <MedPanel lang={lang} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.medCheckpoint.prompt}
            options={t.medCheckpoint.options}
            resetLabel={ui.reset}
            correctLabel={ui.correctLabel}
            incorrectLabel={ui.incorrectLabel}
          />
        </SectionBlock>

        <SectionBlock id="reasons" title={t.reasonsTitle} eyebrow={t.reasonsEyebrow}>
          <p className="text-sm leading-relaxed text-slate-700">{t.reasonsIntro}</p>
          <ReasonsList lang={lang} />
          <Checkpoint
            tagLabel={ui.checkpointTag}
            prompt={t.reasonsCheckpoint.prompt}
            options={t.reasonsCheckpoint.options}
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

function BioPanel({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const [focus, setFocus] = useState<"structure" | "microscope">("structure");
  const notes: Record<typeof focus, string> = {
    structure: isZh
      ? "AlphaFold 用深度网络预测蛋白 3D 结构，极大提速疾病/药物研究。"
      : "AlphaFold predicts protein 3D structures, speeding disease/drug research.",
    microscope: isZh
      ? "AI 显微镜重建高清细胞图像，观察动态过程，助力病理研究。"
      : "AI microscopes reconstruct clearer cell images to observe dynamics for pathology.",
  };
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex gap-2">
        {[
          { key: "structure", label: isZh ? "蛋白结构" : "Protein structure" },
          { key: "microscope", label: isZh ? "AI 显微镜" : "AI microscope" },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setFocus(tab.key as typeof focus)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              focus === tab.key
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-sm text-slate-800">{notes[focus]}</p>
    </div>
  );
}

function ChemPanel({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const [focus, setFocus] = useState<"robot" | "smiles">("robot");
  const notes: Record<typeof focus, string> = {
    robot: isZh
      ? "自动化实验机器人 24/7 工作，精确操作危险环境，记录可复现。"
      : "Automated lab robots work 24/7, precise in hazardous settings, fully logged.",
    smiles: isZh
      ? "用 SMILES 等编码+深度学习预测分子属性，加速新药发现。"
      : "Encode molecules (SMILES) + deep nets to predict properties—accelerates drug discovery.",
  };
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex gap-2">
        {[
          { key: "robot", label: isZh ? "自动实验" : "Automated lab" },
          { key: "smiles", label: "SMILES/预测" },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setFocus(tab.key as typeof focus)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              focus === tab.key
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-sm text-slate-800">{notes[focus]}</p>
    </div>
  );
}

function AstroPanel({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const [focus, setFocus] = useState<"data" | "simulate">("data");
  const notes: Record<typeof focus, string> = {
    data: isZh
      ? "FAST 等望远镜日均 TB 级数据，AI 用于筛噪、识别天体与事件。"
      : "FAST and telescopes produce TBs/day; AI filters noise, finds bodies/events.",
    simulate: isZh
      ? "AI 模拟星系/暗物质演化，验证宇宙理论，预测轨道扰动。"
      : "AI simulates galaxy/dark matter evolution, tests theories, predicts orbital shifts.",
  };
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex gap-2">
        {[
          { key: "data", label: isZh ? "大数据分析" : "Big data" },
          { key: "simulate", label: isZh ? "宇宙模拟" : "Simulation" },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setFocus(tab.key as typeof focus)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              focus === tab.key
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-sm text-slate-800">{notes[focus]}</p>
    </div>
  );
}

function MedPanel({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const [focus, setFocus] = useState<"diagnosis" | "health">("diagnosis");
  const notes: Record<typeof focus, string> = {
    diagnosis: isZh
      ? "AI 诊断：眼底病变、乳腺癌筛查等，提高效率与早筛精度。"
      : "AI diagnosis: retinal disease, breast cancer screening—higher efficiency/early detect.",
    health: isZh
      ? "健康管理：可穿戴+AI 监测心率/血压，预测慢病风险，个性化建议。"
      : "Health mgmt: wearables + AI track vitals, predict chronic risks, give tips.",
  };
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex gap-2">
        {[
          { key: "diagnosis", label: isZh ? "疾病诊断" : "Diagnosis" },
          { key: "health", label: isZh ? "健康管理" : "Health mgmt" },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setFocus(tab.key as typeof focus)}
            className={[
              "rounded-full border px-3 py-1 text-xs font-semibold transition",
              focus === tab.key
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
            ].join(" ")}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-sm text-slate-800">{notes[focus]}</p>
    </div>
  );
}

function ReasonsList({ lang }: { lang: "en" | "zh" }) {
  const isZh = lang === "zh";
  const reasons = useMemo(
    () => [
      isZh ? "传统学科遇瓶颈，需新工具破局" : "Mature disciplines hit bottlenecks—need new tools",
      isZh ? "多领域数据爆炸，AI 可挖掘隐藏模式" : "Data explosion; AI can mine hidden patterns",
      isZh ? "算法（深度/大模型）推理力提高，甚至超人" : "Algorithms (deep/LLM) gain strong reasoning, sometimes beyond humans",
    ],
    [isZh],
  );
  return (
    <InfoCard title={isZh ? "为何 AI 融合更深？" : "Why deeper AI integration?"}>
      <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
        {reasons.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
    </InfoCard>
  );
}

const content = {
  zh: {
    learningObjectivesTitle: "学习目标",
    learningObjectives: [
      "理解 AI 与生物、化学、天文、医学等学科交叉的典型案例。",
      "理解 AI 为传统学科带来革命性突破的原因。",
      "思考交叉融合对社会与科技的深远影响。",
    ],
    introTitle: "开篇理解",
    introEyebrow: "交叉融合",
    intro:
      "AI 正深度进入传统学科，突破蛋白结构、化学实验、天文观测、医疗诊断等瓶颈，成为科技“新基建”。",
    introCardTitle: "核心思路",
    introCard: "数据+算法+算力 → 让 AI 成为科学家新的伙伴与工具。",
    bioTitle: "1. AI + 生物",
    bioEyebrow: "蛋白与显微",
    bioIntro:
      "AlphaFold 预测蛋白结构，公开全球蛋白数据；AI 显微镜重建高清细胞图像，观测动态过程。",
    bioCheckpoint: {
      prompt: "AlphaFold 的价值在于：",
      options: [
        { label: "快速预测蛋白 3D 结构，提速药物与生命研究", correct: true, explanation: "核心贡献。" },
        { label: "只能手工绘图", correct: false, explanation: "它是深度模型。" },
        { label: "只提升光学镜头质量", correct: false, explanation: "与镜头无关，是算法预测。" },
      ],
    },
    chemTitle: "2. AI + 化学",
    chemIntro:
      "机器人自动实验 24/7、精确安全；SMILES+深度学习预测分子属性，加速新药发现。",
    chemCheckpoint: {
      prompt: "化学自动化机器人的优势不包括：",
      options: [
        { label: "可在有毒/放射环境安全工作", correct: false, explanation: "这是优势。" },
        { label: "可 24/7 不疲劳", correct: false, explanation: "也是优势。" },
        { label: "必须人工手写实验记录", correct: true, explanation: "它自动记录实验。" },
      ],
    },
    astroTitle: "3. AI + 天文",
    astroIntro:
      "FAST 等望远镜产生海量数据，AI 去噪、识别新星体；AI 模拟星系/暗物质演化验证理论、预测轨道。",
    astroCheckpoint: {
      prompt: "AI 在天文大数据中的作用是：",
      options: [
        { label: "从噪声中筛出天体/事件", correct: true, explanation: "关键应用。" },
        { label: "减少观测数据量", correct: false, explanation: "数据仍巨大。" },
        { label: "不允许发现新星体", correct: false, explanation: "正相反。" },
      ],
    },
    medTitle: "4. AI + 医学",
    medIntro:
      "AI 辅助诊断眼底病、乳腺癌等；可穿戴+AI 做健康监测与慢病风险预测，提供个性化建议。",
    medCheckpoint: {
      prompt: "健康管理中的 AI 可：",
      options: [
        { label: "实时监测心率/血压并预测慢病风险", correct: true, explanation: "这是其作用。" },
        { label: "完全取代医生交流", correct: false, explanation: "是辅助，不是替代沟通。" },
        { label: "只在医院内工作", correct: false, explanation: "可穿戴在日常使用。" },
      ],
    },
    reasonsTitle: "5. 为什么融合更深",
    reasonsEyebrow: "逻辑",
    reasonsIntro:
      "传统学科瓶颈+数据爆炸+算法（深度/大模型）推理增强，使 AI 成为攻克复杂科学问题的关键。",
    reasonsCheckpoint: {
      prompt: "AI 融合传统学科的推动因素不包括：",
      options: [
        { label: "学科问题复杂度提高", correct: false, explanation: "是推动因素。" },
        { label: "数据规模巨大", correct: false, explanation: "是推动因素。" },
        { label: "算力和算法完全停滞", correct: true, explanation: "算力/算法在进步，而非停滞。" },
      ],
    },
    summaryTitle: "小结",
    summaryPoints: [
      "AI 成为科学家的新型基础设施，广泛赋能生物、化学、天文、医学等。",
      "融合源于瓶颈、数据、算法/算力突破。",
      "跨学科进展将持续带来社会与科技飞跃。",
    ],
  },
  en: {
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "See typical crossovers of AI with biology, chemistry, astronomy, medicine.",
      "Understand why AI yields breakthroughs in traditional disciplines.",
      "Consider the impact of integration on society/technology.",
    ],
    introTitle: "Opening Idea",
    introEyebrow: "Intersection & integration",
    intro:
      "AI is deeply entering traditional fields—protein folding, chemical labs, astronomy, medicine—becoming new scientific infrastructure.",
    introCardTitle: "Core idea",
    introCard: "Data + algorithms + compute make AI a new partner for science.",
    bioTitle: "1. AI + Biology",
    bioEyebrow: "Protein & microscopy",
    bioIntro:
      "AlphaFold predicts protein 3D structures; AI microscopes rebuild clearer cell imagery to watch dynamics.",
    bioCheckpoint: {
      prompt: "AlphaFold’s value:",
      options: [
        { label: "Fast 3D protein prediction accelerates disease/drug research", correct: true, explanation: "Core benefit." },
        { label: "Only draws by hand", correct: false, explanation: "It’s a model." },
        { label: "Only improves lens quality", correct: false, explanation: "It’s computational." },
      ],
    },
    chemTitle: "2. AI + Chemistry",
    chemIntro:
      "Robots automate experiments 24/7; SMILES + deep learning predict molecular properties, speeding drug discovery.",
    chemCheckpoint: {
      prompt: "NOT an advantage of lab robots:",
      options: [
        { label: "Safe in toxic/radioactive settings", correct: false, explanation: "It’s an advantage." },
        { label: "Work nonstop without fatigue", correct: false, explanation: "Advantage too." },
        { label: "Require handwritten records by humans", correct: true, explanation: "They auto-log experiments." },
      ],
    },
    astroTitle: "3. AI + Astronomy",
    astroIntro:
      "FAST etc. produce massive data; AI denoises and finds objects/events; simulations model galaxies/dark matter to test theories.",
    astroCheckpoint: {
      prompt: "AI’s role in astro big data:",
      options: [
        { label: "Filter noise and find celestial events", correct: true, explanation: "Key use." },
        { label: "Shrink data collection", correct: false, explanation: "Data stays huge." },
        { label: "Ban discovery of new bodies", correct: false, explanation: "Opposite." },
      ],
    },
    medTitle: "4. AI + Medicine",
    medIntro:
      "AI aids diagnosis (retina, breast cancer); wearables + AI monitor vitals, predict chronic risks, give personalized tips.",
    medCheckpoint: {
      prompt: "In health management AI can:",
      options: [
        { label: "Monitor heart rate/blood pressure and predict chronic risks", correct: true, explanation: "Core function." },
        { label: "Fully replace doctor communication", correct: false, explanation: "It’s assistive." },
        { label: "Only work inside hospitals", correct: false, explanation: "Wearables work daily." },
      ],
    },
    reasonsTitle: "5. Why deeper integration",
    reasonsEyebrow: "Logic",
    reasonsIntro:
      "Discipline bottlenecks + data explosion + improved algorithms/compute make AI key to hard scientific problems.",
    reasonsCheckpoint: {
      prompt: "NOT a driver of integration:",
      options: [
        { label: "Higher problem complexity", correct: false, explanation: "It is a driver." },
        { label: "Huge data scales", correct: false, explanation: "Also a driver." },
        { label: "Stalled compute/algorithms", correct: true, explanation: "Compute/algorithms advanced, not stalled." },
      ],
    },
    summaryTitle: "Summary",
    summaryPoints: [
      "AI is new infrastructure empowering bio/chem/astro/medicine.",
      "Integration driven by bottlenecks, data, and algorithm/compute leaps.",
      "Cross-disciplinary progress will fuel societal/tech breakthroughs.",
    ],
  },
};
